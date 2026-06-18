---
tipo: quesito
quesito_id: quesito_src_kangourou_2013_squadre_f__Q05
parent: src_kangourou_2013_squadre_f
competition: Kangourou Coppa Squadre 2013 Finale
family: kangourou
year: '2013'
level: squadre
country: Italia
quesito: '5'
summary: Area triangolo PQT in rettangolo con punti medi
answer: '1750'
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
  - anno/2013
  - livello/squadre
  - topic/geometria_piana
---

# Kangourou Coppa Squadre 2013 Finale — Quesito 5

*Area triangolo PQT in rettangolo con punti medi*

![[src_kangourou_2013_squadre_f__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (K) at (0,0);
  \coordinate (L) at (4,0);
  \coordinate (M) at (4,2.5);
  \coordinate (N) at (0,2.5);
  \coordinate (P) at (0,1.25);
  \coordinate (Q) at (2,2.5);
  \coordinate (R) at (4,1.25);
  \coordinate (S) at (2,0);
  \coordinate (T) at (3,0.625);
  \draw (K) -- (L) -- (M) -- (N) -- cycle;
  \fill[gray!50] (P) -- (Q) -- (T) -- cycle;
  \draw[blue] (P) -- (Q) -- (T) -- cycle;
  \draw[blue] (R) -- (S);
  \node[below left] at (K) {K};
  \node[below right] at (L) {L};
  \node[above right] at (M) {M};
  \node[above left] at (N) {N};
  \node[left] at (P) {P};
  \node[above] at (Q) {Q};
  \node[right] at (R) {R};
  \node[below] at (S) {S};
  \node[right] at (T) {T};
  \foreach \pt in {P,Q,R,S,T} {
    \fill[white] (\pt) circle(2pt);
    \draw (\pt) circle(2pt);
  }
\end{tikzpicture}
\end{document}
```

> Un rettangolo e un triangolo   
> Osservate la figura. KLM è un rettangolo, ciascuno dei punti P, Q, 
> R e S è il punto medio del  lato del rettangolo su cui giace e T è il 
> punto medio di RS. Se l'area del rettangolo KLM è 70 decimetri 
> quadrati, quanti centimetri quadrati è l'area del triangolo PQT?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1750
**Fonte:** apri PDF p.1
