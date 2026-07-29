---
title: China National Team Selection Test 2021
tipo: gara
competition: China National Team Selection Test 2021
family: ctst
year: '2021'
level: China National Team Selection Test
---
<div class="atom-reader" data-gara="Quesiti/src_cn_ctst_2021"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_disuguaglianze,topic_algebra,method_disuguaglianze,method_simmetria,skill_manipolazione_algebrica,skill_ragionamento_geometrico,skill_stima"></span>

<div class="qlang-switch" data-default="en"></div>


*Prove product inequality for row-column sums of a nonneg matrix*

> Let $m$, $n$ be positive integers, and let $a_{i,j}$ ($1 \le i \le m$, $1 \le j \le n$) be nonnegative real numbers such that for any $i$, $j$,
> $$a_{i,1} \ge a_{i,2} \ge \cdots \ge a_{i,n}, \quad a_{1,j} \ge a_{2,j} \ge \cdots \ge a_{m,j}$$
> hold. For $i = 1, 2, \ldots, m$ and $j = 1, 2, \ldots, n$, define
> $$X_{i,j} = a_{1,j} + \cdots + a_{i-1,j} + a_{i,j} + a_{i,j-1} + \cdots + a_{i,1},$$
> $$Y_{i,j} = a_{m,j} + \cdots + a_{i+1,j} + a_{i,j} + a_{i,j+1} + \cdots + a_{i,n}.$$
> Prove:
> $$\prod_{i=1}^{m} \prod_{j=1}^{n} X_{i,j} \ge \prod_{i=1}^{m} \prod_{j=1}^{n} Y_{i,j}.$$

