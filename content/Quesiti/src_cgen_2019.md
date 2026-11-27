---
title: Concours Général des Lycées 2019 — Matematica
tipo: gara
competition: Concours Général des Lycées 2019 — Matematica
family: concours_generale
year: '2019'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2019"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_funzionali,topic_insiemi_funzioni,topic_algebra,topic_probabilita,method_induzione,method_casework,method_fattorizzazione,skill_astrazione,skill_lettura_attenta,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="fr"></div>


*Remarkable families of functions on [0,+inf): show the set of polynomial functions is contained in / characterized by sets closed under sum, composition, difference and product (properties P1-P6).*

> On note $\mathscr{P}$ l’ensemble des fonctions définies sur $[0,+\infty[$ et à valeurs dans $[0,+\infty[$.
>
> Pour $f$ et $g$ dans $\mathscr{P}$, on définit la fonction $h = f \circ g$ en posant, pour tout nombre réel $x \geqslant 0$,
> $$h(x) = f(g(x)).$$
> Si, pour tout nombre réel $x \geqslant 0$, on a $f(x) \geqslant g(x)$, on note $f \geqslant g$.
>
> On note $u$ et $v$ les fonctions de $\mathscr{P}$ définies, pour tout nombre réel $x \geqslant 0$, par :
> $$u(x) = e^x - 1 \quad \text{et} \quad v(x) = \ln(x+1).$$
>
> La fonction $f$ est une fonction polynomiale si $f$ est nulle ou s’il existe un entier $d \geqslant 0$ et des nombres réels $a_0, a_1, \ldots, a_d$ avec $a_d \neq 0$ tels que, pour tout nombre réel $x \geqslant 0$,
> $$f(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_1 x + a_0.$$
> Les nombres réels $a_0, a_1, \ldots, a_d$ sont alors appelés coefficients de la fonction polynomiale $f$.
>
> Si $\mathscr{S}$ est un ensemble de fonctions de $\mathscr{P}$, on définit les propriétés :
>
> $\textbf{(P1)}$ $\mathscr{S}$ contient $u$ et $v$.
>
> $\textbf{(P2)}$ $\mathscr{S}$ contient toutes les fonctions constantes positives.
>
> $\textbf{(P3)}$ Si $f$ et $g$ sont dans $\mathscr{S}$, alors $f+g$ est dans $\mathscr{S}$.
>
> $\textbf{(P4)}$ Si $f$ et $g$ sont dans $\mathscr{S}$, alors $f \circ g$ est dans $\mathscr{S}$.
>
> $\textbf{(P5)}$ Si $f$ et $g$ sont dans $\mathscr{S}$ avec $f \geqslant g$, alors $f-g$ est dans $\mathscr{S}$.
>
> $\textbf{(P6)}$ Si $f$ et $g$ sont dans $\mathscr{S}$, alors $f \times g$ est dans $\mathscr{S}$.
>
> **1.** Soit $\mathscr{T}$ un ensemble de fonctions de $\mathscr{P}$ qui vérifie les propriétés $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P3)}$, $\textbf{(P4)}$, $\textbf{(P5)}$ et $\textbf{(P6)}$.
>
> **a.** Soit $\ell$ la fonction définie, pour tout nombre réel $x \geqslant 0$, par $\ell(x) = x$. Démontrer que la fonction $\ell$ est dans $\mathscr{T}$.
>
> **b.** Déterminer toutes les fonctions affines qui sont dans $\mathscr{T}$.
>
> **c.** Soit $p$ la fonction polynomiale définie, pour tout nombre réel $x \geqslant 0$, par $p(x) = 2x^2 - 3x + 4$. Démontrer que la fonction $p$ est dans $\mathscr{T}$.
>
> **d.** Une fonction polynomiale de $\mathscr{P}$ est-elle toujours dans $\mathscr{T}$ ?
>
> **2.** Dans cette question, on suppose que $\mathscr{U}$ est un ensemble de fonctions de $\mathscr{P}$ qui vérifie les propriétés $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P3)}$, $\textbf{(P4)}$ et $\textbf{(P5)}$, mais on ne suppose pas qu’il vérifie la propriété $\textbf{(P6)}$. La réponse donnée à la question **d.** est-elle encore valable ?
>
> **3.** Dans cette question, on suppose que $\mathscr{V}$ est un ensemble de fonctions de $\mathscr{P}$ qui vérifie les propriétés $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P4)}$, $\textbf{(P5)}$ et $\textbf{(P6)}$, mais on ne suppose pas qu’il vérifie la propriété $\textbf{(P3)}$.
>
> **a.** Soit $d$ un entier naturel non nul. On note $Q_d$ la fonction définie, pour tout nombre réel $x \geqslant 0$, par :
> $$Q_d(x) = (x+1)^d - 1.$$
> Montrer que $Q_d \in \mathscr{V}$.
>
> **b.** Soit $d$ un entier naturel non nul. Démontrer qu’il existe des nombres entiers $a_1, \ldots, a_d$ supérieurs ou égaux à $1$ tels que, pour tout nombre réel $x \geqslant 0$,
> $$(x+1)^d = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_1 x + 1.$$
> Étant donné un nombre réel $x \geqslant 0$, on introduira une variable aléatoire suivant une loi binomiale de paramètres $d$ et $\dfrac{x}{1+x}$.
>
> **c.** Soit $f$ une fonction polynomiale telle que $f(0) = 0$. Montrer qu’il existe un nombre réel $c \geqslant 0$ et un entier naturel non nul $d$ tels que la fonction qui, à tout nombre réel $x \geqslant 0$, associe
> $$c\big(x + x^2 + \cdots + x^d\big) - f(x)$$
> est une fonction polynomiale dont tous les coefficients sont positifs ou nuls.
>
> **d.** En déduire que, si $f$ est une fonction polynomiale de $\mathscr{P}$ telle que $f(0) = 0$, alors $f$ est dans $\mathscr{V}$.
>
> **e.** Soit $f$ une fonction dans $\mathscr{P}$.
>
> - On dit que $f$ est segmentée si elle vérifie la propriété : pour tout nombre réel $a \geqslant 0$, il existe un nombre réel $b \geqslant 0$ tel que, pour tout $x$ vérifiant $0 \leqslant x \leqslant a$,
> $$0 \leqslant f(x) \leqslant b.$$
> - On dit que $f$ est bornée si elle vérifie la propriété : il existe un nombre réel $b \geqslant 0$ tel que pour tout nombre réel $x \geqslant 0$,
> $$0 \leqslant f(x) \leqslant b.$$
>
> On note alors $\mathscr{A}$ l’ensemble des fonctions segmentées et $\mathscr{B}$ l’ensemble des fonctions segmentées qui sont nulles en $0$ ou bornées.
>
> **i.** Soit $f$ une fonction dans $\mathscr{P}$. On suppose $f$ bornée. Démontrer que $f$ est segmentée. La réciproque est-elle vraie ?
>
> **ii.** Montrer que $\mathscr{A}$ satisfait les propriétés $\textbf{(P1)}$ à $\textbf{(P6)}$.
>
> **iii.** Montrer que $\mathscr{B}$ satisfait les propriétés $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P4)}$, $\textbf{(P5)}$ et $\textbf{(P6)}$, mais ne satisfait pas la propriété $\textbf{(P3)}$.
>
> **f.** Une fonction polynomiale dans $\mathscr{P}$ est-elle nécessairement dans $\mathscr{V}$ ?

