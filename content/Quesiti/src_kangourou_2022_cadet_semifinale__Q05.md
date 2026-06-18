---
tipo: quesito
quesito_id: quesito_src_kangourou_2022_cadet_semifinale__Q05
parent: src_kangourou_2022_cadet_semifinale
competition: Kangourou 2022 Cadet semifinale individuale
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: '5'
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

# Kangourou 2022 Cadet semifinale individuale — Quesito 5

*Quante affermazioni corrette su Ada e Bice che corrono*

![[src_kangourou_2022_cadet_semifinale__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[thick] (0,0) -- (3,0) -- (3,3) -- (0,3) -- cycle;
  \fill[red] (0,0) circle (3pt); \node[below left] at (0,0) {A};
  \fill[red] (3,0) circle (3pt); \node[below right] at (3,0) {B};
  \fill[red] (3,3) circle (3pt); \node[above right] at (3,3) {C};
  \fill[red] (0,3) circle (3pt); \node[above left] at (0,3) {D};
\end{tikzpicture}
\end{document}
```

> (4 punti) In figura vedete un quadrato sul bordo del quale Ada e Bice si allenano 
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
**Fonte:** apri PDF p.2
