---
title: Concours Général des Lycées 2020 — Matematica — Quesito 2
tipo: quesito
quesito_id: quesito_src_cgen_2020__Q02
parent: src_cgen_2020
competition: Concours Général des Lycées 2020 — Matematica
family: concours_generale
year: '2020'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  An explosive number: the sequence x_{n+1}=(1+1/x_n)^n with x_1=a; the function
  f_n(x)=(1+1/x)^n; an explosivity criterion; proving there is a unique
  explosive number via a contraction argument.
qa_score: '1'
topics:
  - topic_algebra
  - topic_funzionali
  - topic_insiemi_funzioni
methods:
  - method_disuguaglianze
  - method_estremalita
  - method_ricorsione
  - method_backward
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_astrazione
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2020
  - livello/Concours-Général
  - topic/algebra
  - topic/funzionali
  - topic/insiemi_funzioni
  - gara/individuale
  - qa/da-verificare
---

*An explosive number: the sequence x_{n+1}=(1+1/x_n)^n with x_1=a; the function f_n(x)=(1+1/x)^n; an explosivity criterion; proving there is a unique explosive number via a contraction argument.*

> Problem 2: An explosive number (Un nombre explosif).
> 
> If $a$ is a strictly positive real number, we define the sequence $(x_n)$ by $x_1 = a$ and
> $$x_{n+1} = \left(1 + \frac{1}{x_n}\right)^n \quad \text{for every integer } n \geq 1,$$
> which we call the sequence associated to $a$. We say that the number $a$ is explosive if the sequence $(x_n)$ associated to $a$ diverges to $+\infty$. The goal of the problem is to prove that there exists a unique explosive number.
> 
> For every integer $n \geq 1$, we designate by $f_n$ the function defined on $\mathbb{R}_+^*$ by
> $$f_n(x) = \left(1 + \frac{1}{x}\right)^n \quad \text{for every real } x > 0,$$
> so that for every integer $n \geq 1$, we have $x_{n+1} = f_n(x_n)$.
> Throughout the problem, for every real $t$, the exponential of $t$ is denoted $\exp(t)$.
> 
> 2.1 A bounding of $f_n(x)$.
> Let $x$ be a strictly positive real.
> 1. Show that $\dfrac{1}{x+1} \leq \displaystyle\int_x^{x+1} \dfrac{dt}{t} \leq \dfrac{1}{x}$.
> 2. Deduce that $\dfrac{1}{x+1} \leq \ln\!\left(1 + \dfrac{1}{x}\right) \leq \dfrac{1}{x}$.
> 3. Deduce that, for every integer $n \geq 1$, one has
> $$\exp\!\left(\frac{n}{x+1}\right) \leq f_n(x) \leq \exp\!\left(\frac{n}{x}\right).$$
> 
> 2.2 A criterion of explosivity.
> 4. Let $a$ be a strictly positive real and $(x_n)$ the sequence associated to $a$. Can the sequence $(x_n)$ be bounded above? Can it be convergent?
> For every integer $n \geq 1$, we set $y_n = \dfrac{n+1}{\ln(x_{n+1})}$.
> 5. a. Study the variations of the function $g$ defined on $]2,+\infty[$ by
> $$g(x) = \frac{x}{\ln(x+1)} \quad \text{for every real } x \geq 0.$$
>    b. Deduce that, for every integer $n \geq 0$, one has $y_n > e$.
>    c. Show that, for every integer $n \geq 2$, one has $x_n > 1$ and $y_{n-1} \leq \dfrac{n}{\ln(x_n)}$.
> 6. Let $a$ be a strictly positive real and $(x_n)$ the sequence associated to it.
>    a. Show that, for every integer $n \geq 8$, if $x_n < y_{n-1}$ then $x_{n+1} > 1$ and $x_{n+2} \geq e$.
>    b. Deduce that, if $a$ is explosive, then $x_n > 1$ and $x_{n+1} > e$ for every integer $n \geq 8$.
>    c. Show that, if $a$ is explosive, then $x_n > e$ for every integer $n \geq 8$.
>    d. Show that $a$ is explosive if and only if $y_{n-1} \leq x_n \leq \dfrac{e}{\ln(x_n)}$ for every integer $n \geq 8$.
> 7. Let $a$, $\beta$ and $\gamma$ be three strictly positive reals such that $a < \beta < \gamma$. Show that, if $a$ and $\gamma$ are explosive, then $\beta$ also is.
> 
> 2.3 A unique explosive number.
> Let $r$ and $s$ be two functions defined on $\mathbb{R}_+^*$ and such that $s(x) > 0$ for all $x > 0$. We designate by $r \circ s$ the function defined on $\mathbb{R}_+^*$ by $r \circ s(x) = r(s(x))$ for all $x > 0$. We then set $h_1 = f_1$ and
> $$h_n = f_n \circ h_{n-1} \quad \text{for every integer } n \geq 2.$$
> Moreover, we denote by $h_n[\mathbb{R}_+^*]$ the set of reals $h_n(x)$ as $x$ runs over $\mathbb{R}_+^*$.
> 8. a. Make explicit the expression of $h_2(x)$ for every real $x > 0$.
>    b. Show that, for every integer $n \geq 1$, the function $h_n$ is continuous on $\mathbb{R}_+^*$.
> 9. a. Show that, for every integer $n \geq 1$, the function $h_n$ is strictly monotone on $\mathbb{R}_+^*$.
>    b. With the help of the calculator and without further justification, determine approximate values to $10^{-3}$ of the reals $a$ and $b$ such that $h_8[\mathbb{R}_+^*]$ is the corresponding interval. Verify that $a < e$ and $b > e$.
>    c. Show that, for every integer $n \geq 9$, one has $e \in ]c, n] \subset h_{n-1}[\mathbb{R}_+^*]$.
>    d. Deduce that, for every integer $n \geq 9$, one has $]a, n] \subset h_{n-1}[\mathbb{R}_+^*]$.
> For every real $n \geq 9$, we set $J_n = [y_{n-1}, n/\ln(y_n)]$ and we denote by $I_n$ the set of strictly positive reals such that $h_{n-1}(x) \in J_n$.
> 10. a. Show that, for every integer $n \geq 9$, there exist reals $a_n$ and $b_n$ such that $J_n = ]a_n, b_n]$.
>     b. Show that, for every integer $n \geq 9$, one has $J_{n+1} \subset J_n$.
> 11. a. Show that $a$ and $\beta$ are explosive.
>     b. Show that a single $x > 0$ is explosive if and only if $a \leq x \leq b$.
> 12. a. Show that, for every integer $n \geq 9$ and every real $x \in I_n$, one has
> $$|f_n'(x)| \geq \left|f_n\!\left(\frac{n}{\ln(x)}\right)\right|.$$
>     b. Deduce that, for every integer $n \geq 9$ and every real $x \in I_n$, one has
> $$|f_n'(x)| \geq \frac{y_n\,[\ln(y_n)]^2}{n}\exp\!\left(-\frac{1 + \ln(y_n)}{n + \ln(y_n)}\ln(y_n)\right).$$
>     c. Show that $\displaystyle\lim_{n \to +\infty} \frac{y_n \ln(n)}{n} = 1$ and $\displaystyle\lim_{n \to +\infty} \frac{\ln(y_n)}{\ln(n)} = 1$.
>     d. Deduce that there exists a real $N > 9$ such that, for every integer $n \geq N$ and every real $x \in I_n$, one has $|f_n'(x)| \geq 2$.
> 13. In this question, we designate by $N$ such an integer.
>     a. Deduce from question 12.d that, for every integer $n \geq N$ and every real $x \in I_n$, one has
> $$|f_n(x) - f_n(y)| \geq 2|x - y|.$$
>     b. Show that, if $a < \beta$, then there exists a strictly positive real $C$ such that $|a_n - \beta_n| \geq C \times 2^n$ for every integer $n \geq N$.
> 14. a. Show that there exists a unique explosive number.
>     b. With the help of the calculator and indicating the algorithm used, give an approximate value of $a$ to within $10^{-2}$.

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_estremalita|Estremalità]], [[method_ricorsione|Ricorsione]], [[method_backward|Backward]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
