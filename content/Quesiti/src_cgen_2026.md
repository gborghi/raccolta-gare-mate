---
title: Concours Général des Lycées 2026 — Matematica
tipo: gara
competition: Concours Général des Lycées 2026 — Matematica
family: concours_generale
year: '2026'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2026"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra"></span>

<div class="qlang-switch" data-default="en"></div>


*Continued products: limits of products (1-1/a_0)(1-1/a_1)... for integer sequences a_k >= 2; greedy algorithm to represent any l in [0,1), uniqueness under a_{k+1}-1 >= (a_k-1)^2 and characterisation of rational l.*

> **Exercise 1: Continued products**
>
> For every sequence $(a_k)_{k\in\mathbb N}$ of integers greater than or equal to 2, the *sequence of continued products* associated with $(a_k)_{k\in\mathbb N}$ is the sequence of reals $(u_n)_{n\in\mathbb N}$ defined by $u_0=1$ and, for all $n\geqslant 0$,
> $$u_{n+1}=u_n\times\left(1-\frac{1}{a_n}\right).$$
> Thus, for example, $u_3=\left(1-\frac1{a_0}\right)\left(1-\frac1{a_1}\right)\left(1-\frac1{a_2}\right)$ and, more generally, for every integer $n\geqslant1$,
> $$u_n=\left(1-\frac1{a_0}\right)\left(1-\frac1{a_1}\right)\cdots\left(1-\frac1{a_{n-1}}\right).$$
> This product of $n$ factors is also written $u_n=\displaystyle\prod_{k=0}^{n-1}\left(1-\frac1{a_k}\right)$.
>
> **Part 1: Preliminaries**
>
> 1) Let $(a_k)_{k\in\mathbb N}$ be a sequence of integers greater than or equal to 2 and $(u_n)_{n\in\mathbb N}$ the associated sequence of continued products. Prove that the sequence $(u_n)_{n\in\mathbb N}$ converges to a real number in $[0\,;1[$.
>
> Throughout the exercise, if $(a_k)_{k\in\mathbb N}$ is a sequence of integers greater than or equal to 2, we denote by $P_\infty\big((a_k)_{k\in\mathbb N}\big)$ the limit of the sequence $(u_n)_{n\in\mathbb N}$ of continued products associated with $(a_k)_{k\in\mathbb N}$. Note that this is the limit of a sequence of products whose convergence was proved in question 1). Thus
> $$P_\infty\big((a_k)_{k\in\mathbb N}\big)=\lim_{n\to+\infty}\left(\left(1-\frac1{a_0}\right)\left(1-\frac1{a_1}\right)\cdots\left(1-\frac1{a_{n-1}}\right)\right)=\lim_{n\to+\infty}\left(\prod_{k=0}^{n-1}\left(1-\frac1{a_k}\right)\right).$$
>
> 2) Prove that $P_\infty\big((k+2)_{k\in\mathbb N}\big)=0$, that is,
> $$\lim_{n\to+\infty}\left(\left(1-\frac12\right)\left(1-\frac13\right)\cdots\left(1-\frac1{n+1}\right)\right)=0.$$
>
> 3) Determine the value of $P_\infty\big(((k+2)^2)_{k\in\mathbb N}\big)$.
>
> 4) Let $x\ne1$ be a real number. Consider the sequence $(v_n)_{n\in\mathbb N}$ defined by $v_0=1$ and, for all $n\geqslant0$, by
> $$v_{n+1}=v_n\times\left(1+x^{(2^n)}\right).$$
> Thus, for every integer $n\geqslant1$,
> $$v_n=(1+x)\left(1+x^2\right)\left(1+x^4\right)\left(1+x^8\right)\cdots\left(1+x^{(2^{n-1})}\right).$$
> Prove that, for every integer $n\geqslant0$,
> $$v_n=\frac{1-x^{(2^n)}}{1-x}.$$
>
> 5) Let $q\geqslant1$ be an integer. Using question 4), determine the value of $P_\infty\Big(\big(q^{(2^k)}+1\big)_{k\in\mathbb N}\Big)$.
>
> **Part 2: Existence via a greedy algorithm**
>
> In this part we fix a real number $\ell\in[0\,;1[$. We seek a sequence $(a_k)_{k\in\mathbb N}$ of integers greater than or equal to 2 such that
> $$\ell=P_\infty\big((a_k)_{k\in\mathbb N}\big).$$
> We consider the following method:
> - write $\ell=\left(1-\frac1a\right)\tilde\ell$, where $a$ is the smallest integer greater than or equal to 2 such that $\tilde\ell\in[0\,;1[$;
> - iterate the procedure on $\tilde\ell$.
>
> The rest of this part formalises this method.
> For every real $t$, $\lfloor t\rfloor$ denotes the *integer part* of $t$, that is, the unique integer $m$ such that $m\leqslant t<m+1$.
>
> 6) Let $x\in[0\,;1[$. Prove that the integer $a=\left\lfloor\frac1{1-x}\right\rfloor+1$ satisfies the inequalities
> $$a\geqslant2\quad\text{and}\quad 1-\frac1{a-1}\leqslant x<1-\frac1a.$$
>
> From now on we define two sequences $(x_k)_{k\in\mathbb N}$ and $(a_k)_{k\in\mathbb N}$ by $x_0=\ell$ and, for every integer $k\geqslant0$,
> $$a_k=\left\lfloor\frac1{1-x_k}\right\rfloor+1\quad\text{and}\quad x_{k+1}=\frac{x_k}{1-\frac1{a_k}}.$$
> You are not asked to justify that these two sequences are well defined; this follows from question 6) and an induction: for every integer $k\geqslant0$, the integer $a_k$ is greater than or equal to 2 and $x_k$ is a real number in $[0\,;1[$.
>
> 7) Let $k\geqslant0$ be an integer. Prove that $a_{k+1}-1\geqslant(a_k-1)^2$.
>
> 8) Conclude that $\ell=P_\infty\big((a_k)_{k\in\mathbb N}\big)$.
>
> **Part 3: Uniqueness and the critical case**
>
> In this part we fix a real number $\ell\in[0\,;1[$.
>
> 9) Is there a unique sequence $(a_k)_{k\in\mathbb N}$ of integers greater than or equal to 2 such that $\ell=P_\infty\big((a_k)_{k\in\mathbb N}\big)$?
>
> 10) Prove that there exists a unique sequence $(a_k)_{k\in\mathbb N}$ of integers greater than or equal to 2 such that $\ell=P_\infty\big((a_k)_{k\in\mathbb N}\big)$ and satisfying, for every integer $k\geqslant0$, the inequality $a_{k+1}-1\geqslant(a_k-1)^2$.
>
> From now on, $(a_k)_{k\in\mathbb N}$ denotes the unique sequence satisfying the conditions of question 10).
>
> 11) Prove that if there is an index $k_0$ such that $a_{k+1}-1=(a_k-1)^2$ for all $k\geqslant k_0$, then $\ell$ is rational.
>
> 12) Prove that if $\ell$ is rational, then there is an index $k_0$ such that, for all $k\geqslant k_0$,
> $$a_{k+1}-1=(a_k-1)^2.$$

**Topic:** [[topic_algebra|Algebra]]
**Area:** [[Algebra e Analisi]]
**Risposta:** nessuna soluzione ufficiale pubblicata (prova a dimostrazione / a risposta aperta).
**Fonte:** [apri PDF p.2](https://www.vmaths.fr/wp-content/uploads/CG/Concours_General_2026_enonce.pdf#page=2) · Concours Général des Lycées 2026 (testo ufficiale, vmaths.fr)


<div class="qlang-split" data-lang="it"></div>


*Prodotti continuati: limiti dei prodotti (1-1/a_0)(1-1/a_1)... per successioni di interi a_k >= 2; algoritmo goloso per rappresentare ogni l in [0,1), unicità con a_{k+1}-1 >= (a_k-1)^2 e caratterizzazione dei l razionali.*

> **Esercizio 1: Prodotti continuati**
>
> Per ogni successione $(a_k)_{k\in\mathbb N}$ di interi maggiori o uguali a 2, si chiama *successione dei prodotti continuati* associata ad $(a_k)_{k\in\mathbb N}$ la successione di numeri reali $(u_n)_{n\in\mathbb N}$ definita da $u_0=1$ e, per ogni $n\geqslant 0$,
> $$u_{n+1}=u_n\times\left(1-\frac{1}{a_n}\right).$$
> Così, per esempio, $u_3=\left(1-\frac1{a_0}\right)\left(1-\frac1{a_1}\right)\left(1-\frac1{a_2}\right)$ e, più in generale, per ogni intero $n\geqslant1$,
> $$u_n=\left(1-\frac1{a_0}\right)\left(1-\frac1{a_1}\right)\cdots\left(1-\frac1{a_{n-1}}\right).$$
> Questo prodotto di $n$ fattori si scrive anche $u_n=\displaystyle\prod_{k=0}^{n-1}\left(1-\frac1{a_k}\right)$.
>
> **Parte 1: Preliminari**
>
> 1) Sia $(a_k)_{k\in\mathbb N}$ una successione di interi maggiori o uguali a 2 e sia $(u_n)_{n\in\mathbb N}$ la successione dei prodotti continuati associata. Dimostrare che la successione $(u_n)_{n\in\mathbb N}$ converge a un numero reale di $[0\,;1[$.
>
> In tutto l'esercizio, se $(a_k)_{k\in\mathbb N}$ è una successione di interi maggiori o uguali a 2, si indica con $P_\infty\big((a_k)_{k\in\mathbb N}\big)$ il limite della successione $(u_n)_{n\in\mathbb N}$ dei prodotti continuati associata ad $(a_k)_{k\in\mathbb N}$. Si osservi che si tratta del limite di una successione di prodotti la cui convergenza è stata dimostrata nella domanda 1). Dunque
> $$P_\infty\big((a_k)_{k\in\mathbb N}\big)=\lim_{n\to+\infty}\left(\left(1-\frac1{a_0}\right)\left(1-\frac1{a_1}\right)\cdots\left(1-\frac1{a_{n-1}}\right)\right)=\lim_{n\to+\infty}\left(\prod_{k=0}^{n-1}\left(1-\frac1{a_k}\right)\right).$$
>
> 2) Dimostrare che $P_\infty\big((k+2)_{k\in\mathbb N}\big)=0$, cioè che
> $$\lim_{n\to+\infty}\left(\left(1-\frac12\right)\left(1-\frac13\right)\cdots\left(1-\frac1{n+1}\right)\right)=0.$$
>
> 3) Determinare il valore di $P_\infty\big(((k+2)^2)_{k\in\mathbb N}\big)$.
>
> 4) Sia $x\ne1$ un numero reale. Si consideri la successione $(v_n)_{n\in\mathbb N}$ definita da $v_0=1$ e, per ogni $n\geqslant0$, da
> $$v_{n+1}=v_n\times\left(1+x^{(2^n)}\right).$$
> Quindi, per ogni intero $n\geqslant1$,
> $$v_n=(1+x)\left(1+x^2\right)\left(1+x^4\right)\left(1+x^8\right)\cdots\left(1+x^{(2^{n-1})}\right).$$
> Dimostrare che, per ogni intero $n\geqslant0$,
> $$v_n=\frac{1-x^{(2^n)}}{1-x}.$$
>
> 5) Sia $q\geqslant1$ un intero. Usando la domanda 4), determinare il valore di $P_\infty\Big(\big(q^{(2^k)}+1\big)_{k\in\mathbb N}\Big)$.
>
> **Parte 2: Esistenza con un algoritmo goloso**
>
> In questa parte si fissa un numero reale $\ell\in[0\,;1[$. Si cerca una successione $(a_k)_{k\in\mathbb N}$ di interi maggiori o uguali a 2 tale che
> $$\ell=P_\infty\big((a_k)_{k\in\mathbb N}\big).$$
> Si considera il metodo seguente:
> - scrivere $\ell=\left(1-\frac1a\right)\tilde\ell$, dove $a$ è il più piccolo intero maggiore o uguale a 2 tale che $\tilde\ell\in[0\,;1[$;
> - ripetere il procedimento su $\tilde\ell$.
>
> Il resto della parte è dedicato alla formalizzazione di questo metodo.
> Per ogni reale $t$, si indica con $\lfloor t\rfloor$ la *parte intera* di $t$, cioè l'unico intero relativo $m$ tale che $m\leqslant t<m+1$.
>
> 6) Sia $x\in[0\,;1[$. Dimostrare che l'intero $a=\left\lfloor\frac1{1-x}\right\rfloor+1$ verifica le disuguaglianze
> $$a\geqslant2\quad\text{e}\quad 1-\frac1{a-1}\leqslant x<1-\frac1a.$$
>
> D'ora in poi si definiscono due successioni $(x_k)_{k\in\mathbb N}$ e $(a_k)_{k\in\mathbb N}$ ponendo $x_0=\ell$ e, per ogni intero $k\geqslant0$,
> $$a_k=\left\lfloor\frac1{1-x_k}\right\rfloor+1\quad\text{e}\quad x_{k+1}=\frac{x_k}{1-\frac1{a_k}}.$$
> Non si chiede di giustificare che queste due successioni sono ben definite: ciò segue dalla domanda 6) e da un ragionamento per induzione. Per ogni intero $k\geqslant0$, l'intero $a_k$ è maggiore o uguale a 2 e $x_k$ è un reale di $[0\,;1[$.
>
> 7) Sia $k\geqslant0$ un intero. Dimostrare che $a_{k+1}-1\geqslant(a_k-1)^2$.
>
> 8) Concludere che $\ell=P_\infty\big((a_k)_{k\in\mathbb N}\big)$.
>
> **Parte 3: Unicità e caso critico**
>
> In questa parte si fissa un numero reale $\ell\in[0\,;1[$.
>
> 9) Esiste un'unica successione $(a_k)_{k\in\mathbb N}$ di interi maggiori o uguali a 2 tale che $\ell=P_\infty\big((a_k)_{k\in\mathbb N}\big)$?
>
> 10) Dimostrare che esiste un'unica successione $(a_k)_{k\in\mathbb N}$ di interi maggiori o uguali a 2 tale che $\ell=P_\infty\big((a_k)_{k\in\mathbb N}\big)$ e che verifica, per ogni intero $k\geqslant0$, la disuguaglianza $a_{k+1}-1\geqslant(a_k-1)^2$.
>
> D'ora in poi $(a_k)_{k\in\mathbb N}$ indica l'unica successione che verifica le condizioni della domanda 10).
>
> 11) Dimostrare che, se esiste un indice $k_0$ tale che $a_{k+1}-1=(a_k-1)^2$ per ogni $k\geqslant k_0$, allora $\ell$ è razionale.
>
> 12) Dimostrare che, se $\ell$ è razionale, allora esiste un indice $k_0$ tale che, per ogni $k\geqslant k_0$,
> $$a_{k+1}-1=(a_k-1)^2.$$

