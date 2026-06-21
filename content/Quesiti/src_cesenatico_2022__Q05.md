---
title: Olimpiade Italiana (Cesenatico) 2022 - testi e soluzioni — Quesito 5
tipo: quesito
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
**Fonte:** apri PDF p.2
