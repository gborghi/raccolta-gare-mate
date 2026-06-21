---
title: Kangourou 2009 - Cadet (gara 19 marzo) — Quesito 3
tipo: quesito
quesito_id: quesito_src_kangourou_2009_cadet_marzo__Q03
parent: src_kangourou_2009_cadet_marzo
competition: Kangourou 2009 - Cadet (gara 19 marzo)
family: kangourou
year: '2009'
level: kangourou
country: Italia
modalita: individuale
quesito: '3'
summary: Perimetro dell esagono ombreggiato (stella)
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2009
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Perimetro dell esagono ombreggiato (stella)*

![[src_kangourou_2009_cadet_marzo__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (U1) at (0, 2);
  \coordinate (U2) at (-1.732, -1);
  \coordinate (U3) at (1.732, -1);
  \coordinate (D1) at (0, -2);
  \coordinate (D2) at (1.732, 1);
  \coordinate (D3) at (-1.732, 1);
  \fill[gray!40] (0,1) -- (0.866,0.5) -- (0.866,-0.5) -- (0,-1) -- (-0.866,-0.5) -- (-0.866,0.5) -- cycle;
  \draw (U1) -- (U2) -- (U3) -- cycle;
  \draw (D1) -- (D2) -- (D3) -- cycle;
  \draw (0,1) -- (0.866,0.5) -- (0.866,-0.5) -- (0,-1) -- (-0.866,-0.5) -- (-0.866,0.5) -- cycle;
  \draw (0,1) -- (0,-1);
  \draw (0.866,0.5) -- (-0.866,-0.5);
  \draw (0.866,-0.5) -- (-0.866,0.5);
\end{tikzpicture}
\end{document}
```

> La stella rappresentata in figura è formata da 12
> triangoli equilateri identici. Il perimetro della stella è
> di 36 cm. Quanti centimetri misura il perimetro dell’esagono ombreggiato? 
> A) 6
> B) 12
> C) 18
> D) 24
> E) 30

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.1
