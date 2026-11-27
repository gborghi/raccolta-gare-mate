---
title: Kangourou Semifinale individuale Junior 2024
tipo: gara
competition: Kangourou Semifinale individuale Junior 2024
family: kangourou
year: '2024'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2024_junior_semifinale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,topic_algebra,skill_ragionamento_geometrico,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quale uguaglianza tra aree e certamente vera (parco)*

![[src_kangourou_2024_junior_semifinale__prob1.png]]

> (Punti 2) Le due immagini mostrano lo stesso parco ripartito in 5 zone; le lettere 
> presenti in tre delle zone ne indicano l’area. Nel parco abitano due canguri: uno è 
> solito pascolare nella parte più chiara della prima immagine, l’altro in quella più 
> chiara della seconda. Le due parti si sovrappongono parzialmente. In questo 
> modo, entrambi i canguri hanno a disposizione esattamente metà dell’area del 
> parco. Quale delle seguenti uguaglianze è certamente vera?  
> A) A = C 
> B) B = A + C 
>  
> C) B = (A + C)/2 
> D) B = 2(A + C)/3 
> E) B = 3(A + C)/5  
> Risposta B). Sol. Dette D e E le aree delle zone per le quali non sono indicate lettere, deve essere  
> B + D = A + E + C = B + E (ogni canguro ha a disposizione metà del parco). Dalla seconda uguaglianza segue 
> che è comunque vera B). È banale trovare esempi nei quali A) è falsa.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Which equality between areas is certainly true (park)*

![[src_kangourou_2024_junior_semifinale__prob1.png]]

> (Point 2) The two images show the same park divided into 5 zones; the letters in three of the zones indicate their area. Two kangaroos live in the park: one usually grazes in the lighter part of the first image, and the other in the lighter part of the second image. The two parts partially overlap. In this way, both kangaroos have exactly half of the park's area available to them. Which of the following equalities is certainly true?
> A) A = C 
> B) B = A + C 
>
> C) B = (A + C)/2 
> D) B = 2(A + C)/3 
> E) B = 3(A + C)/5  
> Answer B). Sol. Let D and E be the areas of the zones for which no letters are indicated; then B + D = A + E + C = B + E (each kangaroo has half of the park available). From the second equality it follows that B) is true in any case. It is trivial to find examples in which A) is false.


**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area dell'ottagono regolare con quadrato inscritto di area 2*

![[src_kangourou_2024_junior_semifinale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A0) at (0.924, 0.383);
  \coordinate (A1) at (0.383, 0.924);
  \coordinate (A2) at (-0.383, 0.924);
  \coordinate (A3) at (-0.924, 0.383);
  \coordinate (A4) at (-0.924, -0.383);
  \coordinate (A5) at (-0.383, -0.924);
  \coordinate (A6) at (0.383, -0.924);
  \coordinate (A7) at (0.924, -0.383);
  \draw (A0) -- (A1) -- (A2) -- (A3) -- (A4) -- (A5) -- (A6) -- (A7) -- cycle;
  \draw (A1) -- (A3) -- (A5) -- (A7) -- cycle;
  \fill (A1) circle (0.04);
  \fill (A3) circle (0.04);
  \fill (A5) circle (0.04);
  \fill (A7) circle (0.04);
\end{tikzpicture}
\end{document}
```

> (Punti 3) La figura mostra un ottagono regolare e un quadrato inscritto in esso, i 
> cui vertici sono quattro dei vertici dell’ottagono. L’area del quadrato è 2. Quanto 
> vale l’area dell’ottagono?  
> A) 1 + √2              B) 5/2             C) 2√2             D) 3            E) 3√2 – 1  
> Risposta C). Soluzione. Il lato del quadrato misura √2 e la sua 
> diagonale misura 2. L’ottagono è esprimibile come unione degli otto triangoli isosceli 
> che si ottengono congiungendo i vertici con il centro, i cui lati congruenti sono metà 
> della diagonale del quadrato e quindi misurano 1 e la cui altezza rispetto a tali lati è metà 
> del lato del quadrato e quindi vale √2/2. L’area di ogni triangolo vale allora √2/4.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Area of a regular octagon with an inscribed square of area 2*

![[src_kangourou_2024_junior_semifinale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A0) at (0.924, 0.383);
  \coordinate (A1) at (0.383, 0.924);
  \coordinate (A2) at (-0.383, 0.924);
  \coordinate (A3) at (-0.924, 0.383);
  \coordinate (A4) at (-0.924, -0.383);
  \coordinate (A5) at (-0.383, -0.924);
  \coordinate (A6) at (0.383, -0.924);
  \coordinate (A7) at (0.924, -0.383);
  \draw (A0) -- (A1) -- (A2) -- (A3) -- (A4) -- (A5) -- (A6) -- (A7) -- cycle;
  \draw (A1) -- (A3) -- (A5) -- (A7) -- cycle;
  \fill (A1) circle (0.04);
  \fill (A3) circle (0.04);
  \fill (A5) circle (0.04);
  \fill (A7) circle (0.04);
\end{tikzpicture}
\end{document}
```

> (Point 3) The figure shows a regular octagon and a square inscribed in it, whose vertices are four of the octagon's vertices. The area of the square is 2. What is the area of the octagon?
> A) 1 + √2              B) 5/2             C) 2√2             D) 3            E) 3√2 – 1  
> Answer C). Solution. The side of the square measures √2, and its diagonal measures 2. The octagon can be expressed as the union of the eight isosceles triangles obtained by joining the vertices to the center; the congruent sides of these triangles are half the diagonal of the square and therefore measure 1, and their height relative to these sides is half the side of the square and therefore equals √2/2. The area of each triangle is then √2/4.


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_disuguaglianze,skill_manipolazione_algebrica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di cifre di N (20230...0)*

