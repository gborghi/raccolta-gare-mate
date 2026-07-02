---
title: Concours Général des Lycées 2022 — Matematica — Quesito 2
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2022__Q02
parent: src_cgen_2022
competition: Concours Général des Lycées 2022 — Matematica
family: concours_generale
year: '2022'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  Lattice path M_k with steps i or j; alignment of three or more points;
  Stern-Brocot / Farey-style tight fractions, naive mediants, principal
  intervals, and pigeonhole to force n aligned points
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_geometria_analitica
  - topic_combinatoria
methods:
  - method_cassetti
  - method_coordinate
  - method_estremalita
  - method_conteggio
skills:
  - skill_ragionamento_geometrico
  - skill_manipolazione_algebrica
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2022
  - livello/Concours-Général
  - topic/aritmetica
  - topic/geometria_analitica
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---
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
