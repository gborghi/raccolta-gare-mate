---
tipo: quesito
quesito_id: quesito_src_archimede_2010_triennio__Q23
parent: src_archimede_2010_triennio
competition: Giochi di Archimede 2010 - Triennio
family: archimede
year: '2010'
level: triennio
country: Italia
quesito: '23'
summary: 'Raggio circonferenza per P, Q, B con triangoli equilateri'
answer: D
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
  - anno/2010
  - livello/triennio
  - topic/geometria_piana
---

# Giochi di Archimede 2010 - Triennio — Quesito 23

*Raggio circonferenza per P, Q, B con triangoli equilateri*

![[src_archimede_2010_triennio__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,2);
  \coordinate (B) at (0,1);
  \coordinate (C) at (0,0);
  \coordinate (D) at (0.866,1.5);
  \coordinate (E) at (0.866,0.5);
  \draw (A)--(C);
  \draw (A)--(D)--(B);
  \draw (B)--(E)--(C);
  \node[left] at (A) {$A$};
  \node[left] at (B) {$B$};
  \node[left] at (C) {$C$};
  \node[right] at (D) {$D$};
  \node[right] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> Nella figura a fianco, AC misura 2 cm, B è il punto
> medio di AC e i triangoli ABD e BCE sono equilateri. Se P e Q sono i centri di ABD e BCE rispettivamente, quanto misura il raggio della circonferenza
> passante per P, Q e B?
> (A)
> √
> 3
> 6 cm,
> (B) 1
> 2 cm,
> (C) 1 cm,
> (D)
> √
> 3
> 3 cm,
> (E)
> √
> 3
> 2 cm.
> A
> B
> C
> D
> E

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.6
