---
title: Kangourou 2009 - Ecolier finale nazionale (Mirabilandia)
tipo: gara
competition: Kangourou 2009 - Ecolier finale nazionale (Mirabilandia)
family: kangourou
year: '2009'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2009_ecolier_maggio"></div>



<span class="atom-split" id="qe1" data-atom="qe1" data-title="Quesito E1" data-tags="topic_aritmetica,method_casework,skill_modellizzazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo litri di sciroppo preparabili*

> (*5 punti*) Per preparare 4 litri di sciroppo occorrono esattamente 3 litri d'acqua, 1 litro di succo concentrato e 500 grammi di zucchero. Hai a disposizione 18 litri d'acqua, 5 litri di succo concentrato e 2 chili di zucchero. Quanti litri di sciroppo puoi preparare al massimo?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 16
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f1h1TJscOH5tK9jr84T2t5qStr4PB-2H/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum litres of syrup that can be prepared*

> (*5 points*) To prepare 4 litres of syrup, you need exactly 3 litres of water, 1 litre of concentrated juice, and 500 grams of sugar. You have 18 litres of water, 5 litres of concentrated juice, and 2 kilograms of sugar available. What is the maximum number of litres of syrup you can prepare?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="qe2" data-atom="qe2" data-title="Quesito E2" data-tags="topic_combinatoria,topic_logica,method_casework,skill_casework_accurato,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di carte rimaste levandone due*

