---
title: >-
  Olimpíada Brasileira de Matemática 2007 — Nível Universitário — Fase 1 —
  Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2007_nu_f1__Q01
parent: src_obm_2007_nu_f1
competition: Olimpíada Brasileira de Matemática 2007 — Nível Universitário — Fase 1
family: obm
year: '2007'
level: OBM Nível Universitário
country: Brasile
modalita: individuale
nivel: u
fase: '1'
quesito: '1'
summary: Probability of ever reaching exactly n points in a coin game; closed form
qa_score: '2'
answer: p_n = 2/3 + (1/3)(-1/2)^n
topics:
  - topic_probabilita
methods:
  - method_ricorsione
skills:
  - skill_modellizzazione
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2007
  - livello/OBM-Nível-Universitário
  - nivel/u
  - fase/1
  - topic/probabilita
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Probability of ever reaching exactly n points in a coin game; closed form*

> A fair coin is tossed repeatedly: each heads adds one point and a tails stops the accumulation. Let $p_n$ be the probability of, at some moment, having exactly $n$ points. Clearly $p_0 = 1$ and $p_1 = \tfrac12$. The only way never to reach $n$ points is to reach $n-1$ points and then get tails, so $1 - p_n = \dfrac{p_{n-1}}{2}$. Determine $p_n$ for every nonnegative integer $n$. (Statement reconstructed from the official solution; the closed form obtained is $p_n = \dfrac{2}{3} + \dfrac{1}{3}\left(-\dfrac12\right)^n$.)

**Topic:** [[topic_probabilita|Probabilità]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** $p_n = 2/3 + (1/3)(-1/2)^n$
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lOJCEY5_AKOF2CG2hkgyD8fhqvhk5Tjs/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Probabilità di raggiungere mai esattamente n punti in una partita di monete; forma chiusa*

> Una moneta giusta viene lanciata ripetutamente: ogni testa aggiunge un punto e una coda ferma l'accumulo. Che $p_n$ sia la probabilità di avere, in un certo momento, esattamente $n$ punti. Certamente $p_0 = 1$ e $p_1 = \tfrac12$. L'unico modo per non raggiungere mai i punti $n$ è raggiungere i punti $n-1$ e poi ottenere le code, quindi $1 - p_n = \dfrac{p_{n-1}}{2}$. Determinare $p_n$ per ogni numero intero non negativo $n$. (Dichiarazione ricostruita dalla soluzione ufficiale; il modulo chiuso ottenuto è $p_n = \dfrac{2}{3} + \dfrac{1}{3}\left(-\dfrac12\right)^n$.)

**Risposta:** p_n = 2/3 + (1/3)(-1/2)^n
[[src_obm_2007_nu_f1__Q01]]
