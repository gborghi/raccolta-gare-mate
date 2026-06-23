---
title: Kangourou Semifinale individuale Ecolier 2024 — Quesito 5
tipo: quesito
quesito_id: quesito_src_kangourou_2024_ecolier_semifinale__Q05
parent: src_kangourou_2024_ecolier_semifinale
competition: Kangourou Semifinale individuale Ecolier 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '5'
summary: Numero al posto del punto interrogativo (consecutivi non connessi)
answer: B
topics:
  - topic_logica
  - topic_combinatoria
methods:
  - method_grafi
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/logica
  - topic/combinatoria
  - gara/individuale
---

*Numero al posto del punto interrogativo (consecutivi non connessi)*

![[src_kangourou_2024_ecolier_semifinale__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[every node/.style={draw, circle, minimum size=1cm, thick}]
  \node (Q) at (0,0) {?};
  \node (A) at (2,0) {};
  \node (B) at (4,1) {};
  \node (C) at (4,-1) {};
  \node (D) at (6,0) {};
  \draw[thick] (Q) -- (A);
  \draw[thick] (A) -- (B);
  \draw[thick] (A) -- (C);
  \draw[thick] (B) -- (D);
  \draw[thick] (C) -- (D);
\end{tikzpicture}
\end{document}
```

> (Punti 4) Ciascuno dei numeri 1, 2, 3, 4, 5 va collocato 
> in uno dei cerchi in figura (uno solo per cerchio) in modo 
> che due numeri consecutivi non stiano mai in due cerchi 
> connessi da un segmento. Quale numero va collocato al 
> posto del punto di domanda? 
> A) Solo 2.                   B) Solo 3.               C) 2 oppure 4. 
> D) 1 oppure 5.          E) Solo 1. 
> Risposta: B). Soluzione. Per verifica diretta sui 5 numeri. (bisogna che i vertici del rombo contengano 
> coppie di numeri consecutivi disposti ai vertici opposti) 
>  
> ?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/162649dLxQWvMhDkp1XRH0AWwNRAJ6Vou/view)
