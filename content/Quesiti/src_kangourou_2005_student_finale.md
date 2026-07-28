---
title: Kangourou 2005 - Student (finale nazionale)
tipo: gara
competition: Kangourou 2005 - Student (finale nazionale)
family: kangourou
year: '2005'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2005_student_finale"></div>



<span class="atom-split" id="qs1" data-atom="qs1" data-title="Quesito S1" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Suddividere esagono regolare in 8 parti uguali*

![[src_kangourou_2005_student_finale__probS1.png]]

> In figura vedi un esagono regolare. Puoi suddividerlo in 8 parti di ugual forma e dimensioni? In caso di risposta negativa devi motivarla, in caso di risposta affermativa, illustra direttamente sulla figura la suddivisione che proponi, corredandola dei chiarimenti che ritieni opportuni. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** Si
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17jy_hcOypk4l2PIs-W5a2ozUpvF5XmFy/view)


<span class="qlang-split" data-lang="en"></span>


*To divide the regular exaggeration into 8 equal parts*

![[src_kangourou_2005_student_finale__probS1.png]]

> In the figure you see a regular hexagon. Can you divide it into eight equal-sized parts? In the case of a negative answer, you must give reasons for this, and in the case of an affirmative answer, explain directly on the figure the subdivision you propose, accompanied by any clarifications you deem appropriate. (see figure)

**Answer:** Si
[[src_kangourou_2005_student_finale__QS1]]



<span class="atom-split" id="qs2" data-atom="qs2" data-title="Quesito S2" data-tags="topic_algebra,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma coefficienti dello sviluppo di (2x-y+z)^8*

> Quanto vale la somma algebrica di tutti i coefficienti (ciascuno con il proprio segno) dello sviluppo di $(2x - y + z)^8$?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 256
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17jy_hcOypk4l2PIs-W5a2ozUpvF5XmFy/view)


<span class="qlang-split" data-lang="en"></span>


*Sum of development coefficients of (2x-y+z) ^8*

> What is the algebraic sum of all the coefficients (each with its own sign) of $(2x - y + z)^8$ development?

**Answer:** 256
[[src_kangourou_2005_student_finale__QS2]]



<span class="atom-split" id="qs3" data-atom="qs3" data-title="Quesito S3" data-tags="topic_geometria_piana,method_trigonometria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Angolo ottuso con incentro e circocentro simmetrici*

