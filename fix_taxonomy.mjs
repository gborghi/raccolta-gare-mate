// Remap non-canonical taxonomy keys (from extraction noise) to canonical nodes,
// so all [[...]] wikilinks resolve. Whole-token replace (\b respects underscores).
import { promises as fs } from "node:fs"
import path from "node:path"

const KG = "E:/giovanni/Dropbox/insegnamento/Wiligelmo/OlimpiadiMatematica/raccoltaGareMate/Knowledge Graph/Quesiti"
const MAP = {
  method_riconoscimento_pattern: "skill_riconoscimento_pattern",
  method_manipolazione_algebrica: "skill_manipolazione_algebrica",
  method_manipolazione: "skill_manipolazione_algebrica",
  method_stima: "skill_stima",
  method_monovariant: "method_invarianti",
  method_costruzione: "method_casework",
  method_costruttivo: "method_casework",
  topic_grafi: "topic_combinatoria",
  skill_trigonometria: "skill_ragionamento_geometrico",
}
const keys = Object.keys(MAP).sort((a, b) => b.length - a.length) // longest first
let changed = 0
for (const f of await fs.readdir(KG)) {
  if (!f.endsWith(".md")) continue
  const p = path.join(KG, f)
  let s = await fs.readFile(p, "utf8"), orig = s
  for (const k of keys) s = s.replace(new RegExp(`\\b${k}\\b`, "g"), MAP[k])
  if (s !== orig) { await fs.writeFile(p, s); changed++ }
}
console.log("taxonomy files changed:", changed)
