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


<span class="qlang-split" data-lang="en"></span>


*Minimum visits to empty 15 plates*

> In a cabin in the woods, there are 15 plates in a row: the first one has 1 nut, the second one has 2 nuts, the third one has 3 nuts, and so on until the 15th plate has 15 nuts. Every now and then a squirrel comes into the cage, picks up a few plates and eats nuts, taking the same number from each of the plates chosen. What's the smallest number of visits to the cottage that allows him to eat all the nuts?

**Answer:** 4
[[src_kangourou_2014_junior_finale__Q01]]



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


<span class="qlang-split" data-lang="en"></span>


*NMB angle with three-string mean points*

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

> The figure shows a circumference of which the segments $AB$, $BC$ and $CD$ are three strings. The $M$, $N$ and $K$ points are their respective mean points. The angle $CKN$ is 75 degrees. How many degrees does the angle $NMB$ measure? (see figure)

**Answer:** 75
[[src_kangourou_2014_junior_finale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_analitica,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Luogo dei punti entro distanza 3 (metrica modificata)*

> Nel piano dotato di un sistema $Oxy$ di assi cartesiani ortogonali la distanza di due punti viene usualmente definita utilizzando le coordinate dei punti nel rispetto del teorema di Pitagora. Cambiamo la distanza, supponendo di poterci muovere solo in verticale o in orizzontale, ma in orizzontale solo se siamo sull'asse delle ascisse. In formule, la distanza del punto $(x_1, y_1)$ dal punto $(x_2, y_2)$ vale $|y_1 - y_2|$ se $x_1 = x_2$, vale invece $|y_1| + |x_1 - x_2| + |y_2|$ se $x_1 \neq x_2$. Rispetto a questa nuova distanza, qual è il luogo dei punti che distano non più di 3 dal punto $(2, 1)$?

**Topic:** [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1gsyU7EVfAmWfdKlyvCj0UIdYJSndEpVE/view)


<span class="qlang-split" data-lang="en"></span>


*Location of points within distance 3 (modified metric) *

> In a plane with a $Oxy$ system of orthogonal Cartesian axes the distance of two points is usually defined using the coordinates of the points in accordance with Pythagorean theorem. We change the distance, assuming we can only move vertically or horizontally, but only horizontally if we're on the axis of the axis. In the formula, the distance from the point $(x_1, y_1)$ to the point $(x_2, y_2)$ shall be $|y_1 - y_2|$ if $x_1 = x_2$ and $|y_1| + |x_1 - x_2| + |y_2|$ if $x_1 \neq x_2$. Compared to this new distance, what is the location of the points not more than 3 from the $(2, 1)$ point?

[[src_kangourou_2014_junior_finale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_logica,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Strategie vincenti nel gioco delle due pile*

> Considera il seguente gioco per due giocatori che giocano a turno, sorteggiando chi deve giocare per primo. Si parte con due pile di monete. Chi è chiamato a giocare ne scarta una e spezza la rimanente in due nuove pile (di almeno una moneta ciascuna). Perde chi non può più giocare. Discuti l'esistenza di strategie vincenti.

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1gsyU7EVfAmWfdKlyvCj0UIdYJSndEpVE/view)


<span class="qlang-split" data-lang="en"></span>


*Winning strategies in the game of two batteries*

> Consider the following game for two players playing in turns, drawing the first player. He leaves with two piles of coins. The player who is called to play discards one and breaks the remainder into two new piles (of at least one coin each). He loses who can't play anymore. Discuss the existence of winning strategies.

[[src_kangourou_2014_junior_finale__Q04]]



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


<span class="qlang-split" data-lang="en"></span>


*For quantities n the product (p+1) is divisible by n*

> A natural number $n$ is broken down into prime factors in 2014 (not necessarily all of them distinct from each other). Each prime factor is added to 1 and the new 2014 numbers obtained are multiplied by each other, resulting in a number $m$. For how many integers $n$ does it happen that, with these premises, $m$ is divisible by $n$?

**Answer:** 336
[[src_kangourou_2014_junior_finale__Q05]]



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


<span class="qlang-split" data-lang="en"></span>


*Minimum n of 8x8 gray squares for adjacent coverage*

![[src_kangourou_2014_junior_finale__prob6.png]]

> $n$ squares of one grid $8 \times 8$ are painted black, the others are white. Each square of the grid, whether white or black, is adjacent to (i.e. has a side in common with) a black square (different from it in the case of black). What is the minimum possible value for $n$?

**Answer:** 20
[[src_kangourou_2014_junior_finale__Q06]]
