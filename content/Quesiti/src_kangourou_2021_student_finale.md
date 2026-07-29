---
title: Kangourou 2021 Student finale individuale
tipo: gara
competition: Kangourou 2021 Student finale individuale
family: kangourou
year: '2021'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2021_student_finale"></div>



<span class="atom-split" id="qs1" data-atom="qs1" data-title="Quesito S1" data-tags="topic_geometria_solida,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Rapporto dei volumi di due sfere viste della stessa grandezza*

> (**5 punti**) Osservando da lontano due sfere di raggi diversi, esse ti appaiono della stessa grandezza (come, ad esempio, potrebbe accadere per il sole e per la luna). Tuttavia, la distanza della più grande da te è 100 volte la distanza della più piccola (assumi che le distanze siano stimate tra te e i centri delle sfere). Quanto vale il rapporto fra il volume della più grande e il volume della più piccola?

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1000000
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<span class="qlang-split" data-lang="en"></span>


*Ratio of volumes of two spheres of the same size *

> (**5 points**) When you look at two different spheres of rays from a distance, they appear to you of the same size (as, for example, might happen to the sun and the moon). However, the distance of the largest from you is 100 times the distance of the smallest (assume that the distances are estimated between you and the centers of the spheres). What is the ratio of the volume of the largest to the volume of the smallest?

**Answer:** 1000000
[[src_kangourou_2021_student_finale__QS1]]



<span class="atom-split" id="qs2" data-atom="qs2" data-title="Quesito S2" data-tags="topic_combinatoria,topic_logica,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero massimo di travasi per ripristinare i recipienti*

![[src_kangourou_2021_student_finale__probS2.png]]

> (**7 punti**) Dieci recipienti, non necessariamente della stessa capacità, che possiamo considerare illimitata, contengono ciascuno acqua, non necessariamente nella stessa quantità. Effettuiamo dei travasi tra i recipienti; per ogni recipiente, ad ogni travaso, annotiamo la quantità di acqua immessa o prelevata. Ad esempio denotati i recipienti con A, B ecc. e usando sempre la stessa unità di misura potremmo avere un'annotazione come:
> 
> | | A | B | C | D | E | F | G | H | I | J |
> |---|---|---|---|---|---|---|---|---|---|---|
> | travaso 1 | +1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | −1 |
> 
> Al termine di queste operazioni si vuole ripristinare in ogni recipiente la quantità di acqua iniziale, minimizzando il numero di travasi. Adottando un'opportuna strategia, quanti travasi potranno essere necessari, al massimo?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 9
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum number of bars to restore containers*

![[src_kangourou_2021_student_finale__probS2.png]]

> (**7 points**) Ten containers, not necessarily of the same capacity, which we can consider unlimited, each contain water, not necessarily in the same quantity. We make a loop between the containers; for each container, at each loop, we write down the amount of water that's in or out. For example, mark the containers with A, B, etc. And using the same unit of measurement all the time, we could have an annotation like:
> 
> This is the first time I've ever seen a person who has been in a relationship with a woman who has been in a relationship with a man who has been in a relationship with a woman who has been in a relationship with a man who has been in a relationship with a woman who has been in a relationship with a man who has been in a relationship with a woman who has been in a relationship with a man who has been in a relationship with a woman who has been in a relationship with a man who has been in a relationship with a woman who has been in a relationship with a man who has been in a relationship with a woman who has been in a relationship with a man who has been in a relationship with a woman who has been in a relationship with a woman who has been in a relationship with a woman who has been in a relationship with a woman who has been in a relationship with a man who has been in a relationship with a woman who has been in a relationship with a relationship with a woman who has been in a relationship with a relationship with a woman who has been a relationship with a woman who has been with a relationship with a woman who has been with a relationship with a man who has been with a relationship with a woman who has had a
> 
> At the end of these operations, the initial amount of water in each container is to be restored, thus minimizing the number of transis. If we adopt a proper strategy, how many frames will be needed, at most?

**Answer:** 9
[[src_kangourou_2021_student_finale__QS2]]



<span class="atom-split" id="qs3" data-atom="qs3" data-title="Quesito S3" data-tags="topic_geometria_solida,topic_combinatoria,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero di sviluppi piani distinti di un cubo*

