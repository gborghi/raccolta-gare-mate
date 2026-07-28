---
title: Olimpíada Brasileira de Matemática 2019 — Nível 1 — Fase x
tipo: gara
competition: Olimpíada Brasileira de Matemática 2019 — Nível 1 — Fase x
family: obm
year: '2019'
level: OBM Nível 1
---
<div class="atom-reader" data-gara="Quesiti/src_obm_2019_n1_fx"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_algebra,method_casework,method_fattorizzazione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Find integers O, B, M as exponents summing to 24*

> The letters $O$, $B$, $M$ represent positive integers used as exponents, such that
> $$2^O + 2^B + 2^M = 24.$$
> a) In a case where $O$, $B$, and $M$ represent the same number, what is that number?
> 
> b) Show that $O$ cannot equal $1$.
> 
> c) In a case where $O$ is twice $M$, what is the value of $B$?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1pakMGdmqn3t7vFmFJmF7aCi7jvCUTIEX/view)


<span class="qlang-split" data-lang="it"></span>


*Trova i numeri interi O, B, M come esponenti che sommano a 24*

> Le lettere $O$, $B$, $M$ rappresentano numeri interi positivi utilizzati come esponenti, come $$2^O + 2^B + 2^M = 24.$$ a) In un caso in cui $O$, $B$ e $M$ rappresentano lo stesso numero, quale è quel numero?
> 
> b) Indicare che $O$ non può essere uguale a $1$.
> 
> c) In un caso in cui $O$ è doppio di $M$, qual è il valore di $B$?

[[src_obm_2019_n1_fx__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,method_casework,method_conteggio,method_casi_conteggio,skill_conteggio_sistematico,skill_casework_accurato,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Count ways to place colored tiles on a 2×5 grid*

> Betinha has 3 white tiles, 4 black tiles, and 3 gray tiles, all the same size and differing only in color. She places these tiles on the board below, which is made up of equal small squares, at most one tile per small square.
> 
> In how many different ways can she fill the board so that:
> 
> a) exactly three tiles are placed, with one white tile, one black tile, and one gray tile only in the first horizontal row?
> 
> b) exactly three black tiles are in the second horizontal row?
> 
> c) exactly three tiles of different colors are placed?
> 
> d) all ten tiles are placed, so that in any two small squares sharing a side there are no two black tiles?

![[src_obm_2019_n1_fx__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_casi_conteggio|Casi e conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1pakMGdmqn3t7vFmFJmF7aCi7jvCUTIEX/view)


<span class="qlang-split" data-lang="it"></span>


*Contare i modi per posizionare le piastrelle colorate su una griglia 2×5*

> Betinha ha 3 piastrelle bianche, 4 piastrelle nere e 3 piastrelle grigie, tutte della stessa dimensione e che differiscono solo di colore. Lei mette queste piastrelle sul tavolo di sotto, che è composto da quadrati piccoli uguali, al massimo una piastrella per piccolo quadrato.
> 
> In quanti modi può riempire il tavolo in modo che:
> 
> a) sono poste esattamente tre piastrelle, con una piastrella bianca, una piastrella nera e una piastrella grigia solo nella prima riga orizzontale?
> 
> b) nella seconda riga orizzontale ci sono esattamente tre piastrelle nere?
> 
> (c) vengono disposte esattamente tre piastrelle di colori diversi?
> 
> d) tutte le dieci piastrelle sono posizionate in modo tale che in due piccoli quadrati che condividono un lato non ci siano due piastrelle nere?

![[src_obm_2019_n1_fx__Q02.png]]

[[src_obm_2019_n1_fx__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_geometria_piana,method_ricorsione,method_casework,skill_riconoscimento_pattern,skill_conteggio_sistematico,skill_ragionamento_geometrico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Spiral-filled large grid; find last number of third layer and triangle distances*

> The figure below represents a very large board made up of $1\,\text{cm}$ square cells, in which positive integers are filled in increasing order, starting from $1$ and forming "layers" around it. The first layer is formed by the numbers $2$ through $9$; the second layer is formed by the numbers $2$ through $9$, and immediately after completing the second layer, it starts the third layer with the number $10$ in the cell to the left of $9$.
> 
> (See the figure: the spiral fills outward, layer by layer. A triangle can be formed by using one horizontal side and one vertical side of the grid, with the hypotenuse connecting their endpoints.)
> 
> To calculate the distance from square $1$ to square $N$ (not on the same row or column), we can form a triangle with a horizontal leg, a vertical leg, and the hypotenuse connecting the centers of squares $1$ and $N$. For example, in the figure the triangle that could be used to calculate the distance from square $1$ to square $12$ has horizontal leg $2\,\text{cm}$ and vertical leg $2\,\text{cm}$.
> 
> a) What is the last number in the third layer?
> 
> b) Determine the horizontal and vertical legs of the triangle that could be used to calculate the distance from square $1$ to square $33$.
> 
> c) Determine the legs of the triangle that could be used to calculate the distance from square $1$ to square $2019$.

