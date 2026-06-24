// Faceted multi-tag search for the /cerca page. Loads quesiti.json and lets the
// user combine tags across facets (gara, anno, livello, argomento, metodo,
// abilità, paese) with an AND/OR (TUTTI/QUALSIASI) toggle, rendering matches
// into a sortable table.

interface Q {
  href: string
  competition: string
  quesito: number | string
  summary: string
  answer: string
  topics: string[]
  methods: string[]
  skills: string[]
  level: string
  family: string
  year: number | string
  country: string
  modalita: string
}

interface Facet {
  key: keyof Q
  label: string
  multi?: boolean
  strip?: string
}

const FACETS: Facet[] = [
  { key: "family", label: "Gara" },
  { key: "modalita", label: "Modalità" },
  { key: "year", label: "Anno" },
  { key: "level", label: "Livello" },
  { key: "topics", label: "Argomento", multi: true, strip: "topic_" },
  { key: "methods", label: "Metodo", multi: true, strip: "method_" },
  { key: "skills", label: "Abilità", multi: true, strip: "skill_" },
  { key: "country", label: "Paese" },
]

// pagination (same model + storage key as the in-body quesiti tables)
const PER_PAGE_OPTS = [25, 50, 100, 250, 0] // 0 = Tutti
const LS_KEY = "rgm-qtable-perpage"
function getPerPage(): number {
  const raw = localStorage.getItem(LS_KEY)
  if (raw == null) return 50
  const v = Number(raw)
  return PER_PAGE_OPTS.includes(v) ? v : 50
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
// International competitions (e.g. IMO) are filed under a host country but show a globe.
function nation(r: { country: string; family: string }): { flag: string; name: string } {
  if (r.family === "imo") return { flag: "🌐", name: "Internazionale" }
  return { flag: FLAGS[r.country] || "🌐", name: r.country }
}

function esc(s: unknown): string {
  return String(s).replace(/[&<>"]/g, (c) =>
    c === "&" ? "&amp;" : c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&quot;",
  )
}
// Hidden full-text keyword index (href -> deduped keywords), lazy-loaded only when
// the user switches the text box into "full content" mode. Never rendered.
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

function pretty(strip: string | undefined, v: string): string {
  let s = strip ? v.replace(strip, "") : v
  s = s.replace(/_/g, " ")
  return s.charAt(0).toUpperCase() + s.slice(1)
}

async function init() {
  const root = document.getElementById("cerca")
  if (!root || root.dataset.rendered) return
  root.dataset.rendered = "1"

  const slug = document.body.dataset.slug || ""
  const prefix = "../".repeat((slug.match(/\//g) || []).length)
  let data: Q[]
  try {
    data = await (await fetch(prefix + "static/quesiti.json")).json()
  } catch {
    root.textContent = "Impossibile caricare i dati."
    return
  }

  // selected tags as "facetKey::value"
  const selected = new Set<string>()
  let mode: "AND" | "OR" = "AND"

  // precompute facet values + counts
  const facetValues: { facet: Facet; values: [string, number][] }[] = FACETS.map((facet) => {
    const counts = new Map<string, number>()
    for (const q of data) {
      const raw = q[facet.key] as unknown
      const vals = facet.multi ? (raw as string[]) || [] : raw === "" || raw == null ? [] : [String(raw)]
      for (const v of vals) counts.set(v, (counts.get(v) || 0) + 1)
    }
    let values = [...counts.entries()]
    // years descending numeric, everything else by count desc then label
    if (facet.key === "year") values.sort((a, b) => Number(b[0]) - Number(a[0]))
    else values.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    return { facet, values }
  })

  function matches(q: Q): boolean {
    if (selected.size === 0) return false
    const test = (token: string) => {
      const [key, val] = token.split("::")
      const facet = FACETS.find((f) => f.key === key)!
      if (facet.multi) return ((q[facet.key] as unknown as string[]) || []).includes(val)
      return String(q[facet.key]) === val
    }
    const tokens = [...selected]
    return mode === "AND" ? tokens.every(test) : tokens.some(test)
  }

  // ---- DOM scaffold ----
  const controls = document.createElement("div")
  controls.className = "cerca-controls"
  const facetsBox = document.createElement("div")
  facetsBox.className = "cerca-facets"
  const selectedBar = document.createElement("div")
  selectedBar.className = "cerca-selected"
  const resultsBox = document.createElement("div")
  resultsBox.className = "cerca-results"
  root.replaceChildren(controls, facetsBox, selectedBar, resultsBox)

  // ---- results scaffold: free-text search + pagination (mirrors the in-body
  // quesiti tables). Built once so the search box keeps focus across renders. ----
  let filter = ""
  let page = 1
  let perPage = getPerPage()
  let searchMode: "table" | "content" = "table"

  const hint = document.createElement("p")
  hint.className = "cerca-hint"
  hint.textContent = "Seleziona dei tag qui sopra per vedere i quesiti."

  const search = document.createElement("input")
  search.type = "search"
  search.className = "qtable-search"
  const setPlaceholder = () => {
    search.placeholder =
      searchMode === "content" ? "Filtra nel testo completo dei quesiti…" : "Filtra i risultati (titolo/gara)…"
  }
  setPlaceholder()
  search.addEventListener("input", () => {
    filter = search.value
    page = 1
    renderResults()
  })

  const modeBtn = document.createElement("button")
  modeBtn.type = "button"
  modeBtn.className = "qtable-modebtn"
  const syncModeBtn = () => {
    modeBtn.textContent = searchMode === "content" ? "Ricerca: contenuto completo" : "Ricerca: titolo/gara"
    modeBtn.setAttribute("aria-pressed", String(searchMode === "content"))
  }
  syncModeBtn()
  modeBtn.addEventListener("click", async () => {
    searchMode = searchMode === "table" ? "content" : "table"
    syncModeBtn()
    setPlaceholder()
    page = 1
    if (searchMode === "content" && !kwCache) {
      modeBtn.textContent = "Caricamento indice…"
      modeBtn.disabled = true
      try { await loadKw(prefix) } catch {}
      modeBtn.disabled = false
      syncModeBtn()
    }
    renderResults()
  })

  const count = document.createElement("div")
  count.className = "qtable-count"

  const perPageSel = document.createElement("select")
  perPageSel.className = "paged-perpage"
  for (const n of PER_PAGE_OPTS) {
    const o = document.createElement("option")
    o.value = String(n)
    o.textContent = n === 0 ? "Tutti" : String(n)
    if (n === perPage) o.selected = true
    perPageSel.appendChild(o)
  }
  perPageSel.addEventListener("change", () => {
    perPage = Number(perPageSel.value)
    localStorage.setItem(LS_KEY, String(perPage))
    page = 1
    renderResults()
  })
  const perPageLbl = document.createElement("label")
  perPageLbl.className = "paged-perpage-label"
  perPageLbl.append("mostra ", perPageSel, " per pagina")

  const searchRow = document.createElement("div")
  searchRow.className = "qtable-searchrow"
  searchRow.append(search, modeBtn)

  const resControls = document.createElement("div")
  resControls.className = "qtable-controls"
  resControls.append(count, perPageLbl)

  const table = document.createElement("table")
  table.className = "qtable-table"

  const pager = document.createElement("div")
  pager.className = "qtable-pager"
  pager.addEventListener("click", (e) => {
    const t = (e.target as HTMLElement).closest("button[data-p]") as HTMLElement | null
    if (!t) return
    page = Number(t.dataset.p)
    renderResults()
    resultsBox.scrollIntoView({ block: "start", behavior: "smooth" })
  })

  resultsBox.replaceChildren(hint, searchRow, resControls, table, pager)

  // AND/OR toggle
  const toggle = document.createElement("button")
  toggle.className = "cerca-toggle"
  function syncToggle() {
    toggle.textContent = mode === "AND" ? "Corrispondenza: TUTTI i tag" : "Corrispondenza: QUALSIASI tag"
  }
  toggle.addEventListener("click", () => {
    mode = mode === "AND" ? "OR" : "AND"
    syncToggle()
    render()
  })
  syncToggle()
  controls.appendChild(toggle)

  // facet chips
  for (const { facet, values } of facetValues) {
    const sec = document.createElement("details")
    sec.className = "cerca-facet"
    const sum = document.createElement("summary")
    sum.textContent = `${facet.label} (${values.length})`
    sec.appendChild(sum)
    const chips = document.createElement("div")
    chips.className = "cerca-chips"
    for (const [val, count] of values) {
      const token = `${facet.key}::${val}`
      const chip = document.createElement("button")
      chip.className = "cerca-chip"
      chip.dataset.token = token
      chip.innerHTML = `${esc(pretty(facet.strip, val))} <span class="cerca-n">${count}</span>`
      chip.addEventListener("click", () => {
        if (selected.has(token)) selected.delete(token)
        else selected.add(token)
        render()
      })
      chips.appendChild(chip)
    }
    sec.appendChild(chips)
    facetsBox.appendChild(sec)
  }

  // sortable results
  let sortKey: keyof Q = "competition"
  let sortDir = 1
  function renderResults() {
    const active = selected.size > 0
    hint.style.display = active ? "none" : ""
    search.style.display = active ? "" : "none"
    resControls.style.display = active ? "" : "none"
    table.style.display = active ? "" : "none"
    if (!active) {
      pager.innerHTML = ""
      return
    }
    const q = filter.trim().toLowerCase()
    let rows = data.filter(matches)
    if (q) {
      rows = rows.filter((r) => {
        if (searchMode === "content") {
          const kw = kwCache?.[r.href]
          return kw ? kw.includes(q) : false
        }
        return (
          String(r.summary).toLowerCase().includes(q) ||
          String(r.competition).toLowerCase().includes(q) ||
          String(r.level).toLowerCase().includes(q) ||
          String(r.country).toLowerCase().includes(q)
        )
      })
    }
    rows.sort((a, b) => {
      let av: any = a[sortKey],
        bv: any = b[sortKey]
      if (sortKey === "quesito" || sortKey === "year") {
        av = Number(av)
        bv = Number(bv)
      }
      if (av < bv) return -sortDir
      if (av > bv) return sortDir
      if (a.competition !== b.competition) return a.competition < b.competition ? -1 : 1
      return Number(a.quesito) - Number(b.quesito)
    })
    const total = rows.length
    const pages = perPage === 0 ? 1 : Math.max(1, Math.ceil(total / perPage))
    if (page > pages) page = pages
    if (page < 1) page = 1
    const start = perPage === 0 ? 0 : (page - 1) * perPage
    const pageRows = perPage === 0 ? rows : rows.slice(start, start + perPage)
    count.innerHTML =
      pages > 1
        ? `<strong>${total}</strong> quesiti — ${start + 1}–${start + pageRows.length} (pag. ${page}/${pages})`
        : `<strong>${total}</strong> quesiti`
    const cols: [keyof Q, string][] = [
      ["country", "Stato"],
      ["summary", "Quesito"],
      ["competition", "Gara"],
      ["quesito", "N."],
      ["country", "Nazione"],
      ["level", "Livello"],
    ]
    const head =
      "<thead><tr>" +
      cols
        .map(
          ([k, l]) =>
            `<th data-k="${k}" class="qtable-th${sortKey === k ? " sorted-" + (sortDir > 0 ? "asc" : "desc") : ""}">${l}</th>`,
        )
        .join("") +
      "</tr></thead>"
    const body =
      "<tbody>" +
      pageRows
        .map((r) => {
          const n = nation(r)
          return (
            `<tr><td class="qt-flag" title="${esc(n.name)}">${n.flag}</td>` +
            `<td><a href="${prefix}${esc(r.href)}">${esc(r.summary) || "(quesito)"}</a></td>` +
            `<td>${esc(r.competition)}</td><td>${esc(r.quesito)}</td>` +
            `<td>${esc(n.name)}</td>` +
            `<td>${esc(r.level)}</td></tr>`
          )
        })
        .join("") +
      "</tbody>"
    table.innerHTML = head + body
    table.querySelectorAll<HTMLElement>("th.qtable-th").forEach((th) =>
      th.addEventListener("click", () => {
        const k = th.dataset.k as keyof Q
        if (sortKey === k) sortDir *= -1
        else {
          sortKey = k
          sortDir = 1
        }
        page = 1
        renderResults()
      }),
    )
    // windowed numbered pager (same style as the in-body tables)
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

  function renderSelected() {
    if (selected.size === 0) {
      selectedBar.innerHTML = ""
      return
    }
    selectedBar.innerHTML =
      `<span class="cerca-sel-label">Tag attivi:</span> ` +
      [...selected]
        .map((token) => {
          const [key, val] = token.split("::")
          const f = FACETS.find((x) => x.key === key)!
          return `<button class="cerca-chip active" data-token="${esc(token)}">${esc(f.label)}: ${esc(pretty(f.strip, val))} ✕</button>`
        })
        .join("") +
      ` <button class="cerca-clear">Azzera</button>`
    selectedBar.querySelectorAll<HTMLElement>(".cerca-chip.active").forEach((b) =>
      b.addEventListener("click", () => {
        selected.delete(b.dataset.token!)
        render()
      }),
    )
    selectedBar.querySelector(".cerca-clear")?.addEventListener("click", () => {
      selected.clear()
      render()
    })
  }

  function syncChipStates() {
    facetsBox.querySelectorAll<HTMLElement>(".cerca-chip").forEach((c) => {
      c.classList.toggle("active", selected.has(c.dataset.token!))
    })
  }

  function render() {
    page = 1
    syncChipStates()
    renderSelected()
    renderResults()
  }

  render()
}

document.addEventListener("nav", () => {
  init()
})
init()
