---
title: Archimede Gara di Febbraio 2015 - 2 livello — Quesito 3
tipo: quesito
quesito_id: quesito_src_archimede_2015_febb_2livello__Q03
parent: src_archimede_2015_febb_2livello
competition: Archimede Gara di Febbraio 2015 - 2 livello
family: archimede
year: '2015'
level: 2 livello
country: Italia
modalita: individuale
quesito: '3'
summary: Lunghezza PC con P intersezione diagonali del pentagono
answer: A
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
  - anno/2015
  - livello/2-livello
  - topic/geometria_piana
  - gara/individuale
---

*Lunghezza PC con P intersezione diagonali del pentagono*

![[src_archimede_2015_febb_2livello__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (1.309,0.9511);
  \coordinate (D) at (0.5,1.5388);
  \coordinate (E) at (-0.309,0.9511);
  \coordinate (P) at (0.5,0.3633);
  \draw (A)--(B)--(C)--(D)--(E)--cycle;
  \draw (A)--(C);
  \draw (B)--(E);
  \foreach \pt in {A,B,C,D,E,P}{\fill (\pt) circle (0.7pt);}
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[below] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> Sia ABCDE un pentagono regolare di lato 1 e sia P l’intersezione tra le diagonali AC e BE.
> Quanto misura il segmento PC?
> (A) 1
> (B)
> √
> 5
> 2
> (C)
> √
> 5 −1
> (D) 4(
> √
> 5 −2)
> (E) Nessuna delle precedenti.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.3
