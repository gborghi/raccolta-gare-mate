---
title: Kangourou Coppa Junior squadre 2019 Semifinale A
tipo: gara
competition: Kangourou Coppa Junior squadre 2019 Semifinale A
family: kangourou
year: '2019'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2019_junior_semifinale_a"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_algebra,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Riduzione ai minimi termini di una frazione di somme*

> Ai minimi termini  
> Riducete ai minimi termini la frazione  
> (1 + 3 + 5 + … + 51) / (4 + 6 + 8 + … + 54) 
> e riportate consecutivamente numeratore e denominatore (ad esempio, se la frazione fosse 5/8 
> scrivete [0508]).

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 2629
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*Reduction to the minimum terms of a fraction of sum*

> Minimum terms Reduce to minimum terms the fraction (1 + 3 + 5 + ... + 51) / (4 + 6 + 8 + ... + 54) and report consecutively numerator and denominator (for example, if the fraction was 5/8 write [0508]).

**Answer:** 2629
[[src_kangourou_2019_junior_semifinale_a__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,skill_stima,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Raggio in decimetri di tre circonferenze nel triangolo*

> Tre circonferenze 
> In un triangolo equilatero di lato 40 metri sono disegnate tre circonferenze aventi lo stesso raggio, a 
> due a due tangenti tra loro, ciascuna delle quali tangente a due lati del triangolo. Qual è il più 
> grande numero intero che non supera la lunghezza in decimetri del raggio delle circonferenze?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_stima|Stima e approssimazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0073
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*Ray in decimers of three circumferences in the triangle*

> Three circles In an equilateral triangle of 40 metres side, three circles of equal radius are drawn, two to two tangents to each other, each tangent to two sides of the triangle. What is the largest integer that does not exceed the length in decimeter of the radius of the circles?

**Answer:** 0073
[[src_kangourou_2019_junior_semifinale_a__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,method_conteggio,method_simmetria,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di assegnare interi all'ottagono con somme diagonali*

![[src_kangourou_2019_junior_semifinale_a__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (-0.765, 1.848);
  \coordinate (B) at ( 0.765, 1.848);
  \coordinate (C) at ( 1.848, 0.765);
  \coordinate (D) at ( 1.848,-0.765);
  \coordinate (E) at ( 0.765,-1.848);
  \coordinate (F) at (-0.765,-1.848);
  \coordinate (G) at (-1.848,-0.765);
  \coordinate (H) at (-1.848, 0.765);
  \coordinate (J) at (0,0);
  \draw[thick] (A)--(B)--(C)--(D)--(E)--(F)--(G)--(H)--cycle;
  \foreach \pt in {A,B,C,D,E,F,G,H} { \fill (\pt) circle (2pt); }
  \fill (J) circle (2pt);
  \node[above]      at (A) {$A$};
  \node[above]      at (B) {$B$};
  \node[right]      at (C) {$C$};
  \node[right]      at (D) {$D$};
  \node[below]      at (E) {$E$};
  \node[below]      at (F) {$F$};
  \node[left]       at (G) {$G$};
  \node[left]       at (H) {$H$};
  \node[right]      at (J) {$J$};
\end{tikzpicture}
\end{document}
```

> Tra 1 e 9 
> I vertici e il centro dell’ottagono regolare in figura hanno ricevuto un 
> nome. In quanti diversi modi a ciascuno dei punti, vertici e centro, può 
> venire assegnato un intero tra 1 e 9 in modo che punti diversi ricevano 
> numeri diversi ma, per ogni assegnazione fissata, la somma dei tre 
> numeri che interessano le singole diagonali passanti per il centro sia 
> sempre la stessa al variare delle diagonali?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1152
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*Mode of allocating integers to the octagon with diagonal sums*

![[src_kangourou_2019_junior_semifinale_a__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (-0.765, 1.848);
  \coordinate (B) at ( 0.765, 1.848);
  \coordinate (C) at ( 1.848, 0.765);
  \coordinate (D) at ( 1.848,-0.765);
  \coordinate (E) at ( 0.765,-1.848);
  \coordinate (F) at (-0.765,-1.848);
  \coordinate (G) at (-1.848,-0.765);
  \coordinate (H) at (-1.848, 0.765);
  \coordinate (J) at (0,0);
  \draw[thick] (A)--(B)--(C)--(D)--(E)--(F)--(G)--(H)--cycle;
  \foreach \pt in {A,B,C,D,E,F,G,H} { \fill (\pt) circle (2pt); }
  \fill (J) circle (2pt);
  \node[above]      at (A) {$A$};
  \node[above]      at (B) {$B$};
  \node[right]      at (C) {$C$};
  \node[right]      at (D) {$D$};
  \node[below]      at (E) {$E$};
  \node[below]      at (F) {$F$};
  \node[left]       at (G) {$G$};
  \node[left]       at (H) {$H$};
  \node[right]      at (J) {$J$};
\end{tikzpicture}
\end{document}
```

> Between 1 and 9 the vertices and the centre of the regular octagon in the figure have been given a name. In how many different ways can each of the points, vertices and center, be assigned an integer between 1 and 9 so that different points receive different numbers but, for each fixed assignment, the sum of the three numbers affecting the individual diagonal passing through the center is always the same when the diagonal varies?

**Answer:** 1152
[[src_kangourou_2019_junior_semifinale_a__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,topic_algebra,method_conteggio,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo N+T+Q con vincolo T-Q=5*

> Il valore massimo 
> In un piano è individuato un insieme S di N punti: non ve ne sono tre collineari e i possibili 
> quadrilateri (non intrecciati) con vertici in S sono tutti convessi. Se T è il numero dei possibili 
> triangoli con vertici nell’insieme dato e Q è il numero dei possibili quadrilateri convessi con vertici 
> nello stesso insieme, qual è il massimo valore possibile per N + T + Q sotto il vincolo T – Q = 5?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0041
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum N+T+Q with bound T-Q=5*

> The maximum value In a plane is a set S of N points: there are no three hills and the possible quadrilaterals (not intertwined) with vertices in S are all convex. If T is the number of possible triangles with vertices in the given set and Q is the number of possible quadrilaterals convex with vertices in the same set, what is the maximum possible value for N + T + Q under the constraint T  Q = 5?

**Answer:** 0041
[[src_kangourou_2019_junior_semifinale_a__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,topic_geometria_piana,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Cerchi tangenti a esattamente tre di dieci rette*

> 10 rette 
> Nel piano ci sono 10 rette: di queste, non ce sono due parallele, non ce sono tre incidenti in uno 
> stesso punto, non ce ne sono quattro tangenti ad uno stesso cerchio. Quanti cerchi sono tangenti ad 
> esattamente tre delle dieci rette?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 0480
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*Tangent circles at exactly three out of ten lines*

> 10 lines In the plane there are 10 lines: of these, there are no two parallels, there are no three accidents at the same point, there are no four tangents to the same circle. How many circles are tangent to exactly three of the ten directions?

**Answer:** 0480
[[src_kangourou_2019_junior_semifinale_a__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*30 con p q primi*

> Il resto   
> Siano p e q due numeri primi entrambi maggiori di 2019. Qual è il resto maggiore possibile per la 
> divisione (p2 + q2) : 30?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0020
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*30 with p q prime *

> The rest are p and q two prime numbers both greater than 2019. What is the greatest remainder possible for division (p2 + q2): 30?

**Answer:** 0020
[[src_kangourou_2019_junior_semifinale_a__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto ABC con frazione continua = 881/97*

> Il prodotto 
> Per tre interi positivi A, B e C accade che  
> A + 1/(B + (1/C)) = 881/97. 
> Quanto vale il loro prodotto?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0864
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*ABC product with continuous fraction = 881/97 *

> The product For three positive integers A, B and C, A + 1/(B + (1/C)) = 881/97. How much is their product worth?

**Answer:** 0864
[[src_kangourou_2019_junior_semifinale_a__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,method_conteggio,method_simmetria,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Tipi di banconote a tre quadretti (rotazioni)*

> Banconote 
> Le banconote di Kanglandia sono rettangolari, ottenute accostando in linea tre quadretti della stessa 
> misura. Per tutte il retro è grigio, mentre nell’altra faccia ognuno dei quadretti può essere giallo, 
> rosso, verde o blu. Solo i colori (e le loro posizioni) differenziano banconote diverse. Quanti sono i 
> tipi di banconote?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0040
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*Type of three-quarter banknotes (rotations) *

> Banknotes Kanglandia banknotes are rectangular, obtained by aligning three squares of the same size. For all the rear is gray, while on the other side each of the squares can be yellow, red, green or blue. Only the colours (and their positions) differentiate different banknotes. How many types of banknotes are there?

**Answer:** 0040
[[src_kangourou_2019_junior_semifinale_a__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_funzionali,topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto delle soluzioni di f(n)=n*

> Un’equazione 
> Per ogni n intero positivo sia f(n) = (n2 – 3n + 3)2 – 3(n2 – 3n + 3) + 3. Qual è il prodotto di tutte le 
> soluzioni (reali) dell’equazione f(n) = n ? (Rispondete [0000] se l’equazione non ha soluzioni, 
> [9999] se ne ha infinite.)

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0003
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*Produced from solutions of f(n)=n*

> For every positive integer n be f(n) = (n2  3n + 3)2  3(n2  3n + 3) + 3. What is the product of all (real) solutions to the equation f (n) = n ? (Answer [0000] if the equation has no solutions, [9999] if it has infinitesimal solutions.)

**Answer:** 0003
[[src_kangourou_2019_junior_semifinale_a__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_algebra,topic_aritmetica,method_disuguaglianze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di scegliere n con media maggiore di n*

> L’aggiunta 
> In un’urna ci sono 2019 cartoncini, su ciascuno dei quali è riportato un diverso numero intero 
> positivo da 1 a 2019. Vogliamo aggiungere nell’urna un cartoncino sul quale sia scritto un numero 
> intero positivo n in modo che la media aritmetica dei numeri scritti sui cartoncini ora nell’urna sia 
> maggiore di n. In quanti modi diversi possiamo scegliere n?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1009
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*Mode to choose n with an average greater than n*

> In a single day there are 2019 cards, each of which has a different positive integer from 1 to 2019. We want to add a cardboard on which a positive integer n is written so that the arithmetic mean of the numbers written on the cards now in the cardboard is greater than n. How many different ways can we choose n?

**Answer:** 1009
[[src_kangourou_2019_junior_semifinale_a__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_probabilita,topic_aritmetica,method_congruenze,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Probabilita che ABC+AB+A sia divisibile per 3*

> Divisibile per 3 
> Scegliendo a caso tre interi positivi (non necessariamente distinti) A, B, C minori o uguali a 2019, 
> qual è la probabilità che il numero A × B × C + A × B + A sia divisibile per 3? (Scrivete di seguito 
> numeratore e denominatore della frazione ridotta ai minimi termini; ad esempio, se la risposta 
> fosse 4/31 scrivete [0431].)

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1327
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


The probability that ABC+AB+A is divisible by 3*

> Divisable by 3 Choosing at random three positive integers (not necessarily distinct) A, B, C less than or equal to 2019, what is the probability that the number A × B × C + A × B + A is divisible by 3? (Write down below the numerator and denominator of the fraction reduced to minimum terms; for example, if the answer is 4/31, write [0431].)

**Answer:** 1327
[[src_kangourou_2019_junior_semifinale_a__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Eta di Giovanni dalla relazione tra le eta*

> Compleanni 
> Oggi è il compleanno di Piero e Giovanni; la somma delle loro età è 91 anni e l’età di Giovanni è il 
> doppio dell’età che Piero aveva quando Giovanni aveva la stessa età che adesso ha Piero. Quanti 
> anni ha Giovanni?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0052
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*Eta of John from the relationship between the ages*

> Birthdays Today is the birthday of Peter and John; the sum of their ages is 91 years and John's age is twice the age that Peter had when John was the same age as Peter now has. How old is Giovanni?

**Answer:** 0052
[[src_kangourou_2019_junior_semifinale_a__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_combinatoria,topic_logica,method_grafi,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo archi grafo connesso senza triangoli 99 punti*

> 99 punti 
> Nello spazio sono assegnati 99 punti distinti in modo che non ve ne siano quattro complanari. 
> Alcuni punti vengono collegati da segmenti in modo che ognuno dei 99 punti sia raggiungibile 
> (attraverso i segmenti tracciati) da ognuno degli altri (si abbia cioè un grafo connesso), ma i 
> segmenti tracciati non formino alcun triangolo. Quale può essere al massimo il numero dei segmenti 
> tracciati (cioè il numero degli archi del grafo)?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2450
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*Most connected graph arcs without triangles 99 points*

> 99 points In space 99 distinct points are assigned so that there are no four planners. Some points are connected by segments so that each of the 99 points is reachable (through the traced segments) from each of the others (i.e. if there is a connected graph), but the traced segments do not form any triangle. What is the maximum number of segments traced (i.e. the number of arcs in the graph)?

**Answer:** 2450
[[src_kangourou_2019_junior_semifinale_a__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma cifre dei numeri retro-sbilanciati*

> Numeri retro-sbilanciati   
> Diciamo che un intero positivo N di cinque cifre è retro-sbilanciato se, detti A l’intero di sei cifre 
> che si ottiene anteponendo 2 alle cifre di N e B l’intero di sei cifre che si ottiene posponendo 2 alle 
> cifre di N, si ha B = 3A. Quanto vale la somma delle cifre di tutti i numeri retro-sbilanciati? 
> (Scrivete [0000] se non esistono numeri retro-sbilanciati.)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0025
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*sum of numbers of back-balanced numbers*

> Back-balanced numbers Let's say a positive integer N of five digits is back-balanced if, say, A of six digits that you get by putting 2 before the digits of N and B of six digits that you get by putting 2 back at the digits of N, you have B = 3A. What is the sum of the digits of all the back-balanced numbers? (Write [0000] if there are no back-balanced numbers.)

**Answer:** 0025
[[src_kangourou_2019_junior_semifinale_a__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_geometria_piana,skill_stima,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Percentuale di F occupata dal rettangolo ABCD*

![[src_kangourou_2019_junior_semifinale_a__prob15.png]]

> La percentuale  
> Alcuni rettangoli uguali sono disposti come mostra l’immagine e 
> formano una figura F. All’incirca, quale percentuale di F è occupata 
> dal rettangolo ABCD disegnato su di essa? Approssimate la risposta 
> all’intero più vicino. 
> 
> 1 
>  
> Kangourou della Matematica 2019 
> Coppa Junior a squadre 
> Semifinale turno A 
> Cervia, 6 maggio 2019 
>  
> Quesiti e soluzioni

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_stima|Stima e approssimazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0046
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1qvyGTt8fMV3U7A9REDKvAdJtpkkgdYbx/view)


<span class="qlang-split" data-lang="en"></span>


*Percentage of F occupied by the rectangle ABCD*

![[src_kangourou_2019_junior_semifinale_a__prob15.png]]

> The percentage Some equal rectangles are arranged as shown in the image and form a figure F. What percentage of F is occupied by the ABCD rectangle drawn on it? Approach the answer to the nearest whole.
> 
> 1
>  
> Kangourou of Mathematics 2019 Junior Cup to teams Semifinal round in Cervia, 6 May 2019
>  
> Questions and solutions

**Answer:** 0046
[[src_kangourou_2019_junior_semifinale_a__Q15]]
