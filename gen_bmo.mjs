// Generates KG notes for UK BMO (British Mathematical Olympiad) into the vault.
// Statements translated to Italian with LaTeX; classified against the existing
// controlled vocabulary. No figures (BMO papers contain none).
import { promises as fs } from "node:fs"
import path from "node:path"

const QDIR = "E:/giovanni/Dropbox/insegnamento/Wiligelmo/OlimpiadiMatematica/raccoltaGareMate/Knowledge Graph/Quesiti"

const TLAB = {
  topic_aritmetica: "Aritmetica / Teoria dei Numeri",
  topic_algebra: "Algebra",
  topic_combinatoria: "Combinatoria",
  topic_geometria_piana: "Geometria piana",
  topic_geometria_solida: "Geometria solida",
  topic_logica: "Logica",
  topic_probabilita: "Probabilità",
  topic_disuguaglianze: "Disuguaglianze",
}
const MLAB = {
  method_casework: "Casework", method_invarianti: "Invarianti", method_fattorizzazione: "Fattorizzazione",
  method_congruenze: "Congruenze", method_cassetti: "Principio dei cassetti", method_doppio_conteggio: "Doppio conteggio",
  method_telescoping: "Telescoping", method_induzione: "Induzione", method_ricorsione: "Ricorsione",
  method_simmetria: "Simmetria", method_conteggio: "Conteggio", method_estremalita: "Estremalità",
  method_colorazione: "Colorazione",
}
const SLAB = {
  skill_casework_accurato: "Casework accurato", skill_riconoscimento_pattern: "Riconoscimento di pattern",
  skill_astrazione: "Astrazione", skill_manipolazione_algebrica: "Manipolazione algebrica",
  skill_conteggio_sistematico: "Conteggio sistematico", skill_ragionamento_geometrico: "Ragionamento geometrico",
}
const T2C = {
  topic_aritmetica: "Aritmetica e Teoria dei Numeri",
  topic_algebra: "Algebra e Analisi", topic_disuguaglianze: "Algebra e Analisi",
  topic_combinatoria: "Combinatoria, Logica e Probabilita", topic_logica: "Combinatoria, Logica e Probabilita",
  topic_probabilita: "Combinatoria, Logica e Probabilita",
  topic_geometria_piana: "Geometria", topic_geometria_solida: "Geometria",
}

