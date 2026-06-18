---
tipo: quesito
quesito_id: quesito_src_kangourou_2014_cadet_finale__Q04
parent: src_kangourou_2014_cadet_finale
competition: Kangourou 2014 finale Cadet
family: kangourou
year: '2014'
level: kangourou
country: Italia
modalita: individuale
quesito: '4'
summary: Area del triangolo rettangolo dalla bisettrice (4 e 5)
answer: 54 cm^2
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2014
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou 2014 finale Cadet — Quesito 4

*Area del triangolo rettangolo dalla bisettrice (4 e 5)*

![[src_kangourou_2014_cadet_finale__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (C) at (0,3);
  \coordinate (B) at (5,0);
  \coordinate (K) at (0,1.5);
  \coordinate (H) at (1.5,2.1);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (B) -- (K);
  \draw (C) -- (H);
  \node[left] at (C) {$C$};
  \node[left] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[left] at (K) {$K$};
  \node[above right] at (H) {$H$};
\end{tikzpicture}
\end{document}
```

> La bisettrice di uno degli angoli acuti di un triangolo rettangolo divide il cateto opposto in due segmenti, uno lungo 4 cm e l'altro lungo 5 cm. Calcola l'area del triangolo.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 54 cm^2
**Fonte:** apri PDF p.1
