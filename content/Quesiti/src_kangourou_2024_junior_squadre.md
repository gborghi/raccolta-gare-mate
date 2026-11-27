---
title: Kangourou Squadre 2024 Junior Finale 1
tipo: gara
competition: Kangourou Squadre 2024 Junior Finale 1
family: kangourou
year: '2024'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2024_junior_squadre"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza tagli quadrato max da semicerchio*

> I tagli 
> Da un semicerchio di carta di raggio 100√5 si vuole ritagliare il quadrato più grande possibile. Qual 
> è la lunghezza complessiva dei tagli che permettono di raggiungere lo scopo?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Geometria]]
**Risposta:** 0600
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum square-cut length from a semi-circle*

> Cuts: From a semicircular piece of paper with radius 100√5, you want to cut out the largest possible square. What is the total length of the cuts needed to achieve this?


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_funzionali,topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma coefficienti polinomio dato funzionale*

> Un polinomio 
> Un polinomio P è tale che P(x + 2020) = 2024 – 2x + 2P(2024) per ogni valore reale di x. Qual è la 
> somma dei coefficienti di P?

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 2030
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*Sum of coefficients of the given functional polynomial*

> A polynomial. A polynomial P satisfies P(x + 2020) = 2024 – 2x + 2P(2024) for every real value of x. What is the sum of the coefficients of P?


**Topic:** [[topic_funzionali|Functional equations / sequences]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,method_grafi,method_casework,skill_conteggio_sistematico,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti percorsi chiusi senza ripetere segmenti*

![[src_kangourou_2024_junior_squadre__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Regular hexagon, pointy-top: vertices at unit radius
  % V1=(0,1), V2=(-0.866,0.5), V3=(-0.866,-0.5), V4=(0,-1), V5=(0.866,-0.5), V6=(0.866,0.5)
  \draw (0,1) -- (-0.866,0.5) -- (-0.866,-0.5) -- (0,-1) -- (0.866,-0.5) -- (0.866,0.5) -- (0,1);
  % Arrow indicators at midpoints of each edge (directed, all clockwise)
  \draw[->] (-0.413,0.76) -- (-0.453,0.74);
  \draw[->] (-0.866,0.02) -- (-0.866,-0.02);
  \draw[->] (-0.453,-0.74) -- (-0.413,-0.76);
  \draw[->] (0.413,-0.76) -- (0.453,-0.74);
  \draw[->] (0.866,-0.02) -- (0.866,0.02);
  \draw[->] (0.453,0.74) -- (0.413,0.76);
  % Point A at midpoint of top-right edge (between V6=(0.866,0.5) and V1=(0,1))
  \fill (0.433,0.75) circle (1.5pt) node[above] {$A$};
\end{tikzpicture}
\end{document}
```

> I percorsi  
> Osservate la figura. Partendo dal punto A si vuole ritornare in A percorrendo 
> solo segmenti presenti in figura, non necessariamente tutti, ma senza 
> percorrere più di una volta alcun segmento (pur potendo passare più di una 
> volta per qualche estremo dei segmenti). Quanti sono i diversi percorsi 
> possibili?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1458
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*How many paths are closed without repeating segments?*

![[src_kangourou_2024_junior_squadre__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Regular hexagon, pointy-top: vertices at unit radius
  % V1=(0,1), V2=(-0.866,0.5), V3=(-0.866,-0.5), V4=(0,-1), V5=(0.866,-0.5), V6=(0.866,0.5)
  \draw (0,1) -- (-0.866,0.5) -- (-0.866,-0.5) -- (0,-1) -- (0.866,-0.5) -- (0.866,0.5) -- (0,1);
  % Arrow indicators at midpoints of each edge (directed, all clockwise)
  \draw[->] (-0.413,0.76) -- (-0.453,0.74);
  \draw[->] (-0.866,0.02) -- (-0.866,-0.02);
  \draw[->] (-0.453,-0.74) -- (-0.413,-0.76);
  \draw[->] (0.413,-0.76) -- (0.453,-0.74);
  \draw[->] (0.866,-0.02) -- (0.866,0.02);
  \draw[->] (0.453,0.74) -- (0.413,0.76);
  % Point A at midpoint of top-right edge (between V6=(0.866,0.5) and V1=(0,1))
  \fill (0.433,0.75) circle (1.5pt) node[above] {$A$};
\end{tikzpicture}
\end{document}
```

> Paths Observe the figure. Starting from point A, one wants to return to A by following only the line segments shown in the figure—not necessarily all of them—but without traversing any segment more than once (although one may pass through some endpoint of the segments more than once). How many different possible paths are there?


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_grafi|Graph theory]], [[method_casework|Case analysis]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,topic_algebra,method_fattorizzazione,method_casework,skill_manipolazione_algebrica,skill_modellizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma due numeri 3 cifre, concat 7 volte prodotto*

> Due numeri interi 
> Due numeri interi positivi di tre cifre ciascuno vengono scritti uno consecutivamente all’altro in un 
> certo ordine: si ottiene così un numero di sei cifre che risulta essere 7 volte il prodotto dei due numeri 
> di partenza. Quanto vale la somma di questi due numeri?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 0286
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*Add two 3-digit numbers; concatenate the product 7 times*

> Two integers Two positive three-digit integers are written one immediately after the other in a certain order; this yields a six-digit number that is 7 times the product of the two starting numbers. What is the sum of these two numbers?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_modellizzazione|Modelling / translating the text]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,topic_aritmetica,method_estremalita,method_fattorizzazione,method_casework,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Differenza aree triangoli rettangoli cateto 18*

> Triangoli rettangoli  
> Considerate tutti i triangoli rettangoli il cui cateto minore misura 18 cm e gli altri lati misurano un 
> numero intero di centimetri. Considerate le aree (in centimetri quadrati) di questi triangoli: qual è la 
> differenza, in centimetri quadrati, tra la maggiore e la minore di esse?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0504
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*Difference of areas of right-angled triangles, leg 18*

> Right-angled triangles Consider all right-angled triangles whose shorter leg measures 18 cm and whose other sides measure a whole number of centimetres. Consider the areas (in square centimetres) of these triangles: what is the difference, in square centimetres, between the largest and the smallest of these areas?


**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_casework|Case analysis]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,method_fattorizzazione,method_casework,skill_casework_accurato,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Radice di N, quadrato perfetto da M con +3 cifre*

