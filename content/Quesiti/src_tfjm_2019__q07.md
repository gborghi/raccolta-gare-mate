---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019 — Quesito 7
tipo: quesito
quesito_id: quesito_src_tfjm_2019__Q07
parent: src_tfjm_2019
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019
family: tfjm
year: '2019'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  Distributing chocolates round-robin to children in a line; when the
  configuration becomes balanced
qa_score: '3'
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_congruenze
  - method_conteggio
  - method_casework
skills:
  - skill_manipolazione_algebrica
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2019
  - livello/TFJM²
  - topic/aritmetica
  - topic/combinatoria
  - gara/squadre
---

*Distributing chocolates round-robin to children in a line; when the configuration becomes balanced*

> Papi Théo offers chocolates to his grandchildren. His $n$ grandchildren are placed in a line, numbered from $1$ to $n$. Each day he opens a box of chocolates. The first day he gives the first box to child number $1$; this one takes a chocolate, then passes the box to its neighbor, who serves itself, and so on. For fairness, so that it is not always the same one who serves first, the second day it is the second child who receives the full box, takes a chocolate, then passes it to child $1$, etc. When the box arrives at child $n$, this one passes it to child $1$.\n\nBut the boxes of chocolates are of variable size. The first day, the box contains only a single chocolate. The second day it contains $2$. And so on, the $j$-th day the box contains $j$ chocolates.\n\nFigure 13 shows the case of $4$ grandchildren, after $5$ days. The grandchildren received respectively $5$, $3$, $4$ and $3$ chocolates. The number written on each chocolate corresponds to the day it was distributed.\n\nOne says that at a given instant a configuration is \emph{balanced} if, at that instant, all the grandchildren have received the same number of chocolates.\n\n\textbf{1.} According to the value of $n$, is the configuration balanced after $n$ days?\n\n\textbf{2.} According to the values of $n$, does there exist a day at the end of which the configuration is balanced? If so, what is the first day where this occurs?\n\nPapi Théo cannot keep buying ever larger boxes of chocolates. He decides to organize himself differently; let $b(j)$ be the number of chocolates in the box the $j$-th day. The previous questions correspond to $b(j) = j$.\n\n\textbf{3.} To limit the inflation of the size of the boxes of chocolates, Papi Théo decides that every day one must start over from zero. He chooses boxes such that $b(j)$ is the remainder of the Euclidean division of $j$ by $d$. According to the values of $n$ and $d$, does there exist a day at the end of which the configuration is balanced? If so, what is the first day where this occurs?\n\nPapi Théo now chooses $d$ integers $(b_1, b_2, \ldots, b_d)$ and defines the function $b$ so that for every integer $j$, $b(j) = b_\ell$ where $\ell$ is the remainder of the Euclidean division of $j$ by $d$. The previous case corresponds to choosing $b_i = i$ for all $1 \le i < d$ and $b_d = 0$.\n\n\textbf{4.} According to the values of $n$, $d$ and of positive integers $(c_1, c_2, \ldots, c_n)$, is it possible to choose the integers $(b_1, b_2, \ldots, b_d)$ so that, after $\mathrm{lcm}(n,d)$ days, child $i$ has received exactly $c_i$ chocolates, for all $1 \le i \le n$? One says that a mode of distribution is \emph{equitable} if there exists an infinity of days at the end of which the configuration is balanced. Papi Théo henceforth buys his boxes of chocolates by lot. A lot $(b_1, b_2, \ldots, b_d)$ of boxes of chocolates is a set of $d$ boxes of sizes $b_1, b_2, \ldots, b_d$ with $0 \le b_1 \le b_2 \le \ldots \le b_d$. He declares that a lot is \emph{reasonable} if one can find a permutation $(b_1, b_2, \ldots, b_d)$ of the sizes of the boxes of the lot that gives an equitable mode of distribution. For example, for $n=4$ and $d=4$, the lot $(1,1,3,3)$ is reasonable because by choosing $(b_1, b_2, b_3, b_4) = (1,3,1,3)$ one obtains an equitable mode of distribution. On the other hand $(0,1,1,3)$ is not a reasonable lot.\n\n\textbf{5.} According to the integer $n$, what are the values of $d$ for which all the possible lots are reasonable?\n\n\textbf{6.} What are the necessary and sufficient conditions for a given lot to be reasonable?\n\n\textbf{7.} One supposes that for every integer $j$, $b(j) = j^2$. Is the distribution equitable? And with $b(j) = j^p$ for another integer $p$?\n\n\textbf{8.} Propose and study other avenues of research.

![[src_tfjm_2019__Q07.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)
