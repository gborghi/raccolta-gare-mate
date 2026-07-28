---
title: Kangourou 2018 Semifinale Junior
tipo: gara
competition: Kangourou 2018 Semifinale Junior
family: kangourou
year: '2018'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2018_junior_semif"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante coppie (a,b) reali non nulli con a+b=ab=a/b*

> (Punti 2) Quante diverse coppie ordinate (a, b) di numeri reali non nulli soddisfano le uguaglianze
> a + b = ab = a/b?
> A) 0	
> 	
> B) 1	
> 	
> C) 2	
> 	
> D) 3	
> 	
> E) Infinite

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*How many non-zero real pairs (a,b) with a+b=ab=a/b*

> (Points 2) How many different ordered pairs (a, b) of non-zero real numbers satisfy the equations a + b = ab = a/b? A) 0
> 	
> B) 1
> 	
> C) 2
> 	
> D) 3
> 	
> E) Infinite

**Answer:** B
[[src_kangourou_2018_junior_semif__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza circonferenza C inscritta nell occhio*

![[src_kangourou_2018_junior_semif__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Eye shape: two quarter-circle arcs (each 90 deg) meeting at tips (±1.5, 0)
  % Upper arc: center (0, -1.5), radius 2.12132, from 45 to 135 deg
  \draw (1.5,0) arc[start angle=45, end angle=135, radius=2.12132];
  % Lower arc: center (0, 1.5), radius 2.12132, from 225 to 315 deg
  \draw (-1.5,0) arc[start angle=225, end angle=315, radius=2.12132];
  % Inscribed circle C tangent to both arcs: center (0,0), radius 0.62132
  \filldraw[fill=black] (0,0) circle[radius=0.62132];
\end{tikzpicture}
\end{document}
```

> (Punti 3) L’occhio in figura è realizzato da due quarti di circonferenza 
> ciascuno di lunghezza 1 e dal cerchio C di raggio più grande possibile con­
> tenuto nella regione limitata da essi individuata. Quanto è lunga la circon­
> ferenza che delimita C?
> A) 2           B) π - 1            C) 3√2 - 2            D) 4√2 - π          
> E) Un numero diverso dai precedenti.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*Length of circumference C inscribed in the eye*

![[src_kangourou_2018_junior_semif__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Eye shape: two quarter-circle arcs (each 90 deg) meeting at tips (±1.5, 0)
  % Upper arc: center (0, -1.5), radius 2.12132, from 45 to 135 deg
  \draw (1.5,0) arc[start angle=45, end angle=135, radius=2.12132];
  % Lower arc: center (0, 1.5), radius 2.12132, from 225 to 315 deg
  \draw (-1.5,0) arc[start angle=225, end angle=315, radius=2.12132];
  % Inscribed circle C tangent to both arcs: center (0,0), radius 0.62132
  \filldraw[fill=black] (0,0) circle[radius=0.62132];
\end{tikzpicture}
\end{document}
```

> (Documents 3) The eye in the figure is made up of two quarters of the circumference of each of the lengths 1 and the circle C of the largest possible radius contained in the region bounded by them. How long is the circumference of C? A) 2 B) π - 1 C) 3√2 - 2 D) 4√2 - π E) A number different from the previous ones.

**Answer:** E
[[src_kangourou_2018_junior_semif__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_analitica,topic_geometria_piana,method_casework,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*triangolo equilatero, quadrato o cerchio*

![[src_kangourou_2018_junior_semif__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[x=0.5cm,y=0.5cm]
  % Squared paper: 11 columns (0..10), 5 rows (0..4), y increases upward
  \draw[gray, thin] (0,0) grid (10,4);
  % B=(col 3, row 0 from top) => tikz (3,4)
  % C=(col 6, row 0 from top) => tikz (6,4)
  % A=(col 2, row 3 from top) => tikz (2,1)
  % D=(col 8, row 3 from top) => tikz (8,1)
  \filldraw (3,4) circle[radius=2.5pt] node[below right, font=\small] {$B$};
  \filldraw (6,4) circle[radius=2.5pt] node[below right, font=\small] {$C$};
  \filldraw (2,1) circle[radius=2.5pt] node[below right, font=\small] {$A$};
  \filldraw (8,1) circle[radius=2.5pt] node[below right, font=\small] {$D$};
\end{tikzpicture}
\end{document}
```

> (Punti 3) Su un foglio di carta quadrettata (in figura ne vedi 
> una porzione) sono marcati i quattro punti A, B, C, D.  Enrico 
> vuole individuare una figura che sia un triangolo equilatero, op­
> pure un quadrato, oppure un cerchio il cui bordo passi per tutti i 
> quattro punti. Allora la figura potrà essere
> A) sia un triangolo equilatero, sia un quadrato, ma non un cerchio.
> B) un quadrato, ma non un triangolo equilatero né un cerchio.
> C) sia un quadrato, sia un cerchio, ma non un triangolo equilatero. 
> D) una qualunque di quelle elencate.
> E) nessuna di quelle elencate.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*equilateral triangle, square or circle*

![[src_kangourou_2018_junior_semif__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[x=0.5cm,y=0.5cm]
  % Squared paper: 11 columns (0..10), 5 rows (0..4), y increases upward
  \draw[gray, thin] (0,0) grid (10,4);
  % B=(col 3, row 0 from top) => tikz (3,4)
  % C=(col 6, row 0 from top) => tikz (6,4)
  % A=(col 2, row 3 from top) => tikz (2,1)
  % D=(col 8, row 3 from top) => tikz (8,1)
  \filldraw (3,4) circle[radius=2.5pt] node[below right, font=\small] {$B$};
  \filldraw (6,4) circle[radius=2.5pt] node[below right, font=\small] {$C$};
  \filldraw (2,1) circle[radius=2.5pt] node[below right, font=\small] {$A$};
  \filldraw (8,1) circle[radius=2.5pt] node[below right, font=\small] {$D$};
\end{tikzpicture}
\end{document}
```

> (Points 3) The four points A, B, C and D are marked on a square sheet of paper (see section below). Henry wants to identify a figure that is either an equilateral triangle, or a square, or a circle whose edge passes through all four points. So the figure can be A) either an equilateral triangle or a square, but not a circle. (b) a square, but not an equilateral triangle or a circle. (c) is a square or a circle, but not an equilateral triangle. (d) any of the following: (e) none of those listed.

**Answer:** A
[[src_kangourou_2018_junior_semif__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_probabilita,method_simmetria,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Probabilita che il numero di Alice superi quello di Barbara*

> (Punti 4) Alice e Barbara scelgono a caso e separatamente un numero intero compreso fra 1 e 2018. 
> I due numeri vengono quindi confrontati.  Qual è la probabilità che il numero scelto da Alice sia più 
> grande di quello scelto da Barbara?
> A) 2019/4036	
> B) 2017/4036		
> C) 2017/4038		
> D) 1/2
> E) Nessuna delle precedenti.

**Topic:** [[topic_probabilita|Probabilita e statistica]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


The probability that Alice's number exceeds Barbara's

> (Points 4) Alice and Barbara randomly and separately select an integer between 1 and 2018. The two numbers are then compared. What is the probability that the number Alice chose is greater than the number Barbara chose? This appropriation is intended to cover expenditure relating to the implementation of the programme.

**Answer:** B
[[src_kangourou_2018_junior_semif__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_solida,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Rapporto volume cubo / tetraedro regolare inscritto*

> (Punti 4) In un cubo viene inscritto un tetraedro regolare i cui spigoli sono diagonali delle facce 
> del cubo. Qual è il rapporto tra il volume del cubo e il volume del tetraedro?
> A) 2	
> 	
> B) 3	
> 	
> C) 4/3		
> D) 3/2	
> E) 5/3

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*Reported cubic volume/regular tetrahedron entered *

> (Points 4) A regular tetrahedron is inscribed in a cube whose edges are diagonal to the sides of the cube. What is the ratio of the volume of the cube to the volume of the tetrahedron? A) 2
> 	
> B) 3
> 	
> C) 4/3 D) 3/2 E) 5/3

**Answer:** B
[[src_kangourou_2018_junior_semif__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Cifra A in A111...11 di 2019 cifre divisibile per 7*

> (Punti 4) Il numero di 2019 cifre (in notazione decimale) A111...11, dove A è una cifra e le rimanen­
> ti 2018 cifre sono tutte 1, è divisibile per 7. Quale cifra è A?
> A) 2	
> 	
> B) 3              C) 4	
> 	
> D) 5	
> 	
> E) 9

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*A figure in A111...11 of 2019 digits divisible by 7*

> (Points 4) The number of 2019 digits (in decimal notation) A111...11, where A is a digit and the remaining 2018 digits are all 1, is divisible by 7. What's the number A? A) 2
> 	
> B) 3              C) 4
> 	
> D) 5
> 	
> E) 9

