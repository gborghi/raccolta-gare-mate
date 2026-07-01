---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 2
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2025__Q02
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '2'
summary: >-
  Water flows down a triangular network of toboggan pipes (types I, X, Z)
  splitting and merging; determine which inflow/outflow distributions are
  achievable.
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_conteggio
  - method_invarianti
  - method_ricorsione
skills:
  - skill_modellizzazione
  - skill_manipolazione_algebrica
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/combinatoria
  - topic/algebra
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Water flows down a triangular network of toboggan pipes (types I, X, Z) splitting and merging; determine which inflow/outflow distributions are achievable.*

> Problem 2 - Funny toboggans.
> 
> In his aquatic free time, the director entrusted engineer Emmy with the construction of a new pipework of toboggans of height $H \in \mathbb{N}$ meters. At the top there are $N \ge 2$ entries aligned and numbered from $1$ to $N$, and at the bottom there will be $N$ outputs aligned and numbered from $1$ to $N$. For each meter, Emmy has at her disposal the following pipes:
> 
> - the straight toboggans, called pipes of type $I$: such a pipe drains the water from input $K$ and re-drains it at output $K$;
> - pairs of neighboring toboggans that cross without meeting and exchange their outputs, called a pair of pipes of type $Z$: such a pipe takes the water in position $K$ and that in position $K + 1$, and re-drains the water of position $K$ into position $K + 1$ and the water of position $K + 1$ into position $K$;
> - pairs of neighboring toboggans where the water in positions $K$ and $K + 1$ re-drains in identical proportions, called a pair of pipes of type $X$: such a pipe takes the water in position $K$ and that in position $K + 1$, and re-drains it into positions $K$ and $K + 1$ in equal proportions (half in $K$ and half in $K + 1$). At each meter, Emmy places a row composed of one combination of her choice of such pipes.
> 
> For the show, she must enter a total quantity of $1$ liter of water into the entries, following a repartition fixed in advance. Then the water descends through the toboggans following the rules above. Finally, the water exits through the output pipes. An example is given in Figure 3. (Figure 3: A pipework of height $H = 3$ with $N = 5$ entries. The quantities of water at each stage are indicated in blue, and the type of pipe is indicated to the right of each pipe or pair of pipes.)
> 
> For the show, Emmy would like the water to come out of all the outputs.
> 
> 1. As a function of $N$ and $H$, is it possible to construct the toboggans so that water comes out of all the outputs if: a) the water enters at a single input, but Emmy can choose which one; b) the water enters in the same quantity at all the inputs; c) the water enters at input $1$; d) $1/2$ liter of water enters at input $1$ and $1/2$ liter enters at input $N$.
> 
> 2. Emmy would like the show to be grandiose: she wants the water to come out in the same quantity from all the outputs. For which values of $N$ and $H$ is it possible to construct the toboggans so that the water comes out in the same quantity from all the outputs if: a) the water enters at input $1$; b) the repartition of the entering water is arbitrary, and the construction of the toboggan is independent of the repartition. Moreover, Emmy would like to construct one pipework such that, for any choice of repartition of the water at the entry, it makes the water come out in the same quantity from all the outputs.
> 
> 3. For this question only, the decor changes slightly: when crossing a pair of pipes of type $X$, the water re-enters in position $K$ in proportion $P$ and in position $K + 1$ in proportion $(1 - P)$, with $0 \le P \le 1$. Repeat question 2 in this frame.
> 
> 4. Emmy chooses to let all the water enter only at input $1$. We call spectacle the list of quantities of water $(x_1, \ldots, x_N)$ that come out of each output. For example, the spectacle corresponding to Figure 3 is $\left(\frac{3}{8}, \frac{3}{16}, \frac{3}{16}, \frac{1}{8}, \frac{1}{8}\right)$. a) As a function of $N$ or $H$, how many different spectacles can Emmy realize? b) Emmy realizes a spectacle she finds very pretty, and decides to mix the entries (the water can enter from whichever input we want), after the construction of the pipework; is it possible to reconstruct a pipework realizing this spectacle, in function of $N$ and $H$?
> 
> 5. Emmy notices that, if the spectators are too far from the toboggans, they cannot distinguish the different pipes. She would like to know whether a spectacle is realizable when, from afar, it appears the same: we say a spectacle $(y_1, \ldots, y_N)$ effectively coming out of the toboggans verifies $|x_i - y_i| \le \varepsilon$ for all $i \in \{1, \ldots, N\}$. We always suppose Emmy makes the water enter at input $1$. a) Fix $\varepsilon > 0$ and $N$: how many spectacles can Emmy realize in appearance? b) Same question.
> 
> 6. Emmy's colleague also wants to realize the show; here again she foresees mixing the entries before the show, but the entries can be partly blocked. She has toboggans of type $Y$ to the left (denoted $\mathcal{Y}$) and to the right (denoted $\mathcal{Y}$), respectively blocking entry $K$ or entry $K + 1$ (see Figure 4, portions of pipework with the pipes $\mathcal{Y}$ and $\mathcal{Y}$). How many spectacles can Emmy realize (exactly) as a function of $N$ and $H$?
> 
> 7. Propose and study other lines of research.