> (Punti 3) La rappresentazione decimale del numero intero N ha la forma 20230…0, dove le cifre 
> non indicate sono tutte 0. Si sa che lo 0,0002024 % di N è maggiore di 2025. Quante cifre deve avere 
> N al minimo? 
> A) 6             B) 7             C) 8            D) 10           E) 12 
> Risposta: D). Soluzione.  L’intero positivo k deve essere tale che 2023 × 10k × 2024 / 107+2 > 2025: si deve 
> dunque avere k ≥ 6.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of digits of N (20230...0)*

> (Point 3) The decimal representation of the integer N is of the form 20230…0, where all the digits not shown are 0. It is known that 0.0002024% of N is greater than 2025. What is the minimum number of digits N must have?
> A) 6             B) 7             C) 8            D) 10           E) 12 
> Answer: D). Solution. The positive integer k must satisfy 2023 × 10^k × 2024 / 107+2 > 2025; therefore, k ≥ 6 must hold.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_disuguaglianze|Inequalities]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,topic_combinatoria,method_fattorizzazione,skill_conteggio_sistematico,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo numero di spagnoli con 143 strette di mano*

> (Punti 4) Ad una festa presso l’ambasciata italiana sono stati invitati alcuni spagnoli e alcuni 
> francesi, più di uno per ciascuna nazionalità e anche gli italiani presenti sono più di uno. Ogni 
> italiano dà il benvenuto una e una sola volta a ogni invitato straniero con una stretta di mano e non 
> vi sono altre strette di mano: alla fine, le strette di mano sono complessivamente 143. Quanti 
> potrebbero essere, al massimo, gli spagnoli invitati? 
> A) 7             B) 8             C) 9             D) 10            E) 11 
> Risposta: E). Soluzione. Il numero di strette di mano è il prodotto del numero degli italiani con la somma del 
> numero degli spagnoli e del numero dei francesi. Volendo esprimere 143 come prodotto di interi ci sono solo 
> due possibilità: 1 × 143 e 11 × 13. La prima è da escludere per ipotesi. Allora gli stranieri potrebbero essere al 
> massimo 13 e quindi gli spagnoli al massimo 13 – 2 = 11.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum number of Spaniards with 143 handshakes*

> (Point 4) At a party at the Italian embassy, some Spaniards and some French people were invited—more than one from each nationality—and the Italians present are also more than one. Each Italian welcomes each foreign guest once and only once with a handshake, and there are no other handshakes: in the end, the total number of handshakes is 143. What is the maximum possible number of Spaniards invited?
> A) 7             B) 8             C) 9             D) 10            E) 11 
> Answer: E). Solution. The number of handshakes is the product of the number of Italians and the sum of the number of Spaniards and the number of French people. If we want to express 143 as a product of integers, there are only two possibilities: 1 × 143 and 11 × 13. The first must be ruled out by hypothesis. Then the foreigners could be at most 13, and therefore the Spaniards could be at most 13 – 2 = 11.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_algebra,topic_aritmetica,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Euro che restano al figlio piu grande (proporzioni)*

