---
title: Kangourou Squadre 2024 Junior Finale 2 — Quesito 7
tipo: quesito
quesito_id: quesito_src_kangourou_2024_junior_squadre_f2__Q07
parent: src_kangourou_2024_junior_squadre_f2
competition: Kangourou Squadre 2024 Junior Finale 2
family: kangourou
year: '2024'
level: squadre
country: Italia
modalita: squadre
quesito: '7'
summary: Area rettangolo ABCD da area triangolo EHK
answer: '0630'
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

*Area rettangolo ABCD da area triangolo EHK*

![[src_kangourou_2024_junior_squadre_f2__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (3,2);
  \coordinate (D) at (0,2);
  \coordinate (E) at (1.5,2);
  \coordinate (F) at (1,0);
  \coordinate (G) at (2,0);
  \coordinate (H) at (1.2,0.8);
  \coordinate (K) at (1.7143,1.1429);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (E) -- (F);
  \draw (E) -- (G);
  \draw (H) -- (K);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node[below] at (G) {$G$};
  \node[left] at (H) {$H$};
  \node[right] at (K) {$K$};
  \fill (A) circle (1.5pt);
  \fill (B) circle (1.5pt);
  \fill (C) circle (1.5pt);
  \fill (D) circle (1.5pt);
  \fill (E) circle (1.5pt);
  \fill (F) circle (1.5pt);
  \fill (G) circle (1.5pt);
  \fill (H) circle (1.5pt);
  \fill (K) circle (1.5pt);
\end{tikzpicture}
\end{document}
```

> Il rettangolo  
> Nella figura a destra, ABCD è un rettangolo, E è il punto 
> medio di DC e AF, FG, GB sono ciascuno lunghi 1/3 di AB. 
> L’area del triangolo EHK è 27. Quanto vale l’area del 
> rettangolo ABCD?   
>  
>  
> K 
> B 
> C 
> D 
> E 
> F 
> G 
> A 
> H

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0630
**Fonte:** apri PDF p.1
