---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2021"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_aritmetica,method_grafi,method_conteggio,method_casework,method_ricorsione,method_induzione,skill_modellizzazione,skill_riconoscimento_pattern,skill_conteggio_sistematico,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Bomb with combination lock: shortest sequence of single-wheel clicks passing through all combinations*

> 1. Agent 1234
>
> L'agent 1234 doit désamorcer une bombe protégée par un cadenas à combinaison.
>
> Le cadenas est constitué de $r \ge 2$ roues indépendantes. Chaque roue est constituée de $n \ge 2$ crans numérotés de $0$ à $n-1$. L'agent peut tourner une roue pour la faire passer d'un cran au suivant, mais uniquement dans un sens : $0 \to 1 \to \cdots \to n-1 \to 0$. Le cadenas est initialement en position $0\ldots 0$.
>
> Si l'agent parvient à afficher la bonne combinaison, la bombe sera automatiquement désamorcée. Mais si le cadenas affiche une combinaison déjà obtenue précédemment, elle explosera immédiatement. La combinaison $0\ldots 0$ n'est en particulier pas la bonne (car la bombe serait déjà désamorcée), et l'obtenir à nouveau déclenchera l'explosion.
>
> Étant donné que l'agent ne connaît pas la combinaison, son objectif est trouver une séquence de mouvements qui passe par le plus de combinaisons possibles sans faire exploser la bombe.
>
> Par exemple, si $n = 3$ et $r = 2$, l'agent peut tester toutes les combinaisons et ainsi désamorcer la bombe à coup sûr, en utilisant la séquence $00 \to 01 \to 11 \to 21 \to 22 \to 02 \to 12 \to 10 \to 20$. Une séquence ne peut contenir ni $01 \to 11 \to 21 \to 01$ car $01$ est répété, ni $01 \to 21$ car les roues ne peuvent avancer que d'un cran et ne peuvent pas reculer.
>
> 1. Dans cette question, on suppose $n = 10$ et $r = 3$. Est-il possible pour l'agent de désamorcer la bombe à coup sûr ? Si non, quel est le nombre maximum de combinaisons testables ?
>
> 2. Reprendre la question dans le cas général où l'on suppose seulement $n \ge 2$ et $r \ge 2$.
>
> 3. Reprendre la question 2 si l'agent ne peut jamais tourner deux fois d'affilée la même roue.
>
> 4. Soit $2 \le d \le r-1$. Reprendre la question 2 si l'agent ne peut pas tourner une roue parmi les $d$ précédentes à avoir été tournées (la question précédente correspond à $d = 1$).
>
> 5. Soit $2 \le k \le r$. Reprendre la question 2 si, au lieu de tourner une roue à la fois, l'agent en tourne $k$ à la fois d'un cran chacune (sans passer par une combinaison intermédiaire). Par exemple, si $n = 10$, $r = 3$ et $k = 2$, l'agent peut commencer sa séquence de mouvements par $000 \to 011 \to 112 \to 213 \to \cdots$.
>
> 6. Soit $2 \le k \le r$. Reprendre la question 2 si, au lieu de tourner une roue à la fois, l'agent en tourne $k$ à la fois, la première d'un cran, la deuxième de 2 etc. jusqu'à la $k$-ième de $k$ (sans passer par une combinaison intermédiaire). Par exemple, si $n = 10$, $r = 3$ et $k = 2$, l'agent peut commencer sa séquence de mouvements par $000 \to 012 \to 222 \to 342 \to \cdots$.
>
> 7. Dans cette question, on suppose $n = 10$. Soit $m \ge 2$. L'agent 1234 a appris que la bombe a un défaut de fabrication, et la combinaison est donc nécessairement un multiple de $m$. Elle cherche alors, parmi les séquences de mouvements qui passent par le plus de combinaisons multiples de $m$ possible (idéalement toutes), à effectuer le moins de mouvements possibles, car elle est pressée par le compte à rebours. Reprendre le problème dans le cadre de la question 2, puis des questions suivantes. On pourra commencer par les cas $m = 10, 2, 3, 4$.
>
> 8. Proposer et explorer d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_grafi|Grafi]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induction]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Esplosivo con lucchetto a combinazione: sequenza minima di clic su una singola ruota che attraversa tutte le combinazioni*

> Agente 1234 deve disinnescare una bomba protetta da un lucchetto a combinazione.
>
> Il lucchetto è costituito da $r \ge 2$ ruote indipendenti. Ogni ruota è formata da $n \ge 2$ tacche numerate da $0$ a $n-1$. L'agente può ruotare una ruota di una tacca (un clic), ma, mentre lo fa, la ruota può muoversi solo in un'unica direzione: $0 \to 1 \to \cdots \to n-1 \to 0$. Il lucchetto è inizialmente nella posizione $0\ldots0$.
>
> Se l'agente riesce a visualizzare la combinazione corretta, la bomba viene automaticamente disinnescata. Inoltre, poiché il lucchetto è rudimentale, la bomba tiene traccia di tutte le combinazioni già visualizzate in precedenza; così, se la combinazione corretta è già stata visualizzata in precedenza, inclusa la posizione $0\ldots0$, l'esplosione è già stata innescata.
>
> Poiché l'agente non conosce la combinazione, il suo unico obiettivo è trovare una sequenza di movimenti che attraversi tutte le combinazioni possibili almeno una volta.
>
> Ad esempio, se $n=3$ e $r=2$, l'agente testa ogni combinazione con la sequenza $00 \to 10 \to 11 \to 21 \to 22 \to 02 \to 12 \to 00$. Una sequenza non può essere $01 \to 11 \to 21 \to 01$ poiché la combinazione $01$ è ripetuta, né $01 \to 21$ poiché le ruote non possono avanzare di due clic alla volta.
>
> **1.** In questo quesito, si supponga $n=10$ e $r=3$. È possibile che l'agente disinneschi la bomba con certezza? In caso contrario, qual è il numero massimo di combinazioni testabili?
>
> **2.** Si riprenda il quesito nel caso generale in cui si supponga solo $n \ge 2$ e $r \ge 2$.
>
> **3.** Si riprenda il quesito (2) se l'agente non può mai ruotare due volte di seguito la stessa ruota.
>
> **4.** Sia $2 \le d \le r-1$. Si riprenda il quesito (2) se l'agente non può ruotare una ruota che si trova tra le ultime $d$ ruote ruotate (il quesito precedente corrisponde a $d=1$).
>
> **5.** Sia $2 \le k \le r$. Si riprenda il quesito (2) se, invece di ruotare una ruota alla volta, l'agente ruota $k$ ruote contemporaneamente, ciascuna di una tacca (senza passare attraverso una combinazione intermedia). Ad esempio, se $n=10$, $r=3$ e $k=2$, l'agente può iniziare la sua sequenza di movimenti con $000 \to 011 \to 112 \to 213 \to \cdots$
>
> **6.** Sia $2 \le k \le r$. Si riprenda il quesito (2) se, invece di ruotare una ruota alla volta, l'agente ruota $k$ ruote contemporaneamente: la prima di una tacca, la seconda di 2, e così via fino alla $k$-esima di $k$ (senza passare attraverso una combinazione intermedia). Ad esempio, se $n=10$, $r=3$ e $k=2$, l'agente può iniziare la sua sequenza di movimenti con $000 \to 012 \to 222 \to 342 \to \cdots$
>
> **7.** In questo quesito, si supponga $n=10$. Sia $m \ge 2$. L'agente 1234 ha appreso che la bomba ha un difetto di fabbricazione, e la combinazione è un multiplo di $m$. Cerca quindi sequenze di movimenti che attraversino diverse combinazioni che siano multipli di $m$, facendo il minor numero possibile di movimenti. Si riprendano i quesiti precedenti in questo quadro. Si può iniziare trattando il quesito (2) per i valori $m = 10, 2, 3, 4$.
>
> **8.** Proporre ed esplorare altri orientamenti di ricerca.

![[src_tfjm_2021__Q01.png]]


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]


<div class="qlang-split" data-lang="en"></div>


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
**Metodo:** [[method_grafi|Grafi]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induction]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,topic_logica,method_casework,method_invarianti,method_simmetria,method_ricorsione,skill_modellizzazione,skill_casework_accurato,skill_riconoscimento_pattern,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Two-player token elimination game on a row using offset sets; analyze winning strategies and periodicity*

