---
title: Kangourou 2014 finale nazionale Student
tipo: gara
competition: Kangourou 2014 finale nazionale Student
family: kangourou
year: '2014'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2014_finale_student"></div>



<span class="atom-split" id="qs1" data-atom="qs1" data-title="Quesito S1" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*misura angolo NMB*

![[src_kangourou_2014_finale_student__probS1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw (0,0) circle (1);
  \coordinate (A) at (0.342, 0.940);
  \coordinate (B) at (0.985, -0.174);
  \coordinate (C) at (-0.906, -0.423);
  \coordinate (D) at (-0.848, 0.530);
  \coordinate (M) at (0.664, 0.383);
  \coordinate (N) at (0.040, -0.299);
  \coordinate (K) at (-0.877, 0.054);
  \draw (A)--(B);
  \draw (B)--(C);
  \draw (C)--(D);
  \draw (C)--(M);
  \draw (K)--(B);
  \draw[thin] (K)++(30:0.09) arc (30:100:0.09);
  \draw[thin] (M)++(-155:0.09) arc (-155:-80:0.09);
  \node[above] at (0.342, 0.940) {A};
  \node[right] at (0.985, -0.174) {B};
  \node[left] at (-0.906, -0.423) {C};
  \node[above left] at (-0.848, 0.530) {D};
  \node[above left] at (-0.877, 0.054) {K};
  \node[right] at (0.664, 0.383) {M};
  \node[below] at (0.040, -0.299) {N};
\end{tikzpicture}
\end{document}
```

> In figura si vede una circonferenza della quale i segmenti $AB$, $BC$ e $CD$ sono tre corde. I punti $M$, $N$ e $K$ sono i loro rispettivi punti medi. L'angolo $CKN$ misura $75°$. Quanti gradi misura l'angolo $NMB$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 75
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1J0eVc0n4KMj_riY1S4VFaIQwejE9Ln6P/view)


<span class="qlang-split" data-lang="en"></span>


*angle measurement NMB*

![[src_kangourou_2014_finale_student__probS1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw (0,0) circle (1);
  \coordinate (A) at (0.342, 0.940);
  \coordinate (B) at (0.985, -0.174);
  \coordinate (C) at (-0.906, -0.423);
  \coordinate (D) at (-0.848, 0.530);
  \coordinate (M) at (0.664, 0.383);
  \coordinate (N) at (0.040, -0.299);
  \coordinate (K) at (-0.877, 0.054);
  \draw (A)--(B);
  \draw (B)--(C);
  \draw (C)--(D);
  \draw (C)--(M);
  \draw (K)--(B);
  \draw[thin] (K)++(30:0.09) arc (30:100:0.09);
  \draw[thin] (M)++(-155:0.09) arc (-155:-80:0.09);
  \node[above] at (0.342, 0.940) {A};
  \node[right] at (0.985, -0.174) {B};
  \node[left] at (-0.906, -0.423) {C};
  \node[above left] at (-0.848, 0.530) {D};
  \node[above left] at (-0.877, 0.054) {K};
  \node[right] at (0.664, 0.383) {M};
  \node[below] at (0.040, -0.299) {N};
\end{tikzpicture}
\end{document}
```

> The figure shows a circumference of which the segments $AB$, $BC$ and $CD$ are three strings. The $M$, $N$ and $K$ points are their respective mean points. The angle $CKN$ is $75°$. How many degrees does the angle $NMB$ measure? (see figure)

**Answer:** 75
[[src_kangourou_2014_finale_student__QS1]]



<span class="atom-split" id="qs2" data-atom="qs2" data-title="Quesito S2" data-tags="topic_geometria_analitica,method_coordinate,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Luogo dei punti entro distanza 3 con metrica modificata*

> Nel piano dotato di un sistema $Oxy$ di assi cartesiani ortogonali la distanza di due punti viene usualmente definita utilizzando le coordinate dei punti nel rispetto del teorema di Pitagora. Cambiamo la distanza, supponendo di poterci muovere solo in verticale o in orizzontale, ma in orizzontale solo se siamo sull'asse delle ascisse. In formule, la distanza del punto $(x_1, y_1)$ dal punto $(x_2, y_2)$ vale $|y_1 - y_2|$ se $x_1 = x_2$, vale invece $|y_1| + |x_1 - x_2| + |y_2|$ se $x_1 \neq x_2$. Rispetto a questa nuova distanza, qual è il luogo dei punti che distano non più di $3$ dal punto $(2, 1)$?

**Topic:** [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]]
**Risposta:** quadrato+segmento
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1J0eVc0n4KMj_riY1S4VFaIQwejE9Ln6P/view)


<span class="qlang-split" data-lang="en"></span>


*Location of points within distance 3 with modified metric*

> In a plane with a $Oxy$ system of orthogonal Cartesian axes the distance of two points is usually defined using the coordinates of the points in accordance with Pythagorean theorem. We change the distance, assuming we can only move vertically or horizontally, but only horizontally if we're on the axis of the axis. In the formula, the distance from the point $(x_1, y_1)$ to the point $(x_2, y_2)$ shall be $|y_1 - y_2|$ if $x_1 = x_2$ and $|y_1| + |x_1 - x_2| + |y_2|$ if $x_1 \neq x_2$. Compared to this new distance, what is the location of the points not more than $3$ from the point $(2, 1)$?

**Answer:** quadrato+segmento
[[src_kangourou_2014_finale_student__QS2]]



<span class="atom-split" id="qs3" data-atom="qs3" data-title="Quesito S3" data-tags="topic_logica,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*strategia vincente*

