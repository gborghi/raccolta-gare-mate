---
title: Concours Général des Lycées 2013 — Matematica — Quesito 3
tipo: quesito
quesito_id: quesito_src_cgen_2013__Q03
parent: src_cgen_2013
competition: Concours Général des Lycées 2013 — Matematica
family: concours_generale
year: '2013'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Sisyphe's dice game on 106 cells: wins by reaching/passing cell 100, loses on
  a prime cell below 100. Probabilities p_n, the position variable X, an
  algorithm for P(X=k), and an estimate of the gain probability via conditional
  probabilities alpha_p over consecutive primes.
topics:
  - topic_probabilita
  - topic_aritmetica
methods:
  - method_ricorsione
  - method_casework
  - method_disuguaglianze
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_stima
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2013
  - livello/Concours-Général
  - topic/probabilita
  - topic/aritmetica
  - gara/individuale
---

*Sisyphe's dice game on 106 cells: wins by reaching/passing cell 100, loses on a prime cell below 100. Probabilities p_n, the position variable X, an algorithm for P(X=k), and an estimate of the gain probability via conditional probabilities alpha_p over consecutive primes.*

> Problem 3: Il faut passer les premiers (One must let the primes pass).
> 
> For this problem, we are given the list of the twenty-five prime numbers less than $100$:
> $$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97$$
> 
> To play a game of solitaire (une reussite), Sisyphe has drawn on the ground $106$ cells numbered from $0$ to $105$, and he has a token and a (fair) six-sided die.
> Sisyphe begins the game by placing the token on cell $0$. He then makes a series of die rolls; when the die shows the value $k$, he moves the token forward by $k$ cells and:
> - if he reaches or passes cell number $100$, Sisyphe has won;
> - if he lands on a cell whose number is a prime number less than $100$, Sisyphe has lost;
> - in the other cases, Sisyphe rolls the die again and continues the game.
> 
> **1.** In this question, we assume that Sisyphe starts a new game whenever he has lost. Let $p_n$ denote the probability of winning at least one game in at most $n$ die rolls.
>    **a.** Determine the values of $n$ for which $p_n > 0$.
>    **b.** Study the convergence of the sequence $(p_n)$.
> 
> In the remainder of the problem, Sisyphe no longer starts a new game if he loses.
> Let $X$ be the random variable representing the position of the token at the end of the game. We denote by $\mathbb{P}(X = k)$ the probability of the event $X = k$.
> 
> **2. a.** Determine $\mathbb{P}(X = 2)$, $\mathbb{P}(X = 3)$, $\mathbb{P}(X \geqslant 4)$, $\mathbb{P}(X = 5)$.
>    **b.** Propose an algorithm to compute $\mathbb{P}(X = k)$ for every $k \in \{0, \ldots, 105\}$.
> 
> **3.** Equipped with a calculator that is not powerful enough to execute the preceding algorithm, Sisyphe seeks to estimate his probability of gain. To this end, given two consecutive prime numbers $p < p'$, he considers $\alpha_p$ the conditional probability of the event $X = p'$ given the event $X > p$.
>    **a.** What are the values of $\alpha_2$ and $\alpha_3$?
>    **b.** Give the expression of the gain probability, $\mathbb{P}(G) = \mathbb{P}(X \geqslant 100)$, in terms of the real numbers $\alpha_p$ for $p = 2, 3, 5, \ldots$
>    **c.** Give an enclosure (encadrement) of the numbers $\alpha_p$ and deduce from it an enclosure of $\mathbb{P}(G)$. (In this question, the quality of the enclosure will be a criterion of appreciation.)

**Topic:** [[topic_probabilita|Probabilità]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_casework|Casework]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** apri PDF
