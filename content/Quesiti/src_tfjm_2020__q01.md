---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020 — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2020__Q01
parent: src_tfjm_2020
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020
family: tfjm
year: '2020'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '1'
summary: Domino puzzle tiling completion on k×n grids
qa_score: '2'
topics:
  - topic_combinatoria
methods:
  - method_casework
  - method_conteggio
  - method_invarianti
  - method_colorazione
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_ragionamento_geometrico
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2020
  - livello/TFJM²
  - topic/combinatoria
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Domino puzzle tiling completion on k×n grids*

> Laetitia is an expert at grid games. To change from Sudoku, she creates puzzles.
> 
> She considers a $k \times n$ grid whose rows are numbered from $1$ to $k$ and whose columns are numbered from $1$ to $n$, with $k \ge 2$. She places (horizontally or vertically) rectangular dominoes of size $k \times 1$ in it. The dominoes must not overlap and must not go beyond columns $1$ to $n$. In Figure 1, the orange domino represents a valid grid position, and the blue and green dominoes overlap.
> 
> Then, the player must try to complete the grid, always with $k \times 1$ dominoes and respecting the same rules.
> 
> Figure 2 shows an example of a valid grid with $k=3$, $n=9$ in which Laetitia placed two dominoes. This grid can be completed in three different ways; one of them is shown with dotted lines.
> 
> **1.** Laetitia decides to leave at least one $k \times k$ square free and to arrange things so that it is possible to complete the grid. What are the possible positions of this square in the grid, and which are the possible ways to complete the grid? If so, for which values of $n$ and $k$ can there be only one way?
> 
> **2.** Let $k$ and $n$ be two fixed integers. What is the minimum number of dominoes Laetitia must place so that the player cannot complete the grid in at least two different ways?
> 
> **3.** Let $k$ and $n$ be two positive integers. What is the maximum number of positions a domino can occupy? Study the cases where $n$ and $k$ divide each other.
> 
> **4.** From now on the grid has size $n \times n$, and $k \ge 2$ is a divisor of $n$. Revisit the previous questions in this case.
> 
> **5.** Laetitia colours the cells of the grid whose both coordinates are multiples of $k$. She imposes that an extremity of a domino lands on one of these coloured cells, as illustrated by Figure 3. For which values of $n$ and $k$ can she arrange things so that there is at least one way to complete the grid? Is there at most one?
> 
> **6.** Laetitia now colours the same cells on her dominoes as well, but this time she does not require that it is the extremity that covers the coloured cell. For which values of $n$ and $k$ can she arrange things so that there is at least one way to complete the grid?
> 
> **7.** Propose and study other avenues of research.

![[src_tfjm_2020__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_invarianti|Invarianti]], [[method_colorazione|Colorazione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Completamento di piastrelle per puzzle doministiche su k×n reti*

> Laetitia è un'esperta di giochi a griglia. Per cambiare da Sudoku, crea enigmi.
> 
> Si considera una griglia $k \times n$ le cui righe sono numerate da $1$ a $k$ e le cui colonne sono numerate da $1$ a $n$, con $k \ge 2$. Si inseriscono (orizzontalmente o verticalmente) dominosi rettangolari di dimensioni $k \times 1$. I domino non devono sovrapporre e non devono superare le colonne $1$ a $n$. Nella figura 1, il domino arancione rappresenta una posizione valida della griglia, e i domino blu e verdi si sovrappongono.
> 
> Il giocatore deve poi provare a completare la griglia, sempre con $k \times 1$ dominò e rispettando le stesse regole.
> 
> La figura 2 mostra un esempio di una griglia valida con $k=3$, $n=9$ in cui Laetitia ha posizionato due domino. Questa griglia può essere completata in tre modi diversi; uno di essi è mostrato con linee puntate.
> 
> Laetitia decide di lasciare almeno un quadrato libero e di organizzare le cose in modo da poter completare la griglia. Quali sono le posizioni possibili di questo quadrato nella griglia, e quali sono i modi possibili per completare la griglia? In tal caso, per quali valori di $n$ e $k$ può esistere solo una via?
> 
> **2.** $k$ e $n$ siano due integri fissi. Qual è il numero minimo di domino che Laetitia deve mettere in modo che il giocatore non possa completare la griglia in almeno due modi diversi?
> 
> **3.** $k$ e $n$ siano due integri positivi. Qual è il numero massimo di posizioni che un domino può occupare? Studiare i casi in cui $n$ e $k$ si dividono.
> 
> **4.** Da ora la griglia ha dimensioni $n \times n$, e $k \ge 2$ è un divisore di $n$. Rivisitare le domande precedenti in questo caso.
> 
> **5.** Laetitia colora le celle della griglia le cui entrambe le coordinate sono multipli di $k$. Lei impone che un'estremità di un domino atterri su una di queste celle colorate, come illustrato dalla Figura 3. Per quali valori di $n$ e $k$ può organizzare le cose in modo che ci sia almeno un modo per completare la griglia? C'e' almeno uno?
> 
> Laetitia ora colora le stesse cellule anche sui suoi domino, ma questa volta non richiede che sia l'estremità che copre la cellula colorata. Per quali valori di $n$ e $k$ può organizzare le cose in modo che ci sia almeno un modo per completare la griglia?
> 
> **7.** Proporre e studiare altre vie di ricerca.

![[src_tfjm_2020__Q01.png]]

[[src_tfjm_2020__Q01]]
