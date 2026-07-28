---
title: Concours Général des Lycées 2022 — Matematica
tipo: gara
competition: Concours Général des Lycées 2022 — Matematica
family: concours_generale
year: '2022'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2022"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_algebra,method_induzione,method_disuguaglianze,method_ricorsione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Sparkling reals defined via parity of floor of x^(2^n); prove each interval [k,k+1) contains a unique sparkling real using sequences a_n, b_n*

> Problem 1: In full effervescence.
> 
> For every real $x \ge 0$, we denote by $\mathrm{E}(x)$ its integer part, that is, the largest integer that is less than or equal to $x$. For example, $\mathrm{E}(2.4) = 2$, $\mathrm{E}(3) = 3$ and $\mathrm{E}(8.9) = 8$.
> 
> We say that a real number $x \ge 0$ is petillant (sparkling) if for every integer $n \ge 1$, the number $\mathrm{E}\left(x^{(2^n)}\right) + 2$ is even.
> 
> 1.1 Warm-up.
> 1. Determine the integer part of $\frac{4}{3}$ and say whether $\frac{4}{3}$ is sparkling.
> 2. Determine whether every real in the interval $[0;1[$ is sparkling.
> 3.a. Show that, if $x$ and $x'$ are two distinct reals, then $x^2$ and $x'^2$ are also distinct.
>    b. Show that there exists an infinity of sparkling reals.
> 4. Determine whether every nonzero integer is sparkling.
> 
> In the rest of the problem, we consider a fixed integer $k \ge 1$. We thus want to establish that the interval $[k; k+1[$ contains a unique sparkling real. We denote by $(u_n)_{n \ge 1}$ the sequence defined by
> $$u_1 = (k+1)^2$$
> and, for every integer $n \ge 1$,
> $$u_{n+1} = (u_n - 1)^2.$$
> 
> 1.2 Existence.
> 5. Show that $u_n > 3$ for every integer $n \ge 1$.
> 6. Show that, for every integer $n \ge 1$, there exists a unique real $a_n \ge 1$ such that $a_n^{(2^n)} + 2 = u_n$, and a unique real $b_n \ge 1$ such that $b_n^{(2^n)} + 1 = u_n$.
> 7. Show that the sequence $(a_n)_{n \ge 1}$ is increasing and that the sequence $(b_n)_{n \ge 1}$ is strictly decreasing.
> 8. Show that the sequence $(a_n)_{n \ge 1}$ is convergent. We denote its limit by $a$.
> 9. Show that $k < a < k+1$ and that $a$ is sparkling.
> 
> 1.3 Uniqueness.
> Let $y$ be a sparkling real contained in the interval $[k; k+1[$. For every integer $n \ge 1$, we set $r_n = \mathrm{E}\left(y^{(2^n)}\right) + 2$.
> 10. Show that $u_n = r_n$ for every integer $n \ge 1$.
> 11. With the notations of Part 1.2, show that for every integer $n \ge 1$, $a_n \le y \le b_n$.
> 12.a. Let $x$ and $y$ be two reals with $x \ge y \ge 1$. Show that, for every integer $n \ge 1$, $x^{(2^n)} - y^{(2^n)} \ge 2^n(x - y)$.
>     b. Show that the sequences $(a_n)_n$ and $(b_n)_{n \ge 1}$ converge to the same limit $y$.
> 13. Show that $y$ is the unique sparkling real contained in the interval $[k; k+1[$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_induzione|Induzione]], [[method_disuguaglianze|Disuguaglianze]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1CDKdOobrMp7gzmKvpT87_FjVRxny9v1t/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Reali scintillanti definiti attraverso parità di pavimento di x^(2^n); dimostrare che ogni intervallo [k,k+1) contiene un reale scintillante unico utilizzando le sequenze a_n, b_n*

> Problema 1: In piena effervescenza.
> 
> Per ogni $x \ge 0$ reale, indichiamo con $\mathrm{E}(x)$ la sua parte integrale, cioè il più grande intero inferiore o uguale a $x$. Ad esempio, $\mathrm{E}(2.4) = 2$, $\mathrm{E}(3) = 3$ e $\mathrm{E}(8.9) = 8$.
> 
> Diciamo che un numero reale $x \ge 0$ è petillant (sparkling) se per ogni intero $n \ge 1$, il numero $\mathrm{E}\left(x^{(2^n)}\right) + 2$ è pari.
> 
> 1.1 riscaldamento. 1. Determinare la parte integrale di $\frac{4}{3}$ e dire se $\frac{4}{3}$ è luccicante. 2. Determinare se ogni reale nell'intervallo $[0;1[$ è spumante. 3.a. Mostrare che, se $x$ e $x'$ sono due reali distinte, allora $x^2$ e $x'^2$ sono anche distinte. b. Mostrate che esistono infinite realtà scintillanti. 4. Determina se ogni numero intero non zero è spumante.
> 
> Nel resto del problema, consideriamo un intero fisso $k \ge 1$. Vogliamo quindi stabilire che l'intervallo $[k; k+1[$ contiene un reale scintillante unico. Indichiamo con $(u_n)_{n \ge 1}$ la sequenza definita da $$u_1 = (k+1)^2$$ e, per ogni intero $n \ge 1$, $$u_{n+1} = (u_n - 1)^2.$$
> 
> 1.2 Esistenza. 5. Indicare che $u_n > 3$ per ogni numero intero $n \ge 1$. 6. Mostrare che, per ogni numero intero $n \ge 1$, esiste un reale unico $a_n \ge 1$ come $a_n^{(2^n)} + 2 = u_n$, e un reale unico $b_n \ge 1$ come $b_n^{(2^n)} + 1 = u_n$. 7. Indicare che la sequenza $(a_n)_{n \ge 1}$ è in aumento e che la sequenza $(b_n)_{n \ge 1}$ è strettamente in calo. 8. Indicare che la sequenza $(a_n)_{n \ge 1}$ è convergente. Indichiamo il suo limite con $a$. 9. Indicare che $k < a < k+1$ e che $a$ sono scintillanti.
> 
> 1.3 Unicità. $y$ sia un reale scintillante contenuto nell'intervallo $[k; k+1[$. Per ogni intero $n \ge 1$, impostare $r_n = \mathrm{E}\left(y^{(2^n)}\right) + 2$. 10. Indicare che $u_n = r_n$ per ogni numero intero $n \ge 1$. 11. Con le notazioni della parte 1.2, indicare che per ogni numero intero $n \ge 1$, $a_n \le y \le b_n$. 12.a. Che $x$ e $y$ siano due reali con $x \ge y \ge 1$. Indicare che, per ogni numero intero $n \ge 1$, $x^{(2^n)} - y^{(2^n)} \ge 2^n(x - y)$. b. Indicare che le sequenze $(a_n)_n$ e $(b_n)_{n \ge 1}$ convergono allo stesso limite $y$. 13. Indicare che $y$ è il reale spumante unico contenuto nell'intervallo $[k; k+1[$.

[[src_cgen_2022__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,topic_geometria_analitica,topic_combinatoria,method_cassetti,method_coordinate,method_estremalita,method_conteggio,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Lattice path M_k with steps i or j; alignment of three or more points; Stern-Brocot / Farey-style tight fractions, naive mediants, principal intervals, and pigeonhole to force n aligned points*

> Problem 2: Keeping the course.
> 
> Let $(O, \vec{\imath}, \vec{\jmath})$ be an orthonormal frame of the plane. For this problem, we consider a fixed integer $n \ge 2$ as well as a family of points $(M_k)_{k \ge 0}$, where $M_0 = O$ and, for every integer $k \ge 0$, the vector $\overrightarrow{M_k M_{k+1}}$ is equal to $\vec{\imath}$ or to $\vec{\jmath}$. The aim of the problem is to study whether one can find an alignment of three or more points among the points $M_k$.
> 
> Notation: Throughout the rest of the exercise, a fraction $\frac{p}{q}$ being given, it will also be denoted $p/q$.
> 
> 2.1 Study of small values of $n$.
> 1. Show that the sequence $(M_k)_{k \ge 0}$ always contains three aligned points.
> 2. Show that the sequence $(M_k)_{k \ge 0}$ always contains four aligned points.
> 
> 2.2 Preliminaries.
> 3. Show that there exists a sequence $(u_k)_{k \ge 0}$ such that, for every integer $k \ge 0$:
>    - the vector $\overrightarrow{M_k M_{k+1}}$ is equal to $\vec{\imath} - (k - u_k)\,\vec{\jmath}$;
>    - the term $u_{k+1}$ is equal to $u_k$ or to $1 + u_k$.
> 4. Show that, if there exist two natural integers $s$ and $t$ such that $u_k = sk + t$ for $n$ integers $k$, then the sequence $(M_k)_{k \ge 0}$ contains $n$ aligned points.
> 
> In the rest of the problem, for every integer $k \ge 1$, we set $v_k = u_k / k$.
> 5. Show that, for every integer $k \ge 1$, $v_k$ is a number lying between $0$ and $1$.
> 
> In the course of the problem we shall frequently use the notion of integer part; we name the following result the pigeonhole principle and it is the object of the following question.
> 6. Let $k$ and $\ell$ be two integers, with $k$ nonzero. If one distributes $k\ell$ objects (chests) into $\ell$ drawers (tiroirs), show that at least one of the $\ell$ drawers contains at least $k$ objects.
> 
> 2.3 Rational barriers.
> In this part, we consider an irreducible fraction $a/b$ lying between $0$ and $1$ ($a$ and $b$ naturals with $0 \le a \le b$ and $b \ge 1$).
> 7. Let $k \ge 1$ be an integer such that $v_k = a/b$ and $v_{k+1} = a/b \ne v_k$. Show that:
> $$a - b \le b\,u_k - a\,k \le a.$$
> 8. Deduce that, if there exists an integer $k$ such that $v_k = a/b \le v_{k+1}$ or $v_{k+1} = a/b$, then the sequence contains $n$ aligned points.
> 
> 2.4 Tight couples, naive means and overlaps of principal intervals.
> Let $a/b$ and $c/d$ be two irreducible fractions, with $a/b$ strictly positive; the couple is said to be tight (serre) if $bc - ad = 1$. In this case, we call naive intermediary (naive mediant) of the principal of the fractions $a/b$ and $c/d$ the fraction $(a+c)/(b+d)$. Finally, we call principal interval of the fractions $a/b$ and $c/d$ the interval $[a/b; c/d]$, and the inferior of this fraction $e/f$.
> 9. Show that, if $a/b$ and $c/d$ are two irreducible fractions whose couple is tight, then the couple involving $(a+c)/(b+d)$ is also tight.
> 10. Let $(a/b; c/d)$ be a couple of tight fractions.
>    a. Show that $a/b < c/d$.
>    b. Let $x/y$ be a naive mean (mediant) between the two fractions $a/b$ and $c/d$. Show that $x/y$ is greater than $a/b$ and less than $c/d$.
> 11. Show that, $a/b$, $c/d$ and $e/f$ being irreducible fractions such that the couples $(a/b; c/d)$ and $(c/d; e/f)$ are tight, the naive intermediary lies in the inferior principal interval of the fraction $e/f$.
> 
> We now consider the following construction with first naturals. The list begins with the two irreducible fractions $0/1$ and $1/1$. Then, as long as one can take two consecutive fractions $a/b$ and $c/d$ such that $b < d < 2n$, one inserts between these two fractions their naive mediant $(a+c)/(b+d)$.
> 12. Show that this process necessarily terminates, and that the list obtained then contains at most $4n^2$ fractions, of which every couple of consecutive fractions is a tight couple.
> 
> Let $0/1 = q_1 < q_2 < \cdots < q_\ell = 1/1$ be the $\ell$ fractions obtained at the end of the process above. For every integer $k$ with $1 \le k \le \ell - 1$, we denote by $r_k$ the naive mediant of the fractions $q_k$ and $q_{k+1}$.
> 13. Show that the denominators of the fractions $r_k$ all belong to the interval $[2n; 4n - 1]$.
> 14. Show that, for every integer $k$ with $1 \le k \le \ell - 1$, each of the intervals $[q_k; r_k]$ and $[r_k; q_{k+1}]$ is included in a principal interval.
> 
> 2.5 Coincidence in a principal interval.
> Let $a/b$ be an irreducible fraction. Suppose there exists an integer $\ell \ge 1$ such that each of the terms $v_{\ell n}, v_{\ell n + 1}, \ldots, v_{2\ell n - 1}$ belongs to the interval $[\frac{a}{b}; \frac{c}{d}]$.
> 15. Show that $0 \le b\,u_k - a\,k < f$ for every integer $k$ such that $\ell n \le k \le 2\ell n - 1$.
> 16. Deduce that the sequence $(M_k)_{k \ge 0}$ contains $n$ aligned points.
> 
> Now suppose there exists an integer $\ell > 1$ such that each of the terms $v_{\ell n}, v_{\ell n + 1}, \ldots, v_{2\ell n - 1}$ belongs to the interval $[\frac{a}{b}; \frac{c}{d}]$.
> 17. Show, under these new hypotheses, that the sequence $(M_k)_{k \ge 0}$ contains $n$ aligned points.
> 
> 2.6 Conclusion.
> 18.a. Show that the sequence $(M_k)_{k \ge 0}$ necessarily contains $n$ aligned points.
>     b. Show that the first $n \times 2^{32 n^2}$ points of the sequence $(M_k)_{k \ge 0}$ contain $n$ aligned points. (Any answer leading to a finite value different from $n \times 2^{32 n^2}$ will be taken into consideration and credited according to the value proposed.)
> 
> 2.7 Towards infinity, and beyond!
> 19. Does the sequence $(M_k)_{k \ge 0}$ necessarily contain an infinity of aligned points?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_analitica|Geometria analitica]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_cassetti|Principio dei cassetti]], [[method_coordinate|Coordinate]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1CDKdOobrMp7gzmKvpT87_FjVRxny9v1t/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Costruzione del percorso lattice M_k con passi i o j; allineamento di tre o più punti; frazioni strette di stile Stern-Brocot/Farey, medianti ingenui, intervalli principali e forze di buco di piccione per forzare n punti allineati*

> Il problema 2: mantenere il corso.
> 
> Lasciate che $(O, \vec{\imath}, \vec{\jmath})$ sia una cornice ortonormale del piano. Per questo problema, consideriamo un intero fisso $n \ge 2$ nonché una famiglia di punti $(M_k)_{k \ge 0}$, dove $M_0 = O$ e, per ogni intero $k \ge 0$, il vettore $\overrightarrow{M_k M_{k+1}}$ è uguale a $\vec{\imath}$ o a $\vec{\jmath}$. L'obiettivo del problema è quello di studiare se si possa trovare un allineamento di tre o più punti tra i punti $M_k$.
> 
> Nota: nel resto dell'esercizio, se viene data una frazione $\frac{p}{q}$, essa verrà anche indicata $p/q$.
> 
> 2.1 Studi di piccoli valori $n$. 1. Indicare che la sequenza $(M_k)_{k \ge 0}$ contiene sempre tre punti allineati. 2. Indicare che la sequenza $(M_k)_{k \ge 0}$ contiene sempre quattro punti allineati.
> 
> 2.2 Preliminarie. 3. Mostrare che esiste una sequenza $(u_k)_{k \ge 0}$ tale che, per ogni numero intero $k \ge 0$: - il vettore $\overrightarrow{M_k M_{k+1}}$ è uguale a $\vec{\imath} - (k - u_k)\,\vec{\jmath}$; - il termine $u_{k+1}$ è uguale a $u_k$ o a $1 + u_k$. 4. Indicare che, se esistono due integri naturali $s$ e $t$ tali che $u_k = sk + t$ per $n$ integri $k$, la sequenza $(M_k)_{k \ge 0}$ contiene $n$ punti allineati.
> 
> Nel resto del problema, per ogni intero $k \ge 1$, impostamo $v_k = u_k / k$. 5. Indicare che, per ogni numero intero $k \ge 1$, $v_k$ è un numero situato tra $0$ e $1$.
> 
> Nel corso del problema useremo spesso la nozione di parte integrale; chiamiamo il risultato seguente il principio del buco di piccione ed è oggetto della domanda seguente. 6. $k$ e $\ell$ siano due numeri interi, con $k$ non zero. Se si distribuiscono gli oggetti $k\ell$ (cassette) in cassetti $\ell$ (tiroirs), dimostrare che almeno uno dei cassetti $\ell$ contiene almeno $k$ oggetti.
> 
> 2.3 Barriere razionali. In questa parte, consideriamo una frazione irriducibile $a/b$ che si trova tra $0$ e $1$ ($a$ e $b$ naturali con $0 \le a \le b$ e $b \ge 1$). 7. $k \ge 1$ sia un numero intero tale che $v_k = a/b$ e $v_{k+1} = a/b \ne v_k$. Indicare che: $$a - b \le b\,u_k - a\,k \le a.$$ 8. Se esiste un numero intero $k$ tale da $v_k = a/b \le v_{k+1}$ o $v_{k+1} = a/b$, la sequenza contiene $n$ punti allineati.
> 
> 2.4 Coppie strette, mezzi ingenui e sovrapposizioni di intervalli principali. Lasciate che $a/b$ e $c/d$ siano due frazioni irriducibili, con $a/b$ strettamente positive; si dice che la coppia sia stretta (serra) se $bc - ad = 1$. In questo caso, chiamiamo intermediario ingenuo (mediante ingenuo) del principale delle frazioni $a/b$ e $c/d$ la frazione $(a+c)/(b+d)$. Infine, chiamiamo l'intervallo principale delle frazioni $a/b$ e $c/d$ l'intervallo $[a/b; c/d]$, e il inferiore di questa frazione $e/f$. 9. Mostra che, se $a/b$ e $c/d$ sono due frazioni irriducibili la cui coppia è stretta, allora la coppia che coinvolge $(a+c)/(b+d)$ è anche stretta. 10. Lasciate $(a/b; c/d)$ essere un paio di frazioni strette. a. Mostra che $a/b < c/d$. b. Che $x/y$ sia una media ingenua (mediante) tra le due frazioni $a/b$ e $c/d$. Indicare che $x/y$ è maggiore di $a/b$ e inferiore a $c/d$. 11. Mostrare che, essendo $a/b$, $c/d$ e $e/f$ frazioni irriducibili in modo tale che le coppie $(a/b; c/d)$ e $(c/d; e/f)$ siano strette, il mezzo ingenuo si trova nell'intervallo principale inferiore della frazione $e/f$.
> 
> Ora consideriamo la seguente costruzione con i primi naturali. L'elenco inizia con le due frazioni irriducibili $0/1$ e $1/1$. Poi, finché si possono prendere due frazioni consecutive $a/b$ e $c/d$ in modo tale che $b < d < 2n$, uno inserisce tra queste due frazioni il loro mediante ingenuo $(a+c)/(b+d)$. 12. Mostrare che questo processo termina necessariamente e che l'elenco ottenuto contiene al massimo $4n^2$ frazioni, di cui ogni coppia di frazioni consecutive è una coppia stretta.
> 
> $0/1 = q_1 < q_2 < \cdots < q_\ell = 1/1$ siano le frazioni $\ell$ ottenute alla fine del processo di cui sopra. Per ogni numero intero $k$ con $1 \le k \le \ell - 1$, indichiamo con $r_k$ il mediante ingenuo delle frazioni $q_k$ e $q_{k+1}$. 13. Indicare che i denominatori delle frazioni $r_k$ appartengono tutti all'intervallo $[2n; 4n - 1]$. 14. Indicare che, per ogni numero intero $k$ con $1 \le k \le \ell - 1$, ciascuno degli intervalli $[q_k; r_k]$ e $[r_k; q_{k+1}]$ è incluso in un intervallo principale.
> 
> 2.5 Coincidenza in un intervallo principale. Che la $a/b$ sia una frazione irriducibile. Supponiamo che esista un intero $\ell \ge 1$ tale che ciascuno dei termini $v_{\ell n}, v_{\ell n + 1}, \ldots, v_{2\ell n - 1}$ appartenga all'intervallo $[\frac{a}{b}; \frac{c}{d}]$. 15. Indicare che $0 \le b\,u_k - a\,k < f$ per ogni numero intero $k$ tale che $\ell n \le k \le 2\ell n - 1$. 16. Riduzione che la sequenza $(M_k)_{k \ge 0}$ contiene $n$ punti allineati.
> 
> Ora supponiamo che esista un intero $\ell > 1$ tale che ciascuno dei termini $v_{\ell n}, v_{\ell n + 1}, \ldots, v_{2\ell n - 1}$ appartiene all'intervallo $[\frac{a}{b}; \frac{c}{d}]$. 17. Sosteni, in base a queste nuove ipotesi, che la sequenza $(M_k)_{k \ge 0}$ contiene $n$ punti allineati.
> 
> 2.6 Conclusione. 18.a. Indicare che la sequenza $(M_k)_{k \ge 0}$ contiene necessariamente $n$ punti allineati. b. Indicare che i primi punti $n \times 2^{32 n^2}$ della sequenza $(M_k)_{k \ge 0}$ contengono punti allineati $n$. (Qualsiasi risposta che conduca a un valore finito diverso da $n \times 2^{32 n^2}$ sarà presa in considerazione e attribuita secondo il valore proposto.)
> 
> 2.7 verso l'infinito e oltre! 19. La sequenza $(M_k)_{k \ge 0}$ contiene necessariamente un infinito di punti allineati?

[[src_cgen_2022__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_probabilita,topic_combinatoria,topic_algebra,method_ricorsione,method_casework,method_conteggio,method_simmetria,method_bigezione,skill_modellizzazione,skill_conteggio_sistematico,skill_manipolazione_algebrica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Probabilistic team tournament: a rigged-coin duel between two players, a regular tournament, the team elimination tournament with win probabilities a_i/(a_i+b_j), and proof via tableau transformations that A's winning probability is independent of player order*

> Problem 3: A team tournament.
> 
> Let $E$ be a finite event; we denote by $\mathbb{P}(E)$ the probability of $E$. One may freely use the following result: if $D_1, \ldots, D_p$ are pairwise disjoint events, then
> $$\mathbb{P}(D_1 \cup \cdots \cup D_p) = \mathbb{P}(D_1) + \cdots + \mathbb{P}(D_p).$$
> 
> 3.1 A game, two players.
> Ambre has a rigged coin: at each toss it gives Heads (Pile) with probability $a \in [0;1]$ and Tails (Face) with probability $1 - a$. As for him, Benjamin has a coin that, at each toss, gives Heads with probability $b \in [0;1]$ and Tails with probability $1 - b$.
> They decide to play the following game: each one tosses his coin. They thus obtain simultaneously Heads or simultaneously Tails (in which case they continue); they stop as soon as one obtains Heads and the other Tails. The tosses are independent.
> For every integer $n \ge 1$, we denote by $A_n$ the event "Ambre wins on the $n$-th toss" and by $B_n$ the event "each of the two players tosses his coin at least $n$ times during this game". We denote by $C_n$ the event that the $n$-th toss of both players gives the same result.
> 1.a. We set $\lambda = 1 - a - b + 2ab$. Show that $\mathbb{P}(C_1) = \lambda$.
>    b. For every integer $n \ge 1$, express $\mathbb{P}(C_{n+1})$ as a function of $\mathbb{P}(C_n)$. Deduce an expression of $\mathbb{P}(C_n)$ as a function of $n$.
> 2. Let $n \ge 1$ be an integer.
>    a. Express $\mathbb{P}(A_n)$ as a function of $a$, $b$ and $\mathbb{P}(C_n)$.
>    b. Deduce an expression of $\mathbb{P}(A_n)$ as a function of $a$, $b$ and $n$.
>    c. Give an expression of $\mathbb{P}(B_n)$ as a function of $a$, $b$ and $n$.
> 3. We denote by $G_A$ the event "Ambre wins" and by $G_B$ the event "Benjamin wins".
>    a. Show that $0 < \lambda < 1$.
>    b. Show, for every integer $n \ge 1$, that $\mathbb{P}(G_A) \ge a(1 - b)\,\frac{1 - \lambda^n}{1 - \lambda}$ and $\mathbb{P}(G_B) \ge b(1 - a)\,\frac{1 - \lambda^n}{1 - \lambda}$.
>    c. Let $G_C$ be the event "this game has no winner". Deduce from the foregoing that $\mathbb{P}(G_A) = \frac{a(1-b)}{1-\lambda}$, $\mathbb{P}(G_B) = \frac{b(1-a)}{1-\lambda}$ and $\mathbb{P}(G_C) = 0$.
> 
> 3.2 What is a regular game?
> Let $A_1, \ldots, A_n$ be $n$ players. We say that a game is regular when it possesses the following characteristics: for each of the players, the game opposes him to one or several adversaries through successive matches; each match concerns exactly two players playing one against the other; and no player can be forced to play against each of the other people.
> 4. Show that the following game is regular: the people $A_1, A_2, \ldots, A_n$ each have a rigged coin. For every $i$, at each toss, the coin of person $A_i$ gives Heads with probability $p_i \in [0;1]$ and Tails with probability $1 - p_i$. The game proceeds in at most several successive rounds, and at each round two people meet and play according to the rules defined in 3.1.
> 
> 3.3 The regular team tournament.
> Let $A$ and $B$ be two teams. We denote by $m$ the size of $A$ and by $n$ the size of $B$. Suppose that each of the $m$ people of team $A$ as well as each of the $n$ people of team $B$ has a rigged coin, following the same rules. During each match, the first remaining person of team $A$ plays against the first remaining person of team $B$; at the end of this match, only one of these two people is declared winner and the loser is eliminated. The winner then plays against a new person of the opposing team, and one continues in this way until one of the two teams is completely eliminated, the surviving team winning the tournament.
> For example, for $m = n = 3$, person $A_1$ plays against person $B_1$. If $A_1$ wins, then $B_1$ is eliminated and $A_1$ plays against $B_2$. If $A_1$ loses, then $A_1$ is eliminated and $A_2$ plays against $B_1$. One continues until the totality of one team is eliminated.
> Property $(\star)$: there exist strictly positive reals $a_1, a_2, \ldots, a_m$ for $A$ and $b_1, b_2, \ldots, b_n$ for $B$ such that, for every match opposing the $i$-th person of team $A$ and the $j$-th person of team $B$, the first wins with probability $\frac{a_i}{a_i + b_j}$ and the second wins with probability $\frac{b_j}{a_i + b_j}$.
> 5. In this question only, suppose that $a_i = b_j = 1$ for all $i$ and $j$. We denote by $a_{m,n}$ the probability that team $A$ wins the tournament.
>    a. Show that $a_{m,n} = a_{n,m}$ and $a_{m,m} = 1$... [the statement asks to relate $a_{m,n}$ and $a_{n,m}$].
>    b. What is the value of $a_{n,n}$?
>    c. Determine the value of $a_{1,n}$ as a function of $n$.
>    d. Determine the value of $a_{2,n}$ as a function of $n$.
> 6. In this question only, we place ourselves in the case $m = n = 2$. The numbers $a_1, a_2, b_1$ and $b_2$ are then four strictly positive reals.
>    a. Express the probability that $A_1$ wins against $B_j$ as a function of $a_1$ and $b_j$.
>    b. Show that the probability that team $A$ wins the tournament is equal to:
> $$\frac{a_1^2 a_2 + a_1 a_2(a_2 + a_1)(b_1 + b_2) + a_1^2 b_1 + a_1 a_2 b_1 + a_2^2 b_1 b_2}{(a_1 + b_1)(a_1 + b_2)(a_2 + b_1)(a_2 + b_2)}.$$
> Does this probability depend on the order chosen for the players of a given team to enter the tournament?
> 
> 3.4 A generalisation.
> We keep the regular tournament described in Part 3.3. However, in addition to the matches of the tournament, we decide to have each member of team $A$ play against each member of team $B$ whom he has not met during the tournament, the supplementary matches always satisfying property $(\star)$. This gives a total of $mn$ matches. We code the results of these matches by means of a rectangular tableau of $m$ rows and $n$ columns. In the cell on row $i$ and column $j$, we place a symbol $A$ if $A_i$ won against $B_j$, and a symbol $B$ otherwise.
> In the example of the tournament presented at the beginning of Part 3.3 with $m = n = 3$, one obtains a $3 \times 3$ tableau whose entries are $A$ or $B$, where each symbol hides an $A$ or a $B$ according to the result of the match added to the tournament. In general, we say that the tableau is a possible result for team $A$.
> 7. In this question, suppose $m = 2$. Indicate the possible forms of all the winning tableaux and show that, for every integer $n \ge 1$, there are exactly $2^n + n\,2^{n-1}$ winning tableaux.
> 8. In this question, still suppose $m = 2$.
>    a. We denote by $D$ the product of all the terms $(a_i + b_j)$ as $j$ ranges over $\{1, 2, \ldots, n\}$. Thus $D = (a_1 + b_1)\cdots(a_1 + b_n) \times (a_2 + b_1)\cdots(a_2 + b_n)$. One may write $D = \prod_{j=1}^{n} (a_1 + b_j)(a_2 + b_j)$. Consider a tableau $T$, winning or not. For this tableau, we denote respectively by $x_1$ and $x_2$ the number of matches won by $A_1$ and by $A_2$, and for every $j$ by $y_j$ the number of matches won by $B_j$. Finally, one organizes a tournament between teams $A$ and $B$, and we denote by $\mathbb{P}_T$ the probability that this tableau is the result of the tournament. Express $\mathbb{P}_T$ as a function of the numbers $D, a_1, a_2, x_1, x_2, b_1, \ldots, b_n, y_1, y_2, \ldots, y_n$.
>    b. Now suppose that $T$ is a winning tableau. We denote by $k$ the number of columns $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ of $T$ and by $\ell$ its number of columns $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$.
>       i. Justify that $T$ contains no column $\left[\begin{smallmatrix} B \\ B \end{smallmatrix}\right]$ and that no column $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ is to the right of a column $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$.
>       ii. We denote by $T'$ the tableau obtained from $T$ in the following way: we keep the columns $\left[\begin{smallmatrix} A \\ A \end{smallmatrix}\right]$ and leave them in their place; we replace the $k$ columns $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ and $\ell$ columns $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$ of $T$ by $\ell$ columns $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ followed by $k$ columns $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$. Show that $T'$ is a winning tableau. What does one obtain if one performs the same transformation starting from $T'$?
>    c. Show that the probability that team $A$ wins the tournament does not depend on the order chosen for the players of team $A$ to enter the tournament.
> 9. We return to the general case ($m$ arbitrary). Show that the probability that team $A$ wins the tournament does not depend on the order chosen for the players to enter the tournament.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_simmetria|Simmetria]], [[method_bigezione|Biiezione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1CDKdOobrMp7gzmKvpT87_FjVRxny9v1t/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Torneo di squadra probabile: un duello con monete truccate tra due giocatori, un torneo regolare, il torneo di eliminazione di squadra con probabilità di vittoria a_i/(a_i+b_j), e la prova attraverso trasformazioni del tabellone che la probabilità di vittoria di A è indipendente dall'ordine dei giocatori*

> Problema 3: un torneo di squadra.
> 
> Lasciate che $E$ sia un evento finito; indichiamo con $\mathbb{P}(E)$ la probabilità di $E$. Si può usare liberamente il seguente risultato: se $D_1, \ldots, D_p$ sono eventi disconnessi in coppia, allora $$\mathbb{P}(D_1 \cup \cdots \cup D_p) = \mathbb{P}(D_1) + \cdots + \mathbb{P}(D_p).$$
> 
> 3.1 Una partita, due giocatori. Ambre ha una moneta truccata: ad ogni lancio dà Teste (Pile) con probabilità $a \in [0;1]$ e Coda (Face) con probabilità $1 - a$. Per quanto riguarda lui, Benjamin ha una moneta che, ad ogni lancio, dà teste con probabilità $b \in [0;1]$ e code con probabilità $1 - b$. Decidono di giocare il seguente gioco: ognuno lancia la sua moneta. Pertanto, essi ottengono contemporaneamente Capi o Coda (in tal caso continuano); si fermano non appena uno ottiene Capi e l'altro Coda. I lanci sono indipendenti. Per ogni numero intero $n \ge 1$, indichiamo con $A_n$ l'evento "Ambre vince sul $n$-th toss" e con $B_n$ l'evento "ciascuno dei due giocatori lancia la sua moneta almeno $n$ volte durante questa partita". Indichiamo con $C_n$ l'evento che il $n$-th lancio di entrambi i giocatori dà lo stesso risultato. 1.a. Abbiamo impostato $\lambda = 1 - a - b + 2ab$. Mostra che $\mathbb{P}(C_1) = \lambda$. b. Per ogni numero intero $n \ge 1$, esprimere $\mathbb{P}(C_{n+1})$ come funzione di $\mathbb{P}(C_n)$. Riduzione di un'espressione di $\mathbb{P}(C_n)$ come funzione di $n$. 2. $n \ge 1$ sia un numero intero. a. Esprimere $\mathbb{P}(A_n)$ come funzione di $a$, $b$ e $\mathbb{P}(C_n)$. b. Riduzione di un'espressione di $\mathbb{P}(A_n)$ come funzione di $a$, $b$ e $n$. c. Indicare l'espressione di $\mathbb{P}(B_n)$ come funzione di $a$, $b$ e $n$. 3. Indichiamo con $G_A$ l'evento "Ambre vince" e con $G_B$ l'evento "Benjamin vince". a. Mostra che $0 < \lambda < 1$. b. Indicare, per ogni numero intero $n \ge 1$, che $\mathbb{P}(G_A) \ge a(1 - b)\,\frac{1 - \lambda^n}{1 - \lambda}$ e $\mathbb{P}(G_B) \ge b(1 - a)\,\frac{1 - \lambda^n}{1 - \lambda}$. c. Lasciate che $G_C$ sia l'evento "questo gioco non ha vincitore". Da quanto precede dedurre che $\mathbb{P}(G_A) = \frac{a(1-b)}{1-\lambda}$, $\mathbb{P}(G_B) = \frac{b(1-a)}{1-\lambda}$ e $\mathbb{P}(G_C) = 0$.
> 
> 3.2 Che cos'è un gioco regolare? Che i giocatori $A_1, \ldots, A_n$ siano $n$. Diciamo che una partita è regolare quando possiede le seguenti caratteristiche: per ciascuno dei giocatori, la partita si oppone a uno o più avversari attraverso partite successive; ogni partita riguarda esattamente due giocatori che giocano l'uno contro l'altro; e nessun giocatore può essere costretto a giocare contro ciascuna delle altre persone. 4. Mostrare che il seguente gioco è regolare: le persone $A_1, A_2, \ldots, A_n$ hanno ognuna una moneta truccata. Per ogni $i$, ad ogni lancio, la moneta di persona $A_i$ dà teste con probabilità $p_i \in [0;1]$ e code con probabilità $1 - p_i$. Il gioco si svolge in più di diversi round successivi e in ogni round due persone si incontrano e giocano secondo le regole definite al punto 3.1.
> 
> 3.3 Il torneo di squadra regolare. Che $A$ e $B$ siano due squadre. Indichiamo con $m$ la dimensione di $A$ e con $n$ la dimensione di $B$. Supponiamo che ciascuno dei membri del team $m$ del team $A$ e ciascuno dei membri del team $n$ del team $B$ abbia una moneta truccata, seguendo le stesse regole. Durante ogni partita, la prima persona rimanente della squadra $A$ gioca contro la prima persona rimanente della squadra $B$; alla fine di questa partita, solo una di queste due persone viene dichiarata vincitrice e il perdente viene eliminato. Il vincitore gioca poi contro una nuova persona della squadra avversaria, e una continua in questo modo fino a quando una delle due squadre viene completamente eliminata, la squadra sopravvissuta vincendo il torneo. Per esempio, per $m = n = 3$, la persona $A_1$ gioca contro la persona $B_1$. Se $A_1$ vince, allora $B_1$ viene eliminato e $A_1$ gioca contro $B_2$. Se $A_1$ perde, $A_1$ viene eliminato e $A_2$ gioca contro $B_1$. Una continua finché la totalità di una squadra non viene eliminata. Proprietà $(\star)$: esistono valori rigorosamente positivi $a_1, a_2, \ldots, a_m$ per $A$ e $b_1, b_2, \ldots, b_n$ per $B$ in modo tale che, per ogni partita contro la $i$ terza persona della squadra $A$ e la $j$ terza persona della squadra $B$, la prima vittoria con probabilità $\frac{a_i}{a_i + b_j}$ e la seconda vittoria con probabilità $\frac{b_j}{a_i + b_j}$. 5. Solo in questa domanda, supponiamo che $a_i = b_j = 1$ per tutti $i$ e $j$. Indichiamo con$a_{m,n}$ la probabilità che la squadra$A$ vinca il torneo. a. Indicare che $a_{m,n} = a_{n,m}$ e $a_{m,m} = 1$... [la dichiarazione chiede di correlare $a_{m,n}$ e $a_{n,m}$]. b. Qual è il valore di $a_{n,n}$? c. Determinare il valore di $a_{1,n}$ come funzione di $n$. d. Determinare il valore di $a_{2,n}$ come funzione di $n$. 6. Solo in questa domanda ci troviamo nel caso$m = n = 2$. I numeri $a_1, a_2, b_1$ e $b_2$ sono quindi quattro numeri reali rigorosamente positivi. a. Esprimere la probabilità che $A_1$ vinca contro $B_j$ come funzione di $a_1$ e $b_j$. b. Mostrare che la probabilità che la squadra $A$ vinca il torneo è uguale a: $$\frac{a_1^2 a_2 + a_1 a_2(a_2 + a_1)(b_1 + b_2) + a_1^2 b_1 + a_1 a_2 b_1 + a_2^2 b_1 b_2}{(a_1 + b_1)(a_1 + b_2)(a_2 + b_1)(a_2 + b_2)}.$$ Questa probabilità dipende dall'ordine scelto per i giocatori di una determinata squadra per partecipare al torneo?
> 
> 3.4 Una generalizzazione. Abbiamo il torneo regolare descritto nella parte 3.3. Tuttavia, oltre alle partite del torneo, decidiamo di avere ogni membro della squadra $A$ giocare contro ogni membro della squadra $B$ che non ha incontrato durante il torneo, le partite supplementari sempre soddisfa proprietà $(\star)$. Questo dà un totale di corrispondenze $mn$. Codifichiamo i risultati di queste partite mediante un quadro rettangolare di righe $m$ e colonne $n$. Nella cella della riga $i$ e della colonna $j$, posizionamo un simbolo $A$ se $A_i$ ha vinto contro $B_j$, e un simbolo $B$ altrimenti. Nell'esempio del torneo presentato all'inizio della parte 3.3 con $m = n = 3$, si ottiene un quadro $3 \times 3$ le cui voci sono $A$ o $B$, dove ogni simbolo nasconde un $A$ o un $B$ a seconda del risultato della partita aggiunta al torneo. In generale, diciamo che il quadro è un risultato possibile per il team $A$. 7. In questa domanda, supponiamo $m = 2$. Indicare le possibili forme di tutte le tabelle vincenti e mostrare che, per ogni numero intero $n \ge 1$, ci sono esattamente $2^n + n\,2^{n-1}$ tabelle vincenti. 8. In questa domanda, supponiamo ancora $m = 2$. a. Indichiamo con $D$ il prodotto di tutti i termini $(a_i + b_j)$ in quanto $j$ va oltre $\{1, 2, \ldots, n\}$. Quindi $D = (a_1 + b_1)\cdots(a_1 + b_n) \times (a_2 + b_1)\cdots(a_2 + b_n)$. Si può scrivere $D = \prod_{j=1}^{n} (a_1 + b_j)(a_2 + b_j)$. Considerate un tabellone $T$, vincente o meno. Per questo quadro, indichiamo rispettivamente con $x_1$ e $x_2$ il numero di partite vinte da $A_1$ e da $A_2$, e per ogni $j$ con $y_j$ il numero di partite vinte da $B_j$. Infine, si organizza un torneo tra le squadre $A$ e $B$, e indichiamo con $\mathbb{P}_T$ la probabilità che questo tabellone sia il risultato del torneo. Esprimere $\mathbb{P}_T$ in funzione dei numeri $D, a_1, a_2, x_1, x_2, b_1, \ldots, b_n, y_1, y_2, \ldots, y_n$. b. Supponiamo che$T$ sia un tabellone vincente. Indichiamo con $k$ il numero di colonne $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ di $T$ e con $\ell$ il suo numero di colonne $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$. i. giustificare che $T$ non contiene colonna $\left[\begin{smallmatrix} B \\ B \end{smallmatrix}\right]$ e che nessuna colonna $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ è a destra di una colonna $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$. ii. Indichiamo con $T'$ la tabella ottenuta da $T$ nel seguente modo: conserviamo le colonne $\left[\begin{smallmatrix} A \\ A \end{smallmatrix}\right]$ e le lasciamo al loro posto; rimpiazziamo le colonne $k$ $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ e $\ell$ $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$ di $T$ con le colonne $\ell$ $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ seguite dalle colonne $k$ $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$. Mostrare che $T'$ è un quadro vincente. Che cosa si ottiene se si effettua la stessa trasformazione a partire da $T'$? c. Mostrare che la probabilità che la squadra $A$ vinca il torneo non dipende dall'ordine scelto per i giocatori della squadra $A$ per partecipare al torneo. 9. Torniamo al caso generale ($m$ arbitrario). Mostrare che la probabilità che la squadra $A$ vinca il torneo non dipende dall'ordine scelto per i giocatori per partecipare al torneo.

[[src_cgen_2022__Q03]]
