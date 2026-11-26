---
title: Olimpiade Italiana (Cesenatico) 2013 - soluzioni
tipo: gara
competition: Olimpiade Italiana (Cesenatico) 2013 - soluzioni
family: archimede
year: '2013'
level: nazionale
---
<div class="atom-reader" data-gara="Quesiti/src_cesenatico_2013"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*velocita intere salita/piano/discesa*

> Un modellino di automobile viene testato su alcuni circuiti chiusi lunghi 600 metri, composti da tratti piani e
> tratti in salita o discesa. Tutti i tratti in salita e in discesa hanno la stessa pendenza. I test mettono in risalto
> alcuni fatti curiosi:
> (a) la velocità del modellino dipende solo dal fatto che la macchina stia percorrendo un tratto di salita, piano
> o discesa; chiamando rispettivamente vs, vp e vd queste tre velocità, si ha vs < vp < vd;
> (b) vs, vp e vd, espresse in metri al secondo, sono dei numeri interi;
> (c) comunque sia composto il circuito (con più o meno salite e discese) il tempo di percorrenza è sempre di
> 50 secondi.
> Trovare tutti i possibili valori di vs, vp e vd.

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** (10,12,15),(9,12,18),(8,12,24),(7,12,42)
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1hXVH2IQIT7lpZOFdPWsSlTLlKUKYJdQt/view)


<div class="qlang-split" data-lang="en"></div>


*All possible integer speeds vs, vp and vd, in metres per second, on closed 600-metre circuits always covered in 50 seconds*

> A model car is tested on some closed circuits 600 metres long, made up of level stretches and of uphill or downhill stretches. All the uphill and downhill stretches have the same gradient. The tests bring out some curious facts:
> (a) the speed of the model depends only on whether the car is travelling an uphill stretch, a level one or a downhill one; calling these three speeds vs, vp and vd respectively, one has vs < vp < vd;
> (b) vs, vp and vd, expressed in metres per second, are integers;
> (c) however the circuit is made up (with more or fewer climbs and descents) the time taken is always 50 seconds.
> Find all possible values of vs, vp and vd.

**Topic:** [[topic_algebra|Algebra]]
**Skill:** [[skill_manipolazione_algebrica|Algebraic manipulation]]

