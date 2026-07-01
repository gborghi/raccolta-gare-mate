---
title: Kangourou 2022 Student — Semifinale individuale — Quesito 10
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2022_student_semifinale__Q10
parent: src_kangourou_2022_student_semifinale
competition: Kangourou 2022 Student — Semifinale individuale
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: '10'
summary: 'Due esagoni regolari con lati perpendicolari, angolo ABC'
answer: '15'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Due esagoni regolari con lati perpendicolari, angolo ABC*

![[src_kangourou_2022_student_semifinale__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2, line width=0.8pt]
  \filldraw[fill=yellow!60, draw=black]
    (0,0) -- (0,-1) -- (-0.866,-1.5) -- (-1.732,-1) -- (-1.732,0) -- (-0.866,0.5) -- cycle;
  \filldraw[fill=yellow!60, draw=black]
    (0,0) -- (1,0) -- (1.5,0.866) -- (1,1.732) -- (0,1.732) -- (-0.5,0.866) -- cycle;
  \draw (0,-0.15) -- (0.15,-0.15) -- (0.15,0);
  \draw[thick] (0,-1) -- (1.5,0.866);
  \node[below] at (0,-1) {$A$};
  \node[right] at (1.5,0.866) {$B$};
  \node[below right] at (0.05,-0.05) {$C$};
  \draw (1.35,0.866) arc[start angle=180, end angle=218, radius=0.15];
\end{tikzpicture}
\end{document}
```

> (4 punti) La figura mostra due esagoni regolari congruenti che 
> hanno in comune solo un vertice. Due dei lati che confluiscono in 
> quel vertice sono perpendicolari. Quanti gradi misura l’angolo 𝐴𝐵𝐶
> ̂  
> indicato?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 15
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1Z0Xm-j7zd_DHeMYmYJusVMK7Z6_vLUBf/view)


<span class="qlang-split" data-lang="en"></span>


*Two regular hexagons with perpendicular sides, angle ABC*

![[src_kangourou_2022_student_semifinale__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2, line width=0.8pt]
  \filldraw[fill=yellow!60, draw=black]
    (0,0) -- (0,-1) -- (-0.866,-1.5) -- (-1.732,-1) -- (-1.732,0) -- (-0.866,0.5) -- cycle;
  \filldraw[fill=yellow!60, draw=black]
    (0,0) -- (1,0) -- (1.5,0.866) -- (1,1.732) -- (0,1.732) -- (-0.5,0.866) -- cycle;
  \draw (0,-0.15) -- (0.15,-0.15) -- (0.15,0);
  \draw[thick] (0,-1) -- (1.5,0.866);
  \node[below] at (0,-1) {$A$};
  \node[right] at (1.5,0.866) {$B$};
  \node[below right] at (0.05,-0.05) {$C$};
  \draw (1.35,0.866) arc[start angle=180, end angle=218, radius=0.15];
\end{tikzpicture}
\end{document}
```

> (4 points) The figure shows two congruent regular hexagons that have only one vertex in common. Two of the sides that converge at that summit are perpendicular. How many degrees does the indicated angle ABC measure?

**Answer:** 15
[[src_kangourou_2022_student_semifinale__Q10]]
