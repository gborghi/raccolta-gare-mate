---
tipo: quesito
quesito_id: quesito_src_cgen_2025__Q01
parent: src_cgen_2025
competition: Concours Général des Lycées 2025 — Matematica
family: concours_generale
year: '2025'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  Addition on a parabola: an operation defined geometrically via
  secants/tangents to y=x^2 meeting the line y=-1; associativity, then a
  sequence of points and its convergence via heights of rationals.
qa_score: '5'
topics:
  - topic_geometria_analitica
  - topic_aritmetica
  - topic_algebra
methods:
  - method_coordinate
  - method_fattorizzazione
  - method_congruenze
  - method_telescoping
skills:
  - skill_ragionamento_geometrico
  - skill_manipolazione_algebrica
  - skill_astrazione
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2025
  - livello/Concours-Général
  - topic/geometria_analitica
  - topic/aritmetica
  - topic/algebra
  - gara/individuale
---

# Concours Général des Lycées 2025 — Matematica — Quesito 1

*Addition on a parabola: an operation defined geometrically via secants/tangents to y=x^2 meeting the line y=-1; associativity, then a sequence of points and its convergence via heights of rationals.*

> Exercise 1: Addition on a parabola.
> 
> The plane is endowed with an orthonormal coordinate system $(O, \vec{\imath}, \vec{\jmath})$. For every point $M$ of the plane we denote its coordinates by $(x_M\,;\,y_M)$.
> 
> Let $\mathscr{P}$ be the parabola of equation $y = x^2$ and $\Delta$ the line of equation $y = -1$.
> 
> For all points $A$ and $B$ of $\mathscr{P}$ such that $y_A \ne y_B$, we denote by $A \oplus B$ the point of $\mathscr{P}$ whose abscissa is that of the intersection point of the line $(AB)$ with $\Delta$.
> 
> \textbf{Part 1: properties of $\oplus$.}
> 
> 1. Let $A$ and $B$ be two points of $\mathscr{P}$ such that $y_A \ne y_B$. Express $x_{A\oplus B}$ in terms of $x_A$ and $x_B$.
> 
> 2. Let $A$, $B$, $C$ be three points of $\mathscr{P}$. Suppose that
> $$y_A \ne y_B, \quad y_{A\oplus B} \ne y_C, \quad y_B \ne y_C, \quad y_A \ne y_{B\oplus C}.$$
> Show that the points $(A\oplus B)\oplus C$ and $A\oplus(B\oplus C)$ coincide (are confounded).
> 
> For every point $A$ of $\mathscr{P}$ distinct from the point $O$ (of coordinates $(0\,;\,0)$), we denote by $A \oplus A$ the point of $\mathscr{P}$ whose abscissa is that of the intersection point of the tangent to $\mathscr{P}$ at $A$ with $\Delta$.
> 
> 3. Let $A$ be a point of $\mathscr{P}$ distinct from $O$.
>    a. Express $x_{A\oplus A}$ in terms of $x_A$.
>    b. Let $B$ be a point of $\mathscr{P}$ such that
> $$y_{A\oplus A} \ne y_B, \quad y_A \ne y_B, \quad y_A \ne y_{A\oplus B}.$$
> Show that the points $(A\oplus A)\oplus B$ and $A\oplus(A\oplus B)$ coincide.
> 
> \textbf{Part 2: study of a sequence of points.}
> 
> Let $A$ be a point of $\mathscr{P}$. We associate to it a sequence of points $(A_n)$ defined by $A_0 = A$ and the recurrence relation:
> $$\text{for every integer } n \ge 0, \quad A_{n+1} = \begin{cases} A_n \oplus A_n, & \text{if } A_n \ne 0, \\ 0, & \text{otherwise.} \end{cases}$$
> To lighten the notation, we set $x_n = x_{A_n}$.
> 
> 4. Suppose, in this question, that $A$ is the point of coordinates $(3\,;\,9)$.
>    a. Show that, for every $n$ in $\mathbb{N}$, one has $x_n \ne 0$.
>    b. Show that the sequence $(x_n)$ does not converge.
> 
> One recalls that, for every $x$ in $\mathbb{Q}^*$, there exists a unique pair of integers $(a,b)$ such that $b \ge 1$, $\mathrm{PGCD}(a,b) = 1$ and $x = \frac{a}{b}$. One then denotes by $H(x)$ the largest of the integers $|a|$ and $|b|$, that is $H(x) = \max(|a|, |b|)$. For example $H\!\left(\frac{-4}{3}\right) = 4$. One agrees moreover that $H(0) = 1$.
> 
> For every point $P$ of the parabola $\mathscr{P}$ such that $x_P$ belongs to $\mathbb{Q}$, one sets
> $$h(P) = \ln(H(x_P)).$$
> 
> 5. Show that, for every $c$ in $\mathbb{N}^*$, the set $E(c) = \{P \in \mathscr{P},\ x_P \in \mathbb{Q} \text{ and } h(P) \le c\}$ is finite.
> 
> 6. Let $(a,b) \in \mathbb{Z}^* \times \mathbb{N}^*$. Show that, if $\mathrm{PGCD}(a,b) = 1$, then $\mathrm{PGCD}(a^2 - b^2,\, ab) = 1$.
> 
> 7. Show that there exist two reals $m$ and $M$ such that, for every point $P$ of the parabola $\mathscr{P}$ such that $x_P$ belongs to $\mathbb{Q}^*$, one has
> $$m + h(P\oplus P) \le 2h(P) \le h(P\oplus P) + M.$$
> 
> 8. Let $(u_n)$ be a real sequence. One sets
> $$v_0 = 0 \text{ and, for every integer } n \ge 1, \quad v_n = \sum_{k=0}^{n-1} |u_{k+1} - u_k|.$$
> One supposes that the sequence $(v_n)$ is bounded above (majorée) and one wishes to show that the sequence $(u_n)$ converges.
>    a. Show that the sequence $(v_n)$ converges.
>    b. Show that for every natural integer $n$ one has $0 \le u_{n+1} - u_n + |u_{n+1} - u_n| \le 2|u_{n+1} - u_n|$.
>    c. Deduce that the sequence $(u_n + v_n)$ converges.
>    d. Conclude.
> 
> 9. Let $A$ again be the point of coordinates $(3\,;\,9)$ and let $(A_n)$ be the recurrent sequence associated to $A$. For every natural integer $n$, one sets $t_n = \frac{h(A_n)}{2^n}$. Show that the sequence $(t_n)$ converges.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]], [[method_telescoping|Telescoping]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]], [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** apri PDF