> 2. Bataille rangée
>
> Baptiste et Carole jouent au jeu de la bataille rangée.
>
> Baptiste et Carole disposent chacun de $n \ge 1$ pions formant une rangée, numérotés de $1$ à $n$. À chacun est assigné un ensemble d'entiers, appelé ensemble de décalages. On note $B$ l'ensemble de décalages de Baptiste et $C$ l'ensemble de décalages de Carole.
>
> Baptiste et Carole jouent tour à tour, en commençant par Baptiste. À son tour, Baptiste doit éliminer l'une de ses pièces restantes, numérotée $i$, et une pièce restante de Carole numérotée $j$, telles que $j-i$ soit dans son ensemble de décalages $B$. Puis Carole dont éliminer l'une de ses pièces restantes, numérotée $i$, et une pièce restante de Baptiste, numérotée $j$, telles que $j-i$ soit dans son ensemble de décalages $C$. Si l'un des deux joueurs ne peut plus jouer, il a perdu, et son adversaire a gagné.
>
> Figure 1 – Illustration d'une partie de bataille rangée avec $n = 4$, $B = \{0, 1\}$ et $C = \{-1, 0\}$.
>
> Par exemple, si $n = 4$, $B = \{0, 1\}$, $C = \{-1, 0\}$, une partie possible est illustrée par la figure 1. Au début de la partie chaque joueur a 4 pièces, celles de Baptiste sont celles de la rangée du haut, en bleu, et celles de Carole sont celles de la rangée du bas, en orange.
>
> Au premier tour Baptiste commence. Il élimine sa pièce 1 et la pièce 2 de Carole, ce qu'il peut faire puisque $2-1 = 1$ est dans $B$. Puis, au tour 2, Carole élimine sa pièce 3 et la pièce 2 de Baptiste, ce qu'elle peut faire puisque $2-3 = -1$ est dans $C$. Au tour 3, Baptiste élimine enfin sa pièce 4 ainsi que la pièce 4 de Carole, ce qu'il peut faire puisque $4-4 = 0$ est dans $B$. Enfin au tour 4 Carole, ne peut alors plus jouer, car $3-1 = 2$ n'est pas dans $C$. Elle a donc perdu, et Baptiste a gagné.
>
> Une stratégie pour un joueur est la donnée pour chaque configuration du jeu d'un coup à jouer pour ce joueur. On dit qu'un joueur dispose d'une stratégie gagnante s'il dispose d'une stratégie qui lui permet de gagner quels que soient les coups joués par l'adversaire.
>
> 1. On suppose $B = C$ dans cette question. Pour quel $n$ Baptiste a-t-il une stratégie gagnante ? Étudier en particulier le cas $B = C = \{-1, 0, 1\}$ et le cas $B = C = \{0, 1\}$.
>
> 2. Soit $-n \leqslant k \leqslant n$. On suppose $B = \{-n, -n+1, \ldots, n-1, n\}$ et $C = \{-n, -n+1, \ldots, k-1, k+1, \ldots, n-1, n\}$ (Carole a le droit d'utiliser n'importe quel décalage, sauf $k$). En fonction de $n$ et de $k$, qui gagne ? Reprendre la question si c'est à Baptiste que l'on interdit un décalage de $k$.
>
> 3. Reprendre la question pour d'autres ensembles $B$ et $C$. On pourra notamment considérer $B = \{0, 1\}$, $C = \{-1, 0\}$, ou encore $B = \{x, y\}$, $C = \{-x, -y\}$ où $x$ et $y$ sont deux entiers distincts, ou plus généralement le cas où un décalage $k$ est dans $B$ si et seulement si $-k$ est dans $C$.
>
> 4. On fixe $B$, $C$ et on note $(u_n)_{n \in \mathbb{N}^*}$ la suite telle que $u_n$ vaut 1 si Baptiste gagne dans la configuration à $n$ pièces chacun, et 0 sinon.
>
> Décrire les suites $(u_n)$ possibles. Notamment, cette suite est-elle toujours périodique à partir d'un certain rang ? Parmi les suites périodiques à partir d'un certain rang, quelles sont les périodes possibles ?
>
> Arthur, qui regarde les parties, trouve qu'elles sont trop longues. Il propose de modifier la règle du jeu : à son tour, un joueur élimine l'un de ses pions restants, numéroté $i$, ainsi que tous les pions restants de l'adversaire dont le numéro $j$ est tel que $j-i$ est dans son ensemble de décalages. Il est toujours possible de choisir n'importe lequel de ses pions, même si cela n'élimine aucun pion chez l'adversaire. Si le joueur ne peut pas jouer, car il ne lui reste plus de pions, il a perdu, et son adversaire a gagné.
>
> 5. Reprendre les questions précédentes avec cette nouvelle règle du jeu.
>
> 6. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_simmetria|Simmetria]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Gioco a due giocatori di eliminazione di gettoni su una fila, con insiemi di scarti; analisi di strategie vincenti e periodicità*

