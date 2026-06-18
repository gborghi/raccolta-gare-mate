---
tipo: quesito
quesito_id: quesito_src_kangourou_2001_junior__Q08
parent: src_kangourou_2001_junior
competition: Kangourou 2001 - Junior (15 marzo)
family: kangourou
year: '2001'
level: kangourou
country: Italia
modalita: individuale
quesito: '8'
summary: Perimetro del poligono con angoli retti
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2001
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou 2001 - Junior (15 marzo) — Quesito 8

*Perimetro del poligono con angoli retti*

![[src_kangourou_2001_junior__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.45]
  \coordinate (A) at (0,0);
  \coordinate (B) at (13,0);
  \coordinate (C) at (13,8);
  \coordinate (E) at (0,8);
  \coordinate (T) at (1.923, 12.615);
  \draw (A) -- (B) -- (C) -- (T) -- (E) -- cycle;
  \draw (0.5,0) -- (0.5,0.5) -- (0,0.5);
  \draw (13,0.5) -- (12.5,0.5) -- (12.5,0);
  \draw (2.115, 13.077) -- (2.577, 12.885) -- (2.385, 12.423);
  \node[left] at (0,4) {$8$\,cm};
  \node[right] at (13,4) {$8$\,cm};
  \node[left] at (0.96, 10.3) {$5$\,cm};
  \node[above right] at (7.0, 10.6) {$12$\,cm};
\end{tikzpicture}
\end{document}
```

> Il perimetro del poligono raffigurato a lato (i tre
> angoli indicati sono retti) vale
> (A) 38 cm
> (B) 41 cm
> (C) 46 cm
> (D) 50 cm
> (E) 59 cm.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.3
