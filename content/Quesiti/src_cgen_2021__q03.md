---
title: Concours Général des Lycées 2021 — Matematica — Quesito 3
tipo: quesito
quesito_id: quesito_src_cgen_2021__Q03
parent: src_cgen_2021
competition: Concours Général des Lycées 2021 — Matematica
family: concours_generale
year: '2021'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Probability problem on the number D_n of balls eliminated/remaining: study the
  probabilities p_j that ball number j is eliminated in the first selection, the
  largest probability M_n, the most probable result via property P_n
  (P(D_n=n)=M_n), and a chain of inequalities P(D_n=k)<=P(D_n=k+1) for k<=n-2.
  ONLY questions 8-17 are visible in the images (the statement/setup and
  questions 1-7 are not shown).
qa_score: '1'
topics:
  - topic_probabilita
  - topic_combinatoria
methods:
  - method_casework
  - method_ricorsione
  - method_induzione
  - method_conteggio
  - method_simmetria
skills:
  - skill_modellizzazione
  - skill_casework_accurato
  - skill_conteggio_sistematico
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2021
  - livello/Concours-Général
  - topic/probabilita
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---

*Probability problem on the number D_n of balls eliminated/remaining: study the probabilities p_j that ball number j is eliminated in the first selection, the largest probability M_n, the most probable result via property P_n (P(D_n=n)=M_n), and a chain of inequalities P(D_n=k)<=P(D_n=k+1) for k<=n-2. ONLY questions 8-17 are visible in the images (the statement/setup and questions 1-7 are not shown).*

> Probleme (probability; title not visible, concerns a quantity $D_n$ counting balls; ONLY questions 8 onward are visible in the supplied images). It is now time to study the law of $D_n$ itself.
> 
> 8. Determine, for every integer $j$ such that $0\le j\le2n$, the probability $p_j$ that the ball of number $j$ is eliminated during the first selection.
> 
> 9. Show that, if $n\ge3$, then $p_j\ge\frac{1}{2n}$ for every integer $j$ such that $0\le j\le2n$.
> 
> 10. One notes $M_n$ the largest of the probabilities $\mathbb{P}[D_n=j]$ when $0\le j\le2n$. Show that $M_n$ tends to $0$ when $n$ tends to $+\infty$.
> 
> 2.4 Most probable result.
> One recalls that, for two events $A$ and $B$, one notes $A\setminus B$ the event according to which $A$ is realized but not $B$. Moreover, if $\mathbb{P}[B]\ne0$, one notes $\mathbb{P}_B[A]$ the conditional probability of $A$ knowing $B$.
> One wishes here to show, for every integer $n\ge1$, that $\mathbb{P}[D_n=n]=M_n$. To this end, one will show the following property $\mathscr{P}_n$:
>    For every integer $k$ such that $0\le k\le n-1$, one has $\mathbb{P}[D_n=k]\le\mathbb{P}[D_n=k+1]$.
> 
> 11. Show that, if $\mathscr{P}_n$ is true, then $\mathbb{P}[D_n=n]=M_n$. Show $\mathscr{P}_1$.
> 
> 12. Show $\mathscr{P}_1$.
> 
> One now supposes that one has an integer $n\ge2$ such that $\mathscr{P}_{n-1}$ is true and an integer $k$ such that $0\le k\le n-1$.
> 
> 13. For every integer $\ell$ between $0$ and $2n$, distinct from $k$ and $k+1$, one notes $X_\ell$ the event according to which the three balls of numbers $k$, $k+1$ and $\ell$ are chosen in the first selection.
>    a. Why, if $\ell>k+1$, does one have $\mathbb{P}_{X_\ell}[D_n=k]=0$ and $\mathbb{P}_{X_\ell}[D_n=k+1]=\mathbb{P}[D_{n-1}=k]$?
>    b. Give analogous results on $\mathbb{P}_{X_\ell}[D_n=k]$ and $\mathbb{P}_{X_\ell}[D_n=k+1]$ when $\ell<k$.
>    c. One notes now $X$ the event according to which the two balls of numbers $k$ and $k+1$ are chosen at the first selection. Show that $\mathbb{P}_X[D_n=k]\le\mathbb{P}_X[D_n=k+1]$.
> 
> 14. Let $Y$ be the event according to which one of the balls of numbers $k$ and $k+1$ is eliminated at the first selection.
>    a. Show that $\mathbb{P}_{Y\setminus X}[D_n=k]=\mathbb{P}_{Y\setminus X}[D_n=k+1]$.
>    b. Deduce that $\mathbb{P}_Y[D_n=k]\le\mathbb{P}_Y[D_n=k+1]$.
> 
> 15. Let $a,b$ and $c$ be the numbers of the three balls chosen at the first selection, with $a<b<c$.
>    a. Let $G$ be the event according to which $c<k$. Show that $\mathbb{P}_G[D_n=k]\le\mathbb{P}_G[D_n=k+1]$.
>    b. Let $H$ be the event according to which $a<k$ and $k+1<c$. Show that $\mathbb{P}_H[D_n=k]\le\mathbb{P}_H[D_n=k+1]$.
>    c. Let $I$ be the event according to which $k+1<a$. Show that, if $k\le n-2$, then: $\mathbb{P}_I[D_n=k]\le\mathbb{P}_I[D_n=k+1]$.
> 
> 16. Show that, if $k\le n-2$, then $\mathbb{P}[D_n=k]\le\mathbb{P}[D_n=k+1]$.
> 
> 17. Show $\mathscr{P}_n$.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]], [[method_conteggio|Conteggio]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1mpuoT_Bn4czxgorxXLmkmdqsNnb4j2Av/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
