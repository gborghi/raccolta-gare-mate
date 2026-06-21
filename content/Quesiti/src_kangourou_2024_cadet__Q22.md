---
title: Kangourou Categoria Cadet 2024 — Quesito 22
tipo: quesito
quesito_id: quesito_src_kangourou_2024_cadet__Q22
parent: src_kangourou_2024_cadet
competition: Kangourou Categoria Cadet 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '22'
summary: In quanti modi annerire due quadretti per un solo asse
answer: E
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_conteggio
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/geometria_piana
  - topic/combinatoria
  - gara/individuale
---

*In quanti modi annerire due quadretti per un solo asse*

![[src_kangourou_2024_cadet__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  \fill[black] (1,2) rectangle (2,3);
  \fill[black] (0,1) rectangle (1,2);
  \draw[step=1] (0,0) grid (3,3);
\end{tikzpicture}
\end{document}
```

> Orlando vuole annerire altri due quadretti nel disegno a 
> fianco in modo che la figura complessiva risultante (non solo 
> quella formata dai quadrati neri) abbia un solo asse di simmetria. In quanti modi diversi Orlando può completare il disegno? 
> A) 2 
>  
> B) 3 
>  
> C) 4 
>  
> D) 5 
>  
> E) 6

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.4
