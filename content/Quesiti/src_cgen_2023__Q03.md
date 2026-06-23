---
title: Concours Général des Lycées 2023 — Matematica — Quesito 3
tipo: quesito
quesito_id: quesito_src_cgen_2023__Q03
parent: src_cgen_2023
competition: Concours Général des Lycées 2023 — Matematica
family: concours_generale
year: '2023'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  In an orthonormal frame, study polynomials whose graph passes through all
  vertices of a regular k-gon centered at O: case of equilateral triangles,
  squares centered at O, the lower bound d >= k-1, and the sufficiency of every
  d >= k-1 (via Chebyshev polynomials).
qa_score: '2'
topics:
  - topic_geometria_analitica
  - topic_algebra
  - topic_trigonometria
  - topic_geometria_piana
methods:
  - method_coordinate
  - method_trigonometria
  - method_simmetria
  - method_ricorsione
  - method_induzione
skills:
  - skill_ragionamento_geometrico
  - skill_manipolazione_algebrica
  - skill_astrazione
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2023
  - livello/Concours-Général
  - topic/geometria_analitica
  - topic/algebra
  - topic/trigonometria
  - topic/geometria_piana
  - gara/individuale
  - qa/da-verificare
---

*In an orthonormal frame, study polynomials whose graph passes through all vertices of a regular k-gon centered at O: case of equilateral triangles, squares centered at O, the lower bound d >= k-1, and the sufficiency of every d >= k-1 (via Chebyshev polynomials).*

