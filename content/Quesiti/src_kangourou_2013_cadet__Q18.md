---
title: Kangourou 2013 marzo Cadet — Quesito 18
tipo: quesito
quesito_id: quesito_src_kangourou_2013_cadet__Q18
parent: src_kangourou_2013_cadet
competition: Kangourou 2013 marzo Cadet
family: kangourou
year: '2013'
level: kangourou
country: Italia
modalita: individuale
quesito: '18'
summary: Celle non intersecate dalle diagonali in griglia 6x10
answer: E
topics:
  - topic_combinatoria
  - topic_geometria_piana
methods:
  - method_conteggio
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2013
  - livello/kangourou
  - topic/combinatoria
  - topic/geometria_piana
  - gara/individuale
---

*Celle non intersecate dalle diagonali in griglia 6x10*

![[src_kangourou_2013_cadet__prob18.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[step=1cm] (0,0) grid (8,6);
  \draw (0,6) -- (8,0);
  \draw (0,0) -- (8,6);
\end{tikzpicture}
\end{document}
```

> Nella griglia 6×8 mostrata in figura ci sono 24 celle che non 
> sono intersecate da alcuna delle due diagonali. Se tracciamo le 
> diagonali di una griglia 6×10 quante celle non sono intersecate 
> da alcuna delle due diagonali?
> A) 28          B) 29          C) 30          D) 31            E) 32

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1VC-yYJdlKS7JJpWP5NEWevi12pDRRO8E/view)
