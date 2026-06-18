---
tipo: quesito
quesito_id: quesito_src_imo_2024__Q05
parent: src_imo_2024
competition: IMO 2024 papers
family: imo
year: '2024'
level: IMO
country: Italia
modalita: individuale
quesito: '5'
summary: 'Turbo la lumaca, minimo n attacchi garantiti'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_estremalita
  - method_invarianti
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/imo
  - anno/2024
  - livello/IMO
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

# IMO 2024 papers — Quesito 5

*Turbo la lumaca, minimo n attacchi garantiti*

> Turbo the snail plays a game on a board with $2024$ rows and $2023$ columns. There are hidden monsters in $2022$ of the cells. Initially, Turbo does not know where any of the monsters are, but he knows that there is exactly one monster in each row except the first row and the last row, and that each column contains at most one monster.
> 
> Turbo makes a series of attempts to go from the first row to the last row. On each attempt, he chooses to start on any cell in the first row, then repeatedly moves to an adjacent cell sharing a common side. (He is allowed to return to a previously visited cell.) If he reaches a cell with a monster, his attempt ends and he is transported back to the first row to start a new attempt. The monsters do not move, and Turbo remembers whether or not each cell he has visited contains a monster. If he reaches any cell in the last row, his attempt ends and the game is over.
> 
> Determine the minimum value of $n$ for which Turbo has a strategy that guarantees reaching the last row on the $n$-th attempt or earlier, regardless of the locations of the monsters.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF p.2
