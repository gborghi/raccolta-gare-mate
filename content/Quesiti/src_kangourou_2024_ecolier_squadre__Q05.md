---
tipo: quesito
quesito_id: quesito_src_kangourou_2024_ecolier_squadre__Q05
parent: src_kangourou_2024_ecolier_squadre
competition: Kangourou Squadre 2024 Ecolier Finale 1
family: kangourou
year: '2024'
level: squadre
country: Italia
quesito: '5'
summary: Massimo biglie gialle date 25 verdi
answer: '0104'
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/squadre
  - topic/aritmetica
  - topic/combinatoria
---

# Kangourou Squadre 2024 Ecolier Finale 1 — Quesito 5

*Massimo biglie gialle date 25 verdi*

![[src_kangourou_2024_ecolier_squadre__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \foreach \i in {1,...,7} {
    \draw (\i-1, 0) rectangle (\i, 0.8);
    \node at (\i-0.5, 0.4) {\i};
  }
  \node at (7.5, 0.4) {$\ldots$};
\end{tikzpicture}
\end{document}
```

> Le biglie gialle  
> In figura vedete l’inizio di una striscia molto lunga, suddivisa in 
> caselle numerate, a partire dalla prima, con i numeri naturali. Per 
> prima cosa ho posto una biglia verde in tutte le caselle numerate con un numero divisibile per 6; poi 
> ho posto una biglia rossa in tutte le caselle non già occupate da una biglia verde e numerate con un 
> 1 2 3 4 5 6 7 … 
> 
> numero divisibile per 4; infine ho posto una biglia gialla in tutte le caselle ancora vuote. Le biglie 
> verdi sono 25. Quante possono essere al massimo le biglie gialle? 
> Risposta: 0104.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0104
**Fonte:** apri PDF p.1
