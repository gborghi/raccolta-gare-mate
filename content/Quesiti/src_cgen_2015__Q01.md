---
title: Concours Général des Lycées 2015 — Matematica — Quesito 1
tipo: quesito
quesito_id: quesito_src_cgen_2015__Q01
parent: src_cgen_2015
competition: Concours Général des Lycées 2015 — Matematica
family: concours_generale
year: '2015'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  Weight of a finite sequence of reals defined as the max of absolute partial
  sums; compare Isabelle's minimal weight I with Clara's greedy weight C.
qa_score: '3'
topics:
  - topic_algebra
  - topic_disuguaglianze
methods:
  - method_estremalita
  - method_casework
  - method_disuguaglianze
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_casework_accurato
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2015
  - livello/Concours-Général
  - topic/algebra
  - topic/disuguaglianze
  - gara/individuale
---

*Weight of a finite sequence of reals defined as the max of absolute partial sums; compare Isabelle's minimal weight I with Clara's greedy weight C.*

> Problem 1: Small weights.
> 
> For every integer $n \ge 2$, and every finite sequence of $n$ reals $(x_1, x_2, \ldots, x_n)$, the \emph{weight} of the sequence is the largest of the values $|x_1|, |x_1 + x_2|, \ldots, |x_1 + x_2 + \cdots + x_n|$.
> 
> For example, for $n = 4$ and $(x_1, x_2, x_3, x_4) = (4, 4, 0, -9)$, the weight of the sequence equals $8$, since:
> $$|x_1| = 4, \quad |x_1 + x_2| = 8, \quad |x_1 + x_2 + x_3| = 8, \quad |x_1 + x_2 + x_3 + x_4| = 1.$$
> For $(x_1, x_2, x_3, x_4) = (-9, 4, 0, 4)$, the weight equals $9$, since:
> $$|x_1| = 9, \quad |x_1 + x_2| = 5, \quad |x_1 + x_2 + x_3| = 5, \quad |x_1 + x_2 + x_3 + x_4| = 1.$$
> Note that the two finite sequences above are formed of the same numbers in a different order and that they have different weights.
> 
> 1. Determine the weights of the following finite sequences:
>    a. $(3, 5, -6, -8, 2)$ (so $n = 5$).
>    b. $(1, 2, 3, \ldots, 2014, 2015, -2015, -2014, \ldots, -2, -1)$ (so $n = 4030$).
>    c. In each of the two preceding examples, reorder the terms so as to obtain a smaller weight.
> 
> Isabelle and Clara are given the same finite sequence of $n$ reals $(x_1, x_2, \ldots, x_n)$.
> Isabelle wants to reorder it so as to obtain a finite sequence of minimal weight. To do this, she considers all possible orderings of these $n$ reals, determines for each the weight of the corresponding sequence, and chooses an order for which the weight is minimal. Let $I$ denote this minimal weight.
> 
> For her part, Clara, more hurried than Isabelle, adopts the following algorithm. She begins by choosing among the $n$ reals one number, denoted $c_1$, so that the value of $|c_1|$ is as small as possible. She then chooses the number $c_2$ among the $n - 1$ remaining reals, so that the value of $|c_1 + c_2|$ is as small as possible. More generally, having chosen the numbers $c_1, \ldots, c_i$ among the $n$ reals given at the start, she chooses $c_{i+1}$ among the $n - i$ remaining ones so that the value of $|c_1 + \cdots + c_i + c_{i+1}|$ is as small as possible. She finally obtains a finite sequence $(c_1, \ldots, c_n)$ of $n$ reals. Let $C$ denote its weight.
> 
> 2. Determine $I$ and $C$ in the two following cases.
>    a. $n = 3$ and $x_1 = 1$, $x_2 = 2$, $x_3 = -4$.
>    b. $n = 4$ and $x_1 = 1$, $x_2 = -1$, $x_3 = 2$, $x_4 = -2$.
> 
> 3. If $n = 2$, show that $I = C$.
> 
> 4. If $n = 3$, show that $C \le \frac{3}{2} I$.
> 
> 5. Let $n$ be an integer greater than or equal to $4$ and let $(x_1, x_2, \ldots, x_n)$ be the finite sequence given to Isabelle and Clara. Set:
> $$M = \max(|x_1|, |x_2|, \ldots, |x_n|), \quad S = |x_1 + x_2 + \cdots + x_n|, \quad N = \max(M, S).$$
> In other words, $M$ is the largest of the numbers $|x_1|, |x_2|, \ldots, |x_n|$. Likewise, $N$ is the largest of the numbers $M$ and $S$.
>    a. Show that $S \le I$.
>    b. Show that $M \le 2I$.
>    c. Show that $C \le N$.
>    d. Deduce that $C \le 2I$.
>    e. Determine $n$ reals $x_1, x_2, \ldots, x_n$ such that $C = 2I$.

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Casework accurato]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** apri PDF
