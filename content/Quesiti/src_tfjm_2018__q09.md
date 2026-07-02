---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018 — Quesito 9
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2018__Q09
parent: src_tfjm_2018
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018
family: tfjm
year: '2018'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '9'
summary: >-
  A combinatorial game with n torches each lit or off; players alternately
  toggle one torch but may never repeat a configuration, and the player who
  cannot move loses; determine winning strategies under cooperative play, a cap
  of k lit torches, toggling a fixed number per turn, and asymmetric per-player
  toggle counts.
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
  - method_invarianti
  - method_backward
  - method_simmetria
skills:
  - skill_modellizzazione
  - skill_casework_accurato
  - skill_astrazione
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


*A combinatorial game with n torches each lit or off; players alternately toggle one torch but may never repeat a configuration, and the player who cannot move loses; determine winning strategies under cooperative play, a cap of k lit torches, toggling a fixed number per turn, and asymmetric per-player toggle counts.*

> Lighting the fire. Let $n\in\mathbb{N}^*$. Gabrielle and Marie play a game. They have before them $n$ torches, each of which can be lit or extinguished. Initially, all the torches are extinguished. Each in turn, starting with Gabrielle, one of the two players touches a torch, that is, changes the state of that torch: if the torch was extinguished she lights it, and conversely. To make the game interesting, Gabrielle and Marie impose on themselves a constraint: it is forbidden to obtain a configuration already obtained previously (see Figure 5). The first who can no longer play has lost.
> 
> 1. (In this question only, Gabrielle and Marie collaborate, and one is not looking for who wins.) Is it possible for Gabrielle and Marie to obtain all the configurations possible with the $n$ torches during a single game? In the case where this is possible, on which configurations can the game end?
> 
> 2. From now on, the two players play one against the other. Which of the two has a winning strategy?
> 
> 3. Let $1\le k\le n-1$. To avoid getting too hot, the players forbid themselves from having strictly more than $k$ torches lit simultaneously. Redo question 2 in this setting.
> 
> 4. The two players must now activate (change the state of) exactly $a$ torches at each turn, for a fixed integer $a$, and may not activate any of the torches that have just changed state. Redo questions 2 and 3 in this setting. One may begin by treating the cases $a=2$ or $a=3$.
> 
> 5. Same question, but Gabrielle must now activate $a$ torches per turn, and Marie $b$ torches per turn, for two fixed integers $a$ and $b$.
> 
> 6. Propose and study other directions of research.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_backward|Backward]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Un gioco combinatorio con n torce ogni accesa o spenta; i giocatori alternatamente togliono una torcia ma non possono mai ripetere una configurazione, e il giocatore che non può muoversi perde; determinare le strategie di vincita nel gioco cooperativo, un limite di k torce accese, togliere un numero fisso per turno, e il numero di togliere asimmetrico per giocatore.*

> Accendiamo il fuoco. Let $n\in\mathbb{N}^*$. Gabrielle e Marie giocano a un gioco. Hanno davanti loro torce $n$, ognuna delle quali può essere accesa o spenta. Inizialmente, tutte le torce vengono spente. Ogni volta, a partire da Gabrielle, uno dei due giocatori tocca una torcia, cioè cambia lo stato di quella torcia: se la torcia è stata spenta la accende, e viceversa. Per rendere interessante il gioco, Gabrielle e Marie si impongono un vincolo: è proibito ottenere una configurazione già ottenuta in precedenza (vedi Figura 5). Il primo che non può più giocare ha perso.
> 
> 1. (Solo in questa domanda, Gabrielle e Marie collaborano, e non si cerca chi vince.) È possibile per Gabrielle e Marie ottenere tutte le configurazioni possibili con le torce $n$ durante una singola partita? Nel caso in cui ciò sia possibile, su quali configurazioni può finire il gioco?
> 
> 2. D'ora in poi, i due giocatori giocano l'uno contro l'altro. Chi di loro ha una strategia vincente?
> 
> 3. Let $1\le k\le n-1$. Per evitare di diventare troppo caldi, i giocatori si vietano di accendere più di $k$ torce contemporaneamente. Rendi la domanda 2 in questo contesto.
> 
> 4. I due giocatori devono ora attivare (cambiare lo stato di) esattamente $a$ torce ad ogni turno, per un numero intero fisso $a$, e non possono attivare nessuna delle torce che hanno appena cambiato stato. Redo le domande 2 e 3 in questo contesto. Si può iniziare con il trattamento dei casi $a=2$ o $a=3$.
> 
> 5. La stessa domanda, ma Gabrielle deve ora attivare le torce $a$ per turno, e le torce Marie $b$ per turno, per due integri fissi $a$ e $b$.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

[[src_tfjm_2018__Q09]]
