---
tipo: quesito
quesito_id: quesito_src_kangourou_2008_cadet_marzo__Q17
parent: src_kangourou_2008_cadet_marzo
competition: Kangourou 2008 - Cadet (gara 28 marzo)
family: kangourou
year: '2008'
level: kangourou
country: Italia
modalita: individuale
quesito: '17'
summary: Area del triangolo PQR tra quattro cerchi tangenti
answer: D
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
  - anno/2008
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou 2008 - Cadet (gara 28 marzo) — Quesito 17

*Area del triangolo PQR tra quattro cerchi tangenti*

![[src_kangourou_2008_cadet_marzo__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.2]
  \draw[thick] (0,0) rectangle (48,12);
  \draw (6,6) circle (6);
  \draw (18,6) circle (6);
  \draw (30,6) circle (6);
  \draw (42,6) circle (6);
  \draw (48,12) -- (30,12) -- (18,0) -- cycle;
  \node[above right] at (48,12) {P};
  \node[above] at (30,12) {Q};
  \node[below] at (18,0) {R};
\end{tikzpicture}
\end{document}
```

> Quattro cerchi congruenti di raggio 6 centimetri sono tangenti tra loro
> e ai lati del rettangolo come in figura.
> Se P è un vertice del rettangolo e Q ed
> R sono punti di tangenza, quanti centimetri quadrati misura l’area del triangolo PQR?
> A) 27  
> B) 45  
> C) 54  
> D) 108     
> E) 180

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.4
