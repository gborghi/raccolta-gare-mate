---
title: Olimpíada Brasileira de Matemática 2024 — Nível 1 — Fase x — Quesito 4
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2024_n1_fx__Q04
parent: src_obm_2024_n1_fx
competition: Olimpíada Brasileira de Matemática 2024 — Nível 1 — Fase x
family: obm
year: '2024'
level: OBM Nível 1
country: Brasile
modalita: individuale
nivel: '1'
fase: x
quesito: '4'
summary: >-
  Sequence built by repeatedly replacing largest prime factor; properties and
  initial term
qa_score: '3'
topics:
  - topic_aritmetica
  - topic_algebra
methods:
  - method_fattorizzazione
  - method_congruenze
  - method_ricorsione
skills:
  - skill_riconoscimento_pattern
  - skill_manipolazione_algebrica
  - skill_ragionamento_geometrico
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2024
  - livello/OBM-Nível-1
  - nivel/1
  - fase/x
  - topic/aritmetica
  - topic/algebra
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Sequence built by repeatedly replacing largest prime factor; properties and initial term*

> Consider a sequence whose first term is a positive integer $N > 1$. Consider the prime factorization of $N$ into primes. If $N$ is a power of 2, the sequence consists of a single term: $N$. Otherwise, the second term of the sequence is obtained by replacing the largest prime factor $p$ of $N$ by $p + 1$ in the factorization. If the resulting number is not a power of 2, repeat the same process with it: replace the largest prime factor by its value plus 1. If the resulting number is a power of 2, the numerical sequence ends. And so on successively.
> 
> For example, if the first term of the sequence is $N = 300 = 2^2 \cdot 3 \cdot 5^2$, since the largest prime factor is $p = 5$, the second term is $2^2 \cdot 3 \cdot (5+1)^2 = 2^2 \cdot 3 \cdot 6^2 = 2^4 \cdot 3^3$. Repeating the process, the largest prime factor is now $p = 3$, so the third term is $2^4 \cdot (3+1)^3 = 2^4 \cdot 4^3 = 2^4 \cdot 2^6 = 2^{10}$. Since $2^{10}$ is a power of 2, the sequence has 3 terms: $2^2 \cdot 3 \cdot 5^2$, $2^4 \cdot 3^3$, $2^{10}$.
> 
> a) What are the terms of the sequence when $N = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 \cdot 17 \cdot 19 \cdot 23$?
> 
> b) Show that if a prime $p$ leaves remainder 1 when divided by 3, then $\frac{p+1}{3}$ is a positive integer that is also divisible by 3.
> 
> c) Find an initial value $N$ less than $1{,}000{,}000$ (one million) such that the sequence starting from $N$ has exactly 10 terms.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1SMFA1YxpKz5Gw3k7ra45Thbg-GPJnX_8/view)


<span class="qlang-split" data-lang="it"></span>


*Sequenza costruita sostituendo ripetutamente il più grande fattore primo; proprietà e termine iniziale*

> Considera una sequenza il cui primo termine è un intero positivo $N > 1$. Considera la fattorizzazione primaria di $N$ in numeri primi. Se $N$ è una potenza di 2, la sequenza è composta da un singolo termine: $N$. In caso contrario, il secondo termine della sequenza viene ottenuto sostituendo il più grande fattore primo $p$ di $N$ con $p + 1$ nella fattorizzazione. Se il numero risultante non è una potenza di 2, ripetere lo stesso processo con esso: sostituire il fattore primo più grande con il suo valore più 1. Se il numero risultante è una potenza di 2, la sequenza numerica termina. E così via.
> 
> Ad esempio, se il primo termine della sequenza è $N = 300 = 2^2 \cdot 3 \cdot 5^2$, dal momento che il fattore primo più grande è $p = 5$, il secondo termine è $2^2 \cdot 3 \cdot (5+1)^2 = 2^2 \cdot 3 \cdot 6^2 = 2^4 \cdot 3^3$. Ripetendo il processo, il fattore primo più grande è ora $p = 3$, quindi il terzo termine è $2^4 \cdot (3+1)^3 = 2^4 \cdot 4^3 = 2^4 \cdot 2^6 = 2^{10}$. Poiché $2^{10}$ è una potenza di 2, la sequenza ha 3 termini: $2^2 \cdot 3 \cdot 5^2$, $2^4 \cdot 3^3$, $2^{10}$.
> 
> a) Quali sono i termini della sequenza quando < MSK0/>?
> 
> b) Mostrare che se un primo $p$ lascia il rimanente 1 quando diviso per 3, allora $\frac{p+1}{3}$ è un intero positivo che è anche divisibile per 3.
> 
> c) Trovare un valore iniziale $N$ inferiore a $1{,}000{,}000$ (un milione) tale che la sequenza a partire da $N$ abbia esattamente 10 termini.

[[src_obm_2024_n1_fx__Q04]]
