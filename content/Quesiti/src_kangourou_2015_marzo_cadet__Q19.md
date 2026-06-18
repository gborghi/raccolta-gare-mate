---
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_cadet__Q19
parent: src_kangourou_2015_marzo_cadet
competition: Kangourou 2015 gara 19 marzo Cadet
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '19'
summary: colore x
answer: A
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2015
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

# Kangourou 2015 gara 19 marzo Cadet — Quesito 19

*colore x*

![[src_kangourou_2015_marzo_cadet__prob19.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.4, font=\small]
  % Row of 4 triangles (alternating up/down) forming a band
  % Outer boundary: parallelogram-like with zigzag interior
  % Bottom points: (0,0),(1,0),(2,0),(3,0),(4,0)
  % Top points: (0.5,1),(1.5,1),(2.5,1),(3.5,1)
  \draw[thick] (0,0) -- (0.5,1) -- (1.5,1) -- (2.5,1) -- (3.5,1) -- (4,0) -- (0,0);
  \draw[thick] (0.5,1) -- (1,0) -- (1.5,1);
  \draw[thick] (1.5,1) -- (2,0) -- (2.5,1);
  \draw[thick] (2.5,1) -- (3,0) -- (3.5,1);
  \draw[thick] (1,0) -- (3,0);
  \node[above left] at (0.25,0.5) {verde};
  \node[above right] at (3.75,0.5) {verde};
  \node[below] at (0.5,0) {blu};
  \node[below] at (2,0) {$x$};
  \node[below] at (3.5,0) {blu};
\end{tikzpicture}
\end{document}
```

> La figura indica come sono stati colorati 
> alcuni dei segmenti unitari che delimitano i 
> triangoli di un disegno. Luigi vuole colorare i 
> restanti segmenti unitari in rosso o verde o blu. 
> Ogni triangolo deve avere un lato di ciascun 
> colore. Come può colorare il segmento segnato 
> con x?
> A) Solo di verde.		
> B) Solo di rosso.	 	
> C) Solo di blu.	
> D) Indifferentemente di rosso o di blu.	
>       E) Non può realizzare il progetto.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** apri PDF p.4
