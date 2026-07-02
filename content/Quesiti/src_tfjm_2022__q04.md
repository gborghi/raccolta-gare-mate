---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 4
tipo: quesito
lang: en
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
<div class="qlang-switch" data-default="en"></div>


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
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


Un cercatore d'oro senza memoria utilizza tre strumenti con vite limitate che i goblin possono riparare durante la notte; dimentica tutto ogni giorno, quindi trova una strategia per ridurre al minimo il costo totale senza perdere mai le nugget, quindi generalizzatela a k strumenti, incantesimi di fortuna e salvatori.*

> Nano senza memoria.
> 
> Il nano Alaric è un cercatore di oro. Va ogni giorno alla miniera a trovare delle nugget lì.
> 
> Ogni giorno ci sono tre attrezzi: un pugnale, un casco e una lampada. Ogni strumento, utilizzato con una certa forza, ha una durata limitata: una picca, un casco e una lampada servono rispettivamente per 2, 3 e 3 giorni, dopo i quali cessano di funzionare. Alaric ha la possibilità di lasciare alcuni strumenti ai goblin la sera quando esce dalla miniera, in modo che gli vengano restituiti come nuovi la mattina dopo.
> 
> Tuttavia, Alaric è vittima di una maledizione: al risveglio, la mattina dopo, ha dimenticato tutto ciò che avrebbe potuto fare i giorni precedenti. E' anche incapace di osservare l'usura dei suoi strumenti. Così, ogni sera, nel momento in cui sceglie quali strumenti lasciare ai goblin, non è in grado di sapere quanto sono indossati, o quale gli appartiene. Domani mattina prenderà uno strumento che non è né troppo vecchio né; gli strumenti che prenderà tra quelli che troverà. Se cerca di usare uno strumento che non funziona più, allora non può scavare né raccogliere nuggets quel giorno.
> 
> L'obiettivo del nano è quello di trovare una strategia per spendere il minimo denaro possibile assicurandosi di non perdere le nugget: il primo giorno, i goblin gli forniscono tutti i suoi strumenti nuovi, ma la mattina dopo non saprà se è il primo giorno. Uno indica con $c_n$ la minima quantità possibile che la nana spenderà fino al $n$-th giorno, assicurandosi di non perdere nuggets fino al $n$-th giorno.
> 
> 1. Inserire $c_n$ con la massima precisione possibile. La stessa domanda se la lampada può servire fino a 4 giorni invece di 3.
> 
> 2. Il nano ora ha gli strumenti. Uno indica $v_1, \ldots, v_k \ge 1$ le loro vite e $c_n(v_1, \ldots, v_k)$ la quantità minima che il nano spenderà fino al $n$-th giorno assicurandosi di non perdere nuggets fino al $n$-th giorno. Valutare $c_n(v_1, \ldots, v_k)$, essendo interessato principalmente nei casi $n > 2^k$, per a) $k = 2$ e $v_1, v_2 \ge 1$ arbitrario. b) $v_i = k$ per tutti $i \in [\![1, k]\!]$. c) $v_i > k$ per tutti $i \in [\![1, k]\!]$. d) $v_i = i$ per tutti $i \in [\![1, k]\!]$. e) $v_i = 2^i$ per tutti $i \in [\![1, k]\!]$. f) $v_1, \ldots, v_k$ arbitrario. Potrebbe interessare altri valori particolari di $v_1, \ldots, v_k$.
> 
> 3. Si dispone sempre di $c_n(v_1, \ldots, v_{k+1}) \ge c_n(v_1, \ldots, v_k)$ per tutti $n, k, v_1, \ldots, v_k, v_{k+1} \ge 1$? Se non è così, date dei contro-esempi.
> 
> 4. In questa domanda, Alaric può comprare un fascino di fortuna dai goblin, che costa una moneta e ha una vita infinita. La mattina, quando si sveglia, se ha un fascino fortunato, può decidere la sera di buttarlo via o tenerlo, e se non ne ha uno, può decidere la sera di comprarlo o no. a) Ripetere le domande precedenti in questo contesto. In particolare, esistono strumenti per i quali la presenza del fascino di fortuna riduce il costo minimo? Se sì, descriverli. b) La stessa domanda se i goblin propongono diversi incantesimi di fortuna contemporaneamente.
> 
> 5. Ora, se il nano rompe uno dei suoi strumenti nella miniera, può chiamare aiuto in modo che un team di soccorritori venga a prenderlo, ma questo gli costerà monete. Deve poi lasciare i suoi strumenti rotti ai goblin, e non può comunicare alcuna informazione a loro (dal momento che non parlano la lingua nanna). Ripetere le domande da 1 a 4 in questo contesto. In particolare, esistono strumenti per i quali la presenza dei soccorritori riduce il costo? Se sì, descriverli.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2022__Q04.png]]

[[src_tfjm_2022__Q04]]
