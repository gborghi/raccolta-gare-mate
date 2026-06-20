// Generates KG notes for the India archive (INMO/RMO/PRMO/IOQM) from
// india_extract/json. English statements. country: India.
// RMO regional papers of the same year are content-deduped: identical problems
// across regions collapse into ONE note tagged with all its regions.
import { promises as fs } from "node:fs"
import path from "node:path"

const STAGING = "E:/giovanni/india_extract/json"
const MANIFEST = "E:/giovanni/india_extract/manifest.json"
const QA = "E:/giovanni/india_extract/qa"
const KG = "E:/giovanni/Dropbox/insegnamento/Wiligelmo/OlimpiadiMatematica/raccoltaGareMate/Knowledge Graph"
const QDIR = KG + "/Quesiti"
const ATT = KG + "/_attachments"
const PDFBASE = "gare_di_altri_paesi/India"

let attFiles = []
try { attFiles = await fs.readdir(ATT) } catch {}
const figuresFor = (qfile) => attFiles.filter((f) => f.startsWith(qfile) && /\.(png|jpe?g)$/i.test(f)).sort()

const TLAB = {
  topic_aritmetica: "Aritmetica / Teoria dei Numeri", topic_algebra: "Algebra", topic_combinatoria: "Combinatoria",
  topic_geometria_piana: "Geometria piana", topic_geometria_solida: "Geometria solida",
  topic_geometria_analitica: "Geometria analitica", topic_trigonometria: "Trigonometria",
  topic_logica: "Logica", topic_probabilita: "Probabilità", topic_disuguaglianze: "Disuguaglianze",
  topic_funzionali: "Equazioni funzionali", topic_insiemi_funzioni: "Insiemi e funzioni",
}
const MLAB = {
  method_backward: "Backward", method_bigezione: "Biiezione", method_casework: "Casework", method_casi_conteggio: "Casi e conteggio",
  method_cassetti: "Principio dei cassetti", method_colorazione: "Colorazione", method_congruenze: "Congruenze",
  method_conteggio: "Conteggio", method_coordinate: "Coordinate", method_disuguaglianze: "Disuguaglianze",
  method_doppio_conteggio: "Doppio conteggio", method_estremalita: "Estremalità", method_fattorizzazione: "Fattorizzazione",
  method_grafi: "Grafi", method_inclusione_esclusione: "Inclusione-esclusione", method_induzione: "Induzione",
  method_invarianti: "Invarianti", method_ricorsione: "Ricorsione", method_simmetria: "Simmetria",
  method_telescoping: "Telescoping", method_trigonometria: "Trigonometria",
}
const SLAB = {
  skill_astrazione: "Astrazione", skill_casework_accurato: "Casework accurato", skill_conteggio_sistematico: "Conteggio sistematico",
  skill_lettura_attenta: "Lettura attenta", skill_manipolazione_algebrica: "Manipolazione algebrica",
  skill_modellizzazione: "Modellizzazione", skill_ragionamento_geometrico: "Ragionamento geometrico",
  skill_riconoscimento_pattern: "Riconoscimento di pattern", skill_stima: "Stima",
}
const T2C = {
  topic_aritmetica: "Aritmetica e Teoria dei Numeri",
  topic_algebra: "Algebra e Analisi", topic_disuguaglianze: "Algebra e Analisi", topic_funzionali: "Algebra e Analisi", topic_insiemi_funzioni: "Algebra e Analisi",
  topic_combinatoria: "Combinatoria, Logica e Probabilita", topic_logica: "Combinatoria, Logica e Probabilita", topic_probabilita: "Combinatoria, Logica e Probabilita",
  topic_geometria_piana: "Geometria", topic_geometria_solida: "Geometria", topic_geometria_analitica: "Geometria", topic_trigonometria: "Geometria",
}
const COMP_LABEL = {
  inmo: "Indian National Mathematical Olympiad", rmo: "Regional Mathematical Olympiad",
  prmo: "Pre-Regional Mathematical Olympiad (PRMO)", ioqm: "Indian Olympiad Qualifier in Mathematics (IOQM)",
}
const REG_LABEL = { mumbai: "Mumbai", kv: "KV/JNV", kvjnv: "KV/JNV", nonkv: "Non-KV", r1: "Region 1", r2: "Region 2", r3: "Region 3", r4: "Region 4", r5: "Region 5", sep07: "Sep 07", sep28: "Sep 28", a: "Set A", b: "Set B" }
const pad = (n) => String(n).padStart(2, "0")
const tagSlug = (s) => s.replace(/\s+/g, "-")
const ysafe = (s) => String(s).replace(/"/g, "'")
const norm = (s) => String(s || "").toLowerCase().replace(/[\s$\\{}]/g, "").replace(/[^\w]/g, "").slice(0, 400)

const manifest = JSON.parse(await fs.readFile(MANIFEST, "utf8"))
const fileFor = Object.fromEntries(manifest.map((m) => [m.src, m.file]))

const qaScore = {}
try {
  for (const f of await fs.readdir(QA)) {
    if (!f.endsWith(".json")) continue
    try { const q = JSON.parse(await fs.readFile(`${QA}/${f}`, "utf8")); qaScore[q.src] = q.score } catch {}
  }
} catch {}

// load all papers
const files = (await fs.readdir(STAGING)).filter((f) => f.endsWith(".json"))
const papers = []
const bad = []
for (const file of files) {
  try {
    const p = JSON.parse(await fs.readFile(path.join(STAGING, file), "utf8"))
    if (p.src && Array.isArray(p.problems) && p.problems.length) papers.push(p)
    else bad.push(`${file}: empty`)
  } catch (e) { bad.push(`${file}: ${e.message}`) }
}

// canonical-note registry for RMO dedup: key `${year}::${norm}` -> qfile
const rmoCanon = new Map()
const noteData = new Map()   // qfile -> note object {…, regions:Set, sources:[]}
const paperIndex = new Map() // src -> [[n, qfile, summary], …]

function comp_full(comp, year, region) {
  const r = region ? ` — ${REG_LABEL[region] || region}` : ""
  return `${COMP_LABEL[comp] || comp} ${year}${r}`
}

for (const p of papers) {
  const { src, comp, year, region, problems } = p
  const idx = []
  for (const q of problems) {
    const pn = q.n
    let qfile, note
    if (comp === "rmo") {
      const key = `${year}::${norm(q.statement)}`
      if (rmoCanon.has(key)) {
        qfile = rmoCanon.get(key)
        note = noteData.get(qfile)
        if (region) note.regions.add(region)
        note.sources.push([src, pn])
        idx.push([pn, qfile, note.summary]); continue
      }
      qfile = `${src}__Q${pad(pn)}`
      rmoCanon.set(key, qfile)
    } else {
      qfile = `${src}__Q${pad(pn)}`
    }
    note = {
      qfile, comp, year, region, pn, src,
      summary: q.summary || "", statement: q.statement || "", answer: q.answer || "",
      topics: q.topics || [], methods: q.methods || [], skills: q.skills || [],
      tikz: q.tikz || null, score: qaScore[src],
      regions: new Set(region ? [region] : []), sources: [[src, pn]],
    }
    noteData.set(qfile, note)
    idx.push([pn, qfile, note.summary])
  }
  paperIndex.set(src, { comp, year, region, idx })
}

// write quesito notes
let nQ = 0
for (const note of noteData.values()) {
  const { qfile, comp, year, topics, methods, skills, score } = note
  const regions = [...note.regions]
  const title = comp_full(comp, year, regions.length === 1 ? regions[0] : "")
  const level = comp.toUpperCase()
  const tags = ["kg/quesito", "paese/india", `comp/${comp}`, `anno/${year}`, `livello/${tagSlug(level)}`]
  for (const t of topics) tags.push("topic/" + t.replace("topic_", ""))
  for (const r of regions) tags.push("regione/" + tagSlug(r))
  tags.push("gara/individuale")
  if (score != null && score <= 2) tags.push("qa/da-verificare")
  const clusters = [...new Set(topics.map((t) => T2C[t]).filter(Boolean))]
  const fm = ["---", "tipo: quesito", `quesito_id: quesito_${qfile}`, `parent: ${note.src}`,
    `competition: "${comp_full(comp, year, "")}"`, `family: ${comp}`, `year: ${year}`, `level: "${level}"`,
    "country: India", 'modalita: "individuale"', `quesito: ${note.pn}`, `summary: "${ysafe(note.summary)}"`]
  if (regions.length) fm.push("regioni: [" + regions.map((r) => REG_LABEL[r] || r).join(", ") + "]")
  if (score != null) fm.push(`qa_score: ${score}`)
  if (note.answer) fm.push(`answer: "${ysafe(note.answer)}"`)
  if (topics.length) fm.push("topics: [" + topics.join(", ") + "]")
  if (methods.length) fm.push("methods: [" + methods.join(", ") + "]")
  if (skills.length) fm.push("skills: [" + skills.join(", ") + "]")
  fm.push("tags: [" + tags.join(", ") + "]", "---")
  const body = [fm.join("\n"), "", `# ${title} — Quesito ${note.pn}`, "", `*${note.summary}*`, "",
    "> " + String(note.statement).replace(/\n/g, "\n> "), ""]
  const figs = figuresFor(qfile)
  for (const img of figs) body.push(`![[${img}]]`, "")
  if (!figs.length && note.tikz && /tikzpicture/.test(note.tikz)) body.push("```tikz", note.tikz.trim(), "```", "")
  if (regions.length > 1) body.push(`*Appears in regions: ${regions.map((r) => REG_LABEL[r] || r).join(", ")}.*`, "")
  if (topics.length) body.push("**Topic:** " + topics.map((t) => `[[${t}|${TLAB[t] || t}]]`).join(", "))
  if (methods.length) body.push("**Metodo:** " + methods.map((m) => `[[${m}|${MLAB[m] || m}]]`).join(", "))
  if (skills.length) body.push("**Abilita:** " + skills.map((s) => `[[${s}|${SLAB[s] || s}]]`).join(", "))
  if (clusters.length) body.push("**Area:** " + clusters.map((c) => `[[${c}]]`).join(", "))
  if (note.answer) body.push(`**Risposta:** ${/[\\^_{}]/.test(note.answer) && !note.answer.includes("$") ? `$${note.answer}$` : note.answer}`)
  const pdf = fileFor[note.src] ? `${PDFBASE}/${fileFor[note.src]}` : ""
  if (pdf) body.push(`**Fonte:** [apri PDF](<../../${pdf}>)`)
  if (score != null && score <= 2) body.push("", "> [!warning] Estratto automatico da verificare con la fonte.")
  await fs.writeFile(path.join(QDIR, qfile + ".md"), body.join("\n").trimEnd() + "\n")
  nQ++
}

// write gara notes
let nG = 0
for (const [src, { comp, year, region, idx }] of paperIndex) {
  const title = comp_full(comp, year, region)
  const level = comp.toUpperCase()
  const tags = ["kg/gara", "paese/india", `comp/${comp}`, `anno/${year}`, "gara/individuale"]
  if (region) tags.push("regione/" + tagSlug(region))
  const pdf = fileFor[src] ? `${PDFBASE}/${fileFor[src]}` : ""
  const gi = ["---", "tipo: gara", `src_id: ${src}`, `competition: "${title}"`, `family: ${comp}`,
    `year: ${year}`, `level: "${level}"`, "country: India", 'modalita: "individuale"',
    `n_quesiti: ${idx.length}`, `tags: [${tags.join(", ")}]`, "---", "", `# ${title}`, ""]
  if (pdf) gi.push(`Sorgente: [apri PDF](<../../${pdf}>)\n`)
  for (const [pn, qfile, summ] of idx.sort((a, b) => a[0] - b[0])) gi.push(`- [[${qfile}|Quesito ${pn}]] — ${summ}`)
  await fs.writeFile(path.join(QDIR, src + ".md"), gi.join("\n").trimEnd() + "\n")
  nG++
}
console.log(`generated ${nQ} quesiti + ${nG} gare from ${papers.length} papers (RMO dedup applied)`)
if (bad.length) console.log("PROBLEMS:\n" + bad.join("\n"))
