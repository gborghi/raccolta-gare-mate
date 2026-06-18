---
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_benjamin__Q03
parent: src_kangourou_2015_marzo_benjamin
competition: Kangourou 2015 gara 19 marzo Benjamin
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '3'
summary: Min quadratini da riverniciare (no adiacenti uguali)
answer: A
topics:
  - topic_combinatoria
methods:
  - method_colorazione
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2015
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---

# Kangourou 2015 gara 19 marzo Benjamin — Quesito 3

*Min quadratini da riverniciare (no adiacenti uguali)*

![[src_kangourou_2015_marzo_benjamin__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\cell#1#2#3{
    \fill[#3] (#1,#2) rectangle (#1+1,#2+1);
    \draw (#1,#2) rectangle (#1+1,#2+1);
  }
  \cell{0}{0}{white}
  \cell{1}{0}{black}
  \cell{2}{0}{black}
  \cell{0}{1}{gray!50}
  \cell{1}{1}{black}
  \cell{2}{1}{white}
  \cell{0}{2}{white}
  \cell{1}{2}{gray!50}
  \cell{2}{2}{gray!50}
\end{tikzpicture}
\end{document}
```

> Samuele ha dipinto i nove quadratini in cui è suddiviso il qua­
> drato grande con vernice bianca, grigia e nera come vedi in figura. 
> Ha poi deciso di ridipingerne alcuni in modo che due quadratini 
> verniciati allo stesso modo non abbiano lati in comune. Qual è il 
> numero minimo di quadratini che gli basta riverniciare?
> A) 2          B) 3            C) 4           D) 5               E) 6

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** apri PDF p.1
