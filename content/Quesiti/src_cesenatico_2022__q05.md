---
title: Olimpiade Italiana (Cesenatico) 2022 - testi e soluzioni — Quesito 5
tipo: quesito
lang: it
quesito_id: quesito_src_cesenatico_2022__Q05
parent: src_cesenatico_2022
competition: Olimpiade Italiana (Cesenatico) 2022 - testi e soluzioni
family: archimede
year: '2022'
level: nazionale
country: Italia
modalita: individuale
quesito: '5'
summary: sottoinsiemi identificabili
answer: S identificabile iff 0 non in S e 101 in S
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_invarianti
skills:
  - skill_astrazione
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2022
  - livello/nazionale
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*sottoinsiemi identificabili*

> Il robot “Mag-o-matic” manipola 101 bicchieri, disposti in una fila le cui posizioni sono
> numerate da 1 a 101. In ognuno dei bicchieri può trovarsi, oppure no, una pallina. Il robot
> Mag-o-matic accetta solo istruzioni elementari della forma (a; b, c), che interpreta come
> “considera il bicchiere in posizione a: se contiene una pallina, allora scambia tra
> di loro i bicchieri che si trovano nelle posizioni b e c (con il relativo eventuale
> contenuto), altrimenti passa all’istruzione successiva”
> (si intende che a, b, c sono interi compresi tra 1 e 101, con b e c diversi tra di loro, ma non
> necessariamente diversi da a). Un programma è una sequenza finita di istruzioni elementari,
> assegnate inizialmente, che Mag-o-matic esegue una dopo l’altra.
> Un sottoinsieme S ⊆{0, 1, 2, . . . , 101} si dice identificabile se esiste un programma che, a
> partire da una qualunque configurazione iniziale, produce una configurazione finale in cui il
> bicchiere in posizione 1 contiene una pallina se e solo se il numero dei bicchieri contenenti
> una pallina è un elemento di S.
> (a) Dimostrare che il sottoinsieme di {0, 1, . . . , 101} costituito dai numeri dispari è identificabile.
> (b) Determinare tutti i sottoinsiemi di {0, 1, . . . , 101} identificabili.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** S identificabile iff 0 non in S e 101 in S
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1TXGU5iDuDzmKc7nZ8Xbc329kdRiV6EwX/view)


<span class="qlang-split" data-lang="en"></span>


*identifiable subset *

> The Mag-o-matic robot handles 101 glasses, arranged in a row whose positions are numbered from 1 to 101. There may or may not be a ball in each glass. The Mag-o-matic robot only accepts basic instructions of the form (a; b, c), which interprets how considers the glass in position a: if it contains a ball, then it exchanges between them the glasses in positions b and c (with the relevant content), otherwise it moves on to the subsequent instruction (it is understood that a, b, c are integers between 1 and 101, with b and c different between them, but not necessarily different from a). A program is a finite sequence of elementary instructions, assigned initially, that Mag-o-matic executes one after the other. A subset S ⊆{0, 1, 2, . . . , 101} is said to be identifiable if there is a program which, from any initial configuration, produces a final configuration in which the glass in position 1 contains a ball if and only if the number of glasses containing a ball is an element of S. (a) Demonstrate that the subset of {0, 1, . . . , 101} consisting of odd numbers can be identified. (b) Determine all subsets of {0, 1, . . . Identifiable.

**Answer:** S identificabile iff 0 non in S e 101 in S
[[src_cesenatico_2022__Q05]]
