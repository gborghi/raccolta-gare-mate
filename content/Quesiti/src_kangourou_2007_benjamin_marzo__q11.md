---
title: Kangourou 2007 Benjamin (marzo) — Quesito 11
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2007_benjamin_marzo__Q11
parent: src_kangourou_2007_benjamin_marzo
competition: Kangourou 2007 Benjamin (marzo)
family: kangourou
year: '2007'
level: kangourou
country: Italia
modalita: individuale
quesito: '11'
summary: Caselle nere sulla diagonale (griglia 4x4)
answer: C
topics:
  - topic_combinatoria
methods:
  - method_invarianti
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2007
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Caselle nere sulla diagonale (griglia 4x4)*

![[src_kangourou_2007_benjamin_marzo__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw[thick] (0,0) grid (4,4);
  \node[left] at (0,0.5) {1};
  \node[left] at (0,1.5) {2};
  \node[left] at (0,2.5) {3};
  \node[left] at (0,3.5) {4};
  \node[below] at (0.5,0) {1};
  \node[below] at (1.5,0) {2};
  \node[below] at (2.5,0) {3};
  \node[below] at (3.5,0) {4};
  \node[below left] at (0,0) {$A$};
  \node[above right] at (4,4) {$B$};
\end{tikzpicture}
\end{document}
```

> Le righe e le colonne di una griglia quadrata 4 x 4
> sono state numerate con i numeri 1, 2, 3 e 4 come
> mostra la figura. Colora in nero alcune caselle della griglia in modo che il numero di caselle nere in ogni riga ed
> in ogni colonna sia uguale al numero della riga e della
> colonna corrispondente. Quante caselle nere si incontrano sulla diagonale che va da A a B?
> A) 1, 2, 3 o 4 a seconda di come hai colorato le caselle.       
> B) Esattamente 1 
> C)  Esattamente 2 
> D) Esattamente 3 
> E) 1, 2 o 3 a seconda di come hai colorato le caselle, ma mai 4

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1sneW12L5R7fKpa9wAZFAkenvYcbMx0I1/view)


<span class="qlang-split" data-lang="en"></span>


*Black holes on the diagonal (grid 4x4) *

![[src_kangourou_2007_benjamin_marzo__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw[thick] (0,0) grid (4,4);
  \node[left] at (0,0.5) {1};
  \node[left] at (0,1.5) {2};
  \node[left] at (0,2.5) {3};
  \node[left] at (0,3.5) {4};
  \node[below] at (0.5,0) {1};
  \node[below] at (1.5,0) {2};
  \node[below] at (2.5,0) {3};
  \node[below] at (3.5,0) {4};
  \node[below left] at (0,0) {$A$};
  \node[above right] at (4,4) {$B$};
\end{tikzpicture}
\end{document}
```

> The rows and columns of a 4 x 4 square grid were numbered with the numbers 1, 2, 3 and 4, as shown in the figure. Colour some of the grid boxes in black so that the number of black boxes in each row and column is equal to the number of the corresponding row and column. How many black boxes meet on the diagonal that goes from A to B? A) 1, 2, 3 or 4 depending on how you colored the boxes. B) Exactly 1 C) Exactly 2 D) Exactly 3 E) 1, 2 or 3 depending on how you colored the boxes, but never 4

**Answer:** C
[[src_kangourou_2007_benjamin_marzo__Q11]]
