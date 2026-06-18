---
tipo: quesito
quesito_id: quesito_src_kangourou_2014_squadre_a__Q06
parent: src_kangourou_2014_squadre_a
competition: Kangourou Coppa Squadre 2014 Semifinale A
family: kangourou
year: '2014'
level: squadre
country: Italia
modalita: squadre
quesito: '6'
summary: Area triangolo DEF nel parallelogramma per similitudine
answer: '240'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2014
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

# Kangourou Coppa Squadre 2014 Semifinale A — Quesito 6

*Area triangolo DEF nel parallelogramma per similitudine*

![[src_kangourou_2014_squadre_a__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (5,2);
  \coordinate (D) at (1,2);
  \coordinate (F) at (3.67,2);
  \coordinate (E) at (2.2,1.2);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (F);
  \draw (B) -- (D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above] at (F) {$F$};
  \node[right] at (E) {$E$};
  \fill (E) circle (1.5pt);
\end{tikzpicture}
\end{document}
```

> Il parallelogramma    
> Osservate la figura: ABCD è un parallelogramma, l'area del triangolo 
> AED è 360 m2, mentre l'area del triangolo ABE è 540 m2. Qual è, in m2, 
> l'area del triangolo DEF?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 240
**Fonte:** apri PDF p.1
