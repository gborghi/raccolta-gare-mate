---
tipo: quesito
quesito_id: quesito_src_kangourou_2024_student_semifinale__Q01
parent: src_kangourou_2024_student_semifinale
competition: Kangourou 2024 Student semifinale
family: kangourou
year: '2024'
level: kangourou
country: Italia
quesito: '1'
summary: Area dell'ottagono regolare con quadrato inscritto di area 2
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2024 Student semifinale — Quesito 1

*Area dell'ottagono regolare con quadrato inscritto di area 2*

![[src_kangourou_2024_student_semifinale__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (V0) at (0,2);
  \coordinate (V1) at (1.414,1.414);
  \coordinate (V2) at (2,0);
  \coordinate (V3) at (1.414,-1.414);
  \coordinate (V4) at (0,-2);
  \coordinate (V5) at (-1.414,-1.414);
  \coordinate (V6) at (-2,0);
  \coordinate (V7) at (-1.414,1.414);
  \draw (V0)--(V1)--(V2)--(V3)--(V4)--(V5)--(V6)--(V7)--cycle;
  \draw (V1)--(V3)--(V5)--(V7)--cycle;
  \filldraw (V1) circle (2.5pt);
  \filldraw (V3) circle (2.5pt);
  \filldraw (V5) circle (2.5pt);
  \filldraw (V7) circle (2.5pt);
\end{tikzpicture}
\end{document}
```

> Ho mentito ieri e mentirò domani.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.1
