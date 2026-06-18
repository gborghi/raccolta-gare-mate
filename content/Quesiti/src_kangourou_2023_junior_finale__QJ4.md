---
tipo: quesito
quesito_id: quesito_src_kangourou_2023_junior_finale__QJ4
parent: src_kangourou_2023_junior_finale
competition: Kangourou 2023 Junior — Finale (risposta aperta)
family: kangourou
year: '2023'
level: kangourou
country: Italia
modalita: individuale
quesito: J4
summary: lunghezza traiettoria di P
answer: (π/2)(1+√5)
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2023
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou 2023 Junior — Finale (risposta aperta) — Quesito J4

*lunghezza traiettoria di P*

![[src_kangourou_2023_junior_finale__probJ4.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) node[below left] {$A$} -- (3,0) node[below right] {$B$} -- (3,3) node[above right] {$C$} -- (0,3) node[above left] {$D$} -- cycle;
  \fill (1.5,0) circle (2pt) node[below] {$P$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Il segmento $AK$ è lungo 5, il lato del quadrato $ABCD$ è lungo 1 e il punto $P$ è il punto medio del lato $AB$. Facciamo ruotare il quadrato con perno nel vertice $B$ fino a quando il vertice $C$ viene a cadere (per la prima volta) sul segmento $AK$; a partire da questa posizione del quadrato, eseguiamo ora la stessa operazione con perno in $C$ e così via fino a che il lato $AB$ torna ad essere contenuto (per la prima volta dopo la prima rotazione) nel segmento $AK$. Fornisci un disegno qualitativo della traiettoria del punto $P$ che possa chiarire come è stata determinata e calcolane la lunghezza. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** (π/2)(1+√5)
**Fonte:** apri PDF p.1
