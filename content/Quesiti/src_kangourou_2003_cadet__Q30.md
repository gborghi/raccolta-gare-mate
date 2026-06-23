---
title: Kangourou 2003 Cadet (20 marzo) — Quesito 30
tipo: quesito
quesito_id: quesito_src_kangourou_2003_cadet__Q30
parent: src_kangourou_2003_cadet
competition: Kangourou 2003 Cadet (20 marzo)
family: kangourou
year: '2003'
level: kangourou
country: Italia
modalita: individuale
quesito: '30'
summary: Misura angolo CDE nel triangolo isoscele
answer: B
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2003
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Misura angolo CDE nel triangolo isoscele*

![[src_kangourou_2003_cadet__prob30.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.8]
  \coordinate (A) at (0,2);
  \coordinate (B) at (-1.5,0);
  \coordinate (C) at (1.5,0);
  \coordinate (D) at (-0.241,0);
  \coordinate (E) at (1.209,0.388);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (D);
  \draw (A) -- (E);
  \draw (D) -- (E);
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[below] at (D) {$D$};
  \node[right] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> Nel triangolo ABC rappresentato in figura, i segmenti AB e AC hanno la
> stessa lunghezza, come pure i segmenti AE
> e AD; l'angolo BAD misura 30°. Qual è la
> misura dell'angolo CDE? 
> A) 10 
> B) 15 
> C) 20 
> D) 25 
> E) 30  
> A
> E
> B
> D
> C
> 1
> 2
> 3
> 
> Risposte commentate livello Cadet 
> III media e I superiore

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1eygrPRLv8IqHr90bPrLsox-FA6V93kRL/view)
