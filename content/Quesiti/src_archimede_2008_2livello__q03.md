---
title: Archimede Gara 2° livello 2008 (biennio/triennio) — Quesito 3
tipo: quesito
lang: it
quesito_id: quesito_src_archimede_2008_2livello__Q03
parent: src_archimede_2008_2livello
competition: Archimede Gara 2° livello 2008 (biennio/triennio)
family: archimede
year: '2008'
level: 2 livello
country: Italia
modalita: individuale
quesito: '3'
summary: Area del trapezio isoscele data area di BOC e proporzioni
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2008
  - livello/2-livello
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area del trapezio isoscele data area di BOC e proporzioni*

![[src_archimede_2008_2livello__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (4.5,2.2);
  \coordinate (D) at (1.5,2.2);
  \coordinate (O) at (3,1.467);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below right] at (O) {$O$};
  \fill (O) circle (1pt);
\end{tikzpicture}
\end{document}
```

> In un trapezio isoscele ABCD di base maggiore AB, le diagonali vengono
> divise dal loro punto di incontro O in parti proporzionali ai numeri 1
> e 3. Sapendo che l’area del triangolo BOC è 15, quanto misura l’area
> dell’intero trapezio?
>
> - **(A)** 60
> - **(B)** 75
> - **(C)** 80
> - **(D)** 90
> - **(E)** 105.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Isosceles trapezoid area given BOC area and proportions*

![[src_archimede_2008_2livello__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (4.5,2.2);
  \coordinate (D) at (1.5,2.2);
  \coordinate (O) at (3,1.467);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below right] at (O) {$O$};
  \fill (O) circle (1pt);
\end{tikzpicture}
\end{document}
```

> In an ABCD major base AB isosceles trapezoid, the diagonal is divided from its meeting point O into parts proportional to the numbers 1 and 3. Knowing that the area of the BOC triangle is 15, what is the area of the entire trapezoid?
>
> - **(A)** 60
> - **(B)** 75
> - **(C)** 80
> - **(D)** 90
> - **(E)** 105.

**Answer:** C
[[src_archimede_2008_2livello__Q03]]
