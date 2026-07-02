---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 7
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2021__Q07
parent: src_tfjm_2021
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  Frog/water-lily combinatorial game on a graph: Antoine protects a lily and
  Benoit sinks one each turn (infinitely); Antoine wins if the frog can reach
  infinitely many surviving lilies; analyze who wins on various ponds
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_grafi
  - method_casework
  - method_estremalita
  - method_induzione
skills:
  - skill_astrazione
  - skill_casework_accurato
  - skill_ragionamento_geometrico
  - skill_riconoscimento_pattern
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
<div class="qlang-switch" data-default="en"></div>


*Frog/water-lily combinatorial game on a graph: Antoine protects a lily and Benoit sinks one each turn (infinitely); Antoine wins if the frog can reach infinitely many surviving lilies; analyze who wins on various ponds*

> Long live the free frogs!
> 
> A frog jumps from lily pad to lily pad on an infinite pond. Antoine and Benoit play on this pond.
> 
> The lily pads are represented by blue points; the frog can jump from one lily pad to another lily pad connected to it by a line.
> 
> The rules of the game are as follows. Antoine begins by protecting a lily pad. Then Benoit sinks a lily pad different from the one protected by Antoine. Then Antoine protects a second lily pad that has not already been sunk, then Benoit sinks a new lily pad that is not one of those protected by Antoine, and so on.
> 
> Antoine and Benoit play in turn an infinite number of times, Antoine during turns $1,3,5,\ldots$ and Benoit during turns $2,4,6,\ldots$ Once each has played an infinite number of times, an infinite number of lily pads have been sunk, an infinite number have been protected, and there may remain zero, one, several, or an infinite number of lily pads that have not been sunk.
> 
> Antoine wins if he can place the frog on a non-sunk lily pad from which the frog can reach an infinite number of other lily pads by jumping only on neighboring lily pads that have not been sunk. Otherwise Benoit wins.
> 
> A strategy for a player is a rule that, for each configuration of the game, associates a move to play. We say a player has a winning strategy if he can, by playing this strategy, win the game whatever the way the other player plays.
> 
> An example of a game is illustrated by Figure 9, where the lily pads of a same color are joined by a line. On a complete straight line, it is Benoit who wins this game because, whatever the lily pad on which the frog is placed, it can only reach a finite number of lily pads, since the protected lily pads are all isolated.
> 
> **(1)** Determine, in terms of $k$, whether Antoine or Benoit has a winning strategy in the pond with $k$ rows illustrated by Figure 11. One may begin by studying the cases $k=1$ and $k=2$.
> 
> **(2)** Determine, for each of the ponds illustrated in Figure 12, whether Antoine or Benoit has a winning strategy.
> 
> **(3)** Now suppose that, once Antoine and Benoit have played an infinite number of times, all the lily pads that have not been protected by Antoine are sunk. In the example presented at the beginning on the complete straight line, Antoine has therefore still lost since the protected lily pads are all isolated. Revisit questions (1) and (2) in this framework.
> 
> **(4)** Antoine and Benoit decide to change the rules of the game: Antoine no longer places the frog after the game, but before his first turn. Suppose the corresponding lily pad is automatically protected.
> - (a) Revisit questions (1) and (2) with this new rule by studying all the possible initial positions of the frog for each pond.
> - (b) Revisit question (3) in the same way.
> 
> **(5)** Is there a pond such that Antoine has a winning strategy for the rule of question (2) but Benoit has a winning strategy for the rule of question (3)? And the inverse? More generally, compare with each other the rules of questions (2), (3), (4a) and (4b): for each sub-set of these four rules, is there a pond such that Antoine has a winning strategy for each rule of the sub-set, but Benoit has a winning strategy for each other rule?
> 
> **(6)** Instead of playing in turn, Antoine now plays $A$ moves, then Benoit plays $B$ moves, then Antoine again $A$ moves, and so on. Revisit questions (1) and (2) with this new rule for different values of $A$ and $B$.
> 
> **(7)** Study other ponds and find criteria and general results to determine the person having the winning strategy.

