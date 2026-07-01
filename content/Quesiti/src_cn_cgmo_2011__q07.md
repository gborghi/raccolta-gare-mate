---
title: China Girls' Mathematical Olympiad 2011 — Quesito 7
tipo: quesito
lang: en
quesito_id: quesito_src_cn_cgmo_2011__Q07
parent: src_cn_cgmo_2011
competition: China Girls' Mathematical Olympiad 2011
family: cgmo
year: '2011'
level: China Girls' Mathematical Olympiad
country: Cina
modalita: individuale
quesito: '7'
summary: Prove balls-in-boxes operations always yield one ball per box
qa_score: '5'
topics:
  - topic_combinatoria
methods:
  - method_invarianti
  - method_induzione
  - method_ricorsione
skills:
  - skill_astrazione
  - skill_modellizzazione
  - skill_ragionamento_geometrico
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/cina
  - comp/cgmo
  - anno/2011
  - livello/China-Girls'-Mathematical-Olympiad
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Prove balls-in-boxes operations always yield one ball per box*

> Suppose $n$ small balls have been placed into $n$ numbered boxes $B_1, B_2, \ldots, B_n$. Each time we can select a box $B_k$, and do the following operations:
> (1) If $k = 1$ and there is at least one ball in $B_1$, move one ball from $B_1$ into $B_2$.
> (2) If $k = n$ and there is at least one ball in $B_n$, move one ball from $B_n$ into $B_{n-1}$.
> (3) If $2 \le k \le n-1$ and there are at least two balls in $B_k$, move one ball from $B_k$ into $B_{k-1}$, and one ball into $B_{k+1}$.
> Prove the following: no matter how the balls are distributed among the boxes originally, it is always realizable to let each box contain exactly one ball by finite operations. (posed by Wang Xinmao)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1cjmD7lTT4vb3nB3ylcVCHeHucUE2rNI0/view)


<span class="qlang-split" data-lang="it"></span>


*Prove che le operazioni di palle in scatole producono sempre una palla per scatole*

> Supponiamo che le piccole palle $n$ siano state inserite nelle scatole $n$ numerate $B_1, B_2, \ldots, B_n$. Ogni volta possiamo selezionare una casella $B_k$ e eseguire le seguenti operazioni: (1) Se $k = 1$ e c'è almeno una palla in $B_1$, spostare una palla da $B_1$ a $B_2$. (2) Se $k = n$ e c'è almeno una palla in $B_n$, spostare una palla da $B_n$ a $B_{n-1}$. (3) Se $2 \le k \le n-1$ e ci sono almeno due palle in $B_k$, spostare una palla da $B_k$ a $B_{k-1}$ e una palla a $B_{k+1}$. Prova quanto segue: non importa come le palle siano distribuite tra le scatole originariamente, è sempre possibile lasciare che ciascuna scatola contenga esattamente una palla con operazioni finite. (Posizionato da Wang Xinmao)

[[src_cn_cgmo_2011__Q07]]
