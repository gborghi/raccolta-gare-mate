---
title: Kangourou 2006 - Benjamin (marzo) — Quesito 9
tipo: quesito
quesito_id: quesito_src_kangourou_2006_benjamin__Q09
parent: src_kangourou_2006_benjamin
competition: Kangourou 2006 - Benjamin (marzo)
family: kangourou
year: '2006'
level: kangourou
country: Italia
modalita: individuale
quesito: '9'
summary: Figura ottenuta piegando esagono regolare
answer: E
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2006
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Figura ottenuta piegando esagono regolare*

![[src_kangourou_2006_benjamin__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,1.5);
  \coordinate (B) at (1.299,0.75);
  \coordinate (C) at (1.299,-0.75);
  \coordinate (D) at (0,-1.5);
  \coordinate (E) at (-1.299,-0.75);
  \coordinate (F) at (-1.299,0.75);
  \draw (A) -- (B) -- (C) -- (D) -- (E) -- (F) -- cycle;
  \fill (A) circle (3pt);
  \fill (C) circle (3pt);
  \fill (E) circle (3pt);
\end{tikzpicture}
\end{document}
```

> La figura mostra un foglio di carta che ha la
> forma di un esagono regolare. Esso viene piegato in
> modo che i tre vertici indicati con un pallino vadano
> esattamente al centro dell'esagono e gli altri rimangano fermi. Che figura si ottiene?
> A) una stella a sei punte    
> B) un dodecagono    
> C) un esagono  
> D) un quadrato    
> E) un triangolo

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.2
