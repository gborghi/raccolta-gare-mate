---
title: Olimpíada Brasileira de Matemática 2024 — Nível Universitário — Fase x
tipo: gara
competition: Olimpíada Brasileira de Matemática 2024 — Nível Universitário — Fase x
family: obm
year: '2024'
level: OBM Nível Universitário
---
<div class="atom-reader" data-gara="Quesiti/src_obm_2024_nu_fx"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,method_disuguaglianze,method_fattorizzazione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Inequality on sums over primes for perfect numbers*

> A positive integer $n$ is called *perfect* if the sum of its positive divisors $\sigma(n)$ equals twice $n$, i.e.\ $\sigma(n) = 2n$. For example, $6$ is a perfect number, since the sum of its positive divisors is $1+2+3+6=12$, which is the double of $6$. Prove that if $n$ is a positive perfect integer, then
> $$\sum_{\substack{p \mid n \\ p \text{ prime}}} \frac{1}{p+1} < \ln 2 < \sum_{\substack{p \mid n \\ p \text{ prime}}} \frac{1}{p-1}.$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ASMMz2DYTBieu4G0G3yj2BJioNfgOgua/view)


<span class="qlang-split" data-lang="it"></span>


*Ineguaglianza delle somme sui numeri primi per i numeri perfetti*

> Un intero positivo $n$ si chiama *perfetto* se la somma dei suoi divisori positivi $\sigma(n)$ è uguale al doppio $n$, cioè\ $\sigma(n) = 2n$. Ad esempio, $6$ è un numero perfetto, poiché la somma dei suoi divisori positivi è $1+2+3+6=12$, che è il doppio di $6$. Prova che se $n$ è un intero perfetto positivo, allora $$\sum_{\substack{p \mid n \\ p \text{ prime}}} \frac{1}{p+1} < \ln 2 < \sum_{\substack{p \mid n \\ p \text{ prime}}} \frac{1}{p-1}.$$

[[src_obm_2024_nu_fx__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_insiemi_funzioni,topic_algebra,method_disuguaglianze,method_induzione,skill_manipolazione_algebrica,skill_ragionamento_geometrico,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Fixed point and eigenvalue analysis for iterated function composition*

> For each pair of integers $j, k \ge 2$, define the function $f_{jk} : \mathbb{R} \to \mathbb{R}$ by $f_{jk}(x) = 1 - (1 - x^j)^k$.
> 
> (a) Prove that for any integers $j, k \ge 2$, there exists a unique real number $p_{jk} \in (0,1)$ such that $f_{jk}(p_{jk}) = p_{jk}$. Moreover, defining $\lambda_{jk} := f'_{jk}(p_{jk})$, prove that $\lambda_{jk} > 1$.
> 
> (b) Prove that $p'_{jk} = 1 - p_{jk}$ for any integers $j, k \ge 2$.
> 
> (c) Prove that $\lambda_{jk} = \lambda_{kj}$ for any integers $j, k \ge 2$.

**Topic:** [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_algebra|Algebra]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ASMMz2DYTBieu4G0G3yj2BJioNfgOgua/view)


<span class="qlang-split" data-lang="it"></span>


*Analisi di punto fisso e di valore proprio per la composizione delle funzioni iterate*

> Per ogni coppia di integri $j, k \ge 2$, definire la funzione $f_{jk} : \mathbb{R} \to \mathbb{R}$ con $f_{jk}(x) = 1 - (1 - x^j)^k$.
> 
> a) Prove che per tutti gli enti $j, k \ge 2$ esiste un numero reale unico $p_{jk} \in (0,1)$ tale che $f_{jk}(p_{jk}) = p_{jk}$. Inoltre, definendo $\lambda_{jk} := f'_{jk}(p_{jk})$, si dimostra che $\lambda_{jk} > 1$.
> 
> b) Prove che $p'_{jk} = 1 - p_{jk}$ per tutti gli integri $j, k \ge 2$.
> 
> c) Prove che $\lambda_{jk} = \lambda_{kj}$ per tutti gli integri $j, k \ge 2$.

[[src_obm_2024_nu_fx__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,method_invarianti,method_casework,method_congruenze,skill_ragionamento_geometrico,skill_riconoscimento_pattern,skill_conteggio_sistematico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Board game: moves on n×n grid preserving exactly one stone*

> Consider a game on an $n \times n$ board, where each cell starts with exactly one stone. A *move* consists of choosing $5$ consecutive cells in the same row or column of the board and swapping the state of those cells (removing a stone from a cell that has one, and placing a stone in a cell that has none). For which positive integers $n \ge 5$ is it possible to make the board have exactly one stone remaining after a finite number of moves?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_casework|Casework]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ASMMz2DYTBieu4G0G3yj2BJioNfgOgua/view)


