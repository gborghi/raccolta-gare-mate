---
title: Japan Junior Mathematical Olympiad 2026 — Honsen (Final)
tipo: gara
competition: Japan Junior Mathematical Olympiad 2026 — Honsen (Final)
family: jjmo
year: '2026'
level: JJMO Honsen
---
<div class="atom-reader" data-gara="Quesiti/src_jjmo24hq_honsen"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,method_estremalita,method_casework,method_conteggio,skill_conteggio_sistematico,skill_modellizzazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Grid integers with adjacency and per-row-pair conditions, find max n*

> Let $n$ be an integer with $n \ge 2$. We write one integer in each cell of a grid with $n$ rows and $2026$ columns. The writing is done so that, for any two cells adjacent left-right, the integer written in the right cell either equals the integer written in the left cell or is exactly $1$ greater. Moreover, for any two distinct integers $i, j$ with $1 \le i, j \le n$, the following two conditions are both satisfied:
> 
> - There exists an integer $k$ with $1 \le k \le 2026$ such that the integer written in the cell of row $i$ (from the top) and column $k$ (from the left) differs from the integer written in the cell of row $j$ (from the top) and column $k$ (from the left).
> - There exists an integer $k$ with $1 \le k \le 2026$ such that the integer written in the cell of row $i$ (from the top) and column $k$ (from the left) equals the integer written in the cell of row $j$ (from the top) and column $k$ (from the left).
> 
> Find the largest value that $n$ can take.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1I0LRY7GCUGrK3CaQym2-0VxiENqQdLFa/view)


<span class="qlang-split" data-lang="it"></span>


*Integri di griglia con condizioni di adiacenza e di coppia a fila, trovare max n*

> $n$ sia un numero intero con $n \ge 2$. Scriviamo un intero in ogni cella di una griglia con le righe $n$ e le colonne $2026$. La scrittura è fatta in modo che, per due celle adiacenti sinistra-destra, il numero intero scritto nella cella destra sia uguale al numero intero scritto nella cella sinistra o sia esattamente $1$ maggiore. Inoltre, per due integri distinti $i, j$ e $1 \le i, j \le n$, sono soddisfatte entrambe le seguenti due condizioni:
> 
> - Esiste un numero intero $k$ con $1 \le k \le 2026$ tale che l'intero scritto nella cella della riga $i$ (da sopra) e della colonna $k$ (da sinistra) differisca dal numero intero scritto nella cella della riga $j$ (da sopra) e dalla colonna $k$ (da sinistra). - Esiste un numero intero $k$ con $1 \le k \le 2026$ tale che l'intero scritto nella cella della riga $i$ (da sopra) e la colonna $k$ (da sinistra) sia uguale all'intero scritto nella cella della riga $j$ (da sopra) e alla colonna $k$ (da sinistra).
> 
> Trova il valore più grande che $n$ può assumere.

