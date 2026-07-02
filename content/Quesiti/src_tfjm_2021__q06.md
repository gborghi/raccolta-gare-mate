---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 6
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2021__Q06
parent: src_tfjm_2021
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '6'
summary: >-
  Distribute N gift bags among two TFJM committees joined in a tree of neighbor
  relations; each move along an edge costs 1; minimize total transfer cost
qa_score: '2'
topics:
  - topic_combinatoria
methods:
  - method_grafi
  - method_estremalita
  - method_doppio_conteggio
  - method_casework
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_ragionamento_geometrico
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2021
  - livello/TFJM²
  - topic/combinatoria
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Distribute N gift bags among two TFJM committees joined in a tree of neighbor relations; each move along an edge costs 1; minimize total transfer cost*

> Each year, the organizing committee of TFJM$^2$ is partially renewed. The volunteers of the organizing committee of the current year receive bags TFJM$^2$.
> 
> The Louis organizing committee for the year 2020 was composed of $b_1 \ge 4$ volunteers numbered $L_1, L_2, L_3, \cdots, L_{b_1}$. Among these volunteers was Anais, who is number $L_1$. The organizing committee for the year 2021 is composed of $b_2 \ge 4$ volunteers $A_1, A_2, A_3, \cdots, A_{b_2}$. Among these volunteers is Louis, who is number $A_1$. Apart from Anais and Louis, the only members belonging to both committees are $L_2 = A_{b_2}$ and $A_2 = L_{b_1}$.
> 
> Certain volunteers are neighbors:
> - Anais has $b_2$ neighbors who are the members of her committee, namely $A_1, A_2, \ldots, A_{b_2}$.
> - Louis has $b_1$ neighbors who are the members of his committee, namely $L_1, L_2, \ldots, L_{b_1}$.
> - For $2 < i < b_1$, the volunteer $L_i$ has $3$ neighbors: $L_{i-1}$, $L_{i+1}$ and Louis.
> - For $2 < i < b_2$, the volunteer $A_i$ has $3$ neighbors: $A_{i-1}$, $A_{i+1}$ and Anais.
> - The volunteer $A_2 = L_{b_1}$ has $4$ neighbors: $A_3$, $A_1$, $L_{b_1-1}$ and Louis.
> - The volunteer $A_{b_2} = L_2$ has $4$ neighbors: $L_3$, $L_1$, $A_{b_2-1}$ and Anais.
> 
> For example, if Louis had $b_1=5$ volunteers including Anais, and Anais had $b_2=4$ volunteers including Louis, then the relations are represented as in Figure 7.
> 
> This year, the postman received bad instructions and a total of $N$ bags TFJM$^2$ arrive at the addresses of Louis's committee according to the following distribution:
> - each member of Louis's committee, except Louis, receives $1$ packet made of $j_1$ bags;
> - Louis receives the remaining $N - j_1 b_1$ bags.
> 
> They want to transmit the bags to Anais's committee. Anais wishes that all the volunteers of her committee each have exactly $1$ packet of $j_2$ bags (except herself), and she will keep the remaining $N - b_2 j_2$ bags for the participants.
> 
> Each bag can be moved successively between neighboring volunteers, but each move imposes a cost of $1$. Thus the total cost is the total number of times a bag has been moved between two neighbors.
> 
> Figure 8 illustrates an example of a choice of transfers with $j_1=6$, $j_2=7$, $b_1=5$ and $b_2=4$. The numbers of bags initially are represented in orange. This choice of transfers consists of carrying out the transfers of bags along the orange arrows, then along the dark blue arrow, and finally making a transfer of bags along the light blue arrows. The number of bags moved at each transfer is written next to the corresponding arrow. Once the transfers are made, the number of bags of each volunteer, indicated in blue, is indeed the expected one. The total cost for these transfers is $b_1 \times j_1 + N + b_2 \times j_2 = 5\times 6 + 100 + 4\times 7 = 158$.
> 
> Louis and Anais however want to minimize the costs and this choice of transfers does not seem to be the best. We write $C_{\min}$ for the smallest total cost possible by choosing the transfers of bags carried out.
> 
> **(1)** In the example of Figure 8, for $N=100$, $b_1=5$, $b_2=4$, $j_1=6$, $j_2=7$, what is the smallest possible total cost $C_{\min}$?
> 
> For the moment, suppose that Louis and Anais are as generous as each other and give the same number of bags $j$ to the volunteers of their committee, so that $j_1 = j_2 = j$.
> 
> **(2)** Suppose in this question that the number of bags given to the participants is each time zero, that is $N \ge 2\max(b_1 j_1, b_2 j_2)$. For which value(s) of $b_1$, $b_2$ and $N$ can one guarantee a cost of exactly $C=N$?
> 
> **(3)** No longer suppose that $N \ge 2\max(b_1 j_1, b_2 j_2)$. In terms of $N$, $b_1$, $b_2$ and $j$, what are the possible values of the total cost $C$?
> 
> **(4)** In fact, the number of bags distributed to the volunteers does not change from one year to the next. Louis had thus given packets of $j_1 = b_2$ bags to each of his volunteers, and Anais wishes that each of her volunteers have $j_2 = b_1$ bags. Revisit the previous question in this framework.
> 
> **(5)** Louis and Anais wish to spend as little as possible and to have a balanced budget, so that $C_{\min} = N$ while $N \ge 2\max(b_1 j_1, b_2 j_2)$. For which values of $C_{\min}$ is this possible?
> 
> **(6)** The organization of TFJM$^2$ creates ties and there are in fact $k$ additional direct contacts possible between the volunteers of the two committees. For $N \ge 2\max(b_1 j_1, b_2 j_2)$, in terms of $b_1$, $b_2$, $j_1$ and $j_2$, between which volunteers is it most judicious to establish these $k$ new contacts so that $C_{\min}$ is the smallest possible? One may begin by treating the case $k=1$.
> 
> **(7)** Propose and explore other research directions.

