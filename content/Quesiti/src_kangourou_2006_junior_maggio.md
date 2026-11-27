---
title: Kangourou 2006 Junior finale (maggio)
tipo: gara
competition: Kangourou 2006 Junior finale (maggio)
family: kangourou
year: '2006'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2006_junior_maggio"></div>



<span class="atom-split" id="qj1" data-atom="qj1" data-title="Quesito J1" data-tags="topic_geometria_piana,topic_geometria_analitica,method_coordinate,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

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

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** un quarto di circonferenza
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oKF7UHyuDs_rLmhESoSgAg7wkcXYDjTf/view)


<div class="qlang-split" data-lang="en"></div>


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

> A metal bar—which, for simplicity, we assume to be filamentary and whose midpoint is denoted by $M$—is standing upright against a wall and adheres to a wall that forms an angle with the first wall. The wall and the floor are made of highly polished marble; therefore, slowly, the bar slides while always remaining in contact with the wall, until it comes to rest on the floor (the figure schematically shows the bar's position at a single instant during the motion: the wall is represented by the sheet). What trajectory does $M$ describe on the wall? Justify your statement. (see figure)


**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_geometria_analitica|Coordinate geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="qj2" data-atom="qj2" data-title="Quesito J2" data-tags="topic_combinatoria,topic_disuguaglianze,method_disuguaglianze,skill_astrazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma minima dei valori assoluti su circonferenza numerata*

> Denotiamo con $n$ un numero intero maggiore di 1 e supponiamo che $n$ punti di una circonferenza siano numerati da 1 a $n$ in un ordine del tutto casuale. Per ogni coppia (non ordinata) di punti adiacenti consideriamo il valore assoluto della differenza dei due numeri corrispondenti; sommiamo quindi tutti i valori assoluti così ottenuti. Quanto vale al minimo questa somma?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** 2n-2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oKF7UHyuDs_rLmhESoSgAg7wkcXYDjTf/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum sum of absolute values on a numbered circle*

> Let $n$ denote an integer greater than 1, and suppose that $n$ points on a circle are numbered from 1 to $n$ in a completely random order. For each (unordered) pair of adjacent points, we consider the absolute value of the difference between the two corresponding numbers; we then sum all the absolute values thus obtained. What is the minimum possible value of this sum?


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="qj3" data-atom="qj3" data-title="Quesito J3" data-tags="topic_combinatoria,method_colorazione,skill_casework_accurato,skill_astrazione"></span>

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
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 5
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oKF7UHyuDs_rLmhESoSgAg7wkcXYDjTf/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of colors for the slices*

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

> A circle has been divided into a certain number of sectors (at least 4), for example as shown in the figure. You have been tasked with coloring the interior of each sector so that between two sectors of the same color there are always at least two sectors of a different color, but you do not know how many sectors the circle has (the one in the figure is just an example!). What is the smallest number of colors that will guarantee you can succeed, regardless of the number of sectors? (see figure)


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_colorazione|Colouring / parity]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



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


<div class="qlang-split" data-lang="en"></div>


*p+q is the product of at least three integers >1 (consecutive primes)*

> Let $p$ and $q$ be two distinct prime numbers, both different from 2, such that there is no prime number strictly between $p$ and $q$. Is it true that $p + q$ is the product of at least three positive integers greater than 1 (not necessarily distinct)? If the answer is yes, provide a justification; if the answer is no, give a counterexample.

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="qj5" data-atom="qj5" data-title="Quesito J5" data-tags="topic_aritmetica,method_conteggio,method_casi_conteggio,skill_casework_accurato,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri con cifre consecutive e numero dispari di divisori*

> Considera i numeri di 3 cifre le cui cifre possano essere riordinate in modo da formare terne di cifre consecutive (ad es. le cifre di 786 si possono riordinare nella terna 678, costituita da cifre consecutive). Quanti di questi numeri hanno un numero dispari di divisori (diversi fra loro)?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** due
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oKF7UHyuDs_rLmhESoSgAg7wkcXYDjTf/view)


<div class="qlang-split" data-lang="en"></div>


*Numbers with consecutive digits and an odd number of divisors*

> Consider three-digit numbers whose digits can be rearranged to form sets of three consecutive digits (e.g., the digits of 786 can be rearranged into the set 678, which consists of consecutive digits). How many of these numbers have an odd number of (mutually distinct) divisors?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="qj6" data-atom="qj6" data-title="Quesito J6" data-tags="topic_geometria_piana,topic_combinatoria,method_colorazione,skill_astrazione,skill_ragionamento_geometrico"></span>

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
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** a no, b si
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oKF7UHyuDs_rLmhESoSgAg7wkcXYDjTf/view)


<div class="qlang-split" data-lang="en"></div>


*Blue points on circles*

> All points in a plane are colored either red or blue, and there is at least one red point and at least one blue point. Consider the two configurations proposed below.
>
> a) Every circle of radius 1 centimeter lying in the plane contains exactly one blue point.
>
> b) Every circle of radius 1 centimeter lying in the plane contains exactly two blue points.
>
> Is it possible for a) to occur? Is it possible for b) to occur? Justify your answers.


**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_colorazione|Colouring / parity]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
