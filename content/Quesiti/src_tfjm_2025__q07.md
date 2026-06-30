---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 7
tipo: quesito
quesito_id: quesito_src_tfjm_2025__Q07
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  Road tolls between n cities labeled 1..n; toll on a road equals max of its
  endpoint labels; optimize total cost over various network graphs, plus a
  numbering game between king and ASMR.
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_grafi
  - method_estremalita
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_ragionamento_geometrico
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/combinatoria
  - topic/grafi
  - topic/aritmetica
  - gara/squadre
  - qa/da-verificare
---

*Road tolls between n cities labeled 1..n; toll on a road equals max of its endpoint labels; optimize total cost over various network graphs, plus a numbering game between king and ASMR.*

> Problem 7 - Road taxes.
> 
> In a far country, king Louis XLIX-III wants to tax the roads to maximize his revenue. The Association of the Syndicate of Discontented Road-users (ASMR) tries to reduce the travel costs as much as possible.
> 
> In this country there are $n$ cities ($n \in \mathbb{N}^*$). Certain cities are linked by a road, thus forming the road system. The tax system is as follows: all cities are assigned a number from $1$ to $n$ (each number being used exactly once). The tax to pay for a road linking a city of number $i$ to a city of number $j$ is the maximum between $i$ and $j$. The total cost of the road system is the sum of all taxes to pay for each of the roads. The total cost depends on the way the cities are numbered. Figure 7 shows two examples. (Figure 7: on the left, an example of total cost $12$; on the right, an example of total cost $14$.)
> 
> 1. What is the maximal and minimal value of the total cost if there are $4$ cities forming a square, illustrated in Figure 8? (Figure 8: the square road system.)
> 
> 2. What is the maximal and minimal value of the total cost for the following cases (see also Figures 9 and 10)? a) Complete road system: for each pair of cities there is exactly one road. b) Pairwise road system: there are $n = 2m$ cities linked in pairs. c) Ring road system: the $n$ cities form a ring with $n \ge 3$. d) Grid road system: there are $n = k^2$ cities forming a grid. (Figure 9: complete road system with $n = 6$ (left), pairwise with $m = 3$ (middle), ring with $n = 6$ (right). Figure 10: grid road system with $k = 3$.)
> 
> 3. Find formulas or estimates for the maximal and minimal total cost of an arbitrary road system.
> 
> After many strikes, the king and the ASMR agree on the following way to assign the numbers to the cities: in turn, they assign a number between $1$ and $n$ to a city. They may not reassign a number already used, and they may not assign a number to a city that already has one. The king begins. The king's goal is to obtain the largest possible total cost, while the ASMR seeks to obtain the smallest possible total cost.
> 
> 4. Considering the road systems of the previous questions, describe the strategies of the king and the ASMR. What is the total cost of the road system when both assign the numbers optimally? What is the largest cost the king can guarantee obtaining whatever the ASMR plays? And what is the smallest cost the ASMR can guarantee obtaining whatever the king plays?
> 
> King Louis XLIX-III abuses his power to change the tax on the roads. Instead of using the maximum of the two numbers at the endpoint cities, he uses a function $f$. The total cost of the road system remains the sum of the taxes of all the roads.
> 
> 5. Repeat the previous questions where the king uses for $f$ the product of the two numbers.
> 
> 6. Repeat the previous questions where the king uses for $f$ the least common multiple of the two numbers.
> 
> 7. Propose and study other lines of research.

![[src_tfjm_2025__Q07.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_combinatoria|topic_combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
