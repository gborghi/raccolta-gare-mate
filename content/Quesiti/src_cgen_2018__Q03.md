---
title: Concours Général des Lycées 2018 — Matematica — Quesito 3
tipo: quesito
quesito_id: quesito_src_cgen_2018__Q03
parent: src_cgen_2018
competition: Concours Général des Lycées 2018 — Matematica
family: concours_generale
year: '2018'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Golden-number (base-phi) representations: equivalence rule 011<->100, every
  natural number is golden, pure golden representations (no two consecutive 1s),
  golden content, bounds, existence/uniqueness, and an algorithm applied to
  2018.
qa_score: '4'
topics:
  - topic_aritmetica
  - topic_algebra
  - topic_insiemi_funzioni
methods:
  - method_induzione
  - method_ricorsione
  - method_casework
skills:
  - skill_manipolazione_algebrica
  - skill_riconoscimento_pattern
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2018
  - livello/Concours-Général
  - topic/aritmetica
  - topic/algebra
  - topic/insiemi_funzioni
  - gara/individuale
---

*Golden-number (base-phi) representations: equivalence rule 011<->100, every natural number is golden, pure golden representations (no two consecutive 1s), golden content, bounds, existence/uniqueness, and an algorithm applied to 2018.*

> Problem 3: The golden numbers.
> 
> We denote by $\varphi$ the largest real root of the equation $x^2=x+1$. The number $\varphi$, known since Antiquity, is called the golden number. A real $x$ is said to be a golden number ('nombre en or') if there exist:
> - two natural numbers $p$ and $q$
> - integers $a_p,a_{p-1},\cdots,a_0,\ldots,a_{-q}$ taking only the values $0$ or $1$ such that:
> $$x=a_p\varphi^p+a_{p-1}\varphi^{p-1}+\ldots+a_1\varphi+a_0+a_{-1}\varphi^{-1}+\cdots+a_{-q}\varphi^{-q}$$
> In this case, we will write $x\triangleright a_p\,a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$.
> For example, if $x=\varphi^3+\varphi^2+1+\frac{1}{\varphi}+\frac{1}{\varphi^4}$, we will write $x\triangleright 1101,1001$. We will then say that $1101,1001$ is a golden representation of $x$.
> It is clear that one may add, at the beginning or at the end of the representation, as many $0$s as one wishes.
> A sequence of a representation is a string of $0$s and $1$s that appears in the representation. In the previous example, $10110$ is a sequence of the representation $1101,1001$.
> 
> Part 3.1 - All natural numbers are golden.
> 1. Show that, in the golden representation of a real $x$, one can replace any sequence $011$ by $100$ and conversely, in order to obtain another golden representation of $x$. For example the real whose golden representation is $1101,1001$ also admits $1110,0001$ and $1101,0111$ as golden representations. One will say that the two sequences $011$ and $100$ are equivalent.
> 2. More generally, give a sequence in which there are never two consecutive $1$s and which is equivalent to $011\cdots 1$ where there are $n$ occurrences of the digit $1$.
> 3. Show that the integers $2$ and $3$ are golden numbers and give a golden representation of them.
> 4. Show that every natural number admits a golden representation.
> 
> Part 3.2 - Representation golden and pure.
> We say that a representation $x\triangleright a_p a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$ of a number $x$ is pure golden ('en or pur') if for all $i$,
> $$a_i\,a_{i+1}=0$$
> In other words, a representation of $x$ is pure golden if and only if it never contains two consecutive $1$s.
> Let $x$ be a non-zero real; if $x\triangleright a_p a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$, one defines the golden content ('teneur en or') of the representation as being equal to the exponent of the largest power of $\varphi$ whose coefficient equals $1$, in the equality $x=a_p\varphi^p+\ldots+a_{-q}\varphi^{-q}$.
> For example, the golden content of the representation $1101,1001$ is equal to $3$ and that of $0,0010$ is equal to $-3$.
> 1. Give a pure golden representation of the integers $2$, $3$, $4$ and $5$.
> 2. Let $x$ be a real having a pure golden representation of golden content equal to $n$.
>    a. Show that $\varphi^n\le x<\varphi^{n+1}$.
>    b. Show that the pure golden representation of a real, if it exists, is unique.
> 3. Let $x$ be a non-zero real having a pure golden representation.
>    a. Express the golden content of the pure golden representation of $x$ with the help of the natural logarithm and integer-part functions.
>    b. Write an algorithm allowing to determine this representation.
>    c. Apply your algorithm for $x=2018$.
> 4. Show that a golden real necessarily has a pure golden representation.
> 5. Show that there exist strictly positive reals that are not golden.

![[src_cgen_2018__Q03.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** apri PDF
