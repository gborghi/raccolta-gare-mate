---
title: XI Gara Nazionale Classi Prime 2026
tipo: gara
competition: XI Gara Nazionale Classi Prime 2026
family: archimede
year: '2026'
level: Classi Prime
---
<div class="atom-reader" data-gara="Quesiti/src_garaprime_2026"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,method_doppio_conteggio,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto di tutti i divisori di 1024^3*

> La maestra Scaldasedia, per non fare lezione, assegna da fare in classe ai suoi alunni un calcolo che ritiene
> abbastanza lungo da riempire tutta l’ora: trovare il prodotto di tutti i divisori di 10243, compresi 1 e 10243.
> Con suo grande stupore, dopo pochi minuti, il suo alunno più bravo le porta la lavagnetta con il risultato
> corretto scritto sopra. Qual è il risultato?
>
> - **(A)** 291
> - **(B)** 2465
> - **(C)** 2990
> - **(D)** 2900
> - **(E)** 2450

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Products of all 1024^3 dividers *

> Teacher Scaldasedia, in order not to give a lesson, assigns her students to do a calculation in class that she thinks is long enough to fill in all the time: find the product of all the divisors of 10243, including 1 and 10243. To her great surprise, after a few minutes, her best student brings her the drawer with the correct result written on it. What is the result?
>
> - **(A)** 291
> - **(B)** 2465
> - **(C)** 2990
> - **(D)** 2900
> - **(E)** 2450

