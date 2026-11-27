---
title: Kangourou 2015 gara 19 marzo Junior
tipo: gara
competition: Kangourou 2015 gara 19 marzo Junior
family: kangourou
year: '2015'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2015_marzo_junior"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,skill_stima"></span>

<div class="qlang-switch" data-default="it"></div>


*quale risultato*

> Uno dei numeri seguenti è il risultato del prodotto 21.649 × 513.239. Quale?
> A) 11.111.111	
> 	
> B) 111.111.111	
> 	
> C) 1.111.111.111      
> D) 11.111.111.111     	
> E) 111.111.111.111

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_stima|Stima e approssimazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*what result*

> One of the following numbers is the result of the product 21,649 × 513,239. Which one?
> A) 11.111.111	
>
> B) 111.111.111	
>
> C) 1.111.111.111      
> D) 11.111.111.111     	
> E) 111.111.111.111

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Abilita:** [[skill_stima|Estimation and approximation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,method_colorazione,method_casework,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*quanti fazzoletti*

> Su una lunga corda in giardino sono stesi ad asciugare alcuni fazzoletti e alcune 
> paia di calze. Fra due fazzoletti c’è sempre almeno una calza e fra due calze c’è sem­
> pre almeno un fazzoletto. I capi stesi ad asciugare sono 29. Quanti sono i fazzoletti?
> A) 11	
> 	
> B) 13	
> 	
> C) 14	
> 	
> D) 15            
> E) I dati non sono sufficienti per rispondere

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*How many handkerchiefs?*

> On a long line in the garden, some handkerchiefs and some pairs of stockings are laid out to dry. Between any two handkerchiefs, there is always at least one stocking, and between any two stockings, there is always at least one handkerchief. There are 29 items laid out to dry. How many handkerchiefs are there?
> A) 11	
>
> B) 13	
>
> C) 14	
>
> D) 15            
> E) The data are insufficient to provide an answer


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_colorazione|Colouring / parity]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*valore*

![[src_kangourou_2015_marzo_junior__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Square side 2, shaded region bounded by semicircle and two quarter-circles
  % Semicircle: center (1,2), radius 1, sweeping downward from (0,2) to (2,2)
  % Quarter circle at bottom-left (0,0): radius 1, from (1,0) to (0,1)
  % Quarter circle at bottom-right (2,0): radius 1, from (2,1) to (1,0)
  \fill[gray!50] (0,2) arc[start angle=180, end angle=0, radius=1] -- cycle;
  \fill[gray!50] (1,0) arc[start angle=0, end angle=90, radius=1] -- cycle;
  \fill[gray!50] (2,1) arc[start angle=90, end angle=180, radius=1] -- cycle;
  \draw[thick] (0,0) rectangle (2,2);
  \draw[thick] (0,2) arc[start angle=180, end angle=0, radius=1];
  \draw[thick] (1,0) arc[start angle=0, end angle=90, radius=1];
  \draw[thick] (2,1) arc[start angle=90, end angle=180, radius=1];
\end{tikzpicture}
\end{document}
```

> La regione all’interno del quadrato che in figura appare om­
> breggiata è delimitata da una semicirconferenza e da due quarti 
> di circonferenza. Il quadrato ha area 1. Quanto vale l’area della 
> regione ombreggiata? 
> A) π/8	 	
> B) 1/2	
> 	
> C) π/2	 	
> D) 1/4	 	
> E) π/4

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*value*

![[src_kangourou_2015_marzo_junior__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Square side 2, shaded region bounded by semicircle and two quarter-circles
  % Semicircle: center (1,2), radius 1, sweeping downward from (0,2) to (2,2)
  % Quarter circle at bottom-left (0,0): radius 1, from (1,0) to (0,1)
  % Quarter circle at bottom-right (2,0): radius 1, from (2,1) to (1,0)
  \fill[gray!50] (0,2) arc[start angle=180, end angle=0, radius=1] -- cycle;
  \fill[gray!50] (1,0) arc[start angle=0, end angle=90, radius=1] -- cycle;
  \fill[gray!50] (2,1) arc[start angle=90, end angle=180, radius=1] -- cycle;
  \draw[thick] (0,0) rectangle (2,2);
  \draw[thick] (0,2) arc[start angle=180, end angle=0, radius=1];
  \draw[thick] (1,0) arc[start angle=0, end angle=90, radius=1];
  \draw[thick] (2,1) arc[start angle=90, end angle=180, radius=1];
\end{tikzpicture}
\end{document}
```

> The region inside the square that appears shaded in the figure is bounded by a semicircle and two quarter-circles. The square has an area of 1. What is the area of the shaded region?
> A) π/8	 	
> B) 1/2	
>
> C) π/2	 	
> D) 1/4	 	
> E) π/4

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*quanti in piu Anna*

