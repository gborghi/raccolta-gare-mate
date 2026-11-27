---
title: Kangourou 2022 Student — Finale (risposta aperta)
tipo: gara
competition: Kangourou 2022 Student — Finale (risposta aperta)
family: kangourou
year: '2022'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2022_student_finale"></div>



<span class="atom-split" id="qs1" data-atom="qs1" data-title="Quesito S1" data-tags="topic_combinatoria,topic_geometria_piana,method_colorazione,skill_casework_accurato,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Tessere 2×1 al massimo su regione di 36 quadratini*

![[src_kangourou_2022_student_finale__probS1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.5]
  % Staircase pyramid: 6 rows (1,3,5,7,9,11 squares top to bottom) = 36 total
  \foreach \i in {0,...,10} { \draw (\i,0) rectangle (\i+1,1); }
  \foreach \i in {1,...,9}  { \draw (\i,1) rectangle (\i+1,2); }
  \foreach \i in {2,...,8}  { \draw (\i,2) rectangle (\i+1,3); }
  \foreach \i in {3,...,7}  { \draw (\i,3) rectangle (\i+1,4); }
  \foreach \i in {4,...,6}  { \draw (\i,4) rectangle (\i+1,5); }
  \draw (5,5) rectangle (6,6);
  % 2x1 tile legend
  \draw (8.5,5) rectangle (9.5,6);
  \draw (9.5,5) rectangle (10.5,6);
  \node at (9.5,4.5) {\small $2{\times}1$};
\end{tikzpicture}
\end{document}
```

> In figura vedi una regione di piano ottenuta accostando 36 quadratini tutti uguali fra loro e una tessera ottenuta accostando due quadratini identici a quelli della regione. Quante tessere di questo tipo puoi disporre al massimo nella regione in modo che ognuna copra esattamente due quadratini della regione e non si sovrappongano (neppure parzialmente)? Puoi utilizzare la figura per indicare come disporre le tessere, ma ricorda che devi anche giustificare il motivo per il quale non ne puoi collocare un numero maggiore. (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 15
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)


<div class="qlang-split" data-lang="en"></div>


*How many tiles of this kind can you place in the region at most?*

![[src_kangourou_2022_student_finale__probS1.png]]

> In the picture you see a region of the plane obtained by placing 36 little squares, all equal to one another, side by side, and a tile obtained by placing side by side two little squares identical to those of the region. How many tiles of this kind can you place in the region at most so that each covers exactly two little squares of the region and they do not overlap (not even partly)? You may use the picture to show how to place the tiles, but remember that you must also justify why you cannot place a greater number. (see the picture)

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_colorazione|Colouring / parity]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]
**Answer:** 15



<span class="atom-split" id="qs2" data-atom="qs2" data-title="Quesito S2" data-tags="topic_geometria_piana,method_doppio_conteggio,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*lati rossi=verdi*

![[src_kangourou_2022_student_finale__probS2.png]]

> Due quadrati congruenti, uno con bordo rosso e l'altro con bordo verde, sono disposti nel piano in modo tale che la loro intersezione sia un ottagono (i centri dei due quadrati possono non coincidere). Dimostra che la somma delle lunghezze dei lati rossi dell'ottagono coincide con la somma delle lunghezze dei lati verdi. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_doppio_conteggio|Doppio conteggio]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** dimostrazione
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)


<div class="qlang-split" data-lang="en"></div>


*Prove that the sum of the lengths of the red sides of the octagon equals the sum of the lengths of the green sides.*

![[src_kangourou_2022_student_finale__probS2.png]]

> Two congruent squares, one with a red border and the other with a green border, are placed in the plane so that their intersection is an octagon (the centres of the two squares need not coincide). Prove that the sum of the lengths of the red sides of the octagon equals the sum of the lengths of the green sides. (see the picture)

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_doppio_conteggio|Double counting]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]
**Answer:** dimostrazione



<span class="atom-split" id="qs3" data-atom="qs3" data-title="Quesito S3" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*due cifre uguali*

> Considera il numero $20232022$ in notazione decimale; leva la sua prima cifra da destra (quella delle unità) e sommala al numero ottenuto con le cifre rimaste. Procedi in questo modo fino ad ottenere un numero di 10 cifre. Dimostra che questo numero che hai ottenuto possiede almeno due cifre uguali.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** dimostrazione
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)


<div class="qlang-split" data-lang="en"></div>


*Prove that this number you have obtained has at least two equal digits.*

> Consider the number $20232022$ in decimal notation; remove its first digit from the right (the units digit) and add it to the number obtained from the digits that remain. Proceed in this way until you obtain a number of 10 digits. Prove that this number you have obtained has at least two equal digits.

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Method:** [[method_congruenze|Modular arithmetic / congruences]]
**Skill:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** dimostrazione



<span class="atom-split" id="qs4" data-atom="qs4" data-title="Quesito S4" data-tags="topic_geometria_piana,topic_trigonometria,method_trigonometria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Area punti del pentagono a distanza >1 da un vertice*

![[src_kangourou_2022_student_finale__probS4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  % Regular pentagon ABCDE, circumradius ~ 0.8507, side 1
  \coordinate (A) at (0, 0.8507);
  \coordinate (B) at (-0.8090, 0.2629);
  \coordinate (C) at (-0.5, -0.6882);
  \coordinate (D) at (0.5, -0.6882);
  \coordinate (E) at (0.8090, 0.2629);
  \draw (A) -- (B) -- (C) -- (D) -- (E) -- cycle;
  \node[above] at (A) {$A$};
  \node[left]  at (B) {$B$};
  \node[below left]  at (C) {$C$};
  \node[below right] at (D) {$D$};
  \node[right] at (E) {$E$};
  % Circular arcs of radius 0.5 at each vertex (interior angle 108 deg)
  \draw[blue, dashed] (A) +(-36:0.5)  arc[start angle=-36,  end angle=-144, radius=0.5];
  \draw[blue, dashed] (B) +(36:0.5)   arc[start angle=36,   end angle=-72,  radius=0.5];
  \draw[blue, dashed] (C) +(108:0.5)  arc[start angle=108,  end angle=0,    radius=0.5];
  \draw[blue, dashed] (D) +(180:0.5)  arc[start angle=180,  end angle=72,   radius=0.5];
  \draw[blue, dashed] (E) +(144:0.5)  arc[start angle=144,  end angle=36,   radius=0.5];
  \node at (0.05, 0.0) {$F$};
\end{tikzpicture}
\end{document}
```

> Determina l'area della regione luogo dei punti interni ad un pentagono regolare di lato 1 che sono a distanza maggiore di 1 da almeno uno dei vertici. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** √3/2 - π/3
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)


