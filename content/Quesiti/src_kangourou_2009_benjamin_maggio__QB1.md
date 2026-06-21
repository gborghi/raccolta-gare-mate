---
title: Kangourou 2009 - Benjamin finale nazionale (Mirabilandia) — Quesito B1
tipo: quesito
quesito_id: quesito_src_kangourou_2009_benjamin_maggio__QB1
parent: src_kangourou_2009_benjamin_maggio
competition: Kangourou 2009 - Benjamin finale nazionale (Mirabilandia)
family: kangourou
year: '2009'
level: kangourou
country: Italia
modalita: individuale
quesito: B1
summary: Quanti modi di sistemare 4 monete su scacchiera 4x4
answer: '2'
topics:
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2009
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---

*Quanti modi di sistemare 4 monete su scacchiera 4x4*

![[src_kangourou_2009_benjamin_maggio__probB1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!40] (1,0) rectangle (2,1);
  \fill[gray!40] (3,0) rectangle (4,1);
  \fill[gray!40] (0,1) rectangle (1,2);
  \fill[gray!40] (2,1) rectangle (3,2);
  \fill[gray!40] (1,2) rectangle (2,3);
  \fill[gray!40] (3,2) rectangle (4,3);
  \fill[gray!40] (0,3) rectangle (1,4);
  \fill[gray!40] (2,3) rectangle (3,4);
  \draw[thick] (0,0) grid (4,4);
  \draw[very thick] (0,0) rectangle (4,4);
\end{tikzpicture}
\end{document}
```

> Devi sistemare 4 monete identiche in altrettante caselle di una scacchiera $4 \times 4$ rispettando le regole seguenti:
> - in nessuna riga e in nessuna colonna può esserci più di una moneta;
> - se in una casella c'è una moneta, ogni casella che abbia in comune con essa qualche vertice non può contenere monete.
> 
> In quanti modi diversi puoi realizzare il progetto?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2
**Fonte:** apri PDF p.1
