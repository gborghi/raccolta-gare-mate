---
title: Giochi di Archimede 2022 - Gara Triennio — Quesito 6
tipo: quesito
quesito_id: quesito_src_archimede_2022_triennio__Q06
parent: src_archimede_2022_triennio
competition: Giochi di Archimede 2022 - Gara Triennio
family: archimede
year: '2022'
level: triennio
country: Italia
modalita: individuale
quesito: '6'
summary: Perimetro di un sotto-parallelogramma da perimetri dati
answer: A
topics:
  - topic_geometria_piana
methods:
  - method_invarianti
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2022
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

*Perimetro di un sotto-parallelogramma da perimetri dati*

![[src_archimede_2022_triennio__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0.6);
  \coordinate (C) at (5.2,3.4);
  \coordinate (D) at (1.2,2.8);
  \coordinate (P) at (2.6,1.6);
  \draw (A)--(B)--(C)--(D)--cycle;
  \coordinate (Aq) at (1.95,0.29);
  \coordinate (Cq) at (3.25,3.11);
  \coordinate (Dq) at (0.65,1.51);
  \coordinate (Bq) at (4.45,1.69);
  \draw (Aq)--(Cq);
  \draw (Dq)--(Bq);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above right] at (P) {$P$};
  \node[below] at (Aq) {$A'$};
  \node[right] at (Bq) {$B'$};
  \node[above] at (Cq) {$C'$};
  \node[left] at (Dq) {$D'$};
  \node at (1.55,1.05) {$31$};
  \node at (1.9,2.1) {$49$};
  \node at (3.6,2.2) {$42$};
\end{tikzpicture}
\end{document}
```

> Considerato un parallelogramma ABCD, le rette parallele
> ai lati passanti per un punto interno P intersecano i lati
> in A′, B′, C′ e D′, come in figura. I perimetri (in metri)
> dei parallelogrammi D′AA′P, C′DD′P e B′CC′P sono
> quelli indicati in figura. Quanti metri misura il perimetro
> del parallelogramma A′BB′P?
> A
> B
> C
> D
> P
> A′
> B′
> C′
> D′
> 31
> 49
> 42
>
> - **(A)** 24
> - **(B)** 22
> - **(C)** 26
> - **(D)** 28
> - **(E)** 27

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.1
