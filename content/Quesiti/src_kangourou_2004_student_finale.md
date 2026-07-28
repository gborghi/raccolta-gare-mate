---
title: Kangourou 2004 Student finale nazionale
tipo: gara
competition: Kangourou 2004 Student finale nazionale
family: kangourou
year: '2004'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2004_student_finale"></div>



<span class="atom-split" id="qs1" data-atom="qs1" data-title="Quesito S1" data-tags="topic_algebra,topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Coppie intere con |x^2-3y^2+2xy|=1*

> Per quali coppie $(x, y)$ di numeri interi relativi è vero che $|x^2 - 3y^2 + 2xy| = 1$?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** (1,0),(-1,0)
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)


<span class="qlang-split" data-lang="en"></span>


Full pairs with ∙ x^2-3y^2 + k2xy is equal to 1 ∙

> For which pairs of $(x, y)$ relative integers is $|x^2 - 3y^2 + 2xy| = 1$ true?

**Answer:** (1,0),(-1,0)
[[src_kangourou_2004_student_finale__QS1]]



<span class="atom-split" id="qs2" data-atom="qs2" data-title="Quesito S2" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area regione interna a beta esterna a gamma*

![[src_kangourou_2004_student_finale__probS2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  % gamma: center C=(0,0), radius 2
  % beta: center B=(2,0), radius sqrt(2)~1.4142
  % Intersection: x=3/2, y=+/-sqrt(7)/2~1.3229
  % P=(1.5,1.3229), Q=(1.5,-1.3229)
  \draw (0,0) circle (2.0);
  \draw (2,0) circle (1.4142);
  \draw[dashed] (0,-2.2) -- (0,2.2);
  \draw[dashed] (-2.2,0) -- (3.6,0);
  \draw (2,0.15) -- (1.85,0.15) -- (1.85,0);
  \fill (0,0) circle (1.5pt) node[below left] {$C$};
  \fill (2,0) circle (1.5pt) node[below right] {$B$};
  \fill (1.5, 1.3229) circle (1.5pt) node[above right] {$P$};
  \fill (1.5, -1.3229) circle (1.5pt) node[below right] {$Q$};
  \draw (0,0) -- (1.5,1.3229);
  \draw (2,0) -- (1.5,1.3229);
  \node at (3.7, 0) {$\beta$};
\end{tikzpicture}
\end{document}
```

> Sono date nel piano una circonferenza $\beta$ il cui raggio misura $\sqrt{2}$ centimetri ed una circonferenza $\gamma$ il cui raggio misura $2$ centimetri e il cui centro $C$ appartiene a $\beta$. Calcolare l'area della regione interna a $\beta$ ed esterna a $\gamma$.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)


<span class="qlang-split" data-lang="en"></span>


*Area internal region with external beta range*

![[src_kangourou_2004_student_finale__probS2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  % gamma: center C=(0,0), radius 2
  % beta: center B=(2,0), radius sqrt(2)~1.4142
  % Intersection: x=3/2, y=+/-sqrt(7)/2~1.3229
  % P=(1.5,1.3229), Q=(1.5,-1.3229)
  \draw (0,0) circle (2.0);
  \draw (2,0) circle (1.4142);
  \draw[dashed] (0,-2.2) -- (0,2.2);
  \draw[dashed] (-2.2,0) -- (3.6,0);
  \draw (2,0.15) -- (1.85,0.15) -- (1.85,0);
  \fill (0,0) circle (1.5pt) node[below left] {$C$};
  \fill (2,0) circle (1.5pt) node[below right] {$B$};
  \fill (1.5, 1.3229) circle (1.5pt) node[above right] {$P$};
  \fill (1.5, -1.3229) circle (1.5pt) node[below right] {$Q$};
  \draw (0,0) -- (1.5,1.3229);
  \draw (2,0) -- (1.5,1.3229);
  \node at (3.7, 0) {$\beta$};
\end{tikzpicture}
\end{document}
```

> A circumference $\beta$ with a radius of $\sqrt{2}$ centimetres and a circumference $\gamma$ with a radius of $2$ centimetres and a centre $C$ belonging to $\beta$ are given in the plane. Calculate the area of the internal region at $\beta$ and the external region at $\gamma$.

**Answer:** 2
[[src_kangourou_2004_student_finale__QS2]]



<span class="atom-split" id="qs3" data-atom="qs3" data-title="Quesito S3" data-tags="topic_combinatoria,topic_geometria_piana,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Max tessere a croce sulla scacchiera 8x8*

![[src_kangourou_2004_student_finale__probS3.png]]

> Sistemiamo in una scacchiera quadrata $8 \times 8$ delle tessere a forma di croce simmetrica come quella in figura, formate dall'accostamento di 5 quadrati di dimensione identica alle celle della scacchiera, in modo che:
> - ciascuna di esse vada a coprire esattamente (sovrapponendovisi) 5 delle 64 caselle della scacchiera;
> - le tessere non si sovrappongano, ma possano toccarsi e toccare il bordo della scacchiera.
> 
> Quante tessere può ospitare al massimo la scacchiera? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 8
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)


<span class="qlang-split" data-lang="en"></span>


*Max cross-sectional tiles on the 8x8 chessboard *

![[src_kangourou_2004_student_finale__probS3.png]]

> We place in a square chessboard $8 \times 8$ symmetrical cross-shaped tiles such as the one in the figure, formed by the approximation of 5 squares of the same size to the chessboard cells, so that: - each of them covers exactly (overlapping) 5 of the 64 chessboard boxes; - the tiles do not overlap, but can touch and touch the edge of the chessboard.
> 
> How many cards can a chessboard hold? (see figure)

**Answer:** 8
[[src_kangourou_2004_student_finale__QS3]]



<span class="atom-split" id="qs4" data-atom="qs4" data-title="Quesito S4" data-tags="topic_algebra,topic_aritmetica,method_ricorsione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore di X stampato dall'algoritmo*

> Un calcolatore esegue le seguenti istruzioni: (1) inizializza $X$ a $3$ e $S$ a $0$, (2) aumenta il valore di $X$ di $2$, (3) aumenta il valore di $S$ del valore di $X$, (4) se $S$ ha almeno $5$ cifre vai all'istruzione (5) altrimenti vai all'istruzione (2) e ricomincia a partire da quella posizione, (5) stampa il valore di $X$ e finisci. Quale sarà il valore di $X$ che verrà stampato al passo (5)?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 10200
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)


