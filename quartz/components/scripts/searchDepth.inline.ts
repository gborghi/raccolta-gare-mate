// Tiered depth search — same mechanism as letteratura-inglese (searchDepth.inline.ts).
// Loads search-t{0..3}.json. Boolean syntax lives in searchDepth.ts and must not
// be bypassed: no toLowerCase() on the raw query before parseBooleanQuery.
// idsForTerm uses t.v. After FlexSearch, docMatchesBool drops quoted-word false positives.
//
// Mate atoms are the quesiti (`page#qNN`). Phones load through tier 2 so a question
// word is searchable without the desktop-only Max tier. No semantic tier (no embeddings).
import FlexSearch from "flexsearch"
import {
  Doc,
  Entry,
  mergeTier,
  clampStop,
  parseBooleanQuery,
  queryTerms,
  docMatchesBool,
  intersectIds,
  unionIds,
  fieldsMatchQuery,
  type BoolOp,
} from "./searchDepth"

const CANDIDATE_LIMIT = 20000
const BUILD_CHUNK = 400
const RESULTS_PER_PAGE = 20
const ATOM_STOP = 2

const store = new Map<string, Doc>()
let index: any = null
let activeStop = -1
let fetchedStop = -1
let building = false
let queuedStop: number | null = null

function yieldToUI(): Promise<void> {
  return new Promise((r) => setTimeout(r, 0))
}

function basePath(): string {
  return document.body.dataset.basepath ?? ""
}
function isMobile(): boolean {
  return matchMedia("(max-width: 800px)").matches || matchMedia("(pointer: coarse)").matches
}
// English clamps phones to tier 1 (works only). Mate quesiti are `#` atoms, so phones
// must reach tier 2 or the overlay finds no questions. Max (t3) stays desktop-only.
function mateClamp(stop: number): number {
  let s = clampStop(stop, false)
  if (isMobile() && s > ATOM_STOP) s = ATOM_STOP
  return s
}
function newIndex(): any {
  return new (FlexSearch as any).Document({
    document: { id: "id", index: ["title", "content", "tags"], store: false },
    tokenize: "forward",
  })
}

async function fetchJson(file: string): Promise<any> {
  try {
    const r = await fetch(`${basePath()}/static/${file}`)
    return r.ok ? await r.json() : null
  } catch {
    return null
  }
}

async function mergeFile(file: string): Promise<void> {
  const j = await fetchJson(file)
  if (!j) return
  if (Array.isArray(j.buckets)) {
    for (const b of j.buckets) await mergeFile(b)
    return
  }
  mergeTier(store, (j.entries ?? []) as Entry[])
}

function stopFile(s: number): string {
  return ["search-t0.json", "search-t1.json", "search-t2.json", "search-t3.json"][s]
}

function docsForStop(target: number): Doc[] {
  const all = [...store.values()]
  return target >= ATOM_STOP ? all : all.filter((d) => !d.id.includes("#"))
}

async function buildIndex(target: number): Promise<any> {
  const idx = newIndex()
  let i = 0
  for (const d of docsForStop(target)) {
    idx.add({ id: d.id, title: d.title, content: d.content, tags: (d.tags || []).join(" ") })
    if (++i % BUILD_CHUNK === 0) await yieldToUI()
  }
  return idx
}

async function setDepth(target: number, onSwap?: () => void): Promise<void> {
  target = mateClamp(target)
  if (target === activeStop && index) return
  if (building) {
    queuedStop = target
    return
  }
  building = true
  try {
    for (let s = fetchedStop + 1; s <= target; s++) {
      await mergeFile(stopFile(s))
      fetchedStop = s
    }
    const nextIndex = await buildIndex(target)
    index = nextIndex
    activeStop = target
    document.dispatchEvent(new CustomEvent("searchdepth-loaded", { detail: { stop: activeStop } }))
    onSwap?.()
  } finally {
    building = false
    if (queuedStop !== null && queuedStop !== activeStop) {
      const q = queuedStop
      queuedStop = null
      void setDepth(q, onSwap)
    } else {
      queuedStop = null
    }
  }
}

function countOcc(hay: string, needle: string): number {
  if (!needle) return 0
  let n = 0
  let i = hay.indexOf(needle)
  while (i !== -1) {
    n++
    i = hay.indexOf(needle, i + needle.length)
  }
  return n
}

function scoreDoc(d: Doc, tokens: string[]): number {
  const title = (d.title || "").toLowerCase()
  const content = (d.content || "").toLowerCase()
  const tags = (d.tags || []).join(" ").toLowerCase()
  let score = 0
  let matched = false
  for (const tk of tokens) {
    const tHits = countOcc(title, tk)
    const cHits = countOcc(content, tk)
    const gHits = countOcc(tags, tk)
    if (tHits) {
      score += 100 + tHits * 10
      matched = true
    }
    if (gHits) {
      score += 40 + gHits * 5
      matched = true
    }
    if (cHits) {
      score += cHits * 10
      matched = true
    }
  }
  return matched ? score : -1
}

function idsForTerm(term: string): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  if (!index) return out
  for (const group of index.search(term, { limit: CANDIDATE_LIMIT, enrich: false }) as any[]) {
    for (const id of group.result ?? group) {
      if (!seen.has(id)) {
        seen.add(id)
        out.push(id)
      }
    }
  }
  return out
}

function search(q: string, defaultOp: BoolOp = "or"): Doc[] {
  // Do not toLowerCase(q) before parse. Connectors are case-sensitive (AND/OR).
  const parsed = parseBooleanQuery(q, defaultOp)
  if (!index || !parsed.clauses.length) return []
  const tokens = queryTerms(parsed)
  const clausePools = parsed.clauses.map((cl) => intersectIds(cl.terms.map((t) => idsForTerm(t.v))))
  const pool = unionIds(clausePools)
  const ranked = pool
    .map((id) => store.get(id))
    .filter(Boolean)
    .map((d) => ({ d: d as Doc, s: scoreDoc(d as Doc, tokens) }))
    .filter((x) => x.s >= 0 && docMatchesBool(x.d, parsed))
    .sort((a, b) => b.s - a.s)
  return ranked.map((x) => x.d)
}

function hitHref(d: Doc): string {
  return `${basePath()}/${d.slug}`.replace(/([^:])\/\/+/g, "$1/")
}
function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!)
}

const STOP_LABELS = ["Rapido", "Standard", "Profondo", "Massimo"]
function stopHint(stop: number): string {
  return [
    "Gare e concetti",
    "Più parole per pagina",
    "Dentro i quesiti (tutte le lingue)",
    "Profondità massima",
  ][mateClamp(stop)]
}

