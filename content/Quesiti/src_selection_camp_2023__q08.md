---
title: Japan IMO Selection Camp 2023 — Selection Camp — Quesito 8
tipo: quesito
lang: en
quesito_id: quesito_src_selection_camp_2023__Q08
parent: src_selection_camp_2023
competition: Japan IMO Selection Camp 2023 — Selection Camp
family: jcamp
year: '2023'
level: CAMP Selection Camp
country: Giappone
modalita: individuale
quesito: '8'
summary: 'Blackboard mod-p game: largest x for which B can block A'
qa_score: '4'
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_congruenze
  - method_casework
  - method_estremalita
skills:
  - skill_astrazione
  - skill_casework_accurato
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/giappone
  - comp/jcamp
  - anno/2023
  - livello/CAMP-Selection-Camp
  - topic/aritmetica
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Blackboard mod-p game: largest x for which B can block A*

> Players A and B play a game using a blackboard. Initially a positive real number $x$ is fixed.
> 
> First, A chooses a prime $p \ge 7$. Next, B chooses real numbers $r_1, r_2 \ge 0$. Then A chooses integers $s, t$ satisfying $r_1 < s < r_1 + xp$ and $r_2 < t < r_2 + xp$, and writes on the blackboard $0, s, t, st$, each reduced modulo $p$, in this order. After that, A repeatedly performs, as many times as desired, any one of the following three operations:
> 
> - Fix an integer $m$ with $1 \le m \le p-1$; replace each of the four numbers on the blackboard by that number plus $m$, reduced modulo $p$.
> - Fix an integer $n$ with $2 \le n \le p-1$; replace each of the four numbers on the blackboard by that number times $n$, reduced modulo $p$.
> - Replace each of the four numbers on the blackboard by its $(p-2)$-th power, reduced modulo $p$. However, this operation may not be performed when at least one of the four numbers is $0$.
> 
> A's goal is to make the numbers on the blackboard become $0, 2, 3, 6$ in order. Note that if there do not exist integers $s, t$ satisfying $r_1 < s < r_1 + xp$ and $r_2 < t < r_2 + xp$, then A is considered unable to achieve the goal.
> 
> Find the largest possible value of $x$ for which B can always prevent A from achieving the goal, regardless of A's actions.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<span class="qlang-split" data-lang="it"></span>


*Gioco mod-p da tavolo nero: più grande x per il quale B può bloccare A*

> I giocatori A e B giocano con una lavagna. Inizialmente viene fissato un numero reale positivo $x$.
> 
> In primo luogo, A sceglie un primo $p \ge 7$. Successivamente, B sceglie i numeri reali $r_1, r_2 \ge 0$. Poi A sceglie gli integri $s, t$ soddisfa $r_1 < s < r_1 + xp$ e $r_2 < t < r_2 + xp$, e scrive sulla lavagna $0, s, t, st$, ciascun modulo ridotto $p$, in questo ordine. Dopo di che, A esegue ripetutamente, quante volte si desidera, una delle seguenti tre operazioni:
> 
> - Fixare un numero intero $m$ con $1 \le m \le p-1$; sostituire ciascuno dei quattro numeri della lavagna con quel numero più $m$, modulo ridotto $p$. - Fixare un numero intero $n$ con $2 \le n \le p-1$; sostituire ciascuno dei quattro numeri sulla lavagna con quel numero volte $n$, modulo ridotto $p$. - sostituire ciascuno dei quattro numeri della lavagna con la sua potenza < MSK8/>-th, modulo ridotto < MSK9/>. Tuttavia, questa operazione non può essere eseguita quando almeno uno dei quattro numeri è $0$.
> 
> L'obiettivo di A è rendere i numeri sulla lavagna $0, 2, 3, 6$ in ordine. Si noti che se non esistono interi $s, t$ che soddisfano $r_1 < s < r_1 + xp$ e $r_2 < t < r_2 + xp$, A è considerato incapace di raggiungere l'obiettivo.
> 
> Trova il più grande valore possibile di $x$ per il quale B può sempre impedire a A di raggiungere l'obiettivo, indipendentemente dalle azioni di A.

[[src_selection_camp_2023__Q08]]
