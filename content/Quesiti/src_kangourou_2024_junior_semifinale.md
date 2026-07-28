---
title: Kangourou Semifinale individuale Junior 2024
tipo: gara
competition: Kangourou Semifinale individuale Junior 2024
family: kangourou
year: '2024'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2024_junior_semifinale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,topic_algebra,skill_ragionamento_geometrico"></span>

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
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*What equality between areas and certainly true (park) *

![[src_kangourou_2024_junior_semifinale__prob1.png]]

> The two pictures show the same park divided into 5 zones; the letters in three of the zones indicate the area. The park is home to two kangaroos: one is usually pasture in the clearest part of the first image, the other in the clearest part of the second. The two sides overlap partially. In this way, both kangaroos have at their disposal exactly half the area of the park. Which of the following equations is certainly true? A) A = C B) B = A + C
>  
> C) B = (A + C) / 2 D) B = 2 (A + C) / 3 E) B = 3 (A + C) / 5 Answer B). I'm not alone. The areas for which the letters are not indicated must be B + D = A + E + C = B + E (each kangaroo has half of the park available). From the second equation it follows that it is still true B). It is trivial to find examples in which A) is false.

**Answer:** B
[[src_kangourou_2024_junior_semifinale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

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
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the regular octagon with square inscribed area 2*

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

> (Points 3) The figure shows a regular octagon and a square inscribed in it, whose vertices are four of the vertices of the octagon. The area of the square is 2. How much is the area of the octagon? (A) 1 + √2 B) 5/2 C) 2√2 D) 3 E) 3√2  1 Answer C). The solution. The side of the square measures √2 and its diagonal measures 2. The octagon can be expressed as the union of the eight isosceles triangles that are obtained by joining the vertices with the center, whose congruent sides are half the square's diagonal and so measure 1 and whose height relative to those sides is half the square's side and so is √2/2. The area of each triangle is then √2/4.

**Answer:** C
[[src_kangourou_2024_junior_semifinale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di cifre di N (20230...0)*

> (Punti 3) La rappresentazione decimale del numero intero N ha la forma 20230…0, dove le cifre 
> non indicate sono tutte 0. Si sa che lo 0,0002024 % di N è maggiore di 2025. Quante cifre deve avere 
> N al minimo? 
> A) 6             B) 7             C) 8            D) 10           E) 12 
> Risposta: D). Soluzione.  L’intero positivo k deve essere tale che 2023 × 10k × 2024 / 107+2 > 2025: si deve 
> dunque avere k ≥ 6.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of digits of N (20230...0) *

> (Points 3) The decimal representation of the integer N has the form 20230...0, where the unindicated digits are all 0. It is known that 0,0002024% of N is greater than 2025. How many digits must N have at least? A) 6 B) 7 C) 8 D) 10 E) 12 Answer: D). The solution. The positive integer k must be such that 2023 × 10k × 2024 / 107+2 > 2025: one must therefore have k ≥ 6.

**Answer:** D
[[src_kangourou_2024_junior_semifinale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,topic_combinatoria,method_fattorizzazione,skill_conteggio_sistematico"></span>

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
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


Maximum number of Spaniards with 143 handshakes

> (Point 4) At a party at the Italian Embassy a number of Spaniards and some Frenchmen were invited, more than one for each nationality and more than one Italianman was also present. Every Italian welcomes every foreign guest once and only once with a handshake and there are no other handshakes: in the end, the handshakes total 143. How many Spaniards could there be at most? A) 7 B) 8 C) 9 D) 10 E) 11 Answer: E). The solution. The number of handshakes is the product of the number of Italians with the sum of the number of Spaniards and the number of Frenchmen. If we want to express 143 as the product of integers, there are only two possibilities: 1 × 143 and 11 × 13. The first is to be ruled out as a hypothesis. So the foreigners could be a maximum of 13 and then the Spanish a maximum of 13  2 = 11.

