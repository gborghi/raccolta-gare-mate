---
title: Kangourou Semifinale individuale Cadet 2024
tipo: gara
competition: Kangourou Semifinale individuale Cadet 2024
family: kangourou
year: '2024'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2024_cadet_semifinale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,method_estremalita,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo punti comuni a 2024 circonferenze*

> (Punti 2) Nel piano sono tracciate 2024 circonferenze tutte distinte tra loro. Quanti potrebbero 
> essere al massimo i punti comuni a tutte le circonferenze? 
> A) 0             B) 1             C) 2             D) 3            E) 1012 
> Risposta: C). Soluzione. Per due punti passano infinite circonferenze complanari (ogni punto dell’asse del 
> segmento che li ha come estremi è centro di una di esse), per tre punti ne passa una sola.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum common points of 2024 circumferences*

> (Point 2) In the plane, 2024 circles are drawn, all distinct from one another. What is the maximum possible number of points common to all the circles?
> A) 0             B) 1             C) 2             D) 3            E) 1012 
> Answer: C). Solution. An infinite number of coplanar circles pass through two points (each point on the perpendicular bisector of the segment having those two points as endpoints is the center of one of them); exactly one circle passes through three points.


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



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


<div class="qlang-split" data-lang="en"></div>


*Area of triangle ANC in the equilateral triangle*

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

> (Point 3) The triangle ABC in the figure is equilateral, with a side length of 12 cm. The segment MN is parallel to side AB, while the segment AM is 10 cm long. By how many square centimetres is the area of triangle ANC?
> A) 36        B) 30 √3         C) 10 √3          D) 6√3          E) 10  
> Answer: D). Sol. The height of triangle ABC is 12 × √3/2 cm, and it is equal to the height of triangle ANC relative to base CN, which is 2 cm long.

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,topic_algebra,method_fattorizzazione,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_modellizzazione"></span>

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
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*Which equality between areas is certainly true (park)*

![[src_kangourou_2024_cadet_semifinale__prob3.png]]

> (Point 3) The two images show the same park divided into 5 zones; the letters in three of the zones indicate the area of those zones. Two kangaroos live in the park: one usually grazes in the lighter part of the first image, and the other in the lighter part of the second image. The two parts overlap partially. In this way, both kangaroos have exactly half of the park's area available to them. Which of the following equalities is certainly true?
> A) A = C 
> B) B = A + C 
>
> C) B = (A + C)/2 
> D) B = 2(A + C)/3 
> E) B = 3(A + C)/5  
> Answer B). Sol. Let D and E be the areas of the zones for which no letters are indicated; then B + D = A + E + C = B + E (each kangaroo has half of the park available). From the second equality, it follows that B) is true in any case. It is trivial to find examples in which A) is false.


**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Geometria|Geometry]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,topic_aritmetica,method_casework,skill_manipolazione_algebrica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma dei due numeri di Sofia da 5x+y=106*

> (Punti 4) Sofia ha in mente due numeri interi positivi minori di 20 che differiscono per più di 2. 
> Ne moltiplica uno per 5, somma l’altro al prodotto che ha ottenuto e raddoppia il risultato: ottiene 
> così 212. Qual è la somma dei due numeri che aveva in mente?  
> A) 26             B) 27              C) 28            D) 29              E) 30 
> Risposta: E). Sol. Se x e y sono i due numeri, deve essere 5x + y = 106. Osserviamo che x e y non possono 
> superare 19. Se x = 19 risulta y = 11 che è accettabile; invece x = 18 comporterebbe y = 16, non accettabile. 
> Ovviamente se x  17 il valore di y diventa non minore di 21 e a maggior ragione il risultato è inaccettabile.

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*Sum of Sofia's two numbers, given 5x+y=106*

