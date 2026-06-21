---
title: Kangourou 2017 Benjamin (gara marzo) — Quesito 20
tipo: quesito
quesito_id: quesito_src_kangourou_2017_benjamin_marzo__Q20
parent: src_kangourou_2017_benjamin_marzo
competition: Kangourou 2017 Benjamin (gara marzo)
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '20'
summary: 'Area figura di tre quadrati sovrapposti 2,4,6 cm'
answer: B
topics:
  - topic_geometria_piana
methods:
  - method_inclusione_esclusione
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area figura di tre quadrati sovrapposti 2,4,6 cm*

![[src_kangourou_2017_benjamin_marzo__prob20.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Square 1: side 2cm, top-left at (0,4)
  \fill[gray!40] (0,4) rectangle (2,2);
  \draw (0,4) rectangle (2,2);
  % Square 2: side 4cm, top-left vertex at center of square 1 = (1,3)
  \fill[gray!40] (1,3) rectangle (5,-1);
  \draw (1,3) rectangle (5,-1);
  % Re-draw square 1 on top to show overlap
  \fill[gray!40] (0,4) rectangle (2,2);
  \draw (0,4) rectangle (2,2);
  % Square 3: side 6cm, top-left vertex at center of square 2 = (3,1)
  \fill[gray!40] (3,1) rectangle (9,-5);
  \draw (3,1) rectangle (9,-5);
  % Re-draw square 2 on top
  \fill[gray!40] (1,3) rectangle (5,-1);
  \draw (1,3) rectangle (5,-1);
  % Re-draw square 1 on top
  \fill[gray!40] (0,4) rectangle (2,2);
  \draw (0,4) rectangle (2,2);
\end{tikzpicture}
\end{document}
```

> Nell’immagine vedi una figura formata sovrapponendo tre 
> quadrati in modo che le parti sovrapposte siano quadrate. Il pri­
> mo ha lato lungo 2 cm, il secondo ha lato lungo 4 cm e un vertice 
> nel centro del primo quadrato, l’ultimo ha lato lungo 6 cm e un 
> vertice nel centro del secondo quadrato. Quanti centimetri qua­
> drati misura l’area della figura?
> A) 32 	
> 	
> B) 51	
> 	
> C) 40	
> 	
> D) 56	
> 	
> E) 48
> I quesiti dal N. 21 al N. 30 valgono 5 punti ciascuno

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.4
