---
title: Kangourou 2012 Junior (gara marzo) — Quesito 17
tipo: quesito
quesito_id: quesito_src_kangourou_2012_junior__Q17
parent: src_kangourou_2012_junior
competition: Kangourou 2012 Junior (gara marzo)
family: kangourou
year: '2012'
level: kangourou
country: Italia
modalita: individuale
quesito: '17'
summary: Raggio della semicirconferenza inscritta nel triangolo
answer: B
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2012
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Raggio della semicirconferenza inscritta nel triangolo*

![[src_kangourou_2012_junior__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.6]
  \coordinate (A) at (0,0);
  \coordinate (B) at (12,0);
  \coordinate (C) at (12,5);
  \def\r{3.333}
  \def\cx{8.667}
  \fill[gray!50] (\cx,0) arc (0:180:\r) -- cycle;
  \draw[thick] (A)--(B)--(C)--cycle;
  \draw (\cx,0) arc (0:180:\r);
  \draw[<->] (0,-0.7)--(12,-0.7) node[midway,below] {$12$};
  \draw[<->] (12.7,0)--(12.7,5) node[midway,right] {$5$};
  \draw[<->] (-0.3,0.2)--(11.7,5.2) node[midway,above left] {$13$};
\end{tikzpicture}
\end{document}
```

> I lati del triangolo rettangolo che vedi in figura misurano 5, 12 e 13 cm. Quanti centimetri misura il raggio della semi-circonferenza inscritta?           
> A) 7/3
> B) 10/3
> C) 12/3
> D) 13/3
> E) 17/3
> 6 cm
> 12
> 13
> 5
> 
> Pag. 
> Pag. 25
> 25
> Kang 2012
> Kang 2012

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/10sLfL5qogEtbnCvXq5RzSuBk2BAcwRf1/view)
