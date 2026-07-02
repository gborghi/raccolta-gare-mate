---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024 — Quesito 6
tipo: quesito
lang: en
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
<div class="qlang-switch" data-default="en"></div>


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
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<span class="qlang-split" data-lang="it"></span>


*Monete rigidate: Felix lancia una moneta con probabilità di sbarco p; Clara predice i prossimi lanci per massimizzare il suo guadagno garantito (in peggiore dei casi rispetto a p) previsto tra le strategie, quindi con due monete, indovinando quale moneta, e un punto di svolta K.*

> $n \ge 1$ sia un numero intero. Felix e Clara giocano a testa o coda. Felix possiede una moneta truccata che cade sulle teste con probabilità $p \in [0,1]$. Felix lancia la moneta la prima volta, poi Clara cerca di prevedere il risultato del prossimo lancio, Felix lancia di nuovo la moneta, Clara fa una previsione, e così via. La prima previsione di Clara riguarda il numero di flip $2$; in totale Felix flips la moneta $n+1$ volte (le flips sono presumibilmente indipendenti) e Clara fa $n$ previsioni per le flips $2, 3, \dots, n+1$. I volti $n+1$ e le previsioni $n$ costituiscono un $\textbf{game}$.
> 
> Un esempio di gioco, per $n = 2$, è: Felix volte le teste; Clara predice le code; Felix volte le code; Clara predice le teste; Felix volte le code. In questo caso, Clara fece una prima previsione corretta e una seconda incorreta.
> 
> Supponiamo in questa domanda che Clara guadagni un punto per ogni predizione corretta. Il suo numero totale di punti alla fine della partita è chiamato $\textbf{gain}$. Qual è l'aspettativa del suo guadagno se la sua previsione è: a) sempre testa? b) il risultato del passaggio precedente? c) le teste, se il numero di teste già ottenuto è pari, le code altrimenti?
> 
> Ora Clara vuole massimizzare le sue possibilità di ottenere un buon punteggio. Non conosce il valore di $p$, ma sa che $p \in \mathcal{P}$ dove $\mathcal{P}$ è un sottoinsieme di $[0,1]$. Una $\textbf{strategy}$ per Clara è un modo di scegliere quale previsione fare prima di girare $m$ in funzione dei risultati di girare $1, 2, \dots, m-1$. La domanda $\textbf{1.}$ fornisce tre esempi di strategie. $G_{\mathcal{S},p}$ sia il guadagno (a casuale) ottenuto per la strategia $\mathcal{S}$, con $p$ la probabilità che la moneta crolla. Uno definisce il $\textbf{minimal expected gain}$ per la strategia $\mathcal{S}$ come $\mathcal{G}_{\mathcal{S}} = \min_{p \in \mathcal{P}} \mathbb{E}(G_{\mathcal{S},p})$. In altre parole, $\mathcal{G}_{\mathcal{S}}$ è l'aspettativa del guadagno portato dalla strategia $\mathcal{S}$ per il peggiore dei valori di $p \in \mathcal{P}$, cioè quello in cui questo guadagno previsto è il più basso.
> 
> Se Clara non dispone di informazioni a priori sul valore di $p$, cioè $\mathcal{P} = [0,1]$, quale è il guadagno minimo atteso per le strategie a), b), c) descritte nella domanda $\textbf{1.}$?
> 
> $\textbf{3.}$ Trovare una strategia $\mathcal{S}$ che dà il massimo guadagno minimo atteso $\mathcal{G}_{\mathcal{S}}$ tra tutte le strategie possibili (e calcolarla) se: a) $\mathcal{P} = [0, \frac{1}{2}]$; b) $\mathcal{P} = [0, 1]$; c) $\mathcal{P} = [0, \frac{1}{4}] \cup [\frac{3}{4}, 1]$.
> 
> Da ora in poi, Felix possiede due monete, di aspetto indistinguibile, che cadono sulle teste con probabilità $p_1$ e $p_2$. Prima di ogni partita, sceglie la moneta $1$ con probabilità $q$ (di conseguenza la moneta $2$ con probabilità $1-q$) e poi lancia la moneta scelta $n+1$ volte, come prima. Si suppone che Clara conosca le probabilità $p_1$, $p_2$ e $q$ (per cui le scelte di previsione che fa possono dipendere da $p_1$, $p_2$ e $q$).
> 
> Qual è l'aspettativa del guadagno di Clara per le strategie a), b) e c) descritte nella questione? Tra tutte le strategie possibili, trovate una per la quale l'aspettativa di guadagno è la più grande possibile, e calcolatela.
> 
> Clara non cerca più di indovinare il risultato dei lanci, ma piuttosto quale moneta è stata scelta. Felix lancia la moneta per la prima volta, quindi dopo ogni lancio Clara può scegliere di dichiarare quale moneta pensa sia stata scelta o di interrompere il gioco; guadagna $1$ punti per corretta scommessa ma perde un punto per ulteriore lancio richiesto.
> 
> Quale strategia massimizza l'aspettativa del guadagno ottenuto, e quale è quindi questo guadagno in media? Cosa succede quando $n \to \infty$ (cioè quando non si fissa più un limite sul numero di volte richieste)?
> 
> Ora Felix ha ancora due monete ma cambia le monete a metà strada. Prima della partita, sceglie uniformemente a caso un numero $K$ tra $1$ e $n$ (inclusivo). Flippe moneta $1$ per flips $0, \dots, K-1$ e moneta $2$ per flips $K, \dots, n$. Clara conosce ancora le probabilità.
> 
> Clara deve indovinare quale$K$è stato scelto da Felix. a) Clara annuncia la sua previsione dopo i passaggi $n+1$. Quale strategia le permette di massimizzare la probabilità di avere ragione, e qual è questa probabilità? b) Clara può indovinare $K$ prima della fine della partita. Se ha ragione guadagna $n - (m - K)$ punti in cui $m$ è il numero del flip dopo il quale è stato fatto l'annuncio. In altre parole, se fa l'annuncio dopo il flip $m$, o $m < K$ e non guadagna punti, o $m \ge K$ e guadagna $n$ punti ma perde un punto per ogni flip di ritardo nel suo annuncio. Quali strategie le consentono di massimizzare l'aspettativa del suo guadagno, e qual è quindi questo guadagno in media?
> 
> $\textbf{7.}$ Proporre e studiare altre vie di ricerca.

![[src_tfjm_2024__Q06.png]]

[[src_tfjm_2024__Q06]]
