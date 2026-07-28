---
title: Kangourou Semifinale individuale Cadet 2024
tipo: gara
competition: Kangourou Semifinale individuale Cadet 2024
family: kangourou
year: '2024'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2024_cadet_semifinale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo punti comuni a 2024 circonferenze*

> (Punti 2) Nel piano sono tracciate 2024 circonferenze tutte distinte tra loro. Quanti potrebbero 
> essere al massimo i punti comuni a tutte le circonferenze? 
> A) 0             B) 1             C) 2             D) 3            E) 1012 
> Risposta: C). Soluzione. Per due punti passano infinite circonferenze complanari (ogni punto dell’asse del 
> segmento che li ha come estremi è centro di una di esse), per tre punti ne passa una sola.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum common points at 2024 circumferences*

> (Point 2) In the plan are mapped 2024 circumferences all distinct from each other. How many common points could all the circumferences have at most? A) 0 B) 1 C) 2 D) 3 E) 1012 Answer: C). The solution. For two points infinite planar circumferences pass (each point on the axis of the segment that has them as extremes is the center of one of them), for three points only one passes.

**Answer:** C
[[src_kangourou_2024_cadet_semifinale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area del triangolo ANC nel triangolo equilatero*

![[src_kangourou_2024_cadet_semifinale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.6]
  \coordinate (A) at (0,0);
  \coordinate (B) at (12,0);
  \coordinate (C) at (6,10.392);
  \coordinate (M) at (5,8.66);
  \coordinate (N) at (7,8.66);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (M) -- (N);
  \draw[thick] (A) -- (N);
  \fill[gray!40] (A) -- (N) -- (C) -- cycle;
  \draw[thick] (A) -- (N) -- (C) -- cycle;
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[left] at (M) {$M$};
  \node[right] at (N) {$N$};
\end{tikzpicture}
\end{document}
```

> (Punti 3) Il triangolo ABC in figura è equilatero, con il lato lungo 12 
> cm. Il segmento MN è parallelo al lato AB, mentre il segmento AM è 
> lungo 10 cm. Di quanti centimetri quadrati è l’area del triangolo ANC? 
> A) 36        B) 30 √3         C) 10 √3          D) 6√3          E) 10  
> Risposta: D). Sol. L’altezza del triangolo ABC è 12 × √3
> 2  cm e coincide con 
> quella del triangolo ANC rispetto alla base CN, che è lunga 2 cm.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the ANC triangle in the equilateral triangle*

![[src_kangourou_2024_cadet_semifinale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.6]
  \coordinate (A) at (0,0);
  \coordinate (B) at (12,0);
  \coordinate (C) at (6,10.392);
  \coordinate (M) at (5,8.66);
  \coordinate (N) at (7,8.66);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (M) -- (N);
  \draw[thick] (A) -- (N);
  \fill[gray!40] (A) -- (N) -- (C) -- cycle;
  \draw[thick] (A) -- (N) -- (C) -- cycle;
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[left] at (M) {$M$};
  \node[right] at (N) {$N$};
\end{tikzpicture}
\end{document}
```

> (Points 3) The ABC triangle in the figure is equilateral, with the side 12 cm long. The MN segment is parallel to the AB side, while the AM segment is 10 cm long. How many square centimetres is the area of the ANC triangle? (A) 36 (B) 30 (√ 3 C) 10 (√ 3 D) 6 (√ 3 E) 10 Answer: D). I'm not alone. The height of the triangle ABC is 12 × √3 2 cm and coincides with that of the triangle ANC with respect to the base CN, which is 2 cm long.

**Answer:** D
[[src_kangourou_2024_cadet_semifinale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,topic_algebra,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quale uguaglianza tra aree e certamente vera (parco)*

![[src_kangourou_2024_cadet_semifinale__prob3.png]]

> (Punti 3) Le due immagini mostrano lo stesso parco ripartito in 5 zone; le 
> lettere presenti in tre delle zone ne indicano l’area. Nel parco abitano due 
> canguri: uno è solito pascolare nella parte più chiara della prima immagine, 
> l’altro in quella più chiara della seconda. Le due parti si sovrappongono 
> parzialmente. In questo modo, entrambi i canguri hanno a disposizione 
> esattamente metà dell’area del parco. Quale delle seguenti uguaglianze è 
> certamente vera?  
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
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*What equality between areas and certainly true (park) *

![[src_kangourou_2024_cadet_semifinale__prob3.png]]

> The two pictures show the same park divided into 5 zones; the letters in three of the zones indicate the area. The park is home to two kangaroos: one is usually pasture in the clearest part of the first image, the other in the clearest part of the second. The two sides overlap partially. In this way, both kangaroos have at their disposal exactly half the area of the park. Which of the following equations is certainly true? A) A = C B) B = A + C
>  
> C) B = (A + C) / 2 D) B = 2 (A + C) / 3 E) B = 3 (A + C) / 5 Answer B). I'm not alone. The areas for which no letters are indicated must be B + D = A + E + C = B + E (each kangaroo has half of the park available). From the second equation it follows that it is still true B). It is trivial to find examples in which A) is false.

