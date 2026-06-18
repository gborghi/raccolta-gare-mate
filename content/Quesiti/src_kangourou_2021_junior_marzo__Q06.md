---
tipo: quesito
quesito_id: quesito_src_kangourou_2021_junior_marzo__Q06
parent: src_kangourou_2021_junior_marzo
competition: Kangourou 2021 Junior - gara marzo (biennio)
family: kangourou
year: '2021'
level: kangourou
country: Italia
modalita: individuale
quesito: '6'
summary: Area dell'esagono fatto di sei rombi da 5 cm2
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2021
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou 2021 Junior - gara marzo (biennio) — Quesito 6

*Area dell'esagono fatto di sei rombi da 5 cm2*

![[src_kangourou_2021_junior_marzo__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (A0) at (1, 0);
  \coordinate (A1) at (0.5, 0.8660);
  \coordinate (A2) at (-0.5, 0.8660);
  \coordinate (A3) at (-1, 0);
  \coordinate (A4) at (-0.5, -0.8660);
  \coordinate (A5) at (0.5, -0.8660);
  \coordinate (M01) at (0.75, 0.4330);
  \coordinate (M12) at (0, 0.8660);
  \coordinate (M23) at (-0.75, 0.4330);
  \coordinate (M34) at (-0.75, -0.4330);
  \coordinate (M45) at (0, -0.8660);
  \coordinate (M50) at (0.75, -0.4330);
  \coordinate (O) at (0,0);
  \draw[thick] (A0) -- (A1) -- (A2) -- (A3) -- (A4) -- (A5) -- cycle;
  \draw (A0) -- (M01) -- (O) -- (M50) -- cycle;
  \draw (A1) -- (M12) -- (O) -- (M01) -- cycle;
  \draw (A2) -- (M23) -- (O) -- (M12) -- cycle;
  \draw (A3) -- (M34) -- (O) -- (M23) -- cycle;
  \draw (A4) -- (M45) -- (O) -- (M34) -- cycle;
  \draw (A5) -- (M50) -- (O) -- (M45) -- cycle;
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Sei rombi congruenti, ciascuno di area 5 cm2, 
> sono accostati in modo da formare una stella le cui punte sono i ver­
> tici di un esagono regolare. Di quanti centimetri quadrati è l’area 
> dell’esagono?
> A) 36	
>         B) 40	
>       C) 45	
>       D) 48	
> E) 60

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.2
