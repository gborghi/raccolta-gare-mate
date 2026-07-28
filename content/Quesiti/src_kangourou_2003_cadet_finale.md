---
title: Kangourou 2003 - Finale nazionale Cadet (Mirabilandia)
tipo: gara
competition: Kangourou 2003 - Finale nazionale Cadet (Mirabilandia)
family: kangourou
year: '2003'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2003_cadet_finale"></div>



<span class="atom-split" id="qc1" data-atom="qc1" data-title="Quesito C1" data-tags="topic_combinatoria,topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Disposizione 1-9 con somme ai vertici 20*

![[src_kangourou_2003_cadet_finale__probC1.png]]

> La figura rappresenta un quadrato ottenuto accostando 9 quadrati più piccoli. Devi inserire tutti i numeri da $1$ a $9$, uno per ogni quadrato, in modo che la somma dei quattro numeri che circondano ciascuno dei vertici interni, segnati con un pallino nero, valga $20$. I numeri $3$ e $5$ sono già stati posizionati: inserisci i rimanenti. (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** disposizione
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/10KE9c6vQ4YhW-LfyJyirrjDRxujSek89/view)


<span class="qlang-split" data-lang="en"></span>


*Disposition 1-9 with sums at vertices 20*

![[src_kangourou_2003_cadet_finale__probC1.png]]

> The figure represents a square obtained by approximating 9 smaller squares. You must enter all the numbers from $1$ to $9$, one per square, so that the sum of the four numbers surrounding each of the inner vertices, marked with a black ball, is $20$. The numbers $3$ and $5$ have already been placed: enter the remaining ones. (see figure)

**Answer:** disposizione
[[src_kangourou_2003_cadet_finale__QC1]]



<span class="atom-split" id="qc2" data-atom="qc2" data-title="Quesito C2" data-tags="topic_combinatoria,method_cassetti,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo palle per 15 dello stesso colore*

> Una scatola contiene $100$ palle colorate. Di queste, $28$ sono rosse, $20$ verdi, $12$ gialle, $20$ blu, $10$ bianche e $10$ nere. Qual è il minimo numero di palle che è necessario estrarre per essere sicuri a priori di averne almeno $15$ dello stesso colore?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 75
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/10KE9c6vQ4YhW-LfyJyirrjDRxujSek89/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum balls by 15 of the same colour*

> A box contains $100$ coloured balls. Of these, $28$ are red, $20$ green, $12$ yellow, $20$ blue, $10$ white and $10$ black. What is the minimum number of balls that must be extracted to be sure that they have at least $15$ of the same colour?

**Answer:** 75
[[src_kangourou_2003_cadet_finale__QC2]]



<span class="atom-split" id="qc3" data-atom="qc3" data-title="Quesito C3" data-tags="topic_funzionali,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza iniziale del rettangolo magico*

> Un magico rettangolo di cuoio di Mirabilandia si riduce della metà in lunghezza e di un terzo in altezza ogni volta che esaudisce un desiderio del suo proprietario. Si sa che inizialmente l'altezza misurava $27$ centimetri e che, esauditi $3$ desideri, il rettangolo è diventato un quadrato. Quanto misurava inizialmente la lunghezza?

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 64
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/10KE9c6vQ4YhW-LfyJyirrjDRxujSek89/view)


<span class="qlang-split" data-lang="en"></span>


*Initial length of the magic rectangle*

> Mirabilandia's magical leather rectangle shrinks by half in length and by a third in height every time it fulfills a wish of its owner. It is known that at first the height measured $27$ centimeters and that, when $3$ desires were fulfilled, the rectangle became a square. How long was the original length?

**Answer:** 64
[[src_kangourou_2003_cadet_finale__QC3]]



<span class="atom-split" id="qc4" data-atom="qc4" data-title="Quesito C4" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma lunghezze dei 7 segmenti paralleli*

![[src_kangourou_2003_cadet_finale__probC4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,4);
  \coordinate (B) at (0,0);
  \coordinate (C) at (5,0);
  \draw[thick] (A) -- (B) -- (C) -- (A);
  \node[below left] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \foreach \h in {0.5, 1.5, 2.5, 3.5} {
    \draw[red, thick] (0, \h) -- ({5*(4-\h)/4}, \h);
  }
  \foreach \h in {1.0, 2.0, 3.0} {
    \draw[black, thick] (0, \h) -- ({5*(4-\h)/4}, \h);
  }
\end{tikzpicture}
\end{document}
```

> L'ipotenusa $AC$ di un triangolo rettangolo è suddivisa in $8$ segmenti uguali fra loro utilizzando $7$ segmenti paralleli al cateto $BC$, ciascuno avente un estremo sul cateto $AB$ e l'altro sull'ipotenusa. Il cateto $BC$ è lungo $10$ metri. Quanto misura la somma delle lunghezze di questi $7$ segmenti?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 35
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/10KE9c6vQ4YhW-LfyJyirrjDRxujSek89/view)


<span class="qlang-split" data-lang="en"></span>


*Summary lengths of the 7 parallel segments*

![[src_kangourou_2003_cadet_finale__probC4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,4);
  \coordinate (B) at (0,0);
  \coordinate (C) at (5,0);
  \draw[thick] (A) -- (B) -- (C) -- (A);
  \node[below left] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \foreach \h in {0.5, 1.5, 2.5, 3.5} {
    \draw[red, thick] (0, \h) -- ({5*(4-\h)/4}, \h);
  }
  \foreach \h in {1.0, 2.0, 3.0} {
    \draw[black, thick] (0, \h) -- ({5*(4-\h)/4}, \h);
  }
\end{tikzpicture}
\end{document}
```

> The $AC$ hypotenuse of a right triangle is divided into $8$ segments equal to each other using $7$ segments parallel to the $BC$ catheter, each having one end on the $AB$ catheter and the other on the hypotenuse. The length of the $BC$ catheter is $10$ meters. What is the sum of the lengths of these $7$ segments?

**Answer:** 35
[[src_kangourou_2003_cadet_finale__QC4]]



<span class="atom-split" id="qc5" data-atom="qc5" data-title="Quesito C5" data-tags="topic_aritmetica,topic_geometria_piana,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Tempo tra sovrapposizioni delle lancette*

> La lancetta delle ore di un orologio compie un giro completo in $12$ ore mentre quella dei minuti compie un giro completo in un'ora. Entrambe le lancette ruotano con continuità. Vi sono alcuni istanti in cui le due lancette sono sovrapposte. Quanto tempo intercorre tra uno di questi istanti ed il successivo?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** 1h5'27"3/11
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/10KE9c6vQ4YhW-LfyJyirrjDRxujSek89/view)


<span class="qlang-split" data-lang="en"></span>


*Time between the overlapping of the tiles*

> The hour hand of a clock completes a complete turn in $12$ hours while the minute hand completes a complete turn in one hour. Both hands rotate continuously. There are times when the two hands are overlapping. How long does it take between one of these moments and the next?

**Answer:** 1h5'27"3/11
[[src_kangourou_2003_cadet_finale__QC5]]



<span class="atom-split" id="qc6" data-atom="qc6" data-title="Quesito C6" data-tags="topic_aritmetica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Interi di 7 cifre divisibili per 2003*

> Quanti sono i numeri interi positivi di $7$ cifre divisibili per $2003$?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 4493
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/10KE9c6vQ4YhW-LfyJyirrjDRxujSek89/view)


<span class="qlang-split" data-lang="en"></span>


*Seven digit integers divisible by 2003*

> What are the positive integers of $7$ digits divisible by $2003$?

**Answer:** 4493
[[src_kangourou_2003_cadet_finale__QC6]]
