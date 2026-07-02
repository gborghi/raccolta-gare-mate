---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024 — Quesito 8
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2024__Q08
parent: src_tfjm_2024
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024
family: tfjm
year: '2024'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: >-
  Game creation: number N cards 1..N so that each authorized/forbidden pair is
  decided by reading the manual page indexed by the sum (or GCD, LCM, product)
  of the two card numbers; characterize admissible configurations and find the
  minimal M (>=N) making every configuration M-admissible.
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_congruenze
  - method_casework
  - method_fattorizzazione
skills:
  - skill_conteggio_sistematico
  - skill_astrazione
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2024
  - livello/TFJM²
  - topic/combinatoria
  - topic/aritmetica
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Game creation: number N cards 1..N so that each authorized/forbidden pair is decided by reading the manual page indexed by the sum (or GCD, LCM, product) of the two card numbers; characterize admissible configurations and find the minimal M (>=N) making every configuration M-admissible.*

> Anaïs wants to create a board game. This game requires numbering cards with certain constraints. The game consists of cards, each card bearing a number comprised between $1$ and $N \ge 2$ and possibly a (distinct) symbol, together with a rule manual. Each pair of (distinct) symbols is $\textbf{authorized}$ or $\textbf{forbidden}$. One calls $\textbf{configuration}$ the set of authorized pairs.
> 
> Anaïs wants to let the players know exactly which pairs are authorized, but rather than giving the exhaustive list of authorized pairs, she proceeds as follows: she writes on each card a different number between $1$ and $N$ and provides the players with a rule manual. To know the status of a pair, it suffices for the players to add the numbers written on the two cards and look at the corresponding page of the manual. It is possible that certain page numbers are not attainable as a sum of card numbers. In that case, what is written on them does not matter.
> 
> A configuration is $\textbf{admissible}$ if it is possible for Anaïs to carry out the preceding construction, that is, to number the cards and create the corresponding manual.
> 
> An example with $N = 5$ is the following: the game has $5$ cards $A$, $B$, $C$, $D$, $E$ and the only authorized pairs are $(A, D)$ and $(C, D)$. This configuration is admissible, because Anaïs can make the following construction: she attributes to cards $A$, $B$, $C$, $D$, $E$ the numbers $3$, $5$, $2$, $1$, $4$ respectively, and writes "authorized" on pages $3$ and $4$ of her manual and "forbidden" on all other pages.
> 
> $\textbf{1.}$ For which $N$ is every configuration admissible?
> 
> $\textbf{2.}$ For which $N$ is every configuration admissible among those for which:
>   a) each card belongs to at least one authorized pair?
>   b) each card belongs to at most one authorized pair?
>   c) each card belongs to at most two authorized pairs?
> 
> $\textbf{3.}$ Reprise questions $\textbf{1.}$ and $\textbf{2.}$ if, instead of summing the cards, the players compute their GCD.
> 
> $\textbf{4.}$ Reprise questions $\textbf{1.}$ and $\textbf{2.}$ if, instead of summing the cards, the players compute their LCM (the manual then has $N^2$ pages).
> 
> $\textbf{5.}$ Reprise questions $\textbf{1.}$ and $\textbf{2.}$ if, instead of summing the cards, the players compute their product (the manual then has $N^2$ pages).
> 
> To be able to build her game whatever happens, Anaïs allows herself to number the cards with pairwise distinct numbers from $1$ to $M$ with $M \ge N$. A configuration for which Anaïs can construct such a numbering and an associated manual is said $M$-$\textbf{admissible}$.
> 
> $\textbf{6.}$ Estimate, as a function of $N$, the minimal $M$ for which every configuration is $M$-admissible. Give examples of configurations for which one can compute the minimal $M$ for which they are $M$-admissible. One will be interested in the various modes of combining the cards (sum, GCD, ...).
> 
> $\textbf{7.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<span class="qlang-split" data-lang="it"></span>


*Creazione di gioco: numero N carte 1..N in modo che ogni coppia autorizzata/proibita venga decisa leggendo la pagina manuale indicizzata dalla somma (o GCD, LCM, prodotto) dei due numeri di carta; caratterizzare le configurazioni ammissibili e trovare la minima M (>=N) che rende ogni configurazione M-ammissibile.*

> Anaïs vuole creare un gioco da tavolo. Questo gioco richiede carte di numerazione con determinati vincoli. Il gioco è costituito da carte, ciascuna carta con un numero compreso tra $1$ e $N \ge 2$ e possibilmente un simbolo (distinto), insieme a un manuale di regole. Ogni coppia di simboli (distinti) è $\textbf{authorized}$ o $\textbf{forbidden}$. Uno chiama $\textbf{configuration}$ l'insieme di coppie autorizzate.
> 
> Anaïs vuole far sapere ai giocatori esattamente quali coppie sono autorizzate, ma invece di fornire un elenco esaustivo delle coppie autorizzate, procede come segue: scrive su ogni carta un numero diverso tra $1$ e $N$ e fornisce ai giocatori un manuale di regole. Per conoscere lo stato di una coppia, basta che i giocatori aggiungano i numeri scritti sulle due carte e guardano la pagina corrispondente del manuale. È possibile che alcuni numeri di pagina non siano raggiungibili come una somma di numeri di carta. In tal caso, ciò che è scritto su di loro non importa.
> 
> Una configurazione è $\textbf{admissible}$ se per Anaïs è possibile eseguire la costruzione precedente, cioè numerare le carte e creare il corrispondente manuale.
> 
> Un esempio con $N = 5$ è il seguente: il gioco ha le carte $5$ $A$, $B$, $C$, $D$, $E$ e le uniche coppie autorizzate sono $(A, D)$ e $(C, D)$. Questa configurazione è ammissibile, poiché Anaïs può fare la seguente costruzione: attribuisce alle carte $A$, $B$, $C$, $D$, $E$ i numeri $3$, $5$, $2$, $1$, $4$ rispettivamente, e scrive "autorizzato" sulle pagine $3$ e $4$ del suo manuale e "proibito" su tutte le altre pagine.
> 
> $\textbf{1.}$ Per quale $N$ è ammissibile ogni configurazione?
> 
> Per le quali è ammissibile ogni configurazione tra quelle per le quali: a) ogni carta appartiene ad almeno una coppia autorizzata? b) ciascuna carta appartiene ad un paio autorizzato? c) ciascuna carta appartiene ad un massimo di due coppie autorizzate?
> 
> $\textbf{3.}$ Ripeti le domande $\textbf{1.}$ e $\textbf{2.}$ se, invece di sommare le carte, i giocatori calcolano il loro GCD.
> 
> $\textbf{4.}$ Ripeti le domande $\textbf{1.}$ e $\textbf{2.}$ se, invece di sommare le carte, i giocatori calcolano il loro LCM (il manuale ha quindi pagine $N^2$).
> 
> $\textbf{5.}$ Ripeti le domande $\textbf{1.}$ e $\textbf{2.}$ se, invece di sommare le carte, i giocatori calcolano il loro prodotto (il manuale ha quindi pagine $N^2$).
> 
> Per poter costruire il suo gioco qualunque cosa accada, Anaïs si permette di numerare le carte con numeri distinti in coppia da $1$ a $M$ con $M \ge N$. Una configurazione per la quale Anaïs può costruire una tale numerazione e un manuale associato è detta $M$-$\textbf{admissible}$.
> 
> $\textbf{6.}$ Estimare, come funzione di $N$, il minimo $M$ per il quale ogni configurazione è $M$ ammissibile. Fornire esempi di configurazioni per le quali si può calcolare il minimo $M$ per il quale sono $M$ ammissibili. Si interesseranno le varie modalità di combinazione delle carte (somma, GCD, ...).
> 
> $\textbf{7.}$ Proporre e studiare altre vie di ricerca.

![[src_tfjm_2024__Q08.png]]

[[src_tfjm_2024__Q08]]
