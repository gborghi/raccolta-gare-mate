---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 5
tipo: quesito
quesito_id: quesito_src_tfjm_2022__Q05
parent: src_tfjm_2022
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '5'
summary: >-
  Microscopic tinkering: which line configurations Malo can reach from another
  using three operations (reflect a line across another, scale the whole picture
  by lambda, translate by a vector); study square and triangular grid
  configurations and interchangeability.
qa_score: '3'
topics:
  - topic_geometria_analitica
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_coordinate
  - method_simmetria
  - method_invarianti
skills:
  - skill_ragionamento_geometrico
  - skill_astrazione
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2022
  - livello/TFJM²
  - topic/geometria_analitica
  - topic/geometria_piana
  - topic/combinatoria
  - gara/squadre
---

*Microscopic tinkering: which line configurations Malo can reach from another using three operations (reflect a line across another, scale the whole picture by lambda, translate by a vector); study square and triangular grid configurations and interchangeability.*

> Microscopic tinkering (bricolage).
> 
> Malo is a particular tinkerer who works very minutely: he manipulates very thin metallic rods, which he observes only under a microscope.
> 
> Under the microscope, Malo observes $n$ rods that each form a straight line on the screen, certain of them possibly overlapping (confondues). He can perform three types of transformations to displace these rods:
>   (i) With the aid of very sophisticated rays, he is capable of choosing one of these rods and reflecting it with respect to one other of these rods present;
>   (ii) He can enlarge or shrink the entire image with the microscope, with any enlargement $\lambda \in \mathbb{R}_+^*$, that is to say that the point of coordinates $(x, y)$ is sent to the point of coordinates $(\lambda x, \lambda y)$ (this for all the rods, which remain straight lines);
>   (iii) He can translate all the rods by a same vector $\vec{v}$.
> 
> He can perform these operations uniquely; he is however permitted, for example, to apply a single operation to all the lines. If a line $d$ is overlapping with a line $d'$, Malo can nonetheless move the line $d$ with operation (i) without moving the line $d'$. Some examples of permitted transformations are illustrated in Figure 5.
> 
> By applying these three types of operations a finite number of times, he can obtain other configurations of lines. If Malo is capable of obtaining a configuration $\mathcal{C}$ of lines from a configuration $\mathcal{C}'$, one says that $\mathcal{C}'$ is $accessible$ from $\mathcal{C}$.
> 
> 1. Let $n \ge 3$ be an integer. Given two configurations of $n$ lines parallel to the axis of abscissas and such that any two of them are always at integer distance, under what condition can one access one from the other? One may begin with the case $n = 3$.
> 
> 2. A configuration of lines is said to be $square$ (carrée) if all the lines belong to a grid formed of identical squares whose sides are parallel to the axes. A configuration of lines is said to be $triangular$ if all the lines belong to a grid formed of identical equilateral triangles all having a side parallel to the axis of abscissas. The two types of grids as well as examples of square and triangular configurations are illustrated in Figure 6.
>   a) Let $n \ge 1$ be an integer. Does there exist a finite set $E$ of square configurations with $n$ lines such that every square configuration with $n$ lines is accessible from a configuration of $E$? If so, how many configurations are needed at minimum?
>   b) Given two square configurations, how can one know if one is accessible from the other?
> 
> 3. Redo the preceding question, replacing the square configurations by triangular configurations.
> 
> The lines are now numbered from 1 to $n$. Malo decides to attribute to each line a new number, which will be denoted $\sigma(i)$ for line $i$. He has however taken care that each number from 1 to $n$ appears exactly once. A configuration is $interchangeable$ if, whatever Malo's renumbering, it is possible for him to perform transformations such that, after these transformations, for all $i \in [\![1, n]\!]$, the line $\sigma(i)$ appears exactly where the line $i$ was previously.
> 
> 4. Which triangular and square configurations are interchangeable?
> 
> 5. Find necessary and sufficient conditions for an arbitrary configuration of lines to be interchangeable. One may begin by treating the case where the $n$ lines are all parallel.
> 
> 6. Propose and study other avenues of research.

![[src_tfjm_2022__Q05.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)
