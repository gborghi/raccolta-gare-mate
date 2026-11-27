---
title: Kangourou 2021 Student finale individuale
tipo: gara
competition: Kangourou 2021 Student finale individuale
family: kangourou
year: '2021'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2021_student_finale"></div>



<span class="atom-split" id="qs1" data-atom="qs1" data-title="Quesito S1" data-tags="topic_geometria_solida,skill_ragionamento_geometrico,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Rapporto dei volumi di due sfere viste della stessa grandezza*

> (**5 punti**) Osservando da lontano due sfere di raggi diversi, esse ti appaiono della stessa grandezza (come, ad esempio, potrebbe accadere per il sole e per la luna). Tuttavia, la distanza della più grande da te è 100 volte la distanza della più piccola (assumi che le distanze siano stimate tra te e i centri delle sfere). Quanto vale il rapporto fra il volume della più grande e il volume della più piccola?

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Geometria]]
**Risposta:** 1000000
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<div class="qlang-split" data-lang="en"></div>


*What is the ratio of the volume of the larger to the volume of the smaller?*

> (5 points) Looking from far away at two spheres of different radii, they appear the same size (as, for example, can happen with the sun and the moon). However, your distance from the larger one is 100 times your distance from the smaller one (assume that the distances are measured from you to the centres of the spheres). What is the ratio of the volume of the larger to the volume of the smaller?

**Topic:** [[topic_geometria_solida|Solid geometry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Geometria|Geometry]]
**Answer:** 1000000



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


<div class="qlang-split" data-lang="en"></div>


*How many transfers may be needed, at most?*

![[src_kangourou_2021_student_finale__probS2.png]]

> (7 points) Ten vessels, not necessarily of the same capacity, which we may regard as unlimited, each contain water, not necessarily the same amount. We make transfers between the vessels; for each vessel, at each transfer, we record the amount of water put in or taken out. For example, denoting the vessels by A, B and so on, and always using the same unit, we might have a record such as:
>
> transfer 1: A +1, B 0, C 0, D 0, E 0, F 0, G 0, H 0, I 0, J −1
>
> At the end of these operations one wants to restore in each vessel the initial amount of water, minimising the number of transfers. By adopting a suitable strategy, how many transfers may be needed, at most?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Method:** [[method_invarianti|Invariants / monovariants]]
**Skill:** [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 9



<span class="atom-split" id="qs3" data-atom="qs3" data-title="Quesito S3" data-tags="topic_geometria_solida,topic_combinatoria,method_conteggio,method_simmetria,skill_casework_accurato,skill_conteggio_sistematico,skill_ragionamento_geometrico"></span>

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
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 11
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<div class="qlang-split" data-lang="en"></div>


*How many different nets does a cube have?*

![[src_kangourou_2021_student_finale__probS3.png]]

> (11 points) The picture shows a net of a cube, that is, one possible arrangement in the plane of the faces of the cube so that the cube can be rebuilt by folding the figure along the sides shared by two faces. How many nets does a cube have that are different from one another, counting as the same two nets that can be obtained from each other by rotations and/or reflections?
>
> (see the picture)

**Topic:** [[topic_geometria_solida|Solid geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_conteggio_sistematico|Systematic counting]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 11



<span class="atom-split" id="qs4" data-atom="qs4" data-title="Quesito S4" data-tags="topic_combinatoria,topic_aritmetica,method_invarianti,method_congruenze,skill_astrazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Riempire griglia mxn con somme di colonna costanti*

> (**14 punti**) Hai una griglia rettangolare di $m$ righe e $n$ colonne e vuoi riempirla inserendo, uno per ogni casella, tutti i numeri interi da $1$ a $m \cdot n$ in modo che la somma dei numeri inseriti in ciascuna colonna sia sempre la stessa al variare delle colonne. Rispondi alle seguenti domande giustificando le tue risposte. Puoi riuscirci quando:
> 
> a) $m = 2021$ e $n = 2020$?
> 
> b) $m = 2020$ e $n = 2021$?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** a) No; b) Si
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<div class="qlang-split" data-lang="en"></div>


*Can you succeed in each of the two cases?*

> (14 points) You have a rectangular grid of $m$ rows and $n$ columns, and you want to fill it by entering, one in each cell, all the integers from $1$ to $m \cdot n$, so that the sum of the numbers entered in each column is always the same, whichever column one takes. Answer the following questions, and justify your answers. Can you succeed when:
>
> a) $m = 2021$ and $n = 2020$?
>
> b) $m = 2020$ and $n = 2021$?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_invarianti|Invariants / monovariants]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** a) No; b) Si



<span class="atom-split" id="qs5" data-atom="qs5" data-title="Quesito S5" data-tags="topic_disuguaglianze,method_disuguaglianze,skill_astrazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*somma a_i/b_i >= n*

> (**18 punti**) Decidi se la seguente affermazione è vera o falsa, motivando la risposta.
> 
> "Assegnati $n$ numeri reali positivi $a_1, a_2, \ldots, a_n$, per ogni loro riordinamento $b_1, b_2, \ldots, b_n$ si ha
> $$\frac{a_1}{b_1} + \frac{a_2}{b_2} + \cdots + \frac{a_n}{b_n} \geq n.$$"

**Topic:** [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** VERA
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<div class="qlang-split" data-lang="en"></div>


*Is the statement true or false?*

> (18 points) Decide whether the following statement is true or false, and give a reason.
>
> "Given $n$ positive real numbers $a_1, a_2, \ldots, a_n$, for every rearrangement $b_1, b_2, \ldots, b_n$ of them one has
>
> $$\frac{a_1}{b_1} + \frac{a_2}{b_2} + \cdots + \frac{a_n}{b_n} \geq n.$$
>
> "

**Topic:** [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]
**Answer:** VERA



<span class="atom-split" id="qs6" data-atom="qs6" data-title="Quesito S6" data-tags="topic_aritmetica,topic_combinatoria,method_cassetti,method_congruenze,skill_astrazione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Esiste multiplo di 2021 in binario con 2021 zeri e 2021 uni*

> (**22 punti**) Dimostra che esiste un numero intero positivo divisibile per $2021$ ed esprimibile, in notazione binaria significativa (cioè la prima cifra da sinistra non può essere $0$), usando esattamente $2021$ cifre zero e $2021$ cifre uno.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_cassetti|Principio dei cassetti]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<div class="qlang-split" data-lang="en"></div>


*Prove that such an integer exists.*

> (22 points) Prove that there exists a positive integer divisible by $2021$ that can be written, in significant binary notation (that is, the first digit from the left cannot be $0$), using exactly $2021$ digits zero and $2021$ digits one.

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_cassetti|Pigeonhole principle]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
