---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019 — Quesito 7
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2019__Q07
parent: src_tfjm_2019
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019
family: tfjm
year: '2019'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  Distributing chocolates round-robin to children in a line; when the
  configuration becomes balanced
qa_score: '3'
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_congruenze
  - method_conteggio
  - method_casework
skills:
  - skill_manipolazione_algebrica
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2019
  - livello/TFJM²
  - topic/aritmetica
  - topic/combinatoria
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Distributing chocolates round-robin to children in a line; when the configuration becomes balanced*

> Papi Théo offers chocolates to his grandchildren. His $n$ grandchildren are placed in a line, numbered from $1$ to $n$. Each day he opens a box of chocolates. The first day he gives the first box to child number $1$; this one takes a chocolate, then passes the box to its neighbor, who serves itself, and so on. For fairness, so that it is not always the same one who serves first, the second day it is the second child who receives the full box, takes a chocolate, then passes it to child $1$, etc. When the box arrives at child $n$, this one passes it to child $1$.\n\nBut the boxes of chocolates are of variable size. The first day, the box contains only a single chocolate. The second day it contains $2$. And so on, the $j$-th day the box contains $j$ chocolates.\n\nFigure 13 shows the case of $4$ grandchildren, after $5$ days. The grandchildren received respectively $5$, $3$, $4$ and $3$ chocolates. The number written on each chocolate corresponds to the day it was distributed.\n\nOne says that at a given instant a configuration is \emph{balanced} if, at that instant, all the grandchildren have received the same number of chocolates.\n\n\textbf{1.} According to the value of $n$, is the configuration balanced after $n$ days?\n\n\textbf{2.} According to the values of $n$, does there exist a day at the end of which the configuration is balanced? If so, what is the first day where this occurs?\n\nPapi Théo cannot keep buying ever larger boxes of chocolates. He decides to organize himself differently; let $b(j)$ be the number of chocolates in the box the $j$-th day. The previous questions correspond to $b(j) = j$.\n\n\textbf{3.} To limit the inflation of the size of the boxes of chocolates, Papi Théo decides that every day one must start over from zero. He chooses boxes such that $b(j)$ is the remainder of the Euclidean division of $j$ by $d$. According to the values of $n$ and $d$, does there exist a day at the end of which the configuration is balanced? If so, what is the first day where this occurs?\n\nPapi Théo now chooses $d$ integers $(b_1, b_2, \ldots, b_d)$ and defines the function $b$ so that for every integer $j$, $b(j) = b_\ell$ where $\ell$ is the remainder of the Euclidean division of $j$ by $d$. The previous case corresponds to choosing $b_i = i$ for all $1 \le i < d$ and $b_d = 0$.\n\n\textbf{4.} According to the values of $n$, $d$ and of positive integers $(c_1, c_2, \ldots, c_n)$, is it possible to choose the integers $(b_1, b_2, \ldots, b_d)$ so that, after $\mathrm{lcm}(n,d)$ days, child $i$ has received exactly $c_i$ chocolates, for all $1 \le i \le n$? One says that a mode of distribution is \emph{equitable} if there exists an infinity of days at the end of which the configuration is balanced. Papi Théo henceforth buys his boxes of chocolates by lot. A lot $(b_1, b_2, \ldots, b_d)$ of boxes of chocolates is a set of $d$ boxes of sizes $b_1, b_2, \ldots, b_d$ with $0 \le b_1 \le b_2 \le \ldots \le b_d$. He declares that a lot is \emph{reasonable} if one can find a permutation $(b_1, b_2, \ldots, b_d)$ of the sizes of the boxes of the lot that gives an equitable mode of distribution. For example, for $n=4$ and $d=4$, the lot $(1,1,3,3)$ is reasonable because by choosing $(b_1, b_2, b_3, b_4) = (1,3,1,3)$ one obtains an equitable mode of distribution. On the other hand $(0,1,1,3)$ is not a reasonable lot.\n\n\textbf{5.} According to the integer $n$, what are the values of $d$ for which all the possible lots are reasonable?\n\n\textbf{6.} What are the necessary and sufficient conditions for a given lot to be reasonable?\n\n\textbf{7.} One supposes that for every integer $j$, $b(j) = j^2$. Is the distribution equitable? And with $b(j) = j^p$ for another integer $p$?\n\n\textbf{8.} Propose and study other avenues of research.

