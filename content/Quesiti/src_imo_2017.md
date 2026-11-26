---
title: IMO 2017 papers
tipo: gara
competition: IMO 2017 papers
family: imo
year: '2017'
level: IMO
---
<div class="atom-reader" data-gara="Quesiti/src_imo_2017"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_funzionali,method_casework,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Valori a0 con successione radice/+3 periodica*

> Per ogni intero $a_0 > 1$, si definisce la successione $a_0, a_1, a_2, \ldots$ nel modo seguente:
> $$a_{n+1} = \begin{cases} \sqrt{a_n} & \text{se } \sqrt{a_n} \text{ è un intero,} \\ a_n + 3 & \text{altrimenti,} \end{cases}$$
> per ogni $n \geq 0$. Determinare tutti i valori di $a_0$ per i quali esiste un numero $A$ tale che $a_n = A$ per infiniti valori di $n$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f-FfFFSte2Xcf0IS6inIxe8_MiXPlKgB/view)


<div class="qlang-split" data-lang="en"></div>


*Starting values for which the sequence a_n returns to the same value infinitely often*

> For every integer $a_0 > 1$, the sequence $a_0, a_1, a_2, \ldots$ is defined as follows:
> $$a_{n+1} = \begin{cases} \sqrt{a_n} & \text{if } \sqrt{a_n} \text{ is an integer,} \\ a_n + 3 & \text{otherwise,} \end{cases}$$
> for every $n \geq 0$. Determine all values of $a_0$ for which there exists a number $A$ such that $a_n = A$ for infinitely many values of $n$.

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_funzionali|Functional equations / sequences]]
**Method:** [[method_casework|Case analysis]], [[method_congruenze|Modular arithmetic / congruences]]
**Skill:** [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]

[[Quesiti/src_imo_2017#q01|src_imo_2017__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_funzionali,method_casework,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Equazione funzionale f(f(x)f(y))+f(x+y)=f(xy)*

> Sia $\mathbb{R}$ l'insieme dei numeri reali. Determinare tutte le funzioni $f : \mathbb{R} \to \mathbb{R}$ tali che, per tutti i numeri reali $x$ e $y$,
> $$f(f(x)f(y)) + f(x + y) = f(xy).$$

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f-FfFFSte2Xcf0IS6inIxe8_MiXPlKgB/view)


<div class="qlang-split" data-lang="en"></div>


*Functions satisfying f(f(x)f(y)) + f(x+y) = f(xy)*

> Let $\mathbb{R}$ be the set of real numbers. Determine all functions $f : \mathbb{R} \to \mathbb{R}$ such that, for all real numbers $x$ and $y$,
> $$f(f(x)f(y)) + f(x + y) = f(xy).$$

**Topic:** [[topic_funzionali|Functional equations / sequences]]
**Method:** [[method_casework|Case analysis]]
**Skill:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]

