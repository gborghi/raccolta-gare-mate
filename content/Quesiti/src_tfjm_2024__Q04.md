---
tipo: quesito
quesito_id: quesito_src_tfjm_2024__Q04
parent: src_tfjm_2024
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024
family: tfjm
year: '2024'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '4'
summary: >-
  Depollution of the Seine: a discrete dynamical model of clean vs. polluted
  water volumes in a basin where bacteria reproduce (factor K) and die at
  midnight; study the recurrence v_T under several movement rules, stirring,
  evaporation, and weather.
qa_score: '3'
topics:
  - topic_algebra
  - topic_funzionali
methods:
  - method_ricorsione
  - method_casework
  - method_induzione
skills:
  - skill_manipolazione_algebrica
  - skill_modellizzazione
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2024
  - livello/TFJM²
  - topic/algebra
  - topic/funzionali
  - gara/squadre
---

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024 — Quesito 4

*Depollution of the Seine: a discrete dynamical model of clean vs. polluted water volumes in a basin where bacteria reproduce (factor K) and die at midnight; study the recurrence v_T under several movement rules, stirring, evaporation, and weather.*

> For the swimming events of the Olympic Games of $2024$, certain basins, supplied by the Seine, must be depolluted.
> 
> A team of biologists has found a bacterium capable of depolluting the water. Initially, the basin, of volume $V = 2500\,m^3$, contains only polluted water. To clean the polluted water, the biologists pour the bacteria into the basin. The bacteria reproduce as long as there is polluted water and there is space; they remain immobile (the volume of polluted water remains unchanged).
> 
> Under ideal conditions, a bacterium produces on average $K$ daughter bacteria. In practice, the bacteria bother one another, on average one bacterium too many. One thus takes for the average number of daughter bacteria:
> $$f(v) = K\left(v - \frac{v^2}{V}\right),$$
> where $K$ is a strictly positive constant. Soon one will consider the term $-v^2/V$ to be negligible. In question $\textbf{7.}$ one will treat the case without this simplification.
> 
> One denotes $v_0$ the volume of polluted water at the start, and $v_T$ the volume occupied by the bacteria after the first day. The population of bacteria is composed in the following manner:
>   — The bacteria located in clean water remain there: this is pollution. Thus polluted water becomes clean water plus bacteria.
>   — At noon, under the sun, the bacteria reproduce. The daughter bacteria occupy a volume $f(v_T)$ whose repartition in the basin one does not know, with $f : [0,V] \to [0,V]$ a function described below.
>   — Until midnight, the bacteria may move in the basin. The manner in which they move varies according to the questions and will be precised.
>   — At midnight, a bacterium that finds clean water survives, otherwise it dies instantaneously. Thus clean water becomes polluted water, otherwise the bacterium remains unchanged.
> 
> $\textbf{1.}$ What are the possible values of $K$ that guarantee that if $0 \le v_0 \le V$ then $0 \le v_T \le V$ for all $T$? Henceforth, to simplify, one takes $f(v) = \begin{cases} Kv & \text{if } 0 \le Kv \le V, \\ V & \text{otherwise.} \end{cases}$
> 
> $\textbf{2.}$ Suppose in this question that the daughter bacteria move in priority into the polluted water, then into the clean water places where there was polluted water. For which values of $K$ and $v_0$ do the bacteria entirely clean the basin?
>   a) Study the evolution of the sequence $v_T$. To what value does it tend, and how?
>   b) If $K \le 2$, for which values of $v_0$ do the bacteria entirely depollute the basin?
>   c) If $K = 4$, for which values of $v_0$ do the bacteria entirely depollute the basin?
>   d) Study the cases $K > 4$ and $2 < K < 4$.
>   e) From the various preceding cases, frame precisely the number of days necessary for the bacteria to entirely depollute the basin.
> 
> $\textbf{3.}$ Inversely, suppose in this question that the daughter bacteria move in priority into the clean water, then into the polluted water places where there was polluted water (cells which settle near the clean water).
>   a) Study the evolution of the sequence $v_T$. To what value does it tend, and how?
>   b) If $K \le 2$, for which values of $v_0$ do the bacteria entirely depollute the basin?
>   c) If $K = 4$, for which values of $v_0$ do the bacteria entirely depollute the basin?
>   d) Study the cases $K > 4$ and $2 < K < 4$.
>   e) From the various preceding cases, frame precisely the number of days necessary for the bacteria to entirely depollute the basin.
> 
> Now one supposes that the clean water is stirred before resting under the sun. At midnight, the bacteria are retrieved according to proportions precisely distributed between the clean and polluted water: if the clean water and the polluted water occupy respectively volumes $\alpha_T V$ and $\beta_T V$ before the night (where $\alpha_T + \beta_T = 1$) then the volumes of bacteria in the clean water and in the polluted water are respectively $f(v_T)\alpha_T$ and $f(v_T)\beta_T$.
> 
> $\textbf{4.}$ Find the necessary and/or sufficient conditions on $K$ and $v_0$ for the bacteria to entirely depollute the basin.
> 
> For the next question one supposes the water is stirred, that there is no more evaporation, but that the reproduction of the bacteria varies according to the weather. If it is fine, $f(v_T) = K_1 v_T$, and if it rains, $f(v_T) = K_2 v_T$, with $K_1 > K_2 > 0$ (with always $f(v_T) = V$ if $K_1 v_T > V$ or $K_2 v_T > V$). It rains exactly one day out of two: if it rains on day $T$, then day $T+1$ is fine and day $T+2$ it rains. At day $T = 0$, it is fine.
> 
> $\textbf{5.}$ One denotes $w_T$, with $0 \le w_T \le V$, the volume of clean water in the basin on the morning of day $T$. Find the necessary/sufficient conditions on $K$, $w$ and $v_0$ so that:
>   a) the sequence $(w_T)$ admits a limit, and estimate the limit as a function of $K$, $w$ and $v_0$;
>   b) the sequence $(w_T)$ is periodic, and estimate the period as a function of $K$, $w$ and $v_0$.
>   Study more generally whether it is possible for the sequence $w_T$.
> 
> $\textbf{6.}$ Find necessary and/or sufficient conditions on $K_1$, $K_2$ and $v_0$ for the basin to be entirely depolluted.
> 
> $\textbf{7.}$ One returns, to finish, to the exact general case where $f(v) = K\left(v - \frac{v^2}{V}\right)$. Describe the behavior of the sequence $v_T$ in the context of questions $\textbf{2.}$, $\textbf{3.}$, $\textbf{4.}$, according to the value of $K$.
> 
> $\textbf{8.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q04.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_casework|Casework]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** apri PDF