<div class="qlang-split" data-lang="en"></div>


*Determine the area of the region.*

![[src_kangourou_2022_student_finale__probS4.png]]

> Determine the area of the region that is the locus of the points inside a regular pentagon of side 1 that are at a distance greater than 1 from at least one of the vertices. (see the picture)

**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_trigonometria|Trigonometry]]
**Metodo:** [[method_trigonometria|Trigonometric techniques]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]
**Answer:** √3/2 - π/3



<span class="atom-split" id="qs5" data-atom="qs5" data-title="Quesito S5" data-tags="topic_geometria_analitica,topic_insiemi_funzioni,method_coordinate,method_casework,skill_astrazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Asse di un segmento con metrica del max (distanza Chebyshev)*

![[src_kangourou_2022_student_finale__probS5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[->] (-2.2,0) -- (2.2,0) node[right] {$x$};
  \draw[->] (0,-2.2) -- (0,2.2) node[above] {$y$};
  \node[below left] at (0,0) {$O$};
  \fill (-1,0) circle (2pt) node[below] {$(-1,0)$};
  \fill  (1,0) circle (2pt) node[below] {$(1,0)$};
  % Upper shaded triangle
  \fill[blue!20] (0,1) -- (-1,2) -- (1,2) -- cycle;
  \draw (0,1) -- (-1,2) -- (1,2) -- cycle;
  % Lower shaded triangle
  \fill[blue!20] (0,-1) -- (-1,-2) -- (1,-2) -- cycle;
  \draw (0,-1) -- (-1,-2) -- (1,-2) -- cycle;
  % Dashed rectangles (Chebyshev balls)
  \draw[red,  dashed, thick] (0,-1) rectangle (2,1);
  \draw[blue, dashed, thick] (-2,-1) rectangle (0,1);
  % Line labels
  \node[above left]  at (-1,2)  {$y-1=-x$};
  \node[above right] at (1,2)   {$y-1=x$};
  \node[below left]  at (-1,-2) {$y+1=x$};
  \node[below right] at (1,-2)  {$y+1=-x$};
\end{tikzpicture}
\end{document}
```

> Nel piano dotato di un sistema cartesiano ortogonale monometrico $Oxy$, introduciamo una nuova nozione di distanza: la distanza del punto $(x, y)$ dal punto $(a, b)$ è il maggiore fra i numeri $|x-a|$ e $|y-b|$ (che possono coincidere). L'asse di un segmento viene definito, rispetto a questa nuova nozione di distanza, nel modo usuale, cioè come luogo dei punti equidistanti dagli estremi del segmento. Descrivi l'asse del segmento di estremi $(-1, 0)$ e $(1, 0)$ rispetto alla nuova nozione di distanza (NON rispetto alla distanza euclidea). (vedi figura)

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Risposta:** descrizione luogo
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)


<div class="qlang-split" data-lang="en"></div>


*Describe the perpendicular bisector of the segment with endpoints (−1, 0) and (1, 0) under the new notion of distance.*

![[src_kangourou_2022_student_finale__probS5.png]]

> In the plane equipped with a Cartesian coordinate system $Oxy$ with equal units on the axes, we introduce a new notion of distance: the distance of the point $(x, y)$ from the point $(a, b)$ is the greater of the numbers $|x-a|$ and $|y-b|$ (which may coincide). The perpendicular bisector of a segment is defined, with respect to this new notion of distance, in the usual way, that is, as the locus of the points equidistant from the endpoints of the segment. Describe the perpendicular bisector of the segment with endpoints $(-1, 0)$ and $(1, 0)$ with respect to the new notion of distance (NOT with respect to the Euclidean distance). (see the picture)

**Topic:** [[topic_geometria_analitica|Coordinate geometry]], [[topic_insiemi_funzioni|Sets and functions]]
**Metodo:** [[method_coordinate|Coordinate method]], [[method_casework|Case analysis]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Geometria|Geometry]], [[Algebra e Analisi|Algebra and analysis]]
**Answer:** descrizione luogo



<span class="atom-split" id="qs6" data-atom="qs6" data-title="Quesito S6" data-tags="topic_aritmetica,topic_insiemi_funzioni,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Interi non negativi come unione di traslati disgiunti di A0*

> Dimostra che è possibile esprimere l'insieme dei numeri interi non negativi come unione $\bigcup_{n=0}^{\infty} A_n$, dove gli $A_n$ sono sottoinsiemi a due a due disgiunti, ciascuno costituito da infiniti elementi, e tali che, per ogni $n \geq 1$, $A_n$ sia ottenibile sommando una stessa costante, dipendente da $n$, ad ogni elemento di $A_0$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** dimostrazione
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)


<div class="qlang-split" data-lang="en"></div>


*Prove that it is possible.*

> Prove that it is possible to express the set of the non-negative integers as a union $\bigcup_{n=0}^{\infty} A_n$, where the $A_n$ are pairwise disjoint subsets, each made up of infinitely many elements, and such that, for every $n \geq 1$, $A_n$ can be obtained by adding one and the same constant, depending on $n$, to every element of $A_0$.

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_insiemi_funzioni|Sets and functions]]
**Method:** [[method_invarianti|Invariants / monovariants]]
**Skill:** [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** dimostrazione
