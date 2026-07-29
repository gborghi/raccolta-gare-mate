---
title: Giochi di Archimede 2014 - Biennio (Testo 1)
tipo: gara
competition: Giochi di Archimede 2014 - Biennio (Testo 1)
family: archimede
year: '2014'
level: biennio
---
<div class="atom-reader" data-gara="Quesiti/src_archimede_2014_biennio"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore in fufignezi pagato con monete di Gnallucci*

> Nel paese di Gnallucci circolano quattro monete: dobloni, zecchini, talleri e fufignezi. Un doblone vale quanto uno zecchino più un tallero e un fufignezo. Due
> dobloni valgono quanto uno zecchino più tre talleri e cinque fufignezi. Un tale entra
> in un negozio con uno zecchino e ne esce con un tallero. In fufignezi, quanto ha
> pagato?
> (A) 1, (B) 2, (C) 3, (D) 4, (E) 5.

**Topic:** [[topic_algebra|Algebra]]
**Area:** [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)
**Anche in triennio:** [apri PDF p.1](https://drive.google.com/file/d/1gFMJu_Q6VeO8h4j_WyQCIq1jk9c8n-ur/view)


<span class="qlang-split" data-lang="en"></span>


*Value in bullion paid with Gnallucci coins*

> In the village of Gnallucci circulate four coins: dobloni, zecchini, taleri and fufignezi. A double is worth as much as a duck plus a log and a ponytail. Two doubles are worth a duck plus three tallies and five sparrows. A guy like that walks into a store with a hammer and walks out with a dresser. How much did he pay? (A) 1, (B) 2, (C) 3, (D) 4, (E) 5.

**Answer:** C
[[src_archimede_2014_biennio__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto di numeri periodici (1,3)·(0,3)*

> Quanto fa (1, ¯3) · (0, ¯3)?
>
> - **(A)** 0, 4
> - **(B)** 0, 4¯3
> - **(C)** 0, ¯4
> - **(D)** 13 33
> - **(E)** nessuno dei precedenti.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)


<span class="qlang-split" data-lang="en"></span>


*Products of periodic numbers (1,3)·(0,3) *

> How much is (1, ̄3) · (0, ̄3)?
>
> - **(A)** 0, 4
> - **(B)** 0, 4¯3
> - **(C)** 0, ¯4
> - **(D)** 13 33
> - **(E)** None of the above.

**Answer:** C
[[src_archimede_2014_biennio__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_logica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Ora di ritorno con fuso orario tra due citta*

> Paperopoli dista da Topolinia 4 ore di viaggio. Paperino parte da Paperopoli alle 4
> del mattino, ora locale, e, per via del fuso orario, arriva a Topolinia all’ora (locale)
> di pranzo. A che ora torna a Paperopoli se riparte due ore dopo?
> (A) Alle 12, (B) alle 14, (C) alle 15, (D) alle 16,
> (E) dipende dall’ora a cui pranzano a Topolinia.

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)


<span class="qlang-split" data-lang="en"></span>


Return time with time zone between two cities

> Paperopolis is four hours' drive from Topolinia. Paperino leaves Paperopoli at 4 a.m., local time, and, due to the time zone, arrives in Topolinia at noon. What time does he get back to Paperopoli if he leaves two hours later? (A) 12 noon; (B) 2 pm; (C) 3 pm; (D) 4 pm; (E) depends on the time of lunch in Topolinia.

**Answer:** B
[[src_archimede_2014_biennio__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Distanza vertici opposti di parallelogramma da triangoli*

![[src_archimede_2014_biennio__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (P1) at (1,1.732);
  \coordinate (P2) at (2,0);
  \coordinate (P3) at (3,1.732);
  \coordinate (P4) at (4,0);
  \coordinate (B) at (5,1.732);
  \draw (A)--(P4)--(B)--(P1)--cycle;
  \draw (P1)--(P2)--(P3)--(P4);
  \draw (P2)--(P3);
  \node[left] at (A) {$A$};
  \node[right] at (B) {$B$};
\end{tikzpicture}
\end{document}
```

> Un parallelogramma è costruito incollando quattro
> triangoli equilateri di lato 10 cm come in figura.
> Quanti cm distano i vertici opposti A e B?
> (A) 25, (B)
> √
> 675, (C)
> √
> 700, (D)
> √
> 825,
> (E) 30.
> B
> A

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)


<span class="qlang-split" data-lang="en"></span>


*Opposite vertical distance of parallelogram from triangles*

![[src_archimede_2014_biennio__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (P1) at (1,1.732);
  \coordinate (P2) at (2,0);
  \coordinate (P3) at (3,1.732);
  \coordinate (P4) at (4,0);
  \coordinate (B) at (5,1.732);
  \draw (A)--(P4)--(B)--(P1)--cycle;
  \draw (P1)--(P2)--(P3)--(P4);
  \draw (P2)--(P3);
  \node[left] at (A) {$A$};
  \node[right] at (B) {$B$};
\end{tikzpicture}
\end{document}
```

> A parallelogram is constructed by gluing four equilateral triangles of side 10 cm as shown in the figure. How many centimetres apart are the opposite vertices A and B? (A) 25, (B) √ 675, (C) √ 700, (D) √ 825, (E) 30. B A

**Answer:** C
[[src_archimede_2014_biennio__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_casework"></span>

<div class="qlang-switch" data-default="it"></div>


*Quale affermazione e vera se a^2bc=1 con interi*

> I numeri a, b e c sono interi relativi.
> Si sa che a2bc = 1.
> Quale delle seguenti
> affermazioni è sicuramente vera?
> (A) a = 1 e b = 1, (B) a = −1 e c = 1, (C) b2ac = 1, (D) a2b2 = 1, (E) a ̸= 1.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)


<span class="qlang-split" data-lang="en"></span>


*Which statement is true if a^2bc=1 with integers*

> The numbers a, b, and c are relative integers. We know that a2bc is equal to 1. Which of the following is certainly true? (A) a = 1 e b = 1, (B) a = −1 e c = 1, (C) b2ac = 1, (D) a2b2 = 1, (E) a ̸= 1.

**Answer:** D
[[src_archimede_2014_biennio__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_algebra"></span>

<div class="qlang-switch" data-default="it"></div>


*Operai per dirigente da vincoli sugli stipendi*

> In una certa azienda ogni dirigente percepisce uno stipendio pari a quattro volte
> quello di ogni operaio. Il costo complessivo che l’azienda sostiene per pagare gli
> stipendi di tutti i dipendenti è uguale a sei volte il costo complessivo degli stipendi
> di tutti i dirigenti. Quanti operai ci sono per ciascun dirigente?
> (A) 5, (B) 6, (C) 20, (D) 24, (E) 30.

**Topic:** [[topic_algebra|Algebra]]
**Area:** [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)
**Anche in triennio:** [apri PDF p.1](https://drive.google.com/file/d/1gFMJu_Q6VeO8h4j_WyQCIq1jk9c8n-ur/view)


<span class="qlang-split" data-lang="en"></span>


You will be working as a manager with salary constraints

> In a certain company each manager receives a salary four times that of each worker. The total cost of paying the salaries of all employees is equal to six times the total cost of the salaries of all managers. How many workers are there for each manager? (A) 5, (B) 6, (C) 20, (D) 24, (E) 30.

**Answer:** C
[[src_archimede_2014_biennio__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_logica,method_backward"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo biglie nel distributore con 5 monete*

> Al luna park c’è un distributore di biglie con due pulsanti e un contenitore: il primo
> pulsante fa entrare 16 biglie nel contenitore, il secondo aumenta il numero di biglie
> nel contenitore del 50%. Inserendo una moneta, si può premere uno qualsiasi dei
> due pulsanti. Se il contenitore inizialmente è vuoto, quante biglie al massimo si
> possono far entrare nel contenitore con 5 monete?
> (A) 70, (B) 80, (C) 88, (D) 96, (E) 108.

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum bags in the dealer with 5 coins*

> At Luna Park, there is a seed distributor with two buttons and a container: the first button puts 16 seed into the container, the second increases the number of seed in the container by 50%. By entering a coin, you can press any of the two buttons. If the container is initially empty, how many bags can you get into the container with 5 coins? (A) 70, (B) 80, (C) 88, (D) 96, (E) 108.

**Answer:** E
[[src_archimede_2014_biennio__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_probabilita,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Probabilita che tre persone dicano la stessa parola*

> Agata, Nina e Leo decidono che al “Via!”
> ciascuno di loro dirà (a caso) BIM,
> oppure BUM, oppure BAM. Qual è la probabilità che dicano tutti e tre la stessa
> cosa?
> (A) Meno di
> 1
> 12, (B) tra
> 1
> 12 e
> 1
> 10, (C) tra
> 1
> 10 e 1
> 8, (D) tra 1
> 8 e 1
> 6, (E) più di 1
> 6.

**Topic:** [[topic_probabilita|Probabilita e statistica]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)


<span class="qlang-split" data-lang="en"></span>


The probability that three people will say the same word

> Agata, Nina and Leo decide that at Via! each of them will say (accidentally) BIM, or BUM, or BAM. What's the probability that all three of them will say the same thing? (A) Less than 12, (B) between 12 and 10, (C) between 10 and 18, (D) between 18 and 16, (E) more than 16.

**Answer:** C
[[src_archimede_2014_biennio__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area esterna entro 1 cm da un pentagono regolare*

> Sia dato un pentagono regolare di lato 1 cm; quanti cm2 vale l’area dell’insieme di
> punti del piano che sono esterni al pentagono e distano al più 1 cm da esso?
> (A) (5 + π), (B) (3/2 + 2π), (C) 7, (D) 8, (E) 3π.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)


<span class="qlang-split" data-lang="en"></span>


*External area within 1 cm of a regular pentagon*

> A regular pentagon of 1 cm side is given; how many cm2 is the area of the set of points in the plane that are outside the pentagon and at most 1 cm away from it? (A) (5 + π), (B) (3/2 + 2π), (C) 7, (D) 8, (E) 3π.

**Answer:** A
[[src_archimede_2014_biennio__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_combinatoria,method_conteggio"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero di incontri in torneo di biliardino a coppie*

> Otto giocatori, di cui quattro sono difensori e quattro sono attaccanti, organizzano
> un torneo di biliardino. Ogni possibile coppia difensore-attaccante gioca una e una
> sola volta contro ogni altra possibile coppia difensore-attaccante. Quanti incontri
> faranno in tutto?
> (A) 24, (B) 36, (C) 48, (D) 72, (E) 144.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)
**Anche in triennio:** [apri PDF p.1](https://drive.google.com/file/d/1gFMJu_Q6VeO8h4j_WyQCIq1jk9c8n-ur/view)


<span class="qlang-split" data-lang="en"></span>


*Number of matches in the pool tournament in pairs*

> Eight players, four of whom are defenders and four are attackers, organize a pool tournament. Each possible attacking-defensive pair plays once and only once against every other possible attacking-defensive pair. How many meetings will they have in all? (A) 24, (B) 36, (C) 48, (D) 72, (E) 144.

**Answer:** D
[[src_archimede_2014_biennio__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_aritmetica,method_fattorizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Divisori primi del numero abcabc con abc primo*

> È dato un numero primo di tre cifre le cui cifre sono, nell’ordine: a, b, c. Quanti
> divisori primi ha il numero di sei cifre la cui scrittura è abcabc?
> [Ricordiamo che 1 non è un numero primo.]
> (A) 1, (B) 2, (C) 3, (D) 4, (E) 5.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)
**Anche in triennio:** [apri PDF p.1](https://drive.google.com/file/d/1gFMJu_Q6VeO8h4j_WyQCIq1jk9c8n-ur/view)


<span class="qlang-split" data-lang="en"></span>


*Prime dividers of abcabc number with abc prime*

> A prime number of three digits is given whose digits are, in the order: a, b, c. How many prime divisors has the six-digit number whose writing is abcabc? [Remember that 1 is not a prime number.] A, 1, B, 2, C, 3, D, 4, E, 5.

**Answer:** D
[[src_archimede_2014_biennio__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area grigia in quadrato diviso in 9 quadratini*

![[src_archimede_2014_biennio__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \fill[gray!50] (1,1) -- (1.6667,1) -- (2,1.5) -- (2,2) -- (1,2) -- cycle;
  \draw (0,0) rectangle (3,3);
  \draw (1,0)--(1,3); \draw (2,0)--(2,3);
  \draw (0,1)--(3,1); \draw (0,2)--(3,2);
  \draw (1,0)--(3,3);
\end{tikzpicture}
\end{document}
```

> Il quadrato in figura è diviso in 9 quadratini congruenti. Sapendo che il lato del quadrato grande misura L, calcolare l’area
> evidenziata in grigio.
> (A)
> 11
> 108L2, (B) 1
> 9L2, (C)
> 5
> 54L2, (D)
> 1
> 12L2, (E) 13
> 81L2.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)
**Anche in triennio:** [apri PDF p.2](https://drive.google.com/file/d/1gFMJu_Q6VeO8h4j_WyQCIq1jk9c8n-ur/view)


<span class="qlang-split" data-lang="en"></span>


*A square grey area divided into 9 squares*

![[src_archimede_2014_biennio__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \fill[gray!50] (1,1) -- (1.6667,1) -- (2,1.5) -- (2,2) -- (1,2) -- cycle;
  \draw (0,0) rectangle (3,3);
  \draw (1,0)--(1,3); \draw (2,0)--(2,3);
  \draw (0,1)--(3,1); \draw (0,2)--(3,2);
  \draw (1,0)--(3,3);
\end{tikzpicture}
\end{document}
```

> The square in the figure is divided into 9 congruent squares. Knowing that the side of the large square measures L, calculate the area highlighted in gray. (A) 11 108L2, (B) 1 9L2, (C) 5 54L2, (D) 1 12L2, (E) 13 81L2.

**Answer:** A
[[src_archimede_2014_biennio__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_aritmetica"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero di cifre di 20^10*

> Quante cifre ha il numero 2010?
> (A) 10, (B) 11, (C) 13, (D) 14, (E) 15.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)


<span class="qlang-split" data-lang="en"></span>


*Number of digits of 20^10*

> How many digits does the number 2010 have? (A) 10, (B) 11, (C) 13, (D) 14, (E) 15.

**Answer:** D
[[src_archimede_2014_biennio__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area tra tre circonferenze tangenti due a due*

![[src_archimede_2014_biennio__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!50] (1,0) arc (0:60:1) arc (240:300:1) arc (120:180:1) -- cycle;
  \draw (0,0) circle (1);
  \draw (2,0) circle (1);
  \draw (1,1.732) circle (1);
\end{tikzpicture}
\end{document}
```

> Sono date tre circonferenze aventi tutte raggio 1 cm e tangenti due a due come in figura.
> Calcolare l’area in cm2
> della parte compresa tra le tre circonferenze, evidenziata in
> grigio in figura.
> (A) (
> √
> 3 −π
> 2 ), (B)
> √
> 3, (C) 3, (D) π
> 2 , (E) π.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)


<span class="qlang-split" data-lang="en"></span>


*Area between three tangent circumferences two to two*

![[src_archimede_2014_biennio__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!50] (1,0) arc (0:60:1) arc (240:300:1) arc (120:180:1) -- cycle;
  \draw (0,0) circle (1);
  \draw (2,0) circle (1);
  \draw (1,1.732) circle (1);
\end{tikzpicture}
\end{document}
```

> Three circles are given, each 1 cm in radius and tangent two to two as shown in the figure. Calculate the area in cm2 of the part between the three circumferences, highlighted in gray in the figure. (A) ( √ 3 −π 2 ), (B) √ 3, (C) 3, (D) π 2 , (E) π.

**Answer:** A
[[src_archimede_2014_biennio__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_combinatoria,method_estremalita"></span>

<div class="qlang-switch" data-default="it"></div>


*Strada massima dell'ascensore visitando tutti i piani*

> Uno studente in gita si sveglia la mattina e, dalla sua stanza di un hotel a sette
> piani (oltre al piano terra), scende in ascensore per recarsi al piano terra e fare
> colazione. Tuttavia, molto assonnato, preme ripetutamente il pulsante sbagliato e
> visita esattamente una volta tutti gli altri piani (escluso il suo), prima di arrivare
> finalmente al piano terra. Sapendo che la sua stanza non si trova al piano terra,
> quanta strada percorre l’ascensore, al massimo?
> (A) 29 piani, (B) 28 piani, (C) 27 piani, (D) 26 piani, (E) 25 piani.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)
**Anche in triennio:** [apri PDF p.2](https://drive.google.com/file/d/1gFMJu_Q6VeO8h4j_WyQCIq1jk9c8n-ur/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum elevator route by visiting all floors*

> A traveling student wakes up in the morning and, from his seven-story hotel room (beyond the ground floor), takes the elevator to the ground floor and has breakfast. However, very sleepy, he repeatedly presses the wrong button and visits all the other floors (excluding his own) exactly once, before finally reaching the ground floor. Knowing your room isn't on the ground floor, how far down the elevator is it? (A) 29 floors, (B) 28 floors, (C) 27 floors, (D) 26 floors, (E) 25 floors.

**Answer:** B
[[src_archimede_2014_biennio__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area seminata con corda fissata ad angolo della casa*

![[src_archimede_2014_biennio__prob16.png]]

> Francesco vuole seminare una zona del giardino della sua
> casa, che ha la forma riportata in figura (casa in grigio e
> giardino in bianco tutto intorno). Per far questo, lega una
> corda di 2 m all’angolo A della casa, la tende e, spostandone
> l’estremità, disegna il perimetro della zona da seminare.
> Quanti m2 seminerà Francesco?
> (A) 2π +
> √
> 3, (B) 15
> 4 π −
> √
> 3
> 2 , (C) 31
> 12π +
> √
> 3
> 2 ,
> (D) 9
> 4π, (E) 4π −
> √
> 3
> 2 −1.
> 1 m
> 1 m
> 2 m
> 3 m
> A

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Oz_wj_o5ytBhbhCTfVi7OLptFspmtFPH/view)
**Anche in triennio:** [apri PDF p.2](https://drive.google.com/file/d/1gFMJu_Q6VeO8h4j_WyQCIq1jk9c8n-ur/view)


<span class="qlang-split" data-lang="en"></span>


*Area sown by rope fixed to the corner of the house*

![[src_archimede_2014_biennio__prob16.png]]

> Francesco wants to sow an area of his house's garden, which has the shape shown in the figure (grey house and white garden all around). To do this, attach a 2 m rope to the A corner of the house, the curtain and, moving the end, draw the perimeter of the area to be sown. How many square meters will Francesco plant? (A) 2π + √ 3, (B) 15 4 π − √ 3 2 , (C) 31 12π + √ 3 2 , (D) 9 4π, (E) 4π − √ 3 2 −1. 1 m 1 m 2 m 3 m A

**Answer:** C
[[src_archimede_2014_biennio__Q16]]
