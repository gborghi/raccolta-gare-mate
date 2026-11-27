// Tiered depth search — shards search-t{0..3}.json. Desktop users pick any
// combination of tiers (checkboxes); phones only see tiers that fit in memory
// (t3 «Completo» is excluded). Only the selected shards are fetched, then merged
// without duplicate slugs. Boolean syntax lives in searchDepth.ts and must not
// be bypassed: no toLowerCase() on the raw query before parseBooleanQuery.
import FlexSearch from "flexsearch"
import {
  Doc,
  Entry,
  parseBooleanQuery,
  queryTerms,
  docMatchesBool,
  intersectIds,
  unionIds,
  fieldsMatchQuery,
  TIER_INFO,
  STORAGE_KEY_TIERS,
  defaultTiers,
  normalizeTiers,
  parseStoredTiers,
  mergeDesiredTiers,
  mergeSelectedEntries,
  formatBytes,
  type BoolOp,
} from "./searchDepth"

const CANDIDATE_LIMIT = 20000
const BUILD_CHUNK = 400
const RESULTS_PER_PAGE = 20

type TierManifest = { mobileMax: number; tiers: { id: number; bytes: number; entries: number }[] }

const entryCache = new Map<number, Entry[]>()
let manifest: TierManifest | null = null
let store = new Map<string, Doc>()
let index: any = null
let desiredTiers: number[] = readDesired()
let loadedKey = ""
let ensureChain: Promise<void> = Promise.resolve()
let ensureGen = 0

function readDesired(): number[] {
  try {
    return parseStoredTiers(localStorage.getItem(STORAGE_KEY_TIERS), false)
  } catch {
    return defaultTiers(false)
  }
}

function yieldToUI(): Promise<void> {
  return new Promise((r) => setTimeout(r, 0))
}

function basePath(): string {
  return document.body.dataset.basepath ?? ""
}

function isMobile(): boolean {
  return matchMedia("(max-width: 800px)").matches || matchMedia("(pointer: coarse)").matches
}

function effectiveTiers(src: number[] = desiredTiers): number[] {
  return normalizeTiers(src, isMobile())
}

