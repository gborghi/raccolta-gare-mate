---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 8
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2022__Q08
parent: src_tfjm_2022
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: >-
  Perseus and the Gorgon: a step-by-step pursuit where each moves at most d_0
  per step and the Gorgon petrifies Perseus if the segment between them avoids
  the obstacle O; determine admissible distances d for various obstacles (line,
  point, segment, disk, polygon), characterize possible admissible sets, and
  treat continuous-speed strategy variants.
qa_score: '3'
topics:
  - topic_geometria_piana
  - topic_geometria_analitica
  - topic_logica
methods:
  - method_coordinate
  - method_estremalita
  - method_casework
skills:
  - skill_ragionamento_geometrico
  - skill_modellizzazione
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2022
  - livello/TFJM²
  - topic/geometria_piana
  - topic/geometria_analitica
  - topic/logica
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Perseus and the Gorgon: a step-by-step pursuit where each moves at most d_0 per step and the Gorgon petrifies Perseus if the segment between them avoids the obstacle O; determine admissible distances d for various obstacles (line, point, segment, disk, polygon), characterize possible admissible sets, and treat continuous-speed strategy variants.*

> Perseus and the Gorgon (Persée et la Gorgone).
> 
> Persée ventures into the cavern of the Gorgon, and seeks to escape from her fatal petrifying gaze.
> 
> The cavern of the Gorgon is a plane region where Persée wants to put an obstacle $\mathcal{O}$, which is a set of points on which Persée and the Gorgon cannot stop, but which they are capable of jumping over. Persée and the Gorgon know at each instant where the other is situated, but the gaze of the Gorgon reaches Persée if the segment between the two does not contain any point of the obstacle. In that case Persée is petrified.
> 
> Let $d_0$ be a real. The Gorgon must initially choose her starting point outside the obstacle. Persée then chooses his starting point as a function of that of the Gorgon. Then the Gorgon begins by trying to touch Persée with a gaze. If this succeeds she petrifies him. Otherwise she chooses a point that is not in the obstacle and that is at distance at most $d_0$ from the one where she was. Persée, who knows where the Gorgon is going, chooses a point at distance at most $d_0$ from the point where he was, if he wants. When the two have arrived at their new point, the Gorgon tries again to touch Persée with a gaze, and so on. The real $d$ is said to be $admissible$ for Persée with $\mathcal{O}$ if, with this obstacle, Persée has a strategy that allows him never to be petrified, whatever the Gorgon does, when $d_0 = d$.
> 
> Figure 9 illustrates an example of a pursuit between Persée and the Gorgon, in the case where the obstacle is a full triangle and $d_0 = 2$. The successive points where Persée is situated are the points $P_0, P_1, P_2, P_3$, and the successive points where the Gorgon is situated are the points $G_0, G_1, G_2, G_3$. After 3 steps, the gaze of the Gorgon finally touches Persée: this last one is petrified.
> 
> 1. What are the admissible reals if the obstacle is a line? If it is a point? If it is a segment of length $l$?
> 
> 2. The obstacle is an open disk of radius $r > 0$. What are the admissible reals for this obstacle as a function of $r$? One may begin with the case $r = 1$.
> 
> 3. The obstacle is a full polygon. What are the admissible reals for this obstacle? One may begin by studying particular polygons.
> 
> 4. Let $A_\mathcal{O}$ be the set of admissible reals for an obstacle $\mathcal{O}$. What are the sets that can be written $A_\mathcal{O}$ for some obstacle $\mathcal{O}$?
> 
> 5. Now, the Gorgon must move a distance exactly $d_0$ and Persée must move a distance exactly 1 at each step, that is to say that for all $i$, $G_i G_{i+1} = d_0$ and $P_i P_{i+1} = 1$. Redo the preceding questions in this setting.
> 
> Now, the Gorgon moves permanently at speed at most $v_0$ looking in the direction of Persée, and Persée moves permanently at speed at most 1 to avoid her. For $v \in \mathbb{R}_+^*$, a $trajectory$ at speed at most $v$ is an application $T$ from $\mathbb{R}_+$ into the plane such that:
>   - for $t \in \mathbb{R}_+$, $T(t)$ is not in the obstacle;
>   - for all $t_1, t_2 \in \mathbb{R}_+$, the distance between $T(t_1)$ and $T(t_2)$ is at most $v \times |t_1 - t_2|$.
> 
> A $strategy$ for Persée is an application $\mathcal{S}$ which to a trajectory $T_G$ at speed at most $v_0$ associates a trajectory $\mathcal{S}(T_G) = T_P$ at speed at most 1 such that for all $t \in \mathbb{R}_+$, the value $\mathcal{S}(T_G)(t) = T_P(t)$ depends only on the values of the function $T_G$ between time 0 and time $t$ (Persée cannot predict where the Gorgon will be in the future). In particular the starting point of Persée $\mathcal{S}(T_G)(0) = T_P(0)$ depends only on the starting point of the Gorgon $T_G(0)$ (Persée chooses his starting point as a function of that of the Gorgon).
> 
> A strategy $\mathcal{S}$ is $winning$ for Persée if for every trajectory $T_G$ at speed at most $v_0$, at every instant $t \ge 0$, the Gorgon does not see Persée: the segment between $T_G(t)$ and $T_P(t) = \mathcal{S}(T_G)(t)$ intersects the obstacle.
> 
> A real $v$ is said to be $admissible$ with an obstacle $\mathcal{O}$ if there exists a winning strategy for Persée when $v_0 = v$.
> 
> 6. Redo the preceding questions with these new rules.
> 
> 7. Propose and study other directions of research.