<span class="qlang-split" data-lang="en"></span>


*Value of X printed by the algorithm*

> A calculator executes the following instructions: (1) initiate $X$ to $3$ and $S$ to $0$, (2) increase the value of $X$ to $2$, (3) increase the value of $S$ to $X$, (4) if $S$ has at least $5$ digits go to the instruction (5) otherwise go to the instruction (2) and start from that position, (5) print the value of $X$ and finish. What will be the value of $X$ to be printed in step (5)?

**Answer:** 10200
[[src_kangourou_2004_student_finale__QS4]]



<span class="atom-split" id="qs5" data-atom="qs5" data-title="Quesito S5" data-tags="topic_aritmetica,topic_funzionali,method_estremalita,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Sequenza piu lunga di quadrati con differenze prime*

> Supponi di sapere che (per $n = 1, 2, \ldots$) $a_n$ è il quadrato di un intero non nullo e la differenza $a_{n+1} - a_n$ è un numero primo (positivo) oppure il quadrato di un numero primo. Dimostra che tutte le possibili sequenze $\{a_n\}$ che soddisfano questi requisiti sono finite e determina la più lunga.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** lunghezza 7
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)


<span class="qlang-split" data-lang="en"></span>


*Longest sequence of squares with prime differences*

> Suppose you know that (for $n = 1, 2, \ldots$) $a_n$ is the square of a nonzero integer and the difference $a_{n+1} - a_n$ is a prime (positive) or the square of a prime. It shows that all possible sequences $\{a_n\}$ that meet these requirements are finite and determines the longest.

**Answer:** lunghezza 7
[[src_kangourou_2004_student_finale__QS5]]



<span class="atom-split" id="qs6" data-atom="qs6" data-title="Quesito S6" data-tags="topic_geometria_solida,topic_disuguaglianze,method_disuguaglianze,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma distanze di P dai sei spigoli del tetraedro*

> Considera un punto $P$ interno ad un tetraedro regolare di lato $1$. Mostra che la somma delle distanze di $P$ dai sei spigoli del tetraedro non è inferiore a $\dfrac{2\sqrt{2}}{3}$ e individua gli eventuali punti $P$ in corrispondenza ai quali tale somma vale esattamente $\dfrac{2\sqrt{2}}{3}$.

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** 3sqrt2/2 baricentro
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)


<span class="qlang-split" data-lang="en"></span>


*sum of distances of P from the six spokes of the tetrahedron*

> Consider a point $P$ within a regular side tetrahedron $1$. It shows that the sum of the distances of $P$ from the six vertebrae of the tetrahedron is not less than $\dfrac{2\sqrt{2}}{3}$ and identifies any $P$ points for which that sum is exactly $\dfrac{2\sqrt{2}}{3}$.

**Answer:** 3sqrt2/2 baricentro
[[src_kangourou_2004_student_finale__QS6]]
