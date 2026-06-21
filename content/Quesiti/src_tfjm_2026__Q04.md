---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026 — Quesito 4
tipo: quesito
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
**Fonte:** apri PDF
