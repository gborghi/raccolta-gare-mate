---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026 — Quesito 6
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2026__Q06
parent: src_tfjm_2026
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026
family: tfjm
year: '2026'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '6'
summary: >-
  In an m x n grid of stools, people are ill at ease near occupied neighbours;
  study quasi-complete seatings and the max number seated, then variants with
  oriented seats facing distance 1, with water fountains replacing seats, and
  the expected number seated under uniform random arrival E(m,n).
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_probabilita
methods:
  - method_casework
  - method_conteggio
  - method_estremalita
  - method_colorazione
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2026
  - livello/TFJM²
  - topic/combinatoria
  - topic/probabilita
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*In an m x n grid of stools, people are ill at ease near occupied neighbours; study quasi-complete seatings and the max number seated, then variants with oriented seats facing distance 1, with water fountains replacing seats, and the expected number seated under uniform random arrival E(m,n).*

> 6. Discomfort in the waiting room.
> 
> In a large hospital of a distant country, the waiting room is composed of stools forming a grid of size $m \times n$. The hospital seeks to maximise the usable capacity of this waiting room. The problem is that the inhabitants of this country are not at ease: they feel ill at ease if there is an occupied stool next to them, that is, adjacent stools.
> 
> We say a configuration is quasi-complete when no one is ill at ease, that is, no further person can be seated without either being ill at ease himself or making someone else ill at ease.
> 
> 1. In this question, the hospital staff seats people as they wish in order to place a maximum of persons without anyone being ill at ease. How many persons can one seat, as a function of $m$ and $n$?
> 
> For the following questions, each seat has a fixed orientation (North, South, East or West), and each person seated on a seat looks beside it, in the associated direction, at a distance equal to $1$ (the case where the seat is at the side of the wall, in the direction one looks, makes it so that one does not see anyone in one's field of vision). We call a configuration any table associating to each seat an orientation. For a configuration $D$, one defines $C_{\max}(D)$ as the maximal number of persons who can be placed without discomfort, and $C_{\min}(D)$ as the minimal number of persons necessary for the room to be quasi-complete.
> 
> 2. a) What value does $C_{\max}(D)$ take at its maximum (in particular, the hospital chooses $D$ in an optimal manner)? One may begin with $n = 1, 2, 3$.
>    b) Repeat the previous question for $C_{\min}(D)$.
> 
> A wave of heat takes over the room: the hospital decides to replace certain seats with water fountains. If a seat is oriented toward the direction of a fountain, the person seated there looks at the fountain and is not put ill at ease.
> 
> A configuration may now associate to each location either a seat (with its orientation, as before) or a fountain. See Figure 8.
> 
> 3. Let $p \in \mathbb{N}^*$. In this question only, suppose the hospital installs $p$ fountains. Repeat question 2b) in this setting, as a function of $p$. One begins with $p = 1$.
> 
> 4. Let $p \in \mathbb{N}^*$. In this question only, suppose that on the contrary the hospital may replace the $p$ seats of its choice with fountains. Repeat question 2b) in this setting, as a function of $p$.
> 
> 5. We return to the situation at the start of the problem, where the seats are stools. The persons arrive one by one and, when a person arrives, she sits on a stool chosen uniformly at random among the possible stools (i.e., where she will not be ill at ease). We denote $E(m, n)$ the expected number of persons who can be seated.
> 
> Estimate the value of $E(m, n)$ as a function of $m$ and $n$.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]], [[method_colorazione|Colorazione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<span class="qlang-split" data-lang="it"></span>


*In una griglia di sgabelli m x n, le persone si sentono a proprio agio vicino ai vicini occupati; studiare i sedili quasi completi e il numero massimo di posti seduti, quindi varianti con sedili orientati verso la distanza 1, con fontane d'acqua che sostituiscono i sedili, e il numero previsto di posti seduti sotto arrivo casuale uniforme E(m,n).*

> 6. Disagio nella sala d'attesa.
> 
> In un grande ospedale di un paese lontano, la sala d'attesa è composta da feci che formano una griglia di dimensioni $m \times n$. L'ospedale cerca di massimizzare la capacità utilizzabile di questa sala d'attesa. Il problema è che gli abitanti di questo paese non si sentono a proprio agio: si sentono a proprio agio se c'è uno sgabello occupato accanto a loro, cioè sgabello adiacente.
> 
> Diciamo che una configurazione è quasi completa quando nessuno si sente a suo agio, cioè nessun altro può sedersi senza essere malato a suo agio o rendere un altro malato a suo agio.
> 
> 1. In questo caso, il personale ospedaliero siede le persone come desiderano per poter collocare il massimo di persone senza che nessuno si senta a proprio agio. Quante persone possono sedersi in un posto, in funzione di $m$ e $n$?
> 
> Per le seguenti domande, ogni sedile ha un orientamento fisso (Nord, Sud, Est o Ovest), e ogni persona seduta su un sedile guarda accanto a esso, nella direzione associata, a una distanza pari a $1$ (il caso in cui il sedile è sul lato del muro, nella direzione in cui si guarda, fa sì che non si veda nessuno nel proprio campo visivo). Chiamiamo una configurazione qualsiasi tavolo associato a ciascun sedile un orientamento. Per una configurazione $D$, si definisce $C_{\max}(D)$ come il numero massimo di persone che possono essere posizionate senza disagio e $C_{\min}(D)$ come il numero minimo di persone necessario per rendere la stanza quasi completa.
> 
> 2. a) Quale valore < MSK0/> assume al massimo (in particolare, l'ospedale sceglie < MSK1/> in modo ottimale)? Si può iniziare con $n = 1, 2, 3$. b) Ripetere la domanda precedente per $C_{\min}(D)$.
> 
> Un'ondata di calore si impadronisce della stanza: l'ospedale decide di sostituire alcuni posti con fontane d'acqua. Se un sedile è orientato verso una fontana, la persona che si trova lì guarda la fontana e non si sente a proprio agio.
> 
> Una configurazione può ora associare a ciascuna posizione un sedile (con il suo orientamento, come prima) o una fontana. Vedi figura 8.
> 
> 3. Let < MSK0/>. Solo in questa domanda, supponiamo che l'ospedale installa fonti $p$. Ripetere la domanda 2b) in questa impostazione, come funzione di $p$. Uno inizia con $p = 1$.
> 
> 4. Let < MSK0/>. Solo in questa questione, supponiamo che l'ospedale possa sostituire invece i sedili $p$ di sua scelta con fontane. Ripetere la domanda 2b) in questa impostazione, come funzione di $p$.
> 
> 5. Torniamo alla situazione all'inizio del problema, in cui i sedili sono sgabelli. Le persone arrivano una per una e, quando una persona arriva, si siede su uno scavo scelto uniformemente a caso tra i possibili scavi (cioè dove non si sentirà a proprio agio). Indichiamo < MSK0/> il numero previsto di persone che possono sedersi.
> 
> Estimare il valore di $E(m, n)$ come funzione di $m$ e $n$.
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q06.png]]

[[src_tfjm_2026__Q06]]
