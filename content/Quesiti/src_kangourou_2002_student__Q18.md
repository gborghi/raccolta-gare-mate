---
title: Kangourou 2002 - Student (21 marzo) — Quesito 18
tipo: quesito
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
**Fonte:** apri PDF p.4
