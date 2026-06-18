---
tipo: quesito
quesito_id: quesito_src_kangourou_2013_student__Q16
parent: src_kangourou_2013_student
competition: Kangourou 2013 marzo Student
family: kangourou
year: '2013'
level: kangourou
country: Italia
quesito: '16'
summary: Soluzioni di f(f(f(x)))=0 dal grafico
answer: A
topics:
  - topic_insiemi_funzioni
methods:
  - method_backward
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2013
  - livello/kangourou
  - topic/insiemi_funzioni
---

# Kangourou 2013 marzo Student — Quesito 16

*Soluzioni di f(f(f(x)))=0 dal grafico*

![[src_kangourou_2013_student__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw[->] (-5.5,0) -- (5.5,0) node[right] {$x$};
  \draw[->] (0,-2.5) -- (0,5.5) node[above] {$y$};
  \foreach \x in {-4,-2,2,4} {
    \draw (\x,0.08) -- (\x,-0.08);
    \node[below, font=\small] at (\x,0) {$\x$};
  }
  \foreach \y in {2,4} {
    \draw (0.08,\y) -- (-0.08,\y);
    \node[left, font=\small] at (0,\y) {$\y$};
  }
  \draw[thick] (-5.2,-1.2) -- (-2,2);
  \draw[thick] (-2,2) -- (0,0);
  \draw[thick] (0,0) -- (4.8,4.8);
  \draw[dashed] (-2,0) -- (-2,2) -- (0,2);
  \draw[dashed] (4,0) -- (4,4) -- (0,4);
\end{tikzpicture}
\end{document}
```

> Nella figura vedete il grafico di una funzione f reale definita su tutto l’asse reale, che è formato da due 
> semirette e da un segmento che le congiunge. Quante 
> soluzioni distinte ha l’equazione   f (f (f (x))) = 0 ? 
> A) 4	
> 	
> B) 3	
> 	
> C) 2	
>          
> D) 1	
> 	
> E) 0

**Topic:** [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]]
**Risposta:** A
**Fonte:** apri PDF p.3
