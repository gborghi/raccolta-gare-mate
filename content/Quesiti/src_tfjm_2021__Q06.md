---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 6
tipo: quesito
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
