---
title: Kangourou 2009 - Benjamin finale nazionale (Mirabilandia)
tipo: gara
competition: Kangourou 2009 - Benjamin finale nazionale (Mirabilandia)
family: kangourou
year: '2009'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2009_benjamin_maggio"></div>



<span class="atom-split" id="qb1" data-atom="qb1" data-title="Quesito B1" data-tags="topic_combinatoria,method_conteggio,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti modi di sistemare 4 monete su scacchiera 4x4*

![[src_kangourou_2009_benjamin_maggio__probB1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!40] (1,0) rectangle (2,1);
  \fill[gray!40] (3,0) rectangle (4,1);
  \fill[gray!40] (0,1) rectangle (1,2);
  \fill[gray!40] (2,1) rectangle (3,2);
  \fill[gray!40] (1,2) rectangle (2,3);
  \fill[gray!40] (3,2) rectangle (4,3);
  \fill[gray!40] (0,3) rectangle (1,4);
  \fill[gray!40] (2,3) rectangle (3,4);
  \draw[thick] (0,0) grid (4,4);
  \draw[very thick] (0,0) rectangle (4,4);
\end{tikzpicture}
\end{document}
```

> Devi sistemare 4 monete identiche in altrettante caselle di una scacchiera $4 \times 4$ rispettando le regole seguenti:
> - in nessuna riga e in nessuna colonna può esserci più di una moneta;
> - se in una casella c'è una moneta, ogni casella che abbia in comune con essa qualche vertice non può contenere monete.
> 
> In quanti modi diversi puoi realizzare il progetto?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19pm5aviRkJPcSDCnWu9e_2Wl9DVc4vb2/view)


<div class="qlang-split" data-lang="en"></div>


*How many ways are there to arrange 4 coins on a 4x4 chessboard?*

![[src_kangourou_2009_benjamin_maggio__probB1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!40] (1,0) rectangle (2,1);
  \fill[gray!40] (3,0) rectangle (4,1);
  \fill[gray!40] (0,1) rectangle (1,2);
  \fill[gray!40] (2,1) rectangle (3,2);
  \fill[gray!40] (1,2) rectangle (2,3);
  \fill[gray!40] (3,2) rectangle (4,3);
  \fill[gray!40] (0,3) rectangle (1,4);
  \fill[gray!40] (2,3) rectangle (3,4);
  \draw[thick] (0,0) grid (4,4);
  \draw[very thick] (0,0) rectangle (4,4);
\end{tikzpicture}
\end{document}
```

> You must place 4 identical coins in 4 corresponding squares on a $4 \times 4$ chessboard, observing the following rules:
> - No row and no column may contain more than one coin;
> - If a coin is in a square, then no square that shares any vertex with that square may contain a coin.
>
> In how many different ways can you realize the arrangement?


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qb2" data-atom="qb2" data-title="Quesito B2" data-tags="topic_aritmetica,method_casework,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Pesi delle etichette ancora da preparare*

> Una ditta produce cioccolatini tutti dello stesso peso e li vuole vendere in confezioni da 36, 28, 24 o 16 pezzi. Su ogni confezione va apposta un'etichetta che riporta il peso netto del contenuto; sono state già preparate etichette indicanti 630 grammi e altre indicanti 360 grammi. Quali pesi dovranno indicare le etichette ancora da preparare?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 810,540
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19pm5aviRkJPcSDCnWu9e_2Wl9DVc4vb2/view)


<div class="qlang-split" data-lang="en"></div>


*Weight of labels still to be prepared*

> A company produces chocolates, all of the same weight, and wants to sell them in packs of 36, 28, 24, or 16 pieces. Each pack must be labeled with the net weight of the contents; labels indicating 630 grams and others indicating 360 grams have already been prepared. What weights must the labels that still need to be prepared indicate?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="qb3" data-atom="qb3" data-title="Quesito B3" data-tags="topic_geometria_piana,topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Da quale pizza scegliere la fetta piu grande*

> Ad una festicciola vi sono quattro pizze di forma circolare: una ha raggio $8$ cm ed è tagliata in 3 fette uguali fra loro, una seconda ha raggio $10$ cm ed è tagliata in 4 fette uguali fra loro, una terza ha raggio $12$ cm ed è tagliata in 6 fette uguali fra loro, la quarta ha raggio $14$ cm ed è tagliata in 8 fette uguali fra loro. Ti spetta una sola fetta e vuoi mangiare quanta più pizza possibile: da quale delle pizze ti conviene scegliere la fetta?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** raggio 10
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19pm5aviRkJPcSDCnWu9e_2Wl9DVc4vb2/view)


<div class="qlang-split" data-lang="en"></div>


*From which pizza should you choose the largest slice?*

> At a little party, there are four circular pizzas: one has a radius of $8$ cm and is cut into 3 equal slices; a second has a radius of $10$ cm and is cut into 4 equal slices; a third has a radius of $12$ cm and is cut into 6 equal slices; the fourth has a radius of $14$ cm and is cut into 8 equal slices. You are entitled to only one slice, and you want to eat as much pizza as possible: from which of the pizzas would it be best for you to choose the slice?

