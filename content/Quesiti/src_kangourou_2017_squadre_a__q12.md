---
title: Kangourou Coppa Squadre 2017 Semifinale A — Quesito 12
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2017_squadre_a__Q12
parent: src_kangourou_2017_squadre_a
competition: Kangourou Coppa Squadre 2017 Semifinale A
family: kangourou
year: '2017'
level: squadre
country: Italia
modalita: squadre
quesito: '12'
summary: Distanza A-F tra due quadrati con aree 23 e 777
answer: '20'
topics:
  - topic_geometria_piana
  - topic_geometria_analitica
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/squadre
  - topic/geometria_piana
  - topic/geometria_analitica
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Distanza A-F tra due quadrati con aree 23 e 777*

![[src_kangourou_2017_squadre_a__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (E) at (0,0);
  \coordinate (F) at (4,0);
  \coordinate (G) at (4,4);
  \coordinate (H) at (0,4);
  \coordinate (A) at (1.5,1.5);
  \coordinate (B) at (2.5,1.5);
  \coordinate (C) at (2.5,2.5);
  \coordinate (D) at (1.5,2.5);
  \draw (E) -- (F) -- (G) -- (H) -- cycle;
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \draw (E) -- (A);
  \draw (E) -- (B);
  \draw (F) -- (B);
  \draw (F) -- (C);
  \draw (G) -- (C);
  \draw (G) -- (D);
  \draw (H) -- (D);
  \draw (H) -- (A);
  \node[above left] at (H) {$H$};
  \node[above right] at (G) {$G$};
  \node[below right] at (F) {$F$};
  \node[below left] at (E) {$E$};
  \node[above left] at (D) {$D$};
  \node[above right] at (C) {$C$};
  \node[below right] at (B) {$B$};
  \node[below left] at (A) {$A$};
\end{tikzpicture}
\end{document}
```

> I due quadrati 
> Osservate la figura. L’area del quadrato ABCD è 23 cm2
> , mentre 
> l’area del quadrato EFGH è 777 cm2. Quanti centimetri dista il 
> punto A dal punto F?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 20
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Uso6Tvsu_ZURCZGOyVOuKWA31YMwLA3t/view)


<span class="qlang-split" data-lang="en"></span>


*A-F distance between two squares with areas 23 and 777*

![[src_kangourou_2017_squadre_a__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (E) at (0,0);
  \coordinate (F) at (4,0);
  \coordinate (G) at (4,4);
  \coordinate (H) at (0,4);
  \coordinate (A) at (1.5,1.5);
  \coordinate (B) at (2.5,1.5);
  \coordinate (C) at (2.5,2.5);
  \coordinate (D) at (1.5,2.5);
  \draw (E) -- (F) -- (G) -- (H) -- cycle;
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \draw (E) -- (A);
  \draw (E) -- (B);
  \draw (F) -- (B);
  \draw (F) -- (C);
  \draw (G) -- (C);
  \draw (G) -- (D);
  \draw (H) -- (D);
  \draw (H) -- (A);
  \node[above left] at (H) {$H$};
  \node[above right] at (G) {$G$};
  \node[below right] at (F) {$F$};
  \node[below left] at (E) {$E$};
  \node[above left] at (D) {$D$};
  \node[above right] at (C) {$C$};
  \node[below right] at (B) {$B$};
  \node[below left] at (A) {$A$};
\end{tikzpicture}
\end{document}
```

> The two squares look at the figure. The area of the ABCD square is 23 cm2 while the area of the EFGH square is 777 cm2. How many centimeters from point A to point F?

**Answer:** 20
[[src_kangourou_2017_squadre_a__Q12]]
