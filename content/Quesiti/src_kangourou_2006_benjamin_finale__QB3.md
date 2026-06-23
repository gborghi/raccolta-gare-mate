---
title: Kangourou 2006 - Benjamin (finale nazionale) — Quesito B3
tipo: quesito
quesito_id: quesito_src_kangourou_2006_benjamin_finale__QB3
parent: src_kangourou_2006_benjamin_finale
competition: Kangourou 2006 - Benjamin (finale nazionale)
family: kangourou
year: '2006'
level: kangourou
country: Italia
modalita: individuale
quesito: B3
summary: Misura angolo NYC tra CM e BN nel quadrato
answer: 90 gradi
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2006
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Misura angolo NYC tra CM e BN nel quadrato*

![[src_kangourou_2006_benjamin_finale__probB3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,2);
  \coordinate (D) at (2,2);
  \coordinate (C) at (2,0);
  \coordinate (B) at (0,0);
  \coordinate (M) at (0,1);
  \coordinate (N) at (1,2);
  \draw (A) -- (D) -- (C) -- (B) -- cycle;
  \draw (C) -- (M);
  \draw (B) -- (N);
  \node[above left] at (A) {$A$};
  \node[above right] at (D) {$D$};
  \node[below right] at (C) {$C$};
  \node[below left] at (B) {$B$};
  \node[left] at (M) {$M$};
  \node[above] at (N) {$N$};
  \coordinate (Y) at (0.4,0.8);
  \node[right] at (Y) {$Y$};
  \fill (Y) circle (1pt);
\end{tikzpicture}
\end{document}
```

> *(11 punti)* Osserva la figura: $ABCD$ è un quadrato, $M$ è il punto medio di $AB$ ed $N$ è il punto medio di $BC$. I segmenti $AN$ e $BM$ si incrociano in $Y$. Quanto misura l'angolo $NYC$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 90 gradi
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)
