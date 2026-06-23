---
title: Olympiades Nationales de Mathématiques (Première) 2024 — Quesito 2
tipo: quesito
quesito_id: quesito_src_oprem_2024__Q02
parent: src_oprem_2024
competition: Olympiades Nationales de Mathématiques (Première) 2024
family: olympiades_premiere
year: '2024'
level: Olympiades Première
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  Exercise 2 (general track, maths speciality): STD sets (all subset sums
  distinct) — examples/counterexamples, a recursive sequence shown to be
  geometric, and lower bounds for STD sequences using a probabilistic (variance)
  argument.
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_combinatoria
  - topic_probabilita
  - topic_insiemi_funzioni
  - topic_algebra
  - topic_disuguaglianze
methods:
  - method_induzione
  - method_ricorsione
  - method_conteggio
  - method_disuguaglianze
  - method_casework
skills:
  - skill_astrazione
  - skill_manipolazione_algebrica
  - skill_conteggio_sistematico
  - skill_lettura_attenta
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/olimpiadi-premiere
  - anno/2024
  - livello/Olympiades-Première
  - topic/aritmetica
  - topic/combinatoria
  - topic/probabilita
  - topic/insiemi_funzioni
  - topic/algebra
  - topic/disuguaglianze
  - gara/individuale
  - qa/da-verificare
---

*Exercise 2 (general track, maths speciality): STD sets (all subset sums distinct) — examples/counterexamples, a recursive sequence shown to be geometric, and lower bounds for STD sequences using a probabilistic (variance) argument.*

> **Exercise 2 (candidates of the general track following the « spé maths » option)**
> 
> *We sum all distinct numbers (Nous sommes toutes distinctes).*
> 
> In this exercise, the symbol $n$ denotes a natural integer with $n\ge 1$; all sets considered are non-empty, finite, and consist of distinct real numbers; moreover, every finite set $A=\{a_1,a_2,\ldots,a_n\}$ of $n$ distinct real elements will be written with its elements ordered as $a_1<a_2<\cdots<a_n$. Given such a set, we write $S(A)$ for the sum of its elements, that is $S(A)=a_1+\cdots+a_n$. In particular, when $n=1$ and $A=\{a_1\}$ is a singleton, $S(A)=a_1$.
> 
> We say the set $A$ is **STD** (à sommes toutes distinctes, i.e. all subset sums distinct) when, for all non-empty subsets $Y$ and $Z$ of $A$ with $Y\neq Z$, one has $S(Y)\neq S(Z)$. Equivalently, the $2^n-1$ sums one can form with the elements of $A$ are all distinct.
> 
> For example, $A=\{1,2,5\}$ is STD since the numbers $1,2,5,\ 1+2=3,\ 2+5=7,\ 1+5=6,\ 1+2+5=8$ are all distinct. In contrast, $A=\{2,4,6,7\}$ is not STD because, taking $Y=\{2,4,7\}$ and $Z=\{6,7\}$, one has $S(Y)=2+4+7=13=S(Z)$, although $Y\neq Z$.
> 
> ---
> 
> **Part 1 — Examples and simple counter-examples**
> 
> **1.** Explain why the number of sums to consider in order to study the STD character of $A$ is $2^n-1$.
> 
> **2.** Show that the set $\{1,3,5\}$ is STD but that the set $\{4,6,7,9\}$ is not.
> 
> **3.** Which set(s) $A$ containing $0$ is (are) STD?
> 
> **4.** Let $A$ and $B$ be two non-empty finite sets of distinct reals, with $A\subset B$ (that is, $A$ is a subset of $B$).
> 
> **a.** If $B$ is STD, justify that $A$ is also STD.
> 
> **b.** Can the set $B$ be STD if $A$ is not?
> 
> **5.** Let $A$ be a non-empty finite set of $n$ distinct reals. Suppose that $A$ is **not** constituted of integers and that it is STD. Justify that $A\cup\{\frac{1}{2}\}$, then that $A\cup\{\frac{1}{2},\sqrt{2}\}$, are also STD.
> 
> ---
> 
> **Part 2 — Construction of a sequence**
> 
> We consider the sequence $(u_n)$ defined by $u_1=1$ and the recurrence relation, valid for all $n\ge 1$:
> $$u_{n+1}=u_1+\cdots+u_n+1.$$
> 
> **6.** Verify that $u_2=2$ and $u_3=4$. Calculate $u_5$.
> 
> **7.** Write on your copy a program in the Python language that would return $u_{100}$ (which we will not actually compute).
> 
> **8.** Study the direction of variation (monotonicity) of the sequence $(u_n)$.
> 
> **9.** Show that, for all $n\ge 1$, the set $\{u_1,\ldots,u_n\}$ is STD.
> 
> **10.** Show that $(u_n)$ is in fact a geometric sequence, which you will determine.
> 
> ---
> 
> **Part 3 — STD sequences**
> 
> A sequence $(u_n)$ is said to be STD when it is strictly increasing, composed of strictly positive integers, and such that for all $n\ge 1$ the set $\{u_1,\ldots,u_n\}$ is STD. For example, the sequence studied in Part 2 is an STD sequence.
> 
> **11.** Let $(u_n)$ be an arbitrary STD sequence.
> 
> **a.** Show that for all $n\ge 1$:
> $$u_1+\cdots+u_n\ge 2^n-1.$$
> 
> **b.** Deduce that for all $n\ge 2$:
> $$u_n\ge \frac{2^n}{n}.$$
> 
> **12.** The goal of this question is to refine the lower bound obtained in the previous question. To do this, we will use probability, and we will say that a random variable $X$ taking values in a non-empty finite real set $A=\{a_1,\ldots,a_n\}$ of $n$ distinct elements follows the uniform law when all the values it can take are equiprobable. Thus, $P(X=a_1)=P(X=a_2)=\cdots=P(X=a_n)=\frac{1}{n}$.
> 
> **a.** Let $(u_n)$ be an arbitrary STD sequence. For $n\ge 2$, consider the independent random variables $X_1,\ldots,X_n$ that follow the uniform law on the set $\{-1,1\}$; thus, for each index $i$, $P(X_i=1)=P(X_i=-1)=\frac{1}{2}$. Set $X=u_1X_1+\cdots+u_nX_n$. We admit that $E(X)=u_1E(X_1)+\cdots+u_nE(X_n)$ and that $V(X)=u_1^2V(X_1)+\cdots+u_n^2V(X_n)$. After justifying that $E(X_1)=0$ and $V(X_1)=1$, calculate the expectation $E(X)$ and express the variance $V(X)$ in terms of $u_1,u_2,\ldots,u_n$.
> 
> **b.** Show that $X$ follows a uniform law on a set of $2^n$ relative integers, symmetric with respect to $0$, and whose elements are non-zero and of the same parity.
> 
> **c.** Deduce that for all $n\ge 1$:
> $$u_n^2\ge \frac{1}{n}\,\frac{1}{2^{n-1}}\left(1^2+3^2+5^2+\cdots+(2^n-1)^2\right).$$
> 
> **d.** Propose a value of $n\ge 2$ for which this inequality furnishes a lower bound larger than that of question **11.b**.

![[src_oprem_2024__Q02.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_conteggio|Conteggio]], [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zCUBghOB28ZpdNrjC68r0u1mIzIpp_46/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
