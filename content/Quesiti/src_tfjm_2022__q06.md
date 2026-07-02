---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 6
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2022__Q06
parent: src_tfjm_2022
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '6'
summary: >-
  Twin towns: each day Aliénor picks an inhabitant of A without a correspondent
  and Boniface assigns one in B preserving friendship; study perfect twinnings
  and the maximal asymmetric/symmetric compatibility C(A,B), D(A,B) for
  cycle-towns and the infinite town Z.
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_grafi
  - method_bigezione
  - method_casework
skills:
  - skill_modellizzazione
  - skill_astrazione
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2022
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Twin towns: each day Aliénor picks an inhabitant of A without a correspondent and Boniface assigns one in B preserving friendship; study perfect twinnings and the maximal asymmetric/symmetric compatibility C(A,B), D(A,B) for cycle-towns and the infinite town Z.*

> Twin towns (Villes jumelées).
> 
> Aliénor and Boniface are mayors of two towns $A$ and $B$. Boniface wants to organize a twinning with the town of Aliénor, but the latter seeks to make this project fail.
> 
> To twin the towns, certain inhabitants will be associated, friendship being considered as reciprocal. To twin consists in associating to an inhabitant of town $A$ a single corresponding inhabitant of town $B$ in such a way that two different persons have different correspondents. Aliénor and Boniface organize the correspondences between the inhabitants as follows: each day, Aliénor chooses an inhabitant of town $A$ who does not yet have a correspondent, then Boniface chooses a correspondent in town $B$ among the inhabitants who do not yet have a correspondent. If at a certain moment two inhabitants of a same town are friends and both have correspondents but these correspondents do not have the same friend, [the correspondence fails]; the twinning is $perfect$ if Boniface manages to give a correspondent to each inhabitant of town $A$.
> 
> 1. Under what condition on the towns $A$ and $B$ is it possible for Boniface to assure himself of attaining a perfect twinning, whatever the choices of Aliénor? One will suppose that the towns $A$ and $B$ have a finite number of inhabitants (but not necessarily the same).
> 
> Given two towns $A$ and $B$, their $maximal asymmetric compatibility$ $C(A, B)$ is the largest integer $n$ such that Boniface can assure himself that the correspondence does not fail after $n$ days, whatever the choices of Aliénor.
> 
> Let $k \ge 3$. A $k$-cycle in a town is a set of $k$ inhabitants $c_1, \cdots, c_k$ such that the only friends of $c_i$ are $c_{i-1}$ and $c_{i+1}$ for all $1 \le i \le k$, setting $c_0 = c_k$ and $c_{k+1} = c_1$. The town whose $a_1 + a_2 + \cdots + a_l$ inhabitants form an $a_1$-cycle, ... and an $a_l$-cycle, disjoint, is called $\mathcal{C}_{a_1, a_2, \ldots, a_l}$. The town $\mathcal{Z}$ is the infinite town with one inhabitant per relative integer, and such that the only friends of inhabitant $i$ are the inhabitants $i + 1$ and $i - 1$.
> 
> Figure 7 illustrates the town $\mathcal{C}_6$ and the town $\mathcal{C}_{3,3}$. The inhabitants are represented by circles, and two friends are joined by a segment when they are linked.
> 
> 2. Supposing that there is the same number $n \in \mathbb{N}$ of inhabitants in town $A$ as in town $B$, what values can $C(A, B)$ take?
> 
> 3. Estimate the value of $C(\mathcal{C}_n, \mathcal{Z})$ and of $C(\mathcal{Z}, \mathcal{C}_n)$. One may begin by considering small values of $n$.
> 
> 4. Estimate $C(\mathcal{C}_{a+b}, \mathcal{C}_{a,b})$ and $C(\mathcal{C}_{a,b}, \mathcal{C}_{a+b})$ for $a, b \ge 1$ integers. One may begin by considering small values of $a$ and $b$.
> 
> The following year, Aliénor and Boniface organize themselves differently: each day Aliénor chooses an inhabitant of the town of her choice who does not have a correspondent, then Boniface chooses his correspondent in the other town among the inhabitants who do not yet have a correspondent. One then calls $maximal symmetric compatibility$ and denotes $D(A, B)$ the largest integer $n$ such that Boniface can assure himself that the correspondence does not fail after $n$ days, whatever the choices of Aliénor.
> 
> 5. Redo the preceding questions, replacing the maximal asymmetric compatibility by the maximal symmetric compatibility.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2022__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_bigezione|Biiezione]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


