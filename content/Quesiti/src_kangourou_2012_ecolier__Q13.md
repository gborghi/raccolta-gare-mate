---
title: Kangourou 2012 Ecolier (gara marzo) — Quesito 13
tipo: quesito
quesito_id: quesito_src_kangourou_2012_ecolier__Q13
parent: src_kangourou_2012_ecolier
competition: Kangourou 2012 Ecolier (gara marzo)
family: kangourou
year: '2012'
level: kangourou
country: Italia
modalita: individuale
quesito: '13'
summary: Numero da inserire nella cella grigia del sudoku
answer: C
topics:
  - topic_logica
  - topic_combinatoria
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2012
  - livello/kangourou
  - topic/logica
  - topic/combinatoria
  - gara/individuale
---

*Numero da inserire nella cella grigia del sudoku*

![[src_kangourou_2012_ecolier__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[step=1.5cm] (0,0) grid (6,6);
  \fill[gray!40] (4.5,0) rectangle (6,1.5);
  \node at (0.75,5.25) {$1\times1$};
  \node at (3.75,5.25) {$1\times3$};
  \node at (0.75,3.75) {$2\times2$};
  \node at (2.25,3.75) {$6-3$};
  \node at (5.25,3.75) {$6-5$};
  \node at (0.75,2.25) {$4-1$};
  \node at (2.25,2.25) {$1+3$};
  \node at (3.75,2.25) {$8-7$};
  \node at (0.75,0.75) {$9-7$};
  \node at (2.25,0.75) {$2-1$};
\end{tikzpicture}
\end{document}
```

> Osserva la griglia in figura. Gianni deve prima
> calcolare il risultato delle operazioni indicate e
> poi riempire le celle vuote in modo che ogni riga
> e ogni colonna contenga, o come risultato delle
> operazioni o perché lui lo ha inserito, ciascuno dei
> numeri 1, 2, 3, 4. Che numero deve inserire Gianni
> nella cella grigia?   
> A) 1
> B) 2
> C) 3
> D) 4
> E) 3 o 4

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** apri PDF p.3
