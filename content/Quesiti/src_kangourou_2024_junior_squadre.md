---
title: Kangourou Squadre 2024 Junior Finale 1
tipo: gara
competition: Kangourou Squadre 2024 Junior Finale 1
family: kangourou
year: '2024'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2024_junior_squadre"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza tagli quadrato max da semicerchio*

> I tagli 
> Da un semicerchio di carta di raggio 100√5 si vuole ritagliare il quadrato più grande possibile. Qual 
> è la lunghezza complessiva dei tagli che permettono di raggiungere lo scopo?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0600
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*Length of square cuts max from semicircle*

> The cuts From a semicircle of paper with a radius of 100√5 you want to cut the largest square possible. What is the overall length of the cuts to achieve the goal?

**Answer:** 0600
[[src_kangourou_2024_junior_squadre__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_funzionali,topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma coefficienti polinomio dato funzionale*

> Un polinomio 
> Un polinomio P è tale che P(x + 2020) = 2024 – 2x + 2P(2024) per ogni valore reale di x. Qual è la 
> somma dei coefficienti di P?

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 2030
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*sum of coefficients of the given functional polynomial*

> A polynomial A polynomial P is such that P(x + 2020) = 2024  2x + 2P(2024) for every real value of x. What's the sum of the coefficients of P?

**Answer:** 2030
[[src_kangourou_2024_junior_squadre__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,method_grafi,skill_conteggio_sistematico"></span>

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
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1458
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*How many routes are closed without repeating segments*

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

> The paths. Look at the figure. Starting from point A, you want to return to A by traveling only segments present in the figure, not necessarily all, but without traveling more than once any segment (although you can go more than once for some end of the segments). How many different routes are possible?

**Answer:** 1458
[[src_kangourou_2024_junior_squadre__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma due numeri 3 cifre, concat 7 volte prodotto*

> Due numeri interi 
> Due numeri interi positivi di tre cifre ciascuno vengono scritti uno consecutivamente all’altro in un 
> certo ordine: si ottiene così un numero di sei cifre che risulta essere 7 volte il prodotto dei due numeri 
> di partenza. Quanto vale la somma di questi due numeri?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0286
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*Two three-digit numbers summed up, seven times the sum of the numbers *

> Two integers Two positive integers of three digits each are written consecutively to each other in a certain order: this gives a six-digit number that turns out to be 7 times the product of the two starting numbers. How much is the sum of these two numbers?

**Answer:** 0286
[[src_kangourou_2024_junior_squadre__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,topic_aritmetica,method_estremalita,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Differenza aree triangoli rettangoli cateto 18*

> Triangoli rettangoli  
> Considerate tutti i triangoli rettangoli il cui cateto minore misura 18 cm e gli altri lati misurano un 
> numero intero di centimetri. Considerate le aree (in centimetri quadrati) di questi triangoli: qual è la 
> differenza, in centimetri quadrati, tra la maggiore e la minore di esse?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** 0504
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*Differential area of rectangular triangles rectangle 18*

> Rectangular triangles Consider all rectangular triangles whose smallest diameter is 18 cm and the other sides are an integer of centimetres. Consider the areas (in square centimeters) of these triangles: what is the difference, in square centimeters, between the largest and the smallest of them?

**Answer:** 0504
[[src_kangourou_2024_junior_squadre__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Radice di N, quadrato perfetto da M con +3 cifre*

> I quadrati  
> L’intero M è un quadrato perfetto e ha quattro cifre, tutte inferiori a 7. Aggiungendo 3 a ogni cifra di 
> M si ottiene un altro quadrato perfetto N. Quanto vale la radice quadrata (positiva) di N?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0067
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*Root of N, perfect square from M with +3 digits*

> The whole square M is a perfect square and has four digits, all less than 7. Adding 3 to every digit of M gives you another perfect square N. What's the square root of N?

**Answer:** 0067
[[src_kangourou_2024_junior_squadre__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_funzionali,topic_algebra,method_backward,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Parte intera valore assoluto minima soluzione f^4*

> La parte intera 
> Per ogni numero reale x si ponga f(x) = x2 + 64x + 992. Sia α la minore delle soluzioni dell’equazione 
> f(f(f(f(x)))) = 0: determinate la parte intera del valore assoluto di α. 
>  
>  
> A

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0033
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum solution f^4 *

> The whole part for every real number x put f(x) = x2 + 64x + 992. Whether α is the least of the solutions of the equation f(f(f(x)))) = 0: determine the whole part of the absolute value of α.
>  
>  
> A

**Answer:** 0033
[[src_kangourou_2024_junior_squadre__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,topic_disuguaglianze,method_estremalita,skill_astrazione"></span>

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
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 3126
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum N(S) of the hundreds, average of 100*

> The hundreds Let's say a finite set S of positive integers is a hundred if  its elements are all distinct from each other,  it contains the number 2,024,  the average of its numbers is 100. For each of these sets of S, we denote with N(S) the largest number of S. When S varies between hundreds, which is the largest of the numbers N(S)? (If you think there are hundreds of sets of S with N(S) arbitrarily large, answer 9999.)

**Answer:** 3126
[[src_kangourou_2024_junior_squadre__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_combinatoria,method_ricorsione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri 12 cifre 1,2,3 con adiacenti diff 1*

> Solo 1, 2, 3  
> Quanti sono i numeri interi positivi di 12 cifre, le cui cifre siano solo 1 e/o 2 e/o 3 e tali che due cifre 
> adiacenti differiscano comunque di 1?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0128
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*Numbers 12 digits 1,2,3 with adjacent differences 1*

> Only 1, 2, 3 What are the positive integers of 12 digits, whose digits are only 1 and/or 2 and/or 3 and such that two adjacent digits differ by 1 anyway?

**Answer:** 0128
[[src_kangourou_2024_junior_squadre__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_geometria_solida,topic_aritmetica,method_disuguaglianze,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area minima parallelepipedo da 500 cubi*

> Parallelepipedo  
> Un parallelepipedo rettangolo è stato costruito accostando 500 cubi di lato 1, in modo che l’area della 
> sua superficie totale sia la più piccola possibile. Quanto vale questa area?

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** 0400
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum parallel-piped area of 500 cubes*

> Parallelpipedo A rectangular parallelpipedo was constructed by approaching 500 cubes on side 1, so that the area of its total surface is as small as possible. How much is this area worth?

**Answer:** 0400
[[src_kangourou_2024_junior_squadre__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_algebra,topic_combinatoria,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma valori numero maggiore date somme coppie*

> Quattro numeri reali  
> Con quattro numeri reali distinti si possono formare sei coppie di numeri. Sapendo che, al variare di 
> tali coppie, le somme dei due numeri che le compongono sono tutte diverse fra loro e che le quattro 
> somme più piccole sono 2, 4, 6, 8, calcolate la somma di tutti i possibili valori del numero maggiore.

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0015
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*Summary values greater than given pair sums*

> Four real numbers With four distinct real numbers you can form six pairs of numbers. Knowing that, when these pairs vary, the sums of the two numbers that make them up are all different from each other and that the four smallest sums are 2, 4, 6, 8, we calculate the sum of all possible values of the greatest number.

**Answer:** 0015
[[src_kangourou_2024_junior_squadre__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_funzionali,topic_algebra,method_fattorizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Risultato 2024*24 con operazione binaria*

> Operazione binaria  
> Di un’operazione binaria * definita tra numeri reali si sa che 
> x * x = 0 
> e 
>  x * (y * z) = (x * y) + z 
> comunque siano assegnati tre numeri x, y, z. Qual è il risultato di 2.024 * 24?

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 2000
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


The following table shows the results of the calculations:

> Binary operation Of a * binary operation defined between real numbers it is known that x * x = 0 and x * (y * z) = (x * y) + z are however assigned three numbers x, y, z. What is the result of 2.024 * 24?

**Answer:** 2000
[[src_kangourou_2024_junior_squadre__Q12]]



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


<span class="qlang-split" data-lang="en"></span>


*Minimum sum squared of two integers 29*

> The sum of two nonnegative integers is 29 and the sum of their squares is the smallest possible. How much is this?

**Answer:** 0421
[[src_kangourou_2024_junior_squadre__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Estrazioni ordinate per togliere 12 biglie*

> Le biglie  
> Un sacchetto contiene 12 biglie indistinguibili. Gaetano le vuole levare tutte, non necessariamente 
> una alla volta, ma talora prendendone anche più di una per volta (ad esempio potrebbe levarne tre 
> insieme, poi una, poi ancora una, poi sette, oppure anche tutte dodici in un colpo solo). Tenendo conto 
> dell’ordine in cui Gaetano può accorpare le biglie estraendole, quante sono le estrazioni possibili? 
> Attenzione: l’ordine è importante, ad esempio (3, 1, 1, 7) è un’estrazione diversa da (1, 3, 1, 7).

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2048
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*Extractions ordered to remove 12 bags*

> One bag contains 12 indistinguishable bags. Gaetano wants to take them all, not necessarily one at a time, but sometimes taking more than one at a time (e.g. he could take three together, then one, then again one, then seven, or even all twelve in a single shot). Taking into account the order in which Gaetano can incorporate the grains by extracting them, how many extractions are possible? Note: the order is important, e.g. (3, 1, 1, 7) is an extraction different from (1, 3, 1, 7).

**Answer:** 2048
[[src_kangourou_2024_junior_squadre__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_aritmetica,method_estremalita,skill_casework_accurato"></span>

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
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0781
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum number of 3 digits with distinct conditions and factors*

> Three digits Of a positive integer we know that it has three digits, that the sum of the digits of the units with that of the hundreds coincides with the number of the tens, that its factorization at first sees factors all different from each other and that it is the largest compatible with these constraints. What's the number?
> 
> Kangourou of Mathematics 2024 Junior Cup to teams Final 1 Cervia, 5 May 2024
>  
> Securities and replies

**Answer:** 0781
[[src_kangourou_2024_junior_squadre__Q15]]
