---
title: Japan Mathematical Olympiad 2024 — Yosen (Preliminary) — Quesito 10
tipo: quesito
quesito_id: quesito_src_jmo34yqa_yosen__Q10
parent: src_jmo34yqa_yosen
competition: Japan Mathematical Olympiad 2024 — Yosen (Preliminary)
family: jmo
year: '2024'
level: JMO Yosen
country: Giappone
modalita: individuale
quesito: '10'
summary: >-
  Count 100x100 grids with letters J,M,O where every 2x2 block is good and
  exactly 10000 differing adjacent pairs
qa_score: '3'
answer: '\binom{198}{100} \cdot 3 \cdot 2^{100}'
topics:
  - topic_combinatoria
methods:
  - method_casework
  - method_conteggio
  - method_doppio_conteggio
skills:
  - skill_conteggio_sistematico
  - skill_casework_accurato
  - skill_astrazione
tags:
  - kg/quesito
  - paese/giappone
  - comp/jmo
  - anno/2024
  - livello/JMO-Yosen
  - topic/combinatoria
  - gara/individuale
---

*Count 100x100 grids with letters J,M,O where every 2x2 block is good and exactly 10000 differing adjacent pairs*

> Consider filling each cell of a $100 \times 100$ grid with one of the letters J, M, O. Call a $2 \times 2$ sub-grid a **good block** if it satisfies one of the following conditions:
> - All 4 cells contain exactly 1 distinct letter.
> - The 4 cells contain exactly 2 distinct letters, each appearing exactly twice.
> - The 4 cells contain exactly 3 distinct letters, and the bottom-left and top-right cells contain the same letter.
> 
> Find the number of fillings satisfying both of the following conditions:
> - Every $2 \times 2$ sub-grid is a good block.
> - The number of pairs of adjacent cells (sharing an edge) that contain different letters is exactly $10000$. (Pairs are unordered.)
> 
> Fillings that coincide after rotation or reflection are counted as distinct.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** $\binom{198}{100} \cdot 3 \cdot 2^{100}$
**Fonte:** apri PDF
