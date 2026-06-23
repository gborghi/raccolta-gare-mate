---
title: Kangourou 2003 Junior finale nazionale — Quesito J3
tipo: quesito
quesito_id: quesito_src_kangourou_2003_junior_finale__QJ3
parent: src_kangourou_2003_junior_finale
competition: Kangourou 2003 Junior finale nazionale
family: kangourou
year: '2003'
level: kangourou
country: Italia
modalita: individuale
quesito: J3
summary: Area del max cerchio inscritto nel triangolo mistilineo
answer: 9pi/16
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2003
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area del max cerchio inscritto nel triangolo mistilineo*

![[src_kangourou_2003_junior_finale__probJ3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (P) at (-1,0);
  \coordinate (R) at (1,0);
  \coordinate (Q) at (0,1.5);
  \draw (P) -- (Q) -- (R) -- cycle;
  \draw (0,0.5352) circle (0.5352);
  \node[below left] at (P) {P};
  \node[below right] at (R) {R};
  \node[above] at (Q) {Q};
  \node[below] at (0,0) {2};
\end{tikzpicture}
\end{document}
```

> La figura rappresenta un triangolo mistilineo $PQR$. Il suo contorno è costituito da un segmento $PR$ di lunghezza 2 e da due archi di circonferenza $PQ$ e $QR$ di centri rispettivamente $R$ e $P$. Quanto vale l'area del più grande cerchio che si può inscrivere nel triangolo? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 9pi/16
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1DYCQm1nF2PohR5Hfzk5zl6q-PHPzDsMy/view)
