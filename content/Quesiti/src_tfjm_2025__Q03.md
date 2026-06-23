---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 3
tipo: quesito
quesito_id: quesito_src_tfjm_2025__Q03
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '3'
summary: >-
  Different families of marking schemes graduate a circular pie plate so that it
  can be cut into convex pieces of equal size; compare numbers of graduations
  needed.
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_combinatoria
  - topic_geometria_piana
methods:
  - method_fattorizzazione
  - method_conteggio
  - method_congruenze
skills:
  - skill_conteggio_sistematico
  - skill_riconoscimento_pattern
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/aritmetica
  - topic/combinatoria
  - topic/geometria_piana
  - gara/squadre
  - qa/da-verificare
---

*Different families of marking schemes graduate a circular pie plate so that it can be cut into convex pieces of equal size; compare numbers of graduations needed.*

> Problem 3 - Graduated pie plates.
> 
> During a tournament of pie tarts, different families want to share their pies into equal cuts. Each family fabricates its own mold so that on the plate it can indicate the graduations corresponding to the cuts; the graduations are placed on the border (a circle) of the plate, and a cut between two graduations must give convex pieces. We denote $N \ge 2$ the number of distinct division-numbers a family wishes to graduate. (See Figure 5: in blue, the border of the pie plate and its graduations; in black, the points where one must cut depending on the number of pieces; in orange, the regular $u$-gons used to place the graduations. There are $10$ graduations on this example.)
> 
> 1. We want $N = 2$ graduations, that is $S = \{a, b\}$ with $a, b \in \mathbb{N}^*$ distinct. What is the minimal number of graduations on the pie plate so as to be able to cut the pie into either $a$ equal parts or $b$ equal parts?
> 
> 2. We want $N = 3$ graduations, that is $S = \{a, b, c\}$ with $a, b, c \in \mathbb{N}^*$ pairwise distinct. What is the minimal number of graduations so as to be able to cut the pie into either $a$ equal parts, $b$ equal parts, or $c$ equal parts?
> 
> From now on, four different families confront each other. Each family must choose $N$ distinct values to graduate, $S = \{u_1, \ldots, u_N\}$:
> - The Prime family chooses to graduate the $N$ first prime numbers, $S_N^P = \{p_1, p_2, \ldots, p_N\}$.
> - The Geometric family chooses an integer $a \ge 2$ and graduates the powers of $a$, $S_N^G = \{1, a, a^2, \ldots, a^{N-1}\}$.
> - The Complete family chooses to graduate the $N$ first natural numbers, $S_N^C = \{1, 2, \ldots, N\}$.
> - The Divided family chooses the smallest integer $\alpha_N$ admitting exactly $N$ divisors $d_{1,\alpha_N}, \ldots, d_{N,\alpha_N}$, and graduates these $N$ divisors, $S_N^D = \{d_{1,\alpha_N}, \ldots, d_{N,\alpha_N}\}$.
> 
> For example, if $N = 6$: $S_6^P = \{2, 3, 5, 7, 11, 13\}$; $S_6^G = \{1, 2, 4, 8, 16, 32\}$ for $a = 2$; $S_6^C = \{1, 2, 3, 4, 5, 6\}$; $S_6^D = \{1, 2, 3, 4, 6, 12\}$ for $\alpha_6 = 12$.
> 
> 3. The Prime (resp. Geometric, Complete, Divided) family counts the number of graduations $G_N^P$ (resp. $G_N^G$, $G_N^C$, $G_N^D$) that must appear on the border of the pie plate. Determine: a) $G_N^P$ for the Prime family; b) $G_N^G$ for the Geometric family; c) $G_N^C$ for the Complete family; d) $G_N^D$ for the Divided family. Give an exact value or an estimate (as precise as possible) of these values for the four families.
> 
> The families want to put the least possible number of graduations on the pie plate. They do not require all graduations to start from the same origin and they may place them efficiently.
> 
> 4. Can we give an example of a family $S_N = \{u_1, \ldots, u_N\}$ where it is possible to put fewer graduations when the graduations do not all start at the same point? a) if $N = 3$? b) if $N = 4$? c) for another value of $N$?
> 
> 5. When this minimum is reached, for each of the four families described above, how many graduations would one put on the same circle at minimum?
> 
> 6. Does there exist a value $N$ such that for all $n > N$, the order of optimality of the graduations placed by the four families $G_N^P, G_N^G, G_N^C, G_N^D$ ends up always being the same? If yes, what is that value?
> 
> 7. Does there exist a sequence $(u_n)_{n \in \mathbb{N}^*}$ such that for all $N \in \mathbb{N}^*$, $G_N^C \le \min(G_N^P, G_N^G, G_N^C, G_N^D)$?
> 
> 8. Propose and explore other lines of research.

![[src_tfjm_2025__Q03.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_conteggio|Conteggio]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_stima|Stima]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