![[src_tfjm_2022__Q08.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_logica|Logica]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


*Perseo e il Gorgone: una ricerca passo dopo passo in cui ciascuno si muove al massimo d_0 per passo e il Gorgone pietrifica Perseo se il segmento tra loro evita l'ostacolo O; determinare le distanze ammissibili d per vari ostacoli (linea, punto, segmento, disco, poligono), caratterizzare possibili set ammissibili e trattare varianti di strategia a velocità continua.*

> Perseo e il Gorgone (Persée et la Gorgone).
> 
> Persée si avventura nella caverna del Gorgon, e cerca di sfuggire al suo fatale sguardo petrificante.
> 
> La caverna del Gorgon è una regione piana in cui Persée vuole mettere un ostacolo $\mathcal{O}$, che è un insieme di punti su cui Persée e il Gorgon non possono fermarsi, ma che sono in grado di saltare. Persée e il Gorgon sanno in ogni istante dove si trova l'altro, ma lo sguardo del Gorgon raggiunge Persée se il segmento tra i due non contiene alcun punto dell'ostacolo. In questo caso Persée è petrificata.
> 
> Lasciate che $d_0$ sia reale. Il Gorgone deve scegliere il suo punto di partenza fuori dall'ostacolo. Persée sceglie quindi il suo punto di partenza come funzione di quella del Gorgone. Poi il Gorgone inizia cercando di toccare Persée con uno sguardo. Se questo riesce, lo pietrifica. Altrimenti sceglie un punto che non sia nell'ostacolo e che sia a una distanza massima $d_0$ da quello in cui si trovava. Persée, che sa dove sta andando il Gorgon, sceglie un punto a distanza massima $d_0$ dal punto in cui si trovava, se vuole. Quando i due sono arrivati al loro nuovo punto, il Gorgon prova di nuovo a toccare Persée con uno sguardo, e così via. Il vero $d$ è detto di essere $admissible$ per Persée con $\mathcal{O}$ se, con questo ostacolo, Persée ha una strategia che gli consente di non essere mai petrificato, qualunque cosa faccia il Gorgone, quando $d_0 = d$.
> 
> La figura 9 illustra un esempio di inseguimento tra Persée e Gorgon, nel caso in cui l'ostacolo è un triangolo completo e $d_0 = 2$. I punti successivi in cui si trova la Persée sono i punti $P_0, P_1, P_2, P_3$ e i punti successivi in cui si trova il Gorgon sono i punti $G_0, G_1, G_2, G_3$. Dopo tre passi, lo sguardo del Gorgon tocca finalmente Persée: quest'ultima è petrificata.
> 
> 1. Quali sono le realtà ammissibili se l'ostacolo è una linea? Se è un punto? Se si tratta di un segmento di lunghezza $l$?
> 
> 2. L'ostacolo è un disco aperto di raggio $r > 0$. Quali sono le realtà ammissibili per questo ostacolo come funzione di $r$? Si può iniziare con il caso $r = 1$.
> 
> 3. L'ostacolo è un poligono completo. Quali sono le realtà ammissibili di questo ostacolo? Si può iniziare studiando particolari poligoni.
> 
> 4. Il valore $A_\mathcal{O}$ deve essere l'insieme di valori reali ammissibili per un ostacolo $\mathcal{O}$. Quali sono gli insiemi che possono essere scritti $A_\mathcal{O}$ per qualche ostacolo $\mathcal{O}$?
> 
> 5. Ora, il Gorgon deve spostare una distanza esattamente $d_0$ e Persée deve spostare una distanza esattamente 1 ad ogni passo, cioè per tutti $i$, $G_i G_{i+1} = d_0$ e $P_i P_{i+1} = 1$. Riprendi le domande precedenti in questo contesto.
> 
> Ora, il Gorgon si muove permanentemente a velocità massima $v_0$ in direzione di Persée, e Persée si muove permanentemente a velocità massima 1 per evitarla. Per $v \in \mathbb{R}_+^*$, un $trajectory$ a velocità massima $v$ è un'applicazione $T$ da $\mathbb{R}_+$ nel piano in modo tale che: - per $t \in \mathbb{R}_+$, $T(t)$ non sia nell'ostacolo; - per tutti $t_1, t_2 \in \mathbb{R}_+$, la distanza tra $T(t_1)$ e $T(t_2)$ è al massimo $v \times |t_1 - t_2|$.
> 
> Una $strategy$ per Persée è un'applicazione $\mathcal{S}$ che associa a una traiettoria $T_G$ a velocità massima $v_0$ una traiettoria $\mathcal{S}(T_G) = T_P$ a velocità massima 1 in modo tale che per tutte le $t \in \mathbb{R}_+$, il valore $\mathcal{S}(T_G)(t) = T_P(t)$ dipenda solo dai valori della funzione $T_G$ tra il tempo 0 e il tempo $t$ (Persée non può prevedere dove si trova il Gorgon in futuro). In particolare, il punto di partenza di Persée $\mathcal{S}(T_G)(0) = T_P(0)$ dipende solo dal punto di partenza del Gorgon $T_G(0)$ (Persée sceglie il suo punto di partenza come funzione di quello del Gorgon).
> 
> Una strategia $\mathcal{S}$ è $winning$ per Persée se per ogni traiettoria $T_G$ a velocità massima $v_0$, in ogni istante $t \ge 0$, il Gorgon non vede Persée: il segmento tra $T_G(t)$ e $T_P(t) = \mathcal{S}(T_G)(t)$ incrocia l'ostacolo.
> 
> Un vero $v$ è detto $admissible$ con un ostacolo $\mathcal{O}$ se esiste una strategia vincente per Persée quando $v_0 = v$.
> 
> 6. Riprendi le domande precedenti con queste nuove regole.
> 
> 7. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2022__Q08.png]]

[[src_tfjm_2022__Q08]]
