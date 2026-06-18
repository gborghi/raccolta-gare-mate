---
tipo: quesito
quesito_id: quesito_src_archimede_2015_biennio__Q15
parent: src_archimede_2015_biennio
competition: Giochi di Archimede 2015 - Biennio
family: archimede
year: '2015'
level: 'biennio, triennio'
country: Italia
modalita: individuale
quesito: '15'
summary: Raggio del piatto da corda e saetta del frammento
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2015
  - livello/biennio
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

# Giochi di Archimede 2015 - Biennio — Quesito 15

*Raggio del piatto da corda e saetta del frammento*

![[src_archimede_2015_biennio__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.18]
  \coordinate (A) at (0,0);
  \coordinate (B) at (24,0);
  \coordinate (C) at (12,0);
  \coordinate (D) at (12,6);
  \coordinate (O) at (12,-9);
  \draw[thick] (A) -- (B);
  \draw (A) arc (143.13:36.87:15);
  \foreach \p in {A,B,C,D} \fill (\p) circle (0.25);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[above] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> È stato ritrovato un frammento di un antico piatto circolare
> ormai rotto, della forma in figura.
> C è il punto medio
> del segmento AB, mentre D è il punto medio dell’arco
> AB. Sapendo che AB misura 24 cm e CD misura 6 cm, di
> quanti cm era il raggio del piatto originale?
> (A) 16
> (B) 12
> (C) 18
> (D) 20
> (E) 15

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.1
**Anche in triennio:** apri PDF p.1
