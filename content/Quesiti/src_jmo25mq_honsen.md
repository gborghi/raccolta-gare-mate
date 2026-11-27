---
title: Japan Mathematical Olympiad 2015 — Honsen (Final)
tipo: gara
competition: Japan Mathematical Olympiad 2015 — Honsen (Final)
family: jmo
year: '2015'
level: JMO Honsen
---
<div class="atom-reader" data-gara="Quesiti/src_jmo25mq_honsen"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,method_fattorizzazione,method_congruenze,method_casework,skill_manipolazione_algebrica,skill_lettura_attenta,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Find all positive integers n making 10^n/(n^3+n^2+n+1) an integer*

> Find all positive integers $n$ such that $\dfrac{10^n}{n^3 + n^2 + n + 1}$ is an integer.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]], [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zjofx858zIB9CmusWvun9lZn5siZE_Lr/view)


<div class="qlang-split" data-lang="it"></div>


*Interi positivi per cui un'espressione è intera*

> Determinare tutti gli interi positivi $n$ tali che $\dfrac{10^n}{n^3 + n^2 + n + 1}$ sia un intero.

**Argomento:** [[topic_aritmetica|Aritmetica / Teoria dei numeri]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_congruenze|Aritmetica modulare / congruenze]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,method_estremalita,method_grafi,method_invarianti,skill_modellizzazione,skill_ragionamento_geometrico,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Checkers on triangulated hexagon: find minimum moves to reach any vertex*

> Let $n$ be a positive integer. A regular hexagon $ABCDEF$ with side length $n$ is divided into unit equilateral triangles by lines parallel to its sides. A checker is placed at a point $P$ strictly inside the hexagon (not on the boundary). The checker can jump to one of 4 (out of 6) vertices of the unit triangle that contains $P$. For each length-1 edge $PQ$ of the triangulation, the checker can move from $P$ to $Q$ but cannot move from $Q$ to $P$. (Here, $P$ can reach $Q$ in one move means $P$ is a vertex of some unit triangle and $Q$ is one of the 4 allowed vertices of that triangle.) No matter how the triangulation directions are assigned, there always exists a point $k$ on the triangulation grid from which any other grid point can be reached. Find the minimum value of such $k$.

![[src_jmo25mq_honsen__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_grafi|Grafi]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zjofx858zIB9CmusWvun9lZn5siZE_Lr/view)


<div class="qlang-split" data-lang="it"></div>


*Minimo lato di un esagono regolare in cui da un punto della triangolazione si raggiunge ogni altro*

> Sia $n$ un intero positivo. Un esagono regolare $ABCDEF$ di lato $n$ è diviso in triangoli equilateri unitari da rette parallele ai lati. Una pedina è posta in un punto $P$ strettamente interno all'esagono (non sul bordo). La pedina può saltare su uno di 4 (su 6) vertici del triangolo unitario che contiene $P$. Per ogni spigolo $PQ$ di lunghezza 1 della triangolazione, la pedina può andare da $P$ a $Q$ ma non può andare da $Q$ a $P$. (Qui, $P$ può raggiungere $Q$ in una mossa significa che $P$ è un vertice di qualche triangolo unitario e $Q$ è uno dei 4 vertici ammessi di quel triangolo.) Comunque si assegnino le direzioni della triangolazione, esiste sempre un punto $k$ della griglia della triangolazione dal quale si può raggiungere qualunque altro punto della griglia. Trovare il minimo valore di un tale $k$.

![[src_jmo25mq_honsen__Q02.png]]

**Argomento:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalità]], [[method_grafi|Teoria dei grafi]], [[method_invarianti|Invarianti / monovarianti]]
**Abilità:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_funzionali,method_induzione,method_congruenze,method_casework,skill_manipolazione_algebrica,skill_ragionamento_geometrico,skill_astrazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Ascending sequences of positive integers and multiples of primes*

