// Generates KG notes for the PRISTEM/Bocconi math-games archive from bocconi_extract/json.
// Italian statements (international finals translated FR->IT). country: Italia. family: bocconi.
import { promises as fs } from "node:fs"
import path from "node:path"

const STAGING = "E:/giovanni/bocconi_extract/json"
const MANIFEST = "E:/giovanni/bocconi_extract/manifest.json"
const QA = "E:/giovanni/bocconi_extract/qa"
const KG = "E:/giovanni/Dropbox/insegnamento/Wiligelmo/OlimpiadiMatematica/raccoltaGareMate/Knowledge Graph"
const QDIR = KG + "/Quesiti"
const ATT = KG + "/_attachments"
const PDFBASE = "gare_di_altri_paesi/Bocconi"

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
// comp -> {label, slug, modalita, garaTag}
const COMP = {
  autunno: { label: "Giochi d'Autunno", slug: "giochi-autunno", mod: "individuale", gara: "gara/individuale" },
  semifinale: { label: "Semifinale Campionati Internazionali di Giochi Matematici", slug: "semifinale-ci", mod: "individuale", gara: "gara/individuale" },
  primavera: { label: "Semifinale di Primavera", slug: "semifinale-primavera", mod: "individuale", gara: "gara/individuale" },
  finalenaz: { label: "Finale Nazionale Campionati Internazionali di Giochi Matematici", slug: "finale-nazionale-ci", mod: "individuale", gara: "gara/individuale" },
  finaleint: { label: "Finale Internazionale Campionati Internazionali di Giochi Matematici (Parigi)", slug: "finale-internazionale-ci", mod: "individuale", gara: "gara/individuale" },
  squadre: { label: "Gara a Squadre", slug: "gara-squadre", mod: "a squadre", gara: "gara/squadre" },
  rosi: { label: "Giochi di Rosi", slug: "giochi-rosi", mod: "individuale", gara: "gara/individuale" },
}
const pad = (n) => String(n).padStart(2, "0")
const tagSlug = (s) => s.replace(/\s+/g, "-")
const ysafe = (s) => String(s).replace(/"/g, "'")

const manifest = JSON.parse(await fs.readFile(MANIFEST, "utf8"))
const fileFor = Object.fromEntries(manifest.map((m) => [m.src, m.testi_file]))

const qaScore = {}, figPage = {}
try {
  for (const f of await fs.readdir(QA)) {
    if (!f.endsWith(".json")) continue
    try {
      const q = JSON.parse(await fs.readFile(`${QA}/${f}`, "utf8"))
      qaScore[q.src] = q.score
      for (const fg of q.figures || []) if (fg.n && fg.page) figPage[`${q.src}__${fg.n}`] = fg.page
    } catch {}
  }
} catch {}

const files = (await fs.readdir(STAGING)).filter((f) => f.endsWith(".json"))
let nQ = 0, nG = 0, bad = []
for (const file of files) {
  let paper
  try { paper = JSON.parse(await fs.readFile(path.join(STAGING, file), "utf8")) }
  catch (e) { bad.push(`${file}: JSON parse ${e.message}`); continue }
  const { src, year, comp, extra, problems } = paper
  if (!src || !Array.isArray(problems) || !problems.length) { bad.push(`${file}: empty/invalid`); continue }
  const c = COMP[comp]
  if (!c) { bad.push(`${file}: unknown comp ${comp}`); continue }
  const dayTxt = extra ? ` (prova ${String(extra).replace("g", "")})` : ""
  const title = `${c.label} ${year}${dayTxt}`
  const level = c.label
  const pdf = fileFor[src] ? `${PDFBASE}/${fileFor[src]}` : ""
  const score = qaScore[src]
  const index = []
  for (const q of problems) {
    const pn = q.n
    const qfile = `${src}__Q${pad(pn)}`
    const topics = q.topics || [], methods = q.methods || [], skills = q.skills || []
    const tags = ["kg/quesito", "paese/italia", `comp/${c.slug}`, `anno/${year}`, `livello/${tagSlug(c.slug)}`]
    for (const t of topics) tags.push("topic/" + t.replace("topic_", ""))
    tags.push(c.gara)
    if (score != null && score <= 2) tags.push("qa/da-verificare")
    const clusters = [...new Set(topics.map((t) => T2C[t]).filter(Boolean))]
    const fm = ["---", `title: "${ysafe(title)} — Quesito ${pn}"`, "tipo: quesito", `quesito_id: quesito_${qfile}`, `parent: ${src}`,
      `competition: "${title}"`, "family: bocconi", `year: ${year}`, `level: "${ysafe(level)}"`,
      "country: Italia", `modalita: "${c.mod}"`, `quesito: ${pn}`, `summary: "${ysafe(q.summary || "")}"`]
    if (score != null) fm.push(`qa_score: ${score}`)
    if (q.answer) fm.push(`answer: "${ysafe(q.answer)}"`)
    if (topics.length) fm.push("topics: [" + topics.join(", ") + "]")
    if (methods.length) fm.push("methods: [" + methods.join(", ") + "]")
    if (skills.length) fm.push("skills: [" + skills.join(", ") + "]")
    fm.push("tags: [" + tags.join(", ") + "]", "---")
    const body = [fm.join("\n"), "", `*${q.summary || ""}*`, "",
      "> " + String(q.statement || "").replace(/\n/g, "\n> "), ""]
    const figs = figuresFor(qfile)
    for (const img of figs) body.push(`![[${img}]]`, "")
    if (!figs.length && q.tikz && /tikzpicture/.test(q.tikz)) body.push("```tikz", q.tikz.trim(), "```", "")
    if (topics.length) body.push("**Topic:** " + topics.map((t) => `[[${t}|${TLAB[t] || t}]]`).join(", "))
    if (methods.length) body.push("**Metodo:** " + methods.map((m) => `[[${m}|${MLAB[m] || m}]]`).join(", "))
    if (skills.length) body.push("**Abilita:** " + skills.map((s) => `[[${s}|${SLAB[s] || s}]]`).join(", "))
    if (clusters.length) body.push("**Area:** " + clusters.map((cl) => `[[${cl}]]`).join(", "))
    if (q.answer) body.push(`**Risposta:** ${/[\\^_{}]/.test(q.answer) && !String(q.answer).includes("$") ? `$${q.answer}$` : q.answer}`)
    if (pdf) body.push(`**Fonte:** [apri PDF](<../../${pdf}>)`)
    if (score != null && score <= 2) body.push("", "> [!warning] Estratto da verificare con la fonte.")
    await fs.writeFile(path.join(QDIR, qfile + ".md"), body.join("\n").trimEnd() + "\n")
    index.push([pn, qfile, q.summary || ""])
    nQ++
  }
  const tags = ["kg/gara", "paese/italia", `comp/${c.slug}`, `anno/${year}`, c.gara]
  const gi = ["---", `title: "${ysafe(title)}"`, "tipo: gara", `src_id: ${src}`, `competition: "${title}"`, "family: bocconi",
    `year: ${year}`, `level: "${ysafe(level)}"`, "country: Italia", `modalita: "${c.mod}"`,
    `n_quesiti: ${index.length}`, `tags: [${tags.join(", ")}]`, "---", ""]
  if (pdf) gi.push(`Sorgente: [apri PDF](<../../${pdf}>)\n`)
  for (const [pn, qfile, summ] of index.sort((a, b) => a[0] - b[0])) gi.push(`- [[${qfile}|Quesito ${pn}]] — ${summ}`)
  await fs.writeFile(path.join(QDIR, src + ".md"), gi.join("\n").trimEnd() + "\n")
  nG++
}
console.log(`generated ${nQ} quesiti + ${nG} gare from ${files.length} json files`)
if (bad.length) console.log("PROBLEMS:\n" + bad.join("\n"))
