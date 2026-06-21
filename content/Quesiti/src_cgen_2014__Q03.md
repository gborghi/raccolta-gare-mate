---
title: Concours Général des Lycées 2014 — Matematica — Quesito 3
tipo: quesito
quesito_id: quesito_src_cgen_2014__Q03
parent: src_cgen_2014
competition: Concours Général des Lycées 2014 — Matematica
family: concours_generale
year: '2014'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Digits behind letters: a number d is 'good' for a word of length n if some
  attribution (letters to distinct digits) is a multiple of d. Determine which d
  are good vs bad (a bad d has a 'blocker' word with no multiple), with results
  on 10, 8, 27, 32, primes via Fermat, 9, 18, and divisor relations.
qa_score: '3'
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_congruenze
  - method_casework
  - method_conteggio
  - method_fattorizzazione
skills:
  - skill_casework_accurato
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2014
  - livello/Concours-Général
  - topic/aritmetica
  - topic/combinatoria
  - gara/individuale
---

*Digits behind letters: a number d is 'good' for a word of length n if some attribution (letters to distinct digits) is a multiple of d. Determine which d are good vs bad (a bad d has a 'blocker' word with no multiple), with results on 10, 8, 27, 32, primes via Fermat, 9, 18, and divisor relations.*

> A \textbf{word} of length $n$ is a sequence of letters chosen from the 10 letters $A, B, C, D, E, F, G, H, I, J$. For example, $BEC$, $JJCD$, $AFFICHAGE$, $ABCDEFGHIJ$ are words of lengths $3$, $4$, $9$, $10$ respectively.
> 
> An \textbf{attribution} of a word is the number obtained by replacing each letter with a digit, two identical letters being replaced by the same digit and two distinct letters by distinct digits (the leading letter may be replaced by $0$). For example $121 = 11^2$ and $040 = 40$ are attributions of $GAG$, but $555$ and $000$ are not.
> 
> A positive integer $d > 0$ is said to be \textbf{good} for a word if one of its attributions is a multiple of $d$; otherwise the word is a \textbf{blocker} of $d$ (no attribution is a multiple of $d$). A number $d > 0$ that admits a blocker is called \textbf{bad}; a number that admits no blocker is called \textbf{good}.
> 
> \textbf{1.} \textbf{a.} Show that the word $AB$ is a blocker of $d = 100$.
> 
> \textbf{b.} Show that the word $AB$ is not a blocker of any $d$ with at most two digits (i.e. $d \le 99$).
> 
> \textbf{2.} \textbf{a.} Show that $10$ is bad.
> 
> \textbf{b.} Show that $8$ is bad.
> 
> \textbf{c.} Show that the word $AAB$ is a blocker of $27$.
> 
> \textbf{d.} Show that the word $ABBAB$ is a blocker of $32$.
> 
> \textbf{e.} Is a positive divisor of a good number necessarily good? Is a positive divisor of a bad number necessarily bad?
> 
> If there is a strictly positive integer $k$ and a single letter $X$, we denote by $X^k$ the word $XX\ldots X$ formed of $k$ letters $X$.
> 
> \textbf{3.} \textbf{a.} Let $p$ be a prime number greater than or equal to $7$, and let $\omega$ be the word
> $$\omega = A A A^{p-2} B A^{p-2} C A^{p-2} D A^{p-2} E A^{p-2} F A^{p-2} G A^{p-2} H A^{p-2} I A^{p-2} J A^{p-2}.$$
> Show that $\omega$ is a blocker of $p$. (One may use without proof the little theorem of Fermat: if $x$ is an integer not divisible by $p$, then $x^{p-1} - 1$ is divisible by $p$.)
> 
> \textbf{b.} Show that $9$ admits at most $27$ good attributions.
> 
> \textbf{4.} Let $a$ be a word of length $n$ and $\omega$ an attribution of $a$. Denote by $a'$ the attribution obtained from $a$ by a cyclic permutation of the digits: the digits $0,1,2,3,4,5,6,7,8$ are increased by $1$, while the digit $9$ is sent to $0$. Thus the digits $0,1,2,3,4,5,6,7,8,9$ are respectively replaced by $1,2,3,4,5,6,7,8,9,0$. For example, if $n = 5$ and $a = 01789$, then $a' = 12890$. Let $k$ be the number of occurrences of the digit $9$ in the decimal writing of $a$.
> 
> \textbf{a.} If $a$ is congruent to $r$ modulo $9$, to what is $a'$ congruent modulo $9$?
> 
> \textbf{b.} Deduce that if $k$ is not congruent to $n$ modulo $3$, then there exists an attribution of $\omega$ divisible by $3$.
> 
> \textbf{c.} Show that if $k$ is congruent to $n$ modulo $3$ but not modulo $9$, then there exists an attribution of $\omega$ divisible by $9$.
> 
> \textbf{d.} Show that $9$ is bad.
> 
> \textbf{5.} Show that $18$ is bad.
> 
> \textbf{6.} Show that if $\omega$ is a bad number, then it admits an infinity of blockers.
> 
> \textit{For information, one can show that there are exactly $22$ good numbers. These are the positive divisors of the numbers $18$, $24$, $45$, $50$, $60$, $80$.}

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF
