---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023 — Quesito 2
tipo: quesito
quesito_id: quesito_src_tfjm_2023__Q02
parent: src_tfjm_2023
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
family: tfjm
year: '2023'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '2'
summary: >-
  Counting orientations of rivers between villages with assigned altitudes so
  water flows downhill; functions n_k(P) on graph families
qa_score: '2'
topics:
  - topic_combinatoria
methods:
  - method_grafi
  - method_conteggio
  - method_casework
  - method_casi_conteggio
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2023
  - livello/TFJM²
  - topic/combinatoria
  - gara/squadre
  - qa/da-verificare
---

*Counting orientations of rivers between villages with assigned altitudes so water flows downhill; functions n_k(P) on graph families*

> The mountain of streams. Olympe is an apprentice landscape designer. She has been entrusted with building a mountain, on which she installs villages. Rivers connect the villages two by two, and we always assume there is at least 1 village. There can be at most one river between two villages.\n\nOlympe wants each village at a different altitude and assigns to the $v$ villages the altitudes $1\\text{km}, 2\\text{km}, \\dots, v\\text{km}$. An orientation of the rivers is a choice, for each river, of a flow direction. For a given orientation, an assignment of altitudes to the villages is valid if for every river the water flows from the higher village to the lower one (downhill). For $k \\in \\mathbb{N}$, $n_k(P)$ denotes the number of orientations of the rivers of $P$ such that there are exactly $k$ valid ways of assigning altitudes. For example, $n_0(P)$ is the number of orientations for which there is no valid altitude assignment.\n\n1. Given a plan $P$ with $v$ villages and $r$ rivers, how many orientations of the rivers exist?\n\n2. Which are the plans $P$ that Olympe can receive such that $n_0(P) = n$ for:\n   a) $n = 0$?\n   b) $n = 1$?\n   c) $n = 2$?\n   d) $n = 4$?\n   e) $n = 6$?\n\n3. For which integers $n \\geqslant 0$ does there exist a plan $P$ such that $n_0(P) = n$?\n\nFor $v \\in \\mathbb{N}^*$, we define different plans of $v$ villages: the cycle $C_v$, the grid $Q_v$ (only for $v$ even), the complete plan $K_v$, the star $E_v$ and the line $L_v$ (see figure 4).\n\n4. Compute $n_1(P)$ in the following cases:\n   a) $P$ is the cycle $C_v$.\n   b) $P$ is the grid $Q_v$.\n\n5. For which integers $n \\geqslant 0$ does there exist a plan $P$ such that $n_1(P) = n$?\n\n6. Compute $n_k(P)$ for all $k \\in \\mathbb{N}$ in the following cases:\n   a) $P$ is the complete plan $K_v$.\n   b) $P$ is the star $E_v$.\n   c) $P$ is the line $L_v$.\n\n7. Characterize the pairs of integers $(k, n)$ such that there exists a plan $P$ satisfying $n_k(P) = n$.\n\n8. Propose and study other lines of research.

![[src_tfjm_2023__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_casi_conteggio|Casi e conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