[[Quesiti/src_imo_2017#q02|src_imo_2017__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_logica,topic_geometria_piana,method_estremalita,method_invarianti,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Cacciatore e coniglio invisibile nel piano*

> Un cacciatore e un coniglio invisibile giocano una partita nel piano euclideo. Il punto di partenza del coniglio, $A_0$, e il punto di partenza del cacciatore, $B_0$, coincidono. Dopo $n-1$ turni di gioco, il coniglio si trova nel punto $A_{n-1}$ e il cacciatore nel punto $B_{n-1}$. Nel turno $n$-esimo del gioco, avvengono nell'ordine le seguenti tre cose:
> 
> (i) Il coniglio si sposta invisibilmente in un punto $A_n$ tale che la distanza tra $A_{n-1}$ e $A_n$ è esattamente $1$.
> 
> (ii) Un dispositivo di localizzazione comunica al cacciatore un punto $P_n$. L'unica garanzia fornita dal dispositivo è che la distanza tra $P_n$ e $A_n$ è al più $1$.
> 
> (iii) Il cacciatore si sposta visibilmente in un punto $B_n$ tale che la distanza tra $B_{n-1}$ e $B_n$ è esattamente $1$.
> 
> È sempre possibile, indipendentemente da come si muova il coniglio e da quali punti vengano comunicati dal dispositivo, che il cacciatore scelga le proprie mosse in modo tale che dopo $10^9$ turni possa garantire che la distanza tra lui e il coniglio sia al più $100$?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f-FfFFSte2Xcf0IS6inIxe8_MiXPlKgB/view)


<div class="qlang-split" data-lang="en"></div>


*Can the hunter stay within 100 of an invisible rabbit after 10^9 turns?*

> A hunter and an invisible rabbit play a game in the Euclidean plane. The rabbit's starting point, $A_0$, and the hunter's starting point, $B_0$, coincide. After $n-1$ turns of the game, the rabbit is at the point $A_{n-1}$ and the hunter at the point $B_{n-1}$. On the $n$th turn of the game, the following three things happen, in order:
>
> (i) The rabbit moves invisibly to a point $A_n$ such that the distance between $A_{n-1}$ and $A_n$ is exactly $1$.
>
> (ii) A tracking device reports a point $P_n$ to the hunter. The only guarantee provided by the device is that the distance between $P_n$ and $A_n$ is at most $1$.
>
> (iii) The hunter moves visibly to a point $B_n$ such that the distance between $B_{n-1}$ and $B_n$ is exactly $1$.
>
> Is it always possible, no matter how the rabbit moves and which points the device reports, for the hunter to choose his moves so that after $10^9$ turns he can guarantee that the distance between him and the rabbit is at most $100$?

**Topic:** [[topic_logica|Logic, games, strategies]], [[topic_geometria_piana|Plane geometry]]
**Method:** [[method_estremalita|Extremal principle]], [[method_invarianti|Invariants / monovariants]]
**Skill:** [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]

[[Quesiti/src_imo_2017#q03|src_imo_2017__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,method_trigonometria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*KT tangente a Gamma (punti su cerchio)*

> Siano $R$ e $S$ due punti distinti su una circonferenza $\Omega$ tali che $RS$ non sia un diametro. Sia $\ell$ la retta tangente a $\Omega$ in $R$. Il punto $T$ è tale che $S$ è il punto medio del segmento $RT$. Il punto $J$ è scelto sull'arco minore $RS$ di $\Omega$ in modo che la circonferenza circoscritta $\Gamma$ al triangolo $JST$ intersechi $\ell$ in due punti distinti. Sia $A$ il punto comune di $\Gamma$ e $\ell$ più vicino a $R$. La retta $AJ$ incontra di nuovo $\Omega$ nel punto $K$. Dimostrare che la retta $KT$ è tangente a $\Gamma$.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1f-FfFFSte2Xcf0IS6inIxe8_MiXPlKgB/view)


<div class="qlang-split" data-lang="en"></div>


*The line KT is tangent to the circle through J, S and T*

> Let $R$ and $S$ be two distinct points on a circle $\Omega$ such that $RS$ is not a diameter. Let $\ell$ be the tangent line to $\Omega$ at $R$. The point $T$ is such that $S$ is the midpoint of the segment $RT$. The point $J$ is chosen on the minor arc $RS$ of $\Omega$ so that the circumcircle $\Gamma$ of triangle $JST$ meets $\ell$ in two distinct points. Let $A$ be the common point of $\Gamma$ and $\ell$ closer to $R$. The line $AJ$ meets $\Omega$ again at the point $K$. Prove that the line $KT$ is tangent to $\Gamma$.

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Method:** [[method_trigonometria|Trigonometric techniques]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]

[[Quesiti/src_imo_2017#q04|src_imo_2017__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,method_estremalita,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Rimuovere giocatori lasciando 2N con condizioni altezza*

> È dato un intero $N \geq 2$. Una raccolta di $N(N+1)$ calciatori, di cui non ci sono due della stessa altezza, è disposta in fila. Sir Alex vuole eliminare $N(N-1)$ giocatori da questa fila, lasciando una nuova fila di $2N$ giocatori in cui valgono le seguenti $N$ condizioni:
> 
> (1) nessuno si trova tra i due giocatori più alti,
> 
> (2) nessuno si trova tra il terzo e il quarto giocatore più alti,
> 
> $\vdots$
> 
> (N) nessuno si trova tra i due giocatori più bassi.
> 
> Dimostrare che ciò è sempre possibile.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1f-FfFFSte2Xcf0IS6inIxe8_MiXPlKgB/view)


<div class="qlang-split" data-lang="en"></div>


*A row of footballers can be thinned so that the remaining 2N satisfy N separation conditions*

> An integer $N \geq 2$ is given. A collection of $N(N+1)$ footballers, no two of the same height, is arranged in a row. Sir Alex wants to remove $N(N-1)$ players from this row, leaving a new row of $2N$ players in which the following $N$ conditions hold:
>
> (1) nobody stands between the two tallest players,
>
> (2) nobody stands between the third and the fourth tallest players,
>
> $\vdots$
>
> (N) nobody stands between the two shortest players.
>
> Prove that this is always possible.

**Topic:** [[topic_combinatoria|Combinatorics]]
**Method:** [[method_estremalita|Extremal principle]]
**Skill:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]

[[Quesiti/src_imo_2017#q05|src_imo_2017__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,topic_algebra,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Polinomio omogeneo =1 su punti primitivi*

> Una coppia ordinata $(x, y)$ di interi è un *punto primitivo* se il massimo comune divisore di $x$ e $y$ è $1$. Dato un insieme finito $S$ di punti primitivi, dimostrare che esistono un intero positivo $n$ e interi $a_0, a_1, \ldots, a_n$ tali che, per ogni $(x, y) \in S$, si abbia:
> $$a_0 x^n + a_1 x^{n-1} y + a_2 x^{n-2} y^2 + \cdots + a_{n-1} x y^{n-1} + a_n y^n = 1.$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1f-FfFFSte2Xcf0IS6inIxe8_MiXPlKgB/view)


<div class="qlang-split" data-lang="en"></div>


*A polynomial taking the value 1 at every primitive point of a finite set*

> An ordered pair $(x, y)$ of integers is a *primitive point* if the greatest common divisor of $x$ and $y$ is $1$. Given a finite set $S$ of primitive points, prove that there exist a positive integer $n$ and integers $a_0, a_1, \ldots, a_n$ such that, for every $(x, y) \in S$,
> $$a_0 x^n + a_1 x^{n-1} y + a_2 x^{n-2} y^2 + \cdots + a_{n-1} x y^{n-1} + a_n y^n = 1.$$

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Method:** [[method_congruenze|Modular arithmetic / congruences]]
**Skill:** [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]

[[Quesiti/src_imo_2017#q06|src_imo_2017__Q06]]
