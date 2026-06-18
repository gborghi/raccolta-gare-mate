---
tipo: quesito
quesito_id: quesito_src_archimede_2001_triennio__Q19
parent: src_archimede_2001_triennio
competition: Giochi di Archimede 2001 - Triennio
family: archimede
year: '2001'
level: triennio
country: Italia
modalita: individuale
quesito: '19'
summary: Area triangolo equilatero dato perimetro parallelogramma
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2001
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

# Giochi di Archimede 2001 - Triennio — Quesito 19

*Area triangolo equilatero dato perimetro parallelogramma*

![[src_archimede_2001_triennio__prob19.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (2,3.4641);
  \coordinate (F) at (2,0);
  \coordinate (D) at (1,1.7321);
  \coordinate (E) at (3,1.7321);
  \draw (A)--(B)--(C)--cycle;
  \draw (D)--(F)--(E);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[below] at (F) {$F$};
  \node[left] at (D) {$D$};
  \node[right] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> Sapendo che il perimetro del parallelogramma FECD è 4,
> l’area del triangolo equilatero ABC risulta uguale a:
> (A) 8
> (B)
> √
> 3
> (C) 4
> (D) 6
> (E) 2
> √
> 3.
> A
> B
> C
> F
> E
> D

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.2