**Answer:** D
[[src_kangourou_2018_junior_semif__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,method_congruenze,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti primi r somma di due primi con uguale somma cifre*

> (Punti 5) Un numero primo r è somma di due numeri primi p e q. Accade inoltre che la somma 
> delle cifre di r coincide con la somma delle cifre di p sommata alla somma delle cifre di q. Quanti 
> sono i possibili numeri primi r che si trovano in questa situazione? (Attenzione: 1 non è un numero 
> primo!)
> A) Solo 1	
> 	
> B) Esattamente 2	
> 	
> C) Esattamente 3	
> 	
> D) Esattamente 4           
> E) Più di 4

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*How many prime r sums of two prime numbers with equal sums *

> (Points 5) A prime r is the sum of two prime p and q. It also happens that the sum of the digits r coincides with the sum of the digits p plus the sum of the digits q. How many possible prime r numbers are in this situation? (Warning: 1 is not a prime number!) A) Only 1
> 	
> B) Exactly 2
> 	
> C) Exactly 3
> 	
> D) Exactly 4 E) More than 4

**Answer:** E
[[src_kangourou_2018_junior_semif__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,method_fattorizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Per quanti interi n il numero n/(n-10) e intero*

> (Punti 5) Per quanti numeri interi n il numero n/(n - 10) è intero?
> A) 4	
> 	
> B) 5	
> 	
> C) 7	
> 	
> D) 8	
> 	
> E) Infiniti

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*For integers n the number n/(n-10) and integers *

> (Points 5) For how many integers n is the number n/(n - 10) an integer? A) 4
> 	
> B) 5
> 	
> C) 7
> 	
> D) 8
> 	
> E) Infinite

**Answer:** D
[[src_kangourou_2018_junior_semif__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_aritmetica,topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Per cosa non e divisibile 2019*2018^2 - 2018*2019^2*

> (Punti 6) Il numero 201920182 - 201820192 non è divisibile per
> A) 99	 	
> B) 101		
> C) 121           D) 1001		
> E) 10001
> A
> B
> C
> D
> 
> Quesiti a risposta aperta

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


This is a list of the countries of the European Economic Area.

> (Points 6) The number 201920182 - 201820192 is not divisible by A) 99 B) 101 C) 121 D) 1001 E) 10001 A B C D
> 
> Open-ended questions