> Anna, Betta e Cinzia hanno comprato una scatola che contiene 30 biscotti: per pa­
> garla, Anna ha fornito 80 centesimi, Betta ne ha forniti 50 e Cinzia 20. Ciascuna ha 
> quindi preso 10 biscotti. Se si fossero spartite i biscotti proporzionalmente a quanto 
> ciascuna ha pagato, quanti ne avrebbe dovuti avere in più Anna?
> A) 10	
> 	
> B) 9	
> 	
> C) 8	
> 	
> D) 7	
> 	
> E) 6

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*How many more, Anna?*

> Anna, Betta, and Cinzia bought a box containing 30 biscuits: to pay for it, Anna contributed 80 cents, Betta contributed 50 cents, and Cinzia contributed 20 cents. So each of them took 10 biscuits. If they had divided the biscuits in proportion to how much each had paid, how many more biscuits should Anna have gotten?
> A) 10	
>
> B) 9	
>
> C) 8	
>
> D) 7	
>
> E) 6

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,skill_ragionamento_geometrico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*>=5m dal muro, <=5m dall’albero*

![[src_kangourou_2015_marzo_junior__prob5.png]]

> Molti anni fa un pirata ha sotterrato un tesoro in un giardino e ora vuole recuperar­
> lo. Il giardino è rimasto com’era, ma lui ricorda solo di avere sotterrato il tesoro ad 
> almeno 5 metri dal muretto di recinzione e a non più di 5 metri da un vecchio albero. 
> Quale delle seguenti figure indica la regione in cui il pirata dovrebbe cercare il tesoro?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*>=5 m from the wall, <=5 m from the tree*

![[src_kangourou_2015_marzo_junior__prob5.png]]

> Many years ago, a pirate buried a treasure in a garden and now wants to recover it. The garden has remained as it was, but the pirate only remembers that he buried the treasure at least 5 meters from the low fence wall and no more than 5 meters from an old tree. Which of the following figures indicates the region where the pirate should look for the treasure?


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Cifra delle unita di 2015^2+2015^0+2015^1+2015^5*

> Quale è la cifra delle unità del numero 20152 + 20150 + 20151 + 20155?
> A) 1	
> 	
> B) 5	
> 	
> C) 6	
> 	
> D) 7	
> 	
> E) 9
> A)
> B)
> C)
> D)
> E)
> 

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*Digit of the units place of 2015^2 + 2015^0 + 2015^1 + 2015^5*

> What is the units digit of the number 20152 + 20150 + 20151 + 20155?
> A) 1	
>
> B) 5	
>
> C) 6	
>
> D) 7	
>
> E) 9
> A)
> B)
> C)
> D)
> E)
>

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_combinatoria,topic_insiemi_funzioni,method_casi_conteggio,method_inclusione_esclusione,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*italiano*

> Una classe è formata da 33 studenti, a ciascuno dei quali piace studiare almeno una 
> delle materie fra Italiano e Matematica. A esattamente 3 di essi piace studiare sia Ma­
> tematica sia Italiano, e gli studenti a cui piace studiare solo Italiano sono il doppio di 
> quelli a cui piace studiare solo Matematica. A quanti studenti piace studiare Italiano?
> A) 15	
> 	
> B) 18	
> 	
> C) 20	
> 	
> D) 22	
> 	
> E) 23

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_casi_conteggio|Conteggio per casi]], [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*Italian*

> A class has 33 students, and each of them likes studying at least one of the subjects Italian or Mathematics. Exactly 3 of them like studying both Mathematics and Italian, and the number of students who like studying only Italian is twice the number of those who like studying only Mathematics. How many students like studying Italian?
> A) 15	
>
> B) 18	
>
> C) 20	
>
> D) 22	
>
> E) 23


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_insiemi_funzioni|Sets and functions]]
**Metodo:** [[method_casi_conteggio|Counting by cases]], [[method_inclusione_esclusione|Inclusion–exclusion]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,method_casework,method_fattorizzazione,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Quale non e quadrato ne cubo perfetto*

> Quale dei seguenti numeri interi non è un quadrato perfetto e non è un cubo per­
> fetto?
> A) 613	
> 	
> B) 512	
> 	
> C) 411	
> 	
> D) 310	
> 	
> E) 29

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*Which one is neither a square nor a perfect cube?*

> Which of the following integers is neither a perfect square nor a perfect cube?
> A) 613	
>
> B) 512	
>
> C) 411	
>
> D) 310	
>
> E) 29


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_aritmetica,method_ricorsione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*giorni totali*

> Luigi ha comprato 100 candele. Consuma una candela al giorno ma, non appena ha 
> i resti di sette candele, riesce a fabbricarne una nuova. Per quanti giorni gli basteranno 
> le candele che ha comprato?
> A) 112	 	
> B) 114	 	
> C) 115	 	
> D) 116	 	
> E) 117

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*Total days*