> (Question 4) Sofia has in mind two positive integers less than 20 that differ by more than 2. She multiplies one of them by 5, adds the other to the product she obtained, and doubles the result: she thus gets 212. What is the sum of the two numbers she had in mind?
> A) 26             B) 27              C) 28            D) 29              E) 30 
> Answer: E). Sol. If x and y are the two numbers, then 5x + y = 106 must hold. Note that x and y cannot exceed 19. If x = 19, then y = 11, which is acceptable; however, x = 18 would give y = 16, which is not acceptable. Obviously, if x ≤ 17, the value of y becomes not less than 21, and all the more so the result is unacceptable.


**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern,skill_manipolazione_algebrica"></span>

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
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*Which word is divisible by 11 (KANGAROO)*

> (Point 4) In the word KANGAROO, each letter represents a digit: identical letters represent identical digits, and different letters represent different digits. The 8-digit number represented is divisible by 11. Keeping the same representation rule, which of the following words certainly represents a number that is also divisible by 11?
> A) RANG B) NGAR C) KANGO D) RKGN E) RKNG
> C M N B A
>
> Answer D). Solution. The divisibility rule for 11 requires that the difference between the sum of the digits in even positions and the sum of the digits in odd positions be divisible by 11. Thus, K + N + A + O – (A + G + R + O) is divisible by 11, so K + N – (G + R) is also divisible by 11. Therefore, RKGN is divisible by 11, whereas the numbers represented by the other words may not be.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,topic_algebra,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di cifre di N (20230...0)*

> (Punti 4) La rappresentazione decimale del numero intero N ha la forma 20230…0, dove le cifre 
> non indicate sono tutte 0. Si sa che lo 0,0002024 % di N è maggiore di 2025. Quante cifre deve avere 
> N al minimo? 
> A) 6             B) 7             C) 8            D) 10           E) 12 
> Risposta: D). Soluzione.  L’intero positivo k deve essere tale che 2023 × 10k × 2024 / 107+2 > 2025: si deve 
> dunque avere k ≥ 6.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of digits of N (20230...0)*

> (Point 4) The decimal representation of the integer N is of the form 20230…0, where all the digits not shown are 0. It is known that 0.0002024% of N is greater than 2025. What is the minimum number of digits that N must have?
> A) 6             B) 7             C) 8            D) 10           E) 12 
> Answer: D). Solution. The positive integer k must satisfy 2023 × 10^k × 2024 / 107+2 > 2025; therefore, k ≥ 6 must hold.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_conteggio,method_casi_conteggio,skill_conteggio_sistematico,skill_casework_accurato"></span>

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
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]], [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*How many blocks of 2024...2024 divisible by 4?*

> (Point 5) Consider the sequence of digits 202420242024…20242024 in which the ordered quartet 2024 appears 1,012 times. Each block consisting of any number of consecutive digits in this sequence and not beginning with 0 identifies an integer (for example, the block 4202420—which starts at the fourth digit and ends at the tenth, or starts at the eighth digit and ends at the fourteenth, and so on—identifies the number 4,202,420). How many integers, all distinct from one another, determined by admissible blocks, are divisible by 4?
> A) 2021             B) 2024             C) 2025             D) 6067            E) 6070 
> Answer: E). Solution. All and only the numbers that concern us cannot end in 2 (indeed, no number with at least three digits that ends in 02 or 42 is divisible by 4), but they can end in 0 (that is, for us, in 20) or in 4. Every acceptable block that ends in 0 must begin with 20 or with 2420 or with 420 and may be followed by a number of consecutive 2420s ranging from 0 to 1,011 for 20 and from 0 to 1,010 for 2420 and 420, for a total of 3,034 possibilities. Every acceptable block that ends in 4 must begin with 2024 or with 24 or with 4, and there are 1,012 possibilities in each case, for a total of 3,036.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_conteggio|Combinatorial counting]], [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,topic_combinatoria,method_fattorizzazione,method_estremalita,skill_conteggio_sistematico,skill_modellizzazione"></span>

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
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum number of Spaniards with 143 handshakes*

> (Point 5) At a party at the Italian embassy, some Spaniards and some French people were invited—more than one from each nationality—and the Italians present are also more than one. Each Italian welcomes each foreign guest once and only once with a handshake, and there are no other handshakes: in the end, the total number of handshakes is 143. What is the maximum possible number of Spaniards invited?
> A) 7             B) 8             C) 9             D) 10            E) 11 
> Answer: E). Solution. The number of handshakes is the product of the number of Italians and the sum of the number of Spaniards and the number of French people. If we want to express 143 as a product of integers, there are only two possibilities: 1 × 143 and 11 × 13. The first must be ruled out by hypothesis. Then the foreigners could be at most 13, and therefore the Spaniards could be at most 13 – 2 = 11.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_geometria_analitica,topic_aritmetica,method_congruenze,method_coordinate,skill_astrazione,skill_ragionamento_geometrico"></span>

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
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*Why can't a square with integer coordinates have an area of 27?*

