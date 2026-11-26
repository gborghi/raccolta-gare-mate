---
title: Archimede Gara di Febbraio 2015 - 2 livello
tipo: gara
competition: Archimede Gara di Febbraio 2015 - 2 livello
family: archimede
year: '2015'
level: 2 livello
---
<div class="atom-reader" data-gara="Quesiti/src_archimede_2015_febb_2livello"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*x e x+312 palindromi, x di 4 cifre, somma delle cifre di x*

> Un numero naturale si dice palindromo se è uguale al numero che si ottiene leggendo le cifre della
> sua scrittura in base dieci da destra verso sinistra (ad esempio, 68386 e 44 sono palindromi, 220
> non lo è). Sappiamo che il numero naturale x e il numero x + 312 sono entrambi palindromi; x
> ha quattro cifre, mentre x + 312 ne ha cinque. Quanto vale la somma delle cifre di x?
>
> - **(A)** 30
> - **(B)** 31
> - **(C)** 32
> - **(D)** 33
> - **(E)** 34

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** E
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*x and x+312 are palindromes, x has four digits, sum of the digits of x*

> A natural number is called a palindrome if it is equal to the number obtained by reading the digits of its base-ten writing from right to left (for example, 68386 and 44 are palindromes, 220 is not). We know that the natural number x and the number x + 312 are both palindromes; x has four digits, while x + 312 has five. What is the sum of the digits of x?
>
> - **(A)** 30
> - **(B)** 31
> - **(C)** 32
> - **(D)** 33
> - **(E)** 34


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Method:** [[method_casework|Case analysis]]
**Skill:** [[skill_casework_accurato|Careful casework]]
[[Quesiti/src_archimede_2015_febb_2livello#q01|src_archimede_2015_febb_2livello__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_funzionali,topic_algebra,method_telescoping,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma di 100 termini con media di consecutivi pari all'indice*

> Una sequenza a1, . . . , a100 di numeri reali è tale che la media aritmetica fra due termini consecutivi sia sempre uguale all’indice del secondo termine (ad esempio, si ha a4+a5
> 2
> = 5); quanto vale
> la somma dei 100 numeri della sequenza?
> (A) 2550 (B) 5050
> (C) 5100
> (D) 10100
> (E) Non si può determinare: dipende da a1.

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_algebra|Algebra]]
**Metodo:** [[method_telescoping|Somme telescopiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Sum of 100 terms with the mean of consecutive terms equal to the index*

> A sequence $a_1, \ldots, a_{100}$ of real numbers is such that the arithmetic mean between two consecutive terms is always equal to the index of the second term (for example, $\frac{a_4+a_5}{2} = 5$); what is the value of the sum of the 100 numbers in the sequence?
> (A) 2550 (B) 5050
> (C) 5100
> (D) 10100
> (E) It cannot be determined: it depends on $a_1$.


**Topic:** [[topic_funzionali|Functional equations / sequences]], [[topic_algebra|Algebra]]
**Method:** [[method_telescoping|Telescoping sums]]
**Skill:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
[[Quesiti/src_archimede_2015_febb_2livello#q02|src_archimede_2015_febb_2livello__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,method_trigonometria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza PC con P intersezione diagonali del pentagono*

![[src_archimede_2015_febb_2livello__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (1.309,0.9511);
  \coordinate (D) at (0.5,1.5388);
  \coordinate (E) at (-0.309,0.9511);
  \coordinate (P) at (0.5,0.3633);
  \draw (A)--(B)--(C)--(D)--(E)--cycle;
  \draw (A)--(C);
  \draw (B)--(E);
  \foreach \pt in {A,B,C,D,E,P}{\fill (\pt) circle (0.7pt);}
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[below] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> Sia ABCDE un pentagono regolare di lato 1 e sia P l’intersezione tra le diagonali AC e BE.
> Quanto misura il segmento PC?
>
> - **(A)** 1
> - **(B)** √ 5 2
> - **(C)** √ 5 −1
> - **(D)** 4( √ 5 −2)
> - **(E)** Nessuna delle precedenti.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Length of PC in a regular pentagon of side 1*

![[src_archimede_2015_febb_2livello__prob3.png]]

> Let ABCDE be a regular pentagon of side 1, and let P be the intersection of the diagonals AC and BE. What is the length of the segment PC?
>
> - **(A)** 1
> - **(B)** √ 5 2
> - **(C)** √ 5 −1
> - **(D)** 4( √ 5 −2)
> - **(E)** None of the above.

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_trigonometria|Trigonometric techniques]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]

[[Quesiti/src_archimede_2015_febb_2livello#q03|src_archimede_2015_febb_2livello__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,topic_logica,method_colorazione,method_congruenze,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Formica sul tastierino, quante affermazioni su n sono vere*

![[src_archimede_2015_febb_2livello__prob4.png]]

> Una formica cammina sul tastierino numerico di un cellulare, composto da
> 10 pulsanti disposti come in figura. La formica si sposta sempre dal tasto su
> cui si trova ad un tasto adiacente in orizzontale o in verticale; parte dal tasto
> 1 e passeggia per un po’ sul tastierino, fermandosi infine sul tasto 0, che non
> aveva mai visitato prima. Consideriamo il numero n ottenuto concatenando
> le cifre dei tasti su cui è passata la formica, nell’ordine in cui li ha visitati
> (ad esempio, il percorso in figura corrisponderebbe al numero 12580). Dire
> quante delle quattro affermazioni seguenti sono certamente vere:
> - “n non è multiplo di 3”;
> - “n non è multiplo di 8”;
> - “n è composto da un numero dispari di cifre”;
> - “n non è un quadrato”.
>
> - **(A)** 0
> - **(B)** 1
> - **(C)** 2
> - **(D)** 3
> - **(E)** 4

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_colorazione|Colorazione / parita]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Ant on a keypad, how many statements about n are true*

> An ant walks on the numeric keypad of a mobile phone, consisting of
> 10 buttons arranged as in the figure. The ant always moves from the button
> it is on to an adjacent button horizontally or vertically; it starts from button
> 1 and walks around the keypad for a while, finally stopping on button 0, which
> it had never visited before. Consider the number n obtained by concatenating
> the digits of the buttons the ant passed through, in the order in which it visited
> them (for example, the path in the figure would correspond to the number 12580).
> Say how many of the following four statements are certainly true:
> - “n is not a multiple of 3”;
> - “n is not a multiple of 8”;
> - “n consists of an odd number of digits”;
> - “n is not a square”.
>
> - **(A)** 0
> - **(B)** 1
> - **(C)** 2
> - **(D)** 3
> - **(E)** 4


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_logica|Logic, games, strategies]]
**Method:** [[method_colorazione|Colouring / parity]], [[method_congruenze|Modular arithmetic / congruences]]
**Skill:** [[skill_casework_accurato|Careful casework]]
[[Quesiti/src_archimede_2015_febb_2livello#q04|src_archimede_2015_febb_2livello__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_algebra,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Polinomi monici con MCD e mcm dati, scelte di p(x)*

> Due polinomi monici (cioè con coefficiente di grado massimo uguale a 1) a coefficienti interi p(x)
> e q(x) sono tali che il loro massimo comun divisore sia (x −1)(x −2), il loro minimo comune
> multiplo sia (x −1)2(x −2)3(x −3)(x + 1) e il grado di p(x) sia minore o uguale al grado di q(x).
> In quanti modi può essere scelto p(x)?
>
> - **(A)** 4
> - **(B)** 5
> - **(C)** 8
> - **(D)** 10
> - **(E)** 12

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Monic polynomials with given GCD and LCM, choices of p(x)*

> Two monic polynomials (that is, with leading coefficient equal to 1) with integer coefficients p(x)
> and q(x) are such that their greatest common divisor is (x −1)(x −2), their least common
> multiple is (x −1)2(x −2)3(x −3)(x + 1) and the degree of p(x) is less than or equal to the degree of q(x).
> In how many ways can p(x) be chosen?
>
> - **(A)** 4
> - **(B)** 5
> - **(C)** 8
> - **(D)** 10
> - **(E)** 12


**Topic:** [[topic_algebra|Algebra]]
**Method:** [[method_conteggio|Combinatorial counting]]
**Skill:** [[skill_conteggio_sistematico|Systematic counting]]
[[Quesiti/src_archimede_2015_febb_2livello#q05|src_archimede_2015_febb_2livello__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Rapporto aree triangolo dei simmetrici ed esagono*

> Dato un triangolo ABC, sia A′ il simmetrico di A rispetto a C, A′′ il simmetrico di A rispetto a
> B, B′ il simmetrico di B rispetto a A, B′′ il simmetrico di B rispetto a C, C′ il simmetrico di C
> rispetto a B e C′′ il simmetrico di C rispetto a A. Determinare il rapporto tra l’area di A′B′C′
> e quella dell’esagono A′A′′C′C′′B′B′′.
>
> - **(A)** 6 13
> - **(B)** 7 13
> - **(C)** 3 7
> - **(D)** 1 2
> - **(E)** Dipende dal triangolo iniziale.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Ratio of the area of triangle A′B′C′ to that of the hexagon*

> Given a triangle ABC, let A′ be the point symmetric to A with respect to C, A′′ the point symmetric to A with respect to B, B′ the point symmetric to B with respect to A, B′′ the point symmetric to B with respect to C, C′ the point symmetric to C with respect to B, and C′′ the point symmetric to C with respect to A. Find the ratio of the area of A′B′C′ to that of the hexagon A′A′′C′C′′B′B′′.
>
> - **(A)** 6 13
> - **(B)** 7 13
> - **(C)** 3 7
> - **(D)** 1 2
> - **(E)** it depends on the initial triangle.


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Method:** [[method_coordinate|Coordinate method]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]
[[Quesiti/src_archimede_2015_febb_2livello#q06|src_archimede_2015_febb_2livello__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_algebra,topic_aritmetica,method_conteggio,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quaterne con a^2-c^2=b^2-d^2=ab+bc+cd+da=1024*

> Per quante quaterne (a, b, c, d) di numeri interi non negativi le tre espressioni a2 −c2, b2 −d2 e
> ab + bc + cd + da sono tutte uguali a 1024?
>
> - **(A)** 0
> - **(B)** 1
> - **(C)** 4
> - **(D)** 9
> - **(E)** 11

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Quadruples with a^2-c^2=b^2-d^2=ab+bc+cd+da=1024*

> For how many quadruples (a, b, c, d) of non-negative integers are the three expressions a2 −c2, b2 −d2 and ab + bc + cd + da all equal to 1024?
>
> - **(A)** 0
> - **(B)** 1
> - **(C)** 4
> - **(D)** 9
> - **(E)** 11


**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Method:** [[method_conteggio|Combinatorial counting]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Skill:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
[[Quesiti/src_archimede_2015_febb_2livello#q07|src_archimede_2015_febb_2livello__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area di ABC dato quadrato sull'ipotenusa e aree di ABE, ACD*

![[src_archimede_2015_febb_2livello__prob8.png]]

> Dato il triangolo ABC rettangolo in A costruiamo sull’ipotenusa il quadrato BCDE (con D, E
> dalla parte opposta di A rispetto a BC). Sapendo che le aree dei triangoli ABE e ACD valgono
> rispettivamente 6 m2 e 27 m2, quanto vale l’area del triangolo ABC?
>
> - **(A)** 3 √ 2 m2
> - **(B)** 6 m2
> - **(C)** 12 m2
> - **(D)** 9 √ 2 m2
> - **(E)** 18 m2

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Area of ABC given the square on the hypotenuse and the areas of ABE, ACD*

> Given the right triangle ABC with the right angle at A, we construct the square BCDE on the hypotenuse (with D, E on the side opposite A with respect to BC). Knowing that the areas of triangles ABE and ACD are respectively 6 m2 and 27 m2, what is the area of triangle ABC?
>
> - **(A)** 3 √ 2 m2
> - **(B)** 6 m2
> - **(C)** 12 m2
> - **(D)** 9 √ 2 m2
> - **(E)** 18 m2


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Method:** [[method_coordinate|Coordinate method]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]
[[Quesiti/src_archimede_2015_febb_2livello#q08|src_archimede_2015_febb_2livello__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_probabilita,method_invarianti,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Probabilita pedina in un angolo dopo 12 passi diagonali*

![[src_archimede_2015_febb_2livello__prob9.png]]

> Una pedina si trova inizialmente sulla casella centrale di una scacchiera 5 × 5. Un passo della
> pedina consiste nello spostarsi in una casella scelta a caso fra quelle che hanno esattamente un
> vertice in comune con la casella su cui si trova. Qual è la probabilità che dopo 12 passi la pedina
> si trovi in uno qualunque degli angoli della scacchiera?
>
> - **(A)** 1 3
> - **(B)** 4 25
> - **(C)** 1 6
> - **(D)** 4 13
> - **(E)** 1 4

**Topic:** [[topic_probabilita|Probabilita e statistica]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Probability of a pawn being in a corner after 12 diagonal steps*

> A pawn starts on the central square of a 5 × 5 chessboard. A move of the pawn consists of moving to a randomly chosen square among those that have exactly one vertex in common with the square it is on. What is the probability that after 12 moves the pawn is in any of the corners of the chessboard?
>
> - **(A)** 1 3
> - **(B)** 4 25
> - **(C)** 1 6
> - **(D)** 4 13
> - **(E)** 1 4


**Topic:** [[topic_probabilita|Probability and statistics]]
**Method:** [[method_invarianti|Invariants / monovariants]]
**Skill:** [[skill_riconoscimento_pattern|Pattern recognition]]
[[Quesiti/src_archimede_2015_febb_2livello#q09|src_archimede_2015_febb_2livello__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_conteggio,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Gradini speciali verdi dopo i salti dei canguri*

> Caboyara, famoso circense australiano, si esibisce anche quest’anno in un gran trucco. Predispone una scala spettacolare con N = p1 · p2 · . . . · p2015 gradini, dove p1, p2, . . . , p2015 sono numeri
> primi distinti; i gradini che corrispondono a divisori di N (compresi il primo e l’N-esimo gradino)
> sono speciali e sono inizialmente illuminati di verde.
> Durante lo spettacolo, 2015 canguri ammaestrati salgono uno dopo l’altro la scala; per i =
> 1, 2, . . . , 2015, l’i-esimo canguro salta pi gradini alla volta, partendo ai piedi della scala (salta sul
> gradino pi, poi sul 2pi, e così via finch´e non raggiunge il gradino N). Ogni volta che un canguro
> salta su un gradino speciale, questo cambia colore: da verde diventa rosso, da rosso verde.
> Quanti saranno i gradini speciali illuminati di verde alla fine dell’esibizione?
>
> - **(A)** 22015 −21008
> - **(B)** 22014
> - **(C)** 22014 −21007
> - **(D)** 22013
> - **(E)** 2015 · 21008

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Green special stairs after the kangaroos' jumps*

> Caboyara, a famous Australian circus performer, performs a great trick this year too. He sets up a spectacular staircase with N = p1 · p2 · . . . · p2015 steps, where p1, p2, . . . , p2015 are distinct prime numbers; the steps corresponding to divisors of N (including the first and the N-th step) are special and are initially lit green.
> During the show, 2015 trained kangaroos climb the staircase one after another; for i = 1, 2, . . . , 2015, the i-th kangaroo jumps pi steps at a time, starting at the foot of the staircase (jumps to step pi, then to 2pi, and so on until it reaches step N). Each time a kangaroo jumps onto a special step, it changes colour: from green to red, from red to green.
> How many special steps will be lit green at the end of the show?
>
> - **(A)** 22015 −21008
> - **(B)** 22014
> - **(C)** 22014 −21007
> - **(D)** 22013
> - **(E)** 2015 · 21008


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Method:** [[method_congruenze|Modular arithmetic / congruences]], [[method_conteggio|Combinatorial counting]]
**Skill:** [[skill_astrazione|Abstraction / generalisation]]
[[Quesiti/src_archimede_2015_febb_2livello#q10|src_archimede_2015_febb_2livello__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di ripassare segmenti del 9-agono con un lato per triangolo*

> Giovanni disegna a matita un 9-agono regolare e collega ciascuno dei suoi vertici al centro,
> tracciando un totale di 18 segmenti e ottenendo in questo modo nove triangoli. Ripassa quindi
> a penna alcuni dei segmenti tracciati, facendo in modo che alla fine ognuno dei nove triangoli
> abbia esattamente un lato ripassato a penna. In quanti modi Giovanni può scegliere l’insieme
> dei segmenti da ripassare? (Nota: due insiemi di segmenti che si ottengano l’uno dall’altro per
> rotazione o per simmetria sono da considerarsi distinti.)
>
> - **(A)** 49
> - **(B)** 65
> - **(C)** 74
> - **(D)** 76
> - **(E)** 85

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Ways of retracing segments of the 9-gon with one side per triangle*

> Giovanni draws a regular 9-gon in pencil and connects each of its vertices to the centre,
> drawing a total of 18 segments and thereby obtaining nine triangles. He then retraces
> some of the drawn segments with a pen, so that in the end each of the nine triangles
> has exactly one side retraced with a pen. In how many ways can Giovanni choose the set
> of segments to retrace? (Note: two sets of segments that are obtained from one another by
> rotation or by symmetry are to be considered distinct.)
>
> - **(A)** 49
> - **(B)** 65
> - **(C)** 74
> - **(D)** 76
> - **(E)** 85


**Topic:** [[topic_combinatoria|Combinatorics]]
**Method:** [[method_conteggio|Combinatorial counting]]
**Skill:** [[skill_conteggio_sistematico|Systematic counting]]
[[Quesiti/src_archimede_2015_febb_2livello#q11|src_archimede_2015_febb_2livello__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza AC nel quadrilatero ciclico dati i lati e BD*

![[src_archimede_2015_febb_2livello__prob12.png]]

> Sia ABCD un quadrilatero tale che AB = 24, BC = 20, CD = 15, DA = 7, BD = 25. Quanto
> è lungo AC?
>
> - **(A)** 18
> - **(B)** 14 √ 2
> - **(C)** 20
> - **(D)** 21
> - **(E)** 24 Problemi a risposta numerica – 5 punti

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Length of AC given the sides of ABCD and BD*

> Let ABCD be a quadrilateral such that AB = 24, BC = 20, CD = 15, DA = 7, BD = 25. How long is AC?
>
> - **(A)** 18
> - **(B)** 14 √ 2
> - **(C)** 20
> - **(D)** 21
> - **(E)** 24


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Method:** [[method_coordinate|Coordinate method]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]
[[Quesiti/src_archimede_2015_febb_2livello#q12|src_archimede_2015_febb_2livello__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_algebra,topic_aritmetica,method_fattorizzazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Radice quarta di una somma di potenze di 2*

> Quanto vale
> 4p
> 220 + 227 + 231 + 232 + 237 + 240 ?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1056
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Fourth root of a sum of powers of 2*

> What is the value of
> 4p
> 220 + 227 + 231 + 232 + 237 + 240 ?


**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Method:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Skill:** [[skill_riconoscimento_pattern|Pattern recognition]]
[[Quesiti/src_archimede_2015_febb_2livello#q13|src_archimede_2015_febb_2livello__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Pulce su 2015-agono, primo salto su vertice gia visitato*

> Una pulce si trova inizialmente su un vertice di un poligono regolare di 2015 lati; compie una
> sequenza di salti in senso antiorario: al primo salto si sposta di un vertice (da quello iniziale
> al vicino), al secondo di tre, al terzo di cinque, e così via, di modo che all’n-esimo parte da un
> vertice e atterra 2n −1 vertici più in là, sempre in senso antiorario. Dopo quanti salti accadrà
> per la prima volta che la pulce atterri su un vertice che aveva già visitato?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 48
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*Flea on a 2015-gon, first jump onto an already-visited vertex*

> A flea starts on a vertex of a regular polygon with 2015 sides; it makes a sequence of jumps in the counterclockwise direction: on the first jump it moves by one vertex (from the initial one to the neighbouring one), on the second by three, on the third by five, and so on, so that on the n-th it starts from a vertex and lands 2n − 1 vertices further on, always in the counterclockwise direction. After how many jumps will it first land on a vertex that it had already visited?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Method:** [[method_congruenze|Modular arithmetic / congruences]]
**Skill:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
[[Quesiti/src_archimede_2015_febb_2livello#q14|src_archimede_2015_febb_2livello__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_aritmetica,topic_logica,method_backward,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*vittorie con mosse -3 o meta*

> ESERCIZIO DIMOSTRATIVO
> Camilla ha una scatola che contiene 2015 graffette. Ne prende un numero positivo n e le mette
> sul banco di Federica, sfidandola al seguente gioco. Federica ha a disposizione due tipi di mosse:
> può togliere 3 graffette dal mucchio che ha sul proprio banco (se il mucchio contiene almeno
> 3 graffette), oppure togliere metà delle graffette presenti (se il mucchio ne contiene un numero
> pari). Federica vince se, con una sequenza di mosse dei tipi sopra descritti, riesce a togliere tutte
> le graffette dal proprio banco.
> (a) Per quanti dei 2015 possibili valori di n Federica può vincere?
> (b) Le ragazze cambiano le regole del gioco e decidono di assegnare la vittoria a Federica nel
> caso riesca a lasciare sul banco una singola graffetta.
> Per quanti dei 2015 valori di n
> Federica può vincere con le nuove regole?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_backward|Ragionamento all'indietro]], [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*victories with moves -3 or half*

> PROOF EXERCISE
> Camilla has a box containing 2015 paperclips. She takes a positive number n of them and puts them on Federica's desk, challenging her to the following game. Federica has two types of moves available: she can remove 3 paperclips from the pile on her own desk (if the pile contains at least 3 paperclips), or remove half of the paperclips present (if the pile contains an even number). Federica wins if, with a sequence of moves of the types described above, she manages to remove all the paperclips from her own desk.
> (a) For how many of the 2015 possible values of n can Federica win?
> (b) The girls change the rules of the game and decide to award the victory to Federica in the case she manages to leave a single paperclip on the desk.
> For how many of the 2015 values of n can Federica win under the new rules?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_logica|Logic, games, strategies]]
**Method:** [[method_backward|Working backwards]], [[method_invarianti|Invariants / monovariants]]
**Skill:** [[skill_astrazione|Abstraction / generalisation]]
[[Quesiti/src_archimede_2015_febb_2livello#q15|src_archimede_2015_febb_2livello__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*ciclicita e similitudine*

![[src_archimede_2015_febb_2livello__prob16.png]]

> ESERCIZIO DIMOSTRATIVO
> Sia ABCD un quadrilatero convesso tale che AB = AC = AD e BC < CD. La bisettrice
> dell’angolo \
> BAD interseca internamente CD in M e il prolungamento di BC in N. Dimostrare
> che
> (a) il quadrilatero ABCM è inscrittibile in una circonferenza;
> (b) i triangoli ANB e ABM sono simili.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*cyclicity and similarity*

> PROOF EXERCISE
> Let ABCD be a convex quadrilateral such that AB = AC = AD and BC < CD. The bisector of angle
> BAD intersects CD internally at M and the extension of BC at N. Prove that
> (a) the quadrilateral ABCM is cyclic;
> (b) the triangles ANB and ABM are similar.


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Method:** [[method_simmetria|Using symmetry]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]
[[Quesiti/src_archimede_2015_febb_2livello#q16|src_archimede_2015_febb_2livello__Q16]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,method_congruenze,method_fattorizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*valori di k e di n*

> ESERCIZIO DIMOSTRATIVO
> Sia n un intero positivo e siano 1 = d1 < d2 < d3 < . . . < dk = n i suoi divisori positivi, ordinati
> per grandezza. Si sa che k ≥4 e che d2
> 3 + d2
> 4 = 2n + 1.
> (a) Trovare tutti i possibili valori di k.
> (b) Trovare tutti i possibili valori di n.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.7](https://drive.google.com/file/d/147OSJf1wSBJHNEWKDKPVWMIP2TLevkAt/view)


<div class="qlang-split" data-lang="en"></div>


*values of k and n*

> PROOF EXERCISE
> Let n be a positive integer and let 1 = d1 < d2 < d3 < . . . < dk = n be its positive divisors, ordered by size. It is known that k ≥ 4 and that d2
> 3 + d2
> 4 = 2n + 1.
> (a) Find all possible values of k.
> (b) Find all possible values of n.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Method:** [[method_congruenze|Modular arithmetic / congruences]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Skill:** [[skill_casework_accurato|Careful casework]]
[[Quesiti/src_archimede_2015_febb_2livello#q17|src_archimede_2015_febb_2livello__Q17]]
