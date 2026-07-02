---
title: Kangourou 2025 Student finale — Quesito S6
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2025_student_finale__QS6
parent: src_kangourou_2025_student_finale
competition: Kangourou 2025 Student finale
family: kangourou
year: '2025'
level: kangourou
country: Italia
modalita: individuale
quesito: S6
summary: Numero scelte di 10 elementi con distanze crescenti
answer: (n-36)!/((n-46)!10!)
topics:
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_astrazione
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2025
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Numero scelte di 10 elementi con distanze crescenti*

> Si consideri l'insieme ordinato $S = (1, 2, \ldots, n)$ dei primi $n$ interi positivi e sia $n$ sufficientemente grande per poter realizzare quanto segue. Si vuole selezionare un sottoinsieme ordinato di $S$ (cioè che erediti l'ordine da quello di $S$) di $10$ elementi tali che il secondo disti almeno $1$ dal primo, il terzo disti almeno $2$ dal secondo, il quarto almeno $3$ dal terzo e così via fino al decimo che disti almeno $9$ dal nono. Attenzione: non si chiede che la distanza tra un numero scelto e il precedente numero scelto sia crescente al crescere del numero scelto; ad esempio il secondo potrebbe distare $5$ dal primo e il terzo potrebbe distare $2$ dal secondo. Al variare di $n$ (ammissibile), quante diverse scelte sono possibili?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** (n-36)!/((n-46)!10!)
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1NjqBkCmn7HHwv4vdTCDcW5Yj2KD9K8Ly/view)


<span class="qlang-split" data-lang="en"></span>


*Number of choices of 10 elements with increasing distances*

> Consider the ordered set $S = (1, 2, \ldots, n)$ of the first $n$ positive integers and be $n$ large enough to achieve the following. You want to select an ordered subset of $S$ (i.e. you inherit the order from $S$) of $10$ such elements that the second gives at least $1$ from the first, the third gives at least $2$ from the second, the fourth gives at least $3$ from the third and so on until the tenth gives at least $9$ from the ninth. Note: the distance between a number chosen and the previous number chosen is not required to increase as the number chosen increases; for example, the second could deviate $5$ from the first and the third could deviate $2$ from the second. If $n$ is eligible, how many different choices are possible?

**Answer:** (n-36)!/((n-46)!10!)
[[src_kangourou_2025_student_finale__QS6]]
