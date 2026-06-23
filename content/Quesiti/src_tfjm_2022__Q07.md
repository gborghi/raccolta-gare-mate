---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 7
tipo: quesito
quesito_id: quesito_src_tfjm_2022__Q07
parent: src_tfjm_2022
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  Dog walk: n dogs each move one unit per second toward the next dog
  (cyclically); Boule on a leash of length L must avoid breaking leashes whether
  he stays put or moves; study triangle case, universal leash lengths, and
  variants where a dog chases a cat on an N-gon or a line.
qa_score: '3'
topics:
  - topic_geometria_piana
  - topic_geometria_analitica
methods:
  - method_ricorsione
  - method_coordinate
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
  - skill_modellizzazione
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2022
  - livello/TFJM²
  - topic/geometria_piana
  - topic/geometria_analitica
  - gara/squadre
---

*Dog walk: n dogs each move one unit per second toward the next dog (cyclically); Boule on a leash of length L must avoid breaking leashes whether he stays put or moves; study triangle case, universal leash lengths, and variants where a dog chases a cat on an N-gon or a line.*

> Dog walk (Promenade de chiens).
> 
> Boule decides to walk his dogs. Unfortunately for him, these last ones are very turbulent and run after each other.
> 
> Boule possesses $n \ge 2$ dogs. For all $1 \le i \le n$, the dog of number $i$ follows the dog of number $i + 1$ (one considers that dog number $n + 1$ is dog number 1). The dogs move in the following manner: at each second, for $1 \le i \le n$, the dog $i$ moves a length 1 in the direction of dog $i + 1$. More precisely, for all $t \in \mathbb{N}$, denoting $C_i(t)$ the position of dog $i$ at the end of $t$ seconds:
>   — if $C_i(t) \ne C_{i+1}(t)$, then $C_i(t+1)$ is the unique point such that the vectors $\overrightarrow{C_i(t)C_i(t+1)}$ and $\overrightarrow{C_i(t)C_{i+1}(t)}$ have the same direction and same sense, and $C_i(t)C_i(t+1) = 1$;
>   — if $C_i(t) = C_{i+1}(t)$, then $C_i(t+1) = C_i(t)$, in other words the $i$-th dog does not move.
> 
> The dogs thus all move at the same time at each second. Figure 8 illustrates an example with $n = 3$.
> 
> Boule has attached a leash of length $L$ to the neck of each of his dogs. A leash breaks if at a time $t \in \mathbb{N}$, the distance between Boule and one of his dogs is strictly greater than $L$.
> 
> 1. Boule is of a lazy mood: he chooses a point at the beginning of the walk as a function of the initial positions of the dogs and does not move any more.
>   a) Suppose $n = 3$ and that the three dogs are placed initially at the vertices of an equilateral triangle of side $c$. Does there exist a length $L$ such that Boule can assure himself of breaking no leash? If so, what is the smallest length $L$ that permits this, as a function of $c$?
>   b) Suppose now $n$ arbitrary. Is it true that whatever the initial configuration, Boule can always foresee a sufficient leash length? One may begin by studying the cases $n = 2, 3, 4$.
> 
> 2. From now on Boule decides to move so as to avoid the leashes breaking: at each instant $t$ he can place himself at the point of his choice (he runs very fast so he has no limitation due to his speed).
>   a) For $n = 3$ with an arbitrary initial position, is it true that Boule can foresee a sufficient leash length so that the leash does not break as long as he moves with his dogs?
>   b) Study the case of $n$ dogs in an arbitrary initial position.
> 
> A length $L_0$ is said to be $universal$ for $n$ dogs if whatever the initial position of the dogs, there exists a time $t_0$ from which Boule, who moves, can replace his leashes by leashes of length $L_0$ without any of these leashes breaking any more.
> 
> 3. For which $n \ge 2$ does there exist a universal length for $n$ dogs? For such $n$, what is the smallest universal length? One may begin by treating the cases $n = 2, 3, 4$.
> 
> Mylène, the neighbor of Boule, possesses a cat, which is situated at the point $M(t)$ at time $t$. One supposes from now on that dog number $n$ no longer follows dog number 1 but the cat, that is to say that at each second it makes a step of length 1 in the direction of the cat. The rules of movement of the other dogs remain unchanged.
> 
> 4. The cat of Mylène moves on the vertices of a regular $N$-gon of side 1. At each instant, it passes from a vertex to the following vertex (in the direct sense).
>   a) If Boule has only a single dog, and the dog starts at the center of the $N$-gon, what leash length must Boule foresee if he does not move?
>   b) Same question for $n$ dogs which all start at the center.
> 
> 5. This time the cat moves on a straight line, making a step of length 1 in the same direction at each instant. What leash length must Boule foresee if he can move, as a function of the initial configuration?
> 
> 6. Propose and study other avenues of research.

![[src_tfjm_2022__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)
