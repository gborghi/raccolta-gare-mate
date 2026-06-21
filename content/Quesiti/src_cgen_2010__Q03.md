---
title: Concours Général des Lycées 2010 — Matematica — Quesito 3
tipo: quesito
quesito_id: quesito_src_cgen_2010__Q03
parent: src_cgen_2010
competition: Concours Général des Lycées 2010 — Matematica
family: concours_generale
year: '2010'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Probabilistic/recursive model of three cell species evolving over generations:
  compatibility probability bound, and convergence of proportion sequences under
  two scenarios
qa_score: '2'
topics:
  - topic_probabilita
  - topic_algebra
  - topic_disuguaglianze
methods:
  - method_ricorsione
  - method_disuguaglianze
  - method_induzione
skills:
  - skill_manipolazione_algebrica
  - skill_modellizzazione
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2010
  - livello/Concours-Général
  - topic/probabilita
  - topic/algebra
  - topic/disuguaglianze
  - gara/individuale
  - qa/da-verificare
---

*Probabilistic/recursive model of three cell species evolving over generations: compatibility probability bound, and convergence of proportion sequences under two scenarios*

> Problem 3: On life on Mars!
> 
> (Narrative introduction, paraphrased from the source: a biologist, having learned of a discovery from the University of the Italian Union, has succeeded in observing what no one had managed to observe before, the cells of the 'Bouquet Royal'. It is a primitive form of life; the organisms measure no more than a millionth of a millimetre, which is part of the difficulty of observing them. With only partial information, the scientists try to observe the following facts.)
> 
> With only partial information, the scientists try to observe the following facts:
> 
> - There are three species of cells, denoted $A$, $B$ and $C$.
> - The reproduction of cells involves the participation of three 'parent' cells.
> - Reproduction happens only if the three parents are 'compatible', that is to say if more than one of them are of the same kind (at least two of the three parents belong to the same species).
> 
> 1. One observes the respective proportions $a$, $b$, $c$ of the cells of the different species, with $a + b + c = 1$.
> 
>    a. What is the probability $p$ that three cells taken at random are compatible?
> 
>    b. Show that $p \ge \frac{1}{9}$. One may first establish a fixed lower bound $a \ge \ldots$.
> 
> When the three parents are not all of the same kind, the proportions of the species may vary from one generation to the next, in particular when one species is in minority $\beta$. The scientists hesitate between two models:
> 
> - Model 1: the descendant is of the type of the majority species $\alpha$.
> - Model 2: the descendant is of the type of the minority species $\beta$.
> 
> To evaluate these models, one denotes by $a_n$, $b_n$, $c_n$ the proportions of the different species at generation $n$, with $a_n \ge b_n \ge c_n$.
> 
> 2. Study of the first scenario. One supposes in this question that the genetics of the cells follows the first scenario.
> 
>    a. Verify that:
>    $$a_{n+1} = \frac{a_n^2(3-2a_n)}{1-6a_n b_n c_n}, \quad b_{n+1} = \frac{b_n^2(3-2b_n)}{1-6a_n b_n c_n}, \quad c_{n+1} = \frac{c_n^2(3-2c_n)}{1-6a_n b_n c_n}.$$
> 
>    b. One recalls in this question and the following ones that $a_n \ge b_n \ge c_n$. Show that for all $n$ one has $a_{n+1} > a_n > b_n > c_n$. Deduce that $a_n > b_n > c_n > 0$.
> 
>    c. Verify that the sequences $(a_n - b_n)_{n \in \mathbb{N}}$ and $(b_n - c_n)_{n \in \mathbb{N}}$ are increasing.
> 
>    d. Prove that $(a_n)_{n \in \mathbb{N}}$, $(b_n)_{n \in \mathbb{N}}$ and $(c_n)_{n \in \mathbb{N}}$ converge and determine their limits.
> 
> 3. Study of the second scenario. One supposes now that it is the second scenario that is favoured.
> 
>    a. Determine $a_{n+1}$, $b_{n+1}$, $c_{n+1}$ as functions of $a_n$, $b_n$, $c_n$.
> 
>    b. One supposes from now on that $1 > a_0 > b_0 > c_0 > 0$. Show that for all $n$ one has $1 > a_n > b_n > c_n > 0$.
> 
>    c. One sets $f(c) = \frac{3}{2} - 3c + \frac{5}{2}c^2$ and $g(c) = 1 - 6c^2 + 12c^3$. Verify that $\frac{c_{n+1}}{c_n} \ge \frac{f(c_n)}{g(c_n)}$.
> 
>    d. Determine the limits of $(a_n)$, $(b_n)$, $(c_n)$.
> 
>    e. Which scenario seems to you the most pertinent?

**Topic:** [[topic_probabilita|Probabilità]], [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_disuguaglianze|Disuguaglianze]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