> Luigi has bought 100 candles. He uses one candle a day, but as soon as he has the remnants of seven candles, he can make a new one. For how many days will the candles he bought last him?
> A) 112	 	
> B) 114	 	
> C) 115	 	
> D) 116	 	
> E) 117

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_ricorsione|Recursion]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_geometria_piana,method_casework,skill_casework_accurato,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*lista valori*

> Se n è il numero di angoli retti di un generico pentagono convesso, quale fra le 
> seguenti è la lista completa dei valori che n può assumere? (Un poligono si dice con­
> vesso se, ogni volta che contiene due punti, contiene tutto il segmento che li ha come 
> estremi.)
> A) 1, 2, 3.	
> B) 0, 1, 2, 3, 4.	
> C) 0, 1, 2, 3.	
> D) 0, 1, 2.	
> E) 1, 2.
> I quesiti dal N. 11 al N. 20 valgono 4 punti ciascuno

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*list of values*

> Let n be the number of right angles in an arbitrary convex pentagon. Which of the following is the complete list of values that n can take? (A polygon is said to be convex if, whenever it contains two points, it contains the entire line segment whose endpoints are those two points.)
> A) 1, 2, 3.	
> B) 0, 1, 2, 3, 4.	
> C) 0, 1, 2, 3.	
> D) 0, 1, 2.	
> E) 1, 2.
> Questions 11 to 20 are each worth 4 points.


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_conteggio,skill_casework_accurato,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*quante scelte*

> Stai cercando un numero di tre cifre ABC (A è la cifra delle centinaia, B quella del­
> le decine, C quella delle unità) tali che 1 ≤ A < B < C e la somma dei tre numeri ABC, 
> BCA e CAB sia un numero di tre cifre uguali fra loro (cioè del tipo DDD). Quante sono 
> le tue possibili scelte?
> A) 3	
> 	
> B) 4	
> 	
> C) 5	
> 	
> D) 6	
> 	
> E) 7

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*So many choices*

> You are looking for a three-digit number ABC (where A is the hundreds digit, B is the tens digit, and C is the units digit) such that 1 ≤ A < B < C and the sum of the three numbers ABC, BCA, and CAB is a three-digit number with all digits equal (that is, of the form DDD). How many possible choices do you have?
> A) 3	
>
> B) 4	
>
> C) 5	
>
> D) 6	
>
> E) 7


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_geometria_piana,method_coordinate,method_casework,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*percorso minimo*

![[src_kangourou_2015_marzo_junior__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % 8 unit squares in a 4x2 grid
  \draw[thick] (0,0) grid (4,2);
  % Mark the two opposite vertices (top-left and bottom-right)
  \filldraw (0,2) circle (3pt);
  \filldraw (4,0) circle (3pt);
\end{tikzpicture}
\end{document}
```

> Il rettangolo in figura è ottenuto accostando 8 quadrati 
> tutti di lato 1. Nel rettangolo ci si può muovere solo lungo i 
> lati o le diagonali dei singoli quadrati. Con questo vincolo, 
> quanto è lungo il percorso più breve che collega due vertici 
> opposti del rettangolo (ad esempio quelli marcati)? 
> A) 2√5	 	
> B) √10 + √2	
> C) 2 + 2√2	
> D) 4√2	 	
> E) 6

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum path*

![[src_kangourou_2015_marzo_junior__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % 8 unit squares in a 4x2 grid
  \draw[thick] (0,0) grid (4,2);
  % Mark the two opposite vertices (top-left and bottom-right)
  \filldraw (0,2) circle (3pt);
  \filldraw (4,0) circle (3pt);
\end{tikzpicture}
\end{document}
```

> The rectangle in the figure is formed by placing 8 squares, each with side length 1, side by side. Within the rectangle, one can move only along the sides or the diagonals of the individual squares. Under this constraint, how long is the shortest path connecting two opposite vertices of the rectangle (for example, the ones marked)?
> A) 2√5	 	
> B) √10 + √2	
> C) 2 + 2√2	
> D) 4√2	 	
> E) 6


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]], [[method_casework|Case analysis]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_logica,topic_algebra,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*orecchie di Trimi*

> Ogni abitante di uno strano pianeta ha alcune (eventualmente anche più di due) 
> orecchie. Tre abitanti, Imi, Dimi e Trimi, si incontrano: nessun altro è presente. Imi 
> dice: “Posso vedere 8 orecchie”. Dimi dice: “Io ne posso vedere 7”. Trimi dice: “Che 
> strano! Io ne posso vedere solo 5”. Nessuno di loro può vedere le proprie orecchie, tut­
> ti vedono tutte le orecchie degli altri e tutti dicono la verità. Quante orecchie ha Trimi?
> A) 2	
> 	
> B) 4	
> 	
> C) 5	
> 	
> D) 6	
> 	
> E) 7
> 

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*Trimi's ears*

