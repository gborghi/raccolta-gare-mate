---
title: Concours Général des Lycées 2022 — Matematica — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2022__Q03
parent: src_cgen_2022
competition: Concours Général des Lycées 2022 — Matematica
family: concours_generale
year: '2022'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Probabilistic team tournament: a rigged-coin duel between two players, a
  regular tournament, the team elimination tournament with win probabilities
  a_i/(a_i+b_j), and proof via tableau transformations that A's winning
  probability is independent of player order
qa_score: '2'
topics:
  - topic_probabilita
  - topic_combinatoria
  - topic_algebra
methods:
  - method_ricorsione
  - method_casework
  - method_conteggio
  - method_simmetria
  - method_bigezione
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_manipolazione_algebrica
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2022
  - livello/Concours-Général
  - topic/probabilita
  - topic/combinatoria
  - topic/algebra
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Probabilistic team tournament: a rigged-coin duel between two players, a regular tournament, the team elimination tournament with win probabilities a_i/(a_i+b_j), and proof via tableau transformations that A's winning probability is independent of player order*

> Problem 3: A team tournament.
> 
> Let $E$ be a finite event; we denote by $\mathbb{P}(E)$ the probability of $E$. One may freely use the following result: if $D_1, \ldots, D_p$ are pairwise disjoint events, then
> $$\mathbb{P}(D_1 \cup \cdots \cup D_p) = \mathbb{P}(D_1) + \cdots + \mathbb{P}(D_p).$$
> 
> 3.1 A game, two players.
> Ambre has a rigged coin: at each toss it gives Heads (Pile) with probability $a \in [0;1]$ and Tails (Face) with probability $1 - a$. As for him, Benjamin has a coin that, at each toss, gives Heads with probability $b \in [0;1]$ and Tails with probability $1 - b$.
> They decide to play the following game: each one tosses his coin. They thus obtain simultaneously Heads or simultaneously Tails (in which case they continue); they stop as soon as one obtains Heads and the other Tails. The tosses are independent.
> For every integer $n \ge 1$, we denote by $A_n$ the event "Ambre wins on the $n$-th toss" and by $B_n$ the event "each of the two players tosses his coin at least $n$ times during this game". We denote by $C_n$ the event that the $n$-th toss of both players gives the same result.
> 1.a. We set $\lambda = 1 - a - b + 2ab$. Show that $\mathbb{P}(C_1) = \lambda$.
>    b. For every integer $n \ge 1$, express $\mathbb{P}(C_{n+1})$ as a function of $\mathbb{P}(C_n)$. Deduce an expression of $\mathbb{P}(C_n)$ as a function of $n$.
> 2. Let $n \ge 1$ be an integer.
>    a. Express $\mathbb{P}(A_n)$ as a function of $a$, $b$ and $\mathbb{P}(C_n)$.
>    b. Deduce an expression of $\mathbb{P}(A_n)$ as a function of $a$, $b$ and $n$.
>    c. Give an expression of $\mathbb{P}(B_n)$ as a function of $a$, $b$ and $n$.
> 3. We denote by $G_A$ the event "Ambre wins" and by $G_B$ the event "Benjamin wins".
>    a. Show that $0 < \lambda < 1$.
>    b. Show, for every integer $n \ge 1$, that $\mathbb{P}(G_A) \ge a(1 - b)\,\frac{1 - \lambda^n}{1 - \lambda}$ and $\mathbb{P}(G_B) \ge b(1 - a)\,\frac{1 - \lambda^n}{1 - \lambda}$.
>    c. Let $G_C$ be the event "this game has no winner". Deduce from the foregoing that $\mathbb{P}(G_A) = \frac{a(1-b)}{1-\lambda}$, $\mathbb{P}(G_B) = \frac{b(1-a)}{1-\lambda}$ and $\mathbb{P}(G_C) = 0$.
> 
> 3.2 What is a regular game?
> Let $A_1, \ldots, A_n$ be $n$ players. We say that a game is regular when it possesses the following characteristics: for each of the players, the game opposes him to one or several adversaries through successive matches; each match concerns exactly two players playing one against the other; and no player can be forced to play against each of the other people.
> 4. Show that the following game is regular: the people $A_1, A_2, \ldots, A_n$ each have a rigged coin. For every $i$, at each toss, the coin of person $A_i$ gives Heads with probability $p_i \in [0;1]$ and Tails with probability $1 - p_i$. The game proceeds in at most several successive rounds, and at each round two people meet and play according to the rules defined in 3.1.
> 
> 3.3 The regular team tournament.
> Let $A$ and $B$ be two teams. We denote by $m$ the size of $A$ and by $n$ the size of $B$. Suppose that each of the $m$ people of team $A$ as well as each of the $n$ people of team $B$ has a rigged coin, following the same rules. During each match, the first remaining person of team $A$ plays against the first remaining person of team $B$; at the end of this match, only one of these two people is declared winner and the loser is eliminated. The winner then plays against a new person of the opposing team, and one continues in this way until one of the two teams is completely eliminated, the surviving team winning the tournament.
> For example, for $m = n = 3$, person $A_1$ plays against person $B_1$. If $A_1$ wins, then $B_1$ is eliminated and $A_1$ plays against $B_2$. If $A_1$ loses, then $A_1$ is eliminated and $A_2$ plays against $B_1$. One continues until the totality of one team is eliminated.
> Property $(\star)$: there exist strictly positive reals $a_1, a_2, \ldots, a_m$ for $A$ and $b_1, b_2, \ldots, b_n$ for $B$ such that, for every match opposing the $i$-th person of team $A$ and the $j$-th person of team $B$, the first wins with probability $\frac{a_i}{a_i + b_j}$ and the second wins with probability $\frac{b_j}{a_i + b_j}$.
> 5. In this question only, suppose that $a_i = b_j = 1$ for all $i$ and $j$. We denote by $a_{m,n}$ the probability that team $A$ wins the tournament.
>    a. Show that $a_{m,n} = a_{n,m}$ and $a_{m,m} = 1$... [the statement asks to relate $a_{m,n}$ and $a_{n,m}$].
>    b. What is the value of $a_{n,n}$?
>    c. Determine the value of $a_{1,n}$ as a function of $n$.
>    d. Determine the value of $a_{2,n}$ as a function of $n$.
> 6. In this question only, we place ourselves in the case $m = n = 2$. The numbers $a_1, a_2, b_1$ and $b_2$ are then four strictly positive reals.
>    a. Express the probability that $A_1$ wins against $B_j$ as a function of $a_1$ and $b_j$.
>    b. Show that the probability that team $A$ wins the tournament is equal to:
> $$\frac{a_1^2 a_2 + a_1 a_2(a_2 + a_1)(b_1 + b_2) + a_1^2 b_1 + a_1 a_2 b_1 + a_2^2 b_1 b_2}{(a_1 + b_1)(a_1 + b_2)(a_2 + b_1)(a_2 + b_2)}.$$
> Does this probability depend on the order chosen for the players of a given team to enter the tournament?
> 
> 3.4 A generalisation.
> We keep the regular tournament described in Part 3.3. However, in addition to the matches of the tournament, we decide to have each member of team $A$ play against each member of team $B$ whom he has not met during the tournament, the supplementary matches always satisfying property $(\star)$. This gives a total of $mn$ matches. We code the results of these matches by means of a rectangular tableau of $m$ rows and $n$ columns. In the cell on row $i$ and column $j$, we place a symbol $A$ if $A_i$ won against $B_j$, and a symbol $B$ otherwise.
> In the example of the tournament presented at the beginning of Part 3.3 with $m = n = 3$, one obtains a $3 \times 3$ tableau whose entries are $A$ or $B$, where each symbol hides an $A$ or a $B$ according to the result of the match added to the tournament. In general, we say that the tableau is a possible result for team $A$.
> 7. In this question, suppose $m = 2$. Indicate the possible forms of all the winning tableaux and show that, for every integer $n \ge 1$, there are exactly $2^n + n\,2^{n-1}$ winning tableaux.
> 8. In this question, still suppose $m = 2$.
>    a. We denote by $D$ the product of all the terms $(a_i + b_j)$ as $j$ ranges over $\{1, 2, \ldots, n\}$. Thus $D = (a_1 + b_1)\cdots(a_1 + b_n) \times (a_2 + b_1)\cdots(a_2 + b_n)$. One may write $D = \prod_{j=1}^{n} (a_1 + b_j)(a_2 + b_j)$. Consider a tableau $T$, winning or not. For this tableau, we denote respectively by $x_1$ and $x_2$ the number of matches won by $A_1$ and by $A_2$, and for every $j$ by $y_j$ the number of matches won by $B_j$. Finally, one organizes a tournament between teams $A$ and $B$, and we denote by $\mathbb{P}_T$ the probability that this tableau is the result of the tournament. Express $\mathbb{P}_T$ as a function of the numbers $D, a_1, a_2, x_1, x_2, b_1, \ldots, b_n, y_1, y_2, \ldots, y_n$.
>    b. Now suppose that $T$ is a winning tableau. We denote by $k$ the number of columns $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ of $T$ and by $\ell$ its number of columns $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$.
>       i. Justify that $T$ contains no column $\left[\begin{smallmatrix} B \\ B \end{smallmatrix}\right]$ and that no column $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ is to the right of a column $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$.
>       ii. We denote by $T'$ the tableau obtained from $T$ in the following way: we keep the columns $\left[\begin{smallmatrix} A \\ A \end{smallmatrix}\right]$ and leave them in their place; we replace the $k$ columns $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ and $\ell$ columns $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$ of $T$ by $\ell$ columns $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ followed by $k$ columns $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$. Show that $T'$ is a winning tableau. What does one obtain if one performs the same transformation starting from $T'$?
>    c. Show that the probability that team $A$ wins the tournament does not depend on the order chosen for the players of team $A$ to enter the tournament.
> 9. We return to the general case ($m$ arbitrary). Show that the probability that team $A$ wins the tournament does not depend on the order chosen for the players to enter the tournament.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_simmetria|Simmetria]], [[method_bigezione|Biiezione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1CDKdOobrMp7gzmKvpT87_FjVRxny9v1t/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Torneo di squadra probabile: un duello con monete truccate tra due giocatori, un torneo regolare, il torneo di eliminazione di squadra con probabilità di vittoria a_i/(a_i+b_j), e la prova attraverso trasformazioni del tabellone che la probabilità di vittoria di A è indipendente dall'ordine dei giocatori*

> Problema 3: un torneo di squadra.
> 
> Lasciate che $E$ sia un evento finito; indichiamo con $\mathbb{P}(E)$ la probabilità di $E$. Si può usare liberamente il seguente risultato: se $D_1, \ldots, D_p$ sono eventi disconnessi in coppia, allora $$\mathbb{P}(D_1 \cup \cdots \cup D_p) = \mathbb{P}(D_1) + \cdots + \mathbb{P}(D_p).$$
> 
> 3.1 Una partita, due giocatori. Ambre ha una moneta truccata: ad ogni lancio dà Teste (Pile) con probabilità $a \in [0;1]$ e Coda (Face) con probabilità $1 - a$. Per quanto riguarda lui, Benjamin ha una moneta che, ad ogni lancio, dà teste con probabilità $b \in [0;1]$ e code con probabilità $1 - b$. Decidono di giocare il seguente gioco: ognuno lancia la sua moneta. Pertanto, essi ottengono contemporaneamente Capi o Coda (in tal caso continuano); si fermano non appena uno ottiene Capi e l'altro Coda. I lanci sono indipendenti. Per ogni numero intero $n \ge 1$, indichiamo con $A_n$ l'evento "Ambre vince sul $n$-th toss" e con $B_n$ l'evento "ciascuno dei due giocatori lancia la sua moneta almeno $n$ volte durante questa partita". Indichiamo con $C_n$ l'evento che il $n$-th lancio di entrambi i giocatori dà lo stesso risultato. 1.a. Abbiamo impostato $\lambda = 1 - a - b + 2ab$. Mostra che < MSK12/>. b. Per ogni numero intero $n \ge 1$, esprimere $\mathbb{P}(C_{n+1})$ come funzione di $\mathbb{P}(C_n)$. Riduzione di un'espressione di $\mathbb{P}(C_n)$ come funzione di $n$. 2. < MSK18/> sia un numero intero. a. Esprimere $\mathbb{P}(A_n)$ come funzione di $a$, $b$ e $\mathbb{P}(C_n)$. b. Riduzione di un'espressione di $\mathbb{P}(A_n)$ come funzione di $a$, $b$ e $n$. c. Indicare l'espressione di $\mathbb{P}(B_n)$ come funzione di $a$, $b$ e $n$. 3. Indichiamo con $G_A$ l'evento "Ambre vince" e con $G_B$ l'evento "Benjamin vince". a. Mostra che < MSK33/>. b. Indicare, per ogni numero intero $n \ge 1$, che $\mathbb{P}(G_A) \ge a(1 - b)\,\frac{1 - \lambda^n}{1 - \lambda}$ e $\mathbb{P}(G_B) \ge b(1 - a)\,\frac{1 - \lambda^n}{1 - \lambda}$. c. Lasciate che $G_C$ sia l'evento "questo gioco non ha vincitore". Da quanto precede dedurre che $\mathbb{P}(G_A) = \frac{a(1-b)}{1-\lambda}$, $\mathbb{P}(G_B) = \frac{b(1-a)}{1-\lambda}$ e $\mathbb{P}(G_C) = 0$.
> 
> 3.2 Che cos'è un gioco regolare? Che i giocatori $A_1, \ldots, A_n$ siano $n$. Diciamo che una partita è regolare quando possiede le seguenti caratteristiche: per ciascuno dei giocatori, la partita si oppone a uno o più avversari attraverso partite successive; ogni partita riguarda esattamente due giocatori che giocano l'uno contro l'altro; e nessun giocatore può essere costretto a giocare contro ciascuna delle altre persone. 4. Mostrare che il seguente gioco è regolare: le persone $A_1, A_2, \ldots, A_n$ hanno ognuna una moneta truccata. Per ogni $i$, ad ogni lancio, la moneta di persona $A_i$ dà teste con probabilità $p_i \in [0;1]$ e code con probabilità $1 - p_i$. Il gioco si svolge in più di diversi round successivi e in ogni round due persone si incontrano e giocano secondo le regole definite al punto 3.1.
> 
> 3.3 Il torneo di squadra regolare. Che $A$ e $B$ siano due squadre. Indichiamo con $m$ la dimensione di $A$ e con $n$ la dimensione di $B$. Supponiamo che ciascuno dei membri del team $m$ del team $A$ e ciascuno dei membri del team $n$ del team $B$ abbia una moneta truccata, seguendo le stesse regole. Durante ogni partita, la prima persona rimanente della squadra $A$ gioca contro la prima persona rimanente della squadra $B$; alla fine di questa partita, solo una di queste due persone viene dichiarata vincitrice e il perdente viene eliminato. Il vincitore gioca poi contro una nuova persona della squadra avversaria, e una continua in questo modo fino a quando una delle due squadre viene completamente eliminata, la squadra sopravvissuta vincendo il torneo. Per esempio, per $m = n = 3$, la persona $A_1$ gioca contro la persona $B_1$. Se $A_1$ vince, allora $B_1$ viene eliminato e $A_1$ gioca contro $B_2$. Se $A_1$ perde, $A_1$ viene eliminato e $A_2$ gioca contro $B_1$. Una continua finché la totalità di una squadra non viene eliminata. Proprietà $(\star)$: esistono valori rigorosamente positivi $a_1, a_2, \ldots, a_m$ per $A$ e $b_1, b_2, \ldots, b_n$ per $B$ in modo tale che, per ogni partita contro la $i$ terza persona della squadra $A$ e la $j$ terza persona della squadra $B$, la prima vittoria con probabilità $\frac{a_i}{a_i + b_j}$ e la seconda vittoria con probabilità $\frac{b_j}{a_i + b_j}$. 5. Solo in questa domanda, supponiamo che $a_i = b_j = 1$ per tutti $i$ e $j$. Indichiamo con MSK38/> la probabilità che la squadra MSK39/> vinca il torneo. a. Indicare che $a_{m,n} = a_{n,m}$ e $a_{m,m} = 1$... [la dichiarazione chiede di correlare $a_{m,n}$ e $a_{n,m}$]. b. Qual è il valore di < MSK44/>? c. Determinare il valore di $a_{1,n}$ come funzione di $n$. d. Determinare il valore di $a_{2,n}$ come funzione di $n$. 6. Solo in questa domanda ci troviamo nel caso MSK49/. I numeri $a_1, a_2, b_1$ e $b_2$ sono quindi quattro numeri reali rigorosamente positivi. a. Esprimere la probabilità che $A_1$ vinca contro $B_j$ come funzione di $a_1$ e $b_j$. b. Mostrare che la probabilità che la squadra $A$ vinca il torneo è uguale a: $$\frac{a_1^2 a_2 + a_1 a_2(a_2 + a_1)(b_1 + b_2) + a_1^2 b_1 + a_1 a_2 b_1 + a_2^2 b_1 b_2}{(a_1 + b_1)(a_1 + b_2)(a_2 + b_1)(a_2 + b_2)}.$$ Questa probabilità dipende dall'ordine scelto per i giocatori di una determinata squadra per partecipare al torneo?
> 
> 3.4 Una generalizzazione. Abbiamo il torneo regolare descritto nella parte 3.3. Tuttavia, oltre alle partite del torneo, decidiamo di avere ogni membro della squadra $A$ giocare contro ogni membro della squadra $B$ che non ha incontrato durante il torneo, le partite supplementari sempre soddisfa proprietà $(\star)$. Questo dà un totale di corrispondenze $mn$. Codifichiamo i risultati di queste partite mediante un quadro rettangolare di righe $m$ e colonne $n$. Nella cella della riga $i$ e della colonna $j$, posizionamo un simbolo $A$ se $A_i$ ha vinto contro $B_j$, e un simbolo $B$ altrimenti. Nell'esempio del torneo presentato all'inizio della parte 3.3 con $m = n = 3$, si ottiene un quadro $3 \times 3$ le cui voci sono $A$ o $B$, dove ogni simbolo nasconde un $A$ o un $B$ a seconda del risultato della partita aggiunta al torneo. In generale, diciamo che il quadro è un risultato possibile per il team $A$. 7. In questa domanda, supponiamo < MSK19/>. Indicare le possibili forme di tutte le tabelle vincenti e mostrare che, per ogni numero intero $n \ge 1$, ci sono esattamente $2^n + n\,2^{n-1}$ tabelle vincenti. 8. In questa domanda, supponiamo ancora $m = 2$. a. Indichiamo con $D$ il prodotto di tutti i termini $(a_i + b_j)$ in quanto $j$ va oltre $\{1, 2, \ldots, n\}$. Quindi < MSK27/>. Si può scrivere < MSK28/>. Considerate un tabellone < MSK29/>, vincente o meno. Per questo quadro, indichiamo rispettivamente con $x_1$ e $x_2$ il numero di partite vinte da $A_1$ e da $A_2$, e per ogni $j$ con $y_j$ il numero di partite vinte da $B_j$. Infine, si organizza un torneo tra le squadre $A$ e $B$, e indichiamo con $\mathbb{P}_T$ la probabilità che questo tabellone sia il risultato del torneo. Esprimere $\mathbb{P}_T$ in funzione dei numeri $D, a_1, a_2, x_1, x_2, b_1, \ldots, b_n, y_1, y_2, \ldots, y_n$. b. Supponiamo che MSK42/> sia un tabellone vincente. Indichiamo con $k$ il numero di colonne $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ di $T$ e con $\ell$ il suo numero di colonne $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$. i. giustificare che $T$ non contiene colonna $\left[\begin{smallmatrix} B \\ B \end{smallmatrix}\right]$ e che nessuna colonna $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ è a destra di una colonna $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$. ii. Indichiamo con $T'$ il quadro ottenuto da $T$ nel seguente modo: conserviamo le colonne $\left[\begin{smallmatrix} A \\ A \end{smallmatrix}\right]$ e le lasciamo al loro posto; sostituitiamo le colonne $k$ $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ e $\ell$ $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$ di $T$ con le colonne $\ell$ $\left[\begin{smallmatrix} A \\ B \end{smallmatrix}\right]$ seguite dalle colonne $k$ $\left[\begin{smallmatrix} B \\ A \end{smallmatrix}\right]$. Mostrare che < MSK64/> è un quadro vincente. Che cosa si ottiene se si effettua la stessa trasformazione a partire da $T'$? c. Mostrare che la probabilità che la squadra $A$ vinca il torneo non dipende dall'ordine scelto per i giocatori della squadra $A$ per partecipare al torneo. 9. Torniamo al caso generale ($m$ arbitrario). Mostrare che la probabilità che la squadra $A$ vinca il torneo non dipende dall'ordine scelto per i giocatori per partecipare al torneo.

[[src_cgen_2022__Q03]]
