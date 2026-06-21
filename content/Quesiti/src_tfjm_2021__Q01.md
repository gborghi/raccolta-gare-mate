---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 1
tipo: quesito
quesito_id: quesito_src_tfjm_2021__Q01
parent: src_tfjm_2021
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '1'
summary: >-
  Bomb with combination lock: shortest sequence of single-wheel clicks passing
  through all combinations
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_grafi
  - method_conteggio
  - method_casework
  - method_ricorsione
skills:
  - skill_modellizzazione
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2021
  - livello/TFJM²
  - topic/combinatoria
  - topic/aritmetica
  - gara/squadre
  - qa/da-verificare
---

*Bomb with combination lock: shortest sequence of single-wheel clicks passing through all combinations*

> Agent 1234 must defuse a bomb protected by a combination lock.
> 
> The lock consists of $r \ge 2$ independent wheels. Each wheel is made of $n \ge 2$ notches numbered from $0$ to $n-1$. The agent can turn one wheel by one notch (a click) but, while doing so, the wheel can move only in a single direction: $0 \to 1 \to \cdots \to n-1 \to 0$. The lock is initially in position $0\ldots0$.
> 
> If the agent manages to display the correct combination, the bomb is automatically defused. Moreover, since the lock is rudimentary, the bomb keeps track of all combinations already displayed previously; thus, if the correct combination has already been displayed earlier, the position $0\ldots0$ included, the explosion has already been triggered.
> 
> Since the agent does not know the combination, his only objective is to find a sequence of movements that passes through all possible combinations at least once.
> 
> For example, if $n=3$ and $r=2$, the agent tests every combination with the sequence $00 \to 10 \to 11 \to 21 \to 22 \to 02 \to 12 \to 00$. A sequence may not be $01 \to 11 \to 21 \to 01$ since the combination $01$ is repeated, nor $01 \to 21$ since the wheels cannot advance by two clicks at once.
> 
> **(1)** In this question, suppose $n=10$ and $r=3$. Is it possible for the agent to defuse the bomb for sure? If not, what is the maximum number of testable combinations?
> 
> **(2)** Revisit the question in the general case where one supposes only $n \ge 2$ and $r \ge 2$.
> 
> **(3)** Revisit question (2) if the agent can never turn the same wheel twice in a row.
> 
> **(4)** Let $2 \le d \le r-1$. Revisit question (2) if the agent cannot turn a wheel that is among the last $d$ wheels turned (the previous question corresponds to $d=1$).
> 
> **(5)** Let $2 \le k \le r$. Revisit question (2) if, instead of turning one wheel at a time, the agent turns $k$ of them at once, each by one notch (without passing through an intermediate combination). For example, if $n=10$, $r=3$ and $k=2$, the agent can begin his sequence of movements with $000 \to 011 \to 112 \to 213 \to \cdots$
> 
> **(6)** Let $2 \le k \le r$. Revisit question (2) if, instead of turning one wheel at a time, the agent turns $k$ of them at once: the first by one notch, the second by 2, and so on up to the $k$-th by $k$ (without passing through an intermediate combination). For example, if $n=10$, $r=3$ and $k=2$, the agent can begin his sequence of movements with $000 \to 012 \to 222 \to 342 \to \cdots$
> 
> **(7)** In this question, suppose $n=10$. Let $m \ge 2$. Agent 1234 has learned that the bomb has a manufacturing defect, and the combination is a multiple of $m$. She therefore looks for sequences of movements passing through several combinations that are multiples of $m$, while making as few movements as possible. Revisit the previous questions in this framework. One may begin by treating question (2) for the values $m = 10, 2, 3, 4$.
> 
> **(8)** Propose and explore other research directions.

![[src_tfjm_2021__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_grafi|Grafi]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