> (Point 6) In the Cartesian plane, consider a square Q whose vertices each have both coordinates as integers. For which of the following reasons can it not happen that the area of Q is 27?
> A) Because 27 is an odd integer. B) Because 27 is not the sum of two perfect squares.
> C) Because 27 is a perfect cube. D) Because 27 is not a perfect square.
> E) None of the foregoing are valid reasons.
> Answer: B). Solution. By the Pythagorean theorem, the square of the length of a side of Q must be the sum of two perfect squares. The other four statements are easily refuted (to refute C, for example, it suffices to assume that two adjacent vertices of Q are the points (0, 2) and (2, 0)).
>
>
>
> Open-ended questions


**Topic:** [[topic_geometria_analitica|Coordinate geometry]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_geometria_solida,method_conteggio,skill_ragionamento_geometrico,skill_conteggio_sistematico"></span>

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
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Geometria]]
**Risposta:** 4050
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*Number of faces of a 2024-antiprism*

![[src_kangourou_2024_cadet_semifinale__prob10.png]]

> (Point 4) An n-antiprism is a solid like the one suggested by the figure. It has a lower base and an upper base that are congruent regular n-gons, and a lateral surface consisting of triangles formed by joining each pair of adjacent vertices of each base to one of the vertices of the other base, again as suggested by the figure. How many faces, including the bases, does a 2024-antiprism have? Answer: 4050. Solution. Each side of each base generates exactly one face of the lateral surface.


**Topic:** [[topic_geometria_solida|Solid geometry]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Geometria|Geometry]]



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


<div class="qlang-split" data-lang="en"></div>


*Minimum sum of six coprime numbers on the faces of a cube*

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

> (Point 5) On each face of a cube, a positive integer is written, and the six numbers are all different from one another. You know that, no matter which two adjacent faces you consider, the only common divisor of the two numbers appearing on them is 1. What must the sum of the six numbers be, at minimum? Recall that two faces are said to be adjacent if they share an edge. Answer: 0022. Solution. It is clear that the number 6 cannot be used, since it would necessarily end up on a face adjacent to the face bearing 2, or to the face bearing 3, or to the face bearing 4.

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_geometria_solida|Solid geometry]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Geometria|Geometry]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,method_congruenze,method_estremalita,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di numeri da dire per cancellare 2..60*

> (Punti 5) Ho scritto su un foglio tutti i numeri interi da 2 a 60 inclusi. Ho poi dato il foglio ad un 
> amico insieme alla seguente istruzione: ogni volta che io dico un numero, devi cancellare dal foglio 
> quel numero e tutti i suoi multipli. Voglio che, alla fine, tutti i numeri scritti sul foglio siano 
> cancellati. Quanti numeri, al minimo, devo dire? 
> Risposta: 0017. Soluzione. Devo chiedergli di cancellare tutti i numeri primi minori di 60, cioè quelli che non 
> hanno divisori diversi da 1 e da sé stessi.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0017
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of numbers to say to cancel 2..60*

