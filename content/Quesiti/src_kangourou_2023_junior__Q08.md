---
title: Kangourou 2023 Junior — Gara 16 marzo — Quesito 8
tipo: quesito
quesito_id: quesito_src_kangourou_2023_junior__Q08
parent: src_kangourou_2023_junior
competition: Kangourou 2023 Junior — Gara 16 marzo
family: kangourou
year: '2023'
level: kangourou
country: Italia
modalita: individuale
quesito: '8'
summary: misura angolo CAD
answer: B
topics:
  - topic_geometria_piana
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2023
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*misura angolo CAD*

![[src_kangourou_2023_junior__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  \coordinate (A) at (2.22, 3.59);
  \coordinate (B) at (0, 0);
  \coordinate (C) at (5, 0);
  \coordinate (D) at (3.0, 0);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (A) -- (D);
  \node[above] at (A) {$A$};
  \node[left]  at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[below] at (D) {$D$};
  \node[right] at (0.55, 0.15) {$58°$};
  \node[left]  at (4.35, 0.15) {$52°$};
  \node[right] at (2.35, 2.8)  {$x$};
\end{tikzpicture}
\end{document}
```

> Nel triangolo ABC nella figura (che non è in scala) l’angolo in 
> B misura 58 gradi, quello in C misura 52 gradi. Il triangolo ABD 
> è simile al triangolo ABC. Quanti gradi misura l’angolo CAD?
> A) 16	
> 	
> B) 18	
> 	
> C) 19	
> 	
> D) 20	
> 	
> E) 22

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/16McGuArmIHqcFlHrVuvvrFgJbq1ecq0y/view)