**Risposta:** nessuna soluzione ufficiale pubblicata (prova a dimostrazione / a risposta aperta).



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,topic_algebra"></span>

<div class="qlang-switch" data-default="en"></div>


*Signed consecutive sums: writing every integer M >= 1 as ±1^k ± 2^k ± ... ± n^k, via iterated finite differences and divisibility; generalisation to integer polynomials.*

> **Exercise 2: Signed consecutive sums**
>
> **Part 1: Introduction**
>
> We write on the board a number of third powers (also called cubes) of consecutive integers starting from 1, for example
> $$1^3\quad 2^3\quad 3^3\quad 4^3\quad 5^3\quad 6^3\quad 7^3\quad 8^3\quad 9^3\quad 10^3\quad 11^3\quad 12^3\quad 13^3\quad 14^3\quad 15^3$$
> Then we put a $+$ sign or a $-$ sign in front of each of these numbers, for example
> $$+1^3+2^3+3^3-4^3+5^3-6^3-7^3+8^3+9^3-10^3+11^3+12^3-13^3+14^3-15^3$$
> An expression of this form will be called a *sum of signed consecutive cubes starting from 1*.
> In the example above the sum equals 10, so we see that 10 can be written as a sum of signed consecutive cubes starting from 1.
> After a few attempts we obtain
> $$\begin{aligned}
> 1&=+1^3\\
> 2&=-1^3-2^3+3^3-4^3-5^3+6^3+7^3-8^3+9^3-10^3-11^3+12^3\\
> 3&=-1^3-2^3-3^3-4^3-5^3+6^3-7^3-8^3+9^3+10^3-11^3-12^3+13^3\\
> 4&=-1^3-2^3+3^3+4^3-5^3+6^3+7^3-8^3\\
> 5&=-1^3+2^3+3^3-4^3+5^3-6^3+7^3+8^3-9^3\\
> 6&=+1^3-2^3+3^3+4^3-5^3+6^3+7^3-8^3
> \end{aligned}$$
> Thus each of the integers from 1 to 6 can be written as a sum of signed consecutive cubes starting from 1.
>
> 1) Write 7 as a sum of signed consecutive cubes starting from 1.
>
> We now ask whether every integer $M\geqslant1$ can be written as a sum of signed consecutive cubes starting from 1 and, more generally, whether every natural number $M\geqslant1$ can be written as a sum of signed consecutive $k$-th powers starting from 1.
> The question is therefore the following, for a given integer $k\geqslant1$:
>
> *Can every integer $M\geqslant1$ be written as a sum of signed consecutive $k$-th powers starting from 1, that is, in the form*
> $$M=\varepsilon_1\times1^k+\varepsilon_2\times2^k+\cdots+\varepsilon_n\times n^k,$$
> *where $n\geqslant1$ is an integer and $\varepsilon_1,\dots,\varepsilon_n$ are elements of $\{-1;+1\}$?*
>
> Such a sum may also be written
> $$M=\sum_{i=1}^{n}\varepsilon_i\times i^k.$$
> In the rest of this exercise, a *sign* is an element of $\{-1;+1\}$. In this way, the elements $\varepsilon_i$ of $\{-1;+1\}$ appearing in the expressions of $M$ above may be called signs. They correspond to signs in the usual sense: $+1$ corresponds to the sign $+$ and $-1$ to the sign $-$.
>
> **Part 2: Two first cases, $k=1$ and $k=2$**
>
> 2) Prove that for every integer $M\geqslant1$ there exist an integer $n\geqslant1$ and signs $\varepsilon_1,\dots,\varepsilon_n\in\{-1;+1\}$ such that
> $$M=\varepsilon_1\times1+\varepsilon_2\times2+\varepsilon_3\times3+\cdots+\varepsilon_n\times n.$$
>
> 3) Is there an integer $M\geqslant1$ for which a representation like the one in question 2) is unique?
>
> 4) Determine signs $u_0,u_1,u_2,u_3\in\{-1;+1\}$ and an integer $R_2\geqslant0$ such that, for every integer $n\geqslant1$,
> $$u_0\times n^2+u_1\times(n+1)^2+u_2\times(n+2)^2+u_3\times(n+3)^2=R_2.$$
>
> 5) Using question 4), prove that for every integer $M\geqslant1$ there exist an integer $n\geqslant1$ and signs $\varepsilon_1,\dots,\varepsilon_n$ such that
> $$M=\varepsilon_1\times1^2+\varepsilon_2\times2^2+\varepsilon_3\times3^2+\cdots+\varepsilon_n\times n^2.$$
>
> 6) Is there an integer $M\geqslant1$ for which a representation like the one in question 5) is unique?
>
> **Part 3: Iterated finite differences**
>
> A *polynomial function with integer coefficients of degree at most $d$* is a function $P$ defined on $\mathbb R$ for which there exist integers $a_0,a_1,\dots,a_d$ such that
> $$\text{for all } x\in\mathbb R,\quad P(x)=a_0+a_1x+a_2x^2+\cdots+a_dx^d.$$
> Given a function $f$ defined on $\mathbb R$ and a real number $a$, we denote by $\Delta_a(f)$ the function defined on $\mathbb R$ by
> $$\text{for all } x\in\mathbb R,\quad \big(\Delta_a(f)\big)(x)=f(x)-f(x+a).$$
>
> 7) Let $a$ be an integer and $P$ a polynomial function with integer coefficients of degree at most $d\geqslant1$. Prove that $\Delta_a(P)$ is a polynomial function with integer coefficients of degree at most $d-1$.
>
> For every function $f$ defined on $\mathbb R$, we define the sequence of functions $(T_k(f))_{k\in\mathbb N}$ by $T_0(f)=f$ and, for every integer $k\geqslant1$,
> $$T_k(f)=\Delta_{2^{k-1}}\big(T_{k-1}(f)\big).$$
> For example $T_3(f)=\Delta_4\big(\Delta_2(\Delta_1(f))\big)$ and, more generally, for every integer $k\geqslant1$,
> $$T_k(f)=\Delta_{2^{k-1}}\Big(\Delta_{2^{k-2}}\big(\cdots(\Delta_{2^0}(f))\cdots\big)\Big).$$
>
> 8) Prove that there exists a sequence of signs $(u_n)_{n\in\mathbb N}$ such that, for every $k\geqslant1$ and every function $f$ defined on $\mathbb R$,
> $$\text{for all } x\in\mathbb R,\quad (T_k(f))(x)=u_0f(x)+u_1f(x+1)+u_2f(x+2)+\cdots+u_{2^k-1}f(x+2^k-1).$$
>
> From now on, $(u_n)_{n\in\mathbb N}$ denotes the sequence of signs obtained in question 8).
>
> 9) Determine $u_0$, $u_1$, $u_2$, $u_3$, $u_4$, $u_5$, $u_6$ and $u_7$.
>
> 10) Prove that for every integer $k\geqslant0$ there exists an integer $R_k\in\mathbb Z$ such that, for every integer $n\geqslant1$,
> $$u_0n^k+u_1(n+1)^k+\cdots+u_{2^k-1}(n+2^k-1)^k=R_k.$$
>
> In the rest of the exercise, for every integer $k\geqslant0$, $R_k$ denotes the integer of question 10).
>
> 11) Prove that, for every integer $k\geqslant1$,
> $$R_k=-k\,2^{k-1}R_{k-1}.$$
> Deduce, for every integer $k\geqslant0$, an expression of $R_k$ in terms of $k$.
>
> **Part 4: An unexpected initialisation**
>
> In this part we fix an integer $k\geqslant1$ and an integer $r\geqslant2$.
>
> 12) Let $a$ and $b$ be two integers. Prove that if $r$ divides $a-b$, then $r$ divides $a^k-b^k$.
>
> In questions 13), 14) and 15) we fix an integer $n\geqslant1$.
>
> 13) Prove that
> $$r \text{ divides } \Big(n^k+(n+1)^k+\cdots+(n+r^2-1)^k\Big).$$
>
> 14) Prove that there exists an integer $c$ between $n$ and $n+r-1$ such that $r$ divides $c^k-1$.
>
> 15) Deduce that there exist signs $\varepsilon_n,\varepsilon_{n+1},\dots,\varepsilon_{n+r^2-1}$ such that
> $$r \text{ divides } \Big(\big(\varepsilon_nn^k+\varepsilon_{n+1}(n+1)^k+\cdots+\varepsilon_{n+r^2-1}(n+r^2-1)^k\big)-2\Big).$$
>
> **Part 5: Conclusion**
>
> In this part we fix an integer $k\geqslant1$.
>
> 16) Conclude that for every integer $M\geqslant1$ there exist an integer $n\geqslant1$ and signs $\varepsilon_1,\varepsilon_2,\dots,\varepsilon_n$ such that
> $$M=\varepsilon_1\times1^k+\varepsilon_2\times2^k+\cdots+\varepsilon_n\times n^k.$$
>
> 17) Is there an integer $M\geqslant1$ for which a representation like the one in question 16) is unique?
>
> **Part 6: Generalisation**
>
> 18) Let $P$ be a polynomial function with integer coefficients. Assume that there is no integer $\delta\geqslant2$ such that $\delta$ divides $P(n)$ for every integer $n\geqslant1$.
> Prove that for every $M\geqslant1$ there exist an integer $n\geqslant1$ and signs $\varepsilon_1,\dots,\varepsilon_n$ such that
> $$M=\varepsilon_1P(1)+\varepsilon_2P(2)+\cdots+\varepsilon_nP(n).$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** nessuna soluzione ufficiale pubblicata (prova a dimostrazione / a risposta aperta).
**Fonte:** [apri PDF p.4](https://www.vmaths.fr/wp-content/uploads/CG/Concours_General_2026_enonce.pdf#page=4) · Concours Général des Lycées 2026 (testo ufficiale, vmaths.fr)


<div class="qlang-split" data-lang="it"></div>


*Somme consecutive con segno: scrivere ogni intero M >= 1 come ±1^k ± 2^k ± ... ± n^k, tramite differenze finite iterate e divisibilità; generalizzazione ai polinomi a coefficienti interi.*

> **Esercizio 2: Somme consecutive con segno**
>
> **Parte 1: Introduzione**
>
> Si scrivono alla lavagna alcune potenze terze (dette anche cubi) di interi consecutivi a partire da 1, per esempio
> $$1^3\quad 2^3\quad 3^3\quad 4^3\quad 5^3\quad 6^3\quad 7^3\quad 8^3\quad 9^3\quad 10^3\quad 11^3\quad 12^3\quad 13^3\quad 14^3\quad 15^3$$
> Poi si mette un segno $+$ o un segno $-$ davanti a ciascuno di questi numeri, per esempio
> $$+1^3+2^3+3^3-4^3+5^3-6^3-7^3+8^3+9^3-10^3+11^3+12^3-13^3+14^3-15^3$$
> Un'espressione di questa forma si chiamerà *somma di cubi consecutivi con segno a partire da 1*.
> Nell'esempio qui sopra la somma vale 10: si vede così che 10 si scrive come somma di cubi consecutivi con segno a partire da 1.
> Dopo qualche tentativo si ottiene
> $$\begin{aligned}
> 1&=+1^3\\
> 2&=-1^3-2^3+3^3-4^3-5^3+6^3+7^3-8^3+9^3-10^3-11^3+12^3\\
> 3&=-1^3-2^3-3^3-4^3-5^3+6^3-7^3-8^3+9^3+10^3-11^3-12^3+13^3\\
> 4&=-1^3-2^3+3^3+4^3-5^3+6^3+7^3-8^3\\
> 5&=-1^3+2^3+3^3-4^3+5^3-6^3+7^3+8^3-9^3\\
> 6&=+1^3-2^3+3^3+4^3-5^3+6^3+7^3-8^3
> \end{aligned}$$
> Quindi ciascuno degli interi da 1 a 6 si scrive come somma di cubi consecutivi con segno a partire da 1.
>
> 1) Scrivere 7 come somma di cubi consecutivi con segno a partire da 1.
>
> Ci si chiede ora se sia possibile scrivere ogni intero $M\geqslant1$ come somma di cubi consecutivi con segno a partire da 1 e, più in generale, se sia possibile scrivere ogni numero naturale $M\geqslant1$ come somma di potenze $k$-esime consecutive con segno a partire da 1.
> La domanda è quindi la seguente, dato un intero $k\geqslant1$:
>
> *È possibile scrivere ogni intero $M\geqslant1$ come somma di potenze $k$-esime consecutive con segno a partire da 1, cioè nella forma*
> $$M=\varepsilon_1\times1^k+\varepsilon_2\times2^k+\cdots+\varepsilon_n\times n^k,$$
> *dove $n\geqslant1$ è un intero e $\varepsilon_1,\dots,\varepsilon_n$ sono elementi di $\{-1;+1\}$?*
>
> Una somma di questo tipo si potrà scrivere anche
> $$M=\sum_{i=1}^{n}\varepsilon_i\times i^k.$$
> Nel seguito dell'esercizio si chiamerà *segno* un elemento di $\{-1;+1\}$. In questo modo gli elementi $\varepsilon_i$ di $\{-1;+1\}$ che compaiono nelle espressioni di $M$ scritte sopra si possono chiamare segni. Corrispondono ai segni nel senso usuale: $+1$ corrisponde al segno $+$ e $-1$ al segno $-$.
>
> **Parte 2: Due primi casi, $k=1$ e $k=2$**
>
> 2) Dimostrare che per ogni intero $M\geqslant1$ esistono un intero $n\geqslant1$ e dei segni $\varepsilon_1,\dots,\varepsilon_n\in\{-1;+1\}$ tali che
> $$M=\varepsilon_1\times1+\varepsilon_2\times2+\varepsilon_3\times3+\cdots+\varepsilon_n\times n.$$
>
> 3) Esiste un intero $M\geqslant1$ per il quale una scrittura come quella della domanda 2) è unica?
>
> 4) Determinare dei segni $u_0,u_1,u_2,u_3\in\{-1;+1\}$ e un intero $R_2\geqslant0$ tali che, per ogni intero $n\geqslant1$,
> $$u_0\times n^2+u_1\times(n+1)^2+u_2\times(n+2)^2+u_3\times(n+3)^2=R_2.$$
>
> 5) Usando la domanda 4), dimostrare che per ogni intero $M\geqslant1$ esistono un intero $n\geqslant1$ e dei segni $\varepsilon_1,\dots,\varepsilon_n$ tali che
> $$M=\varepsilon_1\times1^2+\varepsilon_2\times2^2+\varepsilon_3\times3^2+\cdots+\varepsilon_n\times n^2.$$
>
> 6) Esiste un intero $M\geqslant1$ per il quale una scrittura come quella della domanda 5) è unica?
>
> **Parte 3: Differenze finite iterate**
>
> Si chiama *funzione polinomiale a coefficienti interi di grado al più $d$* una funzione $P$ definita su $\mathbb R$ per la quale esistono interi relativi $a_0,a_1,\dots,a_d$ tali che
> $$\text{per ogni } x\in\mathbb R,\quad P(x)=a_0+a_1x+a_2x^2+\cdots+a_dx^d.$$
> Data una funzione $f$ definita su $\mathbb R$ e un numero reale $a$, si indica con $\Delta_a(f)$ la funzione definita su $\mathbb R$ da
> $$\text{per ogni } x\in\mathbb R,\quad \big(\Delta_a(f)\big)(x)=f(x)-f(x+a).$$
>
> 7) Siano $a$ un intero relativo e $P$ una funzione polinomiale a coefficienti interi di grado al più $d\geqslant1$. Dimostrare che $\Delta_a(P)$ è una funzione polinomiale a coefficienti interi di grado al più $d-1$.
>
> Per ogni funzione $f$ definita su $\mathbb R$ si definisce la successione di funzioni $(T_k(f))_{k\in\mathbb N}$ ponendo $T_0(f)=f$ e, per ogni intero $k\geqslant1$,
> $$T_k(f)=\Delta_{2^{k-1}}\big(T_{k-1}(f)\big).$$
> Per esempio $T_3(f)=\Delta_4\big(\Delta_2(\Delta_1(f))\big)$ e, più in generale, per ogni intero $k\geqslant1$,
> $$T_k(f)=\Delta_{2^{k-1}}\Big(\Delta_{2^{k-2}}\big(\cdots(\Delta_{2^0}(f))\cdots\big)\Big).$$
>
> 8) Dimostrare che esiste una successione di segni $(u_n)_{n\in\mathbb N}$ tale che, per ogni $k\geqslant1$ e per ogni funzione $f$ definita su $\mathbb R$,
> $$\text{per ogni } x\in\mathbb R,\quad (T_k(f))(x)=u_0f(x)+u_1f(x+1)+u_2f(x+2)+\cdots+u_{2^k-1}f(x+2^k-1).$$
>
> D'ora in poi $(u_n)_{n\in\mathbb N}$ indica la successione di segni ottenuta nella domanda 8).
>
> 9) Determinare $u_0$, $u_1$, $u_2$, $u_3$, $u_4$, $u_5$, $u_6$ e $u_7$.
>
> 10) Dimostrare che per ogni intero $k\geqslant0$ esiste un intero relativo $R_k\in\mathbb Z$ tale che, per ogni intero $n\geqslant1$,
> $$u_0n^k+u_1(n+1)^k+\cdots+u_{2^k-1}(n+2^k-1)^k=R_k.$$
>
> Nel seguito dell'esercizio, per ogni intero $k\geqslant0$, $R_k$ indica l'intero relativo della domanda 10).
>
> 11) Dimostrare che, per ogni intero $k\geqslant1$,
> $$R_k=-k\,2^{k-1}R_{k-1}.$$
> Dedurne, per ogni intero $k\geqslant0$, un'espressione di $R_k$ in funzione di $k$.
>
> **Parte 4: Un'inizializzazione insolita**
>
> In questa parte si fissano un intero $k\geqslant1$ e un intero $r\geqslant2$.
>
> 12) Siano $a$ e $b$ due interi. Dimostrare che, se $r$ divide $a-b$, allora $r$ divide $a^k-b^k$.
>
> Nelle domande 13), 14) e 15) si fissa un intero $n\geqslant1$.
>
> 13) Dimostrare che
> $$r \text{ divide } \Big(n^k+(n+1)^k+\cdots+(n+r^2-1)^k\Big).$$
>
> 14) Dimostrare che esiste un intero $c$ compreso tra $n$ e $n+r-1$ tale che $r$ divida $c^k-1$.
>
> 15) Dedurne che esistono dei segni $\varepsilon_n,\varepsilon_{n+1},\dots,\varepsilon_{n+r^2-1}$ tali che
> $$r \text{ divide } \Big(\big(\varepsilon_nn^k+\varepsilon_{n+1}(n+1)^k+\cdots+\varepsilon_{n+r^2-1}(n+r^2-1)^k\big)-2\Big).$$
>
> **Parte 5: Conclusione**
>
> In questa parte si fissa un intero $k\geqslant1$.
>
> 16) Concludere che per ogni intero $M\geqslant1$ esistono un intero $n\geqslant1$ e dei segni $\varepsilon_1,\varepsilon_2,\dots,\varepsilon_n$ tali che
> $$M=\varepsilon_1\times1^k+\varepsilon_2\times2^k+\cdots+\varepsilon_n\times n^k.$$
>
> 17) Esiste un intero $M\geqslant1$ per il quale una scrittura come quella della domanda 16) è unica?
>
> **Parte 6: Generalizzazione**
>
> 18) Sia $P$ una funzione polinomiale a coefficienti interi. Si supponga che non esista alcun intero $\delta\geqslant2$ tale che $\delta$ divida $P(n)$ per ogni intero $n\geqslant1$.
> Dimostrare che per ogni $M\geqslant1$ esistono un intero $n\geqslant1$ e dei segni $\varepsilon_1,\dots,\varepsilon_n$ tali che
> $$M=\varepsilon_1P(1)+\varepsilon_2P(2)+\cdots+\varepsilon_nP(n).$$

