---
title: Concours Général des Lycées 2015 — Matematica
tipo: gara
competition: Concours Général des Lycées 2015 — Matematica
family: concours_generale
year: '2015'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2015"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,topic_disuguaglianze,method_estremalita,method_casework,method_disuguaglianze,skill_manipolazione_algebrica,skill_lettura_attenta,skill_casework_accurato,skill_stima"></span>

<div class="qlang-switch" data-default="en"></div>


*Weight of a finite sequence of reals defined as the max of absolute partial sums; compare Isabelle's minimal weight I with Clara's greedy weight C.*

> Problem 1: Small weights.
> 
> For every integer $n \ge 2$, and every finite sequence of $n$ reals $(x_1, x_2, \ldots, x_n)$, the \emph{weight} of the sequence is the largest of the values $|x_1|, |x_1 + x_2|, \ldots, |x_1 + x_2 + \cdots + x_n|$.
> 
> For example, for $n = 4$ and $(x_1, x_2, x_3, x_4) = (4, 4, 0, -9)$, the weight of the sequence equals $8$, since:
> $$|x_1| = 4, \quad |x_1 + x_2| = 8, \quad |x_1 + x_2 + x_3| = 8, \quad |x_1 + x_2 + x_3 + x_4| = 1.$$
> For $(x_1, x_2, x_3, x_4) = (-9, 4, 0, 4)$, the weight equals $9$, since:
> $$|x_1| = 9, \quad |x_1 + x_2| = 5, \quad |x_1 + x_2 + x_3| = 5, \quad |x_1 + x_2 + x_3 + x_4| = 1.$$
> Note that the two finite sequences above are formed of the same numbers in a different order and that they have different weights.
> 
> 1. Determine the weights of the following finite sequences:
>    a. $(3, 5, -6, -8, 2)$ (so $n = 5$).
>    b. $(1, 2, 3, \ldots, 2014, 2015, -2015, -2014, \ldots, -2, -1)$ (so $n = 4030$).
>    c. In each of the two preceding examples, reorder the terms so as to obtain a smaller weight.
> 
> Isabelle and Clara are given the same finite sequence of $n$ reals $(x_1, x_2, \ldots, x_n)$.
> Isabelle wants to reorder it so as to obtain a finite sequence of minimal weight. To do this, she considers all possible orderings of these $n$ reals, determines for each the weight of the corresponding sequence, and chooses an order for which the weight is minimal. Let $I$ denote this minimal weight.
> 
> For her part, Clara, more hurried than Isabelle, adopts the following algorithm. She begins by choosing among the $n$ reals one number, denoted $c_1$, so that the value of $|c_1|$ is as small as possible. She then chooses the number $c_2$ among the $n - 1$ remaining reals, so that the value of $|c_1 + c_2|$ is as small as possible. More generally, having chosen the numbers $c_1, \ldots, c_i$ among the $n$ reals given at the start, she chooses $c_{i+1}$ among the $n - i$ remaining ones so that the value of $|c_1 + \cdots + c_i + c_{i+1}|$ is as small as possible. She finally obtains a finite sequence $(c_1, \ldots, c_n)$ of $n$ reals. Let $C$ denote its weight.
> 
> 2. Determine $I$ and $C$ in the two following cases.
>    a. $n = 3$ and $x_1 = 1$, $x_2 = 2$, $x_3 = -4$.
>    b. $n = 4$ and $x_1 = 1$, $x_2 = -1$, $x_3 = 2$, $x_4 = -2$.
> 
> 3. If $n = 2$, show that $I = C$.
> 
> 4. If $n = 3$, show that $C \le \frac{3}{2} I$.
> 
> 5. Let $n$ be an integer greater than or equal to $4$ and let $(x_1, x_2, \ldots, x_n)$ be the finite sequence given to Isabelle and Clara. Set:
> $$M = \max(|x_1|, |x_2|, \ldots, |x_n|), \quad S = |x_1 + x_2 + \cdots + x_n|, \quad N = \max(M, S).$$
> In other words, $M$ is the largest of the numbers $|x_1|, |x_2|, \ldots, |x_n|$. Likewise, $N$ is the largest of the numbers $M$ and $S$.
>    a. Show that $S \le I$.
>    b. Show that $M \le 2I$.
>    c. Show that $C \le N$.
>    d. Deduce that $C \le 2I$.
>    e. Determine $n$ reals $x_1, x_2, \ldots, x_n$ such that $C = 2I$.

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Casework accurato]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1seWyepAzmZaY6qrhHguoD9BLLbe2NGeK/view)