![[src_kangourou_2009_ecolier_maggio__probE2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
% 15 cards in triangular arrangement, rows 1..5
% card width=0.5, height=0.7, hgap=0.15, vgap=0.1
% row 1 (top): 1 card
\draw (0,0) rectangle (0.5,0.7);
% row 2: 2 cards
\draw (-0.325,-0.8) rectangle (0.175,-0.1);
\draw (0.325,-0.8) rectangle (0.825,-0.1);
% row 3: 3 cards
\draw (-0.65,-1.6) rectangle (-0.15,-0.9);
\draw (0,-1.6) rectangle (0.5,-0.9);
\draw (0.65,-1.6) rectangle (1.15,-0.9);
% row 4: 4 cards
\draw (-0.975,-2.4) rectangle (-0.475,-1.7);
\draw (-0.325,-2.4) rectangle (0.175,-1.7);
\draw (0.325,-2.4) rectangle (0.825,-1.7);
\draw (0.975,-2.4) rectangle (1.475,-1.7);
% row 5: 5 cards
\draw (-1.3,-3.2) rectangle (-0.8,-2.5);
\draw (-0.65,-3.2) rectangle (-0.15,-2.5);
\draw (0,-3.2) rectangle (0.5,-2.5);
\draw (0.65,-3.2) rectangle (1.15,-2.5);
\draw (1.3,-3.2) rectangle (1.8,-2.5);
\end{tikzpicture}
\end{document}
```

> (*7 punti*) In figura sono rappresentate 15 carte.
> 
> Se una carta (che non sia la prima in alto) sparisce dal tavolo, devono sparire anche le carte che sono a contatto con essa nella riga superiore. Ha levato due carte in modo che rimanesse il minor numero di carte possibile: qual è questo numero? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 3
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f1h1TJscOH5tK9jr84T2t5qStr4PB-2H/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of cards left after removing two*

![[src_kangourou_2009_ecolier_maggio__probE2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
% 15 cards in triangular arrangement, rows 1..5
% card width=0.5, height=0.7, hgap=0.15, vgap=0.1
% row 1 (top): 1 card
\draw (0,0) rectangle (0.5,0.7);
% row 2: 2 cards
\draw (-0.325,-0.8) rectangle (0.175,-0.1);
\draw (0.325,-0.8) rectangle (0.825,-0.1);
% row 3: 3 cards
\draw (-0.65,-1.6) rectangle (-0.15,-0.9);
\draw (0,-1.6) rectangle (0.5,-0.9);
\draw (0.65,-1.6) rectangle (1.15,-0.9);
% row 4: 4 cards
\draw (-0.975,-2.4) rectangle (-0.475,-1.7);
\draw (-0.325,-2.4) rectangle (0.175,-1.7);
\draw (0.325,-2.4) rectangle (0.825,-1.7);
\draw (0.975,-2.4) rectangle (1.475,-1.7);
% row 5: 5 cards
\draw (-1.3,-3.2) rectangle (-0.8,-2.5);
\draw (-0.65,-3.2) rectangle (-0.15,-2.5);
\draw (0,-3.2) rectangle (0.5,-2.5);
\draw (0.65,-3.2) rectangle (1.15,-2.5);
\draw (1.3,-3.2) rectangle (1.8,-2.5);
\end{tikzpicture}
\end{document}
```

> (*7 points*) The figure shows 15 cards.
>
> If a card (other than the topmost one) disappears from the table, the cards that are in contact with it in the top row must also disappear. Two cards were removed so that the fewest possible cards remained: what is this number? (see figure)


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qe3" data-atom="qe3" data-title="Quesito E3" data-tags="topic_combinatoria,method_conteggio,method_casework,skill_casework_accurato,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti modi di sistemare 4 monete su scacchiera 4x4*

![[src_kangourou_2009_ecolier_maggio__probE3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
% 4x4 chessboard-like grid, shaded where (row+col) is odd
\foreach \r in {0,1,2,3}{
  \foreach \c in {0,1,2,3}{
    \pgfmathparse{int(mod(\r+\c,2))}
    \ifnum\pgfmathresult=1
      \fill[gray!40] (\c,\r) rectangle (\c+1,\r+1);
    \fi
    \draw (\c,\r) rectangle (\c+1,\r+1);
  }
}
\end{tikzpicture}
\end{document}
```

> (*11 punti*) Devi sistemare 4 monete identiche in altrettante caselle di una scacchiera $4 \times 4$ rispettando le regole seguenti:
> 
> - in nessuna riga e in nessuna colonna può esserci più di una moneta;
> - se in una casella c'è una moneta, ogni casella che abbia in comune con essa qualche vertice non può contenere monete.
> 
> In quanti modi diversi puoi realizzare il progetto?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f1h1TJscOH5tK9jr84T2t5qStr4PB-2H/view)


<div class="qlang-split" data-lang="en"></div>


*How many ways are there to arrange 4 coins on a 4x4 chessboard?*

![[src_kangourou_2009_ecolier_maggio__probE3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
% 4x4 chessboard-like grid, shaded where (row+col) is odd
\foreach \r in {0,1,2,3}{
  \foreach \c in {0,1,2,3}{
    \pgfmathparse{int(mod(\r+\c,2))}
    \ifnum\pgfmathresult=1
      \fill[gray!40] (\c,\r) rectangle (\c+1,\r+1);
    \fi
    \draw (\c,\r) rectangle (\c+1,\r+1);
  }
}
\end{tikzpicture}
\end{document}
```

> (*11 points*) You must place 4 identical coins in 4 corresponding squares on a $4 \times 4$ chessboard, observing the following rules:
>
> - No row or column may contain more than one coin;
> - If a square contains a coin, then no square that shares any vertex with it may contain a coin.
>
> In how many different ways can you accomplish the task?


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qe4" data-atom="qe4" data-title="Quesito E4" data-tags="topic_aritmetica,method_casework,method_fattorizzazione,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Pesi delle etichette ancora da preparare*

> (*14 punti*) Una ditta produce cioccolatini tutti dello stesso peso e li vuole vendere in confezioni da 36, 28, 24 o 16 pezzi. Su ogni confezione va apposta un'etichetta che riporta il peso netto del contenuto; sono state già preparate etichette indicanti 630 grammi e altre indicanti 360 grammi. Quali pesi dovranno indicare le etichette ancora da preparare?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 810,540
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f1h1TJscOH5tK9jr84T2t5qStr4PB-2H/view)


<div class="qlang-split" data-lang="en"></div>


*Weight of labels still to be prepared*

> (*14 points*) A company produces chocolates all of the same weight and wants to sell them in packs of 36, 28, 24, or 16 pieces. Each pack must have a label showing the net weight of the contents; labels indicating 630 grams and others indicating 360 grams have already been prepared. What weights must the labels that still need to be prepared indicate?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="qe5" data-atom="qe5" data-title="Quesito E5" data-tags="topic_combinatoria,topic_aritmetica,method_casework,method_fattorizzazione,skill_casework_accurato,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto dei tre numeri dell'esagono (griglia)*

> (*18 punti*) Poni in ognuno dei triangoli ombreggiati della griglia in figura uno dei sei numeri 1, 2, 3, 4, 5, 6 utilizzandoli tutti e facendo in modo che il numero che compare in ciascun triangolo bianco sia il prodotto dei tre numeri che compaiono nei tre triangoli ombreggiati che lo circondano.
> 
> Qual è il prodotto dei tre numeri che stanno nei triangoli ombreggiati che, uniti a quelli bianchi, formano un esagono? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 40
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f1h1TJscOH5tK9jr84T2t5qStr4PB-2H/view)


<div class="qlang-split" data-lang="en"></div>


*Product of the three numbers of the hexagon (grid)*

> (*18 points*) Place one of the six numbers 1, 2, 3, 4, 5, 6 in each of the shaded triangles in the grid shown in the figure, using all of them, and make sure that the number in each white triangle is the product of the three numbers in the three shaded triangles surrounding it.
>
> What is the product of the three numbers in the shaded triangles that, together with the white triangles, form a hexagon? (see figure)


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="qe6" data-atom="qe6" data-title="Quesito E6" data-tags="topic_combinatoria,topic_logica,method_casework,skill_modellizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Tempo minimo per traghettare quattro barche*

> (*22 punti*) Quattro barche $A$, $B$, $C$, $D$ possono attraversare un fiume da una sponda all'altra nei due sensi; il tempo impiegato da ogni barca non dipende dal senso. La barca $A$ impiega 2 minuti per la traversata, la barca $B$ ne impiega 4, la barca $C$ ne impiega 8 e la barca $D$ ne impiega 16. Le quattro barche si trovano ormeggiate insieme sulla sponda sinistra, devono essere tutte traghettate sulla sponda destra ed è disponibile un solo timoniere. Una barca può trascinarsi al più un'altra, ma in questo caso il convoglio delle due barche impiega il tempo di traversata della barca più lenta fra le due. Una volta effettuata una traversata, il timoniere può ritornare al punto di partenza solo utilizzando una delle quattro barche. Trovate il tempo minore (in minuti) che consente di effettuare l'operazione, trascurando il tempo necessario ad agganciare e sganciare le barche e a trasbordare da una all'altra.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 30
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f1h1TJscOH5tK9jr84T2t5qStr4PB-2H/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum time to ferry four boats*

> (*22 points*) Four boats $A$, $B$, $C$, $D$ can cross a river from one bank to the other in both directions; the time taken by each boat does not depend on the direction. Boat $A$ takes 2 minutes to cross, boat $B$ takes 4 minutes, boat $C$ takes 8 minutes, and boat $D$ takes 16 minutes. The four boats are moored together on the left bank; all of them must be ferried to the right bank, and only one helmsman is available. A boat can tow at most one other boat, but in that case the two-boat convoy takes as long to cross as the slower of the two boats. Once a crossing has been completed, the helmsman can return to the starting point only by using one of the four boats. Find the minimum time (in minutes) that makes the operation possible, ignoring the time needed to attach and detach the boats and to transfer from one boat to another.


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
