---
title: Concours Général des Lycées 2019 — Matematica — Quesito 2
tipo: quesito
quesito_id: quesito_src_cgen_2019__Q02
parent: src_cgen_2019
competition: Concours Général des Lycées 2019 — Matematica
family: concours_generale
year: '2019'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  Jovial numbers: integers p that admit a strictly increasing sequence of
  integers >=2 ending at p whose reciprocals sum to 1; examples, two integer
  sequences, and an optimal upper bound for jovial numbers of fixed order proved
  by induction.
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_algebra
  - topic_combinatoria
methods:
  - method_induzione
  - method_estremalita
  - method_ricorsione
  - method_fattorizzazione
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2019
  - livello/Concours-Général
  - topic/aritmetica
  - topic/algebra
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---

*Jovial numbers: integers p that admit a strictly increasing sequence of integers >=2 ending at p whose reciprocals sum to 1; examples, two integer sequences, and an optimal upper bound for jovial numbers of fixed order proved by induction.*

> A natural integer $p \ge 2$ is said to be $\textit{jovial of order } k$ if there exist integers $a_1, \ldots, a_k$ such that:
> $$2 \le a_1 < a_2 < \cdots < a_k, \qquad a_k = p \quad \text{and} \quad \frac{1}{a_1} + \cdots + \frac{1}{a_k} = 1.$$
> Thus, $12$ is jovial of order $4$ because $\frac{1}{2} + \frac{1}{4} + \frac{1}{6} + \frac{1}{12} = 1$.
> The integer $p \ge 2$ is said to be $\textit{jovial}$ if there exists an integer $n \ge 1$ such that $p$ is jovial of order $n$.
> 
> $\textbf{2.1 Some examples}$
> $\textbf{1.}$ Show that if $p$ is jovial of order $n$, then $n \ge 1$.
> $\textbf{2.}$ Show that there is no jovial integer of order $1$. Show that $2$ and $4$ are not jovial.
> $\textbf{3.}$ Show that no prime integer is jovial.
> $\textbf{4.}$ What is the smallest jovial integer?
> $\textbf{5.}$ Determine all the jovial integers of order $3$.
> $\textbf{6.}$ Let $p$ be an integer. Show that $2p$ and $p(p+1)$ are jovial.
> $\textbf{7.}$ Show that whether $p$ is jovial does not depend on the order.
> 
> $\textbf{2.2 Two integer sequences}$
> One defines the sequences $(u_n)_{n \ge 0}$ and $(v_n)_{n \ge 0}$ by $u_1 = 1$ and, for every integer $n \ge 1$,
> $$u_{n+1} = u_n(1 + u_n).$$
> $\textbf{1.}$ Show, for every $n \ge 3$, that $u_n$ is an odd jovial integer of order $n$.
> $\textbf{2.}$ Show, for every integer $n \ge 1$, that $v_{n+1} = v_1 v_2 \cdots v_n + 1$.
> 
> $\textbf{2.3 An optimal upper bound for jovial numbers of fixed order}$
> Let $a$ be a non-null natural integer. One denotes by $\mathscr{H}_a$ the following property: if $x_1, \ldots, x_n$ are strictly positive integers, and $b$ a strictly positive number, such that
> $$x_1 < x_2 < \cdots < x_n \le a \quad \text{and} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_n} + \frac{1}{a} = 1,$$
> then $a + 1 \le v_{n+1}$ and $x_1 x_2 \cdots x_n \le v_1 v_2 \cdots v_{n+1}$. One wishes to demonstrate by recurrence that $\mathscr{H}_a$ is true for every integer $n \ge 1$.
> $\textbf{1.}$ Demonstrate that the property $\mathscr{H}_1$ is true.
> 
> In the following questions, one considers an integer $n \ge 2$, one supposes the property $\mathscr{H}_{a-1}$ is true. One considers the strictly positive integers $x_1, \ldots, x_n$ and a strictly positive rational number $a$ such that:
> $$x_1 < x_2 < \cdots < x_n \le a \quad \text{and} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_n} + \frac{1}{a} = 1.$$
> $\textbf{2.}$ Show that $x_1 \ge 2$ and that $a < x_1 x_2 \cdots x_n$.
> $\textbf{3.}$ One supposes in this question that $\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{q} = 1$ and that $x_n \ge x_{n-1}$.
> $\textbf{a.}$ Show that there exists a strictly positive integer $q$ such that:
> $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{q} = 1.$$
> $\textbf{b.}$ Show that $x_n - 1 \le q$.
> $\textbf{c.}$ Deduce that $q + 1 \le v_n$ and then that $x_1 \cdots x_n \le v_1 v_2 \cdots v_n x_n$.
> $\textbf{d.}$ Show that $a + 1 \le v_{n+1}$ and $x_1 \cdots x_n \le v_1 v_2 \cdots v_{n+1}$.
> $\textbf{4.}$ One supposes in this question that $\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{x_n} < 1$.
> $\textbf{a.}$ Show that $x_n \ge a$.
> $\textbf{b.}$ Show that there exist two unique strictly positive rational numbers $r$ and $t$ such that:
> $$\frac{1}{x_n} + \frac{1}{x_n - 1} + \frac{1}{x_n - 2} + r = 1 \quad \text{and} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_{n-2}} + \frac{1}{t} = 1.$$
> $\textbf{c.}$ Show that $r = x_n + 1 + \frac{x_n - 2}{x_n^2 - 2x_n + 2}$ and then that $(x_n - 2)(r + 1) \ge x_n^2$.
> $\textbf{d.}$ Show that $t \ge r \ge x_n$.
> $\textbf{e.}$ Deduce that $a + 1 \le v_{n+1}$ and $x_1 \cdots x_n \le v_1 v_2 \cdots v_{n+1}$.
> $\textbf{5.}$ One supposes in this question that $\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} < 1$.
> $\textbf{a.}$ Show that there exists a strictly positive rational number $b$ such that:
> $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{b} = 1.$$
> $\textbf{b.}$ Show that $(x_n - 1)(b + 1) \ge x_n(a + 1)$.
> $\textbf{6.}$ Deduce that the proposition $\mathscr{H}_a$ is true. $\textit{Hint: In the case where } \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{x_n} < 1, \text{ one may try to replace } x_n \text{ by } x_n - 1 \text{ and } a \text{ by } b.$
> $\textbf{7.}$ Show, for every integer $n \ge 3$, that $u_n$ is the largest jovial integer of order $n$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_induzione|Induzione]], [[method_estremalita|Estremalità]], [[method_ricorsione|Ricorsione]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
