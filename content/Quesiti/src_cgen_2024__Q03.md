---
tipo: quesito
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

# Concours Général des Lycées 2024 — Matematica — Quesito 3

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
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
