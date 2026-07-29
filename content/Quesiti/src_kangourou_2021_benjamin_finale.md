---
title: Kangourou 2021 Benjamin - finale
tipo: gara
competition: Kangourou 2021 Benjamin - finale
family: kangourou
year: '2021'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2021_benjamin_finale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_funzionali,method_ricorsione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minuti per riempire il primo recipiente di amebe*

> Le amebe sono protozoi che si riproducono in tre minuti, cioè ogni 3 minuti ogni ameba ne genera un'altra identica. Nessuna ameba muore finché ha spazio per riprodursi. Due recipienti di uguale capacità contengono inizialmente il primo un'ameba, il secondo 8 amebe. Il secondo recipiente si trova pieno di amebe dopo esattamente 3 ore. Quanti minuti impiega a riempirsi il primo recipiente?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 189
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lcBpucjMyPn19QcdY4x_lBRtIl3fOAD2/view)


<span class="qlang-split" data-lang="en"></span>


*Minutes to fill the first container of amoeba*

> The amoeba are protozoa that reproduce in three minutes, that is, every three minutes each amoeba generates another identical one. No amoeba dies as long as it has room to reproduce. Two vessels of equal capacity initially contain one amoeba, the second eight amoeba. The second container is filled with amoeba after exactly three hours. How many minutes does it take to fill the first container?

**Answer:** 189
[[src_kangourou_2021_benjamin_finale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,method_casework,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Correggere 25x2=211 con +1/-1 sulle cifre*

> L'uguaglianza $25 \times 2 = 211$ è falsa, ma la puoi trasformare in un'uguaglianza corretta aggiungendo 1 ad alcune sue cifre e togliendo 1 alle altre. Scrivi questa nuova uguaglianza corretta, motivando.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 34x3=102
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lcBpucjMyPn19QcdY4x_lBRtIl3fOAD2/view)


<span class="qlang-split" data-lang="en"></span>


*Correct 25x2=211 with +1/-1 on the digits*

> The $25 \times 2 = 211$ equation is false, but you can turn it into a correct equation by adding 1 to some of its digits and subtracting 1 from the others. Write this new correct equation, motivating.

**Answer:** 34x3=102
[[src_kangourou_2021_benjamin_finale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area del quadrato grande dato il piccolo di area 18*

![[src_kangourou_2021_benjamin_finale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (3,3);
  \draw (0,3) -- (3,0);
  \fill[gray!30] (2,3) -- (3,2) -- (2,1) -- (1,2) -- cycle;
  \draw (2,3) -- (3,2) -- (2,1) -- (1,2) -- cycle;
\end{tikzpicture}
\end{document}
```

> Il quadrato piccolo in figura ha due vertici consecutivi su due lati consecutivi del quadrato grande e il lato opposto sulla sua diagonale. Se l'area del quadrato piccolo è 18, qual è l'area del quadrato grande? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 81
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lcBpucjMyPn19QcdY4x_lBRtIl3fOAD2/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the square large given the small area 18*

![[src_kangourou_2021_benjamin_finale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (3,3);
  \draw (0,3) -- (3,0);
  \fill[gray!30] (2,3) -- (3,2) -- (2,1) -- (1,2) -- cycle;
  \draw (2,3) -- (3,2) -- (2,1) -- (1,2) -- cycle;
\end{tikzpicture}
\end{document}
```

> The small square in the figure has two consecutive vertices on two consecutive sides of the large square and the opposite side on its diagonal. If the area of the small square is 18, what is the area of the large square? (see figure)

**Answer:** 81
[[src_kangourou_2021_benjamin_finale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_probabilita,topic_algebra,skill_stima,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Stima del numero di coriandoli col metodo cattura-ricattura*

> Hai un sacchetto di coriandoli e vorresti sapere quanti sono, almeno approssimativamente. Pensi di usare la seguente strategia:
> - ne estrai 50 e li contraddistingui con un segno, quindi li rimetti nel sacchetto e mescoli tutti i coriandoli in modo che quelli che hai contrassegnato si possano distribuire uniformemente all'interno del sacchetto;
> - ne estrai quindi 70 a caso e scopri che, fra questi 70, solo due sono stati contrassegnati da te.
> 
> Sulla base di questo esperimento, qual è un numero attendibile per i coriandoli contenuti nel sacchetto?

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_stima|Stima e approssimazione]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1750
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1lcBpucjMyPn19QcdY4x_lBRtIl3fOAD2/view)


<span class="qlang-split" data-lang="en"></span>


*Estimate of the number of cranberries by catch-recatch method*

> You have a bag of coriander and you'd like to know how many, at least roughly. Think of using the following strategy: - extract 50 and mark them with a mark, then put them back in the bag and mix all the candies so that the ones you've marked can be evenly distributed within the bag; - then extract 70 at random and find out that out of these 70, only two have been marked by you.
> 
> Based on this experiment, what is a reliable number for the coriander in the bag?

**Answer:** 1750
[[src_kangourou_2021_benjamin_finale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,topic_logica,method_invarianti,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Rendere uguali 7 numeri aggiungendo 1 a coppie adiacenti*

> I numeri da 1 a 7 sono disposti in senso orario su una circonferenza. Puoi modificarli quante volte vuoi, ma ogni volta solo aggiungendo 1 a due numeri che si trovino in posizioni adiacenti. Spiega come è possibile, rispettando questa regola, arrivare ad avere sette numeri tutti uguali.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lcBpucjMyPn19QcdY4x_lBRtIl3fOAD2/view)


<span class="qlang-split" data-lang="en"></span>


*To make 7 numbers equal by adding 1 to adjacent pairs*

> The numbers 1 to 7 are arranged in a clockwise direction on a circumference. You can change them as many times as you want, but each time just by adding 1 to two numbers that are in adjacent positions. Explain how it is possible, by following this rule, to get seven numbers that are all the same.

[[src_kangourou_2021_benjamin_finale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,topic_combinatoria,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo da togliere da 2..2021 senza prodotti rimasti*

> Considera l'insieme dei numeri interi da 2 a 2021 inclusi. Vuoi levarne alcuni in modo che nessuno di quelli rimasti sia esprimibile come prodotto di due di quelli rimasti. Quanti ti basta levarne, al minimo?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 43
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lcBpucjMyPn19QcdY4x_lBRtIl3fOAD2/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum to be removed from 2..2021 without residual products*

> Consider the set of integers from 2 to 2021 inclusive. You want to take some of them away so none of the remaining ones can be expressed as a product of two of the remaining ones. How many do you want to take away?

**Answer:** 43
[[src_kangourou_2021_benjamin_finale__Q06]]
