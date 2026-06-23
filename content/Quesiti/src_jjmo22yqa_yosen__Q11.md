---
title: Japan Junior Mathematical Olympiad 2024 — Yosen (Preliminary) — Quesito 11
tipo: quesito
quesito_id: quesito_src_jjmo22yqa_yosen__Q11
parent: src_jjmo22yqa_yosen
competition: Japan Junior Mathematical Olympiad 2024 — Yosen (Preliminary)
family: jjmo
year: '2024'
level: JJMO Yosen
country: Giappone
modalita: individuale
quesito: '11'
summary: >-
  Count achievable sign-sequence tuples (s1,...,s100) from permutations of
  1..100
qa_score: '4'
answer: '\dfrac{3^{100} - 197}{4}'
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_doppio_conteggio
  - method_conteggio
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_riconoscimento_pattern
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2024
  - livello/JJMO-Yosen
  - topic/combinatoria
  - topic/algebra
  - gara/individuale
---

*Count achievable sign-sequence tuples (s1,...,s100) from permutations of 1..100*

> Let $a_1, a_2, \ldots, a_{100}$ be a permutation of $1, 2, \ldots, 100$. For each integer $n$ with $1 \le n \le 100$, define the integer $s_n$ by
> $$s_n = \begin{cases} 1 & (a_n > n), \\ 0 & (a_n = n), \\ -1 & (a_n < n). \end{cases}$$
> Find the number of distinct tuples $(s_1, s_2, \ldots, s_{100})$ that can arise from some permutation of $1, 2, \ldots, 100$.
> 
> (A permutation of $1, 2, \ldots, 100$ is a sequence of length $100$ in which each of the integers $1$ through $100$ appears exactly once.)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_doppio_conteggio|Doppio conteggio]], [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** $\dfrac{3^{100} - 197}{4}$
**Fonte:** [apri PDF](https://drive.google.com/file/d/1MpOoffmNfAlSJnrNvYxGLF27kPgwbEmW/view)
