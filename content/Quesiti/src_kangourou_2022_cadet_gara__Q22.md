---
title: Kangourou 2022 Cadet gara individuale — Quesito 22
tipo: quesito
quesito_id: quesito_src_kangourou_2022_cadet_gara__Q22
parent: src_kangourou_2022_cadet_gara
competition: Kangourou 2022 Cadet gara individuale
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: '22'
summary: Rapporto AB/BC del rettangolo diviso in sette
answer: D
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Rapporto AB/BC del rettangolo diviso in sette*

![[src_kangourou_2022_cadet_gara__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (12,7);
  \foreach \x in {0,3,6,9} {
    \draw (\x,3) rectangle (\x+3,7);
  }
  \foreach \x in {0,4,8} {
    \draw (\x,0) rectangle (\x+4,3);
  }
  \node[above left] at (0,7) {$A$};
  \node[above right] at (12,7) {$B$};
  \node[below right] at (12,0) {$C$};
  \node[below left] at (0,0) {$D$};
\end{tikzpicture}
\end{document}
```

> Il rettangolo grande in figura, ABCD, è ripartito in sette 
> rettangoli tutti delle stesse dimensioni. Quanto vale il rapporto 
> tra la lunghezza del lato AB e quella del lato BC?
> A) 1/2	 	
> B) 4/3	
> 	
> C) 8/5	 	
> D) 12/7	 	
> E) 7/3

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.4
