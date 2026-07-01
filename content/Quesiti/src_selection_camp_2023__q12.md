---
title: Japan IMO Selection Camp 2023 — Selection Camp — Quesito 12
tipo: quesito
lang: en
quesito_id: quesito_src_selection_camp_2023__Q12
parent: src_selection_camp_2023
competition: Japan IMO Selection Camp 2023 — Selection Camp
family: jcamp
year: '2023'
level: CAMP Selection Camp
country: Giappone
modalita: individuale
quesito: '12'
summary: Second-largest count of good pairs of cities in tunnel network
qa_score: '4'
topics:
  - topic_combinatoria
methods:
  - method_grafi
  - method_estremalita
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_astrazione
tags:
  - kg/quesito
  - paese/giappone
  - comp/jcamp
  - anno/2023
  - livello/CAMP-Selection-Camp
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Second-largest count of good pairs of cities in tunnel network*

> The kingdom of Mogura consists of $2023$ cities, with several tunnels each connecting two distinct cities. Each tunnel is two-way passable, and between any two distinct cities there is at most one tunnel directly connecting them. Moreover, any two distinct cities can reach each other through some sequence of tunnels.
> 
> A pair $\{A, B\}$ of distinct cities is called good if it satisfies the following condition for every city $C$ different from $A$ and $B$:
> 
> Let $d_{C,A}$ be the minimum possible number of tunnels used when traveling from $C$ to $A$, and let $d_{C,B}$ be the minimum possible number of tunnels used when traveling from $C$ to $B$. Then it is possible to choose a path $X$ from $C$ to $A$ using $d_{C,A}$ tunnels and a path $Y$ from $C$ to $B$ using $d_{C,B}$ tunnels so that $X$ and $Y$ share no common tunnel.
> 
> Find the second-largest possible value of the number of good pairs of cities. Here, $\{A, B\}$ and $\{B, A\}$ are regarded as the same pair.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FdIyFu7hmN1-pD181OvfX4NVfhuNrTpE/view)


<span class="qlang-split" data-lang="it"></span>


*Seconda più grande conteggio di buone coppie di città in rete di tunnel*

> Il regno di Mogura è costituito da città $2023$, con diversi tunnel che collegano ciascuna due città distinte. Ogni tunnel è attraversato in due direzioni e tra due città distinte esiste almeno un tunnel che li collega direttamente. Inoltre, due città distinte possono raggiungere l'una l'altra attraverso una sequenza di tunnel.
> 
> Una coppia $\{A, B\}$ di città distinte è definita buona se soddisfa la seguente condizione per ogni città $C$ diversa da $A$ e $B$:
> 
> Il $d_{C,A}$ deve essere il numero minimo possibile di tunnel utilizzati durante il viaggio da $C$ a $A$ e il $d_{C,B}$ deve essere il numero minimo possibile di tunnel utilizzati durante il viaggio da $C$ a $B$. È quindi possibile scegliere un percorso $X$ da $C$ a $A$ utilizzando tunnel $d_{C,A}$ e un percorso $Y$ da $C$ a $B$ utilizzando tunnel $d_{C,B}$ in modo che $X$ e $Y$ non condividano tunnel comune.
> 
> Trova il secondo valore possibile del numero di buone coppie di città. Qui $\{A, B\}$ e $\{B, A\}$ sono considerati come la stessa coppia.

[[src_selection_camp_2023__Q12]]
