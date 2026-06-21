---
title: Concours Général des Lycées 2022 — Matematica — Quesito 1
tipo: quesito
quesito_id: quesito_src_cgen_2022__Q01
parent: src_cgen_2022
competition: Concours Général des Lycées 2022 — Matematica
family: concours_generale
year: '2022'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  Sparkling reals defined via parity of floor of x^(2^n); prove each interval
  [k,k+1) contains a unique sparkling real using sequences a_n, b_n
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_algebra
methods:
  - method_induzione
  - method_disuguaglianze
  - method_ricorsione
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2022
  - livello/Concours-Général
  - topic/aritmetica
  - topic/algebra
  - gara/individuale
  - qa/da-verificare
---

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
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
