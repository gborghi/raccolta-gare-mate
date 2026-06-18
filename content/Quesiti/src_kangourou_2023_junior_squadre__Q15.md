---
tipo: quesito
quesito_id: quesito_src_kangourou_2023_junior_squadre__Q15
parent: src_kangourou_2023_junior_squadre
competition: Kangourou Squadre 2023 Junior Finale 1
family: kangourou
year: '2023'
level: squadre
country: Italia
modalita: squadre
quesito: '15'
summary: 'Area triangolo T intera, dati AB,AC,ADC'
answer: 0084
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2023
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

# Kangourou Squadre 2023 Junior Finale 1 — Quesito 15

*Area triangolo T intera, dati AB,AC,ADC*

![[src_kangourou_2023_junior_squadre__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.35]
  \coordinate (A) at (9,12);
  \coordinate (B) at (0,0);
  \coordinate (C) at (14,0);
  \coordinate (D) at (9,0);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[dashed] (A) -- (D);
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[below] at (D) {$D$};
  \fill (D) circle (3pt);
\end{tikzpicture}
\end{document}
```

> L’area di T 
> I lati AB e AC di un triangolo acutangolo T misurano rispettivamente 15 e 13 cm. Detto D il piede 
> dell’altezza condotta dal vertice A al lato BC, l’area del triangolo ADC vale 30 cm2. Sapendo che 
> l’area di T è espressa da un numero intero di centimetri quadrati, quanto vale? 
> 
>  
> Quesiti e soluzioni

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0084
**Fonte:** apri PDF p.2
