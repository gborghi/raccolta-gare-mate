---
tipo: quesito
quesito_id: quesito_src_archimede_2022_2livello__Q13
parent: src_archimede_2022_2livello
competition: Archimede Gara di Febbraio 2022 - 2° livello
family: archimede
year: '2022'
level: 2 livello
country: Italia
modalita: individuale
quesito: '13'
summary: 'Tavolo esagonale, tovaglia rettangolare, area tavolo'
answer: '1536'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2022
  - livello/2-livello
  - topic/geometria_piana
  - gara/individuale
---

# Archimede Gara di Febbraio 2022 - 2° livello — Quesito 13

*Tavolo esagonale, tovaglia rettangolare, area tavolo*

![[src_archimede_2022_2livello__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (-0.5,-0.866);
  \coordinate (B) at (0.5,-0.866);
  \coordinate (C) at (1,0);
  \coordinate (D) at (0.5,0.866);
  \coordinate (E) at (-0.5,0.866);
  \coordinate (F) at (-1,0);
  \coordinate (O) at (0,0);
  \coordinate (K) at (-0.5,0);
  \coordinate (H) at (0.5,0);
  \fill[gray!30] (A) -- (B) -- (D) -- (E) -- cycle;
  \draw (A)--(B)--(C)--(D)--(E)--(F)--cycle;
  \draw (E)--(A) (D)--(B) (F)--(C) (A)--(D) (E)--(B);
  \foreach \p in {A,B,C,D,E,F,O,K,H} \fill (\p) circle (0.02);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[above left] at (E) {$E$};
  \node[left] at (F) {$F$};
  \node[below right] at (O) {$O$};
  \node[below left] at (K) {$K$};
  \node[below right] at (H) {$H$};
\end{tikzpicture}
\end{document}
```

> Lucio compra un tavolo a forma di esagono regolare e una tovaglia rettangolare di area 1024 cm2
> che ha lato minore pari al lato dell’esagono e copre esattamente la porzione di tavolo compresa
> fra due lati opposti. Quanto vale l’area del tavolo, espressa in cm2?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1536
**Fonte:** apri PDF p.2
