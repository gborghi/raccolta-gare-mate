---
tipo: quesito
quesito_id: quesito_src_archimede_2022_biennio__Q07
parent: src_archimede_2022_biennio
competition: Giochi di Archimede 2022 - Gara Biennio
family: archimede
year: '2022'
level: biennio
country: Italia
quesito: '7'
summary: Perimetro parallelogramma da perimetri di sotto-parallelogrammi
answer: E
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
  - anno/2022
  - livello/biennio
  - topic/geometria_piana
---

# Giochi di Archimede 2022 - Gara Biennio — Quesito 7

*Perimetro parallelogramma da perimetri di sotto-parallelogrammi*

![[src_archimede_2022_biennio__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (4,3);
  \coordinate (D) at (1,3);
  \coordinate (P) at (2.0,1.2);
  \draw (A)--(B)--(C)--(D)--cycle;
  \coordinate (Ap) at (1.6,0);
  \coordinate (Cp) at (2.6,3);
  \coordinate (Dp) at (0.4,1.2);
  \coordinate (Bp) at (3.4,1.2);
  \draw (Ap)--(Cp);
  \draw (Dp)--(Bp);
  \fill (P) circle (1.2pt);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (Ap) {$A'$};
  \node[above] at (Cp) {$C'$};
  \node[left] at (Dp) {$D'$};
  \node[right] at (Bp) {$B'$};
  \node[above right] at (P) {$P$};
  \node at (1.0,0.6) {$29$};
  \node at (1.5,2.1) {$47$};
  \node at (3.0,2.1) {$38$};
\end{tikzpicture}
\end{document}
```

> Considerato un parallelogramma ABCD, le rette parallele
> ai lati passanti per un punto interno P intersecano i lati
> in A′, B′, C′ e D′, come in figura. I perimetri (in metri)
> dei parallelogrammi D′AA′P, C′DD′P e B′CC′P sono
> quelli indicati in figura. Quanti metri misura il perimetro
> del parallelogramma ABCD?
> A
> B
> C
> D
> P
> A′
> B′
> C′
> D′
> 29
> 47
> 38
> (A) 78
> (B) 63
> (C) 72
> (D) 114
> (E) 67

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.1
