---
title: Kangourou 2015 finale nazionale Junior
tipo: gara
competition: Kangourou 2015 finale nazionale Junior
family: kangourou
year: '2015'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2015_finale_junior"></div>



<span class="atom-split" id="qj1" data-atom="qj1" data-title="Quesito J1" data-tags="topic_logica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*condizioni per incrocio treni*

![[src_kangourou_2015_finale_junior__probJ1.png]]

> Kang è una stazione su una linea a binario unico. In figura vedi lo schema dei binari di Kang, di ciascuno dei quali è indicata la lunghezza: il binario di corsa è quello superiore, mentre il binario inferiore inizia e termina con due tronchi "morti". Tutti i treni circolanti sulla linea sono composti da una locomotiva, che è in testa, e da alcune carrozze: la lunghezza di ogni locomotiva e di ogni carrozza è 19 metri. Quali sono le condizioni meno restrittive da imporre sulla composizione di due treni perché possano incrociarsi in Kang? Tieni presente che è ammesso ogni tipo di manovra (in particolare i treni possono fare retromarcia) e di segnalamento compatibile con lo schema della stazione, incluso lo spezzamento dei treni in gruppi di carrozze. (vedi figura)

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** max 13 carrozze
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<span class="qlang-split" data-lang="en"></span>


*train crossing conditions*

![[src_kangourou_2015_finale_junior__probJ1.png]]

> Kang is a station on a single track line. In the figure, you can see the Kang track pattern, each of which has a length: the running track is the top track, while the bottom track starts and ends with two "dead" logs. All trains running on the line are made up of a locomotive, which is at the head, and some carriages: the length of each locomotive and carriage is 19 meters. What are the least restrictive conditions to be imposed on the composition of two trains in order to cross at Kang? Please note that all types of maneuvers (especially trains may retrograde) and signalling compatible with the station layout are allowed, including the breaking of trains into carriage groups. (see figure)

**Answer:** max 13 carrozze
[[src_kangourou_2015_finale_junior__QJ1]]



<span class="atom-split" id="qj2" data-atom="qj2" data-title="Quesito J2" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

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
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 45 gradi
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<span class="qlang-split" data-lang="en"></span>


The measurement shall be carried out in accordance with the methodology set out in Annex II.

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

> The figure shows two equal squares that have exactly one vertex $A$ in common. Is it possible to specify the angle $ABC$? (see figure)

**Answer:** 45 gradi
[[src_kangourou_2015_finale_junior__QJ2]]



<span class="atom-split" id="qj3" data-atom="qj3" data-title="Quesito J3" data-tags="topic_algebra,topic_geometria_piana,method_casework,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*valori di n*

> Negli usuali fogli (rettangolari) formato A4 il rapporto fra la lunghezza del lato più lungo e quella del lato più corto è $\sqrt{2}$. Vuoi disegnare su uno di tali fogli una griglia di dimensioni $(n+1) \times n$ formata da celle quadrate, non importa di quale taglia, ma la stessa per tutte le celle. Vuoi fare in modo che ogni lato della griglia sia parallelo a un bordo del foglio e che la distanza di ciascuno dei lati della griglia dal bordo del foglio più vicino sia la stessa, non importa quale, per ciascuno dei quattro lati. Quanti sono i possibili valori di $n$?

**Topic:** [[topic_algebra|Algebra]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** 1 e 2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<span class="qlang-split" data-lang="en"></span>


*values of n*

> In the usual A4 (rectangular) sheets, the ratio between the length of the longest side and the length of the shortest side is $\sqrt{2}$. You want to draw on one of these sheets a grid of$(n+1) \times n$size made up of square cells, no matter what size, but the same for all cells. You want to make sure that each side of the grid is parallel to one edge of the sheet and that the distance of each side of the grid from the edge of the nearest sheet is the same, no matter which, for each of the four sides. What are the possible values of $n$?

**Answer:** 1 e 2
[[src_kangourou_2015_finale_junior__QJ3]]



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


<span class="qlang-split" data-lang="en"></span>


*Mode of making N+1 kang >Mode for N kang*

> In Kangland, the currency used is the kang and there are only 1, 2 or 3 kang coins. Obviously, with coins like these, you can make any amount of an integer kang. It shows that, for each positive integer $N$, the different possible ways to realize the amount of $N+1$ kang are in a strictly higher number than the different possible ways to realize the amount of $N$ kang. Note: to obtain, for example, 4 kang, the $1+1+2$ mode must be considered equal to the $1+2+1$ mode (but not the $2+2$ mode).

**Answer:** dimostrazione
[[src_kangourou_2015_finale_junior__QJ4]]



<span class="atom-split" id="qj5" data-atom="qj5" data-title="Quesito J5" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*numero totale di gracchiate in un'ora*

> 51 corvi sono appollaiati in fila su un ramo di un grosso albero. Ogni volta (e solo ogni volta) che uno di essi gracchia, il suo vicino di destra e quello di sinistra, se esistono, si alzano in volo. Ogni corvo che prende il volo vola per esattamente un minuto, poi riprende il suo posto lanciando immediatamente una sonora gracchiata. Questa mattina il primo a gracchiare è stato il corvo all'estremità del ramo e poi hanno proseguito, secondo la regola descritta, per un'ora esatta: allo scadere dell'ora tutti i corvi in volo sono tornati sul ramo facendo ciascuno un'ultima sonora gracchiata. Quante sono state in quell'ora, dal primo all'ultimo istante inclusi, le gracchiate fatte?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 931
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<span class="qlang-split" data-lang="en"></span>


*total number of cracks in one hour*

> Fifty-one ravens are lined up on a branch of a large tree. Whenever one of them crawls, his right and his left, if they exist, will rise up. Every crow that takes flight flies for exactly one minute, then takes its place by immediately making a crackling sound. This morning the first to crawl was the raven at the end of the branch and then they continued, according to the described rule, for exactly one hour: at the end of the hour all the flying ravens returned to the branch making one last crawl sound. How many were there at that hour, from the first to the last moment included, the scratches made?

**Answer:** 931
[[src_kangourou_2015_finale_junior__QJ5]]



<span class="atom-split" id="qj6" data-atom="qj6" data-title="Quesito J6" data-tags="topic_combinatoria,topic_geometria_piana,method_disuguaglianze,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero minimo di rette parallele ai lati per 100 regioni*

> Dato un triangolo, qual è il numero minimo di rette parallele ai lati che occorre tracciare per suddividerlo in esattamente 100 regioni?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 16
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of parallel lines on the sides per 100 regions*

> Given a triangle, what is the minimum number of lines parallel to the sides that need to be drawn to divide it into exactly 100 regions?

**Answer:** 16
[[src_kangourou_2015_finale_junior__QJ6]]
