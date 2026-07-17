// Measure the real masthead height into --navbar-h so the sticky sidebars / search
// popout offset correctly under the full-width navbar (rendered at <body> level by
// renderPage.tsx). Self-registers; runs on load, resize and SPA "nav".
function setNavH() {
  const n = document.querySelector(".navbar") as HTMLElement | null
  if (n) document.documentElement.style.setProperty("--navbar-h", n.offsetHeight + "px")
}
setNavH()
window.addEventListener("resize", setNavH)
document.addEventListener("nav", setNavH)

// Rename the graph panel label "Vista grafico" -> "Vista grafo" (override the
// community graph plugin's it-IT i18n string without forking the plugin).
function fixGraphLabel() {
  document.querySelectorAll(".graph > h3").forEach((h) => {
    if (h.textContent === "Vista grafico") h.textContent = "Vista grafo"
  })
}
fixGraphLabel()
document.addEventListener("nav", fixGraphLabel)

// Left-sidebar toggle. A collapsed/expanded preference is persisted in localStorage and
// reflected as a `left-collapsed` class on <body>; custom.scss reflows the grid to reclaim
// the column and clips the sidebar to nothing (the fixed search modal still escapes, exactly
// like on the home page). Re-applied on every SPA nav because micromorph re-renders <body>
// from the server HTML, which never carries the class.
const LEFT_KEY = "raccolta-left-collapsed"
function applyLeftCollapsed() {
  const collapsed = localStorage.getItem(LEFT_KEY) === "1"
  document.body.classList.toggle("left-collapsed", collapsed)
  document.querySelector(".navbar-toggle-left")?.setAttribute("aria-expanded", String(!collapsed))
}
applyLeftCollapsed()
document.addEventListener("nav", applyLeftCollapsed)

// Wire the two masthead icon buttons to the existing Quartz controls that live in the
// left sidebar (search modal + darkmode). We delegate on `document` — which persists
// across SPA navigations — so a single listener keeps working without rebinding, and no
// search/theme logic is duplicated here. The theme button's sun/moon glyphs are swapped
// purely by CSS off `:root[saved-theme]`, so a click that flips the attribute is enough.
if (!(window as any).__navbarToolsBound) {
  ;(window as any).__navbarToolsBound = true
  document.addEventListener("click", (e) => {
    const el = e.target as HTMLElement | null
    if (!el) return
    if (el.closest(".navbar-search")) {
      e.preventDefault()
      ;(document.querySelector(".search-button") as HTMLElement | null)?.click()
    } else if (el.closest(".navbar-dark")) {
      e.preventDefault()
      ;(document.querySelector(".darkmode") as HTMLElement | null)?.click()
    } else if (el.closest(".navbar-toggle-left")) {
      e.preventDefault()
      localStorage.setItem(LEFT_KEY, localStorage.getItem(LEFT_KEY) === "1" ? "0" : "1")
      applyLeftCollapsed()
    }
  })
}