![[src_obm_2019_n1_fx__Q03.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1pakMGdmqn3t7vFmFJmF7aCi7jvCUTIEX/view)


<span class="qlang-split" data-lang="it"></span>


*Grande griglia piena di spirale; trovare l'ultimo numero di distanze del terzo strato e del triangolo*

> La figura seguente rappresenta una tabella molto grande composta da celle quadrate $1\,\text{cm}$, in cui i numeri interi positivi sono riempiti in ordine crescente, partendo da $1$ e formando "strati" attorno a essa. Il primo strato è formato dai numeri $2$ attraverso $9$; il secondo strato è formato dai numeri $2$ attraverso $9$, e immediatamente dopo aver completato il secondo strato, inizia il terzo strato con il numero $10$ nella cella a sinistra di $9$.
> 
> (Vedi la figura: la spirale si riempie verso l'esterno, strato dopo strato. Un triangolo può essere formato utilizzando un lato orizzontale e un lato verticale della griglia, con l'ipotenusa che collega i loro punti terminali.)
> 
> Per calcolare la distanza dal quadrato $1$ al quadrato $N$ (non sulla stessa riga o colonna), possiamo formare un triangolo con una gamba orizzontale, una gamba verticale e l'ipotenusa che collega i centri dei quadrati $1$ e $N$. Per esempio, nella figura il triangolo che potrebbe essere utilizzato per calcolare la distanza da quadrato $1$ a quadrato $12$ ha la gamba orizzontale $2\,\text{cm}$ e la gamba verticale $2\,\text{cm}$.
> 
> a) Qual è l'ultimo numero del terzo strato?
> 
> b) Determinare le zampe orizzontali e verticali del triangolo che potrebbero essere utilizzate per calcolare la distanza da quadrato $1$ a quadrato $33$.
> 
> c) Determinare le gambe del triangolo che potrebbero essere utilizzate per calcolare la distanza da quadrato $1$ a quadrato $2019$.

![[src_obm_2019_n1_fx__Q03.png]]

[[src_obm_2019_n1_fx__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,topic_algebra,method_casework,method_simmetria,skill_manipolazione_algebrica,skill_lettura_attenta,skill_casework_accurato,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Place digits 0–10 in a cross-shaped drawing satisfying sum conditions*

> The numbers $0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10$ must be placed, one in each cell of the drawing below, satisfying the following conditions:
> 
> $$\begin{array}{|c|}\hline 0 \\ \hline x \quad S \\ \hline y \hline \end{array}$$
> 
> - Each number appears exactly once.
> - The sums of the numbers in each of the three horizontal rows of three cells, and the sum of the numbers in the vertical bar of five cells, must all be equal.
> - The numbers $0$ and $8$ are already placed and cannot be moved.
> 
> Find all possible values of $x + y$ and, for each value, give an example of how to fill in all the numbers.

![[src_obm_2019_n1_fx__Q04.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Casework]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1pakMGdmqn3t7vFmFJmF7aCi7jvCUTIEX/view)


<span class="qlang-split" data-lang="it"></span>


*Inserire le cifre 010 in un disegno a forma incrociata che soddisfi le condizioni di somma*

> I numeri $0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10$ devono essere inseriti, uno in ogni cella del disegno di seguito, soddisfacendo le seguenti condizioni:
> 
> $$\begin{array}{|c|}\hline 0 \\ \hline x \quad S \\ \hline y \hline \end{array}$$
> 
> - Ogni numero appare esattamente una volta. - La somma dei numeri in ciascuna delle tre righe orizzontali di tre celle e la somma dei numeri nella barra verticale di cinque celle devono essere tutte uguali. - I numeri $0$ e $8$ sono già inseriti e non possono essere spostati.
> 
> Trovare tutti i valori possibili di $x + y$ e, per ogni valore, fornire un esempio di come compilare tutti i numeri.

![[src_obm_2019_n1_fx__Q04.png]]

[[src_obm_2019_n1_fx__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,topic_combinatoria,topic_aritmetica,method_conteggio,method_coordinate,method_casework,skill_ragionamento_geometrico,skill_modellizzazione,skill_conteggio_sistematico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Count lattice points inside axis-aligned rectangles and squares on an infinite grid*

> The figure below shows an infinite grid formed by $1\,\text{cm}$ squares, with the vertices (lattice points) of the squares highlighted.
> 
> Observe that a highlighted square with side $2\,\text{cm}$ (with sides parallel to the grid lines) has exactly $5$ lattice points of the grid in its interior, and a highlighted rectangle has exactly $2$ lattice points in its interior.
> 
> a) Present a rectangle with vertices on the grid that has exactly $2019$ lattice points in its interior.
> 
> b) Show that there exist two squares with vertices on the grid and with non-parallel sides, such that each has exactly $100$ lattice points in its interior.
> 
> c) Show that there exists a square with vertices on the grid that has exactly $84$ lattice points in its interior.

![[src_obm_2019_n1_fx__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_coordinate|Coordinate]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1pakMGdmqn3t7vFmFJmF7aCi7jvCUTIEX/view)


<span class="qlang-split" data-lang="it"></span>


*Contare i punti della griglia all'interno di rettangoli e quadrati allineati all'asse su una griglia infinita*

> La figura seguente mostra una griglia infinita formata da quadrati $1\,\text{cm}$, con le vertici (punti di rete) dei quadrati evidenziati.
> 
> Si osserva che un quadrato evidenziato con lato $2\,\text{cm}$ (con lati paralleli alle linee della griglia) ha esattamente $5$ punti reticola della griglia all'interno e un rettangolo evidenziato ha esattamente $2$ punti reticola all'interno.
> 
> a) Presenta un rettangolo con vertici sulla griglia che ha esattamente $2019$ punti reticolari all'interno.
> 
> b) Indicare che esistono due quadrati con vertici sulla griglia e con lati non paralleli, in modo che ciascuno abbia esattamente $100$ punti reticolari all'interno.
> 
> c) Indicare che esiste un quadrato con vertici sulla griglia che ha esattamente $84$ punti reticolari all'interno.

![[src_obm_2019_n1_fx__Q05.png]]

[[src_obm_2019_n1_fx__Q05]]
