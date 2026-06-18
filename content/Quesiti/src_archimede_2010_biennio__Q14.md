---
tipo: quesito
quesito_id: quesito_src_archimede_2010_biennio__Q14
parent: src_archimede_2010_biennio
competition: Giochi di Archimede 2010 - Biennio
family: archimede
year: '2010'
level: 'biennio, triennio'
country: Italia
quesito: '14'
summary: Area triangolo ABG da diagonali in esagono regolare
answer: B
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
  - anno/2010
  - livello/biennio
  - livello/triennio
  - topic/geometria_piana
---

# Giochi di Archimede 2010 - Biennio — Quesito 14

*Area triangolo ABG da diagonali in esagono regolare*

![[src_archimede_2010_biennio__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0.5,0.866);
  \coordinate (B) at (1,0);
  \coordinate (C) at (0.5,-0.866);
  \coordinate (D) at (-0.5,-0.866);
  \coordinate (E) at (-1,0);
  \coordinate (F) at (-0.5,0.866);
  \draw (A)--(B)--(C)--(D)--(E)--(F)--cycle;
  \node[above] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[above] at (F) {$F$};
\end{tikzpicture}
\end{document}
```

> ABCDEF è un esagono regolare di lato 1 cm. G è il punto di
> intersezione tra le diagonali AC e BE. Quanto vale l’area del
> triangolo ABG?
> (A)
> √
> 3−1
> 2
> cm2,
> (B)
> √
> 3
> 8 cm2,
> (C)
> 9
> 40 cm2,
> (D) 1+
> √
> 3
> 12
> cm2,
> (E)
> √
> 3
> 4 cm2.
> A
> B
> C
> D
> E
> F

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.4
**Anche in triennio:** apri PDF p.6
