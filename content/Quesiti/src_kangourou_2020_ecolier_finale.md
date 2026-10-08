---
title: Kangourou 2020 Finale nazionale Ecolier
tipo: gara
competition: Kangourou 2020 Finale nazionale Ecolier
family: kangourou
year: '2020'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2020_ecolier_finale"></div>



<span class="atom-split" id="qe1" data-atom="qe1" data-title="Quesito E1" data-tags="topic_aritmetica,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante mosse complete con 1000 spilli (gioco a tre per spillo)*

![[src_kangourou_2020_ecolier_finale__probe1.png]]

> Faccio il seguente gioco con gli spilli. Metto sul tavolo uno spillo; poi, a ogni mossa successiva, accosto alla capocchia di ciascuno degli spilli deposti nella mossa precedente le punte di altri tre spilli, come suggerito dalla figura. Se ho una scatola contenente $1000$ spilli, quante mosse complete posso fare, compresa quella con cui ho deposto il primo spillo?
> 
> (vedi figura)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 6
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1VUBD9s41NCMylc2DpExxWccVy-xFuGrT/view)


<div class="qlang-split" data-lang="en"></div>


*How many complete moves with 1000 spins (playing three per pin)*

![[src_kangourou_2020_ecolier_finale__probe1.png]]

> I'll play the following game with the pins. I place a pin on the table; then, with each subsequent move, I attach the tips of three more pins to the head of each of the pins laid in the previous move, as suggested by the figure. If I have a box containing 1000 pins, how many complete moves can I make, including the one I put the first pin with?
> 
> (see figure)

**Answer:** 6



<span class="atom-split" id="qe2" data-atom="qe2" data-title="Quesito E2" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo sacchetti da 4 penne con max due dello stesso colore*

> Luisa ha molte penne: $29$ rosse, $13$ blu e $20$ nere. Vuole confezionare dei sacchetti contenenti ciascuno $4$ penne, in modo che nessun sacchetto contenga più di due penne dello stesso colore. Quanti sacchetti può confezionare al massimo?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 15
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1VUBD9s41NCMylc2DpExxWccVy-xFuGrT/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum four-pen bags with a maximum of two of the same colour*

> Luisa has many pens: $29$ red, $13$ blue and $20$ black. She wants to pack bags containing $4$ pens, so that no bag contains more than two pens of the same color. How many bags can she pack?

**Answer:** 15



<span class="atom-split" id="qe3" data-atom="qe3" data-title="Quesito E3" data-tags="topic_logica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di libri sullo scaffale (vincoli di posizione)*

> Molti libri di differenti spessori sono allineati su uno scaffale. A sinistra del libro più spesso ci sono $20$ libri, a destra di quello più sottile ce ne sono $22$. Tra il libro più spesso e quello più sottile c'è il libro più antico, diverso da entrambi. Qual è il minimo numero di libri che possono essere allineati sullo scaffale?

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 23
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1VUBD9s41NCMylc2DpExxWccVy-xFuGrT/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of books on the shelf (position restrictions)*

> Many books of different thicknesses are lined up on a shelf. To the left of the thickest book there are $20$ books, to the right of the thinner one there are $22$. Between the thickest book and the thinnest one is the oldest book, different from both. What is the minimum number of books that can be lined up on the shelf?

**Answer:** 23



<span class="atom-split" id="qe4" data-atom="qe4" data-title="Quesito E4" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma dei quattro numeri di Giulia (somme uguali sulle diagonali)*