> A sequence of positive integers $\{a_n\}$ $(n = 1, 2, \ldots)$ is called **ascending** if, for every positive integer $n$,
> $$a_n < a_{n+1} \quad \text{and} \quad a_n \mid 2a_{n+1}.$$
> 
> (1) Suppose $\{a_n\}$ is ascending and $p$ is a prime greater than $a_1$. Show that some term of the sequence is divisible by $p$.
> 
> (2) Let $p$ be an odd prime. Show that there exists an ascending sequence $\{a_n\}$ that contains no multiple of $p$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_induzione|Induzione]], [[method_congruenze|Congruenze]], [[method_casework|method_casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zjofx858zIB9CmusWvun9lZn5siZE_Lr/view)


<div class="qlang-split" data-lang="it"></div>


*Successioni crescenti e multipli di un primo*

> Una successione di interi positivi $\{a_n\}$ $(n = 1, 2, \ldots)$ si dice **crescente** se, per ogni intero positivo $n$,
>
> $$a_n < a_{n+1} \quad \text{and} \quad a_n \mid 2a_{n+1}.$$
>
> (1) Si supponga che $\{a_n\}$ sia crescente e che $p$ sia un primo maggiore di $a_1$. Dimostrare che qualche termine della successione è divisibile per $p$.
>
> (2) Sia $p$ un primo dispari. Dimostrare che esiste una successione crescente $\{a_n\}$ che non contiene alcun multiplo di $p$.

**Argomento:** [[topic_aritmetica|Aritmetica / Teoria dei numeri]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_congruenze|Aritmetica modulare / congruenze]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,topic_trigonometria,method_trigonometria,method_coordinate,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Four concyclic points from incircle and circumcircle constructions on triangle ABC*

> Let $ABC$ be a scalene (non-isosceles) triangle, $\Gamma$ its circumcircle, and $I$ its incenter. Let the incircle of $\triangle ABC$ touch sides $AB$ and $AC$ at $D$ and $E$, respectively. Let $P$ be the second intersection (other than $B$) of the circumcircle of $\triangle BEI$ with $\Gamma$. Let $Q$ be the second intersection (other than $C$) of the circumcircle of $\triangle CDI$ with $\Gamma$. Prove that the four points $D$, $E$, $P$, $Q$ are concyclic.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometry]]
**Metodo:** [[method_trigonometria|Trigonometria]], [[method_coordinate|Coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria|Geometry]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zjofx858zIB9CmusWvun9lZn5siZE_Lr/view)


<div class="qlang-split" data-lang="it"></div>


*Quattro punti conciclici, a partire da incentro e punti di tangenza*

> Sia $ABC$ un triangolo scaleno (non isoscele), $\Gamma$ la sua circonferenza circoscritta e $I$ il suo incentro. La circonferenza inscritta di $\triangle ABC$ tocchi i lati $AB$ e $AC$ rispettivamente in $D$ e $E$. Sia $P$ la seconda intersezione (diversa da $B$) della circonferenza circoscritta a $\triangle BEI$ con $\Gamma$. Sia $Q$ la seconda intersezione (diversa da $C$) della circonferenza circoscritta a $\triangle CDI$ con $\Gamma$. Dimostrare che i quattro punti $D$, $E$, $P$, $Q$ sono conciclici.

**Argomento:** [[topic_geometria_piana|Geometria piana]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]], [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Geometria]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,method_estremalita,method_doppio_conteggio,method_casework,skill_conteggio_sistematico,skill_modellizzazione,skill_stima,skill_astrazione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Max number of a×a sub-grids with exactly a black cells among n chosen*

> Let $a$ be a positive integer. Prove that for all sufficiently large integers $n$, the following holds:
> 
> Choose $n$ cells from an infinite grid and color them black. Let $K$ be the number of $a \times a$ sub-grids (axis-aligned squares of side $a$) that contain exactly $a$ black cells. Then the maximum possible value of $K$ is $a(n + 1 - a)$.
> 
> (Here, "holds for all sufficiently large $n$" means there exists an integer $N$ such that the statement holds for every $n \ge N$.)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zjofx858zIB9CmusWvun9lZn5siZE_Lr/view)


<div class="qlang-split" data-lang="it"></div>


*Il massimo numero di sottogriglie con un dato numero di caselle nere, per n abbastanza grande*

> Sia $a$ un intero positivo. Dimostrare che per tutti gli interi $n$ abbastanza grandi vale quanto segue.
>
> Si scelgano $n$ caselle di una griglia infinita e le si colori di nero. Sia $K$ il numero di sottogriglie $a \times a$ (quadrati a lati paralleli agli assi, di lato $a$) che contengono esattamente $a$ caselle nere. Allora il massimo valore possibile di $K$ è $a(n + 1 - a)$.
>
> (Qui, «vale per tutti i $n$ abbastanza grandi» significa che esiste un intero $N$ tale che l'affermazione vale per ogni $n \ge N$.)

**Argomento:** [[topic_combinatoria|Combinatoria]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalità]], [[method_doppio_conteggio|Doppio conteggio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_stima|Stima e approssimazione]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
