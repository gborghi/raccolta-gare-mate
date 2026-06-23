---
title: Kangourou 2009 - Ecolier finale nazionale (Mirabilandia) — Quesito E2
tipo: quesito
quesito_id: quesito_src_kangourou_2009_ecolier_maggio__QE2
parent: src_kangourou_2009_ecolier_maggio
competition: Kangourou 2009 - Ecolier finale nazionale (Mirabilandia)
family: kangourou
year: '2009'
level: kangourou
country: Italia
modalita: individuale
quesito: E2
summary: Minimo numero di carte rimaste levandone due
answer: '3'
topics:
  - topic_combinatoria
  - topic_logica
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2009
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

*Minimo numero di carte rimaste levandone due*

![[src_kangourou_2009_ecolier_maggio__probE2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
% 15 cards in triangular arrangement, rows 1..5
% card width=0.5, height=0.7, hgap=0.15, vgap=0.1
% row 1 (top): 1 card
\draw (0,0) rectangle (0.5,0.7);
% row 2: 2 cards
\draw (-0.325,-0.8) rectangle (0.175,-0.1);
\draw (0.325,-0.8) rectangle (0.825,-0.1);
% row 3: 3 cards
\draw (-0.65,-1.6) rectangle (-0.15,-0.9);
\draw (0,-1.6) rectangle (0.5,-0.9);
\draw (0.65,-1.6) rectangle (1.15,-0.9);
% row 4: 4 cards
\draw (-0.975,-2.4) rectangle (-0.475,-1.7);
\draw (-0.325,-2.4) rectangle (0.175,-1.7);
\draw (0.325,-2.4) rectangle (0.825,-1.7);
\draw (0.975,-2.4) rectangle (1.475,-1.7);
% row 5: 5 cards
\draw (-1.3,-3.2) rectangle (-0.8,-2.5);
\draw (-0.65,-3.2) rectangle (-0.15,-2.5);
\draw (0,-3.2) rectangle (0.5,-2.5);
\draw (0.65,-3.2) rectangle (1.15,-2.5);
\draw (1.3,-3.2) rectangle (1.8,-2.5);
\end{tikzpicture}
\end{document}
```

> (*7 punti*) In figura sono rappresentate 15 carte.
> 
> Se una carta (che non sia la prima in alto) sparisce dal tavolo, devono sparire anche le carte che sono a contatto con essa nella riga superiore. Ha levato due carte in modo che rimanesse il minor numero di carte possibile: qual è questo numero? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 3
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f1h1TJscOH5tK9jr84T2t5qStr4PB-2H/view)
