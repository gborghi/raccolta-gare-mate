---
title: Giochi di Archimede 2021 - Gara Triennio (online) — Quesito 8
tipo: quesito
quesito_id: quesito_src_archimede_2021_triennio_online__Q08
parent: src_archimede_2021_triennio_online
competition: Giochi di Archimede 2021 - Gara Triennio (online)
family: archimede
year: '2021'
level: triennio
country: Italia
modalita: individuale
quesito: '8'
summary: Area triangolo PQR da aree di sotto-triangoli con ceviane
answer: C
topics:
  - topic_geometria_piana
methods:
  - method_doppio_conteggio
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2021
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

*Area triangolo PQR da aree di sotto-triangoli con ceviane*

![[src_archimede_2021_triennio_online__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (P) at (0,0);
  \coordinate (R) at (6,0);
  \coordinate (Q) at (2.6,3.6);
  \coordinate (S) at (1.43,1.98);
  \coordinate (T) at (4.47,1.62);
  \coordinate (I) at (3.27,1.18);
  \draw (P)--(Q)--(R)--cycle;
  \draw (R)--(S);
  \draw (P)--(T);
  \fill (I) circle (1.4pt);
  \node[above] at (Q) {$Q$};
  \node[left] at (P) {$P$};
  \node[right] at (R) {$R$};
  \node[left] at (S) {$S$};
  \node[right] at (T) {$T$};
  \node[above left] at (I) {$I$};
\end{tikzpicture}
\end{document}
```

> Nel triangolo PQR, i punti S e T appartengono, nell’ordine, ai lati PQ e QR. Detto I il
> punto d’intersezione dei segmenti RS e PT, le aree dei triangoli PIR, RIT e SIP misurano
> rispettivamente 3 mm2, 5 mm2 e 1 mm2. Qual è l’area del triangolo PQR?
> P
> Q
> R
> S
> T
> I
>
> - **(A)** 18 mm2
> - **(B)** 27 mm2
> - **(C)** 24 mm2
> - **(D)** 21 mm2
> - **(E)** 20 mm2

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.1
