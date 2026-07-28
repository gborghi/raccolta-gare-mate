---
title: IMO 2022 papers
tipo: gara
competition: IMO 2022 papers
family: imo
year: '2022'
level: IMO
---
<div class="atom-reader" data-gara="Quesiti/src_imo_2022"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_logica,method_invarianti,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Coppie (n,k) monete con n a sinistra dello stesso tipo*

> The Bank of Oslo issues two types of coin: aluminium (denoted A) and bronze (denoted B). Marianne has $n$ aluminium coins and $n$ bronze coins, arranged in a row in some arbitrary initial order. A **chain** is any subsequence of consecutive coins of the same type. Given a fixed positive integer $k \leqslant 2n$, Marianne repeatedly performs the following operation: she identifies the longest chain containing the $k$-th coin from the left, and moves all coins in that chain to the left end of the row. For example, if $n = 4$ and $k = 4$, the process starting from the ordering AABBBABA would be
> $$\text{AABBBABA} \to \text{BBBAAABA} \to \text{AAABBBBA} \to \text{BBBBAAAA} \to \text{BBBBAAAA} \to \cdots$$
> Find all pairs $(n, k)$ with $1 \leqslant k \leqslant 2n$ such that for every initial ordering, at some moment during the process, the leftmost $n$ coins will all be of the same type.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1tsXgbJ9Pl2aI5mNYIg-TXWZHgI4xJ55P/view)


<span class="qlang-split" data-lang="en"></span>


*Pairs (n,k) of coins with n left of the same type*

> The Bank of Oslo issues two types of coin: aluminium (denoted A) and bronze (denoted B). Marianne has $n$ aluminium coins and $n$ bronze coins, arranged in a row in some arbitrary initial order. A **chain** is any subsequence of consecutive coins of the same type. Given a fixed positive integer $k \leqslant 2n$, Marianne repeatedly performs the following operation: she identifies the longest chain containing the $k$-th coin from the left, and moves all coins in that chain to the left end of the row. For example, if $n = 4$ and $k = 4$, the process starting from the ordering AABBBABA would be $$\text{AABBBABA} \to \text{BBBAAABA} \to \text{AAABBBBA} \to \text{BBBBAAAA} \to \text{BBBBAAAA} \to \cdots$$ Find all pairs $(n, k)$ with $1 \leqslant k \leqslant 2n$ such that for every initial ordering, at some point during the process, the leftmost $n$ coins will all be of the same type.

