---
title: China National Team Selection Test 2021 — Quesito 6
tipo: quesito
quesito_id: quesito_src_cn_ctst_2021__Q06
parent: src_cn_ctst_2021
competition: China National Team Selection Test 2021
family: ctst
year: '2021'
level: China National Team Selection Test
country: Cina
modalita: individuale
quesito: '6'
summary: Alice-Bob gcd/lcm game on blackboard; find min M Alice can guarantee
qa_score: '3'
answer: '(p_1 p_2 \cdots p_r)^{\lfloor n/2 \rfloor}'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_invarianti
  - method_casework
  - method_estremalita
skills:
  - skill_modellizzazione
  - skill_ragionamento_geometrico
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/cina
  - comp/ctst
  - anno/2021
  - livello/China-National-Team-Selection-Test
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---

*Alice-Bob gcd/lcm game on blackboard; find min M Alice can guarantee*

> Given positive integers $n$, $r$ and distinct prime numbers $p_1, p_2, \ldots, p_r$. Initially, the $n+1$ numbers $(p_1 p_2 \cdots p_r)^0, (p_1 p_2 \cdots p_r)^1, \ldots, (p_1 p_2 \cdots p_r)^n$ are written on the blackboard. Alice and Bob take turns (Alice goes first) to make the following moves, until only one number is left on the blackboard:
> \begin{itemize}
> \item Every time, Alice erases two numbers (can be identical) and writes their greatest common divisor on the board;
> \item Every time, Bob erases two numbers (can be identical) and writes their least common multiple on the blackboard.
> \end{itemize}
> Find the least integer $M$, such that Alice can guarantee the remaining number does not exceed $M$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** $(p_1 p_2 \cdots p_r)^{\lfloor n/2 \rfloor}$
**Fonte:** apri libro PDF