![[src_tfjm_2021__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


Distribuire N sacchetti regalo tra due comitati TFJM uniti in un albero di relazioni vicine; ogni mossa lungo un bordo costa 1; ridurre al minimo il costo totale di trasferimento*

> Ogni anno il comitato organizzativo del TFJM$^2$ viene parzialmente rinnovato. I volontari del comitato organizzatore dell'anno in corso ricevono borse TFJM$^2$.
> 
> Il comitato organizzativo di Louis per l'anno 2020 era composto da volontari $b_1 \ge 4$ numerati $L_1, L_2, L_3, \cdots, L_{b_1}$. Tra questi volontari c'era anche Anais, che è il numero $L_1$. Il comitato organizzativo per l'anno 2021 è composto da volontari $b_2 \ge 4$ $A_1, A_2, A_3, \cdots, A_{b_2}$. Tra questi volontari c'è Louis, che è il numero $A_1$. Oltre a Anais e Louis, gli unici membri di entrambi i comitati sono $L_2 = A_{b_2}$ e $A_2 = L_{b_1}$.
> 
> Alcuni volontari sono vicini: - Anais ha $b_2$ vicini che sono membri del suo comitato, cioè $A_1, A_2, \ldots, A_{b_2}$. - Louis ha $b_1$ vicini che sono membri del suo comitato, cioè $L_1, L_2, \ldots, L_{b_1}$. - per $2 < i < b_1$, il volontario $L_i$ ha $3$ vicini: $L_{i-1}$, $L_{i+1}$ e Louis. - Per $2 < i < b_2$, il volontario $A_i$ ha $3$ vicini: $A_{i-1}$, $A_{i+1}$ e Anais. - Il volontario $A_2 = L_{b_1}$ ha $4$ vicini: $A_3$, $A_1$, $L_{b_1-1}$ e Louis. - Il volontario $A_{b_2} = L_2$ ha $4$ vicini: $L_3$, $L_1$, $A_{b_2-1}$ e Anais.
> 
> Ad esempio, se Louis aveva $b_1=5$ volontari tra cui Anais, e Anais aveva $b_2=4$ volontari tra cui Louis, allora le relazioni sono rappresentate come nella Figura 7.
> 
> Quest'anno, il postino ha ricevuto cattive istruzioni e un totale di sacchetti $N$ TFJM$^2$ arrivano agli indirizzi del comitato di Louis secondo la seguente distribuzione: - ogni membro del comitato di Louis, tranne Louis, riceve un pacchetto $1$ fatto di sacchetti $j_1$; - Louis riceve i restanti sacchetti $N - j_1 b_1$.
> 
> Vogliono trasmettere le borse al comitato di Anais. Anais desidera che tutti i volontari del suo comitato abbiano esattamente $1$ pacchetto di sacchetti $j_2$ (eccetto lei stessa), e conserverà i rimanenti sacchetti $N - b_2 j_2$ per i partecipanti.
> 
> Ogni borsa può essere spostata successivamente tra i volontari vicini, ma ogni mossa comporta un costo di $1$. Quindi il costo totale è il numero totale di volte che una borsa è stata spostata tra due vicini.
> 
> La figura 8 illustra un esempio di una scelta di trasferimenti con $j_1=6$, $j_2=7$, $b_1=5$ e $b_2=4$. I numeri delle borse sono inizialmente rappresentati in arancione. Questa scelta di trasferimenti consiste nel effettuare il trasferimento di sacchetti lungo le frecce arancione, poi lungo la freccia blu scuro, e infine nel effettuare il trasferimento di sacchetti lungo le frecce blu chiaro. Il numero di sacchetti spostati ad ogni trasferimento è scritto accanto alla freccia corrispondente. Una volta effettuati i trasferimenti, il numero di borse di ciascun volontario, indicato in blu, è in effetti quello previsto. Il costo totale di tali trasferimenti è $b_1 \times j_1 + N + b_2 \times j_2 = 5\times 6 + 100 + 4\times 7 = 158$.
> 
> Louis e Anais, tuttavia, vogliono ridurre al minimo i costi e questa scelta di trasferimenti non sembra essere la migliore. Scriviamo $C_{\min}$ per il minor costo totale possibile scegliendo i trasferimenti effettuati.
> 
> **(1) ** Nell'esempio della figura 8, per $N=100$, $b_1=5$, $b_2=4$, $j_1=6$, $j_2=7$, qual è il costo totale minimo possibile $C_{\min}$?
> 
> Per il momento, supponiamo che Louis e Anais siano generosi l'uno come l'altro e donino lo stesso numero di sacchetti ai volontari del loro comitato, in modo che $j_1 = j_2 = j$.
> 
> **(2) ** Supponiamo in questa domanda che il numero di borse date ai partecipanti sia ogni volta zero, cioè $N \ge 2\max(b_1 j_1, b_2 j_2)$. Per quali valori (s) di $b_1$, $b_2$ e $N$ si può garantire un costo di esattamente $C=N$?
> 
> **(3) ** Non supponiamo più che $N \ge 2\max(b_1 j_1, b_2 j_2)$. In termini di $N$, $b_1$, $b_2$ e $j$, quali sono i valori possibili del costo totale $C$?
> 
> **(4) ** Infatti, il numero di borse distribuite ai volontari non cambia di anno in anno. Louis aveva quindi dato pacchetti di sacchetti $j_1 = b_2$ a ciascuno dei suoi volontari, e Anais desidera che ciascuno dei suoi volontari abbia sacchetti $j_2 = b_1$. In questo contesto, rivedere la domanda precedente.
> 
> Louis e Anais desiderano spendere il meno possibile e avere un bilancio equilibrato, in modo che $C_{\min} = N$ mentre $N \ge 2\max(b_1 j_1, b_2 j_2)$. Per quali valori di $C_{\min}$ è possibile?
> 
> L'organizzazione del TFJM crea legami e esistono infatti ulteriori contatti diretti tra i volontari dei due comitati. Per $N \ge 2\max(b_1 j_1, b_2 j_2)$, in termini di $b_1$, $b_2$, $j_1$ e $j_2$, tra quali volontari è più saggio stabilire questi nuovi contatti $k$ in modo che $C_{\min}$ sia il più piccolo possibile? Si può iniziare trattando il caso $k=1$.
> 
> **(7) ** Proporre e esplorare altre direzioni di ricerca.

![[src_tfjm_2021__Q06.png]]

[[src_tfjm_2021__Q06]]
