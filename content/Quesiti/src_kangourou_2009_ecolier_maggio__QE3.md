---
title: Kangourou 2009 - Ecolier finale nazionale (Mirabilandia) — Quesito E3
tipo: quesito
quesito_id: quesito_src_kangourou_2009_ecolier_maggio__QE3
parent: src_kangourou_2009_ecolier_maggio
competition: Kangourou 2009 - Ecolier finale nazionale (Mirabilandia)
family: kangourou
year: '2009'
level: kangourou
country: Italia
modalita: individuale
quesito: E3
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

![[src_kangourou_2009_ecolier_maggio__probE3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
% 4x4 chessboard-like grid, shaded where (row+col) is odd
\foreach \r in {0,1,2,3}{
  \foreach \c in {0,1,2,3}{
    \pgfmathparse{int(mod(\r+\c,2))}
    \ifnum\pgfmathresult=1
      \fill[gray!40] (\c,\r) rectangle (\c+1,\r+1);
    \fi
    \draw (\c,\r) rectangle (\c+1,\r+1);
  }
}
\end{tikzpicture}
\end{document}
```

> (*11 punti*) Devi sistemare 4 monete identiche in altrettante caselle di una scacchiera $4 \times 4$ rispettando le regole seguenti:
> 
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
