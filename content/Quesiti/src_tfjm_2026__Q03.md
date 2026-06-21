---
tipo: quesito
quesito_id: quesito_src_tfjm_2026__Q03
parent: src_tfjm_2026
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026
family: tfjm
year: '2026'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '3'
summary: >-
  Among N barrels, exactly k are contaminated by a lethal dye; using detectors
  that test mixtures of chosen barrels, find a strategy minimizing the number of
  detectors $D_{N,k}(S)$ under perfect, threshold-sensitive, probabilistic and
  dynamic detector models.
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_probabilita
methods:
  - method_casework
  - method_conteggio
  - method_inclusione_esclusione
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2026
  - livello/TFJM²
  - topic/combinatoria
  - topic/probabilita
  - gara/squadre
---

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026 — Quesito 3

*Among N barrels, exactly k are contaminated by a lethal dye; using detectors that test mixtures of chosen barrels, find a strategy minimizing the number of detectors $D_{N,k}(S)$ under perfect, threshold-sensitive, probabilistic and dynamic detector models.*

> 3. Poison in the beverages.
> 
> The Teinture Funigfle de Jais Mauve et Mauvaise (abbreviated TFJM$^2$) is a fictitious dye, colourless or coloured, but deadly even at infinitesimal concentration. During a transport of goods, infinitesimal quantities of TFJM$^2$ ended up in the barrels of Nicolas' beverages. He seeks to know in which barrels the poison is found.
> 
> The barrels are in natural number: suppose Nicolas has $N$ barrels numbered from $1$ to $N$, and suppose exactly $k \le N$ barrels were contaminated. A detection strategy $S$ consists in choosing, on one or several barrels, to test (mixing the chosen barrels together into one unit volume) whether the poison is present. The strategy may succeed or fail, depending on whether the chosen configuration of tests permits identifying the contaminated barrels uniquely or not.
> 
> Given a strategy $S$, let $D_{N,k}(S)$ be the number of detectors (tests) used by the strategy. We seek the strategy minimizing this number.
> 
> In all questions of the problem, one may comment for $k \le N$.
> 
> 1. In this question, suppose the detectors are perfect, that is, they detect the presence of TFJM$^2$ (even mixed in). Determine an optimal detection strategy $S$ and determine $D_{N,k}(S)$.
> 
> 2. In this question, suppose the detectors are not sensitive, that is, they detect the presence of poison if, and only if, its concentration in the tested sample is at least equal to some threshold. Determine an optimal detection strategy $S$ and determine $D_{N,k}(S)$.
> 
> 3. In this question, suppose the detectors are no longer deterministic. Set $p \in [0,1]$ and $q \in [0,1]$ and suppose the probability that the detector detects the presence of poison is $p$ and the probability of a false positive is $q$, that is $\mathbb{P}_{\text{poison present}}(\text{positive detection}) = p$ and $\mathbb{P}_{\text{poison absent}}(\text{positive detection}) = q$.
> 
> Set $\varepsilon > 0$. We say a strategy $S$ is $\varepsilon$-optimal if $D_{N,k}(S)$ is the smallest possible among all strategies whose probability of failure is less than $\varepsilon$.
> 
>    a) In this question and the following, suppose $q = 0$. Establish a detection strategy whose probability of failure is less than $\varepsilon$.
>    b) Determine an $\varepsilon$-optimal strategy $S$ and determine $D_{N,k}(S)$.
>    c) Same questions with $q \ne 0$.
> 
> 4. In this question, suppose the detectors are no longer deterministic and are dynamic, that is, the probability of positive detection in the presence of poison is exactly equal to the concentration of poison in the tested sample, and that of false positive is $\varepsilon$. Set $\varepsilon > 0$.
> 
>    a) Establish a detection strategy whose probability of failure is less than $\varepsilon$.
>    b) Determine an $\varepsilon$-optimal strategy $S$ and determine $D_{N,k}(S)$.
> 
> 5. Repeat questions 1 and 2 taking into account $\varepsilon$-optimal strategies.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2026__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF
