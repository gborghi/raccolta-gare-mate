---
title: Kangourou 2004 Ecolier finale nazionale
tipo: gara
competition: Kangourou 2004 Ecolier finale nazionale
family: kangourou
year: '2004'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2004_ecolier_finale"></div>



<span class="atom-split" id="qe1" data-atom="qe1" data-title="Quesito E1" data-tags="topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Mossa vincente nel TRIS*

![[src_kangourou_2004_ecolier_finale__probE1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) grid (3,3);
  \node at (0.5,2.5) {\textbf{X}};
  \node at (1.5,2.5) {\textbf{O}};
  \node at (2.5,2.5) {\textbf{X}};
  \node at (2.5,0.5) {\textbf{O}};
\end{tikzpicture}
\end{document}
```

> Nel gioco del TRIS due giocatori A e B collocano a turno il proprio simbolo («X» per il giocatore A, «O» per il giocatore B) in una casella della scacchiera. Vince il primo che riesce a posizionare tre suoi simboli in orizzontale o in verticale o in diagonale. Nella tabella vedi una partita iniziata:
> 
> | X | O | X |
> |---|---|---|
> |   |   |   |
> |   | O |   |
> 
> Sei il giocatore A e tocca a te collocare il tuo simbolo «X»: inseriscilo in modo da essere certo di vincere. (vedi figura)

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** terza riga prima colonna
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1G2cU6gqsfkcIkAJRkZw-THMtabRgrAjY/view)


<div class="qlang-split" data-lang="en"></div>


*Where to place X so as to be sure of winning*

![[src_kangourou_2004_ecolier_finale__probE1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) grid (3,3);
  \node at (0.5,2.5) {\textbf{X}};
  \node at (1.5,2.5) {\textbf{O}};
  \node at (2.5,2.5) {\textbf{X}};
  \node at (2.5,0.5) {\textbf{O}};
\end{tikzpicture}
\end{document}
```

> In the game of noughts and crosses (TRIS) two players A and B place in turn their own symbol ("X" for player A, "O" for player B) in a cell of the board. The first to manage to place three of his symbols horizontally or vertically or diagonally wins. In the table you see a game that has begun:
>
> | X | O | X |
> |---|---|---|
> |   |   |   |
> |   | O |   |
>
> You are player A and it is your turn to place your symbol "X": place it so as to be sure of winning. (see the figure)

**Topic:** [[topic_logica|Logic, games, strategies]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** terza riga prima colonna



<span class="atom-split" id="qe2" data-atom="qe2" data-title="Quesito E2" data-tags="topic_geometria_solida,topic_combinatoria,method_conteggio,skill_conteggio_sistematico,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Max cubetti visibili del cubo 11x11x11*

> Un cubo in legno di lato $11$ cm, ottenuto incollando insieme $11 \times 11 \times 11$ cubetti di lato $1$ cm, è appoggiato su un tavolo. Qual è il massimo numero di cubetti unitari di cui posso vedere almeno una faccia, se posso scegliere la posizione da cui osservare il cubo grande, ma una volta operata la scelta non mi posso più muovere?

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 331
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1G2cU6gqsfkcIkAJRkZw-THMtabRgrAjY/view)


<div class="qlang-split" data-lang="en"></div>


*The greatest number of unit cubes of which one face can be seen*

> A wooden cube of side $11$ cm, obtained by gluing together $11 \times 11 \times 11$ little cubes of side $1$ cm, rests on a table. What is the greatest number of unit cubes of which I can see at least one face, if I may choose the position from which to look at the large cube, but once the choice is made I may no longer move?

**Topic:** [[topic_geometria_solida|Solid geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 331



<span class="atom-split" id="qe3" data-atom="qe3" data-title="Quesito E3" data-tags="topic_combinatoria,method_conteggio,method_casi_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante tessere del domino 0-0..8-8*

![[src_kangourou_2004_ecolier_finale__probE3.png]]

> Una variante del gioco del domino contiene tutte le tessere con le coppie di numeri tra doppio zero e doppio otto. Ogni coppia di numeri si trova esattamente una volta. Per esempio la tessera in figura è la $2 \times 4$ ma anche la $4 \times 2$. Quante tessere si hanno a disposizione per il gioco? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 45
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1G2cU6gqsfkcIkAJRkZw-THMtabRgrAjY/view)


<div class="qlang-split" data-lang="en"></div>


*How many tiles one has for the game*

![[src_kangourou_2004_ecolier_finale__probE3.png]]

> A variant of the game of dominoes contains all the tiles with the pairs of numbers from double zero to double eight. Each pair of numbers appears exactly once. For example the tile in the figure is the $2 \times 4$ but also the $4 \times 2$. How many tiles does one have available for the game? (see the figure)

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 45



<span class="atom-split" id="qe4" data-atom="qe4" data-title="Quesito E4" data-tags="topic_aritmetica,method_congruenze,skill_modellizzazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Minima distanza tra bandierine rossa e verde*

> Un percorso lungo $1800$ metri è suddiviso in $15$ parti uguali fra loro, piantando nel terreno $16$ bandierine rosse; è anche suddiviso in $6$ parti uguali fra loro, piantando nel terreno $7$ bandierine verdi. Qual è, in metri, la minima distanza tra due punti distinti del percorso marcati entrambi da una bandierina rossa e da una bandierina verde?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 600
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1G2cU6gqsfkcIkAJRkZw-THMtabRgrAjY/view)


<div class="qlang-split" data-lang="en"></div>


*The least distance between two points marked by both a red and a green flag*

> A path $1800$ metres long is divided into $15$ parts equal to one another, by planting $16$ red flags in the ground; it is also divided into $6$ parts equal to one another, by planting $7$ green flags in the ground. What, in metres, is the least distance between two distinct points of the path that are both marked by a red flag and by a green flag?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** 600



<span class="atom-split" id="qe5" data-atom="qe5" data-title="Quesito E5" data-tags="topic_combinatoria,topic_aritmetica,method_conteggio,method_casi_conteggio,skill_conteggio_sistematico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Spazi bianchi sull'ultima riga (numeri 1..150)*

> Lo schermo del mio computer permette di scrivere $80$ caratteri (lettere, cifre o spazi bianchi) su ogni riga. Se non vi è abbastanza spazio per una parola o per un numero alla fine della riga, la parola o il numero viene interamente spostata alla riga successiva. Scrivo i numeri da $1$ a $150$ (in cifre) e lascio uno spazio bianco tra ogni numero ed il suo successivo. Quanti spazi bianchi restano sull'ultima riga dopo l'ultimo zero?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 73
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1G2cU6gqsfkcIkAJRkZw-THMtabRgrAjY/view)