**Risposta:** nessuna soluzione ufficiale pubblicata (prova a dimostrazione / a risposta aperta).



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,topic_combinatoria"></span>

<div class="qlang-switch" data-default="en"></div>


*A tempting cheese: a crow and a fox cut a disc of area 1 with two crossing chords into four pieces and share them; for which g can the crow guarantee area at least g, depending on who makes each cut (and with perpendicular cuts).*

> **Exercise 3: A tempting cheese**
>
> A crow and a fox want to share a cheese shaped like a disc of area 1. Both are starving and want to eat as much cheese as possible. For the sake of fairness, they have decided to cut the cheese into four pieces; the crow will first choose the piece of its choice, then the fox will choose two pieces, and the crow will take the last piece.
>
> The best way to cut a cheese is to use a cheese wire. Each use of the wire cuts the cheese along a segment whose endpoints lie on the boundary of the disc; this is commonly called "making a wire cut". To obtain four pieces with as few wire cuts as possible, the crow and the fox will therefore use the wire twice, so as to obtain two segments that cross at a point inside the disc.
>
> For every real number $g\in[0\,;1]$, we say that the crow has a *$g$-greedy strategy* if it can manage to obtain two pieces whose total area is greater than or equal to $g$. We are interested, depending on whether the crow or the fox makes each of the wire cuts, in the set of real numbers $g$ for which such a $g$-greedy strategy exists.
>
> 1) Let $a$ and $b$ be two strictly positive real numbers with $a+b=1$. Prove that the crow can arrange for its first wire cut to divide the cheese into two pieces of areas $a$ and $b$.
>
> 2) First, the crow makes both wire cuts. For which real numbers $g$ does it have a $g$-greedy strategy?
>
> 3) Unhappy with the previous situation, the fox now makes the first wire cut; the crow still makes the second one. Under these new conditions, for which real numbers $g$ does the crow have a $g$-greedy strategy?
>
> 4) Third case: this time the crow makes the first wire cut and the fox makes the second one. For which real numbers $g$ does the crow now have a $g$-greedy strategy?
>
> 5) Finally, the two accomplices agree that the fox will make both wire cuts. For which real numbers $g$ does the crow have a $g$-greedy strategy?
>
> For aesthetic reasons, the crow and the fox now decide that the two segments along which they cut the cheese must be perpendicular.
>
> 6) Answer question 2) again under these new conditions.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** nessuna soluzione ufficiale pubblicata (prova a dimostrazione / a risposta aperta).
**Fonte:** [apri PDF p.7](https://www.vmaths.fr/wp-content/uploads/CG/Concours_General_2026_enonce.pdf#page=7) · Concours Général des Lycées 2026 (testo ufficiale, vmaths.fr)


<div class="qlang-split" data-lang="it"></div>


*Formaggio allettante: un corvo e una volpe tagliano un disco di area 1 con due corde che si incrociano in quattro parti e se le spartiscono; per quali g il corvo può garantirsi almeno g di area, a seconda di chi fa ciascun taglio (e con tagli perpendicolari).*

> **Esercizio 3: Formaggio allettante**
>
> Un corvo e una volpe vogliono dividersi un formaggio a forma di disco di area 1. Entrambi sono affamati e vogliono mangiare più formaggio possibile. Per equità hanno deciso di tagliare il formaggio in quattro parti: il corvo sceglierà per primo la parte che preferisce, poi la volpe sceglierà due parti, e il corvo prenderà l'ultima parte.
>
> Il modo migliore per tagliare un formaggio è usare un filo taglia-formaggio. Ogni uso del filo taglia il formaggio lungo un segmento i cui estremi stanno sul bordo del disco: è ciò che comunemente si chiama «dare un colpo di filo». Per ottenere quattro parti con il minor numero di colpi di filo, il corvo e la volpe useranno quindi il filo due volte, in modo da ottenere due segmenti che si incrociano in un punto interno al disco.
>
> Per ogni numero reale $g\in[0\,;1]$, si dice che il corvo dispone di una *strategia $g$-golosa* se riesce a fare in modo di prendere due parti la cui somma delle aree è maggiore o uguale a $g$. Ci si interessa, a seconda che sia il corvo o la volpe a dare ciascuno dei colpi di filo, all'insieme dei numeri reali $g$ per cui esiste una tale strategia $g$-golosa.
>
> 1) Siano $a$ e $b$ due numeri reali strettamente positivi con $a+b=1$. Dimostrare che il corvo può fare in modo che il suo primo colpo di filo divida il formaggio in due parti di aree $a$ e $b$.
>
> 2) In un primo momento è il corvo a dare entrambi i colpi di filo. Per quali numeri reali $g$ dispone di una strategia $g$-golosa?
>
> 3) Scontenta della situazione precedente, ora è la volpe a dare il primo colpo di filo; il corvo dà sempre il secondo. In queste nuove condizioni, per quali numeri reali $g$ il corvo dispone di una strategia $g$-golosa?
>
> 4) Terzo caso: questa volta il corvo dà il primo colpo di filo e la volpe il secondo. Per quali numeri reali $g$ il corvo dispone ora di una strategia $g$-golosa?
>
> 5) Infine i due compari stabiliscono che sarà la volpe a dare entrambi i colpi di filo. Per quali numeri reali $g$ il corvo dispone di una strategia $g$-golosa?
>
> Per ragioni estetiche, d'ora in poi il corvo e la volpe decidono che i due segmenti lungo i quali taglieranno il formaggio devono essere perpendicolari.
>
> 6) Riprendere la domanda 2) in queste nuove condizioni.

**Risposta:** nessuna soluzione ufficiale pubblicata (prova a dimostrazione / a risposta aperta).
