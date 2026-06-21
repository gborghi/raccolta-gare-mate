---
tipo: quesito
quesito_id: quesito_src_tfjm_2019__Q06
parent: src_tfjm_2019
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019
family: tfjm
year: '2019'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '6'
summary: >-
  Chameleons on a graph changing color by propagation; minimizing requests
  (difficulty of a coloring)
qa_score: '3'
topics:
  - topic_combinatoria
methods:
  - method_grafi
  - method_estremalita
  - method_casework
  - method_colorazione
skills:
  - skill_modellizzazione
  - skill_astrazione
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2019
  - livello/TFJM²
  - topic/combinatoria
  - gara/squadre
---

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019 — Quesito 6

*Chameleons on a graph changing color by propagation; minimizing requests (difficulty of a coloring)*

> Victor takes care of and studies a population of chameleons. The chameleons are linked by ties of friendship. These ties are represented on a graph, that is to say a set of vertices linked by a set of edges. The vertices are the chameleons and two friend chameleons are linked by an edge.\n\nOne supposes that the chameleons can take $k$ different colors, numbered from $1$ to $k$. A chameleon can change from color $i$ to color $j$ in two cases: either because Victor asks it to, or because one of its friends of color $i$ changes to color $j$. Thus, when Victor asks a chameleon $A$ to change color, all the chameleons friends of $A$ who were of the same color as $A$ do the same, then their friends, etc.\n\nLet $\mathcal{G}$ be a graph representing a population of chameleons and $\mathcal{C}$ a coloring of the graph, that is to say the data of the color of the chameleons at the start. Victor wants to make all the chameleons be of the same color, while minimizing the number of times he must ask a chameleon to change color. One calls \emph{difficulty} of $\mathcal{C}$ the minimal number of requests necessary so that all the chameleons are of the same color. For a given graph $\mathcal{G}$, one denotes by $D_k(\mathcal{G})$ the maximal difficulty possible of a coloring of $\mathcal{G}$ with $k$ colors. This corresponds to the worst situation possible for Victor.\n\nFigure 10 represents an example with $6$ chameleons and $k=3$ colors. For this graph $\mathcal{G}$, at each step Victor asks a chameleon to become blue, which entails no other change since this chameleon has no friend of the same color. Then he asks a blue chameleon to become orange; by propagation all the blue friends of this chameleon change color, as well as the friends of its friends. Finally Victor asks the last chameleon to become orange and all the chameleons are now of the same color. In this example, for this particular initial coloring, Victor succeeded in three steps.\n\nOne denotes by $\mathcal{P}_n$ the graph constituted of $n$ aligned vertices, each linked to its neighbors of the right and of the left when they exist.\n\n\textbf{1.} Determine or give bounds for $D_k(\mathcal{P}_n)$ in the following cases: (a) $k=2$; (b) $k=3$; (c) $k$ arbitrary.\n\nOne denotes by $\mathcal{R}_{n,m}$ the rectangular network of size $n \times m$.\n\n\textbf{2.} Is the sequence $(D_k(\mathcal{R}_{n,n}))_{n \ge 1}$ increasing?\n\n\textbf{3.} Determine or bound $D_k(\mathcal{R}_{n,m})$ as a function of $k$, $n$ and $m$.\n\n\textbf{4.} Let $\mathcal{G}$ be an arbitrary connected graph. A connected graph is a graph such that it is always possible to pass from one vertex to another by a sequence of edges. In each of the three following cases, can $D_k$ increase? Decrease? If so, by how much at most? (a) A new chameleon arrives and causes a dispute between two friends: it breaks their tie of friendship but becomes the friend of each of them. (b) Two chameleons become friends. (c) A new chameleon arrives and becomes friend of two chameleons (which are not necessarily friends with each other).\n\n\textbf{5.} In this question only, Victor decides it is preferable to have a single interlocutor. He begins by choosing one chameleon and can then address only it to ask for changes of color. What is the impact of this decision: (a) in the case of the segment $\mathcal{P}_n$? (b) in the case of the rectangle $\mathcal{R}_{n,m}$? (c) in the general case?\n\n\textbf{6.} Let $s$ and $a$ be two integers. Among all the connected graphs $\mathcal{G}$ with $s$ vertices and $a$ edges, which are those that minimize $D_k(\mathcal{G})$? Which are those that maximize $D_k(\mathcal{G})$? Begin by studying the cases $a = s-1$, $a = 2s$ and $a = \frac{s(s-1)}{2}$.\n\n\textbf{7.} Propose and study other avenues of research.

![[src_tfjm_2019__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_colorazione|Colorazione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF
