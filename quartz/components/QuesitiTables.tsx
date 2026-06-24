import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore  bundled as client-side script
import script from "./scripts/quesitiTables.inline"

const style = `
div.qtable { margin: 1rem 0; overflow-x: auto; }
.qtable-searchrow {
  display: flex; gap: 0.5rem; align-items: stretch; margin-bottom: 0.4rem; flex-wrap: wrap;
}
.qtable-searchrow .qtable-search { flex: 1 1 16rem; margin-bottom: 0; }
.qtable-search {
  width: 100%; box-sizing: border-box; padding: 0.5rem 0.7rem; margin-bottom: 0.4rem;
  border: 1px solid var(--lightgray); border-radius: 6px; background: var(--light);
  color: var(--dark); font-size: 0.95rem;
}
.qtable-modebtn {
  flex: 0 0 auto; cursor: pointer; white-space: nowrap;
  font-family: var(--titleFont); font-weight: 600; font-size: 0.8rem;
  padding: 0.3rem 0.7rem; border-radius: 999px;
  border: 1.5px solid var(--lightgray); background: var(--light); color: var(--darkgray);
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.qtable-modebtn:hover { border-color: var(--secondary); color: var(--dark); }
.qtable-modebtn[aria-pressed="true"] {
  background: var(--secondary); color: var(--light); border-color: var(--secondary);
}
.qtable-modebtn:disabled { opacity: 0.6; cursor: progress; }
.qtable-controls {
  display: flex; align-items: center; justify-content: space-between; gap: 0.6rem;
  flex-wrap: wrap; margin-bottom: 0.4rem;
}
.qtable-count { font-size: 0.8rem; color: var(--gray); }
.paged-perpage-label { font-size: 0.85rem; color: var(--darkgray); display: inline-flex; align-items: center; gap: 0.4rem; }
.paged-perpage {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.85rem;
  padding: 0.2rem 0.45rem; border-radius: 8px; border: 1.5px solid var(--lightgray);
  background: var(--light); color: var(--dark); cursor: pointer;
}
.paged-perpage:focus { outline: none; border-color: var(--secondary); }
table.qtable-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
table.qtable-table th, table.qtable-table td {
  text-align: left; padding: 0.35rem 0.55rem; border-bottom: 1px solid var(--lightgray);
  vertical-align: top;
}
table.qtable-table th.qtable-th { cursor: pointer; user-select: none; white-space: nowrap; }
table.qtable-table th.qtable-th:hover { color: var(--secondary); }
table.qtable-table th.sorted-asc::after { content: " \\2191"; }
table.qtable-table th.sorted-desc::after { content: " \\2193"; }
/* col1 flag (Stato), col5 N. centered */
table.qtable-table td:nth-child(5) { text-align: center; }
table.qtable-table th:first-child, table.qtable-table td.qt-flag { text-align: center; }
table.qtable-table td.qt-flag { white-space: nowrap; width: 1%; }
.qt-flag-img {
  height: 1.05em; width: auto; vertical-align: -0.15em; border-radius: 2px;
  box-shadow: 0 0 0 1px var(--lightgray); display: inline-block;
}
.qt-globe { font-size: 1.1em; }
table.qtable-table tr:hover td { background: var(--highlight); }
.qtable-pager {
  display: flex; gap: 0.3rem; align-items: center; justify-content: center;
  margin-top: 0.9rem; flex-wrap: wrap;
}
.qtable-pager .paged-btn {
  font-family: var(--titleFont); font-weight: 600; font-size: 0.85rem;
  min-width: 2rem; padding: 0.3rem 0.6rem; border-radius: 999px;
  border: 1.4px solid var(--lightgray); background: var(--light); color: var(--dark);
  cursor: pointer; transition: all 0.12s ease;
}
.qtable-pager .paged-btn:hover:not(:disabled) { border-color: var(--secondary); }
.qtable-pager .paged-btn.current { background: var(--secondary); color: #fff; border-color: var(--secondary); }
.qtable-pager .paged-btn:disabled { opacity: 0.4; cursor: default; }
.qtable-pager .paged-ellip { color: var(--gray); padding: 0 0.2rem; }
`

export default (() => {
  const QuesitiTables: QuartzComponent = () => null
  QuesitiTables.afterDOMLoaded = script
  QuesitiTables.css = style
  return QuesitiTables
}) satisfies QuartzComponentConstructor
