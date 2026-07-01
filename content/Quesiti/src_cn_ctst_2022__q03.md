---
title: China National Team Selection Test 2022 — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_cn_ctst_2022__Q03
parent: src_cn_ctst_2022
competition: China National Team Selection Test 2022
family: ctst
year: '2022'
level: China National Team Selection Test
country: Cina
modalita: individuale
quesito: '3'
summary: 'Multi-dimensional game with pieces: find minimum starting count'
qa_score: '3'
answer: '$p_1^{b_1} p_2^{b_2} \cdots p_n^{b_n}$'
topics:
  - topic_combinatoria
methods:
  - method_invarianti
  - method_induzione
skills:
  - skill_modellizzazione
  - skill_ragionamento_geometrico
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/cina
  - comp/ctst
  - anno/2022
  - livello/China-National-Team-Selection-Test
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Multi-dimensional game with pieces: find minimum starting count*

> Given positive integers $n$, $p_1, p_2, \ldots, p_n$ (each $p_i \ge 2$), and $b_1, b_2, \ldots, b_n$. Let $Q = \{(x_1, x_2, \ldots, x_n) \in \mathbb{Z}_{\ge 0}^n \mid 0 \le x_i \le p_i^{b_i} - 1 \text{ for each } i\}$ be the game board. Initially, place $M$ game pieces on $Q$ (no restriction on the number of pieces per position). There are $n$ types of legal moves: the $i$-th type removes $p_i$ pieces from position $(x_1, \ldots, x_n) \in Q$ (with $x_i \ge 1$) and places one piece at $(x_1, \ldots, x_i - 1, \ldots, x_n)$. Find the minimum value of $M$ such that no matter how the $M$ game pieces are initially placed, one can always perform a sequence of moves to get at least one piece at the origin $(0, 0, \ldots, 0)$.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_induzione|Induzione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** $p_1^{b_1} p_2^{b_2} \cdots p_n^{b_n}$
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Gioco multidimensionale con pezzi: trovare il numero minimo di partenze *

> Date le cifre integri positive $n$, $p_1, p_2, \ldots, p_n$ (ciascuno $p_i \ge 2$) e $b_1, b_2, \ldots, b_n$. Lasciate che il $Q = \{(x_1, x_2, \ldots, x_n) \in \mathbb{Z}_{\ge 0}^n \mid 0 \le x_i \le p_i^{b_i} - 1 \text{ for each } i\}$ sia la tabella di gioco. Inizialmente posizionare $M$ pezzi di gioco su $Q$ (senza restrizioni sul numero di pezzi per posizione). Esistono tipi di movimenti legali $n$: il tipo $i$-th rimuove i pezzi $p_i$ dalla posizione $(x_1, \ldots, x_n) \in Q$ (con $x_i \ge 1$) e colloca un pezzo a $(x_1, \ldots, x_i - 1, \ldots, x_n)$. Trovare il valore minimo di $M$ in modo tale che, indipendentemente dal modo in cui i pezzi di gioco $M$ sono inizialmente posizionati, si possa sempre eseguire una sequenza di mosse per ottenere almeno un pezzo all'origine $(0, 0, \ldots, 0)$.

**Risposta:** $p_1^{b_1} p_2^{b_2} \cdots p_n^{b_n}$
[[src_cn_ctst_2022__Q03]]
