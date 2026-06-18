---
tipo: quesito
quesito_id: quesito_src_archimede_1996_biennio__Q10
parent: src_archimede_1996_biennio
competition: Giochi di Archimede 1996 - Biennio
family: archimede
year: '1996'
level: biennio
country: Italia
quesito: '10'
summary: Lato dell'ottagono regolare ottenuto da un quadrato
answer: B
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/1996
  - livello/biennio
  - topic/geometria_piana
---

# Giochi di Archimede 1996 - Biennio — Quesito 10

*Lato dell'ottagono regolare ottenuto da un quadrato*

![[src_archimede_1996_biennio__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[dashed] (0,0) rectangle (4,4);
  \def\a{1.1715}
  \draw[thick]
    (\a,0) -- (4-\a,0) -- (4,\a) -- (4,4-\a) --
    (4-\a,4) -- (\a,4) -- (0,4-\a) -- (0,\a) -- cycle;
\end{tikzpicture}
\end{document}
```

> Da un quadrato di lato 10 cm si tagliano i quattro angoli in
> modo da ottenere un ottagono regolare. Il lato dell’ottagono
> è lungo
> (A) 4 cm
> (B) 10 · (
> √
> 2 −1) cm
> (C) 3
> √
> 2 cm
> (D) 5 cm
> (E) le precedenti risposte sono tutte sbagliate.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.2
