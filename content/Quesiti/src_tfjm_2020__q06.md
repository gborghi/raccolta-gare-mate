---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020 — Quesito 6
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2020__Q06
parent: src_tfjm_2020
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020
family: tfjm
year: '2020'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '6'
summary: Drone police capture thief on city graph in minimum days
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_grafi
  - method_casework
  - method_induzione
  - method_estremalita
skills:
  - skill_modellizzazione
  - skill_ragionamento_geometrico
  - skill_conteggio_sistematico
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2020
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Drone police capture thief on city graph in minimum days*

> Winston is a police commissioner. He tries to capture a thief using his new drones.
> 
> The city of Winston is made up of $N$ districts, and certain pairs of districts are connected by two-way roads. Winston has an unlimited number of drones and $n$ police officers.
> 
> Each day proceeds as follows:
> - Each morning, Winston sends drones to as many districts as he wishes.
> - At noon, his display shows whether one of his drones has been sent to the district where the thief is hiding.
> - In the afternoon, Winston can send his officers to at most $n$ districts; if his officers go to the district where the thief is, the thief is arrested with certainty.
> - Finally, each night (except the first), the thief moves from one district to a neighbouring district.
> 
> It is assumed that from the start the thief cannot stay more than one night in the same district.
> 
> **1.** The city of London is composed of $N$ districts $q_1, q_2, \ldots, q_N$ arranged in a circle, with roads connecting neighbours on the circle, as in Figure 12. As a function of $N$, how many police officers does Winston need to arrest the thief with certainty after a certain number of days?
> 
> **2.** Let $n$ and $N$ be two integers such that Winston can guarantee capturing the thief. What is the minimum number of days he needs to be certain of capturing him?
> 
> **3.** We say that a city has no **loop** if there is no cycle of $b \ge 3$ distinct districts. What is the minimum number of officers sufficient to capture the thief in any city without a loop?
> 
> **4.** The city of New York is a square grid of side $N$. How many officers does Winston need at a minimum to catch the thief?
> 
> **5.** A city is said to be **planar** if it can be drawn in the plane with no roads crossing. For example, Figure 13 shows a planar city. For any integer $n$, is there a planar city such that Winston cannot catch the thief with $n$ officers?
> 
> **6.** Following budget cuts, Winston can now only send between $1$ and $d$ drones each day, for a certain fixed integer $d$. Revisit the previous questions for this case.
> 
> **7.** Propose and study other avenues of research.

![[src_tfjm_2020__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_casework|Casework]], [[method_induzione|Induzione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


La polizia drone cattura il ladro sul grafico della città in pochi giorni.

> Winston è un commissario di polizia. Cerca di catturare un ladro usando i suoi nuovi droni.
> 
> La città di Winston è composta da distretti $N$, e alcune coppie di distretti sono collegate da strade bidirezionali. Winston ha un numero illimitato di droni e agenti di polizia.
> 
> Ogni giorno procede così: - Ogni mattina, Winston manda droni in quante distretti vuole. - A mezzogiorno, la sua mostra mostra se uno dei suoi droni è stato inviato nel distretto dove si nasconde il ladro. - Nel pomeriggio, Winston può inviare i suoi agenti al massimo nei distretti; se i suoi agenti vanno nel distretto in cui si trova il ladro, il ladro viene arrestato con certezza. - Infine, ogni notte (eccetto la prima), il ladro si sposta da un distretto a un distretto vicino.
> 
> Si presume che fin dall'inizio il ladro non possa rimanere più di una notte nello stesso distretto.
> 
> La città di Londra è composta da distretti $N$ $q_1, q_2, \ldots, q_N$ disposti in un cerchio, con strade che collegano vicini sul cerchio, come nella Figura 12. Come funzione di MSK2/, quanti poliziotti serve Winston per arrestare il ladro con certezza dopo un certo numero di giorni?
> 
> Lasciate che MSK0 e MSK1 siano due numeri interi in modo che Winston possa garantire la cattura del ladro. Qual e' il numero minimo di giorni di cui ha bisogno per essere sicuro di catturarlo?
> 
> **3.** Diciamo che una città non ha **loop** se non esiste un ciclo di distretti distinti $b \ge 3$. Qual è il numero minimo di agenti sufficiente per catturare il ladro in qualsiasi città senza un ciclo?
> 
> **4. ** La città di New York è una griglia quadrata di lato $N$. Quanti agenti serve almeno Winston per catturare il ladro?
> 
> **5.** Una città si dice sia **planare** se può essere disegnata in aereo senza incrocio stradale. Ad esempio, la figura 13 mostra una città piana. Per qualsiasi numero intero, c'è una città piana tale che Winston non possa catturare il ladro con gli ufficiali?
> 
> A seguito dei tagli di bilancio, Winston può ora inviare solo tra < MSK0/> e < MSK1/> droni al giorno, per un certo numero intero fisso < MSK2/>. Ripensate alle domande precedenti per questo caso.
> 
> **7.** Proporre e studiare altre vie di ricerca.

![[src_tfjm_2020__Q06.png]]

[[src_tfjm_2020__Q06]]
