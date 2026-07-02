---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 2
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2022__Q02
parent: src_tfjm_2022
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '2'
summary: >-
  Swallows on electric wires sing musical themes determined by a reflection-type
  recurrence on their positions; study which themes appear, periodicity,
  sharpest themes, and generalized bird species.
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_invarianti
  - method_ricorsione
  - method_casework
skills:
  - skill_modellizzazione
  - skill_riconoscimento_pattern
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2022
  - livello/TFJM²
  - topic/combinatoria
  - topic/algebra
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Swallows on electric wires sing musical themes determined by a reflection-type recurrence on their positions; study which themes appear, periodicity, sharpest themes, and generalized bird species.*

> Melody of the swallows.
> 
> The musician Elaia gives food to the swallows perched on the electric wires in front of her window.
> 
> There are $n \ge 1$ swallows perched on $2k+1$ horizontal electric wires, numbered from bottom to top from $-k$ to $k$. At the start, each swallow $i \in [\![1, n]\!]$ has note $u_i \in [\![-k, k]\!]$, the number of the wire on which it is perched. Elaia imagines the positions of the swallows on the wires as a musical theme: a set $(u_i)_{1 \le i \le n} = (u_1, \ldots, u_n)$ of positions of the swallows.
> 
> To find again the positions of the swallows, Elaia throws a grain to swallow $i$ perched on a wire so that it perches on another wire. The rule is as follows: if Elaia throws a grain to swallow $i$, this one perches on another wire and resumes singing taking the position $v_i = u_{i-1} + u_{i+1} - u_i$, with by convention $u_0 = u_{n+1} = 0$. The other swallows remain at their position: $v_j = u_j$ for $j \ne i$. Elaia obtains then a new musical theme $(v_i)_{1 \le i \le n}$ from $(u_i)_{1 \le i \le n}$ by throwing a grain to swallow $i$; this one resumes singing at its position $v_i$, and the process restarts if she continues to throw other grains. If a swallow can no longer perch on a wire (its target wire $v_i$ does not exist), the process stops.
> 
> For example, Figure 4 illustrates passing from a grain thrown to swallow 2, in the case $n = 4$ with $k = 2$. Here $(u_1, u_2, u_3, u_4) = (-2, -1, 2, 0)$ and $(v_1, v_2, v_3, v_4) = (-2, 1, 2, 0)$.
> 
> 1. Suppose $k$ infinite, and suppose all the swallows are at the start on the wire numbered 0, except one which is on the wire numbered 1. Which musical themes can Elaia obtain? One always begins with the case $n = 1, 2, 3$.
> 
> 2. Suppose henceforth $k$ finite. For which initial musical themes $(u_i)_{1 \le i \le n}$ and which $i$ is Elaia sure that no swallow will leave definitively, whatever the number of grains she throws? (Without taking into account the order in which she throws the grains.)
> 
> 3. One says that a musical theme $(u_i)_{1 \le i \le n}$ is $sharper$ (plus aigu) than another $(u'_i)_{1 \le i \le n}$ if for each $i \in [\![1, n]\!]$ one has $u_i \ge u'_i$.
>   a) Starting from a starting musical theme, in the situations where Elaia is sure that no swallow will leave definitively, can she always reach a musical theme sharper than all the other themes she could attain by throwing grains?
>   b) What is the sharpest musical theme, as a function of the starting theme?
>   c) If $(u_i)_{1 \le i \le n}$ denotes the initial position of the swallows, how many grains $T((u_i)_{1 \le i \le n})$ must Elaia at least use to obtain the sharpest musical theme?
>   d) In the case where Elaia obtains the sharpest musical theme by throwing $T((u_i)_{1 \le i \le n})$ grains, how many different sequences of throws allow her to attain the sharpest musical theme?
> 
> 4. Aglaé, a musicology friend of Elaia, proposes a new model of birds with an experiment, numbered $m \in [\![1, n]\!]$, that when thrown a grain will change position to $v_m = 2 u_{m-1} + u_{m+1} - u_m$, while the others do not change at all. Repeat the preceding questions in this setting. One may begin by treating the cases $m = 1, 2$, then small values of $n$.
> 
> 5. The swallow at position $m$ is now of a new species with parameters $(a, b) \in \mathbb{N}^2$: when Elaia throws it a grain, it perches at the position $v_m = a u_{m-1} + b u_{m+1} - u_m$. Thus question 4 corresponds to a new species with parameters $(a, b) = (2, 1)$. Repeat questions 1, 2, 3 with this new species of bird, discussing the results as a function of $m$ and the couple $(a, b)$.
> 
> 6. Propose and explore other avenues of research. One may, for example, change the species of several birds.