> Every inhabitant of a strange planet has some ears (possibly more than two). Three inhabitants, Imi, Dimi, and Trimi, meet: no one else is present. Imi says, "I can see 8 ears." Dimi says, "I can see 7." Trimi says, "How strange! I can see only 5." None of them can see their own ears; all of them see all the others' ears, and all of them are telling the truth. How many ears does Trimi have?
> A) 2	
>
> B) 4	
>
> C) 5	
>
> D) 6	
>
> E) 7
>


**Topic:** [[topic_logica|Logic, games and strategies]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_geometria_solida,skill_modellizzazione,skill_manipolazione_algebrica,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*altezza h*

> Un recipiente ha la forma di un prisma rettangolare e la base è un quadrato di lato 
> 10 cm. Nel recipiente viene versata dell’acqua fino all’altezza di h cm; viene quindi 
> immerso un cubetto di pietra di lato 2 cm (che dunque non galleggia e si adagia sul 
> fondo con una delle sue facce). Il cubetto risulta ora circondato dall’acqua e la sua 
> faccia superiore è a pelo d’acqua. Quanto vale h?
> A) 1,92	 	
> B) 1,93	 	
> C) 1,90	 	
> D) 1,91	 	
> E) 1,94

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*height h*

> A container is in the shape of a right rectangular prism, and its base is a square with a side length of 10 cm. Water is poured into the container to a height of h cm; a small stone cube with a side length of 2 cm is then immersed (so it does not float and comes to rest on the bottom with one of its faces). The cube is now surrounded by water, and its top face is at the water surface. What is the value of h?
> A) 1,92	 	
> B) 1,93	 	
> C) 1,90	 	
> D) 1,91	 	
> E) 1,94


**Topic:** [[topic_geometria_solida|Solid geometry]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*area ombreggiata*

![[src_kangourou_2015_marzo_junior__prob15.png]]

> Il quadrato ABCD in figura ha area 80. I punti E, F, G e 
> H stanno ciascuno su un lato del quadrato e i segmenti AE, 
> BF, CG e DH hanno tutti la stessa lunghezza, che è il tri­
> plo di quella del segmento EB. Qual è l’area della regione 
> ombreggiata?
> A) 20	
> 	
> B) 25	
> 	
> C) 30
> D) 35	
> 	
> E) 40

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*shaded area*

![[src_kangourou_2015_marzo_junior__prob15.png]]

> The square ABCD in the figure has an area of 80. Points E, F, G, and H each lie on a side of the square, and the segments AE, BF, CG, and DH are all of the same length, which is three times the length of segment EB. What is the area of the shaded region?
> A) 20	
>
> B) 25	
>
> C) 30
> D) 35	
>
> E) 40


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_aritmetica,method_fattorizzazione,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*differenza*

> Oggi è il compleanno di un padre e di suo figlio. Il prodotto delle loro età è 2015. 
> Qual è la differenza fra l’età del padre e quella del figlio? 
> A) 26	
> 	
> B) 29	
> 	
> C) 31	
> 	
> D) 36             
> E) Un numero diverso dai precedenti.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** E
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*difference*

> Today is the birthday of a father and his son. The product of their ages is 2015. What is the difference between the father's age and the son's age?
> A) 26	
>
> B) 29	
>
> C) 31	
>
> D) 36             
> E) A number different from the preceding ones.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,method_fattorizzazione,method_congruenze,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*min n*

> Il prodotto di n numeri interi positivi consecutivi, ciascuno di due cifre, è divisibi­
> le per 2015. Qual è il valore più piccolo possibile per n ?             
> A) 3	
> 	
> B) 4	
> 	
> C) 6	
> 	
> D) 12	
> 	
> E) 19

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*min n*

> The product of n consecutive positive two-digit integers is divisible by 2015. What is the smallest possible value of n?
> A) 3	
>
> B) 4	
>
> C) 6	
>
> D) 12	
>
> E) 19


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_algebra,topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*somma cifre di c*

> Le due soluzioni dell’equazione x2 - 85x + c = 0 sono numeri interi primi. Qual è 
> la somma delle cifre del numero c ?
> A) 12	
> 	
> B) 13	
> 	
> C) 14	
> 	
> D) 15	
> 	
> E) 21

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*sum of figures of c*

> The two solutions of the equation x² - 85x + c = 0 are prime integers. What is the sum of the digits of the number c?
> A) 12	
>
> B) 13	
>
> C) 14	
>
> D) 15	
>
> E) 21

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q19" data-atom="q19" data-title="Quesito 19" data-tags="topic_aritmetica,topic_combinatoria,method_casework,method_conteggio,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Interi 3 cifre con cifre adiacenti che differiscono di 3*

