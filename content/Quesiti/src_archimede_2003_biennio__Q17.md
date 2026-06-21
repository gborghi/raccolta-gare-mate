---
title: Giochi di Archimede 2003 - Biennio — Quesito 17
tipo: quesito
quesito_id: quesito_src_archimede_2003_biennio__Q17
parent: src_archimede_2003_biennio
competition: Giochi di Archimede 2003 - Biennio
family: archimede
year: '2003'
level: 'biennio, triennio'
country: Italia
modalita: individuale
quesito: '17'
summary: Somma angoli alle punte di una stella a cinque punte
topics:
  - topic_geometria_piana
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2003
  - livello/biennio
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

*Somma angoli alle punte di una stella a cinque punte*

![[src_archimede_2003_biennio__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) circle (2cm);
  \coordinate (A) at (90:2);
  \coordinate (B) at (162:2);
  \coordinate (C) at (234:2);
  \coordinate (D) at (306:2);
  \coordinate (E) at (18:2);
  \draw (A) -- (C) -- (E) -- (B) -- (D) -- cycle;
\end{tikzpicture}
\end{document}
```

> Sia data una stella a cinque punte inscritta in una circonferenza.
> Quanto vale la somma degli angoli con vertice nelle punte della stella?
> (A) 100°
> (B) 150°
> (C) 180°
> (D) 200°
> (E) i dati a disposizione sono insufficienti.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.2
**Anche in triennio:** apri PDF p.2