[[Quesiti/src_cesenatico_2013#q01|src_cesenatico_2013__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*dimostrare A'B'=(a-b)/2*

![[src_cesenatico_2013__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (0,0);
  \coordinate (B) at (10,0);
  \coordinate (C) at (2.6,4.2);
  \coordinate (M) at (5,0);
  \coordinate (I1) at (2.551,1.421);
  \coordinate (I2) at (5.664,1.145);
  \coordinate (Ap) at (3.785,2.126);
  \coordinate (Bp) at (4.67,0.577);
  \draw (A)--(B)--(C)--cycle;
  \draw (C)--(M);
  \draw (I1) circle (1.421);
  \draw (I2) circle (1.145);
  \fill (Ap) circle (1.5pt) node[above right] {$A'$};
  \fill (Bp) circle (1.5pt) node[above right] {$B'$};
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[below] at (M) {$M$};
  \node at (2.0,1.0) {$\alpha$};
  \node at (5.7,0.6) {$\beta$};
\end{tikzpicture}
\end{document}
```

> Nel triangolo ABC supponiamo di avere a > b, dove a = BC e b = AC. Sia M il punto medio di AB, e siano α
> e β le circonferenze inscritte, rispettivamente, ai triangoli ACM e BCM. Siano poi A′ e B′ i punti di tangenza
> di α e β con CM. Dimostrare che A′B′ = a −b
> 2
> .

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1hXVH2IQIT7lpZOFdPWsSlTLlKUKYJdQt/view)


<div class="qlang-split" data-lang="en"></div>


*Prove that the distance between the points of tangency A′ and B′ equals a broken quotient*

> In triangle ABC suppose a > b, where a = BC and b = AC. Let M be the midpoint of AB, and let α and β be the incircles of triangles ACM and BCM respectively. Let A′ and B′ be the points of tangency of α and β with CM. Prove that A′B′ = a −b
> 2
> .

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Method:** [[method_simmetria|Using symmetry]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]

[[src_cesenatico_2013__prob2.png]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*esiste blocco di 2000 bilanciato*

> Ogni numero intero viene colorato con uno di due colori, rosso o blu. Sappiamo che, per ogni insieme finito A
> di interi consecutivi, il valore assoluto della differenza tra il numero degli interi rossi e il numero degli interi
> blu nell’insieme A è al più 1000. Dimostrare che esiste un insieme di 2000 interi consecutivi fra i quali ci sono
> esattamente 1000 numeri rossi e 1000 numeri blu.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1hXVH2IQIT7lpZOFdPWsSlTLlKUKYJdQt/view)


<div class="qlang-split" data-lang="en"></div>


*There is a run of 2000 consecutive integers with exactly 1000 red and 1000 blue*

> Every integer is coloured with one of two colours, red or blue. We know that, for every finite set A of consecutive integers, the absolute value of the difference between the number of red integers and the number of blue integers in the set A is at most 1000. Prove that there exists a set of 2000 consecutive integers among which there are exactly 1000 red numbers and 1000 blue numbers.

**Topic:** [[topic_combinatoria|Combinatorics]]
**Method:** [[method_invarianti|Invariants / monovariants]]
**Skill:** [[skill_astrazione|Abstraction / generalisation]]

[[Quesiti/src_cesenatico_2013#q03|src_cesenatico_2013__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*In quali basi 5654 e' potenza di un primo*

> In quali basi b > 6 la scrittura 5654 rappresenta una potenza di un numero primo?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** base 7 (2048=2^11)
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1hXVH2IQIT7lpZOFdPWsSlTLlKUKYJdQt/view)


<div class="qlang-split" data-lang="en"></div>


*In which bases b > 6 the writing 5654 represents a power of a prime*

> In which bases b > 6 does the writing 5654 represent a power of a prime number?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Method:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Skill:** [[skill_manipolazione_algebrica|Algebraic manipulation]]

[[Quesiti/src_cesenatico_2013#q04|src_cesenatico_2013__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*parallelismo e concorrenza di tre rette*

![[src_cesenatico_2013__prob5.png]]

> Dato un triangolo isoscele ABC con AB = AC e \
> BAC < 60o, sia D il punto su AC tale che \
> DBC = \
> BAC, sia
> E l’intersezione dell’asse di BD con la retta parallela a BC passante per A, e sia F il punto sulla retta AC,
> dalla parte di A rispetto a C, tale che la lunghezza di FA sia il doppio della lunghezza di AC.
> Infine, siano r la perpendicolare ad AB condotta da F, s la perpendicolare ad AC condotta da E, e t la retta
> BD. Dimostrare che:
> (a) le rette EB e AC sono parallele;
> (b) le rette r, s e t concorrono.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1hXVH2IQIT7lpZOFdPWsSlTLlKUKYJdQt/view)


<div class="qlang-split" data-lang="en"></div>


*In an isosceles triangle, EB is parallel to AC, and three lines are concurrent; the angle marks are a broken extraction*

> Given an isosceles triangle ABC with AB = AC and\
> BAC < 60o, let D be the point on AC such that\
> DBC = \
> BAC, let
> E be the intersection of the perpendicular bisector of BD with the line through A parallel to BC, and let F be the point on the line AC,
> on the side of A with respect to C, such that the length of FA is twice the length of AC.
> Finally, let r be the perpendicular to AB drawn through F, s the perpendicular to AC drawn through E, and t the line
> BD. Prove that:
> (a) the lines EB and AC are parallel;
> (b) the lines r, s and t are concurrent.

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Method:** [[method_simmetria|Using symmetry]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]

[[src_cesenatico_2013__prob5.png]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_logica,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*per quali n la strategia funziona*

> Due maghi si esibiscono nel seguente numero. All’inizio il primo mago rinchiude il secondo mago in una cabina
> dove non possa n´e vedere n´e sentire nulla. Per iniziare il gioco, il primo mago invita Daniele, un membro del
> pubblico, a porre su ogni casella di una scacchiera n × n, a propria discrezione, una pedina bianca o nera.
> Dopodich´e chiede a Daniele di indicargli una casella C a sua scelta. A questo punto, il primo mago sceglie una
> casella D (non necessariamente diversa da C) e sostituisce la pedina che si trova su D con una dell’altro colore
> (bianca con nera o nera con bianca).
> Viene quindi aperta la cabina in cui era rinchiuso il secondo mago. Osservando la scacchiera, il secondo mago
> riesce a indovinare qual è la casella C. Per quali n i due maghi possono attuare una strategia tale che il loro
> numero riesca sempre?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** n potenza di due
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1hXVH2IQIT7lpZOFdPWsSlTLlKUKYJdQt/view)


<div class="qlang-split" data-lang="en"></div>


*For which n the two magicians have a strategy that always identifies the chosen cell on an n by n board*

> Two magicians perform the following act. At the start the first magician shuts the second magician in a booth where he can neither see nor hear anything. To begin the game, the first magician invites Daniele, a member of the audience, to place on each cell of an n × n board, at his discretion, a white or a black piece. He then asks Daniele to point out to him a cell C of his choice. At this point the first magician chooses a cell D (not necessarily different from C) and replaces the piece on D with one of the other colour (white with black, or black with white).
> The booth in which the second magician was shut is then opened. By looking at the board, the second magician manages to guess which cell is C. For which n can the two magicians carry out a strategy such that their act always succeeds?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Method:** [[method_invarianti|Invariants / monovariants]]
**Skill:** [[skill_astrazione|Abstraction / generalisation]]

[[Quesiti/src_cesenatico_2013#q06|src_cesenatico_2013__Q06]]
