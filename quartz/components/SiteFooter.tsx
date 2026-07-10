import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Full-width site footer, rendered at <body> level by renderPage.tsx (mirrors Navbar).
// The forest band spans the viewport while its content is capped to the design's
// content width. The upstream quartz-community/footer output is hidden via
// custom.scss (`#quartz-body > footer { display: none }`) so there is only ever one
// footer. Links are external (competition organisers) so no baseUrl handling is needed.
// Styles live in quartz/styles/custom.scss.

type Link = [label: string, href: string]

const ITALIA: Link[] = [
  ["UMI — Unione Matematica Italiana", "https://umi.dm.unibo.it/"],
  ["Olimpiadi della Matematica", "https://olimpiadi.dm.unibo.it/"],
  ["Kangourou Italia", "https://www.kangourou.it/"],
  ["Centro PRISTEM — Bocconi", "https://giochimatematici.unibocconi.it/"],
]

const INTERNAZIONALI: Link[] = [
  ["IMO — International Mathematical Olympiad", "https://www.imo-official.org/"],
  ["UKMT — United Kingdom", "https://www.ukmt.org.uk/"],
  ["SBM / OBM — Brasile", "https://www.obm.org.br/"],
  ["CMS — Cina", "https://www.cms.org.cn/"],
  ["Animath — Francia", "https://www.animath.fr/"],
]

const SiteFooter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  const year = new Date().getFullYear()
  return (
    <footer class={classNames(displayClass, "site-footer")}>
      <div class="site-footer-inner">
        <div class="site-footer-cols">
          <div class="site-footer-about">
            <div class="site-footer-brand">Raccolta Gare di Matematica</div>
            <p>
              Archivio <strong>didattico, senza scopo di lucro</strong>. I testi delle prove sono
              proprietà dei rispettivi enti organizzatori, qui citati come fonte.
            </p>
            <a class="site-footer-mail" href="mailto:gio.borghi@gmail.com">
              gio.borghi@gmail.com
            </a>
          </div>

          <div class="site-footer-group">
            <div class="site-footer-eyebrow">Italia</div>
            {ITALIA.map(([label, href]) => (
              <a href={href} target="_blank" rel="noopener">
                {label}
              </a>
            ))}
          </div>

          <div class="site-footer-group">
            <div class="site-footer-eyebrow">Internazionali</div>
            {INTERNAZIONALI.map(([label, href]) => (
              <a href={href} target="_blank" rel="noopener">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div class="site-footer-bottom">
          <span>© {year} · Raccolta Gare di Matematica</span>
          <span>17.800 quesiti · classificati per argomento, metodo e abilità · it / en</span>
        </div>
      </div>
    </footer>
  )
}

export default (() => SiteFooter) satisfies QuartzComponentConstructor
