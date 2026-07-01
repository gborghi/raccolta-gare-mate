---
title: Japan Junior Mathematical Olympiad 2017 — Yosen (Preliminary) — Quesito 12
tipo: quesito
lang: en
quesito_id: quesito_src_jjmo15yq_yosen__Q12
parent: src_jjmo15yq_yosen
competition: Japan Junior Mathematical Olympiad 2017 — Yosen (Preliminary)
family: jjmo
year: '2017'
level: JJMO Yosen
country: Giappone
modalita: individuale
quesito: '12'
summary: Min a in 256-player single-elimination tournament won by player 1
qa_score: '4'
answer: '44'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_estremalita
  - method_casework
  - method_induzione
skills:
  - skill_ragionamento_geometrico
  - skill_stima
  - skill_conteggio_sistematico
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2017
  - livello/JJMO-Yosen
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Min a in 256-player single-elimination tournament won by player 1*

> A total of $2^8 = 256$ players took part in a single-elimination tennis tournament. In this tournament the champion is decided as follows.
> \begin{itemize}
> \item First, all players line up in a single row.
> \item Repeat the following until only one player remains in the row: take the players in the row in order, two at a time from one end, forming pairs, and have the two players in each pair play a match. The winner of each match stays in the row, while the loser leaves the row. Assume no draws occur.
> \item When only one player remains in the row, that player is the champion.
> \end{itemize}
> Each player is assigned a distinct integer from $1$ to $256$, and the champion of this tournament had number $1$. For a certain integer $a$, the following held: in every match played during the tournament, letting $w$ be the number of the winning player and $l$ the number of the losing player, $l - w \le a$ holds. Find the smallest value of $a$ that can be considered as such.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_induzione|Induzione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_stima|Stima]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 44
**Fonte:** [apri PDF](https://drive.google.com/file/d/1s0VpOntHkP21JSEqbDbHxDeV5wu_caJs/view)


<span class="qlang-split" data-lang="it"></span>


*Min a in un torneo di eliminazione singola di 256 giocatori vinto da un giocatore 1*

> Un totale di giocatori < MSK0/> hanno partecipato a un torneo di tennis di singola eliminazione. In questo torneo il campione è deciso come segue. In primo luogo, tutti i giocatori si allineano in una sola riga. \item Ripetere il seguente fino a quando non rimane solo un giocatore nella fila: prendere i giocatori nella fila in ordine, due alla volta da una estremità, formando coppie, e avere i due giocatori di ciascuna coppia giocare una partita. Il vincitore di ogni partita rimane in fila, mentre il perdente lascia la fila. Supponiamo che non si verifichino. Quando rimane solo un giocatore in fila, quel giocatore è il campione. A ogni giocatore viene assegnato un numero intero distinto da $1$ a $256$, e il campione di questo torneo aveva il numero $1$. Per un determinato numero intero $a$, è tenuto il seguente: in ogni partita giocata durante il torneo, lasciando $w$ il numero del giocatore vincente e $l$ il numero del giocatore perdente, $l - w \le a$ è tenuto. Trova il valore più piccolo di $a$ che può essere considerato tale.

**Risposta:** 44
[[src_jjmo15yq_yosen__Q12]]
