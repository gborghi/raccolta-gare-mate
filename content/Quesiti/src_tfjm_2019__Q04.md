---
tipo: quesito
quesito_id: quesito_src_tfjm_2019__Q04
parent: src_tfjm_2019
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019
family: tfjm
year: '2019'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '4'
summary: Finding a vegetarian pizza hidden in a stack of boxes in the fewest moves
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_probabilita
methods:
  - method_casework
  - method_conteggio
  - method_estremalita
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2019
  - livello/TFJM²
  - topic/combinatoria
  - topic/probabilita
  - gara/squadre
---

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019 — Quesito 4

*Finding a vegetarian pizza hidden in a stack of boxes in the fewest moves*

> Sophie likes pizzas a lot, but especially the vegetarian ones. She faces $p$ piles ($p \ge 2$) which contain respectively $a_1, a_2, \ldots, a_p$ boxes, each box containing exactly one pizza. Sophie knows that among these $n = a_1 + a_2 + \cdots + a_p$ pizzas there are exactly $k$ which are vegetarian. She would like to find one in the least time possible.\n\nEach minute, Sophie chooses a box at the top of one of the piles, takes it and looks inside. She then puts the box back on top of one of the piles (or eventually starts a new pile). One denotes by $M_k(a_1, \ldots, a_p)$ the smallest number of minutes such that Sophie has a strategy that allows her to find a vegetarian pizza in $M_k(a_1, \ldots, a_p)$ minutes, regardless of the position of the vegetarian pizzas in the piles at departure. For example, $M_1(1,2) = 3$.\n\n\textbf{1.} Estimate $M_k(a_1, \ldots, a_p)$ as a function of the values of $p$ and $k$. Begin by studying the following cases: (a) $k = n-1$; (b) $p=2$ and $k=1$; (c) $p$ arbitrary and $k=1$; (d) $p=2$ and $k$ arbitrary; (e) $a_1 = a_2 = \cdots = a_p = k$; (f) $a_1 = a_2 = \cdots = a_p$, $k$ arbitrary.\n\nOne supposes now that Sophie has only one pile of height $h$ with $a_i \le h$ for all $i$. The pizza boxes are of thickness $1$. Henceforth Sophie may not put more than $h$ boxes on the same pile.\n\n\textbf{2.} As a function of $n$ and $k$, which are the values of $h$ for which Sophie can ensure finding a vegetarian pizza from the initial disposition? One supposes henceforth that one reparts the boxes on the piles that one chooses.\n\n\textbf{3.} One places oneself in the case of question 2 (pizzas of finite height). One denotes by $M_k^h(a_1, \ldots, a_p)$ the smallest number such that Sophie has a strategy that allows her to find a vegetarian pizza in $M_k^h(a_1, \ldots, a_p)$ minutes, regardless of the position of the vegetarian pizzas in the piles of departure. Estimate $M_k^h(a_1, \ldots, a_p)$ in the same cases as question 1.\n\n\textbf{4.} One supposes anew that the pile is of infinite height. One supposes also that the piles are aligned from left to right. Sophie has eaten the pizza and wishes to displace herself as little as possible. When she takes the boxes from a pile, she puts them back on the same pile or on a neighboring pile. Take up the previous questions in this case.\n\n\textbf{5.} At present, $k = 1$ and Sophie knows that the vegetarian pizza has been placed at random in the pile of infinite height, that is to say that each box at the top of the pile contains the vegetarian pizza with probability $\frac{1}{h}$. She seeks to determine the number of minutes necessary to find the pizza. The average is taken over the set of possible positions of the pizza. Take up the previous questions in this case.\n\n\textbf{6.} Propose and study other avenues of research.

![[src_tfjm_2019__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF
