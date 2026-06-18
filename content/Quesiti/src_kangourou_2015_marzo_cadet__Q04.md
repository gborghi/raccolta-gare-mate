---
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_cadet__Q04
parent: src_kangourou_2015_marzo_cadet
competition: Kangourou 2015 gara 19 marzo Cadet
family: kangourou
year: '2015'
level: kangourou
country: Italia
quesito: '4'
summary: somme facce opposte
answer: E
topics:
  - topic_geometria_solida
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2015
  - livello/kangourou
  - topic/geometria_solida
---

# Kangourou 2015 gara 19 marzo Cadet — Quesito 4

*somme facce opposte*

![[src_kangourou_2015_marzo_cadet__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
  % Cube net: cross shape with faces labeled 1-6
  % Bottom cell (4): (1,-1)-(2,0)
  \draw (1,-1) rectangle (2,0);
  \node at (1.5,-0.5) {$4$};
  % Main row of 4 faces
  \draw (0,0) rectangle (4,1);
  \draw (1,0) -- (1,1);
  \draw (2,0) -- (2,1);
  \draw (3,0) -- (3,1);
  \node at (0.5,0.5) {$1$};
  \node at (1.5,0.5) {$5$};
  \node at (2.5,0.5) {$3$};
  \node at (3.5,0.5) {$6$};
  % Top cell (2): (1,1)-(2,2)
  \draw (1,1) rectangle (2,2);
  \node at (1.5,1.5) {$2$};
\end{tikzpicture}
\end{document}
```

> La figura mostra lo sviluppo piano di un cubo con 
> facce numerate. Per ogni coppia di facce opposte, Paolo 
> ha sommato i due numeri che compaiono sulle facce: 
> quali sono le tre somme che ha ottenuto?
> A) 6, 7, 8	
> B) 6, 6, 9	
> C) 5, 6, 10	
> D) 4, 7, 10	
> E) 4, 6, 11

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.1
