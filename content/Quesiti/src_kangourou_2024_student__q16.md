---
title: Kangourou 2024 Student (gara individuale) — Quesito 16
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2024_student__Q16
parent: src_kangourou_2024_student
competition: Kangourou 2024 Student (gara individuale)
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '16'
summary: Minimo AX+XD al variare di X su BC del trapezio
answer: D
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Minimo AX+XD al variare di X su BC del trapezio*

![[src_kangourou_2024_student__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \coordinate (A) at (0,4);
  \coordinate (B) at (0,0);
  \coordinate (C) at (8,0);
  \coordinate (D) at (8,2);
  \coordinate (X) at (3,0);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (0.25,0) -- (0.25,0.25) -- (0,0.25);
  \draw (7.75,0) -- (7.75,0.25) -- (8,0.25);
  \draw[dashed] (A) -- (X) -- (D);
  \node[above left] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[right] at (D) {$D$};
  \node[below] at (X) {$X$};
\end{tikzpicture}
\end{document}
```

> Il trapezio rettangolo ABCD ha gli angoli retti 
> in B e in C. I lati AB, BC e CD sono lunghi ri­
> spettivamente 4, 8 e 2. Al variare del punto X sul 
> lato BC, qual è il minimo valore possibile per la 
> somma della lunghezza di AX e di quella di XD ?
> A) 9√2	 	
> B) 12	
> 	
> C) 13	
> 	
> D) 10	
> 	
> E) Nessuno dei precedenti.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1OJzdbsJRd_3RZ8oilFGQ0S4-Ws4IJ50n/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum AX+XD when varying from X to BC of the trapezoid*

![[src_kangourou_2024_student__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \coordinate (A) at (0,4);
  \coordinate (B) at (0,0);
  \coordinate (C) at (8,0);
  \coordinate (D) at (8,2);
  \coordinate (X) at (3,0);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (0.25,0) -- (0.25,0.25) -- (0,0.25);
  \draw (7.75,0) -- (7.75,0.25) -- (8,0.25);
  \draw[dashed] (A) -- (X) -- (D);
  \node[above left] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[right] at (D) {$D$};
  \node[below] at (X) {$X$};
\end{tikzpicture}
\end{document}
```

> The rectangular trapezoid ABCD has right angles in B and C. The sides AB, BC and CD are 4, 8 and 2, respectively. When the X-point varies on the BC side, what is the minimum possible value for the sum of the lengths of AX and XD? A) 9√2 B) 12
> 	
> C) 13
> 	
> D) 10
> 	
> E) None of the above.

**Answer:** D
[[src_kangourou_2024_student__Q16]]
