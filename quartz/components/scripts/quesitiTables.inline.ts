// Renders the static "quesiti.json" index into sortable + searchable tables,
// replacing the <div class="qtable" data-field data-values> placeholders that
// preprocess.mjs emitted in place of Obsidian Dataview blocks.

interface Quesito {
  href: string
  competition: string
  quesito: number | string
  summary: string
  answer: string
  topics: string[]
  methods: string[]
  skills: string[]
  level: string
  country: string
  family: string
}

// Country (Italian name) -> [ISO 3166-1 alpha-2, English name]. Flag emoji don't
// render on Windows (they show "IT"), so we use flagcdn SVG images instead.
const ISO: Record<string, [string, string]> = {
  Italia: ["it", "Italy"],
  Brasile: ["br", "Brazil"],
  "Regno Unito": ["gb", "United Kingdom"],
  Giappone: ["jp", "Japan"],
  India: ["in", "India"],
  Cina: ["cn", "China"],
  Francia: ["fr", "France"],
  Polonia: ["pl", "Poland"],
}
// International competitions (e.g. IMO) are filed under a host country in the data
// but should show a globe (🌐 renders fine on Windows, unlike flag emoji).
function nation(r: { country: string; family: string }): { iso: string | null; name: string } {
  if (r.family === "imo") return { iso: null, name: "International" }
  const e = ISO[r.country]
  return e ? { iso: e[0], name: e[1] } : { iso: null, name: r.country || "International" }
}
function flagCell(n: { iso: string | null; name: string }): string {
  const inner = n.iso
    ? `<img class="qt-flag-img" src="https://flagcdn.com/${n.iso}.svg" alt="${esc(n.name)}" loading="lazy">`
    : `<span class="qt-globe">🌐</span>`
  return `<td class="qt-flag" title="${esc(n.name)}">${inner}</td>`
}

let cache: Quesito[] | null = null

async function loadData(prefix: string): Promise<Quesito[]> {
  if (cache) return cache
  const res = await fetch(prefix + "static/quesiti.json")
  cache = (await res.json()) as Quesito[]
  return cache
}

function esc(s: string): string {
  return String(s).replace(/[&<>"]/g, (c) =>
    c === "&" ? "&amp;" : c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&quot;",
  )
}

// Hidden full-text keyword index (href -> deduped keywords). Lazy-loaded only the
// first time a user flips a table search into "full content" mode, so the default
// page weight is unchanged. Never rendered — only matched against.
let kwCache: Record<string, string> | null = null
let kwPromise: Promise<Record<string, string>> | null = null
function loadKw(prefix: string): Promise<Record<string, string>> {
  if (kwCache) return Promise.resolve(kwCache)
  if (!kwPromise) {
    kwPromise = fetch(prefix + "static/quesiti_kw.json")
      .then((r) => r.json())
      .then((j) => (kwCache = j as Record<string, string>))
  }
  return kwPromise
}

// pagination (maturità "PagedList" style): per-page selector + windowed numbers
const PER_PAGE_OPTS = [25, 50, 100, 250, 0] // 0 = Tutti
const LS_KEY = "rgm-qtable-perpage"
function getPerPage(): number {
  const raw = localStorage.getItem(LS_KEY)
  if (raw == null) return 50
  const v = Number(raw)
  return PER_PAGE_OPTS.includes(v) ? v : 50
}

function buildTable(el: HTMLElement, rows: Quesito[], prefix: string) {
  let sortKey: keyof Quesito = "competition"
  let sortDir = 1
  let filter = ""
  let page = 1
  let perPage = getPerPage()
  let mode: "table" | "content" = "table"

  const search = document.createElement("input")
  search.type = "search"
  search.className = "qtable-search"
  const setPlaceholder = () => {
    search.placeholder =
      mode === "content"
        ? `Cerca nel testo completo dei ${rows.length} quesiti…`
        : `Cerca tra ${rows.length} quesiti (titolo/gara)…`
  }
  setPlaceholder()

  // toggle: filter table entries (title/gara) vs. full atomized-note content
  const modeBtn = document.createElement("button")
  modeBtn.className = "qtable-modebtn"
  modeBtn.type = "button"
  const syncModeBtn = () => {
    modeBtn.textContent = mode === "content" ? "Ricerca: contenuto completo" : "Ricerca: titolo/gara"
    modeBtn.setAttribute("aria-pressed", String(mode === "content"))
  }
  syncModeBtn()
  modeBtn.addEventListener("click", async () => {
    mode = mode === "table" ? "content" : "table"
    syncModeBtn()
    setPlaceholder()
    page = 1
    if (mode === "content" && !kwCache) {
      modeBtn.textContent = "Caricamento indice…"
      modeBtn.disabled = true
      try {
        await loadKw(prefix)
      } catch {
        /* leave kwCache null; content mode will match nothing */
      }
      modeBtn.disabled = false
      syncModeBtn()
    }
    render()
  })

  const count = document.createElement("div")
  count.className = "qtable-count"

  // items-per-page selector
  const perPageSel = document.createElement("select")
  perPageSel.className = "paged-perpage"
  for (const n of PER_PAGE_OPTS) {
    const o = document.createElement("option")
    o.value = String(n)
    o.textContent = n === 0 ? "Tutti" : String(n)
    if (n === perPage) o.selected = true
    perPageSel.appendChild(o)
  }
  const perPageLbl = document.createElement("label")
  perPageLbl.className = "paged-perpage-label"
  perPageLbl.append("mostra ", perPageSel, " per pagina")
  perPageSel.addEventListener("change", () => {
    perPage = Number(perPageSel.value)
    localStorage.setItem(LS_KEY, String(perPage))
    page = 1
    render()
  })

  const table = document.createElement("table")
  table.className = "qtable-table"

  const pager = document.createElement("div")
  pager.className = "qtable-pager"
  const cols: [keyof Quesito, string][] = [
    ["country", "Stato"],
    ["competition", "Gara"],
    ["level", "Livello"],
    ["summary", "Quesito"],
    ["quesito", "N."],
  ]

  function cmp(a: Quesito, b: Quesito): number {
    let av: any = a[sortKey],
      bv: any = b[sortKey]
    if (sortKey === "quesito") {
      av = Number(av)
      bv = Number(bv)
    }
    if (av < bv) return -1 * sortDir
    if (av > bv) return 1 * sortDir
    // tiebreak: competition then quesito number
    if (a.competition !== b.competition) return a.competition < b.competition ? -1 : 1
    return Number(a.quesito) - Number(b.quesito)
  }

  function render() {
    const q = filter.toLowerCase()
    const shown = rows
      .filter((r) => {
        if (!q) return true
        if (mode === "content") {
          const kw = kwCache?.[r.href]
          return kw ? kw.includes(q) : false
        }
        return (
          r.summary.toLowerCase().includes(q) || r.competition.toLowerCase().includes(q)
        )
      })
      .sort(cmp)
    const pages = perPage === 0 ? 1 : Math.max(1, Math.ceil(shown.length / perPage))
    if (page > pages) page = pages
    if (page < 1) page = 1
    const start = perPage === 0 ? 0 : (page - 1) * perPage
    const pageRows = perPage === 0 ? shown : shown.slice(start, start + perPage)
    count.textContent =
      pages > 1
        ? `${shown.length} quesiti — ${start + 1}–${start + pageRows.length} (pag. ${page}/${pages})`
        : `${shown.length} quesiti`
    const head =
      "<thead><tr>" +
      cols
        .map(
          ([k, label]) =>
            `<th data-k="${k}" class="qtable-th${
              sortKey === k ? " sorted-" + (sortDir > 0 ? "asc" : "desc") : ""
            }">${label}</th>`,
        )
        .join("") +
      "</tr></thead>"
    const body =
      "<tbody>" +
      pageRows
        .map(
          (r) =>
            (() => {
              const n = nation(r)
              return (
                `<tr>${flagCell(n)}` +
                `<td>${esc(r.competition)}</td>` +
                `<td>${esc(r.level)}</td>` +
                `<td><a href="${prefix}${esc(r.href)}">${esc(r.summary) || "(quesito)"}</a></td>` +
                `<td>${esc(String(r.quesito))}</td></tr>`
              )
            })(),
        )
        .join("") +
      "</tbody>"
    table.innerHTML = head + body
    table.querySelectorAll<HTMLElement>("th.qtable-th").forEach((th) => {
      th.addEventListener("click", () => {
        const k = th.dataset.k as keyof Quesito
        if (sortKey === k) sortDir *= -1
        else {
          sortKey = k
          sortDir = 1
        }
        page = 1
        render()
      })
    })
    // windowed numbered pager (maturità style)
    if (pages <= 1) {
      pager.innerHTML = ""
    } else {
      const btn = (label: string, target: number, disabled: boolean, cur = false) =>
        `<button class="paged-btn${cur ? " current" : ""}" data-p="${target}" ${disabled ? "disabled" : ""}>${label}</button>`
      const nums: string[] = []
      const win = 2
      const lo = Math.max(1, page - win)
      const hi = Math.min(pages, page + win)
      if (lo > 1) {
        nums.push(btn("1", 1, false))
        if (lo > 2) nums.push(`<span class="paged-ellip">…</span>`)
      }
      for (let i = lo; i <= hi; i++) nums.push(btn(String(i), i, false, i === page))
      if (hi < pages) {
        if (hi < pages - 1) nums.push(`<span class="paged-ellip">…</span>`)
        nums.push(btn(String(pages), pages, false))
      }
      pager.innerHTML =
        btn("‹ Prec", page - 1, page === 1) + nums.join("") + btn("Succ ›", page + 1, page >= pages)
    }
  }

  pager.addEventListener("click", (e) => {
    const t = (e.target as HTMLElement).closest("button[data-p]") as HTMLElement | null
    if (!t) return
    page = Number(t.dataset.p)
    render()
    el.scrollIntoView({ block: "start", behavior: "smooth" })
  })

  search.addEventListener("input", () => {
    filter = search.value
    page = 1
    render()
  })

  const searchRow = document.createElement("div")
  searchRow.className = "qtable-searchrow"
  searchRow.append(search, modeBtn)

  const controls = document.createElement("div")
  controls.className = "qtable-controls"
  controls.append(count, perPageLbl)
  el.replaceChildren(searchRow, controls, table, pager)
  render()
}

async function init() {
  const placeholders = Array.from(
    document.querySelectorAll<HTMLElement>("div.qtable"),
  ).filter((el) => !el.dataset.rendered)
  if (!placeholders.length) return

  const slug = document.body.dataset.slug || ""
  const depth = (slug.match(/\//g) || []).length
  const prefix = "../".repeat(depth)

  let data: Quesito[]
  try {
    data = await loadData(prefix)
  } catch {
    return
  }

  for (const el of placeholders) {
    el.dataset.rendered = "1"
    const field = el.dataset.field as keyof Quesito
    const values = (el.dataset.values || "").split(",").filter(Boolean)
    const rows = data.filter((d) => {
      const arr = (d[field] as unknown as string[]) || []
      return values.some((v) => arr.includes(v))
    })
    buildTable(el, rows, prefix)
  }
}

// Re-render on SPA navigation...
document.addEventListener("nav", () => {
  init()
})
// ...and once on initial load, in case Quartz's spa router already fired its
// first `nav` before this listener was registered (script ordering). init() is
// idempotent: the per-placeholder `rendered` flag prevents double work.
init()