<span class="qlang-split" data-lang="it"></span>


*Peso di una sequenza finita di reali definita come il massimo di somme parziali assolute; confronta il peso minimo di Isabelle I con il peso avido di Clara C.*

> Problema 1: pesi piccoli.
> 
> Per ogni numero intero $n \ge 2$ e per ogni sequenza finita di $n$ reale $(x_1, x_2, \ldots, x_n)$, il \emph{peso} della sequenza è il più grande dei valori $|x_1|, |x_1 + x_2|, \ldots, |x_1 + x_2 + \cdots + x_n|$.
> 
> Per esempio, per $n = 4$ e $(x_1, x_2, x_3, x_4) = (4, 4, 0, -9)$, il peso della sequenza è uguale a $8$, dal momento che: $$|x_1| = 4, \quad |x_1 + x_2| = 8, \quad |x_1 + x_2 + x_3| = 8, \quad |x_1 + x_2 + x_3 + x_4| = 1.$$ Per $(x_1, x_2, x_3, x_4) = (-9, 4, 0, 4)$, il peso è uguale a $9$, dal momento che: $$|x_1| = 9, \quad |x_1 + x_2| = 5, \quad |x_1 + x_2 + x_3| = 5, \quad |x_1 + x_2 + x_3 + x_4| = 1.$$ Si noti che le due sequenze finite di cui sopra sono formate dai medesimi numeri in un ordine diverso e che hanno pesi diversi.
> 
> 1. Determinare i pesi delle seguenti sequenze finite: a. $(3, 5, -6, -8, 2)$ (so $n = 5$). b. $(1, 2, 3, \ldots, 2014, 2015, -2015, -2014, \ldots, -2, -1)$ (so $n = 4030$). c. In ciascuno dei due esempi precedenti, riordinare i termini in modo da ottenere un peso minore.
> 
> Isabelle e Clara ricevono la stessa sequenza finita di $n$ reali $(x_1, x_2, \ldots, x_n)$. Isabelle vuole riordinarlo in modo da ottenere una sequenza finita di peso minimo. Per fare ciò, considera tutti gli ordini possibili di questi reali $n$, determina per ciascuno il peso della sequenza corrispondente e sceglie un ordine per il quale il peso è minimo. Indicare $I$ questo peso minimo.
> 
> Per sua parte, Clara, più affrettata di Isabelle, adotta l'algoritmo seguente. Inizia scegliendo tra i reali $n$ un numero, indicato $c_1$, in modo che il valore di $|c_1|$ sia il più piccolo possibile. Sceglie quindi il numero $c_2$ tra i reali $n - 1$ rimanenti, in modo che il valore di $|c_1 + c_2|$ sia il più piccolo possibile. Più in generale, dopo aver scelto i numeri $c_1, \ldots, c_i$ tra i reali $n$ dati all'inizio, sceglie $c_{i+1}$ tra i rimanenti $n - i$ in modo che il valore di $|c_1 + \cdots + c_i + c_{i+1}|$ sia il più piccolo possibile. Alla fine ottiene una sequenza finita $(c_1, \ldots, c_n)$ di $n$ reali. Indicare $C$ il suo peso.
> 
> 2. Determinare $I$ e $C$ nei due casi seguenti. a. $n = 3$ e $x_1 = 1$, $x_2 = 2$, $x_3 = -4$. b. $n = 4$ e $x_1 = 1$, $x_2 = -1$, $x_3 = 2$, $x_4 = -2$.
> 
> 3. Se $n = 2$, indicare che $I = C$.
> 
> 4. Se $n = 3$, indicare che $C \le \frac{3}{2} I$.
> 
> 5. Che $n$ sia un numero intero maggiore o uguale a $4$ e che $(x_1, x_2, \ldots, x_n)$ sia la sequenza finita data a Isabelle e Clara. Set: $$M = \max(|x_1|, |x_2|, \ldots, |x_n|), \quad S = |x_1 + x_2 + \cdots + x_n|, \quad N = \max(M, S).$$ In altre parole, $M$ è il più grande dei numeri $|x_1|, |x_2|, \ldots, |x_n|$. Allo stesso modo, $N$ è il più grande dei numeri $M$ e $S$. a. Mostra che $S \le I$. b. Mostra che $M \le 2I$. c. Mostra che $C \le N$. d. Riduzione di $C \le 2I$. e. Determinare i valori $n$ $x_1, x_2, \ldots, x_n$ tali da $C = 2I$.

