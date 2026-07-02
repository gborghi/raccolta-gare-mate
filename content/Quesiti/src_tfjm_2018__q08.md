---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018 — Quesito 8
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2018__Q08
parent: src_tfjm_2018
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018
family: tfjm
year: '2018'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: >-
  Scheduling a round-robin tournament of n players in the minimum number of days
  T(n), with 1/0 scoring; study possible point totals at each rank, the earliest
  day a player can be sure of being first or k-th, how many players can know
  their final rank, and the number of possible final rankings.
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
  - method_estremalita
  - method_conteggio
  - method_grafi
skills:
  - skill_conteggio_sistematico
  - skill_casework_accurato
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2018
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Scheduling a round-robin tournament of n players in the minimum number of days T(n), with 1/0 scoring; study possible point totals at each rank, the earliest day a player can be sure of being first or k-th, how many players can know their final rank, and the number of possible final rankings.*

> Championships with suspense. Let $n\ge 2$ be an integer. Vincent wants to organize a championship with suspense between $n$ players. He wants each player to play in turn against each of the others, so that the final ranking is known as late as possible. A pair never plays twice. We write $T(n)$ for the minimal number of days necessary to organize the tournament.
> 
> 1. What is $T(n)$?
> 
> Vincent decides on the following rules. The winner of a match marks $1$ point and the loser $0$. At the end of the championship, the players are ranked by decreasing number of points. In case of a tie, one proceeds at random by a draw. Tied players may be ranked in any order.
> 
> 2. Let $1\le k\le n$. What is the greatest possible number of points of the player ranked $k$-th in the final ranking? The smallest possible number of points?
> 
> Vincent does not want to waste time. In the rest of the problem, suppose the championship is always organized in exactly $T(n)$ days. Although the way of organizing the championship may vary, Vincent likes the suspense over the final ranking to last as long as possible. But he knows it is not always the case.
> 
> 3. After $j$ days, a player knows that, whatever the results of the remaining days, he will be first in the final ranking. Estimate the smallest $j$ for which this is possible.
> 
> 4. Fix $1\le k\le n$. Redo the previous question with a player who knows he will be ranked $k$-th in the final ranking.
> 
> 5. On the last day, $p$ players already know with certainty their final ranking. What is the greatest possible value of $p$? And replacing "on the last day" by "after $j$ days"?
> 
> 6. Just before the last day, Vincent makes the list of all possible final rankings, and writes $L$ for the number of these rankings. What is the greatest possible value of $L$? And the smallest?
> 
> 7. Propose and study other directions of research, for example considering the possibility of drawn matches that earn $a$ points with $0\le a\le 1$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]], [[method_grafi|Grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Programmare un torneo di round-robin di n giocatori nel numero minimo di giorni T(n), con punteggio di 1/0; studiare i possibili totali di punti a ciascuna classifica, il primo giorno in cui un giocatore può essere sicuro di essere primo o k-th, quanti giocatori possono conoscere la loro classifica finale, e il numero di possibili classifiche finali.*

> Campionati con sospensione. $n\ge 2$ sia un numero intero. Vincent vuole organizzare un campionato con sospensione tra i giocatori. Vuole che ogni giocatore giochi a turno contro ciascuno degli altri, in modo che la classifica finale sia conosciuta il più tardi possibile. Una coppia non gioca mai due volte. Scriviamo $T(n)$ per il numero minimo di giorni necessari per organizzare il torneo.
> 
> 1. Che cos' è $T(n)$?
> 
> Vincent decide sulle seguenti regole. Il vincitore di una partita segna $1$ punti e il perdente $0$ punti. Alla fine del campionato, i giocatori sono classificati per numero decrescente di punti. In caso di pareggio, uno procede a caso con un pareggio. I giocatori pari possono essere classificati in qualsiasi ordine.
> 
> 2. Let $1\le k\le n$. Qual è il maggior numero possibile di punti del giocatore classificato $k$-th nella classifica finale? Il minor numero possibile di punti?
> 
> Vincent non vuole perdere tempo. Nel resto del problema, supponiamo che il campionato sia sempre organizzato in giorni esatti. Sebbene il modo di organizzare il campionato possa variare, a Vincent piace il sospenso sulla classifica finale per durare il più a lungo possibile. Ma sa che non è sempre così.
> 
> 3. Dopo $j$ giorni, un giocatore sa che, qualunque sia il risultato dei giorni rimanenti, sarà il primo nella classifica finale. Calcolare il minimo $j$ per il quale ciò sia possibile.
> 
> 4. Risparmiare $1\le k\le n$. Riprendi la domanda precedente con un giocatore che sa che sarà classificato $k$-th nella classifica finale.
> 
> 5. L'ultimo giorno, i giocatori $p$ conoscono già con certezza la loro classifica finale. Qual è il massimo valore possibile di $p$? E sostituire "all'ultimo giorno" con "dopo $j$ giorni"?
> 
> 6. Poco prima dell'ultimo giorno, Vincent fa la lista di tutte le possibili classifiche finali, e scrive $L$ per il numero di queste classifiche. Qual è il massimo valore possibile di $L$? E il più piccolo?
> 
> 7. Proporre e studiare altre direzioni di ricerca, ad esempio considerando la possibilità di disegnare corrispondenze che guadagnino $a$ punti con $0\le a\le 1$.

[[src_tfjm_2018__Q08]]
