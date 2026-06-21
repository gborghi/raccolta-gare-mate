// Final site audit: internal link integrity, LaTeX balance, MC <li> format.
import { promises as fs } from "node:fs"
import path from "node:path"

const ROOT = "content"
const DIRS = ["Quesiti", "Topics", "Methods", "Skills", "Clusters"]
const att = new Set(await fs.readdir(path.join(ROOT, "_attachments")).catch(() => []))

// collect all note basenames (without .md) across content
const notes = new Map() // basename -> relpath
async function walk(d) {
  for (const e of await fs.readdir(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) { if (e.name !== "_attachments") await walk(p) }
    else if (e.name.endsWith(".md")) notes.set(e.name.slice(0, -3), p)
  }
}
await walk(ROOT)

let files = []
for (const d of DIRS) {
  const dp = path.join(ROOT, d)
  try { for (const f of await fs.readdir(dp)) if (f.endsWith(".md")) files.push(path.join(dp, f)) } catch {}
}

const brokenLinks = new Map(), brokenEmbeds = new Map(), latexBad = [], mcMissing = []
let nLinks = 0, nEmbeds = 0

for (const f of files) {
  const s = await fs.readFile(f, "utf8")
  // embeds ![[...]]
  for (const m of s.matchAll(/!\[\[([^\]]+)\]\]/g)) {
    nEmbeds++
    const tgt = m[1].split("|")[0].split("#")[0].trim()
    if (!att.has(tgt)) brokenEmbeds.set(tgt, (brokenEmbeds.get(tgt) || 0) + 1)
  }
  // links [[...]] (not preceded by !)
  for (const m of s.matchAll(/(^|[^!])\[\[([^\]]+)\]\]/g)) {
    nLinks++
    const tgt = m[2].split("|")[0].split("#")[0].trim()
    if (!notes.has(tgt)) brokenLinks.set(tgt, (brokenLinks.get(tgt) || 0) + 1)
  }
  // latex: strip code blocks, count unescaped $
  const body = s.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, "")
  const dollars = (body.match(/(?<!\\)\$/g) || []).length
  if (dollars % 2 !== 0) latexBad.push(path.basename(f) + ` (odd $: ${dollars})`)
  // MC: frontmatter modalita scelta multipla must have option list
  if (/modalita:\s*"?scelta multipla/.test(s) && /tipo:\s*quesito/.test(s)) {
    if (!/^>\s*-\s*\*\*\(/m.test(s)) mcMissing.push(path.basename(f))
  }
}

const top = (m, n = 15) => [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n)
console.log(`files audited: ${files.length}`)
console.log(`links: ${nLinks}, broken targets: ${brokenLinks.size}`)
console.log(`embeds: ${nEmbeds}, broken targets: ${brokenEmbeds.size}`)
console.log(`latex odd-$ files: ${latexBad.length}`)
console.log(`MC quesiti missing option list: ${mcMissing.length}`)
console.log("\n-- top broken link targets --")
for (const [k, v] of top(brokenLinks)) console.log(`  ${v}x  ${k}`)
console.log("\n-- top broken embed targets --")
for (const [k, v] of top(brokenEmbeds)) console.log(`  ${v}x  ${k}`)
console.log("\n-- latex odd-$ (first 15) --")
for (const x of latexBad.slice(0, 15)) console.log("  " + x)
console.log("\n-- MC missing list (first 15) --")
for (const x of mcMissing.slice(0, 15)) console.log("  " + x)
