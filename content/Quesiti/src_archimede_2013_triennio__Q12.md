---
tipo: quesito
quesito_id: quesito_src_archimede_2013_triennio__Q12
parent: src_archimede_2013_triennio
competition: Giochi di Archimede 2013 - Triennio
family: archimede
year: '2013'
level: triennio
country: Italia
modalita: individuale
quesito: '12'
summary: Perimetro triangolo da teorema della bisettrice
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2013
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

# Giochi di Archimede 2013 - Triennio — Quesito 12

*Perimetro triangolo da teorema della bisettrice*

![[src_archimede_2013_triennio__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,0);
  \coordinate (C) at (6,0);
  \coordinate (A) at (5,2.8);
  \coordinate (D) at (3.7,0);
  \draw (A)--(B)--(C)--cycle;
  \draw (A)--(D);
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[below] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Dato un triangolo ABC, si tracci la bisettrice dal vertice A, che
> incontra il lato BC nel punto D. Se CD + CA = 12 m, e CD =
> 1
> 3BC, quanto misura il perimetro del triangolo?
> (A) meno di 32 m
> (B) 32 m
> (C) 36 m
> (D) più di 36 m
> (E) non si può determinare dai dati forniti
> B
> A
> C
> D

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.2
