---
title: Japan Mathematical Olympiad 2026 — Yosen (Preliminary) — Quesito 7
tipo: quesito
lang: en
quesito_id: quesito_src_jmo36yqa_yosen__Q07
parent: src_jmo36yqa_yosen
competition: Japan Mathematical Olympiad 2026 — Yosen (Preliminary)
family: jmo
year: '2026'
level: JMO Yosen
country: Giappone
modalita: individuale
quesito: '7'
summary: >-
  Count seating arrangements of students on 2026 benches after a two-rule
  migration process
qa_score: '3'
answer: '2 \cdot \binom{2026}{52}'
topics:
  - topic_combinatoria
methods:
  - method_casework
  - method_conteggio
  - method_bigezione
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/giappone
  - comp/jmo
  - anno/2026
  - livello/JMO-Yosen
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Count seating arrangements of students on 2026 benches after a two-rule migration process*

> There are $2026$ benches equally spaced around a circle (numbered $1$ through $2026$), each initially occupied by exactly one student. At each step of the process, the teacher:
> - Selects one student currently sitting on bench $1$ and asks them to move to bench $2$ (the next bench in the positive direction).
> - Every other student who was NOT selected moves to the bench that is $2$ positions forward.
> 
> When all students have finished moving, the total number of students on benches turns out to be exactly $2000$. Find the number of possible seating arrangements at that point.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_bigezione|Biiezione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** $2 \cdot \binom{2026}{52}$
**Fonte:** [apri PDF](https://drive.google.com/file/d/11PbvxqGQjzQuBNakcUel5lpFkMjv0NnX/view)


<span class="qlang-split" data-lang="it"></span>


*Conteggio dei sedili degli studenti sulle banche del 2026 dopo un processo di migrazione a due regole*

> Ci sono banchi $2026$ equamente spaziati intorno a un cerchio (numerati $1$ fino a $2026$), ognuno inizialmente occupato da esattamente uno studente. A ogni fase del processo, l'insegnante: - Seleziona uno studente che sta seduto sulla panchina $1$ e gli chiede di passare alla panchina $2$ (la panchina successiva nella direzione positiva). - Ogni altro studente che non è stato selezionato si sposta sulla panchina che è $2$ posizioni in avanti.
> 
> Quando tutti gli studenti hanno finito di muoversi, il numero totale degli studenti sulle panchine risulta essere esattamente $2000$. Trova il numero di posti a sedere possibili in quel momento.

**Risposta:** 2 \cdot \binom{2026}{52}
[[src_jmo36yqa_yosen__Q07]]
