---
tipo: quesito
quesito_id: quesito_src_kangourou_2022_junior_gara__Q11
parent: src_kangourou_2022_junior_gara
competition: Kangourou 2022 Junior gara individuale
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: '11'
summary: Area della regione ombreggiata con cerchi grandi e piccoli
answer: B
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

# Kangourou 2022 Junior gara individuale — Quesito 11

*Area della regione ombreggiata con cerchi grandi e piccoli*

![[src_kangourou_2022_junior_gara__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}
% 3 big circles (radius 2) each containing 2 small circles (radius 1); all centers collinear
% Small circles radius 1 at x=0,2,4,6,8,10; big circles radius 2 centered at x=1,5,9
% Shaded: inside big circle, outside its two small circles
\begin{scope}
  \clip (1,0) circle (2);
  \fill[gray!40] (1,0) circle (2);
  \fill[white] (0,0) circle (1);
  \fill[white] (2,0) circle (1);
\end{scope}
\begin{scope}
  \clip (5,0) circle (2);
  \fill[gray!40] (5,0) circle (2);
  \fill[white] (4,0) circle (1);
  \fill[white] (6,0) circle (1);
\end{scope}
\begin{scope}
  \clip (9,0) circle (2);
  \fill[gray!40] (9,0) circle (2);
  \fill[white] (8,0) circle (1);
  \fill[white] (10,0) circle (1);
\end{scope}
\draw (1,0) circle (2);
\draw (5,0) circle (2);
\draw (9,0) circle (2);
\draw (0,0) circle (1);
\draw (2,0) circle (1);
\draw (4,0) circle (1);
\draw (6,0) circle (1);
\draw (8,0) circle (1);
\draw (10,0) circle (1);
\end{tikzpicture}
\end{document}
```

> La figura mostra tre cerchi grandi e quattro piccoli. 
> Ogni cerchio grande contiene esattamente due cerchi piccoli; i 
> centri di tutti i cerchi e tutti i punti di tangenza fra le 
> circonferenze che li delimitano sono allineati su una stessa 
> retta. Il raggio di  
> ogni cerchio piccolo misura 1. Quanto vale l’area della regione 
> ombreggiata?  
> A) π  
>   
> B) 2π  
>   
> C) 3π    
> D) 4π    
> E) 6π
> 22 
> 3 
> 8 
> ? 
> 
>  
> Kangourou 2022 
> pagina  23

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.2
