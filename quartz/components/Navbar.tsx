import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Full-width masthead navbar, rendered at <body> level by renderPage.tsx (mirrors the
// maturità/physics site): a viewport-spanning bar with a centered max-width inner grid —
// two-line brand on the left, pill links centered (last one, "Cerca", is a lime CTA that
// goes to the faceted /cerca page), and two icon buttons on the right that drive the
// existing Quartz controls: the search icon opens the full-text search modal, the theme
// icon toggles dark mode. Those two are wired in navbar.inline.ts by delegating to
// `.search-button` / `.darkmode` (which live in the left sidebar) — no logic is duplicated.
// Links are ABSOLUTE, built from the configured baseUrl's path so they carry the GitHub
// Pages project base on every page. Styles live in quartz/styles/custom.scss.
const LINKS: [string, string][] = [
  ["Aree", "Clusters"],
  ["Argomenti", "Topics"],
  ["Metodi", "Methods"],
  ["Abilità", "Skills"],
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
          <span class="navbar-brand-text">
            <span class="navbar-brand-title">Raccolta Gare</span>
            <span class="navbar-brand-sub">di Matematica</span>
          </span>
        </a>

        <div class="navbar-links">
          {LINKS.map(([label, slug]) => (
            <a href={`${bp}/${slug}/`}>{label}</a>
          ))}
          <a class="navbar-cta" href={`${bp}/cerca`}>
            Cerca
          </a>
        </div>

        <div class="navbar-tools">
          <button
            class="navbar-icon navbar-toggle-left"
            type="button"
            aria-label="Mostra/nascondi barra laterale"
            aria-expanded="true"
          >
            <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
              <rect
                x="2.5"
                y="3.5"
                width="15"
                height="13"
                rx="2.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              />
              <line x1="8" y1="3.5" x2="8" y2="16.5" stroke="currentColor" stroke-width="1.6" />
              <rect
                x="3.6"
                y="4.6"
                width="3.6"
                height="10.8"
                rx="1"
                fill="currentColor"
                opacity="0.5"
              />
            </svg>
          </button>
          <button class="navbar-icon navbar-search" type="button" aria-label="Cerca nel testo">
            <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
              <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" stroke-width="1.8" />
              <line
                x1="13.5"
                y1="13.5"
                x2="18"
                y2="18"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button class="navbar-icon navbar-dark" type="button" aria-label="Cambia tema">
            <svg class="navbar-sun" viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
              <circle
                cx="10"
                cy="10"
                r="4.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
              />
              <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
                <line x1="10" y1="1.5" x2="10" y2="3.6" />
                <line x1="10" y1="16.4" x2="10" y2="18.5" />
                <line x1="1.5" y1="10" x2="3.6" y2="10" />
                <line x1="16.4" y1="10" x2="18.5" y2="10" />
                <line x1="4" y1="4" x2="5.5" y2="5.5" />
                <line x1="14.5" y1="14.5" x2="16" y2="16" />
                <line x1="16" y1="4" x2="14.5" y2="5.5" />
                <line x1="5.5" y1="14.5" x2="4" y2="16" />
              </g>
            </svg>
            <svg class="navbar-moon" viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
              <path
                d="M15.5 12.5A6 6 0 0 1 7.5 4.5a6 6 0 1 0 8 8Z"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default (() => Navbar) satisfies QuartzComponentConstructor
