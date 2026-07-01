---
title: Japan Junior Mathematical Olympiad 2025 — Yosen (Preliminary) — Quesito 12
tipo: quesito
lang: en
quesito_id: quesito_src_jjmo23yqa_yosen__Q12
parent: src_jjmo23yqa_yosen
competition: Japan Junior Mathematical Olympiad 2025 — Yosen (Preliminary)
family: jjmo
year: '2025'
level: JJMO Yosen
country: Giappone
modalita: individuale
quesito: '12'
summary: >-
  Count favorable tournament outcomes for 1003 players at round table, find
  ratio mod fraction
qa_score: '3'
answer: '\frac{1206}{5^{197}}'
topics:
  - topic_combinatoria
  - topic_probabilita
methods:
  - method_conteggio
  - method_doppio_conteggio
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2025
  - livello/JJMO-Yosen
  - topic/combinatoria
  - topic/probabilita
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Count favorable tournament outcomes for 1003 players at round table, find ratio mod fraction*

> $1003$ shogi players sit around a round table. In the tournament, each player plays against every other player exactly once, except that one designated player plays no matches (i.e., $1002$ players each play $1002$ matches and $1$ player plays $0$ matches). A group of $3$ or more players is called a **good group** if the players can be arranged in a circle such that each player beats the next one clockwise, and no player beats the one two positions away clockwise.
> 
> For each integer $m \ge 3$, let $f(m)$ be the minimum number of wins that is sufficient to guarantee that there exists a good group of exactly size $m$ among the players. Let $N$ be the total number of tournament result assignments (i.e., for each match, choosing a winner) such that $f(m) \le m$ for every $m \ge 3$. Find the value of $\dfrac{N}{1003!} \pmod{\dfrac{1}{5^{197}}}$, where $1003! = 1 \times 2 \times \cdots \times 1003$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_doppio_conteggio|Doppio conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** $\frac{1206}{5^{197}}$
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ryLIQ7p6YVxrUfIGz0GlvSD0hn_g1ejO/view)


<span class="qlang-split" data-lang="it"></span>


*Contare i risultati favorevoli del torneo per 1003 giocatori a tavola rotonda, trovare il rapporto frazione mod*

> I giocatori di shogi si siedono intorno a una tavola rotonda. Nel torneo, ogni giocatore gioca contro ogni altro giocatore esattamente una volta, tranne che un giocatore designato non gioca nessuna partita (cioè, $1002$ giocatori ogni giocare $1002$ partite e $1$ giocatore gioca $0$ partite). Un gruppo di $3$ o più giocatori è chiamato un **buono gruppo** se i giocatori possono essere organizzati in un cerchio in modo tale che ogni giocatore batte il prossimo in senso orario, e nessun giocatore batte il unico due posizioni in senso orario.
> 
> Per ogni numero intero $m \ge 3$, $f(m)$ deve essere il numero minimo di vittorie sufficiente a garantire che tra i giocatori esista un buon gruppo di dimensioni esatte $m$. $N$ sia il numero totale di assegnazioni dei risultati del torneo (cioè, per ogni partita, scegliendo un vincitore) in modo tale che $f(m) \le m$ per ogni $m \ge 3$. Trova il valore di $\dfrac{N}{1003!} \pmod{\dfrac{1}{5^{197}}}$, dove $1003! = 1 \times 2 \times \cdots \times 1003$.

**Risposta:** \frac{1206}{5^{197}}
[[src_jjmo23yqa_yosen__Q12]]
