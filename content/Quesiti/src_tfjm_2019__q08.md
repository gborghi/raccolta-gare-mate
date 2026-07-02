---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019 — Quesito 8
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2019__Q08
parent: src_tfjm_2019
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019
family: tfjm
year: '2019'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: >-
  Tiling a quartier of an infinite equilateral-triangle grid (Los Angeles) with
  rhombi (losanges)
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_geometria_piana
methods:
  - method_colorazione
  - method_conteggio
  - method_invarianti
  - method_casework
skills:
  - skill_ragionamento_geometrico
  - skill_conteggio_sistematico
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2019
  - livello/TFJM²
  - topic/combinatoria
  - topic/geometria_piana
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Tiling a quartier of an infinite equilateral-triangle grid (Los Angeles) with rhombi (losanges)*

> The city of Los Angeles rests on an infinite triangular grid where each equilateral triangle of side $1$ is a building (\emph{immeuble}), as on Figure 14. A \emph{quartier} of this city is a finite set of buildings. Two buildings having a side in common are said to be \emph{neighbors}.\n\nLamia is the mayor of Los Angeles. She wants to partition the quartiers of her city into co-properties, which are losanges (rhombi) formed by two neighboring buildings. Such a partition of a quartier $Q$ is called a \emph{losangisation}. The number of losangisations possible of a quartier $Q$ is denoted $\mathrm{Los}(Q)$. For example, for Figure 14 one has $\mathrm{Los}(Q) = 0$ because it is impossible to losangise the blue quartier. For Figure 15 one has $\mathrm{Los}(Q) = 1$ because there exists a unique manner to losangise the orange quartier.\n\n\textbf{1.} If the quartier $Q$ is of one of the following forms, is it possible to losangise this quartier? In that case, how many losangisations are possible? If not, how many co-properties can one form at most? (a) An equilateral triangle of side $n$. (b) A losange of side $n$. (c) A losange of side $n$ from which two buildings have been removed. In the last case, adapt the answer according to the position of the removed buildings.\n\nIn order to know whether a losangisation is possible, Lamia asks for additional information on the quartiers of the city. Two buildings of the same quartier $Q$ are said to be of the same \emph{type} if they are oriented in the same direction and if their neighbors in the quartier $Q$ are on the same sides. For example, in Figure 16, buildings $1$ and $6$ are of the same type, as are buildings $2$ and $4$. All the other buildings are unique.\n\nIn a quartier $Q$ that she does not know, Lamia knows the number of buildings of each type. This information is denoted $I$. For example, in Figure 16 she knows that there are exactly two buildings of the type "pointing upward, with a single neighbor at the top right", no building of the type "pointing upward, without neighbor", etc.\n\n\textbf{2.} Look for necessary conditions on $I$ for the quartier to be losangisable. Look for sufficient conditions. Is it possible to find necessary and sufficient conditions on $I$?\n\n\textbf{3.} Deduce from $I$ bounds as precise as possible on $\mathrm{Los}(Q)$.\n\nThe \emph{valence} of a building is the number of neighbors of this building that are in the same quartier. For $0 \le i \le 3$ one denotes by $V_i(Q)$ the number of buildings of valence $i$ in $Q$.\n\n\textbf{4.} What are the quadruplets $(V_0(Q), V_1(Q), V_2(Q), V_3(Q))$ possible in the case where: (a) $Q$ is an arbitrary quartier? (b) $Q$ is a losangisable quartier?\n\n\textbf{5.} Propose and study other avenues of research.

![[src_tfjm_2019__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_colorazione|Colorazione]], [[method_conteggio|Conteggio]], [[method_invarianti|Invarianti]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<span class="qlang-split" data-lang="it"></span>


*Tinging un quartiere di una griglia triangolare equilaterale infinita (Los Angeles) con rhombi (losangi)*

> La città di Los Angeles si fonda su una griglia triangolare infinita in cui ogni triangolo equilaterale di lato $1$ è un edificio (\emph{immeuble}), come nella Figura 14. Un quartiere di questa città è un insieme finito di edifici. Si dice che due edifici che hanno un lato in comune siano vicini. Vuole dividere i quartieri della sua città in coproprietà, che sono losanges (rhombi) formati da due edifici vicini. Tale divisione di un quartiere $Q$ è chiamata "losangizzazione". Il numero di perdite possibili di un quartiere $Q$ è indicato come $\mathrm{Los}(Q)$. Per esempio, per la figura 14 si ha $\mathrm{Los}(Q) = 0$ perché è impossibile sanguinare il quartiere blu. Per la figura 15 si ha $\mathrm{Los}(Q) = 1$ perché esiste un modo unico per sanguinare il quartiere arancione. In quel caso, quante perdite di sangue sono possibili? In caso contrario, quante coproprietà può formare un individuo al massimo? a) Un triangolo equilaterale laterale $n$. b) Una perdita di lato $n$. c) Una perdita laterale $n$ da cui sono stati rimossi due edifici. In quest'ultimo caso, adattare la risposta in base alla posizione degli edifici rimossi. Per sapere se è possibile una perdita di sangue, Lamia chiede ulteriori informazioni sui quartieri della città. Si dice che due edifici dello stesso quartiere $Q$ siano dello stesso tipo se sono orientati nella stessa direzione e se i loro vicini nel quartiere $Q$ sono sullo stesso lato. Ad esempio, nella figura 16, gli edifici $1$ e $6$ sono dello stesso tipo, così come gli edifici $2$ e $4$. Tutti gli altri edifici sono unici. In un quartiere che lei non conosce, Lamia conosce il numero di edifici di ogni tipo. Questa informazione è indicata come $I$. Ad esempio, nella Figura 16 sa che ci sono esattamente due edifici del tipo "indicando verso l'alto, con un solo vicino in alto a destra", nessun edificio del tipo "indicando verso l'alto, senza vicino", ecc. Cercate condizioni sufficienti. È possibile trovare condizioni necessarie e sufficienti su $I$?\n\n\textbf{3.} Deduzione dai limiti $I$ il più preciso possibile su $\mathrm{Los}(Q)$.\n\nLa valenza di un edificio è il numero di vicini di questo edificio che si trovano nello stesso quartiere. Per $0 \le i \le 3$ si indica con $V_i(Q)$ il numero di edifici di valenza $i$ in $Q$.\n\n\textbf{4.} Quali sono i quadrupletti $(V_0(Q), V_1(Q), V_2(Q), V_3(Q))$ possibili nel caso in cui: (a) $Q$ sia un quartiere arbitrario? (b) $Q$ è un quartiere perduibile?\n\n\textbf{5.} Proporre e studiare altre vie di ricerca.

![[src_tfjm_2019__Q08.png]]

[[src_tfjm_2019__Q08]]
