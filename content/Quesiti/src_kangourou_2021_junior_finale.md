---
title: Kangourou 2021 Junior - finale
tipo: gara
competition: Kangourou 2021 Junior - finale
family: kangourou
year: '2021'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2021_junior_finale"></div>



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_algebra,method_estremalita,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo travasi per ripristinare 10 recipienti*

![[src_kangourou_2021_junior_finale__prob3.png]]

> Dieci recipienti, non necessariamente della stessa capacità, che possiamo considerare illimitata, contengono ciascuno acqua, non necessariamente nella stessa quantità. Effettuiamo alcuni travasi tra i recipienti; per ogni recipiente, ad ogni travaso, annotiamo la quantità di acqua immessa o prelevata. Ad esempio denotati i recipienti con A, B ecc. e usando sempre la stessa unità di misura potremmo avere un'annotazione come
> 
> | | A | B | C | D | E | F | G | H | I | J |
> |---|---|---|---|---|---|---|---|---|---|---|
> | travaso 1 | +1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | −1 |
> 
> Al termine di queste operazioni si vuole ripristinare in ogni recipiente la quantità di acqua iniziale, minimizzando il numero di travasi. Adottando un'opportuna strategia, quanti travasi potranno essere necessari, al massimo?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 9
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ps_tYriQtpgc01tEkKmu7IYVQhuLBnkt/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum pourings to restore 10 containers*

![[src_kangourou_2021_junior_finale__prob3.png]]

> Ten containers, not necessarily of the same capacity, which we can consider unlimited, each contain water, not necessarily in the same quantity. We perform some pourings between the containers; for each container, at each pouring, we note the quantity of water added or removed. For example, denoting the containers with A, B, etc. and always using the same unit of measurement, we could have a note like
> 
> | | A | B | C | D | E | F | G | H | I | J |
> |---|---|---|---|---|---|---|---|---|---|---|
> | pouring 1 | +1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | −1 |
> 
> At the end of these operations we want to restore in each container the initial quantity of water, minimizing the number of pourings. By adopting a suitable strategy, how many pourings might be needed, at most?

**Answer:** 9
[[Quesiti/src_kangourou_2021_junior_finale#q03|src_kangourou_2021_junior_finale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_solida,topic_combinatoria,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero di sviluppi piani diversi di un cubo*

![[src_kangourou_2021_junior_finale__prob4.png]]
![[src_kangourou_2021_junior_finale__prob4b.png]]
![[src_kangourou_2021_junior_finale__prob4c.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (1,1);
  \draw (1,0) rectangle (2,1);
  \draw (2,0) rectangle (3,1);
  \draw (3,0) rectangle (4,1);
  \draw (1,1) rectangle (2,2);
  \draw (1,-1) rectangle (2,0);
\end{tikzpicture}
\end{document}
```

> In figura vedi uno sviluppo piano di un cubo, cioè un possibile accostamento in piano delle facce del cubo in modo da poter ricostruire il cubo piegando opportunamente la figura lungo i lati comuni a due facce. Quanti sviluppi piani diversi fra loro ha un cubo, considerando identici due sviluppi ottenibili uno dall'altro per rotazioni e/o riflessioni? (vedi figura)

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 11
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ps_tYriQtpgc01tEkKmu7IYVQhuLBnkt/view)


<div class="qlang-split" data-lang="en"></div>


*Number of different plane nets of a cube*

![[src_kangourou_2021_junior_finale__prob4.png]]
![[src_kangourou_2021_junior_finale__prob4b.png]]
![[src_kangourou_2021_junior_finale__prob4c.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (1,1);
  \draw (1,0) rectangle (2,1);
  \draw (2,0) rectangle (3,1);
  \draw (3,0) rectangle (4,1);
  \draw (1,1) rectangle (2,2);
  \draw (1,-1) rectangle (2,0);
\end{tikzpicture}
\end{document}
```

> In the figure you see a plane net of a cube, that is, a possible arrangement in the plane of the faces of the cube so that you can reconstruct the cube by folding the figure along the sides common to two faces. How many different plane nets of a cube are there, considering identical two developments achievable from each other by rotation and/or reflection? (see figure)

**Answer:** 11
[[Quesiti/src_kangourou_2021_junior_finale#q04|src_kangourou_2021_junior_finale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,topic_aritmetica,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Riempire griglia mxn con somme colonna costanti*

> Hai una griglia rettangolare di $m$ righe e $n$ colonne e vuoi riempirla inserendo, uno per ogni casella, tutti i numeri interi da $1$ a $m \times n$ in modo che la somma dei numeri inseriti in ciascuna colonna sia sempre la stessa al variare delle colonne. Rispondi alle seguenti domande giustificando le tue risposte. Puoi riuscirci quando
> 
> a) $m = 2021$ e $n = 2020$?
> 
> b) $m = 2020$ e $n = 2021$?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** a)No b)Si
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1ps_tYriQtpgc01tEkKmu7IYVQhuLBnkt/view)


<div class="qlang-split" data-lang="en"></div>


*Fill the mxn grid with constant column sums*

> You have a rectangular grid of $m$ rows and $n$ columns and you want to fill it up by entering, one for each box, all the integers from $1$ to $m \times n$ so that the sum of the numbers entered in each column is always the same when the columns vary. Answer the following questions and justify your answers. You can do it when
> 
> a) $m = 2021$ and $n = 2020$?
> 
> b) $m = 2020$ and $n = 2021$?

**Answer:** a)No b)Yes
[[Quesiti/src_kangourou_2021_junior_finale#q05|src_kangourou_2021_junior_finale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_disuguaglianze,topic_algebra,method_disuguaglianze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Dimostrare c1+..+cn>=n se prodotto ci=1 (AM-GM)*

> Dimostra che, per qualunque $n$-upla $c_1, c_2, \ldots, c_n$ di numeri positivi il cui prodotto sia $1$, si ha
> $$c_1 + c_2 + \cdots + c_n \geq n.$$

**Topic:** [[topic_disuguaglianze|Disuguaglianze]], [[topic_algebra|Algebra]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1ps_tYriQtpgc01tEkKmu7IYVQhuLBnkt/view)


<div class="qlang-split" data-lang="en"></div>


*Prove c1+..+cn>=n if product ci=1 (AM-GM)*

> Show that for any $n$-tuple $c_1, c_2, \ldots, c_n$ of positive numbers the product of which is $1$, $$c_1 + c_2 + \cdots + c_n \geq n.$$

[[Quesiti/src_kangourou_2021_junior_finale#q06|src_kangourou_2021_junior_finale__Q06]]
