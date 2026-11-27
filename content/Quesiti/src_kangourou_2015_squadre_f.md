---
title: Kangourou Coppa Squadre 2015 Finale
tipo: gara
competition: Kangourou Coppa Squadre 2015 Finale
family: kangourou
year: '2015'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2015_squadre_f"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,topic_aritmetica,method_fattorizzazione,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Percentuale di cui B supera A*

> La percentuale              
>         Un numero A è superato del 25% (rispetto a se stesso) da un numero B. Di quale percentuale il 
> numero B (rispetto a se stesso) supera il numero A?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 20
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Percentage by which B exceeds A*

> Percentage: Number A is exceeded by 25% (relative to itself) by number B. By what percentage does number B (relative to itself) exceed number A?


**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_conteggio,method_casi_conteggio,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Multipli di 9 con cinque cifre dispari (>=4 diverse)*

> Cinque cifre dispari            
>        Quanti sono i multipli (interi positivi) di 9 la cui scrittura consiste di cinque cifre dispari di cui 
> almeno quattro tutte diverse tra loro?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]], [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 240
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Multiples of 9 with five odd digits (>=4 distinct)*

> Five Odd Digits: How many (positive integer) multiples of 9 are there whose representation consists of five odd digits, at least four of which are all different from one another?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_conteggio|Combinatorial counting]], [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,topic_trigonometria,method_trigonometria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Angolo AQB nel quadrato con due quarti di circonferenza*

![[src_kangourou_2015_squadre_f__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,2);
  \coordinate (B) at (0,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (2,2);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) arc[start angle=180, end angle=270, radius=2];
  \draw (B) arc[start angle=180, end angle=90, radius=2];
  \coordinate (Q) at (1, {2-sqrt(3)});
  \fill (Q) circle (1pt);
  \node[above left] at (A) {A};
  \node[below left] at (B) {B};
  \node[below right] at (C) {C};
  \node[above right] at (D) {D};
  \node[right] at (Q) {Q};
  \node[left] at ({0.2},{2-sqrt(3)}) {?};
\end{tikzpicture}
\end{document}
```

> All'interno di un quadrato     
>         Osservate la figura. ABCD è un quadrato all'interno del quale sono 
> tracciati il quarto di circonferenza con centro in D passante per A e C e il 
> quarto di circonferenza con centro in C passante per B e D. I due quarti di 
> circonferenza si intersecano in Q. Qual è la misura in gradi dell'angolo 
> AQB?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 150
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Angle AQB in the square with two quarter-circles*

![[src_kangourou_2015_squadre_f__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,2);
  \coordinate (B) at (0,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (2,2);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) arc[start angle=180, end angle=270, radius=2];
  \draw (B) arc[start angle=180, end angle=90, radius=2];
  \coordinate (Q) at (1, {2-sqrt(3)});
  \fill (Q) circle (1pt);
  \node[above left] at (A) {A};
  \node[below left] at (B) {B};
  \node[below right] at (C) {C};
  \node[above right] at (D) {D};
  \node[right] at (Q) {Q};
  \node[left] at ({0.2},{2-sqrt(3)}) {?};
\end{tikzpicture}
\end{document}
```

> Inside a square Observe the figure. ABCD is a square within which the quarter circle centered at D and passing through A and C, and the quarter circle centered at C and passing through B and D, are drawn. The two quarter circles intersect at Q. What is the measure, in degrees, of angle AQB?


**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_trigonometria|Trigonometry]]
**Metodo:** [[method_trigonometria|Trigonometric techniques]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,topic_aritmetica,method_congruenze,skill_modellizzazione,skill_manipolazione_algebrica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero adulti dato eta media gruppi e totale*

> Giovani e adulti            
>        L'età media di un gruppo di amici "giovani" è 25 anni; quella di un gruppo di amici "adulti" è 
> 45 anni. Ognuno dei due gruppi è composto da meno di 20 persone. Se i due gruppi si riuniscono, 
> l'età media è di 36 anni. Quanti sono i componenti del gruppo di "adulti"?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 11
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Given number of adults, average number of groups and total*

> Young people and adults: The average age of a group of "young" friends is 25 years; that of a group of "adult" friends is 45 years. Each of the two groups has fewer than 20 people. If the two groups get together, the average age is 36 years. How many members are in the "adult" group?


**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_casework,method_congruenze,skill_casework_accurato,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Piu piccolo numero fortunato (somma cifre div 17)*

> Un numero fortunato      
>        Alcuni credono che il 17 porti fortuna. Allora diciamo che un numero intero positivo è 
> fortunato se la somma delle sua cifre è divisibile per 17 e, quando gli viene sommato 1, la somma 
> delle cifre del nuovo numero ottenuto è ancora divisibile per 17. Qual è il più piccolo numero 
> fortunato?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 8899
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Smaller lucky number (sum of digits divisible by 17)*

> A Lucky Number Some people believe that 17 brings good luck. So let's say that a positive integer is lucky if the sum of its digits is divisible by 17 and, when 1 is added to it, the sum of the digits of the new number obtained is still divisible by 17. What is the smallest lucky number?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,method_congruenze,method_fattorizzazione,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo n con resti decrescenti dividendo per 10..2*

> Resti e divisioni                              
>         Qual è il più piccolo numero intero positivo che diviso per 10 dà resto 9, diviso per 9 dà resto 
> 8, diviso per 8 dà resto 7 e così via fino a: "diviso per 2 dà resto 1"?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 2519
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum n with decreasing remainders when dividing by 10..2*

> Remainders and divisions: What is the smallest positive integer that, when divided by 10, leaves a remainder of 9; when divided by 9, leaves a remainder of 8; when divided by 8, leaves a remainder of 7; and so on, all the way to "when divided by 2, leaves a remainder of 1"?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_combinatoria,topic_aritmetica,method_casework,method_estremalita,method_congruenze,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma minima griglia 3x3 con sei somme primi diversi*

> La griglia 3 × 3                        
>         In ogni cella di una griglia 3 × 3  è inserito uno e un solo numero intero positivo in modo che i 
> sei numeri ottenibili sommando quelli inseriti in ogni singola riga e quelli inseriti in ogni singola 
> colonna siano sei numeri primi tutti diversi fra loro. I 9 numeri inseriti nella griglia, invece, non 
> sono necessariamente tutti diversi fra loro. Qual è il valore minimo possibile per la somma di questi 
> 9 numeri?    
>  
>  
> A
> D
> B
> C
> Q
> ?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 29
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum sum of a 3x3 grid with six distinct prime sums*

> The 3 × 3 Grid In each cell of a 3 × 3 grid, exactly one positive integer is placed so that the six numbers obtained by summing the numbers placed in each individual row and the numbers placed in each individual column are six distinct prime numbers. The 9 numbers placed in the grid, however, are not necessarily all distinct from one another. What is the minimum possible value of the sum of these 9 numbers?
>
>
> A D B C Q ?


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]], [[method_estremalita|Extremal principle]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,topic_combinatoria,method_casi_conteggio,method_congruenze,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo numero di somme dispari da prodotti di primi*

> Daniela e i numeri primi              
>       Daniela sceglie 20 numeri interi primi a suo piacere, tutti diversi fra loro. Poi li moltiplica a due 
> a due in tutti i modi possibili (a meno dell'ordine: ad esempio il prodotto 3 × 5 e il prodotto 5 × 3 
> corrispondono ad un solo modo; non moltiplica mai un numero per se stesso). Infine somma a due a 
> due in tutti i modi possibili i prodotti così ottenuti. Qual è il massimo numero di somme dispari che 
> potrebbe ottenere?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casi_conteggio|Conteggio per casi]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 3249
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum number of odd sums that are products of primes*

