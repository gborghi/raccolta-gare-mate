---
tipo: quesito
quesito_id: quesito_src_kangourou_2022_kangourou_squadre__Q13
parent: src_kangourou_2022_kangourou_squadre
competition: Kangourou Squadre 2022 Kangourou Finale 1
family: kangourou
year: '2022'
level: squadre
country: Italia
modalita: squadre
quesito: '13'
summary: Lunghezza ED in triangolo rettangolo partizionato
answer: 0048
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

# Kangourou Squadre 2022 Kangourou Finale 1 — Quesito 13

*Lunghezza ED in triangolo rettangolo partizionato*

![[src_kangourou_2022_kangourou_squadre__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.045]
  \coordinate (A) at (0,0);
  \coordinate (B) at (75,0);
  \coordinate (C) at (0,100);
  \coordinate (D) at (48,36);
  \coordinate (E) at (0,36);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw (E) -- (D);
  \draw (A) -- (D);
  \draw (0,4) -- (4,4) -- (4,0);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above left] at (C) {$C$};
  \node[left] at (E) {$E$};
  \node[right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Triangoli  
> In figura vedete un triangolo rettangolo ABC ripartito in tre triangoli rettangoli EDC, 
> EDA e ABD. Se AB misura 75 e AC misura 100, quanto misura ED?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0048
**Fonte:** apri PDF p.2
