// Bilingual quesito language switch. preprocess.mjs merges a translated sibling
// body into the default quesito page, separated by a `<span class="qlang-split"
// data-lang="…">` marker and preceded by a `<div class="qlang-switch"
// data-default="…">` placeholder. This partitions the rendered article DOM into
// two language groups at the marker, draws flag buttons, toggles visibility, and
// persists the choice in localStorage["qlang"].
//
// Flag emoji don't render on Windows (they show "IT"), so we use the local
// flagcdn SVGs already shipped for the tables: it -> it.svg, en -> gb.svg.

const ISO: Record<string, string> = { it: "it", en: "gb" }
const LABEL: Record<string, string> = { it: "Italiano", en: "English" }

function setupQlang() {
  const sw = document.querySelector(".qlang-switch") as HTMLElement | null
  if (!sw) return
  // The switch, the split marker, and all body nodes are SIBLINGS under the
  // rendered-markdown container (Quartz wraps content in
  // <article><div class="markdown-rendered">…</div></article>, so the nodes are
  // children of that inner div, NOT of <article>). Partition over the switch's
  // own parent to stay correct regardless of the article wrapper depth.
  const container = sw.parentElement
  const split = container?.querySelector(".qlang-split") as HTMLElement | null
  if (!container || !split) return

  const defaultLang = sw.dataset.default || "it"
  const otherLang = split.dataset.lang || (defaultLang === "it" ? "en" : "it")
  const langs = [defaultLang, otherLang]

  // Group the container's top-level nodes: everything before the split marker is
  // the default language, everything from the marker onward is the other language.
  // The marker may be wrapped in a <p>, so match by containment too.
  const groups: Record<string, HTMLElement[]> = { [defaultLang]: [], [otherLang]: [] }
  let cur = defaultLang
  for (const node of Array.from(container.children) as HTMLElement[]) {
    if (node === sw) continue
    if (node.classList.contains("qlang-split") || node.contains(split)) {
      cur = otherLang
      continue
    }
    groups[cur].push(node)
  }

  const bp = document.body.dataset.basepath || ""
  const stored = localStorage.getItem("qlang")
  let active = stored && langs.includes(stored) ? stored : defaultLang

  function apply(lang: string) {
    for (const l of langs) for (const n of groups[l]) n.style.display = l === lang ? "" : "none"
    sw.querySelectorAll("button").forEach((b) =>
      b.classList.toggle("active", (b as HTMLElement).dataset.lang === lang),
    )
    active = lang
  }

  sw.replaceChildren()
  for (const l of langs) {
    const b = document.createElement("button")
    b.type = "button"
    b.dataset.lang = l
    b.className = "qlang-btn"
    b.title = LABEL[l] || l
    const iso = ISO[l]
    if (iso) {
      const img = document.createElement("img")
      img.className = "qlang-flag"
      img.src = `${bp}/static/flags/${iso}.svg`
      img.alt = LABEL[l] || l
      img.loading = "lazy"
      b.appendChild(img)
    } else {
      b.textContent = l.toUpperCase()
    }
    b.addEventListener("click", () => {
      localStorage.setItem("qlang", l)
      apply(l)
    })
    sw.appendChild(b)
  }
  apply(active)
}

document.addEventListener("nav", setupQlang)
// Also run once on initial load in case the SPA router fired its first `nav`
// before this listener was registered. setupQlang re-queries the DOM each time
// and is safe to call repeatedly.
setupQlang()