**Topic:** [[topic_funzionali|Equazioni funzionali]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_algebra|Algebra]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_induzione|Induzione]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1K8ucW3mLigvc0hWdO6997kun_qEZQEkB/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Notabili famiglie di funzioni su [0,+inf): mostrare che l'insieme di funzioni polinomiche è contenuto in / caratterizzato da gruppi chiusi sotto somma, composizione, differenza e prodotto (proprietà P1-P6).*

> Indichiamo con $\mathscr{P}$ l'insieme di funzioni definite su $[0,+\infty[$ con valori in $[0,+\infty[$. Per $f$ e $g$ in $\mathscr{P}$, si definisce la funzione $h = f \circ g$ impostando, per ogni numero reale $x \ge 0$: $$h(x) = f(g(x)).$$ Si considera $u$ e $v$, due funzioni di $\mathscr{P}$ definite, per ogni numero reale $x \ge 0$, da: $$u(x) = e^x - 1, \qquad v(x) = \ln(x+1).$$
> 
> La funzione $f$ è chiamata $\textit{polynomial function}$ di $\mathscr{P}$ se esiste un intero $d \ge 0$ e numeri reali $a_0, a_1, \ldots, a_d$ superiori o uguali a $0$ in modo tale che, per ogni numero reale $x \ge 0$: $$f(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_1 x + a_0.$$ I numeri reali $a_0, a_1, \ldots, a_d$ sono chiamati i coefficienti della funzione polinomica $f$.
> 
> Sia $\mathscr{F}$ essere un insieme di funzioni di $\mathscr{P}$. Si considerano le seguenti proprietà:
> 
> $\textbf{(P1)}$ $\mathscr{F}$ contiene $u$ e $v$. $\textbf{(P2)}$ $\mathscr{F}$ contiene tutte le funzioni costanti limitate. $\textbf{(P3)}$ Se $f$ e $g$ appartengono a $\mathscr{F}$, allora $f + g$ appartiene a $\mathscr{F}$. Se $f$ e $g$ appartengono a $\mathscr{F}$, allora $f \circ g$ appartiene a $\mathscr{F}$. $\textbf{(P5)}$ Se $f$ e $g$ appartengono a $\mathscr{F}$ con $f \ge g$, allora $f - g$ appartiene a $\mathscr{F}$. $\textbf{(P6)}$ Se $f$ e $g$ appartengono a $\mathscr{F}$, allora $f \times g$ appartiene a $\mathscr{F}$.
> 
> $\textbf{1.}$ $\mathscr{T}$ sia l'insieme di funzioni di $\mathscr{P}$ che hanno le proprietà $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P3)}$, $\textbf{(P4)}$ e $\textbf{(P5)}$. $\textbf{a.}$ $i$ sia la funzione definita, per ogni numero reale $x \ge 0$, da $i(x) = x$. Dimostrare che $i$ appartiene a $\mathscr{T}$. $\textbf{b.}$ $p$ sia la funzione definita, per ogni numero reale $x \ge 0$, da $p(x) = 2x^2 - 3x + 4$. Dimostrare che $p$ appartiene a $\mathscr{T}$. $\textbf{c.}$ $f$ sia una funzione polinomial di $\mathscr{P}$. Dimostrare che $f$ appartiene a $\mathscr{T}$. $\textbf{d.}$ La funzione $\exp$ è sempre in $\mathscr{T}$?
> 
> $\textbf{2.}$ $\mathscr{F}$ sia un insieme di funzioni di $\mathscr{P}$ che ha le proprietà $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P3)}$, $\textbf{(P4)}$ e $\textbf{(P5)}$. Qui non si suppone che $\mathscr{F}$ abbia la proprietà $\textbf{(P6)}$. Il risultato della domanda precedente è ancora valido?
> 
> $\textbf{3.}$ $\mathscr{F}$ sia un insieme di funzioni di $\mathscr{P}$ che ha le proprietà $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P4)}$, $\textbf{(P5)}$ e $\textbf{(P6)}$. Qui non si suppone che $\mathscr{F}$ abbia la proprietà $\textbf{(P3)}$.
> 
> $\textbf{a.}$ $a$ sia un intero naturale. Un set, per ogni numero reale $x \ge 0$, la funzione definita da: $$Q_a(x) = (x+1)^a - 1.$$ Mostra che $Q_a \in \mathscr{F}$. $\textbf{b.}$ $a$ sia un intero naturale. Dimostrare che esistono interi $a_1, \ldots, a_d$ superiori o uguali a $0$ in modo tale che: $$(x+1)^a = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_1 x + 1.$$ Dato un numero reale $x \ge 0$, si introduce una variabile casuale $X$ seguendo la legge binomica dei parametri $d$ e $\frac{x}{x+1}$. $\textbf{c.}$ $f$ sia una funzione polinomial di $\mathscr{P}$ tale che $f(0) = 0$. Mostrare che esiste un numero reale $c \ge 0$ e un intero naturale $d$ in modo tale che la funzione $$c\big(x + x^2 + \cdots + x^d\big) - f(x)$$ sia una funzione polinomica i cui coefficienti sono tutti positivi o zero. $\textbf{d.}$ Deduce che se $f$ è una funzione polinomial di $\mathscr{P}$ tale che $f(0) = 0$, allora $f$ appartiene a $\mathscr{F}$. $\textbf{e.}$ $f$ deve essere una funzione di $\mathscr{P}$. $\bullet$ Si dice $f$ è $\textit{segmentary}$ se verifica la proprietà: per ogni numero reale $a > 0$ esiste un numero reale $b > 0$ tale che, per tutte le $x$ che verificano $0 \le x \le a$, si ha $0 \le f(x) \le b$. $\bullet$ Si dice $f$ è $\textit{bounded}$ se verifica la proprietà: esiste un numero reale $b > 0$ tale che, per ogni numero reale $x \ge 0$, si ha $0 \le f(x) \le b$. Ora uno denota con $\mathscr{S}$ l'insieme delle funzioni segmentarie e $\mathscr{B}$ l'insieme delle funzioni limitate. $\textbf{i.}$ $f$ deve essere una funzione di $\mathscr{B}$. Dimostrare che $f$ è segmentato. È vero il contrario? $\textbf{ii.}$ Dimostrare che $\mathscr{S}$ soddisfa le proprietà $\textbf{(P1)}$ a $\textbf{(P6)}$. Dimostrare che $\mathscr{B}$ soddisfa le proprietà $\textbf{(P1)}$, $\textbf{(P2)}$, $\textbf{(P4)}$, $\textbf{(P5)}$ e $\textbf{(P6)}$, ma non soddisfa la proprietà $\textbf{(P3)}$. $\textbf{f.}$ Una funzione polinomial di $\mathscr{P}$ è necessariamente in $\mathscr{F}$?

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_algebra|Algebra]], [[topic_probabilita|Probabilita e statistica]]
**Metodo:** [[method_induzione|Induzione]], [[method_casework|Analisi per casi]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


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



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,topic_algebra,topic_combinatoria,method_induzione,method_estremalita,method_ricorsione,method_fattorizzazione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_riconoscimento_pattern,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Jovial numbers: integers p that admit a strictly increasing sequence of integers >=2 ending at p whose reciprocals sum to 1; examples, two integer sequences, and an optimal upper bound for jovial numbers of fixed order proved by induction.*

> Soient $n$ et $p$ deux entiers tels que $p \geqslant 2$ et $n \geqslant 1$. On dit que $p$ est jovial d’ordre $n$ s’il existe des entiers $a_1, \ldots, a_n$ tels que :
> $$2 \leqslant a_1 < a_2 < \cdots < a_n, \quad a_n = p \quad \text{et} \quad \frac{1}{a_1} + \cdots + \frac{1}{a_n} = 1.$$
> Ainsi, $12$ est jovial d’ordre $4$ car
> $$\frac{1}{2} + \frac{1}{4} + \frac{1}{6} + \frac{1}{12} = 1.$$
> Un entier $p \geqslant 2$ est dit jovial s’il existe un entier $n \geqslant 1$ tel que $p$ soit jovial d’ordre $n$.
>
> **2.1 Quelques exemples**
>
> **1.** Montrer que, si l’entier $p$ est jovial d’ordre $n$, alors $n \leqslant p-1$.
>
> **2.** Existe-t-il des entiers joviaux d’ordre $2$ ? Montrer que $2$ et $4$ ne sont pas joviaux.
>
> **3.** Montrer qu’un entier premier n’est pas jovial.
>
> **4.** Quel est le plus petit entier jovial ?
>
> **5.** Déterminer tous les entiers joviaux d’ordre $3$.
>
> **6.** Soit $p$ un entier jovial. Montrer que $2p$ et $p(p+1)$ sont joviaux.
>
> **7.** Montrer que le produit de deux entiers joviaux est jovial.
>
> **2.2 Deux suites d’entiers**
>
> On définit les suites $(u_n)_{n \in \mathbb{N}^*}$ et $(v_n)_{n \in \mathbb{N}^*}$ par $u_1 = 1$ et, pour tout entier $n \geqslant 1$,
> $$v_n = 1 + u_n \quad \text{et} \quad u_{n+1} = u_n(1+u_n).$$
>
> **1.** Montrer, pour tout $n \geqslant 3$, que $u_n$ est un entier jovial d’ordre $n$.
>
> **2.** Montrer, pour tout $n \geqslant 1$, que $v_{n+1} = v_1 v_2 \cdots v_n + 1$.
>
> **2.3 Un majorant optimal pour les nombres joviaux d’ordre fixé**
>
> Soit $n$ un entier naturel non nul. On note $\mathscr{H}_n$ la propriété suivante :
>
> Si $x_1, \ldots, x_n$ sont des entiers strictement positifs et $a$ un nombre rationnel strictement positif tels que
> $$x_1 \leqslant x_2 \leqslant \cdots \leqslant x_n \leqslant a \quad \text{et} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_n} + \frac{1}{a} = 1,$$
> alors $a+1 \leqslant v_{n+1}$ et $x_1 \cdots x_n(a+1) \leqslant v_1 \cdots v_n v_{n+1}$.
>
> On se propose de démontrer par récurrence sur $n$ que la propriété $\mathscr{H}_n$ est vraie pour tout $n \geqslant 1$.
>
> **1.** Démontrer que la propriété $\mathscr{H}_1$ est vraie.
>
> Dans les questions suivantes, on considère un entier $n \geqslant 2$, et on suppose que la propriété $\mathscr{H}_{n-1}$ est vraie. On considère des entiers strictement positifs $x_1, \ldots, x_n$ et un nombre rationnel strictement positif $a$ tels que :
> $$x_1 \leqslant x_2 \leqslant \cdots \leqslant x_n \leqslant a \quad \text{et} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_n} + \frac{1}{a} = 1.$$
>
> **2.** Montrer que $x_1 \geqslant 2$ et que $a \leqslant x_1 x_2 \cdots x_n$.
>
> **3.** On suppose dans cette question que
> $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{x_n-1} \geqslant 1$$
> et que $x_n > x_{n-1}$.
>
> **a.** Montrer qu’il existe un unique nombre rationnel $q$, strictement positif, tel que :
> $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{q} = 1.$$
>
> **b.** Montrer que $x_n - 1 \leqslant q$.
>
> **c.** En déduire que $q+1 \leqslant v_n$ puis que $x_1 x_2 \cdots x_n \leqslant v_1 v_2 \cdots v_n$.
>
> **d.** En déduire que $a+1 \leqslant v_{n+1}$ et $x_1 \cdots x_n(a+1) \leqslant v_1 \cdots v_n v_{n+1}$.
>
> **4.** On suppose dans cette question que
> $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{x_n-1} \geqslant 1$$
> et que $x_n = x_{n-1}$.
>
> **a.** Montrer que $x_n \geqslant 4$.
>
> **b.** Montrer qu’il existe deux uniques nombres rationnels, strictement positifs, $r$ et $t$ tels que :
> $$\frac{1}{x_n} + \frac{1}{x_n-1} = \frac{1}{x_n-2} + \frac{1}{r} \quad \text{et} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_{n-2}} + \frac{1}{x_n-2} + \frac{1}{t} = 1.$$
>
> **c.** Montrer que
> $$r = x_n + 1 + \frac{x_n^2 - 4x_n + 2}{4x_n - 2}$$
> puis que $(x_n-2)(r+1) \geqslant x_n^2$.
>
> **d.** Montrer que $t \geqslant r \geqslant x_n$.
>
> **e.** En déduire que $a+1 \leqslant v_{n+1}$ et $x_1 \cdots x_n(a+1) \leqslant v_1 \cdots v_n v_{n+1}$.
>
> **5.** On suppose dans cette question que
> $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{x_n-1} < 1.$$
>
> **a.** Montrer qu’il existe un unique nombre rationnel, strictement positif, $b$ tel que :
> $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{x_n-1} + \frac{1}{b} = 1.$$
>
> **b.** Montrer que $(x_n-1)(b+1) \geqslant x_n(a+1)$.
>
> **6.** En déduire que la proposition $\mathscr{H}_n$ est vraie.
>
> *Indication :* Dans le cas où
> $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{x_n-1} < 1,$$
> on pourra chercher à remplacer $x_n$ par $x_n-1$ et $a$ par $b$.
>
> **7.** Montrer, pour tout entier $n \geqslant 3$, que $u_n$ est le plus grand entier jovial d’ordre $n$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_induzione|Induzione]], [[method_estremalita|Estremalità]], [[method_ricorsione|Ricorsione]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1K8ucW3mLigvc0hWdO6997kun_qEZQEkB/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Nomeri interi joviali: numeri interi p che ammette una sequenza di numeri interi >=2 che finiscono a p e la cui reciprocità somma a 1; esempi, due sequenze di numeri interi e un limite superiore ottimale per i numeri interi joviali di ordine fisso dimostrato da induzione.*

> Si dice che un intero naturale $p \ge 2$ sia $\textit{jovial of order } k$ se esistono interi $a_1, \ldots, a_k$ tali che: $$2 \le a_1 < a_2 < \cdots < a_k, \qquad a_k = p \quad \text{and} \quad \frac{1}{a_1} + \cdots + \frac{1}{a_k} = 1.$$ Quindi, $12$ è giovial dell'ordine $4$ perché $\frac{1}{2} + \frac{1}{4} + \frac{1}{6} + \frac{1}{12} = 1$. Si dice che il numero intero $p \ge 2$ sia $\textit{jovial}$ se esiste un numero intero $n \ge 1$ tale che $p$ sia giovial dell'ordine $n$.
> 
> $\textbf{2.1 Some examples}$ $\textbf{1.}$ Dimostrare che se $p$ è di ordine $n$, allora $n \ge 1$. $\textbf{2.}$ Dimostrare che non esiste un intero giovial dell'ordine $1$. Dimostrare che $2$ e $4$ non sono gioviali. $\textbf{3.}$ Dimostrare che nessun numero intero primo è giovial. $\textbf{4.}$ Qual è il più piccolo intero giovial? $\textbf{5.}$ Determinare tutti gli interi joviali dell'ordine $3$. $\textbf{6.}$ $p$ sia un numero intero. Dimostrare che $2p$ e $p(p+1)$ sono gioviali. $\textbf{7.}$ Dimostrare che l'esistenza di $p$ non dipende dall'ordine.
> 
> $\textbf{2.2 Two integer sequences}$ Si definiscono le sequenze $(u_n)_{n \ge 0}$ e $(v_n)_{n \ge 0}$ da $u_1 = 1$ e, per ogni numero intero $n \ge 1$, $$u_{n+1} = u_n(1 + u_n).$$ $\textbf{1.}$ Mostra, per ogni $n \ge 3$, che $u_n$ è un numero intero giovial pari dell'ordine $n$. $\textbf{2.}$ Indicare, per ogni numero intero $n \ge 1$, che $v_{n+1} = v_1 v_2 \cdots v_n + 1$.
> 
> $\textbf{2.3 An optimal upper bound for jovial numbers of fixed order}$ $a$ sia un intero naturale non-zero. Una denota con $\mathscr{H}_a$ la seguente proprietà: se $x_1, \ldots, x_n$ sono numeri interi strettamente positivi, e $b$ un numero strettamente positivo, tale che $$x_1 < x_2 < \cdots < x_n \le a \quad \text{and} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_n} + \frac{1}{a} = 1,$$ allora $a + 1 \le v_{n+1}$ e $x_1 x_2 \cdots x_n \le v_1 v_2 \cdots v_{n+1}$. Si desidera dimostrare con ricorrenza che $\mathscr{H}_a$ è vero per ogni numero intero $n \ge 1$. $\textbf{1.}$ Dimostra che la proprietà $\mathscr{H}_1$ è vera.
> 
> Nelle seguenti domande, si considera un intero $n \ge 2$, si suppone che la proprietà $\mathscr{H}_{a-1}$ sia vera. Si considerano i numeri interi strettamente positivi $x_1, \ldots, x_n$ e un numero razionale strettamente positivo $a$ in modo tale che: $$x_1 < x_2 < \cdots < x_n \le a \quad \text{and} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_n} + \frac{1}{a} = 1.$$ $\textbf{2.}$ Mostri che $x_1 \ge 2$ e che $a < x_1 x_2 \cdots x_n$. In questa domanda si suppone che $\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{q} = 1$ e $x_n \ge x_{n-1}$. $\textbf{a.}$ Mostra che esiste un intero strettamente positivo $q$ tale che: $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{q} = 1.$$ $\textbf{b.}$ Mostra che $x_n - 1 \le q$. $\textbf{c.}$ Deduci quel $q + 1 \le v_n$ e poi quel $x_1 \cdots x_n \le v_1 v_2 \cdots v_n x_n$. $\textbf{d.}$ Dimostrare che $a + 1 \le v_{n+1}$ e $x_1 \cdots x_n \le v_1 v_2 \cdots v_{n+1}$. In questa domanda si suppone che $\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{x_n} < 1$. $\textbf{a.}$ Mostra che $x_n \ge a$. $\textbf{b.}$ Mostra che esistono due numeri razionali unici strettamente positivi $r$ e $t$ in modo tale che: $$\frac{1}{x_n} + \frac{1}{x_n - 1} + \frac{1}{x_n - 2} + r = 1 \quad \text{and} \quad \frac{1}{x_1} + \cdots + \frac{1}{x_{n-2}} + \frac{1}{t} = 1.$$ $\textbf{c.}$ Mostra che $r = x_n + 1 + \frac{x_n - 2}{x_n^2 - 2x_n + 2}$ e quindi che $(x_n - 2)(r + 1) \ge x_n^2$. $\textbf{d.}$ Mostra che $t \ge r \ge x_n$. $\textbf{e.}$ Deduce che $a + 1 \le v_{n+1}$ e $x_1 \cdots x_n \le v_1 v_2 \cdots v_{n+1}$. In questa domanda si suppone che $\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} < 1$. Dimostrare che esiste un numero razionale strettamente positivo $b$ tale che: $$\frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{b} = 1.$$ $\textbf{b.}$ Dimostrare che $(x_n - 1)(b + 1) \ge x_n(a + 1)$. $\textbf{6.}$ Deduce che la proposizione $\mathscr{H}_a$ sia vera. $\textit{Hint: In the case where } \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}} + \frac{1}{x_n} < 1, \text{ one may try to replace } x_n \text{ by } x_n - 1 \text{ and } a \text{ by } b.$ $\textbf{7.}$ Indicare, per ogni intero $n \ge 3$, che $u_n$ è il più grande intero giovial dell'ordine $n$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_induzione|Induzione]], [[method_estremalita|Principio di estremalita]], [[method_ricorsione|Ricorsione]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


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
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1K8ucW3mLigvc0hWdO6997kun_qEZQEkB/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_probabilita,topic_combinatoria,topic_algebra,topic_funzionali,method_induzione,method_conteggio,method_casework,method_ricorsione,skill_conteggio_sistematico,skill_modellizzazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*More than one chance in two for everyone: non-transitive dice and urns; compute and compare winning probabilities, analyze a choosing game, use the Fibonacci sequence and prove a non-transitive distribution exists for every n by induction.*

