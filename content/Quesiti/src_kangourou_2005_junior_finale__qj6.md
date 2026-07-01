---
title: Kangourou 2005 - Junior (finale nazionale) — Quesito J6
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2005_junior_finale__QJ6
parent: src_kangourou_2005_junior_finale
competition: Kangourou 2005 - Junior (finale nazionale)
family: kangourou
year: '2005'
level: kangourou
country: Italia
modalita: individuale
quesito: J6
summary: Croce greca su scacchiera 7x7 senza angoli
answer: dimostrazione
topics:
  - topic_combinatoria
methods:
  - method_colorazione
skills:
  - skill_astrazione
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2005
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Croce greca su scacchiera 7x7 senza angoli*

![[src_kangourou_2005_junior_finale__probJ6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw (0,0) grid (7,7);
  \fill[black] (0,6) rectangle (1,7);
  \fill[black] (6,6) rectangle (7,7);
  \fill[black] (0,0) rectangle (1,1);
  \fill[black] (6,0) rectangle (7,1);
  \node at (2.5,5.5) {5};
  \node at (4.5,5.5) {5};
  \node at (1.5,3.5) {5};
  \node at (3.5,3.5) {5};
  \node at (5.5,3.5) {5};
  \node at (2.5,1.5) {5};
  \node at (4.5,1.5) {5};
\end{tikzpicture}
\end{document}
```

> Considera una scacchiera $7 \times 7$ a cui sono state tolte le $4$ caselle d'angolo; chiama **croce greca** ogni configurazione di $5$ sue caselle disposte a croce in modo che ogni casella abbia in comune almeno un lato con un'altra casella della croce (quindi ogni croce ha $4$ bracci uguali ciascuno costituito da una casella). Dimostra che è possibile disporre $45$ numeri interi (non necessariamente tutti diversi fra loro) sulle $45$ caselle rimaste, uno per casella, in modo che la somma totale di questi interi sia negativa, ma la somma dei numeri corrispondenti alle caselle ricoperte da una qualsiasi croce greca sia positiva.
> 
> (Suggerimento: individua un insieme convenientemente ridotto $S$ di caselle con la proprietà che ogni croce greca copra almeno una casella appartenente ad $S$.)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** dimostrazione
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1DN9SkcNnbA6zI_cH2lP8x9OGdjtWTlV1/view)


<span class="qlang-split" data-lang="en"></span>


*Greek cross on a 7x7 chessboard without corners*

![[src_kangourou_2005_junior_finale__probJ6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw (0,0) grid (7,7);
  \fill[black] (0,6) rectangle (1,7);
  \fill[black] (6,6) rectangle (7,7);
  \fill[black] (0,0) rectangle (1,1);
  \fill[black] (6,0) rectangle (7,1);
  \node at (2.5,5.5) {5};
  \node at (4.5,5.5) {5};
  \node at (1.5,3.5) {5};
  \node at (3.5,3.5) {5};
  \node at (5.5,3.5) {5};
  \node at (2.5,1.5) {5};
  \node at (4.5,1.5) {5};
\end{tikzpicture}
\end{document}
```

> Consider a chessboard $7 \times 7$ from which the $4$ corner boxes have been removed; call ** Greek cross ** any configuration of $5$ its cross-ordered boxes so that each box has at least one side in common with another box of the cross (so each box has $4$ equal arms each made up of a box). It shows that it is possible to arrange $45$ integers (not necessarily all of them different from each other) on the remaining $45$ boxes, one per box, so that the total sum of these integers is negative, but the sum of the numbers corresponding to the boxes covered by any Greek cross is positive.
> 
> (Suggest: identify a conveniently small $S$ set of boxes with the property that each Greek cross covers at least one box belonging to $S$.)

**Answer:** dimostrazione
[[src_kangourou_2005_junior_finale__QJ6]]
