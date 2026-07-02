---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020 — Quesito 8
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2020__Q08
parent: src_tfjm_2020
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020
family: tfjm
year: '2020'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: Self-replicating robots on modular planet galaxies and improper distributions
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_combinatoria
  - topic_algebra
methods:
  - method_induzione
  - method_ricorsione
  - method_congruenze
  - method_invarianti
skills:
  - skill_modellizzazione
  - skill_astrazione
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2020
  - livello/TFJM²
  - topic/aritmetica
  - topic/combinatoria
  - topic/algebra
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Self-replicating robots on modular planet galaxies and improper distributions*

> In the TF-J-1000 galaxy, technology is far more advanced than in ours: self-replicating robots have been developed, and they propagate from planet to planet.
> 
> A galaxy is made up of a set of planets. Each one can be reached from certain others and, every century, each robot produces one robot for each planet accessible from its planet, then sends off the new robots and self-destructs.
> 
> An example of the evolution of the number of robots in a galaxy is given in Figure 16. In this example the planet at the top right is accessible from the planet at the top left, but not the other way round.
> 
> **1.** Suppose the galaxy consists of one planet for each integer of $\mathbb{Z}$, and each planet is accessible from its two neighbours. At the start there is a single robot at $0$. How many robots are active on planet $k$ at century $s$?
> 
> **2.** Revisit the previous question if the galaxy has one planet for each element of $\mathbb{Z}^2$, with each planet accessible from its four neighbours.
> 
> **3.** Revisit the previous question if the galaxy has one planet for each element of $[1, p]$, and each planet is accessible from its two neighbours. The initial robot may be on any planet. We restrict to the cases $p = 3, 4, 5$ and eventually $6$.
> 
> Let $g \in \mathbb{N}^*$. We now suppose that, if at least $g$ robots are on the same planet, a war breaks out and $g$ robots are destroyed. More generally, for any $k$, if there are between $kg$ and $(k+1)g$ robots, $kg$ are destroyed, so that only the remainder of the Euclidean division of the number of robots by $g$ survives and may self-replicate. We also suppose the galaxy contains only finitely many planets.
> 
> A galaxy is said to be **improper** when, whatever the initial distribution of robots, they will all eventually disappear.
> 
> **4.** In this question only, suppose $g = 2$. Let $p \in \mathbb{N}^*$.
> a) Suppose the galaxy has one planet for each element of $[0, p-1]$, and each planet is accessible from its two neighbours: here $0$ and $p-1$ are neighbours, as in Figure 17. For which integers $p$ is the galaxy improper?
> b) Revisit the question if the galaxy has one planet for each element of $[0, p-1]^2$, and each planet is accessible from its four neighbours: likewise, planets $(0,k)$ and $(p-1,k)$ are considered neighbours, as are planets $(k,0)$ and $(k, p-1)$, as illustrated in Figure 18.
> c) Revisit the question for other galaxies of your choice.
> 
> **5.** Let $g \in \mathbb{N}^*$.
> a) Propose examples of improper galaxies. We will try to find galaxies with a large number of links.
> b) Does there exist a galaxy such that, whatever the starting distribution with between $1$ and $g - 1$ robots per planet, we are guaranteed that some planet will one day contain exactly $1$ robot?
> c) Does there exist a galaxy such that we know there is a certain planet which, for every $0 \le r \le g - 1$, will one day contain exactly $r$ robots?
> d) Does there exist a galaxy if we replace the assumption on the initial distribution by the fact that at least one planet contains between $1$ and $g - 1$ robots?
> 
> **6.** Propose and study other directions of research.

![[src_tfjm_2020__Q08.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_congruenze|Congruenze]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Robot auto-replicanti su galassie planetarie modulari e distribuzioni improprie*

> Nella galassia TF-J-1000, la tecnologia è molto più avanzata della nostra: sono stati sviluppati robot auto-replicanti, che si propagano da pianeta a pianeta.
> 
> Una galassia è composta da un insieme di pianeti. Ognuno può essere raggiunto da alcuni altri e, ogni secolo, ogni robot produce un robot per ogni pianeta accessibile dal suo pianeta, poi manda via i nuovi robot e si autodistruisce.
> 
> Un esempio dell'evoluzione del numero di robot in una galassia è dato nella Figura 16. In questo esempio il pianeta in alto a destra è accessibile dal pianeta in alto a sinistra, ma non viceversa.
> 
> Supponiamo che la galassia sia composta da un pianeta per ogni numero intero di$\mathbb{Z}$, e che ogni pianeta sia accessibile dai suoi due vicini. All'inizio c'è un solo robot a $0$. Quanti robot sono attivi sul pianeta$k$ al secolo$s$?
> 
> **2.** Rivedi la domanda precedente se la galassia ha un pianeta per ogni elemento di $\mathbb{Z}^2$, con ogni pianeta accessibile dai suoi quattro vicini.
> 
> **3.** Rivedi la domanda precedente se la galassia ha un pianeta per ogni elemento di $[1, p]$, e ogni pianeta è accessibile dai suoi due vicini. Il robot iniziale potrebbe essere su qualsiasi pianeta. Noi ci limitiamo ai casi $p = 3, 4, 5$ e infine $6$.
> 
> Let $g \in \mathbb{N}^*$. Ora supponiamo che, se almeno $g$ robot sono sullo stesso pianeta, scoppierà una guerra e $g$ robot saranno distrutti. Più in generale, per qualsiasi $k$, se ci sono tra $kg$ e $(k+1)g$ robot, $kg$ sono distrutti, in modo che solo il resto della divisione euclidica del numero di robot da $g$ sopravvive e può auto-replicarsi. Supponiamo anche che la galassia contenga solo finitamente molti pianeti.
> 
> Si dice che una galassia sia **inappropriata** quando, qualunque sia la distribuzione iniziale dei robot, tutti alla fine scompariranno.
> 
> **4. ** Solo in questa domanda, supponiamo $g = 2$. Let $p \in \mathbb{N}^*$. a) Supponiamo che la galassia abbia un pianeta per ogni elemento di $[0, p-1]$, e che ogni pianeta sia accessibile dai suoi due vicini: qui $0$ e $p-1$ sono vicini, come nella Figura 17. Per quali integri $p$ la galassia è inappropriata? b) Rivisitare la questione se la galassia ha un pianeta per ogni elemento di $[0, p-1]^2$, e ogni pianeta è accessibile dai suoi quattro vicini: allo stesso modo, i pianeti $(0,k)$ e $(p-1,k)$ sono considerati vicini, così come i pianeti $(k,0)$ e $(k, p-1)$, come illustrato nella Figura 18. c) Rivedi la domanda per altre galassie di tua scelta.
> 
> **5. ** Lasciate $g \in \mathbb{N}^*$. a) Propone esempi di galassie improprie. Cercheremo di trovare galassie con un gran numero di collegamenti. b) Esiste una galassia tale che, qualunque sia la distribuzione iniziale con $1$ e $g - 1$ robot per pianeta, siamo garantiti che un giorno un pianeta contiene esattamente $1$ robot? c) Esiste una galassia tale che sappiamo che esiste un certo pianeta che, per ogni $0 \le r \le g - 1$, un giorno contiene esattamente $r$ robot? d) Esiste una galassia se si sostituisce l'ipotesi sulla distribuzione iniziale con il fatto che almeno un pianeta contiene tra $1$ e $g - 1$ robot?
> 
> **6.** Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2020__Q08.png]]

[[src_tfjm_2020__Q08]]