**Answer:** B
[[src_kangourou_2024_cadet_semifinale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma dei due numeri di Sofia da 5x+y=106*

> (Punti 4) Sofia ha in mente due numeri interi positivi minori di 20 che differiscono per più di 2. 
> Ne moltiplica uno per 5, somma l’altro al prodotto che ha ottenuto e raddoppia il risultato: ottiene 
> così 212. Qual è la somma dei due numeri che aveva in mente?  
> A) 26             B) 27              C) 28            D) 29              E) 30 
> Risposta: E). Sol. Se x e y sono i due numeri, deve essere 5x + y = 106. Osserviamo che x e y non possono 
> superare 19. Se x = 19 risulta y = 11 che è accettabile; invece x = 18 comporterebbe y = 16, non accettabile. 
> Ovviamente se x  17 il valore di y diventa non minore di 21 e a maggior ragione il risultato è inaccettabile.

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*sum of the two Sofia numbers from 5x+y=106*

> Sofia has in mind two positive integers less than 20 that differ by more than 2. Multiply one by 5, add the other to the product obtained and double the result, thus getting 212. What was the sum of the two numbers he had in mind? A) 26 B) 27 C) 28 D) 29 E) 30 Answer: E). I'm not alone. If x and y are the two numbers, it's got to be 5x + y = 106. Let's see that x and y cannot exceed 19. If x = 19, then y = 11 is acceptable; instead x = 18 would result in y = 16, not acceptable. Obviously if x  17 the value of y becomes not less than 21 and therefore the result is unacceptable.

**Answer:** E
[[src_kangourou_2024_cadet_semifinale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Quale parola e divisibile per 11 (KANGAROO)*

> (Punti 4) Nella parola KANGAROO ogni lettera rappresenta una cifra: lettere uguali cifre uguali, 
> lettere diverse cifre diverse. Il numero di 8 cifre rappresentato è divisibile per 11. Conservando la 
> medesima legge di rappresentazione, quale delle seguenti parole rappresenta certamente un numero 
> anch’esso divisibile per 11?  
> A) RANG             B) NGAR               C) KANGO            D) RKGN              E) RKNG 
> C 
> M 
> N 
> B 
> A 
> 
> Risposta D). Soluzione. Il criterio di divisibilità per 11 chiede che la differenza fra la somma delle 
> cifre di posto pari e quella delle cifre di posto dispari sia divisibile per 11. Si ha dunque che  
> K + N +A + O – (A + G + R +O) è divisibile per 11, quindi anche K + N – (G + R) è divisibile per 11. 
> Allora lo è RKGN, mentre i numeri rappresentati dalle altre parole potrebbero non esserlo.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Which word is divisible by 11 (KANGAROO) *

> In the word KANGAROO, each letter represents a number: equal letters, equal numbers, different letters, different numbers. The eight-digit number represented is divisible by 11. Preserving the same law of representation, which of the following words certainly represents a number also divisible by 11? (a) RANG B) NGAR C) KANGO D) RKGN E) RKNG C M N B A
> 
> Answer D. The solution. The criterion of divisibility by 11 requires that the difference between the sum of the even and odd place numbers is divisible by 11. So we have K + N + A + O  (A + G + R + O) is divisible by 11, so also K + N  (G + R) is divisible by 11. So it's RKGN, whereas the numbers represented by the other words might not be.