const PAPERS = [
  {
    src: "src_bmo_2024-25_round1", title: "British Mathematical Olympiad 2024-25 — Round 1",
    year: 2024, level: "BMO Round 1", page: 2,
    pdf: "gare_di_altri_paesi/UK/BMO12/2024-25/BMO1_2024-25_paper.pdf",
    probs: [
      { summary: "Quali $n$ ammettono disposizione circolare con divisibilità solo tra vicini",
        topics: ["topic_combinatoria", "topic_aritmetica"], methods: ["method_casework"], skills: ["skill_casework_accurato", "skill_riconoscimento_pattern"],
        st: "Diciamo che l'intero positivo $n \\ge 3$ è *felice* se è possibile disporre $n$ interi positivi distinti in cerchio in modo che:\n(a) se due interi $u$ e $v$ sono vicini nel cerchio, allora $u$ divide $v$ oppure $v$ divide $u$;\n(b) se due interi distinti $u$ e $v$ sono nel cerchio ma non sono vicini, allora nessuno dei due divide l'altro.\nDeterminare, con dimostrazione, quali interi positivi $n$ con $3 \\le n \\le 12$ sono felici." },
      { summary: "Per quali $n$ il gioco delle carte garantisce somma iniziale+finale nulla",
        topics: ["topic_combinatoria"], methods: ["method_invarianti"], skills: ["skill_astrazione", "skill_manipolazione_algebrica"],
        st: "Un mago esegue un gioco con un mazzo di $n$ carte numerate da $1$ a $n$. Dispone le carte in un ordine a sua scelta, poi uno spettatore scrive un intero su una lavagna. Il mago gira le carte una a una nell'ordine prestabilito; a ogni carta lo spettatore moltiplica per $-1$ il numero sulla lavagna, vi somma il numero della carta e scrive il risultato (cancellando il precedente). Il mago garantisce che, qualunque sia l'intero iniziale scelto, il numero iniziale e quello finale abbiano somma $0$. Determinare per quali naturali $n$ il mago può riuscire nel gioco, dimostrando sia che è possibile per gli $n$ indicati sia che è impossibile per ogni altro." },
      { summary: "Gioco $n=ab\\to|a-b|$ partendo da $10^6$: chi ha strategia vincente",
        topics: ["topic_combinatoria", "topic_aritmetica"], methods: ["method_invarianti", "method_fattorizzazione"], skills: ["skill_riconoscimento_pattern"],
        st: "Rhian e Jack giocano: inizialmente sulla lavagna è scritto $10^6$. Se il numero attuale è $n$, una mossa consiste nello scegliere due interi positivi distinti $a,b$ con $n=ab$ e sostituire $n$ con $|a-b|$. Inizia Rhian, poi i giocatori si alternano; perde chi non può muovere. Determinare, con dimostrazione, quale giocatore ha una strategia vincente." },
      { summary: "Triangolo acutangolo: dimostrare $\\angle CPB=90^\\circ$",
        topics: ["topic_geometria_piana"], methods: [], skills: ["skill_ragionamento_geometrico"],
        st: "Nel triangolo acutangolo $ABC$ si ha $AB<AC<BC$. Sia $M$ il punto medio di $BC$. Sul segmento $AM$ esiste un punto $P$ tale che $AB=CP$ e $\\angle PAB=\\angle BCP$. Dimostrare che $\\angle CPB=90^\\circ$." },
      { summary: "Ordine di $n$ modulo $p$: divisibilità di $(n+1)^6-1$ o $(n+2)^6-1$",
        topics: ["topic_aritmetica"], methods: ["method_congruenze", "method_fattorizzazione"], skills: ["skill_manipolazione_algebrica"],
        st: "Sia $p$ un numero primo e sia $n$ il più piccolo intero positivo, strettamente maggiore di $1$, tale che $p \\mid n^6-1$. Dimostrare che almeno uno tra $(n+1)^6-1$ e $(n+2)^6-1$ è divisibile per $p$." },
      { summary: "Cubo $4\\times4\\times4$ di zollette in 3 gusti: 6 coppie equidistanti dello stesso gusto",
        topics: ["topic_combinatoria"], methods: ["method_cassetti", "method_doppio_conteggio"], skills: ["skill_conteggio_sistematico"],
        st: "Björk ha $64$ zollette di zucchero $1\\times1\\times1$, ciascuna di gusto bianco, demerara o muscovado. Le impila in un cubo $4\\times4\\times4$. Dimostrare che esistono $12$ zollette dello stesso gusto raggruppabili in $6$ coppie disgiunte tali che la distanza tra i centri delle due zollette di ciascuna coppia sia la stessa." },
    ],
  },
  {
    src: "src_bmo_2024-25_round2", title: "British Mathematical Olympiad 2024-25 — Round 2",
    year: 2025, level: "BMO Round 2", page: 2,
    pdf: "gare_di_altri_paesi/UK/BMO12/2024-25/BMO2_2024-25_paper.pdf",
    probs: [
      { summary: "$1/n$ come somma di reciproci di numeri triangolari distinti",
        topics: ["topic_aritmetica"], methods: ["method_telescoping", "method_induzione"], skills: ["skill_manipolazione_algebrica"],
        st: "Dimostrare che, se $n$ è un intero positivo, allora $\\frac1n$ può essere scritto come somma finita di reciproci di numeri triangolari distinti. (Un numero triangolare è della forma $\\frac{k(k+1)}2$ per qualche intero positivo $k$.)" },
      { summary: "Incentro e asse di $BC$: $D$ giace sulla circonferenza $AQP$",
        topics: ["topic_geometria_piana"], methods: [], skills: ["skill_ragionamento_geometrico"],
        st: "In un triangolo acutangolo $ABC$ con $AB<AC$, sia $I$ l'incentro; l'asse di $BC$ incontra $BI$ in $P$ e $CI$ in $Q$. Le circonferenze $BIQ$ e $CIP$ si incontrano nuovamente in $X$, e le rette $AX$ e $BC$ si incontrano in $D$. Dimostrare che $D$ giace sulla circonferenza $AQP$." },
      { summary: "Scacchiera $n\\times n$: massimo numero di scambi righe/colonne per ripristinarla",
        topics: ["topic_combinatoria"], methods: ["method_estremalita", "method_invarianti"], skills: ["skill_conteggio_sistematico"],
        st: "Una scacchiera $n\\times n$ è formata da $n^2$ celle quadrate unitarie, colorate di bianco o nero così che celle adiacenti per lato abbiano colori diversi. Isaac altera la colorazione scambiando ripetutamente due intere colonne oppure due intere righe; Elijah vuole ripristinare la colorazione originale usando gli stessi tipi di scambio. In funzione di $n$, qual è il massimo numero di scambi di cui Elijah potrebbe aver bisogno?" },
      { summary: "Quante successioni con $u_1=1$ e $u_{n+1}=(u_n^2+u_n+1)^{2025}/u_{n-1}$",
        topics: ["topic_aritmetica", "topic_algebra"], methods: ["method_ricorsione", "method_induzione"], skills: ["skill_manipolazione_algebrica"],
        st: "Quante diverse successioni di interi positivi soddisfano $u_1=1$ e\n$$u_{n+1}=\\frac{(u_n^2+u_n+1)^{2025}}{u_{n-1}}$$\nper ogni $n\\ge2$?" },
    ],
  },
  {
    src: "src_bmo_2025-26_round1", title: "British Mathematical Olympiad 2025-26 — Round 1",
    year: 2025, level: "BMO Round 1", page: 2,
    pdf: "gare_di_altri_paesi/UK/BMO12/2025-26/BMO1_2025-26_paper.pdf",
    probs: [
      { summary: "Per quali $p^n$ si può scrivere come somma di una 'rampa' $a\\mid b\\mid c$",
        topics: ["topic_aritmetica"], methods: ["method_fattorizzazione", "method_casework"], skills: ["skill_manipolazione_algebrica"],
        st: "Una *rampa* è una terna di interi positivi distinti $a,b,c$ tali che $a$ divide $b$ e $b$ divide $c$. Per ogni numero primo $p$ e ogni intero positivo $n$, determinare con dimostrazione se $p^n$ può essere espresso come somma di una rampa." },
      { summary: "Sistema simmetrico $x^2+2yz=4,\\;y^2+2zx=4,\\;z^2+2xy=1$",
        topics: ["topic_algebra"], methods: ["method_simmetria"], skills: ["skill_manipolazione_algebrica"],
        st: "Trovare tutte le terne $(x,y,z)$ di numeri reali che soddisfano le equazioni\n$$x^2+2yz=4,\\qquad y^2+2zx=4,\\qquad z^2+2xy=1.$$" },
      { summary: "Griglia $11\\times11$ tagliata in 11 pezzi a L: numero di ricomposizioni",
        topics: ["topic_combinatoria"], methods: ["method_casework", "method_conteggio"], skills: ["skill_conteggio_sistematico"],
        st: "Una griglia quadrata $11\\times11$ viene tagliata in $11$ pezzi così: a ogni passo si rimuove la riga in alto e la colonna a sinistra della griglia rimanente come un unico pezzo. I pezzi ottenuti sono a forma di L di dimensioni $21,19,\\dots,3$, più un singolo quadratino. I pezzi vengono riorganizzati per riassemblare una griglia $11\\times11$, con rotazioni permesse (ma senza ribaltarli) in modo che il singolo quadratino occupi la cella nella terza riga e terza colonna (dall'alto a sinistra). In quanti modi si può fare?" },
      { summary: "Due circonferenze tangenti in $B$ e $C$: dimostrare $MA\\cdot MD=MB\\cdot MC$",
        topics: ["topic_geometria_piana"], methods: [], skills: ["skill_ragionamento_geometrico"],
        st: "Sia $ABC$ un triangolo acutangolo con $AB>AC$ e sia $M$ il punto medio di $BC$. La circonferenza passante per $M$ e tangente ad $AB$ in $B$ e la circonferenza passante per $M$ e tangente ad $AC$ in $C$ si intersecano nuovamente in $D$. Dimostrare che $MA\\cdot MD=MB\\cdot MC$." },
      { summary: "Successione $t_1=1$ con regole di parità/terzi: contiene ogni intero positivo?",
        topics: ["topic_aritmetica", "topic_combinatoria"], methods: ["method_induzione", "method_casework"], skills: ["skill_riconoscimento_pattern"],
        st: "George definisce una successione di interi positivi $t_1,t_2,t_3,\\dots$ con $t_1=1$ e, per $n\\ge1$:\n- se $t_n$ è pari, $t_{n+1}=t_n/2$;\n- se $t_n$ è dispari e maggiore di $1$, $t_{n+1}$ è $t_n/3$ arrotondato all'intero più vicino;\n- se $t_n=1$, $t_{n+1}=2025k$, dove $k$ è il numero di termini uguali a $1$ tra $t_1,\\dots,t_n$.\nQuesta successione contiene ogni intero positivo?" },
      { summary: "1000 ninfee in cerchio, rane che nuotano o saltano: quando resta una sola rana",
        topics: ["topic_combinatoria"], methods: ["method_invarianti", "method_colorazione"], skills: ["skill_astrazione"],
        st: "Su uno stagno ci sono $1000$ ninfee disposte in cerchio ed etichettate $1,2,\\dots,1000$ in ordine (le prime quattro possono anche essere indicate con $1001,1002,1003,1004$). Le prime $n$ ninfee sono occupate da una rana ciascuna, le altre no. Ogni minuto esattamente una rana, posta sulla ninfea $k$, può: (i) nuotare alla ninfea $k+4$ o $k-4$, se libera; oppure (ii) saltare alla ninfea $k+3$ o $k-3$, se libera e se le due ninfee scavalcate sono entrambe occupate — in tal caso le due rane scavalcate si tuffano e non partecipano più. Per quali valori di $n$ è possibile, con una sequenza di mosse, terminare con esattamente una rana sulle ninfee?" },
    ],
  },
  {
    src: "src_bmo_2025-26_round2", title: "British Mathematical Olympiad 2025-26 — Round 2",
    year: 2026, level: "BMO Round 2", page: 2,
    pdf: "gare_di_altri_paesi/UK/BMO12/2025-26/BMO2_2025-26_paper.pdf",
    probs: [
      { summary: "Minimo numero di coppie $(m,n)$ con $\\mathrm{lcm}+\\mathrm{gcd}=p^4$",
        topics: ["topic_aritmetica"], methods: ["method_fattorizzazione", "method_casework"], skills: ["skill_manipolazione_algebrica"],
        st: "Per due interi positivi $m,n$ siano $l(m,n)$ il minimo comune multiplo e $h(m,n)$ il massimo comun divisore. Dato un primo $p>3$, sia $k$ il numero di coppie ordinate di interi positivi $(m,n)$ che soddisfano $l(m,n)+h(m,n)=p^4$. Determinare il più piccolo valore possibile di $k$ al variare del primo $p>3$." },
      { summary: "Quadrilatero convesso: $AC=BD$ se e solo se $XY$ biseca $\\angle DXC$",
        topics: ["topic_geometria_piana"], methods: [], skills: ["skill_ragionamento_geometrico"],
        st: "Il quadrilatero convesso $ABCD$ ha i lati $AD$ e $BC$ non paralleli. Le diagonali $AC$ e $BD$ si intersecano in $X$, e gli assi dei lati $AD$ e $BC$ si incontrano in $Y$. Supponendo che $Y$ sia strettamente interno al triangolo $XCD$, dimostrare che $AC=BD$ se e solo se $XY$ biseca l'angolo $\\angle DXC$." },
      { summary: "Griglia $30\\times30$ con $-1,0,1$ (300 ciascuno): 60 somme tutte distinte?",
        topics: ["topic_combinatoria"], methods: ["method_doppio_conteggio", "method_invarianti"], skills: ["skill_conteggio_sistematico"],
        st: "Ogni cella di una griglia $30\\times30$ contiene uno dei numeri $-1,0,1$, ciascuno presente esattamente $300$ volte. È possibile che le $60$ somme di righe e colonne siano tutte diverse?" },
      { summary: "Successione a somme scorrevoli: finiti termini positivi o finiti negativi",
        topics: ["topic_combinatoria", "topic_algebra"], methods: ["method_invarianti", "method_estremalita"], skills: ["skill_astrazione"],
        st: "Sia $N$ un intero positivo e sia $(k_n)_{n\\ge1}$ una successione di interi positivi tutti $\\le N$. Annabel sceglie interi $x_1,x_2,\\dots,x_N$ e poi estende a una successione infinita $(x_n)_{n\\ge1}$ ponendo\n$$x_n=\\sum_{i=n-k_n}^{n-1} x_i \\qquad \\text{per ogni } n>N.$$\nDimostrare che nella successione infinita $(x_n)$ vi sono o un numero finito di termini strettamente positivi o un numero finito di termini strettamente negativi." },
    ],
  },
]

