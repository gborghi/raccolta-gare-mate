---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 8
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2025__Q08
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: >-
  Two-player game coloring 2n points on a circle (orange/blue); winner forms the
  longest monochromatic arc. Study strategies and winning probabilities versus
  random and skilled opponents.
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_probabilita
  - topic_logica
methods:
  - method_casework
  - method_simmetria
  - method_conteggio
skills:
  - skill_casework_accurato
  - skill_modellizzazione
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/combinatoria
  - topic/probabilita
  - topic/logica
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Two-player game coloring 2n points on a circle (orange/blue); winner forms the longest monochromatic arc. Study strategies and winning probabilities versus random and skilled opponents.*

> Problem 8 - Colored points on a circle.
> 
> Lucie has invented a game for two players. The rules are as follows.
> 
> The game takes place on a circle. At the start, the points of the circle are uncolored. One of the two adversaries is designated to play first. In turn, Lucie and her adversary each choose a point, which is then colored in their respective color: Orange for Lucie, Blue for her adversary. When they play, it is forbidden to choose a point already colored by one of them. Lucie agrees in advance on the number of moves the game will last. Both play the same number of moves, so the number of moves is an even integer, denoted $2n$. For example, if the number of moves is $2n = 6$, they each play $n = 3$ moves. The game stops once the $2n$ moves are played.
> 
> At the end of the game, the circle is cut into arcs whose endpoints are either orange or blue. In such a configuration, a primitive arc is an arc whose two endpoints are colored (in orange or blue) and which contains no other colored point (for example, the whole circle, seen as an arc, is never primitive). Primitive arcs whose two endpoints have different colors are neutral; but the winner is the one who has formed the longest arc, not necessarily primitive, entirely colored in his own color. If there is a tie of such arcs, or if none exists, the game is declared null (a draw).
> 
> Throughout the problem, we call strategy a deterministic way of describing what to play as a function of the moves played previously. In other words, a strategy is an algorithm that indicates which move to play depending on the current situation, so that in two identical situations it always indicates the same move.
> 
> Since Lucie does not like to lose, she begins by choosing as adversary the Village Idiot, who, true to his name, plays his moves randomly, without thinking. Each move played then follows a uniform law on the circle. Lucie seeks strategies that maximize her probability of winning against this adversary. (Figure 11: two ends of game for $2n = 6$ and one for $2n = 10$. On the left, there are no colored arcs: the game is null. In the center, Lucie (orange) wins: she managed to build an arc of maximal size. On the right, the adversary (blue) wins because he formed a (non-primitive) blue arc of maximal size.)
> 
> Lucie and her adversary agree to begin by fixing $2n = 4$.
> 
> 1. If Lucie lets her adversary play first, does she have a strategy allowing her to win with certainty?
> 
> 2. After she wins a game, her adversary lets her play first. a) Does Lucie have a strategy allowing her to win whatever happens? b) Study the set of $p \in [0, 1]$ such that there exists a strategy allowing Lucie to win with probability exactly $p$. c) Same question for the probabilities of not losing.
> 
> 3. Lucie and her adversary now choose $2n > 4$. a) Repeat the previous question for $2n > 4$. One may begin with the case $2n = 6$. b) Same question for the probabilities of not losing.
> 
> Lucie proposes to change the rules. They agree on an integer $k$, and the rules are changed so that Lucie's adversary places $k$ points rather than $n$. The adversary plays all his points first. He still plays randomly on the circle, but Lucie places all her points afterward, so that she then has full liberty to choose where to place her points. Lucie thus has more information than her adversary, but in return the latter plays more points than she does.
> 
> 4. As a function of $n$ and $k$, does Lucie have a strategy allowing her to win with probability $1$?
> 
> To try, Lucie and her adversary take exactly the same configuration as before, but exchanging the roles. Lucie places $k$ points, her adversary places $n$. The latter still plays randomly, and Lucie places all her points first.
> 
> 5. Study the set of $p \in [0, 1]$ such that there exists a strategy allowing Lucie to win with probability $p$.
> 
> Tired of playing with the Village Idiot, Lucie finds an adversary of her caliber: Lucien. One of the two players is designated to play first, and $2n \in \mathbb{N}$ is fixed. The turn-by-turn rule is then applied. Lucien begins to play.
> 
> 6. Does one of the two players have a strategy allowing him to win for sure? If yes, describe one.
> 
> 7. Repeat the problem if Lucie had agreed from the start that the winner is not the one having the longest arc, but the one who managed to maximize the sum of the lengths of the primitive arcs of his color.
> 
> 8. Propose and study other lines of research.