> Problem 3: Polynomials and regular polygons.
> 
> The plane is equipped with an orthonormal frame $\mathcal{R} = (O; I, J)$. Let $k$ be an integer with $k \ge 3$. The points $M_1, M_2, \dots, M_k$ are the vertices of a regular polygon with center $O$ such that: their abscissas are pairwise distinct; the points appear in trigonometric order (counter-clockwise around $O$); and $M_1 M_2 = M_2 M_3 = \cdots = M_{k-1} M_k = M_k M_1$ (it is a regular polygon; for $k = 4$ it is a square).
> 
> One says that a function $P$ is a polynomial of degree $d$ if there exist reals $a_0, a_1, \dots, a_d$ with $a_d \ne 0$ such that $P(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0$ for every real $x$. One also says that such a polynomial $P$ has no more than $d$ real solutions. The function $P : x \mapsto 0$ is called the zero polynomial. Finally, given a polynomial $P$ (zero or not), one denotes by $\mathscr{C}_P$ the graph (representative curve) of $P$ in the frame $\mathcal{R}$.
> 
> 3.1 Equilateral triangles.
> 
> 1. Let $P$ be a polynomial of degree 1. Does there exist an equilateral triangle whose vertices belong to $\mathscr{C}_P$?
> 
> 2. Consider the points
> $$A\!\left(1; \frac{\sqrt{3}}{3}\right), \quad B\!\left(-1; \frac{\sqrt{3}}{3}\right) \quad \text{and} \quad C\!\left(0; -\frac{2\sqrt{3}}{3}\right).$$
>   a. Show that $A$, $B$, $C$ form an equilateral triangle with center $O$.
>   b. Show that $A$, $B$, $C$ belong to the graph of the polynomial $Q : x \mapsto \frac{\sqrt{3}}{3}\left(3x^2 - 2\right)$.
>   c. Show that $A$, $B$, $C$ belong to the graph of the polynomial $R : x \mapsto \frac{\sqrt{3}}{3}\left(3x^2 - 2\right) + x\left(x^2 - 1\right)$.
>   d. Show that, for every integer $d \ge 2$, there exists a polynomial of degree $d$ whose graph contains the points $A$, $B$, $C$.
> 
> 3.2 Squares with center $O$.
> 
> In what follows, consider a polynomial $P$ and a square $ABCD$ with center $O$ whose four vertices belong to $\mathscr{C}_P$.
> 
> 3. a. Express the coordinates of the points $B$, $C$, $D$ as functions of those of $A$. Show that the abscissas of $A$, $B$, $C$, $D$ are pairwise distinct.
>   b. Show that $P$ is non-zero and that its degree is at least 2.
> 
> 4. Suppose in this question that there exist reals $a$, $b$, $c$ such that $P : x \mapsto x^3 + a x^2 + b x + c$.
>   a. Show that $a = 0$ and $c = 0$.
>   b. Show that the respective abscissas of $A$, $B$, $C$, $D$ are solutions of the equation $P(P(x)) + x = 0$.
>   c. Show that the polynomial $Q : x \mapsto x^9 + 3b x^7 + 3b^2 x^5 + b(b^2 + 1)x^3 + b^2 x + b^2 + 1$ admits at least two distinct strictly positive real roots.
>   d. Show that $b < 0$.
>   e. Suppose there exist reals $\alpha$ and $\beta$ with $\alpha < \beta$ such that $Q(x) = (x - \alpha)^2 (x - \beta)^2$ for every real $x$. Show that then $b = -\sqrt{8}$, and determine the values of $\alpha$ and $\beta$. [Note: the exact form of the factorization and constant are partly illegible; this reading is uncertain.]
> 
> 5. a. Show that there exists a polynomial $P$ of degree 3 and a square $ABCD$ with center $O$ whose vertices belong to $\mathscr{C}_P$.
>   b. For which integers $d$ does there exist a polynomial of degree $d$ whose graph contains the points $A$, $B$, $C$, $D$ as in question 5.a?
> 
> 3.3 Where one proves that $d \ge k - 1$.
> 
> Let $M_1, \dots, M_k$ be the vertices of a regular polygon with center $O$. Suppose in this question that there exists a polynomial $P$, of degree $d$, whose graph contains the vertices $M_1, \dots, M_k$. One wishes to prove that $d \ge k - 1$. For every $i$, let $(x_i; y_i)$ be the coordinates of $M_i$ in the frame $\mathcal{R}$.
> 
> 6. a. Why may one assume that the abscissa $x_1$ is less than or equal to $x_2, x_3, \dots, x_k$ and that the $y_i$ are non-zero?
>   b. Show that the abscissas $x_i$ are pairwise distinct and the ordinates $y_i$ are non-zero.
>   c. Show that there exist a real $R > 0$ and a real $\theta$ in the interval $[0, \pi/4)$ such that $x_1 = -R\cos(\theta)$ and $y_1 = -R\sin(\theta)$.
>   d. Show that $x_1 < x_2 < x_3 < \cdots < x_k$. [Note: the precise ordering chain is partly illegible.]
>   e. Show that $P$ admits a root on each of the $k - 1$ intervals $[x_1, x_2], [x_2, x_3], \dots, [x_{k-1}, x_k]$. [Note: the precise list of intervals is partly illegible; this reading is uncertain.]
>   f. Conclude that $d \ge k - 1$.
> 
> 3.4 Where one proves that every $d \ge k - 1$ works.
> 
> Suppose in this question that the abscissas $x_i$ are pairwise distinct, and one wants to prove that, for every integer $d \ge k - 1$, there exists a polynomial of degree $d$ whose graph contains the points $M_1, M_2, \dots, M_k$.
> 
> 7. Let $a$ and $b$ be two reals. In the frame $\mathcal{R}$, consider the points $A(\cos(a), \sin(a))$, $B(\cos(a+b), \sin(a+b))$ and $C(-\sin(a), \cos(a))$.
>   a. Show that the frame $\mathcal{R}' = (O; \overrightarrow{OA}, \overrightarrow{OC})$ is orthonormal.
>   b. What are the coordinates of the point $B$ in the frame $\mathcal{R}'$?
>   c. Deduce that $\cos(a + b) = \cos(a)\cos(b) - \sin(a)\sin(b)$ and $\sin(a + b) = \sin(a)\cos(b) + \cos(a)\sin(b)$.
> 
> 8. Consider the sequence of polynomials defined by $T_0 : x \mapsto 1$, $T_1 : x \mapsto x$, and $T_{n+2} : x \mapsto 2x\, T_{n+1}(x) - T_n(x)$ for every integer $n \ge 0$.
>   a. Show that $T_n(\cos(\theta)) = \cos(n\theta)$ for every integer $n \ge 0$ and every real $\theta$.
>   b. Let $\theta$ be a real, and let $\ell$ and $j$ be two integers. Show that $T_{\ell-1}\!\left(\cos\!\left(\theta + \frac{2j\pi}{\ell}\right)\right) = \cos(\ell\theta)\cos\!\left(\theta + \frac{2j\pi}{\ell}\right) + \sin(\ell\theta)\sin\!\left(\theta + \frac{2j\pi}{\ell}\right)$. [Note: this identity is partly illegible in the source; the reading is uncertain.]
>   c. Show that, for every integer $d \ge k - 1$, there exists a polynomial of degree $d$ whose graph contains the points $M_1, M_2, \dots, M_k$.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_algebra|Algebra]], [[topic_trigonometria|Trigonometria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]], [[method_simmetria|Simmetria]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1UEmDklBRoLwyCF47wsu7dNuzbiS9gQhj/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
