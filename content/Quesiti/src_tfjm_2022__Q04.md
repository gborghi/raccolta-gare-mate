---
tipo: quesito
quesito_id: quesito_src_tfjm_2022__Q04
parent: src_tfjm_2022
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '4'
summary: >-
  A memoryless gold-seeker uses three tools with limited lifetimes that goblins
  can repair overnight; he forgets everything daily, so find a strategy
  minimizing total cost c_n while never losing nuggets, then generalize to k
  tools, lucky charms, and rescuers.
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
  - method_estremalita
  - method_invarianti
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_astrazione
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

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 4

*A memoryless gold-seeker uses three tools with limited lifetimes that goblins can repair overnight; he forgets everything daily, so find a strategy minimizing total cost c_n while never losing nuggets, then generalize to k tools, lucky charms, and rescuers.*

> Memoryless dwarf.
> 
> The dwarf Alaric is a seeker of gold. He goes each day to the mine to find nuggets there.
> 
> There are each day three tools: a pickaxe, a helmet and a lamp. Each tool, used with a certain force, has a limited lifetime: a pickaxe, a helmet and a lamp serve respectively during 2, 3 and 3 days, after which they cease to function. Alaric has the possibility of leaving certain tools with the goblins in the evening when leaving the mine, so that they are returned to him as new the next morning.
> 
> However, Alaric is victim of a curse: upon his waking, the next morning, he has forgotten all that he could have done the preceding days. He is also incapable of observing the wear of his tools. Thus, each evening, at the moment when he chooses which tools he is going to leave to the goblins, he is incapable of knowing either how worn they are, or which one belongs to him. He will tomorrow morning take a tool which is neither too old nor; the tools he is going to take among those he is going to find. If he attempts to use a tool that no longer works, then he cannot dig nor pick up nuggets that day.
> 
> The goal of the dwarf is to find a strategy to spend the least possible money while assuring himself of not losing nuggets: the first day, the goblins furnish him all his tools brand new, but the next morning he won't know whether it is the first day. One denotes by $c_n$ the smallest amount possible that the dwarf will spend up to the $n$-th day, while assuring himself of not losing nuggets up to the $n$-th day.
> 
> 1. Enclose $c_n$ as precisely as possible. Same question if the lamp can serve up to 4 days instead of 3.
> 
> 2. The dwarf now has $k \ge 1$ tools. One denotes $v_1, \ldots, v_k \ge 1$ their lifetimes and $c_n(v_1, \ldots, v_k)$ the minimal amount that the dwarf will spend up to the $n$-th day while assuring himself of not losing nuggets up to the $n$-th day. Estimate $c_n(v_1, \ldots, v_k)$, being interested principally in the cases $n > 2^k$, for
>   a) $k = 2$ and $v_1, v_2 \ge 1$ arbitrary.
>   b) $v_i = k$ for all $i \in [\![1, k]\!]$.
>   c) $v_i > k$ for all $i \in [\![1, k]\!]$.
>   d) $v_i = i$ for all $i \in [\![1, k]\!]$.
>   e) $v_i = 2^i$ for all $i \in [\![1, k]\!]$.
>   f) $v_1, \ldots, v_k$ arbitrary. One may be interested in other particular values of $v_1, \ldots, v_k$.
> 
> 3. Does one always have $c_n(v_1, \ldots, v_{k+1}) \ge c_n(v_1, \ldots, v_k)$ for all $n, k, v_1, \ldots, v_k, v_{k+1} \ge 1$? If not, give counter-examples.
> 
> 4. In this question, Alaric can buy a lucky charm from the goblins, which costs one coin and has an infinite lifetime. In the morning when he wakes up, if he has a lucky charm, he can decide in the evening to throw it away or to keep it, and if he has none, he can decide in the evening to buy one or not.
>   a) Repeat the preceding questions in this setting. In particular, do there exist sets of tools for which the presence of the lucky charm diminishes the minimal cost? If so, describe them.
>   b) Same question if the goblins propose $m \ge 2$ different lucky charms at once.
> 
> 5. Now, if the dwarf breaks one of his tools in the mine, he can call for help so that a team of rescuers comes to fetch him, but this then costs him $p \ge 1$ coins. He must then leave his broken tools with the goblins, and he cannot communicate any information to them (since they do not speak the dwarf language). Repeat questions 1 to 4 in this setting. In particular, do there exist sets of tools for which the presence of the rescuers diminishes the cost? If so, describe them.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2022__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF
