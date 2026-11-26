---
title: Kangourou 2014 finale Junior
tipo: gara
competition: Kangourou 2014 finale Junior
family: kangourou
year: '2014'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2014_junior_finale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_aritmetica,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo visite per svuotare i 15 piattini*

> In una casetta nel bosco ci sono 15 piattini in fila: sul primo c'è 1 noce, sul secondo ci sono 2 noci, sul terzo 3 e così via fino al quindicesimo piattino su cui ci sono 15 noci. Ogni tanto uno scoiattolo entra nella casetta, sceglie alcuni piattini e mangia delle noci prendendone lo stesso numero da ognuno dei piattini scelti. Qual è il più piccolo numero di visite alla casetta che gli consente di mangiare tutte le noci?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 4
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1gsyU7EVfAmWfdKlyvCj0UIdYJSndEpVE/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum visits to empty the 15 small plates*

> In a little house in the woods there are 15 small plates in a row: on the first there is 1 walnut, on the second there are 2 walnuts, on the third 3, and so on up to the fifteenth small plate, on which there are 15 walnuts. From time to time a squirrel enters the little house, chooses some small plates and eats some walnuts, taking the same number from each of the small plates chosen. What is the smallest number of visits to the little house that allows him to eat all the walnuts?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / number theory]]
**Method:** [[method_estremalita|Extremal principle]]
**Skill:** [[skill_casework_accurato|Careful casework]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 4
**Source:** [open PDF p.1](https://drive.google.com/file/d/1gsyU7EVfAmWfdKlyvCj0UIdYJSndEpVE/view)
[[Quesiti/src_kangourou_2014_junior_finale#q01|src_kangourou_2014_junior_finale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Angolo NMB con punti medi di tre corde*

![[src_kangourou_2014_junior_finale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw (0,0) circle (1);
  \coordinate (A) at ({cos(50)},{sin(50)});
  \coordinate (B) at ({cos(-40)},{sin(-40)});
  \coordinate (C) at ({cos(200)},{sin(200)});
  \coordinate (D) at ({cos(140)},{sin(140)});
  \coordinate (M) at ({(cos(50)+cos(-40))/2},{(sin(50)+sin(-40))/2});
  \coordinate (N) at ({(cos(-40)+cos(200))/2},{(sin(-40)+sin(200))/2});
  \coordinate (K) at ({(cos(200)+cos(140))/2},{(sin(200)+sin(140))/2});
  \draw (A) -- (B);
  \draw (B) -- (C);
  \draw (C) -- (D);
  \draw (C) -- (N) -- (B);
  \draw (K) -- (N);
  \draw (M) -- (N);
  \node[above right] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[left] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[right] at (M) {$M$};
  \node[below] at (N) {$N$};
  \node[left] at (K) {$K$};
  \filldraw (A) circle (0.02);
  \filldraw (B) circle (0.02);
  \filldraw (C) circle (0.02);
  \filldraw (D) circle (0.02);
  \filldraw (M) circle (0.02);
  \filldraw (N) circle (0.02);
  \filldraw (K) circle (0.02);
\end{tikzpicture}
\end{document}
```

> In figura si vede una circonferenza della quale i segmenti $AB$, $BC$ e $CD$ sono tre corde. I punti $M$, $N$ e $K$ sono i loro rispettivi punti medi. L'angolo $CKN$ misura 75 gradi. Quanti gradi misura l'angolo $NMB$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 75
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1gsyU7EVfAmWfdKlyvCj0UIdYJSndEpVE/view)


<div class="qlang-split" data-lang="en"></div>


*NMB angle with mean points of three strings*

![[src_kangourou_2014_junior_finale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw (0,0) circle (1);
  \coordinate (A) at ({cos(50)},{sin(50)});
  \coordinate (B) at ({cos(-40)},{sin(-40)});
  \coordinate (C) at ({cos(200)},{sin(200)});
  \coordinate (D) at ({cos(140)},{sin(140)});
  \coordinate (M) at ({(cos(50)+cos(-40))/2},{(sin(50)+sin(-40))/2});
  \coordinate (N) at ({(cos(-40)+cos(200))/2},{(sin(-40)+sin(200))/2});
  \coordinate (K) at ({(cos(200)+cos(140))/2},{(sin(200)+sin(140))/2});
  \draw (A) -- (B);
  \draw (B) -- (C);
  \draw (C) -- (D);
  \draw (C) -- (N) -- (B);
  \draw (K) -- (N);
  \draw (M) -- (N);
  \node[above right] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[left] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[right] at (M) {$M$};
  \node[below] at (N) {$N$};
  \node[left] at (K) {$K$};
  \filldraw (A) circle (0.02);
  \filldraw (B) circle (0.02);
  \filldraw (C) circle (0.02);
  \filldraw (D) circle (0.02);
  \filldraw (M) circle (0.02);
  \filldraw (N) circle (0.02);
  \filldraw (K) circle (0.02);
\end{tikzpicture}
\end{document}
```

> In the figure, a circle is shown, in which the line segments $AB$, $BC$, and $CD$ are three chords. The points $M$, $N$, and $K$ are their respective midpoints. The angle $CKN$ measures 75 degrees. How many degrees does the angle $NMB$ measure? (see figure)

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]

[[Quesiti/src_kangourou_2014_junior_finale#q02|src_kangourou_2014_junior_finale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_analitica,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Luogo dei punti entro distanza 3 (metrica modificata)*

> Nel piano dotato di un sistema $Oxy$ di assi cartesiani ortogonali la distanza di due punti viene usualmente definita utilizzando le coordinate dei punti nel rispetto del teorema di Pitagora. Cambiamo la distanza, supponendo di poterci muovere solo in verticale o in orizzontale, ma in orizzontale solo se siamo sull'asse delle ascisse. In formule, la distanza del punto $(x_1, y_1)$ dal punto $(x_2, y_2)$ vale $|y_1 - y_2|$ se $x_1 = x_2$, vale invece $|y_1| + |x_1 - x_2| + |y_2|$ se $x_1 \neq x_2$. Rispetto a questa nuova distanza, qual è il luogo dei punti che distano non più di 3 dal punto $(2, 1)$?

**Topic:** [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1gsyU7EVfAmWfdKlyvCj0UIdYJSndEpVE/view)


<div class="qlang-split" data-lang="en"></div>


*Set of points within distance 3 (modified metric)*

> In the plane equipped with a $Oxy$ system of orthogonal Cartesian axes, the distance between two points is usually defined using the coordinates of the points, in accordance with the Pythagorean theorem. Let us change the distance, assuming that we can move only vertically or horizontally, but horizontally only if we are on the x-axis. In formulas, the distance from point $(x_1, y_1)$ to point $(x_2, y_2)$ is $|y_1 - y_2|$ if $x_1 = x_2$; it is instead $|y_1| + |x_1 - x_2| + |y_2|$ if $x_1 \neq x_2$. With respect to this new distance, what is the locus of points that are no more than 3 units away from point $(2, 1)$?

**Topic:** [[topic_geometria_analitica|Coordinate geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]

[[Quesiti/src_kangourou_2014_junior_finale#q03|src_kangourou_2014_junior_finale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_logica,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Strategie vincenti nel gioco delle due pile*

> Considera il seguente gioco per due giocatori che giocano a turno, sorteggiando chi deve giocare per primo. Si parte con due pile di monete. Chi è chiamato a giocare ne scarta una e spezza la rimanente in due nuove pile (di almeno una moneta ciascuna). Perde chi non può più giocare. Discuti l'esistenza di strategie vincenti.

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1gsyU7EVfAmWfdKlyvCj0UIdYJSndEpVE/view)


<div class="qlang-split" data-lang="en"></div>


*Winning strategies in the two-pile game*

> Consider the following game for two players who play in turn, drawing lots to decide who must play first. The game starts with two piles of coins. The player whose turn it is discards one of them and splits the remaining one into two new piles (of at least one coin each). The player who can no longer play loses. Discuss the existence of winning strategies.

**Topic:** [[topic_logica|Logic, games and strategies]]
**Method:** [[method_invarianti|Invariants / monovariants]]
**Skill:** [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Source:** [open PDF p.1](https://drive.google.com/file/d/1gsyU7EVfAmWfdKlyvCj0UIdYJSndEpVE/view)
[[Quesiti/src_kangourou_2014_junior_finale#q04|src_kangourou_2014_junior_finale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_conteggio,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Per quanti n il prodotto (p+1) è divisibile per n*

> Un numero naturale $n$ è scomposto in 2014 fattori primi (non necessariamente tutti distinti fra loro). Ad ogni fattore primo viene sommato 1 e i nuovi 2014 numeri ottenuti vengono moltiplicati fra loro, dando come risultato un numero $m$. Per quanti interi $n$ succede che, con queste premesse, $m$ è divisibile per $n$?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 336
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1gsyU7EVfAmWfdKlyvCj0UIdYJSndEpVE/view)


<div class="qlang-split" data-lang="en"></div>


*For how many n is (p+1) divisible by n?*

> A natural number $n$ is factored into 2014 prime factors (not necessarily all distinct from one another). 1 is added to each prime factor, and the 2014 new numbers obtained are multiplied together, yielding a number $m$. For how many integers $n$ does it happen that, under these premises, $m$ is divisible by $n$?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]

[[Quesiti/src_kangourou_2014_junior_finale#q05|src_kangourou_2014_junior_finale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo n di quadrati grigi 8x8 per copertura adiacente*

![[src_kangourou_2014_junior_finale__prob6.png]]

> $n$ quadrati di una griglia $8 \times 8$ sono dipinti di nero, gli altri sono bianchi. Ogni quadrato della griglia, bianco o nero che sia, è adiacente a (cioè ha un lato in comune con) un quadrato nero (diverso da esso nel caso sia nero). Qual è il minimo valore possibile per $n$?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 20
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1gsyU7EVfAmWfdKlyvCj0UIdYJSndEpVE/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of 8x8 gray squares per adjacent coverage*

![[src_kangourou_2014_junior_finale__prob6.png]]

> $n$ squares of a grid $8 \times 8$ are painted black; the others are white. Every square of the grid, whether white or black, is adjacent to (that is, shares a side with) a black square (a different one if it is black itself). What is the minimum possible value of $n$?

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]

[[Quesiti/src_kangourou_2014_junior_finale#q06|src_kangourou_2014_junior_finale__Q06]]
