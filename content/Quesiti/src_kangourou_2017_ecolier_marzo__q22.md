---
title: Kangourou 2017 Écolier (gara marzo) — Quesito 22
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2017_ecolier_marzo__Q22
parent: src_kangourou_2017_ecolier_marzo
competition: Kangourou 2017 Écolier (gara marzo)
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '22'
summary: Quante faccine ha nascosto Lilli (celle confinanti)
answer: B
topics:
  - topic_combinatoria
  - topic_logica
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Quante faccine ha nascosto Lilli (celle confinanti)*

![[src_kangourou_2017_ecolier_marzo__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!50] (0,3) rectangle (1,4);
  \node at (1.5,3.5) {3};
  \node at (2.5,3.5) {3};
  \fill[gray!50] (3,3) rectangle (4,4);
  \node at (0.5,2.5) {2};
  \fill[gray!50] (1,2) rectangle (4,3);
  \fill[gray!50] (0,1) rectangle (2,2);
  \node at (2.5,1.5) {2};
  \fill[gray!50] (3,1) rectangle (4,2);
  \fill[gray!50] (0,0) rectangle (1,1);
  \node at (1.5,0.5) {1};
  \fill[gray!50] (2,0) rectangle (4,1);
  \draw[thick] (0,0) grid (4,4);
\end{tikzpicture}
\end{document}
```

> In figura vedi una tabella suddivisa in celle: se hanno in comune 
> un lato o anche solo un vertice diremo che le due celle sono confi­
> nanti. In alcune delle celle Lilli ha disegnato una faccina       e  in 
> alcune delle altre celle ha scritto il numero totale di faccine che stan­
> no nelle celle confinanti. Poi ha coperto con dei cartoncini tutte le 
> celle che non contengono numeri. Quante faccine ha nascosto Lilli?
> A) 4	
> 	
> B) 5	
> 	
> C) 7	
> 	
> D) 8	
> 	
> E) 11

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1qBsZ2ryuPZr8adQsZ3WyVsWvpOn1ZiFC/view)


<span class="qlang-split" data-lang="en"></span>


How many faces did Lilli (neighbouring cells) hide?

![[src_kangourou_2017_ecolier_marzo__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!50] (0,3) rectangle (1,4);
  \node at (1.5,3.5) {3};
  \node at (2.5,3.5) {3};
  \fill[gray!50] (3,3) rectangle (4,4);
  \node at (0.5,2.5) {2};
  \fill[gray!50] (1,2) rectangle (4,3);
  \fill[gray!50] (0,1) rectangle (2,2);
  \node at (2.5,1.5) {2};
  \fill[gray!50] (3,1) rectangle (4,2);
  \fill[gray!50] (0,0) rectangle (1,1);
  \node at (1.5,0.5) {1};
  \fill[gray!50] (2,0) rectangle (4,1);
  \draw[thick] (0,0) grid (4,4);
\end{tikzpicture}
\end{document}
```

> In the figure you can see a table divided into cells: if they have one side or even just one vertex in common, we will say that the two cells are adjacent. In some of the cells Lilli drew a page and in some of the other cells he wrote down the total number of pages in the adjacent cells. Then he covered all the cells that didn't contain numbers with cardboard. How many faces did Lilli hide? A) 4
> 	
> B) 5
> 	
> C) 7
> 	
> D) 8
> 	
> E) 11

**Answer:** B
[[src_kangourou_2017_ecolier_marzo__Q22]]
