---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 8
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2021__Q08
parent: src_tfjm_2021
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: >-
  Rigged reality TV: participants have preference rankings determining
  sequential eliminations; an objective (X,Y) means Y wins when X is eliminated
  first; determine when a list of objectives is realizable, with cycle
  structures
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_grafi
  - method_casework
  - method_induzione
  - method_ricorsione
skills:
  - skill_astrazione
  - skill_casework_accurato
  - skill_modellizzazione
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2021
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Rigged reality TV: participants have preference rankings determining sequential eliminations; an objective (X,Y) means Y wins when X is eliminated first; determine when a list of objectives is realizable, with cycle structures*

> Rigged TV.
> 
> Denis is the technical director of a rigged reality TV show.
> 
> The show unfolds as follows: $n \ge 3$ participants compete in a sports event, and the loser is eliminated. The first eliminated player chooses a player who is also eliminated, who in turn chooses a player to eliminate, and so on until only one remains. That player is then declared the winner.
> 
> What the spectators do not know is that Denis prepares before each show a table of preferences: he distributes before the show to each participant a ranking of the other participants. When a participant is eliminated, he always decides to eliminate the participant, among those remaining, who is ranked lowest in his table.
> 
> For example, with the table of preferences illustrated in Figure 13, if Loulou is eliminated in the sports event, then Fifi is eliminated next, and Riri wins.
> 
> The management cannot predict who will lose the sports event, and who will consequently be the first eliminated.
> 
> The artistic director therefore sends Denis a list of objectives. An objective is a pair $(X,Y)$ of participants. We say an objective is satisfied if participant $Y$ wins the show when participant $X$ is the first eliminated. An objective $(X,Y)$ is said to be realizable if there exists a table of preferences such that $(X,Y)$ is a satisfied objective.
> 
> Denis must find a table of preferences such that all the objectives of the list are satisfied. If such a table of preferences exists, then we say the list of objectives is realizable.
> 
> For example, the table of preferences presented in Figure 13 satisfies all the objectives of the list of objectives presented in Figure 14.
> 
> **(1)** For a show comprising only $n=3$ candidates, what are the realizable lists of objectives?
> 
> For a given list of objectives, we say that a set of $k \ge 2$ participants forms a $k$-cycle if the participants can be numbered $P_1, P_2, \cdots, P_k$ so that the objective of $P_1$ is $P_2$, that of $P_2$ is $P_3$, \ldots, and that of $P_k$ is $P_1$.
> 
> **(2)** Suppose the $n$ participants form an $n$-cycle for Denis's list of objectives. Is the list of objectives realizable?
> 
> **(3) \& (4)** In this question, Denis has a list of objectives for $n$ participants and he has the right to add up to $N$ other participants and to choose their objectives. Is it always possible for Denis to find a table of preferences for the $n+N$ participants that realizes the list of objectives, if Denis can choose $N$? And if he limits himself to $N \le n$? To $N \le 1$? To $N=0$?
> 
> **(5)** Suppose that, among the $n=a+b$ participants, $a$ form an $a$-cycle and $b$ form a $b$-cycle for Denis's list of objectives. Is the list of objectives realizable? One may begin by treating the cases $a=2$ and $a=b$.
> 
> **(6)** Under what condition is an arbitrary list of objectives realizable? One may begin by treating $a=2$ and $a=b$.
> 
> **(7)** After years of presenting the show, Denis has retired, so that the table of preferences always stays the same. The show has continued with the same participants for several years, so that each candidate has lost the sports event at least once. Alice, who knows the arcana of the show and has watched all the replays, tries to deduce the table of preferences. In terms of $n$, are there tables of preferences that she can completely determine? If so, for which is it possible?
> 
> **(8)** Propose and study other research directions.

