---
title: Kangourou Categoria Cadet 2024 — Quesito 13
tipo: quesito
quesito_id: quesito_src_kangourou_2024_cadet__Q13
parent: src_kangourou_2024_cadet
competition: Kangourou Categoria Cadet 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '13'
summary: Differenza A-B fra due triangoli ombreggiati nel quadrato
answer: A
topics:
  - topic_geometria_piana
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

*Differenza A-B fra due triangoli ombreggiati nel quadrato*

![[src_kangourou_2024_cadet__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  % Square with 3 segments creating 5 triangles, A and B are shaded
  % Coordinates: BL=(0,0), BR=(5,0), TR=(5,5), TL=(0,5)
  % Segments: BL->(3.75,5), (3.75,5)->BR, BR->TL
  % Intersection I of (BL->(3.75,5)) and (BR->TL): approx (2.14,2.81)
  \fill[gray!40] (0,5) -- (2.14,2.86) -- (0,0) -- cycle;
  \fill[gray!40] (3.75,5) -- (5,0) -- (2.14,2.86) -- cycle;
  \draw (0,0) rectangle (5,5);
  \draw (0,0) -- (3.75,5);
  \draw (3.75,5) -- (5,0);
  \draw (5,0) -- (0,5);
  \node at (0.7,2.5) {$A$};
  \node at (4.2,2.5) {$B$};
  \node[below] at (2.5,0) {10 m};
\end{tikzpicture}
\end{document}
```

> Il lato del quadrato in figura è lungo 10 m. Il quadrato è ripartito in cinque triangoli da tre segmenti, come mostrato. I due 
> triangoli ombreggiati hanno aree, in metri quadrati, A e B. 
> Quanto vale la differenza A – B ? 
> A) 0 
> B) 1 
> C) 2 
> D) 5 
> E) 10

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.3