![[src_kangourou_2005_student_finale__probS3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
% Obtuse triangle ABC (angle C = 108 deg) inscribed in circumcircle, center O
% Incircle with center I, tangent to AB at T
% I and O are symmetric with respect to side AB
% R=2, A and B symmetric, C at top
\coordinate (O) at (0,0);
\coordinate (A) at (-1.902, 0.618);
\coordinate (B) at (1.902, 0.618);
\coordinate (C) at (0, 2);
\coordinate (T) at (0, 0.618);
\coordinate (I) at (0, 1.236);
% Circumcircle
\draw (O) circle [radius=2];
% Triangle
\draw (A)--(B)--(C)--cycle;
% Incircle (radius 0.618)
\draw (I) circle [radius=0.618];
% Dashed vertical axis (I to T to O)
\draw[dashed] (I)--(T);
\draw[dashed] (T)--(O);
% Labels
\node[above] at (C) {$C$};
\node[left] at (A) {$A$};
\node[right] at (B) {$B$};
\fill (O) circle [radius=0.04] node[below right] {$O$};
\fill (I) circle [radius=0.04] node[right] {$I$};
\fill (T) circle [radius=0.04] node[below right] {$T$};
\end{tikzpicture}
\end{document}
```

> I centri della circonferenza inscritta e di quella circoscritta a un triangolo ottusangolo sono simmetrici rispetto ad uno dei suoi lati. Quanto misura in gradi l'angolo ottuso?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 108 gradi
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17jy_hcOypk4l2PIs-W5a2ozUpvF5XmFy/view)


<span class="qlang-split" data-lang="en"></span>


*Cross angle with centre and circus centre symmetrical *

![[src_kangourou_2005_student_finale__probS3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
% Obtuse triangle ABC (angle C = 108 deg) inscribed in circumcircle, center O
% Incircle with center I, tangent to AB at T
% I and O are symmetric with respect to side AB
% R=2, A and B symmetric, C at top
\coordinate (O) at (0,0);
\coordinate (A) at (-1.902, 0.618);
\coordinate (B) at (1.902, 0.618);
\coordinate (C) at (0, 2);
\coordinate (T) at (0, 0.618);
\coordinate (I) at (0, 1.236);
% Circumcircle
\draw (O) circle [radius=2];
% Triangle
\draw (A)--(B)--(C)--cycle;
% Incircle (radius 0.618)
\draw (I) circle [radius=0.618];
% Dashed vertical axis (I to T to O)
\draw[dashed] (I)--(T);
\draw[dashed] (T)--(O);
% Labels
\node[above] at (C) {$C$};
\node[left] at (A) {$A$};
\node[right] at (B) {$B$};
\fill (O) circle [radius=0.04] node[below right] {$O$};
\fill (I) circle [radius=0.04] node[right] {$I$};
\fill (T) circle [radius=0.04] node[below right] {$T$};
\end{tikzpicture}
\end{document}
```

> The centers of the inscribed circumference and the circumference of the circumference of an octagonal triangle are symmetrical to one of its sides. What is the degree of the curved angle?

**Answer:** 108 gradi
[[src_kangourou_2005_student_finale__QS3]]



<span class="atom-split" id="qs4" data-atom="qs4" data-title="Quesito S4" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto dei fattoriali non quadrato ma lo e diviso 50!*

> Per ogni intero positivo $n$, si dice "fattoriale di $n$" — e si indica con il simbolo $n!$ — il prodotto di tutti gli interi da $1$ a $n$ incluso, ciascuno considerato una e una sola volta (dunque si ha $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$ e così via). Mostra che il prodotto $1! \times 2! \times \cdots \times 99! \times 100!$ dei fattoriali dei primi 100 interi positivi non è un quadrato perfetto, ma lo è il suo quoziente con $50!$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** dimostrazione
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17jy_hcOypk4l2PIs-W5a2ozUpvF5XmFy/view)


<span class="qlang-split" data-lang="en"></span>


* Product of factories not squared but divided by 50! *

> For each positive integer $n$, "factor of $n$"  is said and the symbol $n!$  indicates the product of all integers from $1$ to $n$ included, each considered once and only once (so you have $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$ and so on). It shows that the $1! \times 2! \times \cdots \times 99! \times 100!$ product of the factors of the first 100 positive integers is not a perfect square, but its quotient with $50!$ is.

**Answer:** dimostrazione
[[src_kangourou_2005_student_finale__QS4]]



<span class="atom-split" id="qs5" data-atom="qs5" data-title="Quesito S5" data-tags="topic_combinatoria,method_colorazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Croce greca su scacchiera 7x7 senza angoli*

![[src_kangourou_2005_student_finale__probS5.png]]

> Considera una scacchiera $7 \times 7$ a cui sono state tolte le 4 caselle d'angolo; chiama croce greca ogni configurazione di 5 sue caselle disposte a croce in modo che ogni casella abbia in comune almeno un lato con un'altra casella della croce (quindi ogni croce ha 4 bracci uguali ciascuno costituito da una casella). Dimostra che è possibile disporre 45 numeri interi (non necessariamente tutti diversi fra loro) sulle 45 caselle rimaste, uno per casella, in modo che la somma totale di questi interi sia negativa, ma la somma dei numeri corrispondenti alle caselle ricoperte da una qualsiasi croce greca sia positiva. (Suggerimento: individua un insieme convenientemente ridotto $S$ di caselle con la proprietà che ogni croce greca copra almeno una casella appartenente ad $S$.)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** dimostrazione
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17jy_hcOypk4l2PIs-W5a2ozUpvF5XmFy/view)


<span class="qlang-split" data-lang="en"></span>


*Greek cross on a 7x7 chessboard without corners*

![[src_kangourou_2005_student_finale__probS5.png]]

> Consider a chessboard $7 \times 7$ from which the 4 corner boxes have been removed; call each configuration of 5 its cross-arranged boxes Greek cross so that each box has at least one side in common with another box of the cross (so each cross has 4 equal arms each consisting of a box). It shows that it is possible to have 45 integers (not necessarily all different from each other) on the remaining 45 boxes, one per box, so that the total sum of these integers is negative, but the sum of the numbers corresponding to the boxes covered by any Greek cross is positive. (Suggest: identify a conveniently small $S$ set of boxes with the property that each Greek cross covers at least one box belonging to $S$.)

**Answer:** dimostrazione
[[src_kangourou_2005_student_finale__QS5]]



<span class="atom-split" id="qs6" data-atom="qs6" data-title="Quesito S6" data-tags="topic_geometria_analitica,topic_geometria_piana,method_coordinate,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Luogo dei punti medi tra due circonferenze esterne*

> Siano $\alpha$ e $\beta$ due circonferenze complanari, ognuna esterna al cerchio individuato dall'altra. Descrivi il luogo dei punti medi dei segmenti $[A, B]$ al variare del punto $A$ in $\alpha$ e del punto $B$ in $\beta$.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Geometria]]
**Risposta:** corona circolare
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17jy_hcOypk4l2PIs-W5a2ozUpvF5XmFy/view)


<span class="qlang-split" data-lang="en"></span>


*Location of the midpoints between two outer circumferences*

> There shall be $\alpha$ and $\beta$ two planar circumferences, each external to the circle identified by the other. Describe the location of the mean points of the $[A, B]$ segments as the $A$ point in $\alpha$ and the $B$ point in $\beta$ vary.

**Answer:** corona circolare
[[src_kangourou_2005_student_finale__QS6]]