**Answer:** E
[[src_kangourou_2024_junior_semifinale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_algebra,topic_aritmetica,skill_modellizzazione"></span>

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
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*€ remaining to the eldest child (proportions) *

> A father divides between his three children, aged 8, 12 and 18, the sum of $380 into parts that are inversely proportional to their age. The three children agree to give a gift to the mother and divide the cost of the €304 into parts directly proportional to the figures received from the father. How much is left for the eldest son? (A) 16 (B) 15 (C) 12 (D) 18 (E) 20 Answer A) The solution. If 1 is made, the amount for a 12-year-old child, for an 8-year-old child, it is 3/2, and for an 18-year-old, it is 2/3, so in increasing age order, it is 180, 120 and 80 euros. The breakdown of EUR 304, now in parts directly proportional to these amounts, is therefore in the same order as EUR 144, 96 and 64.

**Answer:** A
[[src_kangourou_2024_junior_semifinale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_probabilita,skill_modellizzazione"></span>

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
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


The probability that the diamond is in box 9

> (Points 4) 10 numbered boxes are lined up in front of me, each containing a diamond. From the information I received, box no. 10 has a 2/5 chance of containing the diamond, the remaining boxes all have the same chance. I just opened the first three boxes and I couldn't find the diamond. At this point, what is the probability that the diamond is in box n? 9? (a) 1/15 (b) 3/5 (c) 1/10 (d) 1/5 (e) None of the above. Answer: C) or E). The solution. The announcement, with the choice to open three boxes which are part of the block of the first nine equally likely, allows the tenth box to be excluded from the effect of the information obtained. The 3/5 probability that the diamond is not in box n. 10 is therefore now concentrated in the 6 boxes from the fourth to the ninth inclusive, and equally distributed among them. However, it is also advisable to ignore the above consideration and consider the alternative model which provides for a mass of 15/15 to be spread on the boxes as follows: 1/15 in each of the boxes from the first to the ninth and 6/15 in the tenth. Thus the opening of the first three boxes reduces to 6/15 the mass present in the fourth to the ninth boxes. Events The diamond is in some box from the fourth to the ninth and The diamond is in the tenth box are therefore equally likely, disjoint and exhaustive: the answer is then (1/6) × (1/2) = 1/12.

**Answer:** C
[[src_kangourou_2024_junior_semifinale__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Cifra delle unita di 2023^2024 - 2023^2023*

> (Punti 5) Qual è la cifra delle unità del numero 20232024 – 20232023? 
> A) 0          B) 2           C) 4            D) 6            E) 8 
> Risposta: C). Soluzione. Il numero in questione coincide con 2022 × 20232023. Le cifre delle unità delle 
> potenze intere positive di 3, a partire dalla prima, si susseguono con periodo 3, 9, 7, 1 di lunghezza quattro: la 
> stessa cosa accade evidentemente anche per le potenze intere positive di qualunque numero la cui cifra delle 
> unità sia 3. Si ha 2023 = 505 × 4 + 3: allora quella di 20232023 è 7.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


This is the total amount of unemployment in the Union as defined in point (a) of Article 21 (1) of Regulation (EU) No 575/2013.

> (Points 5) What is the unit number of the number 20232024  20232023? A) 0 B) 2 C) 4 D) 6 E) 8 Answer: C). The solution. This number corresponds to 2022 × 20232023. The units of the positive integers of 3, starting with the first, follow each other with a period of 3, 9, 7, 1 of length four: the same is evidently true for the positive integers of any number whose unit number is 3. You have 2023 = 505 × 4 + 3: so that of 20232023 is 7.

**Answer:** C
[[src_kangourou_2024_junior_semifinale__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_geometria_analitica,topic_aritmetica,method_coordinate,skill_astrazione"></span>

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
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


Because a square of whole coordinates cannot have an area of 27

> In the Cartesian plane, consider a square Q whose vertices have, each, both integers. For which of the following reasons cannot the area of Q be 27? A) Because 27 is a whole odd. B) Because 27 is not the sum of two perfect squares. C) Because 27 is a perfect cube. D) Because 27 is not a perfect square. E) None of the above is a valid reason. Answer: B). The solution. For Pythagoras' theorem, the square of the measure of the side of Q must be the sum of two perfect squares. The other four statements are easily refutable (to refute C it is enough, for example, to assume that two adjacent vertices of Q are the points (0, 2) and (2, 0)).