> (Points 5) I wrote down on a sheet all the integers from 2 to 60 inclusive. I then gave the sheet to a friend along with the following instruction: each time I say a number, you must cross out on the sheet that number and all of its multiples. I want all the numbers written on the sheet to be crossed out in the end. What is the minimum number of numbers I must say? Answer: 0017. Solution. I must ask him to cross out all the prime numbers less than 60—that is, those that have no divisors other than 1 and themselves.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



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


<div class="qlang-split" data-lang="en"></div>


*In how many ways can 1..18 be divided into pairs whose sum is a perfect square?*

> (Points 6) The set of integers from 1 to 18 inclusive must be divided into nine pairs such that the sum of the two numbers in each pair is a perfect square. In how many different ways is this possible? Answer: 0001. Solution. The perfect squares obtainable by adding the two numbers in the various pairs can only be 4, 9, 16, or 25. It is immediately apparent that some pairings are forced: (18, 7), (17, 8), (16, 9); moreover, since 9 – 2 = 7, the pairing (2, 14) is also forced. However, from this last one it follows that all the others are also forced: we must have (11, 5), and therefore, in order, (4, 12), (13, 3), (6, 10), (1, 15).

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_backward|Working backwards]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_geometria_solida,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Superficie del solido a L centralmente simmetrico*

![[src_kangourou_2024_cadet_semifinale__prob14.png]]

> (Punti 6) In figura vedi un mattoncino isolato a forma di L ricavato da un cubo 
> di lato 1 cm rimuovendo un parallelepipedo di dimensioni, in centimetri, ½, ½ e

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0042
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*Surface of the centrally symmetric L-shaped solid*

![[src_kangourou_2024_cadet_semifinale__prob14.png]]

> (Point 6) In the figure, you can see an isolated L-shaped block obtained from a cube with an edge length of 1 cm by removing a parallelepiped with dimensions, in centimeters, ½, ½, and


**Topic:** [[topic_geometria_solida|Solid geometry]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



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


<div class="qlang-split" data-lang="en"></div>


*Value of (cd-ab)(c+d) with sum and sum inverse both zero*

> 15. (Points 6) Four real numbers a, b, c, d, all nonzero, satisfy the condition that their sum is 0, as is the sum of their reciprocals together with the reciprocal of their product. What is the value of (cd – ab)(c + d)? Answer: 0001. Solution. From the second condition, we obtain cd(a + b) + ab(c + d) = –1. From the first condition, since a + b = –(c + d), it follows that the desired number is 1.

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_aritmetica,topic_geometria_piana,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Per quanti secondi Aldo aspetta Bernardo*

> 16. (Punti 7) Le ruote della bicicletta di Aldo hanno un raggio di 30 cm, quelle della bicicletta di Bernardo un raggio di 24 cm. Aldo e Bernardo iniziano a pedalare allo stesso istante nella stessa direzione e, a parità di tempo, il numero di giri fatti dalle loro ruote è lo stesso e si mantiene costante durante la pedalata. Dopo 15 minuti Aldo si ferma per aspettare Bernardo. Per quanti secondi lo dovrà aspettare? Risposta: 0225. Soluzione. Il rapporto tra le lunghezze dei raggi (A/B) è 5/4, la lunghezza della circonferenza è proporzionale al raggio dunque la proporzione inversa vale tra i tempi necessari a percorrere una stessa distanza. Allora per arrivare dove è arrivato Aldo, a Bernardo serve 5/4 del tempo impiegato da Aldo, dunque 1/4 in più del tempo da lui impiegato finora.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** 0225
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*For how many seconds does Aldo wait for Bernardo?*

> 16. (Points 7) The wheels of Aldo's bicycle have a radius of 30 cm, and those of Bernardo's bicycle have a radius of 24 cm. Aldo and Bernardo start pedaling at the same instant in the same direction, and, over the same period of time, their wheels make the same number of revolutions, and this number remains constant during pedaling. After 15 minutes, Aldo stops to wait for Bernardo. For how many seconds will he have to wait? Answer: 0225. Solution. The ratio of the radii (A/B) is 5/4; the circumference is proportional to the radius, so the inverse proportion holds for the times required to cover the same distance. Therefore, to reach where Aldo has arrived, Bernardo needs 5/4 of the time Aldo has taken, which means 1/4 more than the time Aldo has taken so far.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_geometria_piana|Plane geometry]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Geometria|Geometry]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,topic_combinatoria,topic_algebra,method_casework,skill_conteggio_sistematico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti interi tra 0 e 10 esprimibili con quattro 4*

