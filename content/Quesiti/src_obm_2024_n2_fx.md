---
title: Olimpíada Brasileira de Matemática 2024 — Nível 2 — Fase x
tipo: gara
competition: Olimpíada Brasileira de Matemática 2024 — Nível 2 — Fase x
family: obm
year: '2024'
level: OBM Nível 2
---
<div class="atom-reader" data-gara="Quesiti/src_obm_2024_n2_fx"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_algebra,topic_funzionali,method_fattorizzazione,method_induzione,method_casework,method_ricorsione,method_congruenze,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_lettura_attenta,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Sequence formed by repeated prime-factorization operation; three sub-parts*

> Consider a sequence whose first term is a given positive integer $N > 1$. Given a term $N$ of the sequence, if $N$ is a power of a single prime, the sequence ends at $N$. Otherwise, the next term is obtained by taking the largest prime factor $p$ of $N$ and replacing $p$ with $p+1$ in the prime factorization; if the resulting number is not a power of a prime, the process is repeated on the new number, giving rise to the next term; and so on. For example, if the first term of the sequence is $N = 300 = 2^2 \cdot 3 \cdot 5^2$, since its largest prime factor is $p = 5$, the second term is $2^2 \cdot 3 \cdot (5+1)^2 = 2^4 \cdot 3^3$. Since $p = 3$ and thus the third term is $2^4 \cdot (3+1)^3 = 2^{10}$. We have obtained a power of $2$, so the sequence terminates. For example, the sequence $2^2 \cdot 3 \cdot 5^2, \; 2^4 \cdot 3^3, \; 2^{10}$ has $3$ terms.
> 
> (a) How many terms does the sequence whose first term is $N = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 \cdot 17 \cdot 19 \cdot 23$ have?
> 
> (b) Show that if a prime $p$ leaves remainder $1$ on division by $3$, then $\frac{p+1}{2}$ is also an integer that leaves remainder $1$ on division by $3$.
> 
> (c) Find an initial value $N$ less than $1{,}000{,}000$ (one million) such that the sequence starting at $N$ has exactly $11$ terms.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_induzione|Induzione]], [[method_casework|Casework]], [[method_ricorsione|Recursion]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1IF2AhS-oyKoh7_VN0FmjTtVwiNv_ZbJT/view)


<div class="qlang-split" data-lang="it"></div>


*Sequenza formata da un'operazione di scomposizione in fattori primi ripetuta; tre sottoparti*

> Si consideri una successione il cui primo termine è un dato intero positivo $N > 1$. Dato un termine $N$ della successione, se $N$ è una potenza di un unico numero primo, la successione termina in $N$. Altrimenti, il termine successivo si ottiene prendendo il più grande fattore primo $p$ di $N$ e sostituendo $p$ con $p+1$ nella fattorizzazione in fattori primi; se il numero risultante non è una potenza di un numero primo, il processo viene ripetuto sul nuovo numero, dando origine al termine successivo; e così via. Ad esempio, se il primo termine della successione è $N = 300 = 2^2 \cdot 3 \cdot 5^2$, poiché il suo più grande fattore primo è $p = 5$, il secondo termine è $2^2 \cdot 3 \cdot (5+1)^2 = 2^4 \cdot 3^3$. Poiché $p = 3$, il terzo termine è quindi $2^4 \cdot (3+1)^3 = 2^{10}$. Abbiamo ottenuto una potenza di $2$, quindi la successione termina. Ad esempio, la successione $2^2 \cdot 3 \cdot 5^2, \; 2^4 \cdot 3^3, \; 2^{10}$ ha $3$ termini.
>
> (a) Quanti termini ha la successione il cui primo termine è $N = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 \cdot 17 \cdot 19 \cdot 23$?
>
> (b) Dimostrare che, se un numero primo $p$ lascia resto $1$ alla divisione per $3$, allora anche $\frac{p+1}{2}$ è un numero intero che lascia resto $1$ alla divisione per $3$.
>
> (c) Trova un valore iniziale $N$ minore di $1{,}000{,}000$ (un milione) tale che la successione a partire da $N$ abbia esattamente $11$ termini.


