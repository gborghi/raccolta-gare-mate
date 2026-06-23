---
title: Giochi di Archimede 2017 - Triennio — Quesito 5
tipo: quesito
quesito_id: quesito_src_archimede_2017_triennio__Q05
parent: src_archimede_2017_triennio
competition: Giochi di Archimede 2017 - Triennio
family: archimede
year: '2017'
level: triennio
country: Italia
modalita: individuale
quesito: '5'
summary: Area quadrilatero FGEH con triangoli equilateri
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2017
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

*Area quadrilatero FGEH con triangoli equilateri*

![[src_archimede_2017_triennio__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (2,2);
  \coordinate (D) at (0,2);
  \coordinate (E) at (1,1.732);
  \coordinate (F) at (1,0.268);
  \draw (A)--(B)--(C)--(D)--cycle;
  \draw (A)--(C);
  \draw (B)--(D);
  \draw (A)--(E)--(B);
  \draw (C)--(F)--(D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node[left] at (0.634,1) {$H$};
  \node[right] at (1.366,1) {$G$};
\end{tikzpicture}
\end{document}
```

> Nella figura qui a fianco, ABCD è un quadrato di lato pari
> a 2 cm ed i triangoli ABE e CDF sono equilateri. Quanti
> cm2 misura l’area del quadrilatero FGEH?
>
> - **(A)** 8 √ 3 4
> - **(B)** 2 √ 3 3
> - **(C)** 8 √ 3 3 −4
> - **(D)** 2 √ 3 3 −1
> - **(E)** 1 2 A B C D E F G H

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1WbKYlCGmnvn3EnNy8PHpDbjgy_2zTYne/view)
