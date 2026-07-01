---
title: Japan IMO Selection Camp 2022 — Selection Camp — Quesito 12
tipo: quesito
lang: en
quesito_id: quesito_src_selection_camp_2022__Q12
parent: src_selection_camp_2022
competition: Japan IMO Selection Camp 2022 — Selection Camp
family: jcamp
year: '2022'
level: CAMP Selection Camp
country: Giappone
modalita: individuale
quesito: '12'
summary: Hunter-rabbit game on infinite grid; can rabbit avoid being located?
qa_score: '4'
topics:
  - topic_combinatoria
methods:
  - method_invarianti
  - method_colorazione
  - method_casework
  - method_induzione
skills:
  - skill_modellizzazione
  - skill_ragionamento_geometrico
  - skill_riconoscimento_pattern
  - skill_astrazione
tags:
  - kg/quesito
  - paese/giappone
  - comp/jcamp
  - anno/2022
  - livello/CAMP-Selection-Camp
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Hunter-rabbit game on infinite grid; can rabbit avoid being located?*

> A hunter and an invisible rabbit play a game on an infinite grid. First, the hunter chooses a positive integer $k$ and assigns one integer from $\{1, 2, \ldots, k\}$ to each cell of the grid, then tells the assignment to the rabbit. Next, the rabbit chooses a cell to hide in. After that, the rabbit repeatedly performs the following actions in order:
> 
> (i) The rabbit tells the hunter the integer assigned to the cell it is currently in.
> 
> (ii) The rabbit moves to an unvisited cell sharing a side with its current cell. If no such unvisited cell exists, the game ends.
> 
> At any point during the game, if the hunter can uniquely identify the cell where the rabbit first hid, using only the integers reported so far, then the game ends at that point.
> 
> Is it possible for the rabbit to choose its starting cell and continue playing without the game ending, regardless of how the hunter chooses $k$ and the assignment of integers?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_colorazione|Colorazione]], [[method_casework|Casework]], [[method_induzione|Induzione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1IbxW-7wHAbocY02LPUXVJ2fiAgki09kb/view)


<span class="qlang-split" data-lang="it"></span>


Giocatore di coniglio su una griglia infinita. Il coniglio può evitare di essere localizzato?

> Un cacciatore e un coniglio invisibile giocano a un gioco su una griglia infinita. In primo luogo, il cacciatore sceglie un intero positivo $k$ e assegna un intero da $\{1, 2, \ldots, k\}$ a ogni cella della griglia, quindi informa l'assegnazione al coniglio. Successivamente, il coniglio sceglie una cella in cui nascondersi. In seguito, il coniglio esegue ripetutamente le seguenti azioni:
> 
> (i) Il coniglio dice al cacciatore il numero intero assegnato alla cella in cui si trova attualmente.
> 
> (ii) Il coniglio si sposta in una cella non visitata che condivide un lato con la sua cella corrente. Se non esiste una cellula non visitata, il gioco finisce.
> 
> In qualsiasi momento del gioco, se il cacciatore riesce a identificare in modo unico la cella in cui il coniglio si è nascosto per la prima volta, utilizzando solo i numeri interi segnalati finora, allora il gioco finisce a quel punto.
> 
> È possibile che il coniglio scelga la sua cella di partenza e continui a giocare senza che il gioco finisca, indipendentemente dal modo in cui il cacciatore sceglie $k$ e l'assegnazione di numeri interi?

[[src_selection_camp_2022__Q12]]