> I quadrati  
> L’intero M è un quadrato perfetto e ha quattro cifre, tutte inferiori a 7. Aggiungendo 3 a ogni cifra di 
> M si ottiene un altro quadrato perfetto N. Quanto vale la radice quadrata (positiva) di N?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0067
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*N's root, a perfect square from M with +3 digits*

> Squares The whole number M is a perfect square and has four digits, all of which are less than 7. Adding 3 to each digit of M yields another perfect square, N. What is the positive square root of N?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_funzionali,topic_algebra,method_backward,method_fattorizzazione,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Parte intera valore assoluto minima soluzione f^4*

> La parte intera 
> Per ogni numero reale x si ponga f(x) = x2 + 64x + 992. Sia α la minore delle soluzioni dell’equazione 
> f(f(f(f(x)))) = 0: determinate la parte intera del valore assoluto di α. 
>  
>  
> A

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Ragionamento all'indietro]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0033
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*Whole part absolute minimum value solution f^4*

> Integer part For every real number x, let f(x) = x² + 64x + 992. Let α be the smallest solution of the equation f(f(f(f(x)))) = 0: determine the integer part of the absolute value of α.
>
>
> A


**Topic:** [[topic_funzionali|Functional equations / sequences]], [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Working backwards]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,topic_disuguaglianze,method_estremalita,skill_astrazione,skill_manipolazione_algebrica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo N(S) tra i centini, media 100*

> I centini  
> Diciamo che un insieme finito S di numeri interi positivi è un centino se 
>  i suoi elementi sono tutti distinti fra loro, 
>  contiene il numero 2.024, 
>  la media dei suoi numeri è 100.  
> Per ognuno di tali insiemi S, denotiamo con N(S) il più grande dei numeri di S. Al variare di S fra i 
> centini, quale è il maggiore dei numeri N(S)? (Se ritenete che vi siano insiemi centini S con N(S) 
> arbitrariamente grande, rispondete 9999.)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 3126
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum N(S) among the centini, average 100*

> Centini Let us say that a finite set S of positive integers is a centino if - all its elements are distinct from one another, - it contains the number 2,024, - the mean of its numbers is 100. For each such set S, let N(S) denote the largest number in S. As S varies among the centini, what is the largest possible value of N(S)? (If you believe there are centino sets S for which N(S) can be arbitrarily large, answer 9999.)


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_combinatoria,method_ricorsione,skill_conteggio_sistematico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri 12 cifre 1,2,3 con adiacenti diff 1*

> Solo 1, 2, 3  
> Quanti sono i numeri interi positivi di 12 cifre, le cui cifre siano solo 1 e/o 2 e/o 3 e tali che due cifre 
> adiacenti differiscano comunque di 1?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0128
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*Numbers with 12 digits, digits 1, 2, 3, with adjacent difference 1*

> Solo 1, 2, 3 How many positive 12-digit integers are there whose digits are only 1 and/or 2 and/or 3 and in which any two adjacent digits differ by 1?


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_ricorsione|Recursion]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_geometria_solida,topic_aritmetica,method_disuguaglianze,method_fattorizzazione,method_estremalita,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Area minima parallelepipedo da 500 cubi*

