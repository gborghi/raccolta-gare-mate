---
title: Concours Général des Lycées 2012 — Matematica — Quesito 1
tipo: quesito
quesito_id: quesito_src_cgen_2012__Q01
parent: src_cgen_2012
competition: Concours Général des Lycées 2012 — Matematica
family: concours_generale
year: '2012'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  Study the function f that swaps primes and exponents in a prime factorization,
  and the iterated sequences f^i(n).
qa_score: '4'
topics:
  - topic_aritmetica
  - topic_algebra
  - topic_insiemi_funzioni
methods:
  - method_fattorizzazione
  - method_disuguaglianze
  - method_casework
  - method_ricorsione
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_casework_accurato
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2012
  - livello/Concours-Général
  - topic/aritmetica
  - topic/algebra
  - topic/insiemi_funzioni
  - gara/individuale
---

*Study the function f that swaps primes and exponents in a prime factorization, and the iterated sequences f^i(n).*

> Problem 1: The primes on top, the exponents on the bottom.
> 
> For every integer $n \ge 2$, one has the prime factorization
> $$n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$$
> where the distinct primes $p_1, p_2, \ldots p_k$ are the prime divisors of $n$, and the exponents $a_1, a_2, \ldots, a_k$ are strictly positive integers. One then sets
> $$f(n) = a_1^{p_1} a_2^{p_2} \cdots a_k^{p_k}.$$
> For example, if $n = 720 = 2^4 3^2 5^1$, then $f(n) = 4^2 2^3 1^5 = 128$. Moreover, $f(1) = 1$, since for $n = 1$ one obtains an empty function $f$, for $n \in \mathbb{N}^*$. Finally, for $n \in \mathbb{N}^*$, one defines $f^i(n)$ by recurrence over $i \in \mathbb{N}$, so that $f^0(n) = n$ and
> $$f^{i+1}(n) = f\big(f^i(n)\big) \quad \text{for all } i \in \mathbb{N}.$$
> For example: $f^0(720) = 720$, $f^1(720) = f(720) = 128$, $f^2(720) = f(128) = 49.$
> 
> The aim of this problem is to study the behavior of the function $f$ and of the sequences $\big(f^i(n)\big)_{i \in \mathbb{N}}$ for $n$ fixed.
> 
> 1. (a) Compute $f(2012)$.
> (b) Determine the numbers $f^i(36^{36})$ for $0 \le i \le 3$. What can be said about the following ones?
> 
> 2. (a) Give an example of an integer $n \ge 1$ such that, for some natural integer $i$, one has
> $$f^{i+2}(n) = f^i(n) \quad \text{and} \quad f^{i+1}(n) \ne f^i(n).$$
> (b) Show that the function $f$ is neither nondecreasing nor nonincreasing.
> 
> 3. Solve in $\mathbb{N}^*$:
> (a) the equation $f(n) = 1$;
> (b) the equation $f(n) = 2$;
> (c) the equation $f(n) = 4$.
> 
> 4. (a) For all integers $a \ge 2$ and $b \ge 0$, show that $ab \le a^b$.
> (b) Let $k \in \mathbb{N}^*$ and let $a_1, \ldots, a_k, b_1, \ldots, b_k$ be integers such that $a_i \ge 2$ and $b_i \ge 0$ for all $i$. Show that
> $$a_1 b_1 + a_2 b_2 + \cdots + a_k b_k \le a_1^{b_1} a_2^{b_2} \cdots a_k^{b_k}.$$
> (c) For all $n \in \mathbb{N}^*$, show that $f(f(n)) \le n$.
> (d) Let $n \in \mathbb{N}^*$. Show that there exists a natural integer $r$ such that, for every integer $i \ge r$, one has $f^{i+2}(n) = f^i(n).$
> 
> 5. Let $E$ be the set of integers $n \ge 2$ having only exponents strictly greater than $1$ in their decomposition into prime factors.
> (a) For every integer $a \ge 2$, show that there exist natural integers $\alpha$ and $\beta$ such that $a = 2\alpha + 3\beta.$
> (b) Deduce from this that if $n$ belongs to $E$, then there exists an element $m$ of $E$ such that $f(m) = n.$
> (c) Give an element $m$ of $E$ such that $f(m) = 2012^{2012}.$
> (d) What can be said about the converse of (b)?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** apri PDF
