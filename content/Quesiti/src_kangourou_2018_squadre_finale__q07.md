---
title: Kangourou Coppa squadre 2018 Finale — Quesito 7
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2018_squadre_finale__Q07
parent: src_kangourou_2018_squadre_finale
competition: Kangourou Coppa squadre 2018 Finale
family: kangourou
year: '2018'
level: squadre
country: Italia
modalita: squadre
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
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


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
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1dMmKnOnlEC_eAvXkktkKfd6KtpuZmwnO/view)


<span class="qlang-split" data-lang="en"></span>


*Square region shaded area with 4 circles*

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

> The figure shows a square containing four circles. Each of them  has a radius of 3 cm,  is tangent to one of the sides of the square at its midpoint,  is tangent to two other circles. How many square centimetres is the area of the shaded region worth? (Write the integer number closest to the exact value of the area; to determine this, use the approximations you think are appropriate for the purpose.)
>  
>  
> 
> 2

**Answer:** 0089
[[src_kangourou_2018_squadre_finale__Q07]]