> 17. (Punti 7) Voglio esprimere il maggior numero possibile di interi utilizzando solo la cifra 4 ed esattamente quattro volte. Posso accostare più volte la cifra 4, utilizzare le quattro operazioni aritmetiche e disporre parentesi nei modi che ritengo opportuni. Ad esempio posso scrivere 0 = 4 – 4 + 4 – 4, oppure 15 = 44/4 + 4, oppure 160 = (44 – 4) × 4. Quanti dei numeri interi tra 0 e 10 compresi posso esprimere con questa procedura? Risposta: 0011. Soluzione. 0 = 4 – 4 + 4 – 4; 1 = 44/44; 2 = 4/4 + 4/4; 3 = (4 + 4 + 4)/4; 4 = 4 – (4 – 4)/4; 5 = (4 × 4 + 4)/4; 6 = (4 + 4)/4 + 4; 7 = 44/4 – 4; 8 = 4 + 4 + 4 – 4; 9 = 4 + 4 + 4/4; 10 = (44 – 4)/4.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** 0011
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*How many integers between 0 and 10 can be expressed using four 4s?*

> 17. (Points 7) I want to express as many integers as possible using only the digit 4 and exactly four times. I may juxtapose the digit 4 multiple times, use the four arithmetic operations, and place parentheses in whatever ways I see fit. For example, I can write 0 = 4 – 4 + 4 – 4, or 15 = 44/4 + 4, or 160 = (44 – 4) × 4. How many of the integers from 0 to 10 inclusive can I express using this procedure? Answer: 0011. Solution. 0 = 4 – 4 + 4 – 4; 1 = 44/44; 2 = 4/4 + 4/4; 3 = (4 + 4 + 4)/4; 4 = 4 – (4 – 4)/4; 5 = (4 × 4 + 4)/4; 6 = (4 + 4)/4 + 4; 7 = 44/4 – 4; 8 = 4 + 4 + 4 – 4; 9 = 4 + 4 + 4/4; 10 = (44 – 4)/4.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_aritmetica,topic_algebra,method_estremalita,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo numero di interi consecutivi con somma cubi = 2024*

> 18. (Punti 8) Sommando i cubi di alcuni numeri interi consecutivi si ottiene come risultato 2024. Quanti possono essere al massimo questi interi? Può essere utile ricordare che, per ogni intero positivo n, la somma dei cubi dei primi n interi positivi coincide con il quadrato della somma di questi primi n interi. Risposta: 0011. Soluzione. La somma dei primi n interi positivi vale n(n + 1)/2: velocemente si trova allora che $45^{2}$ = 2025 è la somma di cubi degli interi da 1 a 9. Dunque 2024 è la somma dei cubi degli interi da 2 a 9, ma anche dei cubi degli interi da -1 a 9. È facile appurare che questa sequenza di interi consecutivi non può essere estesa.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 0011
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum number of consecutive integers whose cubes sum to 2024*

> 18. (8 points) Adding the cubes of some consecutive integers yields 2024. What is the maximum possible number of such integers? It may be helpful to recall that, for any positive integer n, the sum of the cubes of the first n positive integers equals the square of the sum of those first n integers. Answer: 0011. Solution. The sum of the first n positive integers is n(n + 1)/2; it is then quickly found that $45^{2}$ = 2025 is the sum of the cubes of the integers from 1 to 9. Thus 2024 is the sum of the cubes of the integers from 2 to 9, but also of the cubes of the integers from -1 to 9. It is easy to verify that this sequence of consecutive integers cannot be extended.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
