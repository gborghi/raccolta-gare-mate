---
tipo: quesito
quesito_id: quesito_src_kangourou_2018_squadre_finale__Q07
parent: src_kangourou_2018_squadre_finale
competition: Kangourou Coppa squadre 2018 Finale
family: kangourou
year: '2018'
level: squadre
country: Italia
quesito: '7'
summary: Area regione ombreggiata in quadrato con 4 cerchi
answer: 0089
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_stima
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2018
  - livello/squadre
  - topic/geometria_piana
---

# Kangourou Coppa squadre 2018 Finale — Quesito 7

*Area regione ombreggiata in quadrato con 4 cerchi*

![[src_kangourou_2018_squadre_finale__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Circles of radius r=3, each tangent to one side at its midpoint and to two others
  % Centers at (0,±d) and (±d,0) where d=3*sqrt(2)~4.243
  % Half-side of square s = 3+3*sqrt(2)~7.243
  \fill[gray!30] (-7.243,-7.243) rectangle (7.243,7.243);
  \fill[white] (0,4.243) circle (3);
  \fill[white] (0,-4.243) circle (3);
  \fill[white] (4.243,0) circle (3);
  \fill[white] (-4.243,0) circle (3);
  \draw[thick] (0,4.243) circle (3);
  \draw[thick] (0,-4.243) circle (3);
  \draw[thick] (4.243,0) circle (3);
  \draw[thick] (-4.243,0) circle (3);
  \draw[thick] (-7.243,-7.243) rectangle (7.243,7.243);
\end{tikzpicture}
\end{document}
```

> Quattro cerchi 
> La figura mostra un quadrato che contiene quattro cerchi. Ciascuno di essi 
>  ha raggio 3 cm,  
>  è tangente a uno dei lati del quadrato nel suo punto medio, 
>  è tangente ad altri due cerchi.  
> Quanti centimetri quadrati vale l’area della regione ombreggiata? (Scrivete il 
> numero intero più vicino al valore esatto dell’area; per determinarlo, usate 
> le approssimazioni che ritenete idonee allo scopo.)  
>  
>  
> 
> 2

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_stima|Stima e approssimazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0089
**Fonte:** apri PDF p.1
