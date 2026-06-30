---
title: Kangourou 2007 Junior (marzo) — Quesito 25
tipo: quesito
quesito_id: quesito_src_kangourou_2007_junior_marzo__Q25
parent: src_kangourou_2007_junior_marzo
competition: Kangourou 2007 Junior (marzo)
family: kangourou
year: '2007'
level: kangourou
country: Italia
modalita: individuale
quesito: '25'
summary: 'Quale uguaglianza vera (triangolo, esagono, cerchio)'
answer: A
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2007
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Quale uguaglianza vera (triangolo, esagono, cerchio)*

![[src_kangourou_2007_junior_marzo__prob25.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.8]
  \draw[line width=0.8pt] (0,0) circle (1);
  \draw[line width=0.8pt]
    (2,0) -- (-1,1.732) -- (-1,-1.732) -- cycle;
  \draw[line width=0.8pt]
    (1,0) -- (-0.5,0.866) -- (-0.5,-0.866) -- cycle;
  \draw[line width=0.8pt]
    (1,0) -- (0.5,0.866) -- (-0.5,0.866) -- (-1,0) -- (-0.5,-0.866) -- (0.5,-0.866) -- cycle;
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Un triangolo equilatero di area t ed un
> esagono regolare di area E sono inscritti in una circonferenza, che a sua volta è inscritta in un altro triangolo equilatero di area T.Quale delle seguenti uguaglianze è vera?
> A) 
> B) E = (t + T)/2              C) T = t + E
> D) 
> E) T = E + 3t

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1p1Q2Sp2vQqHV_PB7wa9DegwRBIUvdu-d/view)