<span class="qlang-split" data-lang="it"></span>


*Gioco da tavolo: si muove su n×n griglia conservando esattamente una pietra*

> Considerate un gioco su una tavola $n \times n$, dove ogni cella inizia con esattamente una pietra. Un *movimento* consiste nel scegliere $5$ cellule consecutive nella stessa riga o colonna della lavagna e scambiare lo stato di tali cellule (rilevando una pietra da una cellula che ne ha una e inserendo una nella cellula che non ne ha una). Per quali integri positivi $n \ge 5$ è possibile far rimanere esattamente una pietra alla tavola dopo un numero finito di mosse?

[[src_obm_2024_nu_fx__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_insiemi_funzioni,topic_algebra,method_simmetria,method_casework,skill_astrazione,skill_manipolazione_algebrica,skill_ragionamento_geometrico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Morphically impar functions and parity polynomial characterisation*

> We say that a function $f : \mathbb{R} \to \mathbb{R}$ is *morphically odd* (moralmente ímpar) if its graph is symmetric with respect to some point, that is, there exists $(x_0, y_0) \in \mathbb{R}^2$ such that $(2x_0 - x, 2y_0 - f(x)) \in \{(x, f(x)) : x \in \mathbb{R}\}$ for all $x \in \mathbb{R}$. On the other hand, $f$ is called *morphically even* (moralmente par) if its graph is symmetric with respect to some line (not necessarily vertical or horizontal). If $f$ is morphically even, then $f$ is also morphically odd.
> 
> (a) Let $S \subseteq \mathbb{R}$ be a bounded set and $f : S \to \mathbb{R}$ an arbitrary function. Prove that there exists $g : \mathbb{R} \to \mathbb{R}$ morphically odd such that $g(x) = f(x)$ for all $x \in S$.
> 
> (b) Find all polynomials $P$ with real coefficients such that the corresponding polynomial function $P : \mathbb{R} \to \mathbb{R}$ is morphically even.

**Topic:** [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_algebra|Algebra]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_casework|Casework]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ASMMz2DYTBieu4G0G3yj2BJioNfgOgua/view)


<span class="qlang-split" data-lang="it"></span>


*Funzioni morficamente impar e caratterizzazione polinomica di parità*

> Diciamo che una funzione $f : \mathbb{R} \to \mathbb{R}$ è *morfisticamente odd* (moralmente ímpar) se il suo grafico è simmetrico rispetto a qualche punto, cioè esiste $(x_0, y_0) \in \mathbb{R}^2$ tale che $(2x_0 - x, 2y_0 - f(x)) \in \{(x, f(x)) : x \in \mathbb{R}\}$ per tutti $x \in \mathbb{R}$. D'altra parte, $f$ è chiamato *morficamente pari* (moralmente par) se il suo grafico è simmetrico rispetto a una linea (non necessariamente verticale o orizzontale). Se $f$ è morficamente pari, allora $f$ è anche morficamente impar.
> 
> (a) Che $S \subseteq \mathbb{R}$ sia un insieme limitato e $f : S \to \mathbb{R}$ una funzione arbitraria. Prove che esiste un $g : \mathbb{R} \to \mathbb{R}$ morfisticamente impar tale che $g(x) = f(x)$ per tutti $x \in S$.
> 
> (b) Trova tutti i polinomi $P$ con coefficienti reali in modo tale che la funzione polinomica corrispondente $P : \mathbb{R} \to \mathbb{R}$ sia morficamente pari.

[[src_obm_2024_nu_fx__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_algebra,method_casework,method_congruenze,method_fattorizzazione,skill_manipolazione_algebrica,skill_astrazione,skill_ragionamento_geometrico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Matrix sequence with A^12=I or (A^2-I)^2=O, trace on diagonal*

> Let $A$ be a $2 \times 2$ integer-entry matrix with $\det(A) \ne 0$. Let the sequence $(A^n)$, $n = 1, 2, 3, \ldots$, satisfy
> $$A^{12} = I \quad \text{or} \quad (A^2 - I)^2 = O.$$
> Here $I$ and $O$ denote the identity matrix and the zero matrix, respectively, and $\operatorname{tr}$ denotes the trace of the matrix (sum of the diagonal elements). Show that $A$ is limited (bounded).

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Casework]], [[method_congruenze|Congruenze]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ASMMz2DYTBieu4G0G3yj2BJioNfgOgua/view)


