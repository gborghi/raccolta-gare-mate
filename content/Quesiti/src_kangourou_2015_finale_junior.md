---
title: Kangourou 2015 finale nazionale Junior
tipo: gara
competition: Kangourou 2015 finale nazionale Junior
family: kangourou
year: '2015'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2015_finale_junior"></div>



<span class="atom-split" id="qj1" data-atom="qj1" data-title="Quesito J1" data-tags="topic_logica,method_casework,skill_modellizzazione,skill_casework_accurato,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*condizioni per incrocio treni*

![[src_kangourou_2015_finale_junior__probJ1.png]]

> Kang è una stazione su una linea a binario unico. In figura vedi lo schema dei binari di Kang, di ciascuno dei quali è indicata la lunghezza: il binario di corsa è quello superiore, mentre il binario inferiore inizia e termina con due tronchi "morti". Tutti i treni circolanti sulla linea sono composti da una locomotiva, che è in testa, e da alcune carrozze: la lunghezza di ogni locomotiva e di ogni carrozza è 19 metri. Quali sono le condizioni meno restrittive da imporre sulla composizione di due treni perché possano incrociarsi in Kang? Tieni presente che è ammesso ogni tipo di manovra (in particolare i treni possono fare retromarcia) e di segnalamento compatibile con lo schema della stazione, incluso lo spezzamento dei treni in gruppi di carrozze. (vedi figura)

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** max 13 carrozze
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<div class="qlang-split" data-lang="en"></div>


*Conditions for train crossings*

![[src_kangourou_2015_finale_junior__probJ1.png]]

> Kang is a station on a single-track line. In the figure, you can see the track layout at Kang, with the length of each track indicated: the running track is the upper one, while the lower track begins and ends with two "dead" sections. All trains operating on the line consist of a locomotive at the front and several carriages; each locomotive and each carriage is 19 metres long. What are the least restrictive conditions to impose on the composition of two trains so that they can pass each other at Kang? Bear in mind that any kind of shunting maneuver (in particular, trains may reverse) and any signaling arrangement compatible with the station layout are permitted, including splitting the trains into groups of carriages. (See the figure)


**Topic:** [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_casework_accurato|Careful case analysis]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qj2" data-atom="qj2" data-title="Quesito J2" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*misura angolo ABC*

