---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2021__Q01
parent: src_tfjm_2021
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '1'
summary: >-
  Bomb with combination lock: shortest sequence of single-wheel clicks passing
  through all combinations
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_grafi
  - method_conteggio
  - method_casework
  - method_ricorsione
skills:
  - skill_modellizzazione
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2021
  - livello/TFJM²
  - topic/combinatoria
  - topic/aritmetica
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Bomb with combination lock: shortest sequence of single-wheel clicks passing through all combinations*

> Agent 1234 must defuse a bomb protected by a combination lock.
> 
> The lock consists of $r \ge 2$ independent wheels. Each wheel is made of $n \ge 2$ notches numbered from $0$ to $n-1$. The agent can turn one wheel by one notch (a click) but, while doing so, the wheel can move only in a single direction: $0 \to 1 \to \cdots \to n-1 \to 0$. The lock is initially in position $0\ldots0$.
> 
> If the agent manages to display the correct combination, the bomb is automatically defused. Moreover, since the lock is rudimentary, the bomb keeps track of all combinations already displayed previously; thus, if the correct combination has already been displayed earlier, the position $0\ldots0$ included, the explosion has already been triggered.
> 
> Since the agent does not know the combination, his only objective is to find a sequence of movements that passes through all possible combinations at least once.
> 
> For example, if $n=3$ and $r=2$, the agent tests every combination with the sequence $00 \to 10 \to 11 \to 21 \to 22 \to 02 \to 12 \to 00$. A sequence may not be $01 \to 11 \to 21 \to 01$ since the combination $01$ is repeated, nor $01 \to 21$ since the wheels cannot advance by two clicks at once.
> 
> **(1)** In this question, suppose $n=10$ and $r=3$. Is it possible for the agent to defuse the bomb for sure? If not, what is the maximum number of testable combinations?
> 
> **(2)** Revisit the question in the general case where one supposes only $n \ge 2$ and $r \ge 2$.
> 
> **(3)** Revisit question (2) if the agent can never turn the same wheel twice in a row.
> 
> **(4)** Let $2 \le d \le r-1$. Revisit question (2) if the agent cannot turn a wheel that is among the last $d$ wheels turned (the previous question corresponds to $d=1$).
> 
> **(5)** Let $2 \le k \le r$. Revisit question (2) if, instead of turning one wheel at a time, the agent turns $k$ of them at once, each by one notch (without passing through an intermediate combination). For example, if $n=10$, $r=3$ and $k=2$, the agent can begin his sequence of movements with $000 \to 011 \to 112 \to 213 \to \cdots$
> 
> **(6)** Let $2 \le k \le r$. Revisit question (2) if, instead of turning one wheel at a time, the agent turns $k$ of them at once: the first by one notch, the second by 2, and so on up to the $k$-th by $k$ (without passing through an intermediate combination). For example, if $n=10$, $r=3$ and $k=2$, the agent can begin his sequence of movements with $000 \to 012 \to 222 \to 342 \to \cdots$
> 
> **(7)** In this question, suppose $n=10$. Let $m \ge 2$. Agent 1234 has learned that the bomb has a manufacturing defect, and the combination is a multiple of $m$. She therefore looks for sequences of movements passing through several combinations that are multiples of $m$, while making as few movements as possible. Revisit the previous questions in this framework. One may begin by treating question (2) for the values $m = 10, 2, 3, 4$.
> 
> **(8)** Propose and explore other research directions.

![[src_tfjm_2021__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_grafi|Grafi]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Bomba con serratura di combinazione: sequenza più breve di clic su una ruota che attraversano tutte le combinazioni*

> L'agente 1234 deve disattivare una bomba protetta da una serratura combinata.
> 
> La serratura è costituita da ruote indipendenti $r \ge 2$. Ogni ruota è costituita da incisioni $n \ge 2$ numerate da $0$ a $n-1$. L'agente può girare una ruota con un punto (un clic), ma, nel farlo, la ruota può muoversi solo in una sola direzione: $0 \to 1 \to \cdots \to n-1 \to 0$. La serratura è inizialmente in posizione $0\ldots0$.
> 
> Se l'agente riesce a visualizzare la combinazione corretta, la bomba viene disattivata automaticamente. Inoltre, poiché la serratura è rudimentale, la bomba tiene traccia di tutte le combinazioni già visualizzate in precedenza; quindi, se la combinazione corretta è già stata visualizzata in precedenza, la posizione $0\ldots0$ inclusa, l'esplosione è già stata attivata.
> 
> Dal momento che l'agente non conosce la combinazione, il suo unico obiettivo è trovare una sequenza di movimenti che passa attraverso tutte le combinazioni possibili almeno una volta.
> 
> Ad esempio, se $n=3$ e $r=2$, l'agente prova ogni combinazione con la sequenza $00 \to 10 \to 11 \to 21 \to 22 \to 02 \to 12 \to 00$. Una sequenza non può essere $01 \to 11 \to 21 \to 01$ poiché la combinazione $01$ è ripetuta, né $01 \to 21$ poiché le ruote non possono avanzare di due clic contemporaneamente.
> 
> **(1) ** In questa domanda supponiamo $n=10$ e $r=3$. E' possibile che l'agente possa disattivare la bomba con certezza? In caso contrario, qual è il numero massimo di combinazioni verificabili?
> 
> **(2) ** Rivedere la questione nel caso generale in cui si suppone solo $n \ge 2$ e $r \ge 2$.
> 
> **(3) ** Rivedi la domanda (2) se l'agente non può mai girare la stessa ruota due volte di seguito.
> 
> **(4) ** Lasciate $2 \le d \le r-1$. Rivedi la domanda (2) se l'agente non può girare una ruota che è tra le ultime ruote girate $d$ (la domanda precedente corrisponde a $d=1$).
> 
> **(5) ** Lasciate $2 \le k \le r$. Rivisitare la domanda (2) se, invece di girare una ruota alla volta, l'agente le gira $k$ in una volta, ciascuna a un punto (senza passare attraverso una combinazione intermedia). Per esempio, se $n=10$, $r=3$ e $k=2$, l'agente può iniziare la sua sequenza di movimenti con $000 \to 011 \to 112 \to 213 \to \cdots$
> 
> **(6) ** Lasciate $2 \le k \le r$. Rivisitare la domanda (2) se, invece di girare una ruota alla volta, l'agente ne gira $k$ contemporaneamente: la prima per una notta, la seconda per 2, e così via fino alla $k$-th per $k$ (senza passare attraverso una combinazione intermedia). Ad esempio, se $n=10$, $r=3$ e $k=2$, l'agente può iniziare la sua sequenza di movimenti con $000 \to 012 \to 222 \to 342 \to \cdots$
> 
> **(7) ** In questa domanda, supponiamo $n=10$. Let $m \ge 2$. L'agente 1234 ha scoperto che la bomba ha un difetto di fabbricazione, e la combinazione è un multiple di$m$. Cerca quindi sequenze di movimenti che passano attraverso diverse combinazioni che sono multipli di $m$, facendo al contempo il minor numero di movimenti possibile. Rivedere le domande precedenti in questo quadro. Si può iniziare trattando la domanda (2) per i valori $m = 10, 2, 3, 4$.
> 
> **(8) ** Proporre e esplorare altre direzioni di ricerca.

![[src_tfjm_2021__Q01.png]]

[[src_tfjm_2021__Q01]]