<span class="qlang-split" data-lang="it"></span>


*sequenza di matrice con A^12=I o (A^2-I)^2=O, traccia su diagonale*

> La matrice $A$ deve essere una matrice di entrata interi $2 \times 2$ con $\det(A) \ne 0$. La sequenza $(A^n)$, $n = 1, 2, 3, \ldots$, soddisfa $$A^{12} = I \quad \text{or} \quad (A^2 - I)^2 = O.$$ Qui $I$ e $O$ indicano rispettivamente la matrice di identità e la matrice di zero, e $\operatorname{tr}$ indica la traccia della matrice (somma degli elementi diagonali). Indicare che $A$ è limitato (limitato).

[[src_obm_2024_nu_fx__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,topic_combinatoria,method_telescoping,method_conteggio,method_estremalita,skill_riconoscimento_pattern,skill_conteggio_sistematico,skill_manipolazione_algebrica,skill_lettura_attenta,skill_stima"></span>

<div class="qlang-switch" data-default="en"></div>


*Irreducible fractions in [0,1] with denominator ≤ n; limit of ratio*

> For each positive integer $n$, enumerate in increasing order all irreducible fractions in the interval $[0,1]$ with denominator less than or equal to $n$:
> $$\frac{0}{1} = \frac{p_0}{q_0} < \frac{p_1}{q_1} < \cdots < \frac{p_n}{q_n} < \cdots < \frac{1}{1} = \frac{p_{M(n)}}{q_{M(n)}}.$$
> Let $k$ be a positive integer. Define, for each $n$ such that $M(n) \ge k-1$,
> $$f_k(n) = \min\left\{\sum_{j=0}^{k-1} q_{s+j}\,;\; 0 \le s \le M(n) - k + 1\right\}.$$
> Determine, for each $n$, $\lim_{n\to\infty} \dfrac{f_k(n)}{n}$.
> 
> *For example*, if $n=4$, the enumeration is
> $$\frac{0}{1} < \frac{1}{4} < \frac{1}{3} < \frac{1}{2} < \frac{2}{3} < \frac{3}{4} < \frac{1}{1},$$
> where $p_0=0,\ p_1=1,\ p_2=1,\ p_3=1,\ p_4=2,\ p_5=3,\ p_6=1$ and $q_0=1,\ q_1=4,\ q_2=3,\ q_3=2,\ q_4=3,\ q_5=4,\ q_6=1$. In this case, $f_1(4)=1$, $f_2(4)=5$, $f_3(4)=8$, $f_4(4)=10$, $f_5(4)=13$, $f_6(4)=17$ and $f_7(4)=18$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_telescoping|Telescoping]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_stima|Stima]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ASMMz2DYTBieu4G0G3yj2BJioNfgOgua/view)


<span class="qlang-split" data-lang="it"></span>


*frazioni irriducibili in [0,1] con denominatore ≤ n; limite di rapporto*

> Per ogni intero positivo $n$, enumere in ordine crescente tutte le frazioni irriducibili nell'intervallo $[0,1]$ con denominatore inferiore o uguale a $n$: $$\frac{0}{1} = \frac{p_0}{q_0} < \frac{p_1}{q_1} < \cdots < \frac{p_n}{q_n} < \cdots < \frac{1}{1} = \frac{p_{M(n)}}{q_{M(n)}}.$$ Si tratti di un intero positivo. Determinare, per ogni $n$ tale che $M(n) \ge k-1$, $$f_k(n) = \min\left\{\sum_{j=0}^{k-1} q_{s+j}\,;\; 0 \le s \le M(n) - k + 1\right\}.$$ Determinare, per ogni $n$, $\lim_{n\to\infty} \dfrac{f_k(n)}{n}$.
> 
> *Per esempio *, se $n=4$, l'elenco è $$\frac{0}{1} < \frac{1}{4} < \frac{1}{3} < \frac{1}{2} < \frac{2}{3} < \frac{3}{4} < \frac{1}{1},$$ dove $p_0=0,\ p_1=1,\ p_2=1,\ p_3=1,\ p_4=2,\ p_5=3,\ p_6=1$ e $q_0=1,\ q_1=4,\ q_2=3,\ q_3=2,\ q_4=3,\ q_5=4,\ q_6=1$. In questo caso, $f_1(4)=1$, $f_2(4)=5$, $f_3(4)=8$, $f_4(4)=10$, $f_5(4)=13$, $f_6(4)=17$ e $f_7(4)=18$.

[[src_obm_2024_nu_fx__Q06]]