> (Punti 4) Un padre suddivide fra i suoi tre figli, di 8, 12 e 18 anni, la somma di 380 euro in parti 
> inversamente proporzionali alle loro età. I tre figli decidono di comune accordo di fare un regalo alla 
> madre e dividerne il costo di 304 euro in parti direttamente proporzionali alle cifre che hanno 
> ricevuto dal padre. Quanti euro restano al figlio più grande?  
> A) 16            B) 15             C) 12              D) 18            E) 20 
> Risposta A). Soluzione. Fatta 1 la somma che tocca al figlio di 12 anni, a quello di 8 toccano 3/2 e a quello 
> di 18 toccano 2/3, dunque, in ordine crescente di età, 180, 120 e 80 euro. La ripartizione di 304 euro, ora in 
> parti direttamente proporzionali a questi importi, è quindi nello stesso ordine 144, 96 e 64 euro.

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Euros remaining for the eldest child (proportions)*

> (Point 4) A father divides the sum of 380 euros among his three children, who are 8, 12, and 18 years old, in parts inversely proportional to their ages. By mutual agreement, the three children decide to give their mother a gift and to divide the cost of 304 euros among themselves in parts directly proportional to the amounts they received from their father. How many euros are left for the oldest child?
> A) 16            B) 15             C) 12              D) 18            E) 20 
> Answer A). Solution. Once the sum due to the 12-year-old child has been set at 1, the 8-year-old gets 3/2 and the 18-year-old gets 2/3; thus, in ascending order of age, the amounts are 180, 120, and 80 euros. The allocation of 304 euros, now in parts directly proportional to these amounts, is therefore, in the same order, 144, 96, and 64 euros.


**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_probabilita,method_conteggio,method_casework,skill_modellizzazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Probabilita che il diamante sia nella scatola 9*

> (Punti 4) Davanti a me sono allineate 10 scatole numerate delle quali una e una sola contiene un 
> diamante. Da informazioni che ho ricevuto, la scatola n. 10 ha la probabilità 2/5 di contenere il 
> diamante, le rimanenti scatole hanno tutte la stessa probabilità. Ho appena aperto le prime tre scatole 
> e non ho trovato il diamante. A questo punto, qual è la probabilità che il diamante sia nella scatola n. 9? 
> A) 1/15              B) 3/5               C) 1/10              D) 1/5              E) Nessuna delle precedenti. 
> Risposta: C) o E). Soluzione. L’enunciato, con la scelta di aprire tre scatole che fanno parte del blocco delle 
> prime nove equiprobabili, consente di escludere la decima scatola dall’effetto delle informazioni ottenute. La 
> probabilità 3/5 che il diamante non sia nella scatola n. 10 è dunque ora concentrata nelle 6 scatole dalla quarta 
> alla nona incluse, ed equi-distribuita fra queste. 
> E’ tuttavia lecito anche ignorare la considerazione precedente e considerare il modello alternativo che prevede 
> una massa di 15/15 spalmata sulle scatole nel modo seguente: 1/15 in ognuna delle scatole dalla prima alla 
> nona e 6/15 nella decima. In questo modo l’apertura delle prime tre scatole riduce a 6/15 la massa presente nel 
> complesso di quelle dalla quarta alla nona. Gli eventi “Il diamante si trova in qualche scatola dalla quarta alla 
> nona” e “Il diamante si trova nella decima scatola” sono dunque equiprobabili, disgiunti ed esaustivi: la risposta 
> è allora (1/6) × (1/2) = 1/12.

**Topic:** [[topic_probabilita|Probabilita e statistica]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Probability that the diamond is in box 9*

> (Point 4) In front of me, 10 numbered boxes are arranged in a row, and exactly one of them contains a diamond. According to information I have received, box no. 10 has a probability of 2/5 of containing the diamond, and all the remaining boxes have the same probability. I have just opened the first three boxes and have not found the diamond. At this point, what is the probability that the diamond is in box no. 9?
> A) 1/15 B) 3/5 C) 1/10 D) 1/5 E) None of the above.
> Answer: C) or E). Solution. The statement, with the choice of opening three boxes that are part of the block of the first nine equally probable boxes, makes it possible to exclude the tenth box from the effect of the information obtained. The probability 3/5 that the diamond is not in box no. 10 is therefore now concentrated in the six boxes from the fourth to the ninth inclusive, and is equally distributed among them. However, it is also permissible to ignore the preceding consideration and to consider the alternative model in which a mass of 15/15 is spread over the boxes as follows: 1/15 in each of the boxes from the first to the ninth, and 6/15 in the tenth. In this way, opening the first three boxes reduces to 6/15 the mass present in the set of boxes from the fourth to the ninth. The events "The diamond is in some box from the fourth to the ninth" and "The diamond is in the tenth box" are therefore equally probable, mutually exclusive, and exhaustive: the answer is then (1/6) × (1/2) = 1/12.


