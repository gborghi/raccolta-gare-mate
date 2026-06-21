---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023 — Quesito 4
tipo: quesito
quesito_id: quesito_src_tfjm_2023__Q04
parent: src_tfjm_2023
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
family: tfjm
year: '2023'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '4'
summary: >-
  Resolution-change operation on a strip of n notes producing m notes/silences;
  reachability and minimal operations, then 2D image version
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_insiemi_funzioni
methods:
  - method_casework
  - method_invarianti
  - method_conteggio
skills:
  - skill_lettura_attenta
  - skill_riconoscimento_pattern
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2023
  - livello/TFJM²
  - topic/combinatoria
  - topic/insiemi_funzioni
  - gara/squadre
  - qa/da-verificare
---

*Resolution-change operation on a strip of n notes producing m notes/silences; reachability and minimal operations, then 2D image version*

> Distorted music (Musique déformée). Perrine plays with an audio montage software. She arranges an initial strip of one minute holding $n$ distinct notes placed end to end, each of duration $1/n$. The software offers a feature to change the resolution of the strip. Perrine chooses a new resolution $m \\geqslant 1$, and the software creates a new strip of one minute holding $m$ notes chosen as follows: for each $k$ with $1 \\leqslant k \\leqslant m$, the software looks at the instant $k/m$ on the old strip. If this instant falls strictly inside an old note, it copies that note into the new strip; if it falls exactly between two notes (where one note ends and the next begins), it puts a silence in the new strip. If the instant falls inside an old silence, the new note is a silence too.\n\nFigure 5 shows a resolution change passing from $n = 4$ to $m = 7$. Each cell represents one note; colors represent different notes; white corresponds to a silence.\n\nPerrine is interested in the strips obtained after several successive transformations of this kind.\n\n1. For each of the following events, say whether it can or cannot happen after a finite number of operations:\n   a) A note disappears from the strip.\n   b) Two notes that were distinct become the same.\n   c) A silence appears.\n   d) A silence disappears.\n   e) The notes are no longer all the same.\n   f) The strip no longer contains any silence.\n\n2. For each of the cases of the preceding question, what is the minimal number of operations that produce that result, as a function of $n$?\n\n3. Choose $1 \\leqslant k \\leqslant n$. Redo questions 1 and 2 if Perrine forbids herself from creating a strip of length strictly less than $k$, that is, with strictly fewer than $k$ notes (not necessarily distinct).\n\n4. The software can now work only with strips whose length is odd.\n   a) Is it possible for a silence to appear?\n   b) Starting from a strip of length 1, Perrine performs a sequence of operations to go from a strip of length 1 to a strip of length 1. Is it possible that the initial strip and the final strip be different?\n   c) Starting from $n$ notes, Perrine performs a sequence of operations keeping the number of notes never below $n$ and returning to a strip of $n$ notes. How many different notes can the final strip hold? More generally, which are the possible final strips?\n\n5. Redo question 4 restricting oneself to odd lengths.\n\nPerrine now manipulates not strips but images. Her image is 1 metre by 1 metre, made of $n \\times n'$ rectangles of size $1/n \\times 1/n'$ of different colors. The software can transform an image of $n \\times n'$ rectangles into one of $m \\times m'$ rectangles of size $1/m \\times 1/m'$ as follows: for each $1 \\leqslant k \\leqslant m$ and $1 \\leqslant k' \\leqslant m'$, the software looks at the center of the new rectangle $(k, k')$. If this point falls inside a rectangle of the old image, it copies that color into the new rectangle. If the point falls exactly between two rectangles of the old image, the new rectangle becomes black.\n\n6. Redo all the preceding questions in this framework.\n\n7. Propose and study other lines of research.

![[src_tfjm_2023__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
