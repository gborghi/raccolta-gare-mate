---
title: Olimpíada Brasileira de Matemática 2021 — Nível 1 — Fase x — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2021_n1_fx__Q05
parent: src_obm_2021_n1_fx
competition: Olimpíada Brasileira de Matemática 2021 — Nível 1 — Fase x
family: obm
year: '2021'
level: OBM Nível 1
country: Brasile
modalita: individuale
nivel: '1'
fase: x
quesito: '5'
summary: 'Code lock with n buttons: minimum presses to guarantee opening'
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
  - method_conteggio
  - method_estremalita
skills:
  - skill_conteggio_sistematico
  - skill_ragionamento_geometrico
  - skill_lettura_attenta
  - skill_modellizzazione
  - skill_astrazione
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2021
  - livello/OBM-Nível-1
  - nivel/1
  - fase/x
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Code lock with n buttons: minimum presses to guarantee opening*

> A certain store sells models of safes with code locks that have $n$ buttons numbered from 1 to $n$ and a button $C$ to start.
> 
> The password to open the safe is a non-empty subset of the set $\{1, 2, \ldots, n\}$. To open it, the person must press $C$ and then enter a sequence that forms the password. If the safe does not open, the person can press $C$ again and try a new sequence.
> 
> For example, for $n = 4$, if someone presses the sequence $C413$, the safe is open if the password is $\{4\}, \{1\}, \{3\}, \{4,1\}, \{1,3\}, \{4,1,3\}$ or $\{4,1,3,\ldots\}$ — the order of the elements does not matter. If the safe does not open, the person can press $C$ again and continue testing. A new attempt could be the sequence $C3412$, which would open the safe if the password is $\{3\}, \{4\}, \{1\}, \{2\}, \{3,4\}, \{4,1\}, \{1,2\}, \{3,4,1\}, \{4,1,2\}$ or $\{3,4,1,2\}$.
> 
> For some values of $n$, what matters is the smallest number of times a person needs to press the buttons to guarantee that the safe is opened. For example, for $n = 2$, it is necessary to press 5 times and the sequence $C12C2$ covers all possibilities: $\{1\}$ or $\{2\}$ or $\{1,2\}$ — and the sequence $C12C2$ covers all these subsets. You need to press $C$ 2 more times, buttons $C1$ or $C2$, to test the subset $\{1,2\}$ plus 2 more button presses $C1$ or $C2$, to test the element. You need to press 3 buttons to test $\{1,2\}$ and 2 more presses for $\{1\}$ or $\{2\}$ alone with $C2$, covering all possibilities.
> 
> *Attention:* For each item you must present a sequence with the minimum number of presses you found and prove that by pressing fewer times there is always some combination that is not tested.
> 
> a) For $n = 3$, what is the minimum number of times the buttons $C$, 1, 2, and 3 must be pressed to guarantee that the safe is opened?
> 
> b) For $n = 4$, what is the minimum number of times the buttons $C$, 1, 2, 3, and 4 must be pressed to guarantee that the safe is opened?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/10RcAE6sTt-lvUTcmg157vdVd4ZjysYzW/view)


<span class="qlang-split" data-lang="it"></span>


*Lock di codice con n pulsanti: pressioni minime per garantire l'apertura*

> Un certo negozio vende modelli di casseforti con serrature a codice che hanno pulsanti $n$ numerati da 1 a $n$ e un pulsante $C$ per avviare.
> 
> La password per aprire la cassaforte è un sottogruppo non vuoto del set $\{1, 2, \ldots, n\}$. Per aprirlo, la persona deve premere $C$ e quindi inserire una sequenza che forma la password. Se la cassaforte non si apre, la persona può premere di nuovo < MSK2/> e provare una nuova sequenza.
> 
> Per esempio, per $n = 4$, se qualcuno premesse la sequenza $C413$, la cassaforte è aperta se la password è $\{4\}, \{1\}, \{3\}, \{4,1\}, \{1,3\}, \{4,1,3\}$ o $\{4,1,3,\ldots\}$  l'ordine degli elementi non importa. Se la cassaforte non si apre, la persona può premere di nuovo $C$ e continuare il test. Un nuovo tentativo potrebbe essere la sequenza $C3412$, che aprirebbe la cassaforte se la password è $\{3\}, \{4\}, \{1\}, \{2\}, \{3,4\}, \{4,1\}, \{1,2\}, \{3,4,1\}, \{4,1,2\}$ o $\{3,4,1,2\}$.
> 
> Per alcuni valori di $n$, ciò che conta è il minor numero di volte che una persona deve premere i pulsanti per garantire che la cassaforte sia aperta. Per esempio, per $n = 2$ è necessario premere 5 volte e la sequenza $C12C2$ copre tutte le possibilità: $\{1\}$ o $\{2\}$ o $\{1,2\}$  e la sequenza $C12C2$ copre tutti questi sottoinsiemi. È necessario premere $C$ 2 volte di più, i pulsanti $C1$ o $C2$, per testare il sottogruppo $\{1,2\}$ più 2 pulsanti $C1$ o $C2$, per testare l'elemento. È necessario premere 3 pulsanti per testare < MSK13/> e altre 2 pulsanti per < MSK14/> o < MSK15/> da solo con < MSK16/>, coprendo tutte le possibilità.
> 
> < MSK0/>Attenzione: < MSK1/> Per ogni elemento è necessario presentare una sequenza con il numero minimo di presse che si trovano e dimostrare che premendo meno volte c'è sempre una combinazione che non viene testata.
> 
> a) Per < MSK0/>, qual è il numero minimo di volte che occorre premere i pulsanti < MSK1/>, 1, 2 e 3 per garantire l'apertura della cassaforte?
> 
> b) Per < MSK0/>, qual è il numero minimo di volte che è necessario premere i pulsanti < MSK1/>, 1, 2, 3 e 4 per garantire l'apertura della cassaforte?

[[src_obm_2021_n1_fx__Q05]]
