---
title: IMO 2012 (LIII International Mathematical Olympiad) — Quesito 3
tipo: quesito
quesito_id: quesito_src_imho_2012__Q03
parent: src_imho_2012
competition: IMO 2012 (LIII International Mathematical Olympiad)
family: imo
year: '2012'
level: IMO
country: Italia
modalita: individuale
quesito: '3'
summary: 'Guessing game: player A specifies positive integer set, B lies at most once'
qa_score: '5'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_induzione
  - method_invarianti
  - method_casework
skills:
  - skill_ragionamento_geometrico
  - skill_lettura_attenta
  - skill_modellizzazione
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/imo
  - anno/2012
  - livello/IMO
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

*Guessing game: player A specifies positive integer set, B lies at most once*

> The liar's guessing game is a game played between two players $A$ and $B$. The rules of the game depend on two positive integers $k$ and $n$ which are known to both players.
> 
> At the start of the game $A$ chooses integers $x$ and $N$ with $1 \le x \le N$. Player $A$ keeps $x$ secret, and truthfully tells $N$ to player $B$. Player $B$ now tries to obtain information about $x$ by asking player $A$ questions as follows: each question consists of $B$ specifying an arbitrary set $S$ of positive integers (possibly one specified in some previous question), and asking $A$ whether $x$ belongs to $S$. Player $B$ may ask as many questions as he wants. After each question, player $A$ must immediately answer it with yes or no, but is allowed to lie as many times as she wants with the only restriction that, among any $k + 1$ consecutive answers, at least one answer must be truthful.
> 
> After $B$ has asked as many questions as he wants, he must specify a set $X$ of at most $n$ positive integers. If $x$ belongs to $X$, then $B$ wins. If $x$ does not belong to $X$, then $A$ wins; otherwise, he loses. Prove that:
> 
> 1. If $n \ge 2^k$, then $B$ can guarantee a win.
> 2. For all sufficiently large $k$, there exists an integer $n \ge 1.99^k$ such that $B$ cannot guarantee a win.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_induzione|Induzione]], [[method_invarianti|Invarianti]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF p.1
