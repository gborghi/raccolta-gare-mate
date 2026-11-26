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


<div class="qlang-split" data-lang="en"></div>


*Points with minimum sum of distances to lines/vertices*

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

> Let a regular hexagon be given in the plane. For each point P in the plane, let l(P) be the sum of the six distances from P to the lines on which the sides of the hexagon lie, and let v(P) be the sum of the six distances from P to the vertices of the hexagon.
> (a) For which points P in the plane is l(P) minimal?
> (b) For which points P in the plane is v(P) minimal?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]

[[Quesiti/src_cesenatico_2007#q01|src_cesenatico_2007__Q01]]



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


<div class="qlang-split" data-lang="en"></div>


*p(2007)-q(2007) is a multiple of 2 and of k*

> Let us say that two polynomials p and q with integer coefficients are similar if they have the same degree and the same coefficients up to order.
> (a) Prove that if p and q are similar, then p(2007) − q(2007) is a multiple of 2.
> (b) There exist integers k > 2 such that, no matter how two similar polynomials p and q are given, p(2007)−q(2007)
> Is it a multiple of k?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]

[[Quesiti/src_cesenatico_2007#q02|src_cesenatico_2007__Q02]]



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


<div class="qlang-split" data-lang="en"></div>


*A quadrilateral is cyclic if and only if BA = BE*

![[src_cesenatico_2007__prob3.png]]

> Let ABC be a triangle with centroid G. Let D ≠ A be a point on the line AG such that AG = GD, and let E ≠ B be a point on the line GB such that GB = GE. Finally, let M be the midpoint of AB. Prove that the quadrilateral BMCD is cyclic if and only if BA = BE.

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]

[[Quesiti/src_cesenatico_2007#q03|src_cesenatico_2007__Q03]]



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


<div class="qlang-split" data-lang="en"></div>


*Maximum guaranteed euros*

> To celebrate Barbara's birthday, Alberto proposes playing the following game: given the set of numbers 0, 1, ..., 1024, Barbara removes 29 numbers from this set. In the next step, Alberto removes some from the remaining 28 numbers. It is Barbara's turn again; she removes 27 of the remaining ones, and so on, until only two numbers, a and b, are left. At this point, Alberto must pay Barbara |a−b| euros. Determine the maximum amount of euros that Barbara can be certain of receiving, regardless of the strategy Alberto adopts.

**Topic:** [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_invarianti|Invariants / monovariants]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]

[[Quesiti/src_cesenatico_2007#q04|src_cesenatico_2007__Q04]]



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


<div class="qlang-split" data-lang="en"></div>


*n e x_n coprime for every n*

> Let the sequence be given
> (x1 = 2; xn+1 = 2x2 n −1 for n ≥ 1. Prove that n and xn are relatively prime for every n ≥ 1.

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_induzione|Induction]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]

[[Quesiti/src_cesenatico_2007#q05|src_cesenatico_2007__Q05]]



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


<div class="qlang-split" data-lang="en"></div>


*Constant maxima c_n and d_n in inequalities with product 1*

> For each integer n ≥ 2, determine:
> (a) the greatest real number cn such that
> 1 1 + a1 + 1 1 + a2
> + . . . +
> 1 1 + an ≥ cn for every choice of positive real numbers a1, a2, . . . , an such that a1 · a2 · . . . · an = 1;
> (b) the greatest real number dn such that
> 1 1 + 2a1 + 1 1 + 2a2
> + . . . +
> 1 1 + 2an ≥ dn for every choice of positive real numbers a1, a2, . . . , an such that a1 · a2 · . . . · an = 1.

**Topic:** [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]

[[Quesiti/src_cesenatico_2007#q06|src_cesenatico_2007__Q06]]
