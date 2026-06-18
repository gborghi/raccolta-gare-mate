---
tipo: quesito
quesito_id: quesito_src_kangourou_2006_junior_marzo__Q16
parent: src_kangourou_2006_junior_marzo
competition: Kangourou 2006 Junior (marzo)
family: kangourou
year: '2006'
level: kangourou
country: Italia
quesito: '16'
summary: Perimetro esagono intersezione di due triangoli
answer: B
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
  - anno/2006
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2006 Junior (marzo) — Quesito 16

*Perimetro esagono intersezione di due triangoli*

![[src_kangourou_2006_junior_marzo__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  % Two overlapping equilateral triangles (Star of David), each with parallel sides
  % Triangle 1 pointing up: top (0,1.155), bottom-left (-1,-0.577), bottom-right (1,-0.577)
  \draw (0,1.155) -- (-1,-0.577) -- (1,-0.577) -- cycle;
  % Triangle 2 pointing down: bottom (0,-1.155), top-left (-1,0.577), top-right (1,0.577)
  \draw (0,-1.155) -- (-1,0.577) -- (1,0.577) -- cycle;
\end{tikzpicture}
\end{document}
```

> Due triangoli equilateri uguali, di perimetro 18
> metri, vengono parzialmente sovrapposti come è
> indicato dalla figura: in particolare ogni lato dell'uno è parallelo ad un lato dell'altro. Quanti metri
> misura il perimetro della figura esagonale che
> costituisce l'intersezione dei due triangoli? 
> A)                  B) 12             C) 13             
> D) 14              E) 15

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.3
