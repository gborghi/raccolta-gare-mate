---
title: Japan IMO Selection Camp 2019 — Selection Camp — Quesito 7
tipo: quesito
lang: en
quesito_id: quesito_src_selection_camp_2019__Q07
parent: src_selection_camp_2019
competition: Japan IMO Selection Camp 2019 — Selection Camp
family: jcamp
year: '2019'
level: CAMP Selection Camp
country: Giappone
modalita: individuale
quesito: '7'
summary: Min moves to gather n stones onto cell n via right shifts of up to k
qa_score: '4'
topics:
  - topic_combinatoria
methods:
  - method_invarianti
  - method_estremalita
  - method_conteggio
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/giappone
  - comp/jcamp
  - anno/2019
  - livello/CAMP-Selection-Camp
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Min moves to gather n stones onto cell n via right shifts of up to k*

> Let $n$ be a positive integer. There is a board of $n+1$ cells arranged in a single row, numbered $0, 1, \ldots, n$ from left to right. Initially $n$ stones are placed on cell $0$, and the other cells have no stones. Consider repeating the following operation. Choose a cell containing at least one stone and one stone on it; letting $k$ be the number of stones on that cell, move that stone to the right by at least $1$ and at most $k$ cells. Prove that, in order to reach the position in which $n$ stones are placed on cell $n$, the operation must be performed at least
> $$\left\lceil \frac{n}{1} \right\rceil + \left\lceil \frac{n}{2} \right\rceil + \cdots + \left\lceil \frac{n}{n} \right\rceil$$
> times. (Here $\lceil r \rceil$ denotes the smallest integer not less than the real number $r$.)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1yeiIMZ2Ofh-F3-B-ZmqmxKicu21B10UQ/view)


<span class="qlang-split" data-lang="it"></span>


*Min si muove per raccogliere n pietre sulla cella n tramite spostamenti a destra fino a k*

> $n$ sia un numero intero positivo. C'è una tabella di celle $n+1$ disposte in una singola riga, numerata $0, 1, \ldots, n$ da sinistra a destra. Inizialmente le pietre $n$ vengono posizionate sulla cella $0$, e le altre celle non hanno pietre. Considerate di ripetere la seguente operazione. Selezionare una cella contenente almeno una pietra e una pietra su di essa; lasciando $k$ il numero di pietre su quella cella, spostare quella pietra a destra almeno $1$ e al massimo $k$ cellule. Prova che, per raggiungere la posizione in cui le pietre $n$ sono collocate sulla cella $n$, l'operazione deve essere eseguita almeno $$\left\lceil \frac{n}{1} \right\rceil + \left\lceil \frac{n}{2} \right\rceil + \cdots + \left\lceil \frac{n}{n} \right\rceil$$ volte. (Qui $\lceil r \rceil$ indica il numero intero più piccolo non inferiore al numero reale $r$.)

[[src_selection_camp_2019__Q07]]
