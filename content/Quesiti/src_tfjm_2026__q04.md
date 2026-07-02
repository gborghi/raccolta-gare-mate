---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026 — Quesito 4
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2026__Q04
parent: src_tfjm_2026
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026
family: tfjm
year: '2026'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '4'
summary: >-
  Necklaces of beads of length l with integer values summing to price p,
  considered equal up to rotation and avoiding m consecutive value-0 beads;
  count necklaces $C(l,p,m)$ and the restricted set $C_D(l,p,m)$ using only
  values in a subset D.
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_simmetria
  - method_conteggio
  - method_casework
  - method_congruenze
skills:
  - skill_conteggio_sistematico
  - skill_riconoscimento_pattern
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2026
  - livello/TFJM²
  - topic/combinatoria
  - topic/aritmetica
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Necklaces of beads of length l with integer values summing to price p, considered equal up to rotation and avoiding m consecutive value-0 beads; count necklaces $C(l,p,m)$ and the restricted set $C_D(l,p,m)$ using only values in a subset D.*

> 4. Necklaces of pearls.
> 
> At court, a jeweller specializes in making necklaces of pearls for the noble folk. Having delivery problems, he wishes to adapt his offer to the shortage of certain pearls.
> 
> To make necklaces, the jeweller has different types of pearls, one type for each value, each pearl specified by a value (in gold pieces). Each necklace is characterized by the succession of pearls forming it, arranged in a circle. We define the length $\ell$ of a necklace as its number of pearls, and the price $p$ as the sum of the values of its pearls. We consider two necklaces to be the same if one can be obtained from the other by a rotation.
> 
> Figure 5 shows three necklaces of length $\ell = 5$ and price $p = 6$. The necklaces $A$ and $B$ are the same.
> 
> One day, a noble client, the marquise of Carabas, orders a necklace with $7$ pearls, at the price of $5$ gold pieces, that never contains $2$ pearls of value $0$ in a row.
> 
> 1. How many such necklaces can the jeweller offer her?
> 
> The jeweller wishes to anticipate the caprices of the marquise. We denote $C(\ell, p, m)$ the set of necklaces of length $\ell$, of price $p$, that do not contain $m$ pearls of value $0$ in a row.
> 
> 2. Under which conditions on $(\ell, p, m)$ is $C(\ell, p, m)$ non-empty?
> 
> The jeweller encounters a delivery problem: certain pearl values can no longer be delivered. Only pearls whose value belongs to a certain subset $D \subset \mathbb{N}$ are available. We denote $C_D(\ell, p, m)$ the set of necklaces of $C(\ell, p, m)$ made only of pearls of value in $D$.
> 
> 3. If $D$ is the set of natural numbers, under which condition(s) on $(\ell, p, m)$ is the set $C_D(\ell, p, m)$ non-empty?
> 
> 4. For $D$ fixed, under which condition(s) on $(\ell, p, m)$ does one have the equality $C(\ell, p, m) = C_D(\ell, p, m)$?
> 
> 5. If $D = \{0, 1\}$, how many necklaces are there in $C_D(\ell, p, m)$? One may distinguish the following cases, where $d = \gcd(\ell, p)$:
> 
>    a) $d = 1$,
>    b) $d$ a prime number,
>    c) $d$ arbitrary.
> 
> 6. Repeat question 5 for $D = \{0, 1, \dots, k\}$ with $k$ an arbitrary positive integer.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<span class="qlang-split" data-lang="it"></span>


*Collane di perle di lunghezza l con valori interi sommati al prezzo p, considerati uguali fino alla rotazione e evitando m perle di valore 0 consecutivo; collane di conteggio $C(l,p,m)$ e l'insieme ristretto $C_D(l,p,m)$ utilizzando solo valori in un sottinsieme D.*

> 4. Colletti di perle.
> 
> Alla corte, un gioielliere si specializza nel fare collane di perle per il popolo nobile. Avendo problemi di consegna, desidera adattare la sua offerta alla scarsità di certe perle.
> 
> Per fare le collane, il gioielliere ha diversi tipi di perle, un tipo per ogni valore, ogni perla specificata da un valore (in pezzi d'oro). Ogni colletto è caratterizzato dalla successione di perle che lo formano, disposte in un cerchio. La lunghezza $\ell$ di una collana viene definita come il numero di perle e il prezzo $p$ come la somma dei valori delle perle. Consideriamo che due colletti siano uguali se uno può essere ottenuto dall'altro mediante una rotazione.
> 
> La figura 5 mostra tre colletti di lunghezza $\ell = 5$ e prezzo $p = 6$. Le collane $A$ e $B$ sono le stesse.
> 
> Un giorno, un cliente nobile, la marchessa di Carabas, ordina un collare con perle $7$, al prezzo di monete d'oro $5$, che non contiene mai perle di valore $0$ di fila.
> 
> 1. Quanti colletti di questo tipo può offrirle il gioielliere?
> 
> Il gioielliere desidera anticipare i capricci della marchessa. Indichiamo $C(\ell, p, m)$ l'insieme di collane di lunghezza $\ell$, di prezzo $p$, che non contengono perle di valore $m$ in fila.
> 
> 2. In quali condizioni il $(\ell, p, m)$ non è vuoto?
> 
> Il gioielliere incontra un problema di consegna: alcuni valori di perla non possono più essere consegnati. Sono disponibili solo perle il cui valore appartiene a un determinato sottoinsieme $D \subset \mathbb{N}$. Indichiamo $C_D(\ell, p, m)$ l'insieme di collane di $C(\ell, p, m)$ realizzate solo di perle di valore in $D$.
> 
> 3. Se $D$ è l'insieme dei numeri naturali, a quale condizione s) su $(\ell, p, m)$ è non vuoto l'insieme $C_D(\ell, p, m)$?
> 
> 4. Per $D$ fisso, a quale condizione (') su $(\ell, p, m)$ si ottiene l'uguaglianza $C(\ell, p, m) = C_D(\ell, p, m)$?
> 
> 5. Se $D = \{0, 1\}$, quante collane ci sono in $C_D(\ell, p, m)$? Si possono distinguere i seguenti casi, in cui $d = \gcd(\ell, p)$:
> 
> a) $d = 1$, b) $d$ un numero primo, c) $d$ arbitrario.
> 
> 6. Ripetere la domanda 5 per $D = \{0, 1, \dots, k\}$ con $k$ un intero positivo arbitrario.
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q04.png]]

[[src_tfjm_2026__Q04]]
