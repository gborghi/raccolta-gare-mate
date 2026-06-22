import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Sticky top navbar matching the physics site (raccolta-gare-fisica): a full-width
// bar with a centered inner grid (brand left, pill links center). Links are
// ABSOLUTE, built from the configured baseUrl's path (e.g. "/raccolta-gare-mate"),
// so they carry the GitHub Pages project base regardless of SPA navigation.
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

Navbar.css = `
.navbar {
  position: sticky; top: 0; z-index: 900; width: 100%; margin: 0;
  padding: 0.9rem 2rem; background: var(--navbar-bg);
  box-shadow: 0 2px 14px rgba(18, 90, 60, 0.22);
}
.navbar-inner {
  display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;
  gap: 1rem; max-width: 1100px; margin: 0 auto;
}
.navbar-brand {
  grid-column: 1; justify-self: start;
  display: inline-flex; align-items: center; gap: 0.55rem;
  font-family: var(--titleFont); font-weight: 800; font-size: 1.2rem;
  letter-spacing: -0.01em; color: var(--navbar-fg) !important;
  background: none; text-decoration: none !important;
}
.navbar-logo {
  height: 40px; width: auto; flex: none; display: block;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.25));
}
.navbar-links { grid-column: 2; display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center; justify-self: center; }
.navbar-links a {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.95rem;
  padding: 0.38rem 0.85rem; border-radius: 999px; background-image: none;
  color: var(--navbar-fg) !important; text-decoration: none !important;
  transition: background 0.15s, color 0.15s;
}
.navbar-links a:hover { background: var(--accent-lime); color: #10241a !important; }
@media all and (max-width: 800px) {
  .navbar { padding: 0.6rem 1rem; }
  .navbar-inner { grid-template-columns: 1fr; justify-items: center; gap: 0.5rem; }
  .navbar-brand { justify-self: center; }
  .navbar-logo { height: 32px; }
  .navbar-links a { padding: 0.3rem 0.6rem; font-size: 0.85rem; }
}
`

export default (() => Navbar) satisfies QuartzComponentConstructor
