---
title: Kangourou Categoria Junior 2024 — Quesito 6
tipo: quesito
quesito_id: quesito_src_kangourou_2024_junior__Q06
parent: src_kangourou_2024_junior
competition: Kangourou Categoria Junior 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '6'
summary: Rapporto tra area nera e area grigia (quadrato con 4 cerchi)
answer: B
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Rapporto tra area nera e area grigia (quadrato con 4 cerchi)*

![[src_kangourou_2024_junior__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[fill=gray!20] (-2,-2) rectangle (2,2);
  \begin{scope}
    \clip (-2,-2) rectangle (2,2);
    \fill[black] (-2,-2) rectangle (2,2);
    \fill[white] (-1,-1) circle (1);
    \fill[white] ( 1,-1) circle (1);
    \fill[white] (-1, 1) circle (1);
    \fill[white] ( 1, 1) circle (1);
  \end{scope}
  \draw[fill=white] (-1,-1) circle (1);
  \draw[fill=white] ( 1,-1) circle (1);
  \draw[fill=white] (-1, 1) circle (1);
  \draw[fill=white] ( 1, 1) circle (1);
  \draw (-2,-2) rectangle (2,2);
\end{tikzpicture}
\end{document}
```

> La figura mostra un quadrato che contiene quattro cerchi tutti 
> della stessa area, ognuno tangente a due lati del quadrato e ad 
> altri due cerchi. Qual è il rapporto fra l’area della regione in nero 
> e quella della regione in grigio? 
> A) 1 : 4	 	
> B) 1 : 3	 	
> C) 2 : 3	 	
> D) 3 : 4	 	
> E) π : 1

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1RaU3mE869IaHS_tNIf3ZuYiHvi-AxTEi/view)