![[src_kangourou_2021_student_finale__probS3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Cross-shaped cube net: 6 unit squares
  % Top square (col 1, row 0)
  \draw (1,2) rectangle (2,3);
  % Middle row: 4 squares (col 0-3, row 1)
  \draw (0,1) rectangle (1,2);
  \draw (1,1) rectangle (2,2);
  \draw (2,1) rectangle (3,2);
  \draw (3,1) rectangle (4,2);
  % Bottom square (col 1, row 2 from bottom)
  \draw (1,0) rectangle (2,1);
\end{tikzpicture}
\end{document}
```

> (**11 punti**) In figura vedi uno sviluppo piano di un cubo, cioè un possibile accostamento in piano delle facce del cubo in modo da poter ricostruire il cubo piegando opportunamente la figura lungo i lati comuni a due facce. Quanti sviluppi piani diversi fra loro ha un cubo, considerando identici due sviluppi ottenibili uno dall'altro per rotazioni e/o riflessioni?
> 
> (vedi figura)

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 11
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<span class="qlang-split" data-lang="en"></span>


*Number of distinct plane developments of a cube*

![[src_kangourou_2021_student_finale__probS3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Cross-shaped cube net: 6 unit squares
  % Top square (col 1, row 0)
  \draw (1,2) rectangle (2,3);
  % Middle row: 4 squares (col 0-3, row 1)
  \draw (0,1) rectangle (1,2);
  \draw (1,1) rectangle (2,2);
  \draw (2,1) rectangle (3,2);
  \draw (3,1) rectangle (4,2);
  % Bottom square (col 1, row 2 from bottom)
  \draw (1,0) rectangle (2,1);
\end{tikzpicture}
\end{document}
```

> (**11 points**) In the figure you see a plane development of a cube, that is, a possible plane approach of the sides of the cube so that the cube can be reconstructed by folding the figure along the two sides. How many different planes of development between them has a cube, considering identical two developments achievable from each other by rotation and/or reflection?
> 
> (see figure)

**Answer:** 11
[[src_kangourou_2021_student_finale__QS3]]



<span class="atom-split" id="qs4" data-atom="qs4" data-title="Quesito S4" data-tags="topic_combinatoria,topic_aritmetica,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Riempire griglia mxn con somme di colonna costanti*

> (**14 punti**) Hai una griglia rettangolare di $m$ righe e $n$ colonne e vuoi riempirla inserendo, uno per ogni casella, tutti i numeri interi da $1$ a $m \cdot n$ in modo che la somma dei numeri inseriti in ciascuna colonna sia sempre la stessa al variare delle colonne. Rispondi alle seguenti domande giustificando le tue risposte. Puoi riuscirci quando:
> 
> a) $m = 2021$ e $n = 2020$?
> 
> b) $m = 2020$ e $n = 2021$?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** a) No; b) Si
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<span class="qlang-split" data-lang="en"></span>


*Fill the mxn grid with constant column sums*

> (**14 points**) You have a rectangular grid of $m$ rows and $n$ columns and you want to fill it up by entering, one for each box, all the integers from $1$ to $m \cdot n$ so that the sum of the numbers entered in each column is always the same when the columns vary. Answer the following questions and justify your answers. You can do it when:
> 
> a) $m = 2021$ e $n = 2020$?
> 
> b) $m = 2020$ e $n = 2021$?

**Answer:** a) No; b) Si
[[src_kangourou_2021_student_finale__QS4]]



<span class="atom-split" id="qs5" data-atom="qs5" data-title="Quesito S5" data-tags="topic_disuguaglianze,method_disuguaglianze,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*somma a_i/b_i >= n*

> (**18 punti**) Decidi se la seguente affermazione è vera o falsa, motivando la risposta.
> 
> "Assegnati $n$ numeri reali positivi $a_1, a_2, \ldots, a_n$, per ogni loro riordinamento $b_1, b_2, \ldots, b_n$ si ha
> $$\frac{a_1}{b_1} + \frac{a_2}{b_2} + \cdots + \frac{a_n}{b_n} \geq n.$$"

**Topic:** [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]]
**Risposta:** VERA
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<span class="qlang-split" data-lang="en"></span>


* sum of a_i/b_i >= n*

> (**18 points**) Determine whether the following statement is true or false by reasoning the answer.
> 
> 'Assigned $n$ positive real numbers $a_1, a_2, \ldots, a_n$, for each rearrangement of $b_1, b_2, \ldots, b_n$ $$\frac{a_1}{b_1} + \frac{a_2}{b_2} + \cdots + \frac{a_n}{b_n} \geq n.$$'

**Answer:** VERA
[[src_kangourou_2021_student_finale__QS5]]



<span class="atom-split" id="qs6" data-atom="qs6" data-title="Quesito S6" data-tags="topic_aritmetica,method_cassetti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Esiste multiplo di 2021 in binario con 2021 zeri e 2021 uni*

> (**22 punti**) Dimostra che esiste un numero intero positivo divisibile per $2021$ ed esprimibile, in notazione binaria significativa (cioè la prima cifra da sinistra non può essere $0$), usando esattamente $2021$ cifre zero e $2021$ cifre uno.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<span class="qlang-split" data-lang="en"></span>


*Exists multiple of 2021 in binary with 2021 zeros and 2021 ones*

> (**22 points**) Demonstrates that there exists a positive integer divisible by $2021$ and expressible, in significant binary notation (i.e. the first digit from the left cannot be $0$), using exactly $2021$ digits zero and $2021$ digits one.

[[src_kangourou_2021_student_finale__QS6]]
