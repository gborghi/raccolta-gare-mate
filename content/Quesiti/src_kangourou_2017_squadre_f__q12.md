---
title: Kangourou Coppa Squadre 2017 Finale — Quesito 12
tipo: quesito
quesito_id: quesito_src_kangourou_2017_squadre_f__Q12
parent: src_kangourou_2017_squadre_f
competition: Kangourou Coppa Squadre 2017 Finale
family: kangourou
year: '2017'
level: squadre
country: Italia
modalita: squadre
quesito: '12'
summary: Quadrato somma aree trapezi S1 e S4 negli esagoni
answer: '48'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

*Quadrato somma aree trapezi S1 e S4 negli esagoni*

![[src_kangourou_2017_squadre_f__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.4]
  \coordinate (A0) at (0, 3);
  \coordinate (A1) at (-2.598, 1.5);
  \coordinate (A2) at (-2.598, -1.5);
  \coordinate (A3) at (0, -3);
  \coordinate (A4) at (2.598, -1.5);
  \coordinate (A5) at (2.598, 1.5);
  \coordinate (B0) at (0, 1);
  \coordinate (B1) at (-0.866, 0.5);
  \coordinate (B2) at (-0.866, -0.5);
  \coordinate (B3) at (0, -1);
  \coordinate (B4) at (0.866, -0.5);
  \coordinate (B5) at (0.866, 0.5);
  \draw (A0)--(A1)--(A2)--(A3)--(A4)--(A5)--cycle;
  \draw (B0)--(B1)--(B2)--(B3)--(B4)--(B5)--cycle;
  \draw (B0)--(A0);
  \draw (B1)--(A1);
  \draw (B2)--(A2);
  \draw (B3)--(A3);
  \draw (B4)--(A4);
  \draw (B5)--(A5);
  \node at (-1.8, 0) {$S_1$};
  \node at (-1.1, 1.8) {$S_2$};
  \node at (1.1, 1.8) {$S_3$};
  \node at (1.8, 0) {$S_4$};
  \node at (1.1, -1.8) {$S_5$};
  \node at (-1.1, -1.8) {$S_6$};
\end{tikzpicture}
\end{document}
```

> Gli esagoni 
> La figura mostra due esagoni regolari contenuti uno nell’altro, che hanno i lati 
> paralleli e i due bordi privi di punti in comune. Il più piccolo ha il lato di 1 
> cm, il più grande di 3 cm. Quanto vale il quadrato della somma delle aree dei 
> trapezi S1 e S4 ?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 48
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/128655o6_zeCJSQCm7sydhRJi7_T5zkWz/view)
