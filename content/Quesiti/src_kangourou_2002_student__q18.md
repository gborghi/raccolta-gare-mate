---
title: Kangourou 2002 - Student (21 marzo) — Quesito 18
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2002_student__Q18
parent: src_kangourou_2002_student
competition: Kangourou 2002 - Student (21 marzo)
family: kangourou
year: '2002'
level: kangourou
country: Italia
modalita: individuale
quesito: '18'
summary: Raggio r dei cerchi nel triangolo
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2002
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Raggio r dei cerchi nel triangolo*

![[src_kangourou_2002_student__prob18.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\r{0.5}
  \draw (0, \r) circle (\r);
  \draw ({2*\r}, \r) circle (\r);
  \draw ({4*\r}, \r) circle (\r);
  \draw (\r, {(\r + 0.866*2*\r)}) circle (\r);
  \draw ({3*\r}, {(\r + 0.866*2*\r)}) circle (\r);
  \draw ({2*\r}, {(\r + 0.866*4*\r)}) circle (\r);
  \draw[<->] ({5.2*\r}, 0) -- ({5.2*\r}, {2*\r + 0.866*4*\r}) node[midway, right] {$2$};
\end{tikzpicture}
\end{document}
```

> Il "triangolo" nella figura a lato è formato da cerchi 
> dello stesso raggio r. L'altezza del "triangolo" è 2. 
> Quanto misura il raggio r ? 
>  
>  
> A. 1 / (1 + √ 3) 
> B. 2 / (1 + √ 3) 
> C. 2 / (2 + √ 3)
>  
> D. 1 / (2 + √ 3) 
> E. altra risposta

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1avMk9GHcSTwy2eoWkRxzXBAqjQvR2OyM/view)


<span class="qlang-split" data-lang="en"></span>


*Rage of circles in the triangle*

![[src_kangourou_2002_student__prob18.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\r{0.5}
  \draw (0, \r) circle (\r);
  \draw ({2*\r}, \r) circle (\r);
  \draw ({4*\r}, \r) circle (\r);
  \draw (\r, {(\r + 0.866*2*\r)}) circle (\r);
  \draw ({3*\r}, {(\r + 0.866*2*\r)}) circle (\r);
  \draw ({2*\r}, {(\r + 0.866*4*\r)}) circle (\r);
  \draw[<->] ({5.2*\r}, 0) -- ({5.2*\r}, {2*\r + 0.866*4*\r}) node[midway, right] {$2$};
\end{tikzpicture}
\end{document}
```

> The 'triangle' in the figure on the side is formed by circles of the same radius r. The height of the triangle is 2. What 's the size of the r-ray ?
>  
>  
> A. 1 / (1 + √ 3) B. 2 / (1 + √ 3) C. 2 / (2 + √ 3)
>  
> D. 1 / (2 + √ 3) E. other answer

**Answer:** A
[[src_kangourou_2002_student__Q18]]
