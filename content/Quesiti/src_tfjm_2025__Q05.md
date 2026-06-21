---
tipo: quesito
quesito_id: quesito_src_tfjm_2025__Q05
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '5'
summary: >-
  Gerrymandering: moving district capitals within their Voronoi cell each year;
  characterize which capital configurations are reachable on a disk, plane, and
  higher dimensions.
qa_score: '2'
topics:
  - topic_geometria_analitica
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_coordinate
  - method_simmetria
  - method_casework
skills:
  - skill_ragionamento_geometrico
  - skill_modellizzazione
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/geometria_analitica
  - topic/geometria_piana
  - topic/combinatoria
  - gara/squadre
  - qa/da-verificare
---

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 5

*Gerrymandering: moving district capitals within their Voronoi cell each year; characterize which capital configurations are reachable on a disk, plane, and higher dimensions.*

> Problem 5 - Gerrymandering.
> 
> In order to win the elections, Elbridge wants to move the capitals of the different districts toward positions favorable to his party, in the fewest years possible.
> 
> Let $P$ be a part of the plane representing a country, with $n \ge 2$. We call a configuration a choice of $n$ distinct points $A_1, A_2, \ldots, A_n$ representing the capitals of the $n$ districts. For a given configuration, we cut $P$ into $n$ parts $D_1, \ldots, D_n$ (the districts): district $D_i$ consists of the set of points strictly closer to $A_i$ than to all the other points $A_j$.
> 
> Each year, Elbridge can move, simultaneously, each capital $A_i$ to a new location $A_i' \in D_i$. We then say that $(A_1', \ldots, A_n')$ is realizable from $(A_1, \ldots, A_n)$ in $1$ year. Then the partition of $P$ into $n$ districts is redone for this new configuration. More generally, we say a configuration $C'$ is realizable from $C$ if there exists $a \in \mathbb{N}$ such that $C'$ is realizable from $C$ in $a$ years. See Figure 6. (Figure 6: Example where $P$ is the interior of a rectangle and $n = 3$. The third configuration is realizable from the first in $2$ years, but not in a single one.)
> 
> In a first part, we place ourselves in the case where $P$ is a circle centered at the origin. Consequently all the capitals are situated at the same distance from the center of $P$.
> 
> 1. From a given configuration, which configurations are realizable?
> 
> 2. Fix $n$. Start from the configuration $C$ where the capitals form a regular polygon centered at the origin. Is the configuration where each capital occupies the position symmetric with respect to the origin realizable? If yes, determine (as precisely as possible), as a function of $n$, the smallest value of $a$ such that it is realizable in $a$ years.
> 
> 3. Fix $n$ and a half-circle $M$ of $P$. Does there exist a value $a$ such that, for any configuration $C$, there exists a configuration realizable in $a$ years in which all the capitals belong to $M$? If yes, determine (as precisely as possible), as a function of $n$, the smallest value of $a$ that works.
> 
> 4. Fix $n$. Does there exist a value $a$ such that, for any configuration $C$ and any configuration $C'$ realizable from $C$, $C'$ is realizable in $a$ years from $C$? If yes, determine (as precisely as possible), as a function of $n$, the smallest value of $a$ that works.
> 
> 5. Reproduce the previous questions where $P$ is the whole plane. In question 3, $M$ is a half-plane.
> 
> 6. Generalize to higher dimensions.
> 
> 7. Propose and study other lines of research.

![[src_tfjm_2025__Q05.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
