---
title: Kangourou 2004 Junior finale nazionale — Quesito J4
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2004_junior_finale__QJ4
parent: src_kangourou_2004_junior_finale
competition: Kangourou 2004 Junior finale nazionale
family: kangourou
year: '2004'
level: kangourou
country: Italia
modalita: individuale
quesito: J4
summary: Rapporto aree A'B'C' / ABC (simmetrie)
answer: '3'
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2004
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Rapporto aree A'B'C' / ABC (simmetrie)*

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (C) at (0,0);
  \coordinate (A) at (2,0);
  \coordinate (B) at (0,1.5);
  \coordinate (Ap) at (-2, 1.5);
  \coordinate (Bp) at (2, -1.5);
  \coordinate (Cp) at (2, 1.5);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw (0.15,0) -- (0.15,0.15) -- (0,0.15);
  \draw[blue, thick] (Ap) -- (Bp) -- (Cp) -- cycle;
  \draw[dotted] (Ap) -- (A);
  \draw[dotted] (Bp) -- (B);
  \draw[dotted] (Cp) -- (C);
  \node[left] at (Ap) {$A'$};
  \node[below] at (Bp) {$B'$};
  \node[above right] at (Cp) {$C'$};
  \node[right] at (A) {$A$};
  \node[above left] at (B) {$B$};
  \node[below left] at (C) {$C$};
\end{tikzpicture}
\end{document}
```

> Dato un triangolo $ABC$ rettangolo in $C$, si considerino i punti $A'$ simmetrico di $A$ rispetto a $BC$, $B'$ simmetrico di $B$ rispetto ad $AC$ e $C'$ simmetrico di $C$ rispetto ad $AB$. Quanto vale il rapporto tra l'area di $A'B'C'$ e quella di $ABC$?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 3
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1zhN_ZIEqgp2HEtGPhjwQn1kisd4lL2x7/view)


<span class="qlang-split" data-lang="en"></span>


< MSK0/>A/B/ABC area report (symmetry) < MSK1/>

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (C) at (0,0);
  \coordinate (A) at (2,0);
  \coordinate (B) at (0,1.5);
  \coordinate (Ap) at (-2, 1.5);
  \coordinate (Bp) at (2, -1.5);
  \coordinate (Cp) at (2, 1.5);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw (0.15,0) -- (0.15,0.15) -- (0,0.15);
  \draw[blue, thick] (Ap) -- (Bp) -- (Cp) -- cycle;
  \draw[dotted] (Ap) -- (A);
  \draw[dotted] (Bp) -- (B);
  \draw[dotted] (Cp) -- (C);
  \node[left] at (Ap) {$A'$};
  \node[below] at (Bp) {$B'$};
  \node[above right] at (Cp) {$C'$};
  \node[right] at (A) {$A$};
  \node[above left] at (B) {$B$};
  \node[below left] at (C) {$C$};
\end{tikzpicture}
\end{document}
```

> Given a $ABC$ rectangle in $C$, consider the points $A'$ symmetric $A$ with respect to $BC$, $B'$ symmetric $B$ with respect to $AC$ and $C'$ symmetric $C$ with respect to $AB$. What is the ratio of < MSK11/> to < MSK12/>?

**Answer:** 3
[[src_kangourou_2004_junior_finale__QJ4]]
