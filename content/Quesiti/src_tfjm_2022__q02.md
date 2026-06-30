---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 2
tipo: quesito
quesito_id: quesito_src_tfjm_2022__Q02
parent: src_tfjm_2022
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '2'
summary: >-
  Swallows on electric wires sing musical themes determined by a reflection-type
  recurrence on their positions; study which themes appear, periodicity,
  sharpest themes, and generalized bird species.
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_invarianti
  - method_ricorsione
  - method_casework
skills:
  - skill_modellizzazione
  - skill_riconoscimento_pattern
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2022
  - livello/TFJM²
  - topic/combinatoria
  - topic/algebra
  - gara/squadre
---

*Swallows on electric wires sing musical themes determined by a reflection-type recurrence on their positions; study which themes appear, periodicity, sharpest themes, and generalized bird species.*

> Melody of the swallows.
> 
> The musician Elaia gives food to the swallows perched on the electric wires in front of her window.
> 
> There are $n \ge 1$ swallows perched on $2k+1$ horizontal electric wires, numbered from bottom to top from $-k$ to $k$. At the start, each swallow $i \in [\![1, n]\!]$ has note $u_i \in [\![-k, k]\!]$, the number of the wire on which it is perched. Elaia imagines the positions of the swallows on the wires as a musical theme: a set $(u_i)_{1 \le i \le n} = (u_1, \ldots, u_n)$ of positions of the swallows.
> 
> To find again the positions of the swallows, Elaia throws a grain to swallow $i$ perched on a wire so that it perches on another wire. The rule is as follows: if Elaia throws a grain to swallow $i$, this one perches on another wire and resumes singing taking the position $v_i = u_{i-1} + u_{i+1} - u_i$, with by convention $u_0 = u_{n+1} = 0$. The other swallows remain at their position: $v_j = u_j$ for $j \ne i$. Elaia obtains then a new musical theme $(v_i)_{1 \le i \le n}$ from $(u_i)_{1 \le i \le n}$ by throwing a grain to swallow $i$; this one resumes singing at its position $v_i$, and the process restarts if she continues to throw other grains. If a swallow can no longer perch on a wire (its target wire $v_i$ does not exist), the process stops.
> 
> For example, Figure 4 illustrates passing from a grain thrown to swallow 2, in the case $n = 4$ with $k = 2$. Here $(u_1, u_2, u_3, u_4) = (-2, -1, 2, 0)$ and $(v_1, v_2, v_3, v_4) = (-2, 1, 2, 0)$.
> 
> 1. Suppose $k$ infinite, and suppose all the swallows are at the start on the wire numbered 0, except one which is on the wire numbered 1. Which musical themes can Elaia obtain? One always begins with the case $n = 1, 2, 3$.
> 
> 2. Suppose henceforth $k$ finite. For which initial musical themes $(u_i)_{1 \le i \le n}$ and which $i$ is Elaia sure that no swallow will leave definitively, whatever the number of grains she throws? (Without taking into account the order in which she throws the grains.)
> 
> 3. One says that a musical theme $(u_i)_{1 \le i \le n}$ is $sharper$ (plus aigu) than another $(u'_i)_{1 \le i \le n}$ if for each $i \in [\![1, n]\!]$ one has $u_i \ge u'_i$.
>   a) Starting from a starting musical theme, in the situations where Elaia is sure that no swallow will leave definitively, can she always reach a musical theme sharper than all the other themes she could attain by throwing grains?
>   b) What is the sharpest musical theme, as a function of the starting theme?
>   c) If $(u_i)_{1 \le i \le n}$ denotes the initial position of the swallows, how many grains $T((u_i)_{1 \le i \le n})$ must Elaia at least use to obtain the sharpest musical theme?
>   d) In the case where Elaia obtains the sharpest musical theme by throwing $T((u_i)_{1 \le i \le n})$ grains, how many different sequences of throws allow her to attain the sharpest musical theme?
> 
> 4. Aglaé, a musicology friend of Elaia, proposes a new model of birds with an experiment, numbered $m \in [\![1, n]\!]$, that when thrown a grain will change position to $v_m = 2 u_{m-1} + u_{m+1} - u_m$, while the others do not change at all. Repeat the preceding questions in this setting. One may begin by treating the cases $m = 1, 2$, then small values of $n$.
> 
> 5. The swallow at position $m$ is now of a new species with parameters $(a, b) \in \mathbb{N}^2$: when Elaia throws it a grain, it perches at the position $v_m = a u_{m-1} + b u_{m+1} - u_m$. Thus question 4 corresponds to a new species with parameters $(a, b) = (2, 1)$. Repeat questions 1, 2, 3 with this new species of bird, discussing the results as a function of $m$ and the couple $(a, b)$.
> 
> 6. Propose and explore other avenues of research. One may, for example, change the species of several birds.

![[src_tfjm_2022__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)
