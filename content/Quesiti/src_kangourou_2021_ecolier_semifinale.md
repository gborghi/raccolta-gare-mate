---
title: Kangourou 2021 Ecolier - semifinale
tipo: gara
competition: Kangourou 2021 Ecolier - semifinale
family: kangourou
year: '2021'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2021_ecolier_semifinale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_logica,method_grafi,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Max stanze visitabili nel triangolo di 9 stanze*

![[src_kangourou_2021_ecolier_semifinale__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw[thick] (0,0) -- (3,0) -- (1.5,2.598) -- cycle;
  \draw[thick] (0.5,0.866) -- (2.5,0.866);
  \draw[thick] (1.0,1.732) -- (2.0,1.732);
  \draw[thick] (1,0) -- (1.5,0.866);
  \draw[thick] (2,0) -- (2.5,0.866);
  \draw[thick] (0.5,0.866) -- (1.0,1.732);
  \draw[thick] (1.5,0.866) -- (2.0,1.732);
  \draw[thick] (1,0) -- (0.5,0.866);
  \draw[thick] (2,0) -- (1.5,0.866);
  \draw[thick] (1.5,0.866) -- (1.0,1.732);
  \draw[thick] (2.5,0.866) -- (2.0,1.732);
  \draw[thick] (1.46,1.692) -- (1.54,1.772);
  \draw[thick] (0.96,0.826) -- (1.04,0.906);
  \draw[thick] (1.96,0.826) -- (2.04,0.906);
  \draw[thick] (0.70,1.249) -- (0.80,1.349);
  \draw[thick] (0.70,1.349) -- (0.80,1.249);
  \draw[thick] (1.20,1.249) -- (1.30,1.349);
  \draw[thick] (1.20,1.349) -- (1.30,1.249);
  \draw[thick] (0.70,0.383) -- (0.80,0.483);
  \draw[thick] (0.70,0.483) -- (0.80,0.383);
  \draw[thick] (1.20,0.383) -- (1.30,0.483);
  \draw[thick] (1.20,0.483) -- (1.30,0.383);
  \draw[thick] (1.70,0.383) -- (1.80,0.483);
  \draw[thick] (1.70,0.483) -- (1.80,0.383);
  \draw[thick] (2.20,0.383) -- (2.30,0.483);
  \draw[thick] (2.20,0.483) -- (2.30,0.383);
\end{tikzpicture}
\end{document}
```

> (2 punti) In figura vedi un triangolo grande ripartito in 9 triangoli 
> piccoli. Immagina che ogni triangolo piccolo rappresenti una stanza e 
> che le sbarrette sui suoi lati rappresentino altrettante porte che 
> permettono di passare da una stanza a quelle adiacenti. Partendo dalla 
> stanza in alto, quante stanze puoi visitare al massimo passando una sola 
> volta da ogni stanza che visiti?  
> A) 3 
>  
> B) 4 
>  
> C) 5 
>  
> D) 6 
>  
> E) 7

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Max rooms to be visited in the triangle of 9 rooms*

![[src_kangourou_2021_ecolier_semifinale__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw[thick] (0,0) -- (3,0) -- (1.5,2.598) -- cycle;
  \draw[thick] (0.5,0.866) -- (2.5,0.866);
  \draw[thick] (1.0,1.732) -- (2.0,1.732);
  \draw[thick] (1,0) -- (1.5,0.866);
  \draw[thick] (2,0) -- (2.5,0.866);
  \draw[thick] (0.5,0.866) -- (1.0,1.732);
  \draw[thick] (1.5,0.866) -- (2.0,1.732);
  \draw[thick] (1,0) -- (0.5,0.866);
  \draw[thick] (2,0) -- (1.5,0.866);
  \draw[thick] (1.5,0.866) -- (1.0,1.732);
  \draw[thick] (2.5,0.866) -- (2.0,1.732);
  \draw[thick] (1.46,1.692) -- (1.54,1.772);
  \draw[thick] (0.96,0.826) -- (1.04,0.906);
  \draw[thick] (1.96,0.826) -- (2.04,0.906);
  \draw[thick] (0.70,1.249) -- (0.80,1.349);
  \draw[thick] (0.70,1.349) -- (0.80,1.249);
  \draw[thick] (1.20,1.249) -- (1.30,1.349);
  \draw[thick] (1.20,1.349) -- (1.30,1.249);
  \draw[thick] (0.70,0.383) -- (0.80,0.483);
  \draw[thick] (0.70,0.483) -- (0.80,0.383);
  \draw[thick] (1.20,0.383) -- (1.30,0.483);
  \draw[thick] (1.20,0.483) -- (1.30,0.383);
  \draw[thick] (1.70,0.383) -- (1.80,0.483);
  \draw[thick] (1.70,0.483) -- (1.80,0.383);
  \draw[thick] (2.20,0.383) -- (2.30,0.483);
  \draw[thick] (2.20,0.483) -- (2.30,0.383);
\end{tikzpicture}
\end{document}
```

> (2 points) In the figure you see a large triangle divided into 9 small triangles. Imagine that each small triangle represents a room and that the bars on its sides represent as many doors as one room to the adjacent ones. Starting from the room upstairs, how many rooms can you visit at most by passing once through each room you visit? A) 3
>  
> B) 4
>  
> C) 5
>  
> D) 6
>  
> E) 7

