---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2025__Q05
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '5'
summary: >-
  Gerrymandering: moving district capitals within their Voronoi cell each year;
  characterize which capital configurations are reachable on a disk, plane, and
  higher dimensions.
qa_score: '2'
topics:
  - topic_geometria_analitica
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_coordinate
  - method_simmetria
  - method_casework
skills:
  - skill_ragionamento_geometrico
  - skill_modellizzazione
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/geometria_analitica
  - topic/geometria_piana
  - topic/combinatoria
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Gerrymandering: moving district capitals within their Voronoi cell each year; characterize which capital configurations are reachable on a disk, plane, and higher dimensions.*

> Problem 5 - Gerrymandering.
> 
> In order to win the elections, Elbridge wants to move the capitals of the different districts toward positions favorable to his party, in the fewest years possible.
> 
> Let $P$ be a part of the plane representing a country, with $n \ge 2$. We call a configuration a choice of $n$ distinct points $A_1, A_2, \ldots, A_n$ representing the capitals of the $n$ districts. For a given configuration, we cut $P$ into $n$ parts $D_1, \ldots, D_n$ (the districts): district $D_i$ consists of the set of points strictly closer to $A_i$ than to all the other points $A_j$.
> 
> Each year, Elbridge can move, simultaneously, each capital $A_i$ to a new location $A_i' \in D_i$. We then say that $(A_1', \ldots, A_n')$ is realizable from $(A_1, \ldots, A_n)$ in $1$ year. Then the partition of $P$ into $n$ districts is redone for this new configuration. More generally, we say a configuration $C'$ is realizable from $C$ if there exists $a \in \mathbb{N}$ such that $C'$ is realizable from $C$ in $a$ years. See Figure 6. (Figure 6: Example where $P$ is the interior of a rectangle and $n = 3$. The third configuration is realizable from the first in $2$ years, but not in a single one.)
> 
> In a first part, we place ourselves in the case where $P$ is a circle centered at the origin. Consequently all the capitals are situated at the same distance from the center of $P$.
> 
> 1. From a given configuration, which configurations are realizable?
> 
> 2. Fix $n$. Start from the configuration $C$ where the capitals form a regular polygon centered at the origin. Is the configuration where each capital occupies the position symmetric with respect to the origin realizable? If yes, determine (as precisely as possible), as a function of $n$, the smallest value of $a$ such that it is realizable in $a$ years.
> 
> 3. Fix $n$ and a half-circle $M$ of $P$. Does there exist a value $a$ such that, for any configuration $C$, there exists a configuration realizable in $a$ years in which all the capitals belong to $M$? If yes, determine (as precisely as possible), as a function of $n$, the smallest value of $a$ that works.
> 
> 4. Fix $n$. Does there exist a value $a$ such that, for any configuration $C$ and any configuration $C'$ realizable from $C$, $C'$ is realizable in $a$ years from $C$? If yes, determine (as precisely as possible), as a function of $n$, the smallest value of $a$ that works.
> 
> 5. Reproduce the previous questions where $P$ is the whole plane. In question 3, $M$ is a half-plane.
> 
> 6. Generalize to higher dimensions.
> 
> 7. Propose and study other lines of research.

![[src_tfjm_2025__Q05.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Gerrymandering: spostamento di capitali distrettuali all'interno della loro cella Voronoi ogni anno; caratterizzare quali configurazioni di capitali sono raggiungibili su un disco, piano e dimensioni superiori.*

> Il problema 5 - Gerrymandering.
> 
> Al fine di vincere le elezioni, Elbridge vuole spostare le capitali dei diversi distretti verso posizioni favorevoli al suo partito, nel minor numero di anni possibile.
> 
> Se $P$ è parte del piano che rappresenta un paese, con $n \ge 2$. Chiamiamo una configurazione una scelta di $n$ punti distinti $A_1, A_2, \ldots, A_n$ che rappresentano le capitali dei distretti $n$. Per una data configurazione, tagliamo $P$ in $n$ parti $D_1, \ldots, D_n$ (i distretti): il distretto $D_i$ è costituito dal insieme di punti strettamente più vicini a $A_i$ che a tutti gli altri punti $A_j$.
> 
> Ogni anno, Elbridge può trasferire, contemporaneamente, ogni capitale $A_i$ in una nuova posizione $A_i' \in D_i$. Quindi diciamo che $(A_1', \ldots, A_n')$ è realizzabile da $(A_1, \ldots, A_n)$ in $1$ anno. Poi la partizione di $P$ in distretti $n$ viene rifatta per questa nuova configurazione. Più in generale, diciamo che una configurazione $C'$ è realizzabile da $C$ se esiste $a \in \mathbb{N}$ in modo tale che $C'$ è realizzabile da $C$ in $a$ anni. Cfr. figura 6. (Figura 6: Esempio in cui $P$ è l'interno di un rettangolo e $n = 3$. La terza configurazione è realizzabile a partire dalla prima in $2$ anni, ma non in una sola.)
> 
> In una prima parte, ci mettiamo nel caso in cui $P$ è un cerchio centrato all'origine. Di conseguenza, tutte le capitali sono situate alla stessa distanza dal centro di $P$.
> 
> 1. Da una data configurazione, quali configurazioni sono realizzabili?
> 
> 2. Risparmiare $n$. Partiamo dalla configurazione $C$ dove i capitali formano un poligono regolare centrato all'origine. È realizzabile la configurazione in cui ogni capitale occupa la posizione simmetrica rispetto all'origine? Se sì, determinare (con la massima precisione possibile), come funzione di $n$, il valore più piccolo di $a$ in modo tale che sia realizzabile in $a$ anni.
> 
> 3. Fissare $n$ e un semicircolo $M$ di $P$. Esiste un valore $a$ tale che, per qualsiasi configurazione $C$, esista una configurazione realizzabile in anni $a$ in cui tutti i capitali appartengono a $M$? Se sì, determinare (con la massima precisione possibile), come funzione di $n$, il valore più piccolo di $a$ che funziona.
> 
> 4. Risparmiare $n$. Esiste un valore $a$ tale che, per qualsiasi configurazione $C$ e per qualsiasi configurazione $C'$ realizzabile da $C$, $C'$ sia realizzabile in $a$ anni da $C$? Se sì, determinare (con la massima precisione possibile), come funzione di $n$, il valore più piccolo di $a$ che funziona.
> 
> 5. Riproduci le domande precedenti in cui $P$ è l'intero piano. Nella domanda 3, $M$ è un semiplano.
> 
> 6. Generalizza alle dimensioni superiori.
> 
> 7. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q05.png]]

[[src_tfjm_2025__Q05]]
