---
tipo: quesito
quesito_id: quesito_src_archimede_2025_triennio_rec__Q08
parent: src_archimede_2025_triennio_rec
competition: Giochi di Archimede 2025 - Triennio (prova di riserva)
family: archimede
year: '2025'
level: triennio
country: Italia
modalita: individuale
quesito: '8'
summary: Lunghezza UV tra archi nel segmento dei punti medi
answer: A
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
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

# Giochi di Archimede 2025 - Triennio (prova di riserva) — Quesito 8

*Lunghezza UV tra archi nel segmento dei punti medi*

![[src_archimede_2025_triennio_rec__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=3]
  \coordinate (D) at (0,0);
  \coordinate (E) at (1,0);
  \coordinate (F) at (1,1);
  \coordinate (G) at (0,1);
  \draw (D)--(E)--(F)--(G)--cycle;
  \draw (G) arc (90:0:1);
  \draw (E) arc (270:180:1);
  \node[below left] at (D) {$D$};
  \node[below right] at (E) {$E$};
  \node[above right] at (F) {$F$};
  \node[above left] at (G) {$G$};
\end{tikzpicture}
\end{document}
```

> Preso un quadrato DEFG di lato 1 m, si tracciano i quarti
> di circonferenza di centri D e F con estremi negli altri due
> vertici. Si traccia quindi il segmento che congiunge i punti
> medi dei lati DE e FG, che interseca i due archi nei punti
> U e V . Quanti metri misura la lunghezza del segmento UV ?
> D
> E
> F
> G
> U
> V
> (A)
> √
> 3−1
> (B)
> √
> 2
> 2
> (C)
> √
> 3
> 2
> (D)
> √
> 3
> 3
> (E) 3
> 4

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.1
