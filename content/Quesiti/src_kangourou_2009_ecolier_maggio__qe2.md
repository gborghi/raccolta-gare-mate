---
title: Kangourou 2009 - Ecolier finale nazionale (Mirabilandia) — Quesito E2
tipo: quesito
lang: it
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
<div class="qlang-switch" data-default="it"></div>


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


<span class="qlang-split" data-lang="en"></span>


< MSK0/>Minimum number of cards remaining by two < MSK1/>

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

> (*7 points*) 15 cards are shown in the figure.
> 
> If a card (other than the first card at the top) disappears from the table, the cards that are in contact with it in the top row must also disappear. He pulled two cards so that the fewest possible cards remained: what is this number? (see figure)

**Answer:** 3
[[src_kangourou_2009_ecolier_maggio__QE2]]