> Parallelepipedo  
> Un parallelepipedo rettangolo è stato costruito accostando 500 cubi di lato 1, in modo che l’area della 
> sua superficie totale sia la più piccola possibile. Quanto vale questa area?

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0400
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum parallelepipedal area for 500 cubic units*

> Parallelepiped: A right rectangular parallelepiped has been constructed by joining 500 cubes with an edge length of 1, in such a way that its total surface area is as small as possible. What is the value of this area?


**Topic:** [[topic_geometria_solida|Solid geometry]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]], [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_algebra,topic_combinatoria,method_casework,skill_casework_accurato,skill_manipolazione_algebrica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma valori numero maggiore date somme coppie*

> Quattro numeri reali  
> Con quattro numeri reali distinti si possono formare sei coppie di numeri. Sapendo che, al variare di 
> tali coppie, le somme dei due numeri che le compongono sono tutte diverse fra loro e che le quattro 
> somme più piccole sono 2, 4, 6, 8, calcolate la somma di tutti i possibili valori del numero maggiore.

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0015
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*Sum of values: larger number, sums of pairs given*

> Four real numbers With four distinct real numbers, six pairs of numbers can be formed. Given that, as these pairs vary, the sums of the two numbers in each pair are all different from one another, and that the four smallest sums are 2, 4, 6, and 8, calculate the sum of all possible values of the larger number.


**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_funzionali,topic_algebra,method_fattorizzazione,skill_astrazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Risultato 2024∗24 con operazione binaria*

> Operazione binaria  
> Di un’operazione binaria * definita tra numeri reali si sa che 
> x * x = 0 
> e 
>  x * (y * z) = (x * y) + z 
> comunque siano assegnati tre numeri x, y, z. Qual è il risultato di 2.024 * 24?

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 2000
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*2024*24 result with binary operation*

> Binary operation For a binary operation * defined on real numbers, it is known that x * x = 0 and x * (y * z) = (x * y) + z, regardless of how three numbers x, y, z are assigned. What is the result of 2.024 * 24?


**Topic:** [[topic_funzionali|Functional equations / sequences]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_algebra,topic_disuguaglianze,method_disuguaglianze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minima somma quadrati di due interi somma 29*

> A somma 29  
> La somma di due numeri interi non negativi è 29 e la somma dei loro quadrati è la più piccola 
> possibile. Quanto vale questa somma?

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0421
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*The minimum sum of the squares of two integers whose sum is 29*

> Sum 29: The sum of two non-negative integers is 29, and the sum of their squares is as small as possible. What is this sum?

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_combinatoria,method_conteggio,method_bigezione,skill_conteggio_sistematico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Estrazioni ordinate per togliere 12 biglie*

> Le biglie  
> Un sacchetto contiene 12 biglie indistinguibili. Gaetano le vuole levare tutte, non necessariamente 
> una alla volta, ma talora prendendone anche più di una per volta (ad esempio potrebbe levarne tre 
> insieme, poi una, poi ancora una, poi sette, oppure anche tutte dodici in un colpo solo). Tenendo conto 
> dell’ordine in cui Gaetano può accorpare le biglie estraendole, quante sono le estrazioni possibili? 
> Attenzione: l’ordine è importante, ad esempio (3, 1, 1, 7) è un’estrazione diversa da (1, 3, 1, 7).

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_bigezione|Bigezione / corrispondenza]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2048
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*Draws ordered to remove 12 marbles*

> The Marbles A bag contains 12 indistinguishable marbles. Gaetano wants to remove them all—not necessarily one at a time, but sometimes he may take more than one at a time (for example, he could remove three together, then one, then another one, then seven, or even all twelve at once). Taking into account the order in which Gaetano can group the marbles when removing them, how many possible removals are there? Note: order matters—for example, (3, 1, 1, 7) is a different removal from (1, 3, 1, 7).


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_bigezione|Bijection / correspondence]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_aritmetica,method_estremalita,method_fattorizzazione,skill_casework_accurato,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo numero 3 cifre con condizioni e fattori distinti*

> Tre cifre  
> Di un numero intero positivo si sa che ha tre cifre, che la somma delle cifre delle unità con quella 
> delle centinaia coincide con la cifra delle decine, che la sua fattorizzazione in primi vede fattori tutti 
> diversi fra loro e che è il più grande compatibile con questi vincoli. Che numero è?  
> 
> Kangourou della Matematica 2024
> Coppa Junior a squadre
> Finale 1
> Cervia, 5 maggio 2024
>  
> Titoli e risposte

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0781
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum number with 3 digits, with distinct conditions and factors*

> Three digits: It is known about a positive integer that it has three digits, that the sum of the units digit and the hundreds digit equals the tens digit, that in its prime factorization all the factors are distinct from one another, and that it is the largest number consistent with these constraints. What number is it?
>
> Kangourou de Mathématiques 2024 Junior Team Cup Final 1 Cervia, 5 May 2024
>
> Titles and Answers


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
