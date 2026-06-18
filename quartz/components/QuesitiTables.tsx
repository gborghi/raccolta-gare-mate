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
`

export default (() => {
  const QuesitiTables: QuartzComponent = () => null
  QuesitiTables.afterDOMLoaded = script
  QuesitiTables.css = style
  return QuesitiTables
}) satisfies QuartzComponentConstructor
