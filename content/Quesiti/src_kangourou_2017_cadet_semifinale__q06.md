---
title: Kangourou 2017 Cadet (semifinale individuale) — Quesito 6
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2017_cadet_semifinale__Q06
parent: src_kangourou_2017_cadet_semifinale
competition: Kangourou 2017 Cadet (semifinale individuale)
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '6'
summary: Area del cortile ottagonale di triangoli equi/isosceli
answer: C
topics:
  - topic_geometria_piana
  - topic_trigonometria
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/kangourou
  - topic/geometria_piana
  - topic/trigonometria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area del cortile ottagonale di triangoli equi/isosceli*

![[src_kangourou_2017_cadet_semifinale__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (V1) at (0.000, 1.000);
  \coordinate (V2) at (0.707, 0.707);
  \coordinate (V3) at (1.000, 0.000);
  \coordinate (V4) at (0.707, -0.707);
  \coordinate (V5) at (0.000, -1.000);
  \coordinate (V6) at (-0.707, -0.707);
  \coordinate (V7) at (-1.000, 0.000);
  \coordinate (V8) at (-0.707, 0.707);
  \coordinate (O) at (0, 0);
  \draw (V1) -- (V2) -- (V3) -- (V4) -- (V5) -- (V6) -- (V7) -- (V8) -- cycle;
  \draw[dashed] (O) -- (V1);
  \draw[dashed] (O) -- (V2);
  \draw[dashed] (O) -- (V3);
  \draw[dashed] (O) -- (V4);
  \draw[dashed] (O) -- (V5);
  \draw[dashed] (O) -- (V6);
  \draw[dashed] (O) -- (V7);
  \draw[dashed] (O) -- (V8);
  \node[right] at (0.4, 0.2) {10 m};
  \fill (O) circle (0.02);
\end{tikzpicture}
\end{document}
```

> (Punti 4) Il cortile della scuola è a pianta ottagonale: è costituito accostando,
> alternandoli, 4 triangoli equilateri e 4 triangoli isosceli non equilateri, come indica
> la figura. La distanza del punto centrale da ognuno dei vertici è di 10 metri. Quale
> è, in metri quadrati, l’area del cortile?
>
> - **(A)** 100 (√2 + 1)
> - **(B)** 125 (√3 + 1)
> - **(C)** 100 (√3 + 1)
> - **(D)** 125 (√2 + √3)
> - **(E)** 100 (√2 + √3)

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/10dag7nMmvHI9thnGpaNFnBDPMieYZsIy/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the octagonal court of equilateral triangles*

![[src_kangourou_2017_cadet_semifinale__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (V1) at (0.000, 1.000);
  \coordinate (V2) at (0.707, 0.707);
  \coordinate (V3) at (1.000, 0.000);
  \coordinate (V4) at (0.707, -0.707);
  \coordinate (V5) at (0.000, -1.000);
  \coordinate (V6) at (-0.707, -0.707);
  \coordinate (V7) at (-1.000, 0.000);
  \coordinate (V8) at (-0.707, 0.707);
  \coordinate (O) at (0, 0);
  \draw (V1) -- (V2) -- (V3) -- (V4) -- (V5) -- (V6) -- (V7) -- (V8) -- cycle;
  \draw[dashed] (O) -- (V1);
  \draw[dashed] (O) -- (V2);
  \draw[dashed] (O) -- (V3);
  \draw[dashed] (O) -- (V4);
  \draw[dashed] (O) -- (V5);
  \draw[dashed] (O) -- (V6);
  \draw[dashed] (O) -- (V7);
  \draw[dashed] (O) -- (V8);
  \node[right] at (0.4, 0.2) {10 m};
  \fill (O) circle (0.02);
\end{tikzpicture}
\end{document}
```

> The school's courtyard is octagonal: it consists of 4 equilateral triangles and 4 non-equilateral isosceles, as shown in the figure. The distance from the centre of each of the peaks is 10 meters. What is the yard area in square metres?
>
> - **(A)** 100 (√2 + 1)
> - **(B)** 125 (√3 + 1)
> - **(C)** 100 (√3 + 1)
> - **(D)** 125 (√2 + √3)
> - **(E)** 100 (√2 + √3)

**Answer:** C
[[src_kangourou_2017_cadet_semifinale__Q06]]
