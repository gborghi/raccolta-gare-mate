---
title: Concours Général des Lycées 2024 — Matematica — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2024__Q01
parent: src_cgen_2024
competition: Concours Général des Lycées 2024 — Matematica
family: concours_generale
year: '2024'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  Recursively defined sequence u_{n+1}=1/(n+1)+sqrt(u_n): positivity,
  monotonicity, convergence and asymptotics
qa_score: '2'
topics:
  - topic_algebra
  - topic_insiemi_funzioni
methods:
  - method_induzione
  - method_disuguaglianze
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2024
  - livello/Concours-Général
  - topic/algebra
  - topic/insiemi_funzioni
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Recursively defined sequence u_{n+1}=1/(n+1)+sqrt(u_n): positivity, monotonicity, convergence and asymptotics*

> Problem 1: Study of a sequence.
> 
> For every real $a \ge 0$, one calls $u_a$ the sequence associated with $a$, defined by $u_0 = a$ and
> $$u_{n+1} = \frac{1}{n+1} + \sqrt{u_n} \quad \text{for every integer } n \ge 0.$$
> 
> Part 1: Generalities.
> 
> 1. Let $a$ be a strictly positive real. Show that the sequence $(u_a)$ associated with $a$ verifies $u_n \ge 0$ for every integer $n \ge 0$.
> 
> 2. Let $a$ and $b$ be two strictly positive reals such that $a \le b$. Denote by $(u_n)$ the sequence $u_a$ associated with $a$ and by $(v_n)$ the sequence $u_b$ associated with $b$. Show that $u_n \le v_n$ for every integer $n \ge 0$.
> 
> 3. One notes $(w_a)$ the sequence associated with $0$. Show that $w_n \ge 1$ for every integer $n \ge 1$.
> 
> 4. Let $a$ and $b$ be two strictly positive reals. Show that the sequence $(u_a)$ associated with $a$ and the sequence $(u_b)$ associated with $b$ converge towards one same real $\ell$. Determine the value of $\ell$.
> 
> 5. Let $a$ be a real such that $a = \dfrac{1 + \sqrt{5}}{2}$. Justify that the sequence $u_a$ is strictly decreasing. (It will not be required to give a demonstration that it is strictly decreasing.)
> 
> Part 2: A particular case.
> 
> In all this part, one defines the sequence $(t_n)$ by
> $$t_n = n(t_n - 1) \quad \text{for every integer } n \ge 0$$
> (as transcribed from the source).
> 
> 6. Show that for every integer $n \ge 1$, the framing
> $$1 + \frac{2}{n} \le t_n \le 1 + \frac{3}{n}.$$
> 
> 7. Show that for every integer $n \ge 1$, the framing
> $$2 \le s_n \le 2 + \frac{6}{n}.$$
> 
> 8. Determine the limit of $\dfrac{t_n - 1 - \dfrac{2}{n}}{\dfrac{1}{n}}$ when $n$ tends to $+\infty$.
> 
> Part 3: Return to the general case.
> 
> 9. Let $a$ be a real positive or null. Is the sequence $(u_a)$ associated with $a$ convergent?
> 
> 10. Determine the limit of $\dfrac{u_n - 1 - \dfrac{2}{n}}{\dfrac{1}{n}}$ when $n$ tends to $+\infty$.

**Topic:** [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1c1cSoVwqMLgL0IF4BNA5JRS_DbCgZRxy/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Sequenza ricorrentemente definita u_{n+1}=1/(n+1)+sqrt(u_n): positività, monotonicità, convergenza e assimptotica*

> Problema 1: studio di una sequenza.
> 
> Per ogni $a \ge 0$ reale, si chiama $u_a$ la sequenza associata a $a$, definita da $u_0 = a$ e $$u_{n+1} = \frac{1}{n+1} + \sqrt{u_n} \quad \text{for every integer } n \ge 0.$$
> 
> Parte 1: Generalità.
> 
> 1. Che il $a$ sia un reale rigorosamente positivo. Indicare che la sequenza $(u_a)$ associata a $a$ verifica $u_n \ge 0$ per ogni numero intero $n \ge 0$.
> 
> 2. Che $a$ e $b$ siano due valori reali strettamente positivi, tali da $a \le b$. Nota con $(u_n)$ la sequenza $u_a$ associata a $a$ e con $(v_n)$ la sequenza $u_b$ associata a $b$. Indicare che $u_n \le v_n$ per ogni numero intero $n \ge 0$.
> 
> 3. Una nota $(w_a)$ la sequenza associata a $0$. Indicare che $w_n \ge 1$ per ogni numero intero $n \ge 1$.
> 
> 4. Lasciate che $a$ e $b$ siano due valori rigorosamente positivi. Indicare che la sequenza $(u_a)$ associata a $a$ e la sequenza $(u_b)$ associata a $b$ convergono verso uno stesso $\ell$ reale. Determinare il valore di $\ell$.
> 
> 5. Che il $a$ sia un reale tale che $a = \dfrac{1 + \sqrt{5}}{2}$. giustificare che la sequenza $u_a$ è strettamente in diminuzione. (Non sarà necessario dimostrare che si sta riducendo strettamente.)
> 
> Parte 2: Un caso particolare.
> 
> In tutta questa parte, si definisce la sequenza $(t_n)$ da $$t_n = n(t_n - 1) \quad \text{for every integer } n \ge 0$$ (come trascritto dalla fonte).
> 
> 6. Mostra che per ogni numero intero $n \ge 1$, l'incadramento $$1 + \frac{2}{n} \le t_n \le 1 + \frac{3}{n}.$$
> 
> 7. Mostra che per ogni numero intero $n \ge 1$, l'incadramento $$2 \le s_n \le 2 + \frac{6}{n}.$$
> 
> 8. Determinare il limite di $\dfrac{t_n - 1 - \dfrac{2}{n}}{\dfrac{1}{n}}$ quando $n$ tende a $+\infty$.
> 
> Parte 3: Ritorno al caso generale.
> 
> 9. Lasciate che $a$ sia un vero positivo o nullo. La sequenza $(u_a)$ è associata a $a$ convergente?
> 
> 10. Determinare il limite di $\dfrac{u_n - 1 - \dfrac{2}{n}}{\dfrac{1}{n}}$ quando $n$ tende a $+\infty$.

[[src_cgen_2024__Q01]]
