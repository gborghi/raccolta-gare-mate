---
tipo: quesito
quesito_id: quesito_src_kangourou_2004_student__Q07
parent: src_kangourou_2004_student
competition: Kangourou 2004 - Student (marzo)
family: kangourou
year: '2004'
level: kangourou
country: Italia
modalita: individuale
quesito: '7'
summary: Area quadrilatero da due triangoli equilateri
answer: E
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

# Kangourou 2004 - Student (marzo) — Quesito 7

*Area quadrilatero da due triangoli equilateri*

![[src_kangourou_2004_student__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,0);
  \coordinate (C) at (2,0);
  \coordinate (A) at (1,1.732);
  \coordinate (D) at (3,0);
  \coordinate (E) at (2.5,0.866);
  \draw (A) -- (B) -- (C) -- (A);
  \draw (E) -- (C) -- (D) -- (E);
  \node[above] at (A) {A};
  \node[below left] at (B) {B};
  \node[below] at (C) {C};
  \node[right] at (E) {E};
  \node[below right] at (D) {D};
\end{tikzpicture}
\end{document}
```

> I due triangoli equilateri ABC e ECD nella
> figura hanno lati di lunghezza 2 e 1 rispettivamente. L'area del quadrilatero ABCE è:
> A)              B)               C) 3         
> D)              E)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.2