> Considera il seguente gioco per due giocatori che giocano a turno, sorteggiando chi deve giocare per primo. Si parte con due pile di monete. Chi è chiamato a giocare ne scarta una e spezza la rimanente in due nuove pile (di almeno una moneta ciascuna). Perde chi non può più giocare. Discuti l'esistenza di strategie vincenti.

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** strategia parita
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1J0eVc0n4KMj_riY1S4VFaIQwejE9Ln6P/view)


<span class="qlang-split" data-lang="en"></span>


This is the main reason why the Commission has decided to adopt a new strategy.

> Consider the following game for two players playing in turns, drawing the first player. He leaves with two piles of coins. The player who is called to play discards one and breaks the remainder into two new piles (of at least one coin each). He loses who can't play anymore. Discuss the existence of winning strategies.

**Answer:** strategia parita
[[src_kangourou_2014_finale_student__QS3]]



<span class="atom-split" id="qs4" data-atom="qs4" data-title="Quesito S4" data-tags="topic_aritmetica,method_conteggio,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*per quanti n|m*

> Un numero naturale $n$ è scomposto in $2014$ fattori primi (non necessariamente tutti distinti fra loro). Ad ogni fattore primo viene sommato $1$ e i nuovi $2014$ numeri ottenuti vengono moltiplicati fra loro, dando come risultato un numero $m$. È possibile che, per qualche numero naturale $n$, $n$ divida il numero $m$ così ottenuto? In caso di risposta negativa, fornisci adeguata giustificazione. In caso di risposta affermativa, precisa per quanti numeri naturali $n$ accade che $n$ divide $m$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 336
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1J0eVc0n4KMj_riY1S4VFaIQwejE9Ln6P/view)


<span class="qlang-split" data-lang="en"></span>


* for n quantities of m*

> A natural number $n$ is broken down into $2014$ prime factors (not necessarily all distinct from each other). Each prime factor is added to $1$ and the new $2014$ numbers obtained are multiplied by each other, resulting in a $m$ number. Is it possible that for some natural number $n$, $n$ divides the number $m$ thus obtained? If the answer is no, provide an appropriate justification. If yes, specify for how many natural numbers $n$ $n$ divides $m$.

**Answer:** 336
[[src_kangourou_2014_finale_student__QS4]]



<span class="atom-split" id="qs5" data-atom="qs5" data-title="Quesito S5" data-tags="topic_combinatoria,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo n caselle nere su griglia 8x8 con adiacenza*

> $n$ quadrati di una griglia $8 \times 8$ sono dipinti di nero, gli altri sono bianchi. Ogni quadrato della griglia, bianco o nero che sia, è adiacente a (cioè ha un lato in comune con) un quadrato nero (diverso da esso nel caso sia nero). Qual è il minimo valore possibile per $n$?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 20
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1J0eVc0n4KMj_riY1S4VFaIQwejE9Ln6P/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum n black boxes on 8x8 grid with adjacency*

> $n$ squares of one grid $8 \times 8$ are painted black, the others are white. Each square of the grid, whether white or black, is adjacent to (i.e. has a side in common with) a black square (different from it in the case of black). What is the minimum possible value for $n$?

**Answer:** 20
[[src_kangourou_2014_finale_student__QS5]]



<span class="atom-split" id="qs6" data-atom="qs6" data-title="Quesito S6" data-tags="topic_funzionali,topic_combinatoria,method_bigezione,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Disporre successione con infiniti 1 e non-1 in matrice infinita*

> Si consideri una successione $\{a_n\}$, $n = 1, 2, \ldots$ di numeri interi tale che si abbia $a_n = 1$ per infiniti indici $n$ e $a_n \neq 1$ per infiniti indici $n$. Stabilire se è sempre possibile disporre (tutti e soli) i termini della successione $\{a_n\}$ in una "matrice infinita" $[a_{i,j}]$, $i = 1, 2, 3, \ldots$, $j = 1, 2, 3, \ldots$ in modo che:
> - per ogni $i$ si abbia $a_{i,j} = 1$ se e solo se $j \geq i$;
> - per ogni $i$, $j$ e $k$ con $j < k$, anche nella successione originaria la posizione occupata dal termine $a_{i,j}$ preceda quella occupata dal termine $a_{i,k}$ (come accade ora nella riga $i$-esima della matrice).

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_bigezione|Bigezione / corrispondenza]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** si possibile
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1J0eVc0n4KMj_riY1S4VFaIQwejE9Ln6P/view)


<span class="qlang-split" data-lang="en"></span>


*To have succession with infinites 1 and non-1 in an infinite matrix*

> Consider a sequence of $\{a_n\}$, $n = 1, 2, \ldots$ integers such that $a_n = 1$ for infinite indexes $n$ and $a_n \neq 1$ for infinite indexes $n$ are obtained. Establish whether it is always possible to arrange (all and only) the terms of the $\{a_n\}$ succession into an "infinite matrix" $[a_{i,j}]$, $i = 1, 2, 3, \ldots$, $j = 1, 2, 3, \ldots$ so that: - for each $i$ $a_{i,j} = 1$ is obtained if and only if $j \geq i$; - for each $i$, $j$ and $k$ with $j < k$, even in the original succession the position occupied by the term $a_{i,j}$ precedes that occupied by the term $a_{i,k}$ (as is now the case in the $i$ row of the matrix).

**Answer:** si possibile
[[src_kangourou_2014_finale_student__QS6]]
