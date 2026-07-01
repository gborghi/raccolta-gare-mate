---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023 — Quesito 8
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2023__Q08
parent: src_tfjm_2023
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
family: tfjm
year: '2023'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: >-
  Card-deck shuffles as permutations; finding the shuffle sigma in minimum
  games, and realizable objectives (target partitions) per shuffle
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_conteggio
  - method_casework
  - method_invarianti
skills:
  - skill_conteggio_sistematico
  - skill_astrazione
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2023
  - livello/TFJM²
  - topic/combinatoria
  - topic/algebra
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Card-deck shuffles as permutations; finding the shuffle sigma in minimum games, and realizable objectives (target partitions) per shuffle*

> Deck seed (Graine de deck). Nicolas plays a deck-construction card game and seeks the perfect deck, ready to start over many times. Let $k, n \\in \\mathbb{N}^*$ with $k$ dividing $n$ and $k \\geqslant 2$. Nicolas's deck holds $n$ cards in total, each bearing a symbol, with possibly identical cards. There are in the deck several types of cards distinguished by their symbol; some cards may be identical (in which case the shuffle does not change anything since the cards have the same appearance).\n\nAt the start of the game Nicolas knows the composition of his deck but not the shuffle. He must give an initial order to his deck, which he may do as he wishes. The shuffle of the deck is a permutation $\\sigma$ which, applied to the initial order of the cards, gives a new order; it is the shuffle. Then, at the start of each game $P_i$, the deck whose order is $\\sigma$ applied to the initial order is drawn, cards being played $k$ by $k$ (so a game has $n/k$ turns). When the deck has cards in $n/k$ copies, two identical cards cannot be distinguished after the shuffle.\n\nFor example, with $n = 6$ cards, 3 cards $A$ and 3 cards $B$ initially in order $(A, B, A, B, A, B)$, where cards are played $k = 3$ by 3 (so a game has $n/k = 2$ turns) and where the shuffle is $\\sigma = \\begin{pmatrix} 123456 \\\\ 152346 \\end{pmatrix}$, the objects $(ABABAB, AAABBB)$ or $(ABABAB, AAB, ABB)$ are realizable for the shuffle $\\sigma$ (see question 3). The second choice lets one distinguish $\\sigma$ from $\\begin{pmatrix} 123456 \\\\ 153246 \\end{pmatrix}$ but the first does not (because the final state of the deck is the same).\n\n1. In this question, Nicolas's goal is to find the shuffle $\\sigma$ as fast as possible. The initial order, before a game starts, is always the same. How many games does he need at minimum when:\n   a) $k = n$, and all the cards are different?\n   b) $k = n$, and the deck consists of 2 different cards, one unique and the other in $n - 1$ copies?\n   c) $k = n$, and the deck consists of 2 different cards, each in $n/2$ copies?\n   d) $k = 2$, and the deck consists of 2 different cards, each in $n/2$ copies, and the initial order is a perfect alternation of these cards?\n   e) $k = n$, and the deck consists of $a$ different cards, each in $n/a$ copies, for some $a$ dividing $n$?\n\n2. As a function of $k$ and $n$, characterize the ordered initial compositions of the starting deck for which Nicolas can be sure to find $\\sigma$.\n\nNicolas is now no longer interested in the shuffle $\\sigma$ but only wants to obtain the perfect game. He knows which cards he wants to draw at the first turn, then at the second turn, and so on. We denote by $P_i$ the set of $k$ cards Nicolas wants to draw at the $i$-th turn after shuffling, in a game. We call objective the data of an ordered initial composition $\\mathcal{O}$ of the deck and a partition of the set of cards into $n/k$ parts of size $k$, of the form $(P_1, \\dots, P_{n/k})$. The order of cards within each $P_i$ does not matter since they are drawn in the same turn. An objective is said realizable for a shuffle $\\sigma$ if Nicolas can draw his cards in a certain order starting from $\\mathcal{O}$ so that, after shuffling, he obtains exactly the cards corresponding to the set $P_1$, then $P_2$, etc.\n\n3. Which objectives are realizable whatever the shuffle $\\sigma$?\n\n4. Which $\\sigma$ make the fewest objectives realizable, in the following cases:\n   a) $k = 2$, and all the cards are different?\n   b) $k = 2$, and the deck consists of 2 different cards, each in $n/2$ copies, alternating perfectly?\n\n5. Redo the preceding question, but making the most objectives realizable. Nicolas now wants to know whether his objective, whose initial order is that of the game, is realizable. The order of the cards, before each game, is always the same.\n\n6. As a function of his objective, how many games does Nicolas need at minimum to know whether it is realizable in the following cases:\n   a) $k = 2$, and all the cards are different?\n   b) $k = 2$, and the deck consists of 2 different cards, each in $n/2$ copies, alternating perfectly?\n\n7. As a function of $k$, $n$ and the card distribution, which are the objectives for which it is hardest to know whether they are realizable (i.e. such that the minimum number of games Nicolas needs to know whether they are realizable is the largest)?\n\n8. Propose and study other lines of research.

