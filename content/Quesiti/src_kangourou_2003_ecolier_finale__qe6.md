---
title: Kangourou 2003 Ecolier finale nazionale — Quesito E6
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2003_ecolier_finale__QE6
parent: src_kangourou_2003_ecolier_finale
competition: Kangourou 2003 Ecolier finale nazionale
family: kangourou
year: '2003'
level: kangourou
country: Italia
modalita: individuale
quesito: E6
summary: Numero di percorsi da P a Q (verso il basso)
answer: '20'
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
  - anno/2003
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Numero di percorsi da P a Q (verso il basso)*

![[src_kangourou_2003_ecolier_finale__probE6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.9]
  \draw (0,3) -- (-3,0);
  \draw (1,2) -- (-2,-1);
  \draw (2,1) -- (-1,-2);
  \draw (3,0) -- (0,-3);
  \draw (0,3) -- (3,0);
  \draw (-1,2) -- (2,-1);
  \draw (-2,1) -- (1,-2);
  \draw (-3,0) -- (0,-3);
  \node[above] at (0,3) {$P$};
  \node[below] at (0,-3) {$Q$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Ci si può spostare da $P$ a $Q$ solo seguendo le linee tracciate e solo muovendosi dall'alto verso il basso. Quanti sono i possibili percorsi per andare da $P$ a $Q$? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 20
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1K82beAyOpLONvc5G6hM8HqH2YHqU6t2R/view)


<span class="qlang-split" data-lang="en"></span>


*Number of paths from P to Q (downwards) *

![[src_kangourou_2003_ecolier_finale__probE6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.9]
  \draw (0,3) -- (-3,0);
  \draw (1,2) -- (-2,-1);
  \draw (2,1) -- (-1,-2);
  \draw (3,0) -- (0,-3);
  \draw (0,3) -- (3,0);
  \draw (-1,2) -- (2,-1);
  \draw (-2,1) -- (1,-2);
  \draw (-3,0) -- (0,-3);
  \node[above] at (0,3) {$P$};
  \node[below] at (0,-3) {$Q$};
\end{tikzpicture}
\end{document}
```

> Look at the figure. It can be moved from $P$ to $Q$ only by following the lines drawn and only by moving from top to bottom. How many possible routes to go from $P$ to $Q$? (see figure)

**Answer:** 20
[[src_kangourou_2003_ecolier_finale__QE6]]
