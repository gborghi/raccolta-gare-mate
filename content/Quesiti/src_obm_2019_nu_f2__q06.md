---
title: >-
  Olimpíada Brasileira de Matemática 2019 — Nível Universitário — Fase 2 —
  Quesito 6
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2019_nu_f2__Q06
parent: src_obm_2019_nu_f2
competition: Olimpíada Brasileira de Matemática 2019 — Nível Universitário — Fase 2
family: obm
year: '2019'
level: OBM Nível Universitário
country: Brasile
modalita: individuale
nivel: u
fase: '2'
quesito: '6'
summary: >-
  Limit of f(n)/n! where f(n) counts derangements with no 2-cycles (secret
  friend with no 'jam')
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_probabilita
methods:
  - method_inclusione_esclusione
  - method_conteggio
skills:
  - skill_conteggio_sistematico
  - skill_stima
  - skill_astrazione
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2019
  - livello/OBM-Nível-Universitário
  - nivel/u
  - fase/2
  - topic/combinatoria
  - topic/probabilita
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Limit of f(n)/n! where f(n) counts derangements with no 2-cycles (secret friend with no 'jam')*

> In a friends gathering, suppose no one is their own secret friend. We say that two people $A$ and $B$ have a "jam" (marmelada) if there exist two people $A$ and $B$ such that $B$ is $A$'s secret friend and $A$ is $B$'s secret friend. For each positive integer $n$, let $f(n)$ be the number of secret-friend drawings with $n$ people that have no "jam", i.e. $f(n)$ is the number of permutations $\sigma$ of $\{1, 2, \ldots, n\}$ such that:
> 
> $\circ$ $\sigma(i) \neq i$ for all $i = 1, 2, \ldots, n$;
> 
> $\circ$ there do not exist $1 \leq i < j \leq n$ such that $\sigma(i) = j$ and $\sigma(j) = i$.
> 
> Determine the limit
> $$\lim_{n \to +\infty} \frac{f(n)}{n!}.$$

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/10ZZ53PN51VCIg4v8FeDtpK_VZe_GuZRq/view)


<span class="qlang-split" data-lang="it"></span>


< MSK0/>Limite di f n)/n! in cui f(n) conta i disturbi senza cicli a due (amice segreto senza "interruzione")*

> In una riunione di amicizia, supponiamo che nessuno sia il proprio amico segreto. Diciamo che due persone $A$ e $B$ hanno un "jam" (marmelada) se esistono due persone $A$ e $B$ in modo tale che $B$ sia l'amico segreto di $A$ e $A$ sia l'amico segreto di $B$. Per ogni numero intero positivo $n$, $f(n)$ è il numero di disegni di amici segreti con $n$ persone che non hanno "jam", cioè $f(n)$ è il numero di permutazioni $\sigma$ di $\{1, 2, \ldots, n\}$ in modo tale che:
> 
> $\circ$ $\sigma(i) \neq i$ per tutti $i = 1, 2, \ldots, n$;
> 
> $\circ$ non esistono $1 \leq i < j \leq n$ tali da $\sigma(i) = j$ e $\sigma(j) = i$.
> 
> Determinare il limite $$\lim_{n \to +\infty} \frac{f(n)}{n!}.$$

[[src_obm_2019_nu_f2__Q06]]
