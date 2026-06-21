---
title: Japan IMO Selection Camp 2021 — Selection Camp — Quesito 6
tipo: quesito
quesito_id: quesito_src_selection_camp_2021__Q06
parent: src_selection_camp_2021
competition: Japan IMO Selection Camp 2021 — Selection Camp
family: jcamp
year: '2021'
level: CAMP Selection Camp
country: Giappone
modalita: individuale
quesito: '6'
summary: 'Maximal good (row,column) pairs of a prime grid have equal row counts'
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_estremalita
  - method_doppio_conteggio
skills:
  - skill_astrazione
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/giappone
  - comp/jcamp
  - anno/2021
  - livello/CAMP-Selection-Camp
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

*Maximal good (row,column) pairs of a prime grid have equal row counts*

> Let $n$ and $m$ be prime numbers. There is a grid with $n$ rows and $m$ columns, and one positive integer is written in each cell. For the cell in row $r$ and column $c$, let $a(r,c)$ denote the integer written there. Consider an ordered pair $(R, C)$ where $R$ is a set of rows and $C$ is a set of columns. Such a pair is called \emph{good} if both of the following hold:
> \begin{enumerate}
> \item[(i)] For every row $r'$ and every $r \in R$, there exists $c \in C$ such that $a(r, c) \le a(r', c)$.
> \item[(ii)] For every column $c'$ and every $c \in C$, there exists $r \in R$ such that $a(r, c) \le a(r, c')$.
> \end{enumerate}
> Moreover, for a good pair $(R, C)$, suppose that $|R| + |C|$ is greater than or equal to $|R'| + |C'|$ for every other good pair $(R', C')$. When $(R, C)$ and $(R', C')$ are two such (maximal) good pairs, prove that the number of elements of $R$ equals the number of elements of $R'$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF
