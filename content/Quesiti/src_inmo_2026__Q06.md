---
title: Indian National Mathematical Olympiad 2026 — Quesito 6
tipo: quesito
quesito_id: quesito_src_inmo_2026__Q06
parent: src_inmo_2026
competition: Indian National Mathematical Olympiad 2026
family: inmo
year: '2026'
level: INMO
country: India
modalita: individuale
quesito: '6'
summary: >-
  Two decks of 40 cards play repeated deterministic duels with
  win/draw/no-interaction rules; prove the maximum time a terminating game can
  take is 356 hours.
qa_score: '3'
topics:
  - topic_combinatoria
methods:
  - method_invarianti
  - method_estremalita
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/india
  - comp/inmo
  - anno/2026
  - livello/INMO
  - topic/combinatoria
  - gara/individuale
---

*Two decks of 40 cards play repeated deterministic duels with win/draw/no-interaction rules; prove the maximum time a terminating game can take is 356 hours.*

> Two decks $\mathcal{A}$ and $\mathcal{B}$ of 40 cards each are placed on a table at noon. Every minute thereafter, we pick the top cards $a \in \mathcal{A}$ and $b \in \mathcal{B}$, each a card $b$, the outcome remains the same and is independent of all other duels. A duel has three possible outcomes:
> \begin{itemize}
> \item If a card wins, it is placed back at the top of its deck and the losing card is placed at the bottom of the other deck.
> \item If $a$ and $b$ are evenly matched, they are both removed from their respective decks.
> \item If $a$ and $b$ do not interact with each other, then both are placed at the bottom of their respective decks.
> \end{itemize}
> The process ends when both decks are empty. A process is called a game if it ends. Prove that the maximum time a game can take equals 356 hours.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF
