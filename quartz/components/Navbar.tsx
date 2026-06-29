import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Full-width masthead navbar, rendered at <body> level by renderPage.tsx (mirrors the
// maturità/physics site): a viewport-spanning bar with a centered max-width inner grid —
// brand on the left, links centered. Links are ABSOLUTE, built from the configured
// baseUrl's path so they carry the GitHub Pages project base on every page.
// Styles live in quartz/styles/custom.scss; the height-measuring script is
// quartz/components/scripts/navbar.inline.ts (shipped globally via componentResources).
const LINKS: [string, string][] = [
  ["Aree", "Clusters"],
  ["Argomenti", "Topics"],
  ["Metodi", "Methods"],
  ["Abilità", "Skills"],
  ["Cerca", "cerca"],
]

// "host/sub/dir" -> "/sub/dir"  ;  "host" -> ""
function basePathOf(baseUrl?: string): string {
  if (!baseUrl) return ""
  const i = baseUrl.indexOf("/")
  if (i < 0) return ""
  return ("/" + baseUrl.slice(i + 1)).replace(/\/+$/, "")
}

const Navbar: QuartzComponent = ({ cfg, displayClass }: QuartzComponentProps) => {
  const bp = basePathOf(cfg?.baseUrl)
  return (
    <nav class={classNames(displayClass, "navbar")}>
      <div class="navbar-inner">
        <a class="navbar-brand" href={`${bp}/`}>
          <img class="navbar-logo" src={`${bp}/static/logo.svg`} alt="" aria-hidden="true" />
          Raccolta Gare di Matematica
        </a>
        <div class="navbar-links">
          {LINKS.map(([label, slug]) => (
            <a href={`${bp}/${slug}${slug === "cerca" ? "" : "/"}`}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default (() => Navbar) satisfies QuartzComponentConstructor
