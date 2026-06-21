---
tipo: quesito
quesito_id: quesito_src_tfjm_2023__Q01
parent: src_tfjm_2023
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
family: tfjm
year: '2023'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '1'
summary: >-
  Largest axis-aligned square stamp that fits inside a package of given shape,
  then total area with two disjoint stamps
qa_score: '2'
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_estremalita
  - method_casework
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
  - skill_casework_accurato
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2023
  - livello/TFJM²
  - topic/geometria_piana
  - topic/combinatoria
  - gara/squadre
  - qa/da-verificare
---

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023 — Quesito 1

*Largest axis-aligned square stamp that fits inside a package of given shape, then total area with two disjoint stamps*

> Philately. Roman is a not-quite-ordinary stamp collector: he does not collect stamps, but ink stamps (tampons). When given a package of a certain shape, he looks for the largest ink stamp to apply to it. The package is laid flat with a fixed orientation, and the ink stamps are squares whose sides are parallel to the axes of a fixed orthogonal coordinate frame.\n\n1. What is the largest possible ink stamp if the package is:\n   - A rectangle of sides $a$ and $b$ (with $a \\neq b$), whose sides are parallel to the axes?\n   - A disk of radius $r$?\n   - An isosceles right triangle whose legs (the sides of the right angle), of length $a$, are parallel to the axes?\n\n2. We now suppose that the package is a convex polygon, that is, a polygon all of whose interior angles measure strictly between $0^\\circ$ and $180^\\circ$. Roman looks at the number of ways (potentially infinite) of placing the ink stamp of maximal size on the package. Which are the possible numbers of ways?\n\nAfter reflection, Roman tells himself a package would carry more ink stamps if he could place 2 ink stamps rather than one; he then seeks to maximize their total size. The 2 ink stamps must be placed inside the package, must be axis-aligned squares, and must not overlap (they may nonetheless touch, having only points in common). Denote by $A_p$ the largest area Roman can obtain if he first applies one ink stamp of maximal size, then a second one in the space that remains; and by $A_{\\text{dis}}$ the largest total area he can obtain if he can place the two ink stamps as he wishes, provided they are disjoint.\n\n3. Do we always have $A_p = A_{\\text{dis}}$? If not, what can the ratio $A_{\\text{dis}}/A_p$ be worth?\n\n4. What can $A_{\\text{dis}}$ be worth if the package is:\n   - A rectangle of sides $a$ and $b$ (with $a \\neq b$), whose sides are parallel to the axes?\n   - A disk of radius $r$?\n   - An isosceles right triangle whose legs, of length $a$, are parallel to the axes?\n\n5. We now suppose the package is a convex polygon. Find, as a function of the number of sides of the polygon, the possible values for the ratio $A_{\\text{dis}}/A_p$.\n\n6. We now realize that the ink stamps do not reproduce well if they touch, so Roman now imposes that the union of two ink stamps of arbitrary sizes, when he places them, must not be superposable (the two ink stamps no longer count as the same shuffle, i.e. must not overlap nor touch in a segment). What can $A_{\\text{dis}}$ be worth if the package is:\n   - A rectangle of sides $a$ and $b$ (with $a \\neq b$), whose sides are parallel to the axes?\n   - A disk of radius $r$?\n   - An isosceles right triangle whose legs, of length $a$, are parallel to the axes?\n\n7. Redo the problem if the ink stamps can no longer be required to be axis-aligned. In particular, find the package shapes that allow Roman to place 2 ink stamps whose total area increases as much as possible.\n\n8. Propose and study other lines of research.

![[src_tfjm_2023__Q01.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
