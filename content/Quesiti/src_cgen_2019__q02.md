---
title: Concours Général des Lycées 2019 — Matematica — Quesito 2
tipo: quesito
lang: en
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
<div class="qlang-switch" data-default="en"></div>


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
**Fonte:** [apri PDF](https://drive.google.com/file/d/1K8ucW3mLigvc0hWdO6997kun_qEZQEkB/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Nomeri interi joviali: numeri interi p che ammette una sequenza di numeri interi >=2 in stretta crescita che termina a p i cui reciprocità sommano a 1; esempi, due sequenze di numeri interi e un limite superiore ottimale per i numeri interi joviali di ordine fisso dimostrato da induzione.*

> Si dice che un intero naturale $p \ge 2$ sia $\textit{jovial of order } k$ se esistono interi $a_1, \ldots, a_k$ tali che: $$2 \le a_1 < a_2 < \cdots < a_k, \qquad a_k = p \quad \text{and} \quad \frac{1}{a_1} + \cdots + \frac{1}{a_k} = 1.$$ Quindi, $12$ è giovial dell'ordine $4$ perché $\frac{1}{2} + \frac{1}{4} + \frac{1}{6} + \frac{1}{12} = 1$. Il numero intero $p \ge 2$ è detto $\textit{jovial}$ se esiste un numero intero $n \ge 1$ tale che $p$ sia giovial dell'ordine $n$.
> 
> $\textbf{2.1 Some examples}$ $\textbf{1.}$ Indicare che se $p$ è di ordine $n$, allora $n \ge 1$. $\textbf{2.}$ Indicare che non esiste un intero giovial dell'ordine $1$. Indicare che < MSK7/> e < MSK8/> non sono gioviali. $\textbf{3.}$ Indicare che nessun numero intero primo è giovial. < MSK10/> Qual è il più piccolo intero giovial? < MSK11/> Determinare tutti gli integri joviali dell'ordine < MSK12/>. $\textbf{6.}$ $p$ sia un numero intero. Indicare che < MSK15/> e < MSK16/> sono gioviali. < MSK17/> Indicare che l'esistenza di < MSK18/> non dipende dall'ordine.
> 
> $\textbf{2.2 Two integer sequences}$ Si definiscono le sequenze $(u_n)_{n \ge 0}$ e $(v_n)_{n \ge 0}$ da $u_1 = 1$ e, per ogni numero intero $n \ge 1$, $$u_{n+1} = u_n(1 + u_n).$$ $\textbf{1.}$ Mostra, per ogni $n \ge 3$, che $u_n$ è un numero intero giovial pari dell'ordine $n$. $\textbf{2.}$ Indicare, per ogni numero intero $n \ge 1$, che $v_{n+1} = v_1 v_2 \cdots v_n + 1$.
> 
> $\textbf{2.3 An optimal upper bound for jovial numbers of fixed order}$ $a$ sia un intero naturale non-zero. Una denota con $\mathscr{H}_a$ la seguente proprietà: se $x_1, \ldots, x_n$ sono numeri interi rigorosamente positivi, e $b$ un numero rigorosamente positivo, tale che $$x_1 < x_2 < \cdots < x_n \le a \quad \text{and} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_n} + \frac{1}{a} = 1,$$ allora $a + 1 \le v_{n+1}$ e $x_1 x_2 \cdots x_n \le v_1 v_2 \cdots v_{n+1}$. Si desidera dimostrare con ricorrenza che $\mathscr{H}_a$ è vero per ogni numero intero $n \ge 1$. $\textbf{1.}$ Dimostra che la proprietà $\mathscr{H}_1$ è vera.
> 
> Nelle seguenti domande, si considera un intero $n \ge 2$, si suppone che la proprietà $\mathscr{H}_{a-1}$ sia vera. Si considerano i numeri interi strettamente positivi $x_1, \ldots, x_n$ e un numero razionale strettamente positivo $a$ in modo tale che: $$x_1 < x_2 < \cdots < x_n \le a \quad \text{and} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_n} + \frac{1}{a} = 1.$$ $\textbf{2.}$ Mostri che $x_1 \ge 2$ e che $a < x_1 x_2 \cdots x_n$. In questa domanda si suppone che $\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{q} = 1$ e $x_n \ge x_{n-1}$. $\textbf{a.}$ Mostra che esiste un intero rigorosamente positivo $q$ tale che: $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{q} = 1.$$ $\textbf{b.}$ Mostra che $x_n - 1 \le q$. $\textbf{c.}$ Deduci quel $q + 1 \le v_n$ e poi quel $x_1 \cdots x_n \le v_1 v_2 \cdots v_n x_n$. < MSK21/> Indicare che < MSK22/> e < MSK23/>. In questa domanda si suppone che < MSK25/>. < MSK26/> Mostra che < MSK27/>. $\textbf{b.}$ Mostra che esistono due numeri razionali unici strettamente positivi $r$ e $t$ in modo tale che: $$\frac{1}{x_n} + \frac{1}{x_n - 1} + \frac{1}{x_n - 2} + r = 1 \quad \text{and} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_{n-2}} + \frac{1}{t} = 1.$$ $\textbf{c.}$ Mostra che $r = x_n + 1 + \frac{x_n - 2}{x_n^2 - 2x_n + 2}$ e quindi che $(x_n - 2)(r + 1) \ge x_n^2$. < MSK34/> Mostra che < MSK35/>. $\textbf{e.}$ Deduce che $a + 1 \le v_{n+1}$ e $x_1 \cdots x_n \le v_1 v_2 \cdots v_{n+1}$. In questa domanda si suppone che < MSK40/>. Indicare che esiste un numero razionale rigorosamente positivo $b$ tale che: $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{b} = 1.$$ $\textbf{b.}$ Indicare che $(x_n - 1)(b + 1) \ge x_n(a + 1)$. $\textbf{6.}$ Deduce che la proposizione $\mathscr{H}_a$ sia vera. $\textit{Hint: In the case where } \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{x_n} < 1, \text{ one may try to replace } x_n \text{ by } x_n - 1 \text{ and } a \text{ by } b.$ $\textbf{7.}$ Indicare, per ogni intero $n \ge 3$, che $u_n$ è il più grande intero giovial dell'ordine $n$.

[[src_cgen_2019__Q02]]