![[src_kangourou_2015_finale_junior__probJ2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Two equal squares sharing a common vertex (top center).
  % Left square: A (top-left), shared vertex E (top-right of left sq / top-left of right sq), C (bottom-right of left sq), bottom-left of left sq.
  % Right square: E, D (top-right), bottom-right, B (bottom-left of right sq).
  % Labels: A, C, B as in the problem (angle ABC at vertex B).
  \draw (-1.879, 0.684) -- (0,0) -- (-0.684, -1.879) -- (-2.563, -1.195) -- cycle;
  \draw (0,0) -- (1.879, 0.684) -- (2.563, -1.195) -- (0.684, -1.879) -- cycle;
  \draw[dashed] (-1.879, 0.684) -- (0.684, -1.879);
  \draw[dashed] (-0.684, -1.879) -- (0.684, -1.879);
  \draw (0.529, -1.724) arc (135:180:0.22);
  \node[above left] at (-1.879, 0.684) {A};
  \node[below] at (-0.684, -2.0) {C};
  \node[below] at (0.684, -2.0) {B};
\end{tikzpicture}
\end{document}
```

> La figura mostra due quadrati uguali che hanno in comune esattamente un vertice $A$. È possibile precisare la misura dell'angolo $ABC$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 45 gradi
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<div class="qlang-split" data-lang="en"></div>


*Measure angle ABC*

![[src_kangourou_2015_finale_junior__probJ2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Two equal squares sharing a common vertex (top center).
  % Left square: A (top-left), shared vertex E (top-right of left sq / top-left of right sq), C (bottom-right of left sq), bottom-left of left sq.
  % Right square: E, D (top-right), bottom-right, B (bottom-left of right sq).
  % Labels: A, C, B as in the problem (angle ABC at vertex B).
  \draw (-1.879, 0.684) -- (0,0) -- (-0.684, -1.879) -- (-2.563, -1.195) -- cycle;
  \draw (0,0) -- (1.879, 0.684) -- (2.563, -1.195) -- (0.684, -1.879) -- cycle;
  \draw[dashed] (-1.879, 0.684) -- (0.684, -1.879);
  \draw[dashed] (-0.684, -1.879) -- (0.684, -1.879);
  \draw (0.529, -1.724) arc (135:180:0.22);
  \node[above left] at (-1.879, 0.684) {A};
  \node[below] at (-0.684, -2.0) {C};
  \node[below] at (0.684, -2.0) {B};
\end{tikzpicture}
\end{document}
```

> The figure shows two equal squares that share exactly one vertex $A$. Is it possible to specify the measure of angle $ABC$? (see figure)


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="qj3" data-atom="qj3" data-title="Quesito J3" data-tags="topic_algebra,topic_geometria_piana,method_casework,skill_manipolazione_algebrica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*valori di n*

> Negli usuali fogli (rettangolari) formato A4 il rapporto fra la lunghezza del lato più lungo e quella del lato più corto è $\sqrt{2}$. Vuoi disegnare su uno di tali fogli una griglia di dimensioni $(n+1) \times n$ formata da celle quadrate, non importa di quale taglia, ma la stessa per tutte le celle. Vuoi fare in modo che ogni lato della griglia sia parallelo a un bordo del foglio e che la distanza di ciascuno dei lati della griglia dal bordo del foglio più vicino sia la stessa, non importa quale, per ciascuno dei quattro lati. Quanti sono i possibili valori di $n$?

**Topic:** [[topic_algebra|Algebra]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** 1 e 2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<div class="qlang-split" data-lang="en"></div>


*values of n*

> On standard (rectangular) A4 sheets, the ratio of the length of the longer side to that of the shorter side is $\sqrt{2}$. You want to draw on one of such sheets a grid of size $(n+1) \times n$ made up of square cells—the size doesn't matter, but all the cells must be the same size. You want to ensure that each side of the grid is parallel to an edge of the sheet and that, for each of the four sides, the distance from each side of the grid to the nearest edge of the sheet is the same, regardless of which edge it is. How many possible values does $n$ have?


**Topic:** [[topic_algebra|Algebra]], [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Geometria|Geometry]]



<span class="atom-split" id="qj4" data-atom="qj4" data-title="Quesito J4" data-tags="topic_combinatoria,method_bigezione,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di realizzare N+1 kang > modi per N kang*

> A Kanglandia la moneta in uso è il kang e vi sono solo monete da 1, 2 o 3 kang. Ovviamente, con monete come queste, si può realizzare qualunque importo di un numero intero di kang. Dimostra che, per ogni numero intero positivo $N$, i diversi modi possibili per realizzare l'importo di $N+1$ kang sono in numero strettamente superiore ai diversi modi possibili di realizzare l'importo di $N$ kang. Attenzione: per ottenere, ad esempio, 4 kang, il modo $1+1+2$ va considerato uguale al modo $1+2+1$ (ma non al modo $2+2$).

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_bigezione|Bigezione / corrispondenza]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** dimostrazione
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<div class="qlang-split" data-lang="en"></div>


*Ways to implement N+1 kang > ways for N kang*

> In Kanglandia, the currency in use is the kang, and there are only coins worth 1, 2, or 3 kang. Obviously, with coins like these, any amount that is a whole number of kangs can be made up. Prove that, for every positive integer $N$, the number of different ways of making up the amount of $N+1$ kangs is strictly greater than the number of different ways of making up the amount of $N$ kangs. Note: to obtain, for example, 4 kangs, the way $1+1+2$ must be regarded as equal to the way $1+2+1$ (but not to the way $2+2$).

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_bigezione|Bijection / correspondence]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qj5" data-atom="qj5" data-title="Quesito J5" data-tags="topic_combinatoria,method_conteggio,method_ricorsione,skill_conteggio_sistematico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*numero totale di gracchiate in un'ora*

> 51 corvi sono appollaiati in fila su un ramo di un grosso albero. Ogni volta (e solo ogni volta) che uno di essi gracchia, il suo vicino di destra e quello di sinistra, se esistono, si alzano in volo. Ogni corvo che prende il volo vola per esattamente un minuto, poi riprende il suo posto lanciando immediatamente una sonora gracchiata. Questa mattina il primo a gracchiare è stato il corvo all'estremità del ramo e poi hanno proseguito, secondo la regola descritta, per un'ora esatta: allo scadere dell'ora tutti i corvi in volo sono tornati sul ramo facendo ciascuno un'ultima sonora gracchiata. Quante sono state in quell'ora, dal primo all'ultimo istante inclusi, le gracchiate fatte?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 931
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<div class="qlang-split" data-lang="en"></div>


*Total number of caws in an hour*

> 51 crows are perched in a row on a branch of a large tree. Each time (and only each time) one of them caws, its right-hand and left-hand neighbors, if they exist, take to the air. Every crow that takes flight flies for exactly one minute, then returns to its place, immediately letting out a loud caw. This morning, the first to caw was the crow at the end of the branch, and then they continued, according to the rule described, for exactly an hour: when the hour was up, all the crows in flight had returned to the branch, each letting out one last loud caw. How many caws were made during that hour, from the first instant to the last inclusive?


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_ricorsione|Recursion]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qj6" data-atom="qj6" data-title="Quesito J6" data-tags="topic_combinatoria,topic_geometria_piana,method_disuguaglianze,method_casework,skill_casework_accurato,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero minimo di rette parallele ai lati per 100 regioni*

> Dato un triangolo, qual è il numero minimo di rette parallele ai lati che occorre tracciare per suddividerlo in esattamente 100 regioni?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 16
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of lines parallel to the sides per 100 regions*

> Given a triangle, what is the minimum number of lines parallel to the sides that need to be drawn to divide it into exactly 100 regions?


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]