[[src_jjmo24hq_honsen__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,method_simmetria,method_trigonometria,skill_ragionamento_geometrico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Angle bisector, perpendicular bisector of AD, four concyclic points*

> In triangle $ABC$, let $D$ be the intersection of the bisector of $\angle BAC$ with side $BC$, and let $P, Q$ be the intersections of the perpendicular bisector of segment $AD$ with sides $AB, AC$ respectively. Take a point $X$ on segment $AP$ and a point $Y$ on segment $AQ$ such that $\angle BQP = \angle XQP$ and $\angle CPQ = \angle YPQ$. Prove that the four points $B, C, Y, X$ lie on a single circle.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1I0LRY7GCUGrK3CaQym2-0VxiENqQdLFa/view)


<span class="qlang-split" data-lang="it"></span>


*Bissettore angolare, bisettore perpendicolare di AD, quattro punti conciclici*

> Nel triangolo $ABC$, $D$ sia l'intersezione del bisettore di $\angle BAC$ con il lato $BC$, e $P, Q$ sia l'intersezione del bisettore perpendicolare del segmento $AD$ con i lati $AB, AC$ rispettivamente. Prendere un punto $X$ sul segmento $AP$ e un punto $Y$ sul segmento $AQ$ in modo tale che $\angle BQP = \angle XQP$ e $\angle CPQ = \angle YPQ$. Provare che i quattro punti $B, C, Y, X$ si trovano su un singolo cerchio.

[[src_jjmo24hq_honsen__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,method_congruenze,method_casework,method_fattorizzazione,skill_casework_accurato,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Arrange all divisors so consecutive sums are powers of two*

> Let $n$ be a positive integer having at least $3$ positive divisors, and let $k$ denote the number of positive divisors of $n$. Find all possible values of $n$ for which there exists a sequence $d_1, d_2, \dots, d_k$ in which all of the positive divisors of $n$ appear exactly once each, satisfying the following condition:
> 
> For every integer $i$ with $1 \le i \le k-1$, the sum $d_i + d_{i+1}$ is a power of two.
> 
> Here, a power of two means an integer expressible in the form $2^m$ using a non-negative integer $m$. Also, $2^0 = 1$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1I0LRY7GCUGrK3CaQym2-0VxiENqQdLFa/view)


<span class="qlang-split" data-lang="it"></span>


*Arrangere tutti i divisori in modo che le somme consecutive siano potenze di due*

> $n$ sia un intero positivo con almeno $3$ divisori positivi e $k$ indichi il numero di divisori positivi di $n$. Trovare tutti i valori possibili di $n$ per i quali esiste una sequenza $d_1, d_2, \dots, d_k$ in cui tutti i divisori positivi di $n$ appaiono esattamente una volta ciascuno, soddisfacendo la seguente condizione:
> 
> Per ogni numero intero $i$ con $1 \le i \le k-1$, la somma $d_i + d_{i+1}$ è una potenza di due.
> 
> Qui, una potenza di due significa un intero espressibile nella forma $2^m$ utilizzando un intero non negativo $m$. Inoltre, $2^0 = 1$.

[[src_jjmo24hq_honsen__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_disuguaglianze,topic_algebra,method_disuguaglianze,method_estremalita,skill_manipolazione_algebrica,skill_stima"></span>

<div class="qlang-switch" data-default="en"></div>


*Minimize ratio of max to min under cyclic product constraint*

> Positive real numbers $x_1, x_2, \dots, x_{2026}$ satisfy
> $$(x_1 + x_2)(x_2 + x_3) \cdots (x_{2025} + x_{2026})(x_{2026} + x_1) = 3^{2026}\, x_1 x_2 \cdots x_{2026}.$$
> Let $M$ be the maximum value among $x_1, x_2, \dots, x_{2026}$, and let $m$ be the minimum value. Find the smallest possible value of $\dfrac{M}{m}$.

**Topic:** [[topic_disuguaglianze|Disuguaglianze]], [[topic_algebra|Algebra]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1I0LRY7GCUGrK3CaQym2-0VxiENqQdLFa/view)


<span class="qlang-split" data-lang="it"></span>


*Minimizzare il rapporto max/min sotto restrizione di prodotto ciclica*

> I numeri reali positivi $x_1, x_2, \dots, x_{2026}$ soddisfano $$(x_1 + x_2)(x_2 + x_3) \cdots (x_{2025} + x_{2026})(x_{2026} + x_1) = 3^{2026}\, x_1 x_2 \cdots x_{2026}.$$ $M$ sia il valore massimo tra $x_1, x_2, \dots, x_{2026}$, e $m$ sia il valore minimo. Trova il minimo valore possibile di $\dfrac{M}{m}$.

[[src_jjmo24hq_honsen__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,method_casework,method_estremalita,method_conteggio,skill_conteggio_sistematico,skill_modellizzazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Card placement uniquely determined by position constraints, minimize m*

> Let $m$ be a positive integer. There are $2026$ cells arranged in a single row, and there are $2026$ cards in total, each bearing one of the integers from $1$ to $2026$ (one card for each integer). There are also tuples $(a_1, b_1, c_1), (a_2, b_2, c_2), \dots, (a_m, b_m, c_m)$ such that for every integer $i$ with $1 \le i \le m$, the inequalities $b_i \le a_i$ and $c_i \le a_i$ hold. We consider performing operations of choosing a cell on which no card has been placed and placing a card on it, carried out in the order: the card written $1$, then the card written $2$, ..., up to the card written $2026$. It turned out that the number of placements (arrangements) for which the following holds was exactly $1$:
> 
> For every integer $i$ with $1 \le i \le m$, immediately after placing the card written $a_i$, among the $a_i$ cards then lined up in the cells, the integer written on the $b_i$-th one counting from the left is $c_i$.
> 
> Find the smallest value that $m$ can take.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1I0LRY7GCUGrK3CaQym2-0VxiENqQdLFa/view)


<span class="qlang-split" data-lang="it"></span>


*Posizione della carta determinata in modo unico da vincoli di posizione, riducendo al minimo m*

> $m$ sia un numero intero positivo. Ci sono celle $2026$ disposte in una singola riga, e ci sono carte $2026$ in totale, ciascuna con uno degli entieri da $1$ a $2026$ (una carta per ogni intero). Esistono anche tupli $(a_1, b_1, c_1), (a_2, b_2, c_2), \dots, (a_m, b_m, c_m)$ tali che per ogni numero intero $i$ con $1 \le i \le m$, le disuguaglianze $b_i \le a_i$ e $c_i \le a_i$ si mantengano. Consideramo di eseguire operazioni di selezione di una cella su cui non è stata posta alcuna carta e di inserimento di una carta su di essa, eseguite nell'ordine: la carta scritta $1$, poi la carta scritta $2$, ..., fino alla carta scritta $2026$. Si è rivelato che il numero di posizionamenti (arrangiamenti) per i quali le seguenti posizioni sono state esattamente $1$:
> 
> Per ogni numero intero $i$ con $1 \le i \le m$, immediatamente dopo aver inserito la carta scritta $a_i$, tra le carte $a_i$ poi allineate nelle celle, il numero intero scritto sulla $b_i$-a contare da sinistra è $c_i$.
> 
> Trova il valore più piccolo che $m$ può assumere.

[[src_jjmo24hq_honsen__Q05]]
