import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Sticky top navbar (verdone theme). Links are ABSOLUTE, built from the configured
// baseUrl's path (e.g. "/raccolta-gare-mate"), so they always carry the GitHub
// Pages project base regardless of the current page, SPA navigation, or
// trailing-slash quirks. Folder targets keep a trailing slash; "cerca" is a leaf page.
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
      <a class="navbar-brand" href={`${bp}/`}>
        <span class="navbar-dot" aria-hidden="true"></span>
        Gare di Matematica
      </a>
      <button class="navbar-toggle" aria-label="Menu">☰</button>
      <div class="navbar-links">
        {LINKS.map(([label, slug]) => (
          <a href={`${bp}/${slug}${slug === "cerca" ? "" : "/"}`}>{label}</a>
        ))}
      </div>
    </nav>
  )
}

Navbar.css = `
.navbar {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
  margin: -0.5rem 0 1.4rem 0; padding: 0.55rem 1.1rem;
  background: var(--navbar-bg);
  border-radius: 0 0 14px 14px;
  box-shadow: 0 3px 14px rgba(18, 90, 60, 0.22);
}
.navbar-brand {
  display: inline-flex; align-items: center; gap: 0.55rem;
  font-family: var(--titleFont); font-weight: 800; font-size: 1.15rem;
  color: var(--navbar-fg) !important; background: none; letter-spacing: -0.01em;
  text-decoration: none !important;
}
.navbar-dot {
  width: 16px; height: 16px; border-radius: 50%;
  background: conic-gradient(var(--accent-lime), var(--accent-mint), var(--accent-teal), var(--accent-lime));
  box-shadow: 0 0 0 3px rgba(255,255,255,0.18);
  flex: 0 0 auto;
}
.navbar-links { display: flex; gap: 0.35rem; flex-wrap: wrap; margin-left: auto; }
.navbar-links a {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.92rem;
  color: var(--navbar-fg) !important; background: rgba(255,255,255,0.0);
  padding: 0.32rem 0.7rem; border-radius: 999px; text-decoration: none !important;
  transition: background 0.15s ease, color 0.15s ease;
}
.navbar-links a:hover { background: var(--accent-lime); color: #10241a !important; }
.navbar-toggle { display: none; background: none; border: 0; color: var(--navbar-fg); font-size: 1.3rem; cursor: pointer; }
@media all and (max-width: 800px) {
  .navbar-links a { font-size: 0.85rem; padding: 0.28rem 0.55rem; }
}
`

export default (() => Navbar) satisfies QuartzComponentConstructor
