---
title: Kangourou 2014 marzo Cadet — Quesito 16
tipo: quesito
quesito_id: quesito_src_kangourou_2014_cadet__Q16
parent: src_kangourou_2014_cadet
competition: Kangourou 2014 marzo Cadet
family: kangourou
year: '2014'
level: kangourou
country: Italia
modalita: individuale
quesito: '16'
summary: Angolo BAC dato angolo ottuso tra altezza e bisettrice
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2014
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Angolo BAC dato angolo ottuso tra altezza e bisettrice*

![[src_kangourou_2014_cadet__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  \coordinate (A) at (1.0, 3.0);
  \coordinate (B) at (4.0, 0.0);
  \coordinate (C) at (0.0, 0.0);
  \coordinate (H) at (0.4, 1.2);
  \coordinate (D) at (1.708, 0.0);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thin] (B) -- (H);
  \draw[thin] (H) -- ++(0.1136, -0.0379) -- ++(0.0379, 0.1136) -- ++(-0.1136, 0.0379);
  \draw[thin] (A) -- (D);
  \node[above] at (A) {$A$};
  \node[below] at (C) {$C$};
  \node[below right] at (B) {$B$};
  \node[left] at (H) {$H$};
  \node[below] at (D) {$D$};
  \node[below, font=\small] at (0.85, 2.55) {$\alpha$};
  \node[below, font=\small] at (1.15, 2.50) {$\alpha$};
  \node[font=\small] at (2.2, 1.2) {$4\alpha$};
\end{tikzpicture}
\end{document}
```

> Nel triangolo ABC rappresentato in figura, BH è 
> l’altezza relativa al lato AC mentre AD è la bisettrice 
> dell’angolo in A. La misura dell’angolo ottuso formato 
> da BH e AD è il quadruplo della misura α dell’angolo 
> BAD. Quanti gradi misura l’angolo BAC ? 
> A) 30 	 	
> B) 45	
> 	
> C) 60	
> 	
> D) 75	
> 	
> E) 90

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1quz9t5wsEEot3GuEgNf2ZiWIq5aCkB5u/view)
