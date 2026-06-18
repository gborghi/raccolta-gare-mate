---
tipo: quesito
quesito_id: quesito_src_cesenatico_2013__Q02
parent: src_cesenatico_2013
competition: Olimpiade Italiana (Cesenatico) 2013 - soluzioni
family: archimede
year: '2013'
level: nazionale
country: Italia
quesito: '2'
summary: dimostrare A'B'=(a-b)/2
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
  - anno/2013
  - livello/nazionale
  - topic/geometria_piana
---

# Olimpiade Italiana (Cesenatico) 2013 - soluzioni — Quesito 2

*dimostrare A'B'=(a-b)/2*

![[src_cesenatico_2013__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (0,0);
  \coordinate (B) at (10,0);
  \coordinate (C) at (2.6,4.2);
  \coordinate (M) at (5,0);
  \coordinate (I1) at (2.551,1.421);
  \coordinate (I2) at (5.664,1.145);
  \coordinate (Ap) at (3.785,2.126);
  \coordinate (Bp) at (4.67,0.577);
  \draw (A)--(B)--(C)--cycle;
  \draw (C)--(M);
  \draw (I1) circle (1.421);
  \draw (I2) circle (1.145);
  \fill (Ap) circle (1.5pt) node[above right] {$A'$};
  \fill (Bp) circle (1.5pt) node[above right] {$B'$};
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[below] at (M) {$M$};
  \node at (2.0,1.0) {$\alpha$};
  \node at (5.7,0.6) {$\beta$};
\end{tikzpicture}
\end{document}
```

> Nel triangolo ABC supponiamo di avere a > b, dove a = BC e b = AC. Sia M il punto medio di AB, e siano α
> e β le circonferenze inscritte, rispettivamente, ai triangoli ACM e BCM. Siano poi A′ e B′ i punti di tangenza
> di α e β con CM. Dimostrare che A′B′ = a −b
> 2
> .

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.1
