---
tipo: quesito
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

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 8

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
**Fonte:** apri PDF
