---
tipo: quesito
quesito_id: quesito_src_kangourou_2005_junior_finale__QJ6
parent: src_kangourou_2005_junior_finale
competition: Kangourou 2005 - Junior (finale nazionale)
family: kangourou
year: '2005'
level: kangourou
country: Italia
quesito: J6
summary: Croce greca su scacchiera 7x7 senza angoli
answer: dimostrazione
topics:
  - topic_combinatoria
methods:
  - method_colorazione
skills:
  - skill_astrazione
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2005
  - livello/kangourou
  - topic/combinatoria
---

# Kangourou 2005 - Junior (finale nazionale) — Quesito J6

*Croce greca su scacchiera 7x7 senza angoli*

![[src_kangourou_2005_junior_finale__probJ6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw (0,0) grid (7,7);
  \fill[black] (0,6) rectangle (1,7);
  \fill[black] (6,6) rectangle (7,7);
  \fill[black] (0,0) rectangle (1,1);
  \fill[black] (6,0) rectangle (7,1);
  \node at (2.5,5.5) {5};
  \node at (4.5,5.5) {5};
  \node at (1.5,3.5) {5};
  \node at (3.5,3.5) {5};
  \node at (5.5,3.5) {5};
  \node at (2.5,1.5) {5};
  \node at (4.5,1.5) {5};
\end{tikzpicture}
\end{document}
```

> Considera una scacchiera $7 \times 7$ a cui sono state tolte le $4$ caselle d'angolo; chiama **croce greca** ogni configurazione di $5$ sue caselle disposte a croce in modo che ogni casella abbia in comune almeno un lato con un'altra casella della croce (quindi ogni croce ha $4$ bracci uguali ciascuno costituito da una casella). Dimostra che è possibile disporre $45$ numeri interi (non necessariamente tutti diversi fra loro) sulle $45$ caselle rimaste, uno per casella, in modo che la somma totale di questi interi sia negativa, ma la somma dei numeri corrispondenti alle caselle ricoperte da una qualsiasi croce greca sia positiva.
> 
> (Suggerimento: individua un insieme convenientemente ridotto $S$ di caselle con la proprietà che ogni croce greca copra almeno una casella appartenente ad $S$.)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** dimostrazione
**Fonte:** apri PDF p.2
