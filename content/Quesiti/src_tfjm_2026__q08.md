---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026 — Quesito 8
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2026__Q08
parent: src_tfjm_2026
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026
family: tfjm
year: '2026'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: >-
  Gaston's insertion-by-interval sorting algorithm G inserts a_k into the k-th
  position whose subinterval [(k-1)/k, k/k] it falls in; study fixed points, the
  count N(L) of preimages, its min/max over permutations, the iterated-sort
  count N'(L), and worst-case number of iterations to sort.
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
  - method_conteggio
  - method_ricorsione
  - method_estremalita
skills:
  - skill_conteggio_sistematico
  - skill_riconoscimento_pattern
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2026
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Gaston's insertion-by-interval sorting algorithm G inserts a_k into the k-th position whose subinterval [(k-1)/k, k/k] it falls in; study fixed points, the count N(L) of preimages, its min/max over permutations, the iterated-sort count N'(L), and worst-case number of iterations to sort.*

> 8. Sorting too fast.
> 
> Gaston wishes to sort in increasing order a list of $N \ge 2$ numbers in $[0,1]$, all distinct. Not knowing much about computing, he proposes the following algorithm:
> 
>    - One numbers the starting list $[a_1; a_2; a_3; \dots; a_N]$ and one begins with an empty arrival list.
>    - One places $a_1$ in the arrival list.
>    - One places $a_2$ in the arrival list: if it is in the interval $[0, 1/2]$, one puts it first, and if it is in the interval $[1/2; 1]$ one puts it second.
>    - One places $a_3$ in the arrival list: if it is in the interval $[0, 1/3]$, one puts it first; if it is in the interval $[1/3; 2/3]$ one puts it second; and if it is in the interval $[2/3; 1]$ one puts it third.
>    - More generally, one places $a_n$ successively in the arrival list: one puts it in the $k$-th position, where $k$ is such that $a_n \in [(k-1)/n; k/n]$.
> 
> For example, starting from the list $[0.1; 0.8; 0.7; 0.2]$, Gaston obtains successively $[0.1]$, $[0.1; 0.8]$, $[0.1; 0.7; 0.8]$ and finally $[0.2; 0.1; 0.7; 0.8]$.
> 
> We denote $G$ the function corresponding to Gaston's algorithm: $G([0.1; 0.8; 0.7; 0.2]) = [0.2; 0.1; 0.7; 0.8]$.
> 
> We observe that this algorithm does not always sort the list. The aim of this problem is to study to what extent it is efficient. Throughout the problem, a list is said to be sorted if it is ordered in increasing order.
> 
> 1. Which sorted lists $L$ satisfy $G(L) = L$?
> 
> When lists are not sorted, the result depends greatly on the order in which the starting list is arranged. For a list $L$ of length $n$, we denote $N(L)$ the number of lists $L'$ such that $G(L') = L$. Note that if $G(L') = L$, then $L'$ is composed of the same numbers as $L$, in some possibly different order. The previous example shows that $N([0.2; 0.1; 0.8; 0.7]) \ge 1$, since there exists at least one list that works.
> 
> 2. Characterise the lists $L$ such that, for every permutation $L'$ of $L$, $N(L') = 1$.
> 
> 3. Among the sorted lists $L$ of length $n$, determine (or bound as precisely as possible) the minimal value of $N(L)$. In particular, one will look for the limit of this minimum as $n \to \infty$, if it exists. (In other words, how bad can the algorithm be?)
> 
> 4. Repeat the previous question for the maximal value of $N(L)$. (In other words, how good can the algorithm be?)
> 
> 5. Let $L$ be a sorted list of length $n$. Is it possible that, for some permutation $L'$ of $L$, $N(L') > N(L)$? (In other words, does the algorithm always tend to sort?)
> 
> When the lists are not sorted, one may apply the algorithm again to the obtained list, and so on. For a list $L$ of length $n$, we denote $N'(L)$ the number of ways to form the sorted list by iterating the algorithm until it stops.
> 
> 6. Is it possible, for a sorted list $L$, that $N(L)$ is equal to $N'(L)$? (In other words, is iterating useless?) If yes, characterise the lists that attain equality. If no, quantify the minimal gap between $N(L)$ and $N'(L)$.
> 
> 7. Among the lists $L$ of length $n$, determine (or bound as precisely as possible) the maximal value of $N'(L)$. In particular, one will look for the limit of $\frac{N'(L)}{n!}$ as $n \to \infty$, if it exists. (In other words, how good can the algorithm be?)
> 
> 8. Among the lists $L$ of length $n$, determine (or bound as precisely as possible) the maximal number of steps to perform to sort the list, after which every list has either already been sorted or never will be. (In other words, how slow can the algorithm be?)
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<span class="qlang-split" data-lang="it"></span>


*L'algoritmo di classificazione inserimento-per-intervallo di Gaston inserisce a_k nella posizione k-th in cui il subintervallo [(k-1)/k, k/k] cade; studiare i punti fissi, il conteggio N(L) delle preimmagini, la sua min/max sulle permutazioni, il conteggio di classificazione iterata N'(L), e il numero peggiore di iterazioni da ordinare.*

