---
tipo: quesito
quesito_id: quesito_src_cesenatico_2004_squadre__Q01
parent: src_cesenatico_2004_squadre
competition: Gara a Squadre Cesenatico 2004 - Finale Nazionale
family: archimede
year: '2004'
level: squadre
country: Italia
modalita: squadre
quesito: '1'
summary: Area del quadrilatero formato da sentinelle su triangoli equilateri
answer: '5971'
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2004
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

# Gara a Squadre Cesenatico 2004 - Finale Nazionale — Quesito 1

*Area del quadrilatero formato da sentinelle su triangoli equilateri*

![[src_cesenatico_2004_squadre__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (2,2);
  \coordinate (D) at (0,2);
  \coordinate (Tb) at (1,-1.732);
  \coordinate (Tr) at (3.732,1);
  \coordinate (Tt) at (1,3.732);
  \coordinate (Tl) at (-1.732,1);
  \draw (A)--(B)--(C)--(D)--cycle;
  \draw (A)--(Tb)--(B);
  \draw (B)--(Tr)--(C);
  \draw (C)--(Tt)--(D);
  \draw (D)--(Tl)--(A);
\end{tikzpicture}
\end{document}
```

> Le sentinelle
> Il palazzo di Herrovaccio, re di Franquvia, ha pianta quadrata che ricopre
> un area di 1600 miglia franquviane quadrate. Quattro sentinelle sorvegliano
> ognuna un lato del palazzo, disposte come in figura (le sentinelle formano con i
> lati del palazzo quattro triangoli equilateri). Qual è l’area (in miglia quadrate)
> del quadrilatero che ha per vertici le quattro sentinelle?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 5971
**Fonte:** apri PDF p.1
