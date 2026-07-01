---
title: IMO 1979 (XXI International Mathematical Olympiad) — Quesito 6
tipo: quesito
lang: it
quesito_id: quesito_src_imho_1979__Q06
parent: src_imho_1979
competition: IMO 1979 (XXI International Mathematical Olympiad)
family: imo
year: '1979'
level: IMO
country: Italia
modalita: individuale
quesito: '6'
summary: 'Frog on regular octagon: count paths ending at opposite vertex'
qa_score: '3'
topics:
  - topic_combinatoria
methods:
  - method_ricorsione
  - method_induzione
  - method_grafi
skills:
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
  - skill_manipolazione_algebrica
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/italia
  - comp/imo
  - anno/1979
  - livello/IMO
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Frog on regular octagon: count paths ending at opposite vertex*

> Let $A$ and $E$ be opposite vertices of a regular octagon. A frog starts jumping at vertex $A$. From any vertex of the octagon except $E$, it may jump to either of the two adjacent vertices. When it reaches vertex $E$, the frog stops and stays there. Let $a_n$ be the number of distinct paths of exactly $n$ jumps ending at $E$. Prove that
> $$a_{2n-1} = 0, \quad a_{2n} = \frac{1}{\sqrt{2}}\left(x^{n-1} - y^{n-1}\right), \quad n = 1, 2, 3, \ldots,$$
> where $x = 2 + \sqrt{2}$ and $y = 2 - \sqrt{2}$.
> 
> \textit{Note.} A path of $n$ jumps is a sequence of vertices $(P_0, P_1, \ldots, P_n)$ such that
> \begin{itemize}
> \item[(i)] $P_0 = A$, $P_n = E$;
> \item[(ii)] for every $i$, $0 \le i \le n-1$, $P_i$ is distinct from $E$;
> \item[(iii)] for every $i$, $0 \le i \le n-1$, $P_i$ and $P_{i+1}$ are adjacent.
> \end{itemize}

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]], [[method_grafi|Grafi]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1zEPuPBU2bBcA_YKZy9BbfgTGEtgtWSpu/view)


<span class="qlang-split" data-lang="en"></span>


*Frog on regular octagon: count paths ending at opposite vertex*

> Let $A$ and $E$ be opposite vertices of a regular octagon. A frog starts jumping at vertex. From any vertex of the octagon except $E$, it may jump to either of the two adjacent vertices. When it reaches vertex, the frog stops and stays there. Let $a_n$ be the number of distinct paths of exactly $n$ jumps ending at $E$. Prove that $$a_{2n-1} = 0, \quad a_{2n} = \frac{1}{\sqrt{2}}\left(x^{n-1} - y^{n-1}\right), \quad n = 1, 2, 3, \ldots,$$ where $x = 2 + \sqrt{2}$ and $y = 2 - \sqrt{2}$.
> 
> \textit{Note.} A path of $n$ jumps is a sequence of vertices $(P_0, P_1, \ldots, P_n)$ such that \begin{itemize} \item[(i)] $P_0 = A$, $P_n = E$; \item[(ii)] for every $i$, $0 \le i \le n-1$, $P_i$ is distinct from $E$; \item[(iii)] for every $i$, $0 \le i \le n-1$, $P_i$ and $P_{i+1}$ are adjacent. I'm going to tell you.

[[src_imho_1979__Q06]]
