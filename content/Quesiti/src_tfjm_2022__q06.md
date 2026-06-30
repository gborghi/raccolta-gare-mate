---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 6
tipo: quesito
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