**Answer:** E
[[src_kangourou_2021_ecolier_semifinale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Piastrelle gialle nel pavimento con diagonali rosse*

> (3 punti) Un pavimento quadrato è piastrellato con piastrelle quadrate tutte della stessa misura. 
> Le 9 piastrelle lungo le diagonali sono rosse, le altre gialle. Quante sono le piastrelle gialle? 
> A) 10  
>  
> B) 12   
> C) 14   
> D) 16   
> E) 18

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Yellow tiles on the floor with red diagonal *

> (3 points) A square floor is tiled with square tiles all of the same size. The nine tiles along the diagonals are red, the others yellow. How many yellow tiles are there? A) 10
>  
> B) 12 C) 14 D) 16 E) 18

**Answer:** D
[[src_kangourou_2021_ecolier_semifinale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_logica,topic_combinatoria,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma dei quattro numeri invisibili nel diagramma*

![[src_kangourou_2021_ecolier_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2, >=latex, thick]
  \draw (0.6,3.4) rectangle (1.4,4.2);
  \draw (-0.9,1.6) rectangle (-0.1,2.4);
  \node at (-0.5,2.0) {\textbf{8}};
  \draw (0.6,1.6) rectangle (1.4,2.4);
  \draw (2.1,1.6) rectangle (2.9,2.4);
  \draw (-0.9,-0.4) rectangle (-0.1,0.4);
  \node at (-0.5,0.0) {\textbf{3}};
  \draw (0.6,-0.4) rectangle (1.4,0.4);
  \draw (2.1,-0.4) rectangle (2.9,0.4);
  \node at (2.5,0.0) {\textbf{2}};
  \draw[->] (0.6,3.4) -- (-0.1,2.4);
  \draw[->] (1.4,3.4) -- (2.1,2.4);
  \draw[->] (-0.1,2.0) -- (0.6,2.0);
  \draw[->] (2.1,2.0) -- (1.4,2.0);
  \draw[->] (1.0,1.6) -- (1.0,0.4);
  \draw[->] (0.6,0.0) -- (-0.1,0.0);
  \draw[->] (1.4,0.0) -- (2.1,0.0);
\end{tikzpicture}
\end{document}
```

> (3 punti) In questo diagramma ogni quadrato contiene un numero 
> intero diverso da tutti quelli contenuti negli altri, ma in quattro quadrati il 
> numero è invisibile. Le frecce presenti tra due quadrati sono dirette dal 
> quadrato contenente il numero più grande a quello contenente il più 
> piccolo. Qual è la somma dei numeri invisibili?  
> A) 30  
>  
> B) 28   
> C) 22   
> D) 16   
> E) 14

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Summary of the four invisible numbers in the diagram*

![[src_kangourou_2021_ecolier_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2, >=latex, thick]
  \draw (0.6,3.4) rectangle (1.4,4.2);
  \draw (-0.9,1.6) rectangle (-0.1,2.4);
  \node at (-0.5,2.0) {\textbf{8}};
  \draw (0.6,1.6) rectangle (1.4,2.4);
  \draw (2.1,1.6) rectangle (2.9,2.4);
  \draw (-0.9,-0.4) rectangle (-0.1,0.4);
  \node at (-0.5,0.0) {\textbf{3}};
  \draw (0.6,-0.4) rectangle (1.4,0.4);
  \draw (2.1,-0.4) rectangle (2.9,0.4);
  \node at (2.5,0.0) {\textbf{2}};
  \draw[->] (0.6,3.4) -- (-0.1,2.4);
  \draw[->] (1.4,3.4) -- (2.1,2.4);
  \draw[->] (-0.1,2.0) -- (0.6,2.0);
  \draw[->] (2.1,2.0) -- (1.4,2.0);
  \draw[->] (1.0,1.6) -- (1.0,0.4);
  \draw[->] (0.6,0.0) -- (-0.1,0.0);
  \draw[->] (1.4,0.0) -- (2.1,0.0);
\end{tikzpicture}
\end{document}
```

> (3 points) In this diagram each square contains an integer number different from all the others, but in four squares the number is invisible. The arrows between two squares are directed from the square containing the largest number to the square containing the smallest number. What's the sum of the invisible numbers? A) 30
>  
> B) 28 C) 22 D) 16 E) 14

