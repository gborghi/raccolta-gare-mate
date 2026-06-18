---
tipo: quesito
quesito_id: quesito_src_gs_2008_squadre__Q07
parent: src_gs_2008_squadre
competition: Coppa Fermat 2008 - Gara a squadre
family: archimede
year: '2008'
level: squadre
country: Italia
modalita: squadre
quesito: '7'
summary: Punto del trapezio piu lontano dall incontro diagonali
answer: '89.04'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2008
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

# Coppa Fermat 2008 - Gara a squadre — Quesito 7

*Punto del trapezio piu lontano dall incontro diagonali*

![[src_gs_2008_squadre__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (6,2.8);
  \coordinate (D) at (0,3.2);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \node[below] at (3,0) {$a$};
  \node[left] at (D) {$b_2$};
  \node[right] at (C) {$b_1$};
\end{tikzpicture}
\end{document}
```

> A Tadfield, il *Divine Quad* è una piazza a forma di trapezio rettangolo con i lati paralleli di lunghezza $66\,\text{m}$ e $84\,\text{m}$ e il lato perpendicolare a questi di lunghezza $135\,\text{m}$. Sul pavimento della piazza sono tracciate le diagonali del trapezio. I quattro segmenti dal punto di incontro delle diagonali verso ciascuno degli angoli della piazza sono chiamati *percorsi dell'estasi*.
> 
> Qual è la lunghezza in centimetri del percorso dell'estasi più lungo?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 89.04
**Fonte:** apri PDF p.2
