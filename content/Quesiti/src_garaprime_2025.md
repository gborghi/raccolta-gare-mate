---
title: X Gara Nazionale Classi Prime 2025
tipo: gara
competition: X Gara Nazionale Classi Prime 2025
family: archimede
year: '2025'
level: Classi Prime
---
<div class="atom-reader" data-gara="Quesiti/src_garaprime_2025"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,method_conteggio,skill_ragionamento_geometrico,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Differenza aree tra mosaici romboidali riscalati*

![[src_garaprime_2025__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.5]
  \draw (3,6) rectangle (4,7);
  \draw (2,5) rectangle (3,6); \draw (3,5) rectangle (4,6); \draw (4,5) rectangle (5,6);
  \draw (1,4) rectangle (2,5); \draw (2,4) rectangle (3,5); \draw (3,4) rectangle (4,5); \draw (4,4) rectangle (5,5); \draw (5,4) rectangle (6,5);
  \draw (0,3) rectangle (1,4); \draw (1,3) rectangle (2,4); \draw (2,3) rectangle (3,4); \draw (3,3) rectangle (4,4); \draw (4,3) rectangle (5,4); \draw (5,3) rectangle (6,4); \draw (6,3) rectangle (7,4);
  \draw (1,2) rectangle (2,3); \draw (2,2) rectangle (3,3); \draw (3,2) rectangle (4,3); \draw (4,2) rectangle (5,3); \draw (5,2) rectangle (6,3);
  \draw (2,1) rectangle (3,2); \draw (3,1) rectangle (4,2); \draw (4,1) rectangle (5,2);
  \draw (3,0) rectangle (4,1);
\end{tikzpicture}
\end{document}
```

> Usando dei tasselli quadrati di lato 1 cm, Raffaella costruisce il mosaico
> mostrato in figura.
> Luca decide di farne uno che ha la stessa forma,
> ma con tasselli di lato 5 cm. Claudia, invece, ne costruisce uno usando
> ancora tasselli di lato 1 cm e mantenendo la stessa struttura romboidale
> di Raffaella, ma con le diagonali di 35 quadretti anzich´e di 7. Qual è la
> differenza, in cm2, tra le aree delle figure di Claudia e Luca?
>
> - **(A)** 12
> - **(B)** 0
> - **(C)** 24
> - **(D)** 25
> - **(E)** 13

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Area differences between heated rhomboid mosaics*

![[src_garaprime_2025__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.5]
  \draw (3,6) rectangle (4,7);
  \draw (2,5) rectangle (3,6); \draw (3,5) rectangle (4,6); \draw (4,5) rectangle (5,6);
  \draw (1,4) rectangle (2,5); \draw (2,4) rectangle (3,5); \draw (3,4) rectangle (4,5); \draw (4,4) rectangle (5,5); \draw (5,4) rectangle (6,5);
  \draw (0,3) rectangle (1,4); \draw (1,3) rectangle (2,4); \draw (2,3) rectangle (3,4); \draw (3,3) rectangle (4,4); \draw (4,3) rectangle (5,4); \draw (5,3) rectangle (6,4); \draw (6,3) rectangle (7,4);
  \draw (1,2) rectangle (2,3); \draw (2,2) rectangle (3,3); \draw (3,2) rectangle (4,3); \draw (4,2) rectangle (5,3); \draw (5,2) rectangle (6,3);
  \draw (2,1) rectangle (3,2); \draw (3,1) rectangle (4,2); \draw (4,1) rectangle (5,2);
  \draw (3,0) rectangle (4,1);
\end{tikzpicture}
\end{document}
```

> Using square tiles with sides 1 cm long, Raffaella constructs the mosaic shown in the figure. Luca decides to make one that has the same shape but uses tiles with sides 5 cm long. Claudia, on the other hand, constructs one using tiles with sides 1 cm long again and keeping the same rhomboid structure as Raffaella's, but with diagonals of 35 small squares instead of 7. What is the difference, in cm², between the areas of Claudia's and Luca's figures?
>
> - **(A)** 12
> - **(B)** 0
> - **(C)** 24
> - **(D)** 25
> - **(E)** 13


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_logica,topic_aritmetica,method_estremalita,method_invarianti,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo monete nel forziere fermandosi su totale pari*

> Hai 100 sacchetti: il primo contiene una moneta d’oro, il secondo ne contiene due, e così via, fino al centesimo
> che ne contiene 100. Puoi riempire il tuo forziere vuotando, uno dopo l’altro, alcuni sacchetti nel forziere,
> ma quando il numero di monete del tuo tesoro sarà pari e non nullo ti dovrai fermare. Quante monete, al
> massimo, potrai inserire nel forziere?
>
> - **(A)** 5050
> - **(B)** 3080
> - **(C)** 2746
> - **(D)** 2649
> - **(E)** 2048

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Maximize the coins in the chest, stopping at an even total*

> There are 100 bags: the first contains one gold coin, the second contains two, and so on, up to the hundredth, which contains 100 coins. You can fill your chest by emptying some bags into the chest, one after another, but when the number of coins in your treasure is even and non-zero, you must stop. What is the maximum number of coins you can put into the chest?
>
> - **(A)** 5050
> - **(B)** 3080
> - **(C)** 2746
> - **(D)** 2649
> - **(E)** 2048

**Topic:** [[topic_logica|Logic, games and strategies]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_invarianti|Invariants / monovariants]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area del triangolo MNC nel rettangolo di area 288*

> In un rettangolo ABCD di area 288 cm2, siano M ed N rispettivamente i punti medi dei lati AB e AD.
> Determinare l’area del triangolo MNC.
>
> - **(A)** 108 cm2
> - **(B)** 144 cm2
> - **(C)** 96 cm2
> - **(D)** 72 cm2
> - **(E)** 192 cm2

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Area of triangle MNC in the rectangle with area 288*

> In rectangle ABCD with an area of 288 cm², let M and N be the midpoints of sides AB and AD, respectively. Determine the area of triangle MNC.
>
> - **(A)** 108 cm²
> - **(B)** 144 cm²
> - **(C)** 96 cm²
> - **(D)** 72 cm2
> - **(E)** 192 cm2


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,topic_combinatoria,method_conteggio,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore di x+y dato che la somma dei numeri vale 396*

> Cecilia, usando solo le cifre 2, 5, x, y, con x ̸= 0 ̸= y e tale che ciascuna delle quattro cifre sia diversa dalle
> altre, ha scritto alla lavagna tutti i possibili numeri interi di due cifre distinte. Se si vuole che la somma
> totale dei numeri scritti sia uguale a 396, quanto deve valere x + y?
>
> - **(A)** 4
> - **(B)** 5
> - **(C)** 8
> - **(D)** 9
> - **(E)** 12

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*The value of x+y, given that the sum of the numbers is 396*

> Cecilia, using only the digits 2, 5, x, y, with x ≠ 0, y ≠ 0, and such that each of the four digits is different from the others, wrote on the board all possible two-digit integers with distinct digits. If we want the total sum of the numbers written to be equal to 396, what must the value of x + y be?
>
> - **(A)** 4
> - **(B)** 5
> - **(C)** 8
> - **(D)** 9
> - **(E)** 12

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,topic_geometria_piana,topic_aritmetica,method_conteggio,method_inclusione_esclusione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quadretti non tagliati dalle diagonali di griglia 20x25*

> In una griglia rettangolare 20 × 25 vengono tracciate le due diagonali. Quanti quadretti della griglia non
> vengono tagliati, al loro interno, dalle diagonali?
>
> - **(A)** 320
> - **(B)** 326
> - **(C)** 400
> - **(D)** 418
> - **(E)** 422

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Small squares not cut by the diagonals of a 20x25 grid*

> In a 20 × 25 rectangular grid, the two diagonals are drawn. How many of the grid squares are not intersected internally by the diagonals?
>
> - **(A)** 320
> - **(B)** 326
> - **(C)** 400
> - **(D)** 418
> - **(E)** 422


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_geometria_piana|Plane geometry]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_inclusione_esclusione|Inclusion–exclusion]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_geometria_piana,topic_combinatoria,method_estremalita,skill_stima,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo punti in cerchio a distanza almeno 1*

> Quanti punti si possono disegnare, al massimo, all’interno di un cerchio di area 4π cm2 (si può usare anche
> il bordo) in modo che ciascun punto disti almeno 1 cm da ciascuno degli altri punti?
>
> - **(A)** 7
> - **(B)** 10
> - **(C)** 12
> - **(D)** 16
> - **(E)** 19

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_stima|Stima e approssimazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum points in a circle at a distance of at least 1*

> What is the maximum number of points that can be plotted inside a circle with an area of 4π cm² (the boundary may also be used) such that each point is at least 1 cm away from each of the other points?
>
> - **(A)** 7
> - **(B)** 10
> - **(C)** 12
> - **(D)** 16
> - **(E)** 19


**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_stima|Estimation and approximation]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_conteggio,method_casi_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri di 6 cifre con 1 e 2 multipli di 3*

> Quanti numeri di 6 cifre che sono multipli di 3 posso scrivere utilizzando solo le cifre 1 e 2?
>
> - **(A)** 2
> - **(B)** 12
> - **(C)** 22
> - **(D)** 32
> - **(E)** 64

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]], [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*6-digit numbers containing 1 and 2 that are multiples of 3*

> How many 6-digit numbers that are multiples of 3 can I write using only the digits 1 and 2?
>
> - **(A)** 2
> - **(B)** 12
> - **(C)** 22
> - **(D)** 32
> - **(E)** 64


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_conteggio|Combinatorial counting]], [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Angolo BAC in catena di triangoli isosceli*

![[src_garaprime_2025__prob8.png]]

> Nell’immagine a fianco risulta AB = BC = CD =
> DE = EF. Sapendo che l’angolo $\widehat{DEF}$ misura
> 44°, l’ampiezza dell’angolo $\widehat{BAC}$ risulta:
> A
> B
> C
> D
> E
> F
>
> - **(A)** 17°
> - **(B)** 18°
> - **(C)** 16°
> - **(D)** 22°
> - **(E)** 21°

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Angle BAC in a chain of isosceles triangles*

![[src_garaprime_2025__prob8.png]]

> In the image beside, AB = BC = CD =
> DE = EF. Given that angle $\widehat{DEF}$ measures 44°, the measure of angle $\widehat{BAC}$ is: A B C D E F
>
> - **(A)** 17°
> - **(B)** 18°
> - **(C)** 16°
> - **(D)** 22°
> - **(E)** 21°

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_combinatoria,topic_aritmetica,method_inclusione_esclusione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri di tre cifre con la cifra 3 ma non la 4*

> Quanti sono i numeri interi di tre cifre (tra 100 e 999) che contengono la cifra 3 ma non la cifra 4?
>
> - **(A)** 162
> - **(B)** 200
> - **(C)** 216
> - **(D)** 243
> - **(E)** 450

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Three-digit numbers containing the digit 3 but not the digit 4*

> How many three-digit integers (between 100 and 999) contain the digit 3 but not the digit 4?
>
> - **(A)** 162
> - **(B)** 200
> - **(C)** 216
> - **(D)** 243
> - **(E)** 450

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_inclusione_esclusione|Inclusion–exclusion]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_combinatoria,topic_disuguaglianze,method_disuguaglianze,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo numeri della tombola con vincoli somma e prodotto*