**Answer:** D
[[src_kangourou_2024_cadet_semifinale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di cifre di N (20230...0)*

> (Punti 4) La rappresentazione decimale del numero intero N ha la forma 20230…0, dove le cifre 
> non indicate sono tutte 0. Si sa che lo 0,0002024 % di N è maggiore di 2025. Quante cifre deve avere 
> N al minimo? 
> A) 6             B) 7             C) 8            D) 10           E) 12 
> Risposta: D). Soluzione.  L’intero positivo k deve essere tale che 2023 × 10k × 2024 / 107+2 > 2025: si deve 
> dunque avere k ≥ 6.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of digits of N (20230...0) *

> (Points 4) The decimal representation of the integer N has the form 20230...0, where the unindicated digits are all 0. It is known that 0,0002024% of N is greater than 2025. How many digits must N have at least? A) 6 B) 7 C) 8 D) 10 E) 12 Answer: D). The solution. The positive integer k must be such that 2023 × 10k × 2024 / 107+2 > 2025: one must therefore have k ≥ 6.

**Answer:** D
[[src_kangourou_2024_cadet_semifinale__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti blocchi di 2024...2024 divisibili per 4*

> (Punti 5) Considera l’allineamento di cifre 
> 202420242024…20242024 
> dove la quaterna ordinata 2024 compare 1.012 volte. Ogni blocco che sia formato da un qualunque 
> numero di cifre consecutive in questo allineamento e non incominci con 0 individua un numero 
> intero (ad esempio il blocco 4202420, che parte dalla quarta cifra e termina con la decima oppure 
> dall’ottava e termina con la quattordicesima e così via, individua il numero 4.202.420). Quanti 
> numeri interi tutti diversi tra loro, determinati da blocchi ammissibili, risultano divisibili per 4?   
> A) 2021             B) 2024             C) 2025             D) 6067            E) 6070 
> Risposta: E). Soluzione. Tutti e soli i numeri che ci interessano non possono terminare con 2 (infatti nessun 
> numero di almeno tre cifre che termini con 02 o 42 è divisibile per 4), ma possono terminare con 0 (cioè, per 
> noi, con 20) o con 4. Ogni blocco accettabile che termini con 0 deve iniziare con 20 o con 2420 o con 420 e 
> può essere seguito da una quantità di 2420 consecutivi che varia da 0 a 1.011 per 20 e da 0 a 1.010 per 2420 e 
> 420, per un totale di 3.034 possibilità. Ogni blocco accettabile che termini con 4 deve iniziare con 2024 o con 
> 24 o con 4 e le possibilità sono 1.012 in ciascun caso, per un totale di 3.036.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*How many blocks of 2024...2024 divided by 4 *

> (Points 5) Consider the alignment of figures 202420242024...20242024 where the fourth order 2024 appears 1,012 times. Each block that is made up of any number of consecutive digits in this alignment and does not start with 0 identifies an integer (e.g. block 4202420, which starts with the fourth digit and ends with the tenth or the eighth and ends with the fourteenth and so on, identifies the number 4.202.420). How many integers, all different from each other, determined by eligible blocks, are divisible by 4? The Commission has not yet decided whether to proceed with a decision on the application of this Regulation. The solution. All the numbers that matter to us cannot end in 2 (in fact, no number of at least three digits that you end in 02 or 42 is divisible by 4), but they can end in 0 (that is, for us, with 20) or with 4. Each acceptable block that terminates with 0 must start with 20 or 2420 or 420 and may be followed by a sequence of 2420s ranging from 0 to 1,011 for 20 and from 0 to 1,010 for 2420 and 420, for a total of 3,034 possibilities. Each acceptable block that ends with 4 must start with 2024 or 24 or 4 and the odds are 1,012 in each case, for a total of 3,036.

**Answer:** E
[[src_kangourou_2024_cadet_semifinale__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,topic_combinatoria,method_fattorizzazione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo numero di spagnoli con 143 strette di mano*

> (Punti 5) Ad una festa presso l’ambasciata italiana sono stati invitati alcuni spagnoli e alcuni 
> francesi, più di uno per ciascuna nazionalità e anche gli italiani presenti sono più di uno. Ogni 
> italiano dà il benvenuto una e una sola volta a ogni invitato straniero con una stretta di mano e non 
> vi sono altre strette di mano: alla fine, le strette di mano sono complessivamente 143. Quanti 
> potrebbero essere, al massimo, gli spagnoli invitati? 
> A) 7             B) 8             C) 9             D) 10            E) 11 
> Risposta: E). Soluzione. Il numero di strette di mano è il prodotto del numero degli italiani con la somma 
> del numero degli spagnoli e del numero dei francesi. Volendo esprimere 143 come prodotto di interi ci sono 
> solo due possibilità: 1 × 143 e 11 × 13. La prima è da escludere per ipotesi. Allora gli stranieri potrebbero 
> essere al massimo 13 e quindi gli spagnoli al massimo 13 – 2 = 11.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


