---
title: Concours Général des Lycées 2023 — Matematica
tipo: gara
competition: Concours Général des Lycées 2023 — Matematica
family: concours_generale
year: '2023'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2023"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_insiemi_funzioni,topic_funzionali,method_induzione,method_ricorsione,method_fattorizzazione,method_bigezione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_riconoscimento_pattern,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*A recursively defined sequence built from the function r(n) (largest k with n/k integer); show its terms are positive rationals and that every positive rational appears exactly once.*

> Problème 1 : Soyons rationnels !
>
> Pour tout entier $n \ge 1$, on note $v(n)$ le plus grand entier $k$ tel que $\dfrac{n}{2^k}$ soit un entier.
>
> On définit la suite $(u_n)_{n \ge 1}$ par récurrence, en posant $u_1 = 1$ puis, pour tout entier $n \ge 2$,
> $$u_n = \begin{cases} 0 & \text{si } u_{n-1} = 0, \\ 1 + 2v(n) - \dfrac{1}{u_{n-1}} & \text{si } u_{n-1} \ne 0. \end{cases}$$
>
> 1. Donner la valeur des entiers $v(1)$, $v(2)$, $v(3)$ et $v(4)$.
>
> 2. Démontrer, pour tout entier $n \ge 1$, que $v(n) = 0$ si $n$ est impair et que $v(n) = v\!\left(\dfrac{n}{2}\right) + 1$ si $n$ est pair.
>
> 3. Calculer les huit premiers termes de la suite $(u_n)_{n \ge 1}$ et vérifier que $u_8 = 4$.
>
> 4. Démontrer, pour tout entier $n \ge 1$, que $u_n$ est un nombre rationnel strictement positif, que $u_{2n} = u_n + 1$ et que $u_{2n+1} = \dfrac{u_n}{u_n + 1}$.
>
> 5. Démontrer que tout nombre rationnel strictement positif est égal à un terme $u_n$.
>
> 6. Démontrer que tout nombre rationnel strictement positif est égal à un unique terme $u_n$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_fattorizzazione|Fattorizzazione]], [[method_bigezione|Biiezione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1UEmDklBRoLwyCF47wsu7dNuzbiS9gQhj/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Una sequenza definita ricorritivamente costruita dalla funzione r(n) (k più grande con n/k intero); mostrare che i suoi termini sono razionali positivi e che ogni razionale positivo appare esattamente una volta.*

> Il problema 1: siamo razionali.
> 
> Per ogni numero intero $n \ge 1$, $r(n)$ indichi il numero intero più grande $k$ in modo tale che $\frac{n}{k}$ sia un numero intero (così $r(n) = n$). Una sequenza $(u_n)_{n \ge 1}$ viene definita da: $u_1 = 1$ e, per ogni numero intero $n \ge 2$, $$u_n = \begin{cases} 0 & \text{if } u_{n-1} = 0, \\ 1 + 2\,r(n) - \dfrac{1}{u_{n-1}} & \text{if } u_{n-1} \ne 0. \end{cases}$$
> 
> 1. Indicare i valori di $u_1$, $u_2$, $u_3$, $u_4$ e $u_5$.
> 
> 2. Mostrare che per ogni intero $n \ge 1$, si ha $r(n) = 0$ se e solo se $n$ è dispari, e (se $n$ è pari) $r(n) = r\!\left(\frac{n}{2}\right) + 1$.
> 
> 3. Determinare i valori più piccoli di $n$ per i quali $u_n = 4$.
> 
> 4. Mostra che per ogni numero intero $n \ge 1$ per il quale $u_n \ne 0$, il termine $u_n$ è un numero razionale strettamente positivo.
> 
> 5. Mostrare che ogni numero razionale strettamente positivo è uguale a qualche termine $u_n$ della sequenza.
> 
> 6. Mostrare che ogni numero razionale strettamente positivo è uguale a un termine unico $u_n$ della sequenza.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_bigezione|Bigezione / corrispondenza]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*A recursively defined sequence built from the function r(n) (largest k with n/k integer); show its terms are positive rationals and that every positive rational appears exactly once.*

> Problem 1: Let us be rational.
> 
> For every integer $n \ge 1$, let $r(n)$ denote the largest integer $k$ such that $\frac{n}{k}$ is an integer (so $r(n) = n$). One defines a sequence $(u_n)_{n \ge 1}$ by: $u_1 = 1$ and, for every integer $n \ge 2$,
> $$u_n = \begin{cases} 0 & \text{if } u_{n-1} = 0, \\ 1 + 2\,r(n) - \dfrac{1}{u_{n-1}} & \text{if } u_{n-1} \ne 0. \end{cases}$$
> 
> 1. Give the values of $u_1$, $u_2$, $u_3$, $u_4$ and $u_5$.
> 
> 2. Show that for every integer $n \ge 1$, one has $r(n) = 0$ if and only if $n$ is odd, and (if $n$ is even) $r(n) = r\!\left(\frac{n}{2}\right) + 1$.
> 
> 3. Determine the smallest values of $n$ for which $u_n = 4$.
> 
> 4. Show that, for every integer $n \ge 1$ for which $u_n \ne 0$, the term $u_n$ is a strictly positive rational number.
> 
> 5. Show that every strictly positive rational number is equal to some term $u_n$ of the sequence.
> 
> 6. Show that every strictly positive rational number is equal to a unique term $u_n$ of the sequence.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_fattorizzazione|Fattorizzazione]], [[method_bigezione|Biiezione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1UEmDklBRoLwyCF47wsu7dNuzbiS9gQhj/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_algebra,topic_funzionali,topic_disuguaglianze,method_disuguaglianze,method_casework,method_estremalita,method_fattorizzazione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_astrazione,skill_stima"></span>

<div class="qlang-switch" data-default="fr"></div>


*Sympathetic polynomials: study existence/uniqueness of strictly positive roots of equations x^d + (1/n)x - 1 = 0 and their limits, then classify polynomials as initially/falsely/truly sympathetic and study convergence of the positive roots of a convergent sequence of such polynomials.*

> Problème 2 : Limite sympathique !
>
> 2.1 Quelques exemples
>
> 1. On considère dans cette question, pour tout entier $n \ge 1$, l'équation
> $$x^2 + \frac{1}{n}x - 1 = 0$$
> d'inconnue $x$.
>
>    a. Soit $n$ un entier naturel non nul. Démontrer que cette équation admet une unique solution réelle positive ; on la note $x_n$. Exprimer $x_n$ en fonction de $n$.
>
>    b. Démontrer que la suite $(x_n)_{n \ge 1}$ converge, on note $x_\infty$ sa limite.
>
>    c. Démontrer que $x_\infty$ est solution de l'équation $x^2 - 1 = 0$.
>
> 2. On considère dans cette question, pour tout entier $n \ge 1$, l'équation
> $$\frac{1}{n}y^2 - y - 1 = 0$$
> d'inconnue $y$.
>
>    a. Soit $n$ un entier naturel non nul. Démontrer que cette équation admet une unique solution réelle positive, on la note $y_n$.
>
>    b. Démontrer que la suite $(y_n)_{n \ge 1}$ diverge.
>
> 3. On considère dans cette question, pour tout entier $n \ge 1$, l'équation
> $$z^3 + \frac{1}{n}z^2 - 1 = 0$$
> d'inconnue $z$.
>
>    a. Soit $n$ un entier naturel non nul.
>
>       i. Étudier les variations de la fonction $z \mapsto z^3 + \dfrac{1}{n}z^2 - 1$ sur l'intervalle $[0, +\infty[$.
>
>       ii. En déduire que cette équation admet une unique solution réelle positive, on la note $z_n$. Démontrer que $z_n$ appartient à l'intervalle $]0, 1[$.
>
>    b. Démontrer que la suite $(z_n)_{n \ge 1}$ est convergente. On pourra s'intéresser au signe du réel $z_{n+1}^3 + \dfrac{1}{n}z_{n+1}^2 - 1$.
>
>    c. On note $z_\infty$ la limite de la suite $(z_n)_{n \ge 1}$. Démontrer que $z_\infty$ est solution de l'équation $z^3 - 1 = 0$.
>
> 4. On considère dans cette question, pour tout entier $n \ge 1$, l'équation
> $$\frac{1}{n}t^3 - t^2 - 1 = 0$$
> d'inconnue $t$.
>
>    a. Soit $n$ un entier naturel non nul. Démontrer que cette équation admet une unique solution réelle, on la note $t_n$.
>
>    b. La suite $(t_n)_{n \ge 1}$ est-elle convergente ? Si oui, quelle est sa limite ?
>
> 2.2 Polynômes sympathiques
>
> Dans les deux prochaines parties, on considère un entier $d \ge 1$. La fonction $P$ est un polynôme de degré au plus $d$ s'il existe des réels $a_0, a_1, \dots, a_d$ tels que
> $$P(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0$$
> pour tout réel $x$.
>
> Soit $P : x \mapsto a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0$ un polynôme de degré au plus $d$. On dit que :
>
> - $P$ est initialement sympathique si $a_0 = -1$ et si $a_k \ge 0$ pour tout entier $k$ tel que $1 \le k \le d$ ;
> - $P$ est faussement sympathique si $a_0 = -1$ et si $a_k \le 0$ pour tout entier $k$ tel que $1 \le k \le d$ ;
> - $P$ est vraiment sympathique si $a_0 = -1$ et s'il existe un entier $k$ tel que $1 \le k \le d-1$ et pour lequel $a_1 \le 0$, $a_2 \le 0$, $\dots$, $a_k \le 0$ et $a_{k+1} > 0$, $a_{k+2} \ge 0$, $\dots$, $a_d \ge 0$.
>
> Enfin, on dit que $P$ est sympathique s'il est initialement, faussement ou vraiment sympathique.
>
> 5. Quels sont les polynômes qui sont à la fois faussement sympathiques et initialement sympathiques ?
>
> 6. Démontrer que tout polynôme faussement sympathique est
>
>    a. strictement négatif sur l'intervalle $[0, +\infty[$ ;
>
>    b. décroissant sur l'intervalle $[0, +\infty[$.
>
> 7. Soit $P$ un polynôme vraiment sympathique et initialement sympathique.
>
>    a. Démontrer que $P$ est strictement croissant sur l'intervalle $[0, +\infty[$ ;
>
>    b. Démontrer que l'équation $P(x) = 0$ admet une unique solution strictement positive.
>
> 8. Soit $P$ un polynôme vraiment sympathique mais pas initialement sympathique.
>
>    a. Démontrer qu'il existe un réel $b > 0$, un entier $\ell \ge 0$ et un polynôme $Q$ vraiment sympathique tels que
>    $$P'(x) = b x^{\ell} Q(x)$$
>    pour tout réel $x$.
>
>    b. Démontrer qu'il existe un réel $r > 0$ tel que le polynôme $P$ vérifie les quatre propriétés suivantes :
>
>    - $P$ est décroissant sur l'intervalle $[0, r]$ ;
>    - $P$ est strictement croissant sur l'intervalle $[r, +\infty[$ ;
>    - $P$ est strictement négatif sur l'intervalle $[0, r]$ ;
>    - l'équation $P(x) = 0$ admet une unique solution dans l'intervalle $[r, +\infty[$.
>
> 9. Quels sont les polynômes sympathiques $P$ pour lesquels l'équation $P(x) = 0$ admet au moins une solution strictement positive ? Donner, dans ce cas, le tableau de signes de $P$ sur l'intervalle $[0, +\infty[$.
>
> 2.3 De la suite dans les idées
>
> On considère désormais des polynômes vraiment sympathiques $P_1, P_2, \dots$ Puisque ces polynômes sont de degré au plus $d$, on peut écrire chaque polynôme $P_n$ sous la forme
> $$P_n : x \mapsto a_{d,n} x^d + a_{d-1,n} x^{d-1} + \cdots + a_{2,n} x^2 + a_{1,n} x + a_{0,n}.$$
> On suppose en outre, pour tout entier $k$ tel que $0 \le k \le d$, que la suite $(a_{k,n})_{n \ge 1}$ est convergente, on note $a_{k,\infty}$ sa limite.
>
> On considère alors le polynôme $P_\infty$ défini par
> $$P_\infty : x \mapsto a_{d,\infty} x^d + a_{d-1,\infty} x^{d-1} + \cdots + a_{2,\infty} x^2 + a_{1,\infty} x + a_{0,\infty}.$$
> Enfin, pour tout entier $n \ge 1$, on note $x_n$ l'unique solution strictement positive de l'équation $P_n(x) = 0$. Ci-dessous, on étudie la convergence éventuelle de la suite $(x_n)_{n \ge 1}$.
>
> 10. Soit $t$ un réel fixé. Démontrer que la suite $(P_n(t))_{n \ge 1}$ converge vers $P_\infty(t)$.
>
> 11. Démontrer que le polynôme $P_\infty$ est sympathique.
>
> 12. On suppose dans cette question que le polynôme $P_\infty$ est vraiment sympathique, et on note $x_\infty$ l'unique solution strictement positive de l'équation $P_\infty(x) = 0$.
>
>     a. Soient $u$ et $v$ deux réels tels que $0 < u < x_\infty < v$. Démontrer qu'il existe un entier $M_{u,v}$ tel que $P_n(u) < 0 < P_n(v)$ pour tout entier $n \ge M_{u,v}$.
>
>     b. En déduire que la suite $(x_n)_{n \ge 1}$ converge vers $x_\infty$.
>
> 13. On suppose dans cette question que le polynôme $P_\infty$ est faussement sympathique. Démontrer que $(x_n)_{n \ge 1}$ diverge vers $+\infty$.
>
> 14. Retrouver les résultats de la première partie.

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1UEmDklBRoLwyCF47wsu7dNuzbiS9gQhj/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>

*Polinomi «simpatici»: esistenza e unicità di radici strettamente positive delle equazioni x^d+(1/n)x-1=0 e loro limiti; classificazione dei polinomi in base alle radici iniziali.*
> Problema 2: limite di sintesi.
> 
> 2.1 Alcuni esempi.
> 
> 1. Per ogni numero intero $n \ge 1$, considera l'equazione (nel sconosciuto $x$) $$x^2 + \frac{1}{n}x - 1 = 0.$$ a. Mostrare che questa equazione ammette una soluzione reale strettamente positiva unica; indicarla $x_n$ ed esprimere $x_n$ come funzione di $n$. b. Dimostrare che la sequenza $(x_n)_{n \ge 1}$ converge e calcolare il suo limite. c. Dimostrare che il limite trovato è una soluzione dell'equazione $x^2 - 1 = 0$.
> 
> 2. Per ogni numero intero $n \ge 1$, considera l'equazione (nel sconosciuto $y$) $$\frac{1}{n}y^2 - y - 1 = 0.$$ a. Mostrare che questa equazione ammette una soluzione reale strettamente positiva unica; indicarla $y_n$. b. Dimostrare che la sequenza $(y_n)_{n \ge 1}$ diverge.
> 
> 3. Per ogni numero intero $n \ge 1$, considera l'equazione (nel sconosciuto $z$) $$z^3 + \frac{1}{n}z - 1 = 0.$$ a. Mostrare che questa equazione ammette una soluzione reale strettamente positiva unica; indicarla $z_n$. b. i. Studiare le variazioni della funzione $z \mapsto z^3 + \frac{1}{n}z - 1$ nell'intervallo $[0, +\infty)$. ii. Deduzione che l'equazione ammetta una soluzione reale strettamente positiva unica, situata nell'intervallo $[0, 1]$. c. Dimostrare che la sequenza $(z_n)_{n \ge 1}$ converge. d. Dimostrare che il limite $z_\infty$ della sequenza $(z_n)_{n \ge 1}$ è una soluzione dell'equazione $z^3 - 1 = 0$.
> 
> 4. Per ogni numero intero $n \ge 1$, considera l'equazione (nel sconosciuto $t$) $$\frac{1}{n}t^3 - t^2 - 1 = 0.$$ a. Mostrare che questa equazione ammette una soluzione reale strettamente positiva unica; indicarla $t_n$. b. La sequenza $(t_n)_{n \ge 1}$ è convergente? Se sì, qual è il suo limite?
> 
> 2.2 Polinomi simpatici.
> 
> In quanto segue, si fissa un intero $d \ge 1$. La funzione $P$ è un polinomio di grado al massimo $d$ se esistono reali $a_0, a_1, \dots, a_d$ in modo tale che, per ogni reale $x$, $$P(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0.$$ $P : x \mapsto a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0$ sia tale polinomio. Si dice che: - $P$ è inizialmente simpatico se $a_0 = -1$ e $a_k \le 0$ per ogni intero $k$ con $1 \le k \le d$; - $P$ è falsamente simpatico se $a_0 = -1$ e $a_k < 0$ per ogni intero $k$ con $1 \le k \le d$; - $P$ è veramente simpatico se $a_0 = -1$ e esiste un intero <K19/> con $1 \le k \le d-1$ tale che $a_1 \le 0, \dots, a_k \le 0$ e $a_{k+1} \ge 0, \dots, a_d \ge 0$, con $a_d \ne 0$. Infine, si dice che $P$ è comprensivo se è inizialmente comprensivo, falsamente comprensivo o veramente comprensivo. [Nota: le condizioni esatte del segno di queste quattro definizioni sono parzialmente illeggibili nella fonte e la lettura di cui sopra è incerta.]
> 
> 5. Tra i polinomi dati (in fonte), quali sono falsamente simpatici e inizialmente simpatici?
> 
> 6. Mostrare che qualsiasi polinomio falsamente simpatico è: a. strettamente negativo nell'intervallo $[0, +\infty)$; b. diminuzione nell'intervallo $[0, +\infty)$.
> 
> 7. Mostrare che qualsiasi polinomio $P$ che è falsamente simpatico e inizialmente simpatico soddisfa: $P$ diminuisce su un intervallo $[0, r]$, $P$ aumenta rigorosamente su $[r, +\infty)$, $P$ è rigorosamente negativo su $[0, r]$, e l'equazione $P(x) = 0$ ammette una soluzione unica su $[r, +\infty)$.
> 
> 8. Lasciate che $P$ sia un polinomio veramente simpatico. a. Mostrare che esiste un reale $b > 0$, un intero $\ell \ge 0$ e un polinomio veramente simpatico $Q$ tale che $P'(x) = b\, x^{\ell}\, Q(x)$ per ogni reale $x$. b. Mostrare che esiste una $r > 0$ reale tale che $P$ soddisfi le stesse proprietà della domanda 7.
> 
> 9. Per quali polinomi simpatici $P$ l'equazione $P(x) = 0$ ammette una soluzione unica strettamente positiva? Indicare, sotto forma di tabella di segni, il segno di $P$ nell'intervallo $[r, +\infty)$.
> 
> 2.3 Torniamo alle idee.
> 
> Da ora in poi, consideriamo i polinomi veramente simpatetici $P_1, P_2, \dots$ di grado al massimo $d$. Si scrive ogni polinomio $P_n$ nella forma $$P_n : x \mapsto a_{d,n} x^d + a_{d-1,n} x^{d-1} + \cdots + a_{1,n} x + a_{0,n}.$$ Si suppone inoltre che, per ogni numero intero $k$ con $0 \le k \le d$, la sequenza $(a_{k,n})_{n \ge 1}$ converge; lasciate $a_k$ indicare il suo limite. Considera il polinomio $P_\infty$ definito da $$P_\infty : x \mapsto a_d x^d + a_{d-1} x^{d-1} + \cdots + a_1 x + a_0.$$ Per ogni reale $r$, indicare con $x_n$ la soluzione unica strettamente positiva dell'equazione $P_n(x) = 0$. Si studia la possibile convergenza della sequenza $(x_n)_{n \ge 1}$.
> 
> 10. Lasciate che $t$ sia un reale fisso. Dimostrare che la sequenza $(P_n(t))_{n \ge 1}$ converge a $P_\infty(t)$.
> 
> 11. Mostra che il polinomio $P_\infty$ è simpatico.
> 
> 12. Supponiamo in questa domanda che il polinomio $P_\infty$ sia veramente simpatico, e lasciamo che $x_\infty$ sia la soluzione unica strettamente positiva dell'equazione $P_\infty(x) = 0$. a. $x, x'$ siano reali con $0 < x < x_\infty < x'$. Mostrare che esiste un intero $M_{x,x'}$ tale che $P_n(x) < 0 < P_n(x')$ per ogni intero $n \ge M_{x,x'}$. b. Dimostrare che la sequenza $(x_n)_{n \ge 1}$ converge a $x_\infty$.
> 
> 13. Supponiamo in questa domanda che il polinomio $P_\infty$ sia falsamente simpatico. Dimostrare che $(x_n)_{n \ge 1}$ diverge da $+\infty$.
> 
> 14. Riprendi i risultati della prima parte.

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


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
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1UEmDklBRoLwyCF47wsu7dNuzbiS9gQhj/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_analitica,topic_algebra,topic_trigonometria,topic_geometria_piana,method_coordinate,method_trigonometria,method_simmetria,method_ricorsione,method_induzione,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_astrazione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*In an orthonormal frame, study polynomials whose graph passes through all vertices of a regular k-gon centered at O: case of equilateral triangles, squares centered at O, the lower bound d >= k-1, and the sufficiency of every d >= k-1 (via Chebyshev polynomials).*

> Problème 3 : Polynômes et polygones réguliers
>
> Le plan est rapporté à un repère orthonormé $\mathcal{R} = (O; \vec{\imath}, \vec{\jmath})$.
>
> Soit $k$ un entier tel que $k \ge 3$. Les points $M_1, M_2, \dots, M_k$ sont les sommets d'un polygone régulier de centre $O$ si ces points
>
> - sont deux à deux distincts,
> - apparaissent dans le sens trigonométrique (c'est-à-dire le sens contraire des aiguilles d'une montre) sur un même cercle de centre $O$, et
> - vérifient l'égalité $M_1 M_2 = M_2 M_3 = \cdots = M_{k-1} M_k = M_k M_1$. En particulier, pour $k = 3$, il s'agit d'un triangle équilatéral ; pour $k = 4$, il s'agit d'un carré.
>
> Pour tout entier $d \ge 0$, une fonction $P$ est un polynôme de degré $d$ s'il existe des réels $a_0, a_1, \dots, a_d$ tels que $a_d \ne 0$ et
> $$P(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0$$
> pour tout réel $x$ ; on pourra admettre que, pour un tel polynôme, l'équation $P(x) = 0$ admet au plus $d$ solutions réelles.
>
> Quant à elle, la fonction $P : x \mapsto 0$ est appelée le polynôme nul.
>
> Enfin, étant donné un polynôme $P$ (nul ou non), on note $C_P$ la courbe représentative de $P$ dans le repère $\mathcal{R}$.
>
> 3.1 Triangles équilatéraux
>
> 1. Soit $P$ un polynôme de degré 1. Existe-t-il un triangle équilatéral dont les sommets appartiennent à $C_P$ ?
>
> 2. On considère les points
> $$A\!\left(1, \dfrac{\sqrt{3}}{3}\right), \quad B\!\left(-1, \dfrac{\sqrt{3}}{3}\right) \quad \text{et} \quad C\!\left(0, -\dfrac{2\sqrt{3}}{3}\right).$$
>
>    a. Démontrer que $A$, $B$ et $C$ sont les sommets d'un triangle équilatéral de centre $O$.
>
>    b. Démontrer que les points $A$, $B$ et $C$ appartiennent à la courbe représentative du polynôme
>    $$Q : x \mapsto \dfrac{\sqrt{3}}{3}\left(3x^2 - 2\right).$$
>
>    c. Démontrer que les points $A$, $B$ et $C$ appartiennent à la courbe représentative du polynôme
>    $$R : x \mapsto \dfrac{\sqrt{3}}{3}\left(3x^2 - 2\right) + x\left(x^2 - 1\right).$$
>
>    d. Démontrer que, pour tout entier $d \ge 2$, il existe un polynôme de degré $d$ dont la courbe représentative contient les points $A$, $B$ et $C$.
>
> 3.2 Carrés de centre $O$
>
> Dans les questions 3. et 4., on considère un polynôme $P$ et un carré $ABCD$ de centre $O$ dont les quatre sommets appartiennent à $C_P$.
>
> 3. a. Exprimer les coordonnées des points $B$, $C$ et $D$ en fonction de celles de $A$. Démontrer que les abscisses de $A$, $B$, $C$ et $D$ sont distinctes et non nulles.
>
>    b. Démontrer que $P$ est non nul et que son degré vaut au moins 3.
>
> 4. On suppose dans cette question qu'il existe des réels $a$, $b$ et $c$ tels que
> $$P : x \mapsto x^3 + ax^2 + bx + c.$$
>
>    a. Démontrer que $a = 0$ et $c = 0$.
>
>    b. Démontrer que les abscisses respectives de $A$, $B$, $C$ et $D$ sont solutions de l'équation
>    $$P(P(x)) + x = 0.$$
>
>    c. Démontrer que le polynôme
>    $$Q : x \mapsto x^4 + 3bx^3 + 3b^2 x^2 + b\left(b^2 + 1\right)x + b^2 + 1$$
>    admet au moins deux racines positives distinctes.
>
>    d. Démontrer que $b < 0$.
>
>    e. On suppose qu'il existe deux réels $\alpha$ et $\beta$ tels que $0 < \alpha < \beta$ et
>    $$Q(x) = (x - \alpha)^2 (x - \beta)^2$$
>    pour tout réel $x$. Démontrer qu'alors $b = -\sqrt{8}$, puis déterminer les valeurs de $\alpha$ et $\beta$.
>
> 5. a. Démontrer qu'il existe un polynôme $P$ de degré 3 et un carré $ABCD$ de centre $O$ dont les sommets appartiennent à $C_P$.
>
>    b. Pour quels entiers $d$ existe-t-il un polynôme de degré $d$ dont la courbe représentative contient les points $A$, $B$, $C$ et $D$ obtenus en question 5.a. ?
>
> 3.3 Où l'on prouve que $d \ge k - 1$
>
> Soit $M_1 M_2 \cdots M_k$ un polygone régulier de centre $O$. On suppose dans cette question qu'il existe un polynôme $P$, de degré $d$, dont la courbe contient les points $M_1, M_2, \dots, M_k$. On souhaite alors démontrer que $d \ge k - 1$.
>
> Pour tout $i$, on note $(x_i, y_i)$ les coordonnées de $M_i$ dans le repère $\mathcal{R}$.
>
> 6. a. Pourquoi peut-on supposer que $x_1$ est inférieur ou égal à $x_2$, $x_3$, $\dots$, $x_k$ et que $y_1 \le 0$ ?
>
>    b. Démontrer que les abscisses $x_i$ sont deux à deux distinctes et que les ordonnées $y_i$ sont non nulles.
>
>    c. Démontrer qu'il existe un nombre réel $R > 0$ et un nombre réel $\theta$ appartenant à l'intervalle $]0, \pi/k[$ tels que $x_1 = -R\cos(\theta)$ et $y_1 = -R\sin(\theta)$.
>
>    d. Démontrer que $x_1 < x_k < x_2 < x_{k-1} < x_3 < x_{k-2} < \cdots$
>
>    e. Démontrer que $P$ admet une racine sur chacun des $k - 1$ intervalles
>    $$]x_1, x_k[,\ ]x_k, x_2[,\ ]x_2, x_{k-1}[,\ ]x_{k-1}, x_3[,\ ]x_3, x_{k-2}[,\ \dots$$
>
>    f. En conclure que $d \ge k - 1$.
>
> 3.4 Où l'on prouve que tout entier $d \ge k - 1$ convient
>
> On suppose dans cette partie que les abscisses $x_i$ sont deux à deux distinctes et on veut démontrer que, pour tout entier $d \ge k - 1$, il existe un polynôme de degré $d$ dont la courbe contient les points $M_1, M_2, \dots, M_k$.
>
> 7. Soient $a$ et $b$ deux réels. Dans le repère $\mathcal{R}$, on considère les points
> $$A(\cos(a), \sin(a)), \quad B(\cos(a + b), \sin(a + b)) \quad \text{et} \quad C(-\sin(a), \cos(a)).$$
>
>    a. Démontrer que le repère $\mathcal{R}' = \bigl(O; \overrightarrow{OA}, \overrightarrow{OC}\bigr)$ est orthonormé.
>
>    b. Quelles sont les coordonnées du point $B$ dans le repère $\mathcal{R}'$ ?
>
>    c. En déduire que
>    $$\cos(a + b) = \cos(a)\cos(b) - \sin(a)\sin(b);$$
>    $$\cos(a - b) = \cos(a)\cos(b) + \sin(a)\sin(b).$$
>
> 8. On considère la suite de polynômes définie par $T_0 : x \mapsto 1$, $T_1 : x \mapsto x$ et
> $$T_{n+2} : x \mapsto 2x\, T_{n+1}(x) - T_n(x)$$
> pour tout entier $n \ge 0$.
>
>    a. Démontrer que $T_n(\cos(\theta)) = \cos(n\theta)$ pour tout entier $n \ge 0$ et tout réel $\theta$.
>
>    b. Soit $\theta$ un réel, et soient $\ell \ge 1$ et $j \ge 0$ deux entiers. Démontrer que
>    $$T_{\ell-1}\!\left(\cos\!\left(\theta + \dfrac{2j\pi}{\ell}\right)\right) - \cos(\ell\theta)\cos\!\left(\theta + \dfrac{2j\pi}{\ell}\right) = \sin(\ell\theta)\sin\!\left(\theta + \dfrac{2j\pi}{\ell}\right).$$
>
>    c. Démontrer que, pour tout entier $d \ge k - 1$, il existe un polynôme de degré $d$ dont la courbe contient les points $M_1, M_2, \dots, M_k$.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_algebra|Algebra]], [[topic_trigonometria|Trigonometria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]], [[method_simmetria|Simmetria]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1UEmDklBRoLwyCF47wsu7dNuzbiS9gQhj/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>

*In un riferimento ortonormale, polinomi il cui grafico passa per tutti i vertici di un k-gono regolare centrato in O: casi del triangolo equilatero e del quadrato, e interi d ammissibili.*
> Problema 3: Polinomi e poligoni regolari.
> 
> L'aereo è dotato di una cornice ortonormale $\mathcal{R} = (O; I, J)$. $k$ sia un numero intero con $k \ge 3$. I punti $M_1, M_2, \dots, M_k$ sono i vertici di un poligono regolare con centro $O$ in modo tale che: le loro abscisse siano a coppia distinte; i punti appaiono in ordine trigonometrico (in senso contrario all'orologio intorno a $O$); e $M_1 M_2 = M_2 M_3 = \cdots = M_{k-1} M_k = M_k M_1$ (è un poligono regolare; per $k = 4$ è un quadrato).
> 
> Si dice che una funzione $P$ è un polinomio di grado $d$ se esistono reali $a_0, a_1, \dots, a_d$ con $a_d \ne 0$ in modo tale che $P(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0$ per ogni reale $x$. Si dice anche che un tale polinomio $P$ non ha più di $d$ soluzioni reali. La funzione $P : x \mapsto 0$ è chiamata polinomio zero. Infine, dato un polinomio $P$ (zero o meno), si indica con $\mathscr{C}_P$ il grafico (curva rappresentativa) di $P$ nel quadro $\mathcal{R}$.
> 
> 3.1 Triangoli equilaterali.
> 
> 1. Sia $P$ un polinomio di grado 1. Esiste un triangolo equilaterale le cui vertici appartengono a $\mathscr{C}_P$?
> 
> 2. Considerare i punti $$A\!\left(1; \frac{\sqrt{3}}{3}\right), \quad B\!\left(-1; \frac{\sqrt{3}}{3}\right) \quad \text{and} \quad C\!\left(0; -\frac{2\sqrt{3}}{3}\right).$$ a. Dimostrare che $A$, $B$, $C$ formano un triangolo equilaterale con centro $O$. b. Dimostrare che $A$, $B$, $C$ appartengono al grafico del polinomio $Q : x \mapsto \frac{\sqrt{3}}{3}\left(3x^2 - 2\right)$. c. Dimostrare che $A$, $B$, $C$ appartengono al grafico del polinomio $R : x \mapsto \frac{\sqrt{3}}{3}\left(3x^2 - 2\right) + x\left(x^2 - 1\right)$. d. Mostra che per ogni intero $d \ge 2$ esiste un polinomio di grado $d$ il cui grafico contiene i punti $A$, $B$, $C$.
> 
> 3.2 Quadrati con centro $O$.
> 
> In quanto segue, consideriamo un polinomio $P$ e un quadrato $ABCD$ con centro $O$ le cui quattro vertici appartengono a $\mathscr{C}_P$.
> 
> 3. a. Esprimere le coordinate dei punti $B$, $C$, $D$ come funzioni di quelle di $A$. Mostrare che le abscisse di $A$, $B$, $C$, $D$ sono separate in coppia. b. Dimostrare che $P$ non è zero e che il suo grado è almeno 2.
> 
> 4. Supponiamo in questa domanda che esistano reali $a$, $b$, $c$ tali che $P : x \mapsto x^3 + a x^2 + b x + c$. a. Dimostrare che $a = 0$ e $c = 0$. b. Dimostrare che le rispettive abscisse di $A$, $B$, $C$, $D$ sono soluzioni dell'equazione $P(P(x)) + x = 0$. c. Mostrare che il polinomio $Q : x \mapsto x^9 + 3b x^7 + 3b^2 x^5 + b(b^2 + 1)x^3 + b^2 x + b^2 + 1$ ammette almeno due radici reali strettamente positive distinte. d. Mostra che $b < 0$. e. Supponiamo che esistano i valori $\alpha$ e $\beta$ con $\alpha < \beta$ in modo tale che $Q(x) = (x - \alpha)^2 (x - \beta)^2$ per ogni $x$ reale. Indicare quindi $b = -\sqrt{8}$ e determinare i valori di $\alpha$ e $\beta$. [Nota: la forma esatta della fatturazione e della costante sono parzialmente illeggibili; questa lettura è incerta.]
> 
> 5. a. Mostra che esiste un polinomio $P$ di grado 3 e un quadrato $ABCD$ con centro $O$ le cui vertici appartengono a $\mathscr{C}_P$. b. Per quali interi $d$ esiste un polinomio di grado $d$ il cui grafico contiene i punti $A$, $B$, $C$, $D$ come nella domanda 5.a?
> 
> 3.3 Quando si dimostra che $d \ge k - 1$.
> 
> $M_1, \dots, M_k$ siano i vertici di un poligono regolare con centro $O$. Supponiamo in questa domanda che esista un polinomio $P$, di grado $d$, il cui grafico contiene i vertici $M_1, \dots, M_k$. Si desidera dimostrare che $d \ge k - 1$. Per ogni $i$, $(x_i; y_i)$ sono le coordinate di $M_i$ nel quadro $\mathcal{R}$.
> 
> 6. a. Perché si può presumere che l'abcissa $x_1$ sia inferiore o uguale a $x_2, x_3, \dots, x_k$ e che $y_i$ non siano zero? b. Dimostrare che le abscisse $x_i$ sono in coppia distinte e che le ordinate $y_i$ non sono zero. c. Dimostrare che nell'intervallo $[0, \pi/4)$ esistono un $R > 0$ reale e un $\theta$ reale in modo tale che $x_1 = -R\cos(\theta)$ e $y_1 = -R\sin(\theta)$. d. Mostra che $x_1 < x_2 < x_3 < \cdots < x_k$. [Nota: la catena di ordinazione precisa è parzialmente illeggibile.] e. Dimostrare che $P$ ammette una radice su ciascuno degli intervalli $k - 1$ $[x_1, x_2], [x_2, x_3], \dots, [x_{k-1}, x_k]$. [Nota: l'elenco preciso degli intervalli è parzialmente illeggibile; questa lettura è incerta.] f. Concludere che $d \ge k - 1$.
> 
> 3.4 Dove si dimostra che ogni $d \ge k - 1$ funziona.
> 
> Supponiamo in questa domanda che le abscisse $x_i$ siano in coppia distinte, e si voglia dimostrare che, per ogni numero intero $d \ge k - 1$, esiste un polinomio di grado $d$ il cui grafico contiene i punti $M_1, M_2, \dots, M_k$.
> 
> 7. Siano $a$ e $b$ due valori reali. Nel quadro $\mathcal{R}$, considerate i punti $A(\cos(a), \sin(a))$, $B(\cos(a+b), \sin(a+b))$ e $C(-\sin(a), \cos(a))$. a. Dimostrare che il telaio $\mathcal{R}' = (O; \overrightarrow{OA}, \overrightarrow{OC})$ è ortonormale. b. Quali sono le coordinate del punto $B$ nel quadro $\mathcal{R}'$? c. Riduzione di $\cos(a + b) = \cos(a)\cos(b) - \sin(a)\sin(b)$ e $\sin(a + b) = \sin(a)\cos(b) + \cos(a)\sin(b)$.
> 
> 8. Considera la sequenza di polinomi definiti da $T_0 : x \mapsto 1$, $T_1 : x \mapsto x$ e $T_{n+2} : x \mapsto 2x\, T_{n+1}(x) - T_n(x)$ per ogni intero $n \ge 0$. a. Dimostrare che $T_n(\cos(\theta)) = \cos(n\theta)$ per ogni numero intero $n \ge 0$ e ogni reale $\theta$. b. Lasciate che $\theta$ sia reale, e lasciate che $\ell$ e $j$ siano due numeri interi. Mostra che $T_{\ell-1}\!\left(\cos\!\left(\theta + \frac{2j\pi}{\ell}\right)\right) = \cos(\ell\theta)\cos\!\left(\theta + \frac{2j\pi}{\ell}\right) + \sin(\ell\theta)\sin\!\left(\theta + \frac{2j\pi}{\ell}\right)$. [Nota: questa identità è parzialmente illeggibile nella fonte; la lettura è incerta.] c. Mostra che per ogni numero intero $d \ge k - 1$ esiste un polinomio di grado $d$ il cui grafico contiene i punti $M_1, M_2, \dots, M_k$.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_algebra|Algebra]], [[topic_trigonometria|Trigonometria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_trigonometria|Tecniche trigonometriche]], [[method_simmetria|Sfruttamento della simmetria]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Geometria]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*In an orthonormal frame, study polynomials whose graph passes through all vertices of a regular k-gon centered at O: case of equilateral triangles, squares centered at O, the lower bound d >= k-1, and the sufficiency of every d >= k-1 (via Chebyshev polynomials).*

> Problem 3: Polynomials and regular polygons.
> 
> The plane is equipped with an orthonormal frame $\mathcal{R} = (O; I, J)$. Let $k$ be an integer with $k \ge 3$. The points $M_1, M_2, \dots, M_k$ are the vertices of a regular polygon with center $O$ such that: their abscissas are pairwise distinct; the points appear in trigonometric order (counter-clockwise around $O$); and $M_1 M_2 = M_2 M_3 = \cdots = M_{k-1} M_k = M_k M_1$ (it is a regular polygon; for $k = 4$ it is a square).
> 
> One says that a function $P$ is a polynomial of degree $d$ if there exist reals $a_0, a_1, \dots, a_d$ with $a_d \ne 0$ such that $P(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0$ for every real $x$. One also says that such a polynomial $P$ has no more than $d$ real solutions. The function $P : x \mapsto 0$ is called the zero polynomial. Finally, given a polynomial $P$ (zero or not), one denotes by $\mathscr{C}_P$ the graph (representative curve) of $P$ in the frame $\mathcal{R}$.
> 
> 3.1 Equilateral triangles.
> 
> 1. Let $P$ be a polynomial of degree 1. Does there exist an equilateral triangle whose vertices belong to $\mathscr{C}_P$?
> 
> 2. Consider the points
> $$A\!\left(1; \frac{\sqrt{3}}{3}\right), \quad B\!\left(-1; \frac{\sqrt{3}}{3}\right) \quad \text{and} \quad C\!\left(0; -\frac{2\sqrt{3}}{3}\right).$$
>   a. Show that $A$, $B$, $C$ form an equilateral triangle with center $O$.
>   b. Show that $A$, $B$, $C$ belong to the graph of the polynomial $Q : x \mapsto \frac{\sqrt{3}}{3}\left(3x^2 - 2\right)$.
>   c. Show that $A$, $B$, $C$ belong to the graph of the polynomial $R : x \mapsto \frac{\sqrt{3}}{3}\left(3x^2 - 2\right) + x\left(x^2 - 1\right)$.
>   d. Show that, for every integer $d \ge 2$, there exists a polynomial of degree $d$ whose graph contains the points $A$, $B$, $C$.
> 
> 3.2 Squares with center $O$.
> 
> In what follows, consider a polynomial $P$ and a square $ABCD$ with center $O$ whose four vertices belong to $\mathscr{C}_P$.
> 
> 3. a. Express the coordinates of the points $B$, $C$, $D$ as functions of those of $A$. Show that the abscissas of $A$, $B$, $C$, $D$ are pairwise distinct.
>   b. Show that $P$ is non-zero and that its degree is at least 2.
> 
> 4. Suppose in this question that there exist reals $a$, $b$, $c$ such that $P : x \mapsto x^3 + a x^2 + b x + c$.
>   a. Show that $a = 0$ and $c = 0$.
>   b. Show that the respective abscissas of $A$, $B$, $C$, $D$ are solutions of the equation $P(P(x)) + x = 0$.
>   c. Show that the polynomial $Q : x \mapsto x^9 + 3b x^7 + 3b^2 x^5 + b(b^2 + 1)x^3 + b^2 x + b^2 + 1$ admits at least two distinct strictly positive real roots.
>   d. Show that $b < 0$.
>   e. Suppose there exist reals $\alpha$ and $\beta$ with $\alpha < \beta$ such that $Q(x) = (x - \alpha)^2 (x - \beta)^2$ for every real $x$. Show that then $b = -\sqrt{8}$, and determine the values of $\alpha$ and $\beta$. [Note: the exact form of the factorization and constant are partly illegible; this reading is uncertain.]
> 
> 5. a. Show that there exists a polynomial $P$ of degree 3 and a square $ABCD$ with center $O$ whose vertices belong to $\mathscr{C}_P$.
>   b. For which integers $d$ does there exist a polynomial of degree $d$ whose graph contains the points $A$, $B$, $C$, $D$ as in question 5.a?
> 
> 3.3 Where one proves that $d \ge k - 1$.
> 
> Let $M_1, \dots, M_k$ be the vertices of a regular polygon with center $O$. Suppose in this question that there exists a polynomial $P$, of degree $d$, whose graph contains the vertices $M_1, \dots, M_k$. One wishes to prove that $d \ge k - 1$. For every $i$, let $(x_i; y_i)$ be the coordinates of $M_i$ in the frame $\mathcal{R}$.
> 
> 6. a. Why may one assume that the abscissa $x_1$ is less than or equal to $x_2, x_3, \dots, x_k$ and that the $y_i$ are non-zero?
>   b. Show that the abscissas $x_i$ are pairwise distinct and the ordinates $y_i$ are non-zero.
>   c. Show that there exist a real $R > 0$ and a real $\theta$ in the interval $[0, \pi/4)$ such that $x_1 = -R\cos(\theta)$ and $y_1 = -R\sin(\theta)$.
>   d. Show that $x_1 < x_2 < x_3 < \cdots < x_k$. [Note: the precise ordering chain is partly illegible.]
>   e. Show that $P$ admits a root on each of the $k - 1$ intervals $[x_1, x_2], [x_2, x_3], \dots, [x_{k-1}, x_k]$. [Note: the precise list of intervals is partly illegible; this reading is uncertain.]
>   f. Conclude that $d \ge k - 1$.
> 
> 3.4 Where one proves that every $d \ge k - 1$ works.
> 
> Suppose in this question that the abscissas $x_i$ are pairwise distinct, and one wants to prove that, for every integer $d \ge k - 1$, there exists a polynomial of degree $d$ whose graph contains the points $M_1, M_2, \dots, M_k$.
> 
> 7. Let $a$ and $b$ be two reals. In the frame $\mathcal{R}$, consider the points $A(\cos(a), \sin(a))$, $B(\cos(a+b), \sin(a+b))$ and $C(-\sin(a), \cos(a))$.
>   a. Show that the frame $\mathcal{R}' = (O; \overrightarrow{OA}, \overrightarrow{OC})$ is orthonormal.
>   b. What are the coordinates of the point $B$ in the frame $\mathcal{R}'$?
>   c. Deduce that $\cos(a + b) = \cos(a)\cos(b) - \sin(a)\sin(b)$ and $\sin(a + b) = \sin(a)\cos(b) + \cos(a)\sin(b)$.
> 
> 8. Consider the sequence of polynomials defined by $T_0 : x \mapsto 1$, $T_1 : x \mapsto x$, and $T_{n+2} : x \mapsto 2x\, T_{n+1}(x) - T_n(x)$ for every integer $n \ge 0$.
>   a. Show that $T_n(\cos(\theta)) = \cos(n\theta)$ for every integer $n \ge 0$ and every real $\theta$.
>   b. Let $\theta$ be a real, and let $\ell$ and $j$ be two integers. Show that $T_{\ell-1}\!\left(\cos\!\left(\theta + \frac{2j\pi}{\ell}\right)\right) = \cos(\ell\theta)\cos\!\left(\theta + \frac{2j\pi}{\ell}\right) + \sin(\ell\theta)\sin\!\left(\theta + \frac{2j\pi}{\ell}\right)$. [Note: this identity is partly illegible in the source; the reading is uncertain.]
>   c. Show that, for every integer $d \ge k - 1$, there exists a polynomial of degree $d$ whose graph contains the points $M_1, M_2, \dots, M_k$.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_algebra|Algebra]], [[topic_trigonometria|Trigonometria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]], [[method_simmetria|Simmetria]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1UEmDklBRoLwyCF47wsu7dNuzbiS9gQhj/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