> Quanti numeri interi positivi di tre cifre significative sono tali che, comunque si 
> considerino in ciascuno di essi due cifre adiacenti, esse differiscano di 3?
> A) 12	
> 	
> B) 14	
> 	
> C) 16	
> 	
> D) 20	
> 	
> E) 27

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*Find 3-digit numbers whose adjacent digits differ by 3*

> How many positive integers with three significant figures are such that, whatever two adjacent digits are considered in each of them, those digits differ by 3?
> A) 12	
>
> B) 14	
>
> C) 16	
>
> D) 20	
>
> E) 27


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_casework|Case analysis]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q20" data-atom="q20" data-title="Quesito 20" data-tags="topic_aritmetica,topic_logica,method_casework,skill_casework_accurato,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*n primo, uno solo di n-2,n+2 primo*

> L’affermazione “Se n è un numero intero primo, allora uno e uno solo degli interi 
> n - 2 e n + 2 è primo” è falsa. Quale dei seguenti valori di n ne fornisce un controesempio?
> A) n = 11	
> B) n = 19	
> C) n = 21	
> D) n = 29	
> E) n = 37
> I quesiti dal N. 21 al N. 30 valgono 5 punti ciascuno

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*n is prime, and exactly one of n-2, n+2 is prime*

> The statement "If n is a prime integer, then exactly one of the integers n - 2 and n + 2 is prime" is false. Which of the following values of n provides a counterexample?
> A) n = 11	
> B) n = 19	
> C) n = 21	
> D) n = 29	
> E) n = 37
> Questions 21 to 30 are each worth 5 points.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q21" data-atom="q21" data-title="Quesito 21" data-tags="topic_aritmetica,topic_combinatoria,method_conteggio,skill_casework_accurato,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri 2 cifre come somma di 6 potenze distinte di 2*

> Quanti numeri di due cifre possono essere rappresentati come somma di esatta­
> mente sei diverse potenze (ad esponente intero non negativo) di 2 (inclusa 20)?
> A) 0	
> 	
> B) 1	
> 	
> C) 2	
> 	
> D) 3	
> 	
> E) 4
> 

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*Two-digit numbers as the sum of 6 distinct powers of 2*

> How many two-digit numbers can be represented as the sum of exactly six distinct powers of 2 (with non-negative integer exponents), including 2^0?
> A) 0	
>
> B) 1	
>
> C) 2	
>
> D) 3	
>
> E) 4
>


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q22" data-atom="q22" data-title="Quesito 22" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*allineamenti*

> Francesca ha tre diversi vocabolari e due diversi atlanti e vuole allinearli tutti su 
> uno scaffale. Se vuole collocare i vocabolari tutti insieme e gli atlanti tutti insieme, tra 
> quanti diversi allineamenti possibili può scegliere?
> A) 12	
> 	
> B) 24	
> 	
> C) 30	
> 	
> D) 60	
> 	
> E) 120

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*alignments*

> Francesca has three different vocabulary books and two different atlases, and she wants to arrange them all on one shelf. If she wants to put the vocabulary books all together and the atlases all together, how many different possible arrangements can she choose from?
> A) 12	
>
> B) 24	
>
> C) 30	
>
> D) 60	
>
> E) 120

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q23" data-atom="q23" data-title="Quesito 23" data-tags="topic_algebra,topic_logica,method_backward,skill_manipolazione_algebrica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*regione centrale*

![[src_kangourou_2015_marzo_junior__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Three circles arranged in a Venn diagram
  % Centers at distance 1.2 from origin at 90, 210, 330 degrees, radius 1.5
  \draw[thick] (90:1.2) circle (1.5);
  \draw[thick] (210:1.2) circle (1.5);
  \draw[thick] (330:1.2) circle (1.5);
  % Label "1" in left petal (overlap of top and bottom-left circles)
  \node at (-0.65,0.3) {$1$};
  % Label "2" in right petal (overlap of top and bottom-right circles)
  \node at (0.65,0.3) {$2$};
  % Label "?" in central region (triple overlap)
  \node at (0,-0.25) {$?$};
\end{tikzpicture}
\end{document}
```

> I tre cerchi in figura individuano sette regioni, ognu­
> na all’interno di almeno uno di essi. In ogni regione va 
> scritto un numero, in modo che sia la somma dei numeri 
> scritti nelle regioni ad essa adiacenti (due regioni sono 
> considerate adiacenti se i loro bordi hanno più di un pun­
> to in comune). In due delle regioni il numero è già stato 
> scritto. Quale numero va scritto nella regione centrale 
> contrassegnata dal punto di domanda?
> A) 0	
> 	
> B) - 3	
> 	
> C) 3	
> 	
> D) - 6	 	
> E) 6

**Topic:** [[topic_algebra|Algebra]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*Central region*

![[src_kangourou_2015_marzo_junior__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Three circles arranged in a Venn diagram
  % Centers at distance 1.2 from origin at 90, 210, 330 degrees, radius 1.5
  \draw[thick] (90:1.2) circle (1.5);
  \draw[thick] (210:1.2) circle (1.5);
  \draw[thick] (330:1.2) circle (1.5);
  % Label "1" in left petal (overlap of top and bottom-left circles)
  \node at (-0.65,0.3) {$1$};
  % Label "2" in right petal (overlap of top and bottom-right circles)
  \node at (0.65,0.3) {$2$};
  % Label "?" in central region (triple overlap)
  \node at (0,-0.25) {$?$};
\end{tikzpicture}
\end{document}
```

> The three circles in the figure define seven regions, each of which lies within at least one of the circles. A number must be written in each region such that it equals the sum of the numbers written in the regions adjacent to it (two regions are considered adjacent if their boundaries have more than one point in common). In two of the regions, a number has already been written. What number should be written in the central region marked with a question mark?
> A) 0	
>
> B) - 3	
>
> C) 3	
>
> D) - 6	 	
> E) 6


