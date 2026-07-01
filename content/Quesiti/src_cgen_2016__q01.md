---
title: Concours Général des Lycées 2016 — Matematica — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2016__Q01
parent: src_cgen_2016
competition: Concours Général des Lycées 2016 — Matematica
family: concours_generale
year: '2016'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  Sums of cubes: study of the sets S, S_d, S_i of integers expressible as sums
  of cubes of (distinct, distinct odd) positive integers, building arbitrarily
  long arithmetic progressions inside S.
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_algebra
methods:
  - method_congruenze
  - method_disuguaglianze
  - method_fattorizzazione
  - method_conteggio
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2016
  - livello/Concours-Général
  - topic/aritmetica
  - topic/algebra
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Sums of cubes: study of the sets S, S_d, S_i of integers expressible as sums of cubes of (distinct, distinct odd) positive integers, building arbitrarily long arithmetic progressions inside S.*

> Problem 1: Sums of cubes.
> 
> If $n$ is an integer, we call the cube of $n$ the integer $n^3$.
> 
> In this problem we consider:
> - $S$, the set of strictly positive integers that can be decomposed as a sum of cubes of strictly positive integers (the cubes not being necessarily distinct);
> - $S_d$, the set of strictly positive integers that can be decomposed as a sum of cubes of strictly positive distinct integers;
> - $S_i$, the set of strictly positive integers that can be decomposed as a sum of cubes of strictly positive distinct odd integers.
> 
> For example, $8$ and $190$ belong to $S$ since $8 = 2^3$ and $190 = 1^3 + 4^3 + 5^3$; $216$ and $1072$ belong to $S_d$ since $216 = 6^3$ and $1072 = 2^3 + 4^3 + 10^3$; $125$ and $2568$ belong to $S_i$ since $125 = 5^3$ and $2568 = 1^3 + 3^3 + 7^3 + 13^3$. The objective of the problem is to demonstrate that there exist sufficiently large arbitrarily long arithmetic progressions belonging to $S$.
> 
> \textbf{1.} Show that $208$ belongs to $S_d$.
> 
> \textbf{2. a.} Show that, for every integer $x$, we have $(2x+1)^3 \le 2(2x-1)^3$.
> 
> \textbf{b.} Let $k$ be an integer greater than or equal to $5$. Show, for every integer $p \ge k$, that
> $$(2p+1)^3 \le (2k-1)^3 + \sum_{j=k}^{p}(2j-1)^3,$$
> where we recall that $\sum_{j=k}^{p}(2j-1)^3$ denotes the sum $(2k-1)^3 + (2k+1)^3 + \cdots + (2p-1)^3$.
> 
> \textbf{3.} Show that there exist $288$ integers $x_1, \dots, x_{288}$ belonging to $S_i$ such that, for each $i$ in $\{1, \dots, 288\}$, $x_i \equiv i \pmod{288}$.
> 
> In the suite of the problem, we fix such integers $x_1, \dots, x_{288}$ such that $x_i \equiv i \pmod{288}$. We denote by $m$ the largest of these integers and by $r$ the smallest of the numbers $r \cdot u_i$ such that [partly illegible].
> $$m = \max(x_1, x_2, \dots, x_{288}).$$
> 
> We recall that $n$ reals $u_1, \dots, u_n$ are said to be in arithmetic progression of common difference $r$ if $u_{i+1} - u_i = r$ for every integer $i$ such that $1 \le i < n$.
> 
> \textbf{4.} Let $n$ be an integer such that $288 n \ge m$, and let $u_1, \dots, u_n$ be $n$ natural integers in arithmetic progression of common difference $288$. Show that every integer of the interval $[m + u_1, 288 m + u_1]$ can be written under the form $u_j + x_i$, with $1 \le i \le 288$ and $1 \le j \le n$.
> 
> \textbf{5.} We admit the relation, for every real $x$,
> $$(2x+12)^3 + (2x+4)^3 + (2x+2)^3 - (2x+10)^3 - (2x+6)^3 - (2x)^3 = 288.$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_disuguaglianze|Disuguaglianze]], [[method_fattorizzazione|Fattorizzazione]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1b8k3BWxLPQrKuemqOCqKmgPkVkBfx4Ea/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Summe di cubi: studio degli insiemi S, S_d, S_i di numeri interi espressi come somme di cubi di numeri interi positivi (distinti, unici distinti), costruendo progressioni aritmetiche arbitrariamente lunghe all'interno di S.*

> Problema 1: somma di cubetti.
> 
> Se $n$ è un numero intero, chiamiamo il cubo di $n$ il numero intero $n^3$.
> 
> In questo problema consideriamo: - $S$, l'insieme di enti enti strettamente positivi che possono essere decomposti come una somma di cubi di enti interi strettamente positivi (i cubetti non essendo necessariamente distinti); - $S_d$, l'insieme di enti enti enti strettamente positivi che possono essere decomposti come una somma di cubetti di enti interi strettamente positivi distinti; - $S_i$, l'insieme di enti enti enti strettamente positivi che possono essere decomposti come una somma di cubetti di enti unici unici strettamente positivi distinti.
> 
> Ad esempio, $8$ e $190$ appartengono a $S$ dal momento che $8 = 2^3$ e $190 = 1^3 + 4^3 + 5^3$; $216$ e $1072$ appartengono a $S_d$ dal momento che $216 = 6^3$ e $1072 = 2^3 + 4^3 + 10^3$; $125$ e $2568$ appartengono a $S_i$ dal momento che $125 = 5^3$ e $2568 = 1^3 + 3^3 + 7^3 + 13^3$. L'obiettivo del problema è dimostrare che esistono progressioni aritmetiche sufficientemente grandi e arbitrariamente lunghe appartenenti a $S$.
> 
> \textbf{1.} Mostra che $208$ appartiene a $S_d$.
> 
> - Sì, signore. a.} Mostra che per ogni numero intero $x$, abbiamo $(2x+1)^3 \le 2(2x-1)^3$.
> 
> \textbf{b.} Che $k$ sia un numero intero maggiore o uguale a $5$. Mostra, per ogni intero $p \ge k$, che $$(2p+1)^3 \le (2k-1)^3 + \sum_{j=k}^{p}(2j-1)^3,$$ dove ricordiamo che $\sum_{j=k}^{p}(2j-1)^3$ indica la somma $(2k-1)^3 + (2k+1)^3 + \cdots + (2p-1)^3$.
> 
> \textbf{3.} Indicare che esistono $288$ enti $x_1, \dots, x_{288}$ appartenenti a $S_i$ in modo tale che, per ogni $i$ in $\{1, \dots, 288\}$, $x_i \equiv i \pmod{288}$.
> 
> Nella suite del problema, risolviamo tali integri $x_1, \dots, x_{288}$ come $x_i \equiv i \pmod{288}$. Indichiamo con $m$ il più grande di questi interi e con $r$ il più piccolo dei numeri $r \cdot u_i$ in modo tale che [parzialmente illeggibile]. $$m = \max(x_1, x_2, \dots, x_{288}).$$
> 
> Ricordiamo che i valori $n$ reali $u_1, \dots, u_n$ si dice siano in progressione aritmetica della differenza comune $r$ se $u_{i+1} - u_i = r$ per ogni intero $i$ tale che $1 \le i < n$.
> 
> \textbf{4.} Che $n$ sia un intero tale che $288 n \ge m$, e che $u_1, \dots, u_n$ sia $n$ interi naturali nella progressione aritmetica della differenza comune $288$. Indicare che ogni numero intero dell'intervallo $[m + u_1, 288 m + u_1]$ può essere scritto sotto la forma $u_j + x_i$, con $1 \le i \le 288$ e $1 \le j \le n$.
> 
> \textbf{5.} Ammettiamo la relazione, per ogni reale $x$, $$(2x+12)^3 + (2x+4)^3 + (2x+2)^3 - (2x+10)^3 - (2x+6)^3 - (2x)^3 = 288.$$

[[src_cgen_2016__Q01]]