**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_induzione|Induzione]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,topic_trigonometria,method_coordinate,method_trigonometria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Cyclic concyclicity result in triangle with circumscribed circles and midpoints*

> Let $ABC$ be a triangle and let $E$ and $F$ be the midpoints of sides $AC$ and $AB$, respectively. Let $D$ be any point on segment $BC$. The circumscribed circles of triangles $BDF$ and $CDE$ intersect each other at a point $X \neq D$. The point $Y$ lies on line $DX$ such that $AY$ is parallel to $BC$. Prove that the points $K$, $L$, $X$, and $Y$ all lie on the same circle, where $K$ and $L$ are the second intersection points (other than $X$) of the circumcircles of $BDF$ and $CDE$ with the line $EF$.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometry]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria|Geometry]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1IF2AhS-oyKoh7_VN0FmjTtVwiNv_ZbJT/view)


<div class="qlang-split" data-lang="it"></div>


*Risultato di conciclicità ciclica in un triangolo con cerchi circoscritti e punti medi*

> Sia $ABC$ un triangolo e siano $E$ e $F$ i punti medi dei lati $AC$ e $AB$, rispettivamente. Sia $D$ un punto qualsiasi sul segmento $BC$. Le circonferenze circoscritte ai triangoli $BDF$ e $CDE$ si intersecano in un punto $X \neq D$. Il punto $Y$ giace sulla retta $DX$ in modo che $AY$ sia parallelo a $BC$. Dimostrare che i punti $K$, $L$, $X$ e $Y$ giacciono tutti sulla stessa circonferenza, dove $K$ e $L$ sono i secondi punti di intersezione (diversi da $X$) delle circonferenze circoscritte a $BDF$ e $CDE$ con la retta $EF$.


**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,method_estremalita,method_casework,method_invarianti,method_cassetti,skill_conteggio_sistematico,skill_ragionamento_geometrico,skill_stima"></span>

<div class="qlang-switch" data-default="en"></div>


*Longest guaranteed increasing path in 10×10 grid with 1–100*

> The numbers $1$ to $100$ are placed without repetition, one in each cell of a $10 \times 10$ grid. An *increasing path of length $k$* in this grid is a sequence of cells $c_1, c_2, \ldots, c_k$ such that, for each $i = 2, 3, \ldots, k$, the following properties hold:
> 
> - cells $c_i$ and $c_{i-1}$ share a side or a vertex;
> - the number in $c_i$ is greater than the number in $c_{i-1}$.
> 
> What is the largest positive integer $k$ such that we can always find an increasing path of length $k$, regardless of how the numbers $1$ to $100$ are arranged in the grid?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_cassetti|Pigeonhole principle]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1IF2AhS-oyKoh7_VN0FmjTtVwiNv_ZbJT/view)


<div class="qlang-split" data-lang="it"></div>


*Percorso crescente garantito più lungo in una griglia 10×10 con valori da 1 a 100*

> I numeri da $1$ a $100$ sono disposti senza ripetizioni, uno in ciascuna cella di una griglia $10 \times 10$. Un *cammino crescente di lunghezza $k$* in questa griglia è una sequenza di celle $c_1, c_2, \ldots, c_k$ tale che, per ogni $i = 2, 3, \ldots, k$, valgono le seguenti proprietà:
>
> - le celle $c_i$ e $c_{i-1}$ condividono un lato o un vertice;
> - il numero in $c_i$ è maggiore del numero in $c_{i-1}$.
>
> Qual è il più grande intero positivo $k$ tale che, indipendentemente da come i numeri da $1$ a $100$ siano disposti nella griglia, possiamo sempre trovare un cammino crescente di lunghezza $k$?


**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_conteggio,method_casework,skill_conteggio_sistematico,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Count 10-digit numbers with digits in {1,2,3} divisible by 99*

> A number is called *trilegal* if all its digits belong to the set $\{1, 2, 3\}$ and it is divisible by $99$. How many trilegal numbers have exactly $10$ digits?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1IF2AhS-oyKoh7_VN0FmjTtVwiNv_ZbJT/view)


