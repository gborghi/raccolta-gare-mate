---
title: Kangourou 2015 gara 19 marzo Student — Quesito 18
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_student__Q18
parent: src_kangourou_2015_marzo_student
competition: Kangourou 2015 gara 19 marzo Student
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '18'
summary: prodotto dei raggi
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2015
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*prodotto dei raggi*

![[src_kangourou_2015_marzo_student__prob18.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  \def\ra{1}
  \def\rb{1.73}
  \def\rc{2.45}
  \fill[gray!50] (0,0) -- (\rc,0) arc (0:90:\rc) -- cycle;
  \fill[white] (0,0) -- (\rb,0) arc (0:90:\rb) -- cycle;
  \fill[gray!50] (0,0) -- (-\ra,0) arc (180:270:\ra) -- cycle;
  \fill[gray!50] (0,0) -- (\rb,0) arc (0:-90:\rb) -- cycle;
  \fill[white] (0,0) -- (\ra,0) arc (0:-90:\ra) -- cycle;
  \draw (0,0) circle (\rc);
  \draw (0,0) circle (\rb);
  \draw (0,0) circle (\ra);
  \draw (-\rc,0) -- (\rc,0);
  \draw (0,-\rc) -- (0,\rc);
\end{tikzpicture}
\end{document}
```

> Il disegno in figura mostra tre circonferenze con­
> centriche e due dei loro diametri, tra loro ortogonali. Le 
> aree delle tre zone ombreggiate sono uguali tra loro, e il 
> raggio del cerchio più piccolo ha lunghezza 1. Qual è il 
> prodotto dei raggi dei tre cerchi?
> A) √ 6 	 	
> B) 3	
> 	
> C) 
> D) 2√2	 	
> E) 6

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.4