> Baptiste e Carole giocano il gioco della battaglia in fila.
>
> Baptiste e Carole hanno ciascuno una fila di $n \ge 1$ gettoni, numerati da $1$ a $n$. A ciascuno di loro è assegnato un insieme di interi, detto insieme di scarti. Scriviamo $B$ per l'insieme di scarti di Baptiste e $C$ per quello di Carole.
>
> Baptiste e Carole giocano a turno, iniziando con Baptiste. Al suo turno, Baptiste deve eliminare uno dei gettoni rimanenti dell'avversario, numerato $j$; per farlo sceglie uno scarto $j-i$ nel suo insieme $B$, poi Carole deve eliminare uno dei gettoni di Baptiste numerato $i$, scegliendo uno scarto $j-i$ nel suo insieme $C$. Se uno dei due giocatori non può più giocare, ha perso e il suo avversario ha vinto.
>
> Ad esempio, se $n=4$, $B=\{0,1\}$ e $C=\{-1,0\}$, una partita è possibile ed è illustrata in Figura 1. Le celle di Baptiste sono nella riga superiore, quelle di Carole nella riga inferiore (in arancione).
>
> Una strategia vincente per un giocatore è la scelta, per ogni possibile configurazione di gioco, di un movimento da giocare. Si dice che un giocatore abbia una strategia vincente se, giocando la sua strategia, può vincere la partita qualunque sia il modo in cui gioca il suo avversario.
>
> **1.** In tutto questo quesito si supponga $B=C$. Per quali $n$ Baptiste ha una strategia vincente? Studiare in particolare il caso $B=C=\{-1,0,1\}$ e il caso $B=C=\{0,1\}$.
>
> **2.** Sia $-n \le k \le n$. Si supponga $B=\{-n,-n+1,\ldots,n-1,n\}$ e $C=\{-n,-n+1,\ldots,k-1,k+1,\ldots,n-1,n\}$ (Carole è privata dello scarto $k$). Chi vince? Si riprenda il quesito se è Baptiste a essere privato dello scarto $k$.
>
> **3.** Si riprenda il quesito precedente considerando invece altri insiemi $B$ e $C$. Si può considerare $B=\{0,1\}$, $C=\{-1,0\}$; oppure $B=\{x,y\}$, $C=\{-x,-y\}$ con $x$ e $y$ due interi distinti; oppure, più in generale, il caso in cui $B$ e $C$ siano simmetrici, cioè $-k$ sia in $C$ se e solo se $k$ è in $B$.
>
> **4.** Si fissino $B$, $C$, e sia $(u_n)_{n\in\mathbb{N}}$ la successione tale che $u_n$ sia $1$ se Baptiste vince la partita nella configurazione con $n$ celle, e $0$ altrimenti. Descrivere le possibili successioni $(u_n)$. In particolare, questa successione è sempre periodica da un certo indice in poi? Tra le successioni che sono periodiche da un certo punto in poi, quali periodi sono possibili?
>
> Arthur, che osserva le partite, le trova troppo lunghe. Propone di modificare la regola: al suo turno, un giocatore elimina uno dei suoi gettoni rimanenti, numerato $i$, nonché tutti i gettoni rimanenti dell'avversario il cui numero $j$ è tale che $j-i$ sia nel suo insieme di scarti. Può accadere che un giocatore elimini tutti i gettoni rimanenti dell'avversario; allora quel giocatore non può più giocare, ha perso e il suo avversario ha vinto.
>
> **5.** Si riprendano i quesiti precedenti con questa nuova regola.
>
> **6.** Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2021__Q02.png]]


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_invarianti|Invarianti / monovarianti]], [[method_simmetria|Sfruttamento della simmetria]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


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



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_algebra,method_estremalita,method_casework,method_disuguaglianze,method_telescoping,skill_modellizzazione,skill_stima,skill_manipolazione_algebrica,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="fr"></div>


*Single pizzaiolo schedules n pizzas (one at a time) to be ready near time 0; minimize total weighted earliness/lateness penalty*

> 3. C'est pas trop tôt !
>
> Perrine a appelé Yohann, pizzaïolo chevronné, pour la préparation de pizzas pour le tournoi.
>
> Perrine souhaite que $n \ge 1$ pizzas soient prêtes au plus proche de la fin de la journée à la date $0$. Chaque pizza $i \in \{1, 2, \ldots, n\}$ a un temps de préparation spécifique $d_i \in \mathbb{R}_+^*$, ainsi qu'une priorité $p_i \in \mathbb{R}_+^*$. Yohann peut commencer à préparer les pizzas à partir de la date $-d$ où $d \in \mathbb{R}_+^*$. Toutefois, il ne peut préparer qu'une seule pizza à la fois, et doit préparer chaque pizza d'un seul bloc (sans pause).
>
> La plupart des pizzas ne seront pas prêtes à la date 0 exactement, et Yohann cherche à minimiser le total des pénalités calculées comme suit :
>
> - Pour une pizza $i \in \{1, 2, \ldots, n\}$ en retard, la pénalité est calculée comme la durée du retard multipliée par $p_i$.
> - Pour une pizza $i \in \{1, 2, \ldots, n\}$ en avance, la pénalité est calculée comme la durée de l'avance multipliée par $p_i$.
>
> Figure 2 – Un planning possible pour Yohann, avec 4 pizzas.
>
> La figure 2 présente un planning de préparation des pizzas pour Yohann avec $d = 4$ et 4 pizzas de durées de réalisation respectives $1, 1, 3, 1$ et de priorités respectives $10, 20, 30, 40$. La pénalité totale de Yohann pour cette organisation est $10 \times 3 + 20 \times 2 + 30 \times 1 + 40 \times 2.5 = 200$.
>
> 1. Lorsque $d = 0$, quelle est la pénalité minimale que Yohann peut obtenir ?
>
> On suppose dans la suite que $d > 0$.
>
> 2. Quelle est la pénalité minimale que Yohann peut obtenir lorsque :
>
> (a) pour tout $i \in \{1, 2, \ldots, n\}$, $d_i = 1$ et $p_i = 1$ ?
>
> (b) pour tout $i \in \{1, 2, \ldots, n\}$, $d_i = 1$ ?
>
> (c) pour tout $i \in \{1, 2, \ldots, n\}$, $d_i = p_i$ ?
>
> 3. Soient $0 < d_0 \le d$ et $0 < q < \frac{1}{2}$. Quelle est la pénalité minimale que Yohann peut obtenir lorsque :
>
> (a) pour tout $i \in \{1, 2, \ldots, n\}$, $d_i = \frac{d_0}{2^i}$ et $p_i = q^i$ ?
>
> (b) pour tout $i \in \{1, 2, \ldots, n\}$, $d_i = \frac{d_0}{4^{n-i}}$ et $p_i = \frac{1}{4^i}$ ?
>
> (c) pour tout $i \in \{1, 2, \ldots, n\}$, $d_i = i$ et $p_i = 1$ ?
>
> 4. On suppose que Yohann a le temps de préparer toutes les pizzas avant la date $-d$ (c'est-à-dire que $d_1 + d_2 + \ldots + d_n \le d$). Quelle est la pénalité minimale que Yohann peut obtenir lorsque :
>
> (a) pour tout $i \in \{1, 2, \ldots, n\}$, $p_i = 1$ ?
>
> (b) pour tout $i \in \{1, 2, \ldots, n\}$, $d_i = i$ et $p_i = n-i+1$ ?
>
> 5. Dans cette question, Yohann a potentiellement une infinité de pizzas, mais ne prépare que les $n$ premières.
>
> On suppose que, quel que soit le nombre $n$ de pizzas qu'il prépare, $d_1 + d_2 + \cdots + d_n < d$, et que les pénalités vérifient, pour tout $i, j \in \{1, 2, \ldots, n\}$, $|p_i - p_j| \le p_i\, g(i)$, où $g(k) = \frac{1}{2^k}$.
>
> Estimer le plus précisément possible la pénalité minimale que peut s'assurer Yohann en fonction de $n$.
>
> Que se passe-t-il pour d'autres fonctions décroissantes $g : \mathbb{N} \to \mathbb{R}_+^*$ ?
>
> Afin de limiter ses pénalités, Yohann décide d'engager des commis. Ils se répartissent la réalisation des pizzas. Chaque pizza est préparée par un seul des pizzaïolos. Un pizzaïolo doit finir de préparer la pizza précédente avant d'en commencer une autre.
>
> La figure 3 présente un planning de préparation des pizzas pour 3 pizzaïolos avec $d = 4$ et 7 pizzas de durées de réalisation respectives $1, 2, 3, 1, 2, 3, 1$ et de pénalités respectives $10, 10, 10, 20, 20, 30, 40$. La pénalité totale de Yohann pour cette organisation est $10 \times 1 + 10 \times 2 + 10 \times 2 + 20 \times 2 + 20 \times 0 + 30 \times 1 + 40 \times 3 = 240$.
>
> Figure 3 – Un planning possible pour 3 pizzaïolos, avec 7 pizzas.
>
> 6. Reprendre les questions 2 et 4 dans le cas où il y a $m$ pizzaïolos.
>
> 7. Proposer et étudier d'autres directions de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_disuguaglianze|Disuguaglianze]], [[method_telescoping|Telescoping]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Pianificazione di n pizze da parte di un solo pizzaiolo, per minimizzare la penalità di anticipo e di ritardo*

> Perrine ha chiamato Yohann, un pizzaiolo esperto, per preparare pizze per il torneo.
>
> Perrine desidera che $n \ge 1$ pizze siano pronte il più vicino possibile alla fine della giornata, data $0$. Ogni pizza $i \in \{1,2,\ldots,n\}$ ha un tempo di preparazione specifico $d_i \in \mathbb{R}_+^*$ e una priorità $p_i \in \mathbb{R}_+^*$. Yohann può iniziare a preparare le pizze da una data $-d$, dove $d \in \mathbb{R}_+^*$. Tuttavia, può preparare solo una pizza alla volta e non può prepararne diverse contemporaneamente (nessuna pausa).
>
> L'obiettivo delle pizze è essere pronte esattamente alla data $0$; Yohann cerca di minimizzare la penalità totale, calcolata come segue:
> - Per una pizza $i \in \{1,2,\ldots,n\}$ in ritardo, la penalità è la durata del ritardo moltiplicata per $p_i$.
> - Per una pizza $i \in \{1,2,\ldots,n\}$ in anticipo, la penalità è la durata dell'anticipo moltiplicata per $p_i$.
>
> La Figura 2 presenta una possibile pianificazione di preparazione per Yohann con $d=4$ e $4$ pizze di durate di preparazione rispettivamente $1,2,3,2,1$ e priorità rispettivamente $10,20,30,40$. La penalità totale di Yohann per questa organizzazione è $10\times 3 + 20\times 2 + 30\times 1 + 40\times 2.5 = 200$.
>
> **1.** Supponiamo $d=0$. Qual è la penalità minima che Yohann può ottenere? Si supponga poi per il resto che $d>0$.
>
> **2.** Qual è la penalità minima che Yohann può ottenere quando:
> - (a) per ogni $i \in \{1,2,\ldots,n\}$, $d_i=1$ e $p_i=1$?
> - (b) per ogni $i \in \{1,2,\ldots,n\}$, $d_i=1$?
> - (c) per ogni $i \in \{1,2,\ldots,n\}$, $p_i=1$?
>
> **3.** Sia $0 < d_0 \le d$ e $0 < q < \frac{1}{2}$. Qual è la penalità minima che Yohann può ottenere quando:
> - (a) per ogni $i \in \{1,2,\ldots,n\}$, $d_i=\frac{d_0}{2^i}$ e $p_i=q^i$?
> - (b) per ogni $i \in \{1,2,\ldots,n\}$, $d_i=\frac{d_0}{2^i}$ e $p_i=\frac{1}{2^i}$?
> - (c) per ogni $i \in \{1,2,\ldots,n\}$, $d_i=i$ e $p_i=1$?
>
> **4.** Supponiamo che Yohann abbia il tempo di preparare tutte le pizze prima della data $-d$ (cioè, $d_1+d_2+\cdots+d_n \le d$). Qual è la penalità minima che Yohann può ottenere quando:
> - (a) per ogni $i \in \{1,2,\ldots,n\}$, $d_i=1$?
> - (b) per ogni $i \in \{1,2,\ldots,n\}$, $p_i=1$?
>
> **5.** In questo intero quesito, Yohann ha potenzialmente un numero infinito di pizze, ma ne prepara solo le prime $n$. Supponiamo che, qualunque sia il numero $n$ di pizze che prepara, $d_1+d_2+\cdots+d_n \le d$, e che le penalità diminuiscano, con $p_i$ una funzione decrescente $g:\mathbb{N}\to\mathbb{R}_+^*$. Si stima il più precisamente possibile la penalità minima che Yohann può garantire a se stesso come funzione di $n$. Cosa accade per altre funzioni decrescenti $g:\mathbb{N}\to\mathbb{R}_+^*$?
>
> **6.** Si riprendano i quesiti (2) e (4) nel caso in cui vi siano $m$ pizzaioli.
>
> **7.** Si propongano e si esplorino altre direzioni di ricerca.

![[src_tfjm_2021__Q03.png]]


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_casework|Analisi per casi]], [[method_disuguaglianze|Disuguaglianze classiche]], [[method_telescoping|Somme telescopiche]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_stima|Stima e approssimazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


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



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,topic_logica,method_casework,method_estremalita,method_conteggio,method_disuguaglianze,skill_casework_accurato,skill_conteggio_sistematico,skill_stima,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Identify counterfeit chocolate coins (different mass) with a two-pan balance; minimum weighings in worst case under various information*

> 4. Chocolaterie de haut vol
>
> Malo, apprenti dans une chocolaterie de renom, se trompe parfois dans la recette des pièces au chocolat.
>
> Malo a préparé $n \in \mathbb{N}^*$ pièces en chocolat, et les a déjà emballées avant de se rendre compte au vu des ingrédients qu'il lui reste qu'il a dû en rater $k \ge 1$.
>
> La seule chose qui distingue les pièces ratées des bonnes pièces est leur masse : toutes les bonnes pièces ont une masse de $1$, tandis que les ratées ont une masse proche mais différente de $1$.
>
> Il appelle Marie, la chocolatière, pour qu'elle l'aide à identifier les pièces ratées afin de ne mettre en vente que les bonnes pièces. Malheureusement, elle ne dispose que d'une balance à deux plateaux peu pratique, qui indique seulement quel plateau est le plus lourd. Sa balance est fournie avec autant de petites masses de masse $1$ qu'elle en a besoin.
>
> 1. On suppose que toutes les pièces ratées ont une masse comprise entre $1-\varepsilon$ et $1+\varepsilon$. Trouver une condition sur $\varepsilon$ pour que, si Marie place strictement plus de pièces et masses sur un plateau que sur l'autre, alors la balance penchera toujours du côté avec le plus de pièces et masses. Dans la suite du problème, on se placera dans ce cas.
>
> Pour commencer, on suppose $k = 1$ : une unique pièce est ratée. De plus, les ingrédients restants permettent de savoir que la pièce ratée est plus lourde que les vraies.
>
> Figure 4 – Exemple de pesée de deux pièces contre une pièce et une masse. La balance penche à gauche, donc l'une des deux pièces de gauche est ratée et trop lourde, ou la pièce de droite est ratée et trop légère.
>
> 2. Malo croit se souvenir quelle pièce est ratée. En fonction de $n$, quel est le nombre minimal de pesées dont Marie a besoin pour vérifier s'il a raison ?
>
> 3. Malo n'a aucune idée de quelle pièce est ratée. En fonction de $n$, quel est le nombre minimal de pesées dont Marie a besoin pour savoir à coup sûr laquelle est ratée ? Sa stratégie doit fonctionner quelle que soit la pièce ratée.
>
> 4. Reprendre les questions 2 et 3 si Marie n'a pas de masses à sa disposition.
>
> 5. Reprendre les questions 2 à 4 si les ingrédients ne permettent pas de déterminer si la pièce ratée est plus lourde ou plus légère. Pour la question 2, Malo croit se souvenir que la pièce ratée est plus lourde (Marie veut seulement vérifier que c'est la pièce ratée, pas forcément qu'elle est effectivement plus lourde).
>
> 6. Reprendre les questions 2 à 4 dans le cas d'un nombre $k < \frac{n}{2}$ quelconque de pièces ratées, si Marie sait qu'elles sont toutes plus lourdes que les bonnes pièces et toutes de même masse (en respectant la contrainte de la question 1). Pour la question 2, Malo pense se souvenir exactement de quelles sont les pièces ratées. On pourra commencer par $k = 2$.
>
> 7. Reprendre le problème dans d'autres cas. Par exemple, on pourra supposer qu'il existe deux modèles de pièces ratées, de masse respectives $1+\varepsilon$ et $1-\varepsilon$ (où $\varepsilon > 0$ est assez petit pour respecter la contrainte de la question 1). On pourra également s'intéresser au cas où les pièces peuvent être de masse quelconque (toujours en respectant la question 1), ou encore se placer dans le cas où Marie ne connaît pas $k$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Identificare monete di cioccolato contraffatte (di massa diversa) con una bilancia a due piatti; pesate minime nel caso peggiore sotto varie informazioni*

> Malo, un apprendista cioccolatiere rinomato, a volte sbaglia la ricetta delle monete di cioccolato.
>
> Malo ha preparato $n \in \mathbb{N}^*$ pezzi di cioccolato e li ha già avvolti prima di rendersi conto che uno di essi non ha la massa giusta: è troppo piccolo o troppo grande, ma non sappiamo quale né la differenza di massa. Tutti gli altri pezzi hanno la stessa massa.
>
> L'unica cosa che distingue i pezzi difettosi da quelli buoni è la loro massa: tutti i pezzi buoni hanno la stessa massa e un pezzo difettoso ha una massa diversa.
>
> Malo si rivolge a Marie, la cioccolatiera, per chiedere aiuto nell'identificare i pezzi difettosi tra quelli buoni. Purtroppo, dispone solo di una bilancia a due piatti non molto precisa: indica solo quale piatto è più pesante. La bilancia è così imprecisa che Marie ha anche bisogno di piccole masse di massa $1$.
>
> **1.** Supponiamo che tutti i pezzi difettosi abbiano una massa compresa tra $1-\varepsilon$ e $1+\varepsilon$. Trovare una condizione su $\varepsilon$ tale che, se Marie mette strettamente più pezzi e masse su un piatto che sull'altro, la bilancia si inclinerà sempre verso il lato con più pezzi e masse. Nel resto del problema, ci poniamo in questo caso.
>
> Per iniziare, supponiamo $k=1$: un solo pezzo è difettoso. Inoltre, gli ingredienti rimanenti permettono di sapere se il pezzo difettoso è più pesante o più leggero dei veri.
>
> **2.** Malo pensa di ricordare quale pezzo è difettoso. In funzione di $n$, qual è il numero minimo di pesate che Marie deve fare per verificare se ha ragione?
>
> **3.** Malo non ha idea di quale pezzo sia difettoso. In funzione di $n$, qual è il numero minimo di pesate che Marie deve fare per sapere con certezza quale sia il pezzo difettoso? La sua strategia deve funzionare qualunque sia il pezzo difettoso.
>
> **4.** Si riprendano i quesiti (2) e (3) se Marie non dispone di masse.
>
> **5.** Si riprendano i quesiti da (2) a (4) se gli ingredienti non permettono di determinare se il pezzo difettoso è più pesante o più leggero. Per il quesito (2), Malo pensa di sapere quale pezzo è difettoso e più pesante (Marie vuole solo verificare che sia il pezzo difettoso, ma non necessariamente che sia effettivamente più pesante).
>
> **6.** Si riprendano i quesiti da (2) a (4) nel caso di un numero arbitrario $k > \frac{n}{2}$ di pezzi difettosi, se questi sono tutti più pesanti dei pezzi buoni e tutti della stessa massa (rispettando il vincolo del quesito (1)). Per il quesito (2), Malo pensa di ricordare esattamente quali sono i pezzi difettosi. Si può iniziare con $k=2$.
>
> **7.** Si riprenda il problema negli altri casi. Ad esempio, si può supporre che esistano due modelli di pezzi difettosi, di masse rispettivamente $1+\varepsilon$ e $1-\varepsilon$ (dove $\varepsilon>0$ è sufficientemente piccolo da rispettare il vincolo del quesito (1)). Si può anche essere interessati al caso in cui i pezzi possano avere qualsiasi massa (sempre rispettando il quesito (1)), oppure porsi nel caso in cui Marie non conosca $k$.

![[src_tfjm_2021__Q04.png]]


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_conteggio|Conteggio combinatorio]], [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima e approssimazione]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


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



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,topic_geometria_analitica,topic_combinatoria,method_coordinate,method_casework,method_estremalita,method_grafi,skill_ragionamento_geometrico,skill_casework_accurato,skill_modellizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Feudal lords own castles in a kingdom; influence zones via nearest-point regions; sworn enemies and Machiavellian lords; analyze configurations across segment/disc/square kingdoms*

> 5. Stratégies féodales
>
> Au Moyen Âge, des seigneurs se partagent le contrôle de certains royaumes.
>
> Le royaume du Chili est représenté par un segment de longueur $1$, et chaque seigneur $s$ possède d'un château qui est un point $c_s$ de ce segment. Deux seigneurs ne peuvent pas avoir leur château au même point. La zone d'influence $Z_s$ d'un seigneur $s$ est le segment constitué de l'ensemble des points $x$ du royaume qui sont strictement plus proches de $c_s$ que de tout autre château. Le pouvoir $p_s$ d'un seigneur est la longueur de sa zone d'influence.
>
> La figure 5 illustre une répartition possible de $4$ seigneurs dans le royaume du Chili. La zone d'influence du seigneur $s_1$ est le segment bleu.
>
> Figure 5 – Illustration du royaume du Chili avec 4 seigneurs
>
> 1. Initialement $n \ge 1$ seigneurs sont placés dans le royaume. Leurs distances respectives à l'extrémité gauche du royaume sont $0 < a_1 < \cdots < a_n < 1$. Benoît, seigneur en devenir, peut choisir où installer son château. En fonction de $a_1$, $a_2$, $\cdots$, $a_n$, quels sont les pouvoirs que Benoît peut obtenir ?
>
> Soit $t$ un seigneur. Pour un autre seigneur $s$, on note $a(t, s)$ le pouvoir qui serait celui de $t$ si on enlevait le seigneur $s$ du royaume. On dit que $s$ est un ennemi juré de $t$ si, pour tout autre seigneur $s'$, $a(t, s) \geqslant a(t, s')$. Un seigneur peut avoir plusieurs ennemis jurés.
>
> Par exemple, dans la répartition illustrée par la figure 5, le seigneur $s_1$ a pour ennemi juré $s_2$, $s_2$ a pour ennemi juré $s_1$, $s_3$ a pour ennemi juré $s_2$, et $s_4$ a pour ennemi juré $s_3$.
>
> Un seigneur est dit machiavélique s'il a strictement le plus grand pouvoir parmi tous les seigneurs, mais sans être ennemi juré d'aucun seigneur.
>
> 2. Quels sont tous les entiers $n \ge 2$ tels qu'avec $n$ seigneurs dans le royaume du Chili, il puisse y avoir un seigneur machiavélique ?
>
> Non loin du royaume du Chili, deux autres royaumes sont partagés de la même manière : le royaume d'Uruguay, en forme de disque, et le royaume de Surinam, en forme de carré. Dans ces deux royaumes la zone d'influence $Z_s$ d'un seigneur $s$ dont le château est au point $c_s$ est la zone constituée de l'ensemble des points $x$ qui sont strictement plus proches de $c_s$ que de tout autre château. Le pouvoir $p_s$ d'un seigneur est l'aire de sa zone d'influence. On définit de la même manière la notion de seigneur machiavélique dans ce cadre.
>
> La figure 6 illustre une répartition possible de seigneurs dans des royaumes. La zone d'influence du seigneur $s$ est dans chacun la zone bleue.
>
> Figure 6 – Illustration d'une configuration de 4 seigneurs dans le royaume du Surinam, et d'une configuration de 3 seigneurs dans le royaume d'Uruguay.
>
> 3. Quels sont tous les entiers $n$ tels qu'avec $n$ seigneurs dans le royaume d'Uruguay, il puisse y avoir un seigneur machiavélique ? Et dans le royaume du Surinam ?
>
> Un seigneur est dit haï s'il est ennemi juré de tous les autres seigneurs.
>
> 4. Pour chacun des trois royaumes, quels sont tous les entiers $n \ge 2$ tels qu'avec $n$ seigneurs il puisse y avoir un seigneur haï ?
>
> On dit qu'une configuration de seigneurs dans un royaume est $k$-équilibrée si chaque seigneur a exactement $k$ ennemis jurés, et si chaque seigneur est l'ennemi juré d'exactement $k$ seigneurs.
>
> 5. Pour chacun des trois royaumes, quels sont tous les entiers $k \ge 1$ tels qu'il existe une configuration $k$-équilibrée ?
>
> 6. Pour chacun des trois royaumes, quels sont les entiers $n \geqslant 2$ tels qu'il existe une configuration de $n$ seigneurs sans qu'aucune paire de seigneurs ne soient ennemis jurés l'un de l'autre ?
>
> 7. On fixe le nombre $n \ge 2$ de seigneurs et, pour chaque seigneur $s$, un ensemble $E_s$ d'autres seigneurs. Pour chacun des trois royaumes et en fonction de $E_s$, existe-t-il une configuration pour laquelle les ennemis jurés de $s$ sont exactement les éléments de $E_s$ ?
>
> 8. Proposer et étudier d'autres pistes de recherche. On pourra par exemple continuer d'étudier ces trois royaumes, ou bien déterminer s'il existe d'autres royaumes possédant des propriétés intéressantes au regard des questions précédentes.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_grafi|Grafi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Signori feudali possiedono castelli in un regno; zone di influenza tramite regioni di punti più vicini; nemici giurati e signori machiavelliani; analisi delle configurazioni nei regni segmento/disco/quadrato*

