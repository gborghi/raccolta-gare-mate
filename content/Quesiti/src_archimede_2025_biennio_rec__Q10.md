---
title: Giochi di Archimede 2025 - Biennio (prova di riserva) — Quesito 10
tipo: quesito
quesito_id: quesito_src_archimede_2025_biennio_rec__Q10
parent: src_archimede_2025_biennio_rec
competition: Giochi di Archimede 2025 - Biennio (prova di riserva)
family: archimede
year: '2025'
level: biennio
country: Italia
modalita: individuale
quesito: '10'
summary: Lunghezza UV tra archi nella diagonale del quadrato
answer: D
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
  - anno/2025
  - livello/biennio
  - topic/geometria_piana
  - gara/individuale
---

*Lunghezza UV tra archi nella diagonale del quadrato*

![[src_archimede_2025_biennio_rec__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=3]
  \coordinate (D) at (0,0);
  \coordinate (E) at (1,0);
  \coordinate (F) at (1,1);
  \coordinate (G) at (0,1);
  \draw (D)--(E)--(F)--(G)--cycle;
  \draw (D)--(F);
  \draw (G)--(E);
  \draw (D) arc (270:360:1);
  \draw (G) arc (90:0:1);
  \node at (0.62,0.62) {$V$};
  \node at (0.38,0.38) {$U$};
  \node[above left] at (G) {$G$};
  \node[above right] at (F) {$F$};
  \node[below left] at (D) {$D$};
  \node[below right] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> Preso un quadrato DEFG di lato 1m, si tracciano i quarti
> di circonferenza di centri D e F aventi per estremi gli altri
> due vertici del quadrato.
> Si traccia quindi la diagonale
> DF, che interseca i due archi nei punti U e V .
> Quanti metri misura il segmento UV ?
> D
> E
> F
> G
> U
> V
>
> - **(A)** √ 2 2
> - **(B)** √ 2−3 4
> - **(C)** 9 16
> - **(D)** 2− √ 2
> - **(E)** 1 2

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.2
