---
title: >-
  Olimpíada Brasileira de Matemática 2024 — Nível Universitário — Fase x —
  Quesito 6
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2024_nu_fx__Q06
parent: src_obm_2024_nu_fx
competition: Olimpíada Brasileira de Matemática 2024 — Nível Universitário — Fase x
family: obm
year: '2024'
level: OBM Nível Universitário
country: Brasile
modalita: individuale
nivel: u
fase: x
quesito: '6'
summary: 'Irreducible fractions in [0,1] with denominator ≤ n; limit of ratio'
qa_score: '3'
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_telescoping
  - method_conteggio
  - method_estremalita
skills:
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_stima
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2024
  - livello/OBM-Nível-Universitário
  - nivel/u
  - fase/x
  - topic/aritmetica
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Irreducible fractions in [0,1] with denominator ≤ n; limit of ratio*

> For each positive integer $n$, enumerate in increasing order all irreducible fractions in the interval $[0,1]$ with denominator less than or equal to $n$:
> $$\frac{0}{1} = \frac{p_0}{q_0} < \frac{p_1}{q_1} < \cdots < \frac{p_n}{q_n} < \cdots < \frac{1}{1} = \frac{p_{M(n)}}{q_{M(n)}}.$$
> Let $k$ be a positive integer. Define, for each $n$ such that $M(n) \ge k-1$,
> $$f_k(n) = \min\left\{\sum_{j=0}^{k-1} q_{s+j}\,;\; 0 \le s \le M(n) - k + 1\right\}.$$
> Determine, for each $n$, $\lim_{n\to\infty} \dfrac{f_k(n)}{n}$.
> 
> *For example*, if $n=4$, the enumeration is
> $$\frac{0}{1} < \frac{1}{4} < \frac{1}{3} < \frac{1}{2} < \frac{2}{3} < \frac{3}{4} < \frac{1}{1},$$
> where $p_0=0,\ p_1=1,\ p_2=1,\ p_3=1,\ p_4=2,\ p_5=3,\ p_6=1$ and $q_0=1,\ q_1=4,\ q_2=3,\ q_3=2,\ q_4=3,\ q_5=4,\ q_6=1$. In this case, $f_1(4)=1$, $f_2(4)=5$, $f_3(4)=8$, $f_4(4)=10$, $f_5(4)=13$, $f_6(4)=17$ and $f_7(4)=18$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_telescoping|Telescoping]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_stima|Stima]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ASMMz2DYTBieu4G0G3yj2BJioNfgOgua/view)


<span class="qlang-split" data-lang="it"></span>


*frazioni irriducibili in [0,1] con denominatore ≤ n; limite di rapporto*

> Per ogni intero positivo $n$, enumere in ordine crescente tutte le frazioni irriducibili nell'intervallo $[0,1]$ con denominatore inferiore o uguale a $n$: $$\frac{0}{1} = \frac{p_0}{q_0} < \frac{p_1}{q_1} < \cdots < \frac{p_n}{q_n} < \cdots < \frac{1}{1} = \frac{p_{M(n)}}{q_{M(n)}}.$$ Si tratti di un intero positivo. Determinare, per ogni $n$ tale che $M(n) \ge k-1$, $$f_k(n) = \min\left\{\sum_{j=0}^{k-1} q_{s+j}\,;\; 0 \le s \le M(n) - k + 1\right\}.$$ Determinare, per ogni $n$, $\lim_{n\to\infty} \dfrac{f_k(n)}{n}$.
> 
> *Per esempio *, se $n=4$, l'elenco è $$\frac{0}{1} < \frac{1}{4} < \frac{1}{3} < \frac{1}{2} < \frac{2}{3} < \frac{3}{4} < \frac{1}{1},$$ dove $p_0=0,\ p_1=1,\ p_2=1,\ p_3=1,\ p_4=2,\ p_5=3,\ p_6=1$ e $q_0=1,\ q_1=4,\ q_2=3,\ q_3=2,\ q_4=3,\ q_5=4,\ q_6=1$. In questo caso, $f_1(4)=1$, $f_2(4)=5$, $f_3(4)=8$, $f_4(4)=10$, $f_5(4)=13$, $f_6(4)=17$ e $f_7(4)=18$.

[[src_obm_2024_nu_fx__Q06]]
