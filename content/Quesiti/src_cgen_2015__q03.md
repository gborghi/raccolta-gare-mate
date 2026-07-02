---
title: Concours Général des Lycées 2015 — Matematica — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2015__Q03
parent: src_cgen_2015
competition: Concours Général des Lycées 2015 — Matematica
family: concours_generale
year: '2015'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Predictive means: sequences of type A where each term equals the average of
  the next n terms; show such sequences cannot be bounded above or below, and
  decide if a non-constant bounded one exists.
qa_score: '3'
topics:
  - topic_algebra
  - topic_insiemi_funzioni
  - topic_disuguaglianze
methods:
  - method_disuguaglianze
  - method_induzione
  - method_estremalita
skills:
  - skill_manipolazione_algebrica
  - skill_astrazione
  - skill_stima
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2015
  - livello/Concours-Général
  - topic/algebra
  - topic/insiemi_funzioni
  - topic/disuguaglianze
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Predictive means: sequences of type A where each term equals the average of the next n terms; show such sequences cannot be bounded above or below, and decide if a non-constant bounded one exists.*

> Problem 3: Predictive means.
> 
> In this problem, we consider sequences $(u_n)_{n \in \mathbb{N}^*} = (u_1, u_2, \ldots)$ with real values indexed by the nonzero natural numbers. We say that $u_n$ is the predictive mean of the $n$ following terms; the sequence $(u_n)_{n \in \mathbb{N}^*}$ is said to be of type $\mathcal{A}$ if, for every $n \in \mathbb{N}^*$:
> $$u_n = \frac{u_{n+1} + u_{n+2} + \cdots + u_{2n-1} + u_{2n}}{n}.$$
> 
> 1. Let $(u_n)_{n \in \mathbb{N}^*}$ be a sequence of type $\mathcal{A}$ and let $C$ be a real number. Is the sequence $(u_n - C)_{n \in \mathbb{N}^*}$ of type $\mathcal{A}$?
> 
> 2. Show that every constant sequence is of type $\mathcal{A}$.
> 
> 3. Let $(u_n)_{n \in \mathbb{N}^*}$ be a sequence of type $\mathcal{A}$. Suppose there exist reals $a, b, c$ such that $u_n = an^2 + bn + c$ for every $n \in \mathbb{N}^*$. Show that $a = b = 0$.
> 
> 4. The aim of this question 4 is to show that no sequence of type $\mathcal{A}$ is bounded above or bounded below, except constant ones.
> In this question, suppose $(u_n)_{n \in \mathbb{N}^*}$ is a sequence of type $\mathcal{A}$ with non-negative values, and consider an integer $r \in \mathbb{N}^*$.
>    a. Let $p$ be an integer such that $p > r$. Show that there exist nonzero natural numbers $q$ and $q'$ such that $q < p \le q'$ and $2q\, u_{q'} \le u_r \le u_q$. Deduce that $u_p \le 3 u_r$.
>    b. For all $p \in \mathbb{N}^*$, show that $u_p \le 3 u_r$.
> Deduce, from questions a, b, c and d, that the sequence $(u_n)_{n \in \mathbb{N}^*}$ of type $\mathcal{A}$ is bounded above.
>    c. Let $D$ be a strictly positive real and let $p \in \mathbb{N}^*$. Show that if $u_p > D$ is not a lower bound (minorant) of the sequence, then so is the appropriate condition.
>    d. Deduce that the sequence $(u_n)_{n \in \mathbb{N}^*}$ is not bounded below.
>    e. Conclude.
> 
> 5. Does there exist a non-constant bounded sequence of type $\mathcal{A}$?

**Topic:** [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_induzione|Induzione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1seWyepAzmZaY6qrhHguoD9BLLbe2NGeK/view)


<span class="qlang-split" data-lang="it"></span>


*Medi predittivi: sequenze di tipo A in cui ogni termine è uguale alla media dei prossimi n termini; mostrare che tali sequenze non possono essere delimitate sopra o sotto, e decidere se esiste una sequenza delimitata non costante.*

> Problema 3: mezzi predittivi.
> 
> In questo problema, consideriamo le sequenze $(u_n)_{n \in \mathbb{N}^*} = (u_1, u_2, \ldots)$ con valori reali indicizzati dai numeri naturali non zero. Diciamo che $u_n$ è la media predittiva dei $n$ seguenti termini; la sequenza $(u_n)_{n \in \mathbb{N}^*}$ si dice sia di tipo $\mathcal{A}$ se, per ogni $n \in \mathbb{N}^*$: $$u_n = \frac{u_{n+1} + u_{n+2} + \cdots + u_{2n-1} + u_{2n}}{n}.$$
> 
> 1. Che $(u_n)_{n \in \mathbb{N}^*}$ sia una sequenza di tipo $\mathcal{A}$ e che $C$ sia un numero reale. La sequenza $(u_n - C)_{n \in \mathbb{N}^*}$ è di tipo $\mathcal{A}$?
> 
> 2. Indicare che ogni sequenza costante è di tipo $\mathcal{A}$.
> 
> 3. La sequenza $(u_n)_{n \in \mathbb{N}^*}$ deve essere di tipo $\mathcal{A}$. Supponiamo che esistano valori $a, b, c$ tali da $u_n = an^2 + bn + c$ per ogni $n \in \mathbb{N}^*$. Mostra che $a = b = 0$.
> 
> 4. L'obiettivo della presente domanda 4 è di dimostrare che nessuna sequenza del tipo $\mathcal{A}$ è limitata sopra o sotto, tranne quelle costanti. In questa domanda, supponiamo che $(u_n)_{n \in \mathbb{N}^*}$ sia una sequenza di tipo $\mathcal{A}$ con valori non negativi, e consideriamo un intero $r \in \mathbb{N}^*$. a. $p$ sia un numero intero tale che $p > r$. Mostrare che esistono numeri naturali non zero $q$ e $q'$ come $q < p \le q'$ e $2q\, u_{q'} \le u_r \le u_q$. Riduzione di $u_p \le 3 u_r$. b. Per tutti $p \in \mathbb{N}^*$, indicare che $u_p \le 3 u_r$. Dalle domande a, b, c e d si deduce che la sequenza $(u_n)_{n \in \mathbb{N}^*}$ del tipo $\mathcal{A}$ è dilimitata sopra. c. Che $D$ sia un reale rigorosamente positivo e che $p \in \mathbb{N}^*$. Indicare che se $u_p > D$ non è un limite inferiore (minorante) della sequenza, così è la condizione appropriata. d. Deduzione che la sequenza $(u_n)_{n \in \mathbb{N}^*}$ non sia limitata in basso. e. Conclusione.
> 
> 5. Esiste una sequenza limitata non costante del tipo $\mathcal{A}$?

[[src_cgen_2015__Q03]]
