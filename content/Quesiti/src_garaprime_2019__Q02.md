---
tipo: quesito
quesito_id: quesito_src_garaprime_2019__Q02
parent: src_garaprime_2019
competition: Gara Nazionale Classi Prime 2019
family: archimede
year: '2019'
level: ''
country: Italia
quesito: '2'
summary: Differenza bianche-nere in tabella 81x81 a cornici
answer: A
topics:
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2019
  - topic/combinatoria
---

# Gara Nazionale Classi Prime 2019 — Quesito 2

*Differenza bianche-nere in tabella 81x81 a cornici*

![[src_garaprime_2019__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.4]
  \fill[black] (1,1) rectangle (2,2);
  \fill[black] (1,2) rectangle (2,3);
  \fill[black] (1,3) rectangle (2,4);
  \fill[black] (1,4) rectangle (2,5);
  \fill[black] (1,5) rectangle (2,6);
  \fill[black] (1,6) rectangle (2,7);
  \fill[black] (1,7) rectangle (2,8);
  \fill[black] (2,1) rectangle (3,2);
  \fill[black] (2,7) rectangle (3,8);
  \fill[black] (3,1) rectangle (4,2);
  \fill[black] (3,3) rectangle (4,4);
  \fill[black] (3,4) rectangle (4,5);
  \fill[black] (3,5) rectangle (4,6);
  \fill[black] (3,7) rectangle (4,8);
  \fill[black] (4,1) rectangle (5,2);
  \fill[black] (4,3) rectangle (5,4);
  \fill[black] (4,5) rectangle (5,6);
  \fill[black] (4,7) rectangle (5,8);
  \fill[black] (5,1) rectangle (6,2);
  \fill[black] (5,3) rectangle (6,4);
  \fill[black] (5,4) rectangle (6,5);
  \fill[black] (5,5) rectangle (6,6);
  \fill[black] (5,7) rectangle (6,8);
  \fill[black] (6,1) rectangle (7,2);
  \fill[black] (6,7) rectangle (7,8);
  \fill[black] (7,1) rectangle (8,2);
  \fill[black] (7,2) rectangle (8,3);
  \fill[black] (7,3) rectangle (8,4);
  \fill[black] (7,4) rectangle (8,5);
  \fill[black] (7,5) rectangle (8,6);
  \fill[black] (7,6) rectangle (8,7);
  \fill[black] (7,7) rectangle (8,8);
  \draw[step=1] (0,0) grid (9,9);
\end{tikzpicture}
\end{document}
```

> Le caselle di una tabella 9 × 9 sono colorate di bianco e nero (vedi
> figura). La casella centrale è bianca, poi le cornici che via via la circondano sono
> alternativamente nere e bianche.
> figura 1
> Si immagini di fare la stessa cosa con una tabella 81 × 81. Qual è, in questa
> nuova tabella, la differenza tra il numero di caselle bianche e il numero di caselle
> nere?
> A 161
> B 321
> C 81
> D 167
> E 319
> F 1

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** apri PDF p.1