Maximum number of Spaniards with 143 handshakes

> (Point 5) At a party at the Italian Embassy a number of Spaniards and some Frenchmen were invited, more than one for each nationality and even more than one Italianman was present. Every Italian welcomes every foreign guest once and only once with a handshake and there are no other handshakes: in the end, the handshakes total 143. How many Spaniards could there be at most? A) 7 B) 8 C) 9 D) 10 E) 11 Answer: E). The solution. The number of handshakes is the product of the number of Italians with the sum of the number of Spaniards and the number of Frenchmen. If we want to express 143 as the product of integers, there are only two possibilities: 1 × 143 and 11 × 13. The first is to be ruled out as a hypothesis. So the foreigners could be a maximum of 13 and then the Spanish a maximum of 13  2 = 11.

**Answer:** E
[[src_kangourou_2024_cadet_semifinale__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_geometria_analitica,topic_aritmetica,method_congruenze,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Perche il quadrato a coordinate intere non puo avere area 27*

> (Punti 6) Nel piano cartesiano considera un quadrato Q i cui vertici hanno, ciascuno, entrambe le 
> coordinate intere. Per quale dei seguenti motivi non può accadere che l’area di Q sia 27?   
> A) Perché 27 è un intero dispari.             B) Perché 27 non è la somma di due quadrati perfetti. 
> C) Perché 27 è un cubo perfetto.             D) Perché 27 non è un quadrato perfetto. 
> E) Nessuno dei precedenti è un valido motivo. 
> Risposta: B). Soluzione. Per il teorema di Pitagora, il quadrato della misura del lato di Q deve essere la somma 
> di due quadrati perfetti. Le altre quattro affermazioni sono facilmente confutabili (per confutare C basta, ad 
> esempio, supporre che due vertici adiacenti di Q siano i punti (0, 2) e (2, 0)). 
>  
> 
>  
> Quesiti a risposta aperta

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Because the whole-coordinate square cannot have an area of 27*

> (Points 6) In the Cartesian plane, consider a square Q whose vertices each have both integers. For which of the following reasons cannot the area of Q be 27? A) Because 27 is a whole odd. B) Because 27 is not the sum of two perfect squares. C) Because 27 is a perfect cube. D) Because 27 is not a perfect square. E) None of the above is a valid reason. Answer: B). The solution. For Pythagoras' theorem, the square of the measure of the side of Q must be the sum of two perfect squares. The other four statements are easily rebuttable (to refute C, for example, it is sufficient to assume that two adjacent vertices of Q are the points (0, 2) and (2, 0)).
>  
> 
>  
> Open-ended questions

