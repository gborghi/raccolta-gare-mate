---
title: China Mathematical Olympiad 2020
tipo: gara
competition: China Mathematical Olympiad 2020
family: cmo
year: '2020'
level: China Mathematical Olympiad
---
<div class="atom-reader" data-gara="Quesiti/src_cn_cmo_2020"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,topic_disuguaglianze,method_estremalita,method_disuguaglianze,skill_manipolazione_algebrica,skill_stima,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Sequence with real odd terms and imaginary even terms; minimize modulus of partial sums*

> Suppose all the odd terms of sequence $\{z_n\}_{n \ge 1}$ are real and all the even terms are pure imaginary, and for any positive integer $k$, there is $|z_k z_{k+1}| = 2^k$. For positive integer $n$, denote $f_n = |z_1 + z_2 + \cdots + z_n|$.
> 
> (1) Find the minimum possible value of $f_{2020}$.
> 
> (2) Find the minimum possible value of $f_{2020} \cdot f_{2021}$.

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]]
**Risposta:** $f_{2020} minimum is 2; f_{2020} \cdot f_{2021} minimum is 2^{1011}.$
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)

> [!warning] Estratto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Sequenza con termini unici reali e termini pari immaginari; ridurre al minimo il modulo di somme parziali*

> Supponiamo che tutti i termini odd della sequenza $\{z_n\}_{n \ge 1}$ siano reali e tutti i termini pari siano puramente immaginari, e per qualsiasi intero positivo $k$, ci sia $|z_k z_{k+1}| = 2^k$. Per un intero positivo $n$, indicare $f_n = |z_1 + z_2 + \cdots + z_n|$.
> 
> (1) Trovare il valore minimo possibile di $f_{2020}$.
> 
> (2) Trovare il valore minimo possibile di $f_{2020} \cdot f_{2021}$.

