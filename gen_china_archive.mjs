// Generates KG notes for the China archive from china_extract/json.
// Problems are extracted per book-SEGMENT but carry (comp_slug, year); here we
// GROUP them by (comp_slug, year) into one gara each, dedup by problem number.
// English statements (source already English). country: Cina.
import { promises as fs } from "node:fs"
import path from "node:path"

const STAGING = "E:/giovanni/china_extract/json"
const MANIFEST = "E:/giovanni/china_extract/manifest.json"
const QA = "E:/giovanni/china_extract/qa"
const KG = "E:/giovanni/Dropbox/insegnamento/Wiligelmo/OlimpiadiMatematica/raccoltaGareMate/Knowledge Graph"
const QDIR = KG + "/Quesiti"
const ATT = KG + "/_attachments"
const PDFBASE = "gare_di_altri_paesi"

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
  cmc: "China Mathematical Competition", "cmc-extra-test": "China Mathematical Competition (Extra Test)",
  "cmc-complementary-test": "China Mathematical Competition (Complementary Test)",
  "cmc-first-round": "China Mathematical Competition (First Round)",
  "cmc-second-round": "China Mathematical Competition (Second Round)",
  cmo: "China Mathematical Olympiad", cgmo: "China Girls' Mathematical Olympiad",
  cwmo: "China Western Mathematical Olympiad", csmo: "China Southeastern Mathematical Olympiad",
  ctst: "China National Team Selection Test",
}
const KNOWN = new Set(Object.keys(COMP_LABEL))
const pad = (n) => String(n).padStart(2, "0")
const tagSlug = (s) => s.replace(/\s+/g, "-")
const ysafe = (s) => String(s).replace(/"/g, "'")

const manifest = JSON.parse(await fs.readFile(MANIFEST, "utf8"))
const fileFor = Object.fromEntries(manifest.map((m) => [m.src, m.file]))
const qaScore = {}
try {
  for (const f of await fs.readdir(QA)) {
    if (!f.endsWith(".json")) continue
    try { const q = JSON.parse(await fs.readFile(`${QA}/${f}`, "utf8")); qaScore[q.src] = q.score } catch {}
  }
} catch {}

// 1) collect all problems, group by (comp_slug, year), dedup by problem number
const files = (await fs.readdir(STAGING)).filter((f) => f.endsWith(".json"))
const groups = new Map()   // key "slug::year" -> Map(n -> {prob, segsrc})
let bad = [], rawCount = 0
for (const file of files) {
  let paper
  try { paper = JSON.parse(await fs.readFile(path.join(STAGING, file), "utf8")) }
  catch (e) { bad.push(`${file}: JSON parse ${e.message}`); continue }
  const segsrc = paper.src
  for (const q of paper.problems || []) {
    let slug = (q.comp_slug || "").toLowerCase().trim()
    const year = parseInt(q.year)
    const n = parseInt(q.n)
    if (!KNOWN.has(slug) || !(year >= 1985 && year <= 2026) || !(n >= 1)) continue
    rawCount++
    const key = `${slug}::${year}`
    if (!groups.has(key)) groups.set(key, new Map())
    const g = groups.get(key)
    const prev = g.get(n)
    const cand = { q, segsrc, score: qaScore[segsrc] }
    if (!prev) { g.set(n, cand); continue }
    // keep richer: prefer one with answer, then longer statement, then better score
    const better =
      (!!(cand.q.answer) - !!(prev.q.answer)) ||
      ((cand.q.statement || "").length - (prev.q.statement || "").length) ||
      ((cand.score || 0) - (prev.score || 0))
    if (better > 0) g.set(n, cand)
  }
}

// 2) emit gara + quesiti per group
let nQ = 0, nG = 0
for (const [key, g] of [...groups.entries()].sort()) {
  const [slug, yearStr] = key.split("::")
  const year = parseInt(yearStr)
  const garasrc = `src_cn_${slug}_${year}`
  const title = `${COMP_LABEL[slug] || slug} ${year}`
  const level = COMP_LABEL[slug] || slug
  const nums = [...g.keys()].sort((a, b) => a - b)
  const index = []
  for (const n of nums) {
    const { q, segsrc, score } = g.get(n)
    const qfile = `${garasrc}__Q${pad(n)}`
    const topics = q.topics || [], methods = q.methods || [], skills = q.skills || []
    const tags = ["kg/quesito", "paese/cina", `comp/${slug}`, `anno/${year}`, `livello/${tagSlug(level)}`]
    for (const t of topics) tags.push("topic/" + t.replace("topic_", ""))
    tags.push("gara/individuale")
    if (score != null && score <= 2) tags.push("qa/da-verificare")
    const clusters = [...new Set(topics.map((t) => T2C[t]).filter(Boolean))]
    const fm = ["---", `title: "${ysafe(title)} — Quesito ${n}"`, "tipo: quesito", `quesito_id: quesito_${qfile}`, `parent: ${garasrc}`,
      `competition: "${title}"`, `family: ${slug}`, `year: ${year}`, `level: "${level}"`,
      "country: Cina", 'modalita: "individuale"', `quesito: ${n}`, `summary: "${ysafe(q.summary || "")}"`]
    if (score != null) fm.push(`qa_score: ${score}`)
    if (q.answer) fm.push(`answer: "${ysafe(q.answer)}"`)
    if (topics.length) fm.push("topics: [" + topics.join(", ") + "]")
    if (methods.length) fm.push("methods: [" + methods.join(", ") + "]")
    if (skills.length) fm.push("skills: [" + skills.join(", ") + "]")
    fm.push("tags: [" + tags.join(", ") + "]", "---")
    const body = [fm.join("\n"), "", `*${q.summary || ""}*`, "",
      "> " + String(q.statement || "").replace(/\n/g, "\n> "), ""]
    const figs = figuresFor(`${segsrc}__Q${pad(n)}`)
    for (const img of figs) body.push(`![[${img}]]`, "")
    if (!figs.length && q.tikz && /tikzpicture/.test(q.tikz)) body.push("```tikz", q.tikz.trim(), "```", "")
    if (topics.length) body.push("**Topic:** " + topics.map((t) => `[[${t}|${TLAB[t] || t}]]`).join(", "))
    if (methods.length) body.push("**Metodo:** " + methods.map((m) => `[[${m}|${MLAB[m] || m}]]`).join(", "))
    if (skills.length) body.push("**Abilita:** " + skills.map((s) => `[[${s}|${SLAB[s] || s}]]`).join(", "))
    if (clusters.length) body.push("**Area:** " + clusters.map((c) => `[[${c}]]`).join(", "))
    if (q.answer) body.push(`**Risposta:** ${/[\\^_{}]/.test(q.answer) && !q.answer.includes("$") ? `$${q.answer}$` : q.answer}`)
    const pdf = fileFor[segsrc] ? `${PDFBASE}/${fileFor[segsrc]}` : ""
    if (pdf) body.push(`**Fonte:** [apri libro PDF](<../../${pdf}>)`)
    if (score != null && score <= 2) body.push("", "> [!warning] Estratto da verificare con la fonte.")
    await fs.writeFile(path.join(QDIR, qfile + ".md"), body.join("\n").trimEnd() + "\n")
    index.push([n, qfile, q.summary || ""])
    nQ++
  }
  const tags = ["kg/gara", "paese/cina", `comp/${slug}`, `anno/${year}`, "gara/individuale"]
  const gi = ["---", `title: "${ysafe(title)}"`, "tipo: gara", `src_id: ${garasrc}`, `competition: "${title}"`, `family: ${slug}`,
    `year: ${year}`, `level: "${level}"`, "country: Cina", 'modalita: "individuale"',
    `n_quesiti: ${index.length}`, `tags: [${tags.join(", ")}]`, "---", ""]
  for (const [n, qfile, summ] of index) gi.push(`- [[${qfile}|Quesito ${n}]] — ${summ}`)
  await fs.writeFile(path.join(QDIR, garasrc + ".md"), gi.join("\n").trimEnd() + "\n")
  nG++
}
console.log(`grouped ${rawCount} problems -> ${nQ} quesiti + ${nG} gare (${groups.size} comp-year groups)`)
if (bad.length) console.log("PROBLEMS:\n" + bad.join("\n"))
