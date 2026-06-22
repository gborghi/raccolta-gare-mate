import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Full-width masthead navbar (rendered at <body> level by renderPage.tsx), mirroring
// the maturità/physics site: a viewport-spanning bar with a centered max-width inner
// grid — brand on the left, links centered. Links are ABSOLUTE, built from the
// configured baseUrl's path so they carry the GitHub Pages project base on every page.
// Navbar.afterDOMLoaded measures the real bar height into --navbar-h, which custom.scss
// uses to offset the sticky sidebars (so content isn't pushed too low) and to place the
// search popout below the masthead.
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
  position: sticky; top: 0; z-index: 1000;
  width: 100%; margin: 0; padding: 0.4rem 2rem;
  background: var(--navbar-bg);
  box-shadow: 0 2px 14px rgba(18, 90, 60, 0.22);
}
.navbar-inner {
  display: grid; grid-template-columns: 1fr auto 1fr;
  align-items: center; gap: 1rem;
  /* match the page grid width (.page is max-width: desktop+300 = 1500px) */
  max-width: 1500px; margin: 0 auto;
}
.navbar-brand {
  grid-column: 1; justify-self: start;
  display: inline-flex; align-items: center; gap: 0.55rem;
  font-family: var(--titleFont); font-weight: 800; font-size: 1.2rem;
  letter-spacing: -0.01em;
  color: var(--navbar-fg) !important; background: none; text-decoration: none !important;
}
/* Brand emblem spans (nearly) the full navbar height; height drives the bar height. */
.navbar-logo {
  height: 3rem; width: auto; flex: 0 0 auto; display: block;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}
.navbar-links {
  grid-column: 2; justify-self: center;
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0.4rem;
}
.navbar-links a {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.95rem;
  color: var(--navbar-fg) !important; background-image: none;
  padding: 0.38rem 0.85rem; border-radius: 999px; text-decoration: none !important;
  transition: background 0.15s ease, color 0.15s ease;
}
.navbar-links a:hover { background: var(--accent-lime); color: #10241a !important; }
@media (max-width: 800px) {
  .navbar { padding: 0.4rem 1rem; }
  .navbar-inner { grid-template-columns: 1fr; justify-items: center; gap: 0.5rem; }
  .navbar-brand { justify-self: center; }
  .navbar-logo { height: 2.5rem; }
  .navbar-links a { padding: 0.3rem 0.6rem; font-size: 0.85rem; }
}
`

// The masthead height varies with viewport width (the nav links wrap), so a fixed
// magic number for the sidebar offset is fragile. Measure the real height and
// publish it as --navbar-h; the sidebar/search CSS uses it for top + height.
Navbar.afterDOMLoaded = `
function __setNavH(){
  var n = document.querySelector('.navbar');
  if (n) document.documentElement.style.setProperty('--navbar-h', n.offsetHeight + 'px');
}
__setNavH();
window.addEventListener('resize', __setNavH);
document.addEventListener('nav', __setNavH);
`

export default (() => Navbar) satisfies QuartzComponentConstructor
