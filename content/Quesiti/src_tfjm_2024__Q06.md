---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024 — Quesito 6
tipo: quesito
quesito_id: quesito_src_tfjm_2024__Q06
parent: src_tfjm_2024
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024
family: tfjm
year: '2024'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '6'
summary: >-
  Rigged coins: Felix flips a coin landing heads with probability p; Clara
  predicts upcoming flips to maximize her guaranteed (worst-case over p)
  expected gain across strategies, then with two coins, guessing which coin, and
  a switch point K.
qa_score: '3'
topics:
  - topic_probabilita
methods:
  - method_casework
  - method_conteggio
skills:
  - skill_modellizzazione
  - skill_stima
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2024
  - livello/TFJM²
  - topic/probabilita
  - gara/squadre
---

*Rigged coins: Felix flips a coin landing heads with probability p; Clara predicts upcoming flips to maximize her guaranteed (worst-case over p) expected gain across strategies, then with two coins, guessing which coin, and a switch point K.*

> Let $n \ge 1$ be an integer. Felix and Clara play heads-or-tails. Felix possesses a rigged coin that falls on heads with probability $p \in [0,1]$. Felix flips the coin a first time, then Clara tries to predict the result of the next flip, Felix flips the coin again, Clara makes a prediction, and so on. The first prediction of Clara concerns flip number $2$; in total Felix flips the coin $n+1$ times (the flips are supposed independent) and Clara makes $n$ predictions for flips $2, 3, \dots, n+1$. The $n+1$ flips and the $n$ predictions constitute a $\textbf{game}$.
> 
> An example of a game, for $n = 2$, is: Felix flips heads; Clara predicts tails; Felix flips tails; Clara predicts heads; Felix flips tails. In this case, Clara made a first correct prediction and a second incorrect prediction.
> 
> $\textbf{1.}$ Suppose in this question that Clara gains one point per correct prediction. Her total number of points at the end of the game is called her $\textbf{gain}$. What is the expectation of her gain if her prediction is:
>   a) always heads?
>   b) the result of the previous flip?
>   c) heads if the number of heads already obtained is even, tails otherwise?
> 
> Now Clara wants to maximize her chances of obtaining a good score. She does not know the value of $p$ but knows that $p \in \mathcal{P}$ where $\mathcal{P}$ is a subset of $[0,1]$. A $\textbf{strategy}$ for Clara is a manner of choosing which prediction she will make before flip $m$ as a function of the results of flips $1, 2, \dots, m-1$. Question $\textbf{1.}$ gives three examples of strategies. Let $G_{\mathcal{S},p}$ be the (random) gain obtained for the strategy $\mathcal{S}$, with $p$ the probability that the coin falls heads. One defines the $\textbf{minimal expected gain}$ for the strategy $\mathcal{S}$ as $\mathcal{G}_{\mathcal{S}} = \min_{p \in \mathcal{P}} \mathbb{E}(G_{\mathcal{S},p})$. In other words, $\mathcal{G}_{\mathcal{S}}$ is the expectation of the gain brought by strategy $\mathcal{S}$ for the worst of the values of $p \in \mathcal{P}$, that is, the one where this expected gain is the lowest.
> 
> $\textbf{2.}$ If Clara has no a priori information on the value of $p$, that is $\mathcal{P} = [0,1]$, what is the minimal expected gain for strategies a), b), c) described in question $\textbf{1.}$?
> 
> $\textbf{3.}$ Find a strategy $\mathcal{S}$ that gives the greatest minimal expected gain $\mathcal{G}_{\mathcal{S}}$ among all possible strategies (and compute it) if:
>   a) $\mathcal{P} = [0, \frac{1}{2}]$;
>   b) $\mathcal{P} = [0, 1]$;
>   c) $\mathcal{P} = [0, \frac{1}{4}] \cup [\frac{3}{4}, 1]$.
> 
> From now on, Felix possesses two coins, of indistinguishable appearance, that fall on heads with probabilities $p_1$ and $p_2$. Before each game, he chooses coin $1$ with probability $q$ (hence coin $2$ with probability $1-q$) then flips the chosen coin $n+1$ times, as before. One supposes Clara knows the probabilities $p_1$, $p_2$ and $q$ (so the prediction choices she makes may depend on $p_1$, $p_2$ and $q$).
> 
> $\textbf{4.}$ What is the expectation of Clara's gain for strategies a), b), c) described in question $\textbf{1.}$? Among all possible strategies, find one for which the expectation of the gain is the greatest possible, and compute it.
> 
> Clara no longer tries to guess the results of the flips but rather which coin was chosen. Felix flips the coin a first time, then after each flip Clara may choose to declare which coin she thinks was chosen or to stop the game; she gains $1$ point per correct guess but loses one point per additional flip requested.
> 
> $\textbf{5.}$ Which strategy maximizes the expectation of the gain obtained, and what is then this gain on average? What happens when $n \to \infty$ (that is, when one no longer fixes a limit on the number of flips requested)?
> 
> Now Felix still has two coins but changes coin midway. Before the game, he chooses uniformly at random a number $K$ between $1$ and $n$ (inclusive). He flips coin $1$ for flips $0, \dots, K-1$ and coin $2$ for flips $K, \dots, n$. Clara still knows the probabilities $p_1$, $p_2$.
> 
> $\textbf{6.}$ Clara must guess which $K$ was chosen by Felix.
>   a) Clara announces her prediction after the $n+1$ flips. Which strategy(ies) allow her to maximize the probability of being right, and what is then this probability?
>   b) Clara may guess $K$ before the end of the game. If she is right she gains $n - (m - K)$ points where $m$ is the number of the flip after which the announcement was made. In other words, if she makes the announcement after flip $m$, either $m < K$ and she gains no points, or $m \ge K$ and she gains $n$ points but loses one point per flip of delay in her announcement. Which strategy(ies) allow her to maximize the expectation of her gain, and what is then this gain on average?
> 
> $\textbf{7.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q06.png]]

**Topic:** [[topic_probabilita|Probabilità]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF
