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

function buildTable(el: HTMLElement, rows: Quesito[], prefix: string) {
  let sortKey: keyof Quesito = "competition"
  let sortDir = 1
  let filter = ""

  const search = document.createElement("input")
  search.type = "search"
  search.placeholder = `Cerca tra ${rows.length} quesiti…`
  search.className = "qtable-search"

  const count = document.createElement("div")
  count.className = "qtable-count"

  const table = document.createElement("table")
  table.className = "qtable-table"
  const cols: [keyof Quesito, string][] = [
    ["summary", "Quesito"],
    ["competition", "Gara"],
    ["quesito", "N."],
    ["answer", "Risp."],
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
    count.textContent = `${shown.length} quesiti`
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
      shown
        .map(
          (r) =>
            `<tr><td><a href="${prefix}${esc(r.href)}">${esc(r.summary) || "(quesito)"}</a></td>` +
            `<td>${esc(r.competition)}</td>` +
            `<td>${esc(String(r.quesito))}</td>` +
            `<td>${esc(r.answer)}</td></tr>`,
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
        render()
      })
    })
  }

  search.addEventListener("input", () => {
    filter = search.value
    render()
  })

  el.replaceChildren(search, count, table)
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
