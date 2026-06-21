---
title: Kangourou 2018 Cadet - Gara 15 marzo — Quesito 10
tipo: quesito
quesito_id: quesito_src_kangourou_2018_cadet_marzo__Q10
parent: src_kangourou_2018_cadet_marzo
competition: Kangourou 2018 Cadet - Gara 15 marzo
family: kangourou
year: '2018'
level: kangourou
country: Italia
modalita: individuale
quesito: '10'
summary: Lunghezza DM che divide il quadrato in aree uguali
answer: D
topics:
  - topic_geometria_piana
  - topic_algebra
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2018
  - livello/kangourou
  - topic/geometria_piana
  - topic/algebra
  - gara/individuale
---

*Lunghezza DM che divide il quadrato in aree uguali*

![[src_kangourou_2018_cadet_marzo__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (3,3);
  \coordinate (D) at (0,3);
  \coordinate (M) at (0,1);
  \coordinate (N) at (2,0);
  \draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;
  \draw[thick] (C) -- (M);
  \draw[thick] (B) -- (N);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[left] at (M) {$M$};
  \node[below] at (N) {$N$};
\end{tikzpicture}
\end{document}
```

> Il lato del quadrato ABCD è lungo 3 cm. Abbiamo segnato, rispet­
> tivamente sul lato AD e sul lato AB, due punti M e N, in modo che i 
> segmenti CM e BN suddividano il quadrato in tre figure con la stessa 
> area. Quanti centimetri è lungo il segmento DM ? 
> A) 0,5	
> 	
> B) 1	
> 	
> C) 1,5	
> 	
> D) 2	
> 	
> E) 2,5 
> I quesiti dal N. 11 al N. 20 valgono 4 punti ciascuno

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.2
