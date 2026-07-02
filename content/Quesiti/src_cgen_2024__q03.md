---
title: Concours Général des Lycées 2024 — Matematica — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2024__Q03
parent: src_cgen_2024
competition: Concours Général des Lycées 2024 — Matematica
family: concours_generale
year: '2024'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Sets E(x)={ent(k/x): k in N*} of integer parts; characterize reals alpha,beta
  whose sets have empty intersection (P-cap) or union N* (P-cup); Beatty-type
  theorems via a geometric lattice argument
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_insiemi_funzioni
  - topic_geometria_analitica
methods:
  - method_casework
  - method_coordinate
  - method_estremalita
  - method_induzione
  - method_cassetti
skills:
  - skill_astrazione
  - skill_manipolazione_algebrica
  - skill_ragionamento_geometrico
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2024
  - livello/Concours-Général
  - topic/aritmetica
  - topic/insiemi_funzioni
  - topic/geometria_analitica
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Sets E(x)={ent(k/x): k in N*} of integer parts; characterize reals alpha,beta whose sets have empty intersection (P-cap) or union N* (P-cup); Beatty-type theorems via a geometric lattice argument*

> Problem 3: Intersections and reunions.
> 
> Below, $\mathbb{N}^*$ denotes the set of strictly positive integers. For every real $x$, $\mathrm{ent}(x)$ denotes the largest integer less than or equal to $x$: it is the unique integer $n$ such that $n \le x < n+1$. For example $\mathrm{ent}(2)=2$, $\mathrm{ent}(9{.}99)=9$, $\mathrm{ent}(-2)=-2$, $\mathrm{ent}(-3)=-3$. One also notes $\mathrm{frac}(x)$ the fractional part of $x$, i.e. the real $x - \mathrm{ent}(x)$, which belongs to the interval $[0\,;1[$.
> 
> For all reals $x$ and $y$, $\max\{x\,;y\}$ denotes the larger of the two numbers and $\min\{x\,;y\}$ the smaller. A real number is rational when it equals a fraction $\frac{p}{q}$ where $p$ is a relative integer and $q$ a strictly positive integer; otherwise it is irrational.
> 
> Finally, for every real $x > 0$, one notes $\mathcal{E}(x)$ the set
> $$\mathcal{E}(x) = \left\{ \mathrm{ent}\!\left(\tfrac{k}{x}\right) : k \in \mathbb{N}^* \right\} = \left\{ \mathrm{ent}\!\left(\tfrac{1}{x}\right); \mathrm{ent}\!\left(\tfrac{2}{x}\right); \mathrm{ent}\!\left(\tfrac{3}{x}\right); \mathrm{ent}\!\left(\tfrac{4}{x}\right); \ldots \right\}.$$
> It is the set of integers $k \ge 0$ for which there exists an integer $n \ge 1$ such that $k \le \frac{n}{x} < k+1$.
> 
> This exercise aims to identify the reals $\alpha > 0$ and $\beta > 0$ satisfying one or the other of the following properties:
> - Property $\mathbf{P}_\cap$: the intersection of the two sets $\mathcal{E}(\alpha)$ and $\mathcal{E}(\beta)$ is empty;
> - Property $\mathbf{P}_\cup$: the union of the two sets $\mathcal{E}(\alpha)$ and $\mathcal{E}(\beta)$ equals $\mathbb{N}^*$.
> 
> Part 1: Some particular cases.
> 
> 1. Let $x$ be an arbitrary real.
> a. Demonstrate that $x - 1 < \mathrm{ent}(x) \le x$.
> b. Let $n$ be a relative integer and $y$ a real such that $0 \le y < 1$. Demonstrate that $\mathrm{ent}(n+y) = n$. Express $n$ and $y$ in function of $\mathrm{ent}(x)$ and $\mathrm{frac}(x)$.
> 
> 2. Let $x$ be a strictly positive real. Calculate $\mathcal{E}(x)$:
> a. when $x = 1$;
> b. when $x = 2$.
> 
> 3. Which of the properties $\mathbf{P}_\cap$ and $\mathbf{P}_\cup$ are satisfied:
> a. when $\max\{\alpha\,;\beta\} = 1$?
> b. when $\max\{\alpha\,;\beta\} > 1$?
> 
> 4. Let $x$ be an arbitrary real and $n$ a non-zero natural integer.
> a. Demonstrate, for every integer $k \ge 0$, that $\mathrm{ent}(n\,\mathrm{frac}(kx))$ belongs to the set $\{0\,;1\,;\ldots;n-1\}$.
> b. Demonstrate that there exist two integers $k$ and $\ell$ such that $0 \le k < \ell \le n$ and $\mathrm{ent}(n\,\mathrm{frac}(kx)) = \mathrm{ent}(n\,\mathrm{frac}(\ell x))$.
> c. One sets $m = \ell - k$. Demonstrate that the number $\mathrm{frac}(mx)$ belongs to one of the two intervals $\left[0\,;\tfrac{1}{n}\right[$ or $\left]1-\tfrac{1}{n}\,;1\right[$.
> d. Demonstrate that there exists an integer $\nu \ge 1$ for which $0 \le \mathrm{frac}(\nu x) < \frac{1}{n}$ or $1 - \frac{1}{n} < \mathrm{frac}(\nu x) < 1$.
> e. Demonstrate that there exists an integer $\nu \ge 1$ for which $0 \le \mathrm{frac}(\nu x) < \frac{1}{n}$.
> 
> 5. One supposes in this question that $\max\{\alpha\,;\beta\} < 1$ and that $\alpha$ is equal to a rational $\frac{p}{q}$ where $p$ and $q$ are two non-zero natural integers.
> a. Deduce from question 4 that, for every real $\varepsilon > 0$, there exist two non-zero natural integers $k$ and $\ell$ such that $qk \le \frac{\ell}{\beta} < qk + \varepsilon$.
> b. Which of the properties $\mathbf{P}_\cap$ and $\mathbf{P}_\cup$ are satisfied?
> 
> Part 2: Partition.
> 
> The objective of this part is to demonstrate the following result, called theorem A: The properties $\mathbf{P}_\cap$ and $\mathbf{P}_\cup$ are simultaneously satisfied if and only if $\alpha$ and $\beta$ are two irrational numbers such that $\alpha + \beta = 1$.
> 
> 6. One supposes in this question that $\alpha$ and $\beta$ are two irrational numbers such that $\max\{\alpha\,;\beta\} < 1$.
> a. Demonstrate, for every integer $n \ge 1$, that the set $\mathcal{E}(\alpha)$ comprises $\mathrm{ent}(n\alpha)$ elements between $1$ and $n-1$.
> b. Demonstrate, for every integer $n \ge 1$, that if $\alpha + \beta = 1$, the property $\mathbf{P}_\cap$ is not satisfied.
> c. Demonstrate also that, if $\alpha + \beta < 1$, the property $\mathbf{P}_\cup$ is not satisfied.
> 
> 7. One supposes in this question that $\alpha$ and $\beta$ are two irrational numbers such that $\alpha + \beta = 1$.
> a. Demonstrate, for every integer $n \ge 1$, that $\mathrm{ent}(n\alpha) + \mathrm{ent}(n\beta) = n - 1$.
> 
> 8. Demonstrate theorem A.
> 
> Part 3: Empty intersection.
> 
> The objective of this part is to demonstrate the following result, called theorem B: The property $\mathbf{P}_\cap$ is satisfied if and only if $\alpha$ and $\beta$ are two irrationals for which there exist two integers $u \ge 1$ and $v \ge 1$ such that $u\alpha + v\beta = 1$.
> 
> 9. Demonstrate that, if $\alpha$ and $\beta$ are irrationals and if there exist two integers $u \ge 1$ and $v \ge 1$ such that $u\alpha + v\beta = 1$, then the property $\mathbf{P}_\cap$ is indeed satisfied.
> 
> One supposes henceforth, for questions 10 to 18, that $\alpha$ and $\beta$ are two irrational reals for which the property $\mathbf{P}_\cap$ is satisfied.
> 
> 10. Demonstrate that $\max\{\alpha\,;\beta\} < 1$.
> 
> One now adopts a geometric viewpoint on the problem. One identifies each point of the plane with its coordinates, and each rectangle with a Cartesian product of intervals; thus, when $I$ and $J$ are two intervals, $I \times J$ is the set of points of coordinates $(x\,;y)$ for which $x \in I$ and $y \in J$. One notes $O$ the origin of the plane, and $\Omega$ the set of points of the plane of coordinates $(kp + n\,;\ldots)$ associated with integers, as defined in the source (notation $kp+n$).
> 
> 11. a. Let $A$ and $B$ be two points of $\Omega$. Demonstrate that the translation of vector $\overrightarrow{AB}$ transforms every point of $\Omega$ into a point of $\Omega$.
> b. Let $\Gamma$ be a relative integer. Demonstrate that the central symmetry of center $O$, and the homothety of center $O$ and ratio $\Gamma$ (i.e. the transformation sending every point $X$ to the point $Y$ such that $\overrightarrow{OY} = \Gamma\,\overrightarrow{OX}$), transform each point of $\Omega$ into a point of $\Omega$.
> 
> 12. Demonstrate that, for each point $P$ of $\Omega$ of coordinates $(x\,;y)$, there exists a unique triple of relative integers $(k\,;m\,;n)$ for which $x = kp + m$ and $y = kp + n$; one will note henceforth $J(P)$ the integer $k$ thus defined.
> 
> 13. a. Demonstrate that $\Omega$ is formed of the integers $k \ge 0$ for which $0 < \mathrm{frac}(k\alpha) + \mathrm{frac}(k\beta) < 1$.
> b. Deduce that the rectangle $[0\,;\alpha[ \,\times\, [0\,;\beta[$ contains no point $X$ of $\Omega$ such that $J(X) = 0$.
> c. Let $x$ be a strictly positive real. Demonstrate that the rectangle $]-x\,;x[ \,\times\, ]-x\,;x[$ contains no point $X$ of $\Omega$ such that $J(X) = 0$.
> d. Deduce that the rectangle $[0\,;\alpha[ \,\times\, [0\,;\beta[$ contains no point of $\Omega$.
> 
> 14. a. Let $x$ be a real such that $0 < x < \min\{\alpha\,;\beta\}$. Demonstrate that the rectangle $]0\,;x[ \,\times\, ]-x\,;x[$ contains no point of $\Omega$. One notes $Q$ a point thus obtained when $x = \frac{\min\{\alpha\,;\beta\}}{2}$, and $(s\,;t)$ its coordinates. For every point $P$ of coordinates $(x\,;y)$, one notes henceforth $g(P)$ the quantity $\frac{x}{s} + \frac{y}{t}$.
> b. Demonstrate that, for every relative integer $k$, the rectangle $[ks\,;(k+2)s[ \,\times\, [(k-2)t\,;(k+2)t[$ contains no point of $\Omega$.
> c. Demonstrate that $Q$ is the unique point $P$ such that $1 < g(P) < 2$ belonging to the line $(OQ)$.
> d. Demonstrate that every point $P$ of $\Omega$ such that $g(P) \le 2$ belongs to the line $(OQ)$.
> e. Demonstrate that every point $P$ of $\Omega$ such that $g(P) > 0$ verifies $g(P) \ge 1$.
> f. Demonstrate the existence of a point of $\Omega$ as described, related to the rectangle $]0\,;\alpha[ \,\times\, [0\,;\beta[$.
> 
> 15. Let $x$ be a strictly positive real, and $\mathcal{H}$ a set of reals containing $1$, not equal to the interval $]0\,;x[$, such that for all reals $y$ and $z$ in $\mathcal{H}$, $y - z \in \mathcal{H}$. Demonstrate that $\mathcal{H} = \{kx : k \in \mathbb{Z}\}$, i.e. that $\mathcal{H}$ is the set of reals $kx$ where $k$ is a relative integer.
> 
> 16. One notes $\Lambda$ the set of reals $x$ for which the point of coordinates $(x\,;0)$ belongs to a line parallel to $(OQ)$ passing through a point $P$ of $\Omega$.
> a. Demonstrate that $\Lambda$ contains an element of the interval $]0\,;1[$.
> b. Deduce that $\Lambda = \{k\delta : k \in \mathbb{Z}\}$ for some real $\delta > 0$.
> 
> 17. One notes $\Gamma$ the set of reals $f(P)$ obtained when $P$ is a point of $\Omega$ situated on the line $(OQ)$.
> a. Demonstrate that the set $\Gamma$ contains at least one non-zero natural integer.
> b. Let $\gamma$ be the smallest non-zero natural integer such that $\gamma \in \Gamma$. Demonstrate that $\Gamma = \{k\gamma : k \in \mathbb{Z}\}$.
> c. Deduce that the fraction $-\frac{x}{y}$ is a rational number.
> 
> 18. Finally, one notes $\frac{u}{v}$ the number $-\frac{x}{y}$ in irreducible fraction form, then one notes $W$ the set of reals $f$ such that $\frac{f}{v} \in \Lambda$.
> a. Demonstrate that $u$ and $v$ belong to $\Lambda$.
> b. Deduce that $W = \Lambda$.
> 
> 19. Demonstrate theorem B.
> 
> Part 4: Union and multiple intersections.
> 
> 20. Demonstrate that the property $\mathbf{P}_\cup$ is satisfied if and only if $\max\{\alpha\,;\beta\} = 1$, or $\alpha$ and $\beta$ are two irrationals strictly smaller than $1$ for which there exist two integers $u \ge 1$ and $v \ge 1$ such that $u(1-\alpha) + v(1-\beta) = 1$.
> 
> 21. Do there exist three strictly positive reals $\alpha$, $\beta$ and $\gamma$ for which the sets $\mathcal{E}(\alpha)$, $\mathcal{E}(\beta)$ and $\mathcal{E}(\gamma)$ are pairwise disjoint?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_casework|Casework]], [[method_coordinate|Coordinate]], [[method_estremalita|Estremalità]], [[method_induzione|Induzione]], [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1c1cSoVwqMLgL0IF4BNA5JRS_DbCgZRxy/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*insiemi E(x)={ent(k/x): k in N*} di parti integri; caratterizzare i reali alfa,beta i cui insiemi hanno intersezione vuota (P-cap) o unione N* (P-cup); teoremi di tipo Beatty tramite un argomento di reticola geometrica*

> Problema 3: intersezioni e riunioni.
> 
> In seguito $\mathbb{N}^*$ indica l'insieme di integri rigorosamente positivi. Per ogni $x$ reale, $\mathrm{ent}(x)$ indica il numero intero più grande inferiore o uguale a $x$: è il numero intero unico $n$ tale che $n \le x < n+1$. Per esempio $\mathrm{ent}(2)=2$, $\mathrm{ent}(9{.}99)=9$, $\mathrm{ent}(-2)=-2$, $\mathrm{ent}(-3)=-3$. Si nota anche $\mathrm{frac}(x)$ la parte frazionaria di $x$, cioè il $x - \mathrm{ent}(x)$ reale, che appartiene all'intervallo $[0\,;1[$.
> 
> Per tutti i numeri reali $x$ e $y$, $\max\{x\,;y\}$ indica il più grande dei due numeri e $\min\{x\,;y\}$ il più piccolo. Un numero reale è razionale quando è uguale a una frazione $\frac{p}{q}$ dove $p$ è un intero relativo e $q$ un intero strettamente positivo; altrimenti è irrazionale.
> 
> Infine, per ogni reale $x > 0$, si nota $\mathcal{E}(x)$ l'insieme $$\mathcal{E}(x) = \left\{ \mathrm{ent}\!\left(\tfrac{k}{x}\right) : k \in \mathbb{N}^* \right\} = \left\{ \mathrm{ent}\!\left(\tfrac{1}{x}\right); \mathrm{ent}\!\left(\tfrac{2}{x}\right); \mathrm{ent}\!\left(\tfrac{3}{x}\right); \mathrm{ent}\!\left(\tfrac{4}{x}\right); \ldots \right\}.$$ È l'insieme di integri $k \ge 0$ per il quale esiste un intero $n \ge 1$ tale che $k \le \frac{n}{x} < k+1$.
> 
> L'esercizio mira a identificare i reali $\alpha > 0$ e $\beta > 0$ che soddisfano una o l'altra delle seguenti proprietà: - Proprietà $\mathbf{P}_\cap$: l'intersezione dei due set $\mathcal{E}(\alpha)$ e $\mathcal{E}(\beta)$ è vuota; - Proprietà $\mathbf{P}_\cup$: l'unione dei due set $\mathcal{E}(\alpha)$ e $\mathcal{E}(\beta)$ è uguale a $\mathbb{N}^*$.
> 
> Parte 1: Alcuni casi particolari.
> 
> 1. Lasciate che $x$ sia un reale arbitrario. a. Dimostra che $x - 1 < \mathrm{ent}(x) \le x$. b. Che $n$ sia un intero relativo e $y$ un reale tale che $0 \le y < 1$. Dimostra che $\mathrm{ent}(n+y) = n$. Esprimere $n$ e $y$ in funzione di $\mathrm{ent}(x)$ e $\mathrm{frac}(x)$.
> 
> 2. Che il $x$ sia un reale rigorosamente positivo. Calcolare $\mathcal{E}(x)$: a. quando $x = 1$; b. quando $x = 2$.
> 
> 3. Quali delle proprietà $\mathbf{P}_\cap$ e $\mathbf{P}_\cup$ sono soddisfatte: a. quando $\max\{\alpha\,;\beta\} = 1$? b. quando $\max\{\alpha\,;\beta\} > 1$?
> 
> 4. Che $x$ sia un reale arbitrario e $n$ un intero naturale non zero. a. Dimostra, per ogni numero intero $k \ge 0$, che $\mathrm{ent}(n\,\mathrm{frac}(kx))$ appartiene al set $\{0\,;1\,;\ldots;n-1\}$. b. Dimostrare che esistono due integri $k$ e $\ell$ come $0 \le k < \ell \le n$ e $\mathrm{ent}(n\,\mathrm{frac}(kx)) = \mathrm{ent}(n\,\mathrm{frac}(\ell x))$. c. Un set $m = \ell - k$. Dimostra che il numero $\mathrm{frac}(mx)$ appartiene a uno dei due intervalli $\left[0\,;\tfrac{1}{n}\right[$ o $\left]1-\tfrac{1}{n}\,;1\right[$. d. Dimostrare che esiste un numero intero $\nu \ge 1$ per il quale $0 \le \mathrm{frac}(\nu x) < \frac{1}{n}$ o $1 - \frac{1}{n} < \mathrm{frac}(\nu x) < 1$. e. Dimostra che esiste un numero intero $\nu \ge 1$ per il quale $0 \le \mathrm{frac}(\nu x) < \frac{1}{n}$.
> 
> 5. In questa domanda si suppone che $\max\{\alpha\,;\beta\} < 1$ e $\alpha$ sia uguale a un $\frac{p}{q}$ razionale dove $p$ e $q$ sono due integri naturali non zero. a. Dalla domanda 4 si deduce che, per ogni $\varepsilon > 0$ reale, esistono due integri naturali non zero $k$ e $\ell$ tali che $qk \le \frac{\ell}{\beta} < qk + \varepsilon$. b. Quali delle proprietà $\mathbf{P}_\cap$ e $\mathbf{P}_\cup$ sono soddisfatte?
> 
> Parte 2: Partizione.
> 
> L'obiettivo di questa parte è dimostrare il seguente risultato, chiamato teorema A: Le proprietà $\mathbf{P}_\cap$ e $\mathbf{P}_\cup$ sono soddisfatte simultaneamente se e solo se $\alpha$ e $\beta$ sono due numeri irrazionali come $\alpha + \beta = 1$.
> 
> 6. In questa domanda si suppone che $\alpha$ e $\beta$ siano due numeri irrazionali come $\max\{\alpha\,;\beta\} < 1$. a. Dimostra, per ogni numero intero $n \ge 1$, che il set $\mathcal{E}(\alpha)$ comprende elementi $\mathrm{ent}(n\alpha)$ tra $1$ e $n-1$. b. Dimostra, per ogni numero intero $n \ge 1$, che se $\alpha + \beta = 1$, la proprietà $\mathbf{P}_\cap$ non è soddisfatta. c. Dimostra inoltre che, se $\alpha + \beta < 1$, la proprietà $\mathbf{P}_\cup$ non è soddisfatta.
> 
> 7. In questa domanda si suppone che $\alpha$ e $\beta$ siano due numeri irrazionali come $\alpha + \beta = 1$. a. Indicare, per ogni numero intero $n \ge 1$, che $\mathrm{ent}(n\alpha) + \mathrm{ent}(n\beta) = n - 1$.
> 
> 8. Dimostra il teorema A.
> 
> Parte 3: Intersezione vuota.
> 
> L'obiettivo di questa parte è dimostrare il seguente risultato, chiamato teorema B: La proprietà $\mathbf{P}_\cap$ è soddisfatta se e solo se $\alpha$ e $\beta$ sono due numeri irrazionali per i quali esistono due integri $u \ge 1$ e $v \ge 1$ tali che $u\alpha + v\beta = 1$.
> 
> 9. Dimostrare che, se $\alpha$ e $\beta$ sono irrazionali e se esistono due integri $u \ge 1$ e $v \ge 1$ in modo tale che $u\alpha + v\beta = 1$, allora la proprietà $\mathbf{P}_\cap$ è effettivamente soddisfatta.
> 
> Si suppone, da ora in poi, per le domande da 10 a 18, che $\alpha$ e $\beta$ siano due realità irrazionali per le quali è soddisfatta la proprietà $\mathbf{P}_\cap$.
> 
> 10. Dimostra che $\max\{\alpha\,;\beta\} < 1$.
> 
> Si adopta ora un punto di vista geometrico sul problema. Si identifica ogni punto del piano con le sue coordinate, e ogni rettangolo con un prodotto cartesiano di intervalli; quindi, quando $I$ e $J$ sono due intervalli, $I \times J$ è l'insieme dei punti di coordinate $(x\,;y)$ per i quali $x \in I$ e $y \in J$. Una nota $O$ l'origine del piano, e $\Omega$ l'insieme di punti del piano delle coordinate $(kp + n\,;\ldots)$ associate ad integri, come definito nella fonte (notazione $kp+n$).
> 
> 11. a. I punti $A$ e $B$ sono due punti di $\Omega$. Dimostra che la traduzione del vettore $\overrightarrow{AB}$ trasforma ogni punto di $\Omega$ in un punto di $\Omega$. b. Il $\Gamma$ è un numero intero relativo. Dimostrare che la simmetria centrale del centro $O$ e l'omogeneità del centro $O$ e il rapporto $\Gamma$ (cioè la trasformazione che trasmette ogni punto $X$ al punto $Y$ in modo tale che $\overrightarrow{OY} = \Gamma\,\overrightarrow{OX}$), trasforma ogni punto di $\Omega$ in un punto di $\Omega$.
> 
> 12. Dimostrare che, per ogni punto $P$ delle coordinate $\Omega$, esiste un triplo unico di integri relativi $(k\,;m\,;n)$ per i quali $x = kp + m$ e $y = kp + n$; da ora in poi si noterà $J(P)$ il numero intero $k$ così definito.
> 
> 13. a. Dimostrare che $\Omega$ è formato dai numeri interi $k \ge 0$ per i quali $0 < \mathrm{frac}(k\alpha) + \mathrm{frac}(k\beta) < 1$. b. Deduzione che il rettangolo $[0\,;\alpha[ \,\times\, [0\,;\beta[$ non contiene un punto $X$ di $\Omega$ tale da $J(X) = 0$. c. Che il $x$ sia un reale rigorosamente positivo. Dimostrare che il rettangolo $]-x\,;x[ \,\times\, ]-x\,;x[$ non contiene un punto $X$ di $\Omega$ tale da $J(X) = 0$. d. Deduzione che il rettangolo $[0\,;\alpha[ \,\times\, [0\,;\beta[$ non contiene alcun punto di $\Omega$.
> 
> 14. a. Che il $x$ sia un reale tale che $0 < x < \min\{\alpha\,;\beta\}$. Dimostrare che il rettangolo $]0\,;x[ \,\times\, ]-x\,;x[$ non contiene alcun punto di $\Omega$. Si nota $Q$ un punto così ottenuto quando $x = \frac{\min\{\alpha\,;\beta\}}{2}$ e $(s\,;t)$ le sue coordinate. Per ogni punto $P$ delle coordinate $(x\,;y)$, da ora in poi $g(P)$ si nota la quantità $\frac{x}{s} + \frac{y}{t}$. b. Dimostra che per ogni numero intero relativo $k$, il rettangolo $[ks\,;(k+2)s[ \,\times\, [(k-2)t\,;(k+2)t[$ non contiene alcun punto di $\Omega$. c. Dimostrare che $Q$ è il punto unico $P$ tale che $1 < g(P) < 2$ appartenga alla riga $(OQ)$. d. Dimostrare che ogni punto $P$ di $\Omega$ tale che $g(P) \le 2$ appartiene alla riga $(OQ)$. e. Dimostra che ogni punto $P$ di $\Omega$ in modo tale che $g(P) > 0$ confermi $g(P) \ge 1$. f. Dimostrare l'esistenza di un punto di $\Omega$ come descritto, relativo al rettangolo $]0\,;\alpha[ \,\times\, [0\,;\beta[$.
> 
> 15. Che $x$ sia un reale strettamente positivo e $\mathcal{H}$ un insieme di reali contenenti $1$, non uguale all'intervallo $]0\,;x[$, in modo tale che per tutti i reali $y$ e $z$ in $\mathcal{H}$, $y - z \in \mathcal{H}$. Dimostrare che $\mathcal{H} = \{kx : k \in \mathbb{Z}\}$, ovvero che $\mathcal{H}$ è l'insieme dei numeri reali $kx$ in cui $k$ è un numero intero relativo.
> 
> 16. Si nota $\Lambda$ l'insieme di valori reali $x$ per i quali il punto di coordinate $(x\,;0)$ appartiene a una linea parallela a $(OQ)$ che attraversa un punto $P$ di $\Omega$. a. Dimostra che $\Lambda$ contiene un elemento dell'intervallo $]0\,;1[$. b. Riduzione di $\Lambda = \{k\delta : k \in \mathbb{Z}\}$ per alcuni $\delta > 0$ reali.
> 
> 17. Una nota $\Gamma$ l'insieme dei valori $f(P)$ ottenuti quando $P$ è un punto di $\Omega$ situato sulla linea $(OQ)$. a. Dimostrare che l'insieme $\Gamma$ contiene almeno un intero naturale non zero. b. $\gamma$ sia il numero intero naturale non zero più piccolo tale che $\gamma \in \Gamma$. Dimostra che $\Gamma = \{k\gamma : k \in \mathbb{Z}\}$. c. Deduci che la frazione $-\frac{x}{y}$ è un numero razionale.
> 
> 18. Infine, si nota $\frac{u}{v}$ il numero $-\frac{x}{y}$ in forma di frazione irriducibile, poi si nota $W$ l'insieme dei valori $f$ reali tali da $\frac{f}{v} \in \Lambda$. a. dimostrare che $u$ e $v$ appartengono a $\Lambda$. b. Riduzione di $W = \Lambda$.
> 
> 19. Dimostra il teorema B.
> 
> Parte 4: Unione e intersezioni multiple.
> 
> 20. Dimostrare che la proprietà $\mathbf{P}_\cup$ è soddisfatta se e solo se $\max\{\alpha\,;\beta\} = 1$, o $\alpha$ e $\beta$ sono due numeri irrazionali strettamente inferiori a $1$ per i quali esistono due integri $u \ge 1$ e $v \ge 1$ tali da $u(1-\alpha) + v(1-\beta) = 1$.
> 
> 21. Esistono tre valori rigorosamente positivi $\alpha$, $\beta$ e $\gamma$ per i quali gli insiemi $\mathcal{E}(\alpha)$, $\mathcal{E}(\beta)$ e $\mathcal{E}(\gamma)$ sono disconnessi in coppia?

[[src_cgen_2024__Q03]]