[[src_imo_2022__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_funzionali,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*R+->R+ con unica y soddisfacente*

> Let $\mathbb{R}^+$ denote the set of positive real numbers. Find all functions $f : \mathbb{R}^+ \to \mathbb{R}^+$ such that for each $x \in \mathbb{R}^+$, there is exactly one $y \in \mathbb{R}^+$ satisfying
> $$xf(y) + yf(x) \leqslant 2.$$

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1tsXgbJ9Pl2aI5mNYIg-TXWZHgI4xJ55P/view)


<span class="qlang-split" data-lang="en"></span>


*R+->R+ with only satisfactory y*

> Let $\mathbb{R}^+$ denotes the set of positive real numbers. Find all functions $f : \mathbb{R}^+ \to \mathbb{R}^+$ such that for each $x \in \mathbb{R}^+$, there is exactly one $y \in \mathbb{R}^+$ satisfying $$xf(y) + yf(x) \leqslant 2.$$

[[src_imo_2022__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Unico modo di disporre primi con prodotto x^2+x+k*

> Let $k$ be a positive integer and let $S$ be a finite set of odd prime numbers. Prove that there is at most one way (up to rotation and reflection) to place the elements of $S$ around a circle such that the product of any two neighbours is of the form $x^2 + x + k$ for some positive integer $x$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1tsXgbJ9Pl2aI5mNYIg-TXWZHgI4xJ55P/view)


<span class="qlang-split" data-lang="en"></span>


*Only one way to arrange firsts with product x^2+x+k*

> Let $k$ be a positive integer and let $S$ be a finite set of odd prime numbers. Prove that there is at most one way (up to rotation and reflection) to place the elements of $S$ around a circle such that the product of any two neighbors is of the form $x^2 + x + k$ for some positive integer $x$.

[[src_imo_2022__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*P,S,Q,R conciclici nel pentagono convesso*

> Let $ABCDE$ be a convex pentagon such that $BC = DE$. Assume that there is a point $T$ inside $ABCDE$ with $TB = TD$, $TC = TE$ and $\angle ABT = \angle TEA$. Let line $AB$ intersect lines $CD$ and $CT$ at points $P$ and $Q$, respectively. Assume that the points $P, B, A, Q$ occur on their line in that order. Let line $AE$ intersect lines $CD$ and $DT$ at points $R$ and $S$, respectively. Assume that the points $R, E, A, S$ occur on their line in that order. Prove that the points $P, S, Q, R$ lie on a circle.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1tsXgbJ9Pl2aI5mNYIg-TXWZHgI4xJ55P/view)


<span class="qlang-split" data-lang="en"></span>


*P,S,Q,R conical in the convex pentagon*

> Let $ABCDE$ be a convex pentagon such that $BC = DE$. Assume that there is a point $T$ inside $ABCDE$ with $TB = TD$, $TC = TE$ and $\angle ABT = \angle TEA$. Let line $AB$ intersect lines $CD$ and $CT$ at points $P$ and $Q$, respectively. Assumes that the points $P, B, A, Q$ occur on their line in that order. Let line $AE$ intersect lines $CD$ and $DT$ at points $R$ and $S$, respectively. Assumes that the points $R, E, A, S$ occur on their line in that order. Prove that the points lie on a circle.

[[src_imo_2022__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Triple (a,b,p) con a^p=b!+p, p primo*

> Find all triples $(a, b, p)$ of positive integers with $p$ prime and
> $$a^p = b! + p.$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1tsXgbJ9Pl2aI5mNYIg-TXWZHgI4xJ55P/view)


<span class="qlang-split" data-lang="en"></span>


*Triple (a,b,p) with a^p=b!+p, p first*

> Find all triples $(a, b, p)$ of positive integers with $p$ prime and $$a^p = b! + p.$$

[[src_imo_2022__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,method_estremalita,method_grafi,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di cammini uphill in quadrato nordico*

> Let $n$ be a positive integer. A **Nordic square** is an $n \times n$ board containing all the integers from $1$ to $n^2$ so that each cell contains exactly one number. Two different cells are considered **adjacent** if they share a common side. Every cell that is adjacent only to cells containing larger numbers is called a **valley**. An **uphill path** is a sequence of one or more cells such that:
> 
> (i) the first cell in the sequence is a valley,
> 
> (ii) each subsequent cell in the sequence is adjacent to the previous cell, and
> 
> (iii) the numbers written in the cells in the sequence are in increasing order.
> 
> Find, as a function of $n$, the smallest possible total number of uphill paths in a Nordic square.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1tsXgbJ9Pl2aI5mNYIg-TXWZHgI4xJ55P/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of northern square uphill walks*

> Let $n$ be a positive integer. A **Nordic square** is a $n \times n$ board containing all the integers from $1$ to $n^2$ so that each cell contains exactly one number. Two different cells are considered adjacent if they share a common side. Every cell that is adjacent only to cells containing larger numbers is called a **valley**. An **uphill path** is a sequence of one or more cells such that:
> 
> (i) the first cell in the sequence is a valley,
> 
> (ii) each subsequent cell in the sequence is adjacent to the previous cell, and
> 
> (iii) the numbers written in the cells in the sequence are in increasing order.
> 
> Find, as a function of $n$, the smallest possible total number of uphill paths in a Nordic square.

[[src_imo_2022__Q06]]
