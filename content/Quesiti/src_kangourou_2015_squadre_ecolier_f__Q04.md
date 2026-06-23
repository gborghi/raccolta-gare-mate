---
title: Kangourou Coppa Squadre Ecolier 2015 Finale — Quesito 4
tipo: quesito
quesito_id: quesito_src_kangourou_2015_squadre_ecolier_f__Q04
parent: src_kangourou_2015_squadre_ecolier_f
competition: Kangourou Coppa Squadre Ecolier 2015 Finale
family: kangourou
year: '2015'
level: squadre
country: Italia
modalita: squadre
quesito: '4'
summary: Percorso piu lungo nei 9 vialetti del parco
answer: '700'
topics:
  - topic_logica
  - topic_combinatoria
methods:
  - method_grafi
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2015
  - livello/squadre
  - topic/logica
  - topic/combinatoria
  - gara/squadre
---

*Percorso piu lungo nei 9 vialetti del parco*

![[src_kangourou_2015_squadre_ecolier_f__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (B) at (1, 1.732);
  \coordinate (BL) at (0, 0);
  \coordinate (A) at (2, 0);
  \coordinate (M1) at (0.5, 0.866);
  \coordinate (M2) at (1.5, 0.866);
  \coordinate (M3) at (1, 0);
  \draw (B) -- (BL);
  \draw (B) -- (A);
  \draw (BL) -- (A);
  \draw (M1) -- (M2);
  \draw (M1) -- (M3);
  \draw (M2) -- (M3);
  \node[above] at (B) {$B$};
  \node[right] at (A) {$A$};
\end{tikzpicture}
\end{document}
```

> %el parco            
>         In figura vedete lo schema dei 9 vialetti di un parco ognuno dei quali è lungo 
> 100 metri. Cesare vuole camminare dal punto A al punto B senza percorrere due 
> volte alcun vialetto,  passando anche più di una volta per qualcuno dei punti dove 
> due o più vialetti si incontrano. Quanti metri è lungo il percorso più lungo che può 
> fare?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 700
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)
