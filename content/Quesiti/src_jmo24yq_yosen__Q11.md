---
title: Japan Mathematical Olympiad 2014 — Yosen (Preliminary) — Quesito 11
tipo: quesito
quesito_id: quesito_src_jmo24yq_yosen__Q11
parent: src_jmo24yq_yosen
competition: Japan Mathematical Olympiad 2014 — Yosen (Preliminary)
family: jmo
year: '2014'
level: JMO Yosen
country: Giappone
modalita: individuale
quesito: '11'
summary: >-
  Fill 6×6 array with integers 1–6; two compositional conditions; count valid
  arrays
qa_score: '3'
answer: '122'
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_casework
  - method_conteggio
skills:
  - skill_conteggio_sistematico
  - skill_astrazione
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/giappone
  - comp/jmo
  - anno/2014
  - livello/JMO-Yosen
  - topic/combinatoria
  - topic/algebra
  - gara/individuale
---

*Fill 6×6 array with integers 1–6; two compositional conditions; count valid arrays*

> Write an integer from $1$ to $6$ in each cell of a $6 \times 6$ array $(a_{i,j})$ (where $1 \le i, j \le 6$), with repetition allowed. For each row $i$, define the function $f_i : \{1,\ldots,6\} \to \{1,\ldots,6\}$ by $f_i(j) = a_{i,j}$. Count the number of ways to fill the array so that both of the following conditions hold for all valid indices:
> \begin{itemize}
> \item For every $i$ with $1 \le i \le 6$: $f_i(f_i(j)) = i$ for all $j$ with $1 \le j \le 6$.
> \item For every $i, k$ with $1 \le i, k \le 6$: $f_{f_i(k)}(j) = f_i(f_k(j))$ for all $j$ with $1 \le j \le 6$.
> \end{itemize}

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** 122
**Fonte:** apri PDF
