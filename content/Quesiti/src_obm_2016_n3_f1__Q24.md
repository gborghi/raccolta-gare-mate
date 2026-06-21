---
title: Olimpíada Brasileira de Matemática 2016 — Nível 3 — Fase 1 — Quesito 24
tipo: quesito
quesito_id: quesito_src_obm_2016_n3_f1__Q24
parent: src_obm_2016_n3_f1
competition: Olimpíada Brasileira de Matemática 2016 — Nível 3 — Fase 1
family: obm
year: '2016'
level: OBM Nível 3
country: Brasile
modalita: individuale
nivel: '3'
fase: '1'
quesito: '24'
summary: >-
  Showing a sequence of 2016 positive integers with a sum/product property has
  at least 2006 ones
qa_score: '3'
answer: C
topics:
  - topic_algebra
  - topic_disuguaglianze
methods:
  - method_estremalita
  - method_disuguaglianze
skills:
  - skill_manipolazione_algebrica
  - skill_stima
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2016
  - livello/OBM-Nível-3
  - nivel/3
  - fase/1
  - topic/algebra
  - topic/disuguaglianze
  - gara/individuale
---

*Showing a sequence of 2016 positive integers with a sum/product property has at least 2006 ones*

> Consider $2016$ positive integers with $n=p_1^{a_1}\cdots p_k^{a_k}$ (the factorization framework). A construction with $2006$ numbers equal to $1$ and ten numbers equal to $2$ gives sum $2006+10\cdot 2=2026$ and product $2^{10}=1024$, so sum exceeds product. One proves there must be at least $2006$ numbers equal to $1$: ordering $x_1\le x_2\le\dots\le x_{2016}$, if fewer than $2006$ were equal to $1$ one obtains $k+(2016-k)x_{2016}\ge 2^{2016-k}x_{2016}$, leading to $2^{2015-k}+k-2016>0$ and then $2^{2016-k}+k\le 4032$; for $k\le 2004$, $2^{2016-k}\ge 2^{12}=4096$ is absurd, and for $k=2005$, $2^{11}=2048$ also gives a contradiction ($4043\le 4032$ false). Hence there are at least $2006$ numbers equal to $1$. Determine the answer. [Answer key value corresponds to option C.]

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** apri PDF
