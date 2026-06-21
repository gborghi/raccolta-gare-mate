---
tipo: quesito
quesito_id: quesito_src_tfjm_2021__Q02
parent: src_tfjm_2021
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '2'
summary: >-
  Two-player token elimination game on a row using offset sets; analyze winning
  strategies and periodicity
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
  - method_invarianti
  - method_simmetria
  - method_ricorsione
skills:
  - skill_modellizzazione
  - skill_casework_accurato
  - skill_riconoscimento_pattern
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2021
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
  - qa/da-verificare
---

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 2

*Two-player token elimination game on a row using offset sets; analyze winning strategies and periodicity*

> Baptiste and Carole play the game of the lined-up battle.
> 
> Baptiste and Carole each have a row of $n \ge 1$ tokens, numbered from $1$ to $n$. To each of them is assigned a set of integers, called a set of offsets. We write $B$ for Baptiste's set of offsets and $C$ for Carole's.
> 
> Baptiste and Carole play in turn, beginning with Baptiste. On his turn, Baptiste must eliminate one of the opponent's remaining tokens, numbered $j$; to do this he chooses an offset $j-i$ in his set $B$, then Carole must eliminate one of Baptiste's tokens numbered $i$, choosing an offset $j-i$ in her set $C$. If one of the two players can no longer play, he has lost, and his opponent has won.
> 
> For example, if $n=4$, $B=\{0,1\}$ and $C=\{-1,0\}$, a game is possible and is illustrated in Figure 1. Baptiste's cells are on the top row, Carole's on the bottom row (in orange).
> 
> A winning strategy for a player is the choice, for each possible game configuration, of a move to play. We say a player has a winning strategy if, by playing his strategy, he can win the game regardless of how his opponent plays.
> 
> **(1)** In this whole question suppose $B=C$. For which $n$ does Baptiste have a winning strategy? Study in particular the case $B=C=\{-1,0,1\}$ and the case $B=C=\{0,1\}$.
> 
> **(2)** Let $-n \le k \le n$. Suppose $B=\{-n,-n+1,\ldots,n-1,n\}$ and $C=\{-n,-n+1,\ldots,k-1,k+1,\ldots,n-1,n\}$ (Carole is deprived of the offset $k$). Who wins? Revisit the question if it is Baptiste who is deprived of the offset $k$.
> 
> **(3)** Revisit the preceding question by considering instead other sets $B$ and $C$. One may consider $B=\{0,1\}$, $C=\{-1,0\}$; or instead $B=\{x,y\}$, $C=\{-x,-y\}$ with $x$ and $y$ two distinct integers; or more generally the case where $B$ and $C$ are symmetric, i.e. $-k$ is in $C$ if and only if $k$ is in $B$.
> 
> **(4)** Fix $B$, $C$, and let $(u_n)_{n\in\mathbb{N}}$ be the sequence where $u_n$ equals $1$ if Baptiste wins the game in the configuration with $n$ cells, and $0$ otherwise. Describe the possible sequences $(u_n)$. In particular, is this sequence always periodic from a certain rank? Among the sequences that are eventually periodic, which periods are possible?
> 
> Arthur, who watches the games, finds them too long. He proposes to modify the rule: on his turn, a player eliminates one of his own remaining tokens, numbered $i$, as well as all the remaining tokens of the opponent whose number $j$ is such that $j-i$ is in his set of offsets. It can happen that a player eliminates all the remaining tokens of the opponent; then that player can no longer play, he has lost, and his opponent has won.
> 
> **(5)** Revisit the preceding questions with this new rule.
> 
> **(6)** Propose and study other research directions.

![[src_tfjm_2021__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_simmetria|Simmetria]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
