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
}

// Country (Italian name) -> flag emoji. Unknown/empty -> globe.
const FLAGS: Record<string, string> = {
  Italia: "🇮🇹",
  Brasile: "🇧🇷",
  "Regno Unito": "🇬🇧",
  Giappone: "🇯🇵",
  India: "🇮🇳",
  Cina: "🇨🇳",
  Francia: "🇫🇷",
  Polonia: "🇵🇱",
}
function flag(country: string): string {
  return FLAGS[country] || "🌐"
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

  const search = document.createElement("input")
  search.type = "search"
  search.placeholder = `Cerca tra ${rows.length} quesiti…`
  search.className = "qtable-search"

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
    ["summary", "Quesito"],
    ["competition", "Gara"],
    ["quesito", "N."],
    ["country", "Nazione"],
    ["level", "Livello"],
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
      .filter(
        (r) =>
          !q ||
          r.summary.toLowerCase().includes(q) ||
          r.competition.toLowerCase().includes(q),
      )
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
            `<tr><td><a href="${prefix}${esc(r.href)}">${esc(r.summary) || "(quesito)"}</a></td>` +
            `<td>${esc(r.competition)}</td>` +
            `<td>${esc(String(r.quesito))}</td>` +
            `<td class="qt-flag" title="${esc(r.country)}">${flag(r.country)} ${esc(r.country)}</td>` +
            `<td>${esc(r.level)}</td></tr>`,
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

  const controls = document.createElement("div")
  controls.className = "qtable-controls"
  controls.append(count, perPageLbl)
  el.replaceChildren(search, controls, table, pager)
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
