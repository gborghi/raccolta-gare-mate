---
title: Olimpíada Brasileira de Matemática 2017 — Nível 3 — Fase 3 — Quesito 4
tipo: quesito
quesito_id: quesito_src_obm_2017_n3_f3__Q04
parent: src_obm_2017_n3_f3
competition: Olimpíada Brasileira de Matemática 2017 — Nível 3 — Fase 3
family: obm
year: '2017'
level: OBM Nível 3
country: Brasile
modalita: individuale
nivel: '3'
fase: '3'
quesito: '4'
summary: >-
  Phone unlock pattern on a 3x3 grid: find smallest n so any n-subset of digits
  admits a valid path
qa_score: '5'
topics:
  - topic_combinatoria
  - topic_geometria_piana
methods:
  - method_casework
  - method_conteggio
  - method_estremalita
skills:
  - skill_casework_accurato
  - skill_conteggio_sistematico
  - skill_lettura_attenta
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2017
  - livello/OBM-Nível-3
  - nivel/3
  - fase/3
  - topic/combinatoria
  - topic/geometria_piana
  - gara/individuale
---

*Phone unlock pattern on a 3x3 grid: find smallest n so any n-subset of digits admits a valid path*

> In Figures 1 and 2 below we see examples of unlocking a cell-phone screen with a password that is not typed but drawn with line segments. These segments form a polygonal line whose vertices lie on a grid. While drawing the pattern corresponding to the password, the finger must stay in contact with the screen the whole time. The whole polygonal line corresponds to a sequence of digits, and this sequence is in fact the password. The drawing of the polygonal lines obeys the following rules:
> 
> i. The drawing starts at one of the highlighted points, which correspond to the digits $1$ to $9$ (Figure 3).
> 
> ii. Each segment of the pattern must have, as one of its endpoints (the one where we finish drawing the segment), a point that has not yet been used.
> 
> iii. If a segment joins two points and contains a third point (its midpoint), then the digit corresponding to that third point is included in the password. This does not happen when that point/digit has already been used.
> 
> iv. Every password has at least four digits.
> 
> Thus, every polygonal line is associated with a sequence of four or more digits, which appear in the password in the same order in which they are visited. In Figure 1 above, for example, the password is $218369$, in the case where the first point visited was $2$. Note that the segment joining the points associated with the digits $3$ and $9$ includes the point associated with the digit $6$. If the first point visited were $9$, then the password would be $963812$. If the first point visited were $6$, then the password would be $693812$. Note that $6$ would be skipped, since it could not be repeated. On the other hand, the polygonal line of Figure 2 is associated with a single password.
> 
> Determine the smallest $n$ ($n \ge 4$) such that, given any subset of $n$ digits from $1$ to $9$, it is possible to elaborate a password that involves exactly those digits in some order.

![[src_obm_2017_n3_f3__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** apri PDF
