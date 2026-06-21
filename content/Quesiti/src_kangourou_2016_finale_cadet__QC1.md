---
title: Kangourou 2016 finale nazionale Cadet — Quesito C1
tipo: quesito
quesito_id: quesito_src_kangourou_2016_finale_cadet__QC1
parent: src_kangourou_2016_finale_cadet
competition: Kangourou 2016 finale nazionale Cadet
family: kangourou
year: '2016'
level: kangourou
country: Italia
modalita: individuale
quesito: C1
summary: lato del triangolo piu grande
answer: '19'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2016
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*lato del triangolo piu grande*

![[src_kangourou_2016_finale_cadet__probC1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!40] (2,3.464) -- (1,1.732) -- (3,1.732) -- cycle;
  \fill[gray!40] (0,0) -- (2,0) -- (1,1.732) -- cycle;
  \fill[gray!40] (2,0) -- (4,0) -- (3,1.732) -- cycle;
  \fill[black] (1,1.732) -- (2,0) -- (3,1.732) -- cycle;
  \draw[thick] (0,0) -- (4,0) -- (2,3.464) -- cycle;
  \draw (1,1.732) -- (3,1.732);
  \draw (0,0) -- (3,1.732);
  \draw (4,0) -- (1,1.732);
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Tutti i triangoli che puoi vedere sono equilateri: i lati di quello nero (il più piccolo) sono lunghi $2$ cm, i lati di quelli grigi sono lunghi tutti $5$ cm. Quanto sono lunghi i lati del triangolo più grande (quello che li contiene tutti)? Come suggerisce la figura, i lati dei triangoli grigi e di quello nero che hanno vertici in comune stanno su una stessa retta. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 19
**Fonte:** apri PDF p.1
