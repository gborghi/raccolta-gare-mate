---
tipo: quesito
quesito_id: quesito_src_kangourou_2005_cadet_finale__QC3
parent: src_kangourou_2005_cadet_finale
competition: Kangourou 2005 - Cadet (finale nazionale)
family: kangourou
year: '2005'
level: kangourou
country: Italia
quesito: C3
summary: Area rettangolo ombreggiato in triangolo rettangolo
answer: 5 cm2
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2005
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2005 - Cadet (finale nazionale) — Quesito C3

*Area rettangolo ombreggiato in triangolo rettangolo*

![[src_kangourou_2005_cadet_finale__probC3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (8,0);
  \coordinate (C) at (0,6);
  \coordinate (P) at (6,1.5);
  \fill[yellow!80!white] (A) -- (6,0) -- (P) -- (0,1.5) -- cycle;
  \draw (A) -- (6,0) -- (P) -- (0,1.5) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \node[right] at (P) {P};
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Il triangolo $ABC$ è rettangolo e il punto $P$ dista $1$ cm sia dal cateto $AB$, che è lungo $8$ cm, sia dall'ipotenusa $BC$, che è lunga $10$ cm. Qual è l'area del rettangolo ombreggiato? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 5 cm2
**Fonte:** apri PDF p.1