[[src_cgen_2015__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_solida,topic_geometria_analitica,method_coordinate,method_simmetria,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Tetrahedra: centroid and medians, circumscribed sphere, concurrency of altitudes and the orthocentric condition expressed via dot products of line direction vectors.*

> Problem 2: Tetrahedra.
> 
> We call \emph{tetrahedron} the data, in space, of four non-coplanar points $A, B, C, D$. The \emph{edges} of the tetrahedron are the segments $[AB]$, $[AC]$, $[AD]$, $[BC]$, $[BD]$, $[CD]$.
> 
> In questions 3 and 3, $ABCD$ denotes a tetrahedron.
> 
> 1. a. Show that there exists a unique point $G$ such that $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} + \overrightarrow{GD} = \vec{0}$.
>    b. Show that $\overrightarrow{AG} = \frac{3}{4}\overrightarrow{AG_A}$, where $G_A$ is the centroid of the triangle $BCD$.
>    c. We call \emph{median} issued from $A$ the line joining $A$ to the centroid of the triangle $BCD$, and one defines analogously the three other medians, issued from $B$, from $C$ and from $D$. Show that the medians are concurrent at the point $G$.
> 
> 2. Show that there exists a unique sphere passing through $A, B, C, D$. It is called the sphere circumscribed to the tetrahedron $ABCD$, and we denote by $O$ its center.
> 
> 3. We call \emph{altitude} issued from $A$ the line passing through $A$ and orthogonal to the plane $BCD$. One defines analogously the three other altitudes, issued from $B$, from $C$ and from $D$. We say that a tetrahedron of space is \emph{regular} if all its edges have the same length.
>    a. Is it true that the altitudes are concurrent at $O$ if and only if the tetrahedron is regular?
>    b. Are the altitudes necessarily concurrent?
>    c. Is it true that the altitudes are concurrent at $G$ if and only if the tetrahedron is regular?
> 
> 4. In what follows, the dot product of two vectors $\vec{v}$ and $\vec{w}$ is denoted $\vec{v} \cdot \vec{w}$.
> Let $\Delta_1, \ldots, \Delta_4$ be four distinct non-coplanar lines concurrent at a point $H$. For $1 \le i \le 4$ one chooses a unit direction vector $\vec{u}_i$ of $\Delta_i$ and, for $1 \le i, j \le 4$, one sets $c_{ij} = \vec{u}_i \cdot \vec{u}_j$.
>    a. Suppose there exists a tetrahedron $A_1 A_2 A_3 A_4$ whose altitudes are concurrent at $H$ and such that $A_j \in \Delta_j$ for all $j \in \{1, 2, 3, 4\}$. Show that $c_{12} c_{34} = c_{13} c_{24} = c_{14} c_{23}$.
>    b. Conversely, if $c_{12} c_{34} = c_{13} c_{24} = c_{14} c_{23} \ne 0$, show that there exists a tetrahedron $A_1 A_2 A_3 A_4$ whose altitudes are concurrent at $H$ and such that $A_j \in \Delta_j$ for all $j \in \{1, 2, 3, 4\}$.

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1seWyepAzmZaY6qrhHguoD9BLLbe2NGeK/view)


<span class="qlang-split" data-lang="it"></span>


*Tetraedri: centriodi e mediani, sfera circonscrita, concomitanza delle altitudini e condizione ortocentrica espressa attraverso i prodotti di punti dei vettori di direzione della linea.*

