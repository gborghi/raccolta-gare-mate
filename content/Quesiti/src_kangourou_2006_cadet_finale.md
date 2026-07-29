---
title: Kangourou 2006 - Cadet (finale nazionale)
tipo: gara
competition: Kangourou 2006 - Cadet (finale nazionale)
family: kangourou
year: '2006'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2006_cadet_finale"></div>



<span class="atom-split" id="qc1" data-atom="qc1" data-title="Quesito C1" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Frazione grigia tra cerchi concentrici*

![[src_kangourou_2006_cadet_finale__probC1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!60] (0,0) circle (3);
  \fill[white] (-1,1) circle (0.5);
  \fill[white] (1,1) circle (0.5);
  \fill[white] (0,-1) circle (1);
  \draw (0,0) circle (3);
  \draw (-1,1) circle (0.5);
  \draw (1,1) circle (0.5);
  \draw (0,-1) circle (1);
\end{tikzpicture}
\end{document}
```

> Il raggio dei due cerchi piccoli è un sesto del raggio del cerchio grande. Il raggio del cerchio di media misura è il doppio di quello dei cerchi piccoli. Quale frazione del cerchio grande è colorata in grigio? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 5/6
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oNnFL23n9WfxOc8CMwyvvJmHD7pBCd5S/view)


<span class="qlang-split" data-lang="en"></span>


*Gray fraction between concentric circles*

![[src_kangourou_2006_cadet_finale__probC1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!60] (0,0) circle (3);
  \fill[white] (-1,1) circle (0.5);
  \fill[white] (1,1) circle (0.5);
  \fill[white] (0,-1) circle (1);
  \draw (0,0) circle (3);
  \draw (-1,1) circle (0.5);
  \draw (1,1) circle (0.5);
  \draw (0,-1) circle (1);
\end{tikzpicture}
\end{document}
```

> The radius of the two small circles is one sixth of the radius of the large circle. The radius of the medium-sized circle is twice that of the small circles. What fraction of the large circle is colored gray? (see figure)

**Answer:** 5/6
[[src_kangourou_2006_cadet_finale__QC1]]



<span class="atom-split" id="qc2" data-atom="qc2" data-title="Quesito C2" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Traiettoria del punto medio della sbarra che scivola*

![[src_kangourou_2006_cadet_finale__probC2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!40] (-0.3,-0.3) rectangle (3.5,0);
  \fill[gray!40] (-0.3,-0.3) rectangle (0,3.5);
  \draw[thick] (0,3.5) -- (0,0) -- (3.5,0);
  \draw[line width=1.5pt] (0,3) -- (3,0);
  \filldraw (1.5,1.5) circle (3pt);
  \node[right] at (1.6,1.5) {$M$};
\end{tikzpicture}
\end{document}
```

> Una sbarra metallica, che per semplicità supponiamo filiforme e il cui punto medio è denotato con $M$, è appoggiata in piedi contro un muro e aderisce ad una parete con cui il muro fa angolo. Il muro ed il pavimento sono di marmo molto lucido, per cui lentamente la sbarra scivola, mantenendosi sempre aderente alla parete, fino ad adagiarsi sul pavimento (la figura schematizza la posizione della sbarra in un singolo istante durante il movimento: la parete è simboleggiata dal foglio). Che traiettoria descrive $M$ sulla parete? Motiva la tua affermazione. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** quarto di circonferenza
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oNnFL23n9WfxOc8CMwyvvJmHD7pBCd5S/view)


<span class="qlang-split" data-lang="en"></span>


*Trajectory of the midpoint of the sliding bar*

![[src_kangourou_2006_cadet_finale__probC2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!40] (-0.3,-0.3) rectangle (3.5,0);
  \fill[gray!40] (-0.3,-0.3) rectangle (0,3.5);
  \draw[thick] (0,3.5) -- (0,0) -- (3.5,0);
  \draw[line width=1.5pt] (0,3) -- (3,0);
  \filldraw (1.5,1.5) circle (3pt);
  \node[right] at (1.6,1.5) {$M$};
\end{tikzpicture}
\end{document}
```

> A metal bar, which for simplicity's sake is assumed to be threaded and whose middle point is denoted by $M$, is supported against a wall and adheres to a wall with which the wall makes an angle. The wall and floor are of very polished marble, so the bar slides slowly, always sticking to the wall, until it lies on the floor (the figure schematizes the bar's position in a single moment during the movement: the wall is symbolized by the sheet). What trajectory does$M$describe on the wall? Reason for your statement. (see figure)

**Answer:** quarto di circonferenza
[[src_kangourou_2006_cadet_finale__QC2]]



<span class="atom-split" id="qc3" data-atom="qc3" data-title="Quesito C3" data-tags="topic_geometria_piana,topic_algebra,method_fattorizzazione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Relazione area e perimetro del rettangolo con quadrato*

![[src_kangourou_2006_cadet_finale__probC3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[line width=1pt] (0,0) rectangle (4,2);
  \draw[line width=1pt] (0,2) -- (4,0);
  \draw[line width=1pt] (2.667,0.667) rectangle (4,2);
\end{tikzpicture}
\end{document}
```

> In figura sono rappresentati un rettangolo di base $a$ e altezza $b$, ed un quadrato avente un vertice sulla diagonale del rettangolo e il vertice opposto in comune con il rettangolo. Che cosa si può dire circa i numeri che forniscono (rispetto alle opportune unità di misura) l'area e il perimetro del rettangolo se il quadrato ha lato $2$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** sono uguali
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oNnFL23n9WfxOc8CMwyvvJmHD7pBCd5S/view)


<span class="qlang-split" data-lang="en"></span>


*Relation area and perimeter of rectangle to square*

![[src_kangourou_2006_cadet_finale__probC3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[line width=1pt] (0,0) rectangle (4,2);
  \draw[line width=1pt] (0,2) -- (4,0);
  \draw[line width=1pt] (2.667,0.667) rectangle (4,2);
\end{tikzpicture}
\end{document}
```

> The figure shows a base rectangle $a$ and height $b$, and a square with a vertex on the diagonal of the rectangle and the opposite vertex in common with the rectangle. What can be said about the numbers that provide (with respect to appropriate units of measurement) the area and perimeter of the rectangle if the square has sides $2$? (see figure)

**Answer:** sono uguali
[[src_kangourou_2006_cadet_finale__QC3]]



<span class="atom-split" id="qc4" data-atom="qc4" data-title="Quesito C4" data-tags="topic_combinatoria,method_colorazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di colori per gli spicchi del cerchio*

![[src_kangourou_2006_cadet_finale__probC4.png]]

> Un cerchio è stato diviso in un certo numero di spicchi (almeno 4), ad esempio come in figura. Sei stato incaricato di colorare l'interno di ogni spicchio in modo che tra due spicchi di ugual colore ce ne siano sempre almeno due di colore diverso, ma non conosci il numero degli spicchi del cerchio (quello in figura è solo un esempio!). Qual è il più piccolo numero di colori che ti garantirà di riuscirci, indipendentemente dal numero degli spicchi? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 5
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oNnFL23n9WfxOc8CMwyvvJmHD7pBCd5S/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of colours for spikes of the circle*

![[src_kangourou_2006_cadet_finale__probC4.png]]

> A circle has been divided into a number of points (at least 4), for example as shown in Figure 1. You have been instructed to paint the inside of each spike so that between two spikes of the same color there are always at least two of a different color, but you do not know the number of spikes in the circle (that in the figure is just an example!). What's the smallest number of colors that will guarantee you'll make it, regardless of the number of spikes? (see figure)

**Answer:** 5
[[src_kangourou_2006_cadet_finale__QC4]]



<span class="atom-split" id="qc5" data-atom="qc5" data-title="Quesito C5" data-tags="topic_aritmetica,topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Risultato della somma ORE+ORE+ORE=VIVE*

![[src_kangourou_2006_cadet_finale__probC5.png]]

> Nell'operazione indicata, ogni lettera rappresenta una cifra: lettere uguali rappresentano cifre uguali e lettere diverse rappresentano cifre diverse; inoltre nessuna lettera rappresenta la cifra $0$. Quanto vale il risultato?
> 
> $$\begin{array}{r} \text{ORE} \\ \text{ORE} \\ +\; \text{ORE} \\ \hline \text{VIVE} \end{array}$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2625
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oNnFL23n9WfxOc8CMwyvvJmHD7pBCd5S/view)


<span class="qlang-split" data-lang="en"></span>


*Result of the sum of ORE+ORE+ORE=VIVE*

![[src_kangourou_2006_cadet_finale__probC5.png]]

> In the operation indicated, each letter represents a digit: equal letters represent equal numbers and different letters represent different numbers; furthermore, no letter represents the $0$ digit. How much is the result worth?
> 
> $$\begin{array}{r} \text{ORE} \\ \text{ORE} \\ +\; \text{ORE} \\ \hline \text{VIVE} \end{array}$$

**Answer:** 2625
[[src_kangourou_2006_cadet_finale__QC5]]



<span class="atom-split" id="qc6" data-atom="qc6" data-title="Quesito C6" data-tags="topic_aritmetica,topic_combinatoria,method_conteggio,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri con cifre consecutive e numero dispari di divisori*

> Considera i numeri di $3$ cifre le cui cifre possano essere riordinate in modo da formare terne di cifre consecutive (ad es. le cifre di $786$ si possono riordinare nella terna $678$, costituita da cifre consecutive). Quanti di questi numeri hanno un numero dispari di divisori (diversi fra loro)?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** due
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oNnFL23n9WfxOc8CMwyvvJmHD7pBCd5S/view)


<span class="qlang-split" data-lang="en"></span>


*Numbers with consecutive digits and odd number of divisors*

> It considers the numbers of $3$ digits whose digits can be rearranged to form sets of consecutive digits (e.g. the digits of $786$ may be rearranged in the row $678$, consisting of consecutive digits). How many of these numbers have a odd number of divisors (different between them)?

**Answer:** due
[[src_kangourou_2006_cadet_finale__QC6]]
