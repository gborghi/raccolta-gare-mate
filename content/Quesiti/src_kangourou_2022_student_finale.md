---
title: Kangourou 2022 Student — Finale (risposta aperta)
tipo: gara
competition: Kangourou 2022 Student — Finale (risposta aperta)
family: kangourou
year: '2022'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2022_student_finale"></div>



<span class="atom-split" id="qs1" data-atom="qs1" data-title="Quesito S1" data-tags="topic_combinatoria,topic_geometria_piana,method_colorazione,skill_casework_accurato"></span>

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
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 15
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)


<span class="qlang-split" data-lang="en"></span>


*Table 2×1 at most on a 36-square region*

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

> In the figure, you see a region of the plane obtained by joining 36 squares all equal to each other and a card obtained by joining two squares identical to those of the region. How many tiles of this type can you have at most in the region so that each one covers exactly two squares of the region and does not overlap (even partially)? You can use the figure to indicate how to arrange the cards, but remember that you also have to justify why you can't place a larger number. (see figure)

**Answer:** 15
[[src_kangourou_2022_student_finale__QS1]]



<span class="atom-split" id="qs2" data-atom="qs2" data-title="Quesito S2" data-tags="topic_geometria_piana,method_doppio_conteggio,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*lati rossi=verdi*

![[src_kangourou_2022_student_finale__probS2.png]]

> Due quadrati congruenti, uno con bordo rosso e l'altro con bordo verde, sono disposti nel piano in modo tale che la loro intersezione sia un ottagono (i centri dei due quadrati possono non coincidere). Dimostra che la somma delle lunghezze dei lati rossi dell'ottagono coincide con la somma delle lunghezze dei lati verdi. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** dimostrazione
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)


<span class="qlang-split" data-lang="en"></span>


*reds=greens*

![[src_kangourou_2022_student_finale__probS2.png]]

> Two congruent squares, one with a red and the other with a green edge, are arranged in the plane so that their intersection is an octagon (the centers of the two squares may not coincide). It shows that the sum of the lengths of the red sides of the octagon coincides with the sum of the lengths of the green sides. (see figure)

**Answer:** dimostrazione
[[src_kangourou_2022_student_finale__QS2]]



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


<span class="qlang-split" data-lang="en"></span>


*two digits equal to *

> Consider the number $20232022$ in decimal notation; subtract its first digit from the right (the number of units) and add it to the number obtained with the remaining digits. Continue this way until you get a 10-digit number. It shows that this number you got has at least two digits equal.

**Answer:** dimostrazione
[[src_kangourou_2022_student_finale__QS3]]



<span class="atom-split" id="qs4" data-atom="qs4" data-title="Quesito S4" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

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

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** √3/2 - π/3
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)


<span class="qlang-split" data-lang="en"></span>


*Area of pentagon points at a distance >1 from a vertex*

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

> Determine the area of the region where the interior points on a regular pentagon on side 1 are more than 1 distance from at least one of the vertices. (see figure)

**Answer:** √3/2 - π/3
[[src_kangourou_2022_student_finale__QS4]]



<span class="atom-split" id="qs5" data-atom="qs5" data-title="Quesito S5" data-tags="topic_geometria_analitica,topic_insiemi_funzioni,method_coordinate,skill_astrazione"></span>

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
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** descrizione luogo
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)


<span class="qlang-split" data-lang="en"></span>


*Axis of a segment with max (chebyshev distance) metric *

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

> In the plane with a monometric orthogonal cartesian system $Oxy$, we introduce a new notion of distance: the distance from the point $(x, y)$ to the point $(a, b)$ is the largest of the numbers $|x-a|$ and $|y-b|$ (which may coincide). The axis of a segment is defined, in relation to this new concept of distance, in the usual way, that is, as the place of the points equidistant from the ends of the segment. Describe the axis of the $(-1, 0)$ and $(1, 0)$ extreme segment with respect to the new concept of distance (NON with respect to Euclidean distance). (see figure)

**Answer:** descrizione luogo
[[src_kangourou_2022_student_finale__QS5]]



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


<span class="qlang-split" data-lang="en"></span>


*Non-negative integers as a union of disjoint transfers of A0*

> It shows that it is possible to express the set of non-negative integers as a union $\bigcup_{n=0}^{\infty} A_n$, where the $A_n$ are two-to-two disjoint subsets, each consisting of infinite elements, and such that, for each $n \geq 1$, $A_n$ is obtained by adding the same constant, dependent on $n$, to each element of $A_0$.

**Answer:** dimostrazione
[[src_kangourou_2022_student_finale__QS6]]
