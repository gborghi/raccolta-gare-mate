---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024 — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2024__Q03
parent: src_tfjm_2024
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024
family: tfjm
year: '2024'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '3'
summary: >-
  Ping-pong tournament: 2n players on n numbered tables, winners climb a table
  and losers descend; study stable configurations, reachability, and which words
  of wins/losses are inscriptible.
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_invarianti
  - method_conteggio
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_riconoscimento_pattern
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2024
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Ping-pong tournament: 2n players on n numbered tables, winners climb a table and losers descend; study stable configurations, reachability, and which words of wins/losses are inscriptible.*

> Let $n \ge 2$ be an integer. In a ping-pong club, there are $2n$ players numbered from $1$ to $2n$. They split into $n$ pairs and each pair plays at a table. The tables are numbered from $1$ to $n$. One calls $\textbf{configuration}$ the manner of distributing the $2n$ players over the $n$ tables ($2$ players per table).
> 
> At the start, the players play one game from the initial configuration; then for each game the players follow these rules: at each table, the winner climbs a table (passing from table $k$ to table $k-1$) and the loser descends a table (passing from table $k$ to table $k+1$). The exceptions: at table $1$, the winner stays at table $1$ (and the loser descends to table $2$); at table $n$, the loser stays at table $n$ (and the winner climbs to table $n-1$). One says that one game allows to pass from one configuration to another.
> 
> A configuration is said $\textbf{stable}$ if after two consecutive games one finds again the same configuration.
> 
> $\textbf{1.}$ For $1 \le i \le 2n$: at which table can player number $i$ be found in a stable configuration? And which table will she play at?
> 
> $\textbf{2.}$ Count the number of stable configurations as a function of $n$.
> 
> $\textbf{3.}$ Do the players always reach a stable configuration after a certain number of tours? Demonstrate this or, on the contrary, exhibit a configuration that does not allow a stable configuration to be reached.
> 
> $\textbf{4.}$ Let $1 \le i \le 2n$ and $1 \le k \le n$. Suppose player number $i$ begins at table $k$. Supposing the player chooses the results of her games (winning the games she wants and losing the others), which table $j$ can she hope to reach at least once?
> 
> $\textbf{5.}$ Let $1 \le k < l \le n$. As a function of $k$ and $l$, is it possible for a player who begins at table $k$ to stabilize later at table $l$?
> 
> $\textbf{6.}$ The players take note in a notebook where they record their results in the following form: each time the player wins a game she writes $V$, and each time she loses she writes $D$. A series of letters $D$ and $V$ is $\textbf{inscriptible}$ if there exists an initial configuration of $2n$ players for which a player wrote this series of games. For example, the word $VV\dots V$ is always inscriptible because it is always inscribed by player $1$.
>   a) Count the number of inscriptible words of $m$ letters that are not inscriptible.
>   b) As a function of $n$, estimate the largest $\ell$ for which all words of length $\ell$ are inscriptible.
>   c) As a function of $n$ and $\ell$, estimate the number of inscriptible words of length $\ell$.
> 
> $\textbf{7.}$ Among all initial configurations, estimate the proportion of configurations for which player $3$ will never reach table $1$. Generalize while changing the numbers of the player and of the table.
> 
> $\textbf{8.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<span class="qlang-split" data-lang="it"></span>


*Torneo di ping-pong: 2n giocatori su tavoli numerati n, i vincitori si arrampicano su una tavola e i perdenti scendono; studiano le configurazioni stabili, la raggiungibilità e quali parole di vittorie/perdite sono iscrivibili.*

> $n \ge 2$ sia un numero intero. In un club di ping-pong, ci sono $2n$ giocatori numerati da $1$ a $2n$. Si dividono in coppie $n$ e ciascuna coppia gioca a un tavolo. Le tabelle sono numerate da $1$ a $n$. Si chiama $\textbf{configuration}$ il modo di distribuire i giocatori $2n$ sulle tabelle $n$ ($2$ giocatori per tabella).
> 
> All'inizio, i giocatori giocano una partita dalla configurazione iniziale; quindi per ogni partita i giocatori seguono queste regole: a ciascuna tavola, il vincitore sale su una tavola (passando da tavola $k$ a tavola $k-1$) e il perdente scende da una tavola (passando da tavola $k$ a tavola $k+1$). Le eccezioni: al tavolo $1$, il vincitore rimane al tavolo $1$ (e il perdente scende al tavolo $2$); al tavolo $n$, il perdente rimane al tavolo $n$ (e il vincitore sale al tavolo $n-1$). Uno dice che un gioco permette di passare da una configurazione all'altra.
> 
> Una configurazione viene detta $\textbf{stable}$ se dopo due partite consecutive si trova di nuovo la stessa configurazione.
> 
> $\textbf{1.}$ Per $1 \le i \le 2n$: in quale tabella si può trovare il numero del giocatore $i$ in configurazione stabile? E a quale tavolo giocherà?
> 
> $\textbf{2.}$ Contare il numero di configurazioni stabili come funzione di $n$.
> 
> I giocatori raggiungono sempre una configurazione stabile dopo un certo numero di giri? Dimostrare questo o, al contrario, mostrare una configurazione che non consente di raggiungere una configurazione stabile.
> 
> < MSK0/> Let < MSK1/> e < MSK2/>. Supponiamo che il numero del giocatore $i$ inizia alla tabella $k$. Supponendo che il giocatore scelga i risultati delle sue partite (vincere le partite che vuole e perdere le altre), quale tavolo $j$ può sperare di raggiungere almeno una volta?
> 
> < MSK0/> Lasciate < MSK1/>. Come funzione di $k$ e $l$, è possibile che un giocatore che inizia al tavolo $k$ si stabilizzi in seguito al tavolo $l$?
> 
> $\textbf{6.}$ I giocatori prendono nota in un quaderno dove registrano i loro risultati nella seguente forma: ogni volta che il giocatore vince una partita scrive $V$, e ogni volta che perde scrive $D$. Una serie di lettere $D$ e $V$ è $\textbf{inscriptible}$ se esiste una configurazione iniziale di giocatori $2n$ per i quali un giocatore ha scritto questa serie di giochi. Ad esempio, la parola $VV\dots V$ è sempre iscrivibile perché è sempre scritta dal giocatore $1$. a) Contare il numero di parole iscribili di lettere < MSK9/> che non sono iscribili. b) Come funzione di $n$, stimare il più grande $\ell$ per il quale tutte le parole di lunghezza $\ell$ sono iscribili. c) Come funzione di $n$ e $\ell$, stimare il numero di parole iscrivibili di lunghezza $\ell$.
> 
> Tra tutte le configurazioni iniziali, stima la percentuale di configurazioni per le quali il player $3$ non raggiungerà mai la tabella $1$. Generalizza modificando i numeri del giocatore e della tavola.
> 
> < MSK0/> Proporre e studiare altre vie di ricerca.

![[src_tfjm_2024__Q03.png]]

[[src_tfjm_2024__Q03]]