**Answer:** D
[[src_kangourou_2018_junior_semif__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto soluzioni intere di (97-x)^(1/4)+x^(1/4)=5*

> (Punti 4) Le soluzioni (reali) dell’equazione (97 - x) 1/4 + x 1/4 = 5 sono numeri interi. Quanto vale 
> il loro prodotto?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 1296
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


Product whole solutions of (97-x)^(1/4) +x^1/4)=5*

> (Points 4) The (real) solutions of the equation (97 - x) 1/4 + x 1/4 = 5 are integers. How much is their product worth?

**Answer:** 1296
[[src_kangourou_2018_junior_semif__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_aritmetica,method_telescoping,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*M-N tra somma dispari e somma pari minori di 1000*

> (Punti 5) Siano M la somma dei numeri interi positivi dispari minori di 1000 e N la somma dei 
> numeri interi positivi pari strettamente minori di 1000. Quanto vale M - N ?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_telescoping|Somme telescopiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 500
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*M-N between odd sum and even sum less than 1000*

> (Points 5) M is the sum of the odd positive integers less than 1000 and N is the sum of the positive integers strictly less than 1000. How much is M-N ?

**Answer:** 500
[[src_kangourou_2018_junior_semif__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_geometria_piana,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Rapporto lunghezza fune / pezzo piu corto (dischi)*

> (Punti 5) Una fune a sezione circolare è ripartita con un taglio in due pezzi. Entrambi vengono 
> arrotolati a spirale su un tavolo in modo da ottenere approssimativamente due dischi. Il raggio di 
> uno dei due è il doppio del raggio dell’altro. Qual è il rapporto tra la lunghezza dell’intera fune e la 
> lunghezza del pezzo più corto? (Se necessario, approssima la risposta all’intero più vicino.)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Geometria]]
**Risposta:** 5
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*Ratio length of strings / shorter piece (discs) *

> (Points 5) A circular section rope is cut into two pieces. Both are spirally rolled onto a table to produce approximately two discs. The radius of one of the two is twice the radius of the other. What is the relationship between the length of the whole rope and the length of the shortest piece? (If necessary, approximate the answer to the nearest integer.)

**Answer:** 5
[[src_kangourou_2018_junior_semif__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_probabilita,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Probabilita di segnare il primo rigore dato p>=uno=0,999*

> (Punti 6) Marco deve tirare tre calci di rigore. Conoscendosi, sa che la probabilità di segnare è 
> la stessa in tutti e tre e che quella di segnare in almeno uno dei tre è 0,999. Qual è la probabilità che 
> riesca a segnare quando tira il primo rigore? (Indica le cifre decimali dopo la virgola fino alla quarta: ad 
> es. se la probabilità fosse 0,81 scrivi la risposta come 8100.)

**Topic:** [[topic_probabilita|Probabilita e statistica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 9000
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*Probability of scoring the first given string p>=one=0,999*

> Mark must take three hard kicks. Knowing yourself, you know that the probability of scoring is the same in all three and that the probability of scoring in at least one of the three is 0.999. What's the likelihood that he'll score when he draws the first line? (Include decimal places after the comma up to the fourth: e.g. If the probability is 0.81, write the answer as 8100.)

**Answer:** 9000
[[src_kangourou_2018_junior_semif__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_algebra,topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante coppie (a,b) interi in [-2018,2018] con 2a+b+6=0*

> (Punti 6) Per quante diverse coppie ordinate (a, b) di numeri interi relativi compresi fra - 2018 e 
> 2018, estremi inclusi, risulta 2a + b + 6 = 0?

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2019
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*How many whole pairs (a,b) in [2018,2018] with 2a+b+6=0*

> (Points 6) For how many different pairs (a, b) of relative integers between - 2018 and 2018, extremes included, is 2a + b + 6 = 0?

**Answer:** 2019
[[src_kangourou_2018_junior_semif__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_funzionali,topic_combinatoria,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo valore tra quelli assegnati ai punti a media*

> (Punti 6) A ogni punto P del piano a coordinate intere è assegnato un numero intero non nega­
> tivo che risulta essere la media dei quattro numeri assegnati ai quattro punti che distano 1 da P. Al 
> punto (2018, 2018) è assegnato il numero 2018.
> Qual è il più piccolo dei valori che compaiono fra quelli assegnati al variare di P?

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2018
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum value among those assigned to mean points*

> (Points 6) Each point P of the whole-coordinate plane is assigned a nonnegative integer which is the average of the four numbers assigned to the four points 1 to P. The item (2018, 2018) is assigned the number 2018. What is the smallest of the values that appear among those assigned to the P variable?

**Answer:** 2018
[[src_kangourou_2018_junior_semif__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_combinatoria,topic_aritmetica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri tra 1 e 9999 con somma prime due cifre = altre due*

> (Punti 7) Quanti numeri interi compresi fra 0001 e 9999 incluso sono tali che la somma delle pri­
> me due cifre coincide con la somma delle altre due?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 669
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*Numbers between 1 and 9999 with the sum of the first two digits = two more*

> (Points 7) How many integers between 0001 and 9999 inclusive are such that the sum of the first two digits coincides with the sum of the other two?

**Answer:** 669
[[src_kangourou_2018_junior_semif__Q16]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Valori m e n con 46 nuovi tipi di biglietti*

> (Punti 7) Una compagnia ferroviaria gestisce una linea con m stazioni. Ne fa poi costruire altre n, 
> con n > 1. Per ogni nuova tratta viene stampato un nuovo tipo di biglietto (attenzione: la tratta dalla 
> stazione A alla stazione B è diversa da quella da B a A). Se in totale vengono stampati 46 nuovi tipi 
> di biglietti, quanto valgono, nell’ordine, m e n?  (Ad esempio, se fosse m = 25 e n = 4, scrivi come risposta 
> 2504.)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1102
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*Values m and n with 46 new ticket types*

> (Points 7) A railway company operates a line with m stations. He then builds other n's, with n > 1. For each new route a new type of ticket is printed (note: the route from station A to station B is different from that from B to A). If a total of 46 new types of tickets are printed, how much are they worth, in order, m and n? (For example, if m = 25 and n = 4, write 2504.)

**Answer:** 1102
[[src_kangourou_2018_junior_semif__Q17]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_aritmetica,topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante terne ordinate (a,b,c) interi con a*b*c=45000*

> (Punti 8) Per quante terne ordinate (a, b, c) di numeri interi relativi accade che 
> a × b × c = 45.000? 
> 
> 1296
> 0500
> 0005
> 9000
> 2019
> 2018
> 0669
> 1102
> 3600

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 3600
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*How many whole ternes (a,b,c) are ordered with a*b*c=45000*

> (Points 8) For how many ordered sets (a, b, c) of relative integers does a × b × c = 45,000 occur?
> 
> 1296 0500 0005 9000 2019 2018 0669 1102 3600

**Answer:** 3600
[[src_kangourou_2018_junior_semif__Q18]]
