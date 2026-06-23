---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 3
tipo: quesito
quesito_id: quesito_src_tfjm_2021__Q03
parent: src_tfjm_2021
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '3'
summary: >-
  Single pizzaiolo schedules n pizzas (one at a time) to be ready near time 0;
  minimize total weighted earliness/lateness penalty
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_estremalita
  - method_casework
  - method_disuguaglianze
  - method_telescoping
skills:
  - skill_modellizzazione
  - skill_stima
  - skill_manipolazione_algebrica
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2021
  - livello/TFJM²
  - topic/combinatoria
  - topic/algebra
  - gara/squadre
  - qa/da-verificare
---

*Single pizzaiolo schedules n pizzas (one at a time) to be ready near time 0; minimize total weighted earliness/lateness penalty*

> Perrine has called upon Yohann, a seasoned pizzaiolo, to prepare pizzas for the tournament.
> 
> Perrine wishes that $n \ge 1$ pizzas be ready as close as possible to the end of the day, date $0$. Each pizza $i \in \{1,2,\ldots,n\}$ has a specific preparation time $d_i \in \mathbb{R}_+^*$ and a priority $p_i \in \mathbb{R}_+^*$. Yohann can begin to prepare the pizzas from a date $-d$ where $d \in \mathbb{R}_+^*$. However, he can prepare only one pizza at a time, and cannot prepare several at once (no pause).
> 
> The goal of the pizzas being to be ready exactly at date $0$, Yohann seeks to minimize the total penalty, calculated as follows:
> - For a pizza $i \in \{1,2,\ldots,n\}$ that is late, the penalty is the duration of the delay multiplied by $p_i$.
> - For a pizza $i \in \{1,2,\ldots,n\}$ that is early, the penalty is the duration of the advance multiplied by $p_i$.
> 
> Figure 2 presents a possible planning of preparation for Yohann with $d=4$ and $4$ pizzas of respective preparation durations $1,2,3,2,1$ and respective priorities $10,20,30,40$. The total penalty of Yohann for this organization is $10\times 3 + 20\times 2 + 30\times 1 + 40\times 2.5 = 200$.
> 
> **(1)** Suppose $d=0$. What minimum penalty can Yohann obtain? One then supposes for the rest that $d>0$.
> 
> **(2)** What is the minimum penalty that Yohann can obtain when:
> - (a) for all $i \in \{1,2,\ldots,n\}$, $d_i=1$ and $p_i=1$?
> - (b) for all $i \in \{1,2,\ldots,n\}$, $d_i=1$?
> - (c) for all $i \in \{1,2,\ldots,n\}$, $p_i=1$?
> 
> **(3)** Let $0 < d_0 \le d$ and $0 < q < \frac{1}{2}$. What is the minimum penalty that Yohann can obtain when:
> - (a) for all $i \in \{1,2,\ldots,n\}$, $d_i=\frac{d_0}{2^i}$ and $p_i=q^i$?
> - (b) for all $i \in \{1,2,\ldots,n\}$, $d_i=\frac{d_0}{2^i}$ and $p_i=\frac{1}{2^i}$?
> - (c) for all $i \in \{1,2,\ldots,n\}$, $d_i=i$ and $p_i=1$?
> 
> **(4)** Suppose Yohann has the time to prepare all the pizzas before the date $-d$ (that is, $d_1+d_2+\cdots+d_n \le d$). What is the minimum penalty that Yohann can obtain when:
> - (a) for all $i \in \{1,2,\ldots,n\}$, $d_i=1$?
> - (b) for all $i \in \{1,2,\ldots,n\}$, $p_i=1$?
> 
> **(5)** In this whole question, Yohann potentially has an infinite number of pizzas, but he prepares only the first $n$. Suppose that, whatever the number $n$ of pizzas he prepares, $d_1+d_2+\cdots+d_n \le d$, and that the penalties decrease, with $p_i$ a decreasing function $g:\mathbb{N}\to\mathbb{R}_+^*$. Estimate as precisely as possible the minimum penalty that Yohann can guarantee himself as a function of $n$. What happens for other decreasing functions $g:\mathbb{N}\to\mathbb{R}_+^*$?
> 
> **(6)** Revisit questions (2) and (4) in the case where there are $m$ pizzaiolos.
> 
> **(7)** Propose and explore other research directions.

![[src_tfjm_2021__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_disuguaglianze|Disuguaglianze]], [[method_telescoping|Telescoping]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
