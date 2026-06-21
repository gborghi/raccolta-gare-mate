---
title: Kangourou 2022 Ecolier finale individuale — Quesito E1
tipo: quesito
quesito_id: quesito_src_kangourou_2022_ecolier_finale__QE1
parent: src_kangourou_2022_ecolier_finale
competition: Kangourou 2022 Ecolier finale individuale
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: E1
summary: Minimo mosse per uniformare i 9 gettoni bicolori
answer: '2'
topics:
  - topic_combinatoria
  - topic_logica
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

*Minimo mosse per uniformare i 9 gettoni bicolori*

![[src_kangourou_2022_ecolier_finale__probE1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \filldraw[fill=black, draw=black] (0,0) circle (0.45);
  \filldraw[fill=white, draw=black, thick] (1.2,0) circle (0.45);
  \filldraw[fill=black, draw=black] (2.4,0) circle (0.45);
  \filldraw[fill=white, draw=black, thick] (0,-1.2) circle (0.45);
  \filldraw[fill=white, draw=black, thick] (1.2,-1.2) circle (0.45);
  \filldraw[fill=white, draw=black, thick] (2.4,-1.2) circle (0.45);
  \filldraw[fill=black, draw=black] (0,-2.4) circle (0.45);
  \filldraw[fill=white, draw=black, thick] (1.2,-2.4) circle (0.45);
  \filldraw[fill=black, draw=black] (2.4,-2.4) circle (0.45);
\end{tikzpicture}
\end{document}
```

> Su un tavolo ci sono 9 gettoni, colorati di bianco su una faccia e di nero sull'altra. I gettoni sono disposti a quadrato su tre file e mostrano le loro facce come indica la figura. Un gioco consiste nel tentare di ottenere che tutti i gettoni mostrino le facce dello stesso colore, bianco o nero, eseguendo solo mosse che consistono nel capovolgere tutti i tre gettoni di una stessa riga o di una stessa colonna o di una stessa diagonale, potendo scegliere da mossa a mossa. Qual è il più piccolo numero di mosse che consente di terminare il gioco? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2
**Fonte:** apri PDF p.1
