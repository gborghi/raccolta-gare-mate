---
title: Concours Général des Lycées 2006 — Matematica — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2006__Q01
parent: src_cgen_2006
competition: Concours Général des Lycées 2006 — Matematica
family: concours_generale
year: '2006'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  Iterated digit-rearrangement map f_q on the decimal digits of an integer;
  periodicity, fixed points and divisibility criteria
qa_score: '4'
topics:
  - topic_aritmetica
methods:
  - method_congruenze
  - method_ricorsione
  - method_casework
skills:
  - skill_lettura_attenta
  - skill_manipolazione_algebrica
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2006
  - livello/Concours-Général
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Iterated digit-rearrangement map f_q on the decimal digits of an integer; periodicity, fixed points and divisibility criteria*

> If $n$ is a strictly positive natural number, write $\overline{a_i a_{i-1} \ldots a_1 a_0}$ for its decimal representation. Thus $n = 10^i a_i + 10^{i-1} a_{i-1} + \cdots + 10 a_1 + a_0$, where the digits $a_j$, $0 \le j \le i$, lie between $0$ and $9$, and $a_i \neq 0$.
> Denote by $q$ an integer between $1$ and $9$ inclusive, set $p = 10q - 1$ and consider the function $f_q$ which to the integer $n = \overline{a_i a_{i-1} \ldots a_1 a_0}$ associates the integer:
> $$f_q(n) = \overline{a_i a_{i-1} \ldots a_1} + q a_0 \text{ if } i \neq 0, \text{ then } f_q(n) = q a_0 \text{ if } i = 0.$$
> Finally, with the integer $q$ fixed, associate to every integer $n$ the sequence $(n_k)$ defined by the relations $n_0 = n$ and, for every natural number $k$, $n_{k+1} = f_q(n_k)$. For example, if we fix $q = 5$, the sequence associated to $4907$ is $4907, 525, 77, 42, 14, 21, 7, 35, 28, 42, 14, \ldots$
> 
> 1. Verify that $f_q(n) = \frac{n + p a_0}{10}$. Deduce that $f_q(p) = p$.
> 2. a. Show that, if $m > p$, then $f_q(m) < m$.
>    b. Deduce that for every integer $n$, there exists an integer $j$ such that $n_j \le p$.
> 3. a. Show that, if $m < p$, then $f_q(m) < p$.
>    b. Deduce that for every integer $n$, the sequence $(n_k)$ is periodic from a certain rank on, that is, there exist integers $k$ and $T$ ($T > 0$) such that $n_{j+T} = n_j$ for all $j \ge k$.
> 4. Establish that, for every integer $n$, $f_q(n)$ is congruent to $q \times n$ modulo $p$.
> 5. For which values of $q$ does the function $f_q$ have fixed points (that is, integers $m$ such that $f_q(m) = m$) other than $p$? What are these fixed points in that case?
> 6. Show that, for suitable choices of $q$, the study of the sequence $(n_k)$ associated to an integer $n$ provides divisibility criteria of $n$ by $9$, $19$, $29$, $13$, $49$ and $7$. State these criteria.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1g6KpfZ2CgV1vLC5RFzksxLovNhazAWfz/view)


<span class="qlang-split" data-lang="it"></span>


*Mappa di riorganizzazione dei numeri iterata f_q sui numeri decimali di un numero intero; periodicità, punti fissi e criteri di divisibilità*

> Se $n$ è un numero naturale strettamente positivo, scrivete $\overline{a_i a_{i-1} \ldots a_1 a_0}$ per la sua rappresentazione decimale. Quindi $n = 10^i a_i + 10^{i-1} a_{i-1} + \cdots + 10 a_1 + a_0$, dove le cifre $a_j$, $0 \le j \le i$, si trovano tra $0$ e $9$, e $a_i \neq 0$. Indicare con $q$ un numero intero tra $1$ e $9$ inclusivo, impostare $p = 10q - 1$ e considerare la funzione $f_q$ che associa al numero intero $n = \overline{a_i a_{i-1} \ldots a_1 a_0}$ il numero intero: $$f_q(n) = \overline{a_i a_{i-1} \ldots a_1} + q a_0 \text{ if } i \neq 0, \text{ then } f_q(n) = q a_0 \text{ if } i = 0.$$ Infine, con il numero intero $q$ fisso, associare a ogni numero intero $n$ la sequenza $(n_k)$ definita dalle relazioni $n_0 = n$ e, per ogni numero naturale $k$, $n_{k+1} = f_q(n_k)$. Ad esempio, se si fissa $q = 5$, la sequenza associata a $4907$ è $4907, 525, 77, 42, 14, 21, 7, 35, 28, 42, 14, \ldots$
> 
> 1. Verificare che < MSK0/>. Riduzione di < MSK1/>. 2. a. Indicare che, se $m > p$, allora $f_q(m) < m$. b. Deduci che per ogni numero intero $n$, esiste un numero intero $j$ tale che $n_j \le p$. 3. a. Indicare che, se $m < p$, allora $f_q(m) < p$. b. Deduci che per ogni numero intero $n$, la sequenza $(n_k)$ è periodica da un certo rango su, cioè esistono numeri interi $k$ e $T$ ($T > 0$) tali che $n_{j+T} = n_j$ per tutti $j \ge k$. 4. Stabilire che, per ogni numero intero $n$, $f_q(n)$ è congruente a $q \times n$ modulo $p$. 5. Per quali valori di $q$ la funzione $f_q$ ha punti fissi (cioè enti $m$ tali che $f_q(m) = m$) diversi da $p$? Quali sono questi punti fissi in quel caso? 6. Indicare che, per le scelte appropriate di $q$, lo studio della sequenza $(n_k)$ associata a un numero intero $n$ fornisce criteri di divisibilità di $n$ da $9$, $19$, $29$, $13$, $49$ e $7$. Indicare questi criteri.

[[src_cgen_2006__Q01]]