*Comuni gemelli: ogni giorno Aliénor sceglie un abitante di A senza corrispondente e Boniface ne assegna uno in B per preservare l'amicizia; studiare gemelli perfetti e la massima compatibilità asimmetrica/simmetrica C(A,B), D(A,B) per città ciclabili e la città infinita Z.*

> città gemelle (Villes jumelées).
> 
> Aliénor e Boniface sono sindaci di due città $A$ e $B$. Boniface vuole organizzare un gemellaggio con la città di Aliénor, ma quest'ultima cerca di far fallire questo progetto.
> 
> Per fare le città gemelle, alcuni abitanti saranno associati, l'amicizia considerata reciproca. Per essere gemelli si intende associare a un abitante di una città $A$ un singolo abitante corrispondente di una città $B$ in modo tale che due persone diverse abbiano corrispondenti diversi. Aliénor e Boniface organizzano le corrispondenze tra gli abitanti come segue: ogni giorno, Aliénor sceglie un abitante della città $A$ che non ha ancora un corrispondente, poi Boniface sceglie un corrispondente in città $B$ tra gli abitanti che non hanno ancora un corrispondente. Se in un certo momento due abitanti di una stessa città sono amici e entrambi hanno corrispondenti ma questi corrispondenti non hanno lo stesso amico, [la corrispondenza fallisce]; il gemellaggio è $perfect$ se Boniface riesce a dare un corrispondente a ogni abitante della città $A$.
> 
> 1. In quali condizioni nelle città $A$ e $B$ è possibile che Bonifacio si assicuri di raggiungere un gemellaggio perfetto, qualunque sia la scelta di Aliénor? Si suppone che le città $A$ e $B$ abbiano un numero finito di abitanti (ma non necessariamente la stessa).
> 
> Date le due città $A$ e $B$, il loro $maximal asymmetric compatibility$ $C(A, B)$ è il più grande numero intero $n$ in modo tale che Bonifacio può assicurarsi che la corrispondenza non fallisce dopo $n$ giorni, qualunque siano le scelte di Aliénor.
> 
> Let $k \ge 3$. Un ciclo $k$ in una città è un insieme di abitanti $k$ $c_1, \cdots, c_k$ in modo tale che gli unici amici di $c_i$ siano $c_{i-1}$ e $c_{i+1}$ per tutti $1 \le i \le k$, impostando $c_0 = c_k$ e $c_{k+1} = c_1$. La città i cui abitanti $a_1 + a_2 + \cdots + a_l$ formano un ciclo $a_1$, ... e un ciclo $a_l$ disgiunto si chiama $\mathcal{C}_{a_1, a_2, \ldots, a_l}$. La città $\mathcal{Z}$ è la città infinita con un abitante per numero intero relativo, e tale che gli unici amici dell'abitante $i$ sono gli abitanti $i + 1$ e $i - 1$.
> 
> La figura 7 illustra la città $\mathcal{C}_6$ e la città $\mathcal{C}_{3,3}$. Gli abitanti sono rappresentati da cerchi e due amici sono uniti da un segmento quando sono legati.
> 
> 2. Supponendo che ci sia lo stesso numero di abitanti in città $n \in \mathbb{N}$ come in città $B$, quali valori può $C(A, B)$ assumere?
> 
> 3. Calcolare il valore di $C(\mathcal{C}_n, \mathcal{Z})$ e di $C(\mathcal{Z}, \mathcal{C}_n)$. Si può iniziare considerando piccoli valori di $n$.
> 
> 4. Valutare $C(\mathcal{C}_{a+b}, \mathcal{C}_{a,b})$ e $C(\mathcal{C}_{a,b}, \mathcal{C}_{a+b})$ per $a, b \ge 1$ integri. Si può iniziare considerando piccoli valori di $a$ e $b$.
> 
> L'anno successivo, Aliénor e Boniface si organizzano in modo diverso: ogni giorno Aliénor sceglie un abitante della città di sua scelta che non ha un corrispondente, poi Boniface sceglie il suo corrispondente nell'altra città tra gli abitanti che non hanno ancora un corrispondente. Si chiama poi $maximal symmetric compatibility$ e si denota $D(A, B)$ il più grande intero $n$ in modo tale che Bonifacio possa assicurarsi che la corrispondenza non fallisca dopo $n$ giorni, qualunque siano le scelte di Aliénor.
> 
> 5. Riprendi le domande precedenti, sostituendo la massima compatibilità asimmetrica con la massima compatibilità simmetrica.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2022__Q06.png]]

[[src_tfjm_2022__Q06]]