**Risposta:** f_{2020} minimum is 2; f_{2020} \cdot f_{2021} minimum is 2^{1011}.
[[src_cn_cmo_2020__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_casi_conteggio,skill_manipolazione_algebrica,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Find smallest n so that two congruences mod m are solvable by integers, one coprime to m*

> Given integer $m \ge 1$, find the smallest positive integer $n$ such that for any integers $a_1, a_2, \ldots, a_n$ and $b_1, b_2, \ldots, b_n$, there exist integers $x_1, x_2, \ldots, x_n$ that satisfy the following two conditions:
> 
> (1) at least one of $x_1, x_2, \ldots, x_n$ is coprime to $m$;
> 
> (2) $\displaystyle\sum_{i=1}^{n} a_i x_i \equiv \sum_{i=1}^{n} b_i x_i \equiv 0 \pmod{m}$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casi_conteggio|Casi e conteggio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)

> [!warning] Estratto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Ricerca il più piccolo n in modo che due congruenze mod m siano risolvibili da numeri interi, un coprimo a m*

> Data l'intero $m \ge 1$, trovare il più piccolo intero positivo $n$ in modo tale che per tutti gli integri $a_1, a_2, \ldots, a_n$ e $b_1, b_2, \ldots, b_n$ esistano interi $x_1, x_2, \ldots, x_n$ che soddisfano le seguenti due condizioni:
> 
> (1) almeno uno di $x_1, x_2, \ldots, x_n$ è coprime a $m$;
> 
> (2) $\displaystyle\sum_{i=1}^{n} a_i x_i \equiv \sum_{i=1}^{n} b_i x_i \equiv 0 \pmod{m}$.

[[src_cn_cmo_2020__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_disuguaglianze,method_inclusione_esclusione,method_conteggio,method_disuguaglianze,skill_conteggio_sistematico,skill_stima,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*n with 36 prime factors; counts of integers coprime to n in five equal subintervals; lower bound on sum of squared differences*

> Suppose that positive integer $n$ can be divisible by exactly $36$ different prime numbers. For $k = 1, 2, \ldots, 5$, let $c_k$ be the number of integers on the interval $\left[\frac{(k-1)n}{5}, \frac{kn}{5}\right]$ that are coprime with $n$. It is known that $c_1, c_2, \ldots, c_5$ are not all equal. Prove that
> $$\sum_{1 \le i < j \le 5} (c_i - c_j)^2 \ge 2^{36}.$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]], [[method_conteggio|Conteggio]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)

> [!warning] Estratto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*n con 36 fattori primi; conteggio di numeri interi copri a n in cinque subintervalli uguali; limite inferiore sulla somma delle differenze quadrate*

> Supponiamo che un intero positivo $n$ possa essere divisibile esattamente $36$ diversi numeri primi. Per $k = 1, 2, \ldots, 5$, $c_k$ è il numero di integri sull'intervallo $\left[\frac{(k-1)n}{5}, \frac{kn}{5}\right]$ che sono copriemi con $n$. È noto che $c_1, c_2, \ldots, c_5$ non sono tutti uguali. Provare che $$\sum_{1 \le i < j \le 5} (c_i - c_j)^2 \ge 2^{36}.$$

[[src_cn_cmo_2020__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Acute triangle inscribed in a circle; line through center parallel to AM; prove an equality of angle sums*

> As shown in Fig. 4.1, let acute $\triangle ABC$ be inscribed to circle $\omega$, $AB > AC$. $M$ is the midpoint of minor arc $\widehat{BC}$ of circle $\omega$ and $K$ is the antipodal point of point $A$ on circle $\omega$. Construct a parallel line of $AM$ through the center $O$ of circle $\omega$, intersecting segment $AB$ at point $D$ and the extension of $CA$ at point $E$. Suppose that line $BM$ intersects $CK$ at point $P$ and line $CM$ intersects $BK$ at point $Q$. Prove that
> $$\angle OEB + \angle OPB = \angle ODC + \angle OQC.$$

![[src_cn_cmo_2020__Q04.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)

> [!warning] Estratto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Triangolo acuto inserito in un cerchio; linea attraverso il centro parallela a AM; dimostrare l'uguaglianza delle somme di angoli*

> Come mostrato nella figura. 4.1, inserire il $\triangle ABC$ acuto al cerchio $\omega$, $AB > AC$. $M$ è il punto medio dell'arco minore $\widehat{BC}$ del cerchio $\omega$ e $K$ è il punto antipodal del punto $A$ sul cerchio $\omega$. Costruire una linea parallela di $AM$ attraverso il centro $O$ del cerchio $\omega$, il segmento intersezionante $AB$ al punto $D$ e l'estensione di $CA$ al punto $E$. Supponiamo che la linea $BM$ si intersechi $CK$ al punto $P$ e la linea $CM$ si intersechi $BK$ al punto $Q$. Provare che $$\angle OEB + \angle OPB = \angle ODC + \angle OQC.$$

![[src_cn_cmo_2020__Q04.png]]

[[src_cn_cmo_2020__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,topic_geometria_solida,method_invarianti,method_doppio_conteggio,method_grafi,skill_ragionamento_geometrico,skill_astrazione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Convex polyhedron with degree-3 vertices and even count of each k-gon; ant traverses a closed edge path dividing the surface equally; prove left turns equal right turns*

> We consider a convex polyhedron $P$ with the following properties: (i) each vertex of $P$ belongs to exactly three faces; (ii) for any integer $k \ge 3$, the number of faces of $k$-sided polygon of $P$ is even.
> 
> An ant starts from the midpoint of a certain edge and crawls on the surface of $P$ along a closed path $L$ composed by the edges of $P$. It passes through each point on $L$ exactly once and finally returns to the starting point. It is known that $L$ divides the surface of $P$ into two regions, and that for any $k$, the number of faces of $k$-sided polygon in both regions is equal.
> 
> Prove that during the above process of crawling, the number of times the ant turns to the left is exactly the number of times it turns to the right.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_doppio_conteggio|Doppio conteggio]], [[method_grafi|Grafi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)

> [!warning] Estratto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Polyedro convex con vertici di grado 3 e numero pari di ogni k-gon; formica attraversa un percorso di bordo chiuso che divide ugualmente la superficie; prova curva sinistra uguale curva destra*

> Consideriamo un poliedro converso $P$ con le seguenti proprietà: (i) ogni vertice di $P$ appartiene esattamente a tre facce; (ii) per qualsiasi intero $k \ge 3$, il numero di facce del poligono laterale $k$ di $P$ è pari.
> 
> Una formica parte dal punto medio di un certo bordo e si arrasta sulla superficie di $P$ lungo un percorso chiuso $L$ composto dai bordi di $P$. Passa attraverso ogni punto su $L$ esattamente una volta e ritorna finalmente al punto di partenza. È noto che $L$ divide la superficie di $P$ in due regioni e che per qualsiasi $k$, il numero di facce di poligono laterale $k$ in entrambe le regioni è uguale.
> 
> Prove che durante il processo di arrampicamento sopra indicato, il numero di volte che la formica gira a sinistra è esattamente il numero di volte che gira a destra.

[[src_cn_cmo_2020__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_funzionali,topic_aritmetica,method_congruenze,method_casework,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Find all functions f: N+ -> N+ with f(f(x)+y) dividing x+f(y)*

> Let $\mathbb{N}_+$ be the set of all positive integers. Find all functions $f: \mathbb{N}_+ \to \mathbb{N}_+$, satisfying that for any $x, y \in \mathbb{N}_+$,
> $$f(f(x) + y) \mid x + f(y).$$

**Topic:** [[topic_funzionali|Equazioni funzionali]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)

> [!warning] Estratto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Trova tutte le funzioni f: N+ -> N+ con f(f(x) + y) dividendo x+f(y)*

> $\mathbb{N}_+$ sia l'insieme di tutti gli integri positivi. Trovare tutte le funzioni $f: \mathbb{N}_+ \to \mathbb{N}_+$, soddisfacendo che per qualsiasi $x, y \in \mathbb{N}_+$, $$f(f(x) + y) \mid x + f(y).$$

[[src_cn_cmo_2020__Q06]]
