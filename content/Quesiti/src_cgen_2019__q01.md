---
title: Concours Général des Lycées 2019 — Matematica — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2019__Q01
parent: src_cgen_2019
competition: Concours Général des Lycées 2019 — Matematica
family: concours_generale
year: '2019'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  Remarkable families of functions on [0,+inf): show the set of polynomial
  functions is contained in / characterized by sets closed under sum,
  composition, difference and product (properties P1-P6).
qa_score: '2'
topics:
  - topic_funzionali
  - topic_insiemi_funzioni
  - topic_algebra
  - topic_probabilita
methods:
  - method_induzione
  - method_casework
  - method_fattorizzazione
skills:
  - skill_astrazione
  - skill_lettura_attenta
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2019
  - livello/Concours-Général
  - topic/funzionali
  - topic/insiemi_funzioni
  - topic/algebra
  - topic/probabilita
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Remarkable families of functions on [0,+inf): show the set of polynomial functions is contained in / characterized by sets closed under sum, composition, difference and product (properties P1-P6).*

> We denote by $\mathscr{P}$ the set of functions defined on $[0,+\infty[$ with values in $[0,+\infty[$. For $f$ and $g$ in $\mathscr{P}$, one defines the function $h = f \circ g$ by setting, for every real number $x \ge 0$:
> $$h(x) = f(g(x)).$$
> One considers $u$ and $v$, two functions of $\mathscr{P}$ defined, for every real number $x \ge 0$, by:
> $$u(x) = e^x - 1, \qquad v(x) = \ln(x+1).$$
> 
> The function $f$ is called a $\textit{polynomial function}$ of $\mathscr{P}$ if there exist an integer $d \ge 0$ and real numbers $a_0, a_1, \ldots, a_d$ greater than or equal to $0$ such that, for every real number $x \ge 0$:
> $$f(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_1 x + a_0.$$
> The real numbers $a_0, a_1, \ldots, a_d$ are called the coefficients of the polynomial function $f$.
> 
> Let $\mathscr{F}$ be a set of functions of $\mathscr{P}$. One considers the following properties:
> 
> $\textbf{(P1)}$ $\mathscr{F}$ contains $u$ and $v$.
> $\textbf{(P2)}$ $\mathscr{F}$ contains all bounded constant functions.
> $\textbf{(P3)}$ If $f$ and $g$ belong to $\mathscr{F}$, then $f + g$ belongs to $\mathscr{F}$.
> $\textbf{(P4)}$ If $f$ and $g$ belong to $\mathscr{F}$, then $f \circ g$ belongs to $\mathscr{F}$.
> $\textbf{(P5)}$ If $f$ and $g$ belong to $\mathscr{F}$ with $f \ge g$, then $f - g$ belongs to $\mathscr{F}$.
> $\textbf{(P6)}$ If $f$ and $g$ belong to $\mathscr{F}$, then $f \times g$ belongs to $\mathscr{F}$.
> 
> $\textbf{1.}$ Let $\mathscr{T}$ be the set of functions of $\mathscr{P}$ having the properties $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P3)}$, $\textbf{(P4)}$ and $\textbf{(P5)}$.
> $\textbf{a.}$ Let $i$ be the function defined, for every real number $x \ge 0$, by $i(x) = x$. Show that $i$ belongs to $\mathscr{T}$.
> $\textbf{b.}$ Let $p$ be the function defined, for every real number $x \ge 0$, by $p(x) = 2x^2 - 3x + 4$. Show that $p$ belongs to $\mathscr{T}$.
> $\textbf{c.}$ Let $f$ be a polynomial function of $\mathscr{P}$. Show that $f$ belongs to $\mathscr{T}$.
> $\textbf{d.}$ Is the function $\exp$ always in $\mathscr{T}$?
> 
> $\textbf{2.}$ Let $\mathscr{F}$ be a set of functions of $\mathscr{P}$ which has the properties $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P3)}$, $\textbf{(P4)}$ and $\textbf{(P5)}$. One does not suppose here that $\mathscr{F}$ has property $\textbf{(P6)}$. Is the result of the previous question still valid?
> 
> $\textbf{3.}$ Let $\mathscr{F}$ be a set of functions of $\mathscr{P}$ which has the properties $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P4)}$, $\textbf{(P5)}$ and $\textbf{(P6)}$. One does not suppose here that $\mathscr{F}$ has property $\textbf{(P3)}$.
> 
> $\textbf{a.}$ Let $a$ be a natural integer. One sets, for every real number $x \ge 0$, the function defined by:
> $$Q_a(x) = (x+1)^a - 1.$$
> Show that $Q_a \in \mathscr{F}$.
> $\textbf{b.}$ Let $a$ be a natural integer. Demonstrate that there exist integers $a_1, \ldots, a_d$ greater than or equal to $0$ such that:
> $$(x+1)^a = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_1 x + 1.$$
> Being given a real number $x \ge 0$, one introduces a random variable $X$ following the binomial law of parameters $d$ and $\frac{x}{x+1}$.
> $\textbf{c.}$ Let $f$ be a polynomial function of $\mathscr{P}$ such that $f(0) = 0$. Show that there exist a real number $c \ge 0$ and a natural integer $d$ such that the function
> $$c\big(x + x^2 + \cdots + x^d\big) - f(x)$$
> be a polynomial function whose coefficients are all positive or zero.
> $\textbf{d.}$ Deduce that if $f$ is a polynomial function of $\mathscr{P}$ such that $f(0) = 0$, then $f$ belongs to $\mathscr{F}$.
> $\textbf{e.}$ Let $f$ be a function of $\mathscr{P}$.
> $\bullet$ One says $f$ is $\textit{segmentary}$ if it verifies the property: for every real number $a > 0$ there exists a real number $b > 0$ such that, for all $x$ verifying $0 \le x \le a$, one has $0 \le f(x) \le b$.
> $\bullet$ One says $f$ is $\textit{bounded}$ if it verifies the property: there exists a real number $b > 0$ such that, for every real number $x \ge 0$, one has $0 \le f(x) \le b$.
> One now denotes by $\mathscr{S}$ the set of segmentary functions and $\mathscr{B}$ the set of bounded functions.
> $\textbf{i.}$ Let $f$ be a function of $\mathscr{B}$. Show that $f$ is segmentary. Is the converse true?
> $\textbf{ii.}$ Show that $\mathscr{S}$ satisfies the properties $\textbf{(P1)}$ to $\textbf{(P6)}$.
> $\textbf{iii.}$ Show that $\mathscr{B}$ satisfies the properties $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P4)}$, $\textbf{(P5)}$ and $\textbf{(P6)}$ but does not satisfy property $\textbf{(P3)}$.
> $\textbf{f.}$ Is a polynomial function of $\mathscr{P}$ necessarily in $\mathscr{F}$?

