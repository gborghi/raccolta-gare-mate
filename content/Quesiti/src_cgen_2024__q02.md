---
title: Concours Général des Lycées 2024 — Matematica — Quesito 2
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2024__Q02
parent: src_cgen_2024
competition: Concours Général des Lycées 2024 — Matematica
family: concours_generale
year: '2024'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  Probability game with opaque boxes hiding candies; Monty-Hall-style choices,
  optimal strategies for Sophie and Germain over n-1 rounds
qa_score: '2'
topics:
  - topic_probabilita
  - topic_combinatoria
methods:
  - method_casework
  - method_conteggio
  - method_ricorsione
skills:
  - skill_modellizzazione
  - skill_casework_accurato
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2024
  - livello/Concours-Général
  - topic/probabilita
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Probability game with opaque boxes hiding candies; Monty-Hall-style choices, optimal strategies for Sophie and Germain over n-1 rounds*

> Problem 2: Hidden candies.
> 
> Part 1: Sophie and Germain test three boxes.
> 
> Germain has three opaque boxes. He proposes a game to Sophie that could allow her to win a packet of candies.
> 
> 1. At first, after having hidden a packet of candies in one of the three boxes, he leaves the three boxes closed in front of Sophie, who chooses one of these boxes at random to try to win the eventual content. As Sophie does not know which box hides the candies, she chooses at random. With what probability does Sophie manage to choose the box containing the packet of candies?
> 
> 2. In a second time, after having hidden a new packet of candies in one of the three boxes, Germain makes Sophie play as follows:
> - At the first step, Sophie chooses one of the three boxes provided; she designates it to Germain but changes nothing.
> - At the second step, Germain eliminates one of the boxes that Sophie did not choose, then leaves Sophie the possibility of modifying her choice.
> Once this second step is completed, Sophie opens the box she chose and discovers whether she has won the packet of candies.
> 
> a. With what probability has Sophie chosen the winning box at the first step of the game?
> b. Does Sophie have interest in conserving her initial choice or in modifying her choice?
> c. What is the better strategy for Sophie: conserve her initial choice, or modify it?
> 
> In all the rest of this problem, one considers an integer $n$ at least equal to $3$. Germain has $n$ opaque boxes, numbered from $1$ to $n$. He hides one packet of candies in one of these boxes; the $n-1$ other boxes are left empty. Sophie and Germain will now play following several different rules. The goal for Sophie is, in all cases, to choose a box maximizing the probability of winning the packet of candies.
> 
> Part 2: A strategy for Sophie.
> 
> 3. After Germain has hidden a packet of candies in one of the boxes, in a first time he leaves the $n$ boxes closed in front of Sophie. The game takes place in two rounds:
> - At the first round of the game, Sophie chooses a box, she designates it to Germain but does not change.
> - At the second round, Germain eliminates $n-2$ empty boxes among the $n-1$ boxes that Sophie did not choose, then proposes to Sophie one of the two remaining boxes: the box she designated initially, or the box that Germain did not eliminate.
> Once this second round is completed, Sophie opens the box she chose and discovers whether she has won the packet of candies.
> 
> a. With what probability has Sophie chosen the winning box at the first round of the game?
> b. The second time, does Sophie have interest in conserving her initial choice or in modifying her choice?
> 
> For the situation, Sophie and Germain invent a second game which now takes place over $n-1$ rounds. Before the start of the game, Germain hides a packet of candies in one of the boxes. At the first round: Sophie chooses one of the $n$ boxes, she designates it to Germain but changes nothing. At each following round between $2$ and $n-1$:
> - At the $\ell$-th round of the game: Germain eliminates, as he pleases, one box among the empty boxes other than the one Sophie chose at the preceding round; then he leaves Sophie the possibility of modifying her choice.
> Once the $n-1$ rounds are completed, Sophie opens the box she chose at the last round and discovers whether she has won the packet of candies. From now on, and until the end of this problem, Sophie and Germain play this game.
> 
> a. If Sophie conserves her initial choice during the $n-1$ rounds, what probability does she have of winning?
> b. How can she proceed to ensure she wins with probability at least $(n-1)/n$?
> 
> Part 3: A strategy for Germain.
> 
> Let $n \ge 3$ be an integer. Germain and Sophie continue to play this same game over $n-1$ rounds. Germain wishes to prevent Sophie from winning with a probability strictly greater than $(n-1)/n$. For this, he adopts the following strategy: before the start of the game, Germain selects at random the box in which he hides the packet of candies.
> 
> 4. Sophie does not know which is the box in which the packet of candies is hidden. For a round $\ell$ with $1 \le \ell \le n-1$, let $g_\ell$ be the number associated to the box Germain eliminates at round $\ell$. (Let $z_1, z_2, \ldots, z_{\ell-1}$ denote Sophie's successive designations and $g_2, \ldots, g_\ell$ the eliminated boxes.) Let $p_\ell(b)$ be the probability, knowing the numbers $z_1, z_2, \ldots, z_{\ell-1}$ and $g_2, \ldots, g_\ell$, that the box number $b$ contains the packet of candies.
> 
> 5. Give, for every integer $b$ such that $1 \le b \le n$, the probability $p_1(b)$.
> 
> 6. Let $\ell$ be an integer such that $2 \le \ell \le n-1$, and let $b$ be a box number distinct from $g_2, g_3, \ldots, g_\ell$. Demonstrate that
> $$\frac{p_\ell(z_{\ell-1})}{p_\ell(b)} = \frac{n-\ell}{n+1-\ell} \cdot \frac{p_{\ell-1}(z_{\ell-1})}{p_{\ell-1}(b)}.$$
> 
> 7. Let $\ell$ be an integer such that $2 \le \ell \le n-1$, and let $b$ and $c$ be two box numbers distinct from $g_2, g_3, \ldots, g_\ell$. Demonstrate that
> $$p_\ell(b) = \frac{n-\ell}{n-1}\, p_\ell(c).$$
> 
> 8. Deduce from this that, if Germain applies the strategy presented above, Sophie can never ensure winning with a probability strictly greater than $(n-1)/n$.
> 
> Part 4: A strategy for Sophie and Germain.
> 
> Evariste, a friend of Sophie and Germain, decides to give them a packet of candies if they play one last game (always under the same conditions) and if, at the end of this game, Sophie finds the right box. Germain has the obligation to place the packet in a box at random, without having the right to communicate to Sophie the box where he has placed the packet. Before beginning this ultimate game, can Sophie and Germain agree on a common strategy?
> 
> 9. For which values of $n \ge 3$ can Sophie and Germain devise a common strategy that ensures Sophie finds the box with the packet?

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1c1cSoVwqMLgL0IF4BNA5JRS_DbCgZRxy/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


Gioco di probabilità con scatole opache che nascondono dolci; scelte in stile Monty-Hall, strategie ottimali per Sophie e Germain su n-1 round*

> Il problema 2: dolci nascosti.
> 
> Parte 1: Sophie e Germain testano tre scatole.
> 
> Germain ha tre scatole opache. Propone a Sophie un gioco che potrebbe permetterle di vincere un pacchetto di caramelle.
> 
> 1. All'inizio, dopo aver nascosto un pacchetto di caramelle in una delle tre scatole, lascia le tre scatole chiuse davanti a Sophie, che sceglie una di queste scatole a caso per cercare di vincere il contenuto finale. Poiché Sophie non sa quale scatola nasconde i dolci, sceglie a caso. Con quale probabilità Sophie riesce a scegliere la scatola contenente il pacchetto di caramelle?
> 
> 2. In una seconda volta, dopo aver nascosto un nuovo pacchetto di caramelle in una delle tre scatole, Germain fa giocare Sophie come segue: - Al primo passo, Sophie sceglie una delle tre scatole fornite; la designa a Germain ma non cambia nulla. Al secondo passo, Germain elimina una delle scatole che Sophie non ha scelto, lasciando poi a Sophie la possibilità di modificare la sua scelta. Una volta completato questo secondo passo, Sophie apre la scatola che ha scelto e scopre se ha vinto il pacchetto di caramelle.
> 
> a. Con quale probabilità Sophie ha scelto la scatola vincente al primo passo della partita? b. Sophie ha interesse a conservare la sua scelta iniziale o a modificare la sua scelta? c. Qual e' la strategia migliore per Sophie: conservare la sua scelta iniziale, o modificarla?
> 
> In tutto il resto di questo problema, si considera un intero $n$ almeno uguale a $3$. Germain ha scatole opache $n$, numerate da $1$ a $n$. Si nasconde un pacchetto di caramelle in una di queste scatole; le altre scatole $n-1$ sono lasciate vuote. Sophie e Germain giocheranno secondo diverse regole. L'obiettivo di Sophie è, in tutti i casi, scegliere una scatola che massimi la probabilità di vincere il pacchetto di caramelle.
> 
> Parte 2: Una strategia per Sophie.
> 
> 3. Dopo che Germain ha nascosto un pacchetto di caramelle in una delle scatole, per la prima volta lascia le scatole chiuse davanti a Sophie. La partita si svolge in due round: - Al primo round della partita, Sophie sceglie una scatola, la designa a Germain ma non cambia. - Al secondo round, Germain elimina le scatole vuote $n-2$ tra le scatole $n-1$ che Sophie non ha scelto, poi propone a Sophie una delle due scatole rimanenti: la scatola che lei ha designato inizialmente, o la scatola che Germain non ha eliminato. Una volta completato questo secondo round, Sophie apre la scatola che ha scelto e scopre se ha vinto il pacchetto di caramelle.
> 
> a. Con quale probabilità Sophie ha scelto la scatola vincente al primo round della partita? b. La seconda volta, Sophie ha interesse a conservare la sua scelta iniziale o a modificare la sua scelta?
> 
> Per la situazione, Sophie e Germain inventano un secondo gioco che si svolge ora su round $n-1$. Prima dell'inizio della partita, Germain nasconde un pacchetto di caramelle in una delle scatole. Al primo round: Sophie sceglie una delle scatole $n$, la designa a Germain ma non cambia nulla. A ogni round successivo tra $2$ e $n-1$: - Al $\ell$-th round della partita: Germain elimina, a suo piacimento, una scatola tra le scatole vuote diverse da quella scelta da Sophie al round precedente; poi lascia a Sophie la possibilità di modificare la sua scelta. Una volta completati i round $n-1$, Sophie apre la scatola che ha scelto nell'ultimo round e scopre se ha vinto il pacchetto di caramelle. D'ora in poi, e fino alla fine di questo problema, Sophie e Germain giocano a questo gioco.
> 
> a. Se Sophie conserva la sua scelta iniziale durante i round, che probabilità ha di vincere? b. Come può procedere per assicurarsi di vincere con probabilità almeno $(n-1)/n$?
> 
> Parte 3: Una strategia per Germain.
> 
> $n \ge 3$ sia un numero intero. Germain e Sophie continuano a giocare la stessa partita durante i round MSK1/. Germain vuole impedire a Sophie di vincere con una probabilità strettamente superiore a $(n-1)/n$. Per questo, adotta la seguente strategia: prima dell'inizio del gioco, Germain seleziona a caso la scatola in cui nasconde il pacchetto di caramelle.
> 
> 4. Sophie non sa in quale scatola è nascosto il pacchetto di caramelle. Per un round $\ell$ con $1 \le \ell \le n-1$, $g_\ell$ deve essere il numero associato alla casella che Germain elimina al round $\ell$. (Signare $z_1, z_2, \ldots, z_{\ell-1}$ le designazioni successive di Sophie e $g_2, \ldots, g_\ell$ le scatole eliminate.) $p_\ell(b)$ sia la probabilità, conoscendo i numeri $z_1, z_2, \ldots, z_{\ell-1}$ e $g_2, \ldots, g_\ell$, che il numero di casella $b$ contiene il pacchetto di caramelle.
> 
> 5. Date, per ogni numero intero $b$ tale da $1 \le b \le n$, la probabilità $p_1(b)$.
> 
> 6. $\ell$ sia un numero intero tale che $2 \le \ell \le n-1$, e $b$ sia un numero di casella distinto da $g_2, g_3, \ldots, g_\ell$. Dimostrare che $$\frac{p_\ell(z_{\ell-1})}{p_\ell(b)} = \frac{n-\ell}{n+1-\ell} \cdot \frac{p_{\ell-1}(z_{\ell-1})}{p_{\ell-1}(b)}.$$
> 
> 7. $\ell$ sia un numero intero tale che $2 \le \ell \le n-1$, e $b$ e $c$ siano due numeri di casella distinti da $g_2, g_3, \ldots, g_\ell$. Dimostrare che $$p_\ell(b) = \frac{n-\ell}{n-1}\, p_\ell(c).$$
> 
> 8. Da ciò si deduce che, se Germain applica la strategia sopra presentata, Sophie non può mai garantire la vittoria con una probabilità strettamente superiore a $(n-1)/n$.
> 
> Parte 4: Una strategia per Sophie e Germain.
> 
> Evariste, amica di Sophie e Germain, decide di dar loro un pacchetto di caramelle se giocano un'ultima partita (sempre alle stesse condizioni) e se, alla fine di questa partita, Sophie trova la scatola giusta. Germain ha l'obbligo di mettere il pacchetto in una scatola a caso, senza avere il diritto di comunicare a Sophie la scatola in cui ha messo il pacchetto. Prima di iniziare questo gioco finale, Sophie e Germain possono concordare una strategia comune?
> 
> 9. Per quali valori di $n \ge 3$ possono Sophie e Germain ideare una strategia comune che assicuri che Sophie trovi la scatola con il pacchetto?

[[src_cgen_2024__Q02]]
