---
title: Kangourou 2016 finale nazionale Cadet
tipo: gara
competition: Kangourou 2016 finale nazionale Cadet
family: kangourou
year: '2016'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2016_finale_cadet"></div>



<span class="atom-split" id="qc1" data-atom="qc1" data-title="Quesito C1" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*lato del triangolo piu grande*

![[src_kangourou_2016_finale_cadet__probC1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!40] (2,3.464) -- (1,1.732) -- (3,1.732) -- cycle;
  \fill[gray!40] (0,0) -- (2,0) -- (1,1.732) -- cycle;
  \fill[gray!40] (2,0) -- (4,0) -- (3,1.732) -- cycle;
  \fill[black] (1,1.732) -- (2,0) -- (3,1.732) -- cycle;
  \draw[thick] (0,0) -- (4,0) -- (2,3.464) -- cycle;
  \draw (1,1.732) -- (3,1.732);
  \draw (0,0) -- (3,1.732);
  \draw (4,0) -- (1,1.732);
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Tutti i triangoli che puoi vedere sono equilateri: i lati di quello nero (il più piccolo) sono lunghi $2$ cm, i lati di quelli grigi sono lunghi tutti $5$ cm. Quanto sono lunghi i lati del triangolo più grande (quello che li contiene tutti)? Come suggerisce la figura, i lati dei triangoli grigi e di quello nero che hanno vertici in comune stanno su una stessa retta. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 19
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oqrEh6WLA1jn7meM9kqx809sdukOIBbT/view)


<span class="qlang-split" data-lang="en"></span>


*side of the largest triangle *

![[src_kangourou_2016_finale_cadet__probC1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!40] (2,3.464) -- (1,1.732) -- (3,1.732) -- cycle;
  \fill[gray!40] (0,0) -- (2,0) -- (1,1.732) -- cycle;
  \fill[gray!40] (2,0) -- (4,0) -- (3,1.732) -- cycle;
  \fill[black] (1,1.732) -- (2,0) -- (3,1.732) -- cycle;
  \draw[thick] (0,0) -- (4,0) -- (2,3.464) -- cycle;
  \draw (1,1.732) -- (3,1.732);
  \draw (0,0) -- (3,1.732);
  \draw (4,0) -- (1,1.732);
\end{tikzpicture}
\end{document}
```

> Look at the figure. All the triangles you can see are equilateral: the sides of the black one (the smallest one) are $2$ cm long, the sides of the gray ones are all $5$ cm long. How long are the sides of the largest triangle (the one that contains them all)? As the figure suggests, the sides of the grey and black triangles that have common vertices are on the same straight. (see figure)

**Answer:** 19
[[src_kangourou_2016_finale_cadet__QC1]]



<span class="atom-split" id="qc2" data-atom="qc2" data-title="Quesito C2" data-tags="topic_aritmetica,topic_logica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*gelato 2 kang con 2 euro*

> La moneta di Kanglandia è il kang. A Kangcity il cambio euro - kang funziona così: si ottiene $1$ kang pagando $1{,}20$ euro, si ottiene $1$ euro pagando $1$ kang e proporzionalmente se si cambiano monete di valore inferiore. In entrambe le valute la moneta di valore minimo è quella da un centesimo; si può cambiare qualunque quantità di denaro e il risultato del cambio, se non è esprimibile con un numero intero di centesimi, viene arrotondato al centesimo per eccesso. Sono a Kangcity e ho solo euro. Esiste un modo (lecito) di acquistare un gelato che costa $2$ kang spendendo solo $2$ euro? In caso affermativo, qual è il minimo numero di cambi che mi consente di farlo?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** si, 40
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oqrEh6WLA1jn7meM9kqx809sdukOIBbT/view)


<span class="qlang-split" data-lang="en"></span>


* frozen 2 kang with 2 euro *

> The currency of Kangland is the kang. In Kangcity the euro-kang exchange rate works like this: you get $1$ kang by paying $1{,}20$ euro, you get $1$ euro by paying $1$ kang and proportionally if you exchange lower-value coins. In both currencies, the minimum value coin is that of a cent; any amount of money can be changed and the result of the change, if not expressed by an integer of cents, is rounded to a cent for excess. I'm in Kangcity and I only have euros. Is there a (readable) way to buy a $2$ kang ice cream with only $2$ euros? If yes, what is the minimum number of exchanges that I can make?

**Answer:** si, 40
[[src_kangourou_2016_finale_cadet__QC2]]



<span class="atom-split" id="qc3" data-atom="qc3" data-title="Quesito C3" data-tags="topic_probabilita,topic_combinatoria,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*conviene quale?*

> L'alunno Fox per essere promosso deve sostenere, commettendo al massimo un errore, una prova a risposta chiusa. Può scegliere tra due buste:
> - la busta A che contiene $7$ quesiti, ciascuno con $2$ risposte,
> - la busta B che contiene $3$ quesiti, ciascuno con $6$ risposte.
> Fox è impreparato e pensa di rispondere a caso ai quesiti. Se vuole essere promosso, gli conviene scegliere la busta A o la B?

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** busta B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oqrEh6WLA1jn7meM9kqx809sdukOIBbT/view)


<span class="qlang-split" data-lang="en"></span>


* is suitable for which? *

> The Fox student must, to be promoted, make a maximum of one mistake and take a closed-ended test. You can choose between two envelopes: - envelope A containing $7$ questions, each with $2$ answers, - envelope B containing $3$ questions, each with $6$ answers. Fox is unprepared and thinks he's answering questions at random. If he wants a promotion, should he choose envelope A or envelope B?

**Answer:** busta B
[[src_kangourou_2016_finale_cadet__QC3]]



<span class="atom-split" id="qc4" data-atom="qc4" data-title="Quesito C4" data-tags="topic_aritmetica,topic_geometria_piana,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*diametro intero della moneta B*

![[src_kangourou_2016_finale_cadet__probC4.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!20] (0,0) circle (1.5);
  \draw[thick] (0,0) circle (1.5);
  \node at (0.5,-0.3) {A};
  \fill[gray!60] (0,2.2) circle (0.7);
  \draw[thick] (0,2.2) circle (0.7);
  \node at (0,2.2) {B};
  \draw[thick] (-0.08,1.5) -- (0.08,1.5);
\end{tikzpicture}
\end{document}
```

> In figura sono schematizzate due monete circolari sul bordo di ciascuna delle quali c'è una tacca; le due monete si toccano in corrispondenza delle tacche. Il diametro della moneta A, la più grande, misura $18$ mm. Se la moneta B inizia a ruotare attorno alla moneta A, rimanendole sempre a contatto, deve compiere esattamente due giri attorno alla A perché si ripresenti per la prima volta la situazione in figura (cioè le due monete vengano a toccarsi ancora in corrispondenza delle tacche). Sapendo che anche il diametro della moneta B misura un numero intero di millimetri, che cosa si può dire di tale lunghezza? (vedi figura)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** 4 o 12
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oqrEh6WLA1jn7meM9kqx809sdukOIBbT/view)