> Problema 2: Tetraede.
> 
> Chiamiamo i dati, nello spazio, di quattro punti non coplanari $A, B, C, D$ I \emph{edges} del tetraedro sono i segmenti $[AB]$, $[AC]$, $[AD]$, $[BC]$, $[BD]$, $[CD]$.
> 
> Nella domanda 3 e 3, $ABCD$ indica un tetraedro.
> 
> 1. a. Indicare che esiste un punto unico $G$ tale che $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} + \overrightarrow{GD} = \vec{0}$. b. Indicare che $\overrightarrow{AG} = \frac{3}{4}\overrightarrow{AG_A}$, dove $G_A$ è il centroide del triangolo $BCD$. c. Chiamiamo \emph{median} emesso da $A$ la linea che unisce $A$ al centroide del triangolo $BCD$, e uno definisce analogamente gli altri tre mediani, emessi da $B$, da $C$ e da $D$. Indicare che i mediani sono simultanei al punto $G$.
> 
> 2. Mostrare che esiste una sfera unica che passa attraverso $A, B, C, D$. Si chiama sfera circoscritta al tetraedro $ABCD$, e noi denotamo con $O$ il suo centro.
> 
> 3. Chiamiamo \emph{altitude} emesso da $A$ la linea che passa attraverso $A$ e ortogonale al piano $BCD$. Si definiscono in modo analogo le altre tre altitudini, emesse da $B$, da $C$ e da $D$. Diciamo che un tetraedro di spazio è regolare se tutti i suoi bordi hanno la stessa lunghezza. a. È vero che le altitudini sono simultanee a $O$ se e solo se il tetraedro è regolare? b. Le altitudini sono necessariamente contemporanee? c. È vero che le altitudini sono simultanee a $G$ se e solo se il tetraedro è regolare?
> 
> 4. In quanto segue, il prodotto di due vettori $\vec{v}$ e $\vec{w}$ è indicato $\vec{v} \cdot \vec{w}$. Le linee $\Delta_1, \ldots, \Delta_4$ devono essere quattro linee non coplanarie distinte, che sono simultanee in un punto $H$. Per $1 \le i \le 4$ si sceglie un vettore di direzione unitario $\vec{u}_i$ di $\Delta_i$ e, per $1 \le i, j \le 4$, un set $c_{ij} = \vec{u}_i \cdot \vec{u}_j$. a. Supponiamo che esista un tetraedro $A_1 A_2 A_3 A_4$ le cui altitudini sono simultanee a $H$ e tale che $A_j \in \Delta_j$ per tutti $j \in \{1, 2, 3, 4\}$. Mostrare che $c_{12} c_{34} = c_{13} c_{24} = c_{14} c_{23}$. b. Al contrario, se $c_{12} c_{34} = c_{13} c_{24} = c_{14} c_{23} \ne 0$, dimostrare che esiste un tetraedro $A_1 A_2 A_3 A_4$ le cui altitudini sono simultanee a $H$ e tale che $A_j \in \Delta_j$ per tutti $j \in \{1, 2, 3, 4\}$.

