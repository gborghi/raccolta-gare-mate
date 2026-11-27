---
title: Japan Mathematical Olympiad 2023 — Honsen (Final)
tipo: gara
competition: Japan Mathematical Olympiad 2023 — Honsen (Final)
family: jmo
year: '2023'
level: JMO Honsen
---
<div class="atom-reader" data-gara="Quesiti/src_jmo33hq_honsen"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,method_estremalita,method_casework,method_conteggio,skill_conteggio_sistematico,skill_modellizzazione,skill_casework_accurato,skill_lettura_attenta,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Max cells covered by at least 1 L-tetromino on 5x5 grid*

> On a $5 \times 5$ grid, L-shaped tetromino tiles (each covering 4 cells in an L-shape, as shown) are placed along the grid lines. Tiles may overlap one another but must not extend outside the grid. For every cell, the number of tiles covering it must be between $0$ and $2$ (inclusive). Find the maximum possible number of cells that are covered by at least $1$ tile.
> 
> (Tiles may be rotated and reflected.)

![[src_jmo33hq_honsen__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1VHuJXp0L8AAwmYvzBeWsGkyY-LQ1btx2/view)


<div class="qlang-split" data-lang="it"></div>


*Massimo numero di caselle coperte da almeno un tetramino a L*

> Su una griglia $5 \times 5$ si pongono tessere tetramino a L (ciascuna copre 4 caselle a forma di L, come in figura) lungo le linee della griglia. Le tessere possono sovrapporsi, ma non devono uscire dalla griglia. Per ogni casella, il numero di tessere che la coprono deve essere compreso tra $0$ e $2$ (estremi inclusi). Trovare il massimo numero possibile di caselle coperte da almeno $1$ tessera.
>
> (Le tessere si possono ruotare e riflettere.)

![[src_jmo33hq_honsen__Q01.png]]

**Argomento:** [[topic_combinatoria|Combinatoria]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalità]], [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Analisi per casi accurata]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,method_coordinate,method_trigonometria,method_simmetria,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_astrazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*In acute triangle, line through F parallel to XY meets DY at P; prove AD perp EP*

> Let $ABC$ be an acute triangle with $D$, $E$, $F$ the midpoints of sides $BC$, $CA$, $AB$ respectively. Let $X$ and $Y$ be the feet of the perpendiculars from $D$ to lines $AB$ and $AC$ respectively. The line through $F$ parallel to line $XY$ meets line $DY$ at a point $P$. Prove that lines $AD$ and $EP$ are perpendicular.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1VHuJXp0L8AAwmYvzBeWsGkyY-LQ1btx2/view)


<div class="qlang-split" data-lang="it"></div>


*Due rette sono perpendicolari*

> Sia $ABC$ un triangolo acutangolo, e siano $D$, $E$, $F$ i punti medi dei lati $BC$, $CA$, $AB$ rispettivamente. Siano $X$ e $Y$ i piedi delle perpendicolari da $D$ rispettivamente alle rette $AB$ e $AC$. La retta per $F$ parallela alla retta $XY$ incontra la retta $DY$ in un punto $P$. Dimostrare che le rette $AD$ e $EP$ sono perpendicolari.

**Argomento:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_trigonometria|Tecniche trigonometriche]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilità:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Geometria]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_algebra,topic_funzionali,method_invarianti,method_ricorsione,method_casework,skill_lettura_attenta,skill_riconoscimento_pattern,skill_modellizzazione,skill_ragionamento_geometrico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Find all positive-integer sequences where count of i with a_i <= a_{i+1}+c equals c for all n*

> Let $c$ be a non-negative integer. Find all sequences of positive integers $a_1, a_2, \ldots$ such that for any non-negative integer $n$, the number of positive integers $i$ satisfying
> $$a_i \le a_{i+1} + c$$
> and $i \le n$ is exactly $c$.
> 
> (Here, when $n = 0$ the count is $0$, so the condition is vacuously satisfied for $n = 0$.)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1VHuJXp0L8AAwmYvzBeWsGkyY-LQ1btx2/view)


<div class="qlang-split" data-lang="it"></div>


*Successioni di interi positivi con un conteggio fissato*

> Sia $c$ un intero non negativo. Determinare tutte le successioni di interi positivi $a_1, a_2, \ldots$ tali che, per qualunque intero non negativo $n$, il numero di interi positivi $i$ che soddisfano
>
> $$a_i \le a_{i+1} + c$$
>
> e $i \le n$ sia esattamente $c$.
>
> (Qui, quando $n = 0$, il conteggio è $0$, così la condizione è soddisfatta in modo vuoto per $n = 0$.)

