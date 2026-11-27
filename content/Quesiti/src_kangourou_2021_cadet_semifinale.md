---
title: Kangourou 2021 Cadet - semifinale
tipo: gara
competition: Kangourou 2021 Cadet - semifinale
family: kangourou
year: '2021'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2021_cadet_semifinale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,method_conteggio,method_casi_conteggio,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri di 4 cifre da 337337 cancellandone due*

> (2 punti) Quanti numeri diversi di quattro cifre si possono ottenere da 337337 cancellandone due 
> cifre? 
> A) 6 
>  
> B) 7 
>  
>  
> C) 8 
>  
>  
> D) 9 
>  
>  
> E) 10

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*How many different four-digit numbers can be obtained?*

> (2 points) How many different four-digit numbers can be obtained from 337337 by deleting two of its digits?
>
> A) 6
> B) 7
> C) 8
> D) 9
> E) 10

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** B



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_logica,topic_combinatoria,method_backward,method_casework,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minuti minimi per attraversare il ponte tibetano*

> (3 punti) Di ritorno da un’escursione, Anna, Bob, Carla e Doris devono attraversare un fiume su 
> un ponte tibetano, su cui possono transitare al massimo due persone alla volta; è buio e quindi per 
> l’attraversamento è necessaria una pila, ma ne hanno una sola che può bastare per due persone e non 
> se la possono lanciare da una parte all’altra del fiume. Quanti minuti impiegheranno al minimo per 
> passare tutti sull’altra riva se per l’attraversamento Anna impiega 8 minuti, Bob 7, Carla 5 e Doris 4 
> e, ovviamente, se due amici attraversano insieme, lo fanno alla velocità del più lento? 
> A) 24  
>  
> B) 27   
>  
> C) 28  
>  
> D) 29  
>  
> E) 32

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_backward|Ragionamento all'indietro]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*How many minutes will they take at least?*

> (3 points) On the way back from an outing, Anna, Bob, Carla and Doris have to cross a river on a rope bridge, on which at most two people can go at a time. It is dark, so a torch is needed for the crossing, but they have only one, which can serve two people, and they cannot throw it from one side of the river to the other. How many minutes will they take at least for everyone to get to the other bank, if Anna takes 8 minutes to cross, Bob 7, Carla 5 and Doris 4, and, of course, if two friends cross together they do so at the speed of the slower one?
>
> A) 24
> B) 27
> C) 28
> D) 29
> E) 32

**Topic:** [[topic_logica|Logic, games and strategies]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_backward|Working backwards]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** B



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_algebra,topic_combinatoria,method_fattorizzazione,skill_casework_accurato,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero nella cella X del quadrato magico 4x4*

