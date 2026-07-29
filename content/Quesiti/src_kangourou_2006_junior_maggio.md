---
title: Kangourou 2006 Junior finale (maggio)
tipo: gara
competition: Kangourou 2006 Junior finale (maggio)
family: kangourou
year: '2006'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2006_junior_maggio"></div>



<span class="atom-split" id="qj1" data-atom="qj1" data-title="Quesito J1" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Traiettoria del punto medio della sbarra che scivola*

![[src_kangourou_2006_junior_maggio__probJ1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[line width=1pt] (0,3) -- (2.4,0);
  \fill (1.2,1.5) circle (2.2pt);
  \node at (1.7,1.6) {$M$};
  \draw[line width=1.2pt] (0,3.2) -- (0,0) -- (3,0);
\end{tikzpicture}
\end{document}
```

> Una sbarra metallica, che per semplicità supponiamo filiforme e il cui punto medio è denotato con $M$, è appoggiata in piedi contro un muro e aderisce ad una parete con cui il muro fa angolo. Il muro ed il pavimento sono di marmo molto lucido, per cui lentamente la sbarra scivola, mantenendosi sempre aderente alla parete, fino ad adagiarsi sul pavimento (la figura schematizza la posizione della sbarra in un singolo istante durante il movimento: la parete è simboleggiata dal foglio). Che traiettoria descrive $M$ sulla parete? Motiva la tua affermazione. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** un quarto di circonferenza
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oKF7UHyuDs_rLmhESoSgAg7wkcXYDjTf/view)


<span class="qlang-split" data-lang="en"></span>


*Trajectory of the midpoint of the sliding bar*

![[src_kangourou_2006_junior_maggio__probJ1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[line width=1pt] (0,3) -- (2.4,0);
  \fill (1.2,1.5) circle (2.2pt);
  \node at (1.7,1.6) {$M$};
  \draw[line width=1.2pt] (0,3.2) -- (0,0) -- (3,0);
\end{tikzpicture}
\end{document}
```

> A metal bar, which for simplicity's sake is assumed to be threaded and whose middle point is denoted by $M$, is supported against a wall and adheres to a wall with which the wall makes an angle. The wall and floor are of very polished marble, so the bar slides slowly, always sticking to the wall, until it lies on the floor (the figure schematizes the bar's position in a single moment during the movement: the wall is symbolized by the sheet). What trajectory does$M$describe on the wall? Reason for your statement. (see figure)

**Answer:** un quarto di circonferenza
[[src_kangourou_2006_junior_maggio__QJ1]]



<span class="atom-split" id="qj2" data-atom="qj2" data-title="Quesito J2" data-tags="topic_combinatoria,topic_disuguaglianze,method_disuguaglianze,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma minima dei valori assoluti su circonferenza numerata*

> Denotiamo con $n$ un numero intero maggiore di 1 e supponiamo che $n$ punti di una circonferenza siano numerati da 1 a $n$ in un ordine del tutto casuale. Per ogni coppia (non ordinata) di punti adiacenti consideriamo il valore assoluto della differenza dei due numeri corrispondenti; sommiamo quindi tutti i valori assoluti così ottenuti. Quanto vale al minimo questa somma?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2n-2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oKF7UHyuDs_rLmhESoSgAg7wkcXYDjTf/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum sum of absolute values on numbered circumference*

> Let's denote with $n$ an integer greater than 1 and assume that $n$ points of a circumference are numbered from 1 to $n$ in a completely random order. For each pair of adjacent (unordered) points we consider the absolute value of the difference of the two corresponding numbers; we add up all the absolute values thus obtained. What is the minimum amount of this sum?

**Answer:** 2n-2
[[src_kangourou_2006_junior_maggio__QJ2]]



<span class="atom-split" id="qj3" data-atom="qj3" data-title="Quesito J3" data-tags="topic_combinatoria,method_colorazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di colori per gli spicchi*

![[src_kangourou_2006_junior_maggio__probJ3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[line width=1pt] (0,0) circle (2);
  \draw[line width=1pt] (2,0) -- (-2,0);
  \draw[line width=1pt] (1.41421,1.41421) -- (-1.41421,-1.41421);
  \draw[line width=1pt] (0,2) -- (0,-2);
  \draw[line width=1pt] (-1.41421,1.41421) -- (1.41421,-1.41421);
\end{tikzpicture}
\end{document}
```

> Un cerchio è stato diviso in un certo numero di spicchi (almeno 4), ad esempio come in figura. Sei stato incaricato di colorare l'interno di ogni spicchio in modo che tra due spicchi di ugual colore ce ne siano sempre almeno due di colore diverso, ma non conosci il numero degli spicchi del cerchio (quello in figura è solo un esempio!). Qual è il più piccolo numero di colori che ti garantirà di riuscirci, indipendentemente dal numero degli spicchi? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 5
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oKF7UHyuDs_rLmhESoSgAg7wkcXYDjTf/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of colours for the spikes*

![[src_kangourou_2006_junior_maggio__probJ3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[line width=1pt] (0,0) circle (2);
  \draw[line width=1pt] (2,0) -- (-2,0);
  \draw[line width=1pt] (1.41421,1.41421) -- (-1.41421,-1.41421);
  \draw[line width=1pt] (0,2) -- (0,-2);
  \draw[line width=1pt] (-1.41421,1.41421) -- (1.41421,-1.41421);
\end{tikzpicture}
\end{document}
```

> A circle has been divided into a number of points (at least 4), for example as shown in Figure 1. You have been instructed to paint the inside of each spike so that between two spikes of the same color there are always at least two of a different color, but you do not know the number of spikes in the circle (that in the figure is just an example!). What's the smallest number of colors that will guarantee you'll make it, regardless of the number of spikes? (see figure)

**Answer:** 5
[[src_kangourou_2006_junior_maggio__QJ3]]



<span class="atom-split" id="qj4" data-atom="qj4" data-title="Quesito J4" data-tags="topic_aritmetica,method_fattorizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*p+q prodotto di almeno tre interi >1 (primi consecutivi)*

> Siano $p$ e $q$ due numeri primi, diversi fra loro ed entrambi diversi da 2, tali che non ci sia alcun numero primo strettamente compreso tra $p$ e $q$. È vero che $p + q$ è il prodotto di almeno tre numeri interi positivi maggiori di 1 (non necessariamente diversi tra loro)? In caso di risposta affermativa danne una motivazione, in caso di risposta negativa trova un contro-esempio.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** e vero
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oKF7UHyuDs_rLmhESoSgAg7wkcXYDjTf/view)


<span class="qlang-split" data-lang="en"></span>


*p+q product of at least three integers >1 (first consecutive) *

> They are $p$ and $q$ two prime numbers, different from each other and both different from 2, such that there is no prime number strictly between $p$ and $q$. Is it true that $p + q$ is the product of at least three positive integers greater than 1 (not necessarily different from each other)? If the answer is yes, it gives a reason, if the answer is no, it gives a counterexample.

**Answer:** e vero
[[src_kangourou_2006_junior_maggio__QJ4]]



<span class="atom-split" id="qj5" data-atom="qj5" data-title="Quesito J5" data-tags="topic_aritmetica,method_conteggio,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri con cifre consecutive e numero dispari di divisori*

> Considera i numeri di 3 cifre le cui cifre possano essere riordinate in modo da formare terne di cifre consecutive (ad es. le cifre di 786 si possono riordinare nella terna 678, costituita da cifre consecutive). Quanti di questi numeri hanno un numero dispari di divisori (diversi fra loro)?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** due
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oKF7UHyuDs_rLmhESoSgAg7wkcXYDjTf/view)


<span class="qlang-split" data-lang="en"></span>


*Numbers with consecutive digits and odd number of divisors*

> Consider 3-digit numbers whose digits can be rearranged to form sets of consecutive digits (e.g. The numbers in 786 can be rearranged to number 678, consisting of consecutive digits). How many of these numbers have a odd number of divisors (different between them)?

**Answer:** due
[[src_kangourou_2006_junior_maggio__QJ5]]



<span class="atom-split" id="qj6" data-atom="qj6" data-title="Quesito J6" data-tags="topic_geometria_piana,topic_combinatoria,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*punti blu su circonferenze*

> Tutti i punti di un piano sono colorati o in rosso o in blu e c'è almeno un punto rosso ed almeno un punto blu. Considera le due configurazioni proposte qui di seguito.
> 
> a) Ogni circonferenza di raggio 1 centimetro giacente sul piano contiene esattamente un punto blu.
> 
> b) Ogni circonferenza di raggio 1 centimetro giacente sul piano contiene esattamente due punti blu.
> 
> È possibile che si verifichi a)? È possibile che si verifichi b)? Motiva le tue risposte.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** a no, b si
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oKF7UHyuDs_rLmhESoSgAg7wkcXYDjTf/view)


<span class="qlang-split" data-lang="en"></span>


*blue points on the circumferences*

> All points on a plane are colored either red or blue and there's at least one red dot and at least one blue dot. Consider the two configurations proposed below.
> 
> (a) Each circumference of a radius of 1 cm lying on the plane contains exactly one blue dot.
> 
> (b) Each circumference of a radius of 1 cm lying on the plane contains exactly two blue points.
> 
> Is it possible that a)? Is it possible that b)? Reason for your answers.

**Answer:** a no, b si
[[src_kangourou_2006_junior_maggio__QJ6]]
