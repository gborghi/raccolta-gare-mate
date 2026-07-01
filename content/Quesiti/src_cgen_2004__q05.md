---
title: Concours Général des Lycées 2004 — Matematica — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2004__Q05
parent: src_cgen_2004
competition: Concours Général des Lycées 2004 — Matematica
family: concours_generale
year: '2004'
level: Concours Général
country: Francia
modalita: individuale
quesito: '5'
summary: >-
  Which primes are sums of two squares: a finite set S of triplets, an iterative
  descent procedure, a fixed point, and an explicit decomposition algorithm
qa_score: '3'
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_invarianti
  - method_casework
  - method_ricorsione
  - method_congruenze
skills:
  - skill_riconoscimento_pattern
  - skill_casework_accurato
  - skill_conteggio_sistematico
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2004
  - livello/Concours-Général
  - topic/aritmetica
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Which primes are sums of two squares: a finite set S of triplets, an iterative descent procedure, a fixed point, and an explicit decomposition algorithm*

> Prime number sum of two squares.
> 
> We propose in this part to determine all the prime numbers that can be written as a sum of two squares of natural integers. We will designate more simply by prime number sum of two squares such a number.
> 
> 1.
>    a. Show that if $n$ is a natural integer odd sum of two squares, then it is congruent to $1$ modulo $4$.
>    b. Write $2$ and $5$ as a sum of two squares.
> 
> In the rest of part 5, $p$ designates a prime number congruent to $1$ modulo $4$ and strictly greater than $5$. One writes it under the form $p = 4m + 1$ (with $m > 2$). One defines $S = \{(x,y,z) \in \mathbb{N} \times \mathbb{N} \times \mathbb{Z} \mid 4xy + z^2 = p\}$.
> 
> 2.
>    a. Show that $S$ is a finite set, non-empty, and that the intersection of $S$ with the set of equation $x = y + z$ is empty.
>    b. To every triplet $(x,y,z)$ of $S$, one associates the triplet $(x',y',z')$ defined by:
>    $$(x',y',z') = \begin{cases} (x-y-z,\ y,\ 2y+z) & \text{if } x > y+z \\ (y+z-x,\ x,\ 2x-z) & \text{if } x < y+z \end{cases}$$
>    Show that for every $(x,y,z)$ of $S$, $(x',y',z')$ is also an element of $S$.
> 
> We consider henceforth the sequence of triplets in $S$ defined by iterating the preceding procedure in the following manner:
>    - One starts from the triplet $(x_0, y_0, z_0) = (m, 1, 1)$;
>    - $(x_k, y_k, z_k)$ having been defined in $S$, one takes $x_{k+1} = x'_k$, $y_{k+1} = y'_k$, $z_{k+1} = z'_k$.
> 
> 3.
>    a. Study of a particular case. In this question only, one takes $m = 10$. Determine the triplets $(x_k, y_k, z_k)$ for $0 \le k \le 11$.
>    b. Show that if $(a,b,c) = (x_k, y_k, z_k)$, with $k \ge 2$, then the triplet $(x_{k-1}, y_{k-1}, z_{k-1})$ is:
>    $$\begin{cases} (a-b+c,\ b,\ c-2b) & \text{if } a-4b+2c > 0 \\ (b,\ a-b+c,\ 2b-c) & \text{if } a-4b+2c < 0 \end{cases}$$
>    Show that this result is still true for $k = 1$.
>    c. Show that there exist two distinct integers $k$ and $\ell$ such that $(x_k, y_k, z_k) = (x_\ell, y_\ell, z_\ell)$. Deduce that there exists an integer $n$ strictly positive such that $(x_n, y_n, z_n) = (m, 1, 1)$.
> 
> One henceforth denotes $n$ the smallest integer strictly positive such that: $(x_n, y_n, z_n) = (m, 1, 1)$.
> 
> 4.
>    a. Calculate $(x_{n-1}, y_{n-1}, z_{n-1})$ and $(x_{n-2}, y_{n-2}, z_{n-2})$.
>    b. Show that, for every integer $j$ such that $1 \le j \le n$: $$(x_{j-1}, y_{j-1}, z_{j-1}) = \begin{cases} (x_{n-j}, y_{n-j}, z_{n-j}) & \text{if } x_{j-1} > y_{j-1} + z_{j-1} \\ (y_{n-j}, x_{n-j}, z_{n-j}) & \text{if } x_{j-1} < y_{j-1} + z_{j-1} \end{cases}$$
>    c. Show that $n$ is odd. One sets henceforth $n = 2r + 1$.
>    d. Show that $x_r = y_r$. Deduce that there exists a decomposition of $p$ as a sum of two squares.
> 
> 5.
>    a. Deduce from the preceding questions an algorithm allowing one to decompose $p$ as a sum of two squares.
>    b. Give the smallest prime number greater than $40$ that is a sum of two squares and, with the help of this algorithm, specify a decomposition of it (one will indicate the triplets calculated at the different steps of the iteration).

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1GYnce5EmWqMqVpZOqscNSNU2tjo9pAh2/view)


<span class="qlang-split" data-lang="it"></span>


*Che prime sono somme di due quadrati: un insieme finito di triplici S, una procedura di discesa iterativa, un punto fisso e un algoritmo di decomposizione esplicito*

> Numero primo somma di due quadrati.
> 
> Proponiamo in questa parte di determinare tutti i numeri primi che possono essere scritti come la somma di due quadrati di interi naturali. Indicheremo più semplicemente con la somma di un numero primo di due quadrati un tale numero.
> 
> 1. a. Mostrare che se $n$ è una somma impar di due quadrati, allora è congruente con $1$ modulo $4$. b. Scrivere $2$ e $5$ come somma di due quadrati.
> 
> Nel resto della parte 5, $p$ designa un numero primo congruente al modulo $1$ $4$ e strettamente superiore a $5$. Si scrive sotto la forma $p = 4m + 1$ (con $m > 2$). Uno definisce $S = \{(x,y,z) \in \mathbb{N} \times \mathbb{N} \times \mathbb{Z} \mid 4xy + z^2 = p\}$.
> 
> 2. a. Indicare che $S$ è un insieme finito, non vuoto, e che l'intersezione di $S$ con l'insieme dell'equazione $x = y + z$ è vuota. b. Per ogni triplet $(x,y,z)$ di $S$, si associa il triplet $(x',y',z')$ definito da: $$(x',y',z') = \begin{cases} (x-y-z,\ y,\ 2y+z) & \text{if } x > y+z \\ (y+z-x,\ x,\ 2x-z) & \text{if } x < y+z \end{cases}$$ Mostra che per ogni $(x,y,z)$ di $S$, $(x',y',z')$ è anche un elemento di $S$.
> 
> Da ora in poi consideriamo la sequenza dei triplici in $S$ definita iterando la procedura precedente nel modo seguente: - Si inizia dal triplice $(x_0, y_0, z_0) = (m, 1, 1)$; - $(x_k, y_k, z_k)$ essendo stato definito in $S$, si prende $x_{k+1} = x'_k$, $y_{k+1} = y'_k$, $z_{k+1} = z'_k$.
> 
> 3. a. Studio di un caso particolare. Solo in questa domanda si prende $m = 10$. Determinare i triplici $(x_k, y_k, z_k)$ per $0 \le k \le 11$. b. Indicare che se $(a,b,c) = (x_k, y_k, z_k)$, con $k \ge 2$, il triplet $(x_{k-1}, y_{k-1}, z_{k-1})$ è: $$\begin{cases} (a-b+c,\ b,\ c-2b) & \text{if } a-4b+2c > 0 \\ (b,\ a-b+c,\ 2b-c) & \text{if } a-4b+2c < 0 \end{cases}$$ Indicare che questo risultato è ancora valido per $k = 1$. c. Indicare che esistono due numeri interi distinti $k$ e $\ell$ in modo tale che $(x_k, y_k, z_k) = (x_\ell, y_\ell, z_\ell)$. Riduzione che esista un numero intero $n$ strettamente positivo tale che $(x_n, y_n, z_n) = (m, 1, 1)$.
> 
> Una di queste indica $n$ il numero intero più piccolo strettamente positivo tale che: $(x_n, y_n, z_n) = (m, 1, 1)$.
> 
> 4. a. Calcolare $(x_{n-1}, y_{n-1}, z_{n-1})$ e $(x_{n-2}, y_{n-2}, z_{n-2})$. b. Indicare che, per ogni numero intero $j$ tale che $1 \le j \le n$: $$(x_{j-1}, y_{j-1}, z_{j-1}) = \begin{cases} (x_{n-j}, y_{n-j}, z_{n-j}) & \text{if } x_{j-1} > y_{j-1} + z_{j-1} \\ (y_{n-j}, x_{n-j}, z_{n-j}) & \text{if } x_{j-1} < y_{j-1} + z_{j-1} \end{cases}$$ c. Mostrare che $n$ è strano. Un set da ora in poi $n = 2r + 1$. d. Mostra che $x_r = y_r$. Deduci che esiste una decomposizione di $p$ come somma di due quadrati.
> 
> 5. a. Deduci dalle domande precedenti un algoritmo che consente di decomporre $p$ come somma di due quadrati. b. Date il numero primo più piccolo superiore a $40$ che è la somma di due quadrati e, con l'aiuto di questo algoritmo, specificate una sua decomposizione (indicheremo i triplici calcolati ai diversi passaggi dell'iterazione).

[[src_cgen_2004__Q05]]
