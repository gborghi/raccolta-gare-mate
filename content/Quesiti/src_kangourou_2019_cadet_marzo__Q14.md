---
title: Kangourou 2019 Gara di Marzo Cadet — Quesito 14
tipo: quesito
quesito_id: quesito_src_kangourou_2019_cadet_marzo__Q14
parent: src_kangourou_2019_cadet_marzo
competition: Kangourou 2019 Gara di Marzo Cadet
family: kangourou
year: '2019'
level: kangourou
country: Italia
modalita: individuale
quesito: '14'
summary: Misura dell angolo RQS con segmenti uguali e QPR=20
answer: B
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2019
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Misura dell angolo RQS con segmenti uguali e QPR=20*

![[src_kangourou_2019_cadet_marzo__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  % PQ = PR = QS, angle QPR = 20 degrees
  % P=(0,0), R=(2,0), Q=(2cos20,2sin20)=(1.879,0.684), S=(4cos20,0)=(3.759,0)
  \draw[thick] (0,0) -- (3.759,0);
  \draw[thick] (0,0) -- (1.879,0.684) -- (2,0);
  \draw[thick] (1.879,0.684) -- (3.759,0);
  \node[below left] at (0,0) {$P$};
  \node[above] at (1.879,0.684) {$Q$};
  \node[below] at (2,0) {$R$};
  \node[below right] at (3.759,0) {$S$};
  \draw (0.940-0.030*0.342,0.342+0.030*0.940) -- (0.940+0.030*0.342,0.342-0.030*0.940);
  \draw (1,-0.05) -- (1,0.05);
  \draw (2.819-0.030*0.342,0.342+0.030*0.940) -- (2.819+0.030*0.342,0.342-0.030*0.940);
  \node[right] at (0.22, 0.07) {\small $20^\circ$};
\end{tikzpicture}
\end{document}
```

> 14. Nel disegno i segmenti PQ, PR e QS sono uguali e l’angolo QPR misura 20 gra­ di. Quanti gradi misura l’angolo RQS ? A) 50 B) 60 C) 65 D) 70 E) 75

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.3