**Topic:** [[topic_algebra|Algebra]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_backward|Working backwards]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q24" data-atom="q24" data-title="Quesito 24" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*XA=4:1: BY:YA*

![[src_kangourou_2015_marzo_junior__prob24.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Left triangle: trapezoid shaded (BX:XA=4:1, so X is 1/5 from A, i.e. 4/5 from B)
  % Triangle ABC: A=(0,0), B=(1.5,3), C=(3,0)
  % X on AB at XA:BX=1:4, so X = A + 1/5*(B-A) = (0.3, 0.6)
  % X' on BC (parallel to AC through X): X' = C + 1/5*(B-C) = (2.7, 0.6)
  % Shaded trapezoid: A, C, X', X
  \begin{scope}[xshift=0cm]
    \fill[gray!40] (0,0) -- (0.3,0.6) -- (2.7,0.6) -- (3,0) -- cycle;
    \draw[thick] (0,0) -- (1.5,3) -- (3,0) -- cycle;
    \draw (0.3,0.6) -- (2.7,0.6);
    \node[below left] at (0,0) {$A$};
    \node[above] at (1.5,3) {$B$};
    \node[below right] at (3,0) {$C$};
    \node[left] at (0.3,0.6) {$X$};
  \end{scope}
  % Right triangle: small triangle at top shaded (Y closer to B)
  % Using an illustrative ratio, say BY:YA = 3:2 (answer D)
  % Y = A + 2/5*(B-A) = (0.6, 1.2), Y' = C + 2/5*(B-C) = (2.4, 1.2)
  \begin{scope}[xshift=4.5cm]
    \fill[gray!40] (0.6,1.2) -- (1.5,3) -- (2.4,1.2) -- cycle;
    \draw[thick] (0,0) -- (1.5,3) -- (3,0) -- cycle;
    \draw (0.6,1.2) -- (2.4,1.2);
    \node[below left] at (0,0) {$A$};
    \node[above] at (1.5,3) {$B$};
    \node[below right] at (3,0) {$C$};
    \node[left] at (0.6,1.2) {$Y$};
  \end{scope}
\end{tikzpicture}
\end{document}
```

> Sul lato AB di un triangolo ABC sono indi­
> viduati due punti X e Y e da ciascuno di essi è 
> tracciato il segmento parallelo al lato AC che 
> va a terminare sul lato BC: la figura evidenzia 
> separatamente le due situazioni. Si sa che le 
> aree delle due regioni ombreggiate così indivi­
> duate (un trapezio e un triangolo) sono uguali e 
> che BX :  XA = 4 : 1. Quanto vale BY : YA ? 
> A) 1 : 1	 	
> B) 2 : 1	 	
> C) 3 : 3	 	
> D) 3 : 2	 	
> E) 4 : 3

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*XA=4:1: BY:YA*

![[src_kangourou_2015_marzo_junior__prob24.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Left triangle: trapezoid shaded (BX:XA=4:1, so X is 1/5 from A, i.e. 4/5 from B)
  % Triangle ABC: A=(0,0), B=(1.5,3), C=(3,0)
  % X on AB at XA:BX=1:4, so X = A + 1/5*(B-A) = (0.3, 0.6)
  % X' on BC (parallel to AC through X): X' = C + 1/5*(B-C) = (2.7, 0.6)
  % Shaded trapezoid: A, C, X', X
  \begin{scope}[xshift=0cm]
    \fill[gray!40] (0,0) -- (0.3,0.6) -- (2.7,0.6) -- (3,0) -- cycle;
    \draw[thick] (0,0) -- (1.5,3) -- (3,0) -- cycle;
    \draw (0.3,0.6) -- (2.7,0.6);
    \node[below left] at (0,0) {$A$};
    \node[above] at (1.5,3) {$B$};
    \node[below right] at (3,0) {$C$};
    \node[left] at (0.3,0.6) {$X$};
  \end{scope}
  % Right triangle: small triangle at top shaded (Y closer to B)
  % Using an illustrative ratio, say BY:YA = 3:2 (answer D)
  % Y = A + 2/5*(B-A) = (0.6, 1.2), Y' = C + 2/5*(B-C) = (2.4, 1.2)
  \begin{scope}[xshift=4.5cm]
    \fill[gray!40] (0.6,1.2) -- (1.5,3) -- (2.4,1.2) -- cycle;
    \draw[thick] (0,0) -- (1.5,3) -- (3,0) -- cycle;
    \draw (0.6,1.2) -- (2.4,1.2);
    \node[below left] at (0,0) {$A$};
    \node[above] at (1.5,3) {$B$};
    \node[below right] at (3,0) {$C$};
    \node[left] at (0.6,1.2) {$Y$};
  \end{scope}
\end{tikzpicture}
\end{document}
```

> On side AB of triangle ABC, two points X and Y are marked, and from each of them a line segment parallel to side AC is drawn, terminating on side BC; the figure shows the two situations separately. It is known that the areas of the two shaded regions thus identified (a trapezoid and a triangle) are equal, and that BX : XA = 4 : 1. What is the value of BY : YA?
> A) 1 : 1	 	
> B) 2 : 1	 	
> C) 3 : 3	 	
> D) 3 : 2	 	
> E) 4 : 3


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q25" data-atom="q25" data-title="Quesito 25" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*segmento piu corto*

