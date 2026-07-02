---
title: Concours Général des Lycées 2012 — Matematica — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2012__Q03
parent: src_cgen_2012
competition: Concours Général des Lycées 2012 — Matematica
family: concours_generale
year: '2012'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  A postman visits each of n houses in a row exactly once per trip; count trips,
  find min and max trip lengths, and the expected length of a random trip.
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_probabilita
methods:
  - method_conteggio
  - method_casi_conteggio
  - method_estremalita
  - method_doppio_conteggio
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2012
  - livello/Concours-Général
  - topic/combinatoria
  - topic/probabilita
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*A postman visits each of n houses in a row exactly once per trip; count trips, find min and max trip lengths, and the expected length of a random trip.*

> Problem 3: The mailbox rings each time exactly once (and only once).
> 
> A postman must deliver the mail in a single street. This street is composed of a single row of houses regularly spaced and numbered $1, 2, \ldots, n$, where $n$ is an integer greater than or equal to $2$.
> 
> The postman must deliver one letter per house.
> 
> To do this, he starts by leaving on his bicycle at house $1$ and drops off the corresponding letter; then he distributes the other letters to the other houses, and finally returns to house $1$ to pick up his bicycle again.
> 
> He thus carries out a single trip, where the successive numbers of the houses to which he has delivered form a courier route.
> 
> For example, if $n = 5$, a possible trip is $1, 5, 2, 4, 3, 1.$ The total distance traveled, called the length of the trip, then equals $12$ since in this case it equals $|5-1| + |2-5| + |4-2| + |3-4| + |1-3| = 12.$ Another possible trip is $1, 3, 5, 4, 2, 1$, of length $8.$
> 
> 1. How many trips are there?
> 2. (a) Show that every trip has length greater than or equal to $2(n-1)$.
> (b) How many trips of minimal length are there?
> 3. (a) In the case $n = 5$, determine the maximal length of a trip and give an example of a trip of maximal length.
> (b) For an arbitrary $n$, determine the maximal length of a trip.
> 4. One draws a trip at random (all trips being equiprobable). What is the expected value of the length of the trip?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casi_conteggio|Casi e conteggio]], [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1vIXYHNm7Pie0N6tpc5bYOGp1UUa2qApP/view)


<span class="qlang-split" data-lang="it"></span>


*Un postino visita ognuna delle n case in fila esattamente una volta per ogni viaggio; conta i viaggi, trova le lunghezze min e massime del viaggio e la durata attesa di un viaggio casuale.*

> Problema 3: la casella postale suona ogni volta esattamente una volta (e solo una volta).
> 
> Un postino deve consegnare la posta in una sola strada. Questa strada è composta da una singola fila di case regolarmente spaziate e numerate $1, 2, \ldots, n$, dove $n$ è un numero intero maggiore o uguale a $2$.
> 
> Il postino deve consegnare una lettera per casa.
> 
> Per fare questo, inizia a partire in bicicletta a casa $1$ e lascia cadere la lettera corrispondente; poi distribuisce le altre lettere alle altre case, e infine torna a casa $1$ per riprendere la sua bicicletta.
> 
> Egli effettua così un solo viaggio, dove i numeri successivi delle case a cui ha consegnato formano un percorso di corriere.
> 
> Ad esempio, se $n = 5$, un viaggio possibile è $1, 5, 2, 4, 3, 1.$ La distanza totale percorsa, chiamata lunghezza del viaggio, è pari a $12$ poiché in questo caso è uguale a $|5-1| + |2-5| + |4-2| + |3-4| + |1-3| = 12.$ Un altro viaggio possibile è $1, 3, 5, 4, 2, 1$, di lunghezza $8.$
> 
> 1. Quanti viaggi ci sono? 2. a) Indicare che ogni viaggio ha una lunghezza superiore o pari a $2(n-1)$. (b) Quanti viaggi di minima lunghezza ci sono? 3. a) Nel caso $n = 5$, determinare la lunghezza massima di un viaggio e fornire un esempio di un viaggio di lunghezza massima. b) Per un $n$ arbitrario, determinare la lunghezza massima di un viaggio. 4. Uno disegna un viaggio a caso (tutti i viaggi sono equiprobabili). Qual è il valore atteso della lunghezza del viaggio?

[[src_cgen_2012__Q03]]