<span class="qlang-split" data-lang="en"></span>


* full diameter of coin B*

![[src_kangourou_2016_finale_cadet__probC4.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!20] (0,0) circle (1.5);
  \draw[thick] (0,0) circle (1.5);
  \node at (0.5,-0.3) {A};
  \fill[gray!60] (0,2.2) circle (0.7);
  \draw[thick] (0,2.2) circle (0.7);
  \node at (0,2.2) {B};
  \draw[thick] (-0.08,1.5) -- (0.08,1.5);
\end{tikzpicture}
\end{document}
```

> In the figure, two circular coins are outlined on the edge of each of which there is a tack; the two coins touch each other correspondingly with the tacks. The diameter of coin A, the largest, is $18$ mm. If the coin B starts to spin around the coin A, and remains in contact with it at all times, it must make exactly two revolutions around the coin A so that the situation in the figure is repeated for the first time (i.e. the two coins are touched again in a tie). Knowing that the diameter of coin B is also an integer of millimeters, what can be said about that length? (see figure)

**Answer:** 4 o 12
[[src_kangourou_2016_finale_cadet__QC4]]



<span class="atom-split" id="qc5" data-atom="qc5" data-title="Quesito C5" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*distanza CD*

![[src_kangourou_2016_finale_cadet__probC5.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[thick] (0,0) -- (4,0);
  \draw[thick] (2,0) arc (0:180:2);
  \fill[red] (0.268,1.0) circle (2pt);
  \node[left] at (0.268,1.0) {B};
  \fill[red] (1.316,1.880) circle (2pt);
  \node[above] at (1.316,1.880) {C};
  \node[below left] at (0,0) {A};
  \node[below right] at (4,0) {D};
\end{tikzpicture}
\end{document}
```

> In figura vedi una semi-circonferenza di diametro $8$. I punti $A$ e $D$ ne sono gli estremi, i punti $B$ e $C$ sono altri due punti della semi-circonferenza che distano $2$ rispettivamente dal punto $A$ e dal punto $B$. Quanto dista il punto $C$ dal punto $D$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 7
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oqrEh6WLA1jn7meM9kqx809sdukOIBbT/view)


<span class="qlang-split" data-lang="en"></span>


This is the total number of units in the unit.

![[src_kangourou_2016_finale_cadet__probC5.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[thick] (0,0) -- (4,0);
  \draw[thick] (2,0) arc (0:180:2);
  \fill[red] (0.268,1.0) circle (2pt);
  \node[left] at (0.268,1.0) {B};
  \fill[red] (1.316,1.880) circle (2pt);
  \node[above] at (1.316,1.880) {C};
  \node[below left] at (0,0) {A};
  \node[below right] at (4,0) {D};
\end{tikzpicture}
\end{document}
```

> In the figure you can see a semicircumference of $8$ diameter. The $A$ and $D$ points are the ends, the $B$ and $C$ points are two other points of the semicircle that are separated from $2$ by $A$ and $B$ respectively. What is the distance between $C$ and $D$? (see figure)

**Answer:** 7
[[src_kangourou_2016_finale_cadet__QC5]]



<span class="atom-split" id="qc6" data-atom="qc6" data-title="Quesito C6" data-tags="topic_aritmetica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*giorni di ponte in piu*

> Nella strana repubblica di Kang gli anni durano $3000$ giorni, numerati da $1$ a $3000$. I giorni festivi sono quelli il cui numero è divisibile per $6$ oppure è un numero primo; gli altri sono giorni lavorativi. Se venisse aggiunto ai giorni festivi anche ogni giorno di "ponte", cioè giorno lavorativo preceduto e seguito da un giorno festivo, quanti giorni festivi in più ci sarebbero in ogni anno?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1oqrEh6WLA1jn7meM9kqx809sdukOIBbT/view)


<span class="qlang-split" data-lang="en"></span>


*days of additional bridge *

> In the strange Kang Republic, years last $3000$ days, numbered from $1$ to $3000$. Holidays are those whose number is divisible by $6$ or is a prime number; the others are working days. If every "bridge" day, that is, a working day preceding and followed by a holiday, were added to the holidays, how many more holidays would there be in each year?

**Answer:** 2
[[src_kangourou_2016_finale_cadet__QC6]]
