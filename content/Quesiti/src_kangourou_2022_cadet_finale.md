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


<span class="qlang-split" data-lang="en"></span>


*Measure of the highlighted angle with three adjacent squares*

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

> In the figure, three squares appear to be next to each other. How many degrees does the highlighted angle measure? (see figure)

**Answer:** 90
[[src_kangourou_2022_cadet_finale__QC1]]



<span class="atom-split" id="qc2" data-atom="qc2" data-title="Quesito C2" data-tags="topic_aritmetica,topic_combinatoria,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti ciclisti almeno hanno mentito se somma e 36*

> 10 ciclisti terminano una gara con tempi di arrivo tutti diversi fra loro. Dopo qualche tempo, un giornalista chiede a ciascuno di loro di comunicargli il proprio ordine di arrivo in quella gara, ovviamente con un numero compreso fra 1 e 10. Il giornalista somma le risposte fornitegli ed ottiene 36. Ne deduce che certamente alcuni hanno mentito: quanti, almeno?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 3
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbo9K2jytgSW3Apd8Ui4HwgiuetWkwYM/view)


<span class="qlang-split" data-lang="en"></span>


How many cyclists have at least lied if sum and 36

> Ten cyclists finish a race with different arrival times. After a while, a reporter asks each of them to tell them their order of arrival in that race, of course with a number between 1 and 10. The reporter sums up the answers you give him and gets 36. He concludes that some certainly lied - how many, at least?

**Answer:** 3
[[src_kangourou_2022_cadet_finale__QC2]]



<span class="atom-split" id="qc3" data-atom="qc3" data-title="Quesito C3" data-tags="topic_geometria_solida,topic_combinatoria,method_conteggio,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti triangoli equilateri congiungendo vertici di un cubo*

> Dei triangoli ottenuti congiungendo tre vertici di uno stesso cubo, quanti sono equilateri?

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 8
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbo9K2jytgSW3Apd8Ui4HwgiuetWkwYM/view)


<span class="qlang-split" data-lang="en"></span>


*Number of equilateral triangles joining vertices of a cube*

> Of the triangles obtained by joining three vertices of the same cube, how many are equilaterals?

**Answer:** 8
[[src_kangourou_2022_cadet_finale__QC3]]



<span class="atom-split" id="qc4" data-atom="qc4" data-title="Quesito C4" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Ogni termine della sequenza 1007,10017,... divisibile per 53*

> Considera la sequenza di interi i cui primi due termini sono, nell'ordine, $1007$ e $10017$ e ogni termine successivo è ottenuto dal precedente inserendo una ulteriore cifra $1$ dopo le tre cifre iniziali $100$ (dunque $1007$, $10017$, $100117$, $1001117$, $\ldots$). Dimostra che ogni intero della sequenza è divisibile per $53$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbo9K2jytgSW3Apd8Ui4HwgiuetWkwYM/view)


<span class="qlang-split" data-lang="en"></span>


Each term of the sequence 1007,10017,... Divisible by 53*

> Consider the sequence of integers whose first two terms are, in order, $1007$ and $10017$ and each subsequent term is obtained from the previous one by inserting an additional digit $1$ after the first three digits $100$ (so $1007$, $10017$, $100117$, $1001117$, $\ldots$). It shows that each whole of the sequence is divisible by $53$.

[[src_kangourou_2022_cadet_finale__QC4]]



<span class="atom-split" id="qc5" data-atom="qc5" data-title="Quesito C5" data-tags="topic_combinatoria,method_grafi,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo partite perche ognuno sia compagno di tutti*

> Per allenarsi, i 12 giocatori di una squadra di pallacanestro ogni giorno si ripartiscono in due squadre, ciascuna di 6 giocatori, che disputano una partita una contro l'altra. Qual è il minimo numero di partite che consente a ciascun giocatore di disputare almeno un incontro nella stessa squadra con ognuno degli altri?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 3
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1wbo9K2jytgSW3Apd8Ui4HwgiuetWkwYM/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum matches so that everyone is a partner of everyone*

> To train, the 12 players of a basketball team each day are divided into two teams, each of six players, who play a game against each other. What is the minimum number of matches that allows each player to play at least one match in the same team with each other?

**Answer:** 3
[[src_kangourou_2022_cadet_finale__QC5]]



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


<span class="qlang-split" data-lang="en"></span>


*How many pairs (m,n) with 1/m+1/n=1/2022*

> For how many ordered pairs of positive integers do you have$\dfrac{1}{m} + \dfrac{1}{n} = \dfrac{1}{2022}$?

**Answer:** 27
[[src_kangourou_2022_cadet_finale__QC6]]
