---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026 — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2026__Q01
parent: src_tfjm_2026
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026
family: tfjm
year: '2026'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '1'
summary: >-
  Chip-eating game on a layout of n piles of n chips: two players alternate, a
  chip may be eaten only if its neighbours are still covered; count states and
  analyse optimal strategies, then repeat on a pyramid layout.
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
  - method_backward
  - method_ricorsione
  - method_estremalita
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2026
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Chip-eating game on a layout of n piles of n chips: two players alternate, a chip may be eaten only if its neighbours are still covered; count states and analyse optimal strategies, then repeat on a pyramid layout.*

> 1. War at the aperitif.
> 
> Anita and Auriane take an aperitif together. They do not finish it, and instead have before them a heap of old-fashioned plain chips, composed of $n$ piles of $n$ chips, with $n \ge 1$ an integer. They eat the chips in turn, each in turn playing the role of eater. A chip in a pile or at the end of a row may be eaten only if the chips beside it have not yet been uncovered, that is, only the chip at the top of a pile, or at the end of a row. They must eat the chips one at a time, taking at least one chip and at most all the uncovered chips. The game continues as long as there are chips, but in the end no chip is left lying on the table. Anita begins.
> 
> An example of a game is shown in figure 1. At each step, the chips in blue are those that can be eaten. In total, Anita ate $7$ chips and Auriane ate $2$ chips during this game.
> 
> 1. How many different possible states are there for the heap of chips?
> 
> 2. Anita and Auriane are gourmands and each therefore seeks to eat as many chips as possible during the game.
> 
>    a) In this question, Auriane plays in a gluttonous manner: on her turn, she always takes all the chips she can. How many chips at most can Anita guarantee to eat, as a function of $n$?
>    b) Now Auriane thinks before playing. How many chips at most can Anita guarantee to eat, no matter how Auriane plays, as a function of $n$?
> 
> 3. In this question, the chip at the bottom left is a delicious barbecue chip that Anita absolutely wants to eat. As a function of $n$, how can Anita guarantee to eat it?
> 
> 4. In this question, the row number $k$ (counted from the bottom) is made of chips with a particular flavour. We call satisfaction the value $C + S \cdot v$, where $C$ is the number of ordinary chips and $S$ the number of special chips Anita eats, $v$ being the value of a special chip. As a function of $n$ and $k$, what is the maximal satisfaction Anita can guarantee to obtain, no matter how Auriane plays, in the following special cases:
> 
>    a) the chips are not good, so of value $v = -1$;
>    b) the chips are particularly good, so of value $v = 3$?
> 
> Now the chips are laid out as a pyramid: on the bottom row there are $n$ chips, on the row above $n-1$, and so on up to the top, where there is a single chip. A chip can no longer be eaten as before: a chip may be eaten if the two chips just below it are no longer there.
> 
> An example of a game is shown in figure 2. At each step, the chips in blue are those that can be eaten. In total, Anita ate $6$ chips and Auriane ate $4$ chips during this game.
> 
> 5. Repeat questions 1 to 3 in this setting.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_backward|Backward]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<span class="qlang-split" data-lang="it"></span>


*Gioco che mangia chip su un layout di n pile di n chip: due giocatori si alternano, un chip può essere mangiato solo se i suoi vicini sono ancora coperti; contare gli stati e analizzare le strategie ottimali, quindi ripetere su un layout di piramide.*

> 1. La guerra all'aperitivo.
> 
> Anita e Auriane prendono un aperitivo insieme. Non la finiscono, ma invece hanno davanti a sé un mucchio di chip semplici antichi, composti da pile $n$ di chip $n$, con $n \ge 1$ un numero intero. Mangiano le patatine a turno, ognuno a turno svolgendo il ruolo di mangiatore. Un chip in pila o alla fine di una fila può essere mangiato solo se i chips accanto non sono ancora stati scoperti, cioè solo il chip in cima ad una pila o alla fine di una fila. Devono mangiare le patatine una alla volta, prendendo almeno una patatina e al massimo tutte le patatine scoperte. La partita continua finché ci sono i chip, ma alla fine non resta più nessun chip a tavola. Anita inizia.
> 
> Un esempio di gioco è mostrato nella figura 1. A ogni passo, le patatine in blu sono quelle che si possono mangiare. In totale, Anita ha mangiato i chip $7$ e Auriane ha mangiato i chip $2$ durante questa partita.
> 
> 1. Quanti stati possibili ci sono per la pila di chip?
> 
> 2. Anita e Auriane sono gourmand e quindi ognuno cerca di mangiare il maggior numero possibile di patatine durante il gioco.
> 
> a) In questa domanda, Auriane gioca in modo grassone: a sua volta, prende sempre tutte le patatine che può. Quante cippe al massimo può Anita garantire di mangiare, in funzione di $n$? Ora Auriane pensa prima di giocare. Quante cippe al massimo Anita può garantire di mangiare, non importa come Auriane gioca, in funzione di $n$?
> 
> 3. In questa domanda, il chip in basso a sinistra è un delizioso chip da barbecue che Anita vuole assolutamente mangiare. In funzione di $n$, come può Anita garantire di mangiarlo?
> 
> 4. In questa domanda, il numero di riga $k$ (calcolato dalla parte inferiore) è costituito da patatine con un sapore particolare. Chiamiamo soddisfazione il valore $C + S \cdot v$, dove $C$ è il numero di chip ordinari e $S$ il numero di chip speciali che Anita mangia, $v$ è il valore di un chip speciale. Come funzione di $n$ e $k$, qual è la massima soddisfazione che Anita può garantire di ottenere, indipendentemente dal modo in cui Auriane gioca, nei seguenti casi speciali:
> 
> a) i chip non sono buoni, quindi di valore $v = -1$; b) i chip sono particolarmente buoni, quindi di valore $v = 3$?
> 
> Ora i chip sono disposti come una piramide: nella riga inferiore ci sono i chip $n$, nella riga sopra $n-1$, e così via fino alla cima, dove c'è un solo chip. Un chip non può più essere mangiato come prima: un chip può essere mangiato se i due chip appena sotto di esso non ci sono più.
> 
> Un esempio di gioco è mostrato nella figura 2. A ogni passo, le patatine in blu sono quelle che si possono mangiare. In totale, Anita ha mangiato i chip $6$ e Auriane ha mangiato i chip $4$ durante questa partita.
> 
> 5. Ripetere le domande da 1 a 3 in questo contesto.
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q01.png]]

[[src_tfjm_2026__Q01]]
