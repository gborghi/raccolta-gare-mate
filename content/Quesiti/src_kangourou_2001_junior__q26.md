---
title: Kangourou 2001 - Junior (15 marzo) — Quesito 26
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2001_junior__Q26
parent: src_kangourou_2001_junior
competition: Kangourou 2001 - Junior (15 marzo)
family: kangourou
year: '2001'
level: kangourou
country: Italia
modalita: individuale
quesito: '26'
summary: Segmenti lunghi 5 cm nella griglia
answer: E
topics:
  - topic_combinatoria
  - topic_geometria_piana
methods:
  - method_conteggio
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2001
  - livello/kangourou
  - topic/combinatoria
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Segmenti lunghi 5 cm nella griglia*

![[src_kangourou_2001_junior__prob26.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \foreach \x in {0,1,2,3,4,5} {
    \foreach \y in {0,1,2,3,4,5,6} {
      \fill (\x,\y) circle (2pt);
    }
  }
\end{tikzpicture}
\end{document}
```

> Nella griglia a fianco, la distanza tra due punti adiacenti è 1
> cm sia in orizzontale sia in verticale. Congiungete due punti
> in modo da formare un segmento lungo 5 cm. Quanti di questi
> segmenti possono essere tracciati nella griglia?
>
> - **(A)** 10
> - **(B)** 12
> - **(C)** 24
> - **(D)** 34
> - **(E)** 36.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1-nQU0fW3C5Y8GrPEhr6xrvAInO3f2GuZ/view)


<span class="qlang-split" data-lang="en"></span>


*Sections 5 cm long in the grid*

![[src_kangourou_2001_junior__prob26.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \foreach \x in {0,1,2,3,4,5} {
    \foreach \y in {0,1,2,3,4,5,6} {
      \fill (\x,\y) circle (2pt);
    }
  }
\end{tikzpicture}
\end{document}
```

> In the side grid, the distance between two adjacent points is 1 cm both horizontally and vertically. Combine two points to form a 5 cm long segment. How many of these segments can be traced in the grid?
>
> - **(A)** 10
> - **(B)** 12
> - **(C)** 24
> - **(D)** 34
> - **(E)** 36.

**Answer:** E
[[src_kangourou_2001_junior__Q26]]
