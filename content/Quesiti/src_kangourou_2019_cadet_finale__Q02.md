---
tipo: quesito
quesito_id: quesito_src_kangourou_2019_cadet_finale__Q02
parent: src_kangourou_2019_cadet_finale
competition: Kangourou 2019 Finale Nazionale Cadet
family: kangourou
year: '2019'
level: kangourou
country: Italia
quesito: '2'
summary: Misura dell angolo ITE nel pentagono e triangolo equilatero
answer: '114'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2019
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2019 Finale Nazionale Cadet — Quesito 2

*Misura dell angolo ITE nel pentagono e triangolo equilatero*

![[src_kangourou_2019_cadet_finale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
  \coordinate (I) at (0, 2.5);
  \coordinate (B) at (-2.378, 0.773);
  \coordinate (L) at (-1.469, -2.023);
  \coordinate (E) at (1.469, -2.023);
  \coordinate (C) at (2.378, 0.773);
  \coordinate (R) at (4.343, -1.411);
  \coordinate (T) at (2.275, 0.450);
  \draw (B) -- (I) -- (C) -- (E) -- (L) -- cycle;
  \draw (I) -- (E);
  \draw (C) -- (R) -- (E);
  \draw (I) -- (R);
  \node[above] at (I) {$I$};
  \node[left] at (B) {$B$};
  \node[below left] at (L) {$L$};
  \node[below] at (E) {$E$};
  \node[above right] at (C) {$C$};
  \node[right] at (R) {$R$};
  \node[above right] at (T) {$T$};
  \fill (T) circle (1.5pt);
\end{tikzpicture}
\end{document}
```

> Osserva la figura. $IBLEC$ è un pentagono regolare e il triangolo $CER$ è equilatero. $T$ è il punto di intersezione tra i segmenti $CE$ e $IR$. Quanti gradi misura l'angolo $ITE$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 114
**Fonte:** apri PDF p.1
