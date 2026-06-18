---
tipo: quesito
quesito_id: quesito_src_kangourou_2005_junior__Q24
parent: src_kangourou_2005_junior
competition: Kangourou 2005 - Junior (marzo)
family: kangourou
year: '2005'
level: kangourou
country: Italia
modalita: individuale
quesito: '24'
summary: Raggio circonferenza piccola in quadrato
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2005
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou 2005 - Junior (marzo) — Quesito 24

*Raggio circonferenza piccola in quadrato*

![[src_kangourou_2005_junior__prob24.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Problem 24: Square circumscribed to large circle radius 1,
  % small circle tangent to right and top sides and externally to large circle
  % r = 3 - 2*sqrt(2) ≈ 0.172, center at (1-r, 1-r) ≈ (0.828, 0.828)
  \draw (-1,-1) rectangle (1,1);
  \draw (0,0) circle[radius=1];
  \draw (0.828,0.828) circle[radius=0.172];
\end{tikzpicture}
\end{document}
```

> La figura rappresenta un quadrato e due
> circonferenze. Il quadrato è circoscritto alla
> circonferenza grande, che ha raggio 1 ed è tangente esternamente alla circonferenza piccola,
> cui sono tangenti due lati del quadrato. Quanto
> misura il raggio della circonferenza piccola? 
> A)                 B)
> C)   
> D)  
> E)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.5
