---
title: Kangourou 2004 Student finale nazionale — Quesito S2
tipo: quesito
quesito_id: quesito_src_kangourou_2004_student_finale__QS2
parent: src_kangourou_2004_student_finale
competition: Kangourou 2004 Student finale nazionale
family: kangourou
year: '2004'
level: kangourou
country: Italia
modalita: individuale
quesito: S2
summary: Area regione interna a beta esterna a gamma
answer: '2'
topics:
  - topic_geometria_piana
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

*Area regione interna a beta esterna a gamma*

![[src_kangourou_2004_student_finale__probS2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  % gamma: center C=(0,0), radius 2
  % beta: center B=(2,0), radius sqrt(2)~1.4142
  % Intersection: x=3/2, y=+/-sqrt(7)/2~1.3229
  % P=(1.5,1.3229), Q=(1.5,-1.3229)
  \draw (0,0) circle (2.0);
  \draw (2,0) circle (1.4142);
  \draw[dashed] (0,-2.2) -- (0,2.2);
  \draw[dashed] (-2.2,0) -- (3.6,0);
  \draw (2,0.15) -- (1.85,0.15) -- (1.85,0);
  \fill (0,0) circle (1.5pt) node[below left] {$C$};
  \fill (2,0) circle (1.5pt) node[below right] {$B$};
  \fill (1.5, 1.3229) circle (1.5pt) node[above right] {$P$};
  \fill (1.5, -1.3229) circle (1.5pt) node[below right] {$Q$};
  \draw (0,0) -- (1.5,1.3229);
  \draw (2,0) -- (1.5,1.3229);
  \node at (3.7, 0) {$\beta$};
\end{tikzpicture}
\end{document}
```

> Sono date nel piano una circonferenza $\beta$ il cui raggio misura $\sqrt{2}$ centimetri ed una circonferenza $\gamma$ il cui raggio misura $2$ centimetri e il cui centro $C$ appartiene a $\beta$. Calcolare l'area della regione interna a $\beta$ ed esterna a $\gamma$.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YDB8i8P8ObCcVZVHoKNettQ8gKf-sGTa/view)