[[src_cgen_2015__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_algebra,topic_insiemi_funzioni,topic_disuguaglianze,method_disuguaglianze,method_induzione,method_estremalita,skill_manipolazione_algebrica,skill_astrazione,skill_stima,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Predictive means: sequences of type A where each term equals the average of the next n terms; show such sequences cannot be bounded above or below, and decide if a non-constant bounded one exists.*

> Problem 3: Predictive means.
> 
> In this problem, we consider sequences $(u_n)_{n \in \mathbb{N}^*} = (u_1, u_2, \ldots)$ with real values indexed by the nonzero natural numbers. We say that $u_n$ is the predictive mean of the $n$ following terms; the sequence $(u_n)_{n \in \mathbb{N}^*}$ is said to be of type $\mathcal{A}$ if, for every $n \in \mathbb{N}^*$:
> $$u_n = \frac{u_{n+1} + u_{n+2} + \cdots + u_{2n-1} + u_{2n}}{n}.$$
> 
> 1. Let $(u_n)_{n \in \mathbb{N}^*}$ be a sequence of type $\mathcal{A}$ and let $C$ be a real number. Is the sequence $(u_n - C)_{n \in \mathbb{N}^*}$ of type $\mathcal{A}$?
> 
> 2. Show that every constant sequence is of type $\mathcal{A}$.
> 
> 3. Let $(u_n)_{n \in \mathbb{N}^*}$ be a sequence of type $\mathcal{A}$. Suppose there exist reals $a, b, c$ such that $u_n = an^2 + bn + c$ for every $n \in \mathbb{N}^*$. Show that $a = b = 0$.
> 
> 4. The aim of this question 4 is to show that no sequence of type $\mathcal{A}$ is bounded above or bounded below, except constant ones.
> In this question, suppose $(u_n)_{n \in \mathbb{N}^*}$ is a sequence of type $\mathcal{A}$ with non-negative values, and consider an integer $r \in \mathbb{N}^*$.
>    a. Let $p$ be an integer such that $p > r$. Show that there exist nonzero natural numbers $q$ and $q'$ such that $q < p \le q'$ and $2q\, u_{q'} \le u_r \le u_q$. Deduce that $u_p \le 3 u_r$.
>    b. For all $p \in \mathbb{N}^*$, show that $u_p \le 3 u_r$.
> Deduce, from questions a, b, c and d, that the sequence $(u_n)_{n \in \mathbb{N}^*}$ of type $\mathcal{A}$ is bounded above.
>    c. Let $D$ be a strictly positive real and let $p \in \mathbb{N}^*$. Show that if $u_p > D$ is not a lower bound (minorant) of the sequence, then so is the appropriate condition.
>    d. Deduce that the sequence $(u_n)_{n \in \mathbb{N}^*}$ is not bounded below.
>    e. Conclude.
> 
> 5. Does there exist a non-constant bounded sequence of type $\mathcal{A}$?

**Topic:** [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_induzione|Induzione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1seWyepAzmZaY6qrhHguoD9BLLbe2NGeK/view)


<span class="qlang-split" data-lang="it"></span>


*Medi predittivi: sequenze di tipo A in cui ogni termine è uguale alla media dei prossimi n termini; mostrare che tali sequenze non possono essere delimitate sopra o sotto, e decidere se esiste una sequenza delimitata non costante.*

> Problema 3: mezzi predittivi.
> 
> In questo problema, consideriamo le sequenze $(u_n)_{n \in \mathbb{N}^*} = (u_1, u_2, \ldots)$ con valori reali indicizzati dai numeri naturali non zero. Diciamo che $u_n$ è la media predittiva dei $n$ seguenti termini; la sequenza $(u_n)_{n \in \mathbb{N}^*}$ si dice sia di tipo $\mathcal{A}$ se, per ogni $n \in \mathbb{N}^*$: $$u_n = \frac{u_{n+1} + u_{n+2} + \cdots + u_{2n-1} + u_{2n}}{n}.$$
> 
> 1. Che $(u_n)_{n \in \mathbb{N}^*}$ sia una sequenza di tipo $\mathcal{A}$ e che $C$ sia un numero reale. La sequenza $(u_n - C)_{n \in \mathbb{N}^*}$ è di tipo $\mathcal{A}$?
> 
> 2. Indicare che ogni sequenza costante è di tipo $\mathcal{A}$.
> 
> 3. La sequenza $(u_n)_{n \in \mathbb{N}^*}$ deve essere di tipo $\mathcal{A}$. Supponiamo che esistano valori $a, b, c$ tali da $u_n = an^2 + bn + c$ per ogni $n \in \mathbb{N}^*$. Mostra che $a = b = 0$.
> 
> 4. L'obiettivo della presente domanda 4 è di dimostrare che nessuna sequenza del tipo $\mathcal{A}$ è limitata sopra o sotto, tranne quelle costanti. In questa domanda, supponiamo che $(u_n)_{n \in \mathbb{N}^*}$ sia una sequenza di tipo $\mathcal{A}$ con valori non negativi, e consideriamo un intero $r \in \mathbb{N}^*$. a. $p$ sia un numero intero tale che $p > r$. Mostrare che esistono numeri naturali non zero $q$ e $q'$ come $q < p \le q'$ e $2q\, u_{q'} \le u_r \le u_q$. Riduzione di $u_p \le 3 u_r$. b. Per tutti $p \in \mathbb{N}^*$, indicare che $u_p \le 3 u_r$. Dalle domande a, b, c e d si deduce che la sequenza $(u_n)_{n \in \mathbb{N}^*}$ del tipo $\mathcal{A}$ è dilimitata sopra. c. Che $D$ sia un reale rigorosamente positivo e che $p \in \mathbb{N}^*$. Indicare che se $u_p > D$ non è un limite inferiore (minorante) della sequenza, così è la condizione appropriata. d. Deduzione che la sequenza $(u_n)_{n \in \mathbb{N}^*}$ non sia limitata in basso. e. Conclusione.
> 
> 5. Esiste una sequenza limitata non costante del tipo $\mathcal{A}$?

[[src_cgen_2015__Q03]]
