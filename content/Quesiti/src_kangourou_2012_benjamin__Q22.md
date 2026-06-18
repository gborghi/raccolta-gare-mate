---
tipo: quesito
quesito_id: quesito_src_kangourou_2012_benjamin__Q22
parent: src_kangourou_2012_benjamin
competition: Kangourou 2012 Benjamin (gara marzo)
family: kangourou
year: '2012'
level: kangourou
country: Italia
quesito: '22'
summary: Numero da inserire nel cerchio superiore
answer: C
topics:
  - topic_algebra
  - topic_combinatoria
skills:
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2012
  - livello/kangourou
  - topic/algebra
  - topic/combinatoria
---

# Kangourou 2012 Benjamin (gara marzo) — Quesito 22

*Numero da inserire nel cerchio superiore*

![[src_kangourou_2012_benjamin__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (T) at (1, 1.732);
  \coordinate (BL) at (0, 0);
  \coordinate (BR) at (2, 0);
  \coordinate (ML) at (0.5, 0.866);
  \coordinate (MR) at (1.5, 0.866);
  \coordinate (MB) at (1, 0);
  \coordinate (C) at (1, 0.577);
  \draw (T) -- (BL) -- (BR) -- cycle;
  \draw (C) -- (ML);
  \draw (C) -- (MR);
  \draw (C) -- (MB);
  \foreach \p in {T, BL, BR, ML, MR, MB, C}
    \draw (\p) circle (0.18);
\end{tikzpicture}
\end{document}
```

> In ognuno dei cerchi in figura va inserito uno e
> uno solo dei numeri interi fra 1 e 7. Vuoi fare in modo
> che la somma dei tre numeri che stanno su una linea
> retta sia sempre la stessa qualunque sia la retta. Che
> numero devi inserire nel cerchio superiore?
> A) 1
> B) 3
> C) 4
> D) 5
> E) 6

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** apri PDF p.5
