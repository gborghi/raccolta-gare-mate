---
title: Kangourou 2017 Benjamin (semifinale individuale) — Quesito 3
tipo: quesito
quesito_id: quesito_src_kangourou_2017_benjamin_semifinale__Q03
parent: src_kangourou_2017_benjamin_semifinale
competition: Kangourou 2017 Benjamin (semifinale individuale)
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '3'
summary: Area del triangolo piu esteso su griglia 4x4 di puntini
answer: E
topics:
  - topic_geometria_piana
methods:
  - method_estremalita
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area del triangolo piu esteso su griglia 4x4 di puntini*

![[src_kangourou_2017_benjamin_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (3,3);
  \foreach \x in {0,1,2,3} {
    \foreach \y in {0,1,2,3} {
      \fill (\x,\y) circle (3pt);
    }
  }
\end{tikzpicture}
\end{document}
```

> (Punti 3) In figura è rappresentato un foglio quadrato su cui sono disegnati 16 puntini
> che sono vertici di 9 quadratini congruenti di lato 1 cm. Puoi tracciare vari triangoli usan­
> do i puntini come vertici. Quanti centimetri quadrati misura la superficie del più esteso
> triangolo che puoi tracciare in questo modo?
>
> - **(A)** 3
> - **(B)** 3,5
> - **(C)** 4
> - **(D)** 6
> - **(E)** Nessuna delle precedenti misure è corretta

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.1
