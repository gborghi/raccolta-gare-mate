---
tipo: quesito
quesito_id: quesito_src_archimede_2021_triennio__Q08
parent: src_archimede_2021_triennio
competition: Giochi di Archimede 2021 - Gara Triennio (tradizionale)
family: archimede
year: '2021'
level: triennio
country: Italia
quesito: '8'
summary: Area triangolo PQR da aree di sotto-triangoli con ceviane
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
---

# Giochi di Archimede 2021 - Gara Triennio (tradizionale) — Quesito 8

*Area triangolo PQR da aree di sotto-triangoli con ceviane*

![[src_archimede_2021_triennio__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (P) at (0,0);
  \coordinate (R) at (6,0);
  \coordinate (Q) at (2.2,3.8);
  \coordinate (S) at (0.924,1.596);
  \coordinate (T) at (3.91,2.09);
  \coordinate (I) at (2.222,1.188);
  \draw (P) -- (Q) -- (R) -- cycle;
  \draw (R) -- (S);
  \draw (P) -- (T);
  \fill (I) circle (1.5pt);
  \node[below left] at (P) {$P$};
  \node[below right] at (R) {$R$};
  \node[above] at (Q) {$Q$};
  \node[left] at (S) {$S$};
  \node[above right] at (T) {$T$};
  \node[below left] at (I) {$I$};
\end{tikzpicture}
\end{document}
```

> Nel triangolo PQR, i punti S e T appartengono, nell’ordine, ai lati PQ e QR. Detto I il
> punto d’intersezione dei segmenti RS e PT, le aree dei triangoli PIR, RIT e SIP misurano
> rispettivamente 5 mm2, 10 mm2 e 1 mm2. Qual è l’area del triangolo PQR?
> P
> Q
> R
> S
> T
> I
> (A) 36 mm2
> (B) 30 mm2
> (C) 24 mm2
> (D) 27 mm2
> (E) 32 mm2

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.2
