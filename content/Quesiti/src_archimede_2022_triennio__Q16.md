---
tipo: quesito
quesito_id: quesito_src_archimede_2022_triennio__Q16
parent: src_archimede_2022_triennio
competition: Giochi di Archimede 2022 - Gara Triennio
family: archimede
year: '2022'
level: triennio
country: Italia
quesito: '16'
summary: Area di triangolo interno con lati paralleli a distanza 2
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
  - comp/archimede
  - anno/2022
  - livello/triennio
  - topic/geometria_piana
---

# Giochi di Archimede 2022 - Gara Triennio — Quesito 16

*Area di triangolo interno con lati paralleli a distanza 2*

![[src_archimede_2022_triennio__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (C) at (7,0);
  \coordinate (B) at (2.2,3.6);
  \coordinate (Ap) at (1.0,0.7);
  \coordinate (Bp) at (2.45,2.85);
  \coordinate (Cp) at (4.55,0.95);
  \draw (A)--(B)--(C)--cycle;
  \draw (Ap)--(Bp)--(Cp)--cycle;
  \node[below left] at (A) {$A$};
  \node[above] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[below left] at (Ap) {$A'$};
  \node[above] at (Bp) {$B'$};
  \node[below right] at (Cp) {$C'$};
\end{tikzpicture}
\end{document}
```

> Nel triangolo acutangolo ABC, i lati AB e BC
> misurano 17 m e 25 m, l’altezza BH misura 15 m.
> Consideriamo il triangolo A′B′C′, contenuto in
> ABC, i cui lati sono paralleli a quelli di ABC e
> si trovano a 2 m di distanza da questi. Quanti
> m2 misura l’area di A′B′C′?
> A
> B
> C
> A′
> B′
> C′
> (A) 315/2
> (B) 280/3
> (C) 140
> (D) 105
> (E) 126
> 311

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.2
