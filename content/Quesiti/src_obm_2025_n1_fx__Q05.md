---
tipo: quesito
quesito_id: quesito_src_obm_2025_n1_fx__Q05
parent: src_obm_2025_n1_fx
competition: Olimpíada Brasileira de Matemática 2025 — Nível 1 — Fase x
family: obm
year: '2025'
level: OBM Nível 1
country: Brasile
modalita: individuale
nivel: '1'
fase: x
quesito: '5'
summary: >-
  The 'arrumadinho' game on a 2xn board: each first-row number must reappear in
  an adjacent second-row column, and no left prefix of the second row equals
  {1,...,k} except k=n. Give an example for n=8 and count the 2x2025 cards.
qa_score: '2'
topics:
  - topic_combinatoria
methods:
  - method_conteggio
  - method_ricorsione
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_riconoscimento_pattern
  - skill_casework_accurato
  - skill_astrazione
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2025
  - livello/OBM-Nível-1
  - nivel/1
  - fase/x
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---

# Olimpíada Brasileira de Matemática 2025 — Nível 1 — Fase x — Quesito 5

*The 'arrumadinho' game on a 2xn board: each first-row number must reappear in an adjacent second-row column, and no left prefix of the second row equals {1,...,k} except k=n. Give an example for n=8 and count the 2x2025 cards.*

> A card of the game *arrumadinho* (tidy) is a $2\times n$ board that must satisfy the following rules:
> 
> (I) Each number written in the first row must appear in the second row in one of the two columns closest to the one it occupies in the first row. Note that the same number can appear in the same column in the two rows, that is, the column may contain two equal numbers.
> 
> (II) The set of numbers written in the first $k$ consecutive cells of the second row, counting from left to right, never equals the set $\{1,2,3,\ldots,k\}$, except for $k=n$.
> 
> For example, in the figure, tableaux $1$ to $4$ are not cards: Tableau $1$ does not satisfy rule (I); Tableau $2$ does not satisfy rule (II) (in the second row the set of the first numbers reaching column $4$ equals $\{1,2,3,4\}$); Tableau $3$ does not satisfy rule (I) (a rule (I) is disrespected twice); Tableau $4$ does not satisfy either rule (I) or rule (II).
> 
> (a) Copy the card below onto your solution sheet and give an example of a filling so that it becomes part of the game.
> $$\begin{array}{|c|c|c|c|c|c|c|c|}\hline 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ \hline \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} \\ \hline\end{array}$$
> 
> (b) What is the number of $2\times 2025$ cards of this game?

![[src_obm_2025_n1_fx__Q05.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