> Nel Medioevo, i signori condividono il controllo su alcuni regni.
>
> Il regno del Cile è rappresentato da un segmento di lunghezza $1$, e ogni signore $s$ ha un castello che è un punto $c_s$ di questo segmento. Due signori non possono avere il loro castello nello stesso punto $c_s$. La zona di influenza del signore $s$ consiste di tutti i punti $x$ del regno che sono strettamente più vicini a $c_s$ che a qualsiasi altro castello. Il potere $p_s$ di un signore è la lunghezza della sua zona di influenza.
>
> La Figura 5 illustra una possibile distribuzione di $4$ signori nel regno del Cile. La zona di influenza del signore $s_1$ è il segmento blu.
>
> Sia $t$ un signore. Per un altro signore $s$, indichiamo con $a(t,s)$ il potere che $t$ avrebbe se il signore $s$ fosse rimosso dal regno. Diciamo che $s$ è un nemico giurato di $t$ se, per ogni altro signore $s'$, $a(t,s) \ge a(t,s')$. Un signore può avere diversi nemici giurati.
>
> Ad esempio, nella distribuzione illustrata nella Figura 5, il signore $s_1$ ha come nemico giurato $s_2$, $s_2$ ha come nemico giurato $s_1$, $s_3$ ha come nemico giurato $s_2$, e $s_4$ ha come nemico giurato $s_3$.
>
> Un signore è detto machiavelliano se ha strettamente il maggiore potere tra tutti i signori, ma senza essere nemico giurato di alcun signore.
>
> **2.** Quali sono tutti gli interi $n \ge 2$ tali che, con $n$ signori nel regno del Cile, possa esserci un signore machiavelliano?
>
> Non lontano dal regno del Cile, altri due regni sono condivisi allo stesso modo: il regno dell'Uruguay, nella forma di un disco, e il regno del Suriname, nella forma di un quadrato. In questi due regni (oltre al Cile), la zona di influenza di un signore $s$ con castello nel punto $c_s$ è l'insieme di tutti i punti $x$ che sono strettamente più vicini a $c_s$ che a qualsiasi altro castello. Il potere $p_s$ di un signore è l'area della sua zona di influenza. La nozione di signore machiavelliano è definita nello stesso modo in questo contesto.
>
> La Figura 6 illustra una possibile distribuzione di signori nei regni. La zona di influenza del signore $s$ è, in ciascun caso, la zona blu.
>
> **3.** Quali sono tutti gli interi $n$ tali che, con $n$ signori nel regno dell'Uruguay, possa esserci un signore machiavelliano? E nel regno del Suriname?
>
> Un signore è detto vassallo se è nemico giurato di tutti gli altri signori.
>
> **4.** Per ciascuno dei tre regni, quali sono tutti gli interi $n \ge 2$ tali che può esserci una configurazione di $n$ signori machiavelliani?
>
> Diciamo che una configurazione di signori in un regno è $k$-bilanciata se ogni signore ha esattamente $k$ nemici giurati, e ogni signore è nemico giurato di esattamente $k$ signori.
>
> **5.** Per ciascuno dei tre regni, quali sono gli interi $k \ge 1$ tali che esiste una configurazione $k$-bilanciata?
>
> **6.** Per ciascuno dei tre regni, quali sono gli interi $n \ge 2$ tali che esiste una configurazione di $n$ signori in cui nessun paio di signori è nemico giurato l'uno dell'altro?
>
> **7.** Fisso il numero $n \ge 2$ di signori e, per ciascun signore $s$, un insieme $E_s$ di altri signori. Per ciascuno dei tre regni, determinare per quali assegnazioni $E_s$ esiste una configurazione per cui i nemici giurati di $s$ sono esattamente gli elementi di $E_s$.
>
> **8.** Proporre e esplorare altre direzioni di ricerca; può essere utile, ad esempio, continuare a studiare questi tre regni, o determinare se esistono altri regni con proprietà interessanti rispetto alle precedenti domande.

![[src_tfjm_2021__Q05.png]]


**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


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



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,method_grafi,method_estremalita,method_doppio_conteggio,method_casework,skill_modellizzazione,skill_conteggio_sistematico,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="fr"></div>


*Distribute N gift bags among two TFJM committees joined in a tree of neighbor relations; each move along an edge costs 1; minimize total transfer cost*

> 6. Le facteur n'est pas passé
>
> Chaque année, le comité d'organisation du TFJM$^2$ se renouvelle partiellement. Les bénévoles du comité d'organisation de l'année actuelle reçoivent des sacs TFJM$^2$.
>
> Le comité d'organisation de Louis pour l'année 2020 était composé de $b_1 \geqslant 4$ bénévoles numérotés $L_1$, $L_2$, $L_3$, $\cdots$, $L_{b_1}$. Parmi ces bénévoles figurait Anaïs, qui avait le numéro $L_1$. Le comité d'organisation d'Anaïs pour l'année 2021 est composé de $b_2 \geqslant 4$ bénévoles $A_1$, $A_2$, $A_3$, $\cdots$, $A_{b_2}$. Parmi ces bénévoles figure Louis, qui a le numéro $A_1$. Mis à part Anaïs et Louis, les seuls membres des deux comités sont $L_2 = A_{b_2}$ et $A_2 = L_{b_1}$.
>
> Certains bénévoles sont voisins :
>
> - Anaïs a $b_2$ voisins qui sont les membres de son comité, à savoir $A_1$, $A_2$, $\ldots$, $A_{b_2}$.
> - Louis a $b_1$ voisins qui sont les membres de son comité, à savoir $L_1$, $L_2$, $\ldots$, $L_{b_1}$.
> - Pour $2 < i < b_1$, le bénévole $L_i$ a $3$ voisins qui sont $L_{i-1}$, $L_{i+1}$ et Louis.
> - Pour $2 < i < b_2$, le bénévole $A_i$ a $3$ voisins qui sont $A_{i-1}$, $A_{i+1}$ et Anaïs.
> - Le bénévole $A_2 = L_{b_1}$ a $4$ voisins qui sont $A_3$, $L_{b_1-1}$, Louis et Anaïs.
> - Le bénévole $L_2 = A_{b_2}$ a $4$ voisins qui sont $L_3$, $A_{b_2-1}$, Louis et Anaïs.
>
> Par exemple, si Louis avait $b_1 = 5$ bénévoles dont Anaïs et Anaïs a $b_2 = 4$ bénévoles dont Louis, alors on représente les relations comme sur la figure 7.
>
> Figure 7 – Relations entre bénévoles lorsque $b_1 = 5$ et $b_2 = 4$
>
> Cette année, le facteur a reçu de mauvaises instructions et il y a au total $N$ sacs TFJM$^2$ qui arrivent aux adresses du comité de Louis suivant la répartition :
>
> - chaque membre du comité de Louis, excepté Louis, reçoit $1$ paquet constitué de $j_1$ sacs ;
> - Louis reçoit les $N - j_1 b_1$ sacs restants.
>
> Ils veulent transmettre les sacs au comité d'Anaïs. Anaïs souhaite que tous les bénévoles de son comité aient exactement chacun $1$ paquet de $j_2$ sacs (sauf elle) et elle gardera les $N - b_2 j_2$ sacs restants pour les donner aux participants.
>
> Chaque sac peut être déplacé successivement entre des bénévoles voisins, mais chaque déplacement impose un coût de $1$. Ainsi le coût total est le nombre total de fois où un sac a été déplacé entre deux voisins.
>
> La figure 8 illustre un exemple de choix de transferts avec $j_1 = 6$, $j_2 = 7$, $b_1 = 5$, $b_2 = 4$ et $N = 100$. Les nombres de sacs initiaux sont représentés en orange. Ce choix de transferts consiste à effectuer les transferts de sacs le long des flèches orange, puis le long de la flèche bleu foncé, et enfin de faire un transfert de sacs le long des flèches bleu clair. Le nombre de sacs déplacés à chaque transfert est inscrit à côté de la flèche correspondante. Une fois les transferts effectués, le nombre de sacs de chaque bénévole, indiqué en bleu, est bien celui attendu. Le coût total pour ces transferts vaut :
>
> $$b_1 \times j_1 + N + b_2 \times j_2 = 5 \times 6 + 100 + 4 \times 7 = 158$$
>
> Louis et Anaïs veulent cependant minimiser les coûts et ce choix de transferts ne semble pas être le meilleur. On note $C_{\min}$ le plus petit coût total possible en choisissant les transferts de sacs effectués.
>
> Figure 8 – Répartition des sacs initialement en orange et finalement en bleu
>
> 1. Sur l'exemple de la figure 8, pour $N = 100$, $b_1 = 5$, $b_2 = 4$, $j_1 = 6$, $j_2 = 7$, quel est le plus petit coût total $C_{\min}$ possible ?
>
> On suppose pour l'instant que Louis et Anaïs sont aussi généreux l'un que l'autre et donnent le même nombre de sacs $j$ aux bénévoles de leur comité, de sorte que $j_1 = j_2 = j$.
>
> 2. On suppose dans cette question que le nombre de sacs donnés aux participants est chaque année plus grand que le nombre de sacs donnés aux bénévoles, c'est-à-dire que $N \geqslant 2 \max(b_1 j_1, b_2 j_2)$. Pour quelle(s) valeur(s) de $b_1$, $b_2$ et $N$ peut-on assurer un coût d'exactement $C = N$ ?
>
> 3. On ne suppose plus que $N \geqslant 2 \max(b_1 j_1, b_2 j_2)$. En fonction de $N$, $b_1$, $b_2$ et $j$, quelles sont les valeurs possibles du coût total $C$ ?
>
> 4. En fait, le nombre de sacs distribués aux bénévoles ne change pas d'une année sur l'autre. Louis avait donc donné des paquets de $j_1 = b_2$ sacs à chacun de ses bénévoles et Anaïs souhaite que chacun de ses bénévoles ait $j_2 = b_1$ sacs. Reprendre la question précédente dans ce cadre.
>
> 5. Louis et Anaïs souhaitent dépenser le moins possible et avoir un budget équilibré, de sorte que $C_{\min} = N$ dès que $N \geqslant 2 \max(b_1 j_1, b_2 j_2)$. Pour quelles valeurs de $b_1$, $b_2$, $j_1$, $j_2 \in \mathbb{N}$ est-ce possible ?
>
> 6. L'organisation du TFJM$^2$ crée des liens et il y a en fait $k$ contacts directs supplémentaires possibles entre les bénévoles des deux comités. Pour $N \geqslant 2 \max(b_1 j_1, b_2 j_2)$, en fonction de $b_1$, $b_2$, $j_1$ et $j_2$, entre quels bénévoles est-il le plus judicieux d'établir ces $k$ nouveaux contacts de sorte que $C_{\min}$ soit le plus petit possible ? On pourra commencer par traiter le cas $k = 1$.
>
> 7. Proposer et explorer d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Distribuire N sacchetti regalo tra due comitati TFJM uniti in un albero di relazioni di vicinato; ogni spostamento lungo un arco costa 1; minimizzare il costo totale di trasferimento*

