---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 5
tipo: quesito
quesito_id: quesito_src_tfjm_2021__Q05
parent: src_tfjm_2021
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '5'
summary: >-
  Feudal lords own castles in a kingdom; influence zones via nearest-point
  regions; sworn enemies and Machiavellian lords; analyze configurations across
  segment/disc/square kingdoms
qa_score: '2'
topics:
  - topic_geometria_piana
  - topic_geometria_analitica
  - topic_combinatoria
methods:
  - method_coordinate
  - method_casework
  - method_estremalita
  - method_grafi
skills:
  - skill_ragionamento_geometrico
  - skill_casework_accurato
  - skill_modellizzazione
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2021
  - livello/TFJM²
  - topic/geometria_piana
  - topic/geometria_analitica
  - topic/combinatoria
  - gara/squadre
  - qa/da-verificare
---

*Feudal lords own castles in a kingdom; influence zones via nearest-point regions; sworn enemies and Machiavellian lords; analyze configurations across segment/disc/square kingdoms*

> In the Middle Ages, lords share control over certain kingdoms.
> 
> The kingdom of Chile is represented by a segment of length $1$, and each lord $s$ has a castle which is a point $c_s$ of this segment. Two lords cannot have their castle at the same point $c_s$. The zone of influence of lord $s$ consists of all the points $x$ of the kingdom that are strictly closer to $c_s$ than to any other castle. The power $p_s$ of a lord is the length of his zone of influence.
> 
> Figure 5 illustrates a possible distribution of $4$ lords in the kingdom of Chile. The zone of influence of lord $s_1$ is the blue segment.
> 
> Let $t$ be a lord. For another lord $s$, write $a(t,s)$ for the power that $t$ would have if lord $s$ were removed from the kingdom. We say $s$ is a sworn enemy of $t$ if, for every other lord $s'$, $a(t,s) \ge a(t,s')$. A lord can have several sworn enemies.
> 
> For example, in the distribution illustrated in Figure 5, lord $s_1$ has sworn enemy $s_2$, $s_2$ has sworn enemy $s_1$, $s_3$ has sworn enemy $s_2$, and $s_4$ has sworn enemy $s_3$.
> 
> A lord is said to be Machiavellian if he has strictly the greatest power among all lords, but without being a sworn enemy of any lord.
> 
> **(2)** What are all the integers $n \ge 2$ such that, with $n$ lords in the kingdom of Chile, there can be a Machiavellian lord?
> 
> Not far from the kingdom of Chile, two other kingdoms are shared in the same way: the kingdom of Uruguay, in the form of a disc, and the kingdom of Surinam, in the form of a square. In these two kingdoms (Chile aside), the zone of influence of a lord $s$ with castle at point $c_s$ is the set of all points $x$ that are strictly closer to $c_s$ than to any other castle. The power $p_s$ of a lord is the area of his zone of influence. The notion of Machiavellian lord is defined in the same way in this setting.
> 
> Figure 6 illustrates a possible distribution of lords in the kingdoms. The zone of influence of lord $s$ is, in each case, the blue zone.
> 
> **(3)** What are all the integers $n$ such that, with $n$ lords in the kingdom of Uruguay, there can be a Machiavellian lord? And in the kingdom of Surinam?
> 
> A lord is said to be a vassal if he is a sworn enemy of all the other lords.
> 
> **(4)** For each of the three kingdoms, what are all the integers $n \ge 2$ such that there can be a configuration of $n$ Machiavellian lords?
> 
> We say a configuration of lords in a kingdom is $k$-balanced if each lord has exactly $k$ sworn enemies, and each lord is the sworn enemy of exactly $k$ lords.
> 
> **(5)** For each of the three kingdoms, what are the integers $k \ge 1$ such that there exists a $k$-balanced configuration?
> 
> **(6)** For each of the three kingdoms, what are the integers $n \ge 2$ such that there exists a configuration of $n$ lords in which no pair of lords are sworn enemies of each other?
> 
> **(7)** Fix the number $n \ge 2$ of lords and, for each lord $s$, a set $E_s$ of other lords. For each of the three kingdoms, determine for which assignments $E_s$ there exists a configuration for which the sworn enemies of $s$ are exactly the elements of $E_s$.
> 
> **(8)** Propose and explore other research directions; it may be useful, for example, to continue studying these three kingdoms, or to determine whether there exist other kingdoms with interesting properties with respect to the previous questions.

![[src_tfjm_2021__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_grafi|Grafi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
