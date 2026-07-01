---
title: Regional Mathematical Olympiad 2025 — KV/JNV — Quesito 4
tipo: quesito
lang: en
quesito_id: quesito_src_rmo_2025_kv__Q04
parent: src_rmo_2025_kv
competition: Regional Mathematical Olympiad 2025
family: rmo
year: '2025'
level: RMO
country: India
modalita: individuale
quesito: '4'
summary: 'Count frog paths from (0,0) to (n,2) avoiding consecutive UU or DD'
regioni:
  - KV/JNV
qa_score: '4'
topics:
  - topic_combinatoria
methods:
  - method_ricorsione
  - method_conteggio
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_riconoscimento_pattern
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/india
  - comp/rmo
  - anno/2025
  - livello/RMO
  - topic/combinatoria
  - regione/kv
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Count frog paths from (0,0) to (n,2) avoiding consecutive UU or DD*

> A frog is initially at $(0, 0)$ and it reaches $(n, 2)$, $n \ge 1$, using the following moves in any order several times:
> \begin{enumerate}
> \item[(i)] $R = (1, 0)$, that is, if the frog is at $(a, b)$ it goes to $(a+1, b)$;
> \item[(ii)] $U = (0, 1)$, that is, if the frog is at $(a, b)$ it goes to $(a, b+1)$;
> \item[(iii)] $D = (0, -1)$, that is, if the frog is at $(a, b)$ it goes to $(a, b-1)$.
> \end{enumerate}
> In how many ways can the frog go from $(0, 0)$ to $(n, 2)$, $n \ge 1$, using the above steps subject to the condition that steps of the type $UU$, $DD$ are forbidden?
> 
> (For example, for $n = 3$, $RDUR$, $DRD$ are admissible paths, while $DDR$, $RUURR$ are not.)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1MrMQ5sdyNiJZHOwWDmELMBbGQJwXcICc/view)


<span class="qlang-split" data-lang="it"></span>


*Contare i percorsi di rana da (0,0) a (n,2) evitando UU o DD consecutivi*

> Una rana è inizialmente a $(0, 0)$ e raggiunge $(n, 2)$, $n \ge 1$, utilizzando le seguenti mosse in qualsiasi ordine più volte: \begin{enumerate} \item[(i)] $R = (1, 0)$, cioè, se la rana è a $(a, b)$ va a $(a+1, b)$; \item[(ii) $U = (0, 1)$, cioè, se la rana è a $(a, b)$ va a $(a, b+1)$; \([iii)] $D = (0, -1)$, cioè, se la rana è a $(a, b)$ va a $(a, b-1)$. \end{enumerate} In quanti modi la rana può passare da $(0, 0)$ a $(n, 2)$, $n \ge 1$, utilizzando i passaggi di cui sopra, a condizione che i passaggi del tipo $UU$, $DD$ siano proibiti?
> 
> (Per esempio, per $n = 3$, $RDUR$, $DRD$ sono percorsi ammissibili, mentre $DDR$, $RUURR$ non lo sono.)

[[src_rmo_2025_kv__Q04]]
