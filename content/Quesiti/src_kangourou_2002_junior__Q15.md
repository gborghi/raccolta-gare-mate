---
tipo: quesito
quesito_id: quesito_src_kangourou_2002_junior__Q15
parent: src_kangourou_2002_junior
competition: Kangourou 2002 - Junior (21 marzo)
family: kangourou
year: '2002'
level: kangourou
country: Italia
modalita: individuale
quesito: '15'
summary: Misura dell'angolo phi
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2002
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou 2002 - Junior (21 marzo) — Quesito 15

*Misura dell'angolo phi*

![[src_kangourou_2002_junior__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (2,2);
  \coordinate (D) at (0,2);
  \coordinate (E) at (1,3.732);
  \draw (A)--(B)--(C)--(D)--cycle;
  \draw (C)--(D)--(E)--cycle;
  \draw (A)--(E)--(B);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[left] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[below] at (E) {$\varphi$};
\end{tikzpicture}
\end{document}
```

> Osservate la figura: ABCD è un quadrato, mentre CDE è un 
> triangolo equilatero. Quanto misura in gradi l'angolo ϕ ? 
>  
> A. 22,5° 
> B. 25° 
> C. 30° 
> D. 27,5° 
> E. 32,5°

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.4
