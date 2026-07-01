---
title: China Mathematical Olympiad 2010 — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_cn_cmo_2010__Q05
parent: src_cn_cmo_2010
competition: China Mathematical Olympiad 2010
family: cmo
year: '2010'
level: China Mathematical Olympiad
country: Cina
modalita: individuale
quesito: '5'
summary: 'Card piles at n+1 positions, two operations, prove n^2+3n+1 cards suffice'
qa_score: '4'
topics:
  - topic_combinatoria
methods:
  - method_invarianti
  - method_induzione
  - method_estremalita
skills:
  - skill_modellizzazione
  - skill_ragionamento_geometrico
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/cina
  - comp/cmo
  - anno/2010
  - livello/China-Mathematical-Olympiad
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Card piles at n+1 positions, two operations, prove n^2+3n+1 cards suffice*

> We operate on piles of cards placed at $n+1$ positions $A_1, A_2, \ldots, A_n$ ($n \ge 3$) and $O$. In one operation, we can do either of the following:
> (1) If there are at least three cards at some position $A_i$, we may take three cards from $A_i$ and place one card each at $A_{i-1}$, $A_i$, and $O$ (indices mod $n$, so $A_{n+1} = A_1$);
> (2) If there are at least $n$ cards at $O$, we may take $n$ cards from $O$ and place one card at each of $A_1, A_2, \ldots, A_n$.
> Prove that if the total number of cards is at least $n^2 + 3n + 1$, we can perform some sequence of operations such that there are at least $n+1$ cards at each of the positions $A_1, A_2, \ldots, A_n$. (Posed by Qu Zhenhua)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_induzione|Induzione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1WZGXm4nA5dcZd9asSbnzGZkeWDSjqbF6/view)


<span class="qlang-split" data-lang="it"></span>


< MSK0/>Le pile di carte in posizioni n+1, due operazioni, dimostrano che n^2+3n+1 carte sono sufficienti< MSK1/>

> Operamo su pile di carte posizionate alle posizioni $n+1$ $A_1, A_2, \ldots, A_n$ ($n \ge 3$) e $O$. In una operazione, possiamo fare una delle seguenti: (1) Se ci sono almeno tre carte in qualche posizione $A_i$, possiamo prendere tre carte da $A_i$ e posizionare una carta ciascuno a $A_{i-1}$, $A_i$, e $O$ (indici mod $n$, quindi $A_{n+1} = A_1$); (2) Se ci sono almeno $n$ carte a $O$, possiamo prendere $n$ carte da $O$ e posizionare una carta a ciascuno di $A_1, A_2, \ldots, A_n$. Prova che se il numero totale delle carte è almeno $n^2 + 3n + 1$, possiamo eseguire una sequenza di operazioni in modo che ci siano almeno $n+1$ carte in ciascuna delle posizioni $A_1, A_2, \ldots, A_n$. (Posato da Qu Zhenhua)

[[src_cn_cmo_2010__Q05]]
