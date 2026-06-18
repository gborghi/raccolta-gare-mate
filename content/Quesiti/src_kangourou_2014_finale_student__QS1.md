---
tipo: quesito
quesito_id: quesito_src_kangourou_2014_finale_student__QS1
parent: src_kangourou_2014_finale_student
competition: Kangourou 2014 finale nazionale Student
family: kangourou
year: '2014'
level: kangourou
country: Italia
quesito: S1
summary: misura angolo NMB
answer: '75'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2014
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2014 finale nazionale Student — Quesito S1

*misura angolo NMB*

![[src_kangourou_2014_finale_student__probS1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw (0,0) circle (1);
  \coordinate (A) at (0.342, 0.940);
  \coordinate (B) at (0.985, -0.174);
  \coordinate (C) at (-0.906, -0.423);
  \coordinate (D) at (-0.848, 0.530);
  \coordinate (M) at (0.664, 0.383);
  \coordinate (N) at (0.040, -0.299);
  \coordinate (K) at (-0.877, 0.054);
  \draw (A)--(B);
  \draw (B)--(C);
  \draw (C)--(D);
  \draw (C)--(M);
  \draw (K)--(B);
  \draw[thin] (K)++(30:0.09) arc (30:100:0.09);
  \draw[thin] (M)++(-155:0.09) arc (-155:-80:0.09);
  \node[above] at (0.342, 0.940) {A};
  \node[right] at (0.985, -0.174) {B};
  \node[left] at (-0.906, -0.423) {C};
  \node[above left] at (-0.848, 0.530) {D};
  \node[above left] at (-0.877, 0.054) {K};
  \node[right] at (0.664, 0.383) {M};
  \node[below] at (0.040, -0.299) {N};
\end{tikzpicture}
\end{document}
```

> In figura si vede una circonferenza della quale i segmenti $AB$, $BC$ e $CD$ sono tre corde. I punti $M$, $N$ e $K$ sono i loro rispettivi punti medi. L'angolo $CKN$ misura $75°$. Quanti gradi misura l'angolo $NMB$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 75
**Fonte:** apri PDF p.1
