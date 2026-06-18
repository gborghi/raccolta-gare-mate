// Adds `modalita: "squadre"|"individuale"` + tag gara/<modalita> to vault notes
// that have a `competition:` (quesito + gara notes). MINIMAL textual injection:
// every other byte of the file is preserved. Idempotent (skips if modalita set).
// Usage:  node patch_modalita.mjs            -> dry run (no writes, prints samples)
//         node patch_modalita.mjs --apply    -> writes back to the vault
import { promises as fs } from "node:fs"
import path from "node:path"

const QUESITI = "E:/giovanni/Dropbox/insegnamento/Wiligelmo/OlimpiadiMatematica/raccoltaGareMate/Knowledge Graph/Quesiti"
const APPLY = process.argv.includes("--apply")

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name)
    if (e.isDirectory()) await walk(f, out)
    else if (e.name.endsWith(".md")) out.push(f)
  }
  return out
}

function patch(text) {
  // locate frontmatter block
  const m = text.match(/^(---\r?\n)([\s\S]*?)(\r?\n---)/)
  if (!m) return null
  let fm = m[2]
  if (!/^competition:/m.test(fm)) return null // not a gara/quesito note
  if (/^modalita:/m.test(fm)) return null // already patched

  const compLine = fm.match(/^competition:\s*(.*)$/m)
  const modalita = compLine && /squadr/i.test(compLine[1]) ? "squadre" : "individuale"

  // 1) insert modalita line right after the country line (fallback: after competition)
  const anchor = /^country:.*$/m.test(fm) ? /^(country:.*)$/m : /^(competition:.*)$/m
  fm = fm.replace(anchor, `$1\nmodalita: "${modalita}"`)

  // 2) add tag into the tags: [...] array (before the closing ])
  if (/^tags:\s*\[[^\]]*\]/m.test(fm)) {
    fm = fm.replace(/^(tags:\s*\[[^\]]*?)\s*\]/m, `$1, gara/${modalita}]`)
  }

  const newText = text.slice(0, m.index) + m[1] + fm + m[3] + text.slice(m.index + m[0].length)
  return { newText, modalita }
}

const files = await walk(QUESITI)
let changed = 0,
  skipped = 0
const counts = { squadre: 0, individuale: 0 }
const samples = []
for (const f of files) {
  const text = await fs.readFile(f, "utf8")
  const res = patch(text)
  if (!res) {
    skipped++
    continue
  }
  changed++
  counts[res.modalita]++
  if (samples.length < 2 && (samples.length === 0 || samples[0].modalita !== res.modalita)) {
    samples.push({ f: path.basename(f), modalita: res.modalita, fm: res.newText.match(/^---[\s\S]*?---/)[0] })
  }
  if (APPLY) await fs.writeFile(f, res.newText)
}

console.log(`${APPLY ? "APPLIED" : "DRY RUN"} — would change ${changed}, skip ${skipped}. squadre=${counts.squadre} individuale=${counts.individuale}`)
for (const s of samples) {
  console.log(`\n--- sample (${s.modalita}): ${s.f} ---\n${s.fm}`)
}
