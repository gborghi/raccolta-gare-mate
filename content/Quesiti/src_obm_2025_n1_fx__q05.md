---
title: Olimpíada Brasileira de Matemática 2025 — Nível 1 — Fase x — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2025_n1_fx__Q05
parent: src_obm_2025_n1_fx
competition: Olimpíada Brasileira de Matemática 2025 — Nível 1 — Fase x
family: obm
year: '2025'
level: OBM Nível 1
country: Brasile
modalita: individuale
nivel: '1'
fase: x
quesito: '5'
summary: >-
  The 'arrumadinho' game on a 2xn board: each first-row number must reappear in
  an adjacent second-row column, and no left prefix of the second row equals
  {1,...,k} except k=n. Give an example for n=8 and count the 2x2025 cards.
qa_score: '2'
topics:
  - topic_combinatoria
methods:
  - method_conteggio
  - method_ricorsione
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_riconoscimento_pattern
  - skill_casework_accurato
  - skill_astrazione
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2025
  - livello/OBM-Nível-1
  - nivel/1
  - fase/x
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*The 'arrumadinho' game on a 2xn board: each first-row number must reappear in an adjacent second-row column, and no left prefix of the second row equals {1,...,k} except k=n. Give an example for n=8 and count the 2x2025 cards.*

> A card of the game *arrumadinho* (tidy) is a $2\times n$ board that must satisfy the following rules:
> 
> (I) Each number written in the first row must appear in the second row in one of the two columns closest to the one it occupies in the first row. Note that the same number can appear in the same column in the two rows, that is, the column may contain two equal numbers.
> 
> (II) The set of numbers written in the first $k$ consecutive cells of the second row, counting from left to right, never equals the set $\{1,2,3,\ldots,k\}$, except for $k=n$.
> 
> For example, in the figure, tableaux $1$ to $4$ are not cards: Tableau $1$ does not satisfy rule (I); Tableau $2$ does not satisfy rule (II) (in the second row the set of the first numbers reaching column $4$ equals $\{1,2,3,4\}$); Tableau $3$ does not satisfy rule (I) (a rule (I) is disrespected twice); Tableau $4$ does not satisfy either rule (I) or rule (II).
> 
> (a) Copy the card below onto your solution sheet and give an example of a filling so that it becomes part of the game.
> $$\begin{array}{|c|c|c|c|c|c|c|c|}\hline 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ \hline \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} \\ \hline\end{array}$$
> 
> (b) What is the number of $2\times 2025$ cards of this game?

![[src_obm_2025_n1_fx__Q05.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1BAsW5wUtp8e4eUtIjSrr-GeYtmuXz4Ok/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Il gioco "arrumadinho" su una tavola 2xn: ogni numero di prima riga deve riemergere in una colonna adiacente di seconda riga, e nessun prefisso sinistro della seconda riga equivale a {1,...,k} tranne k=n. Date un esempio di n=8 e contate le carte 2x2025.*

> Una carta del gioco *arrumadinho* (tidy) è una tabella $2\times n$ che deve soddisfare le seguenti regole:
> 
> (I) Ogni numero scritto nella prima riga deve apparire nella seconda riga in una delle due colonne più vicine a quella che occupa nella prima riga. Si noti che lo stesso numero può apparire nella stessa colonna nelle due righe, cioè la colonna può contenere due numeri uguali.
> 
> (II) L'insieme di numeri iscritto nelle prime celle consecutive $k$ della seconda riga, contando da sinistra a destra, non è mai uguale all'insieme $\{1,2,3,\ldots,k\}$, tranne per $k=n$.
> 
> Ad esempio, nella figura, le tabelle $1$ a $4$ non sono carte: la tabella $1$ non soddisfa la regola (I); la tabella $2$ non soddisfa la regola (II) (nella seconda riga l'insieme dei primi numeri che raggiungono la colonna $4$ è uguale a $\{1,2,3,4\}$); la tabella $3$ non soddisfa la regola (I) (una regola (I) è violata due volte); la tabella $4$ non soddisfa né la regola (I) né la regola (II).
> 
> (a) Copia la carta qui sotto sul tuo foglio di soluzione e da un esempio di riempimento in modo che diventi parte del gioco. $$\begin{array}{|c|c|c|c|c|c|c|c|}\hline 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ \hline \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} & \phantom{0} \\ \hline\end{array}$$
> 
> b) Qual è il numero delle carte < MSK0/> di questo gioco?

![[src_obm_2025_n1_fx__Q05.png]]

[[src_obm_2025_n1_fx__Q05]]
