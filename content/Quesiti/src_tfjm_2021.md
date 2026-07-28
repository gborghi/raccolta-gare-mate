---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2021"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_aritmetica,method_grafi,method_conteggio,method_casework,method_ricorsione,skill_modellizzazione,skill_riconoscimento_pattern,skill_conteggio_sistematico,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Bomb with combination lock: shortest sequence of single-wheel clicks passing through all combinations*

> Agent 1234 must defuse a bomb protected by a combination lock.
> 
> The lock consists of $r \ge 2$ independent wheels. Each wheel is made of $n \ge 2$ notches numbered from $0$ to $n-1$. The agent can turn one wheel by one notch (a click) but, while doing so, the wheel can move only in a single direction: $0 \to 1 \to \cdots \to n-1 \to 0$. The lock is initially in position $0\ldots0$.
> 
> If the agent manages to display the correct combination, the bomb is automatically defused. Moreover, since the lock is rudimentary, the bomb keeps track of all combinations already displayed previously; thus, if the correct combination has already been displayed earlier, the position $0\ldots0$ included, the explosion has already been triggered.
> 
> Since the agent does not know the combination, his only objective is to find a sequence of movements that passes through all possible combinations at least once.
> 
> For example, if $n=3$ and $r=2$, the agent tests every combination with the sequence $00 \to 10 \to 11 \to 21 \to 22 \to 02 \to 12 \to 00$. A sequence may not be $01 \to 11 \to 21 \to 01$ since the combination $01$ is repeated, nor $01 \to 21$ since the wheels cannot advance by two clicks at once.
> 
> **(1)** In this question, suppose $n=10$ and $r=3$. Is it possible for the agent to defuse the bomb for sure? If not, what is the maximum number of testable combinations?
> 
> **(2)** Revisit the question in the general case where one supposes only $n \ge 2$ and $r \ge 2$.
> 
> **(3)** Revisit question (2) if the agent can never turn the same wheel twice in a row.
> 
> **(4)** Let $2 \le d \le r-1$. Revisit question (2) if the agent cannot turn a wheel that is among the last $d$ wheels turned (the previous question corresponds to $d=1$).
> 
> **(5)** Let $2 \le k \le r$. Revisit question (2) if, instead of turning one wheel at a time, the agent turns $k$ of them at once, each by one notch (without passing through an intermediate combination). For example, if $n=10$, $r=3$ and $k=2$, the agent can begin his sequence of movements with $000 \to 011 \to 112 \to 213 \to \cdots$
> 
> **(6)** Let $2 \le k \le r$. Revisit question (2) if, instead of turning one wheel at a time, the agent turns $k$ of them at once: the first by one notch, the second by 2, and so on up to the $k$-th by $k$ (without passing through an intermediate combination). For example, if $n=10$, $r=3$ and $k=2$, the agent can begin his sequence of movements with $000 \to 012 \to 222 \to 342 \to \cdots$
> 
> **(7)** In this question, suppose $n=10$. Let $m \ge 2$. Agent 1234 has learned that the bomb has a manufacturing defect, and the combination is a multiple of $m$. She therefore looks for sequences of movements passing through several combinations that are multiples of $m$, while making as few movements as possible. Revisit the previous questions in this framework. One may begin by treating question (2) for the values $m = 10, 2, 3, 4$.
> 
> **(8)** Propose and explore other research directions.