> Ogni anno, il comitato organizzatore di TFJM $^2$ viene parzialmente rinnovato. I volontari del comitato organizzatore dell'anno corrente ricevono i sacchetti TFJM $^2$.
>
> Il comitato organizzatore di Louis per il 2020 era composto da $b_1 \ge 4$ volontari numerati $L_1, L_2, L_3, \cdots, L_{b_1}$. Tra questi volontari c'era Anais, che è il numero $L_1$. Il comitato organizzatore per il 2021 è composto da $b_2 \ge 4$ volontari $A_1, A_2, A_3, \cdots, A_{b_2}$. Tra questi volontari c'è Louis, che è il numero $A_1$. A parte Anais e Louis, gli unici membri appartenenti a entrambi i comitati sono $L_2 = A_{b_2}$ e $A_2 = L_{b_1}$.
>
> Certi volontari sono vicini:
> - Anais ha $b_2$ vicini che sono i membri del suo comitato, vale a dire $A_1, A_2, \ldots, A_{b_2}$.
> - Louis ha $b_1$ vicini che sono i membri del suo comitato, vale a dire $L_1, L_2, \ldots, L_{b_1}$.
> - Per $2 < i < b_1$, il volontario $L_i$ ha $3$ vicini: $L_{i-1}$, $L_{i+1}$ e Louis.
> - Per $2 < i < b_2$, il volontario $A_i$ ha $3$ vicini: $A_{i-1}$, $A_{i+1}$ e Anais.
> - Il volontario $A_2 = L_{b_1}$ ha $4$ vicini: $A_3$, $A_1$, $L_{b_1-1}$ e Louis.
> - Il volontario $A_{b_2} = L_2$ ha $4$ vicini: $L_3$, $L_1$, $A_{b_2-1}$ e Anais.
>
> Ad esempio, se Louis avesse $b_1=5$ volontari inclusa Anais, e Anais avesse $b_2=4$ volontari incluso Louis, allora le relazioni sono rappresentate come nella Figura 7.
>
> Quest'anno, il postino ha ricevuto istruzioni errate e un totale di $N$ sacchetti TFJM $^2$ arrivano agli indirizzi del comitato di Louis secondo la seguente distribuzione:
> - ogni membro del comitato di Louis, tranne Louis, riceve $1$ pacco composto da $j_1$ sacchetti;
> - Louis riceve i restanti $N - j_1 b_1$ sacchetti.
>
> Vogliono trasmettere i sacchetti al comitato di Anais. Anais desidera che tutti i volontari del suo comitato abbiano ciascuno esattamente $1$ pacco di $j_2$ sacchetti (tranne lei stessa), e conserverà i restanti $N - b_2 j_2$ sacchetti per i partecipanti.
>
> Ogni sacchetto può essere spostato successivamente tra volontari vicini, ma ogni spostamento comporta un costo di $1$. Così il costo totale è il numero totale di volte in cui un sacchetto è stato spostato tra due vicini.
>
> La Figura 8 illustra un esempio di scelta di trasferimenti con $j_1=6$, $j_2=7$, $b_1=5$ e $b_2=4$. I numeri di sacchetti iniziali sono rappresentati in arancione. Questa scelta di trasferimenti consiste nell'eseguire i trasferimenti di sacchetti lungo le frecce arancioni, poi lungo la freccia blu scuro, e infine effettuare un trasferimento di sacchetti lungo le frecce azzurre. Il numero di sacchetti spostati a ogni trasferimento è scritto accanto alla freccia corrispondente. Una volta effettuati i trasferimenti, il numero di sacchetti di ciascun volontario, indicato in blu, è effettivamente quello atteso. Il costo totale per questi trasferimenti è $b_1 \times j_1 + N + b_2 \times j_2 = 5\times 6 + 100 + 4\times 7 = 158$.
>
> Louis e Anais tuttavia vogliono minimizzare i costi e questa scelta di trasferimenti non sembra essere la migliore. Scriviamo $C_{\min}$ per il minimo costo totale possibile scegliendo i trasferimenti di sacchetti effettuati.
>
> **1.** Nell'esempio della Figura 8, per $N=100$, $b_1=5$, $b_2=4$, $j_1=6$, $j_2=7$, qual è il minimo costo totale possibile $C_{\min}$?
>
> Per il momento, si supponga che Louis e Anais siano altrettanto generosi l'uno con l'altro e diano lo stesso numero di sacchetti $j$ ai volontari dei loro comitati, in modo che $j_1 = j_2 = j$.
>
> **2.** Si supponga in questa domanda che il numero di sacchetti dati ai partecipanti sia ogni volta zero, cioè $N \ge 2\max(b_1 j_1, b_2 j_2)$. Per quali valori di $b_1$, $b_2$ e $N$ si può garantire un costo di esattamente $C=N$?
>
> **3.** Non si supponga più che $N \ge 2\max(b_1 j_1, b_2 j_2)$. In termini di $N$, $b_1$, $b_2$ e $j$, quali sono i valori possibili del costo totale $C$?
>
> **4.** In realtà, il numero di sacchetti distribuiti ai volontari non cambia da un anno all'altro. Louis aveva dunque dato pacchi di $j_1 = b_2$ sacchetti a ciascuno dei suoi volontari, e Anais desidera che ciascuno dei suoi volontari abbia $j_2 = b_1$ sacchetti. Si riprenda la domanda precedente in questo quadro.
>
> **5.** Louis e Anais desiderano spendere il meno possibile e avere un bilancio equilibrato, in modo che $C_{\min} = N$ mentre $N \ge 2\max(b_1 j_1, b_2 j_2)$. Per quali valori di $C_{\min}$ è possibile?
>
> **6.** L'organizzazione di TFJM $^2$ crea legami e ci sono in realtà $k$ contatti diretti aggiuntivi possibili tra i volontari dei due comitati. Per $N \ge 2\max(b_1 j_1, b_2 j_2)$, in termini di $b_1$, $b_2$, $j_1$ e $j_2$, tra quali volontari è più ragionevole stabilire questi $k$ nuovi contatti in modo che $C_{\min}$ sia il più piccolo possibile? Si può iniziare trattando il caso $k=1$.
>
> **7.** Proporre ed esplorare altre direzioni di ricerca.

![[src_tfjm_2021__Q06.png]]