> 8. Sortando troppo velocemente.
> 
> Gaston desidera ordinare in ordine crescente un elenco di numeri $N \ge 2$ in $[0,1]$, tutti distinti. Non sapendo molto di calcolo, propone l'algoritmo seguente:
> 
> - Uno numerizza la lista di partenza $[a_1; a_2; a_3; \dots; a_N]$ e l'altro inizia con una lista di arrivi vuota. - Un posto $a_1$ nella lista degli arrivi. - Un posto $a_2$ nella lista degli arrivi: se si trova nell'intervallo $[0, 1/2]$, si pone in primo luogo, e se si trova nell'intervallo $[1/2; 1]$ si pone in secondo luogo. - inserire un $a_3$ nell'elenco degli arrivi: se si trova nell'intervallo $[0, 1/3]$, si inserisce in primo luogo; se si trova nell'intervallo $[1/3; 2/3]$, si inserisce in secondo luogo; e se si trova nell'intervallo $[2/3; 1]$, si inserisce in terzo luogo. - Più in generale, si inserisce successivamente $a_n$ nella lista degli arrivi: si inserisce nella posizione $k$-th, dove $k$ è tale che $a_n \in [(k-1)/n; k/n]$.
> 
> Ad esempio, partendo dall'elenco $[0.1; 0.8; 0.7; 0.2]$, Gaston ottiene successivamente $[0.1]$, $[0.1; 0.8]$, $[0.1; 0.7; 0.8]$ e infine $[0.2; 0.1; 0.7; 0.8]$.
> 
> Indichiamo $G$ la funzione corrispondente all'algoritmo di Gaston: $G([0.1; 0.8; 0.7; 0.2]) = [0.2; 0.1; 0.7; 0.8]$.
> 
> Si osserva che questo algoritmo non classifica sempre la lista. L'obiettivo di questo problema è quello di studiare la sua efficacia. In tutto il problema, si dice che un elenco sia ordinato se viene ordinato in ordine crescente.
> 
> 1. Quali elenchi classificati $L$ soddisfano $G(L) = L$?
> 
> Quando le liste non sono ordinate, il risultato dipende in gran parte dall'ordine in cui è ordinata la lista iniziale. Per un elenco $L$ di lunghezza $n$, indichiamo $N(L)$ il numero di elenco $L'$ tale che $G(L') = L$. Si noti che se $G(L') = L$, allora $L'$ è composto dai medesimi numeri di $L$, in qualche ordine possibilmente diverso. L'esempio precedente mostra che $N([0.2; 0.1; 0.8; 0.7]) \ge 1$, poiché esiste almeno un elenco che funziona.
> 
> 2. Caratterizzare gli elenchi $L$ in modo tale che, per ogni permutazione $L'$ di $L$, $N(L') = 1$.
> 
> 3. Tra le liste ordinate $L$ di lunghezza $n$, determinare (o limitare con la massima precisione possibile) il valore minimo di $N(L)$. In particolare, si cercherà il limite di questo minimo come $n \to \infty$, se esiste. (In altre parole, quanto male può essere l'algoritmo?)
> 
> 4. Ripetere la domanda precedente per il valore massimo di $N(L)$. (In altre parole, quanto può essere buono l'algoritmo?)
> 
> 5. $L$ sia un elenco ordinato di lunghezza $n$. È possibile che, per una certa permutazione $L'$ di $L$, $N(L') > N(L)$? (In altre parole, l'algoritmo tende sempre a ordinare?)
> 
> Quando le liste non sono ordinate, si può applicare di nuovo l'algoritmo alla lista ottenuta, e così via. Per un elenco $L$ di lunghezza $n$, indichiamo $N'(L)$ il numero di modi per formare l'elenco ordinato iterando l'algoritmo finché non si ferma.
> 
> 6. È possibile, per un elenco ordinato $L$, che $N(L)$ sia uguale a $N'(L)$? (In altre parole, è inutile ripetere?) Se sì, caratterizza le liste che raggiungono l'uguaglianza. Se no, quantificare il minimo di distanza tra $N(L)$ e $N'(L)$.
> 
> 7. Tra gli elenchi $L$ di lunghezza $n$, determinare (o limitare con la massima precisione possibile) il valore massimo di $N'(L)$. In particolare, si cercherà il limite di $\frac{N'(L)}{n!}$ come $n \to \infty$, se esiste. (In altre parole, quanto può essere buono l'algoritmo?)
> 
> 8. Tra gli elenchi $L$ di lunghezza $n$, determinare (o limitare con la massima precisione possibile) il numero massimo di passi da eseguire per ordinare l'elenco, dopo i quali ogni elenco è già stato ordinato o non lo sarà mai. (In altre parole, quanto può essere lento l'algoritmo?)
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q08.png]]

[[src_tfjm_2026__Q08]]