> **3.1 Des urnes et des dés**
>
> **1.** Dans cette question, on suppose que l’on dispose de trois urnes $A$, $B$ et $C$ qui contiennent chacune quatre jetons indiscernables au toucher. Les jetons de $A$ portent les numéros $12$, $10$, $3$ et $1$, ceux de $B$ portent les numéros $9$, $8$, $7$ et $2$, et ceux de $C$ portent les numéros $11$, $6$, $5$ et $4$.
>
> On tire indépendamment un jeton dans chacune des trois urnes, et on note respectivement $X_A$, $X_B$ et $X_C$ les numéros des jetons tirés dans $A$, $B$ et $C$.
>
> Montrer que $\mathbb{P}(X_A > X_B) = \dfrac{9}{16}$ et que $\mathbb{P}(X_B > X_C) = \dfrac{9}{16}$. Que vaut $\mathbb{P}(X_C > X_A)$ ?
>
> **2.** Dans cette question, on suppose que l’on dispose de trois dés cubiques et équilibrés $D_1$, $D_2$ et $D_3$. Les faces de $D_1$ portent les numéros $6$, $3$, $3$, $3$, $3$, $3$, celles de $D_2$ portent les numéros $5$, $5$, $5$, $2$, $2$, $2$, et celles de $D_3$ portent les numéros $4$, $4$, $4$, $4$, $4$, $1$.
>
> **a.** On lance indépendamment chacun de ces trois dés et on note respectivement $X_1$, $X_2$ et $X_3$ les numéros indiqués par la face supérieure des dés $D_1$, $D_2$ et $D_3$. Calculer les trois probabilités $\mathbb{P}(X_1 > X_2)$, $\mathbb{P}(X_2 > X_3)$ et $\mathbb{P}(X_3 > X_1)$.
>
> **b.** Claire et Paul jouent au jeu suivant : l’un d’eux choisit un des trois dés. Puis l’autre joueur choisit un des deux dés restants. Ils lancent chacun leur dé et celui qui obtient le plus grand numéro gagne. Claire a-t-elle intérêt à choisir son dé avant Paul ou à le laisser choisir en premier ?
>
> **c.** Finalement, il est décidé que c’est Paul qui choisit en premier. Quel(s) dé(s) a-t-il intérêt à choisir ?
>
> **d.** Claire et Paul décident alors de modifier les règles. L’un d’eux choisit un des trois dés. Puis l’autre joueur choisit un des deux dés restants. Ils lancent chacun leur dé deux fois de suite et celui dont la somme des numéros est la plus grande gagne. Paul choisit en premier et il prend le dé $D_2$. Quel dé Claire a-t-elle intérêt à choisir ? De façon générale, avec ces nouvelles règles, Claire a-t-elle intérêt à choisir son dé avant Paul ou à le laisser choisir en premier ?
>
> **3.2 La suite de Fibonacci et des urnes**
>
> La suite de Fibonacci $(F_n)_{n \in \mathbb{N}}$ est définie par $F_0 = 0$, $F_1 = 1$ et pour tout entier $n \geqslant 0$,
> $$F_{n+2} = F_{n+1} + F_n.$$
>
> **1.** Montrer, pour tout entier $n \geqslant 3$, que $\sqrt{2}\, F_n < F_{n+1} < 2F_n$.
>
> **2.** Soit $k \geqslant 4$ un entier. Dans cette question, on suppose que l’on dispose de trois urnes $A$, $B$ et $C$ ainsi que de $3F_k$ jetons indiscernables au toucher, numérotés de $1$ à $3F_k$. On répartit ces jetons de la façon suivante :
>
> - les $F_{k-2}$ jetons de plus grands numéros sont placés dans $A$ ;
> - les $F_{k-1}$ jetons de plus grands numéros restants sont placés dans $B$ ;
> - les $F_k$ jetons de plus grands numéros restants sont placés dans $C$ ;
> - les $F_{k-1}$ jetons de plus grands numéros restants sont placés dans $A$ ;
> - les $F_{k-2}$ derniers jetons sont placés dans $B$.
>
> On tire indépendamment un jeton dans chacune des trois urnes, et on note respectivement $X_A$, $X_B$ et $X_C$ les numéros des jetons tirés dans $A$, $B$ et $C$.
>
> **a.** Démontrer les trois inégalités :
> $$\mathbb{P}(X_A > X_B) > \frac{1}{2}, \quad \mathbb{P}(X_B > X_C) > \frac{1}{2} \quad \text{et} \quad \mathbb{P}(X_C > X_A) > \frac{1}{2}.$$
>
> **b.** Claire et Paul jouent au jeu suivant : l’un commence par choisir une des trois urnes ci-dessus et pioche un des jetons qu’elle contient. Puis l’autre joueur choisit une des deux autres urnes et pioche un des jetons qu’elle contient. Celui des deux qui obtient le jeton de plus grand numéro gagne. Claire a-t-elle intérêt à choisir son dé avant Paul ou à le laisser choisir en premier ?
>
> **3.3 Urnes non transitives**
>
> Soit $n \geqslant 3$ un entier. On dispose de trois urnes $A$, $B$ et $C$ et de $3n$ jetons indiscernables au toucher, numérotés de $1$ à $3n$. On répartit alors les jetons dans les trois urnes de sorte que chaque urne contienne $n$ jetons. On tire alors indépendamment un jeton dans chacune des trois urnes, et on note respectivement $X_A$, $X_B$ et $X_C$ les numéros des jetons tirés dans $A$, $B$ et $C$.
>
> **1.** On suppose, dans cette question uniquement, que chacune des trois probabilités $\mathbb{P}(X_A > X_B)$, $\mathbb{P}(X_B > X_C)$ et $\mathbb{P}(X_C > X_A)$ est strictement supérieure à $\dfrac{1}{2}$. On dispose de trois autres urnes, $D$, $E$ et $F$ et de $3n+6$ jetons indiscernables au toucher, numérotés de $1$ à $3n+6$. Les $3n$ jetons numérotés de $1$ à $3n$ ont été répartis comme précédemment dans les urnes $A$, $B$ et $C$. Les urnes $D$, $E$ et $F$ sont alors remplies de la façon suivante :
>
> - l’urne $D$ reçoit le contenu de l’urne $A$, ainsi que les jetons numérotés $3n+1$ et $3n+6$ ;
> - l’urne $E$ reçoit le contenu de l’urne $B$, ainsi que les jetons numérotés $3n+4$ et $3n+5$ ;
> - l’urne $F$ reçoit le contenu de l’urne $C$, ainsi que les jetons numérotés $3n+2$ et $3n+3$.
>
> Chacune des urnes $D$, $E$ et $F$ contient ainsi $n+2$ jetons. On tire alors indépendamment un jeton dans chacune des urnes $D$, $E$ et $F$, et on note respectivement $X_D$, $X_E$ et $X_F$ les numéros des jetons tirés dans $D$, $E$ et $F$.
>
> **a.** Exprimer $\mathbb{P}(X_D > X_E)$ en fonction de $n$ et $\mathbb{P}(X_A > X_B)$.
>
> **b.** Montrer que chacune des probabilités $\mathbb{P}(X_D > X_E)$, $\mathbb{P}(X_E > X_F)$ et $\mathbb{P}(X_F > X_D)$ est strictement supérieure à $\dfrac{1}{2}$.
>
> **2.** Soit $n \geqslant 3$ un entier. On note $\mathscr{H}_n$ la propriété suivante :
>
> Il est possible de répartir $3n$ jetons indiscernables au toucher, numérotés de $1$ à $3n$, dans trois urnes $A$, $B$ et $C$ de sorte que les deux conditions ci-dessous soient satisfaites.
>
> - Chacune des trois urnes contient $n$ jetons.
> - Si l’on tire indépendamment un jeton dans chacune de ces urnes et si l’on note respectivement $X_A$, $X_B$ et $X_C$ les numéros des jetons tirés dans $A$, $B$ et $C$, alors chacune des probabilités $\mathbb{P}(X_A > X_B)$, $\mathbb{P}(X_B > X_C)$ et $\mathbb{P}(X_C > X_A)$ est strictement supérieure à $\dfrac{1}{2}$.
>
> **a.** Montrer que les propriétés $\mathscr{H}_3$ et $\mathscr{H}_4$ sont vraies.
>
> **b.** Montrer, pour tout entier $n \geqslant 3$, que l’affirmation $\mathscr{H}_n$ est vraie.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_induzione|Induzione]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1K8ucW3mLigvc0hWdO6997kun_qEZQEkB/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Più di una possibilità su due per tutti: dadi e urne non transitivi; calcolare e confrontare le probabilità di vittoria, analizzare un gioco di scelta, usare la successione di Fibonacci e dimostrare per induzione che esiste una distribuzione non transitiva per ogni n.*

