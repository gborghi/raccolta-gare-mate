---
title: Concours Général des Lycées 2013 — Matematica — Quesito 3
tipo: quesito
lang: en
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
<div class="qlang-switch" data-default="en"></div>


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
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Pq6bo-6oCLQunkq5bIb1Od_s6bhLIKzO/view)


<span class="qlang-split" data-lang="it"></span>


Il gioco dei dadi di Sisyphe su 106 cellule: vince raggiungendo/passando la cellula 100, perde su una cellula primaria inferiore a 100. Probabilità p_n, la variabile di posizione X, un algoritmo per P(X=k), e una stima della probabilità di guadagno tramite probabilità condizionate alfa_p su numeri primi consecutivi.*

> Il problema 3: Il faut passer les premiers (Bisogna lasciare passare i primi).
> 
> Per questo problema, ci viene dato l'elenco dei venticinque numeri primi meno $100$: $$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97$$
> 
> Per giocare a un gioco di solitaire (une reussite), Sisyphe ha disegnato sul terreno $106$ cellule numerate da $0$ a $105$, e ha un token e un dado a sei lati (giusto). Sisyphe inizia il gioco mettendo il token sulla cella $0$. Fa poi una serie di rulli di die; quando il dado mostra il valore $k$, muove il token in avanti con le celle $k$ e: - se raggiunge o passa il numero di cellula $100$, Sisyphe ha vinto; - se atterra su una cellula il cui numero è un numero primo inferiore a $100$, Sisyphe ha perso; - negli altri casi, Sisyphe rulla di nuovo il dado e continua il gioco.
> 
> In questa domanda, supponiamo che Sisyphe inizia una nuova partita ogni volta che ha perso. $p_n$ indichi la probabilità di vincere almeno una partita in un numero massimo di $n$ die roll. **a.** Determinare i valori di $n$ per i quali $p_n > 0$. < MSK9/>b.< MSK10/> Studiare la convergenza della sequenza < MSK4/>.
> 
> Nel resto del problema, Sisyphe non inizia più una nuova partita se perde. Che $X$ sia la variabile casuale che rappresenta la posizione del token alla fine della partita. Indichiamo con $\mathbb{P}(X = k)$ la probabilità dell'evento $X = k$.
> 
> **2. a.** Determina $\mathbb{P}(X = 2)$, $\mathbb{P}(X = 3)$, $\mathbb{P}(X \geqslant 4)$, $\mathbb{P}(X = 5)$. **b.** Proporre un algoritmo per calcolare $\mathbb{P}(X = k)$ per ogni $k \in \{0, \ldots, 105\}$.
> 
> Dotato di una calcolatrice non abbastanza potente da eseguire l'algoritmo precedente, Sisyphe cerca di stimare la sua probabilità di guadagno. A tal fine, dato due numeri primi consecutivi $p < p'$, egli considera $\alpha_p$ la probabilità condizionale dell'evento $X = p'$ dato l'evento $X > p$. < MSK13/>a.< MSK14/> Quali sono i valori di < MSK4/> e < MSK5/>? **b.** Indicare l'espressione della probabilità di guadagno, $\mathbb{P}(G) = \mathbb{P}(X \geqslant 100)$, in termini di numeri reali $\alpha_p$ per $p = 2, 3, 5, \ldots$ **c.** Indicare un allegato (quadramento) dei numeri $\alpha_p$ e dedurre da esso un allegato di $\mathbb{P}(G)$. (In questa domanda, il criterio di valutazione sarà la qualità dell'allegato.)

[[src_cgen_2013__Q03]]
