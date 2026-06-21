---
title: Concours Général des Lycées 2004 — Matematica — Quesito 5
tipo: quesito
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
**Fonte:** apri PDF