![[src_tfjm_2019__Q07.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<span class="qlang-split" data-lang="it"></span>


Distribuzione di cioccolatini a rotonda ai bambini in fila; quando la configurazione diventa equilibrata

> Papi Théo offre cioccolati ai suoi nipoti. I suoi nipoti $n$ sono posti in una riga, numerata da $1$ a $n$. Ogni giorno apre una scatola di cioccolati. Il primo giorno dà la prima scatola al bambino numero $1$; questo prende un cioccolato, poi passa la scatola al suo vicino, che serve se stesso, e così via. Per essere onesti, non è sempre lo stesso che serve per primo, il secondo giorno è il secondo bambino che riceve la scatola piena, prende un cioccolato, poi lo passa al bambino $1$, ecc. Quando la scatola arriva al bambino $n$, questo la passa al bambino $1$. Il primo giorno, la scatola contiene solo una sola cioccolata. Il secondo giorno contiene $2$. E così via, il $j$-th giorno la scatola contiene $j$ cioccolatini.\n\nLa figura 13 mostra il caso dei nipoti $4$, dopo $5$ giorni. I nipoti hanno ricevuto rispettivamente $5$, $3$, $4$ e $3$ cioccolati. Il numero scritto su ogni cioccolato corrisponde al giorno in cui è stato distribuito.\n\nSi dice che in un dato istante una configurazione è \emph{balanced} se, in quel istante, tutti i nipoti hanno ricevuto lo stesso numero di cioccolati.\n\n\textbf{1.} Secondo il valore di $n$, la configurazione è bilanciata dopo $n$ giorni?\n\n\textbf{2.} Secondo i valori di $n$, esiste un giorno al termine del quale la configurazione è bilanciata? Se è così, qual è il primo giorno in cui questo accade? Papa Théo non può continuare a comprare scatole di cioccolato sempre più grandi. Decide di organizzarsi in modo diverso; lascia che il numero di cioccolati nella scatola $b(j)$ sia il numero di cioccolati nella scatola il $j$-th giorno. Per limitare l'inflazione delle dimensioni delle scatole di cioccolato, Papi Théo decide che ogni giorno bisogna ricominciare da zero. Sceglie caselle tali che $b(j)$ sia il resto della divisione euclidica di $j$ da $d$. Secondo i valori di $n$ e $d$, esiste un giorno al termine del quale la configurazione è equilibrata? Se è così, qual è il primo giorno in cui questo accade?\n\nPapi Théo sceglie ora $d$ enti $(b_1, b_2, \ldots, b_d)$ e definisce la funzione $b$ in modo che per ogni intero $j$, $b(j) = b_\ell$ dove $\ell$ è il resto della divisione euclidiana di $j$ da $d$. Il caso precedente corrisponde alla scelta di $b_i = i$ per tutti i $1 \le i < d$ e $b_d = 0$.\n\n\textbf{4.} Secondo i valori di $n$, $d$ e dei numeri interi positivi $(c_1, c_2, \ldots, c_n)$, è possibile scegliere i numeri interi $(b_1, b_2, \ldots, b_d)$ in modo che, dopo $\mathrm{lcm}(n,d)$ giorni, il bambino $i$ abbia ricevuto esattamente $c_i$ cioccolati, per tutti $1 \le i \le n$? Si dice che un modo di distribuzione è \emph{equitable} se esiste un'infinità di giorni al termine dei quali la configurazione è bilanciata. Papi Théo comprerà le sue scatole di cioccolato a lotto. Un sacco $(b_1, b_2, \ldots, b_d)$ di scatole di cioccolato è un insieme di scatole $d$ di dimensioni $b_1, b_2, \ldots, b_d$ con $0 \le b_1 \le b_2 \le \ldots \le b_d$. Egli dichiara che un lotto è ragionevole se si può trovare una permutazione $(b_1, b_2, \ldots, b_d)$ delle dimensioni delle scatole del lotto che dà un modo equo di distribuzione. Ad esempio, per $n=4$ e $d=4$, il lotto $(1,1,3,3)$ è ragionevole perché scegliendo $(b_1, b_2, b_3, b_4) = (1,3,1,3)$ si ottiene un modo di distribuzione equo. D'altra parte $(0,1,1,3)$ non è un lotto ragionevole.\n\n\textbf{5.} Secondo il numero intero $n$, quali sono i valori di $d$ per i quali tutti i lotti possibili sono ragionevoli?\n\n\textbf{6.} Quali sono le condizioni necessarie e sufficienti per un dato lotto essere ragionevole?\n\n\textbf{7.} Si suppone che per ogni numero intero $j$, $b(j) = j^2$. La distribuzione è equitativa? E con $b(j) = j^p$ per un altro intero $p$?\n\n\textbf{8.} Proporre e studiare altre vie di ricerca.

![[src_tfjm_2019__Q07.png]]

[[src_tfjm_2019__Q07]]