<div class="qlang-split" data-lang="en"></div>


*How many blank spaces remain on the last line after the last zero*

> The screen of my computer allows one to write $80$ characters (letters, digits or blank spaces) on each line. If there is not enough room for a word or a number at the end of the line, the word or the number is moved entirely to the next line. I write the numbers from $1$ to $150$ (in digits) and leave a blank space between each number and the next. How many blank spaces remain on the last line after the last zero?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** 73



<span class="atom-split" id="qe6" data-atom="qe6" data-title="Quesito E6" data-tags="topic_aritmetica,topic_algebra,method_backward,method_congruenze,skill_casework_accurato,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti nipoti e ovetti (divisioni esatte)*

> Per Pasqua la nonna ha fatto trovare a noi nipoti una cesta con tanti ovetti di Pasqua. Venuto il momento di dividerli, la nonna ha inventato questo criterio, che tiene conto del diritto di priorità nella scelta dei nipoti più grandi e della gola dei più piccoli: il primo nipote avrebbe preso $1$ ovetto e la sesta parte degli ovetti rimanenti, il secondo $2$ ovetti e la sesta parte dei rimanenti, il terzo $3$ ovetti e la sesta parte dei rimanenti e così via fino ad esaurire le uova. Con nostra sorpresa le divisioni sono sempre risultate esatte e alla fine avevamo tutti lo stesso numero di ovetti! La nonna ha commentato che con più ovetti non avrebbe potuto fare lo stesso miracolo. Quanti siamo e quanti ovetti c'erano nel cesto?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Ragionamento all'indietro]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 5 nipoti 25 ovetti
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1G2cU6gqsfkcIkAJRkZw-THMtabRgrAjY/view)


<div class="qlang-split" data-lang="en"></div>


*How many grandchildren there are, and how many little eggs*

> For Easter grandmother left us grandchildren a basket with many little Easter eggs. When the time came to share them out, grandmother invented this rule, which takes into account the older grandchildren's right to choose first and the younger ones' greed: the first grandchild would take $1$ little egg and a sixth of the little eggs remaining, the second $2$ little eggs and a sixth of those remaining, the third $3$ little eggs and a sixth of those remaining, and so on until the eggs ran out. To our surprise the divisions always came out exact, and in the end we all had the same number of little eggs! Grandmother remarked that with more little eggs she could not have performed the same miracle. How many of us are there, and how many little eggs were there in the basket?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Working backwards]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Answer:** 5 nipoti 25 ovetti
