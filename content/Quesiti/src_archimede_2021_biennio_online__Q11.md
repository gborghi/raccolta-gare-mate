---
title: Giochi di Archimede 2021 - Gara Biennio (online) — Quesito 11
tipo: quesito
quesito_id: quesito_src_archimede_2021_biennio_online__Q11
parent: src_archimede_2021_biennio_online
competition: Giochi di Archimede 2021 - Gara Biennio (online)
family: archimede
year: '2021'
level: biennio
country: Italia
modalita: individuale
quesito: '11'
summary: Percorsi su cornice di tabellone 10x8 in 16 mosse
answer: B
topics:
  - topic_combinatoria
methods:
  - method_conteggio
  - method_ricorsione
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2021
  - livello/biennio
  - topic/combinatoria
  - gara/individuale
---

*Percorsi su cornice di tabellone 10x8 in 16 mosse*

![[src_archimede_2021_biennio_online__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.5]
  \fill[gray!60] (2,2) rectangle (8,6);
  \draw[step=1] (0,0) grid (10,8);
  \node at (0.5,0.5) {$A$};
  \node at (9.5,7.5) {$B$};
\end{tikzpicture}
\end{document}
```

> In un tabellone 10×8, una pedina (inizialmente nella casella A) può essere spostata attraversando ad ogni mossa il lato in comune a due caselle confinanti. Federica vuole portarla nella
> casella B in 16 mosse, senza calpestare il rettangolo centrale 6 × 4 (la pedina deve rimanere
> sempre sulla cornice avente spessore di 2 caselle). Quanti sono i percorsi possibili?
> A
> B
> (A) 98
> (B) 128
> (C) 104
> (D) 96
> (E) 114

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** apri PDF p.1