![[src_tfjm_2021__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_casework|Casework]], [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Rigged reality TV: i partecipanti hanno classifiche di preferenza che determinano le eliminazioni sequenziali; un obiettivo (X,Y) significa che Y vince quando X viene eliminato per primo; determinare quando è realizzabile una lista di obiettivi, con strutture di ciclo*

> - Televisione truccata.
> 
> Denis e' il direttore tecnico di un reality show.
> 
> Lo spettacolo si svolge come segue: i partecipanti $n \ge 3$ competono in un evento sportivo, e il perdente viene eliminato. Il primo giocatore eliminato sceglie un giocatore che è anche eliminato, che a sua volta sceglie un giocatore da eliminare, e così via finché non rimane solo uno. Quel giocatore viene poi dichiarato vincitore.
> 
> Ciò che gli spettatori non sanno è che Denis prepara prima di ogni spettacolo una tabella di preferenze: distribuisce prima dello spettacolo a ogni partecipante un ranking degli altri partecipanti. Quando un partecipante viene eliminato, decide sempre di eliminare il partecipante, tra quelli rimasti, che è classificato più basso nella sua tabella.
> 
> Ad esempio, con la tabella delle preferenze illustrata nella Figura 13, se Loulou viene eliminato nell'evento sportivo, allora Fifi viene eliminato dopo, e Riri vince.
> 
> La direzione non può prevedere chi perderà l'evento sportivo e chi sarà quindi il primo eliminato.
> 
> Il direttore artistico invia quindi a Denis un elenco di obiettivi. Un obiettivo è una coppia $(X,Y)$ di partecipanti. Diciamo che un obiettivo è soddisfatto se il partecipante $Y$ vince lo spettacolo quando il partecipante $X$ è il primo eliminato. Si dice che un obiettivo $(X,Y)$ sia realizzabile se esiste una tabella di preferenze tale che $(X,Y)$ sia un obiettivo soddisfatto.
> 
> Denis deve trovare una tabella di preferenze in modo tale da soddisfare tutti gli obiettivi dell'elenco. Se esiste una tabella di preferenze del genere, si dice che l'elenco degli obiettivi sia realizzabile.
> 
> Ad esempio, la tabella delle preferenze presentata nella figura 13 soddisfa tutti gli obiettivi dell'elenco degli obiettivi presentati nella figura 14.
> 
> **(1) ** Per uno spettacolo composto solo da $n=3$ candidati, quali sono gli obiettivi realizzabili?
> 
> Per un dato elenco di obiettivi, diciamo che un insieme di partecipanti $k \ge 2$ forma un ciclo $k$ se i partecipanti possono essere numerati $P_1, P_2, \cdots, P_k$ in modo che l'obiettivo di $P_1$ è $P_2$, quello di $P_2$ è $P_3$, \ldots, e quello di $P_k$ è $P_1$.
> 
> **(2) ** Supponiamo che i partecipanti $n$ formino un ciclo $n$ per l'elenco di obiettivi di Denis. L'elenco degli obiettivi è realizzabile?
> 
> In questa domanda, Denis dispone di un elenco di obiettivi per i partecipanti e ha il diritto di sommare gli altri partecipanti e di scegliere i loro obiettivi. È sempre possibile per Denis trovare una tabella di preferenze per i partecipanti $n+N$ che realizzi l'elenco degli obiettivi, se Denis può scegliere $N$? E se si limita a $N \le n$? To $N \le 1$? To $N=0$?
> 
> **(5) ** Supponiamo che, tra i partecipanti $n=a+b$, $a$ costituisca un ciclo $a$ e $b$ costituisca un ciclo $b$ per l'elenco di obiettivi di Denis. L'elenco degli obiettivi è realizzabile? Si può iniziare con il trattamento dei casi < MSK5/> e < MSK6/>.
> 
> In quali condizioni è possibile realizzare un elenco arbitrario di obiettivi? Si può iniziare con il trattamento di < MSK0/> e < MSK1/>.
> 
> Dopo anni di presentazione dello show, Denis si è ritirato, in modo che la tabella delle preferenze rimanga sempre la stessa. Lo spettacolo è continuato con gli stessi partecipanti per diversi anni, in modo che ogni candidato ha perso l'evento sportivo almeno una volta. Alice, che conosce gli arcani dello show e ha visto tutte le repliche, cerca di dedurre la tabella delle preferenze. In termini di $n$, ci sono tabelle di preferenze che può determinare completamente? Se sì, per quale cosa è possibile?
> 
> **(8) ** Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2021__Q08.png]]

[[src_tfjm_2021__Q08]]
