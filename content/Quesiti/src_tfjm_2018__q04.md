---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018 — Quesito 4
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2018__Q04
parent: src_tfjm_2018
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018
family: tfjm
year: '2018'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '4'
summary: >-
  Galettes des rois: n galettes each cut into k parts contain hidden feves with
  a_1<=...<=a_n feves; given how many feves were already found, decide which
  galette to pick to maximize (or minimize) the chance of finding a feve, and
  study useless galettes.
qa_score: '2'
topics:
  - topic_probabilita
  - topic_combinatoria
methods:
  - method_casework
  - method_conteggio
skills:
  - skill_modellizzazione
  - skill_casework_accurato
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2018
  - livello/TFJM²
  - topic/probabilita
  - topic/combinatoria
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Galettes des rois: n galettes each cut into k parts contain hidden feves with a_1<=...<=a_n feves; given how many feves were already found, decide which galette to pick to maximize (or minimize) the chance of finding a feve, and study useless galettes.*

> Galettes des rois (kings' cakes). At the high school's galette des rois, there are $n$ galettes numbered $1$ to $n$, each cut into $k$ parts, where $k$ and $n$ are strictly positive integers. Guillaume eats at random: arriving, he takes one part of one galette. Each galette may contain fèves (charms) or not. Let $a_i$ be the number of fèves in galette $i$. We suppose $a_1\le a_2\le\cdots\le a_n$.
> 
> 1. Compute $\mathbb{P}(L=\ell)$ for any integer $\ell\ge 0$, where $L$ is the number of fèves already found before Guillaume arrives. What is the expectation of $L$?
> 
> 2. Taking a part at random in galette $i$, what is the probability that Guillaume finds a fève? How should he proceed to maximize his chances of finding a fève?
> 
> Thomas, who has been there from the start, tells Guillaume that $\ell$ fèves have been found up to now, with $0\le\ell\le n-1$.
> 
> 3. As a function of $\ell$, which galette should Guillaume choose his part from to have the best chance of finding a fève? What is then the probability that he finds one? Treat the following cases:
>  a) $n=2$;
>  b) $n=3$;
>  c) $\ell=0$;
>  d) $\ell=1$;
>  e) $\ell=n-1$;
>  f) $n,\ell$ arbitrary, but all the galettes contain the same number of parts;
>  g) $k=n$ and $a_i=1$ for all $i$;
>  h) $n,\ell$ arbitrary.
> 
> 4. In this question, suppose $a_1<a_2<\cdots<a_n$. We say that a galette $i$ is useless if, whatever the value $\ell$ given by Thomas, galette $i$ is never the galette giving the best chance of finding a fève. As a function of $n$, is it possible that no galette is ever useless? Which galettes are never useless? What are the possible numbers of useless galettes?
> 
> 5. Guillaume is very full and now fears that he must at least taste the parts containing the fèves. He now wants the fewest chances possible of finding one. Redo questions 3 and 4 in this setting.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2018__Q04.png]]

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Gallettes des rois: n galettes ciascuna tagliata in k parti contengono febbre nascoste con febbre a_1<=...<=a_n; data la quantità di febbre già trovate, decidete quale galette scegliere per massimizzare (o ridurre al minimo) la possibilità di trovare una febbre, e studiate le galettes inutili.*

> Galettes des rois (torte dei re). Nella galette des rois del liceo, ci sono $n$ galettes numerate $1$ a $n$, ciascuna tagliata in parti $k$, dove $k$ e $n$ sono enti rigorosamente positivi. Guillaume mangia in modo casuale: arrivando, prende una parte di una galette. Ogni galette può contenere o meno fève (incantevoli). $a_i$ è il numero di fève nella galette $i$. Supponiamo $a_1\le a_2\le\cdots\le a_n$.
> 
> 1. Calcolare $\mathbb{P}(L=\ell)$ per qualsiasi numero intero $\ell\ge 0$, dove $L$ è il numero di fève già trovate prima dell'arrivo di Guillaume. Quali sono le aspettative di $L$?
> 
> 2. Prendendo una parte casuale in galette $i$, qual è la probabilità che Guillaume trovi una fève? Come deve procedere per massimizzare le sue possibilità di trovare una fève?
> 
> Thomas, che è stato lì fin dall'inizio, dice a Guillaume che finora sono state trovate fève $\ell$, con $0\le\ell\le n-1$.
> 
> 3. In funzione di $\ell$, quale galette deve scegliere Guillaume per avere le migliori possibilità di trovare una fève? Qual è la probabilità che ne troverà una? Trattare i seguenti casi: a) $n=2$; b) $n=3$; c) $\ell=0$; d) $\ell=1$; e) $\ell=n-1$; f) $n,\ell$ arbitrario, ma tutte le galette contengono lo stesso numero di parti; g) $k=n$ e $a_i=1$ per tutte le $i$; h) $n,\ell$ arbitrario.
> 
> 4. In questa domanda, supponiamo $a_1<a_2<\cdots<a_n$. Diciamo che una galette $i$ è inutile se, qualunque sia il valore $\ell$ dato da Thomas, la galette $i$ non è mai la galette che dà la migliore possibilità di trovare una fève. Come funzione di $n$, è possibile che nessuna galette sia mai inutile? Quali galettes non sono mai inutili? Quanti sono i possibili numeri di galletti inutili?
> 
> 5. Guillaume è molto pieno e ora teme che almeno debba assaggiare le parti contenenti le fève. Ora vuole le minime possibilita' di trovarne uno. Redo domande 3 e 4 in questo contesto.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2018__Q04.png]]

[[src_tfjm_2018__Q04]]
