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
