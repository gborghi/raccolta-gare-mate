---
title: Concours Général des Lycées 2021 — Matematica — Quesito 1
tipo: quesito
quesito_id: quesito_src_cgen_2021__Q01
parent: src_cgen_2021
competition: Concours Général des Lycées 2021 — Matematica
family: concours_generale
year: '2021'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  Petits poids: for a finite sequence of n reals one defines its weight as the
  largest of the absolute partial-sum-type values
  |x_1|,|x_1+x_2|,...,|x_1+...+x_n|; Isabelle minimizes the weight over all
  orderings (value I), Clara uses a greedy algorithm (value C); compare I and C.
qa_score: '1'
topics:
  - topic_algebra
  - topic_combinatoria
methods:
  - method_estremalita
  - method_casework
  - method_disuguaglianze
skills:
  - skill_manipolazione_algebrica
  - skill_casework_accurato
  - skill_stima
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2021
  - livello/Concours-Général
  - topic/algebra
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---

*Petits poids: for a finite sequence of n reals one defines its weight as the largest of the absolute partial-sum-type values |x_1|,|x_1+x_2|,...,|x_1+...+x_n|; Isabelle minimizes the weight over all orderings (value I), Clara uses a greedy algorithm (value C); compare I and C.*

> Probleme 1: "Petits poids" (Small weights). For every integer $n$ greater than or equal to $2$, and every finite sequence of $n$ reals $(x_1,x_2,\ldots,x_n)$, one calls weight of the sequence the largest of the values $|x_1|,|x_1+x_2|,\ldots,|x_1+x_2+\cdots+x_n|$.
> For example, for $n=4$ and $(x_1,x_2,x_3,x_4)=(4,4,0,-9)$, the weight of the sequence is equal to $8$, because $|x_1|=4$, $|x_1+x_2|=8$, $|x_1+x_2+x_3|=8$ and $|x_1+x_2+x_3+x_4|=1$.
> For $(x_1,x_2,x_3,x_4)=(-9,4,0,4)$, the weight is equal to $9$, because $|x_1|=9$, $|x_1+x_2|=5$, $|x_1+x_2+x_3|=5$ and $|x_1+x_2+x_3+x_4|=1$.
> One notes that the two finite sequences above are formed of the same numbers in a different order and that they have different weights.
> 
> 1. Determine the weights of the following finite sequences:
>    a. $(3,5,-6,-8,2)$ (and so $n=5$).
>    b. $(1,2,3,\ldots,2014,2015,-2015,-2014,\ldots,-2,-1)$ (and so $n=4030$).
>    c. In each of the two preceding examples, reorder the terms so as to obtain a smaller weight.
> 
> One gives to Isabelle and Clara the same finite sequence of $n$ reals $(x_1,x_2,\ldots,x_n)$.
> Isabelle wishes to reorder these $n$ reals so as to obtain a finite sequence of minimal weight. To do this, she considers all the possible orderings of these $n$ reals, determines for each one the weight of the corresponding sequence, and chooses an order for which the weight is minimal. One notes $I$ this minimal weight.
> For her part, Clara, more hurried than Isabelle, adopts the following algorithm. She begins by choosing among the $n$ reals one number, noted $c_1$, so that the value of $|c_1|$ is the smallest possible. She then chooses the number $c_2$ among the $n-1$ reals that remain, so that the value of $|c_1+c_2|$ is the smallest possible. More generally, after having chosen the numbers $c_1,\ldots,c_i$ among the $n$ reals given at the start, she chooses $c_{i+1}$ among the $n-i$ remaining ones so that the value of $|c_1+\cdots+c_i+c_{i+1}|$ is the smallest possible. She finally obtains a finite sequence $(c_1,\ldots,c_n)$ of $n$ reals. One notes $C$ its weight.
> 
> 2. Determine $I$ and $C$ in the two following cases.
>    a. $n=3$ and $x_1=1$, $x_2=2$, $x_3=-4$.
>    b. $n=4$ and $x_1=1$, $x_2=-1$, $x_3=2$, $x_4=-2$.
> 
> 3. If $n=2$, show that $I=C$.
> 
> 4. If $n=3$, show that $C\le\frac{3}{2}I$.
> 
> 5. Let $n$ be an integer greater than or equal to $4$ and let $(x_1,x_2,\ldots,x_n)$ be the finite sequence given to Isabelle and Clara. One sets:
> $$M=\max(|x_1|,|x_2|,\ldots,|x_n|)\qquad S=|x_1+x_2+\cdots+x_n|\qquad N=\max(M,S)$$
> In other words, $M$ is the largest of the numbers $|x_1|,|x_2|,\ldots,|x_n|$. Likewise, $N$ is the largest of the numbers $M$ and $S$.
>    a. Show that $S\le I$.
>    b. Show that $M\le2I$.
>    c. Show that $C\le N$.
>    d. Deduce that $C\le2I$.
>    e. Determine $n$ reals $x_1,x_2,\ldots,x_n$ such that $C=2I$.

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1mpuoT_Bn4czxgorxXLmkmdqsNnb4j2Av/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
