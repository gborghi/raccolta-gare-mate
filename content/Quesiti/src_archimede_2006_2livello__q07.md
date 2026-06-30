---
title: Archimede Gara 2° livello 2006 (biennio/triennio) — Quesito 7
tipo: quesito
quesito_id: quesito_src_archimede_2006_2livello__Q07
parent: src_archimede_2006_2livello
competition: Archimede Gara 2° livello 2006 (biennio/triennio)
family: archimede
year: '2006'
level: 2 livello
country: Italia
modalita: individuale
quesito: '7'
summary: Area intersezione di due cerchi dati XY e angolo 120°
answer: E
topics:
  - topic_geometria_piana
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2006
  - livello/2-livello
  - topic/geometria_piana
  - gara/individuale
---

*Area intersezione di due cerchi dati XY e angolo 120°*

![[src_archimede_2006_2livello__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (O) at (-0.866,0);
  \coordinate (O2) at (0.866,0);
  \coordinate (X) at (0,1.5);
  \coordinate (Y) at (0,-1.5);
  \coordinate (P) at (0.703,0.732);
  \draw (O) circle (1.732);
  \draw (O2) circle (1.732);
  \draw (X)--(O)--(Y);
  \draw (X)--(Y);
  \draw[dashed] (X)--(P)--(Y);
  \fill (O) circle (1.2pt); \fill (X) circle (1.2pt); \fill (Y) circle (1.2pt); \fill (P) circle (1.2pt);
  \node[above] at (X) {$X$};
  \node[below] at (Y) {$Y$};
  \node[left] at (O) {$O$};
  \node[above right] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> Due circonferenze con lo stesso raggio si intersecano in X e Y . Sia P un punto su un arco XY
> di una circonferenza interno all’altra. Sapendo che il segmento XY è lungo 3 e che l’angolo X bPY
> misura 120°, qual è l’area dell’intersezione tra i due cerchi?
>
> - **(A)** 2(π −1 4 √ 3)
> - **(B)** 3(π − √ 3)
> - **(C)** 1 2(3π − √ 3)
> - **(D)** 2(π −2 3 √ 3)
> - **(E)** 2(π −3 4 √ 3).

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/16vwkUgnRKjkVvV3P1qOJAWPbhVOVwLlf/view)
