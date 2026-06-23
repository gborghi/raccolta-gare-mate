---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 6
tipo: quesito
quesito_id: quesito_src_tfjm_2025__Q06
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '6'
summary: >-
  Optimizing bus stop spacing on a line where bus speed decreases with passenger
  count V_k = V_0/(1+ln(k+1)); minimize bunching and travel time with
  holding/skip-stop strategies.
qa_score: '2'
topics:
  - topic_algebra
  - topic_combinatoria
  - topic_probabilita
methods:
  - method_ricorsione
  - method_disuguaglianze
  - method_casework
skills:
  - skill_modellizzazione
  - skill_stima
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/algebra
  - topic/combinatoria
  - topic/probabilita
  - gara/squadre
  - qa/da-verificare
---

*Optimizing bus stop spacing on a line where bus speed decreases with passenger count V_k = V_0/(1+ln(k+1)); minimize bunching and travel time with holding/skip-stop strategies.*

> Problem 6 - The nightmare of the 20-25 line.
> 
> In a far country, traffic conditions are considerably degraded on bus line 20-25, which links an important railway gateway to the university campus, to the great displeasure of the students. In particular one witnesses spectacular scenes where a bus is so crowded that it slows down and stops, only to be caught up by the bus following it, sometimes with three consecutive buses queuing one behind another. Faced with this problem, the transport company TRAIP has tasked Antoine with carrying out an efficiency analysis and proposing improvements. The situation being rather complex, Antoine decides to work on a simplified model. He considers line 20-25 as a straight line, with the depot located at $0$, then a stop at each integer $n \ge 1$ (the depot is thus not considered a stop). After some observations, it appears to him that the buses move at an initial average speed $V_0$, but that their average speed decreases as they load passengers. Antoine observes that the average speed of a bus containing $k$ passengers (the driver does not count as a passenger) is given by the formula
> 
> $(1) \quad V_k = \frac{V_0}{1 + \ln(k + 1)}.$
> 
> (Antoine considers that the buses move constantly at their average speed, and the time spent at stops is included in this average speed. In other words, he acts as if the buses moved constantly at speed $V_k$, and when they reach a stop they board all the passengers there and change speed instantaneously.) We suppose passengers never get off, except when arriving at a terminus.
> 
> The buses cannot overtake; when a bus catches up to a predecessor, it follows it at the same speed (even if this means traveling slower than its average speed), and on arriving at a stop, the passengers are distributed equitably between the buses (if there were to be more buses than passengers, we suppose we fill first the bus that arrived first). Moreover, we suppose the buses have infinite transport capacity.
> 
> 1. First, Antoine is interested in what happens at rush hour. He considers that there are $N$ passengers at each stop. Two buses leave the depot, the first at time $t = 0$, the second starting when the first reaches the first stop. Do they end up catching each other?
> 
> 2. Antoine wonders what happens when the day begins and the buses leave the depot empty. a) Do the two buses end up catching each other? b) What happens in the case where the buses start in a block, the first at time $t = 0$, each following bus starting when the one that left before it reached the first stop?
> 
> 3. Antoine, being well aware that the preceding model does not account for small traffic hazards or unexpected passenger surges, now wishes to include them. He considers the following variants. a) At time $t = T$, the lead bus is immobilized for a time interval of $\frac{1}{10}$ due to a traffic jam, before resuming normal speed. b) At time $t = T$, a quantity $q$ of passengers arrives at the stop located at $n = 10$, in addition to the normal filling. Always in the case of the two buses separated by one unit of time, evaluate the impact of the two perturbations above on the rest of their journey. (Discuss the results as a function of $T$ and $q$.)
> 
> 4. Antoine now wishes to design a strategy to hold the buses at the stops at rush hour, to prevent them from catching each other. We now suppose that, when they arrive at the stops (and only then), the buses can stop and wait an arbitrary time before resuming their normal speed. A strategy is a function which, knowing the position of all the buses, the number of passengers they carry, and the number of passengers at each stop, tells each bus the time to wait when arriving at a stop. To add more realism, Antoine considers that the line ends at stop $n = 20$, considered as the depot at the end of the line; there are no passengers at this stop. When a bus stops at $n = 20$, it drops all its passengers and leaves in the other direction, picking up all the passengers who wish. We suppose the stops keep filling at a constant rate of $\rho$ passengers per unit time. Suppose two buses circulate on the line, both leaving the depot at $n = 0$, the first at time $t = 0$, the second when the predecessor reaches the first stop. a) Does there exist a strategy to hold the buses at the stops so as to prevent them from catching each other? b) What happens in the case of $m$ buses, each bus after the first leaving when the predecessor reached the first stop?
> 
> 5. Antoine wishes to explore one last idea to improve passenger travel time. We place ourselves again in the frame of question 2, with two buses circulating, where the stops are initially empty and fill progressively. Suppose there is a countably infinite set of stops indexed by the natural numbers. Antoine supposes the first bus serves only the odd stops, and the second only the even stops. a) Does this strategy present a gain in terms of passenger travel time? Quantify it as precisely as possible. b) To push his idea further, Antoine now supposes a bus starts at each integer time $t$, and that the buses serve the stops in steps of $k$. More precisely, the first bus serves the multiples of $k$, the next serves the multiples of $k$ plus $1$, and so on. After $k$ buses, the scheme repeats: the $(k+1)$-th bus serves the multiples of $k$, the $(k+2)$-th serves the multiples of $k$ plus $1$, and so on. Quantify the eventual gain in passenger travel time, and examine what happens as $k \to +\infty$. c) Antoine decides to push his idea even further, adding more stops to spread the passengers over more stops. He supposes there is now a stop at $\frac{n}{k}$ for each integer $n \ge 1$, and that travelers arrive at the stops at a rate of $\frac{\rho}{k}$ passengers per unit time. We always consider a bus leaves the depot at each unit of time. We are particularly interested in what happens in the limit as $k \to +\infty$.
> 
> 6. Propose and study other lines of research.

![[src_tfjm_2025__Q06.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
