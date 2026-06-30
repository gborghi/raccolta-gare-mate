---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019 — Quesito 5
tipo: quesito
quesito_id: quesito_src_tfjm_2019__Q05
parent: src_tfjm_2019
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019
family: tfjm
year: '2019'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '5'
summary: >-
  Placing chords (Korde walls) in a disk to prevent regular-polygon candidates
  from seeing each other
qa_score: '3'
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_casework
  - method_estremalita
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
  - skill_modellizzazione
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2019
  - livello/TFJM²
  - topic/geometria_piana
  - topic/combinatoria
  - gara/squadre
---

*Placing chords (Korde walls) in a disk to prevent regular-polygon candidates from seeing each other*

> The teachers of espionage want to recruit someone to become agent 008. They organize a contest to separate the candidates. The exam takes place in a room in the form of a disk of radius $1$. To space the candidates as much as possible, their tables are on the edge of the disk and form a regular $n$-gon. To prevent any cheating, it is necessary to \emph{partition} the room, that is to say to prevent the candidates from seeing one another.\n\nTristan is charged with organizing the exam. He decides to install the partitions (\emph{cloisons}). A cloison may be installed between any two points of the room, except if it passes through the exact spot where a candidate's table is. One says that two cloisons \emph{cross} when the segments intersect (except if the point of intersection is the extremity of one of the cloisons).\n\nTristan decides to obtain his cloisons from the company Körde. This company can construct cloisons of all sizes, but they must be fixed to the walls of the room, as on Figure 7. On this example, the cloisons of the company Körde prevent candidates $1$ and $3$ from seeing each other, but not candidates $3$ and $5$.\n\n\textbf{1.} What is the minimal number of cloisons to place to partition the room in the following cases: (a) if the cloisons may cross? (b) if the cloisons may not cross?\n\nFrom now until the end of the problem, two cloisons may not cross. The teachers of espionage have decided to organize a large recruitment campaign. They have published announcements for $p$ different posts. There are $k$ candidates for each post, so a total of $n = pk$ candidates. The $n$ candidates always form a regular $n$-gon inscribed in the circle bounding the room but, for each post, the $k$ candidates for that post are distributed in an arbitrary manner among the $n$ tables. Tristan received a single instruction: it is absolutely necessary that two candidates for the same post cannot see each other.\n\n\textbf{2.} Find the smallest integer $m$ such that Tristan is sure of being able to prevent cheating by installing $m$ Körde cloisons, whatever the distribution of the candidates among the $k$ posts, in the following cases: (a) for $p=2$ and $k$ arbitrary; (b) for $k=2$ and $p$ arbitrary; (c) for arbitrary values of $p$ and $k$.\n\n\textbf{3.} Tristan had misunderstood the instruction: two candidates for the same post may see each other, on the other hand it is imperative that candidates for different posts cannot see each other during the exam. Take up the previous question in this case.\n\nTristan is not certain that this solution always works. He decides to change his supplier and turn to the company Tayfix. This company produces uniquely cloisons of length $L \in \mathbb{R}$ fixed, but they may be placed at any point of the disk without being fixed to a wall (cf. Figure 8). On this example, the cloisons of the company Tayfix prevent candidates $2$ and $4$ from seeing each other, but not candidates $3$ and $5$; one considers that the extremities of a cloison block the view.\n\n\textbf{4.} (a) For which values of $L$ is it possible to partition the room, for $n = 2,3,4,5$? (b) For which values of $n$ can one find a length $L > 1$ such that it is possible to partition the room with cloisons of length $L$? (c) As a function of $n$, estimate the largest $L$ such that it is possible to partition the room with cloisons of length $L$. Does there exist a real $L > 1$ for which it is always possible to partition the room, whatever the value of $n$?\n\nThe Tayfix cloisons do not suffice to prevent the candidates from spying on one another using ultrasound devices. Tristan decides to replace the cloisons with pillars of concrete. He contacts the company Unkalibr, which proposes to install circular pillars of radius $r \in \mathbb{R}$. The pillars must be entirely included in the room and may not overlap, but two pillars may be tangent. On Figure 9 the pillars prevent candidates $2$ and $6$ from seeing each other, but not candidates $1$ and $4$.\n\n\textbf{5.} As a function of $n$, what are the radii $r$ for which it is possible to partition the room with pillars? Begin by studying small values of $n$, then propose bounds on the possible radii $r$ in the general case.\n\n\textbf{6.} Propose and study other avenues of research.

![[src_tfjm_2019__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)