**Topic:** [[topic_probabilita|Probability and statistics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casework|Case analysis]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,method_congruenze,method_fattorizzazione,skill_riconoscimento_pattern,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Cifra delle unita di 2023^2024 - 2023^2023*

> (Punti 5) Qual è la cifra delle unità del numero 20232024 – 20232023? 
> A) 0          B) 2           C) 4            D) 6            E) 8 
> Risposta: C). Soluzione. Il numero in questione coincide con 2022 × 20232023. Le cifre delle unità delle 
> potenze intere positive di 3, a partire dalla prima, si susseguono con periodo 3, 9, 7, 1 di lunghezza quattro: la 
> stessa cosa accade evidentemente anche per le potenze intere positive di qualunque numero la cui cifra delle 
> unità sia 3. Si ha 2023 = 505 × 4 + 3: allora quella di 20232023 è 7.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Unit figure for 2023^2024 - 2023^2023*

> (Point 5) What is the units digit of the number 20232024 – 20232023?
> A) 0          B) 2           C) 4            D) 6            E) 8 
> Answer: C). Solution. The number in question is equal to 2022 × 20232023. The units digits of the positive integer powers of 3, starting from the first, follow the cycle 3, 9, 7, 1 of length four: evidently the same holds for the positive integer powers of any number whose units digit is 3. We have 2023 = 505 × 4 + 3: therefore the units digit of 20232023 is 7.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_geometria_analitica,topic_aritmetica,method_coordinate,skill_astrazione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Perche un quadrato a coordinate intere non puo avere area 27*

> (Punti 5) Nel piano cartesiano considera un quadrato Q i cui vertici hanno, ciascuno, entrambe le 
> coordinate intere. Per quale dei seguenti motivi non può accadere che l’area di Q sia 27?   
> A) Perché 27 è un intero dispari.             B) Perché 27 non è la somma di due quadrati perfetti. 
> C) Perché 27 è un cubo perfetto.             D) Perché 27 non è un quadrato perfetto. 
> E) Nessuno dei precedenti è un valido motivo. 
> Risposta: B). Soluzione. Per il teorema di Pitagora, il quadrato della misura del lato di Q deve essere la somma 
> di due quadrati perfetti. Le altre quattro affermazioni sono facilmente confutabili (per confutare C basta, ad 
> esempio, supporre che due vertici adiacenti di Q siano i punti (0, 2) e (2, 0)).

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Why can't a square with integer coordinates have an area of 27?*

> (Point 5) In the Cartesian plane, consider a square Q whose vertices each have both coordinates as integers. For which of the following reasons can it not happen that the area of Q is 27?
> A) Because 27 is an odd integer. B) Because 27 is not the sum of two perfect squares.
> C) Because 27 is a perfect cube. D) Because 27 is not a perfect square.
> E) None of the foregoing are valid reasons.
> Answer: B). Solution. By the Pythagorean theorem, the square of the length of a side of Q must be the sum of two perfect squares. The other four statements are easily refuted (to refute C, for example, it suffices to assume that two adjacent vertices of Q are the points (0, 2) and (2, 0)).


**Topic:** [[topic_geometria_analitica|Coordinate geometry]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*In che giorno cade il compleanno di Carlo (verita alterne)*

> (Punti 6) A giorni alterni, Carlo dice la verità o mente per l’intera giornata. Nel giorno del suo 
> quindicesimo compleanno, Carlo ha fatto le tre affermazioni riportate qui di seguito:

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*On what day does Carlo's birthday fall (alternative truths)?*

> (Point 6) On alternate days, Carlo either tells the truth or lies all day long. On the day of his fifteenth birthday, Carlo made the three statements set out below:


**Topic:** [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,topic_combinatoria,method_backward,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*In quanti modi ripartire 1..18 in coppie con somma quadrato*

> 10. (Punti 4) L’insieme dei numeri interi tra 1 e 18 inclusi va ripartito in nove coppie, in modo che la somma dei due numeri che compongono ogni coppia sia un quadrato perfetto. In quanti diversi modi è possibile farlo? Risposta: 0001. Soluzione. I quadrati perfetti ottenibili sommando i due numeri delle varie coppie possono essere solo 4, 9, 16 o 25. Si vede immediatamente che alcuni accoppiamenti sono obbligati: (18, 7), (17, 8), (16, 9); inoltre, visto che 9 – 2 = 7, è obbligato anche l’accoppiamento (2, 14). Da quest’ultimo segue però che anche tutti gli altri sono obbligati: si deve avere (11, 5), dunque nell’ordine (4, 12), (13, 3), (6, 10), (1, 15).

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_backward|Ragionamento all'indietro]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0001
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*In how many ways can 1..18 be partitioned into pairs whose sum is a perfect square?*

> 10. (4 points) The set of integers from 1 to 18 inclusive is to be divided into nine pairs such that the sum of the two numbers in each pair is a perfect square. In how many different ways can this be done? Answer: 0001. Solution. The perfect squares obtainable by adding the two numbers in the various pairs can only be 4, 9, 16, or 25. It is immediately apparent that some pairings are forced: (18, 7), (17, 8), (16, 9); moreover, since 9 – 2 = 7, the pairing (2, 14) is also forced. However, from this last one it follows that all the others are also forced: we must have (11, 5), and hence, in order, (4, 12), (13, 3), (6, 10), (1, 15).


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_backward|Working backwards]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_geometria_solida,method_simmetria,method_conteggio,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Superficie del solido a L centralmente simmetrico*

![[src_kangourou_2024_junior_semifinale__prob11.png]]

> In figura vedi un mattoncino isolato a forma di L ricavato da un cubo di lato 1 cm rimuovendo un parallelepipedo di dimensioni, in centimetri, $\frac{1}{2}$, $\frac{1}{2}$ e $1$. Incollando 4 di questi mattoncini con 10 cubetti di lato 1 si è ottenuto il solido centralmente simmetrico che vedi in figura. Qual è, in centimetri quadrati, la sua superficie? (vedi figura)

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0042
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Surface of the centrally symmetric L-shaped solid*

![[src_kangourou_2024_junior_semifinale__prob11.png]]

> In the figure, you see an isolated L-shaped brick obtained from a cube with an edge length of 1 cm by removing a parallelepiped with dimensions, in centimeters, $\frac{1}{2}$, $\frac{1}{2}$, and $1$. By gluing 4 of these bricks together with 10 cubes of edge length 1, the centrally symmetric solid shown in the figure was obtained. What is its surface area, in square centimeters? (see figure)


**Topic:** [[topic_geometria_solida|Solid geometry]]
**Metodo:** [[method_simmetria|Using symmetry]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,topic_algebra,method_estremalita,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo c con 1<=a<=b<=c e ab+ac+bc=abc*

> 12. (Punti 5) Tre numeri interi a, b, c sono tali che 1 ≤ a ≤ b ≤ c e ab + ac + bc = abc. Quanto può valere al massimo c? Risposta: 0006. Soluzione. Essendo i tre numeri diversi da 0, dividendo i due membri per abc la seconda condizione si può scrivere nella forma (1/c) + (1/b) + (1/a) = 1. È chiaro allora che, affinché c sia il più grande possibile, a e b devono essere i più piccoli possibile. Nessuno dei due può essere 1 e a = b = 2 non è accettabile, ma lo sono a = 2 e b = 3 o viceversa: in entrambi i casi c deve essere 6.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 0006
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum c such that 1 <= a <= b <= c and ab + ac + bc = abc*

> 12. (5 points) Three integers a, b, c satisfy 1 ≤ a ≤ b ≤ c and ab + ac + bc = abc. What is the maximum possible value of c? Answer: 0006. Solution. Since the three numbers are all non-zero, dividing both sides by abc allows the second condition to be written in the form (1/c) + (1/b) + (1/a) = 1. It is then clear that, for c to be as large as possible, a and b must be as small as possible. Neither of them can be 1, and a = b = 2 is not acceptable, but a = 2 and b = 3, or vice versa, are acceptable: in both cases, c must be 6.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_aritmetica,topic_combinatoria,topic_algebra,method_casework,skill_conteggio_sistematico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti interi tra 0 e 10 esprimibili con quattro 4*

> 13. (Punti 6) Voglio esprimere il maggior numero possibile di interi utilizzando solo la cifra 4 ed esattamente quattro volte. Posso accostare più volte la cifra 4, utilizzare le quattro operazioni aritmetiche e disporre parentesi nei modi che ritengo opportuni. Ad esempio posso scrivere 0 = 4 – 4 + 4 – 4, oppure 15 = 44/4 + 4, oppure 160 = (44 – 4) × 4. Quanti dei numeri interi tra 0 e 10 compresi posso esprimere con questa procedura? Risposta: 0011. Soluzione. 0 = 4 – 4 + 4 – 4; 1 = 44/44; 2 = 4/4 + 4/4; 3 = (4 + 4 + 4)/4; 4 = 4 – (4 – 4)/4; 5 = (4 × 4 + 4)/4; 6 = (4 + 4)/4 + 4; 7 = 44/4 – 4; 8 = 4 + 4 + 4 – 4; 9 = 4 + 4 + 4/4; 10 = (44 – 4)/4.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** 0011
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*How many integers between 0 and 10 can be expressed using four 4s?*

> 13. (6 points) I want to express as many integers as possible using only the digit 4 and exactly four times. I may concatenate the digit 4 multiple times, use the four arithmetic operations, and place parentheses in whatever ways I see fit. For example, I can write 0 = 4 – 4 + 4 – 4, or 15 = 44/4 + 4, or 160 = (44 – 4) × 4. How many of the integers from 0 to 10 inclusive can I express using this procedure? Answer: 0011. Solution. 0 = 4 – 4 + 4 – 4; 1 = 44/44; 2 = 4/4 + 4/4; 3 = (4 + 4 + 4)/4; 4 = 4 – (4 – 4)/4; 5 = (4 × 4 + 4)/4; 6 = (4 + 4)/4 + 4; 7 = 44/4 – 4; 8 = 4 + 4 + 4 – 4; 9 = 4 + 4 + 4/4; 10 = (44 – 4)/4.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,topic_algebra,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Per quanti secondi Aldo aspetta Bernardo*

> 14. (Punti 6) Le ruote della bicicletta di Aldo hanno un raggio di 30 cm, quelle della bicicletta di Bernardo un raggio di 24 cm. Aldo e Bernardo iniziano a pedalare allo stesso istante nella stessa direzione e, a parità di tempo, il numero di giri fatti dalle loro ruote è lo stesso e si mantiene costante durante la pedalata. Dopo 15 minuti Aldo si ferma per aspettare Bernardo. Per quanti secondi lo dovrà aspettare? Risposta: 0225. Soluzione. Il rapporto tra le lunghezze dei raggi (A/B) è 5/4, la lunghezza della circonferenza è proporzionale al raggio dunque la proporzione inversa vale tra i tempi necessari a percorrere una stessa distanza. Allora per arrivare dove è arrivato Aldo, a Bernardo serve 5/4 del tempo impiegato da Aldo, dunque 1/4 in più del tempo da lui impiegato finora.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 0225
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*For how many seconds does Aldo wait for Bernardo?*

> 14. (Points 6) The wheels of Aldo's bicycle have a radius of 30 cm, and those of Bernardo's bicycle have a radius of 24 cm. Aldo and Bernardo start pedaling at the same instant in the same direction, and, for the same amount of time, the number of revolutions made by their wheels is the same and remains constant during pedaling. After 15 minutes, Aldo stops to wait for Bernardo. For how many seconds will he have to wait for him? Answer: 0225. Solution. The ratio of the radii (A/B) is 5/4; the circumference is proportional to the radius, so an inverse proportion holds for the times required to cover the same distance. Therefore, to reach where Aldo has arrived, Bernardo needs 5/4 of the time Aldo took, which means 1/4 more than the time Aldo has taken so far.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_aritmetica,method_conteggio,method_casework,skill_manipolazione_algebrica,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Di quanti interi 17 e il massimo divisore proprio*

> 15. (Punti 6) Di quanti numeri interi positivi il numero 17 è il più grande divisore proprio? Risposta: 0007. Soluzione. 17 è divisore di ogni intero del tipo 17 × k con k intero positivo. Affinché sia il più grande divisore, è chiaro che deve essere k ≤ 17. È chiaro anche che sono accettabili tutti i numeri primi non maggiori di 17. Nessun altro k può esserlo: ogni divisore non primo maggiore di 1 fornirebbe un divisore di 17 × k maggiore di 17.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0007
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*How many integers is 17 the greatest proper divisor of?*

> 15. (Points 6) How many positive integers have 17 as their greatest proper divisor? Answer: 0007. Solution. 17 is a divisor of every integer of the form 17 × k, where k is a positive integer. For it to be the greatest divisor, it is clear that k must be ≤ 17. It is also clear that all prime numbers not greater than 17 are acceptable. No other k can work: any non-prime divisor greater than 1 would yield a divisor of 17 × k that is greater than 17.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_combinatoria,topic_algebra,method_conteggio,skill_manipolazione_algebrica,skill_stima"></span>

<div class="qlang-switch" data-default="it"></div>


*Piu piccolo n con S_n+S_{n-1}>2024 (diagonali poligono)*

> 16. (Punti 7) Assegnato un poligono convesso di n lati (n > 3), indichiamo con Sn il numero delle sue diagonali. Qual è il più piccolo valore di n tale che Sn + Sn – 1 > 2024? Risposta: 0048. Soluzione. Per ogni n > 3 si ha Sn = n(n – 3)/2, da cui Sn + Sn – 1 = $n^{2}$– 4n + 2. Affinché si abbia $n^{2}$– 4n – 2022 > 0 deve essere n > 2 + √2026. Il primo quadrato perfetto maggiore di 2026 è 2116 = $46^{2}$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** 0048
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Smaller n with S_n+S_{n-1}>2024 (polygon diagonals)*

> 16. (7 points) Given a convex polygon with n sides (n > 3), let Sn denote the number of its diagonals. What is the smallest value of n such that Sn + Sn – 1 > 2024? Answer: 0048. Solution. For every n > 3, we have Sn = n(n – 3)/2, whence Sn + Sn – 1 = $n^{2}$– 4n + 2. For $n^{2}$– 4n – 2022 > 0 to hold, we must have n > 2 + √2026. The first perfect square greater than 2026 is 2116 = $46^{2}$.


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_stima|Estimation and approximation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,topic_algebra,method_backward,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto primo e ultimo intero con cubi consecutivi = 2024*

> 17. (Punti 7) Sommando i cubi di alcuni numeri interi positivi consecutivi si ottiene come risultato 2024. Quanto vale il prodotto del primo con l’ultimo di questi interi? Risposta: 0018. Soluzione. Un noto teorema afferma che, per ogni intero positivo n, la somma dei cubi dei primi n interi positivi coincide con il quadrato della somma di questi primi n interi. La somma dei primi n interi positivi vale n(n + 1)/2: velocemente si trova allora che $45^{2}$ = 2025 è la somma dei cubi degli interi da 1 a 9. Dunque 2024 è la somma dei cubi degli interi da 2 a 9.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 0018
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Product of the first and last integers with consecutive cubes = 2024*

> 17. (7 points) Adding the cubes of some consecutive positive integers yields 2024. What is the product of the first and the last of these integers? Answer: 0018. Solution. A well-known theorem states that, for any positive integer n, the sum of the cubes of the first n positive integers equals the square of the sum of these first n integers. The sum of the first n positive integers is n(n + 1)/2; thus, one quickly finds that $45^{2}$ = 2025 is the sum of the cubes of the integers from 1 to 9. Therefore, 2024 is the sum of the cubes of the integers from 2 to 9.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Working backwards]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_probabilita,topic_aritmetica,method_fattorizzazione,method_casework,skill_manipolazione_algebrica,skill_modellizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di biglie con probabilita stesso colore 13/24*

> In un sacchetto ci sono alcune biglie verdi e alcune biglie rosse. Estraendone due a caso, la probabilità che siano entrambe dello stesso colore è $\dfrac{13}{24}$. Quante possono essere, al minimo, le biglie nel sacchetto?

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0016
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of marbles with equal probability of the same color: 13/24*

> In a bag, there are some green marbles and some red marbles. If two are drawn at random, the probability that both are the same color is $\dfrac{13}{24}$. What is the minimum number of marbles that could be in the bag?


**Topic:** [[topic_probabilita|Probability and statistics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_modellizzazione|Modelling / translating the text]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