![[src_tfjm_2021__Q07.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_induzione|Induzione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Gioco combinatorio frog/lilia d'acqua su un grafico: Antoine protegge un lilia e Benoit ne affonda uno ogni volta (infinitamente); Antoine vince se la rana può raggiungere infinitamente molti lilia sopravvissuti; analizzare chi vince su vari stagni*

> Viva la rana libera!
> 
> Una rana salta da lilia a lilia su un lago infinito. Antoine e Benoit giocano su questo stagno.
> 
> Le lampadine sono rappresentate da punti blu; la rana può saltare da una lampadina a un'altra lampadina collegata ad essa da una linea.
> 
> Le regole del gioco sono le seguenti. Antoine inizia proteggendo un lampadino. Poi Benoit affonda un lampadino diverso da quello protetto da Antoine. Poi Antoine protegge un secondo lirio che non è già stato affondato, poi Benoit affonda un nuovo lirio che non è uno di quelli protetti da Antoine, e così via.
> 
> Antoine e Benoit suonano a loro volta un numero infinito di volte, Antoine durante i turni $1,3,5,\ldots$ e Benoit durante i turni $2,4,6,\ldots$ Una volta che ognuno ha suonato un numero infinito di volte, un numero infinito di pad di lilia sono stati affondati, un numero infinito sono stati protetti, e possono rimanere zero, uno, diversi, o un numero infinito di pad di lilia che non sono stati affondati.
> 
> Antoine vince se riesce a mettere la rana su un lampadino non affondato da cui la rana può raggiungere un numero infinito di altri lampadini saltando solo su lampadini vicini che non sono stati affondati. Altrimenti Benoit vince.
> 
> Una strategia per un giocatore è una regola che, per ogni configurazione del gioco, associa una mossa al gioco. Diciamo che un giocatore ha una strategia vincente se può, giocando con questa strategia, vincere la partita in qualunque modo il giocatore possa giocare.
> 
> Un esempio di gioco è illustrato nella figura 9, dove le lampadine di un stesso colore sono unite da una linea. Su una linea retta completa, Benoit vince questa partita perché, qualunque sia la padella di lilia su cui si colloca la rana, può raggiungere solo un numero finito di padelli di lilia, poiché i padelli di lilia protetti sono tutti isolati.
> 
> **(1) ** Determina, in termini di $k$, se Antoine o Benoit hanno una strategia vincente nel lago con le righe $k$ illustrate dalla figura 11. Si può iniziare studiando i casi $k=1$ e $k=2$.
> 
> **(2) ** Determina, per ciascuno degli stagni illustrati nella figura 12, se Antoine o Benoit hanno una strategia vincente.
> 
> Ora supponiamo che, una volta che Antoine e Benoit hanno suonato un numero infinito di volte, tutti i pad di lilia che non sono stati protetti da Antoine sono affondati. Nell'esempio presentato all'inizio sulla linea retta completa, Antoine ha quindi ancora perso poiché le lamelle protette sono tutte isolate. Rivedere le domande (1) e (2) in questo quadro.
> 
> Antoine e Benoit decidono di cambiare le regole del gioco: Antoine non colloca più la rana dopo la partita, ma prima del suo primo giro. Supponiamo che il corrispondente lampadino sia automaticamente protetto. - a) Rivisitare le domande (1) e (2) con questa nuova regola, studiando tutte le posizioni iniziali possibili della rana per ciascun stagno. - (b) Rivedere alla domanda (3) nello stesso modo.
> 
> C'è un stagno tale che Antoine abbia una strategia vincente per la regola della domanda (2) ma Benoit abbia una strategia vincente per la regola della domanda (3)? E l'inverso? Più in generale, confrontate tra di loro le regole delle domande (2), (3), (4a) e (4b): per ogni sottoinsieme di queste quattro regole, esiste un stagno tale che Antoine abbia una strategia vincente per ogni regola del sottoinsieme, ma Benoit abbia una strategia vincente per ogni regola?
> 
> Invece di giocare a turno, Antoine gioca ora le mosse$A$, poi Benoit gioca le mosse$B$, poi Antoine di nuovo le mosse$A$, e così via. Rivedere le domande (1) e (2) con questa nuova regola per i diversi valori di $A$ e $B$.
> 
> **(7) ** Studiare altri stagni e trovare criteri e risultati generali per determinare la persona che ha la strategia vincente.

![[src_tfjm_2021__Q07.png]]

[[src_tfjm_2021__Q07]]
