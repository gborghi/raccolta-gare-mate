---
title: Kangourou 2005 - Cadet (finale nazionale)
tipo: gara
competition: Kangourou 2005 - Cadet (finale nazionale)
family: kangourou
year: '2005'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2005_cadet_finale"></div>



<span class="atom-split" id="qc1" data-atom="qc1" data-title="Quesito C1" data-tags="topic_aritmetica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Schede rimaste da esaminare alla una*

> Prima che venisse impiegato il lettore ottico, le schede-risposta di Kangourou venivano esaminate a mano. Un correttore umano esaminava in media 2 schede al minuto. Alle undici del mattino di un dato giorno aveva esaminato la metà delle schede che gli erano state assegnate per quel giorno. A mezzogiorno ne aveva esaminati i due terzi. Se non si fosse mai fermato e avesse continuato allo stesso ritmo, quante schede gli sarebbero rimaste da esaminare alla una di pomeriggio di quel giorno?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 120
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1xu5y5JpzGNUIyhivHcF8Vczu7vpaLZFN/view)


<span class="qlang-split" data-lang="en"></span>


*Remaining tables to be examined at a*

> Before the optical reader was used, Kangourou's response cards were examined by hand. A human proofreader examined an average of two sheets per minute. At eleven o'clock in the morning of a certain day he had examined half the cards assigned to him for that day. At noon he had examined two thirds of them. If he had never stopped and continued at the same pace, how many sheets would he have left to examine at one o'clock that afternoon?

**Answer:** 120
[[src_kangourou_2005_cadet_finale__QC1]]



<span class="atom-split" id="qc2" data-atom="qc2" data-title="Quesito C2" data-tags="topic_combinatoria,method_colorazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Croce greca su scacchiera 7x7 somma totale negativa*

> Considera una scacchiera $7 \times 7$ e chiama croce greca ogni configurazione di 5 sue caselle disposte a croce in modo che ogni casella abbia in comune almeno un lato con un'altra casella della croce (quindi ogni croce ha 4 bracci uguali ciascuno costituito da una casella). Si possono disporre 49 numeri interi, non necessariamente tutti uguali fra loro, sulle 49 caselle, uno per casella, in modo che la somma totale di questi interi sia negativa, ma la somma dei numeri corrispondenti alle caselle ricoperte da una qualsiasi croce greca sia positiva?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** Si
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1xu5y5JpzGNUIyhivHcF8Vczu7vpaLZFN/view)


<span class="qlang-split" data-lang="en"></span>


Greek cross on chessboard 7x7 negative total sum*

> Consider a chessboard $7 \times 7$ and call a Greek cross each configuration of 5 of its cross-arranged boxes so that each box has at least one side in common with another box of the cross (so each cross has 4 equal arms each consisting of a box). You can have 49 integers, not necessarily all of them equal to each other, on the 49 boxes, one per box, so that the total sum of these integers is negative, but the sum of the numbers corresponding to the boxes covered by any Greek cross is positive?

**Answer:** Si
[[src_kangourou_2005_cadet_finale__QC2]]



<span class="atom-split" id="qc3" data-atom="qc3" data-title="Quesito C3" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area rettangolo ombreggiato in triangolo rettangolo*

