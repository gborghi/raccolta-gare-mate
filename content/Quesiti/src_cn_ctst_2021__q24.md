---
title: China National Team Selection Test 2021 — Quesito 24
tipo: quesito
lang: en
quesito_id: quesito_src_cn_ctst_2021__Q24
parent: src_cn_ctst_2021
competition: China National Team Selection Test 2021
family: ctst
year: '2021'
level: China National Team Selection Test
country: Cina
modalita: individuale
quesito: '24'
summary: Round-robin with transitivity and few draws; find n^2 players in total order
qa_score: '3'
topics:
  - topic_combinatoria
methods:
  - method_grafi
  - method_estremalita
  - method_induzione
skills:
  - skill_modellizzazione
  - skill_ragionamento_geometrico
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/cina
  - comp/ctst
  - anno/2021
  - livello/China-National-Team-Selection-Test
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Round-robin with transitivity and few draws; find n^2 players in total order*

> There are $2n^2$ ($n \ge 2$) players in a single round-robin chess tournament. It is known that:
> \begin{enumerate}
> \item[(1)] For any three players $A$, $B$, $C$: if $A$ beats $B$ and $B$ beats $C$, then $A$ beats $C$;
> \item[(2)] There are at most $\dfrac{n}{16}$ draws.
> \end{enumerate}
> Prove: it is possible to choose $n^2$ players and label them $P_{ij}$ ($1 \le i, j \le n$), such that for any $i, j, i', j' \in \{1, 2, \ldots, n\}$ with $i < i'$, the player $P_{ij}$ beats the player $P_{i'j'}$.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_induzione|Induzione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Rond-robin con transibilità e pochi disegni; trovare n^2 giocatori in ordine totale*

> Ci sono giocatori $2n^2$ ($n \ge 2$) in un singolo torneo di scacchi a rotonda. È noto che: \begin{enumerate} \item[(1)] Per tutti e tre i giocatori $A$, $B$, $C$: se $A$ batte $B$ e $B$ batte $C$, allora $A$ batte $C$; \item[(2)] Ci sono al massimo $\dfrac{n}{16}$ sorte. \end{enumerate} Prova: è possibile scegliere i giocatori $n^2$ e etichettarli $P_{ij}$ ($1 \le i, j \le n$), in modo tale che per qualsiasi $i, j, i', j' \in \{1, 2, \ldots, n\}$ con $i < i'$, il giocatore $P_{ij}$ batta il giocatore $P_{i'j'}$.

[[src_cn_ctst_2021__Q24]]