**Answer:** C
[[src_kangourou_2021_ecolier_semifinale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri di 4 cifre da 337337 cancellandone due*

> (4 punti) Quanti numeri diversi di quattro cifre si possono ottenere da 337337 cancellandone 
> due cifre? 
> A) 6 
>  
> B) 7 
>  
> C) 8 
>  
> D) 9 
>  
> E) 10

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Four-digit numbers from 337337 by deleting two*

> (4 points) How many different four-digit numbers can be obtained from 337337 by deleting two digits? A) 6
>  
> B) 7
>  
> C) 8
>  
> D) 9
>  
> E) 10

**Answer:** B
[[src_kangourou_2021_ecolier_semifinale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Posizione di 3142 tra le 24 permutazioni ordinate*

> (4 punti) Utilizzando ciascuna delle cifre 1, 2, 3, 4, ognuna una e una sola volta, si possono 
> costruire 24 numeri diversi (tutti di 4 cifre). Se si mettono in ordine questi 24 numeri dal più piccolo 
> al più grande (e quindi il più piccolo è in posizione 1, il più grande in posizione 24) in quale posizione 
> si trova il numero 3142?  
> A) 12 
>  
> B) 13  
> C) 14  
> D) 16  
> E) 17

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Position of 3142 among the 24 ordered permutations*

> (4 points) Using each of the digits 1, 2, 3, 4, each one and only once, you can construct 24 different numbers (all of 4 digits). If you put these 24 numbers in order from smallest to largest (and so the smallest is in position 1, the largest is in position 24) in which position is the number 3142? A) 12
>  
> B) 13 C) 14 D) 16 E) 17

**Answer:** C
[[src_kangourou_2021_ecolier_semifinale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_logica,topic_combinatoria,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti conigli mangiano carote oggi*

> (4 punti) Bianca ha 20 conigli: a 9 dà da mangiare carote tutti i giorni, agli altri solo un giorno 
> sì e uno no, non necessariamente a tutti lo stesso giorno. Ieri hanno mangiato carote 16 conigli. Quanti 
> conigli mangeranno carote oggi? 
> A) 9    
> B) 13   
> C) 14   
> D) 15   
> E) Le informazioni sono insufficienti.  
>  
>  
>  
> 3 
> 2 
> 8

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


How many rabbits eat carrots today?

> (4 points) Bianca has 20 rabbits: 9 of them eat carrots every day, the others only one day yes and one no, not necessarily all on the same day. They ate 16 rabbits yesterday. How many rabbits will eat carrots today? A) 9 B) 13 C) 14 D) 15 E) The information is insufficient.
>  
>  
>  
> 3 2 8

**Answer:** B
[[src_kangourou_2021_ecolier_semifinale__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di sommare numeri 1..8 per ottenere 30*

> (5 punti) Devi sommare alcuni degli otto numeri naturali da 1 a 8 in modo da ottenere come 
> somma 30. Se ogni numero non può essere utilizzato più di una volta, in quanti modi diversi puoi 
> soddisfare la richiesta? (Sommare gli stessi addendi in ordine diverso non deve essere considerato 
> un modo diverso).  
> A) 4 
>  
> B) 6 
>  
> C) 8 
>  
> D)10  
> E) 12

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*How to add numbers 1.8. to get 30*

> (5 points) You have to add up some of the eight natural numbers from 1 to 8 so you get 30. If each number cannot be used more than once, how many different ways can you meet the request? (The addition of the same additives in a different order should not be considered as a different way). A) 4
>  
> B) 6
>  
> C) 8
>  
> D)10 E) 12

**Answer:** A
[[src_kangourou_2021_ecolier_semifinale__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_aritmetica,method_estremalita,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Max cifre 1 nelle prime 15 cifre dell allineamento*

> (5 punti) Ada ha 10.000 cartoncini, su ciascuno dei quali è riportato un diverso numero da 1 a 
> 10.000 inclusi. Li allinea (non necessariamente in un ordine prestabilito) e poi legge le prime 15 cifre 
> dell’allineamento come se fossero un unico numero N. Quante cifre 1 può contenere al massimo tale 
> numero N? 
> A) 11  
>  
> B) 12   
> C) 13  
> D) 14   
> E) 15

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Max figures 1 in the first 15 digits of the alignment*

> (5 points) Ada has 10,000 cards, each containing a different number from 1 to 10,000 included. It aligns them (not necessarily in a preset order) and then reads the first 15 digits of the alignment as if they were a single number N. How many digits 1 can contain that number N at most? A) 11
>  
> B) 12 C) 13 D) 14 E) 15

**Answer:** D
[[src_kangourou_2021_ecolier_semifinale__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_logica,method_casework,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Affermazione sicuramente falsa (euro di Lisa)*

> (6 punti) Se delle seguenti tre affermazioni 
> a) “Lisa ha più di 2021 euro” 
> b) “Lisa ha meno di 2021 euro” 
> c) “Lisa ha almeno 1 euro” 
> una e una sola è vera, quale delle seguenti affermazioni è sicuramente falsa? 
> A) Lisa ha 2021 euro.  
>  
> B) Lisa non ha alcun euro. 
>  
>  C) Lisa ha 1000 euro.  
> D) L’affermazione c) è falsa.  
> E) L’affermazione c) è quella vera.  
>  
> Quesiti a risposta aperta

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Certainly false claim (Lisa's euro) *

> (6 points) If of the following three statements a) Lisa has more than 2021 euros b) Lisa has less than 2021 euros c) Lisa has at least 1 euro one and only one is true, which of the following statements is definitely false? A) Lisa has 2021 euros.
>  
> B) Lisa has no euro.
>  
> C) Lisa has a thousand euros. (D) Claim (c) is false. E) The statement c) is true.
>  
> Open-ended questions

**Answer:** C
[[src_kangourou_2021_ecolier_semifinale__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Altri anni del 21 secolo con somma cifre 5*

> (4 punti) La somma delle cifre di 2021 è 5. Nel 21-esimo secolo (cioè dal 2001 al 2100) quanti 
> altri anni hanno la stessa proprietà?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 3
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Other years of the 21st century with a total of 5 *

> (4 points) The sum of the 2021 figures is 5. In the 21st century (i.e. 2001 to 2100) how many other years have the same property?

**Answer:** 3
[[src_kangourou_2021_ecolier_semifinale__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_algebra,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Peso di un anguria in etti (3 chili meno di tre angurie)*

> (4 punti) Un’anguria pesa 3 chili meno di tre angurie. Tutte le angurie hanno lo stesso peso: 
> quale è, in etti?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 15
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Weight of one anguria in hectolitres (3 kg less than three anguries) *

> (4 points) One anguria weighs 3 kg less than three anguries. All anguries have the same weight. Which is it, in eights?

**Answer:** 15
[[src_kangourou_2021_ecolier_semifinale__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_logica,topic_aritmetica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Partite vinte da Edoardo nel gioco di carte*

> (6 punti) Edoardo, Susanna e Teresa giocano a carte. Al termine di ogni partita non ci sono 
> pari-merito: il vincitore guadagna 3 punti, il secondo classificato 1 punto mentre il terzo classificato 
> non guadagna punti. Dopo quattro partite Susanna ha 4 punti e Teresa 3. Quante partite ha vinto 
> Edoardo?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 3
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Matches won by Edward in the card game*

> (6 points) Edward, Susanna and Teresa play cards. At the end of each match, there are no equal points: the winner earns 3 points, the second-placed 1 point while the third-placed does not earn points. After four games, Susanna has four points and Teresa has three. How many games has Edward won?

**Answer:** 3
[[src_kangourou_2021_ecolier_semifinale__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_combinatoria,topic_logica,method_cassetti,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo marziani per averne due dello stesso tipo*

> (6 punti) Non tutti i marziani hanno lo stesso numero di mani e non tutti hanno lo stesso numero 
> di piedi: le mani possono essere da 3 a 6, i piedi da 2 a 7. Quanti marziani al minimo devono entrare 
> in una navetta spaziale perché ce ne siano sicuramente almeno due dello stesso tipo?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 25
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum Martian to have two of the same type*

> (6 points) Not all Martians have the same number of hands and not all have the same number of feet: hands can be 3 to 6, feet 2 to 7. How many Martians do you have to get on a space shuttle to make sure there's at least two of the same type?

**Answer:** 25
[[src_kangourou_2021_ecolier_semifinale__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Anni dall ultimo anno = due interi consecutivi accostati*

> (8 punti) Il numero 2021 è formato accostando due numeri interi consecutivi in ordine 
> crescente. Quanti anni sono trascorsi dall’ultima volta in cui ciò è successo?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 101
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Years since the last year = two consecutive integers approximated*

> (8 points) The 2021 number is formed by joining two consecutive integers in increasing order. How many years have passed since the last time this happened?

**Answer:** 101
[[src_kangourou_2021_ecolier_semifinale__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_logica,topic_combinatoria,method_backward,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minuti minimi per attraversare il ponte tibetano*

> (8 punti) Di ritorno da un’escursione, Anna, Bob, Carla e Doris devono attraversare un fiume 
> su un ponte tibetano, su cui possono transitare al massimo due persone alla volta; è buio e quindi per 
> l’attraversamento è necessaria una pila, ma ne hanno una sola che può bastare per due persone e non 
> se la possono lanciare da una parte all’altra del fiume. Quanti minuti impiegheranno al minimo per 
> passare tutti sull’altra riva se per l’attraversamento Anna impiega 10 minuti, Bob 5, Carla 2 e Doris 
> 1 minuto e, ovviamente, se due amici attraversano insieme, lo fanno alla velocità del più lento? 
>  
> Risposte 
> 0003 0015 0003 0025 0101 0017

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 17
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1d4KIlUoujYfd3Cc7JpT28ssbmAgsp2A5/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum minutes to cross the Tibetan Bridge*

> (8 points) On their way back from an excursion, Anna, Bob, Carla and Doris have to cross a river on a Tibetan bridge, on which no more than two people can cross at a time; it is dark and therefore a stack is required for crossing, but they only have one that can accommodate two people and they cannot throw it from one side of the river to the other. How many minutes will it take to get everyone across if it takes Anna 10 minutes to cross, Bob 5, Carla 2 and Doris 1 minute, and, of course, if two friends cross together, they do it at the slowest speed?
>  
> The Commission has already adopted a proposal for a regulation on the approximation of the laws of the Member States.

**Answer:** 17
[[src_kangourou_2021_ecolier_semifinale__Q15]]