**Argomento:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]], [[method_ricorsione|Ricorsione]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_riconoscimento_pattern|Riconoscimento di schemi]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_congruenze,method_casework,method_fattorizzazione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_casework_accurato,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Find all positive integers n for which (phi(n)^phi(n) - 1) / d(n) is not an integer*

> Find all positive integers $n$ such that
> $$\frac{\varphi(n)^{\varphi(n)} - 1}{d(n)}$$
> is not an integer. Here $\varphi(n)$ denotes the number of integers from $1$ to $n$ that are coprime to $n$ (Euler's totient function), and $d(n)$ denotes the number of positive divisors of $n$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1VHuJXp0L8AAwmYvzBeWsGkyY-LQ1btx2/view)


<div class="qlang-split" data-lang="it"></div>


*Interi positivi per cui un quoziente non è intero*

> Determinare tutti gli interi positivi $n$ tali che
>
> $$\frac{\varphi(n)^{\varphi(n)} - 1}{d(n)}$$
>
> non sia un intero. Qui $\varphi(n)$ indica il numero di interi da $1$ a $n$ che sono coprimi con $n$ (la funzione totiente di Eulero), e $d(n)$ indica il numero di divisori positivi di $n$.

**Argomento:** [[topic_aritmetica|Aritmetica / Teoria dei numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_casework|Analisi per casi]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilità:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_casework_accurato|Analisi per casi accurata]], [[skill_riconoscimento_pattern|Riconoscimento di schemi]]
**Area:** [[Aritmetica e Teoria dei Numeri]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,topic_insiemi_funzioni,method_estremalita,method_doppio_conteggio,method_simmetria,method_casework,skill_modellizzazione,skill_conteggio_sistematico,skill_astrazione,skill_stima,skill_lettura_attenta,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*S={1,...,3000}; find max X such that for any bijection f, some bijection g makes sum >= X*

> Let $S = \{1, 2, \ldots, 3000\}$. Find the maximum integer $X$ such that the following condition holds:
> 
> For any bijection $f : S \to S$, there exists a bijection $g : S \to S$ such that
> $$\sum_{k=1}^{3000} \Bigl(\max\{f(f(k)),\, f(g(k)),\, g(f(k)),\, g(g(k))\} - \min\{f(f(k)),\, f(g(k)),\, g(f(k)),\, g(g(k))\}\Bigr) \ge X.$$
> 
> Here, a bijection from $S$ to $S$ is a function $f : S \to S$ such that for every element $y \in S$ there exists exactly one element $x \in S$ with $f(x) = y$. For positive integers $x_1, x_2, x_3, x_4$, $\max\{x_1, x_2, x_3, x_4\}$ and $\min\{x_1, x_2, x_3, x_4\}$ denote their maximum and minimum respectively.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]], [[method_simmetria|Simmetria]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1VHuJXp0L8AAwmYvzBeWsGkyY-LQ1btx2/view)


<div class="qlang-split" data-lang="it"></div>


*Massimo intero per cui ogni biezione ne ammette un'altra con una disuguaglianza*

> Sia $S = \{1, 2, \ldots, 3000\}$. Trovare il massimo intero $X$ tale che valga la condizione seguente.
>
> Per ogni biezione $f : S \to S$, esiste una biezione $g : S \to S$ tale che
>
> $$\sum_{k=1}^{3000} \Bigl(\max\{f(f(k)),\, f(g(k)),\, g(f(k)),\, g(g(k))\} - \min\{f(f(k)),\, f(g(k)),\, g(f(k)),\, g(g(k))\}\Bigr) \ge X.$$
>
> Qui una biezione da $S$ a $S$ è una funzione $f : S \to S$ tale che per ogni elemento $y \in S$ esiste esattamente un elemento $x \in S$ con $f(x) = y$. Per interi positivi $x_1, x_2, x_3, x_4$, $\max\{x_1, x_2, x_3, x_4\}$ e $\min\{x_1, x_2, x_3, x_4\}$ indicano rispettivamente il loro massimo e il loro minimo.

**Argomento:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_estremalita|Principio di estremalità]], [[method_doppio_conteggio|Doppio conteggio]], [[method_simmetria|Sfruttamento della simmetria]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_stima|Stima e approssimazione]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
