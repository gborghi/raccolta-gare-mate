---
title: XXIII Olimpiade Italiana Cesenatico 2007
tipo: gara
competition: XXIII Olimpiade Italiana Cesenatico 2007
family: archimede
year: '2007'
level: nazionale
---
<div class="atom-reader" data-gara="Quesiti/src_cesenatico_2007"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,method_disuguaglianze,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*punti con somma distanze da rette/vertici minima*

![[src_cesenatico_2007__prob1a.png]]
![[src_cesenatico_2007__prob1b.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (-1,-1.732);
  \coordinate (B) at (1,-1.732);
  \coordinate (C) at (2,0);
  \coordinate (D) at (1,1.732);
  \coordinate (E) at (-1,1.732);
  \coordinate (F) at (-2,0);
  \coordinate (P) at (0,0);
  \draw (A)--(B)--(C)--(D)--(E)--(F)--cycle;
  \draw (A)--(D); \draw (B)--(E); \draw (C)--(F);
  \fill (P) circle (1.5pt);
  \node[below] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[left] at (F) {$F$};
  \node[below right] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> Sia dato nel piano un esagono regolare. Per ogni punto P del piano, chiamiamo l(P) la somma delle sei
> distanze tra P e le rette su cui giacciono i lati dell’esagono, e v(P) la somma delle sei distanze di P dai
> vertici dell’esagono.
> (a) Per quali punti P del piano l(P) è minima?
> (b) Per quali punti P del piano v(P) è minima?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** (a) interno/bordo esagono; (b) il centro
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f34U527qzfJNiSRUXGF8n4qcd2jD3ko5/view)


<span class="qlang-split" data-lang="en"></span>


*points with sum of minimum vertical/straight distances*

![[src_cesenatico_2007__prob1a.png]]
![[src_cesenatico_2007__prob1b.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (-1,-1.732);
  \coordinate (B) at (1,-1.732);
  \coordinate (C) at (2,0);
  \coordinate (D) at (1,1.732);
  \coordinate (E) at (-1,1.732);
  \coordinate (F) at (-2,0);
  \coordinate (P) at (0,0);
  \draw (A)--(B)--(C)--(D)--(E)--(F)--cycle;
  \draw (A)--(D); \draw (B)--(E); \draw (C)--(F);
  \fill (P) circle (1.5pt);
  \node[below] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[left] at (F) {$F$};
  \node[below right] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> A regular hexagon is given in the plan. For each point P of the plane, we call P the sum of the six distances between P and the lines on which the sides of the hexagon lie, and v(P) the sum of the six distances of P from the vertices of the hexagon. (a) For which P points of the plan is the minimum P? (b) For which points P of the plan v(P) is the minimum?

**Answer:** (a) interno/bordo esagono; (b) il centro
[[src_cesenatico_2007__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,method_congruenze"></span>

<div class="qlang-switch" data-default="it"></div>


*p(2007)-q(2007) multiplo di 2 e di k*

> Diciamo che due polinomi a coefficienti interi p e q sono simili se hanno lo stesso grado e gli stessi
> coefficienti a meno dell’ordine.
> (a) Dimostrare che se p e q sono simili, allora p(2007) −q(2007) è un multiplo di 2.
> (b) Esistono degli interi k > 2 tali che, comunque siano dati due polinomi simili p e q, p(2007)−q(2007)
> è un multiplo di k?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** (a) dimostrato; (b) si, k=2006
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1f34U527qzfJNiSRUXGF8n4qcd2jD3ko5/view)


<span class="qlang-split" data-lang="en"></span>


*p(2007)-q(2007) multiplied by 2 and k*

> Let's say that two polynomials with integer coefficients p and q are similar if they have the same degree and the same coefficients less the order. (a) Demonstrate that if p and q are similar, then p(2007) −q(2007) is a multiple of 2. (b) Are there such integers k > 2 that, however given two similar polynomials p and q, p(2007)−q(2007) is a multiple of k?

**Answer:** (a) dimostrato; (b) si, k=2006
[[src_cesenatico_2007__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*quadrilatero ciclico sse BA=BE*

![[src_cesenatico_2007__prob3.png]]

> Sia ABC un triangolo con baricentro G. Sia D ̸= A un punto sulla retta AG tale che AG = GD, e sia
> E ̸= B un punto sulla retta GB tale che GB = GE. Sia infine M il punto medio di AB. Dimostrare che
> il quadrilatero BMCD è inscrittibile in una circonferenza se e solo se BA = BE.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** dimostrato
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1f34U527qzfJNiSRUXGF8n4qcd2jD3ko5/view)


<span class="qlang-split" data-lang="en"></span>


* cyclic quadrilateral and BA=BE*

![[src_cesenatico_2007__prob3.png]]

> Let ABC be a triangle with a baricenter G. Both D = A point on the AG line such that AG = GD, and E = B point on the GB line such that GB = GE. Let M be the mean of AB. Demonstrate that the quadrilateral BMCD is inscribed in a circumference if and only if BA = BE.

**Answer:** dimostrato
[[src_cesenatico_2007__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_logica,method_estremalita,method_invarianti"></span>

<div class="qlang-switch" data-default="it"></div>


*massimo euro garantiti*

> Alberto, per festeggiare il compleanno di Barbara, propone di giocare al seguente gioco: dato l’insieme
> dei numeri 0, 1, . . ., 1024, Barbara rimuove da questo insieme 29 numeri. Al passaggio successivo Alberto
> rimuove dai rimanenti 28 numeri. Tocca nuovamente a Barbara, che dai restanti ne rimuove 27 eccetera,
> fino a che non rimangono solo 2 numeri a e b. Alberto a questo punto deve pagare a Barbara |a−b| euro.
> Determinare la massima quantità di euro che Barbara è sicura di poter incassare, indipendentemente
> dalla strategia adottata da Alberto.

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_invarianti|Invarianti / monovarianti]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 32 euro
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1f34U527qzfJNiSRUXGF8n4qcd2jD3ko5/view)


<span class="qlang-split" data-lang="en"></span>


*maximum guaranteed euro *

> Alberto, to celebrate Barbara's birthday, proposes to play the following game: given the sum of the numbers 0, 1, . . . , 1024, Barbara removes 29 numbers from this total. In the next step, Alberto removes the remaining 28 numbers. You play Barbara again, who removes 27 and so on, until there are only 2 numbers a and b. Alberto at this point has to pay Barbara a-a-b thousand euros. Determine the maximum amount of euro Barbara is sure to be able to collect, regardless of the strategy adopted by Alberto.

**Answer:** 32 euro
[[src_cesenatico_2007__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_congruenze,method_induzione"></span>

<div class="qlang-switch" data-default="it"></div>


*n e x_n coprimi per ogni n*

> Sia data la successione
> (
> x1 = 2;
> xn+1 = 2x2
> n −1
> per n ≥1.
> Dimostrare che n e xn sono relativamente primi per ogni n ≥1.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_induzione|Induzione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** dimostrato
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1f34U527qzfJNiSRUXGF8n4qcd2jD3ko5/view)


<span class="qlang-split" data-lang="en"></span>


*n and x_n covers for each n*

> Whether given the sequence (x1 = 2; xn+1 = 2x2 n −1 for n ≥1. Demonstrate that n and xn are relatively prime for each n ≥1.

**Answer:** dimostrato
[[src_cesenatico_2007__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_disuguaglianze,method_disuguaglianze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Massime costanti c_n e d_n in disuguaglianze con prodotto 1*

> Per ogni intero n ≥2, determinare:
> (a) il più grande numero reale cn tale che
> 1
> 1 + a1
> +
> 1
> 1 + a2
> + . . . +
> 1
> 1 + an
> ≥cn
> per ogni scelta dei numeri reali positivi a1, a2, . . . , an tali che a1 · a2 · . . . · an = 1;
> (b) il più grande numero reale dn tale che
> 1
> 1 + 2a1
> +
> 1
> 1 + 2a2
> + . . . +
> 1
> 1 + 2an
> ≥dn
> per ogni scelta dei numeri reali positivi a1, a2, . . . , an tali che a1 · a2 · . . . · an = 1.

**Topic:** [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** (a) c_n=1; (b) d_2=2/3, d_n=1 per n>=3
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1f34U527qzfJNiSRUXGF8n4qcd2jD3ko5/view)


<span class="qlang-split" data-lang="en"></span>


Maximum constant c_n and d_n in inequality with product 1

> For each integer n ≥2, determine: (a) the largest real number cn such that 1 1 + a1 + 1 1 + a2 + . . . + 1 1 + an ≥cn for each choice of positive real numbers a1, a2, . . . , such as a1 · a2 · . . . · an = 1; (b) the largest real number such that 1 1 + 2a1 + 1 1 + 2a2 + . . . + 1 1 + 2an ≥dn for each choice of positive real numbers a1, a2, . . . , such as a1 · a2 · . . . · an = 1.

**Answer:** (a) c_n=1; (b) d_2=2/3, d_n=1 per n>=3
[[src_cesenatico_2007__Q06]]
