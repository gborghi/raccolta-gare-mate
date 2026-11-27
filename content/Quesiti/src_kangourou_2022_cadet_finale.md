---
title: Kangourou 2022 Cadet finale individuale
tipo: gara
competition: Kangourou 2022 Cadet finale individuale
family: kangourou
year: '2022'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2022_cadet_finale"></div>



<span class="atom-split" id="qc1" data-atom="qc1" data-title="Quesito C1" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Misura dell'angolo evidenziato con tre quadrati accostati*

![[src_kangourou_2022_cadet_finale__probC1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Three squares: top-left (0,1)-(1,2), bottom-left (0,0)-(1,1), bottom-right (1,0)-(2,1)
  \draw[thick] (0,1) rectangle (1,2);
  \draw[thick] (0,0) rectangle (1,1);
  \draw[thick] (1,0) rectangle (2,1);
  % Diagonal from top-left of top square to bottom-right of bottom-right square
  \draw[blue] (0,2) -- (2,0);
  % Diagonal from top-right of top square to bottom-left of bottom-left square
  \draw[blue] (1,2) -- (0,0);
  % Arc marking the highlighted angle at intersection
  \draw[blue] (0.667,1.333) ++(200:0.15) arc(200:315:0.15);
\end{tikzpicture}
\end{document}
```

> In figura appaiono accostati tre quadrati. Quanti gradi misura l'angolo evidenziato? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 90
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbo9K2jytgSW3Apd8Ui4HwgiuetWkwYM/view)


<div class="qlang-split" data-lang="en"></div>


*How many degrees does the highlighted angle measure?*

![[src_kangourou_2022_cadet_finale__probC1.png]]

> In the picture three squares appear placed side by side. How many degrees does the highlighted angle measure? (see the picture)

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]
**Answer:** 90



<span class="atom-split" id="qc2" data-atom="qc2" data-title="Quesito C2" data-tags="topic_aritmetica,topic_combinatoria,method_casework,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti ciclisti almeno hanno mentito se somma e 36*

> 10 ciclisti terminano una gara con tempi di arrivo tutti diversi fra loro. Dopo qualche tempo, un giornalista chiede a ciascuno di loro di comunicargli il proprio ordine di arrivo in quella gara, ovviamente con un numero compreso fra 1 e 10. Il giornalista somma le risposte fornitegli ed ottiene 36. Ne deduce che certamente alcuni hanno mentito: quanti, almeno?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 3
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbo9K2jytgSW3Apd8Ui4HwgiuetWkwYM/view)


<div class="qlang-split" data-lang="en"></div>


*At least how many of them lied?*

> 10 cyclists finish a race with finishing times all different from one another. Some time later, a journalist asks each of them to tell him his own finishing place in that race, of course with a number between 1 and 10. The journalist adds up the answers he is given and obtains 36. He deduces that some of them certainly lied: how many, at least?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_casework|Case analysis]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 3



<span class="atom-split" id="qc3" data-atom="qc3" data-title="Quesito C3" data-tags="topic_geometria_solida,topic_combinatoria,method_conteggio,skill_ragionamento_geometrico,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti triangoli equilateri congiungendo vertici di un cubo*

> Dei triangoli ottenuti congiungendo tre vertici di uno stesso cubo, quanti sono equilateri?

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 8
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbo9K2jytgSW3Apd8Ui4HwgiuetWkwYM/view)


<div class="qlang-split" data-lang="en"></div>


*How many of them are equilateral?*

> Of the triangles obtained by joining three vertices of one and the same cube, how many are equilateral?

**Topic:** [[topic_geometria_solida|Solid geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 8



<span class="atom-split" id="qc4" data-atom="qc4" data-title="Quesito C4" data-tags="topic_aritmetica,method_congruenze,method_induzione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Ogni termine della sequenza 1007,10017,... divisibile per 53*

> Considera la sequenza di interi i cui primi due termini sono, nell'ordine, $1007$ e $10017$ e ogni termine successivo è ottenuto dal precedente inserendo una ulteriore cifra $1$ dopo le tre cifre iniziali $100$ (dunque $1007$, $10017$, $100117$, $1001117$, $\ldots$). Dimostra che ogni intero della sequenza è divisibile per $53$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbo9K2jytgSW3Apd8Ui4HwgiuetWkwYM/view)


<div class="qlang-split" data-lang="en"></div>


*Prove that every integer of the sequence is divisible by 53.*

> Consider the sequence of integers whose first two terms are, in order, $1007$ and $10017$, and every later term is obtained from the previous one by inserting one further digit $1$ after the three initial digits $100$ (so $1007$, $10017$, $100117$, $1001117$, $\ldots$). Prove that every integer of the sequence is divisible by $53$.

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_induzione|Induction]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="qc5" data-atom="qc5" data-title="Quesito C5" data-tags="topic_combinatoria,method_grafi,method_doppio_conteggio,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo partite perche ognuno sia compagno di tutti*

> Per allenarsi, i 12 giocatori di una squadra di pallacanestro ogni giorno si ripartiscono in due squadre, ciascuna di 6 giocatori, che disputano una partita una contro l'altra. Qual è il minimo numero di partite che consente a ciascun giocatore di disputare almeno un incontro nella stessa squadra con ognuno degli altri?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 3
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1wbo9K2jytgSW3Apd8Ui4HwgiuetWkwYM/view)


<div class="qlang-split" data-lang="en"></div>


*What is the least number of matches?*

> To train, the 12 players of a basketball team split each day into two teams, each of 6 players, who play a match against each other. What is the least number of matches that lets each player play at least one match on the same team as every other player?

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_grafi|Graph theory]], [[method_doppio_conteggio|Double counting]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 3



<span class="atom-split" id="qc6" data-atom="qc6" data-title="Quesito C6" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante coppie (m,n) con 1/m+1/n=1/2022*

> Per quante coppie ordinate $(m, n)$ di numeri interi positivi si ha $\dfrac{1}{m} + \dfrac{1}{n} = \dfrac{1}{2022}$?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 27
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1wbo9K2jytgSW3Apd8Ui4HwgiuetWkwYM/view)


<div class="qlang-split" data-lang="en"></div>


*For how many ordered pairs does the equation hold?*

> For how many ordered pairs $(m, n)$ of positive integers does one have $\dfrac{1}{m} + \dfrac{1}{n} = \dfrac{1}{2022}$?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Method:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Skill:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** 27
