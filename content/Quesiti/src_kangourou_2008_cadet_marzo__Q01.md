---
tipo: quesito
quesito_id: quesito_src_kangourou_2008_cadet_marzo__Q01
parent: src_kangourou_2008_cadet_marzo
competition: Kangourou 2008 - Cadet (gara 28 marzo)
family: kangourou
year: '2008'
level: kangourou
country: Italia
quesito: '1'
summary: Quanti quadrati con vertici su punti dati
answer: C
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2008
  - livello/kangourou
  - topic/geometria_piana
  - topic/combinatoria
---

# Kangourou 2008 - Cadet (gara 28 marzo) — Quesito 1

*Quanti quadrati con vertici su punti dati*

![[src_kangourou_2008_cadet_marzo__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  \foreach \x/\y in {0/2, 1/2, 2/2, 0/1, 1/1, 2/1, 1/0, 2/0}{
    \draw[fill=black] (\x,\y) circle (4pt);
  }
\end{tikzpicture}
\end{document}
```

> Quanti quadrati si possono tracciare che abbiano
> come vertici quattro dei punti in figura? 
> A) 2                 B) 3              C) 4                
> D) 5                 E) 6

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.1
