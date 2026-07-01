---
title: Concours Général des Lycées 2016 — Matematica — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2016__Q03
parent: src_cgen_2016
competition: Concours Général des Lycées 2016 — Matematica
family: concours_generale
year: '2016'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Going into C: with j = e^{2i pi/3} and dice-based variables Z_k = j^{F_k},
  study the probability p_n that S_n = Z_1+...+Z_n = 0, derive a closed form via
  binomials, and analyse the counting variable X_n of indices with S_k = 0.
qa_score: '2'
topics:
  - topic_probabilita
  - topic_algebra
methods:
  - method_conteggio
  - method_casework
  - method_ricorsione
skills:
  - skill_conteggio_sistematico
  - skill_manipolazione_algebrica
  - skill_riconoscimento_pattern
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2016
  - livello/Concours-Général
  - topic/probabilita
  - topic/algebra
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Going into C: with j = e^{2i pi/3} and dice-based variables Z_k = j^{F_k}, study the probability p_n that S_n = Z_1+...+Z_n = 0, derive a closed form via binomials, and analyse the counting variable X_n of indices with S_k = 0.*

> Problem 3: Going into $\mathbb{C}$.
> 
> In this whole problem, $j$ denotes the complex number $e^{2i\pi/3}$. The probability of an event $A$ is denoted $P(A)$.
> 
> \textbf{1. a.} Verify that $j^3 = 1$ and $1 + j + j^2 = 0$.
> 
> \textbf{b.} What can one say of the triangle whose vertices are the three points with affixes $1$, $j$, $j^2$?
> 
> \textbf{c.} Show that, $a$, $b$, $c$ being three nonzero reals, $a + bj + cj^2 = 0$ if and only if $a = b = c$.
> 
> From now on $j$ designates the complex number above. One throws a balanced die (with faces numbered $1$ to $6$) and one denotes by $Z$ the random variable equal to $j^F$, where $F$ is the result obtained [statement partly illegible].
> 
> \textbf{2.} Show that $Z$ takes the values $1$, $j$, $j^2$ and that $P(Z = 1) = P(Z = j) = P(Z = j^2)$.
> 
> We consider an integer $n \ge 1$ and we throw the die $n$ times (independent throws). We denote by $F_k$ the result of the $k$-th throw, for $k \in \{1, \dots, n\}$. Let $Z_k = j^{F_k}$ be the resulting variable at the $k$-th throw, for $k \in \{1, \dots, n\}$, and set $S_n = Z_1 + \cdots + Z_n$ and $p_n = P(S_n = 0)$. We denote by $U_n$ the variable giving the number of integers $k \in \{1, \dots, n\}$ such that $Z_k = 1$, by $V_n$ the one giving the number of integers $k \in \{1, \dots, n\}$ such that $Z_k = j$, and by $W_n$ the one giving the number of integers $k \in \{1, \dots, n\}$ such that $Z_k = j^2$.
> 
> \textbf{3. a.} Determine $U_n + V_n + W_n$.
> 
> \textbf{b.} Show that $S_n = (U_n - V_n) j^0 + (V_n - W_n) j$ [exact grouping partly illegible; $S_n$ expressed via the differences $U_n - V_n$ and $V_n - W_n$].
> 
> \textbf{c.} Show that $S_n = 0$ if and only if $U_n = V_n = W_n$.
> 
> \textbf{d.} Deduce that if $n$ is not a multiple of $3$, then $p_n = 0$.
> 
> \textbf{4.} Suppose now that there exists an integer $m$ such that $n = 3m$.
> 
> \textbf{a.} Show that the variable $U_n$ follows a binomial law, whose parameters one precises.
> 
> \textbf{b.} Deduce that $P(U_n = m) = \dbinom{3m}{m}\dfrac{2^{2m}}{3^{3m}}$.
> 
> \textbf{c.} Show that $P_{(U_n = m)}(V_n = m) = 2^{-2m}\dbinom{2m}{m}$.
> 
> \textbf{d.} Deduce that $p_{3m} = 3^{-3m}\dbinom{3m}{m}\dbinom{2m}{m}$.
> 
> The preceding question, combined with a classical expression of binomial coefficients, allows one to show that $p_{3m+3}$ and $p_{3m}$ satisfy the following relation, which one does not ask to demonstrate:
> $$\frac{p_{3m+3}}{p_{3m}} = \frac{(3m+2)(3m+1)}{9(m+1)^2}.$$
> 
> \textbf{5.} For every integer $m \ge 1$, show that $\dfrac{m}{m+1} \le \dfrac{p_{3m+3}}{p_{3m}}$ and deduce that $p_{3m} \ge \dfrac{p_3}{2m}$.
> 
> Let $X_n$ be the random variable giving the number of integers $k \in \{1, \dots, n\}$ such that $S_k = 0$.
> 
> \textbf{6. a.} Determine Bernoulli variables $Y_k$, with $1 \le k \le n$, such that $X_n = Y_1 + \cdots + Y_n$.
> 
> \textbf{b.} Denoting by $E(X_n)$, $E(Y_1), \dots, E(Y_n)$ the expectations of $X_n$, $Y_1, \dots, Y_n$, establish that $E(X_n) = E(Y_1) + \cdots + E(Y_n)$, and that $E(X_n) = p_1 + \cdots + p_n$.
> 
> \textbf{c.} Deduce that $\lim_{n \to +\infty} E(X_n) = +\infty$.
> 
> \textbf{7. a.} Show that $\dfrac{p_{3k+3}}{p_{3k}}$ converges towards a real $q$ and that $q_k \le q \le 1$ for all $n$ [notation partly illegible].
> 
> \textbf{b.} For $r$, $n$ nonzero natural integers, show that $P(X_n \ge r) \le q^r$.
> 
> \textbf{c.} Deduce, for every integer $n \ge 1$, that $E(X_n) \le q + q^2 + \cdots + q^n$.
> 
> \textbf{d.} Conclude.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1b8k3BWxLPQrKuemqOCqKmgPkVkBfx4Ea/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Andando in C: con j = e^{2i pi/3} e variabili a base di dadi Z_k = j^{F_k}, studiare la probabilità p_n che S_n = Z_1+...+Z_n = 0, derivare una forma chiusa tramite binomi, e analizzare la variabile di conteggio X_n degli indici con S_k = 0.*

