---
title: Gara Nazionale Classi Prime 2019
tipo: gara
competition: Gara Nazionale Classi Prime 2019
family: archimede
year: '2019'
level: Classi Prime
---
<div class="atom-reader" data-gara="Quesiti/src_garaprime_2019"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Cifre binarie del prodotto delle prime 10 potenze di 8*

> Sia n il prodotto delle prime 10 potenze di 8, cioè n = 80 ·81 ·82 ·. . .·89.
> Quante cifre ha la rappresentazione binaria di n?
> A 136
> B 49
> C 91
> D 120
> E 27
> F 28

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Binary product figures of the first 10 powers of 8*

> Whether n is the product of the first 10 powers of 8, i.e. n = 80 ·81 ·82 ·. . .·89. How many digits does the binary representation of n have? A 136 B 49 C 91 D 120 E 27 F 28

**Answer:** A
[[src_garaprime_2019__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Differenza bianche-nere in tabella 81x81 a cornici*

![[src_garaprime_2019__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.4]
  \fill[black] (1,1) rectangle (2,2);
  \fill[black] (1,2) rectangle (2,3);
  \fill[black] (1,3) rectangle (2,4);
  \fill[black] (1,4) rectangle (2,5);
  \fill[black] (1,5) rectangle (2,6);
  \fill[black] (1,6) rectangle (2,7);
  \fill[black] (1,7) rectangle (2,8);
  \fill[black] (2,1) rectangle (3,2);
  \fill[black] (2,7) rectangle (3,8);
  \fill[black] (3,1) rectangle (4,2);
  \fill[black] (3,3) rectangle (4,4);
  \fill[black] (3,4) rectangle (4,5);
  \fill[black] (3,5) rectangle (4,6);
  \fill[black] (3,7) rectangle (4,8);
  \fill[black] (4,1) rectangle (5,2);
  \fill[black] (4,3) rectangle (5,4);
  \fill[black] (4,5) rectangle (5,6);
  \fill[black] (4,7) rectangle (5,8);
  \fill[black] (5,1) rectangle (6,2);
  \fill[black] (5,3) rectangle (6,4);
  \fill[black] (5,4) rectangle (6,5);
  \fill[black] (5,5) rectangle (6,6);
  \fill[black] (5,7) rectangle (6,8);
  \fill[black] (6,1) rectangle (7,2);
  \fill[black] (6,7) rectangle (7,8);
  \fill[black] (7,1) rectangle (8,2);
  \fill[black] (7,2) rectangle (8,3);
  \fill[black] (7,3) rectangle (8,4);
  \fill[black] (7,4) rectangle (8,5);
  \fill[black] (7,5) rectangle (8,6);
  \fill[black] (7,6) rectangle (8,7);
  \fill[black] (7,7) rectangle (8,8);
  \draw[step=1] (0,0) grid (9,9);
\end{tikzpicture}
\end{document}
```

> Le caselle di una tabella 9 × 9 sono colorate di bianco e nero (vedi
> figura). La casella centrale è bianca, poi le cornici che via via la circondano sono
> alternativamente nere e bianche.
> figura 1
> Si immagini di fare la stessa cosa con una tabella 81 × 81. Qual è, in questa
> nuova tabella, la differenza tra il numero di caselle bianche e il numero di caselle
> nere?
> A 161
> B 321
> C 81
> D 167
> E 319
> F 1

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Black and white difference in table 81x81 frames*

![[src_garaprime_2019__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.4]
  \fill[black] (1,1) rectangle (2,2);
  \fill[black] (1,2) rectangle (2,3);
  \fill[black] (1,3) rectangle (2,4);
  \fill[black] (1,4) rectangle (2,5);
  \fill[black] (1,5) rectangle (2,6);
  \fill[black] (1,6) rectangle (2,7);
  \fill[black] (1,7) rectangle (2,8);
  \fill[black] (2,1) rectangle (3,2);
  \fill[black] (2,7) rectangle (3,8);
  \fill[black] (3,1) rectangle (4,2);
  \fill[black] (3,3) rectangle (4,4);
  \fill[black] (3,4) rectangle (4,5);
  \fill[black] (3,5) rectangle (4,6);
  \fill[black] (3,7) rectangle (4,8);
  \fill[black] (4,1) rectangle (5,2);
  \fill[black] (4,3) rectangle (5,4);
  \fill[black] (4,5) rectangle (5,6);
  \fill[black] (4,7) rectangle (5,8);
  \fill[black] (5,1) rectangle (6,2);
  \fill[black] (5,3) rectangle (6,4);
  \fill[black] (5,4) rectangle (6,5);
  \fill[black] (5,5) rectangle (6,6);
  \fill[black] (5,7) rectangle (6,8);
  \fill[black] (6,1) rectangle (7,2);
  \fill[black] (6,7) rectangle (7,8);
  \fill[black] (7,1) rectangle (8,2);
  \fill[black] (7,2) rectangle (8,3);
  \fill[black] (7,3) rectangle (8,4);
  \fill[black] (7,4) rectangle (8,5);
  \fill[black] (7,5) rectangle (8,6);
  \fill[black] (7,6) rectangle (8,7);
  \fill[black] (7,7) rectangle (8,8);
  \draw[step=1] (0,0) grid (9,9);
\end{tikzpicture}
\end{document}
```

> The boxes in a table 9 × 9 are coloured in black and white (see figure). The central box is white, then the outer frames surrounding it are alternately black and white. Figure 1 Imagine doing the same thing with a table 81 × 81. What is the difference between the number of white boxes and the number of black boxes in this new table? A 161 B 321 C 81 D 167 E 319 F 1

**Answer:** A
[[src_garaprime_2019__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,method_conteggio,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Quale parola ha il maggior numero di anagrammi*

> Quale tra le seguenti parole ha il maggior numero di anagrammi?
> (Considerare tutti gli anagrammi, anche quelli senza senso)
> A CANNE
> B CANE
> C CENE
> D CANNA
> E NANNE
> F NANNA

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Which word has the most anagrams*

> Which of the following words has the most anagrams? (Consider all the anagrams, even the nonsensical ones) A CANNE B CANNE C CENE D CANNE and NANNE F NANNA

**Answer:** A
[[src_garaprime_2019__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,method_conteggio,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Massima distanza tra anagrammi di MAMMMMME*

> La distanza tra due anagrammi di una stessa parola è il minimo numero
> di scambi tra lettere consecutive che devo fare per trasformare uno dei due
> nell’altro. Ad esempio ACTA ha distanza 1 da ATCA e distanza 2 da ATAC.
> Qual è la massima distanza che può esserci tra MAMMMMME e uno dei suoi
> anagrammi?
> A 12
> B 14
> C 11
> D 10
> E 6
> F 9

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Most distance between anagrams of MAMMMMME*

> The distance between two anagrams of the same word is the minimum number of consecutive letter exchanges I have to make to turn one of the two into the other. For example, ACTA has distance 1 from ATCA and distance 2 from ATAC. What is the maximum distance that MAMMMMME can be from one of its anagrams? A 12 B 14 C 11 D 10 E 6 F 9

**Answer:** A
[[src_garaprime_2019__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,method_casi_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di dare 10 Euro con monete da 2,1,0.5*

> Luca ha solo monete da 2 Euro, 1 Euro e 50 centesimi, ma ne ha
> tantissime (più di 20) per ciascuno dei 3 tipi. In quanti modi diversi può dare
> 10 Euro a Claudia?
> A 36
> B 27
> C 40
> D 28
> E 25
> F 12

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


How to give €10 with 2.1,0.5 coins

> Luca has only 2 Euro, 1 Euro and 50 cents coins, but he has a lot of them (more than 20) for each of the 3 types. How many different ways can you give 10 euros to Claudia? A 36 B 27 C 40 D 28 E 25 F 12

**Answer:** A
[[src_garaprime_2019__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore di n^2 - (n+4)(n-4) con n grande*

> Quanto vale 8881115550002 −888111555004 · 888111554996?
> A 16
> B 0
> C −4
> D 12
> E 18
> F nessuna delle altre risposte è esatta

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Value of n2 - (n+4)(n-4) with n large*

> How much is 8881115550002 −888111555004 · 888111554996? A 16 B 0 C −4 D 12 E 18 F None of the other answers are correct

**Answer:** A
[[src_garaprime_2019__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,topic_logica,method_ricorsione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Orario finale della somma parallela di 200 foglietti*

> L’insegnante di informatica della 3aD, per far capire ai suoi 20 alunni
> le finezze del calcolo parallelo, assegna loro il compito di sommare 200 numeri. I
> ragazzi si organizzano in modo da parallelizzare il lavoro. Scrivono i 200 numeri
> su 200 foglietti e li mettono in un cesto, poi impostano una sveglia in modo che,
> a partire dalle ore 10:00, suoni ogni 5 minuti. Al primo squillo della sveglia,
> ciascuno di loro prende dal cesto due foglietti, torna al posto, li somma, scrive il
> risultato su un nuovo foglietto e corre a rimetterlo nel cesto prima che la sveglia
> suoni di nuovo.
> Ripetono questa operazione ad ogni squillo finch´e nel cesto
> rimane un solo foglietto, che contiene quindi la somma richiesta. Ovviamente,
> nei turni in cui i foglietti nel cesto sono meno di 40, alcuni ragazzi devono
> rimanere fermi.
> Che ore sono quando, per la prima volta, la sveglia squilla e c’è un solo biglietto
> nel cesto?
> A
> 11:10
> B
> 10:55
> C
> 11:00
> D
> 11:05
> E
> 11:15
> F
> 10:50

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Final time of the parallel sum of 200 sheets*

> The 3D computer science teacher, in order to teach her 20 students the tricks of parallel computing, assigns them the task of adding 200 numbers. The boys organize themselves in such a way as to parallel the work. They write the 200 numbers on 200 sheets and put them in a basket, then set an alarm so that, starting at 10:00, you play every five minutes. At the first wake-up call, each of them takes two sheets from the basket, returns to his place, sums them up, writes the result on a new sheet, and runs back to put it back in the basket before it wakes up sounds again. They repeat this operation with each call until there is only one leaflet left in the basket, which then contains the required sum. Obviously, in shifts where the cards in the basket are less than 40, some kids have to stand still. What time is it when, for the first time, the alarm goes off and there's only one ticket in the basket? A 11:10 B 10:55 C 11:00 D 11:05 E 11:15 F 10:50

**Answer:** A
[[src_garaprime_2019__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,method_fattorizzazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Quali tra a,b,c sono cubi perfetti*

> Siano dati i numeri a = 132132, b = 913 −324 e c = 998800. Quali di
> essi sono dei cubi perfetti?
> A solo b
> B solo a e b
> C solo a e c
> D solo b e c
> E tutti
> F nessuno

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Those between a,b,c are perfect cubes*

> The numbers a = 132132, b = 913 −324 and c = 998800 are given. Which of these are perfect cubes? A only b b only a and b c only a and c d only b and c and all f none

**Answer:** A
[[src_garaprime_2019__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_aritmetica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*140 Pollici in Spanne*

> L’isola Kenoncè adotta, per misurare le lunghezze, 4 diverse unità di
> misura: il Pollice, il Mignolo, l’Indice e la Spanna. Sappiamo che 7 Indici
> sono lunghi quanto 5 Spanne, 21 Mignoli quanto 20 Pollici e 2 Indici quanto
> 3 Mignoli.
> A quante Spanne equivalgono 140 Pollici?
> A 70
> B 105
> C 630
> D 42
> E 450
> F 12

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*140 Inches in Spanne*

> For measuring the lengths, Kenoncè Island uses 4 different units of measurement: the Pollice, the Mignolo, the Index and the Spanna. We know that 7 Indices are as long as 5 Spanne, 21 Minnoli as long as 20 Inches and 2 Indices as long as 3 Minnoli. How many Spanne is 140 inches? A 70 B 105 C 630 D 42 E 450 F 12

**Answer:** A
[[src_garaprime_2019__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Divisori dispari di 8100 multipli di 5*

> Quanti sono i divisori positivi dispari di 8100 che sono multipli di 5?
> A 10
> B 15
> C 9
> D 30
> E 12
> F 18

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Disparate dividers of 8100 multiples of 5*

> How many odd positive divisors of 8100 are multiples of 5? A 10 B 15 C 9 D 30 E 12 F 18

**Answer:** A
[[src_garaprime_2019__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_probabilita,topic_algebra,method_estremalita,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo numero di ragazze con voto 100 date le medie*

> Tutta la classe 5aM (composta da 10 maschi e 8 femmine) ha superato l’esame
> di maturità: ogni voto era compreso tra 60 e 100. La media dei voti dei maschi
> è stata 76 mentre quella complessiva è stata 80. Quante sono state, al massimo,
> le ragazze che hanno preso 100?
> A 5
> B 1
> C 2
> D 3
> E 4
> F 6

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Most girls with a grade of 100 given the average*

> The entire 5aM class (consisting of 10 males and 8 females) passed the maturity test: each grade was between 60 and 100. The average male vote was 76 and the total was 80. How many girls took 100 at most? A 5 B 1 C 2 D 3 E 4 F 6

**Answer:** A
[[src_garaprime_2019__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,method_telescoping,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma di repunit binari n1+...+n10*

> Per ogni intero positivo k indichiamo con nk quel numero intero positivo la cui
> rappresentazione binaria ha esattamente k cifre e sono tutte uguali a 1.
> Quanto vale n1 + n2 + n3 + . . . + n10?
> A 2036
> B 2048
> C 1048
> D 1536
> E 2064
> F 1792

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_telescoping|Somme telescopiche]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Sum of binary repunits n1+...+n10*

> For every positive integer k, we use nk to indicate that positive integer whose binary representation has exactly k digits and they're all equal to 1. What 's n1 + n2 + n3 + ? . . + n10? A 2036 B 2048 C 1048 D 1536 E 2064 F 1792

**Answer:** A
[[src_garaprime_2019__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_combinatoria,method_conteggio,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero di tassellazioni 4x4 con vincolo sul segmento*

![[src_garaprime_2019__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  \draw (0,0) grid (4,4);
  \draw[line width=2pt] (1,2) -- (3,2);
\end{tikzpicture}
\end{document}
```

> Trovare in quanti modi diversi è possibile ricoprire completamente la seguente
> griglia 4 × 4 con tasselli 1 × 2, con la restrizione che i tasselli non possono essere
> messi a cavallo del segmento orizzontale segnato in grassetto.
> figura 2
> I tasselli possono essere ruotati ma non possono essere sovrapposti.
> A 26
> B 12
> C 32
> D 45
> E 30
> F 36

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Number of 4x4 stamps with binding on the segment*

![[src_garaprime_2019__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  \draw (0,0) grid (4,4);
  \draw[line width=2pt] (1,2) -- (3,2);
\end{tikzpicture}
\end{document}
```

> Find out how many different ways it is possible to completely cover the following grid 4 × 4 with a grid of 1 × 2, with the restriction that the grid cannot be placed on the horizontal segment marked in bold. Figure 2 The bearings may be rotated but not overlapped. A 26 B 12 C 32 D 45 E 30 F 36

**Answer:** A
[[src_garaprime_2019__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Coppie (a,b) divisori di 60060 con MCD=6*

> In quanti modi posso scegliere la coppia di interi (a, b), con a < b, in modo che
> a e b siano entrambi divisori di 60060, ma che MCD(a, b) = 6?
> A 121
> B 128
> C 364
> D 60
> E 32
> F 81

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Pairs (a,b) of 60060 dividers with MCD=6*

> How many ways can I choose the pair of integers (a, b), with a < b, so that a and b are both divisors of 60060, but what MCD(a, b) = 6? A 121 B 128 C 364 D 60 E 32 F 81

**Answer:** A
[[src_garaprime_2019__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_algebra,topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero di primi nella fattorizzazione di p(19,18)*

> Dato il polinomio p(x, y) = x5 +x4y +x3y2 +x2y3 +xy4 +y5, sia n = p(19, 18),
> cioè n è il numero che si ottiene sostituendo i valori x = 19 e y = 18 nel
> polinomio.
> Quanti diversi numeri primi compaiono nella fattorizzazione di n?
> A 4
> B 3
> C 5
> D 6
> E 7
> F più di 7

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Number of firsts in the factorization of p(19,18) *

> Given the polynomial p(x, y) = x5 +x4y +x3y2 +x2y3 +xy4 +y5, both n = p(19, 18), i.e. n is the number that is obtained by replacing the values x = 19 and y = 18 in the polynomial. How many different prime numbers do you have in the factorization of n? A 4 B 3 C 5 D 6 E 7 F more than 7

**Answer:** A
[[src_garaprime_2019__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_geometria_solida,topic_aritmetica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma degli spigoli del parallelepipedo con 60 cubetti*

> Il piccolo Luca ha 60 cubetti di legno, tutti con lo spigolo di 1 cm. Utilizzandoli
> tutti costruisce un parallelepipedo con la superficie totale di 104 cm2. Quanto
> vale, espressa in centimetri, la somma delle lunghezze di tutti gli spigoli del
> parallelepipedo?
> A 52
> B 36
> C 56
> D 64
> E 72
> F 80

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Summary of parallel-piped shoulders with 60 cubes*

> Little Luca has 60 wooden cubes, all with a 1 cm spike. Using them all, he builds a parallel piped with a total area of 104 cm2. How much is the sum of the lengths of all the tips of the paralelepiped, expressed in centimeters? A 52 B 36 C 56 D 64 E 72 F 80

**Answer:** A
[[src_garaprime_2019__Q16]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Divisori di n sapendo che 30n ne ha 45*

> Del numero intero positivo n sappiamo che 30n ha 45 divisori positivi (contando
> anche 1 e 30n). Quanti sono i divisori positivi di n?
> A 16
> B 42
> C 36
> D 12
> E 24
> F 32

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Divers of n knowing that 30n has 45 *

> Of positive integer n we know that 30n has 45 positive divisors (also counting 1 and 30n). How many positive divisors of n? A 16 B 42 C 36 D 12 E 24 F 32

**Answer:** A
[[src_garaprime_2019__Q17]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_geometria_piana,topic_combinatoria,method_estremalita,skill_ragionamento_geometrico,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo triangolo che contiene 2019 punti dati i triangoli*

> Sia I un insieme di 2019 punti nel piano, dei quali non conosciamo le posizioni.
> L’unica informazione che abbiamo su I è che, comunque si prendano in I tre
> punti A, B e C, l’area del triangolo ABC non supera mai 2018 cm2.
> Si consideri l’affermazione: ”Esiste un triangolo che contiene tutto I e la cui
> area, espressa in cm2, vale λ.”
> Qual è, tra quelli proposti sotto, il più piccolo valore di λ per il quale possiamo
> essere sicuri che tale affermazione sia vera?
> A 8072
> B 8073
> C 2018
> D 2019
> E 4035
> F 4036
> 1
> 
> Soluzioni
> Qui di seguito trovate le soluzioni in forma scritta. Alcune soluzioni in forma di
> video verranno successivamente pubblicate sul canale YouTube:
> problemisvolti.it

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum triangle containing 2019 data points for triangles*

> Whether I'm a set of 2019 points in the plane, whose positions we don't know. The only information we have about I is that, however you take the three points A, B and C, the area of the triangle ABC never exceeds 2018 cm2. Consider the statement: There is a triangle containing all I and whose area, expressed in cm2, is λ. Which of the following is the smallest value of λ for which we can be sure that this statement is true? A 8072 B 8073 C 2018 D 2019 E 4035 F 4036 1
> 
> Solutions Below you will find the solutions in written form. Some of the solutions in the form of videos will later be published on the YouTube channel: problemisolti.it

**Answer:** A
[[src_garaprime_2019__Q18]]