**Answer:** B
[[src_kangourou_2024_junior_semifinale__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_logica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*In che giorno cade il compleanno di Carlo (verita alterne)*

> (Punti 6) A giorni alterni, Carlo dice la verità o mente per l’intera giornata. Nel giorno del suo 
> quindicesimo compleanno, Carlo ha fatto le tre affermazioni riportate qui di seguito:

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


What day does Charles' birthday fall on?

> On alternate days, Charles tells the truth or lies for the whole day. On the day of his fifteenth birthday, Charles made the following three statements:

**Answer:** E
[[src_kangourou_2024_junior_semifinale__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,topic_combinatoria,method_backward,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*In quanti modi ripartire 1..18 in coppie con somma quadrato*

> 10. (Punti 4) L’insieme dei numeri interi tra 1 e 18 inclusi va ripartito in nove coppie, in modo che la somma dei due numeri che compongono ogni coppia sia un quadrato perfetto. In quanti diversi modi è possibile farlo? Risposta: 0001. Soluzione. I quadrati perfetti ottenibili sommando i due numeri delle varie coppie possono essere solo 4, 9, 16 o 25. Si vede immediatamente che alcuni accoppiamenti sono obbligati: (18, 7), (17, 8), (16, 9); inoltre, visto che 9 – 2 = 7, è obbligato anche l’accoppiamento (2, 14). Da quest’ultimo segue però che anche tutti gli altri sono obbligati: si deve avere (11, 5), dunque nell’ordine (4, 12), (13, 3), (6, 10), (1, 15).

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0001
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*How many ways to divide 1.18 into square-sum pairs*

> 10. (Points 4) The set of integers between 1 and 18 included must be divided into nine pairs, so that the sum of the two numbers that make up each pair is a perfect square. How many different ways can you do that? The answer is: 0001. The solution. The perfect squares obtained by adding the two numbers of the various pairs can only be 4, 9, 16 or 25. It is immediately apparent that some couplings are required: (18, 7), (17, 8), (16, 9); furthermore, since 9  2 = 7, coupling (2, 14) is also required. However, it follows from the latter that all the others are also required: one must have (11, 5), hence in the order (4, 12), (13, 3), (6, 10), (1, 15).

**Answer:** 0001
[[src_kangourou_2024_junior_semifinale__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_geometria_solida,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Superficie del solido a L centralmente simmetrico*

![[src_kangourou_2024_junior_semifinale__prob11.png]]

> In figura vedi un mattoncino isolato a forma di L ricavato da un cubo di lato 1 cm rimuovendo un parallelepipedo di dimensioni, in centimetri, $\frac{1}{2}$, $\frac{1}{2}$ e $1$. Incollando 4 di questi mattoncini con 10 cubetti di lato 1 si è ottenuto il solido centralmente simmetrico che vedi in figura. Qual è, in centimetri quadrati, la sua superficie? (vedi figura)

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0042
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*Centrally symmetrical surface of the L-solid*

![[src_kangourou_2024_junior_semifinale__prob11.png]]

> In the figure you can see an isolated L-shaped brick obtained from a 1 cm side cube by removing a parallel piped, in centimetres, $\frac{1}{2}$, $\frac{1}{2}$ and $1$. By joining 4 of these bricks with 10 cubes on side 1, you get the centrally symmetrical solid you see in the figure. What is its surface area in square centimeters? (see figure)

**Answer:** 0042
[[src_kangourou_2024_junior_semifinale__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,method_estremalita,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo c con 1<=a<=b<=c e ab+ac+bc=abc*

> 12. (Punti 5) Tre numeri interi a, b, c sono tali che 1 ≤ a ≤ b ≤ c e ab + ac + bc = abc. Quanto può valere al massimo c? Risposta: 0006. Soluzione. Essendo i tre numeri diversi da 0, dividendo i due membri per abc la seconda condizione si può scrivere nella forma (1/c) + (1/b) + (1/a) = 1. È chiaro allora che, affinché c sia il più grande possibile, a e b devono essere i più piccoli possibile. Nessuno dei due può essere 1 e a = b = 2 non è accettabile, ma lo sono a = 2 e b = 3 o viceversa: in entrambi i casi c deve essere 6.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0006
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum c with 1<=a<=b<=c and ab+ac+bc=abc*

> 12. (Points 5) Three integers a, b, c are such that 1 ≤ a ≤ b ≤ c and ab + ac + bc = abc. How much can c be worth at most? The answer is: 0006. The solution. Since the three numbers are different from 0, dividing the two members by abc the second condition can be written in the form (1/c) + (1/b) + (1/a) = 1. So it's clear that for c to be as big as possible, a and b have to be as small as possible. Neither can be 1 and a = b = 2 is not acceptable, but they are a = 2 and b = 3 or vice versa: in both cases c must be 6.

**Answer:** 0006
[[src_kangourou_2024_junior_semifinale__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_aritmetica,topic_combinatoria,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti interi tra 0 e 10 esprimibili con quattro 4*

> 13. (Punti 6) Voglio esprimere il maggior numero possibile di interi utilizzando solo la cifra 4 ed esattamente quattro volte. Posso accostare più volte la cifra 4, utilizzare le quattro operazioni aritmetiche e disporre parentesi nei modi che ritengo opportuni. Ad esempio posso scrivere 0 = 4 – 4 + 4 – 4, oppure 15 = 44/4 + 4, oppure 160 = (44 – 4) × 4. Quanti dei numeri interi tra 0 e 10 compresi posso esprimere con questa procedura? Risposta: 0011. Soluzione. 0 = 4 – 4 + 4 – 4; 1 = 44/44; 2 = 4/4 + 4/4; 3 = (4 + 4 + 4)/4; 4 = 4 – (4 – 4)/4; 5 = (4 × 4 + 4)/4; 6 = (4 + 4)/4 + 4; 7 = 44/4 – 4; 8 = 4 + 4 + 4 – 4; 9 = 4 + 4 + 4/4; 10 = (44 – 4)/4.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0011
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*Entire numbers between 0 and 10 expressed as four *

> 13. (Points 6) I want to express as many integers as possible using only the number 4 and exactly four times. I can approach the number 4 several times, use the four arithmetic operations, and arrange brackets in the ways that I think are appropriate. For example, I can write 0 = 4  4 + 4  4, or 15 = 44/4 + 4, or 160 = (44  4) × 4. How many of the integers between 0 and 10 can I express with this procedure? The answer is 0011. The solution. 0 = 4 – 4 + 4 – 4; 1 = 44/44; 2 = 4/4 + 4/4; 3 = (4 + 4 + 4)/4; 4 = 4 – (4 – 4)/4; 5 = (4 × 4 + 4)/4; 6 = (4 + 4)/4 + 4; 7 = 44/4 – 4; 8 = 4 + 4 + 4 – 4; 9 = 4 + 4 + 4/4; 10 = (44 – 4)/4.

**Answer:** 0011
[[src_kangourou_2024_junior_semifinale__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Per quanti secondi Aldo aspetta Bernardo*

> 14. (Punti 6) Le ruote della bicicletta di Aldo hanno un raggio di 30 cm, quelle della bicicletta di Bernardo un raggio di 24 cm. Aldo e Bernardo iniziano a pedalare allo stesso istante nella stessa direzione e, a parità di tempo, il numero di giri fatti dalle loro ruote è lo stesso e si mantiene costante durante la pedalata. Dopo 15 minuti Aldo si ferma per aspettare Bernardo. Per quanti secondi lo dovrà aspettare? Risposta: 0225. Soluzione. Il rapporto tra le lunghezze dei raggi (A/B) è 5/4, la lunghezza della circonferenza è proporzionale al raggio dunque la proporzione inversa vale tra i tempi necessari a percorrere una stessa distanza. Allora per arrivare dove è arrivato Aldo, a Bernardo serve 5/4 del tempo impiegato da Aldo, dunque 1/4 in più del tempo da lui impiegato finora.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0225
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


For how many seconds Aldo is waiting for Bernardo

> 14. The wheels of Aldo's bicycle have a radius of 30 cm, those of Bernardo's bicycle have a radius of 24 cm. Aldo and Bernardo start to pedal at the same time in the same direction and, at the same time, the number of turns made by their wheels is the same and remains constant during the pedal. After 15 minutes, Aldo stops to wait for Bernardo. How many seconds will you have to wait for him? The answer is 0225. The solution. The ratio of the lengths of the beams (A/B) is 5/4, the length of the circumference is proportional to the radius, so the inverse ratio is between the time required to travel the same distance. So to get to where Aldo got to, Bernardo needs 5/4 of Aldo's time, so 1/4 more than he has so far.

**Answer:** 0225
[[src_kangourou_2024_junior_semifinale__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_aritmetica,method_conteggio,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Di quanti interi 17 e il massimo divisore proprio*

> 15. (Punti 6) Di quanti numeri interi positivi il numero 17 è il più grande divisore proprio? Risposta: 0007. Soluzione. 17 è divisore di ogni intero del tipo 17 × k con k intero positivo. Affinché sia il più grande divisore, è chiaro che deve essere k ≤ 17. È chiaro anche che sono accettabili tutti i numeri primi non maggiori di 17. Nessun altro k può esserlo: ogni divisore non primo maggiore di 1 fornirebbe un divisore di 17 × k maggiore di 17.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0007
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*Of the integers 17 and the maximum proper divisor*

> 15. (Points 6) Of how many positive integers is the number 17 the greatest proper divisor? The answer is: 0007. The solution. 17 is the divisor of any integer of type 17 × k with positive integer k. For it to be the largest divisor, it is clear that k ≤ 17 must be. It is also clear that all prime numbers not greater than 17 are acceptable. No other k can be: every non-prime divisor greater than 1 would give a divisor of 17 × k greater than 17.

**Answer:** 0007
[[src_kangourou_2024_junior_semifinale__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_combinatoria,topic_algebra,method_conteggio,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Piu piccolo n con S_n+S_{n-1}>2024 (diagonali poligono)*

> 16. (Punti 7) Assegnato un poligono convesso di n lati (n > 3), indichiamo con Sn il numero delle sue diagonali. Qual è il più piccolo valore di n tale che Sn + Sn – 1 > 2024? Risposta: 0048. Soluzione. Per ogni n > 3 si ha Sn = n(n – 3)/2, da cui Sn + Sn – 1 = $n^{2}$– 4n + 2. Affinché si abbia $n^{2}$– 4n – 2022 > 0 deve essere n > 2 + √2026. Il primo quadrato perfetto maggiore di 2026 è 2116 = $46^{2}$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0048
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*Little number n with S_n+S_{n-1}>2024 (polygonal diagonals) *

> 16. (Points 7) Assigned to a convex polygon of n sides (n > 3), we indicate with Sn the number of its diagonal. What is the smallest value of n such that Sn + Sn  1 > 2024? The answer is 0048. The solution. For each n > 3 we have Sn = n(n  3)/2, where Sn + Sn  1 = $n^{2}$ 4n + 2. In order to have $n^{2}$ 4n  2022 > 0 must be n > 2 + √2026. The first perfect square greater than 2026 is 2116 = $46^{2}$.

**Answer:** 0048
[[src_kangourou_2024_junior_semifinale__Q16]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,method_backward,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto primo e ultimo intero con cubi consecutivi = 2024*

> 17. (Punti 7) Sommando i cubi di alcuni numeri interi positivi consecutivi si ottiene come risultato 2024. Quanto vale il prodotto del primo con l’ultimo di questi interi? Risposta: 0018. Soluzione. Un noto teorema afferma che, per ogni intero positivo n, la somma dei cubi dei primi n interi positivi coincide con il quadrato della somma di questi primi n interi. La somma dei primi n interi positivi vale n(n + 1)/2: velocemente si trova allora che $45^{2}$ = 2025 è la somma dei cubi degli interi da 1 a 9. Dunque 2024 è la somma dei cubi degli interi da 2 a 9.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0018
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*First and last whole product with consecutive cubes = 2024*

> 17. (Points 7) Adding the cubes of some consecutive positive integers gives us a result of 2024. How much is the product of the first with the last of these integers? The answer is 0018. The solution. A well-known theorem states that, for every positive integer n, the sum of the cubes of the first positive integers coincides with the square of the sum of these first n integers. The sum of the first n positive integers is n(n + 1)/2: quickly finds then that $45^{2}$ = 2025 is the sum of the cubes of the integers from 1 to 9. So 2024 is the sum of the cubes of integers 2 through 9.

**Answer:** 0018
[[src_kangourou_2024_junior_semifinale__Q17]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_probabilita,topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di biglie con probabilita stesso colore 13/24*

> In un sacchetto ci sono alcune biglie verdi e alcune biglie rosse. Estraendone due a caso, la probabilità che siano entrambe dello stesso colore è $\dfrac{13}{24}$. Quante possono essere, al minimo, le biglie nel sacchetto?

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0016
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1OumKNnnbfWmdaSCI2BT64qTv-3OcJjbK/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of seeds with the same colour probability 13/24*

> In a bag there are some green and some red balls. The probability that they are both of the same colour is $\dfrac{13}{24}$. How many eggs can there be in the bag at least?

**Answer:** 0016
[[src_kangourou_2024_junior_semifinale__Q18]]
