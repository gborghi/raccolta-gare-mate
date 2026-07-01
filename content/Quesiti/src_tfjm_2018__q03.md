---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018 — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2018__Q03
parent: src_tfjm_2018
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018
family: tfjm
year: '2018'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '3'
summary: >-
  A two-player game placing buildings on n plots by the sea; a building of i
  floors goes on plot i, floors with a sea view score points, and one analyzes
  guaranteed advantage and optimal scores under several rule variants.
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
  - method_estremalita
  - method_backward
skills:
  - skill_modellizzazione
  - skill_casework_accurato
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2018
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*A two-player game placing buildings on n plots by the sea; a building of i floors goes on plot i, floors with a sea view score points, and one analyzes guaranteed advantage and optimal scores under several rule variants.*

> View on the sea. In the seaside resort of Vecteur-les-Bains, competition between property developers is fierce. Each wants to build buildings offering the most floors with a view of the sea. There are $n$ locations numbered from $1$ to $n$ (location $1$ is at the seaside, location $n$ farthest from it). Cécile and Eva confront each other to construct buildings. The legislation is very strict: on location $i$ one has the right to build a building of exactly $i$ floors. A floor of a building has a view of the sea if and only if it is strictly higher than every building between it and the sea (see Figure 2).
> 
> Cécile builds the first building on the location of her choice, then Eva builds in turn on a remaining location, and so on, until $k$ buildings have been placed. For each building one counts the number of floors with a view of the sea; the score of a player is the sum of the scores of her buildings.
> 
> 1. What is the best advantage Cécile can guarantee herself when:
>  a) $k=1,2,3$;
>  b) $k=n,n-1$;
>  c) $k$ arbitrary?
> 
> 2. Cécile and Eva now make peace: each seeks to maximize her own score, without worrying about the other's. When a developer can guarantee herself the same score in several ways, she chooses the option that gives the best score to the other.
>  a) What is the greatest score Cécile can guarantee herself? One may begin by studying the same particular values of $k$ as in question 1.
>  b) Same question for Eva.
> 
> 3. The legislation changes. Two integers $k_C$ and $k_E$ are now fixed such that $k_C+k_E\le n$. Cécile and Eva play respectively $k_C$ and $k_E$ times, in an order decided by the law. Redo the previous questions when:
>  a) $n=1$, $k_C$ arbitrary and Eva plays after Cécile has placed her $k_C$ buildings;
>  b) $k_C$ and $k_E$ arbitrary, Cécile places her $k_C$ buildings then Eva places her $k_E$ buildings;
>  c) $k_C$ and $k_E$ arbitrary and Cécile chooses the order in which they play.
> 
> 4. Because of global warming, the sea level has risen and Vecteur-les-Bains is now an island. The terrain is now a strip of $2n-1$ parcels bordered by the sea on both sides. At distance $k$ from the nearest arm of the sea, one can build a building of size $k$ (see Figure 3). Each floor is separated into $2$ apartments (one facing left and one facing right), and the score is the number of apartments that allow seeing the sea. Redo the previous questions in this setting.
> 
> 5. Propose and study other directions of research.

![[src_tfjm_2018__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_backward|Backward]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Un gioco per due giocatori che colloca gli edifici su n parcelli accanto al mare; un edificio di i piani si svolge su parcello i, pavimenti con punti di punteggio di vista sul mare, e si analizzano vantaggi garantiti e punteggi ottimali sotto diverse varianti di regola.*

> Vista sul mare. Nella località balneare di Vecteur-les-Bains, la concorrenza tra gli sviluppatori immobiliari è intensa. Ognuno vuole costruire edifici che offrano il maggior numero di piani con vista sul mare. Ci sono località $n$ numerate da $1$ a $n$ (località $1$ si trova sul mare, località $n$ più lontana da esso). Cécile ed Eva si confrontano per costruire edifici. La legislazione è molto rigorosa: in un luogo $i$ si ha il diritto di costruire un edificio di esattamente $i$ piani. Un pavimento di un edificio ha vista sul mare se e solo se è strettamente più alto di ogni edificio che lo separa dal mare (vedere figura 2).
> 
> Cécile costruisce il primo edificio sul luogo di sua scelta, poi Eva costruisce a sua volta su un luogo rimanente, e così via, fino a quando non sono stati posizionati gli edifici $k$. Per ogni edificio si conta il numero di piani con vista sul mare; il punteggio di un giocatore è la somma dei punteggi dei suoi edifici.
> 
> 1. Qual è il miglior vantaggio che Cécile può garantire se: a) $k=1,2,3$; b) $k=n,n-1$; c) $k$ arbitrario?
> 
> 2. Cécile ed Eva ora fanno pace: ognuna cerca di massimizzare il proprio punteggio, senza preoccuparsi dell'altro. Quando uno sviluppatore può garantire a se stesso lo stesso punteggio in diversi modi, sceglie l'opzione che dà il miglior punteggio all'altro. a) Qual è il massimo punteggio che Cécile può garantire a se stessa? Si può iniziare studiando gli stessi valori particolari di $k$ come nella domanda 1. b) La stessa domanda per Eva.
> 
> 3. La legislazione cambia. Due integri $k_C$ e $k_E$ sono ora fissati in modo tale che $k_C+k_E\le n$. Cécile ed Eva giocano rispettivamente $k_C$ e $k_E$ volte, in un ordine deciso dalla legge. Risolvi le domande precedenti quando: a) $n=1$, $k_C$ arbitrario e Eva suona dopo che Cécile ha posto i suoi edifici $k_C$; b) $k_C$ e $k_E$ arbitrario, Cécile posiziona i suoi edifici $k_C$ e Eva le posiziona i suoi edifici $k_E$; c) $k_C$ e $k_E$ arbitrario e Cécile sceglie l'ordine in cui giocano.
> 
> 4. A causa del riscaldamento globale, il livello del mare è aumentato e Vecteur-les-Bains è ora un'isola. Il terreno è ora una striscia di parcelli $2n-1$ di cui il mare confina da entrambi i lati. A distanza $k$ dal braccio più vicino del mare, si può costruire un edificio di dimensioni $k$ (vedere figura 3). Ogni piano è diviso in appartamenti $2$ (uno rivolto a sinistra e uno a destra), e il punteggio è il numero di appartamenti che consentono di vedere il mare. Riprendi le domande precedenti in questo contesto.
> 
> 5. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2018__Q03.png]]

[[src_tfjm_2018__Q03]]