**Answer:** B
[[src_garaprime_2026__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma di cinque consecutivi con prodotto 6720*

> Il prodotto di cinque numeri interi positivi consecutivi è 6720. Quanto vale la loro somma?
>
> - **(A)** 20
> - **(B)** 25
> - **(C)** 30
> - **(D)** 35
> - **(E)** 40

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Summary of five consecutive products with product 6720*

> The product of five consecutive positive integers is 6720. How much is their sum?
>
> - **(A)** 20
> - **(B)** 25
> - **(C)** 30
> - **(D)** 35
> - **(E)** 40

**Answer:** C
[[src_garaprime_2026__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Lati del poligono con angolo interno 11 volte l'esterno*

> In un poligono regolare l’angolo interno è undici volte quello esterno. Quanti lati ha il poligono?
>
> - **(A)** 11
> - **(B)** 12
> - **(C)** 22
> - **(D)** 24
> - **(E)** Non esiste alcun poligono con questa proprietà

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Sides of the polygon with an inner angle 11 times the outer angle*

> In a regular polygon the inner angle is eleven times the outer. How many sides does the polygon have?
>
> - **(A)** 11
> - **(B)** 12
> - **(C)** 22
> - **(D)** 24
> - **(E)** There is no polygon with this property.

**Answer:** D
[[src_garaprime_2026__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,method_inclusione_esclusione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area dell'esagono dall'intersezione di due quadrati*

![[src_garaprime_2026__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (2,2);
  \coordinate (D) at (0,2);
  \coordinate (E) at (1,1);
  \coordinate (F) at (3,1);
  \coordinate (G) at (3,3);
  \coordinate (H) at (1,3);
  \draw (A)--(B)--(C)--(D)--cycle;
  \draw (E)--(F)--(G)--(H)--cycle;
  \fill[black!12] (1,1)--(2,1)--(2,2)--(1,2)--cycle;
  \foreach \p in {A,B,C,D,E,F,G,H} \fill (\p) circle (1.6pt);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below left] at (E) {$E$};
  \node[below right] at (F) {$F$};
  \node[above right] at (G) {$G$};
  \node[above left] at (H) {$H$};
\end{tikzpicture}
\end{document}
```

> Nel disegno, l’intersezione dei quadrati ABCD e EFGH, entrambi di area 12,
> è un quadrato di area 3. Quanto vale l’area dell’esagono ABFGHD?
>
> - **(A)** 24
> - **(B)** 36
> - **(C)** 28
> - **(D)** 22
> - **(E)** 26

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the hexagon from the intersection of two squares*

![[src_garaprime_2026__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (2,2);
  \coordinate (D) at (0,2);
  \coordinate (E) at (1,1);
  \coordinate (F) at (3,1);
  \coordinate (G) at (3,3);
  \coordinate (H) at (1,3);
  \draw (A)--(B)--(C)--(D)--cycle;
  \draw (E)--(F)--(G)--(H)--cycle;
  \fill[black!12] (1,1)--(2,1)--(2,2)--(1,2)--cycle;
  \foreach \p in {A,B,C,D,E,F,G,H} \fill (\p) circle (1.6pt);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below left] at (E) {$E$};
  \node[below right] at (F) {$F$};
  \node[above right] at (G) {$G$};
  \node[above left] at (H) {$H$};
\end{tikzpicture}
\end{document}
```

> In the drawing, the intersection of the squares ABCD and EFGH, both of area 12, is a square of area 3. What is the value of the ABFGHD axis?
>
> - **(A)** 24
> - **(B)** 36
> - **(C)** 28
> - **(D)** 22
> - **(E)** 26

**Answer:** A
[[src_garaprime_2026__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,topic_combinatoria,method_conteggio,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di suddividere un rettangolo in 4 triangoli di area 1*

![[src_garaprime_2026__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (4,0);
  \coordinate (D) at (4,2.6);
  \coordinate (E) at (2,2.6);
  \coordinate (F) at (0,2.6);
  \draw (A)--(C)--(D)--(F)--cycle;
  \draw (A)--(E)--(C);
  \draw (B)--(E);
  \foreach \p in {A,B,C,D,E,F} \fill (\p) circle (1.6pt);
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[above left] at (F) {$F$};
\end{tikzpicture}
\end{document}
```

> Dato il rettangolo ACDF, di area 4, siano B ed E rispettivamente i punti
> medi dei lati AC e DF. Si vuole suddividere il rettangolo in 4 triangoli di
> area 1, ciascuno dei quali abbia come vertici 3 dei punti A, B, C, D, E, F
> (come ad esempio i triangoli AEF, ABE, BCE, CDE mostrati nella figura
> qui accanto). In quanti modi si può fare?
>
> - **(A)** 5
> - **(B)** 6
> - **(C)** 4
> - **(D)** 8
> - **(E)** 2

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Mode of dividing a rectangle into 4 triangles of area 1*

![[src_garaprime_2026__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (4,0);
  \coordinate (D) at (4,2.6);
  \coordinate (E) at (2,2.6);
  \coordinate (F) at (0,2.6);
  \draw (A)--(C)--(D)--(F)--cycle;
  \draw (A)--(E)--(C);
  \draw (B)--(E);
  \foreach \p in {A,B,C,D,E,F} \fill (\p) circle (1.6pt);
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[above left] at (F) {$F$};
\end{tikzpicture}
\end{document}
```

> Given the ACDF rectangle, area 4, be B and E respectively the midpoints of the AC and DF sides. The rectangle is to be divided into 4 triangles of area 1, each of which has 3 vertices of points A, B, C, D, E, F (such as the AEF, ABE, ECB, CDE triangles shown in the figure below). How many ways can this be done?
>
> - **(A)** 5
> - **(B)** 6
> - **(C)** 4
> - **(D)** 8
> - **(E)** 2

**Answer:** B
[[src_garaprime_2026__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo M con N divisibile per M ma non M^2*

> Sia N il prodotto di tutti gli interi positivi, minori o uguali a 100, che hanno esattamente 3 divisori. Qual
> è il più piccolo valore di M tale che N risulti divisibile per M, ma non per M2 ?
>
> - **(A)** M = 2
> - **(B)** M = 8
> - **(C)** M = 4
> - **(D)** M = 10
> - **(E)** M = 6

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum M with N divisible by M but not M^2*

> Whether N is the product of all positive integers less than or equal to 100, which have exactly 3 divisors. What is the smallest value of M such that N is divisible by M, but not by M2?
>
> - **(A)** M = 2
> - **(B)** M = 8
> - **(C)** M = 4
> - **(D)** M = 10
> - **(E)** M = 6

**Answer:** C
[[src_garaprime_2026__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_algebra,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore di x^(x^2x+1) dato x^x=2*

> Sapendo che xx = 2, allora x(x2x+1) è uguale a:
>
> - **(A)** 8
> - **(B)** 12
> - **(C)** 16
> - **(D)** 20
> - **(E)** 32

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Value of x^(x^2x+1) given that x^x=2*

> If we know that xx is 2, then x(x2x+1) is equal to:
>
> - **(A)** 8
> - **(B)** 12
> - **(C)** 16
> - **(D)** 20
> - **(E)** 32

**Answer:** C
[[src_garaprime_2026__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero in posizione 2026 togliendo i quadrati perfetti*

> Cecilia ha scritto alla lavagna l’elenco ordinato di tutti i numeri interi da 1 a 2100, estremi inclusi, che non
> sono quadrati perfetti (cioè, quadrati di numeri interi, come 1, 4, 9, ecc). I primi numeri scritti, pertanto,
> sono 2, 3, 5, 6, 7, 8, 10, 11, 12, . . . Quale numero si trova nella posizione 2026?
>
> - **(A)** 2068
> - **(B)** 2070
> - **(C)** 2071
> - **(D)** 2072
> - **(E)** 2075

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Number at position 2026 by subtracting the perfect squares*

> Cecilia wrote on the board the ordered list of all integers from 1 to 2100, extremes included, which are not perfect squares (i.e., squares of integers, such as 1, 4, 9, etc.). The first written numbers, therefore, are 2, 3, 5, 6, 7, 8, 10, 11, 12. . . Which number is in position 2026?
>
> - **(A)** 2068
> - **(B)** 2070
> - **(C)** 2071
> - **(D)** 2072
> - **(E)** 2075

**Answer:** C
[[src_garaprime_2026__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area del triangolo AEH suddiviso da punti sui lati*

> L’area di un triangolo ABC misura 360 cm2. Siano D, E due punti interni al lato AB tali che AD = DE =
> EB e siano F, G, H tre punti interni ad AC tali che AF = FG = GH = HC. Qual è l’area del triangolo
> AEH in cm2 ?
>
> - **(A)** 120
> - **(B)** 180
> - **(C)** 60
> - **(D)** 270
> - **(E)** 240

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*area of the AEH triangle divided by points on the sides*

> The area of an ABC triangle is 360 cm2. Two internal points on the AB side are D, E such that AD = DE = EB and three internal points in AC such that AF = FG = GH = HC are F, G, H. What is the area of the AEH triangle in cm2 ?
>
> - **(A)** 120
> - **(B)** 180
> - **(C)** 60
> - **(D)** 270
> - **(E)** 240

**Answer:** B
[[src_garaprime_2026__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_combinatoria,topic_aritmetica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Naturali tra 10 e 2026 con somma cifre 3*

> Quanti sono i numeri naturali maggiori di 10 e minori di 2026 la cui somma delle cifre è 3?
>
> - **(A)** 13
> - **(B)** 14
> - **(C)** 15
> - **(D)** 16
> - **(E)** 17

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Natural between 10 and 2026 with a sum of 3 digits *

> What are the natural numbers greater than 10 and less than 2026 whose sum of the digits is 3?
>
> - **(A)** 13
> - **(B)** 14
> - **(C)** 15
> - **(D)** 16
> - **(E)** 17

**Answer:** E
[[src_garaprime_2026__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_aritmetica,method_estremalita,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo del piu grande di quattro interi con media 2026*

> Se la media aritmetica di quattro numeri interi positivi distinti è 2026, qual è il valore massimo possibile del
> più grande di questi numeri?
>
> - **(A)** 8078
> - **(B)** 8104
> - **(C)** 8098
> - **(D)** 7592
> - **(E)** 8101

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


Maximum of the largest of four integers with mean 2026 *

> If the arithmetic mean of four distinct positive integers is 2026, what is the maximum possible value of the largest of these numbers?
>
> - **(A)** 8078
> - **(B)** 8104
> - **(C)** 8098
> - **(D)** 7592
> - **(E)** 8101

**Answer:** C
[[src_garaprime_2026__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Rapporto tra area triangolo equilatero ed esagono*

> Un triangolo equilatero ha il lato che misura il doppio di quello di un esagono regolare. Qual è il rapporto
> tra l’area del triangolo e quella dell’esagono?
>
> - **(A)** 2
> - **(B)** 1
> - **(C)** 3/2
> - **(D)** 1/2
> - **(E)** 2/3

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Ratio between area of equilateral triangle and hexagon*

> An equilateral triangle has a side that measures twice that of a regular hexagon. What is the relationship between the area of the triangle and that of the hexagon?
>
> - **(A)** 2
> - **(B)** 1
> - **(C)** 3/2
> - **(D)** 1/2
> - **(E)** 2/3

**Answer:** E
[[src_garaprime_2026__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_aritmetica,method_invarianti,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo S(n+1) dato S(n)=2026*

> Indichiamo con S(n) la somma delle cifre di un intero positivo n (ad esempio S(574) = 16). Se S(n) = 2026,
> quale può essere il più piccolo valore di S(n + 1)?
>
> - **(A)** 1
> - **(B)** 2
> - **(C)** 3
> - **(D)** 4
> - **(E)** 2027

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum S(n+1) given S(n)=2026*

> Let's show with S(n) the sum of the digits of a positive integer n (e.g. S(574) = 16). If S(n) = 2026, what can be the smallest value of S(n + 1)?
>
> - **(A)** 1
> - **(B)** 2
> - **(C)** 3
> - **(D)** 4
> - **(E)** 2027

**Answer:** B
[[src_garaprime_2026__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Problemi scritti da Marco quando Anna ha finito*

> Marco scrive problemi a ritmo costante di 8 problemi all’ora, e Anna risolve problemi a ritmo costante di 12
> problemi all’ora. Marco comincia a scrivere 3 ore prima che Anna inizi a risolverli. Quanti problemi avrà
> scritto Marco quando Anna avrà finito di risolvere tutti i problemi che lui ha scritto fino a quel momento?
>
> - **(A)** 36
> - **(B)** 48
> - **(C)** 72
> - **(D)** 80
> - **(E)** 84

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


Problems written by Mark when Anna finished

> Mark writes problems at a constant rate of 8 problems per hour, and Anna solves problems at a constant rate of 12 problems per hour. Mark starts writing three hours before Anna starts solving them. How many problems will Mark have written when Anna has finished solving all the problems he has written up to that point?
>
> - **(A)** 36
> - **(B)** 48
> - **(C)** 72
> - **(D)** 80
> - **(E)** 84

**Answer:** C
[[src_garaprime_2026__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_insiemi_funzioni,method_inclusione_esclusione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Anatre con testa e piume rosse (insiemi)*

> Un lago è popolato da 800 anatre con piume rosse o blu e teste rosse o blu. Se 430 anatre hanno piume
> rosse, 290 anatre hanno teste blu e 160 anatre hanno sia testa blu sia piume blu, quante anatre hanno sia
> testa rossa sia piume rosse?
>
> - **(A)** 370
> - **(B)** 350
> - **(C)** 240
> - **(D)** 300
> - **(E)** Le informazioni sono insufficienti

**Topic:** [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Anater with red head and feathers (together) *

> A lake is populated by 800 ducks with red or blue feathers and red or blue heads. If 430 ducks have red feathers, 290 ducks have blue heads and 160 ducks have both blue heads and blue feathers, how many ducks have both red heads and red feathers?
>
> - **(A)** 370
> - **(B)** 350
> - **(C)** 240
> - **(D)** 300
> - **(E)** The information is insufficient

**Answer:** D
[[src_garaprime_2026__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_geometria_solida,topic_algebra,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Ipotenusa dai volumi di rotazione attorno ai cateti*

> Se un triangolo rettangolo viene ruotato intorno ad un suo cateto, compiendo una rotazione completa, si
> ottiene un volume di 1500π cm3. Se invece viene ruotato intorno all’altro cateto si ottiene un volume di
> 2000π cm3. Quanto è lunga l’ipotenusa?
>
> - **(A)** 15 cm
> - **(B)** 25 cm
> - **(C)** 20 cm
> - **(D)** 16 cm
> - **(E)** 36 cm

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Hypotenuse from the rotation volumes around the chains*

> If a rectangular triangle is rotated around a catheter, completing one complete rotation, a volume of 1500π cm3 is obtained. If rotated around the other catheter, a volume of 2000π cm3 is obtained. How long is the hypotenuse?
>
> - **(A)** 15 cm
> - **(B)** 25 cm
> - **(C)** 20 cm
> - **(D)** 16 cm
> - **(E)** 36 cm

**Answer:** B
[[src_garaprime_2026__Q16]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma cifre di 10^2026 - 2026*

> Nicolò si diverte a calcolare la somma delle cifre del numero 102026 −2026. Che numero ottiene?
>
> - **(A)** 18225
> - **(B)** 18205
> - **(C)** 18234
> - **(D)** 18243
> - **(E)** 18218

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Summary of figures from 10^2026 - 2026*

> Nicolò enjoys calculating the sum of the digits of the number 102026 −2026. What's your number?
>
> - **(A)** 18225
> - **(B)** 18205
> - **(C)** 18234
> - **(D)** 18243
> - **(E)** 18218

**Answer:** A
[[src_garaprime_2026__Q17]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri di 4 cifre con cifre 2,0,6*

> Quanti numeri di 4 cifre possono essere scritti usando le cifre 2, 0 e 6 (le cifre possono ripetersi)? Ad esempio,
> 2026 è uno dei numeri che può essere scritto (mentre 0006 no perch´e inizia con 0).
>
> - **(A)** 16
> - **(B)** 81
> - **(C)** 36
> - **(D)** 54
> - **(E)** 2025 Test n. 1 Unione Matematica Italiana Progetto Olimpiadi della Matematica XI Gara Nazionale per le Classi Prime Lunedì 26 gennaio 2026 Nome: Cognome: Sesso: M F Data di nascita: Città: Scuola: La gara dura 2 ore e 30 minuti e consiste di 18 problemi. Una sola delle risposte è corretta. La lettera corrispondente alla risposta corretta dovrà essere riportata, per ogni quesito, in questa pagina nella finestrella più in basso. Ogni risposta giusta vale 5 punti, ogni risposta errata vale 0 punti e ogni problema lasciato senza risposta vale 1 punto. Non sono ammesse cancellature sulla griglia. Non è ammesso l’uso di dispositivi elettronici, compasso e goniometro. I problemi non sono in ordine di difficoltà, ma permutati in modo casuale. Se ti è stato dato un foglio a lettura ottica, dovrai inserire le risposte solo lì e alla fine consegnare solo quel foglio. In caso contrario, dovrai inserire le risposte nella griglia qui sotto e consegnare questo foglio. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 Test n. 2

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Four-digit numbers with digits 2,0,6*

> How many 4-digit numbers can be written using the digits 2, 0 and 6 (digits can be repeated)? For example, 2026 is one of the numbers that can be written (while 0006 is not because it starts with 0).
>
> - **(A)** 16
> - **(B)** 81
> - **(C)** 36
> - **(D)** 54
> - **(E)** 2025 Test n. 1 Italian Mathematical Union Mathematical Olympiad Project XI National Competition for the First Classes Monday 26 January 2026 Name: Cognome: Gender: M F Date of birth: City: School: The competition lasts 2 hours and 30 minutes and consists of 18 problems. Only one of the answers is correct. The letter corresponding to the correct answer shall be shown, for each question, on this page in the window at the bottom. Every right answer is worth 5 points, every wrong answer is worth 0 points, and every problem left unanswered is worth 1 point. Cancellations on the grid are not allowed. The use of electronic devices, compass and goniometer shall not be permitted. The problems are not in order of difficulty, but alternate randomly. If you have been given an optical reading sheet, you will need to enter the answers only there and finally deliver only that sheet. Otherwise, you'll need to enter your answers in the grid below and deliver this sheet. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 Test number 2

**Answer:** D
[[src_garaprime_2026__Q18]]