> $\textbf{3.1 Dice and urns}$
> $\textbf{1.}$ In questo problema si suppone di avere tre urne $A$, $B$ e $C$ contenenti ciascuna gettoni indistinguibili al tatto. I gettoni dell’urna $A$ portano i numeri $11$, $6$, $10$, $3$ e $1$; quelli dell’urna $B$ portano i numeri $9$, $8$, $7$, $2$ e $5$; quelli dell’urna $C$ portano i numeri $11$, $5$, $4$, $3$ e $4$. Si estrae indipendentemente un gettone da ciascuna urna, e si indica con $X_A$, $X_B$ e $X_C$ rispettivamente i numeri dei gettoni estratti dall’urna $A$, $B$ e $C$.
>
> $\textbf{a.}$ Si suppone ora che ciascuna delle tre urne contenga cinque gettoni numerati come sopra. Calcolare le tre probabilità $\mathbb{P}(X_A > X_B)$, $\mathbb{P}(X_B > X_C)$ e $\mathbb{P}(X_C > X_A)$.
>
> $\textbf{b.}$ Claire e Paul giocano a un gioco nel seguente modo: uno dei due inizia scegliendo un dado, poi l’altro sceglie uno dei due dadi rimanenti con cui giocare. Ognuno lancia il proprio dado, e vince chi ottiene il numero più alto. Claire ha interesse a scegliere il suo dado prima di Paul, oppure conviene lasciare che sia Paul a scegliere per primo?
>
> $\textbf{c.}$ Infine si decide che è Paul a scegliere per primo. Quali dadi ha interesse a scegliere?
>
> $\textbf{d.}$ Claire e Paul decidono allora di modificare le regole. Uno dei due sceglie uno dei tre dadi. Poi l’altro prende il dado $D_2$ per primo. Quale dado ha interesse a scegliere Claire, e conviene lasciare che sia l’altro a scegliere per primo?
> 
> $\textbf{2.}$ In questo problema si suppone di avere tre dadi bilanciati a sei facce $D_1$, $D_2$ e $D_3$, dove le facce di $D_1$ portano i numeri $0$, $0$, $4$, $4$, $4$, $4$; quelle di $D_2$ portano i numeri $3$, $3$, $3$, $3$, $3$, $3$; e quelle di $D_3$ portano i numeri $6$, $6$, $2$, $2$, $2$, $2$.
>
> $\textbf{a.}$ Si lanciano indipendentemente i tre dadi e si indicano rispettivamente con $X_1$, $X_2$ e $X_3$ i numeri mostrati dalla faccia superiore dei dadi $D_1$, $D_2$ e $D_3$. Si calcolino le tre probabilità $\mathbb{P}(X_1 > X_2)$, $\mathbb{P}(X_2 > X_3)$ e $\mathbb{P}(X_3 > X_1)$.
>
> $\textbf{b.}$ Claire e Paul giocano a un gioco nel seguente modo: uno di loro inizia scegliendo un dado, poi l’altro sceglie uno dei due dadi rimanenti. Ognuno lancia il proprio dado e vince chi ottiene il numero più alto. Claire ha interesse a scegliere il suo dado prima di Paul o preferisce lasciare che sia Paul a scegliere per primo?
>
> $\textbf{c.}$ Infine si decide che è Paul a scegliere per primo. Quale dado o dadi ha interesse a scegliere?
>
> $\textbf{d.}$ Claire e Paul decidono poi di modificare le regole: uno di loro sceglie uno dei tre dadi, poi l’altro prende il dado $D_2$. Quale dado ha interesse a scegliere Claire?
> 
> $\textbf{3.2 The Fibonacci sequence and the urns}$
> La successione di Fibonacci $(F_n)_{n \ge 0}$ è definita da $F_0 = 0$, $F_1 = 1$ e, per ogni intero $n \ge 0$,
> $$F_{n+2} = F_{n+1} + F_n.$$
> $\textbf{1.}$ Si dimostri che, per ogni intero $n \ge 3$, vale $\sqrt{2}\, F_n < F_{n+1} < 2 F_n$.
> $\textbf{2.}$ Sia $k \ge 4$ un numero intero. In questo problema si suppone di avere tre urne $A$, $B$ e $C$, nonché $3 F_k$ gettoni indistinguibili al tatto, numerati da $1$ a $3 F_k$. Si distribuiscono i gettoni nel modo seguente:
> $\bullet$ i $F_{k-2}$ gettoni con i numeri più grandi vengono posti in $A$;
> $\bullet$ i $F_{k-1}$ gettoni con i numeri più grandi rimanenti vengono posti in $B$;
> $\bullet$ i $F_k$ gettoni con i numeri più grandi rimanenti vengono posti in $C$;
> $\bullet$ i $F_{k-1}$ gettoni con i numeri più grandi rimanenti vengono posti in $A$;
> $\bullet$ gli ultimi $F_{k-2}$ gettoni vengono posti in $B$.
> Si estrae indipendentemente un gettone da ciascuna delle urne $A$, $B$ e $C$; si indichino rispettivamente con $X_A$, $X_B$ e $X_C$ i numeri dei gettoni estratti da $A$, $B$ e $C$.
> $\textbf{a.}$ Si dimostrino le due disuguaglianze $\mathbb{P}(X_A > X_B) \ge \frac{1}{2}$ e $\mathbb{P}(X_B > X_C) \ge \frac{1}{2}$.
> $\textbf{b.}$ Claire e Paul giocano a un gioco nel seguente modo: uno dei due inizia scegliendo una delle tre urne; poi il secondo giocatore sceglie una delle due urne rimanenti che gli si oppone. Ognuno estrae un gettone dalla propria urna e vince chi ha estratto il numero più alto. Claire ha interesse a scegliere la propria urna prima di Paul, oppure conviene lasciare che sia Paul a scegliere per primo?
> 
> $\textbf{3.3 Non-transitive urns}$
> Sia $n \ge 3$ un intero positivo. Si hanno tre urne $A$, $B$ e $C$ e $3n$ gettoni indistinguibili al tatto, numerati da $1$ a $3n$. Si distribuiscono i gettoni nelle tre urne in modo che ciascuna contenga $n$ gettoni. Si estrae poi indipendentemente un gettone da ciascuna delle tre urne, e si indicano rispettivamente con $X_A$, $X_B$ e $X_C$ i numeri dei gettoni estratti da $A$, $B$ e $C$. Si dice che tale distribuzione è non transitiva quando le probabilità $\mathbb{P}(X_A > X_B)$, $\mathbb{P}(X_B > X_C)$ e $\mathbb{P}(X_C > X_A)$ sono tutte strettamente maggiori di $\frac{1}{2}$.
>
> $\textbf{1.}$
> In questo quesito si considera una distribuzione non transitiva dei $3n$ gettoni numerati da $1$ a $3n$. Si formano tre nuove urne $D$, $E$ e $F$: l’urna $D$ contiene il contenuto dell’urna $A$, nonché i gettoni numerati $3n+1$ e $3n+6$; l’urna $E$ contiene il contenuto dell’urna $B$, nonché i gettoni numerati $3n+4$ e $3n+5$; l’urna $F$ contiene il contenuto dell’urna $C$, nonché i gettoni numerati $3n+2$ e $3n+3$. Ognuna delle urne $D$, $E$ e $F$ contiene quindi $n+2$ gettoni. Si estrae poi indipendentemente un gettone da ciascuna delle urne $D$, $E$ e $F$, e si indicano rispettivamente con $X_D$, $X_E$ e $X_F$ i numeri dei gettoni estratti da $D$, $E$ e $F$.
>
> $\textbf{a.}$
> Si dimostri che le probabilità $\mathbb{P}(X_D > X_E)$, $\mathbb{P}(X_E > X_F)$ e $\mathbb{P}(X_F > X_D)$ sono strettamente maggiori di $\frac{1}{2}$.
>
> $\textbf{b.}$
> Si dimostri che ciascuna delle probabilità $\mathbb{P}(X_D > X_E)$, $\mathbb{P}(X_E > X_F)$ e $\mathbb{P}(X_F > X_D)$ è strettamente maggiore di $\frac{1}{2}$.
>
> $\textbf{2.}$
> Sia $n \ge 3$ un intero positivo. Si indica con $\mathscr{N}_n$ la seguente proprietà: è possibile distribuire $3n$ gettoni indistinguibili al tatto, numerati da $1$ a $3n$, in tre urne $A$, $B$ e $C$ in modo che siano soddisfatte simultaneamente le due condizioni seguenti:
> $\bullet$ Ognuna delle tre urne contiene $n$ gettoni.
> $\bullet$ Se si estrae indipendentemente un gettone da ciascuna delle urne e si indicano rispettivamente con $X_A$, $X_B$ e $X_C$ i numeri dei gettoni estratti da $A$, $B$ e $C$, allora le probabilità $\mathbb{P}(X_A > X_B)$, $\mathbb{P}(X_B > X_C)$ e $\mathbb{P}(X_C > X_A)$ sono strettamente maggiori di $\frac{1}{2}$.
>
> $\textbf{a.}$
> Si dimostri che le proprietà $\mathscr{N}_3$ e $\mathscr{N}_4$ sono vere.
>
> $\textbf{b.}$
> Si dimostri, per ogni intero positivo $n \ge 3$, che l’affermazione $\mathscr{N}_n$ è vera.

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*More than one chance in two for everyone: non-transitive dice and urns; compute and compare winning probabilities, analyze a choosing game, use the Fibonacci sequence and prove a non-transitive distribution exists for every n by induction.*

