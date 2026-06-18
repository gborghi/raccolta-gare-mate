---
tipo: quesito
quesito_id: quesito_src_kangourou_2016_student_marzo__Q23
parent: src_kangourou_2016_student_marzo
competition: Kangourou 2016 Student (gara marzo)
family: kangourou
year: '2016'
level: kangourou
country: Italia
modalita: individuale
quesito: '23'
summary: Quante parabole ad asse verticale per 3 punti anneriti
answer: D
topics:
  - topic_combinatoria
  - topic_geometria_analitica
methods:
  - method_casi_conteggio
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2016
  - livello/kangourou
  - topic/combinatoria
  - topic/geometria_analitica
  - gara/individuale
---

# Kangourou 2016 Student (gara marzo) — Quesito 23

*Quante parabole ad asse verticale per 3 punti anneriti*

![[src_kangourou_2016_student_marzo__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[gray!40, thin] (0,0) grid (4,4);
  \draw[->] (0,0) -- (4.3,0) node[right] {$x$};
  \draw[->] (0,0) -- (0,4.3) node[above] {$y$};
  \node[below left] at (0,0) {$O$};
  \foreach \i in {1,2,3} {
    \foreach \j in {1,2,3} {
      \fill (\i, \j) circle (2pt);
    }
  }
\end{tikzpicture}
\end{document}
```

> Quante parabole con asse verticale passano per 3 dei punti anneriti in figura?
> A) 6	
> 	
> B) 15	
> 	
> C) 19	
> 	
> D) 22	
> 	
> E) 27

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.4
