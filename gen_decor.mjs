// Generate one sober "editorial" decorative illustration per cluster/topic/method/skill
// via the Recraft API. Reads RECRAFT_API_KEY from env. Saves PNGs to quartz/static/decor/<file>.png.
// Resumable: skips nodes whose output already exists. Run:
//   $env:RECRAFT_API_KEY = ([IO.File]::ReadAllText('...apikey.txt')).Trim(); node gen_decor.mjs
import { mkdirSync, existsSync, writeFileSync } from "node:fs";

const KEY = (process.env.RECRAFT_API_KEY || "").trim();
if (!KEY) { console.error("no RECRAFT_API_KEY"); process.exit(1); }
const OUT = "quartz/static/decor";
mkdirSync(OUT, { recursive: true });

const STYLE =
  " Elegant minimal flat editorial illustration, refined modern flat style, limited sober palette of deep forest green, soft lime-green and warm cream with subtle gold accents, gentle flat shading, transparent background, generous negative space. Tasteful and restrained, NOT busy, no baroque ornament, no animals, no insects, no people, no faces, no mascots, no text, no numbers.";

// slug = note basename (for wiring); subject = the concrete metaphor
const NODES = [
  // clusters
  ["Algebra e Analisi", "a flowing function curve over a coordinate grid with a parabola"],
  ["Aritmetica e Teoria dei Numeri", "prime numbers as a triangular lattice of dots with a sieve motif"],
  ["Combinatoria, Logica e Probabilita", "a network graph of nodes and edges with a pair of dice and a small branching tree"],
  ["Geometria", "a drafting compass and ruler with a circle and inscribed triangle"],
  // topics
  ["topic_algebra", "a polynomial curve with a balanced equation scale"],
  ["topic_aritmetica", "an integer number line with highlighted prime dots"],
  ["topic_combinatoria", "a Pascal triangle of tokens and arranged counters"],
  ["topic_disuguaglianze", "a tilting balance scale comparing two quantities"],
  ["topic_funzionali", "a function machine mapping arrows between inputs and outputs"],
  ["topic_geometria_analitica", "a cartesian plane with a straight line and plotted points"],
  ["topic_geometria_piana", "a triangle inscribed in a circle with construction lines"],
  ["topic_geometria_solida", "three geometric solids: a cube, a tetrahedron and a sphere"],
  ["topic_insiemi_funzioni", "two overlapping sets as a Venn diagram with mapping arrows"],
  ["topic_logica", "interlocking implication arrows forming a logical chain"],
  ["topic_probabilita", "a probability tree with a pair of dice and a bell curve"],
  ["topic_trigonometria", "a unit circle with a right triangle and a sine wave"],
  // methods
  ["method_backward", "arrows tracing a path backwards from a goal to the start"],
  ["method_bigezione", "two columns of items paired one-to-one by arrows"],
  ["method_casework", "a path splitting into separate labelled boxes of cases"],
  ["method_casi_conteggio", "branching cases with tally counts"],
  ["method_cassetti", "the pigeonhole principle: items placed into a row of drawers"],
  ["method_colorazione", "a checkerboard grid with a two-colour pattern"],
  ["method_congruenze", "a modular clock with remainders arranged around a wheel"],
  ["method_conteggio", "neat tally marks counting a set of objects"],
  ["method_coordinate", "a coordinate plane with a plotted geometric figure"],
  ["method_disuguaglianze", "a balance scale showing one side heavier"],
  ["method_doppio_conteggio", "a grid counted two ways, by rows and by columns"],
  ["method_estremalita", "a row of bars with the maximum peak highlighted"],
  ["method_fattorizzazione", "a prime factorization tree breaking a number into factors"],
  ["method_grafi", "a clean graph of circular nodes connected by edges"],
  ["method_inclusione_esclusione", "three overlapping circles with shaded intersections"],
  ["method_induzione", "a falling chain of dominoes, like a ladder of steps"],
  ["method_invarianti", "a constant token unchanged amid transforming shapes"],
  ["method_ricorsione", "a self-similar nested spiral of repeating shapes"],
  ["method_simmetria", "a symmetric shape mirrored across an axis"],
  ["method_telescoping", "a collapsing telescope of terms cancelling in sequence"],
  ["method_trigonometria", "a unit circle with an angle and a right triangle"],
  // skills
  ["skill_astrazione", "concrete shapes transforming into an abstract symbol"],
  ["skill_casework_accurato", "carefully sorted branching boxes, neatly organized"],
  ["skill_conteggio_sistematico", "an organized grid with systematic tally marks"],
  ["skill_lettura_attenta", "a magnifying glass examining a diagram closely"],
  ["skill_manipolazione_algebrica", "abstract algebraic symbols being rearranged"],
  ["skill_modellizzazione", "a real object turning into a clean schematic diagram"],
  ["skill_ragionamento_geometrico", "a geometric figure with added auxiliary lines"],
  ["skill_riconoscimento_pattern", "a repeating sequence of shapes revealing a pattern"],
  ["skill_stima", "an approximate gauge or dial showing an estimate"],
];

const file = (slug) => slug.replace(/[^A-Za-z0-9_-]+/g, "-");

async function gen(slug, subject) {
  const out = `${OUT}/${file(slug)}.png`;
  if (existsSync(out)) return "skip";
  const prompt = `Illustration representing the mathematical concept of "${subject}".` + STYLE;
  const r = await fetch("https://external.api.recraft.ai/v1/images/generations", {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, model: "recraftv2", style: "digital_illustration", size: "1024x1024", n: 1 }),
  });
  const txt = await r.text();
  if (!r.ok) throw new Error(`gen ${slug} HTTP ${r.status}: ${txt}`);
  const url = JSON.parse(txt).data?.[0]?.url;
  if (!url) throw new Error(`gen ${slug} no url: ${txt}`);
  const img = await fetch(url);
  writeFileSync(out, Buffer.from(await img.arrayBuffer()));
  return "ok";
}

let ok = 0, skip = 0, err = 0;
for (const [slug, subject] of NODES) {
  try {
    const r = await gen(slug, subject);
    if (r === "ok") { ok++; console.log(`ok   ${file(slug)}.png`); }
    else { skip++; }
  } catch (e) { err++; console.log(`ERR  ${slug}: ${e.message}`); }
}
console.log(`done: ${ok} generated, ${skip} skipped, ${err} errors`);
