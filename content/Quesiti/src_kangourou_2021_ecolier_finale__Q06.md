---
tipo: quesito
quesito_id: quesito_src_kangourou_2021_ecolier_finale__Q06
parent: src_kangourou_2021_ecolier_finale
competition: Kangourou 2021 Ecolier - finale
family: kangourou
year: '2021'
level: kangourou
country: Italia
quesito: '6'
summary: Rendere uguali 5 numeri aggiungendo 1 a coppie adiacenti
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_invarianti
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2021
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
---

# Kangourou 2021 Ecolier - finale — Quesito 6

*Rendere uguali 5 numeri aggiungendo 1 a coppie adiacenti*

![[src_kangourou_2021_ecolier_finale__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\R{2}
  \draw (0,0) circle (\R);
  \fill (90:\R) circle (2.5pt) node[above=2pt] {1};
  \fill (18:\R) circle (2.5pt) node[right=2pt] {2};
  \fill (-54:\R) circle (2.5pt) node[right=2pt] {3};
  \fill (-126:\R) circle (2.5pt) node[left=2pt] {4};
  \fill (162:\R) circle (2.5pt) node[left=2pt] {5};
\end{tikzpicture}
\end{document}
```

> Bianca ha 20 conigli: a 9 dà da mangiare carote tutti i giorni, agli altri solo un giorno sì e uno no, non necessariamente a tutti lo stesso giorno. Ieri hanno mangiato carote 16 conigli. Quanti conigli mangeranno carote oggi?
> 
> (A) 9
> (B) 13
> (C) 14
> (D) 15
> (E) Le informazioni sono insufficienti.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF p.2
