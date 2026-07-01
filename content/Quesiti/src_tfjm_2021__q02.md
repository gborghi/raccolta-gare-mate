---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 2
tipo: quesito
lang: en
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
<div class="qlang-switch" data-default="en"></div>


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
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Gioco di eliminazione dei token per due giocatori su una riga utilizzando set di compensazione; analizzare le strategie vincenti e la periodicità*

> Baptiste e Carole giocano il gioco della battaglia in fila.
> 
> Baptiste e Carole hanno ognuno una fila di token $n \ge 1$, numerati da $1$ a $n$. A ciascuno di essi viene assegnato un insieme di numeri interi, chiamato un insieme di compensazioni. Scriviamo $B$ per l'insieme di compensazioni di Baptiste e $C$ per Carole.
> 
> Baptiste e Carole suonano a turno, a partire da Baptiste. A sua volta, Baptiste deve eliminare uno dei token rimanenti dell'avversario, numerato $j$; per farlo sceglie un offset $j-i$ nel suo set $B$, quindi Carole deve eliminare uno dei token di Baptiste numerato $i$, scegliendo un offset $j-i$ nel suo set $C$. Se uno dei due giocatori non può più giocare, ha perso e il suo avversario ha vinto.
> 
> Ad esempio, se $n=4$, $B=\{0,1\}$ e $C=\{-1,0\}$, è possibile giocare e è illustrato nella figura 1. Le cellule di Baptiste sono nella fila superiore, di Carole nella fila inferiore (in arancione).
> 
> Una strategia vincente per un giocatore è la scelta, per ogni possibile configurazione di gioco, di una mossa da giocare. Diciamo che un giocatore ha una strategia vincente se, giocando la sua strategia, può vincere la partita indipendentemente dal modo in cui il suo avversario gioca.
> 
> In tutta questa domanda supponiamo che $B=C$. Per quale Battista ha una strategia vincente? Studiare in particolare il caso $B=C=\{-1,0,1\}$ e il caso $B=C=\{0,1\}$.
> 
> < MSK5/>(2) < MSK6/> Lasciate < MSK0/>. Supponiamo $B=\{-n,-n+1,\ldots,n-1,n\}$ e $C=\{-n,-n+1,\ldots,k-1,k+1,\ldots,n-1,n\}$ (Carole è privato dell'offset $k$). - Chi vince? Ripensare la questione se è Baptiste che è privato dell'offset $k$.
> 
> **(3) ** Rivisitare la domanda precedente considerando invece altre serie $B$ e $C$. Si possono considerare $B=\{0,1\}$, $C=\{-1,0\}$; oppure invece $B=\{x,y\}$, $C=\{-x,-y\}$ con $x$ e $y$ due integri distinti; o più in generale il caso in cui $B$ e $C$ siano simmetrici, ovvero: $-k$ è in $C$ se e solo se $k$ è in $B$.
> 
> **(4) ** Fix $B$, $C$, e lasciare $(u_n)_{n\in\mathbb{N}}$ essere la sequenza in cui $u_n$ equivale $1$ se Baptiste vince la partita nella configurazione con celle $n$, e $0$ altrimenti. Descrivere le possibili sequenze $(u_n)$. In particolare, questa sequenza è sempre periodica da un certo rango? Tra le sequenze che alla fine sono periodiche, quali periodi sono possibili?
> 
> Arthur, che guarda le partite, le trova troppo lunghe. Propone di modificare la regola: a sua volta, un giocatore elimina uno dei suoi token rimanenti, numerato $i$, così come tutti i token rimanenti dell'avversario il cui numero $j$ è tale che $j-i$ sia nel suo insieme di compensazioni. Può succedere che un giocatore elimini tutti i token rimanenti dell'avversario; allora quel giocatore non può più giocare, ha perso, e il suo avversario ha vinto.
> 
> **(5) ** Rivisitare le domande precedenti con questa nuova regola.
> 
> **(6) ** Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2021__Q02.png]]

[[src_tfjm_2021__Q02]]