![[src_tfjm_2023__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Suffichi di carte come permutazioni; trovare la sigma del shuffle in giochi minimi, e obiettivi realizzabili (partizioni di obiettivo) per shuffle*

> Seme di mazzo (Graine deck). Nicolas gioca a un gioco di carte di costruzione del mazzo e cerca il mazzo perfetto, pronto a ricominciare molte volte. Let $k, n \\in \\mathbb{N}^*$ con $k$ dividendo $n$ e $k \\geqslant 2$. Il mazzo di Nicolas contiene carte $n$ in totale, ognuna con un simbolo, possibilmente identiche. Nel mazzo ci sono diversi tipi di carte distinti dal loro simbolo; alcune carte possono essere identiche (in questo caso il shuffle non cambia nulla poiché le carte hanno lo stesso aspetto). Deve dare un ordine iniziale al suo mazzo, che può fare come vuole. Il shuffle del mazzo è una permutazione $\\sigma$ che, applicata all'ordine iniziale delle carte, dà un nuovo ordine; è il shuffle. Poi, all'inizio di ogni partita $P_i$, viene tirato il mazzo il cui ordine è $\\sigma$ applicato all'ordine iniziale, le carte vengono giocate $k$ da $k$ (così un gioco ha $n/k$ giri). Quando il mazzo ha carte in $n/k$ copie, due carte identiche non possono essere distinte dopo il shuffle.\n\nPer esempio, con le carte $n = 6$, 3 carte $A$ e 3 carte $B$ inizialmente nell'ordine $(A, B, A, B, A, B)$, dove le carte vengono giocate $k = 3$ per 3 (un gioco ha $n/k = 2$ giri) e dove il shuffle è $\\sigma = \\begin{pmatrix} 123456 \\\\ 152346 \\end{pmatrix}$, gli oggetti $(ABABAB, AAABBB)$ o $(ABABAB, AAB, ABB)$ sono realizzabili per il shuffle $\\sigma$ (vedere domanda 3). La seconda scelta consente di distinguere $\\sigma$ da $\\begin{pmatrix} 123456 \\\\ 153246 \\end{pmatrix}$ ma la prima non lo fa (perché lo stato finale del mazzo è lo stesso).\n\n1. In questa domanda, l'obiettivo di Nicolas è trovare il mix $\\sigma$ il più velocemente possibile. L'ordine iniziale, prima di iniziare una partita, è sempre lo stesso. Quanti giochi ha bisogno al minimo quando:\n a) $k = n$, e tutte le carte sono diverse?\n b) $k = n$, e il mazzo è costituito da 2 carte diverse, una unica e l'altra in $n - 1$ copie?\n c) $k = n$, e il mazzo è costituito da 2 carte diverse, ciascuna in $n/2$ copie?\n d) $k = 2$, e il mazzo è costituito da 2 carte diverse, ciascuna in $n/2$ copie, e l'ordine iniziale è una perfezione di queste carte?\n e) $k = n$, e il mazzo è costituito da $a$ diverse carte, ciascuna in $n/a$ copie, per alcune $a$ che dividono <K36/n\n\n2. Come funzione di $k$ e $n$, caratterizzare le composizioni iniziali ordinate del mazzo di partenza per cui Nicolas può essere sicuro di trovare $\\sigma$.\n\nNicolas ora non è più interessato al shuffle $\\sigma$ ma vuole solo ottenere il gioco perfetto. Sa quali carte vuole disegnare alla prima volta, poi alla seconda volta, e così via. Indichiamo con $P_i$ l'insieme delle carte $k$ che Nicolas vuole disegnare al $i$-esito dopo il shuffling, in una partita. Chiamiamo obiettivo i dati di una composizione iniziale ordinata $\\mathcal{O}$ del mazzo e di una partizione del set di carte in parti di dimensioni $n/k$ $k$, del modulo $(P_1, \\dots, P_{n/k})$. L'ordine delle carte contenute in ciascuna $P_i$ non è importante poiché vengono tirate nello stesso turno. Un obiettivo è detto realizzabile per un shuffle $\\sigma$ se Nicolas può disegnare le sue carte in un certo ordine partendo da $\\mathcal{O}$ in modo che, dopo il shuffling, ottiene esattamente le carte corrispondenti al set $P_1$, quindi $P_2$, ecc.\n\n3. Quali obiettivi sono realizzabili qualunque sia il conflitto? Quali $\\sigma$ rendono realizzabili i minori obiettivi nei seguenti casi: a) $k = 2$, e tutte le carte sono diverse? b) $k = 2$, e il mazzo è costituito da 2 carte diverse, ciascuna in copie $n/2$, che si alternano perfettamente? Riprendiamo la questione precedente, ma rendendo più obiettivi realizzabili. Nicolas ora vuole sapere se il suo obiettivo, il cui ordine iniziale è quello del gioco, è realizzabile. L'ordine delle carte, prima di ogni partita, è sempre lo stesso. In funzione del suo obiettivo, a quanti giochi ha bisogno Nicolas almeno per sapere se è realizzabile nei seguenti casi: a) $k = 2$, e tutte le carte sono diverse? b) $k = 2$, e il mazzo è costituito da 2 carte diverse, ciascuna in copie $n/2$, che si alternano perfettamente? Come funzione di $k$, $n$ e della distribuzione delle carte, che sono gli obiettivi per i quali è più difficile sapere se sono realizzabili (cioè Il numero minimo di giochi che Nicolas deve sapere se sono realizzabili è il più grande). Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q08.png]]

[[src_tfjm_2023__Q08]]