![[src_kangourou_2015_marzo_junior__prob25.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Rectangle ABCD: A=(0,0), B=(5,0), C=(5,2), D=(0,2) (indicative, not to scale)
  % Diagonal DB from D=(0,2) to B=(5,0)
  % E on top side DC, F on bottom side AB
  % Segment AE from A=(0,0) to E on DC, Segment CF from C=(5,2) to F on AB
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (C) at (5,2);
  \coordinate (D) at (0,2);
  \coordinate (E) at (1.8,2);
  \coordinate (F) at (3.5,0);
  \draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (D) -- (B);
  \draw (A) -- (E);
  \draw (C) -- (F);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node at (0.6,1.3) {$4\,\mathrm{cm}^2$};
  \node at (4.2,0.8) {$5\,\mathrm{cm}^2$};
\end{tikzpicture}
\end{document}
```

> Il rettangolo ABCD in figura è ripartito in 
> quattro triangoli  mediante la diagonale DB e i 
> segmenti AE e CF. La sua area è 24 cm2, mentre 
> le aree dei triangoli AED e FBC sono  rispet­
> tivamente 4 cm2 e 5 cm2. Quale fra i seguenti 
> segmenti  è il più corto?  (Attenzione: la figura 
> è solo indicativa, non rispetta i dati numerici). 
> A) AE	
> 	
> B) BF	
> 	
> C) CF	 	
> D) DE	 	
> E) EF

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*shortest segment*

![[src_kangourou_2015_marzo_junior__prob25.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Rectangle ABCD: A=(0,0), B=(5,0), C=(5,2), D=(0,2) (indicative, not to scale)
  % Diagonal DB from D=(0,2) to B=(5,0)
  % E on top side DC, F on bottom side AB
  % Segment AE from A=(0,0) to E on DC, Segment CF from C=(5,2) to F on AB
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (C) at (5,2);
  \coordinate (D) at (0,2);
  \coordinate (E) at (1.8,2);
  \coordinate (F) at (3.5,0);
  \draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (D) -- (B);
  \draw (A) -- (E);
  \draw (C) -- (F);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node at (0.6,1.3) {$4\,\mathrm{cm}^2$};
  \node at (4.2,0.8) {$5\,\mathrm{cm}^2$};
\end{tikzpicture}
\end{document}
```

> In the figure, rectangle ABCD is divided into four triangles by the diagonal DB and the line segments AE and CF. Its area is 24 cm², while the areas of triangles AED and FBC are 4 cm² and 5 cm², respectively. Which of the following line segments is the shortest? (Note: the figure is merely illustrative and does not reflect the numerical data.)
> A) AE
>
> B) BF
>
> C) CF
> D) DE
> E) EF


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q26" data-atom="q26" data-title="Quesito 26" data-tags="topic_combinatoria,topic_aritmetica,method_casi_conteggio,skill_conteggio_sistematico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante terne cifre A,B,C con AB<BC<CA*

> Nella formulazione di questo quesito una scrittura del tipo AB indica il numero 
> di due cifre significative, non necessariamente distinte fra loro, nel quale A è la cifra 
> delle decine e B quella delle unità. In quanti diversi modi è possibile scegliere tre cifre 
> A, B e C se si vuole avere AB < BC < CA?
> A) 84	
> 	
> B) 120	 	
> C) 125	 	
> D) 201	 	
> E) 502
> A
> B
> C
> X
> A
> B
> C
> Y
> A
> B
> C
> D
> E
> F
> 4 cm
> 5 cm
> 2
> 2
> 

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*How many triples of digits A, B, C satisfy AB < BC < CA?*

