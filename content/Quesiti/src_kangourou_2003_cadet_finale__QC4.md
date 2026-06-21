---
title: Kangourou 2003 - Finale nazionale Cadet (Mirabilandia) — Quesito C4
tipo: quesito
quesito_id: quesito_src_kangourou_2003_cadet_finale__QC4
parent: src_kangourou_2003_cadet_finale
competition: Kangourou 2003 - Finale nazionale Cadet (Mirabilandia)
family: kangourou
year: '2003'
level: kangourou
country: Italia
modalita: individuale
quesito: C4
summary: Somma lunghezze dei 7 segmenti paralleli
answer: '35'
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2003
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Somma lunghezze dei 7 segmenti paralleli*

![[src_kangourou_2003_cadet_finale__probC4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,4);
  \coordinate (B) at (0,0);
  \coordinate (C) at (5,0);
  \draw[thick] (A) -- (B) -- (C) -- (A);
  \node[below left] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \foreach \h in {0.5, 1.5, 2.5, 3.5} {
    \draw[red, thick] (0, \h) -- ({5*(4-\h)/4}, \h);
  }
  \foreach \h in {1.0, 2.0, 3.0} {
    \draw[black, thick] (0, \h) -- ({5*(4-\h)/4}, \h);
  }
\end{tikzpicture}
\end{document}
```

> L'ipotenusa $AC$ di un triangolo rettangolo è suddivisa in $8$ segmenti uguali fra loro utilizzando $7$ segmenti paralleli al cateto $BC$, ciascuno avente un estremo sul cateto $AB$ e l'altro sull'ipotenusa. Il cateto $BC$ è lungo $10$ metri. Quanto misura la somma delle lunghezze di questi $7$ segmenti?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 35
**Fonte:** apri PDF p.1