**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_aritmetica|Arithmetic / Number theory]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Geometria|Geometry]]



<span class="atom-split" id="qb4" data-atom="qb4" data-title="Quesito B4" data-tags="topic_algebra,method_backward,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*A quanti euro ammonta la somma iniziale*

> Stamattina sono andato a trovare mio nonno che mi ha regalato una somma pari a 4 volte quella con cui ero uscito di casa. Poi ho incontrato Andrea che mi ha restituito i 3 euro che gli avevo prestato. Sentendomi ricco, ho condiviso in parti uguali con i miei 3 fratelli il contenuto del mio portafoglio. Infine mi sono comperato un libro pagandolo 9 euro. Dopo aver pagato, ho guardato nel portafoglio e ho trovato la stessa somma che avevo quando sono uscito di casa stamattina: a quanti euro ammonta?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 33
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19pm5aviRkJPcSDCnWu9e_2Wl9DVc4vb2/view)


<div class="qlang-split" data-lang="en"></div>


*What is the initial amount in euros?*

> This morning I went to visit my grandfather, who gave me an amount equal to four times the amount I had when I left home. Then I met Andrea, who gave me back the 3 euros I had lent him. Feeling rich, I split the contents of my wallet equally among my three siblings. Finally, I bought myself a book for 9 euros. After paying, I looked in my wallet and found the same amount I had when I left home this morning: how many euros is that?


**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Working backwards]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="qb5" data-atom="qb5" data-title="Quesito B5" data-tags="topic_combinatoria,topic_logica,method_casework,skill_modellizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Tempo minimo per traghettare quattro barche*

> Quattro barche $A$, $B$, $C$, $D$ possono attraversare un fiume da una sponda all'altra nei due sensi; il tempo impiegato da ogni barca non dipende dal senso. La barca $A$ impiega 2 minuti per la traversata, la barca $B$ ne impiega 4, la barca $C$ ne impiega 8 e la barca $D$ ne impiega 16. Le quattro barche si trovano ormeggiate insieme sulla sponda sinistra, devono essere tutte traghettate sulla sponda destra ed è disponibile un solo timoniere. Una barca può trascinarne al più un'altra, ma in questo caso il convoglio delle due barche impiega il tempo di traversata della barca più lenta fra le due. Una volta effettuata una traversata, il timoniere può ritornare al punto di partenza solo utilizzando una delle quattro barche. Trovate il tempo minore (in minuti) che consente di effettuare l'operazione, trascurando il tempo necessario ad agganciare e sganciare le barche e a trasbordare da una all'altra.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 30
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19pm5aviRkJPcSDCnWu9e_2Wl9DVc4vb2/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum time to ferry four boats*

> Four boats $A$, $B$, $C$, $D$ can cross a river from one bank to the other in both directions; the time taken by each boat does not depend on the direction. Boat $A$ takes 2 minutes to cross, boat $B$ takes 4 minutes, boat $C$ takes 8 minutes, and boat $D$ takes 16 minutes. The four boats are moored together on the left bank; all of them must be ferried to the right bank, and only one helmsman is available. A boat can tow at most one other boat, but in that case the two-boat convoy takes as long to cross as the slower of the two boats. Once a crossing has been completed, the helmsman can return to the starting point only by using one of the four boats. Find the minimum time (in minutes) that allows the operation to be carried out, ignoring the time needed to attach and detach the boats and to transfer from one boat to another.


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qb6" data-atom="qb6" data-title="Quesito B6" data-tags="topic_combinatoria,topic_logica,method_conteggio,skill_casework_accurato,skill_manipolazione_algebrica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Chi ha vinto piu mani alla morra cinese*

> In ogni mano del gioco della morra cinese ciascuno di due giocatori pronuncia contemporaneamente all'altro una delle tre parole *carta*, *forbici*, *sasso*: carta batte sasso, forbici batte carta e sasso batte forbici. Marco e Flora hanno giocato 10 mani nessuna delle quali è finita in pareggio (cioè le parole pronunciate in ogni singola mano sono sempre state diverse). Marco ha utilizzato 3 volte sasso, 6 volte forbici e 1 volta carta; Flora invece ha utilizzato 2 volte sasso, 4 volte forbici e 4 volte carta. Non sappiamo in quale ordine le parole sono state pronunciate. Chi ha vinto più mani e quante mani ha vinto?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** Marco 7
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19pm5aviRkJPcSDCnWu9e_2Wl9DVc4vb2/view)


<div class="qlang-split" data-lang="en"></div>


*Who has won more hands at morra cinese?*

> In each round of Chinese morra, each of the two players simultaneously says to the other one of the three words: *paper*, *scissors*, *rock*: paper beats rock, scissors beats paper, and rock beats scissors. Marco and Flora played 10 rounds, none of which ended in a draw (that is, the words said in each individual round were always different). Marco used rock 3 times, scissors 6 times, and paper 1 time; Flora, on the other hand, used rock 2 times, scissors 4 times, and paper 4 times. We do not know in what order the words were said. Who won more rounds, and how many rounds did they win?


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