> Daniela and Prime Numbers Daniela chooses 20 integers that are prime to each other, all of them distinct, as she pleases. Then she multiplies them in pairs in all possible ways (up to order: for example, the product 3 × 5 and the product 5 × 3 correspond to a single way; she never multiplies a number by itself). Finally, she adds the products thus obtained in pairs in all possible ways. What is the maximum number of odd sums she could obtain?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_casi_conteggio|Counting by cases]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di colorare segmenti con un colore per triangolo*

![[src_kangourou_2015_squadre_f__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw (0,0) -- (4,0) -- (3.5,1) -- (0.5,1) -- cycle;
  \draw (0.5,1) -- (1,0) -- (1.5,1) -- (2,0) -- (2.5,1) -- (3,0) -- (3.5,1);
\end{tikzpicture}
\end{document}
```

> Tre colori                       
>        Ogni segmento di quelli in figura va dipinto di rosso, di verde o di blu in 
> modo che ogni triangolo abbia un lato rosso, un lato verde o un lato blu. In 
> quanti modi diversi può essere effettuata questa operazione?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 96
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Ways of coloring segments with one color per triangle*

![[src_kangourou_2015_squadre_f__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw (0,0) -- (4,0) -- (3.5,1) -- (0.5,1) -- cycle;
  \draw (0.5,1) -- (1,0) -- (1.5,1) -- (2,0) -- (2.5,1) -- (3,0) -- (3.5,1);
\end{tikzpicture}
\end{document}
```

> Three Colors Each of the segments shown in the figure must be painted red, green, or blue so that each triangle has one red side, one green side, or one blue side. In how many different ways can this be done?

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_combinatoria,method_conteggio,method_simmetria,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di comporre tre squadre da 6 coppie di gemelli*

> Una strana classe         
>         Una strana classe è composta da 6 coppie di gemelli. I 12 studenti vanno ripartiti in tre squadre 
> di quattro studenti ciascuna, che si sfideranno in una gara, in modo che nessuna squadra abbia tra i 
> suoi componenti sia uno studente, sia il suo gemello. In quanti diversi modi si possono comporre le 
> tre squadre?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 960
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Ways of forming three teams of 6 pairs of twins each*

> A Strange Class A strange class consists of 6 pairs of twins. The 12 students must be divided into three teams of four students each, and the teams will compete in a contest in such a way that no team includes both a student and that student's twin. In how many different ways can the three teams be formed?


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_algebra,topic_aritmetica,method_estremalita,method_fattorizzazione,method_casework,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quattro cifre di Cristina con differenza prodotti 1000*

> Le cifre di Cristina      
>        Fra le cifre da 1 a 9 Cristina ne sceglie quattro tutte diverse fra loro. Le raggruppa poi a coppie 
> e ordina le due coppie così ottenute, in modo da formare due numeri interi di due cifre dei quali 
> calcola il prodotto. Dopo avere effettuato questa operazione in tutti i modi possibili, si accorge che 
> la differenza fra il maggiore e il minore dei prodotti ottenuti è esattamente 1000. Scrivete in ordine 
> crescente le quattro cifre scelte da Cristina.

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1234
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Cristina's four-digit number with a product difference of 1000*

> Cristina's Digits Among the digits from 1 to 9, Cristina chooses four digits, all different from one another. She then groups them into pairs and orders the two pairs thus obtained so as to form two two-digit whole numbers, for which she calculates the product. After performing this operation in all possible ways, she realizes that the difference between the largest and the smallest of the products obtained is exactly 1000. Write the four digits chosen by Cristina in ascending order.


**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_algebra,method_fattorizzazione,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Velocita per arrivare in orario tra ritardo e anticipo*

> In perfetto orario      
>        A Franco piace muoversi in bicicletta, anche se deve compiere lunghi tragitti. Partendo in un 
> dato istante e pedalando alla velocità di 20 km all'ora, arriverebbe ad un appuntamento con un'ora di 
> ritardo; partendo nello stesso istante e pedalando alla velocità di 30 km all'ora vi arriverebbe con 
> un'ora di anticipo. A quanti chilometri all'ora deve pedalare se, partendo in quell'istante, vuole 
> arrivare in perfetto orario?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 24
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Speed to arrive on time—between being late and being early*

> Right on time: Franco likes to get around by bicycle, even though he has to cover long distances. If he sets off at a given moment and pedals at a speed of 20 km/h, he would arrive at an appointment an hour late; if he sets off at the same moment and pedals at a speed of 30 km/h, he would arrive an hour early. At what speed in kilometers per hour must he pedal if, setting off at that moment, he wants to arrive right on time?


**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_geometria_solida,topic_combinatoria,method_conteggio,method_casi_conteggio,skill_conteggio_sistematico,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Terne di punti allineati tra 27 punti del cubo*

> Il cubo             
>         In un cubo vengono scelti 27 punti: tutti i vertici, i punti medi di ogni spigolo, i punti centrali 
> di ogni faccia e il punto centrale del cubo. Quante diverse terne di punti allineati si possono 
> individuare in questo insieme di 27 punti?

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 49
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Pairs of collinear points among 27 points of the cube*

> The Cube In a cube, 27 points are chosen: all the vertices, the midpoints of each edge, the centers of each face, and the center of the cube. How many distinct sets of three collinear points can be identified in this set of 27 points?


**Topic:** [[topic_geometria_solida|Solid geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_combinatoria,topic_aritmetica,method_casi_conteggio,method_conteggio,method_fattorizzazione,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti numeri 2015-sbilanciati di 7 cifre*

> ,umeri 2015-sbilanciati      
>         Un numero intero positivo di 7 cifre è detto 2015-sbilanciato se accade quanto segue: il 
> prodotto delle sue prime quattro cifre vale 20 e il prodotto delle sue ultime quattro cifre vale 15. 
> Quanti numeri 2015-sbilanciati esistono?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casi_conteggio|Conteggio per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 72
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*How many 7-digit 2015-unbalanced numbers?*

> 2015-unbalanced numbers: A positive integer with 7 digits is called 2015-unbalanced if the following holds: the product of its first four digits is 20, and the product of its last four digits is 15. How many 2015-unbalanced numbers exist?


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casi_conteggio|Counting by cases]], [[method_conteggio|Combinatorial counting]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_aritmetica,method_congruenze,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di formare un metro con barrette 9 e 12 cm*

> Un metro     
>        Avete a disposizione barrette lunghe 9 cm e barrette lunghe 12 cm, in quantità illimitata. 
> Allineandone alcune una dopo l'altra, senza sovrapposizioni neppure parziali, volete formare una 
> barra lunga esattamente un metro. Quante possibilità avete, se non tenete conto dell'ordine in cui le 
> barrette si susseguono?  
>      Quesiti e soluzioni

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/11h_SgvOFzLa5MkyUk9nA_Lj1BTGkSTzB/view)


<div class="qlang-split" data-lang="en"></div>


*Ways of forming a meter using 9-cm and 12-cm sticks*

> One meter You have at your disposal bars 9 cm long and bars 12 cm long, in unlimited quantities. By lining some of them up one after another, without any even partial overlap, you want to form a bar exactly one meter long. How many possibilities do you have if you do not take into account the order in which the bars follow one another? Questions and solutions

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