![[src_tfjm_2021__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_grafi|Grafi]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Bomba con serratura di combinazione: sequenza più breve di clic su una ruota che attraversano tutte le combinazioni*

> L'agente 1234 deve disattivare una bomba protetta da una serratura combinata.
> 
> La serratura è costituita da ruote indipendenti $r \ge 2$. Ogni ruota è costituita da incisioni $n \ge 2$ numerate da $0$ a $n-1$. L'agente può girare una ruota con un punto (un clic), ma, nel farlo, la ruota può muoversi solo in una sola direzione: $0 \to 1 \to \cdots \to n-1 \to 0$. La serratura è inizialmente in posizione $0\ldots0$.
> 
> Se l'agente riesce a visualizzare la combinazione corretta, la bomba viene disattivata automaticamente. Inoltre, poiché la serratura è rudimentale, la bomba tiene traccia di tutte le combinazioni già visualizzate in precedenza; quindi, se la combinazione corretta è già stata visualizzata in precedenza, la posizione $0\ldots0$ inclusa, l'esplosione è già stata attivata.
> 
> Dal momento che l'agente non conosce la combinazione, il suo unico obiettivo è trovare una sequenza di movimenti che passa attraverso tutte le combinazioni possibili almeno una volta.
> 
> Ad esempio, se $n=3$ e $r=2$, l'agente prova ogni combinazione con la sequenza $00 \to 10 \to 11 \to 21 \to 22 \to 02 \to 12 \to 00$. Una sequenza non può essere $01 \to 11 \to 21 \to 01$ poiché la combinazione $01$ è ripetuta, né $01 \to 21$ poiché le ruote non possono avanzare di due clic contemporaneamente.
> 
> **(1) ** In questa domanda supponiamo $n=10$ e $r=3$. E' possibile che l'agente possa disattivare la bomba con certezza? In caso contrario, qual è il numero massimo di combinazioni verificabili?
> 
> **(2) ** Rivedere la questione nel caso generale in cui si suppone solo $n \ge 2$ e $r \ge 2$.
> 
> **(3) ** Rivedi la domanda (2) se l'agente non può mai girare la stessa ruota due volte di seguito.
> 
> **(4) ** Lasciate $2 \le d \le r-1$. Rivedi la domanda (2) se l'agente non può girare una ruota che è tra le ultime ruote girate $d$ (la domanda precedente corrisponde a $d=1$).
> 
> **(5) ** Lasciate $2 \le k \le r$. Rivisitare la domanda (2) se, invece di girare una ruota alla volta, l'agente le gira $k$ in una volta, ciascuna a un punto (senza passare attraverso una combinazione intermedia). Per esempio, se $n=10$, $r=3$ e $k=2$, l'agente può iniziare la sua sequenza di movimenti con $000 \to 011 \to 112 \to 213 \to \cdots$
> 
> **(6) ** Lasciate $2 \le k \le r$. Rivisitare la domanda (2) se, invece di girare una ruota alla volta, l'agente ne gira $k$ contemporaneamente: la prima per una notta, la seconda per 2, e così via fino alla $k$-th per $k$ (senza passare attraverso una combinazione intermedia). Ad esempio, se $n=10$, $r=3$ e $k=2$, l'agente può iniziare la sua sequenza di movimenti con $000 \to 012 \to 222 \to 342 \to \cdots$
> 
> **(7) ** In questa domanda, supponiamo $n=10$. Let $m \ge 2$. L'agente 1234 ha scoperto che la bomba ha un difetto di fabbricazione, e la combinazione è un multiple di$m$. Cerca quindi sequenze di movimenti che passano attraverso diverse combinazioni che sono multipli di $m$, facendo al contempo il minor numero di movimenti possibile. Rivedere le domande precedenti in questo quadro. Si può iniziare trattando la domanda (2) per i valori $m = 10, 2, 3, 4$.
> 
> **(8) ** Proporre e esplorare altre direzioni di ricerca.

![[src_tfjm_2021__Q01.png]]

[[src_tfjm_2021__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,topic_logica,method_casework,method_invarianti,method_simmetria,method_ricorsione,skill_modellizzazione,skill_casework_accurato,skill_riconoscimento_pattern,skill_astrazione"></span>

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
> **(2) ** Lasciate $-n \le k \le n$. Supponiamo $B=\{-n,-n+1,\ldots,n-1,n\}$ e $C=\{-n,-n+1,\ldots,k-1,k+1,\ldots,n-1,n\}$ (Carole è privato dell'offset $k$). - Chi vince? Ripensare la questione se è Baptiste che è privato dell'offset $k$.
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



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_algebra,method_estremalita,method_casework,method_disuguaglianze,method_telescoping,skill_modellizzazione,skill_stima,skill_manipolazione_algebrica,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Single pizzaiolo schedules n pizzas (one at a time) to be ready near time 0; minimize total weighted earliness/lateness penalty*

> Perrine has called upon Yohann, a seasoned pizzaiolo, to prepare pizzas for the tournament.
> 
> Perrine wishes that $n \ge 1$ pizzas be ready as close as possible to the end of the day, date $0$. Each pizza $i \in \{1,2,\ldots,n\}$ has a specific preparation time $d_i \in \mathbb{R}_+^*$ and a priority $p_i \in \mathbb{R}_+^*$. Yohann can begin to prepare the pizzas from a date $-d$ where $d \in \mathbb{R}_+^*$. However, he can prepare only one pizza at a time, and cannot prepare several at once (no pause).
> 
> The goal of the pizzas being to be ready exactly at date $0$, Yohann seeks to minimize the total penalty, calculated as follows:
> - For a pizza $i \in \{1,2,\ldots,n\}$ that is late, the penalty is the duration of the delay multiplied by $p_i$.
> - For a pizza $i \in \{1,2,\ldots,n\}$ that is early, the penalty is the duration of the advance multiplied by $p_i$.
> 
> Figure 2 presents a possible planning of preparation for Yohann with $d=4$ and $4$ pizzas of respective preparation durations $1,2,3,2,1$ and respective priorities $10,20,30,40$. The total penalty of Yohann for this organization is $10\times 3 + 20\times 2 + 30\times 1 + 40\times 2.5 = 200$.
> 
> **(1)** Suppose $d=0$. What minimum penalty can Yohann obtain? One then supposes for the rest that $d>0$.
> 
> **(2)** What is the minimum penalty that Yohann can obtain when:
> - (a) for all $i \in \{1,2,\ldots,n\}$, $d_i=1$ and $p_i=1$?
> - (b) for all $i \in \{1,2,\ldots,n\}$, $d_i=1$?
> - (c) for all $i \in \{1,2,\ldots,n\}$, $p_i=1$?
> 
> **(3)** Let $0 < d_0 \le d$ and $0 < q < \frac{1}{2}$. What is the minimum penalty that Yohann can obtain when:
> - (a) for all $i \in \{1,2,\ldots,n\}$, $d_i=\frac{d_0}{2^i}$ and $p_i=q^i$?
> - (b) for all $i \in \{1,2,\ldots,n\}$, $d_i=\frac{d_0}{2^i}$ and $p_i=\frac{1}{2^i}$?
> - (c) for all $i \in \{1,2,\ldots,n\}$, $d_i=i$ and $p_i=1$?
> 
> **(4)** Suppose Yohann has the time to prepare all the pizzas before the date $-d$ (that is, $d_1+d_2+\cdots+d_n \le d$). What is the minimum penalty that Yohann can obtain when:
> - (a) for all $i \in \{1,2,\ldots,n\}$, $d_i=1$?
> - (b) for all $i \in \{1,2,\ldots,n\}$, $p_i=1$?
> 
> **(5)** In this whole question, Yohann potentially has an infinite number of pizzas, but he prepares only the first $n$. Suppose that, whatever the number $n$ of pizzas he prepares, $d_1+d_2+\cdots+d_n \le d$, and that the penalties decrease, with $p_i$ a decreasing function $g:\mathbb{N}\to\mathbb{R}_+^*$. Estimate as precisely as possible the minimum penalty that Yohann can guarantee himself as a function of $n$. What happens for other decreasing functions $g:\mathbb{N}\to\mathbb{R}_+^*$?
> 
> **(6)** Revisit questions (2) and (4) in the case where there are $m$ pizzaiolos.
> 
> **(7)** Propose and explore other research directions.

![[src_tfjm_2021__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_disuguaglianze|Disuguaglianze]], [[method_telescoping|Telescoping]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Schedule di pizzaiolo singoli n pizze (una alla volta) per essere pronte vicino all'orario 0; ridurre al minimo la penalità totale ponderata di anticipo/trasto*

> Perrine ha chiesto a Yohann, un esperto pizzaiolo, di preparare le pizze per il torneo.
> 
> Perrine desidera che le pizze $n \ge 1$ siano pronte il più vicino possibile alla fine della giornata, data $0$. Ogni pizza $i \in \{1,2,\ldots,n\}$ ha un tempo di preparazione specifico $d_i \in \mathbb{R}_+^*$ e una priorità $p_i \in \mathbb{R}_+^*$. Yohann può iniziare a preparare le pizze a partire da una data $-d$ dove $d \in \mathbb{R}_+^*$. Tuttavia, può preparare solo una pizza alla volta, e non può preparare diverse in una volta (senza pausa).
> 
> L'obiettivo della preparazione delle pizze è quello di essere pronte esattamente alla data $0$, Yohann cerca di ridurre al minimo la pena totale, calcolata come segue: - Per una pizza $i \in \{1,2,\ldots,n\}$ che è in ritardo, la pena è la durata del ritardo moltiplicata per $p_i$. - Per una pizza $i \in \{1,2,\ldots,n\}$ che è anticipata, la pena è la durata dell'anticipo moltiplicata per $p_i$.
> 
> La figura 2 presenta una possibile pianificazione della preparazione di Yohann con pizze $d=4$ e $4$ di rispettive durate di preparazione $1,2,3,2,1$ e rispettive priorità $10,20,30,40$. La sanzione totale di Yohann per questa organizzazione è $10\times 3 + 20\times 2 + 30\times 1 + 40\times 2.5 = 200$.
> 
> **(1) ** Supponiamo $d=0$. Che pena minima può ottenere Yohann? Uno suppone quindi per il resto che $d>0$.
> 
> Qual è la pena minima che Yohann può ottenere quando: - (a) per tutti i $i \in \{1,2,\ldots,n\}$, $d_i=1$ e $p_i=1$? - b) per tutti i $i \in \{1,2,\ldots,n\}$, $d_i=1$? - (c) per tutti i $i \in \{1,2,\ldots,n\}$, $p_i=1$?
> 
> **(3) ** Lasciate $0 < d_0 \le d$ e $0 < q < \frac{1}{2}$. Qual è la pena minima che Yohann può ottenere quando: - (a) per tutti $i \in \{1,2,\ldots,n\}$, $d_i=\frac{d_0}{2^i}$ e $p_i=q^i$? - (b) per tutti i $i \in \{1,2,\ldots,n\}$, $d_i=\frac{d_0}{2^i}$ e $p_i=\frac{1}{2^i}$? - (c) per tutti i $i \in \{1,2,\ldots,n\}$, $d_i=i$ e $p_i=1$?
> 
> **(4) ** Supponiamo che Yohann abbia il tempo di preparare tutte le pizze prima della data $-d$ (cioè $d_1+d_2+\cdots+d_n \le d$). Qual è la pena minima che Yohann può ottenere quando: - (a) per tutti i $i \in \{1,2,\ldots,n\}$, $d_i=1$? - (b) per tutti i $i \in \{1,2,\ldots,n\}$, $p_i=1$?
> 
> In questa interrogazione, Yohann ha un potenziale numero infinito di pizze, ma prepara solo la prima. Supponiamo che, qualunque sia il numero $n$ di pizze che prepara, $d_1+d_2+\cdots+d_n \le d$, e che le sanzioni diminuiscano, con $p_i$ una funzione diminuente $g:\mathbb{N}\to\mathbb{R}_+^*$. Calcolare con la massima precisione la pena minima che Yohann può garantire a se stesso in funzione di $n$. Che cosa accade per le altre funzioni decrescenti $g:\mathbb{N}\to\mathbb{R}_+^*$?
> 
> In caso di pizzaiolo, rivedere le domande (2) e (4).
> 
> **(7) ** Proporre e esplorare altre direzioni di ricerca.

![[src_tfjm_2021__Q03.png]]

[[src_tfjm_2021__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,topic_logica,method_casework,method_estremalita,method_conteggio,method_disuguaglianze,skill_casework_accurato,skill_conteggio_sistematico,skill_stima,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Identify counterfeit chocolate coins (different mass) with a two-pan balance; minimum weighings in worst case under various information*

> Malo, a renowned apprentice chocolatier, sometimes mistakes the recipe of chocolate coins.
> 
> Malo has prepared $n \in \mathbb{N}^*$ chocolate pieces, and has already wrapped them before realizing that one piece among them does not have the right mass: it is too small or too large, but we do not know which one, nor the mass difference. All the other pieces have the same mass.
> 
> The only thing that distinguishes the defective pieces from the good ones is their mass: all the good pieces have the same mass and a defective piece has a different mass.
> 
> Malo appeals to Marie, the chocolatier, for help to identify the defective pieces among the good ones. Unfortunately, she has at her disposal only a two-pan balance that is not very precise: it indicates only which pan is heavier. The balance is so imprecise that she also needs small masses of mass $1$.
> 
> **(1)** Suppose all the defective pieces have a mass between $1-\varepsilon$ and $1+\varepsilon$. Find a condition on $\varepsilon$ such that, if Marie places strictly more pieces and masses on one pan than on the other, then the balance will always tip toward the side with more pieces and masses. In the rest of the problem, we place ourselves in this case.
> 
> To begin, suppose $k=1$: a single piece is defective. Moreover, the remaining ingredients allow us to know whether the defective piece is heavier or lighter than the true ones.
> 
> **(2)** Malo thinks he remembers which piece is defective. In terms of $n$, what is the minimum number of weighings Marie needs to verify whether he is right?
> 
> **(3)** Malo has no idea which piece is defective. In terms of $n$, what is the minimum number of weighings Marie needs to know for sure which one is defective? Her strategy must work whatever the defective piece is.
> 
> **(4)** Revisit questions (2) and (3) if Marie has no masses at her disposal.
> 
> **(5)** Revisit questions (2) to (4) if the ingredients do not allow determining whether the defective piece is heavier or lighter. For question (2), Malo thinks he knows which piece is defective and heavier (Marie only wants to verify that it is the defective piece, but not necessarily that it is indeed heavier).
> 
> **(6)** Revisit questions (2) to (4) in the case of an arbitrary number $k > \frac{n}{2}$ of defective pieces, if these are all heavier than the good pieces and all of the same mass (respecting the constraint of question (1)). For question (2), Malo thinks he remembers exactly which the defective pieces are. One may begin with $k=2$.
> 
> **(7)** Revisit the problem in other cases. For example, one may suppose there exist two models of defective pieces, of respective masses $1+\varepsilon$ and $1-\varepsilon$ (where $\varepsilon>0$ is small enough to respect the constraint of question (1)). One may also be interested in the case where the pieces can have any mass (always respecting question (1)), or place oneself in the case where Marie does not know $k$.

![[src_tfjm_2021__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Identificare le monete di cioccolato contraffatte (di massa diversa) con un equilibrio di due pannelli; pesi minimi nel peggiore dei casi in base a varie informazioni*

> Malo, un noto apprendista di cioccolato, a volte sbaglia la ricetta delle monete di cioccolato.
> 
> Malo ha preparato i pezzi di cioccolato $n \in \mathbb{N}^*$ e li ha già avvolti prima di rendersi conto che un pezzo di cioccolato non ha la massa giusta: è troppo piccolo o troppo grande, ma non sappiamo quale, né la differenza di massa. Tutti gli altri pezzi hanno la stessa massa.
> 
> L'unica cosa che distingue i pezzi difettosi dai buoni è la loro massa: tutti i pezzi buoni hanno la stessa massa e un pezzo difettoso ha una massa diversa.
> 
> Malo chiede a Marie, la cioccolateria, aiuto per identificare i pezzi difettosi tra i buoni. Purtroppo ha a sua disposizione solo un equilibrio di due pannelli che non è molto preciso: indica solo quale è la pannella più pesante. L'equilibrio è così impreciso che ha bisogno anche di piccole masse di massa $1$.
> 
> **(1) ** Supponiamo che tutti i pezzi difettosi abbiano una massa tra $1-\varepsilon$ e $1+\varepsilon$. Trovare una condizione su $\varepsilon$ tale che, se Marie mette rigorosamente più pezzi e masse su una pentola che sull'altra, allora la bilancia sarà sempre inclinata verso il lato con più pezzi e masse. Nel resto del problema, ci mettiamo in questo caso.
> 
> Per cominciare, supponiamo $k=1$: un singolo pezzo è difettoso. Inoltre, gli ingredienti rimasti ci permettono di sapere se il pezzo difettoso è più pesante o più leggero di quelli veri.
> 
> Malo pensa di ricordare quale pezzo è difettoso. In termini di $n$, qual è il numero minimo di pesi che Marie ha bisogno per verificare se ha ragione?
> 
> Malo non ha idea di quale pezzo sia difettoso. In termini di $n$, qual è il numero minimo di pesi di cui Marie ha bisogno per sapere con certezza quale è difettoso? La sua strategia deve funzionare, qualunque sia il pezzo difettoso.
> 
> La domanda (2) e (3) sono riviste se Marie non dispone di massa.
> 
> **(5) ** Rivedere le domande da (2) a (4) se gli ingredienti non permettono di determinare se il pezzo difettoso è più pesante o più leggero. Per la domanda (2), Malo pensa di sapere quale pezzo è difettoso e più pesante (Marie vuole solo verificare che sia il pezzo difettoso, ma non necessariamente che sia effettivamente più pesante).
> 
> **(6) ** Rivedere le domande da (2) a (4) nel caso di un numero arbitrario $k > \frac{n}{2}$ di pezzi difettosi, se questi sono tutti più pesanti dei pezzi buoni e hanno tutti la stessa massa (rispetto al vincolo della domanda (1)). Per la domanda (2), Malo pensa di ricordare esattamente quali sono i pezzi difettosi. Si può iniziare con $k=2$.
> 
> **(7) ** Rivedi il problema in altri casi. Ad esempio, si può supporre che esistano due modelli di pezzi difettosi, rispettivamente $1+\varepsilon$ e $1-\varepsilon$ (dove $\varepsilon>0$ è abbastanza piccolo da rispettare la limitazione della domanda (1)). Si può anche interessare al caso in cui i pezzi possano avere qualsiasi massa (sempre rispettando la domanda (1)), o posizionarsi nel caso in cui Marie non conosca $k$.

![[src_tfjm_2021__Q04.png]]

[[src_tfjm_2021__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,topic_geometria_analitica,topic_combinatoria,method_coordinate,method_casework,method_estremalita,method_grafi,skill_ragionamento_geometrico,skill_casework_accurato,skill_modellizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Feudal lords own castles in a kingdom; influence zones via nearest-point regions; sworn enemies and Machiavellian lords; analyze configurations across segment/disc/square kingdoms*

> In the Middle Ages, lords share control over certain kingdoms.
> 
> The kingdom of Chile is represented by a segment of length $1$, and each lord $s$ has a castle which is a point $c_s$ of this segment. Two lords cannot have their castle at the same point $c_s$. The zone of influence of lord $s$ consists of all the points $x$ of the kingdom that are strictly closer to $c_s$ than to any other castle. The power $p_s$ of a lord is the length of his zone of influence.
> 
> Figure 5 illustrates a possible distribution of $4$ lords in the kingdom of Chile. The zone of influence of lord $s_1$ is the blue segment.
> 
> Let $t$ be a lord. For another lord $s$, write $a(t,s)$ for the power that $t$ would have if lord $s$ were removed from the kingdom. We say $s$ is a sworn enemy of $t$ if, for every other lord $s'$, $a(t,s) \ge a(t,s')$. A lord can have several sworn enemies.
> 
> For example, in the distribution illustrated in Figure 5, lord $s_1$ has sworn enemy $s_2$, $s_2$ has sworn enemy $s_1$, $s_3$ has sworn enemy $s_2$, and $s_4$ has sworn enemy $s_3$.
> 
> A lord is said to be Machiavellian if he has strictly the greatest power among all lords, but without being a sworn enemy of any lord.
> 
> **(2)** What are all the integers $n \ge 2$ such that, with $n$ lords in the kingdom of Chile, there can be a Machiavellian lord?
> 
> Not far from the kingdom of Chile, two other kingdoms are shared in the same way: the kingdom of Uruguay, in the form of a disc, and the kingdom of Surinam, in the form of a square. In these two kingdoms (Chile aside), the zone of influence of a lord $s$ with castle at point $c_s$ is the set of all points $x$ that are strictly closer to $c_s$ than to any other castle. The power $p_s$ of a lord is the area of his zone of influence. The notion of Machiavellian lord is defined in the same way in this setting.
> 
> Figure 6 illustrates a possible distribution of lords in the kingdoms. The zone of influence of lord $s$ is, in each case, the blue zone.
> 
> **(3)** What are all the integers $n$ such that, with $n$ lords in the kingdom of Uruguay, there can be a Machiavellian lord? And in the kingdom of Surinam?
> 
> A lord is said to be a vassal if he is a sworn enemy of all the other lords.
> 
> **(4)** For each of the three kingdoms, what are all the integers $n \ge 2$ such that there can be a configuration of $n$ Machiavellian lords?
> 
> We say a configuration of lords in a kingdom is $k$-balanced if each lord has exactly $k$ sworn enemies, and each lord is the sworn enemy of exactly $k$ lords.
> 
> **(5)** For each of the three kingdoms, what are the integers $k \ge 1$ such that there exists a $k$-balanced configuration?
> 
> **(6)** For each of the three kingdoms, what are the integers $n \ge 2$ such that there exists a configuration of $n$ lords in which no pair of lords are sworn enemies of each other?
> 
> **(7)** Fix the number $n \ge 2$ of lords and, for each lord $s$, a set $E_s$ of other lords. For each of the three kingdoms, determine for which assignments $E_s$ there exists a configuration for which the sworn enemies of $s$ are exactly the elements of $E_s$.
> 
> **(8)** Propose and explore other research directions; it may be useful, for example, to continue studying these three kingdoms, or to determine whether there exist other kingdoms with interesting properties with respect to the previous questions.

![[src_tfjm_2021__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_grafi|Grafi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*I signori feudali possedono castelli in un regno; zone d'influenza attraverso le regioni più vicine; nemici giurati e signori machiavelli; analizzano le configurazioni tra regni segmento/disco/quadrato*

> Nel Medioevo, i signori condividevano il controllo su alcuni regni.
> 
> Il regno del Cile è rappresentato da un segmento di lunghezza $1$, e ogni signore $s$ ha un castello che è un punto $c_s$ di questo segmento. Due signori non possono avere il loro castello nello stesso punto. La zona d'influenza del signore $s$ è composta da tutti i punti $x$ del regno che sono strettamente più vicini a $c_s$ che a qualsiasi altro castello. La potenza $p_s$ di un signore è la lunghezza della sua zona di influenza.
> 
> La figura 5 illustra una possibile distribuzione dei signori $4$ nel regno del Cile. La zona d'influenza di lord $s_1$ è il segmento blu.
> 
> Lasciate che sia un signore. Per un altro signore $s$, scrivete $a(t,s)$ per il potere che $t$ avrebbe se il signore $s$ fosse rimosso dal regno. Noi diciamo che$s$ è un nemico giurato di$t$ se, per ogni altro signore $s'$, $a(t,s) \ge a(t,s')$. Un signore può avere diversi nemici giurati.
> 
> Ad esempio, nella distribuzione illustrata nella figura 5, il signore $s_1$ ha giurato nemico $s_2$, $s_2$ ha giurato nemico $s_1$, $s_3$ ha giurato nemico $s_2$ e $s_4$ ha giurato nemico $s_3$.
> 
> Si dice che un signore sia machiavelliano se ha il più grande potere tra tutti i signori, ma senza essere un nemico giurato di nessun signore.
> 
> Quali sono tutti gli integri $n \ge 2$ in modo che, con i signori $n$ nel regno del Cile, ci possa essere un signore machiavelliano?
> 
> Non lontano dal regno del Cile, altri due regni sono condivisi allo stesso modo: il regno dell'Uruguay, sotto forma di disco, e il regno del Suriname, sotto forma di quadrato. In questi due regni (a parte il Cile), la zona di influenza di un signore $s$ con castello al punto $c_s$ è l'insieme di tutti i punti $x$ che sono strettamente più vicini a $c_s$ che a qualsiasi altro castello. La potenza $p_s$ di un signore è l'area della sua zona di influenza. La nozione di signore machiavelliano è definita nello stesso modo in questo contesto.
> 
> La figura 6 illustra la possibile distribuzione dei signori nei regni. La zona d'influenza di lord $s$ è, in ogni caso, la zona blu.
> 
> Quali sono tutti gli enti $n$ in modo che, con $n$ signori nel regno dell'Uruguay, ci possa essere un signore machiavelliano? E nel regno del Surinam?
> 
> Si dice che un signore sia un vassallo se è un nemico giurato di tutti gli altri signori.
> 
> Per ciascuno dei tre regni, quali sono tutti gli enti $n \ge 2$ in modo tale che possa esserci una configurazione di $n$ machiavelli?
> 
> Diciamo che una configurazione di signori in un regno è $k$-equilibrata se ogni signore ha esattamente $k$ nemici giurati, e ogni signore è il nemico giurato di esattamente $k$ signori.
> 
> **(5) ** Per ciascuno dei tre regni, quali sono i numeri interi $k \ge 1$ in modo che esista una configurazione $k$-equilibrata?
> 
> Per ciascuno dei tre regni, quali sono i numeri interi $n \ge 2$ in modo che esista una configurazione di signori $n$ in cui nessun paio di signori sono nemici giurati l'uno dell'altro?
> 
> **(7) ** Fissa il numero $n \ge 2$ di signori e, per ogni signore $s$, un insieme $E_s$ di altri signori. Per ciascuno dei tre regni, determinare per quali assegnazioni $E_s$ esiste una configurazione per la quale i nemici giurati di $s$ sono esattamente gli elementi di $E_s$.
> 
> **(8) ** Proporre e esplorare altre direzioni di ricerca; può essere utile, ad esempio, continuare a studiare questi tre regni, o determinare se esistono altri regni con proprietà interessanti rispetto alle domande precedenti.

![[src_tfjm_2021__Q05.png]]

[[src_tfjm_2021__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,method_grafi,method_estremalita,method_doppio_conteggio,method_casework,skill_modellizzazione,skill_conteggio_sistematico,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Distribute N gift bags among two TFJM committees joined in a tree of neighbor relations; each move along an edge costs 1; minimize total transfer cost*

> Each year, the organizing committee of TFJM$^2$ is partially renewed. The volunteers of the organizing committee of the current year receive bags TFJM$^2$.
> 
> The Louis organizing committee for the year 2020 was composed of $b_1 \ge 4$ volunteers numbered $L_1, L_2, L_3, \cdots, L_{b_1}$. Among these volunteers was Anais, who is number $L_1$. The organizing committee for the year 2021 is composed of $b_2 \ge 4$ volunteers $A_1, A_2, A_3, \cdots, A_{b_2}$. Among these volunteers is Louis, who is number $A_1$. Apart from Anais and Louis, the only members belonging to both committees are $L_2 = A_{b_2}$ and $A_2 = L_{b_1}$.
> 
> Certain volunteers are neighbors:
> - Anais has $b_2$ neighbors who are the members of her committee, namely $A_1, A_2, \ldots, A_{b_2}$.
> - Louis has $b_1$ neighbors who are the members of his committee, namely $L_1, L_2, \ldots, L_{b_1}$.
> - For $2 < i < b_1$, the volunteer $L_i$ has $3$ neighbors: $L_{i-1}$, $L_{i+1}$ and Louis.
> - For $2 < i < b_2$, the volunteer $A_i$ has $3$ neighbors: $A_{i-1}$, $A_{i+1}$ and Anais.
> - The volunteer $A_2 = L_{b_1}$ has $4$ neighbors: $A_3$, $A_1$, $L_{b_1-1}$ and Louis.
> - The volunteer $A_{b_2} = L_2$ has $4$ neighbors: $L_3$, $L_1$, $A_{b_2-1}$ and Anais.
> 
> For example, if Louis had $b_1=5$ volunteers including Anais, and Anais had $b_2=4$ volunteers including Louis, then the relations are represented as in Figure 7.
> 
> This year, the postman received bad instructions and a total of $N$ bags TFJM$^2$ arrive at the addresses of Louis's committee according to the following distribution:
> - each member of Louis's committee, except Louis, receives $1$ packet made of $j_1$ bags;
> - Louis receives the remaining $N - j_1 b_1$ bags.
> 
> They want to transmit the bags to Anais's committee. Anais wishes that all the volunteers of her committee each have exactly $1$ packet of $j_2$ bags (except herself), and she will keep the remaining $N - b_2 j_2$ bags for the participants.
> 
> Each bag can be moved successively between neighboring volunteers, but each move imposes a cost of $1$. Thus the total cost is the total number of times a bag has been moved between two neighbors.
> 
> Figure 8 illustrates an example of a choice of transfers with $j_1=6$, $j_2=7$, $b_1=5$ and $b_2=4$. The numbers of bags initially are represented in orange. This choice of transfers consists of carrying out the transfers of bags along the orange arrows, then along the dark blue arrow, and finally making a transfer of bags along the light blue arrows. The number of bags moved at each transfer is written next to the corresponding arrow. Once the transfers are made, the number of bags of each volunteer, indicated in blue, is indeed the expected one. The total cost for these transfers is $b_1 \times j_1 + N + b_2 \times j_2 = 5\times 6 + 100 + 4\times 7 = 158$.
> 
> Louis and Anais however want to minimize the costs and this choice of transfers does not seem to be the best. We write $C_{\min}$ for the smallest total cost possible by choosing the transfers of bags carried out.
> 
> **(1)** In the example of Figure 8, for $N=100$, $b_1=5$, $b_2=4$, $j_1=6$, $j_2=7$, what is the smallest possible total cost $C_{\min}$?
> 
> For the moment, suppose that Louis and Anais are as generous as each other and give the same number of bags $j$ to the volunteers of their committee, so that $j_1 = j_2 = j$.
> 
> **(2)** Suppose in this question that the number of bags given to the participants is each time zero, that is $N \ge 2\max(b_1 j_1, b_2 j_2)$. For which value(s) of $b_1$, $b_2$ and $N$ can one guarantee a cost of exactly $C=N$?
> 
> **(3)** No longer suppose that $N \ge 2\max(b_1 j_1, b_2 j_2)$. In terms of $N$, $b_1$, $b_2$ and $j$, what are the possible values of the total cost $C$?
> 
> **(4)** In fact, the number of bags distributed to the volunteers does not change from one year to the next. Louis had thus given packets of $j_1 = b_2$ bags to each of his volunteers, and Anais wishes that each of her volunteers have $j_2 = b_1$ bags. Revisit the previous question in this framework.
> 
> **(5)** Louis and Anais wish to spend as little as possible and to have a balanced budget, so that $C_{\min} = N$ while $N \ge 2\max(b_1 j_1, b_2 j_2)$. For which values of $C_{\min}$ is this possible?
> 
> **(6)** The organization of TFJM$^2$ creates ties and there are in fact $k$ additional direct contacts possible between the volunteers of the two committees. For $N \ge 2\max(b_1 j_1, b_2 j_2)$, in terms of $b_1$, $b_2$, $j_1$ and $j_2$, between which volunteers is it most judicious to establish these $k$ new contacts so that $C_{\min}$ is the smallest possible? One may begin by treating the case $k=1$.
> 
> **(7)** Propose and explore other research directions.

![[src_tfjm_2021__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


Distribuire N sacchetti regalo tra due comitati TFJM uniti in un albero di relazioni vicine; ogni mossa lungo un bordo costa 1; ridurre al minimo il costo totale di trasferimento*

> Ogni anno il comitato organizzativo del TFJM$^2$ viene parzialmente rinnovato. I volontari del comitato organizzatore dell'anno in corso ricevono borse TFJM$^2$.
> 
> Il comitato organizzativo di Louis per l'anno 2020 era composto da volontari $b_1 \ge 4$ numerati $L_1, L_2, L_3, \cdots, L_{b_1}$. Tra questi volontari c'era anche Anais, che è il numero $L_1$. Il comitato organizzativo per l'anno 2021 è composto da volontari $b_2 \ge 4$ $A_1, A_2, A_3, \cdots, A_{b_2}$. Tra questi volontari c'è Louis, che è il numero $A_1$. Oltre a Anais e Louis, gli unici membri di entrambi i comitati sono $L_2 = A_{b_2}$ e $A_2 = L_{b_1}$.
> 
> Alcuni volontari sono vicini: - Anais ha $b_2$ vicini che sono membri del suo comitato, cioè $A_1, A_2, \ldots, A_{b_2}$. - Louis ha $b_1$ vicini che sono membri del suo comitato, cioè $L_1, L_2, \ldots, L_{b_1}$. - per $2 < i < b_1$, il volontario $L_i$ ha $3$ vicini: $L_{i-1}$, $L_{i+1}$ e Louis. - Per $2 < i < b_2$, il volontario $A_i$ ha $3$ vicini: $A_{i-1}$, $A_{i+1}$ e Anais. - Il volontario $A_2 = L_{b_1}$ ha $4$ vicini: $A_3$, $A_1$, $L_{b_1-1}$ e Louis. - Il volontario $A_{b_2} = L_2$ ha $4$ vicini: $L_3$, $L_1$, $A_{b_2-1}$ e Anais.
> 
> Ad esempio, se Louis aveva $b_1=5$ volontari tra cui Anais, e Anais aveva $b_2=4$ volontari tra cui Louis, allora le relazioni sono rappresentate come nella Figura 7.
> 
> Quest'anno, il postino ha ricevuto cattive istruzioni e un totale di sacchetti $N$ TFJM$^2$ arrivano agli indirizzi del comitato di Louis secondo la seguente distribuzione: - ogni membro del comitato di Louis, tranne Louis, riceve un pacchetto $1$ fatto di sacchetti $j_1$; - Louis riceve i restanti sacchetti $N - j_1 b_1$.
> 
> Vogliono trasmettere le borse al comitato di Anais. Anais desidera che tutti i volontari del suo comitato abbiano esattamente $1$ pacchetto di sacchetti $j_2$ (eccetto lei stessa), e conserverà i rimanenti sacchetti $N - b_2 j_2$ per i partecipanti.
> 
> Ogni borsa può essere spostata successivamente tra i volontari vicini, ma ogni mossa comporta un costo di $1$. Quindi il costo totale è il numero totale di volte che una borsa è stata spostata tra due vicini.
> 
> La figura 8 illustra un esempio di una scelta di trasferimenti con $j_1=6$, $j_2=7$, $b_1=5$ e $b_2=4$. I numeri delle borse sono inizialmente rappresentati in arancione. Questa scelta di trasferimenti consiste nel effettuare il trasferimento di sacchetti lungo le frecce arancione, poi lungo la freccia blu scuro, e infine nel effettuare il trasferimento di sacchetti lungo le frecce blu chiaro. Il numero di sacchetti spostati ad ogni trasferimento è scritto accanto alla freccia corrispondente. Una volta effettuati i trasferimenti, il numero di borse di ciascun volontario, indicato in blu, è in effetti quello previsto. Il costo totale di tali trasferimenti è $b_1 \times j_1 + N + b_2 \times j_2 = 5\times 6 + 100 + 4\times 7 = 158$.
> 
> Louis e Anais, tuttavia, vogliono ridurre al minimo i costi e questa scelta di trasferimenti non sembra essere la migliore. Scriviamo $C_{\min}$ per il minor costo totale possibile scegliendo i trasferimenti effettuati.
> 
> **(1) ** Nell'esempio della figura 8, per $N=100$, $b_1=5$, $b_2=4$, $j_1=6$, $j_2=7$, qual è il costo totale minimo possibile $C_{\min}$?
> 
> Per il momento, supponiamo che Louis e Anais siano generosi l'uno come l'altro e donino lo stesso numero di sacchetti ai volontari del loro comitato, in modo che $j_1 = j_2 = j$.
> 
> **(2) ** Supponiamo in questa domanda che il numero di borse date ai partecipanti sia ogni volta zero, cioè $N \ge 2\max(b_1 j_1, b_2 j_2)$. Per quali valori (s) di $b_1$, $b_2$ e $N$ si può garantire un costo di esattamente $C=N$?
> 
> **(3) ** Non supponiamo più che $N \ge 2\max(b_1 j_1, b_2 j_2)$. In termini di $N$, $b_1$, $b_2$ e $j$, quali sono i valori possibili del costo totale $C$?
> 
> **(4) ** Infatti, il numero di borse distribuite ai volontari non cambia di anno in anno. Louis aveva quindi dato pacchetti di sacchetti $j_1 = b_2$ a ciascuno dei suoi volontari, e Anais desidera che ciascuno dei suoi volontari abbia sacchetti $j_2 = b_1$. In questo contesto, rivedere la domanda precedente.
> 
> Louis e Anais desiderano spendere il meno possibile e avere un bilancio equilibrato, in modo che $C_{\min} = N$ mentre $N \ge 2\max(b_1 j_1, b_2 j_2)$. Per quali valori di $C_{\min}$ è possibile?
> 
> L'organizzazione del TFJM crea legami e esistono infatti ulteriori contatti diretti tra i volontari dei due comitati. Per $N \ge 2\max(b_1 j_1, b_2 j_2)$, in termini di $b_1$, $b_2$, $j_1$ e $j_2$, tra quali volontari è più saggio stabilire questi nuovi contatti $k$ in modo che $C_{\min}$ sia il più piccolo possibile? Si può iniziare trattando il caso $k=1$.
> 
> **(7) ** Proporre e esplorare altre direzioni di ricerca.

![[src_tfjm_2021__Q06.png]]

[[src_tfjm_2021__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_combinatoria,topic_logica,method_grafi,method_casework,method_estremalita,method_induzione,skill_astrazione,skill_casework_accurato,skill_ragionamento_geometrico,skill_riconoscimento_pattern"></span>

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



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_logica,method_grafi,method_casework,method_induzione,method_ricorsione,skill_astrazione,skill_casework_accurato,skill_modellizzazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Rigged reality TV: participants have preference rankings determining sequential eliminations; an objective (X,Y) means Y wins when X is eliminated first; determine when a list of objectives is realizable, with cycle structures*

> Rigged TV.
> 
> Denis is the technical director of a rigged reality TV show.
> 
> The show unfolds as follows: $n \ge 3$ participants compete in a sports event, and the loser is eliminated. The first eliminated player chooses a player who is also eliminated, who in turn chooses a player to eliminate, and so on until only one remains. That player is then declared the winner.
> 
> What the spectators do not know is that Denis prepares before each show a table of preferences: he distributes before the show to each participant a ranking of the other participants. When a participant is eliminated, he always decides to eliminate the participant, among those remaining, who is ranked lowest in his table.
> 
> For example, with the table of preferences illustrated in Figure 13, if Loulou is eliminated in the sports event, then Fifi is eliminated next, and Riri wins.
> 
> The management cannot predict who will lose the sports event, and who will consequently be the first eliminated.
> 
> The artistic director therefore sends Denis a list of objectives. An objective is a pair $(X,Y)$ of participants. We say an objective is satisfied if participant $Y$ wins the show when participant $X$ is the first eliminated. An objective $(X,Y)$ is said to be realizable if there exists a table of preferences such that $(X,Y)$ is a satisfied objective.
> 
> Denis must find a table of preferences such that all the objectives of the list are satisfied. If such a table of preferences exists, then we say the list of objectives is realizable.
> 
> For example, the table of preferences presented in Figure 13 satisfies all the objectives of the list of objectives presented in Figure 14.
> 
> **(1)** For a show comprising only $n=3$ candidates, what are the realizable lists of objectives?
> 
> For a given list of objectives, we say that a set of $k \ge 2$ participants forms a $k$-cycle if the participants can be numbered $P_1, P_2, \cdots, P_k$ so that the objective of $P_1$ is $P_2$, that of $P_2$ is $P_3$, \ldots, and that of $P_k$ is $P_1$.
> 
> **(2)** Suppose the $n$ participants form an $n$-cycle for Denis's list of objectives. Is the list of objectives realizable?
> 
> **(3) \& (4)** In this question, Denis has a list of objectives for $n$ participants and he has the right to add up to $N$ other participants and to choose their objectives. Is it always possible for Denis to find a table of preferences for the $n+N$ participants that realizes the list of objectives, if Denis can choose $N$? And if he limits himself to $N \le n$? To $N \le 1$? To $N=0$?
> 
> **(5)** Suppose that, among the $n=a+b$ participants, $a$ form an $a$-cycle and $b$ form a $b$-cycle for Denis's list of objectives. Is the list of objectives realizable? One may begin by treating the cases $a=2$ and $a=b$.
> 
> **(6)** Under what condition is an arbitrary list of objectives realizable? One may begin by treating $a=2$ and $a=b$.
> 
> **(7)** After years of presenting the show, Denis has retired, so that the table of preferences always stays the same. The show has continued with the same participants for several years, so that each candidate has lost the sports event at least once. Alice, who knows the arcana of the show and has watched all the replays, tries to deduce the table of preferences. In terms of $n$, are there tables of preferences that she can completely determine? If so, for which is it possible?
> 
> **(8)** Propose and study other research directions.

![[src_tfjm_2021__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_casework|Casework]], [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Rigged reality TV: i partecipanti hanno classifiche di preferenza che determinano le eliminazioni sequenziali; un obiettivo (X,Y) significa che Y vince quando X viene eliminato per primo; determinare quando è realizzabile una lista di obiettivi, con strutture di ciclo*

> - Televisione truccata.
> 
> Denis e' il direttore tecnico di un reality show.
> 
> Lo spettacolo si svolge come segue: i partecipanti $n \ge 3$ competono in un evento sportivo, e il perdente viene eliminato. Il primo giocatore eliminato sceglie un giocatore che è anche eliminato, che a sua volta sceglie un giocatore da eliminare, e così via finché non rimane solo uno. Quel giocatore viene poi dichiarato vincitore.
> 
> Ciò che gli spettatori non sanno è che Denis prepara prima di ogni spettacolo una tabella di preferenze: distribuisce prima dello spettacolo a ogni partecipante un ranking degli altri partecipanti. Quando un partecipante viene eliminato, decide sempre di eliminare il partecipante, tra quelli rimasti, che è classificato più basso nella sua tabella.
> 
> Ad esempio, con la tabella delle preferenze illustrata nella Figura 13, se Loulou viene eliminato nell'evento sportivo, allora Fifi viene eliminato dopo, e Riri vince.
> 
> La direzione non può prevedere chi perderà l'evento sportivo e chi sarà quindi il primo eliminato.
> 
> Il direttore artistico invia quindi a Denis un elenco di obiettivi. Un obiettivo è una coppia $(X,Y)$ di partecipanti. Diciamo che un obiettivo è soddisfatto se il partecipante $Y$ vince lo spettacolo quando il partecipante $X$ è il primo eliminato. Si dice che un obiettivo $(X,Y)$ sia realizzabile se esiste una tabella di preferenze tale che $(X,Y)$ sia un obiettivo soddisfatto.
> 
> Denis deve trovare una tabella di preferenze in modo tale da soddisfare tutti gli obiettivi dell'elenco. Se esiste una tabella di preferenze del genere, si dice che l'elenco degli obiettivi sia realizzabile.
> 
> Ad esempio, la tabella delle preferenze presentata nella figura 13 soddisfa tutti gli obiettivi dell'elenco degli obiettivi presentati nella figura 14.
> 
> **(1) ** Per uno spettacolo composto solo da $n=3$ candidati, quali sono gli obiettivi realizzabili?
> 
> Per un dato elenco di obiettivi, diciamo che un insieme di partecipanti $k \ge 2$ forma un ciclo $k$ se i partecipanti possono essere numerati $P_1, P_2, \cdots, P_k$ in modo che l'obiettivo di $P_1$ è $P_2$, quello di $P_2$ è $P_3$, \ldots, e quello di $P_k$ è $P_1$.
> 
> **(2) ** Supponiamo che i partecipanti $n$ formino un ciclo $n$ per l'elenco di obiettivi di Denis. L'elenco degli obiettivi è realizzabile?
> 
> In questa domanda, Denis dispone di un elenco di obiettivi per i partecipanti e ha il diritto di sommare gli altri partecipanti e di scegliere i loro obiettivi. È sempre possibile per Denis trovare una tabella di preferenze per i partecipanti $n+N$ che realizzi l'elenco degli obiettivi, se Denis può scegliere $N$? E se si limita a $N \le n$? To $N \le 1$? To $N=0$?
> 
> **(5) ** Supponiamo che, tra i partecipanti $n=a+b$, $a$ formino un ciclo $a$ e $b$ formino un ciclo $b$ per l'elenco di obiettivi di Denis. L'elenco degli obiettivi è realizzabile? Si può iniziare con il trattamento dei casi $a=2$ e $a=b$.
> 
> In quali condizioni è possibile realizzare un elenco arbitrario di obiettivi? Si può iniziare con il trattamento di $a=2$ e $a=b$.
> 
> Dopo anni di presentazione dello show, Denis si è ritirato, in modo che la tabella delle preferenze rimanga sempre la stessa. Lo spettacolo è continuato con gli stessi partecipanti per diversi anni, in modo che ogni candidato ha perso l'evento sportivo almeno una volta. Alice, che conosce gli arcani dello show e ha visto tutte le repliche, cerca di dedurre la tabella delle preferenze. In termini di $n$, ci sono tabelle di preferenze che può determinare completamente? Se sì, per quale cosa è possibile?
> 
> **(8) ** Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2021__Q08.png]]

[[src_tfjm_2021__Q08]]
