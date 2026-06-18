---
tipo: quesito
quesito_id: quesito_src_archimede_2024_triennio__Q17
parent: src_archimede_2024_triennio
competition: Giochi di Archimede 2024 - Gara Triennio
family: archimede
year: '2024'
level: triennio
country: Italia
quesito: '17'
summary: 'Suddivisione di stringhe 0/1 in blocchi, conteggio stringhe'
topics:
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2024
  - livello/triennio
  - topic/combinatoria
---

# Giochi di Archimede 2024 - Gara Triennio — Quesito 17

*Suddivisione di stringhe 0/1 in blocchi, conteggio stringhe*

> **ESERCIZIO DIMOSTRATIVO**
> 
> Data una stringa di cifre 0 e 1, Giacomo vorrebbe dividerla in blocchi da 2 o 3 cifre consecutive in modo da soddisfare una delle seguenti due condizioni:
> 
> (1) in ogni blocco, ogni (eventuale) cifra 0 compare a sinistra di ogni (eventuale) cifra 1. I blocchi consentiti sono cioè $00, 01, 11, 000, 001, 011, 111$;
> 
> (2) in ogni blocco, ogni (eventuale) cifra 0 compare a destra di ogni (eventuale) cifra 1. I blocchi consentiti sono cioè $00, 10, 11, 000, 100, 110, 111$.
> 
> Per esempio, per la stringa $011011$ la suddivisione $01 \mid 10 \mid 11$ non va bene, perché i blocchi non sono né tutti del tipo (1), né tutti del tipo (2). La suddivisione $011 \mid 011$ invece va bene, perché tutti i blocchi sono del tipo (1).
> 
> (a) Siano $m, n$ interi maggiori o uguali a 0, con $m + n \geq 2$. Dimostrare che la stringa costituita da $m$ cifre 0 seguite da $n$ cifre 1 si può dividere in blocchi come affermato da Giacomo.
> 
> (b) Sia $l \geq 4$ un intero. Dimostrare che il numero di stringhe di cifre 0 e 1 di lunghezza $l$ per cui Giacomo **non** può effettuare una suddivisione come sopra è $2^{l-3}$.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF p.9
