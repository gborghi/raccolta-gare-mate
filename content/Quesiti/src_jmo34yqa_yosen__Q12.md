---
tipo: quesito
quesito_id: quesito_src_jmo34yqa_yosen__Q12
parent: src_jmo34yqa_yosen
competition: Japan Mathematical Olympiad 2024 — Yosen (Preliminary)
family: jmo
year: '2024'
level: JMO Yosen
country: Giappone
modalita: individuale
quesito: '12'
summary: >-
  Count tuples (a_1,...,a_2100) mod 2100 satisfying a Mobius-type convolution
  condition
qa_score: '3'
answer: '\frac{2100^{210}}{2^{164} \cdot 3^{30}}'
topics:
  - topic_aritmetica
  - topic_algebra
  - topic_combinatoria
methods:
  - method_congruenze
  - method_doppio_conteggio
  - method_bigezione
skills:
  - skill_astrazione
  - skill_manipolazione_algebrica
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/giappone
  - comp/jmo
  - anno/2024
  - livello/JMO-Yosen
  - topic/aritmetica
  - topic/algebra
  - topic/combinatoria
  - gara/individuale
---

# Japan Mathematical Olympiad 2024 — Yosen (Preliminary) — Quesito 12

*Count tuples (a_1,...,a_2100) mod 2100 satisfying a Mobius-type convolution condition*

> Find the number of tuples $(a_1, a_2, \ldots, a_{2100})$ of integers with $0 \le a_i \le 2099$ for all $i$, such that there exists a tuple of integers $(b_1, b_2, \ldots, b_{2100})$ for which, for every integer $i$ with $1 \le i \le 2100$,
> $$a_i \equiv \sum_{\substack{\gcd(j-i,\,2100)=1 \\ 1 \le j \le 2100}} b_j \pmod{2100}.$$
> Here the right-hand side is the sum of $b_j$ over all integers $j$ with $1 \le j \le 2100$ such that no integer $\ge 2$ divides both $j - i$ and $2100$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_doppio_conteggio|Doppio conteggio]], [[method_bigezione|Biiezione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** $\frac{2100^{210}}{2^{164} \cdot 3^{30}}$
**Fonte:** apri PDF