![[src_kangourou_2005_cadet_finale__probC3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (8,0);
  \coordinate (C) at (0,6);
  \coordinate (P) at (6,1.5);
  \fill[yellow!80!white] (A) -- (6,0) -- (P) -- (0,1.5) -- cycle;
  \draw (A) -- (6,0) -- (P) -- (0,1.5) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \node[right] at (P) {P};
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Il triangolo $ABC$ è rettangolo e il punto $P$ dista $1$ cm sia dal cateto $AB$, che è lungo $8$ cm, sia dall'ipotenusa $BC$, che è lunga $10$ cm. Qual è l'area del rettangolo ombreggiato? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 5 cm2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1xu5y5JpzGNUIyhivHcF8Vczu7vpaLZFN/view)


<span class="qlang-split" data-lang="en"></span>


*Shaded rectangular area in rectangular triangle*

![[src_kangourou_2005_cadet_finale__probC3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (8,0);
  \coordinate (C) at (0,6);
  \coordinate (P) at (6,1.5);
  \fill[yellow!80!white] (A) -- (6,0) -- (P) -- (0,1.5) -- cycle;
  \draw (A) -- (6,0) -- (P) -- (0,1.5) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \node[right] at (P) {P};
\end{tikzpicture}
\end{document}
```

> Look at the figure. The $ABC$ triangle is rectangular and the point $P$ is $1$ cm away from both the $AB$ catheter, which is $8$ cm long, and the $BC$ hypotenuse, which is $10$ cm long. What is the area of the shaded rectangle? (see figure)

**Answer:** 5 cm2
[[src_kangourou_2005_cadet_finale__QC3]]



<span class="atom-split" id="qc4" data-atom="qc4" data-title="Quesito C4" data-tags="topic_aritmetica,topic_funzionali,method_congruenze,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Prossima eclissi di due pianeti in rotazione*

![[src_kangourou_2005_cadet_finale__probC4.png]]

> Kang è una stella immaginaria che possiede due pianeti: Enigma e Math. Essi si muovono in uno stesso piano, descrivendo ciascuno un'orbita circolare centrata in Kang con velocità angolare costante, ma diversa l'uno dall'altro. Infatti Enigma, il più lontano, ruota attorno a Kang in senso orario in 7 giorni, mentre Math impiega 5 giorni, ruotando in senso antiorario. In questo istante si può osservare un'eclissi di Enigma da parte di Math (osserva la figura). Tra quanto tempo si verificherà la prossima eclissi? (vedi figura)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 3 giorni meno 2 ore
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1xu5y5JpzGNUIyhivHcF8Vczu7vpaLZFN/view)


<span class="qlang-split" data-lang="en"></span>


Next eclipse of two rotating planets

![[src_kangourou_2005_cadet_finale__probC4.png]]

> Kang is an imaginary star that owns two planets: Enigma and Math. They move in the same plane, each describing a circular orbit centered in Kang with constant angular velocity, but different from each other. In fact, Enigma, the furthest, rotates around Kang clockwise in 7 days, while Math takes 5 days, rotating counterclockwise. At this moment an eclipse of Enigma by Math can be observed (see figure). How long before the next eclipse occurs? (see figure)

**Answer:** 3 giorni meno 2 ore
[[src_kangourou_2005_cadet_finale__QC4]]



<span class="atom-split" id="qc5" data-atom="qc5" data-title="Quesito C5" data-tags="topic_algebra,topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Valori possibili di x+y con x+y+xy=90*

> Se $x$ e $y$ sono due numeri interi strettamente positivi tali che si abbia
> $$x + y + xy = 90,$$
> quanti sono i possibili valori della somma $x + y$?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** uno, 18
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1xu5y5JpzGNUIyhivHcF8Vczu7vpaLZFN/view)


<span class="qlang-split" data-lang="en"></span>


*Possible values of x+y with x+y+xy=90*

> If $x$ and $y$ are two strictly positive integers such that $$x + y + xy = 90,$$ is obtained, what are the possible values of the sum $x + y$?

**Answer:** uno, 18
[[src_kangourou_2005_cadet_finale__QC5]]



<span class="atom-split" id="qc6" data-atom="qc6" data-title="Quesito C6" data-tags="topic_aritmetica,method_conteggio,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero finalisti somma di cifre elevate a se stesse*

> Un indovino predice che nel 2080 si terrà a Mirabilandia la finale mondiale di Kangourou e che il numero dei finalisti:
> - avrà una rappresentazione in base 10 formata da 4 cifre tutte diverse da 0;
> - sarà la somma dei quattro numeri che si ottengono elevando a se stessa ciascuna delle quattro cifre che compaiono nella rappresentazione (dunque se, per esempio, comparissero le cifre 2 e 7, due degli addendi sarebbero $2^2$ e $7^7$).
> 
> Determina, grazie a queste indicazioni, quanti finalisti prevede l'indovino per quella memorabile edizione di Kangourou.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 3435
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1xu5y5JpzGNUIyhivHcF8Vczu7vpaLZFN/view)


<span class="qlang-split" data-lang="en"></span>


*Number of finalists sum of high figures to itself*

> One conjecture predicts that in 2080 the World Final of Kangourou will be held in Mirabilandia and that the number of finalists: - will have a representation on base 10 consisting of 4 digits all different from 0; - will be the sum of the four numbers that are obtained by raising to itself each of the four digits that appear in the representation (so if, for example, the digits 2 and 7 appear, two of the additions would be $2^2$ and $7^7$).
> 
> It determines, through these indications, how many finalists predict the fortune teller for that memorable edition of Kangourou.

**Answer:** 3435
[[src_kangourou_2005_cadet_finale__QC6]]