![[src_kangourou_2021_cadet_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  \draw (0,0) grid (4,4);
  \node at (0.5,3.5) {$X$};
  \node at (3.5,3.5) {\textbf{13}};
  \node at (0.5,2.5) {\textbf{5}};
  \node at (2.5,2.5) {\textbf{10}};
  \node at (1.5,1.5) {\textbf{7}};
  \node at (3.5,1.5) {\textbf{12}};
  \node at (0.5,0.5) {\textbf{4}};
  \node at (3.5,0.5) {\textbf{1}};
\end{tikzpicture}
\end{document}
```

> (3 punti) Osserva la figura: in alcune celle di una tabella 4×4 è stato inserito 
> un numero intero. Vogliamo inserire dei numeri interi anche nelle restanti celle in 
> modo che diventi un quadrato magico, cioè che le somme dei numeri contenuti in 
> ciascuna riga, quelle dei numeri contenuti in ciascuna colonna e quelle dei numeri 
> contenuti in ciascuna delle due diagonali siano tutte uguali tra loro. Che numero 
> dobbiamo mettere nella cella indicata con X? 
> A) 11  
>  
> B) 14   
>  
> C) 15   
>  
> D) 16   
>  
> E) 1

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*What number must we put in the cell marked X?*

![[src_kangourou_2021_cadet_semifinale__prob3.png]]

> (3 points) Look at the picture: an integer has been entered in some cells of a 4×4 table. We want to enter integers in the remaining cells as well, so that it becomes a magic square, that is, so that the sums of the numbers in each row, the sums of the numbers in each column, and the sums of the numbers in each of the two diagonals are all equal. What number must we put in the cell marked X?
>
> A) 11
> B) 14
> C) 15
> D) 16
> E) 1

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** D



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_logica,method_casework,skill_lettura_attenta,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Affermazione sicuramente falsa (euro di Lisa)*

> (4 punti) Se delle seguenti tre affermazioni 
>  
> a) “Lisa ha più di 2021 euro”  
> b) “Lisa ha meno di 2021 euro” 
> c) “Lisa ha almeno 1 euro” 
> una e una sola è vera, quale delle seguenti affermazioni è sicuramente falsa? 
> A) Lisa ha 2021 euro.  
>  
> B) Lisa non ha alcun euro. 
>  
> C) Lisa ha 1000 euro. 
> D) L’affermazione c) è falsa. 
> E) L’affermazione c) è quella vera.

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*Which statement is certainly false?*

> (4 points) If, of the following three statements
>
> a) "Lisa has more than 2021 euros"
> b) "Lisa has fewer than 2021 euros"
> c) "Lisa has at least 1 euro"
>
> exactly one is true, which of the following statements is certainly false?
>
> A) Lisa has 2021 euros.
> B) Lisa has no euros at all.
> C) Lisa has 1000 euros.
> D) Statement c) is false.
> E) Statement c) is the true one.

**Topic:** [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_lettura_attenta|Careful reading]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** C



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Resto per 9 del numero accostando 21..0*

> (4 punti) Qual è il resto della divisione per 9 del numero 
> 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0, 
> ottenuto accostando le cifre dei primi 22 numeri naturali in ordine decrescente? 
> A) 0  
>  
> B) 2   
>  
> C) 4   
>  
> D) 6   
>  
> E) 8 
>  
> X
>  
>  13
> 5 
>  10
>  
>  
> 7 
>  12
> 4 
>  
>  
> 1

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*What is the remainder on division by 9?*

> (4 points) What is the remainder on division by 9 of the number 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0, obtained by placing side by side the digits of the first 22 natural numbers in decreasing order?
>
> A) 0
> B) 2
> C) 4
> D) 6
> E) 8
>
> X
> 13
> 5
> 10
> 7
> 12
> 4
> 1

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** D



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_algebra,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo rapporto velocita Sandro/Carlo senza sorpasso*

> (4 punti) A Carlo piace correre, a Sandro piace andare in bicicletta. Vogliono allenarsi sulla 
> stessa strada, lunga 1,5 km: Sandro parte all’inizio della strada, Carlo 1 km più avanti. Partono nello 
> stesso istante, vanno nella stessa direzione e ciascuno si muove a velocità costante. Se Sandro non 
> sorpassa Carlo, quanto vale al massimo il rapporto tra la velocità di Sandro e quella di Carlo?  
> A) 3  
>  
> B) 2   
>  
> C) 1,75  
>  
> D) 1,7   
>  
> E) 1,5

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*What is the greatest possible value of that ratio?*

> (4 points) Carlo likes running, Sandro likes cycling. They want to train on the same road, 1,5 km long: Sandro starts at the beginning of the road, Carlo 1 km further on. They start at the same moment, go in the same direction, and each moves at constant speed. If Sandro does not overtake Carlo, what is the greatest possible value of the ratio of Sandro's speed to Carlo's?
>
> A) 3
> B) 2
> C) 1,75
> D) 1,7
> E) 1,5

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]
**Answer:** A



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_algebra,topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma 2+5+8+...+2021*

> (5 punti) Quanto vale la somma 2 + 5 + 8 + ... + 2021? 
> A) 681750   
> B) 681751  
>  
> C) 681752  
>  
> D) 681753  
>      
> E) 681754

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*What is the sum?*

> (5 points) What is the sum 2 + 5 + 8 + ... + 2021?
>
> A) 681750
> B) 681751
> C) 681752
> D) 681753
> E) 681754

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** B



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,topic_combinatoria,method_casework,method_congruenze,skill_casework_accurato,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante cifre 3 scrivendo 2021 come somma di cinque numeri*

> (5 punti) Giulio vuol scrivere 2021 come somma di cinque numeri interi positivi che non abbiano 
> cifre diverse da 3 e da 5. Quante cifre 3 ci sono complessivamente nei cinque numeri?  
> A) 2  
>  
> B) 3   
>  
> C) 4   
>  
> D) 5   
>  
> E) 6

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*How many digits 3 are there in all in the five numbers?*

> (5 points) Giulio wants to write 2021 as a sum of five positive integers that have no digits other than 3 and 5. How many digits 3 are there in all in the five numbers?
>
> A) 2
> B) 3
> C) 4
> D) 5
> E) 6

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_casework|Case analysis]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** B



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_geometria_piana,method_trigonometria,skill_ragionamento_geometrico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Differenza A2021-A2020 delle corone circolari*

> (6 punti) Denotiamo con An l’area della corona circolare delimitata dalle due circonferenze 
> inscritta e circoscritta a un poligono regolare di n lati, ciascuno di lunghezza 1.  
> Quanto vale la differenza A2021 − A2020? 
> A) 
> 
>    
> B) 
> 
>  
>  
> C) 
> 
>  
>  
> D) 
> 
>   
>  
> E) 0 
>  
>  
> Quesiti a risposta aperta

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*What is the difference A2021 − A2020?*

> (6 points) Denote by An the area of the annulus bounded by the incircle and the circumcircle of a regular polygon with n sides, each of length 1. What is the difference A2021 − A2020?
>
> A) ?
> 
> B) ?
> 
> C) ?
> 
> D) ?
> 
> E) 0

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_trigonometria|Trigonometric techniques]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Geometria|Geometry]]
**Answer:** E



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_combinatoria,topic_logica,method_cassetti,skill_casework_accurato,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Max lanci per essere certi che un numero esca 3 volte*

> (4 punti) Qual è il massimo numero di volte che potrebbe essere necessario lanciare un dado 
> perché almeno un numero esca per 3 volte?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 13
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*What is the greatest number of throws that might be needed?*

> (4 points) What is the greatest number of times it might be necessary to throw a die for at least one number to come up 3 times?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_cassetti|Pigeonhole principle]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 13



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_aritmetica,method_casework,skill_riconoscimento_pattern,skill_casework_accurato,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Anni dall ultimo anno = due interi consecutivi accostati*

> (5 punti) Il numero 2021 è formato accostando due numeri interi consecutivi in ordine crescente. 
> Quanti anni sono trascorsi dall’ultima volta in cui ciò è successo?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 101
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*How many years have passed since the last time this happened?*

> (5 points) The number 2021 is formed by placing side by side two consecutive integers in increasing order. How many years have passed since the last time this happened?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** 101



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,method_congruenze,method_casework,skill_casework_accurato,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Max numero 4 cifre divisibile per 6 con cifre crescenti*

> (5 punti) Quanto vale il più grande numero di 4 cifre divisibile per 6 le cui cifre siano in ordine 
> (strettamente) crescente da sinistra a destra?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 4578
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*What is that largest number?*

> (5 points) What is the largest 4-digit number divisible by 6 whose digits are in (strictly) increasing order from left to right?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** 4578



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_aritmetica,topic_combinatoria,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Piu piccola somma di due numeri con 9 cifre diverse*

> (6 punti) La somma di due numeri di tre cifre, tutte e sei diverse tra loro, dà un numero di tre 
> cifre diverse dalle precedenti e diverse tra loro. Qual è la più piccola somma che puoi ottenere in 
> questo modo? Ricorda che un numero di tre cifre non può avere 0 come prima cifra.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 356
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*What is the smallest sum you can obtain in this way?*

> (6 points) The sum of two three-digit numbers, all six digits different from one another, is a three-digit number whose digits are different from the previous ones and different from one another. What is the smallest sum you can obtain in this way? Remember that a three-digit number cannot have 0 as its first digit.

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Method:** [[method_estremalita|Extremal principle]]
**Skill:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 356



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_geometria_piana,method_trigonometria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza della striscia attorno al triangolo equilatero*

![[src_kangourou_2021_cadet_semifinale__prob14.png]]

> (6 punti) Una striscia di carta rettangolare è ripiegata in 
> modo da ottenere la forma esagonale in figura, che contorna un 
> triangolo equilatero di lato 8 cm (rimanendovi aderente); i lati 
> corti della striscia si saldano nel punto mostrato. Il lato corto della 
> striscia misura √3 cm. Quanti centimetri è lunga la striscia?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 33
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*How many centimetres long is the strip?*

![[src_kangourou_2021_cadet_semifinale__prob14.png]]

> (6 points) A rectangular strip of paper is folded so as to obtain the hexagonal shape in the picture, which borders an equilateral triangle of side 8 cm (lying against it); the short sides of the strip meet at the point shown. The short side of the strip measures √3 cm. How many centimetres long is the strip?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_trigonometria|Trigonometric techniques]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]
**Answer:** 33



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_geometria_piana,skill_ragionamento_geometrico,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Avanzamento del punto P del cingolo*

![[src_kangourou_2021_cadet_semifinale__prob15.png]]

> (6 punti) La figura schematizza la fiancata di un mezzo cingolato le cui ruote hanno un raggio 
> di 1/π metri con distanza dei centri di 3 metri. La 
> parte inferiore del cingolo è a contatto con un 
> terreno piano regolare e P denota il punto a metà 
> della parte attualmente superiore del cingolo. Se il 
> mezzo avanza di 20 centimetri, di quanti centimetri 
> avanza, rispetto al terreno, il punto P?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Geometria]]
**Risposta:** 40
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*How many centimetres does the point P advance relative to the ground?*

![[src_kangourou_2021_cadet_semifinale__prob15.png]]

> (6 points) The picture sketches the side of a tracked vehicle whose wheels have radius 1/π metres, with 3 metres between the centres. The lower part of the track is in contact with flat, even ground, and P denotes the point halfway along the part of the track that is currently on top. If the vehicle advances 20 centimetres, how many centimetres does the point P advance relative to the ground?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Geometria|Geometry]]
**Answer:** 40



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_combinatoria,method_estremalita,skill_casework_accurato,skill_riconoscimento_pattern,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo blocco di gettoni neri consecutivi*

> (7 punti) Abbiamo 90 gettoni, metà dei quali neri e l’altra metà bianchi. Vogliamo allinearli in 
> modo che i blocchi di gettoni bianchi consecutivi siano quanti più possibili e che nessuna coppia di 
> questi blocchi abbia lo stesso numero di gettoni. Qual è il numero di gettoni nel blocco più grande 
> possibile di gettoni neri consecutivi?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 38
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*How many counters are in the largest possible block of consecutive black counters?*

> (7 points) We have 90 counters, half of them black and the other half white. We want to line them up so that the blocks of consecutive white counters are as many as possible, and so that no two of these blocks have the same number of counters. What is the number of counters in the largest possible block of consecutive black counters?

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 38



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_combinatoria,topic_logica,method_colorazione,method_grafi,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Max stanze visitabili nel triangolo lato 100*

![[src_kangourou_2021_cadet_semifinale__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[thick] (0,0) -- (3,0) -- (1.5,2.598) -- cycle;
  \draw (0.5,0.866) -- (2.5,0.866);
  \draw (1.0,1.732) -- (2.0,1.732);
  \draw (1,0) -- (0.5,0.866);
  \draw (2,0) -- (1.5,0.866);
  \draw (1.5,0.866) -- (1.0,1.732);
  \draw (2.5,0.866) -- (2.0,1.732);
  \draw (1,0) -- (1.5,0.866);
  \draw (2,0) -- (2.5,0.866);
  \draw (0.5,0.866) -- (1.0,1.732);
  \draw (1.5,0.866) -- (2.0,1.732);
\end{tikzpicture}
\end{document}
```

> (7 punti) Un triangolo equilatero di lato n =100 è ripartito in 
> triangoli equilateri di lato 1 secondo lo schema che ti suggerisce la 
> figura, in cui è rappresentato il caso n = 3. Immagina che ogni 
> triangolo piccolo rappresenti una stanza e che, in ogni suo muro 
> condiviso con una stanza adiacente, ci sia una porta. Scegliendo 
> opportunamente la stanza da cui partire, qual è il massimo numero di 
> stanze che puoi visitare se puoi passare una sola volta da ogni stanza 
> che visiti?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_colorazione|Colorazione / parita]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 9901
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*What is the greatest number of rooms you can visit?*

![[src_kangourou_2021_cadet_semifinale__prob17.png]]

> (7 points) An equilateral triangle of side n = 100 is divided into equilateral triangles of side 1 according to the pattern suggested by the picture, which shows the case n = 3. Imagine that each small triangle is a room, and that in every wall it shares with an adjacent room there is a door. By choosing the starting room suitably, what is the greatest number of rooms you can visit if you may pass only once through each room you visit?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_colorazione|Colouring / parity]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 9901



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Resto per 5 del prodotto dei numeri di 5 cifre non div per 5*

> (8 punti) Se moltiplichi tra loro tutti i numeri interi positivi di 5 cifre non divisibili per 5 e dividi 
> per 5 il risultato, che resto ottieni? 
>  
> Risposte 
> 0013 0101 4578 0356 0033 0040 0038 9901 0001
>  
> P 
> saldatura 
> √3 cm

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<div class="qlang-split" data-lang="en"></div>


*What remainder do you get?*

> (8 points) If you multiply together all the positive 5-digit integers that are not divisible by 5, and divide the result by 5, what remainder do you get?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** 1