**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_estremalita|Principio di estremalita]], [[method_doppio_conteggio|Doppio conteggio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


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



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_combinatoria,topic_logica,method_grafi,method_casework,method_estremalita,method_induzione,skill_astrazione,skill_casework_accurato,skill_ragionamento_geometrico,skill_riconoscimento_pattern,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Frog/water-lily combinatorial game on a graph: Antoine protects a lily and Benoit sinks one each turn (infinitely); Antoine wins if the frog can reach infinitely many surviving lilies; analyze who wins on various ponds*

> 7. Vive les grenouilles libres !
>
> Une grenouille saute de nénufar en nénufar sur un étang infini. Antoine et Benoît jouent sur cet étang.
>
> On représente les nénufars par des points bleus, et la grenouille peut sauter d'un nénufar à un autre si les deux nénufars sont reliés par un trait.
>
> Figure 9 – Un exemple d'étang : une droite
>
> Les règles du jeu sont les suivantes. Antoine commence en protégeant un nénufar. Puis Benoît coule un nénufar différent de celui protégé par Antoine. Ensuite Antoine protège un second nénufar qui n'a pas été déjà coulé, puis Benoît coule un nouveau nénufar qui n'est pas l'un de ceux qui ont été protégés par Antoine, et ainsi de suite.
>
> Antoine et Benoît jouent à tour de rôle une infinité de fois, Antoine durant les tours $1, 3, 5, \ldots$ et Benoît durant les tours $2, 4, 6, \ldots$. Une fois que chacun a joué une infinité de fois, une infinité de nénufars ont été coulés, une infinité ont été protégés et il peut rester zéro, un, plusieurs ou une infinité de nénufars qui n'ont pas été touchés.
>
> Antoine gagne si il peut déposer la grenouille sur un nénufar non coulé depuis lequel la grenouille peut atteindre une infinité d'autres nénufars en sautant uniquement entre des nénufars voisins qui n'ont pas été coulés. Sinon Benoît gagne.
>
> Figure 10 – Illustration de l'état d'un étang après une partie.
>
> On appelle stratégie pour un joueur une règle qui à chaque configuration des nénufars associe un coup à jouer valide. On dit qu'une stratégie est gagnante pour un joueur si cette stratégie permet de gagner quels que soient les coups de l'autre joueur.
>
> Un exemple de partie est illustré par la figure 10, où les nénufars dans l'étang ci-dessus sont numérotés par les nombres entiers naturels : les nénufars qu'Antoine a protégés sont en blanc, les nénufars que Benoît à coulés sont en noir, et ceux que ni l'un ni l'autre n'a touchés sont en bleu. Dans cette partie Antoine a décidé de protéger le nénufar correspondant à la plus petite puissance de $2$ possible, et Benoît a décidé de couler le premier nénufar qui est à droite de tous les nénufars précédemment coulés ou protégés. Antoine a donc protégé le nénufar $1$, puis Benoît a coulé le nénufar $2$, puis, comme $1$ et $2$ avaient déjà été touchés, Antoine a protégé le nénufar $4$, puis Benoît a coulé le $5$, et ainsi de suite.
>
> C'est Benoît qui gagne cette partie car où que soit placée la grenouille, elle ne peut atteindre qu'un nombre fini de nénufars. En revanche si l'étang était une droite comme illustré par la figure 9 et que la partie s'était déroulée de même, alors ce serait Antoine qui gagnerait car il pourrait déposer la grenouille à gauche de tous les nénufars détruits, et la grenouille pourrait atteindre une infinité de nénufars.
>
> 1. Déterminer, en fonction de $k$, si Antoine ou Benoît possède une stratégie gagnante dans l'étang à $k$ rangées illustré par la figure 11. On pourra commencer par étudier les cas $k = 1$ et $k = 2$.
>
> Figure 11 – Illustration de l'étang à $k$ rangées.
>
> 2. Déterminer pour chacun des étangs illustrés figure 12 si Antoine ou Benoît possède une stratégie gagnante.
>
> Figure 12 – Illustration de 4 étangs possibles
>
> 3. Maintenant on suppose qu'une fois qu'Antoine et Benoît ont joué une infinité de fois, tous les nénufars qui n'ont pas été protégés par Antoine sont coulés. Dans l'exemple présenté au début sur la droite complète, Antoine a donc quand même perdu car les nénufars protégés sont tous isolés. Reprendre les questions 1 et 2 dans ce cadre.
>
> 4. Antoine et Benoît décident de changer les règles du jeu : Antoine ne place plus la grenouille après la partie, mais avant son premier tour. On suppose que le nénufar correspondant est automatiquement protégé.
>
> a) Reprendre les questions 1 et 2 avec cette nouvelle règle en étudiant toutes les positions initiales de la grenouille possibles pour chaque étang.
>
> b) Reprendre la question 3 de la même façon.
>
> 5. Existe-t-il un étang tel qu'Antoine a une stratégie gagnante pour la règle de la question 2 mais que Benoît a une stratégie gagnante pour la règle de la question 3 ? Et l'inverse ? Plus généralement, comparer entre elles les règles des questions 2, 3, 4.a et 4.b : pour chaque sous-ensemble de ces quatre règles, existe-t-il un étang tel qu'Antoine a une stratégie gagnante pour chaque règle du sous-ensemble, mais Benoît possède une stratégie gagnante pour chaque autre règle ?
>
> 6. Au lieu de jouer tour à tour, Antoine joue maintenant $A$ coups, puis Benoît joue $B$ coups, puis Antoine joue à nouveau $A$ coups, $\ldots$ Reprendre les questions 1 et 2 avec cette nouvelle règle pour différentes valeurs de $A$ et $B$.
>
> 7. Étudier d'autres étangs et trouver des critères et des résultats généraux pour déterminer la personne ayant la stratégie gagnante.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_induzione|Induzione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Gioco combinatorio rana/giglio su un grafo: Antoine protegge un giglio e Benoit ne affonda uno a turno (all’infinito); Antoine vince se la rana può raggiungere infiniti gigli sopravvissuti; analizzare chi vince su vari stagni*

> Lunga vita alle rane libere!
>
> Una rana salta da un giglio a un altro su uno stagno infinito. Antoine e Benoit giocano su questo stagno.
>
> I gigli sono rappresentati da punti blu; la rana può saltare da un giglio a un altro giglio collegato ad esso da una linea.
>
> Le regole del gioco sono le seguenti. Antoine inizia proteggendo un giglio. Poi Benoit affonda un giglio diverso da quello protetto da Antoine. Poi Antoine protegge un secondo giglio che non sia già stato affondato, poi Benoit affonda un nuovo giglio che non sia uno di quelli protetti da Antoine, e così via.
>
> Antoine e Benoit giocano a turno un numero infinito di volte, Antoine durante i turni $1,3,5,\ldots$ e Benoit durante i turni $2,4,6,\ldots$ Una volta che ciascuno ha giocato un numero infinito di volte, un numero infinito di gigli è stato affondato, un numero infinito è stato protetto, e possono rimanere zero, uno, diversi o un numero infinito di gigli che non sono stati affondati.
>
> Antoine vince se può posizionare la rana su un giglio non affondato da cui la rana può raggiungere un numero infinito di altri gigli saltando solo su gigli vicini che non sono stati affondati. Altrimenti Benoit vince.
>
> Una strategia per un giocatore è una regola che, per ogni configurazione del gioco, associa un movimento da giocare. Si dice che un giocatore abbia una strategia vincente se può, giocando questa strategia, vincere il gioco qualunque sia il modo in cui l’altro giocatore gioca.
>
> Un esempio di gioco è illustrato dalla Figura 9, dove i gigli di uno stesso colore sono uniti da una linea. Su una retta completa, è Benoit a vincere questo gioco perché, qualunque sia il giglio su cui la rana è posizionata, può raggiungere solo un numero finito di gigli, poiché i gigli protetti sono tutti isolati.
>
> **1.** Determinare, in funzione di $k$, se Antoine o Benoit ha una strategia vincente nello stagno con $k$ righe illustrato dalla Figura 11. Si può iniziare studiando i casi $k=1$ e $k=2$.
>
> **2.** Determinare, per ciascuno degli stagni illustrati nella Figura 12, se Antoine o Benoit ha una strategia vincente.
>
> **3.** Ora supponiamo che, una volta che Antoine e Benoit abbiano giocato un numero infinito di volte, tutti i gigli che non sono stati protetti da Antoine siano affondati. Nell’esempio presentato all’inizio sulla retta completa, Antoine ha quindi comunque perso poiché i gigli protetti sono tutti isolati. Si riprendano le domande (1) e (2) in questo quadro.
>
> **4.** Antoine e Benoit decidono di cambiare le regole del gioco: Antoine non posiziona più la rana dopo il gioco, ma prima del suo primo turno. Supponiamo che il giglio corrispondente sia automaticamente protetto.
> - (a) Si riprendano le domande (1) e (2) con questa nuova regola studiando tutte le possibili posizioni iniziali della rana per ogni stagno.
> - (b) Si riprenda la domanda (3) nello stesso modo.
>
> **5.** Esiste uno stagno tale che Antoine abbia una strategia vincente per la regola della domanda (2) ma Benoit abbia una strategia vincente per la regola della domanda (3)? E l’inverso? Più in generale, confrontare tra loro le regole delle domande (2), (3), (4a) e (4b): per ogni sottoinsieme di queste quattro regole, esiste uno stagno tale che Antoine abbia una strategia vincente per ciascuna regola del sottoinsieme, ma Benoit abbia una strategia vincente per ciascuna altra regola?
>
> **6.** Invece di giocare a turno, Antoine ora gioca $A$ mosse, poi Benoit gioca $B$ mosse, poi Antoine di nuovo $A$ mosse, e così via. Si riprendano le domande (1) e (2) con questa nuova regola per diversi valori di $A$ e $B$.
>
> **7.** Studiare altri stagni e trovare criteri e risultati generali per determinare la persona che ha la strategia vincente.