> Prendo i 90 numeri della tombola e voglio metterne alcuni all’interno del sacchetto in modo che, se ne
> estraggo due qualsiasi tra questi, sono sicuro che la loro somma sarà minore o uguale a 25 e il loro prodotto
> sarà maggiore o uguale a 50. Quanti numeri, al massimo, posso scegliere?
>
> - **(A)** 5
> - **(B)** 7
> - **(C)** 9
> - **(D)** 11
> - **(E)** 6

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum numbers in tombola with sum and product constraints*

> I take the 90 bingo numbers and want to put some of them into the bag so that, if I draw any two of these numbers, I can be sure that their sum will be less than or equal to 25 and their product will be greater than or equal to 50. What is the maximum number of numbers I can choose?
>
> - **(A)** 5
> - **(B)** 7
> - **(C)** 9
> - **(D)** 11
> - **(E)** 6

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_disuguaglianze,topic_algebra,method_disuguaglianze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Interi n che soddisfano la catena di disuguaglianze*

> Quanti sono i numeri interi positivi n che soddisfano le disuguaglianze (15n)20 > n40 > 280 ?
>
> - **(A)** 0
> - **(B)** 10
> - **(C)** 50
> - **(D)** 100
> - **(E)** infiniti

**Topic:** [[topic_disuguaglianze|Disuguaglianze]], [[topic_algebra|Algebra]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Interiors that satisfy the chain of inequalities*

> How many positive integers n satisfy the inequalities (15n)²⁰ > n⁴⁰ > 280?
>
> - **(A)** 0
> - **(B)** 10
> - **(C)** 50
> - **(D)** 100
> - **(E)** infinitely many

**Topic:** [[topic_disuguaglianze|Inequalities]], [[topic_algebra|Algebra]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto xy dato (x+y)^2=100x+y=2025*

> I due numeri reali positivi x e y sono tali che (x + y)2 = 100x + y = 2025. Quanto vale il prodotto xy?
>
> - **(A)** 250
> - **(B)** 400
> - **(C)** 450
> - **(D)** 480
> - **(E)** 500

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Given product xy, (x+y)^2=100, x+y=2025*

> The two positive real numbers x and y satisfy (x + y)² = 100 and x + y = 2025. What is the value of the product xy?
>
> - **(A)** 250
> - **(B)** 400
> - **(C)** 450
> - **(D)** 480
> - **(E)** 500


**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area del parallelogramma dato il baricentro e area APO*

> Dato il parallelogramma ABCD, sia M il punto medio di BC, O il punto di incontro delle diagonali e
> P il punto di intersezione tra AM e BD.
> Sapendo che l’area di APO è 24 cm2, quanto vale l’area del
> parallelogramma ABCD?
>
> - **(A)** 288 cm2
> - **(B)** 240 cm2
> - **(C)** 336 cm2
> - **(D)** 192 cm2
> - **(E)** 216 cm2

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Area of the given parallelogram given the centroid and area APO*

> Given parallelogram ABCD, let M be the midpoint of BC, O be the intersection point of the diagonals, and P be the intersection point of AM and BD. Knowing that the area of APO is 24 cm², what is the area of parallelogram ABCD?
>
> - **(A)** 288 cm2
> - **(B)** 240 cm2
> - **(C)** 336 cm2
> - **(D)** 192 cm2
> - **(E)** 216 cm2


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_insiemi_funzioni,method_inclusione_esclusione,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Studenti che amano la matematica (insiemi)*

> Tutti i 180 studenti delle classi prime di un liceo amano la matematica e/o la fisica. Il numero di allievi che
> amano solo la matematica è il doppio di quelli che amano solo la fisica; il 20% del totale ama entrambe le
> materie. Quanti sono gli studenti che amano la matematica?
>
> - **(A)** 108
> - **(B)** 144
> - **(C)** 120
> - **(D)** 132
> - **(E)** 96

**Topic:** [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Students who love mathematics (sets)*

> All 180 first-year students at a high school like mathematics and/or physics. The number of students who like only mathematics is twice the number who like only physics; 20% of the total like both subjects. How many students like mathematics?
>
> - **(A)** 108
> - **(B)** 144
> - **(C)** 120
> - **(D)** 132
> - **(E)** 96


**Topic:** [[topic_insiemi_funzioni|Sets and functions]]
**Metodo:** [[method_inclusione_esclusione|Inclusion–exclusion]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore di 3a+1/a dato 9a^2+1/a^2=19*

> Sapendo che 9a2 + 1
> a2 = 19, con a numero reale positivo, quanto vale 3a + 1
> a?
>
> - **(A)** 5
> - **(B)** √ 13
> - **(C)** 13
> - **(D)** √ 19
> - **(E)** 9

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Value of 3a + 1/a given 9a^2 + 1/a^2 = 19*

> Knowing that 9a2 + 1
> a² = 19, where a is a positive real number—what is the value of 3a + 1a?
>
> - **(A)** 5
> - **(B)** √ 13
> - **(C)** 13
> - **(D)** √ 19
> - **(E)** 9


**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_aritmetica,method_estremalita,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo mcm di interi positivi con somma 10*

> La somma di alcuni numeri interi positivi è 10. Quanto vale al massimo il loro minimo comune multiplo?
>
> - **(A)** meno di 16
> - **(B)** tra 16 e 28
> - **(C)** tra 29 e 39
> - **(D)** tra 40 e 49
> - **(E)** più di 49

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum product of positive integers summing to 10*

> The sum of some positive integers is 10. What is the maximum possible value of their least common multiple?
>
> - **(A)** less than 16
> - **(B)** between 16 and 28
> - **(C)** between 29 and 39
> - **(D)** between 40 and 49
> - **(E)** more than 49


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,method_congruenze,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Base B minima con somma cifre invariata per 1257*

> Nell’usuale base 10, si consideri il numero 1257. Tale numero, in base B, è rappresentato dalla scrittura xyz,
> vale a dire 1257 = xB2 + yB + z. Qual è la base B più piccola per cui risulta x + y + z = 1 + 2 + 5 + 7?
>
> - **(A)** 11
> - **(B)** 12
> - **(C)** 19
> - **(D)** 24
> - **(E)** 28

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Base B minima with unchanged digit sum for 1257*

> In the usual base 10, consider the number 1257. In base B, this number is represented by the notation xyz, that is, 1257 = xB² + yB + z. What is the smallest base B for which x + y + z = 1 + 2 + 5 + 7?
>
> - **(A)** 11
> - **(B)** 12
> - **(C)** 19
> - **(D)** 24
> - **(E)** 28


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo fattore per rendere 18×k potenza sesta*

> Lisa vuole moltiplicare 18 per un numero, in modo che il risultato sia contemporaneamente un quadrato
> perfetto e un cubo perfetto. Qual è il più piccolo numero che può usare Lisa?
>
> - **(A)** 12
> - **(B)** 72
> - **(C)** 1728
> - **(D)** 2592
> - **(E)** 46656 Test n. 1 Unione Matematica Italiana Progetto Olimpiadi della Matematica X Gara Nazionale per le Classi Prime Mercoledì 5 febbraio 2025 Nome: Cognome: Sesso: M F Data di nascita: Città: Scuola: La gara dura 2 ore e 30 minuti e consiste di 18 problemi. Una sola delle risposte è corretta. La lettera corrispondente alla risposta corretta dovrà essere riportata, per ogni quesito, in questa pagina nella finestrella più in basso. Ogni risposta giusta vale 5 punti, ogni risposta errata vale 0 punti e ogni problema lasciato senza risposta vale 1 punto. Non sono ammesse cancellature sulla griglia. Non è ammesso l’uso di dispositivi elettronici, compasso e goniometro. I problemi non sono in ordine di difficoltà, ma permutati in modo casuale. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 Test n. 2

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1QvOWE3paSZNv1I8ZGuUcpECJg-N3RufJ/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum factor to make 18*k the sixth power*

> Lisa wants to multiply 18 by a number so that the result is both a perfect square and a perfect cube. What is the smallest number Lisa can use?
>
> - **(A)** 12
> - **(B)** 72
> - **(C)** 1728
> - **(D)** 2592
> - **(E)** 46656 Test No. 1 Italian Mathematical Union Mathematics Olympiads Project X National Competition for First-Year Classes Wednesday, 5 February 2025 First name: Surname: Gender: M F Date of birth: City: School: The competition lasts 2 hours and 30 minutes and consists of 18 problems. Only one of the answers is correct. For each question, the letter corresponding to the correct answer must be entered on this page in the box at the bottom. Each correct answer is worth 5 points, each incorrect answer is worth 0 points, and each problem left unanswered is worth 1 point. Erasures on the answer grid are not permitted. The use of electronic devices, compasses, and protractors is not permitted. The problems are not arranged in order of difficulty; they have been shuffled randomly. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 Test No. 2

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