<div class="qlang-split" data-lang="it"></div>


*Conta i numeri di 10 cifre con cifre appartenenti a {1,2,3} divisibili per 99*

> Un numero è detto *trilegal* se tutte le sue cifre appartengono all'insieme $\{1, 2, 3\}$ e è divisibile per $99$. Quanti numeri trilegal hanno esattamente $10$ cifre?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_algebra,topic_aritmetica,topic_funzionali,method_fattorizzazione,method_ricorsione,method_backward,method_induzione,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_ragionamento_geometrico,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Esmeralda's iterated quadratic equations with distinct positive integer roots*

> Esmeralda chooses two distinct positive integers $a$ and $b$, with $a > b$, and writes the equation $x^2 - ax + b = 0$ on the board. If the equation has distinct positive integer roots $c$ and $d$, with $c > d$, she then writes the equation $x^2 - cx + d = 0$ on the board. She repeats this procedure as long as she keeps obtaining distinct positive integer roots. If she writes an equation for which this does not happen, she stops.
> 
> (a) Show that Esmeralda can choose $a$ and $b$ such that she writes exactly $2024$ equations on the board.
> 
> (b) What is the greatest number of equations she can write knowing that one of the numbers she initially chose is $2024$?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_ricorsione|Ricorsione]], [[method_backward|Backward]], [[method_induzione|Induction]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1IF2AhS-oyKoh7_VN0FmjTtVwiNv_ZbJT/view)


<div class="qlang-split" data-lang="it"></div>


*Le equazioni quadratiche iterate di Esmeralda con radici intere positive distinte*

> Esmeralda sceglie due interi positivi distinti $a$ e $b$, con $a > b$, e scrive sull'argine l'equazione $x^2 - ax + b = 0$. Se l'equazione ha radici intere positive distinte $c$ e $d$, con $c > d$, allora scrive sull'argine l'equazione $x^2 - cx + d = 0$. Ripete questa procedura finché continua a ottenere radici intere positive distinte. Se scrive un'equazione per cui ciò non accade, si ferma.
>
> (a) Dimostrare che Esmeralda può scegliere $a$ e $b$ in modo che scriva esattamente $2024$ equazioni alla lavagna.
>
> (b) Qual è il numero massimo di equazioni che può scrivere sapendo che uno dei numeri che ha scelto inizialmente è $2024$?


**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_ricorsione|Ricorsione]], [[method_backward|Backward]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_geometria_piana,method_coordinate,method_simmetria,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Perpendicularity result in isosceles triangle with special cevian configuration*

> Let $ABC$ be an isosceles triangle with $AB = BC$. Let $D$ be a point on segment $AB$, $E$ a point on segment $BC$, and $P$ a point on segment $DE$ such that $AD = DP$ and $CE = PE$. Let $M$ be the midpoint of $DE$. The line parallel to $AB$ through $M$ intersects $AC$ at $X$, and the line parallel to $BC$ through $M$ intersects $AC$ at $Y$. The lines $DX$ and $EY$ intersect at $F$. Prove that $FP$ is perpendicular to $DE$.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1IF2AhS-oyKoh7_VN0FmjTtVwiNv_ZbJT/view)


<div class="qlang-split" data-lang="it"></div>


*La perpendicolarità dà luogo a un triangolo isoscele con una configurazione ceviana speciale*

> Sia $ABC$ un triangolo isoscele con $AB = BC$. Sia $D$ un punto sul segmento $AB$, $E$ un punto sul segmento $BC$ e $P$ un punto sul segmento $DE$ tali che $AD = DP$ e $CE = PE$. Sia $M$ il punto medio di $DE$. La retta parallela a $AB$ passante per $M$ interseca $AC$ in $X$, e la retta parallela a $BC$ passante per $M$ interseca $AC$ in $Y$. Le rette $DX$ e $EY$ si intersecano in $F$. Dimostrare che $FP$ è perpendicolare a $DE$.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]]
