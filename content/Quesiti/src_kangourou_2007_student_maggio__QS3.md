---
title: Kangourou 2007 Student finale (maggio) — Quesito S3
tipo: quesito
quesito_id: quesito_src_kangourou_2007_student_maggio__QS3
parent: src_kangourou_2007_student_maggio
competition: Kangourou 2007 Student finale (maggio)
family: kangourou
year: '2007'
level: kangourou
country: Italia
modalita: individuale
quesito: S3
summary: Area minima del triangolo (altezze vincolate)
answer: '10'
topics:
  - topic_geometria_piana
  - topic_disuguaglianze
methods:
  - method_disuguaglianze
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2007
  - livello/kangourou
  - topic/geometria_piana
  - topic/disuguaglianze
  - gara/individuale
---

*Area minima del triangolo (altezze vincolate)*

![[src_kangourou_2007_student_maggio__probS3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (5,5);
  \coordinate (B) at (8,0);
  \coordinate (C) at (0,0);
  \coordinate (FA) at (5,0);
  \coordinate (FB) at (4,4);
  \coordinate (FC) at (5.882,3.529);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[dotted] (A) -- (FA);
  \draw[dotted] (B) -- (FB);
  \draw[dotted] (C) -- (FC);
  \node[above] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[left] at (C) {$C$};
  \node[right] at (5,1.6) {$h_A$};
  \node[above left] at (4.5,4.3) {$h_B$};
  \node[below] at (3,2.0) {$h_C$};
\end{tikzpicture}
\end{document}
```

> Sia $ABC$ un qualunque triangolo le cui altezze relative ai vertici $A$, $B$, $C$ soddisfino rispettivamente le relazioni: $h_A \geq 3$ cm, $h_B \geq 4$ cm, $h_C \geq 5$ cm. Quanti centimetri quadrati misura al minimo l'area di $ABC$?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** 10
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1HUfAMVLA7IpFMgDDc-PE2DVK0jJ_IXLH/view)
