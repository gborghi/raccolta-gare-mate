---
title: Kangourou 2016 Junior (gara marzo) — Quesito 14
tipo: quesito
quesito_id: quesito_src_kangourou_2016_junior_marzo__Q14
parent: src_kangourou_2016_junior_marzo
competition: Kangourou 2016 Junior (gara marzo)
family: kangourou
year: '2016'
level: kangourou
country: Italia
modalita: individuale
quesito: '14'
summary: Percentuale ombreggiata dell’area del triangolo
answer: C
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

*Percentuale ombreggiata dell’area del triangolo*

![[src_kangourou_2016_junior_marzo__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (C) at (2.5, 4.330);
  \coordinate (A1) at (1,0);
  \coordinate (A2) at (4,0);
  \coordinate (B1) at (4.5, 0.866);
  \coordinate (B2) at (3.0, 3.464);
  \coordinate (C1) at (2.0, 3.464);
  \coordinate (C2) at (0.5, 0.866);
  \draw (A) -- (B) -- (C) -- cycle;
  \fill[gray!50] (A1) -- (B1) -- (B2) -- (C1) -- (C2) -- (A2) -- cycle;
  \draw (A1) -- (B1) -- (B2) -- (C1) -- (C2) -- (A2) -- cycle;
  \node[below] at (0.5,0) {\small 1};
  \node[below] at (2.5,0) {\small 3};
  \node[below] at (4.5,0) {\small 1};
  \node[right] at (4.75, 0.433) {\small 1};
  \node[right] at (3.75, 2.598) {\small 3};
  \node[right] at (2.75, 3.897) {\small 1};
  \node[left] at (0.25, 0.433) {\small 1};
  \node[left] at (1.25, 2.598) {\small 3};
  \node[left] at (2.25, 3.897) {\small 1};
\end{tikzpicture}
\end{document}
```

> Quale percentuale dell’area del triangolo in figura è 
> ombreggiata?
> A) 80%	 	
> B) 85%	 	
> C) 88%	 	
> D) 90%
> E) Nessuna delle precedenti.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_FimVNCqMCQXAOhr2PasYRnLSdpOMrZS/view)
