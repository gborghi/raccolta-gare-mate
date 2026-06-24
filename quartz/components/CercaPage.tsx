import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore  bundled as client-side script
import script from "./scripts/cerca.inline"

const style = `
#cerca { margin-top: 1rem; }
.cerca-controls { margin-bottom: 0.8rem; }
.cerca-toggle {
  padding: 0.4rem 0.8rem; border: 1px solid var(--secondary); border-radius: 6px;
  background: var(--secondary); color: var(--light); cursor: pointer; font-size: 0.9rem;
}
.cerca-toggle:hover { opacity: 0.9; }
.cerca-facets { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.8rem; }
details.cerca-facet { border: 1px solid var(--lightgray); border-radius: 6px; padding: 0.3rem 0.6rem; }
details.cerca-facet > summary { cursor: pointer; font-weight: 600; padding: 0.2rem 0; }
.cerca-chips { display: flex; flex-wrap: wrap; gap: 0.35rem; padding: 0.4rem 0; }
.cerca-chip {
  display: inline-flex; align-items: center; gap: 0.3rem;
  padding: 0.2rem 0.55rem; border: 1px solid var(--lightgray); border-radius: 999px;
  background: var(--light); color: var(--dark); cursor: pointer; font-size: 0.82rem;
}
.cerca-chip:hover { border-color: var(--secondary); }
.cerca-chip.active { background: var(--secondary); color: var(--light); border-color: var(--secondary); }
.cerca-chip .cerca-n { font-size: 0.72rem; opacity: 0.7; }
.cerca-chip.active .cerca-n { opacity: 0.85; }
.cerca-selected { margin: 0.6rem 0; display: flex; flex-wrap: wrap; gap: 0.35rem; align-items: center; }
.cerca-sel-label { font-size: 0.85rem; color: var(--gray); margin-right: 0.2rem; }
.cerca-clear {
  padding: 0.2rem 0.6rem; border: 1px solid var(--lightgray); border-radius: 6px;
  background: transparent; color: var(--gray); cursor: pointer; font-size: 0.8rem;
}
.cerca-count { font-size: 0.9rem; margin: 0.5rem 0; }
.cerca-hint { color: var(--gray); }
/* free-text search box + table/content toggle + pagination (shared look w/ in-body tables) */
.qtable-searchrow { display: flex; gap: 0.5rem; align-items: stretch; margin: 0.4rem 0; flex-wrap: wrap; }
.qtable-searchrow .qtable-search { flex: 1 1 16rem; margin: 0; }
.qtable-search {
  width: 100%; box-sizing: border-box; padding: 0.5rem 0.7rem;
  border: 1px solid var(--lightgray); border-radius: 6px; background: var(--light);
  color: var(--dark); font-size: 0.95rem;
}
.qtable-modebtn {
  flex: 0 0 auto; cursor: pointer; white-space: nowrap;
  font-family: var(--titleFont); font-weight: 600; font-size: 0.8rem;
  padding: 0.3rem 0.7rem; border-radius: 999px;
  border: 1.5px solid var(--lightgray); background: var(--light); color: var(--darkgray);
}
.qtable-modebtn:hover { border-color: var(--secondary); color: var(--dark); }
.qtable-modebtn[aria-pressed="true"] { background: var(--secondary); color: var(--light); border-color: var(--secondary); }
.qtable-modebtn:disabled { opacity: 0.6; cursor: progress; }
.qtable-controls { display: flex; align-items: center; justify-content: space-between; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 0.4rem; }
.paged-perpage-label { font-size: 0.85rem; color: var(--darkgray); display: inline-flex; align-items: center; gap: 0.4rem; }
.paged-perpage {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.85rem;
  padding: 0.2rem 0.45rem; border-radius: 8px; border: 1.5px solid var(--lightgray);
  background: var(--light); color: var(--dark); cursor: pointer;
}
.qtable-pager { display: flex; flex-wrap: wrap; gap: 0.25rem; justify-content: center; margin-top: 0.8rem; }
.paged-btn {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.85rem;
  min-width: 2rem; padding: 0.25rem 0.5rem; border-radius: 8px;
  border: 1.5px solid var(--lightgray); background: var(--light); color: var(--dark); cursor: pointer;
}
.paged-btn:hover:not(:disabled) { border-color: var(--secondary); }
.paged-btn.current { background: var(--secondary); color: var(--light); border-color: var(--secondary); }
.paged-btn:disabled { opacity: 0.4; cursor: default; }
.paged-ellip { padding: 0.25rem 0.2rem; color: var(--gray); }
.cerca-results table.qtable-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
.cerca-results th, .cerca-results td {
  text-align: left; padding: 0.35rem 0.55rem; border-bottom: 1px solid var(--lightgray); vertical-align: top;
}
.cerca-results th.qtable-th { cursor: pointer; user-select: none; white-space: nowrap; }
.cerca-results th.sorted-asc::after { content: " \\2191"; }
.cerca-results th.sorted-desc::after { content: " \\2193"; }
.cerca-results td:nth-child(4) { text-align: center; }
.cerca-results th:first-child, .cerca-results td.qt-flag { text-align: center; }
.cerca-results td.qt-flag { white-space: nowrap; font-size: 1.15rem; width: 1%; }
.cerca-results tr:hover td { background: var(--highlight); }
`

export default (() => {
  const CercaPage: QuartzComponent = () => null
  CercaPage.afterDOMLoaded = script
  CercaPage.css = style
  return CercaPage
}) satisfies QuartzComponentConstructor