**Topic:** [[topic_funzionali|Equazioni funzionali]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_algebra|Algebra]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_induzione|Induzione]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1K8ucW3mLigvc0hWdO6997kun_qEZQEkB/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Notabili famiglie di funzioni su [0,+inf): mostrare che l'insieme di funzioni polinomiche è contenuto in / caratterizzato da gruppi chiusi sotto somma, composizione, differenza e prodotto (proprietà P1-P6). *

> Indichiamo con $\mathscr{P}$ l'insieme di funzioni definite su $[0,+\infty[$ con valori in $[0,+\infty[$. Per $f$ e $g$ in $\mathscr{P}$, si definisce la funzione $h = f \circ g$ impostando, per ogni numero reale $x \ge 0$: $$h(x) = f(g(x)).$$ Si considera $u$ e $v$, due funzioni di $\mathscr{P}$ definite, per ogni numero reale $x \ge 0$, da: $$u(x) = e^x - 1, \qquad v(x) = \ln(x+1).$$
> 
> La funzione $f$ è chiamata $\textit{polynomial function}$ di $\mathscr{P}$ se esiste un intero $d \ge 0$ e numeri reali $a_0, a_1, \ldots, a_d$ superiori o uguali a $0$ in modo tale che, per ogni numero reale $x \ge 0$: $$f(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_1 x + a_0.$$ I numeri reali $a_0, a_1, \ldots, a_d$ sono chiamati i coefficienti della funzione polinomica $f$.
> 
> Let $\mathscr{F}$ essere un insieme di funzioni di $\mathscr{P}$. Si considerano le seguenti proprietà:
> 
> $\textbf{(P1)}$ $\mathscr{F}$ contiene $u$ e $v$. $\textbf{(P2)}$ $\mathscr{F}$ contiene tutte le funzioni costanti limitate. $\textbf{(P3)}$ Se $f$ e $g$ appartengono a $\mathscr{F}$, allora $f + g$ appartiene a $\mathscr{F}$. Se $f$ e $g$ appartengono a $\mathscr{F}$, allora $f \circ g$ appartiene a $\mathscr{F}$. $\textbf{(P5)}$ Se $f$ e $g$ appartengono a $\mathscr{F}$ con $f \ge g$, allora $f - g$ appartiene a $\mathscr{F}$. $\textbf{(P6)}$ Se $f$ e $g$ appartengono a $\mathscr{F}$, allora $f \times g$ appartiene a $\mathscr{F}$.
> 
> $\textbf{1.}$ $\mathscr{T}$ sia l'insieme di funzioni di $\mathscr{P}$ che hanno le proprietà $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P3)}$, $\textbf{(P4)}$ e $\textbf{(P5)}$. $\textbf{a.}$ $i$ sia la funzione definita, per ogni numero reale $x \ge 0$, da $i(x) = x$. Indicare che $i$ appartiene a $\mathscr{T}$. $\textbf{b.}$ $p$ sia la funzione definita, per ogni numero reale $x \ge 0$, da $p(x) = 2x^2 - 3x + 4$. Indicare che $p$ appartiene a $\mathscr{T}$. $\textbf{c.}$ $f$ sia una funzione polinomial di $\mathscr{P}$. Indicare che $f$ appartiene a $\mathscr{T}$. $\textbf{d.}$ La funzione $\exp$ è sempre in $\mathscr{T}$?
> 
> $\textbf{2.}$ $\mathscr{F}$ sia un insieme di funzioni di $\mathscr{P}$ che ha le proprietà $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P3)}$, $\textbf{(P4)}$ e $\textbf{(P5)}$. Qui non si suppone che $\mathscr{F}$ abbia la proprietà $\textbf{(P6)}$. Il risultato della domanda precedente è ancora valido?
> 
> $\textbf{3.}$ $\mathscr{F}$ sia un insieme di funzioni di $\mathscr{P}$ che ha le proprietà $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P4)}$, $\textbf{(P5)}$ e $\textbf{(P6)}$. Qui non si suppone che $\mathscr{F}$ abbia la proprietà $\textbf{(P3)}$.
> 
> $\textbf{a.}$ $a$ sia un intero naturale. Un set, per ogni numero reale $x \ge 0$, la funzione definita da: $$Q_a(x) = (x+1)^a - 1.$$ Mostra che $Q_a \in \mathscr{F}$. $\textbf{b.}$ $a$ sia un intero naturale. Dimostrare che esistono integri $a_1, \ldots, a_d$ superiori o uguali a $0$ in modo tale che: $$(x+1)^a = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_1 x + 1.$$ Dato un numero reale $x \ge 0$, si introduce una variabile casuale $X$ seguendo la legge binomica dei parametri $d$ e $\frac{x}{x+1}$. $\textbf{c.}$ $f$ sia una funzione polinomial di $\mathscr{P}$ tale che $f(0) = 0$. Mostrare che esiste un numero reale $c \ge 0$ e un intero naturale $d$ in modo tale che la funzione $$c\big(x + x^2 + \cdots + x^d\big) - f(x)$$ sia una funzione polinomica i cui coefficienti sono tutti positivi o zero. $\textbf{d.}$ Deduce che se $f$ è una funzione polinomial di $\mathscr{P}$ tale che $f(0) = 0$, allora $f$ appartiene a $\mathscr{F}$. $\textbf{e.}$ $f$ deve essere una funzione di $\mathscr{P}$. $\bullet$ Si dice $f$ è $\textit{segmentary}$ se verifica la proprietà: per ogni numero reale $a > 0$ esiste un numero reale $b > 0$ tale che, per tutte le $x$ che verificano $0 \le x \le a$, si ha $0 \le f(x) \le b$. $\bullet$ Si dice $f$ è $\textit{bounded}$ se verifica la proprietà: esiste un numero reale $b > 0$ tale che, per ogni numero reale $x \ge 0$, si ha $0 \le f(x) \le b$. Ora uno denota con $\mathscr{S}$ l'insieme delle funzioni segmentarie e $\mathscr{B}$ l'insieme delle funzioni limitate. $\textbf{i.}$ $f$ deve essere una funzione di $\mathscr{B}$. Indicare che $f$ è segmentato. È vero il contrario? $\textbf{ii.}$ Indicare che $\mathscr{S}$ soddisfa le proprietà $\textbf{(P1)}$ a $\textbf{(P6)}$. Indicare che $\mathscr{B}$ soddisfa le proprietà $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P4)}$, $\textbf{(P5)}$ e $\textbf{(P6)}$, ma non soddisfa la proprietà $\textbf{(P3)}$. $\textbf{f.}$ Una funzione polinomial di $\mathscr{P}$ è necessariamente in $\mathscr{F}$?

[[src_cgen_2019__Q01]]