![[src_tfjm_2025__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_simmetria|Simmetria]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Gioco per due giocatori colorando 2n punti su un cerchio (arancio/blu); il vincitore forma l'arco monocromatico più lungo. Studiare le strategie e le probabilità di vincere contro avversari casuali e qualificati.*

> Problema 8 - Punti colorati su un cerchio.
> 
> Lucie ha inventato un gioco per due giocatori. Le regole sono le seguenti.
> 
> Il gioco si svolge su un cerchio. All'inizio, i punti del cerchio sono incolori. Uno dei due avversari è designato per giocare per primo. A sua volta, Lucie e il suo avversario scelgono ognuno un punto, che viene poi colorato nel loro rispettivo colore: Orange per Lucie, Blu per il suo avversario. Quando giocano, è vietato scegliere un punto già colorato da uno di loro. Lucie accetta in anticipo il numero di mosse che durerà la partita. Entrambi giocano lo stesso numero di mosse, quindi il numero di mosse è un numero intero pari, indicato $2n$. Ad esempio, se il numero di mosse è $2n = 6$, ognuno di essi gioca $n = 3$ mosse. La partita si ferma una volta che vengono eseguite le mosse $2n$.
> 
> Alla fine del gioco, il cerchio viene tagliato in archi i cui punti terminali sono arancioni o blu. In una tale configurazione, un arco primitivo è un arco i cui due punti finali sono colorati (in arancione o blu) e che non contiene nessun altro punto colorato (ad esempio, l'intero cerchio, visto come un arco, non è mai primitivo). Gli archi primitivi i cui due punti finali hanno colori diversi sono neutrali; ma il vincitore è colui che ha formato l'arco più lungo, non necessariamente primitivo, interamente colorato nel suo colore. Se c'è una parità di tali archi, o se non esiste, la partita è dichiarata nulla (un pareggio).
> 
> In tutto il problema, chiamiamo strategia un modo deterministico di descrivere cosa giocare in funzione delle mosse eseguite in precedenza. In altre parole, una strategia è un algoritmo che indica quale mossa giocare a seconda della situazione attuale, in modo che in due situazioni identiche indica sempre la stessa mossa.
> 
> Poiché a Lucie non piace perdere, inizia scegliendo come avversario l'idiota del villaggio, che, fedele al suo nome, gioca le sue mosse in modo casuale, senza pensare. Ogni mossa giocata segue una legge uniforme sul cerchio. Lucie cerca strategie che massimizzino la sua probabilità di vincere contro questo avversario. (Figura 11: due estremità di gioco per $2n = 6$ e una per $2n = 10$. A sinistra non ci sono archi colorati: il gioco è nullo. Nel centro, Lucie (arancione) vince: riesce a costruire un arco di dimensioni massime. A destra, l'avversario (blu) vince perché ha formato un arco blu (non primitivo) di dimensioni massime.)
> 
> Lucie e il suo avversario concordano di iniziare fissando $2n = 4$.
> 
> 1. Se Lucie lascia che il suo avversario giochi per primo, ha una strategia che le permette di vincere con certezza?
> 
> 2. Dopo aver vinto una partita, il suo avversario la lascia giocare prima. a) Lucie ha una strategia che le permetta di vincere qualsiasi cosa succeda? b) Studiare l'insieme di $p \in [0, 1]$ in modo tale che esista una strategia che consente a Lucie di vincere con probabilità esattamente $p$. c) La stessa domanda per le probabilità di non perdere.
> 
> 3. Lucie e il suo avversario scelgono ora $2n > 4$. a) Ripetere la domanda precedente per $2n > 4$. Si può iniziare con il caso $2n = 6$. b) La stessa domanda per le probabilità di non perdere.
> 
> Lucie propone di cambiare le regole. Sono d'accordo su un intero $k$, e le regole sono cambiate in modo che l'avversario di Lucie collochi $k$ punti piuttosto che $n$. L'avversario gioca tutti i suoi punti prima. Lui gioca ancora a caso sul cerchio, ma Lucie mette tutti i suoi punti dopo, in modo che lei abbia poi piena libertà di scegliere dove mettere i suoi punti. Lucie ha quindi più informazioni del suo avversario, ma a sua volta quest'ultimo gioca più punti di lei.
> 
> 4. Come funzione di $n$ e $k$, Lucie ha una strategia che le consente di vincere con probabilità $1$?
> 
> Per provare, Lucie e il suo avversario assumono esattamente la stessa configurazione di prima, ma scambiando i ruoli. Lucie mette $k$ punti, il suo avversario mette $n$. Quest'ultimo gioca ancora casualmente, e Lucie mette tutti i suoi punti in primo luogo.
> 
> 5. Studiare l'insieme di $p \in [0, 1]$ in modo che esista una strategia che consente a Lucie di vincere con probabilità $p$.
> 
> Stanca di giocare con l'idiota del villaggio, Lucie trova un avversario del suo calibro: Lucien. Uno dei due giocatori è designato per giocare per primo e $2n \in \mathbb{N}$ è fissato. Si applica quindi la regola di turno a turno. Lucien comincia a suonare.
> 
> 6. Uno dei due giocatori ha una strategia che gli permette di vincere con certezza? Se sì, descrivi uno.
> 
> 7. Ripetere il problema se Lucie avesse accettato fin dall'inizio che il vincitore non è colui che ha l'arco più lungo, ma colui che è riuscito a massimizzare la somma delle lunghezze degli archi primitivi del suo colore.
> 
> 8. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q08.png]]

[[src_tfjm_2025__Q08]]