![[src_tfjm_2022__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


*Le avvolte su fili elettrici cantano temi musicali determinati da una ricorrenza di tipo riflesso nelle loro posizioni; studiare quali temi appaiono, periodicità, temi più acuti e specie di uccelli generalizzate.*

> La melodia delle paludi.
> 
> La musicista Elaia dà da mangiare ai bagnoni appoggiati sui fili elettrici di fronte alla sua finestra.
> 
> Ci sono le porzioni $n \ge 1$ incastonate sui fili elettrici orizzontali $2k+1$, numerate dal basso in alto da $-k$ a $k$. All'inizio, ogni deglutione $i \in [\![1, n]\!]$ ha la nota $u_i \in [\![-k, k]\!]$, il numero del filo su cui è appeso. Elaia immagina le posizioni delle paludi sui fili come un tema musicale: un insieme $(u_i)_{1 \le i \le n} = (u_1, \ldots, u_n)$ di posizioni delle paludi.
> 
> Per ritrovare le posizioni delle bagni, Elaia lancia un grano per inghiottire $i$ appoggiato su un filo in modo che si appoggi su un altro filo. La regola è la seguente: se Elaia lancia un grano per inghiottire $i$, questo si appoggia su un altro filo e riprende a cantare prendendo la posizione $v_i = u_{i-1} + u_{i+1} - u_i$, con convenzione $u_0 = u_{n+1} = 0$. Le altre inghiottite rimangono nella loro posizione: $v_j = u_j$ per $j \ne i$. Elaia ottiene quindi un nuovo tema musicale $(v_i)_{1 \le i \le n}$ da $(u_i)_{1 \le i \le n}$ lanciando un grano per ingoiare $i$; questo riprende a cantare nella sua posizione $v_i$, e il processo ricomincia se continua a lanciare altri grani. Se una inghiottita non può più appoggiarsi su un filo (il suo filo bersaglio $v_i$ non esiste), il processo si ferma.
> 
> Per esempio, la figura 4 illustra il passaggio da un grano gettato a inghiottire 2, nel caso $n = 4$ con $k = 2$. Qui $(u_1, u_2, u_3, u_4) = (-2, -1, 2, 0)$ e $(v_1, v_2, v_3, v_4) = (-2, 1, 2, 0)$.
> 
> 1. Supponiamo che $k$ sia infinito, e supponiamo che tutti i baglioni siano all'inizio sul filo numerato 0, tranne uno che è sul filo numerato 1. Quali temi musicali può ottenere Elaia? Si inizia sempre con il caso $n = 1, 2, 3$.
> 
> 2. Supponiamo che da ora in poi $k$ sia finito. Per quali temi musicali iniziali $(u_i)_{1 \le i \le n}$ e per quali $i$ Elaia è sicura che nessun trapianto lascerà definitivamente, qualunque sia il numero di grani che lancia? (Senza tener conto dell'ordine in cui lancia i grani.)
> 
> 3. Si dice che un tema musicale $(u_i)_{1 \le i \le n}$ è $sharper$ (più aigu) rispetto ad un altro $(u'_i)_{1 \le i \le n}$ se per ogni $i \in [\![1, n]\!]$ si ha $u_i \ge u'_i$. a) Partendo da un tema musicale iniziale, in situazioni in cui Elaia è sicura che nessuna deglutia se ne andrà definitivamente, può raggiungere un tema musicale sempre più nitido di tutti gli altri temi che potrebbe raggiungere gettando cereali? b) Qual è il tema musicale più acuto, in funzione del tema iniziale? c) Se $(u_i)_{1 \le i \le n}$ indica la posizione iniziale delle paludi, quanti grani $T((u_i)_{1 \le i \le n})$ deve utilizzare Elaia almeno per ottenere il tema musicale più acuto? d) Nel caso in cui Elaia ottiene il tema musicale più acuto gettando i grani $T((u_i)_{1 \le i \le n})$, quante diverse sequenze di lanci le consentono di raggiungere il tema musicale più acuto?
> 
> 4. Aglaé, amico di Elaia in musicaologia, propone un nuovo modello di uccelli con un esperimento, numerato $m \in [\![1, n]\!]$, che quando viene lanciato un grano cambia posizione a $v_m = 2 u_{m-1} + u_{m+1} - u_m$, mentre gli altri non cambiano affatto. Ripete le domande precedenti in questo contesto. Si può iniziare con il trattamento dei casi $m = 1, 2$, quindi piccoli valori di $n$.
> 
> 5. La deglutiera in posizione $m$ è ora di una nuova specie con parametri $(a, b) \in \mathbb{N}^2$: quando Elaia lancia un grano, si trova in posizione $v_m = a u_{m-1} + b u_{m+1} - u_m$. Pertanto la domanda 4 corrisponde a una nuova specie con parametri $(a, b) = (2, 1)$. Ripetere le domande 1, 2, 3 con questa nuova specie di uccello, discutendo i risultati come funzione di $m$ e della coppia $(a, b)$.
> 
> 6. Proporre e esplorare altre vie di ricerca. Si può, ad esempio, modificare le specie di diversi uccelli.

![[src_tfjm_2022__Q02.png]]

[[src_tfjm_2022__Q02]]
