// Escape unescaped currency dollar signs (R$, Cz$, US$) that break MathJax balance.
// Only when $ is currency: preceded by a letter and followed by a digit, or "Cz$"/"R$" forms.
import { promises as fs } from "node:fs"
import path from "node:path"
const KG = "E:/giovanni/Dropbox/insegnamento/Wiligelmo/OlimpiadiMatematica/raccoltaGareMate/Knowledge Graph/Quesiti"
let changed = 0
for (const f of await fs.readdir(KG)) {
  if (!f.endsWith(".md")) continue
  const p = path.join(KG, f)
  let s = await fs.readFile(p, "utf8"), o = s
  // Cz$ currency (followed by digit, ), or space)
  s = s.replace(/Cz\$(?!\\)/g, "Cz\\$")
  // R$ / US$ currency: $ right after a letter and before a digit, not already escaped
  s = s.replace(/([A-Za-z])\$(?=\d)/g, "$1\\$")
  if (s !== o) { await fs.writeFile(p, s); changed++ }
}
console.log("currency files changed:", changed)
