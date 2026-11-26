---
title: Japan IMO Selection Camp 2023 — Selection Camp
tipo: gara
competition: Japan IMO Selection Camp 2023 — Selection Camp
family: jcamp
year: '2023'
level: CAMP Selection Camp
---
<div class="atom-reader" data-gara="Quesiti/src_selection_camp_2023"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,method_fattorizzazione,method_congruenze,skill_lettura_attenta,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Largest n with distinct-gcd arithmetic progression of divisors*

> Let $n$ be a positive integer with at least $4$ positive divisors. Let $d(n)$ denote the number of positive divisors of $n$. Find all $n$ for which there exist $d(n)-1$ positive integers $a_1, a_2, \dots, a_{d(n)-1}$ forming an arithmetic progression and satisfying the following condition:
> 
> For any integers $i, j$ with $1 \le i < j \le d(n)-1$, we have $\gcd(a_i, n) \ne \gcd(a_j, n)$.
> 
> Here, for positive integers $x, y$, $\gcd(x, y)$ denotes the greatest common divisor of $x$ and $y$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Massimo n con progressione aritmetica dei divisori a mcd distinto*

> Sia $n$ un numero intero positivo con almeno $4$ divisori positivi. Sia $d(n)$ il numero di divisori positivi di $n$. Determinare tutti gli $n$ per cui esistono $d(n)-1$ numeri interi positivi $a_1, a_2, \dots, a_{d(n)-1}$ che formano una progressione aritmetica e soddisfano la seguente condizione:
>
> Per qualsiasi intero $i, j$ con $1 \le i < j \le d(n)-1$, vale $\gcd(a_i, n) \ne \gcd(a_j, n)$.
>
> Qui, per gli interi positivi $x, y$, $\gcd(x, y)$ denota il massimo comune divisore di $x$ e $y$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]