**Answer:** B
[[src_kangourou_2024_cadet_semifinale__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_geometria_solida,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero di facce di un 2024-antiprisma*

![[src_kangourou_2024_cadet_semifinale__prob10.png]]

> (Punti 4) Un n-antiprisma è un solido come quello suggerito dalla figura. Ha una 
> base inferiore e una base superiore che sono poligoni regolari congruenti di n lati e 
> una superficie laterale costituita da triangoli ottenuti congiungendo ogni coppia di 
> vertici adiacenti di ciascuna base con uno dei vertici dell’altra, sempre come suggerito 
> dalla figura. Quante facce ha, comprese le basi, un 2024-antiprisma? 
> Risposta: 4050. Soluzione. Ogni lato di ogni base genera una e una sola faccia della superficie 
> laterale.

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 4050
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Number of faces of a 2024-antiprism*

![[src_kangourou_2024_cadet_semifinale__prob10.png]]

> (Points 4) An n-antiprism is a solid like the one suggested in the figure. It has a lower base and an upper base which are regular polygons congruent on n sides and a lateral surface consisting of triangles obtained by joining each pair of adjacent vertices of each base with one of the vertices of the other, as also suggested by the figure. How many faces, including the basics, does a 2024-antiprism have? The answer is 4050. The solution. Each side of each base generates one and only one face of the side surface.

**Answer:** 4050
[[src_kangourou_2024_cadet_semifinale__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_aritmetica,topic_geometria_solida,method_estremalita,method_grafi,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma minima di sei numeri coprimi sulle facce di un cubo*

![[src_kangourou_2024_cadet_semifinale__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw[thick] (0,0) rectangle (1,1);
  \draw[thick] (1,1) rectangle (2,2);
  \draw[thick] (1,0) rectangle (2,1);
  \draw[thick] (2,0) rectangle (3,1);
  \draw[thick] (3,0) rectangle (4,1);
  \draw[thick] (1,-1) rectangle (2,0);
  \node at (0.5,0.5) {\textbf{1}};
  \node at (1.5,1.5) {\textbf{2}};
  \node at (1.5,0.5) {\textbf{3}};
  \node at (2.5,0.5) {\textbf{5}};
  \node at (3.5,0.5) {\textbf{7}};
  \node at (1.5,-0.5) {\textbf{4}};
\end{tikzpicture}
\end{document}
```

> (Punti 5) Su ogni faccia di un cubo è scritto un numero intero positivo e i sei numeri sono tutti 
> diversi fra loro. Sai che, comunque tu consideri due facce adiacenti, l’unico divisore comune ai due 
> numeri che vi compaiono è 1. Quanto deve valere, al minimo, la somma dei sei numeri? Ricordiamo 
> che si dice che due facce sono adiacenti se hanno uno spigolo in comune. 
> Risposta: 0022. Soluzione. È chiaro che il numero 6 non può venire impiegato in 
> quanto si verrebbe necessariamente a trovare in una faccia adiacente a quella con 2 o 
> a quella con 3 o a quella con 4.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** 0022
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum sum of six numbers covered on the faces of a cube*

![[src_kangourou_2024_cadet_semifinale__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw[thick] (0,0) rectangle (1,1);
  \draw[thick] (1,1) rectangle (2,2);
  \draw[thick] (1,0) rectangle (2,1);
  \draw[thick] (2,0) rectangle (3,1);
  \draw[thick] (3,0) rectangle (4,1);
  \draw[thick] (1,-1) rectangle (2,0);
  \node at (0.5,0.5) {\textbf{1}};
  \node at (1.5,1.5) {\textbf{2}};
  \node at (1.5,0.5) {\textbf{3}};
  \node at (2.5,0.5) {\textbf{5}};
  \node at (3.5,0.5) {\textbf{7}};
  \node at (1.5,-0.5) {\textbf{4}};
\end{tikzpicture}
\end{document}
```

> (Points 5) On each side of a cube is written a positive integer, and all six numbers are different from each other. You know, however you consider two adjacent faces, the only common divisor of the two numbers that you see is 1. What is the minimum value of the sum of the six numbers? Remember, they say two faces are adjacent if they have a joint. The answer is 0022. The solution. It is clear that the number 6 cannot be used because it would necessarily be found on a face adjacent to the one with 2 or the one with 3 or the one with 4.

**Answer:** 0022
[[src_kangourou_2024_cadet_semifinale__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,method_congruenze,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di numeri da dire per cancellare 2..60*

> (Punti 5) Ho scritto su un foglio tutti i numeri interi da 2 a 60 inclusi. Ho poi dato il foglio ad un 
> amico insieme alla seguente istruzione: ogni volta che io dico un numero, devi cancellare dal foglio 
> quel numero e tutti i suoi multipli. Voglio che, alla fine, tutti i numeri scritti sul foglio siano 
> cancellati. Quanti numeri, al minimo, devo dire? 
> Risposta: 0017. Soluzione. Devo chiedergli di cancellare tutti i numeri primi minori di 60, cioè quelli che non 
> hanno divisori diversi da 1 e da sé stessi.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0017
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of numbers to say to delete 2.60*

> (Points 5) I wrote all the integers from 2 to 60 on a sheet. I then gave the sheet to a friend with the following instruction: every time I say a number, you have to delete that number and all its multiples from the sheet. I want all the numbers written on the paper to be deleted. How many numbers, at least, do I say? The answer is 0017. The solution. I have to ask him to delete all prime numbers less than 60, that is, those that have no divisors other than 1 and themselves.

**Answer:** 0017
[[src_kangourou_2024_cadet_semifinale__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_aritmetica,topic_combinatoria,method_backward,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*In quanti modi ripartire 1..18 in coppie con somma quadrato*

> (Punti 6) L’insieme dei numeri interi tra 1 e 18 inclusi va ripartito in nove coppie, in modo che la 
> somma dei due numeri che compongono ogni coppia sia un quadrato perfetto. In quanti diversi 
> modi è possibile farlo? 
> Risposta: 0001. Soluzione. I quadrati perfetti ottenibili sommando i due numeri delle varie coppie possono 
> essere solo 4, 9, 16 o 25. Si vede immediatamente che alcuni accoppiamenti sono obbligati: (18, 7), (17, 8), 
> (16, 9); inoltre, visto che 9 – 2 = 7, è obbligato anche l’accoppiamento (2, 14). Da quest’ultimo segue però che 
> anche tutti gli altri sono obbligati: si deve avere (11, 5), dunque nell’ordine (4, 12), (13, 3), (6, 10), (1, 15).

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0001
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*How many ways to divide 1.18 into square-sum pairs*

> (Points 6) The set of integers between 1 and 18 included must be divided into nine pairs, so that the sum of the two numbers that make up each pair is a perfect square. How many different ways can you do that? The answer is: 0001. The solution. The perfect squares obtained by adding the two numbers of the various pairs can only be 4, 9, 16 or 25. It is immediately apparent that some couplings are mandatory: (18, 7), (17, 8), (16, 9); furthermore, since 9  2 = 7, coupling (2, 14) is also mandatory. However, it follows from the latter that all the others are also required: one must have (11, 5), hence in the order (4, 12), (13, 3), (6, 10), (1, 15).

**Answer:** 0001
[[src_kangourou_2024_cadet_semifinale__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_geometria_solida,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Superficie del solido a L centralmente simmetrico*

![[src_kangourou_2024_cadet_semifinale__prob14.png]]

> (Punti 6) In figura vedi un mattoncino isolato a forma di L ricavato da un cubo 
> di lato 1 cm rimuovendo un parallelepipedo di dimensioni, in centimetri, ½, ½ e

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0042
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Centrally symmetrical surface of the L-solid*

![[src_kangourou_2024_cadet_semifinale__prob14.png]]

> (Points 6) In the figure you can see an isolated L-shaped brick made from a 1 cm side cube by removing a parallel piped in centimetres, 1⁄2, 1⁄2 and

**Answer:** 0042
[[src_kangourou_2024_cadet_semifinale__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore di (cd-ab)(c+d) con somma e somma inversi nulle*

> 15. (Punti 6) Quattro numeri reali a, b, c, d tutti diversi da 0 sono tali che la loro somma è 0, come pure la somma dei loro inversi con l’inverso del loro prodotto. Quanto vale (cd – ab)(c + d)? Risposta: 0001. Soluzione. Dalla seconda condizione si ottiene cd(a + b) + ab(c + d) = – 1. Dalla prima, essendo a + b = – (c + d), si ottiene allora che il numero cercato è 1.

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0001
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Value of (cd-ab) ((c+d) with sum and inverse sum zero*

> 15. (Points 6) Four real numbers a, b, c, d all other than 0 are such that their sum is 0, as well as the sum of their inverse with the inverse of their product. How much is (cd  ab) c + d)? The answer is: 0001. The solution. From the second condition we get cd(a + b) + ab(c + d) =  1. From the first, being a + b =  (c + d), we get then that the number sought is 1.

**Answer:** 0001
[[src_kangourou_2024_cadet_semifinale__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_aritmetica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Per quanti secondi Aldo aspetta Bernardo*

> 16. (Punti 7) Le ruote della bicicletta di Aldo hanno un raggio di 30 cm, quelle della bicicletta di Bernardo un raggio di 24 cm. Aldo e Bernardo iniziano a pedalare allo stesso istante nella stessa direzione e, a parità di tempo, il numero di giri fatti dalle loro ruote è lo stesso e si mantiene costante durante la pedalata. Dopo 15 minuti Aldo si ferma per aspettare Bernardo. Per quanti secondi lo dovrà aspettare? Risposta: 0225. Soluzione. Il rapporto tra le lunghezze dei raggi (A/B) è 5/4, la lunghezza della circonferenza è proporzionale al raggio dunque la proporzione inversa vale tra i tempi necessari a percorrere una stessa distanza. Allora per arrivare dove è arrivato Aldo, a Bernardo serve 5/4 del tempo impiegato da Aldo, dunque 1/4 in più del tempo da lui impiegato finora.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0225
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


For how many seconds Aldo is waiting for Bernardo

> 16. The wheels of Aldo's bicycle have a radius of 30 cm, those of Bernardo's bicycle a radius of 24 cm. Aldo and Bernardo start to pedal at the same time in the same direction and, at the same time, the number of turns made by their wheels is the same and remains constant during the pedal. After 15 minutes, Aldo stops to wait for Bernardo. How many seconds will you have to wait for him? The answer is 0225. The solution. The ratio of the lengths of the beams (A/B) is 5/4, the length of the circumference is proportional to the radius, so the inverse ratio is between the time required to travel the same distance. So to get to where Aldo got to, Bernardo needs 5/4 of Aldo's time, so 1/4 more than he has so far.

**Answer:** 0225
[[src_kangourou_2024_cadet_semifinale__Q16]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,topic_combinatoria,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti interi tra 0 e 10 esprimibili con quattro 4*

> 17. (Punti 7) Voglio esprimere il maggior numero possibile di interi utilizzando solo la cifra 4 ed esattamente quattro volte. Posso accostare più volte la cifra 4, utilizzare le quattro operazioni aritmetiche e disporre parentesi nei modi che ritengo opportuni. Ad esempio posso scrivere 0 = 4 – 4 + 4 – 4, oppure 15 = 44/4 + 4, oppure 160 = (44 – 4) × 4. Quanti dei numeri interi tra 0 e 10 compresi posso esprimere con questa procedura? Risposta: 0011. Soluzione. 0 = 4 – 4 + 4 – 4; 1 = 44/44; 2 = 4/4 + 4/4; 3 = (4 + 4 + 4)/4; 4 = 4 – (4 – 4)/4; 5 = (4 × 4 + 4)/4; 6 = (4 + 4)/4 + 4; 7 = 44/4 – 4; 8 = 4 + 4 + 4 – 4; 9 = 4 + 4 + 4/4; 10 = (44 – 4)/4.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0011
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Entire numbers between 0 and 10 expressed as four *

> 17. (Points 7) I want to express as many integers as possible using just the number 4 and exactly four times. I can approach the number 4 several times, use the four arithmetic operations and arrange brackets in the ways I think are appropriate. For example, I can write 0 = 4  4 + 4  4, or 15 = 44/4 + 4, or 160 = (44  4) × 4. How many of the integers between 0 and 10 can I express with this procedure? The answer is 0011. The solution. 0 = 4 – 4 + 4 – 4; 1 = 44/44; 2 = 4/4 + 4/4; 3 = (4 + 4 + 4)/4; 4 = 4 – (4 – 4)/4; 5 = (4 × 4 + 4)/4; 6 = (4 + 4)/4 + 4; 7 = 44/4 – 4; 8 = 4 + 4 + 4 – 4; 9 = 4 + 4 + 4/4; 10 = (44 – 4)/4.

**Answer:** 0011
[[src_kangourou_2024_cadet_semifinale__Q17]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_aritmetica,method_estremalita,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo numero di interi consecutivi con somma cubi = 2024*

> 18. (Punti 8) Sommando i cubi di alcuni numeri interi consecutivi si ottiene come risultato 2024. Quanti possono essere al massimo questi interi? Può essere utile ricordare che, per ogni intero positivo n, la somma dei cubi dei primi n interi positivi coincide con il quadrato della somma di questi primi n interi. Risposta: 0011. Soluzione. La somma dei primi n interi positivi vale n(n + 1)/2: velocemente si trova allora che $45^{2}$ = 2025 è la somma di cubi degli interi da 1 a 9. Dunque 2024 è la somma dei cubi degli interi da 2 a 9, ma anche dei cubi degli interi da -1 a 9. È facile appurare che questa sequenza di interi consecutivi non può essere estesa.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0011
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


Maximum number of consecutive integers with sum of cubes = 2024

> 18. (Points 8) Adding the cubes of some consecutive integers gives us a result of 2024. How many of these integers can be at most? It may be useful to remember that for every positive integer n, the sum of the cubes of the first positive integers coincides with the square of the sum of these first n integers. The answer is 0011. The solution. The sum of the first n positive integers is n(n + 1)/2: quickly finds that $45^{2}$ = 2025 is the sum of the cubic integers from 1 to 9. So 2024 is the sum of the cubes of integers from 2 to 9, but also the cubes of integers from -1 to 9. It is easy to see that this sequence of consecutive integers cannot be extended.

**Answer:** 0011
[[src_kangourou_2024_cadet_semifinale__Q18]]
