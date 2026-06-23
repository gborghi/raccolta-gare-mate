---
title: Kangourou 2022 Benjamin semifinale individuale — Quesito 8
tipo: quesito
quesito_id: quesito_src_kangourou_2022_benjamin_semifinale__Q08
parent: src_kangourou_2022_benjamin_semifinale
competition: Kangourou 2022 Benjamin semifinale individuale
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: '8'
summary: Quante affermazioni corrette su Ada e Bice che corrono
answer: D
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_congruenze
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

*Quante affermazioni corrette su Ada e Bice che corrono*

![[src_kangourou_2022_benjamin_semifinale__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw[thick] (0,0) -- (1,0) -- (1,1) -- (0,1) -- cycle;
  \fill[red] (0,0) circle (2pt) node[below left] {A};
  \fill[red] (1,0) circle (2pt) node[below right] {B};
  \fill[red] (1,1) circle (2pt) node[above right] {C};
  \fill[red] (0,1) circle (2pt) node[above left] {D};
\end{tikzpicture}
\end{document}
```

> (5 punti) In figura vedete un quadrato sul bordo del quale Ada e Bice si allenano 
> a correre, ognuna senza mai cambiare verso, ma non sappiamo se nello stesso verso 
> o in verso opposto. Corrono per molti giri ciascuna a velocità costante, ma quella di 
> Ada è il quadruplo di quella di Bice. In questo momento Ada è sul vertice A mentre 
> Bice è sul vertice B. Quante delle seguenti affermazioni sono corrette? 
> - 
> Ada e Bice non si troveranno mai insieme nel vertice B. 
> - 
> Ada e Bice non si troveranno mai insieme nel vertice C.  
> - 
> Ada e Bice non si troveranno mai insieme nel vertice D. 
> - 
> Qualche volta Ada e Bice si troveranno insieme nel vertice A. 
> - 
> Ada e Bice non potranno trovarsi insieme se non in uno dei vertici. 
> A) 0 (nessuna) 
>  
> B) 1 
>  
> C) 3   
> D) 4 
>  
> E) 5 (tutte)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1WLuxevdVfb6yR3VvoVIhFETdy5CmwHJ_/view)