[[Quesiti/src_selection_camp_2023#q01|src_selection_camp_2023__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,method_colorazione,method_estremalita,method_casework,skill_conteggio_sistematico,skill_modellizzazione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Max number of L-shaped 2023-cell tiles on 2023x2023 board*

> Consider the L-shaped tile shown in the figure, consisting of $2023$ cells (a vertical arm of $1012$ cells and a horizontal arm of $1012$ cells sharing one corner cell). On a $2023 \times 2023$ grid, place copies of this tile along the grid cells so that no two tiles overlap. Find the maximum number of tiles that can be placed.
> 
> Here, tiles may be rotated, but must not extend beyond the grid.

![[src_selection_camp_2023__q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Numero massimo di tessere a forma di L da 2023 celle su una scacchiera 2023x2023*

> Si consideri la piastrella a forma di L mostrata nella figura, composta da $2023$ celle (un braccio verticale di $1012$ celle e un braccio orizzontale di $1012$ celle che condividono una cella d'angolo). Su una griglia di $2023 \times 2023$ celle, si collochino copie di questa piastrella lungo le celle della griglia in modo che nessuna due piastrelle si sovrappongano. Si determini il numero massimo di piastrelle che si possono collocare.
>
> Qui, le tessere possono essere ruotate, ma non devono estendersi oltre la griglia.

![[src_selection_camp_2023__q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]

[[Quesiti/src_selection_camp_2023#q02|src_selection_camp_2023__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_algebra,topic_combinatoria,method_estremalita,method_casework,skill_astrazione,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Largest n with real sequence whose differences realize powers of r*

> Let $n$ be an integer with $n \ge 2$. Find the largest possible value of $n$ for which there exist $n$ real numbers $a_1, a_2, \dots, a_n$ and a positive real number $r \ne 1$ satisfying the following condition:
> 
> For every integer $k$ with $1 \le k \le \dfrac{n(n-1)}{2}$, there exist integers $i, j$ with $1 \le i < j \le n$ such that $a_j - a_i = r^k$.

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Il più grande n per cui esiste una successione reale le cui differenze danno le potenze di r*

> Sia $n$ un numero intero tale che $n \ge 2$. Determinare il valore massimo possibile di $n$ per cui esistono $n$ numeri reali $a_1, a_2, \dots, a_n$ e un numero reale positivo $r \ne 1$ che soddisfano la seguente condizione:
>
> Per ogni numero intero $k$ con $1 \le k \le \dfrac{n(n-1)}{2}$, esistono numeri interi $i, j$ con $1 \le i < j \le n$ tali che $a_j - a_i = r^k$.

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]

[[Quesiti/src_selection_camp_2023#q03|src_selection_camp_2023__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,method_trigonometria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Four points concyclic via tangent-circle construction on altitude foot*

> Let $ABC$ be an acute triangle, and let $F$ be the foot of the perpendicular from $A$ to side $BC$. Take a point $P$ on segment $AF$ (excluding the endpoints), and let $D, E$ be the intersections with line $BC$ of the lines through $P$ parallel to lines $AC, AB$ respectively. Let $X, Y$ be points, each different from all of $A, B, C$, lying on the circumcircles of triangles $ABD, ACE$ respectively, such that $DA = DX$ and $EA = EY$. Prove that the four points $B, C, X, Y$ lie on a common circle.
> 
> Here, $XY$ denotes the length of segment $XY$.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Quattro punti conciclici tramite costruzione del cerchio tangente sull piede dell'altezza*

> Sia $ABC$ un triangolo acutangolo, e sia $F$ il piede della perpendicolare condotta da $A$ sul lato $BC$. Si prenda un punto $P$ sul segmento $AF$ (escludendo gli estremi), e si ponga $D, E$ come l'intersezione con la retta $BC$ delle rette passanti per $P$ e parallele rispettivamente alle rette $AC, AB$. Siano $X, Y$ dei punti, ciascuno diverso da tutti i punti $A, B, C$, giacenti rispettivamente sulle circonferenze circoscritte ai triangoli $ABD, ACE$, in modo che $DA = DX$ e $EA = EY$. Dimostrare che i quattro punti $B, C, X, Y$ giacciono su una circonferenza comune.
>
> Qui, $XY$ indica la lunghezza del segmento $XY$.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]

[[Quesiti/src_selection_camp_2023#q04|src_selection_camp_2023__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_funzionali,skill_manipolazione_algebrica,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Find rationals q realized by f(x+f(y))=f(x)+f(y) with f(z)=qz*

> Call a function $f$ defined on the real numbers and taking real values a good function if, for all real numbers $x, y$,
> $$f(x + f(y)) = f(x) + f(y).$$
> Find all rational numbers $q$ satisfying the following condition: there exists a good function $f$ and a real number $z$ such that $f(z) = qz$.

**Topic:** [[topic_funzionali|Equazioni funzionali]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Trovare i razionali q realizzati da f(x+f(y))=f(x)+f(y) con f(z)=qz*

> Si dice buona funzione una funzione $f$ definita sui numeri reali e a valori reali se, per tutti i numeri reali $x, y$,
> $$f(x + f(y)) = f(x) + f(y).$$
> Trovare tutti i numeri razionali $q$ che soddisfano la seguente condizione: esiste una funzione buona $f$ e un numero reale $z$ tali che $f(z) = qz$.

**Topic:** [[topic_funzionali|Equazioni funzionali]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]]

[[Quesiti/src_selection_camp_2023#q05|src_selection_camp_2023__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,topic_combinatoria,method_conteggio,method_casework,skill_conteggio_sistematico,skill_stima,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Infinitely many T whose digit-count multiset of 1829-multiples has 2 values*

> For a positive integer $T$ and an integer $i$ with $1 \le i \le 9$, let $d_i(T)$ denote the number of occurrences of the digit $i$ when all multiples of $1829$ from $1$ to $T$ are written in base ten. For example, the multiples of $1829$ from $1$ to $4000$ are $1829$ and $3658$, so $d_8(4000) = 2$.
> 
> Prove that there exist infinitely many positive integers $T$ such that $\{d_1(T), d_2(T), \dots, d_9(T)\}$ is a set consisting of exactly two elements.
> 
> Here, $\{d_1(T), d_2(T), \dots, d_9(T)\}$ consisting of two elements means that both of the following conditions hold:
> 
> - There exist integers $i, j$ with $1 \le i, j \le 9$ such that $d_i(T) \ne d_j(T)$.
> - There exist two integers $x, y$ such that for every integer $i$ with $1 \le i \le 9$, either $d_i(T) = x$ or $d_i(T) = y$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Infiniti T il cui multinsieme del numero di cifre dei multipli per 1829 ha 2 valori*

> Sia $T$ un intero positivo e $i$ un intero tale che $1 \le i \le 9$; indichiamo con $d_i(T)$ il numero di occorrenze della cifra $i$ quando tutti i multipli di $1829$ compresi tra $1$ e $T$ vengono scritti in base dieci. Ad esempio, i multipli di $1829$ compresi tra $1$ e $4000$ sono $1829$ e $3658$, quindi $d_8(4000) = 2$.
>
> Dimostrare che esistono infiniti interi positivi $T$ tali che $\{d_1(T), d_2(T), \dots, d_9(T)\}$ è un insieme costituito esattamente da due elementi.
>
> Qui, $\{d_1(T), d_2(T), \dots, d_9(T)\}$ costituito da due elementi significa che valgono entrambe le seguenti condizioni:
>
> - Esistono interi $i, j$ tali che $1 \le i, j \le 9$ e $d_i(T) \ne d_j(T)$.
> - Esistono due interi $x, y$ tali che, per ogni intero $i$ con $1 \le i \le 9$, vale o $d_i(T) = x$ oppure $d_i(T) = y$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]

[[Quesiti/src_selection_camp_2023#q06|src_selection_camp_2023__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_combinatoria,topic_algebra,method_estremalita,method_casework,skill_conteggio_sistematico,skill_stima,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Max C with bounded partial sums of good +-1 sequence of length 2022*

> Call a sequence of $2022$ terms, each of which is $1$ or $-1$, a good sequence. Find the largest integer $C$ satisfying the following condition for every good sequence $a_1, a_2, \dots, a_{2022}$:
> 
> There exist an integer $k \ge 2$ and integers $t_1, t_2, \dots, t_k$ with $1 \le t_1 < t_2 < \cdots < t_k \le 2022$ such that $t_{i+1} - t_i \le 2$ for every integer $i$ with $1 \le i \le k-1$, and moreover $\left| \sum_{i=1}^{k} a_{t_i} \right| \ge C$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Max C con somme parziali limitate di una buona sequenza di ±1 di lunghezza 2022*

> Si definisce sequenza buona una successione di $2022$ termini, ciascuno dei quali è $1$ o $-1$. Si determini il più grande intero $C$ che soddisfi la seguente condizione per ogni sequenza buona $a_1, a_2, \dots, a_{2022}$:
>
> Esistono un numero intero $k \ge 2$ e numeri interi $t_1, t_2, \dots, t_k$ tali che $1 \le t_1 < t_2 < \cdots < t_k \le 2022$, con la proprietà che $t_{i+1} - t_i \le 2$ per ogni numero intero $i$ tale che $1 \le i \le k-1$, e inoltre $\left| \sum_{i=1}^{k} a_{t_i} \right| \ge C$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]

[[Quesiti/src_selection_camp_2023#q07|src_selection_camp_2023__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_casework,method_estremalita,skill_astrazione,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Blackboard mod-p game: largest x for which B can block A*

> Players A and B play a game using a blackboard. Initially a positive real number $x$ is fixed.
> 
> First, A chooses a prime $p \ge 7$. Next, B chooses real numbers $r_1, r_2 \ge 0$. Then A chooses integers $s, t$ satisfying $r_1 < s < r_1 + xp$ and $r_2 < t < r_2 + xp$, and writes on the blackboard $0, s, t, st$, each reduced modulo $p$, in this order. After that, A repeatedly performs, as many times as desired, any one of the following three operations:
> 
> - Fix an integer $m$ with $1 \le m \le p-1$; replace each of the four numbers on the blackboard by that number plus $m$, reduced modulo $p$.
> - Fix an integer $n$ with $2 \le n \le p-1$; replace each of the four numbers on the blackboard by that number times $n$, reduced modulo $p$.
> - Replace each of the four numbers on the blackboard by its $(p-2)$-th power, reduced modulo $p$. However, this operation may not be performed when at least one of the four numbers is $0$.
> 
> A's goal is to make the numbers on the blackboard become $0, 2, 3, 6$ in order. Note that if there do not exist integers $s, t$ satisfying $r_1 < s < r_1 + xp$ and $r_2 < t < r_2 + xp$, then A is considered unable to achieve the goal.
> 
> Find the largest possible value of $x$ for which B can always prevent A from achieving the goal, regardless of A's actions.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Gioco mod-p della lavagna: il valore massimo di x per cui B può bloccare A*

> I giocatori A e B giocano una partita usando una lavagna. Inizialmente viene fissato un numero reale positivo $x$.
>
> Innanzitutto, A sceglie un numero primo $p \ge 7$. Successivamente, B sceglie numeri reali $r_1, r_2 \ge 0$. Poi A sceglie numeri interi $s, t$ che soddisfano $r_1 < s < r_1 + xp$ e $r_2 < t < r_2 + xp$, e scrive sulla lavagna $0, s, t, st$, ciascuno ridotto modulo $p$, in questo ordine. Dopodiché, A esegue ripetutamente, quante volte desidera, una qualsiasi delle seguenti tre operazioni:
>
> - Fissa un intero $m$ con $1 \le m \le p-1$; sostituisci ciascuno dei quattro numeri sulla lavagna con quel numero più $m$, ridotto modulo $p$.
> - Fissa un intero $n$ con $2 \le n \le p-1$; sostituisci ciascuno dei quattro numeri sulla lavagna con quel numero moltiplicato per $n$, ridotto modulo $p$.
> - Sostituisci ciascuno dei quattro numeri sulla lavagna con la sua potenza $(p-2)$, ridotta modulo $p$. Tuttavia, questa operazione non può essere eseguita quando almeno uno dei quattro numeri è $0$.
>
> L'obiettivo di A è far sì che i numeri sulla lavagna diventino $0, 2, 3, 6$ in ordine. Si noti che, se non esistono interi $s, t$ che soddisfano $r_1 < s < r_1 + xp$ e $r_2 < t < r_2 + xp$, allora si ritiene che A non sia in grado di raggiungere l'obiettivo.
>
> Trovare il valore massimo possibile di $x$ per cui B può sempre impedire ad A di raggiungere l'obiettivo, indipendentemente dalle azioni di A.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]

[[Quesiti/src_selection_camp_2023#q08|src_selection_camp_2023__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_geometria_piana,method_trigonometria,skill_ragionamento_geometrico,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Fixed point X lies on line PQ independent of P*

> Let $ABC$ be an acute triangle, and let $H$ be the foot of the perpendicular from $A$ to side $BC$. Choose a point $P$ not on line $BC$ such that the bisector $k$ of $\angle PBC$ and the bisector $l$ of $\angle PCB$ meet on segment $AH$ (excluding its endpoints). Let $E$ be the intersection of $k$ with line $AC$, let $F$ be the intersection of $l$ with line $AB$, and let $Q$ be the intersection of line $EF$ with line $AH$. Prove that there exists a point $X$ such that, independently of the choice of $P$, $X$ lies on line $PQ$.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Il punto fisso X giace sulla retta PQ indipendentemente da P*

> Sia $ABC$ un triangolo acutangolo e sia $H$ il piede della perpendicolare condotta da $A$ sul lato $BC$. Si scelga un punto $P$ non appartenente alla retta $BC$ tale che la bisettrice $k$ di $\angle PBC$ e la bisettrice $l$ di $\angle PCB$ si incontrino sul segmento $AH$ (escludendo gli estremi). Sia $E$ l'intersezione di $k$ con la retta $AC$, sia $F$ l'intersezione di $l$ con la retta $AB$, e sia $Q$ l'intersezione della retta $EF$ con la retta $AH$. Si dimostri che esiste un punto $X$ tale che, indipendentemente dalla scelta di $P$, $X$ giace sulla retta $PQ$.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]]

[[Quesiti/src_selection_camp_2023#q09|src_selection_camp_2023__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_combinatoria,topic_algebra,topic_insiemi_funzioni,method_estremalita,method_casework,skill_conteggio_sistematico,skill_astrazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Min size of set where each element is sum of k others*

> Let $k$ be an integer with $k \ge 2$. A set $S$ of at least $k+1$ distinct real numbers satisfies the following condition:
> 
> For every element $x$ of $S$, there exist $k$ distinct elements of $S$, all different from $x$, whose sum is $x$.
> 
> Find the smallest possible value of the number of elements of $S$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Dimensione minima dell'insieme in cui ogni elemento è la somma di k altri elementi*

> Sia $k$ un numero intero tale che $k \ge 2$. Un insieme $S$ di almeno $k+1$ numeri reali distinti soddisfa la seguente condizione:
>
> Per ogni elemento $x$ di $S$, esistono $k$ elementi distinti di $S$, tutti diversi da $x$, la cui somma è $x$.
>
> Trovare il valore più piccolo possibile del numero di elementi di $S$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]

[[Quesiti/src_selection_camp_2023#q10|src_selection_camp_2023__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_geometria_piana,method_simmetria,method_trigonometria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Three circumcircles share a common point*

> Let $P$ be a point in the interior (excluding the boundary) of an acute triangle $ABC$ such that line $AP$ and line $BC$ are not perpendicular. Let $X, Y$ be the reflections of $P$ in lines $AB, AC$ respectively, and let $\omega$ be the circumcircle of triangle $AXY$. Suppose a point $Q$ in the interior (excluding the boundary) of triangle $ABC$ satisfies $\angle QBC = \angle CAP$ and $\angle QCB = \angle BAP$, and suppose line $AQ$ and $\omega$ meet at a point $R$ different from $A$ and $Q$. Prove that the circumcircle of triangle $ABC$, the circumcircle of triangle $PQR$, and $\omega$ share a common point.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Tre circonferenze circoscritte hanno un punto in comune*

> Sia $P$ un punto nell'interno (escludendo il bordo) di un triangolo acuto $ABC$ tale che la retta $AP$ e la retta $BC$ non siano perpendicolari. Siano $X, Y$ le riflessioni di $P$ rispetto alle rette $AB, AC$ rispettivamente, e sia $\omega$ la circonferenza circoscritta al triangolo $AXY$. Si supponga che un punto $Q$, situato nell'interno (escludendo il bordo) del triangolo $ABC$, soddisfi $\angle QBC = \angle CAP$ e $\angle QCB = \angle BAP$, e si supponga che la retta $AQ$ e $\omega$ si incontrino in un punto $R$ diverso da $A$ e da $Q$. Dimostrare che la circonferenza circoscritta al triangolo $ABC$, la circonferenza circoscritta al triangolo $PQR$ e $\omega$ hanno un punto in comune.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]

[[Quesiti/src_selection_camp_2023#q11|src_selection_camp_2023__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_combinatoria,method_grafi,method_estremalita,method_casework,skill_conteggio_sistematico,skill_modellizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Second-largest count of good pairs of cities in tunnel network*

> The kingdom of Mogura consists of $2023$ cities, with several tunnels each connecting two distinct cities. Each tunnel is two-way passable, and between any two distinct cities there is at most one tunnel directly connecting them. Moreover, any two distinct cities can reach each other through some sequence of tunnels.
> 
> A pair $\{A, B\}$ of distinct cities is called good if it satisfies the following condition for every city $C$ different from $A$ and $B$:
> 
> Let $d_{C,A}$ be the minimum possible number of tunnels used when traveling from $C$ to $A$, and let $d_{C,B}$ be the minimum possible number of tunnels used when traveling from $C$ to $B$. Then it is possible to choose a path $X$ from $C$ to $A$ using $d_{C,A}$ tunnels and a path $Y$ from $C$ to $B$ using $d_{C,B}$ tunnels so that $X$ and $Y$ share no common tunnel.
> 
> Find the second-largest possible value of the number of good pairs of cities. Here, $\{A, B\}$ and $\{B, A\}$ are regarded as the same pair.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<div class="qlang-split" data-lang="it"></div>


*Secondo numero più elevato di buone coppie di città nella rete di tunnel*

> Il regno di Mogura è composto da $2023$ città, ciascuna delle quali è collegata ad altre due città distinte da diversi tunnel. Ogni tunnel è percorribile in entrambe le direzioni, e tra due città distinte qualsiasi c'è al massimo un tunnel che le collega direttamente. Inoltre, due città distinte qualsiasi possono raggiungersi l'una l'altra attraverso una qualche sequenza di tunnel.
>
> Una coppia $\{A, B\}$ di città distinte è detta buona se soddisfa la seguente condizione per ogni città $C$ diversa da $A$ e $B$:
>
> Sia $d_{C,A}$ il numero minimo possibile di tunnel utilizzati quando si viaggia da $C$ a $A$, e sia $d_{C,B}$ il numero minimo possibile di tunnel utilizzati quando si viaggia da $C$ a $B$. Allora è possibile scegliere un percorso $X$ da $C$ a $A$ utilizzando $d_{C,A}$ tunnel e un percorso $Y$ da $C$ a $B$ utilizzando $d_{C,B}$ tunnel in modo che $X$ e $Y$ non abbiano alcun tunnel in comune.
>
> Trovare il secondo valore più grande possibile del numero di coppie valide di città. Qui, $\{A, B\}$ e $\{B, A\}$ sono considerati la stessa coppia.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]

[[Quesiti/src_selection_camp_2023#q12|src_selection_camp_2023__Q12]]
