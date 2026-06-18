---
tipo: quesito
quesito_id: quesito_src_kangourou_2015_squadre_f__Q03
parent: src_kangourou_2015_squadre_f
competition: Kangourou Coppa Squadre 2015 Finale
family: kangourou
year: '2015'
level: squadre
country: Italia
modalita: squadre
quesito: '3'
summary: Angolo AQB nel quadrato con due quarti di circonferenza
answer: '150'
topics:
  - topic_geometria_piana
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2015
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

# Kangourou Coppa Squadre 2015 Finale — Quesito 3

*Angolo AQB nel quadrato con due quarti di circonferenza*

![[src_kangourou_2015_squadre_f__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,2);
  \coordinate (B) at (0,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (2,2);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) arc[start angle=180, end angle=270, radius=2];
  \draw (B) arc[start angle=180, end angle=90, radius=2];
  \coordinate (Q) at (1, {2-sqrt(3)});
  \fill (Q) circle (1pt);
  \node[above left] at (A) {A};
  \node[below left] at (B) {B};
  \node[below right] at (C) {C};
  \node[above right] at (D) {D};
  \node[right] at (Q) {Q};
  \node[left] at ({0.2},{2-sqrt(3)}) {?};
\end{tikzpicture}
\end{document}
```

> All'interno di un quadrato     
>         Osservate la figura. ABCD è un quadrato all'interno del quale sono 
> tracciati il quarto di circonferenza con centro in D passante per A e C e il 
> quarto di circonferenza con centro in C passante per B e D. I due quarti di 
> circonferenza si intersecano in Q. Qual è la misura in gradi dell'angolo 
> AQB?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 150
**Fonte:** apri PDF p.1
