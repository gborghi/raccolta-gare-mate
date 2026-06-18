---
tipo: quesito
quesito_id: quesito_src_archimede_2012_biennio__Q16
parent: src_archimede_2012_biennio
competition: Giochi di Archimede 2012 - Biennio
family: archimede
year: '2012'
level: biennio
country: Italia
quesito: '16'
summary: Proprieta vera da rapporto aree AHC e ABC
answer: B
topics:
  - topic_geometria_piana
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2012
  - livello/biennio
  - topic/geometria_piana
---

# Giochi di Archimede 2012 - Biennio — Quesito 16

*Proprieta vera da rapporto aree AHC e ABC*

![[src_archimede_2012_biennio__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (2.3,3);
  \coordinate (H) at (2.3,0);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw[dashed] (C) -- (H);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[below] at (H) {$H$};
\end{tikzpicture}
\end{document}
```

> Sia ABC un triangolo acutangolo e sia H sul lato AB il piede
> dell’altezza dal vertice C. Supponiamo che l’area del triangolo
> AHC stia a quella del triangolo ABC come AC sta a 2AB.
> Quale delle seguenti affermazioni è sicuramente vera?
> (A) ABC è rettangolo
> (B)
> d
> CAB = 60°
> (C) AB = 2AH
> (D) AB = AC
> (E) ABC è equilatero
> A
> B
> C
> H

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.2