function ensureUI(): void {
  if (document.querySelector(".sd-button")) return

  const btn = document.createElement("button")
  // Also `.search-button`: the masthead magnifying glass (navbar.inline.ts) clicks
  // that class. Keep the button in the DOM but visually hidden so it does not
  // appear in the collapsible left sidebar (Atlas e551f64).
  btn.className = "sd-button search-button"
  btn.type = "button"
  btn.setAttribute("aria-label", "Cerca nel testo")
  btn.tabIndex = -1
  btn.dataset.persist = ""
  document.body.appendChild(btn)

  const modal = document.createElement("div")
  modal.className = "sd-modal"
  modal.dataset.persist = ""
  modal.innerHTML = `
    <div class="sd-inner" role="dialog" aria-modal="true" aria-label="Cerca">
      <input class="sd-input" type="text" placeholder="Cerca…  &quot;frase&quot;  &amp;  |  ( )" aria-label="Cerca" autocomplete="off" />
      <div class="sd-slider-wrap"></div>
      <div class="sd-bool" role="group" aria-label="Tutte le parole o una qualsiasi">
        <button type="button" class="sd-bool-btn active" data-op="or">OR</button>
        <button type="button" class="sd-bool-btn" data-op="and">AND</button>
      </div>
      <p class="sd-help">AND &amp; &amp;&amp; · OR | || · "parola" intera · "frase esatta". and/or minuscoli sono parole.</p>
      <div class="sd-results-container"></div>
      <div class="sd-pagination"></div>
    </div>`
  document.body.appendChild(modal)

  const input = modal.querySelector(".sd-input") as HTMLInputElement
  const resultsContainer = modal.querySelector(".sd-results-container") as HTMLElement
  const paginationContainer = modal.querySelector(".sd-pagination") as HTMLElement
  const wrap = modal.querySelector(".sd-slider-wrap") as HTMLElement
  let defaultOp: BoolOp = "or"
  const boolBtns = modal.querySelectorAll(".sd-bool-btn") as NodeListOf<HTMLButtonElement>
  const paintBool = () => {
    const parsed = parseBooleanQuery(input.value, defaultOp)
    const shown: BoolOp = parsed.explicit ? (parsed.clauses.length > 1 ? "or" : "and") : defaultOp
    boolBtns.forEach((b) => b.classList.toggle("active", b.dataset.op === shown))
  }
  boolBtns.forEach((b) => {
    b.addEventListener("click", () => {
      defaultOp = (b.dataset.op as BoolOp) || "or"
      paintBool()
      currentPage = 0
      render()
    })
  })

  const maxStop = isMobile() ? ATOM_STOP : 3
  const cur = ATOM_STOP
  wrap.innerHTML = `
    <input class="sd-slider" type="range" min="0" max="${maxStop}" step="1" value="${cur}" aria-label="Profondità" />
    <span class="sd-slider-label"></span>
    <span class="sd-spin" hidden aria-hidden="true"></span>`
  const slider = wrap.querySelector(".sd-slider") as HTMLInputElement
  const label = wrap.querySelector(".sd-slider-label") as HTMLElement
  const spin = wrap.querySelector(".sd-spin") as HTMLElement
  const paint = () => {
    label.textContent = `${STOP_LABELS[+slider.value] ?? ""} — ${stopHint(+slider.value)}`
  }
  paint()

  let currentPage = 0
  let currentHits: Doc[] = []

  const render = () => {
    currentHits = search(input.value, defaultOp)
    const totalPages = Math.max(1, Math.ceil(currentHits.length / RESULTS_PER_PAGE))
    const start = currentPage * RESULTS_PER_PAGE
    const pageHits = currentHits.slice(start, start + RESULTS_PER_PAGE)
    resultsContainer.innerHTML = `<ul class="sd-results" role="listbox">${pageHits
      .map((d) => {
        const kind = d.slug.includes("#") ? "quesito" : "pagina"
        return `<li role="option"><a class="sd-hit" href="${esc(hitHref(d))}"><span class="sd-hit-title">${esc(
          d.title || d.slug,
        )}</span><span class="sd-hit-author">${esc(kind)}</span></a></li>`
      })
      .join("")}</ul>`
    paginationContainer.innerHTML = `
      <div class="sd-pagination">
        <span class="sd-pagination-count">${currentHits.length ? `${Math.min(start + 1, currentHits.length)}–${Math.min(start + RESULTS_PER_PAGE, currentHits.length)} di ${currentHits.length}` : "0"}</span>
        <div>
          <button class="sd-pag-prev" ${currentPage === 0 ? "disabled" : ""}>Prec</button>
          <button class="sd-pag-next" ${currentPage >= totalPages - 1 ? "disabled" : ""}>Succ</button>
        </div>
      </div>`
  }

  slider.addEventListener("change", () => {
    const want = mateClamp(+slider.value)
    slider.value = String(want)
    paint()
    currentPage = 0
    render()
    if (want !== activeStop) {
      spin.hidden = false
      void setDepth(want, () => {
        spin.hidden = true
        render()
      })
    }
  })

  paginationContainer.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    if (target.matches(".sd-pag-prev") && currentPage > 0) {
      currentPage--
      render()
    } else if (target.matches(".sd-pag-next") && currentPage < Math.ceil(currentHits.length / RESULTS_PER_PAGE) - 1) {
      currentPage++
      render()
    }
  })

  let t: number | undefined
  input.addEventListener("input", () => {
    clearTimeout(t)
    currentPage = 0
    paintBool()
    t = window.setTimeout(render, 90)
  })

  const open = () => {
    modal.classList.add("active")
    document.documentElement.style.overflow = "hidden"
    currentPage = 0
    input.focus()
    if (activeStop < ATOM_STOP) {
      spin.hidden = false
      void setDepth(ATOM_STOP, () => {
        spin.hidden = true
        render()
      })
    }
  }
  if (activeStop < 0 && !building) void setDepth(ATOM_STOP)
  const close = () => {
    modal.classList.remove("active")
    document.documentElement.style.overflow = ""
  }
  btn.addEventListener("click", open)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close()
  })
  resultsContainer.addEventListener("click", close)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close()
    if (e.key === "/" && !modal.classList.contains("active") && (document.activeElement === document.body || document.activeElement === null)) {
      e.preventDefault()
      open()
    }
  })
}

declare global {
  interface Window {
    __mateSearch?: {
      search: (q: string, defaultOp?: BoolOp) => Doc[]
      ensure: (stop: number) => Promise<void>
      fieldsMatchQuery: typeof fieldsMatchQuery
      contentFor: (id: string) => string
    }
  }
}

function contentFor(id: string): string {
  const d = store.get(id)
  return d ? `${d.title || ""} ${d.content || ""} ${(d.tags || []).join(" ")}` : ""
}

window.__mateSearch = {
  search,
  ensure: (stop: number) => setDepth(stop),
  fieldsMatchQuery,
  contentFor,
}

function init(): void {
  ensureUI()
  if (!document.querySelector(".sd-button")) ensureUI()
}

document.addEventListener("nav", init)