> In the formulation of this question, a notation of the form AB denotes a two-digit number, with the digits not necessarily distinct, where A is the tens digit and B is the units digit. In how many different ways can three digits A, B, and C be chosen if one wants AB < BC < CA?
> A) 84	
>
> B) 120	 	
> C) 125	 	
> D) 201	 	
> E) 502
> A B C X A B C Y A B C D E F 4 cm 5 cm 2 2
>


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q27" data-atom="q27" data-title="Quesito 27" data-tags="topic_aritmetica,topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*numero eliminato*

> Per un certo numero intero positivo n accade che, dopo avere eliminato uno 
> dei numeri 1, 2, 3, ..., n - 1, n, la media aritmetica dei numeri rimanenti è 4,75. 
> Che numero è stato eliminato?
> A) 5	
> 	
> B) 7	
> 	
> C) 8	
> 	
> D) 9          
> E) I dati non sono sufficienti per rispondere

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** B
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*Number deleted*

> For a certain positive integer n, after removing one of the numbers 1, 2, 3, ..., n - 1, n, the arithmetic mean of the remaining numbers is 4.75. Which number was removed?
> A) 5	
>
> B) 7	
>
> C) 8	
>
> D) 9          
> E) The data are insufficient to provide an answer


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q28" data-atom="q28" data-title="Quesito 28" data-tags="topic_geometria_solida,topic_combinatoria,method_grafi,skill_casework_accurato,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*percorsi minimi*

> Un cubo ha i lati di lunghezza 1. Partendo da uno dei vertici, una formica vuole 
> ritornarvi camminando solo lungo gli spigoli del cubo e percorrendoli tutti almeno 
> una volta. Quanto sono lunghi i percorsi più brevi che può compiere?
> A) 12	
> 	
> B) 14	
> 	
> C) 15	
> 	
> D) 16	
> 	
> E) 20

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum paths*

> A cube has edges of length 1. Starting from one of the vertices, an ant wants to return to that same vertex by walking only along the edges of the cube and by traversing each edge at least once. How long are the shortest paths the ant can take?
> A) 12	
>
> B) 14	
>
> C) 15	
>
> D) 16	
>
> E) 20


**Topic:** [[topic_geometria_solida|Solid geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_grafi|Graph theory]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q29" data-atom="q29" data-title="Quesito 29" data-tags="topic_aritmetica,topic_logica,topic_algebra,method_casework,skill_astrazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*max*

> Sulla lavagna sono scritti dieci numeri tutti diversi fra loro. Fra questi, sono stati 
> sottolineati tutti e soli quelli che sono esprimibili come prodotto dei rimanenti nove. 
> Quanti numeri possono essere stati sottolineati al massimo?
> A) 1	
> 	
> B) 2	
> 	
> C) 3	
> 	
> D) 9	
> 	
> E) 10

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** B
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*max*

> Ten numbers, all of which are different from one another, are written on the blackboard. Among these, all and only those that can be expressed as the product of the remaining nine have been underlined. What is the maximum number of numbers that could have been underlined?
> A) 1	
>
> B) 2	
>
> C) 3	
>
> D) 9	
>
> E) 10


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_logica|Logic, games and strategies]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q30" data-atom="q30" data-title="Quesito 30" data-tags="topic_combinatoria,method_conteggio,method_casework,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*quanti punti*

> Su una retta sono stati marcati alcuni punti, tutti diversi fra loro: A e B sono due di 
> essi. Contando tutti i segmenti che hanno come estremi due dei punti marcati diversi 
> da A e che contengono A, si ottiene 80. Contando tutti i segmenti che hanno come 
> estremi due dei punti marcati diversi da B e che contengono B, si ottiene 90. Quanti 
> sono i punti marcati sulla retta?
> A) 20	
> 	
> B) 22	
> 	
> C) 80	
> 	
> D) 90
> E) Le informazioni sono insufficienti per rispondere
> 
> STRINGA JUNIOR 2015

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<div class="qlang-split" data-lang="en"></div>


*How many points?*

> On a straight line, several points have been marked, all of which are distinct from one another: A and B are two of them. If all the line segments whose endpoints are two of the marked points other than A and which contain A are counted, the total is 80. If all the line segments whose endpoints are two of the marked points other than B and which contain B are counted, the total is 90. How many points have been marked on the straight line?
> A) 20	
>
> B) 22	
>
> C) 80	
>
> D) 90
> E) The information is insufficient to respond
>
> STRINGA JUNIOR 2015


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
