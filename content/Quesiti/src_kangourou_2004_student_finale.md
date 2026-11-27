---
title: Kangourou 2004 Student finale nazionale
tipo: gara
competition: Kangourou 2004 Student finale nazionale
family: kangourou
year: '2004'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2004_student_finale"></div>



<span class="atom-split" id="qs1" data-atom="qs1" data-title="Quesito S1" data-tags="topic_algebra,topic_aritmetica,method_fattorizzazione,method_casework,skill_manipolazione_algebrica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Coppie intere con |x^2-3y^2+2xy|=1*

> Per quali coppie $(x, y)$ di numeri interi relativi è vero che $|x^2 - 3y^2 + 2xy| = 1$?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** (1,0),(-1,0)
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)


<div class="qlang-split" data-lang="en"></div>


*For which pairs of integers the equality holds*

> For which pairs $(x, y)$ of integers is it true that $|x^2 - 3y^2 + 2xy| = 1$?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** (1,0),(-1,0)



<span class="atom-split" id="qs2" data-atom="qs2" data-title="Quesito S2" data-tags="topic_geometria_piana,topic_trigonometria,method_trigonometria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

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

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** 2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)


<div class="qlang-split" data-lang="en"></div>


*The area of the region inside one circle and outside the other*

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

> In the plane a circle $\beta$ is given, whose radius measures $\sqrt{2}$ centimetres, and a circle $\gamma$, whose radius measures $2$ centimetres and whose centre $C$ lies on $\beta$. Calculate the area of the region inside $\beta$ and outside $\gamma$.

**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_trigonometria|Trigonometry]]
**Metodo:** [[method_trigonometria|Trigonometric techniques]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]
**Answer:** 2



<span class="atom-split" id="qs3" data-atom="qs3" data-title="Quesito S3" data-tags="topic_combinatoria,topic_geometria_piana,method_estremalita,method_conteggio,skill_casework_accurato,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Max tessere a croce sulla scacchiera 8x8*

![[src_kangourou_2004_student_finale__probS3.png]]

> Sistemiamo in una scacchiera quadrata $8 \times 8$ delle tessere a forma di croce simmetrica come quella in figura, formate dall'accostamento di 5 quadrati di dimensione identica alle celle della scacchiera, in modo che:
> - ciascuna di esse vada a coprire esattamente (sovrapponendovisi) 5 delle 64 caselle della scacchiera;
> - le tessere non si sovrappongano, ma possano toccarsi e toccare il bordo della scacchiera.
> 
> Quante tessere può ospitare al massimo la scacchiera? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 8
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)


<div class="qlang-split" data-lang="en"></div>


*The greatest number of cross tiles the chessboard can hold*

![[src_kangourou_2004_student_finale__probS3.png]]

> We place on a square chessboard $8 \times 8$ tiles in the shape of a symmetrical cross like the one in the figure, formed by placing side by side 5 squares of the same size as the cells of the chessboard, so that:
> - each of them covers exactly (by lying on top of them) 5 of the 64 squares of the chessboard;
> - the tiles do not overlap, but may touch one another and touch the edge of the chessboard.
>
> What is the greatest number of tiles the chessboard can hold? (see the figure)

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]
**Answer:** 8



<span class="atom-split" id="qs4" data-atom="qs4" data-title="Quesito S4" data-tags="topic_algebra,topic_aritmetica,method_ricorsione,skill_riconoscimento_pattern,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore di X stampato dall'algoritmo*

> Un calcolatore esegue le seguenti istruzioni: (1) inizializza $X$ a $3$ e $S$ a $0$, (2) aumenta il valore di $X$ di $2$, (3) aumenta il valore di $S$ del valore di $X$, (4) se $S$ ha almeno $5$ cifre vai all'istruzione (5) altrimenti vai all'istruzione (2) e ricomincia a partire da quella posizione, (5) stampa il valore di $X$ e finisci. Quale sarà il valore di $X$ che verrà stampato al passo (5)?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 10200
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)


<div class="qlang-split" data-lang="en"></div>


*The value of X that will be printed*

> A computer carries out the following instructions: (1) initialise $X$ to $3$ and $S$ to $0$, (2) increase the value of $X$ by $2$, (3) increase the value of $S$ by the value of $X$, (4) if $S$ has at least $5$ digits go to instruction (5), otherwise go to instruction (2) and start again from that point, (5) print the value of $X$ and stop. What will be the value of $X$ that is printed at step (5)?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_ricorsione|Recursion]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** 10200



<span class="atom-split" id="qs5" data-atom="qs5" data-title="Quesito S5" data-tags="topic_aritmetica,topic_funzionali,method_estremalita,method_fattorizzazione,method_casework,skill_astrazione,skill_manipolazione_algebrica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Sequenza piu lunga di quadrati con differenze prime*

> Supponi di sapere che (per $n = 1, 2, \ldots$) $a_n$ è il quadrato di un intero non nullo e la differenza $a_{n+1} - a_n$ è un numero primo (positivo) oppure il quadrato di un numero primo. Dimostra che tutte le possibili sequenze $\{a_n\}$ che soddisfano questi requisiti sono finite e determina la più lunga.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** lunghezza 7
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)


<div class="qlang-split" data-lang="en"></div>


*The longest sequence that satisfies the requirements*

> Suppose you know that (for $n = 1, 2, \ldots$) $a_n$ is the square of a non-zero integer and the difference $a_{n+1} - a_n$ is a (positive) prime or the square of a prime. Prove that all the possible sequences $\{a_n\}$ that satisfy these requirements are finite, and find the longest.

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_casework|Case analysis]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Answer:** lunghezza 7



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


<div class="qlang-split" data-lang="en"></div>


*The least sum of the distances from P to the six edges*

> Consider a point $P$ inside a regular tetrahedron of side $1$. Show that the sum of the distances from $P$ to the six edges of the tetrahedron is not less than $\dfrac{2\sqrt{2}}{3}$, and find any points $P$ at which that sum is exactly $\dfrac{2\sqrt{2}}{3}$.

**Topic:** [[topic_geometria_solida|Solid geometry]], [[topic_disuguaglianze|Inequalities]]
**Method:** [[method_disuguaglianze|Classical inequalities]], [[method_simmetria|Using symmetry]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Answer:** 3sqrt2/2 baricentro
