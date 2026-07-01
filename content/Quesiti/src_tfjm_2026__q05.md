---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026 — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2026__Q05
parent: src_tfjm_2026
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026
family: tfjm
year: '2026'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '5'
summary: >-
  On a climbing wall modeled in the plane, define a 'path' of n grips each at
  distance l from the previous, going up within angle alpha of the vertical;
  find conditions for two distinct paths to coexist, the minimum number of
  grips, and arrangements maximizing the count of distinct paths.
qa_score: '4'
topics:
  - topic_geometria_analitica
  - topic_combinatoria
  - topic_trigonometria
methods:
  - method_coordinate
  - method_conteggio
  - method_casework
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
  - skill_modellizzazione
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2026
  - livello/TFJM²
  - topic/geometria_analitica
  - topic/combinatoria
  - topic/trigonometria
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*On a climbing wall modeled in the plane, define a 'path' of n grips each at distance l from the previous, going up within angle alpha of the vertical; find conditions for two distinct paths to coexist, the minimum number of grips, and arrangements maximizing the count of distinct paths.*

> 5. Climbing course.
> 
> In order to prepare the acrobatic activities for the next tournament of the TFJM$^2$, Mathis wishes to build anew a climbing wall that will let everyone enjoy themselves according to their abilities.
> 
> We call a configuration any set of points in the plane, called grips. These points represent the positions of the climbing grips available on the wall. The configuration models the geometric layout of the grips on the wall.
> 
> Let $\alpha \in \left]0, \frac{\pi}{2}\right]$ be a fixed real. For a real $l \in \mathbb{R}_+^*$, we call an $l$-course of size $n$ ($n \ge 1$) a succession of $n+1$ points $A_0, A_1, \dots, A_n$ verifying the following conditions:
> 
>    - the first point $A_0$ is situated on the ground (the $x$-axis), and the others are grips;
>    - for all $i \in \{0, \dots, n-1\}$, the distance between two successive points is $A_i A_{i+1} = l$;
>    - for all $i \in \{0, \dots, n-1\}$, the point $A_{i+1}$ is strictly above the point $A_i$ and the angle between the line $(A_i A_{i+1})$ and the vertical is at most $\alpha$.
> 
> Intuitively, the climber begins where he wishes on the ground, reaches a first grip at distance $l$ within an angle limited to $\alpha$, then pursues the course mounting higher and higher, up to a total of $n$ grips. Figure 6 illustrates a configuration with two distinct courses of different colours.
> 
> 1. As a first step, Mathis wishes to place grips so as to allow several types of courses to pass through.
> 
>    a) In this question, Mathis wants to place a single grip on the wall. Determine the conditions relating $l_1, l_2 \in \mathbb{R}_+^*$ and $\alpha \in \left]0, \frac{\pi}{2}\right]$ that allow the placement of a single grip so that there is both an $l_1$-course and an $l_2$-course, each of size equal to $1$.
>    b) Let $n > 1$. In this question, Mathis wants to place grips on the wall. Determine the conditions on $l_1, l_2 \in \mathbb{R}_+^*$ and $\alpha$ so that there are $l_1$-courses of size $n$ and $l_2$-courses of size $1$ ($n$ grips), each using a different course.
> 
> 2. In this question, suppose $\alpha < \frac{\pi}{2}$. Mathis wishes to build a configuration that permits the coexistence of two courses with distinct characteristics: an $l_1$-course of size $t_1$ and an $l_2$-course of size $t_2$.
> 
> Determine the minimal number of grips $N(l_1, l_2, t_1, t_2, \alpha)$ necessary to obtain a configuration containing at once an $l_1$-course of size $t_1$ and an $l_2$-course of size $t_2$.
> 
> 3. In this question, one may limit to the case $\alpha = \frac{\pi}{2}$. In order to model the fact that some movements are more demanding than others, Mathis wishes to associate to each step of a course a movement chosen among several types, for example an easy movement (at distance $l_1$) or a difficult movement (at distance $l_2$) with $l_1 < l_2$.
> 
>    a) Let $n > 0$. Determine, as a function of $n$, $l_1$ and $l_2$, the minimal number of grips it would be necessary to use to make it possible to perform $n$ movements from a certain fixed starting point $A_0$, choosing at each step between an easy and a difficult movement.
>    b) Repeat the previous question with more types of movements. One begins with $3$ types of movements.
> 
> 4. Opening an old box, Mathis discovers some climbing grips. He wishes to dispose them on the wall so as to obtain the largest possible number of realisable courses.
> 
>    a) For an angle $\alpha$ and a length $l > 0$ fixed, and $n$ grips, determine the arrangement of the $n$ grips that maximises the number of distinct $l$-courses possible. Two courses are considered the same if they pass through exactly the same grips (the starting point does not matter).
>    b) Discuss the case where several movement lengths are authorised (for example $l_1 < l_2$), and propose the configuration that permits simultaneously a large number of courses of different types.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q05.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_combinatoria|Combinatoria]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<span class="qlang-split" data-lang="it"></span>


*Su un muro di arrampicata modellato in piano, definire un "cammino" di n afferrature ciascuna a distanza l dalla precedente, che sali all'interno dell'angolo alfa della verticale; trovare le condizioni per la coesistenza di due percorsi distinti, il numero minimo di afferrature e le disposizioni che massimizzino il numero di percorsi distinti.*

> 5. Corso di arrampicata.
> 
> Al fine di preparare le attività acrobatiche per il prossimo torneo del TFJM$^2$, Mathis desidera ricostruire un muro di arrampicata che permetterà a tutti di godersi secondo le loro capacità.
> 
> Chiamiamo una configurazione qualsiasi insieme di punti nel piano, chiamati grips. Questi punti rappresentano le posizioni delle maniglie di arrampicata disponibili sul muro. La configurazione modella il layout geometrico delle maniglie sul muro.
> 
> Lasciate che $\alpha \in \left]0, \frac{\pi}{2}\right]$ sia un reale fisso. Per un vero $l \in \mathbb{R}_+^*$, chiamiamo un corso $l$ di dimensione $n$ ($n \ge 1$) una successione di punti $n+1$ $A_0, A_1, \dots, A_n$ che verificano le seguenti condizioni:
> 
> - il primo punto $A_0$ è situato sul terreno (l'asse $x$), mentre gli altri sono gripi; - per tutti $i \in \{0, \dots, n-1\}$, la distanza tra due punti successivi è $A_i A_{i+1} = l$; - per tutti $i \in \{0, \dots, n-1\}$, il punto $A_{i+1}$ è strettamente superiore al punto $A_i$ e l'angolo tra la linea $(A_i A_{i+1})$ e la verticale è massimo $\alpha$.
> 
> Intuitivamente, l'arrampicatore inizia da dove desidera sul terreno, raggiunge una prima presa a distanza $l$ entro un angolo limitato a $\alpha$, quindi prosegue il percorso montando sempre più in alto, fino a un totale di $n$ afferri. La figura 6 illustra una configurazione con due corsi distinti di colori diversi.
> 
> 1. In primo luogo, Mathis desidera posizionare le maniglie in modo da permettere di passare diversi tipi di corsi.
> 
> A) In questa domanda, Mathis vuole mettere una singola presa sul muro. Determinare le condizioni relative a $l_1, l_2 \in \mathbb{R}_+^*$ e $\alpha \in \left]0, \frac{\pi}{2}\right]$ che consentono il posizionamento di una singola presa in modo che vi sia un corso $l_1$ e un corso $l_2$, ognuno di dimensioni uguali a $1$. b) Let < MSK5/>. In questa domanda, Mathis vuole mettere le maniglie sul muro. Determinare le condizioni di $l_1, l_2 \in \mathbb{R}_+^*$ e $\alpha$ in modo che ci siano $l_1$ corsi di dimensioni $n$ e $l_2$ corsi di dimensioni $1$ (griglie $n$), ognuno utilizzando un corso diverso.
> 
> 2. In questa domanda, supponiamo $\alpha < \frac{\pi}{2}$. Mathis vuole costruire una configurazione che permetta la coesistenza di due corsi con caratteristiche distinte: un corso $l_1$ di dimensioni $t_1$ e un corso $l_2$ di dimensioni $t_2$.
> 
> Determinare il numero minimo di agganci $N(l_1, l_2, t_1, t_2, \alpha)$ necessari per ottenere una configurazione contenente contemporaneamente un corso $l_1$ di dimensioni $t_1$ e un corso $l_2$ di dimensioni $t_2$.
> 
> 3. In questa domanda si può limitare al caso $\alpha = \frac{\pi}{2}$. Per modellare il fatto che alcuni movimenti sono più esigenti di altri, Mathis vuole associare ad ogni passo di un percorso un movimento scelto tra diversi tipi, ad esempio un movimento facile (a distanza $l_1$) o un movimento difficile (a distanza $l_2$) con $l_1 < l_2$.
> 
> a) Let < MSK0/>. Determinare, in funzione di $n$, $l_1$ e $l_2$, il numero minimo di maniglie che sarebbe necessario utilizzare per consentire l'esecuzione di movimenti $n$ da un determinato punto di partenza fisso $A_0$, scegliendo ad ogni passaggio tra un movimento facile e un movimento difficile. b) Ripetere la domanda precedente con più tipi di movimenti. Uno inizia con $3$ tipi di movimenti.
> 
> 4. Aprendo una vecchia scatola, Mathis scopre alcune manovre di arrampicata. Desidera disposirli sul muro per ottenere il maggior numero possibile di corsi realizzabili.
> 
> a) Per un angolo $\alpha$ e una lunghezza $l > 0$ fissa e per le maniglie $n$, determinare l'impostazione delle maniglie $n$ che massimizzi il numero di corsi $l$ distinti possibili. Due corsi sono considerati uguali se passano esattamente attraverso le stesse manovre (il punto di partenza non conta). b) Discutere il caso in cui sono autorizzate diverse lunghezze di movimento (ad esempio $l_1 < l_2$), e proporre la configurazione che consente contemporaneamente un gran numero di corsi di diversi tipi.
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q05.png]]

[[src_tfjm_2026__Q05]]