function selectionKey(tiers: number[]): string {
  return tiers.join(",")
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

async function loadManifest(): Promise<TierManifest | null> {
  if (manifest) return manifest
  const j = await fetchJson("search-tiers.json")
  if (j && Array.isArray(j.tiers)) manifest = j as TierManifest
  return manifest
}

async function fetchTierEntries(tier: number): Promise<Entry[]> {
  if (entryCache.has(tier)) return entryCache.get(tier)!
  const file = `search-t${tier}.json`
  const j = await fetchJson(file)
  const out: Entry[] = []
  const take = async (obj: any) => {
    if (!obj) return
    if (Array.isArray(obj.buckets)) {
      for (const b of obj.buckets) await take(await fetchJson(b))
      return
    }
    out.push(...((obj.entries ?? []) as Entry[]))
  }
  await take(j)
  entryCache.set(tier, out)
  return out
}

async function buildIndex(docs: Doc[]): Promise<any> {
  const idx = newIndex()
  let i = 0
  for (const d of docs) {
    idx.add({ id: d.id, title: d.title, content: d.content, tags: (d.tags || []).join(" ") })
    if (++i % BUILD_CHUNK === 0) await yieldToUI()
  }
  return idx
}

async function ensureTiers(want?: number[]): Promise<void> {
  if (want) desiredTiers = mergeDesiredTiers(want, desiredTiers, isMobile())
  const myGen = ++ensureGen
  const job = ensureChain.then(async () => {
    if (myGen !== ensureGen) return
    const effective = effectiveTiers()
    const key = selectionKey(effective)
    if (key === loadedKey && index) {
      document.dispatchEvent(
        new CustomEvent("searchdepth-loaded", { detail: { tiers: effective } }),
      )
      return
    }
    const parts: { id: number; entries: Entry[] }[] = []
    for (const id of effective) {
      parts.push({ id, entries: await fetchTierEntries(id) })
    }
    if (myGen !== ensureGen) return
    const docs = mergeSelectedEntries(parts)
    const nextIndex = await buildIndex(docs)
    if (myGen !== ensureGen) return
    store = new Map(docs.map((d) => [d.id, d]))
    index = nextIndex
    loadedKey = key
    document.dispatchEvent(
      new CustomEvent("searchdepth-loaded", { detail: { tiers: effective } }),
    )
  })
  ensureChain = job.catch((err) => {
    console.error("search tiers", err)
  })
  await job
}

function persistDesired(): void {
  try {
    localStorage.setItem(STORAGE_KEY_TIERS, JSON.stringify(desiredTiers))
  } catch {}
}

async function setTiers(ids: number[]): Promise<void> {
  const effective = normalizeTiers(ids, isMobile())
  desiredTiers = mergeDesiredTiers(effective, desiredTiers, isMobile())
  persistDesired()
  await ensureTiers(effective)
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

function bytesFor(id: number): number {
  return manifest?.tiers.find((t) => t.id === id)?.bytes ?? 0
}

function renderTierSelector(host: HTMLElement): void {
  const mobile = isMobile()
  const effective = effectiveTiers()
  host.className = "sd-tiers"
  host.innerHTML = `<legend class="sd-tiers-legend">Livelli di ricerca</legend>`
  for (const info of TIER_INFO) {
    const allowed = !mobile || info.mobile
    const size = bytesFor(info.id)
    const sizeTxt = size ? formatBytes(size) : ""
    const checked = allowed && effective.includes(info.id)
    const label = document.createElement("label")
    label.className = "sd-tier" + (allowed ? "" : " sd-tier-disabled")
    label.innerHTML = `
      <input type="checkbox" data-tier="${info.id}" ${checked ? "checked" : ""} ${allowed ? "" : "disabled"} />
      <span class="sd-tier-text">
        <span class="sd-tier-name">${esc(info.name)}${sizeTxt ? ` <span class="sd-tier-size">${esc(sizeTxt)}</span>` : ""}</span>
        <span class="sd-tier-desc">${esc(info.label)}</span>
        ${allowed ? "" : `<span class="sd-tier-note">Troppo pesante per il telefono${sizeTxt ? ` (${esc(sizeTxt)})` : ""}</span>`}
      </span>`
    host.appendChild(label)
  }
  host.querySelectorAll<HTMLInputElement>("input[data-tier]").forEach((box) => {
    box.addEventListener("change", () => {
      const next = [...host.querySelectorAll<HTMLInputElement>("input[data-tier]:checked:not(:disabled)")].map(
        (el) => Number(el.dataset.tier),
      )
      if (!next.length) {
        box.checked = true
        return
      }
      host.classList.add("sd-tiers-loading")
      void setTiers(next).finally(() => host.classList.remove("sd-tiers-loading"))
    })
  })
}

const selectorHosts = new Set<HTMLElement>()

async function mountTierSelector(host: HTMLElement): Promise<void> {
  selectorHosts.add(host)
  await loadManifest()
  renderTierSelector(host)
}

function refreshSelectors(): void {
  for (const host of selectorHosts) {
    if (host.isConnected) renderTierSelector(host)
  }
}

document.addEventListener("searchdepth-loaded", () => refreshSelectors())

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
      <fieldset class="sd-tiers"></fieldset>
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
  const tiersHost = modal.querySelector(".sd-tiers") as HTMLElement
  void mountTierSelector(tiersHost)

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
  document.addEventListener("searchdepth-loaded", () => {
    currentPage = 0
    if (modal.classList.contains("active")) render()
  })

  const open = () => {
    modal.classList.add("active")
    document.documentElement.style.overflow = "hidden"
    currentPage = 0
    input.focus()
    void ensureTiers().then(() => render())
  }
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
    if (
      e.key === "/" &&
      !modal.classList.contains("active") &&
      (document.activeElement === document.body || document.activeElement === null)
    ) {
      e.preventDefault()
      open()
    }
  })
}

function contentFor(id: string): string {
  const d = store.get(id)
  return d ? `${d.title || ""} ${d.content || ""} ${(d.tags || []).join(" ")}` : ""
}

declare global {
  interface Window {
    __mateSearch?: {
      search: (q: string, defaultOp?: BoolOp) => Doc[]
      ensure: (stop?: number) => Promise<void>
      ensureTiers: (tiers?: number[]) => Promise<void>
      setTiers: (tiers: number[]) => Promise<void>
      getTiers: () => number[]
      mountTierSelector: (host: HTMLElement) => Promise<void>
      fieldsMatchQuery: typeof fieldsMatchQuery
      contentFor: (id: string) => string
    }
  }
}

window.__mateSearch = {
  search,
  // Backward compatible: ensure(2) → tiers 0..2; ensure() → current selection.
  ensure: (stop?: number) =>
    ensureTiers(typeof stop === "number" ? defaultTiers(false).concat(stop >= 3 ? [3] : []).filter((id) => id <= stop) : undefined),
  ensureTiers: (tiers?: number[]) => ensureTiers(tiers),
  setTiers,
  getTiers: () => effectiveTiers(),
  mountTierSelector,
  fieldsMatchQuery,
  contentFor,
}

function init(): void {
  ensureUI()
  if (!document.querySelector(".sd-button")) ensureUI()
}

document.addEventListener("nav", init)
