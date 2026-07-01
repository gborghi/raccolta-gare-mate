---
title: IMO 2019 (LX International Mathematical Olympiad) — Quesito 5
tipo: quesito
lang: it
quesito_id: quesito_src_imho_2019__Q05
parent: src_imho_2019
competition: IMO 2019 (LX International Mathematical Olympiad)
family: imo
year: '2019'
level: IMO
country: Italia
modalita: individuale
quesito: '5'
summary: 'Bank of Bath coins problem: show process terminates and find average L(C)=0'
qa_score: '5'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_invarianti
  - method_induzione
  - method_ricorsione
  - method_casework
skills:
  - skill_modellizzazione
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
  - skill_ragionamento_geometrico
  - skill_stima
tags:
  - kg/quesito
  - paese/italia
  - comp/imo
  - anno/2019
  - livello/IMO
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Bank of Bath coins problem: show process terminates and find average L(C)=0*

> The Bank of Bath issues coins with an $H$ on one side and a $T$ on the other. Harry has $n$ of these coins arranged in a line from left to right. He repeatedly performs the following operation: if there are exactly $k > 0$ coins showing $H$, then he turns over the $k^{\text{th}}$ coin from the left; otherwise, he stops. For example, if $n = 3$ the process starting with the configuration $THT$ would be $THT \to HHT \to HTT \to TTT$, which stops after three operations.
> 
> (a) Show that, for each initial configuration, Harry stops after a finite number of operations.
> 
> (b) For each initial configuration $C$, let $L(C)$ be the number of operations before Harry stops. For example, $L(THT) = 3$. Determine the average value of $L(C)$ over all $2^n$ possible initial configurations $C$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1JyHT55oZouRQ04YAx-a4_fyuMYOtPSWx/view)


<span class="qlang-split" data-lang="en"></span>


Bank of Bath coins problem: show process terminates and find average

> The Bank of Bath issues coins with a $H$ on one side and a $T$ on the other. Harry has $n$ of these coins arranged in a line from left to right. He repeatedly performs the following operation: if there are exactly $k > 0$ coins showing $H$, then he turns over the $k^{\text{th}}$ coin from the left; otherwise, he stops. For example, if $n = 3$ the process starting with the configuration $THT$ would be $THT \to HHT \to HTT \to TTT$, which stops after three operations.
> 
> (a) Show that, for each initial configuration, Harry stops after a finite number of operations.
> 
> (b) For each initial configuration $C$, let $L(C)$ be the number of operations before Harry stops. For example, $L(THT) = 3$. Determine the average value of $L(C)$ over all possible initial configurations $C$.

[[src_imho_2019__Q05]]
