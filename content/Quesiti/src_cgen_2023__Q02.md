---
tipo: quesito
quesito_id: quesito_src_cgen_2023__Q02
parent: src_cgen_2023
competition: Concours Général des Lycées 2023 — Matematica
family: concours_generale
year: '2023'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  Sympathetic polynomials: study existence/uniqueness of strictly positive roots
  of equations x^d + (1/n)x - 1 = 0 and their limits, then classify polynomials
  as initially/falsely/truly sympathetic and study convergence of the positive
  roots of a convergent sequence of such polynomials.
qa_score: '2'
topics:
  - topic_algebra
  - topic_funzionali
  - topic_disuguaglianze
methods:
  - method_disuguaglianze
  - method_casework
  - method_estremalita
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_astrazione
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2023
  - livello/Concours-Général
  - topic/algebra
  - topic/funzionali
  - topic/disuguaglianze
  - gara/individuale
  - qa/da-verificare
---

# Concours Général des Lycées 2023 — Matematica — Quesito 2

*Sympathetic polynomials: study existence/uniqueness of strictly positive roots of equations x^d + (1/n)x - 1 = 0 and their limits, then classify polynomials as initially/falsely/truly sympathetic and study convergence of the positive roots of a convergent sequence of such polynomials.*

> Problem 2: Sympathetic limit.
> 
> 2.1 Some examples.
> 
> 1. For every integer $n \ge 1$, consider the equation (in the unknown $x$)
> $$x^2 + \frac{1}{n}x - 1 = 0.$$
>   a. Show that this equation admits a unique strictly positive real solution; denote it $x_n$, and express $x_n$ as a function of $n$.
>   b. Show that the sequence $(x_n)_{n \ge 1}$ converges, and compute its limit.
>   c. Show that the limit found is a solution of the equation $x^2 - 1 = 0$.
> 
> 2. For every integer $n \ge 1$, consider the equation (in the unknown $y$)
> $$\frac{1}{n}y^2 - y - 1 = 0.$$
>   a. Show that this equation admits a unique strictly positive real solution; denote it $y_n$.
>   b. Show that the sequence $(y_n)_{n \ge 1}$ diverges.
> 
> 3. For every integer $n \ge 1$, consider the equation (in the unknown $z$)
> $$z^3 + \frac{1}{n}z - 1 = 0.$$
>   a. Show that this equation admits a unique strictly positive real solution; denote it $z_n$.
>   b. i. Study the variations of the function $z \mapsto z^3 + \frac{1}{n}z - 1$ on the interval $[0, +\infty)$.
>      ii. Deduce that the equation admits a unique strictly positive real solution, lying in the interval $[0, 1]$.
>   c. Show that the sequence $(z_n)_{n \ge 1}$ converges.
>   d. Show that the limit $z_\infty$ of the sequence $(z_n)_{n \ge 1}$ is a solution of the equation $z^3 - 1 = 0$.
> 
> 4. For every integer $n \ge 1$, consider the equation (in the unknown $t$)
> $$\frac{1}{n}t^3 - t^2 - 1 = 0.$$
>   a. Show that this equation admits a unique strictly positive real solution; denote it $t_n$.
>   b. Is the sequence $(t_n)_{n \ge 1}$ convergent? If so, what is its limit?
> 
> 2.2 Sympathetic polynomials.
> 
> In what follows, one fixes an integer $d \ge 1$. The function $P$ is a polynomial of degree at most $d$ if there exist reals $a_0, a_1, \dots, a_d$ such that, for every real $x$,
> $$P(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0.$$
> Let $P : x \mapsto a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0$ be such a polynomial. One says that:
>   - $P$ is initially sympathetic if $a_0 = -1$ and $a_k \le 0$ for every integer $k$ with $1 \le k \le d$;
>   - $P$ is falsely sympathetic if $a_0 = -1$ and $a_k < 0$ for every integer $k$ with $1 \le k \le d$;
>   - $P$ is truly sympathetic if $a_0 = -1$ and there exists an integer $k$ with $1 \le k \le d-1$ such that $a_1 \le 0, \dots, a_k \le 0$ and $a_{k+1} \ge 0, \dots, a_d \ge 0$, with $a_d \ne 0$.
> Finally, one says that $P$ is sympathetic if it is initially sympathetic, falsely sympathetic, or truly sympathetic. [Note: the exact sign conditions in these four definitions are partly illegible in the source and the above reading is uncertain.]
> 
> 5. Among the polynomials given (in the source), which ones are falsely sympathetic and initially sympathetic?
> 
> 6. Show that any falsely sympathetic polynomial is:
>   a. strictly negative on the interval $[0, +\infty)$;
>   b. decreasing on the interval $[0, +\infty)$.
> 
> 7. Show that any polynomial $P$ that is falsely sympathetic and initially sympathetic satisfies: $P$ is decreasing on an interval $[0, r]$, $P$ is strictly increasing on $[r, +\infty)$, $P$ is strictly negative on $[0, r]$, and the equation $P(x) = 0$ admits a unique solution on $[r, +\infty)$.
> 
> 8. Let $P$ be a truly sympathetic polynomial.
>   a. Show that there exist a real $b > 0$, an integer $\ell \ge 0$ and a truly sympathetic polynomial $Q$ such that $P'(x) = b\, x^{\ell}\, Q(x)$ for every real $x$.
>   b. Show that there exists a real $r > 0$ such that $P$ satisfies the same properties as in question 7.
> 
> 9. For which sympathetic polynomials $P$ does the equation $P(x) = 0$ admit a unique strictly positive solution? Give, in the form of a sign table, the sign of $P$ on the interval $[r, +\infty)$.
> 
> 2.3 Back to the ideas.
> 
> From now on, consider truly sympathetic polynomials $P_1, P_2, \dots$ of degree at most $d$. One writes each polynomial $P_n$ in the form
> $$P_n : x \mapsto a_{d,n} x^d + a_{d-1,n} x^{d-1} + \cdots + a_{1,n} x + a_{0,n}.$$
> One assumes moreover that, for every integer $k$ with $0 \le k \le d$, the sequence $(a_{k,n})_{n \ge 1}$ converges; let $a_k$ denote its limit. Consider the polynomial $P_\infty$ defined by
> $$P_\infty : x \mapsto a_d x^d + a_{d-1} x^{d-1} + \cdots + a_1 x + a_0.$$
> For every real $r$, denote by $x_n$ the unique strictly positive solution of the equation $P_n(x) = 0$. One studies the possible convergence of the sequence $(x_n)_{n \ge 1}$.
> 
> 10. Let $t$ be a fixed real. Show that the sequence $(P_n(t))_{n \ge 1}$ converges to $P_\infty(t)$.
> 
> 11. Show that the polynomial $P_\infty$ is sympathetic.
> 
> 12. Suppose in this question that the polynomial $P_\infty$ is truly sympathetic, and let $x_\infty$ be the unique strictly positive solution of the equation $P_\infty(x) = 0$.
>   a. Let $x, x'$ be reals with $0 < x < x_\infty < x'$. Show that there exists an integer $M_{x,x'}$ such that $P_n(x) < 0 < P_n(x')$ for every integer $n \ge M_{x,x'}$.
>   b. Show that the sequence $(x_n)_{n \ge 1}$ converges to $x_\infty$.
> 
> 13. Suppose in this question that the polynomial $P_\infty$ is falsely sympathetic. Show that $(x_n)_{n \ge 1}$ diverges to $+\infty$.
> 
> 14. Recover the results of the first part.

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
