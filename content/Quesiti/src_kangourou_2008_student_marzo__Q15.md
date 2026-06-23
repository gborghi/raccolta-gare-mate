---
title: Kangourou 2008 - Student (gara 28 marzo) — Quesito 15
tipo: quesito
quesito_id: quesito_src_kangourou_2008_student_marzo__Q15
parent: src_kangourou_2008_student_marzo
competition: Kangourou 2008 - Student (gara 28 marzo)
family: kangourou
year: '2008'
level: kangourou
country: Italia
modalita: individuale
quesito: '15'
summary: Area regione ombreggiata (tre cerchi tangenti)
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2008
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area regione ombreggiata (tre cerchi tangenti)*

![[src_kangourou_2008_student_marzo__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (CL) at (0,0);
  \coordinate (CR) at (2,0);
  \coordinate (CT) at (1,1.732);
  \draw (CL) circle (1);
  \draw (CR) circle (1);
  \draw (CT) circle (1);
  \begin{scope}
    \clip (CL) circle (1);
    \clip (CR) circle (1);
    \fill[gray!40] (CT) circle (1);
  \end{scope}
  \draw (CT) -- ++(1,0) node[midway, above] {$1$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Tre circonferenze di raggio 1
> sono a due a due tangenti esternamente. Quanto vale l’area della regione ombreggiata? 
> A) 
> B) 
> C) 
> D) 
> E)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1MYmfkCn-GXkKWsIkiXzo_sU3G02yze2F/view)
