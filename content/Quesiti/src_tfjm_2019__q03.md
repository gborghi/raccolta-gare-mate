---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019 — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2019__Q03
parent: src_tfjm_2019
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019
family: tfjm
year: '2019'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '3'
summary: >-
  Scheduling trains onto station tracks (dead-end, one-way, two-way) so an
  arrival order is admissible
qa_score: '3'
topics:
  - topic_combinatoria
methods:
  - method_casework
  - method_conteggio
  - method_estremalita
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2019
  - livello/TFJM²
  - topic/combinatoria
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Scheduling trains onto station tracks (dead-end, one-way, two-way) so an arrival order is admissible*

> Julie has just been named chief of the station. She must manage $n$ trains. The trains arrive each day in a precise order, the \emph{order of arrival}, and must repart on the tracks during the night in the \emph{order of departure}. In the morning the trains must be able, in the order of departure, to access the exit directly without being blocked by another train.\n\nEach track can contain up to $n$ consecutive trains. There exist three types of tracks: the \emph{impasses} (dead-ends), where the trains arrive by the left and repart by the left in the morning; the \emph{one-way tracks} (voies à sens unique), where the trains arrive by the left and repart by the right in the morning; the \emph{two-way tracks} (voies à double sens), where the trains can arrive by either side in the evening and repart by either side in the morning.\n\nIf Julie manages to find a solution that allows reparting all the trains in the order with the tracks at her disposition, one says that the order of arrival is \emph{admissible}. For example, if Julie must repart three trains and has only one impasse at her disposition, the order of arrival $(3,2,1)$ is admissible, but not $(1,2,3)$. Figure 6 represents an example with $6$ trains and one track of each type, with arrival order $(2,1,6,5,3)$; this order is admissible. One remarks that there are several possibilities to repart the trains on a two-way track: one can choose either to enter by the left or by the right.\n\n\textbf{1.} One interests oneself in a station that has only one track. Under which conditions is an order of arrival admissible: (a) if the track is an impasse? (b) if the track is one-way? (c) if the track is two-way?\n\nLet an integer $p \ge 2$ such that $p$ divides $n$. One supposes that the trains arrive in the following order: $(p, p-1, \ldots, 1, 2p, 2p-1, \ldots, 2p-(p-1), \ldots, n, n-1, \ldots, n-(p-1))$.\n\n\textbf{2.} What is the minimal number of tracks necessary for this order to be admissible: (a) if the tracks are all impasses? (b) if the tracks are all one-way? (c) if the tracks are all two-way?\n\n\textbf{3.} What is the smallest number of tracks for which all orders of arrival are admissible: (a) if the tracks are all impasses? (b) if the tracks are all one-way? (c) if the tracks are all two-way?\n\n\textbf{4.} One supposes in this question that there is no longer one track only and it is two-way. Henceforth one possesses a machine that allows passing a train above another train. This operation takes $1$ hour. As the price is high, how many times must one pass a train above another?\n\n\textbf{5.} Take up the previous question with several tracks and eventually impasses or one-way tracks.\n\n\textbf{6.} Propose and study other avenues of research.

![[src_tfjm_2019__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<span class="qlang-split" data-lang="it"></span>


*Ricordare i treni sui binari delle stazioni (terreno, a senso unico, a senso doppio) in modo che sia ammissibile un ordine di arrivo*

> Julie è stata appena nominata capo della stazione. Lei deve gestire i treni. I treni arrivano ogni giorno in un ordine preciso, l'ordine di arrivo, e devono ritirarsi sulle binarie durante la notte nell'ordine di partenza. La mattina i treni devono essere in grado, nell'ordine di partenza, di accedere direttamente all'uscita senza essere bloccati da un altro treno. Esistono tre tipi di binari: i \emph{impasses} (dead-end), in cui i treni arrivano a sinistra e partono a sinistra al mattino; i \emph{one-way tracks} (voies à sens unique), in cui i treni arrivano a sinistra e partono a destra al mattino; i \emph{two-way tracks} (voies à double sens), in cui i treni possono arrivare da entrambi i lati la sera e partire da entrambi i lati al mattino.\n\nSe Julie riesce a trovare una soluzione che consente di ripartire tutti i treni in ordine con i binari a sua disposizione, si dice che l'ordine di arrivo è \emph{admissible}. Ad esempio, se Julie deve ripartire tre treni e dispone di un solo impasse, l'ordine di arrivo $(3,2,1)$ è ammissibile, ma non $(1,2,3)$. La figura 6 rappresenta un esempio con treni $6$ e una pista di ciascun tipo, con ordine di arrivo $(2,1,6,5,3)$; tale ordine è ammissibile. Si osserva che ci sono diverse possibilità di ripartire i treni su una pista bidirezionale: si può scegliere di entrare a sinistra o a destra. In quali condizioni è ammissibile un ordine di arrivo: a) se la pista è un impasse? b) se la pista è a senso unico? (c) se la pista è bidirezionale?\n\nLascia che un numero intero $p \ge 2$ dividi $p$ $n$. Si suppone che i treni arrivano nell'ordine seguente: $(p, p-1, \ldots, 1, 2p, 2p-1, \ldots, 2p-(p-1), \ldots, n, n-1, \ldots, n-(p-1))$.\n\n\textbf{2.} Qual è il numero minimo di binari necessario per essere ammissibili a tale ordine: (a) se tutte le binari sono impasse? b) se le binarie sono tutte a senso unico? Qual è il numero minimo di binari per i quali tutti gli ordini di arrivo sono ammissibili: a) se tutti i binari sono impassi? b) se le binarie sono tutte a senso unico? (c) se le tracce sono tutte bidirezionali?\n\n\textbf{4.} Si suppone in questa domanda che non ci sia più solo una traccia ed è bidirezionale. D'ora in poi si possiede una macchina che permette di passare un treno sopra un altro. Questa operazione richiede $1$ ora. Poiché il prezzo è elevato, quante volte si deve passare un treno sopra un altro?\n\n\textbf{5.} Prendi la domanda precedente con più binari e alla fine impasse o binari unidirezionali.\n\n\textbf{6.} Proponi e studi altri percorsi di ricerca.

![[src_tfjm_2019__Q03.png]]

[[src_tfjm_2019__Q03]]
