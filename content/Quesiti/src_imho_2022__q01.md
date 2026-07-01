---
title: IMO 2022 (LXIII International Mathematical Olympiad) — Quesito 1
tipo: quesito
lang: it
quesito_id: quesito_src_imho_2022__Q01
parent: src_imho_2022
competition: IMO 2022 (LXIII International Mathematical Olympiad)
family: imo
year: '2022'
level: IMO
country: Italia
modalita: individuale
quesito: '1'
summary: 'Coin chain sorting process, same-type final coins'
qa_score: '3'
topics:
  - topic_combinatoria
methods:
  - method_invarianti
  - method_casework
skills:
  - skill_riconoscimento_pattern
  - skill_lettura_attenta
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/imo
  - anno/2022
  - livello/IMO
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Coin chain sorting process, same-type final coins*

> The Bank of Oslo issues two types of coin: aluminium (denoted $A$) and bronze (denoted $B$). Marianne has $n$ aluminium coins and $n$ bronze coins, arranged in a row in some arbitrary initial order. A chain is any subsequence of consecutive coins of the same type. Given a fixed positive integer $k \le 2n$, Marianne repeatedly performs the following operation: she identifies the longest chain containing the $k^{\text{th}}$ coin from the left, and moves all coins in that chain to the left end of the row. For example, if $n = 4$ and $k = 4$, the process starting from the ordering $AABBBABA$ would be
> $$AABBBABA \to BBBAAABA \to AAABBBBA \to BBBBAAA A \to AAAABBBB \to BBBBAAAA \to \cdots$$
> Find all pairs $(n, k)$ with $1 \le k \le 2n$ such that, starting from any initial ordering, at some moment during the process, the remaining $n$ coins will all be of the same type.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_casework|Casework]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1tsXgbJ9Pl2aI5mNYIg-TXWZHgI4xJ55P/view)


<span class="qlang-split" data-lang="en"></span>


This is the total amount of coins denominated in the currency of the Union.

> The Bank of Oslo issues two types of coin: aluminium (denoted < MSK1/>) and bronze (denoted < MSK2/>). Marianne has $n$ aluminium coins and $n$ bronze coins, arranged in a row in some arbitrary initial order. A chain is any subsequence of consecutive coins of the same type. Given a fixed positive integer $k \le 2n$, Marianne repeatedly performs the following operation: she identifies the longest chain containing the $k^{\text{th}}$ coin from the left, and moves all coins in that chain to the left end of the row. For example, if $n = 4$ and $k = 4$, the process starting from the ordering $AABBBABA$ would be $$AABBBABA \to BBBAAABA \to AAABBBBA \to BBBBAAA A \to AAAABBBB \to BBBBAAAA \to \cdots$$ Find all pairs $(n, k)$ with $1 \le k \le 2n$ such that, starting from any initial ordering, at some point during the process, the remaining $n$ coins will all be of the same type.

[[src_imho_2022__Q01]]