![[src_kangourou_2020_ecolier_finale__probe4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw[line width=2pt] (0.25,0) -- (1.75,0);
  \draw[line width=2pt] (0.25,2) -- (1.75,2);
  \draw[line width=2pt] (0,0.25) -- (0,1.75);
  \draw[line width=2pt] (2,0.25) -- (2,1.75);
  \draw[line width=2pt] (1.79,1.79) -- (1.21,1.21);
  \draw[line width=2pt] (0.79,0.79) -- (0.21,0.21);
  \draw[line width=2pt, dotted] (0.21,1.79) -- (0.79,1.21);
  \draw[line width=2pt, dotted] (1.21,0.79) -- (1.79,0.21);
  \draw[fill=white] (0,0) circle (0.25);
  \draw[fill=white] (2,0) circle (0.25);
  \draw[fill=white] (0,2) circle (0.25);
  \draw[fill=white] (2,2) circle (0.25);
  \filldraw[fill=gray!40] (1,1) circle (0.3);
  \node at (1,1) {11};
\end{tikzpicture}
\end{document}
```

> Giulia deve scrivere un numero in ogni cerchio bianco della figura qui a fianco. Vuole fare in modo che la somma dei quattro numeri che scriverà sia uguale sia alla somma dei tre numeri che compariranno nei tre cerchi collegati dalla linea tratteggiata, sia alla somma dei tre numeri che compariranno nei tre cerchi collegati dalla linea a puntini. Quanto vale la somma dei quattro numeri che scriverà Giulia?
> 
> (vedi figura)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 22
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1VUBD9s41NCMylc2DpExxWccVy-xFuGrT/view)


<div class="qlang-split" data-lang="en"></div>


*sum of the four Julian numbers (equal sums on the diagonals)*

![[src_kangourou_2020_ecolier_finale__probe4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw[line width=2pt] (0.25,0) -- (1.75,0);
  \draw[line width=2pt] (0.25,2) -- (1.75,2);
  \draw[line width=2pt] (0,0.25) -- (0,1.75);
  \draw[line width=2pt] (2,0.25) -- (2,1.75);
  \draw[line width=2pt] (1.79,1.79) -- (1.21,1.21);
  \draw[line width=2pt] (0.79,0.79) -- (0.21,0.21);
  \draw[line width=2pt, dotted] (0.21,1.79) -- (0.79,1.21);
  \draw[line width=2pt, dotted] (1.21,0.79) -- (1.79,0.21);
  \draw[fill=white] (0,0) circle (0.25);
  \draw[fill=white] (2,0) circle (0.25);
  \draw[fill=white] (0,2) circle (0.25);
  \draw[fill=white] (2,2) circle (0.25);
  \filldraw[fill=gray!40] (1,1) circle (0.3);
  \node at (1,1) {11};
\end{tikzpicture}
\end{document}
```

> Julia has to write a number in each white circle of the figure next to her. She wants to make sure that the sum of the four numbers she writes is equal to both the sum of the three numbers that will appear in the three circles connected by the dashed line, and the sum of the three numbers that will appear in the three circles connected by the dotted line. How much is the sum of the four numbers that Julia will write?
> 
> (see figure)

**Answer:** 22



<span class="atom-split" id="qe5" data-atom="qe5" data-title="Quesito E5" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Riempire griglia 6x6 con/senza numero in posizione speciale*

![[src_kangourou_2020_ecolier_finale__probe5.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) grid (6,6);
  \draw (7,0) grid (13,6);
\end{tikzpicture}
\end{document}
```

> Qui a lato vedi due griglie quadrate di $6$ righe e $6$ colonne ciascuna: puoi riempirle in molti modi diversi inserendo, uno per ogni casella, tutti i numeri interi da $1$ a $36$. Se, dopo aver riempito la griglia, accade che uno dei numeri inseriti è il più grande fra tutti quelli nella sua riga e contemporaneamente il più piccolo fra tutti quelli nella sua colonna, dirai che quel numero è in posizione speciale relativamente al modo in cui hai riempito la griglia.
> 
> Riempi la prima griglia in modo che ci sia almeno un numero in posizione speciale e la seconda in modo che non ci siano numeri in posizione speciale.
> 
> Basta che tu riempia le griglie (cerchiando nella prima il numero in posizione speciale), non sono richieste spiegazioni.
> 
> (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1VUBD9s41NCMylc2DpExxWccVy-xFuGrT/view)


<div class="qlang-split" data-lang="en"></div>


*Fill the 6x6 grid with/without special position number*

![[src_kangourou_2020_ecolier_finale__probe5.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) grid (6,6);
  \draw (7,0) grid (13,6);
\end{tikzpicture}
\end{document}
```

> Here on the side you see two square grids of $6$ rows and $6$ columns each: you can fill them in many different ways by entering, one for each box, all the integers from $1$ to $36$. If, after filling the grid, it happens that one of the numbers you entered is the largest of all those in its row and at the same time the smallest of all those in its column, you'll say that number is in a special position relative to the way you filled the grid.
> 
> Fill the first grid so that there is at least one special position number and the second so that there are no special position numbers.
> 
> As long as you fill in the grids (circling the number in a special position in the first one), no explanation is required.
> 
> (see figure)



<span class="atom-split" id="qe6" data-atom="qe6" data-title="Quesito E6" data-tags="topic_aritmetica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma dei numeri delle candeline per porzione (due tagli)*

![[src_kangourou_2020_ecolier_finale__probe6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \filldraw[fill=yellow!40, draw=black, line width=1.5pt] (0,0) circle (2.5);
  \node at (0, 2.15) {12};
  \node at (1.075, 1.86) {1};
  \node at (1.86, 1.075) {2};
  \node at (2.15, 0) {3};
  \node at (1.86, -1.075) {4};
  \node at (1.075, -1.86) {5};
  \node at (0, -2.15) {6};
  \node at (-1.075, -1.86) {7};
  \node at (-1.86, -1.075) {8};
  \node at (-2.15, 0) {9};
  \node at (-1.86, 1.075) {10};
  \node at (-1.075, 1.86) {11};
\end{tikzpicture}
\end{document}
```

> Sulla torta di compleanno di Rita sono disposte in modo regolare $12$ candeline, ciascuna denotata con il suo numero (come se fossero le ore su un orologio, come suggerito dalla figura). Rita fa due tagli rettilinei distinti, che attraversano la torta completamente, e la suddividono in alcune porzioni. Se ogni candelina sta su una sola porzione e le somme dei numeri sulle candeline di ciascuna porzione sono tutte uguali, qual è la somma dei numeri delle candeline su ciascuna porzione?
> 
> (vedi figura)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 26
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1VUBD9s41NCMylc2DpExxWccVy-xFuGrT/view)


<div class="qlang-split" data-lang="en"></div>


*Sum of the numbers of the candles per serving (two cuts)*

![[src_kangourou_2020_ecolier_finale__probe6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \filldraw[fill=yellow!40, draw=black, line width=1.5pt] (0,0) circle (2.5);
  \node at (0, 2.15) {12};
  \node at (1.075, 1.86) {1};
  \node at (1.86, 1.075) {2};
  \node at (2.15, 0) {3};
  \node at (1.86, -1.075) {4};
  \node at (1.075, -1.86) {5};
  \node at (0, -2.15) {6};
  \node at (-1.075, -1.86) {7};
  \node at (-1.86, -1.075) {8};
  \node at (-2.15, 0) {9};
  \node at (-1.86, 1.075) {10};
  \node at (-1.075, 1.86) {11};
\end{tikzpicture}
\end{document}
```

> On Rita's birthday cake, $12$ candles are arranged regularly, each marked with its own number (as if they were hours on a clock, as suggested by the figure). Rita makes two distinct straight cuts, which cross the cake completely, and divide it into portions. If each candle is on a single serving and the sum of the numbers on the candles of each serving are all the same, what is the sum of the numbers on the candles of each serving?
> 
> (see figure)

**Answer:** 26
