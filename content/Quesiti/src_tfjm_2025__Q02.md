---
tipo: quesito
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

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 2

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
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
