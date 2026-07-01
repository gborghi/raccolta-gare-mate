---
title: Giochi di Archimede 2002 - Triennio — Quesito 13
tipo: quesito
lang: it
quesito_id: quesito_src_archimede_2002_triennio__Q13
parent: src_archimede_2002_triennio
competition: Giochi di Archimede 2002 - Triennio
family: archimede
year: '2002'
level: triennio
country: Italia
modalita: individuale
quesito: '13'
summary: Area figura grigia con arco tangente in triangolo equilatero
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
  - anno/2002
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area figura grigia con arco tangente in triangolo equilatero*

![[src_archimede_2002_triennio__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.4]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (1.5,2.598);
  \fill[gray!60] (A) -- (C) -- (B) arc (30:150:1.732) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (B) arc (30:150:1.732);
\end{tikzpicture}
\end{document}
```

> Sapendo che il triangolo equilatero in figura ha lato 3 e che l’arco
> di circonferenza è tangente a due lati, qual è l’area della figura
> in grigio?
>
> - **(A)** √ 3 −π 6
> - **(B)** π − √ 3
> - **(C)** 2 √ 3 −π
> - **(D)** √ 3 + π 6
> - **(E)** 3 √ 3 −π.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1OzOsu4BBiYpUyU6-zM7QubPPnJ1eN0eA/view)


<span class="qlang-split" data-lang="en"></span>


*A grey area with a tangent arc in an equilateral triangle*

![[src_archimede_2002_triennio__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.4]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (1.5,2.598);
  \fill[gray!60] (A) -- (C) -- (B) arc (30:150:1.732) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (B) arc (30:150:1.732);
\end{tikzpicture}
\end{document}
```

> Knowing that the equilateral triangle in the figure has side 3 and that the arc of circumference is tangent on two sides, what is the area of the figure in gray?
>
> - **(A)** √ 3 −π 6
> - **(B)** π − √ 3
> - **(C)** 2 √ 3 −π
> - **(D)** √ 3 + π 6
> - **(E)** 3 √ 3 −π.

[[src_archimede_2002_triennio__Q13]]
