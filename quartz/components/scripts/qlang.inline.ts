// Quesito language switch (original + translations), same algorithm as the physics site.
// Content convention (DEPLOY.md, "Lingue dei quesiti"):
//   <div class="qlang-switch" data-default="<original>"></div>  ...original body...
//   <div|span class="qlang-split" data-lang="<l>"></div>  ...translated body...  (repeated)
// Partitions the switch's sibling nodes at the split markers, draws flag buttons, toggles
// visibility and persists the choice in localStorage["qlang"].
//
// FAIL-SAFE (bug 2026-10-02: a saved non-default language hid the whole gara reader):
//  - on gara reading pages the widget is wired only inside the mounted reader pane
//    (atomRouter fires "atomrender"); before that the switch's parent is the whole page,
//    and partitioning it hid the .atom-reader placeholder itself;
//  - a node that is or contains .atom-reader / .ar-shell is never hidden;
//  - a saved language missing on this quesito falls back to data-default;
//  - any error leaves the page untouched (everything visible).
// Flags are local SVGs (static/flags; CSP img-src 'self' on Cloudflare); no SVG -> code.

const ISO: Record<string, string> = { it: "it", en: "gb", pt: "br", fr: "fr", ja: "jp", zh: "cn", pl: "pl" }
const LABEL: Record<string, string> = {
  it: "Italiano", en: "English", es: "Español", pt: "Português", de: "Deutsch", fr: "Français",
  ja: "日本語", zh: "中文", pl: "Polski",
}
const STORE_KEY = "qlang"
const PROTECTED = ".atom-reader, .ar-shell, .ar-pane"

function readStored(): string | null {
  try { return localStorage.getItem(STORE_KEY) } catch { return null }
}
function saveStored(l: string) {
  try { localStorage.setItem(STORE_KEY, l) } catch {}
}

function setupQlang() {
  try {
    // reader page not mounted yet: atomRouter will fire "atomrender" with the pane in place
    const reader = document.querySelector(".atom-reader")
    const sw = (reader
      ? document.querySelector(".ar-pane .qlang-switch")
      : document.querySelector(".qlang-switch")) as HTMLElement | null
    if (!sw || sw.dataset.qlangReady) return
    const container = sw.parentElement
    if (!container) return

    const defaultLang = sw.dataset.default || "it"
    const groups: Record<string, HTMLElement[]> = { [defaultLang]: [] }
    const langs: string[] = [defaultLang]
    const markers: HTMLElement[] = []
    let cur = defaultLang
    for (const node of Array.from(container.children) as HTMLElement[]) {
      if (node === sw) continue
      if (node.matches?.(PROTECTED) || node.querySelector?.(PROTECTED)) continue
      const split = node.classList?.contains("qlang-split")
        ? node
        : (node.querySelector?.(".qlang-split") as HTMLElement | null)
      if (split) {
        cur = split.dataset.lang || cur
        if (!groups[cur]) { groups[cur] = []; langs.push(cur) }
        // the marker's own wrapper is empty -> hide it (unless it carries real text)
        if (!(node.textContent || "").trim()) markers.push(node)
        else (groups[cur] ||= []).push(node)
        continue
      }
      (groups[cur] ||= []).push(node)
    }
    if (langs.length < 2) return

    const stored = readStored()
    let active = stored && langs.includes(stored) && groups[stored]?.length ? stored : defaultLang

    const apply = (lang: string) => {
      if (!groups[lang]?.length) lang = defaultLang // never show an empty language
      for (const l of langs) for (const n of groups[l]) n.style.display = l === lang ? "" : "none"
      for (const m of markers) m.style.display = "none"
      sw.querySelectorAll("button").forEach((b) =>
        b.classList.toggle("active", (b as HTMLElement).dataset.lang === lang))
      active = lang
    }

    const bp = document.body.dataset.basepath || ""
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
      b.addEventListener("click", () => { saveStored(l); apply(l) })
      sw.appendChild(b)
    }
    sw.dataset.qlangReady = "1"
    apply(active)
  } catch (e) {
    // fail-safe: show everything rather than an empty reader
    document.querySelectorAll<HTMLElement>(".qlang-switch ~ *").forEach((n) => {
      if (!n.classList.contains("qlang-split")) n.style.display = ""
    })
    console.warn("[qlang]", e)
  }
}

document.addEventListener("nav", setupQlang)
// atomRouter.inline.ts fires "atomrender" after swapping the visible quesito in a gara
// reading page (it clears qlangReady on that atom's switch first).
document.addEventListener("atomrender", setupQlang)
