import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore  bundled as client-side script
import script from "./scripts/quesitiTables.inline"

const style = `
div.qtable { margin: 1rem 0; overflow-x: auto; }
.qtable-search {
  width: 100%; box-sizing: border-box; padding: 0.5rem 0.7rem; margin-bottom: 0.4rem;
  border: 1px solid var(--lightgray); border-radius: 6px; background: var(--light);
  color: var(--dark); font-size: 0.95rem;
}
.qtable-count { font-size: 0.8rem; color: var(--gray); margin-bottom: 0.4rem; }
table.qtable-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
table.qtable-table th, table.qtable-table td {
  text-align: left; padding: 0.35rem 0.55rem; border-bottom: 1px solid var(--lightgray);
  vertical-align: top;
}
table.qtable-table th.qtable-th { cursor: pointer; user-select: none; white-space: nowrap; }
table.qtable-table th.qtable-th:hover { color: var(--secondary); }
table.qtable-table th.sorted-asc::after { content: " \\2191"; }
table.qtable-table th.sorted-desc::after { content: " \\2193"; }
table.qtable-table td:nth-child(3), table.qtable-table td:nth-child(4) { text-align: center; }
table.qtable-table tr:hover td { background: var(--highlight); }
.qtable-pager {
  display: flex; gap: 0.4rem; align-items: center; justify-content: center;
  margin-top: 0.7rem; flex-wrap: wrap;
}
.qtable-pager .qtable-pg {
  padding: 0.3rem 0.6rem; border: 1px solid var(--lightgray); border-radius: 6px;
  background: var(--light); color: var(--dark); font-size: 0.85rem; cursor: pointer;
}
.qtable-pager .qtable-pg:hover:not([disabled]) { background: var(--highlight); border-color: var(--secondary); }
.qtable-pager .qtable-pg[disabled] { opacity: 0.4; cursor: default; }
.qtable-pager .qtable-pginfo { font-size: 0.85rem; color: var(--gray); min-width: 4rem; text-align: center; }
`

export default (() => {
  const QuesitiTables: QuartzComponent = () => null
  QuesitiTables.afterDOMLoaded = script
  QuesitiTables.css = style
  return QuesitiTables
}) satisfies QuartzComponentConstructor