**Topic:** [[topic_disuguaglianze|Disuguaglianze]], [[topic_algebra|Algebra]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Prove la disuguaglianza dei prodotti per le somme di colonne di riga di una matrice non negativa*

> Lasciate che $m$, $n$ siano numeri interi positivi, e che $a_{i,j}$ ($1 \le i \le m$, $1 \le j \le n$) siano numeri reali non negativi tali che per qualsiasi $i$, $j$, $$a_{i,1} \ge a_{i,2} \ge \cdots \ge a_{i,n}, \quad a_{1,j} \ge a_{2,j} \ge \cdots \ge a_{m,j}$$ sia tenuto. Per $i = 1, 2, \ldots, m$ e $j = 1, 2, \ldots, n$, definire $$X_{i,j} = a_{1,j} + \cdots + a_{i-1,j} + a_{i,j} + a_{i,j-1} + \cdots + a_{i,1},$$ $$Y_{i,j} = a_{m,j} + \cdots + a_{i+1,j} + a_{i,j} + a_{i,j+1} + \cdots + a_{i,n}.$$ Prova: $$\prod_{i=1}^{m} \prod_{j=1}^{n} X_{i,j} \ge \prod_{i=1}^{m} \prod_{j=1}^{n} Y_{i,j}.$$

[[src_cn_ctst_2021__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,method_casework,method_conteggio,method_estremalita,skill_conteggio_sistematico,skill_modellizzazione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Grid coloring with k-set colour constraints, find largest N*

> Given positive integers $n$ and $k$, $n > k^2 \ge 4$. In an $n \times n$ grid, any $k$ squares in distinct rows and distinct columns are called a $k$-set. Find the largest positive integer $N$ satisfying that: one can choose $N$ squares of the $n \times n$ grid and colour them in a certain way, such that for any coloured $k$-set, some two squares have the same colour, and some two squares have different colours.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Colorazione a griglia con restrizioni di colore k-set, trovare la più grande N*

> Date le cifre integri positive $n$ e $k$, $n > k^2 \ge 4$. In una griglia $n \times n$, qualsiasi quadrato $k$ in diverse righe e colonne distinte è chiamato $k$-set. Trovare il più grande intero positivo $N$ che soddisfi questo: si possono scegliere $N$ quadrati della griglia $n \times n$ e colorarli in un certo modo, in modo che per qualsiasi insieme di $k$ di colore, alcuni due quadrati abbiano lo stesso colore e altri due quadrati abbiano colori diversi.

[[src_cn_ctst_2021__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_aritmetica,method_conteggio,method_doppio_conteggio,method_estremalita,skill_conteggio_sistematico,skill_manipolazione_algebrica,skill_stima"></span>

<div class="qlang-switch" data-default="en"></div>


*Distinct integers: lower bound on elements not expressible as a difference*

> Fix $n \ge 2$. Prove: for any $n$ distinct integers $a_1, a_2, \ldots, a_n$, the set $\left\{1, 2, \ldots, \left\lfloor \dfrac{n(n-1)}{2} \right\rfloor\right\}$ contains at least $\left\lfloor \dfrac{n(n-6)}{48} \right\rfloor$ elements that cannot be expressed as the difference of some $a_i$ and $a_j$. Here, $\lfloor x \rfloor$ is the largest integer not greater than or equal to $x$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_doppio_conteggio|Doppio conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Interi distinti: limite inferiore su elementi non espressi come differenza*

> Risparmiare $n \ge 2$. Prova: per tutti gli integri $n$ distinti $a_1, a_2, \ldots, a_n$, l'insieme $\left\{1, 2, \ldots, \left\lfloor \dfrac{n(n-1)}{2} \right\rfloor\right\}$ contiene almeno $\left\lfloor \dfrac{n(n-6)}{48} \right\rfloor$ elementi che non possono essere espressi come la differenza di alcuni $a_i$ e $a_j$. Qui, $\lfloor x \rfloor$ è il più grande numero intero non superiore o uguale a $x$.

[[src_cn_ctst_2021__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,topic_aritmetica,method_congruenze,method_induzione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Congruent integral polynomials for infinitely many primes imply shift*

> Let $f(x)$ and $g(x)$ be integral polynomials. Suppose that for infinitely many prime numbers $p$, there exists an integer $m_p$ such that $f(a) \equiv g(a + m_p) \pmod{p}$ for every integer $a$. Prove that $f(x) = g(x + r)$ for some rational number $r$.

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Polinomi integrali congruenti per infinite prime implicano spostamento*

> $f(x)$ e $g(x)$ siano polinomi integrali. Supponiamo che per infiniti numeri primi $p$, esista un intero $m_p$ tale che $f(a) \equiv g(a + m_p) \pmod{p}$ per ogni intero $a$. Prove che $f(x) = g(x + r)$ per un numero razionale $r$.

[[src_cn_ctst_2021__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,method_trigonometria,method_coordinate,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Circle tangent to two sides; construct points; circumcircle passes through center*

> As illustrated in Fig. 5.1, circle $\Gamma$ is tangent to $AB$ and $AC$ at $B$ and $C$ respectively; $D$ is the midpoint of $AC$; $O$ is the circumcenter of $\triangle ABC$. A circle $\Omega$ touches $BC$ and the minor arc $\widehat{BC}$ of $\Gamma$ at $P$, and meets $AB$ at $Q$ other than $A$. It is known that the midpoint $R$ of the minor arc $\widehat{PQ}$ (on $\Omega$) satisfies $CR \perp AB$. Let $L$ be the intersection of rays $PQ$ and $CA$; $M$ be the midpoint of $AL$; $N$ be the midpoint of $BR$; $X$ be the foot of the perpendicular from $M$ to $ON$. Show that the circumcircle of $\triangle DNX$ passes through the centre of circle $\Omega$.

![[src_cn_ctst_2021__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Trigonometria]], [[method_coordinate|Coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Circolo tangente a due lati; punti di costruzione; circolo circonciso che attraversa il centro*

> Come illustrato in Fig. 5.1, il cerchio $\Gamma$ è tangente a $AB$ e $AC$ rispettivamente a $B$ e $C$; $D$ è il punto medio di $AC$; $O$ è il centro circonscente di $\triangle ABC$. Un cerchio $\Omega$ tocca $BC$ e l'arco minore $\widehat{BC}$ di $\Gamma$ a $P$, e incontra $AB$ a $Q$ diverso da $A$. È noto che il punto medio $R$ dell'arco minore $\widehat{PQ}$ (su $\Omega$) soddisfa $CR \perp AB$. $L$ sia l'intersezione dei raggi $PQ$ e $CA$; $M$ sia il punto medio di $AL$; $N$ sia il punto medio di $BR$; $X$ sia il piede della perpendicolare da $M$ a $ON$. Indicare che il circoncircolo di $\triangle DNX$ passa attraverso il centro del circolo $\Omega$.

![[src_cn_ctst_2021__Q05.png]]

[[src_cn_ctst_2021__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_aritmetica,method_invarianti,method_casework,method_estremalita,skill_modellizzazione,skill_ragionamento_geometrico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Alice-Bob gcd/lcm game on blackboard; find min M Alice can guarantee*

> Given positive integers $n$, $r$ and distinct prime numbers $p_1, p_2, \ldots, p_r$. Initially, the $n+1$ numbers $(p_1 p_2 \cdots p_r)^0, (p_1 p_2 \cdots p_r)^1, \ldots, (p_1 p_2 \cdots p_r)^n$ are written on the blackboard. Alice and Bob take turns (Alice goes first) to make the following moves, until only one number is left on the blackboard:
> \begin{itemize}
> \item Every time, Alice erases two numbers (can be identical) and writes their greatest common divisor on the board;
> \item Every time, Bob erases two numbers (can be identical) and writes their least common multiple on the blackboard.
> \end{itemize}
> Find the least integer $M$, such that Alice can guarantee the remaining number does not exceed $M$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** $(p_1 p_2 \cdots p_r)^{\lfloor n/2 \rfloor}$
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


Gioco Alice-Bob su tavolo nero; trova il minimo che Alice possa garantire

> Date le cifre integri positive $n$, $r$ e numeri primi distinti $p_1, p_2, \ldots, p_r$. Inizialmente, i numeri $n+1$ $(p_1 p_2 \cdots p_r)^0, (p_1 p_2 \cdots p_r)^1, \ldots, (p_1 p_2 \cdots p_r)^n$ sono scritti sulla lavagna. Alice e Bob si alternano (Alice va prima) per fare le seguenti mosse, fino a quando non rimane solo un numero sulla lavagna: \begin{itemize} \item Ogni volta, Alice cancella due numeri (può essere identico) e scrive il loro più grande divisore comune sulla lavagna; \item Ogni volta, Bob cancella due numeri (può essere identico) e scrive il loro più piccolo multiplo comune sulla lavagna. \end{itemize} Trova il numero intero minimo $M$, in modo che Alice possa garantire che il numero rimanente non superi $M$.

**Risposta:** (p_1 p_2 \cdots p_r)^{\lfloor n/2 \rfloor}
[[src_cn_ctst_2021__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_piana,method_trigonometria,method_simmetria,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Cyclic quadrilateral AB=BC=CD; incenters I,J of two subtriangles; prove collinearity on circumcircle*

> As shown in Fig. 1.1, quadrilateral $ABCD$ is inscribed in circle $\Gamma$, with $AB = BC = CD$. Let $I$ be the incentre of $\triangle ABC$ and $J$ be the incentre of $\triangle BCD$. Let $K$ be a point on the circumcircle of $\triangle BIC$ (other than $B$, $I$, $C$), and let $E$, $F$ be the contact points of the incircles of $\triangle ABC$ and $\triangle BCD$ with $BC$ respectively. Let $P$ be the intersection of lines $CJ$ and $BK$. Prove that $A$, $C$, $P$ are collinear and that $P$ lies on circle $\Gamma$.

![[src_cn_ctst_2021__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Trigonometria]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Quadrilaterale ciclico AB=BC=CD; incentri I, J di due subtriangoli; dimostrare collinearità sul circoncircolo*

> Come mostrato nella figura. 1.1, il quadrilaterale $ABCD$ è inserito nel cerchio $\Gamma$, con $AB = BC = CD$. Che $I$ sia il centro di $\triangle ABC$ e $J$ sia il centro di $\triangle BCD$. Il $K$ deve essere un punto sul circoncircolo di $\triangle BIC$ (diversi da $B$, $I$, $C$), e $E$, $F$ devono essere i punti di contatto degli incircoli di $\triangle ABC$ e $\triangle BCD$ rispettivamente con $BC$. $P$ sia l'intersezione delle linee $CJ$ e $BK$. Prove che $A$, $C$, $P$ sono collineari e che $P$ si trova sul cerchio $\Gamma$.

![[src_cn_ctst_2021__Q07.png]]

[[src_cn_ctst_2021__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,method_grafi,method_estremalita,method_doppio_conteggio,skill_modellizzazione,skill_conteggio_sistematico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*kn-regular graph: find minimum mono-edge fraction c*

> Given positive integers $k$ and $n$ ($n \ge 2$), find the minimum constant $c$ satisfying this assertion: if $G$ is a simple $kn$-regular graph (the degree of each vertex is $kn$) with $m$ vertices, then each vertex can be coloured one of $n$ colours, such that the number of mono-edges (edges with both endpoints of the same colour) is at most $cm$. Here, a mono-edge is an edge incident to two vertices of the same colour.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** $\dfrac{k(kn - n + 2)}{2(kn + 1)}$
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*kn-grafico regolare: trovare la frazione minima di monoreggio c*

> Dato il numero intero positivo $k$ e $n$ ($n \ge 2$), si trova la costante minima $c$ che soddisfa questa affermazione: se $G$ è un semplice grafico $kn$ regolare (il grado di ogni vertice è $kn$) con vertici $m$, allora ogni vertice può essere colorato uno dei colori $n$, in modo tale che il numero di monoreggi (oreggi con entrambi i punti di fine dello stesso colore) sia al massimo $cm$. Qui, un monoreggio è un incidente di bordo a due vertici dello stesso colore.

**Risposta:** \dfrac{k(kn - n + 2)}{2(kn + 1)}
[[src_cn_ctst_2021__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_combinatoria,topic_algebra,topic_aritmetica,method_telescoping,method_fattorizzazione,skill_manipolazione_algebrica,skill_stima,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Pairwise coprime a,b,c; counting solutions of ax+by+cz=n approximates quadratic*

> Given positive integers $a$, $b$, $c$ which are pairwise coprime. Let $f(n)$ represent the number of nonnegative integer solutions $(x, y, z)$ of the equation $ax + by + cz = n$. Prove: there exist real constants $\alpha$, $\beta$, $\gamma$, such that for every nonneg real number $n$,
> $$|f(n) - (\alpha n^2 + \beta n + \gamma)| < \frac{a + b + c}{12}.$$

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_telescoping|Telescoping]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Coprimo a,b,c in coppia; il conteggio delle soluzioni di ax+by+cz=n si approssimerà quadratico*

> Date le cifre integri positive $a$, $b$, $c$ che sono coprime in coprime. $f(n)$ rappresenta il numero di soluzioni di numeri interi non negativi $(x, y, z)$ dell'equazione $ax + by + cz = n$. Prova: esistono costanti reali $\alpha$, $\beta$, $\gamma$, in modo tale che per ogni numero reale non negativo $n$, $$|f(n) - (\alpha n^2 + \beta n + \gamma)| < \frac{a + b + c}{12}.$$

[[src_cn_ctst_2021__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_funzionali,topic_aritmetica,method_induzione,method_congruenze,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Find all multiplicative-type functions involving Euler's totient*

> For a positive integer $n$, let $\varphi(n)$ denote the number of positive integers not exceeding $n$ and relatively prime to $n$ (Euler's totient function, written $\omega(n)$ in the source). Find all functions $f:\mathbb{N}_+ \to \mathbb{N}_+$ satisfying that for any positive integers $m$, $n$ with $m \le n$,
> $$f(m^2 \varphi(n)) = f(m)\varphi(m).$$

**Topic:** [[topic_funzionali|Equazioni funzionali]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_induzione|Induzione]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Ricerca tutte le funzioni di tipo moltiplicativo che coinvolgono il totiente di Euler*

> Per un intero positivo $n$, $\varphi(n)$ indica il numero di interi positivi non superiore a $n$ e relativamente primo a $n$ (funzione totiente di Euler, scritta $\omega(n)$ nella fonte). Trovare tutte le funzioni $f:\mathbb{N}_+ \to \mathbb{N}_+$ che soddisfano che per tutti i numeri interi positivi $m$, $n$ con $m \le n$, $$f(m^2 \varphi(n)) = f(m)\varphi(m).$$

[[src_cn_ctst_2021__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_algebra,topic_combinatoria,method_doppio_conteggio,method_estremalita,method_invarianti,skill_manipolazione_algebrica,skill_stima,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Cyclic sequence: count indices where maximal-average b_k >= 1*

> Let $n$ be a positive integer and $a_1, a_2, \ldots, a_{2n+1}$ be nonneg real numbers (with indices taken modulo $2n+1$). For $1 \le k \le 2n+1$, define
> $$b_k = \max_{0 \le m \le n} \frac{1}{2m+1} \sum_{i=k-m}^{k+m} a_i$$
> (indices mod $2n+1$). Prove: the number of indices $k$ satisfying $b_k \ge 1$ does not exceed $2\sum_{i=1}^{2n+1} a_i$.

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_doppio_conteggio|Doppio conteggio]], [[method_estremalita|Estremalità]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Sequenza ciclica: indici di conteggio in cui la media massima b_k >= 1*

> Che $n$ sia un intero positivo e $a_1, a_2, \ldots, a_{2n+1}$ un numero reale non negativo (con indici presi modulo $2n+1$). Per $1 \le k \le 2n+1$, definire $$b_k = \max_{0 \le m \le n} \frac{1}{2m+1} \sum_{i=k-m}^{k+m} a_i$$ (indici mod $2n+1$). Prova: il numero di indici $k$ che soddisfano $b_k \ge 1$ non supera $2\sum_{i=1}^{2n+1} a_i$.

[[src_cn_ctst_2021__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_geometria_piana,topic_disuguaglianze,method_estremalita,method_casework,method_trigonometria,skill_ragionamento_geometrico,skill_stima,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Find minimum side length of equilateral triangle covering 3 unit-circle points*

> Find the least positive real number $a$ satisfying this condition: for any three points $A$, $B$, $C$ on the unit circle, there exists an equilateral triangle $PQR$ with side length $a$, such that $A$, $B$, $C$ are all inside or on the boundary of $\triangle PQR$.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_stima|Stima]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Risposta:** $\sqrt{3}$
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Ricerca la lunghezza laterale minima di un triangolo equilaterale che copra 3 punti di cerchio unitario*

> Trovare il numero reale meno positivo $a$ che soddisfa questa condizione: per tutti e tre i punti $A$, $B$, $C$ sul cerchio unitario, esiste un triangolo equilaterale $PQR$ con lunghezza laterale $a$, in modo tale che $A$, $B$, $C$ siano tutti all'interno o sul confine di $\triangle PQR$.

**Risposta:** \sqrt{3}
[[src_cn_ctst_2021__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_combinatoria,topic_geometria_piana,method_induzione,method_colorazione,method_bigezione,skill_ragionamento_geometrico,skill_modellizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Convex polygon: assign distinct points in quadrilateral regions so every pair's segment hits a diagonal*

> Given a convex polygon $D$ with $n \ge 4$ vertices, no three diagonals of which are concurrent inside $D$. Prove that one can choose a point inside every quadrilateral $P_i P_j P_k P_l$ ($1 \le i < j < k < l \le n$) and not on any diagonal of $D$, such that the $\binom{n}{4}$ assigned points are distinct, and the segment connecting any two of them intersects at least one diagonal of $D$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_induzione|Induzione]], [[method_colorazione|Colorazione]], [[method_bigezione|Biiezione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Poligono converso: assegnare punti distinti in regioni quadrilaterali in modo che ogni segmento della coppia raggiunga una diagonale*

> Data una polygone convexa $D$ con vertici $n \ge 4$, di cui non ci sono tre diagonali che siano simultanei all'interno di $D$. Provare che si può scegliere un punto all'interno di ogni quadrilaterale $P_i P_j P_k P_l$ ($1 \le i < j < k < l \le n$) e non su alcuna diagonale di $D$, in modo tale che i punti assegnati $\binom{n}{4}$ siano distinti, e che il segmento che ne collega due incroci almeno una diagonale di $D$.

[[src_cn_ctst_2021__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_combinatoria,topic_aritmetica,method_induzione,method_estremalita,method_invarianti,skill_ragionamento_geometrico,skill_modellizzazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Extend 2021 distinct integers by appending smallest non-divisor; all large integers appear*

> Given 2021 distinct positive integers $a_1, a_2, \ldots, a_{2021}$. Define the sequence $\{a_n\}$ inductively as follows: for each integer $n \ge 2022$, $a_n$ is the smallest positive integer different from $a_1, a_2, \ldots, a_{n-1}$ and not dividing the product $a_1 a_2 \cdots a_{n-1}$. Prove: there exists a positive integer $M$, such that all integers greater than or equal to $M$ appear in $\{a_n\}$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_induzione|Induzione]], [[method_estremalita|Estremalità]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Estendere i numeri interi distinti 2021 aggiungendo il più piccolo non divisore; tutti i numeri interi grandi appaiono*

> Dato il 2021 diversi integri positivi $a_1, a_2, \ldots, a_{2021}$. Definire la sequenza $\{a_n\}$ in modo induttivo come segue: per ogni numero intero $n \ge 2022$, $a_n$ è il numero intero positivo più piccolo diverso da $a_1, a_2, \ldots, a_{n-1}$ e non divide il prodotto $a_1 a_2 \cdots a_{n-1}$. Prova: esiste un intero positivo $M$, in modo che tutti gli enti superiori o uguali a $M$ appaiano in $\{a_n\}$.

[[src_cn_ctst_2021__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_algebra,topic_disuguaglianze,method_estremalita,method_trigonometria,skill_manipolazione_algebrica,skill_stima,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Find largest C such that product of differences >= C^(n(n-1)/2) for reals in [-1,1]*

> Find the largest constant $C > 0$, such that for any integer $n \ge 2$, one can find real numbers $x_1, x_2, \ldots, x_n \in [-1, 1]$ satisfying
> $$\prod_{1 \le i < j \le n} (x_i - x_j) \ge C^{\frac{n(n-1)}{2}}.$$

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]]
**Risposta:** $\dfrac{1}{2}$
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Ricerca il più grande C tale che il prodotto delle differenze >= C^(n(n-1)/2) per i reali in [-1,1]*

> Trova la costante più grande $C > 0$, in modo che per qualsiasi numero intero $n \ge 2$, si possano trovare numeri reali $x_1, x_2, \ldots, x_n \in [-1, 1]$ soddisfacenti $$\prod_{1 \le i < j \le n} (x_i - x_j) \ge C^{\frac{n(n-1)}{2}}.$$

**Risposta:** \dfrac{1}{2}
[[src_cn_ctst_2021__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_aritmetica,topic_combinatoria,method_doppio_conteggio,method_fattorizzazione,method_induzione,skill_manipolazione_algebrica,skill_conteggio_sistematico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Double inequality linking sum of 5^omega(m) to sum of tau(k)^2 floor(n/k)*

> For each positive integer $N$, let $\tau(N)$ be the number of positive divisors of $N$; $\omega(N)$ be the number of distinct prime factors of $N$; $\Omega(N)$ be the number of prime factors of $N$ counted with multiplicities. Prove: for each positive integer $n$,
> $$\sum_{m=1}^{n} 5^{\omega(m)} \le \sum_{k=1}^{n} \left\lfloor \frac{n}{k} \right\rfloor \tau(k)^2 \le \sum_{m=1}^{n} 5^{\Omega(m)}.$$
> Here, $\lfloor x \rfloor$ is the largest integer not exceeding $x$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_doppio_conteggio|Doppio conteggio]], [[method_fattorizzazione|Fattorizzazione]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


Doppia disuguaglianza che collega la somma di 5 omegrati a quella di tau k^2 piano n/k

> Per ogni intero positivo $N$, $\tau(N)$ è il numero di divisori positivi di $N$; $\omega(N)$ è il numero di fattori primi distinti di $N$; $\Omega(N)$ è il numero di fattori primi di $N$ contato con moltiplicità. Prova: per ogni intero positivo $n$, $$\sum_{m=1}^{n} 5^{\omega(m)} \le \sum_{k=1}^{n} \left\lfloor \frac{n}{k} \right\rfloor \tau(k)^2 \le \sum_{m=1}^{n} 5^{\Omega(m)}.$$ Qui, $\lfloor x \rfloor$ è il più grande intero non superiore a $x$.

[[src_cn_ctst_2021__Q16]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_funzionali,method_backward,method_casework,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Functional equation for f,g: R->R involving 2021st power; find all solutions*

> Find all functions $f:\mathbb{R} \to \mathbb{R}$ and $g:\mathbb{R} \to \mathbb{R}$ such that for all $x, y \in \mathbb{R}$,
> $$f(g(x) + y) = (f(x))^{2021} + f(y).$$

**Topic:** [[topic_funzionali|Equazioni funzionali]]
**Metodo:** [[method_backward|Backward]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]]
**Risposta:** $f \equiv 0 \text{ (with any } g\text{) or } f(x)=x,\, g(x)=x^{2021}$
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Equazione funzionale per f,g: R->R che coinvolge potenza 2021st; trovare tutte le soluzioni*

> Trova tutte le funzioni $f:\mathbb{R} \to \mathbb{R}$ e $g:\mathbb{R} \to \mathbb{R}$ in modo tale che per tutte le $x, y \in \mathbb{R}$, $$f(g(x) + y) = (f(x))^{2021} + f(y).$$

**Risposta:** f \equiv 0 \text{ (with any } g\text{) or } f(x)=x,\, g(x)=x^{2021}
[[src_cn_ctst_2021__Q17]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_geometria_piana,topic_combinatoria,topic_aritmetica,method_invarianti,method_estremalita,skill_ragionamento_geometrico,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Triangle with integer vertices and one interior m-integral point has bounded area*

> Let $m$ be a positive integer. A point $(x, y)$ in the plane is called an $m$-integral point if $m \mid x$ and $m \mid y$. Prove that for any triangle $ABC$ with integer vertex coordinates that has exactly one interior $m$-integral point, its area $S_{\triangle ABC}$ satisfies $S_{\triangle ABC} \le 2m^2(m+2)$.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Un triangolo con vertici interi e un punto interno m-integrale ha una superficie delimitata*

> $m$ sia un numero intero positivo. Un punto $(x, y)$ nel piano è chiamato punto integrale $m$ se $m \mid x$ e $m \mid y$. Prova che per qualsiasi triangolo $ABC$ con coordinate di vertici interi che abbia esattamente un punto integrale interno $m$, la sua superficie $S_{\triangle ABC}$ soddisfa $S_{\triangle ABC} \le 2m^2(m+2)$.

[[src_cn_ctst_2021__Q18]]



<span class="atom-split" id="q19" data-atom="q19" data-title="Quesito 19" data-tags="topic_combinatoria,method_estremalita,method_casework,method_conteggio,skill_modellizzazione,skill_conteggio_sistematico,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*n^2 distinct reals in n×n grid satisfying row/column max conditions; find min m*

> Given integer $n \ge 2$. Find the least positive integer $m$, such that there are $n^2$ distinct positive real numbers $x_{i,j}$ ($1 \le i, j \le n$) satisfying the following conditions:
> \begin{enumerate}
> \item[(1)] For every $i$, $j$:
> $$x_{i,j} = \max\{x_{i,1}, x_{i,2}, \ldots, x_{i,j}\} \quad \text{or} \quad x_{i,j} = \max\{x_{1,j}, x_{2,j}, \ldots, x_{i,j}\};$$
> \item[(2)] For every $i$, there are at most $m$ indices $k$ with $x_{i,k} = \max\{x_{i,1}, x_{i,2}, \ldots, x_{i,k}\}$;
> \item[(3)] For every $j$, there are at most $m$ indices $k$ with $x_{k,j} = \max\{x_{1,j}, x_{2,j}, \ldots, x_{k,j}\}$.
> \end{enumerate}

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2n - 1
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*n^2 reali distinte in n ×n griglia che soddisfano le condizioni massime di riga/colonna; trovare min m*

> Numero intero $n \ge 2$. Trova il numero intero meno positivo $m$, in modo che ci siano $n^2$ numeri reali positivi distinti $x_{i,j}$ ($1 \le i, j \le n$) che soddisfano le seguenti condizioni: \begin{enumerate} \item[(1)] Per ogni $i$, $j$: $$x_{i,j} = \max\{x_{i,1}, x_{i,2}, \ldots, x_{i,j}\} \quad \text{or} \quad x_{i,j} = \max\{x_{1,j}, x_{2,j}, \ldots, x_{i,j}\};$$ \item[(2)] Per ogni $i$, ci sono al massimo $m$ indici $k$ con $x_{i,k} = \max\{x_{i,1}, x_{i,2}, \ldots, x_{i,k}\}$; \item[(3)] Per ogni $j$, ci sono al massimo $m$ indici $k$ con $x_{k,j} = \max\{x_{1,j}, x_{2,j}, \ldots, x_{k,j}\}$. \end{enumere}

**Risposta:** 2n - 1
[[src_cn_ctst_2021__Q19]]



<span class="atom-split" id="q20" data-atom="q20" data-title="Quesito 20" data-tags="topic_geometria_piana,method_trigonometria,method_simmetria,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Incircle of triangle; point F with IF parallel BC and equal base angles; prove perpendicularity*

> As illustrated in Fig. 2.1, circle $\Omega$ is inscribed in triangle $\triangle ABC$; $I$ is the incentre of $\triangle ABC$; $O$ is the circumcenter of $\triangle ABC$. Let $M$ and $N$ be the midpoints of arc $\widehat{BAC}$ and arc $\widehat{BC}$ of the circumcircle, respectively. Let $D$ be a point on arc $\widehat{AC}$ (not containing $B$) such that $AD \parallel BC$. Let $F$ be a point inside $\triangle ABC$ satisfying $IF \parallel BC$ and $\angle BAF = \angle CAF$. Let $K$ be the intersection of lines $AF$ and $DI$; let $L$ be the intersection of lines $AF$ and the line through $N$ and some constructed point. Prove: $MK \perp NL$.

![[src_cn_ctst_2021__Q20.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Trigonometria]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Incircolo di triangolo; punto F con IF parallelo BC e angolazioni di base uguali; prova la perpendicularità*

> Come illustrato in Fig. 2.1, il cerchio $\Omega$ è inscritto nel triangolo $\triangle ABC$; $I$ è il centro di $\triangle ABC$; $O$ è il centro circostante di $\triangle ABC$. Il punto di riferimento è il punto di riferimento di cui all'allegato I del presente regolamento. Il $D$ deve essere un punto di arco $\widehat{AC}$ (non contenente $B$) tale che $AD \parallel BC$. Il $F$ deve essere un punto all'interno di $\triangle ABC$ che soddisfa $IF \parallel BC$ e $\angle BAF = \angle CAF$. $K$ sia l'intersezione delle linee $AF$ e $DI$; $L$ sia l'intersezione delle linee $AF$ e la linea attraverso $N$ e qualche punto costruito. Prova: $MK \perp NL$.

![[src_cn_ctst_2021__Q20.png]]

[[src_cn_ctst_2021__Q20]]



<span class="atom-split" id="q21" data-atom="q21" data-title="Quesito 21" data-tags="topic_aritmetica,topic_combinatoria,method_casework,method_conteggio,skill_lettura_attenta,skill_modellizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Digit sum constraint for subset sums; find valid n and rational beta*

> Let $S(k)$ denote the sum of all digits of $k$ in base 10. Find all integers $n \ge 2$ and rational numbers $\beta \in (0, 1)$, such that there exist $n$ distinct positive integers $a_1, a_2, \ldots, a_n$ satisfying: for any subset $I \subseteq \{1, 2, \ldots, n\}$ with $|I| \ge 2$,
> $$S\!\left(\sum_{i \in I} a_i\right) = \beta \sum_{i \in I} S(a_i).$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Ristrito di somma digitali per le somme del sottoinsieme; trovare n validi e beta razionale*

> $S(k)$ indichi la somma di tutti i numeri di $k$ nella base 10. Trovare tutti gli integri $n \ge 2$ e i numeri razionali $\beta \in (0, 1)$, in modo che esistano $n$ diversi integri positivi $a_1, a_2, \ldots, a_n$ che soddisfano: per qualsiasi sottoinsieme $I \subseteq \{1, 2, \ldots, n\}$ con $|I| \ge 2$, $$S\!\left(\sum_{i \in I} a_i\right) = \beta \sum_{i \in I} S(a_i).$$

[[src_cn_ctst_2021__Q21]]



<span class="atom-split" id="q22" data-atom="q22" data-title="Quesito 22" data-tags="topic_algebra,topic_disuguaglianze,method_estremalita,method_casework,method_telescoping,skill_manipolazione_algebrica,skill_stima,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Maximise cyclic sum of x_i^2(x_{i+1}-x_{i-1}) for x_i in [-1,1]*

> For real numbers $x_1, x_2, \ldots, x_{60} \in [-1, 1]$, find the maximum of
> $$\sum_{i=1}^{60} x_i^2 (x_{i+1} - x_{i-1}),$$
> where $x_0 = x_{60}$ and $x_{61} = x_1$.

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_telescoping|Telescoping]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 40
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Maximizzare la somma ciclica di x_i^2(x_{i+1}-x_{i-1}) per x_i in [-1,1]*

> Per i numeri reali $x_1, x_2, \ldots, x_{60} \in [-1, 1]$, trovare il massimo di $$\sum_{i=1}^{60} x_i^2 (x_{i+1} - x_{i-1}),$$ dove $x_0 = x_{60}$ e $x_{61} = x_1$.

**Risposta:** 40
[[src_cn_ctst_2021__Q22]]



<span class="atom-split" id="q23" data-atom="q23" data-title="Quesito 23" data-tags="topic_geometria_piana,topic_disuguaglianze,method_estremalita,method_simmetria,skill_ragionamento_geometrico,skill_stima,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Minimum alpha so that every unit-area convex polygon fits in an alpha-area symmetric copy*

> Find the least positive real number $\alpha$ satisfying this condition: for any convex polygon $P$ of area 1, there exists a point $M$ in the plane such that the area of the convex hull of $P \cup Q$ is at most $\alpha$, where $Q$ is the central-symmetric figure of $P$ about $M$.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_stima|Stima]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Risposta:** 2
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Alfa minima in modo che ogni poligono convexo di area unitaria si inserisca in una copia simmetrica di area alfa*

> Trovare il numero reale $\alpha$ meno positivo che soddisfi questa condizione: per qualsiasi poligono convex $P$ dell'area 1, esiste un punto $M$ nel piano tale che l'area dello scafo convex di $P \cup Q$ sia al massimo $\alpha$, dove $Q$ è la figura simmetrica centrale di $P$ circa $M$.

**Risposta:** 2
[[src_cn_ctst_2021__Q23]]



<span class="atom-split" id="q24" data-atom="q24" data-title="Quesito 24" data-tags="topic_combinatoria,method_grafi,method_estremalita,method_induzione,skill_modellizzazione,skill_ragionamento_geometrico,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Round-robin with transitivity and few draws; find n^2 players in total order*

> There are $2n^2$ ($n \ge 2$) players in a single round-robin chess tournament. It is known that:
> \begin{enumerate}
> \item[(1)] For any three players $A$, $B$, $C$: if $A$ beats $B$ and $B$ beats $C$, then $A$ beats $C$;
> \item[(2)] There are at most $\dfrac{n}{16}$ draws.
> \end{enumerate}
> Prove: it is possible to choose $n^2$ players and label them $P_{ij}$ ($1 \le i, j \le n$), such that for any $i, j, i', j' \in \{1, 2, \ldots, n\}$ with $i < i'$, the player $P_{ij}$ beats the player $P_{i'j'}$.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_induzione|Induzione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Rond-robin con transibilità e pochi disegni; trovare n^2 giocatori in ordine totale*

> Ci sono giocatori $2n^2$ ($n \ge 2$) in un singolo torneo di scacchi a rotonda. È noto che: \begin{enumerate} \item[(1)] Per tutti e tre i giocatori $A$, $B$, $C$: se $A$ batte $B$ e $B$ batte $C$, allora $A$ batte $C$; \item[(2)] Ci sono al massimo $\dfrac{n}{16}$ sorte. \end{enumerate} Prova: è possibile scegliere i giocatori $n^2$ e etichettarli $P_{ij}$ ($1 \le i, j \le n$), in modo tale che per qualsiasi $i, j, i', j' \in \{1, 2, \ldots, n\}$ con $i < i'$, il giocatore $P_{ij}$ batta il giocatore $P_{i'j'}$.

[[src_cn_ctst_2021__Q24]]