![[src_tfjm_2021__Q07.png]]


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_induzione|Induzione]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


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
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_logica,method_grafi,method_casework,method_induzione,method_ricorsione,skill_astrazione,skill_casework_accurato,skill_modellizzazione,skill_lettura_attenta,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="fr"></div>


*Rigged reality TV: participants have preference rankings determining sequential eliminations; an objective (X,Y) means Y wins when X is eliminated first; determine when a list of objectives is realizable, with cycle structures*

> 8. Télé truquée
>
> Denis est directeur technique d'une émission de télé-réalité truquée.
>
> L'émission se déroule comme suit : $n \ge 3$ participants s'affrontent dans une épreuve sportive, et le perdant est éliminé. Ce premier joueur éliminé choisit un joueur qui est lui aussi éliminé, qui choisit lui même un joueur à éliminer et ce jusqu'à ce qu'il n'en reste plus qu'un. Ce joueur est alors déclaré gagnant.
>
> Ce que les spectateurs ne savent pas, c'est que Denis prépare avant chaque émission un tableau de préférences : il distribue avant l'émission à chaque participant un classement des autres participants. Lorsqu'un participant est éliminé, il décide toujours d'éliminer le participant parmi ceux qui restent le moins bien classé dans sa liste.
>
> | Nom | Riri | Fifi | Loulou |
> | --- | --- | --- | --- |
> | Participant classé $1^{\mathrm{er}}$ | Fifi | Loulou | Riri |
> | Participant classé $2^{\mathrm{ème}}$ | Loulou | Riri | Fifi |
>
> Figure 13 – Un exemple de tableau de préférences avec 3 participants.
>
> Par exemple, avec le tableau de préférences illustré Figure 13, si Loulou est éliminé à l'épreuve sportive, alors Fifi est éliminé ensuite, et Riri gagne.
>
> La direction ne peut pas prévoir qui perdra l'épreuve sportive, et qui sera par conséquent le premier éliminé.
>
> Le directeur artistique envoie donc à Denis une liste d'objectifs. Un objectif est une paire $(X, Y)$ de participants. On dit qu'un objectif est satisfait si le participant $Y$ gagne l'émission lorsque le participant $X$ perd l'épreuve sportive. La direction a couvert tous les cas, de sorte que pour chaque participant $X$ il existe un unique $Y$ tel que $(X, Y)$ soit sur la liste d'objectifs.
>
> Denis doit trouver un tableau de préférences tel que tous les objectifs de la liste sont satisfaits. Si un tel tableau de préférences existe, alors on dit que la liste d'objectifs est réalisable.
>
> Figure 14 – Illustration d'une liste d'objectifs avec 3 participants qui forme un 3-cycle.
>
> Par exemple, le tableau de préférences présenté en Figure 13 satisfait tous les objectifs de la liste d'objectifs présentée en Figure 14.
>
> 1. Pour une émission comportant seulement $n = 3$ candidats, quels sont les listes d'objectifs réalisables ?
>
> Pour une liste d'objectifs donnée, on dit qu'un ensemble de $k \ge 2$ participants forme un $k$-cycle s'ils peuvent être numérotés $P_1$, $P_2$, $\cdots$, $P_k$ de sorte que l'objectif de $P_1$ est $P_2$, celui de $P_2$ est $P_3$, $\ldots$ et celui de $P_k$ est $P_1$.
>
> 2. On suppose que les $n$ participants forment un $n$-cycle pour la liste d'objectifs de Denis. La liste d'objectifs est-elle réalisable ?
>
> 3. 4. Dans cette question, Denis a une liste d'objectifs pour $n$ participants, mais il a le droit d'ajouter jusqu'à $N$ autres participants et choisir leurs objectifs. Est-il toujours possible pour Denis de trouver un tableau de préférences pour les $n + N$ participants qui réalise la liste d'objectifs, si Denis peut choisir $N$ ? Et s'il se limite à $N \le n$ ? À $N \le 1$ ? À $N = 0$ ?
>
> 5. On suppose que, parmi les $n = a + b$ participants, $a$ forment un $a$-cycle et $b$ un $b$-cycle pour la liste d'objectifs de Denis. La liste d'objectifs est-elle réalisable ? On pourra commencer par traiter les cas $a = 2$ et $a = b$.
>
> 6. À quelle condition une liste quelconque d'objectifs est-elle réalisable ?
>
> 7. Après des années à présenter l'émission, Denis a pris sa retraite, de sorte que le tableau de préférence reste toujours le même. L'émission a continué avec les mêmes participants pendant plusieurs années, de sorte que chaque candidat a perdu l'épreuve sportive au moins une fois. Alice, qui connait les arcanes de l'émission et a vu tous les replays, essaie d'en déduire le tableau de préférences. En fonction de $n$, existe-t-il des tableaux de préférences qu'elle peut complètement déterminer ? Si oui, pour lesquels est-ce possible ?
>
> 8. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_casework|Casework]], [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Televisione truccata: le preferenze determinano le eliminazioni sequenziali; un obiettivo (X,Y) significa che Y vince quando X viene eliminato per primo; si chiede quando una lista di obiettivi è realizzabile, con strutture cicliche.*

> **Televisione truccata.**
>
> Denis è il direttore tecnico di un reality show truccato.
>
> Lo show si svolge come segue: $n \ge 3$ partecipanti competono in un evento sportivo, e il perdente viene eliminato. Il primo giocatore eliminato sceglie un giocatore che è anch'egli eliminato, il quale a sua volta sceglie un giocatore da eliminare, e così via finché ne resta uno solo. Quel giocatore viene allora dichiarato vincitore.
>
> Ciò che gli spettatori non sanno è che Denis prepara prima di ogni show una tabella di preferenze: distribuisce prima dello show a ciascun partecipante una classifica degli altri partecipanti. Quando un partecipante viene eliminato, decide sempre di eliminare il partecipante, tra quelli rimasti, che è classificato più in basso nella sua tabella.
>
> Ad esempio, con la tabella di preferenze illustrata nella Figura 13, se Loulou viene eliminato nell'evento sportivo, allora Fifi viene eliminato subito dopo, e Riri vince.
>
> La direzione non può prevedere chi perderà l'evento sportivo, e chi di conseguenza sarà il primo eliminato.
>
> Il direttore artistico invia quindi a Denis una lista di obiettivi. Un obiettivo è una coppia $(X,Y)$ di partecipanti. Si dice che un obiettivo è soddisfatto se il partecipante $Y$ vince lo show quando il partecipante $X$ è il primo eliminato. Un obiettivo $(X,Y)$ è detto realizzabile se esiste una tabella di preferenze tale che $(X,Y)$ sia un obiettivo soddisfatto.
>
> Denis deve trovare una tabella di preferenze tale che tutti gli obiettivi della lista siano soddisfatti. Se esiste una tale tabella di preferenze, allora si dice che la lista di obiettivi è realizzabile.
>
> Ad esempio, la tabella di preferenze presentata nella Figura 13 soddisfa tutti gli obiettivi della lista di obiettivi presentata nella Figura 14.
>
> **1.** Per uno show composto da soli $n=3$ candidati, quali sono le liste di obiettivi realizzabili?
>
> Per una data lista di obiettivi, si dice che un insieme di $k \ge 2$ partecipanti forma un $k$-ciclo se i partecipanti possono essere numerati $P_1, P_2, \cdots, P_k$ in modo che l'obiettivo di $P_1$ sia $P_2$, quello di $P_2$ sia $P_3$, \ldots, e quello di $P_k$ sia $P_1$.
>
> **2.** Supponiamo che gli $n$ partecipanti formino un $n$-ciclo per la lista di obiettivi di Denis. La lista di obiettivi è realizzabile?
>
> **3.** e **4.** In questa domanda, Denis ha una lista di obiettivi per $n$ partecipanti ed ha il diritto di aggiungere fino a $N$ altri partecipanti e di scegliere i loro obiettivi. È sempre possibile per Denis trovare una tabella di preferenze per gli $n+N$ partecipanti che realizzi la lista di obiettivi, se Denis può scegliere $N$? E se si limita a $N \le n$? A $N \le 1$? A $N=0$?
>
> **5.** Supponiamo che, tra gli $n=a+b$ partecipanti, $a$ formino un $a$-ciclo e $b$ formino un $b$-ciclo per la lista di obiettivi di Denis. La lista di obiettivi è realizzabile? Si può iniziare trattando i casi $a=2$ e $a=b$.
>
> **6.** In quale condizione una lista arbitraria di obiettivi è realizzabile? Si può iniziare trattando $a=2$ e $a=b$.
>
> **7.** Dopo anni di presentazione dello show, Denis è andato in pensione, in modo che la tabella di preferenze resti sempre la stessa. Lo show è continuato con gli stessi partecipanti per diversi anni, in modo che ciascun candidato abbia perso l'evento sportivo almeno una volta. Alice, che conosce gli arcani dello show e ha visto tutte le repliche, cerca di dedurre la tabella di preferenze. In termini di $n$, esistono tabelle di preferenze che lei può determinare completamente? Se sì, per quali è possibile?
>
> **8.** Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2021__Q08.png]]


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_casework|Analisi per casi]], [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


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
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
