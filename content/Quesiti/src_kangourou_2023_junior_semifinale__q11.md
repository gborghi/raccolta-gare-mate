---
title: Kangourou Semifinale individuale Junior 2023 — Quesito 11
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2023_junior_semifinale__Q11
parent: src_kangourou_2023_junior_semifinale
competition: Kangourou Semifinale individuale Junior 2023
family: kangourou
year: '2023'
level: kangourou
country: Italia
modalita: individuale
quesito: '11'
summary: 'Conteggio inserimenti lettere in 5 settori con A,B non adiacenti'
topics:
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2023
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Conteggio inserimenti lettere in 5 settori con A,B non adiacenti*

![[src_kangourou_2023_junior_semifinale__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw (0,0) circle (1);
  \draw (0,0) -- (90:1);
  \draw (0,0) -- (18:1);
  \draw (0,0) -- (-54:1);
  \draw (0,0) -- (-126:1);
  \draw (0,0) -- (162:1);
  \node at (54:0.65) {1};
  \node at (-18:0.65) {2};
  \node at (-90:0.65) {3};
  \node at (198:0.65) {4};
  \node at (126:0.65) {5};
\end{tikzpicture}
\end{document}
```

> (Punti 5) In ognuno dei cinque settori numerati nei quali è ripartito il cerchio in figu­
> ra, va inserita una delle lettere A, B, C, D, E (lettere diverse per settori diversi), in modo 
> che le lettere A e B non si trovino in settori adiacenti. In quanti diversi modi si può effet­
> tuare l’inserimento?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1rq1gJ31P8DKnidln7hHYAxiIyAQN3F0c/view)


<span class="qlang-split" data-lang="en"></span>


*Counting entries in 5 sectors with non-adjacent A,B*

![[src_kangourou_2023_junior_semifinale__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw (0,0) circle (1);
  \draw (0,0) -- (90:1);
  \draw (0,0) -- (18:1);
  \draw (0,0) -- (-54:1);
  \draw (0,0) -- (-126:1);
  \draw (0,0) -- (162:1);
  \node at (54:0.65) {1};
  \node at (-18:0.65) {2};
  \node at (-90:0.65) {3};
  \node at (198:0.65) {4};
  \node at (126:0.65) {5};
\end{tikzpicture}
\end{document}
```

> In each of the five numbered sectors into which the circle is divided, one of the letters A, B, C, D, E (different letters for different sectors) must be inserted so that the letters A and B are not in adjacent sectors. How many different ways can integration be carried out?

[[src_kangourou_2023_junior_semifinale__Q11]]
