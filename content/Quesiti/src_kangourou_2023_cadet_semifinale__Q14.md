---
title: Kangourou 2023 Cadet — Semifinale individuale — Quesito 14
tipo: quesito
quesito_id: quesito_src_kangourou_2023_cadet_semifinale__Q14
parent: src_kangourou_2023_cadet_semifinale
competition: Kangourou 2023 Cadet — Semifinale individuale
family: kangourou
year: '2023'
level: kangourou
country: Italia
modalita: individuale
quesito: '14'
summary: quanti modi
topics:
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2023
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---

*quanti modi*

![[src_kangourou_2023_cadet_semifinale__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw[thick] (0,0) circle(1);
  \foreach \a in {90, 18, -54, -126, -198} {
    \draw (0,0) -- ({cos(\a)}, {sin(\a)});
  }
  \node at ({0.6*cos(54)}, {0.6*sin(54)}) {$1$};
  \node at ({0.6*cos(-18)}, {0.6*sin(-18)}) {$2$};
  \node at ({0.6*cos(-90)}, {0.6*sin(-90)}) {$3$};
  \node at ({0.6*cos(-162)}, {0.6*sin(-162)}) {$4$};
  \node at ({0.6*cos(126)}, {0.6*sin(126)}) {$5$};
\end{tikzpicture}
\end{document}
```

> (Punti 6) In ognuno dei cinque settori numerati nei quali è ripartito il cerchio in 
> figura, va inserita una delle lettere A, B, C, D, E (lettere diverse per settori diversi), in 
> modo che le lettere A e B non si trovino in settori adiacenti. In quanti diversi modi si 
> può effettuare l’inserimento?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF p.2