> Problema 3: Entrare in < MSK0/>.
> 
> In tutto questo problema, $j$ indica il numero complesso $e^{2i\pi/3}$. La probabilità di un evento $A$ è indicata come $P(A)$.
> 
> - Sì, certo. a.} Verificare che $j^3 = 1$ e $1 + j + j^2 = 0$.
> 
> Che cosa si può dire del triangolo le cui vertici sono i tre punti con affissi $1$, $j$, $j^2$?
> 
> \textbf{c.} Mostra che, $a$, $b$, $c$ sono tre reali non zero, $a + bj + cj^2 = 0$ se e solo se $a = b = c$.
> 
> Da ora in poi $j$ designa il numero complesso sopra. Si lancia un dado equilibrato (con facce numerate $1$ a $6$) e si denota con $Z$ la variabile casuale uguale a $j^F$, dove $F$ è il risultato ottenuto [la dichiarazione è parzialmente illeggibile].
> 
> \textbf{2.} Mostra che $Z$ assume i valori $1$, $j$, $j^2$ e che $P(Z = 1) = P(Z = j) = P(Z = j^2)$.
> 
> Consideriamo un intero $n \ge 1$ e lanciamo il dado $n$ volte (lanci indipendenti). Indichiamo con $F_k$ il risultato del $k$-th lancio, per $k \in \{1, \dots, n\}$. $Z_k = j^{F_k}$ deve essere la variabile risultante al $k$-th throw, per $k \in \{1, \dots, n\}$, e impostare $S_n = Z_1 + \cdots + Z_n$ e $p_n = P(S_n = 0)$. Indichiamo con $U_n$ la variabile che dà il numero di integri $k \in \{1, \dots, n\}$ tale che $Z_k = 1$, con $V_n$ quella che dà il numero di integri $k \in \{1, \dots, n\}$ tale che $Z_k = j$, e con $W_n$ quella che dà il numero di integri $k \in \{1, \dots, n\}$ tale che $Z_k = j^2$.
> 
> - Sì, signore. a.} Determinare < MSK0/>.
> 
> \textbf{b.} Indicare che $S_n = (U_n - V_n) j^0 + (V_n - W_n) j$ [gruppo esatto parzialmente illeggibile; $S_n$ espresso attraverso le differenze $U_n - V_n$ e $V_n - W_n$].
> 
> \textbf{c.} Mostra che $S_n = 0$ se e solo se $U_n = V_n = W_n$.
> 
> \textbf{d.} Deduci che se $n$ non è un multiple di $3$, allora $p_n = 0$.
> 
> \textbf{4.} Supponiamo ora che esista un intero $m$ tale che $n = 3m$.
> 
> \textbf{a.} Mostra che la variabile $U_n$ segue una legge binomial, i cui parametri si precisano.
> 
> \textbf{b.} Deduce che $P(U_n = m) = \dbinom{3m}{m}\dfrac{2^{2m}}{3^{3m}}$.
> 
> \textbf{c.} Mostra che $P_{(U_n = m)}(V_n = m) = 2^{-2m}\dbinom{2m}{m}$.
> 
> Deduci questo $p_{3m} = 3^{-3m}\dbinom{3m}{m}\dbinom{2m}{m}$.
> 
> La domanda precedente, combinata con un'espressione classica dei coefficienti binomiali, consente di dimostrare che $p_{3m+3}$ e $p_{3m}$ soddisfano la seguente relazione, che non si chiede di dimostrare: $$\frac{p_{3m+3}}{p_{3m}} = \frac{(3m+2)(3m+1)}{9(m+1)^2}.$$
> 
> \textbf{5.} Per ogni numero intero $m \ge 1$, mostrare che $\dfrac{m}{m+1} \le \dfrac{p_{3m+3}}{p_{3m}}$ e dedurre che $p_{3m} \ge \dfrac{p_3}{2m}$.
> 
> $X_n$ sia la variabile casuale che dà il numero di integri $k \in \{1, \dots, n\}$ tale che $S_k = 0$.
> 
> - Sì, signore. a.} Determinare le variabili di Bernoulli $Y_k$, con $1 \le k \le n$, in modo tale che $X_n = Y_1 + \cdots + Y_n$.
> 
> \textbf{b.} Indicando con $E(X_n)$, $E(Y_1), \dots, E(Y_n)$ le aspettative di $X_n$, $Y_1, \dots, Y_n$, stabilisci che $E(X_n) = E(Y_1) + \cdots + E(Y_n)$, e che $E(X_n) = p_1 + \cdots + p_n$.
> 
> Deduci questo $\lim_{n \to +\infty} E(X_n) = +\infty$.
> 
> - Sì, signore. a.} Indicare che $\dfrac{p_{3k+3}}{p_{3k}}$ converge verso un reale $q$ e che $q_k \le q \le 1$ per tutti $n$ [notazione parzialmente illeggibile].
> 
> \textbf{b.} Per $r$, $n$ integri naturali non zero, mostrare che $P(X_n \ge r) \le q^r$.
> 
> \textbf{c.} Deduci, per ogni numero intero $n \ge 1$, che $E(X_n) \le q + q^2 + \cdots + q^n$.
> 
> Conclusione.

[[src_cgen_2016__Q03]]
