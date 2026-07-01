---
title: Kangourou 2021 Student finale individuale — Quesito S3
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2021_student_finale__QS3
parent: src_kangourou_2021_student_finale
competition: Kangourou 2021 Student finale individuale
family: kangourou
year: '2021'
level: kangourou
country: Italia
modalita: individuale
quesito: S3
summary: Numero di sviluppi piani distinti di un cubo
answer: '11'
topics:
  - topic_geometria_solida
  - topic_combinatoria
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2021
  - livello/kangourou
  - topic/geometria_solida
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Numero di sviluppi piani distinti di un cubo*

![[src_kangourou_2021_student_finale__probS3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Cross-shaped cube net: 6 unit squares
  % Top square (col 1, row 0)
  \draw (1,2) rectangle (2,3);
  % Middle row: 4 squares (col 0-3, row 1)
  \draw (0,1) rectangle (1,2);
  \draw (1,1) rectangle (2,2);
  \draw (2,1) rectangle (3,2);
  \draw (3,1) rectangle (4,2);
  % Bottom square (col 1, row 2 from bottom)
  \draw (1,0) rectangle (2,1);
\end{tikzpicture}
\end{document}
```

> (**11 punti**) In figura vedi uno sviluppo piano di un cubo, cioè un possibile accostamento in piano delle facce del cubo in modo da poter ricostruire il cubo piegando opportunamente la figura lungo i lati comuni a due facce. Quanti sviluppi piani diversi fra loro ha un cubo, considerando identici due sviluppi ottenibili uno dall'altro per rotazioni e/o riflessioni?
> 
> (vedi figura)

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 11
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/17UN1PocIwUt6K6J10ScIHKnTcOSXCsY5/view)


<span class="qlang-split" data-lang="en"></span>


*Number of distinct plane developments of a cube*

![[src_kangourou_2021_student_finale__probS3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Cross-shaped cube net: 6 unit squares
  % Top square (col 1, row 0)
  \draw (1,2) rectangle (2,3);
  % Middle row: 4 squares (col 0-3, row 1)
  \draw (0,1) rectangle (1,2);
  \draw (1,1) rectangle (2,2);
  \draw (2,1) rectangle (3,2);
  \draw (3,1) rectangle (4,2);
  % Bottom square (col 1, row 2 from bottom)
  \draw (1,0) rectangle (2,1);
\end{tikzpicture}
\end{document}
```

> (**11 points**) In the figure you see a plane development of a cube, that is, a possible plane approach of the sides of the cube so that the cube can be reconstructed by folding the figure along the two sides. How many different planes of development between them has a cube, considering identical two developments achievable from each other by rotation and/or reflection?
> 
> (see figure)

**Answer:** 11
[[src_kangourou_2021_student_finale__QS3]]