const pad = (n) => String(n).padStart(2, "0")
const tagSlug = (s) => s.replace(/\s+/g, "-")

let nNotes = 0
for (const P of PAPERS) {
  const index = []
  for (let i = 0; i < P.probs.length; i++) {
    const q = P.probs[i]
    const pn = i + 1
    const qfile = `${P.src}__Q${pad(pn)}`
    const tags = ["kg/quesito", "paese/regno-unito", "comp/bmo", `anno/${P.year}`, `livello/${tagSlug(P.level)}`]
    for (const t of q.topics) tags.push("topic/" + t.replace("topic_", ""))
    tags.push("gara/individuale")
    const clusters = [...new Set(q.topics.map((t) => T2C[t]).filter(Boolean))]
    const fm = ["---", "tipo: quesito", `quesito_id: quesito_${qfile}`, `parent: ${P.src}`,
      `competition: "${P.title}"`, "family: bmo", `year: ${P.year}`, `level: "${P.level}"`,
      "country: Regno Unito", 'modalita: "individuale"', `quesito: ${pn}`,
      `summary: "${q.summary.replace(/"/g, "'")}"`]
    if (q.topics.length) fm.push("topics: [" + q.topics.join(", ") + "]")
    if (q.methods.length) fm.push("methods: [" + q.methods.join(", ") + "]")
    if (q.skills.length) fm.push("skills: [" + q.skills.join(", ") + "]")
    fm.push("tags: [" + tags.join(", ") + "]", "---")
    const body = [fm.join("\n"), "", `# ${P.title} — Quesito ${pn}`, "", `*${q.summary}*`, "",
      "> " + q.st.replace(/\n/g, "\n> "), ""]
    if (q.topics.length) body.push("**Topic:** " + q.topics.map((t) => `[[${t}|${TLAB[t] || t}]]`).join(", "))
    if (q.methods.length) body.push("**Metodo:** " + q.methods.map((m) => `[[${m}|${MLAB[m] || m}]]`).join(", "))
    if (q.skills.length) body.push("**Abilita:** " + q.skills.map((s) => `[[${s}|${SLAB[s] || s}]]`).join(", "))
    if (clusters.length) body.push("**Area:** " + clusters.map((c) => `[[${c}]]`).join(", "))
    body.push(`**Fonte:** [apri PDF p.${P.page}](<../../${P.pdf}#page=${P.page}>)`)
    await fs.writeFile(path.join(QDIR, qfile + ".md"), body.join("\n").trimEnd() + "\n")
    index.push([pn, qfile, q.summary])
    nNotes++
  }
  // gara index note
  const gi = ["---", "tipo: gara", `src_id: ${P.src}`, `competition: "${P.title}"`, "family: bmo",
    `year: ${P.year}`, `level: "${P.level}"`, "country: Regno Unito", 'modalita: "individuale"',
    `n_quesiti: ${index.length}`,
    `tags: [kg/gara, paese/regno-unito, comp/bmo, anno/${P.year}, gara/individuale]`,
    "---", "", `# ${P.title}`, ""]
  gi.push(`Sorgente: [apri PDF](<../../${P.pdf}>)\n`)
  for (const [pn, qfile, summ] of index) gi.push(`- [[${qfile}|Quesito ${pn}]] — ${summ}`)
  await fs.writeFile(path.join(QDIR, P.src + ".md"), gi.join("\n").trimEnd() + "\n")
  nNotes++
}
console.log(`wrote ${nNotes} notes (20 quesiti + 4 gare) into the vault`)