![[src_tfjm_2025__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_invarianti|Invarianti]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*L'acqua scorre attraverso una rete triangolare di tubi scivoli (tipi I, X, Z) che si dividono e si fondono; determinare quali distribuzioni di ingresso/uscita sono raggiungibili.*

> Il problema 2 e' che le scivoli sono divertenti.
> 
> Nel suo tempo libero acquatico, il direttore affidò all'ingegnere Emmy la costruzione di una nuova pipa di toboggan di altezza $H \in \mathbb{N}$ metri. In alto ci sono le voci $N \ge 2$ allineate e numerate da $1$ a $N$, e in basso ci saranno le uscite $N$ allineate e numerate da $1$ a $N$. Per ogni metro, Emmy ha a sua disposizione i seguenti tubi:
> 
> - coppie di coppie vicine che attraversano senza incontrarsi e scambiare le loro uscite, chiamate coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppe di coppe di coppe di coppe di coppe di coppe A ogni metro Emmy mette una fila composta da una combinazione di tali tubi.
> 
> Per la mostra, deve inserire nelle voci una quantità totale di < MSK0/> litri di acqua, seguendo una ripartizione fissata in anticipo. Poi l'acqua scende attraverso i toboggan seguendo le regole sopra. Infine, l'acqua esce attraverso i tubi di uscita. Un esempio è riportato nella figura 3. (Figura 3: Tubo di altezza $H = 3$ con voci $N = 5$. Le quantità di acqua in ciascuna fase sono indicate in blu e il tipo di tubo è indicato a destra di ciascun tubo o coppia di tubi.)
> 
> Per lo spettacolo, Emmy vorrebbe che uscisse l'acqua da tutte le uscite.
> 
> 1. Come funzione di $N$ e $H$, è possibile costruire le slitterie in modo che l'acqua esci da tutte le uscite se: a) l'acqua entra a un singolo ingresso, ma Emmy può scegliere quale; b) l'acqua entra nella stessa quantità a tutti gli ingressi; c) l'acqua entra a ingresso $1$; d) il litro d'acqua entra a ingresso $1$ e il litro d'acqua entra a ingresso $N$.
> 
> 2. Emmy vorrebbe che la serie fosse grandiosa: vuole che l'acqua esci nella stessa quantità da tutti i prodotti. Per i quali i valori di $N$ e $H$ è possibile costruire le toboggan in modo che l'acqua esce nella stessa quantità da tutte le uscite se: a) l'acqua entra all'ingresso $1$; b) la ripartizione dell'acqua che entra è arbitraria e la costruzione della toboggan è indipendente dalla ripartizione. Inoltre, Emmy vorrebbe costruire un tubo in modo tale che, per qualsiasi scelta di ripartizione dell'acqua all'ingresso, faccia uscire l'acqua nella stessa quantità da tutte le uscite.
> 
> 3. Solo per questa questione, l'arredamento cambia leggermente: quando si attraversa un paio di tubi di tipo $X$, l'acqua rientra nella posizione $K$ in proporzione $P$ e nella posizione $K + 1$ in proporzione $(1 - P)$, con $0 \le P \le 1$. Ripeti la domanda 2 in questo quadro.
> 
> 4. Emmy sceglie di lasciare che l'acqua entri solo all'ingresso $1$. Chiamiamo spettacolo l'elenco delle quantità d'acqua $(x_1, \ldots, x_N)$ che escono da ogni uscita. Per esempio, lo spettacolo corrispondente alla figura 3 è $\left(\frac{3}{8}, \frac{3}{16}, \frac{3}{16}, \frac{1}{8}, \frac{1}{8}\right)$. a) Come funzione di $N$ o $H$, quanti diversi spettacoli può realizzare Emmy? b) Emmy realizza uno spettacolo che trova molto bello, e decide di mescolare le voci (l'acqua può entrare da qualsiasi ingresso vogliamo), dopo la costruzione del tubo; è possibile ricostruire un tubo realizzando questo spettacolo, in funzione di $N$ e $H$?
> 
> 5. Emmy osserva che, se gli spettatori sono troppo lontani dalle lampadine, non possono distinguere i diversi tubi. Lei vorrebbe sapere se uno spettacolo è realizzabile quando, da lontano, sembra lo stesso: diciamo che uno spettacolo $(y_1, \ldots, y_N)$ che esce effettivamente dalle toboggan verifica $|x_i - y_i| \le \varepsilon$ per tutti $i \in \{1, \ldots, N\}$. Supponiamo sempre che Emmy faccia entrare l'acqua all'input $1$. a) Fissare $\varepsilon > 0$ e $N$: quante occhiali può realizzare Emmy in apparenza? b) La stessa domanda.
> 
> 6. La collega di Emmy vuole anche realizzare lo show; qui di nuovo prevede di mescolare le voci prima dello show, ma le voci possono essere parzialmente bloccate. Ha una slitta di tipo $Y$ a sinistra (indicato $\mathcal{Y}$) e a destra (indicato $\mathcal{Y}$), che blocca rispettivamente l'entrata $K$ o l'entrata $K + 1$ (vedi figura 4, parti di tubi con i tubi $\mathcal{Y}$ e $\mathcal{Y}$). Quanti spettacoli può realizzare Emmy (esattamente) come funzione di $N$ e $H$?
> 
> 7. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q02.png]]

[[src_tfjm_2025__Q02]]
