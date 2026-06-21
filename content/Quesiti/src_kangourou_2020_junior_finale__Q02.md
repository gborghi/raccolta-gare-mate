---
title: Kangourou Coppa Junior squadre 2020 Finale — Quesito 2
tipo: quesito
quesito_id: quesito_src_kangourou_2020_junior_finale__Q02
parent: src_kangourou_2020_junior_finale
competition: Kangourou Coppa Junior squadre 2020 Finale
family: kangourou
year: '2020'
level: kangourou
country: Italia
modalita: squadre
quesito: '2'
summary: Quadrato della misura di BD (triangoli simili)
answer: '0072'
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
  - anno/2020
  - livello/kangourou
  - topic/geometria_piana
  - gara/squadre
---

*Quadrato della misura di BD (triangoli simili)*

![[src_kangourou_2020_junior_finale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (3,2.5);
  \coordinate (D) at (1.5,1.25);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (B) -- (D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[left] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Il quadrato 
> Nel triangolo in figura D è il punto medio del lato AC, gli angoli 
>  e 
> 
>  sono uguali e il lato AB misura 12. Quanto vale il quadrato della 
> misura del segmento BD?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0072
**Fonte:** apri PDF p.1