> $\textbf{3.1 Dice and urns}$
> $\textbf{1.}$ In this question, one supposes that one has three urns $A$, $B$ and $C$ that contain each tokens indistinguishable by touch. The tokens of $A$ bear the numbers $11$, $6$, $10$, $3$ and $1$; those of $B$ bear the numbers $9$, $8$, $7$, $2$ and $5$; those of $C$ bear the numbers $11$, $5$, $4$, $3$ and $4$. One draws independently one token from each of the urns, one denotes respectively by $X_A$, $X_B$ and $X_C$ the numbers of the tokens drawn in $A$, $B$ and $C$.
> $\textbf{a.}$ One supposes here that the three urns contain each five tokens numbered such as above. Calculate the three probabilities $\mathbb{P}(X_A > X_B)$, $\mathbb{P}(X_B > X_C)$ and $\mathbb{P}(X_C > X_A)$.
> $\textbf{b.}$ Claire and Paul play at the following game: one of them begins by choosing a die, then the other chooses one of the two remaining dice that she contests. They each throw their die and the one who obtains the larger number wins. Does Claire have an interest in choosing her die before Paul or in letting him choose first?
> $\textbf{c.}$ Finally, it is decided that it is Paul who chooses first. Which die or dice does he have an interest in choosing?
> $\textbf{d.}$ Claire and Paul then decide to modify the rules. One of them chooses one of the three dice. Then the other takes die $D_2$ first. Which die does Claire have an interest in choosing, and in letting choose first?
> 
> $\textbf{2.}$ In this question, one supposes that one has three balanced six-faced dice $D_1$, $D_2$ and $D_3$, where the faces of $D_1$ bear the numbers $0$, $0$, $4$, $4$, $4$, $4$; those of $D_2$ bear the numbers $3$, $3$, $3$, $3$, $3$, $3$; and those of $D_3$ bear the numbers $6$, $6$, $2$, $2$, $2$, $2$.
> $\textbf{a.}$ One throws independently each of the three dice and one denotes respectively by $X_1$, $X_2$ and $X_3$ the numbers indicated by the upper face of the dice $D_1$, $D_2$ and $D_3$. Calculate the three probabilities $\mathbb{P}(X_1 > X_2)$, $\mathbb{P}(X_2 > X_3)$ and $\mathbb{P}(X_3 > X_1)$.
> $\textbf{b.}$ Claire and Paul play at the following game: one of them begins by choosing a die, then the other chooses one of the two remaining dice. They each throw their die and the one who obtains the larger number wins. Does Claire have an interest in choosing her die before Paul or in letting him choose first?
> $\textbf{c.}$ Finally, it is decided that it is Paul who chooses first. Which die or dice does he have an interest in choosing?
> $\textbf{d.}$ Claire and Paul then decide to modify the rules: one of them chooses one of the three dice, then the other takes die $D_2$. Which die does Claire have an interest in choosing?
> 
> $\textbf{3.2 The Fibonacci sequence and the urns}$
> The Fibonacci sequence $(F_n)_{n \ge 0}$ is defined by $F_0 = 0$, $F_1 = 1$ and, for every integer $n \ge 0$,
> $$F_{n+2} = F_{n+1} + F_n.$$
> $\textbf{1.}$ Show, for every integer $n \ge 3$, that $\sqrt{2}\, F_n < F_{n+1} < 2 F_n$.
> $\textbf{2.}$ Let $k \ge 4$ be an integer. In this question, one supposes that one has three urns $A$, $B$ and $C$ as well as $3 F_k$ tokens indistinguishable by touch, numbered from $1$ to $3 F_k$. One distributes these tokens in the following manner:
> $\bullet$ the $F_{k-2}$ tokens of largest numbers are placed in $A$;
> $\bullet$ the $F_{k-1}$ tokens of largest numbers remaining are placed in $B$;
> $\bullet$ the $F_k$ tokens of largest numbers remaining are placed in $C$;
> $\bullet$ the $F_{k-1}$ tokens of largest numbers remaining are placed in $A$;
> $\bullet$ the $F_{k-2}$ last tokens are placed in $B$.
> One draws independently one token from each of the urns $A$, $B$ and $C$, one denotes respectively by $X_A$, $X_B$ and $X_C$ the numbers of the tokens drawn in $A$, $B$ and $C$.
> $\textbf{a.}$ Show the two inequalities $\mathbb{P}(X_A > X_B) \ge \frac{1}{2}$ and $\mathbb{P}(X_B > X_C) \ge \frac{1}{2}$.
> $\textbf{b.}$ Claire and Paul play at the following game: one of them begins by choosing one of the three urns; then the other player chooses one of the two remaining urns that he contests. They each draw a token from their urn and the one who draws the larger number wins. Does Claire have an interest in choosing her urn before Paul or in letting him choose first?
> 
> $\textbf{3.3 Non-transitive urns}$
> Let $n \ge 3$ be an integer. One has three urns $A$, $B$ and $C$ and $3n$ tokens indistinguishable by touch, numbered from $1$ to $3n$. One distributes the tokens in the three urns so that each urn contains $n$ tokens. One draws then independently one token from each of the three urns, and one denotes respectively by $X_A$, $X_B$ and $X_C$ the numbers of the tokens drawn in $A$, $B$ and $C$. One says that such a distribution is non-transitive when the probabilities $\mathbb{P}(X_A > X_B)$, $\mathbb{P}(X_B > X_C)$ and $\mathbb{P}(X_C > X_A)$ are all strictly greater than $\frac{1}{2}$.
> $\textbf{1.}$ In this question, one considers a non-transitive distribution of the $3n$ tokens numbered from $1$ to $3n$. One forms three new urns $D$, $E$, $F$: urn $D$ contains the content of the urn $A$, as well as the tokens numbered $3n+1$ and $3n+6$; urn $E$ contains the content of the urn $B$, as well as the tokens numbered $3n+4$ and $3n+5$; urn $F$ contains the content of the urn $C$, as well as the tokens numbered $3n+2$ and $3n+3$. Each of the urns $D$, $E$ and $F$ thus contains $n+2$ tokens. One draws then independently one token from each of the urns $D$, $E$ and $F$, and one denotes respectively by $X_D$, $X_E$ and $X_F$ the numbers of the tokens drawn in $D$, $E$ and $F$.
> $\textbf{a.}$ Show that the probabilities $\mathbb{P}(X_D > X_E)$, $\mathbb{P}(X_E > X_F)$ and $\mathbb{P}(X_F > X_D)$ are strictly greater than $\frac{1}{2}$.
> $\textbf{b.}$ Show that each of the probabilities $\mathbb{P}(X_D > X_E)$, $\mathbb{P}(X_E > X_F)$ and $\mathbb{P}(X_F > X_D)$ is strictly greater than $\frac{1}{2}$.
> $\textbf{2.}$ Let $n \ge 3$ be an integer. One denotes by $\mathscr{N}_n$ the following property: it is possible to distribute $3n$ tokens indistinguishable by touch, numbered from $1$ to $3n$, in three urns $A$, $B$ and $C$ so that the two conditions below are simultaneously satisfied:
> $\bullet$ Each of the three urns contains $n$ tokens.
> $\bullet$ If one draws independently one token from each of the urns and denotes respectively by $X_A$, $X_B$ and $X_C$ the numbers of the tokens drawn in $A$, $B$ and $C$, then the probabilities $\mathbb{P}(X_A > X_B)$, $\mathbb{P}(X_B > X_C)$ and $\mathbb{P}(X_C > X_A)$ are strictly greater than $\frac{1}{2}$.
> $\textbf{a.}$ Show that the properties $\mathscr{N}_3$ and $\mathscr{N}_4$ are true.
> $\textbf{b.}$ Show, for every integer $n \ge 3$, that the assertion $\mathscr{N}_n$ is true.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_induzione|Induzione]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1K8ucW3mLigvc0hWdO6997kun_qEZQEkB/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
