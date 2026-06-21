---
title: Japan Mathematical Olympiad 2025 — Yosen (Preliminary) — Quesito 7
tipo: quesito
quesito_id: quesito_src_jmo35yqa_yosen__Q07
parent: src_jmo35yqa_yosen
competition: Japan Mathematical Olympiad 2025 — Yosen (Preliminary)
family: jmo
year: '2025'
level: JMO Yosen
country: Giappone
modalita: individuale
quesito: '7'
summary: >-
  On a 20x25 grid, fill turns writing n along right/up-adjacent chains,
  minimizing turns; count final fillings
answer: 20!^3
topics:
  - topic_combinatoria
methods:
  - method_casework
  - method_conteggio
  - method_estremalita
skills:
  - skill_conteggio_sistematico
  - skill_ragionamento_geometrico
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/giappone
  - comp/jmo
  - anno/2025
  - livello/JMO-Yosen
  - topic/combinatoria
  - gara/individuale
---

*On a 20x25 grid, fill turns writing n along right/up-adjacent chains, minimizing turns; count final fillings*

> There is a grid of cells with $20$ rows and $25$ columns, all initially blank. Taro plays a game with this grid. The game is divided into several turns; on the $n$-th turn he performs the following operation:
> He chooses a positive integer $k$ and $k$ blank cells $A_1, A_2, \ldots, A_k$ such that for every integer $i$ with $1 \le i \le k-1$, the cell $A_{i+1}$ is adjacent to $A_i$ on its right or above it; then he writes $n$ in all $k$ of these cells.
> The game ends when every cell has a number written in it. When Taro acts so as to make the number of turns until the game ends as small as possible, how many distinct ways can the numbers be written on the grid at the end of the game? Here, two writings that coincide under a rotation or reflection are also counted as distinct.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** $20!^3$
**Fonte:** apri PDF
