---
tipo: quesito
quesito_id: quesito_src_archimede_2014_biennio__Q04
parent: src_archimede_2014_biennio
competition: Giochi di Archimede 2014 - Biennio (Testo 1)
family: archimede
year: '2014'
level: biennio
country: Italia
quesito: '4'
summary: Distanza vertici opposti di parallelogramma da triangoli
answer: C
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
  - anno/2014
  - livello/biennio
  - topic/geometria_piana
---

# Giochi di Archimede 2014 - Biennio (Testo 1) — Quesito 4

*Distanza vertici opposti di parallelogramma da triangoli*

![[src_archimede_2014_biennio__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (P1) at (1,1.732);
  \coordinate (P2) at (2,0);
  \coordinate (P3) at (3,1.732);
  \coordinate (P4) at (4,0);
  \coordinate (B) at (5,1.732);
  \draw (A)--(P4)--(B)--(P1)--cycle;
  \draw (P1)--(P2)--(P3)--(P4);
  \draw (P2)--(P3);
  \node[left] at (A) {$A$};
  \node[right] at (B) {$B$};
\end{tikzpicture}
\end{document}
```

> Un parallelogramma è costruito incollando quattro
> triangoli equilateri di lato 10 cm come in figura.
> Quanti cm distano i vertici opposti A e B?
> (A) 25, (B)
> √
> 675, (C)
> √
> 700, (D)
> √
> 825,
> (E) 30.
> B
> A

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.1
