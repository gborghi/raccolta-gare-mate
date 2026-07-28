---
title: Kangourou Finale Cadet 2024
tipo: gara
competition: Kangourou Finale Cadet 2024
family: kangourou
year: '2024'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2024_cadet_finale"></div>



<span class="atom-split" id="qc1" data-atom="qc1" data-title="Quesito C1" data-tags="topic_logica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Si puo dedurre il significato di KAB dalla risposta*

> Nella strana lingua di Kanglandia, le parole "sì" e "no" si traducono in "KAB" e "BAK", ma non necessariamente in quest'ordine. Incontri una persona, della quale ti puoi fidare, che conosce sia l'italiano sia la lingua di Kanglandia e le chiedi: «È vero che KAB significa "sì"?». La persona risponde: "KAB". Puoi dedurre se "KAB" significa "sì" oppure "no"?

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/16FQ8MPWp2IWl5VhCnTs1Tu04wEUMR6UE/view)


<span class="qlang-split" data-lang="en"></span>


*The meaning of KAB can be deduced from the answer*

> In the strange Kanglandic language, the words "yes" and "no" translate to "KAB" and "BAK", but not necessarily in this order. You meet a person you can trust, who knows both the Italian and the Kangal language, and you ask them: Is it true that KAB means "yes"? The person answers, "KAB". Can you tell if "KAB" means "yes" or "no"?

[[src_kangourou_2024_cadet_finale__QC1]]



<span class="atom-split" id="qc2" data-atom="qc2" data-title="Quesito C2" data-tags="topic_aritmetica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Sono di piu le frazioni riducibili o irriducibili (1..12)*

> Considera tutte le possibili frazioni di valore minore di $1$, nelle quali sia il numeratore sia il denominatore sono numeri interi tra $1$ e $12$ inclusi. Sono di più le frazioni riducibili o quelle irriducibili?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/16FQ8MPWp2IWl5VhCnTs1Tu04wEUMR6UE/view)


<span class="qlang-split" data-lang="en"></span>


*More are reducing or non-reducing fractions (1..12) *

> Consider all possible fractions less than $1$ in which both the numerator and denominator are integers between $1$ and $12$ included. Are these more reducing fractions or irreducible fractions?

[[src_kangourou_2024_cadet_finale__QC2]]



<span class="atom-split" id="qc3" data-atom="qc3" data-title="Quesito C3" data-tags="topic_geometria_piana,method_casework,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Due triangoli con due lati e un'altezza uguali sono congruenti*

![[src_kangourou_2024_cadet_finale__probC3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (1,3);
  \coordinate (B) at (0,0);
  \coordinate (C) at (1.5,0);
  \coordinate (D) at (4,0);
  \fill[blue!40] (A) -- (C) -- (D) -- cycle;
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (C) -- (D) -- cycle;
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Sono dati due triangoli. Le lunghezze di due dei lati dell'uno coincidono con le lunghezze di due dei lati dell'altro e l'altezza relativa al terzo lato di uno coincide con quella relativa al terzo lato dell'altro. I due triangoli risultano necessariamente congruenti? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/16FQ8MPWp2IWl5VhCnTs1Tu04wEUMR6UE/view)


<span class="qlang-split" data-lang="en"></span>


*Two triangles with two sides and equal height are congruent*

![[src_kangourou_2024_cadet_finale__probC3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (1,3);
  \coordinate (B) at (0,0);
  \coordinate (C) at (1.5,0);
  \coordinate (D) at (4,0);
  \fill[blue!40] (A) -- (C) -- (D) -- cycle;
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (C) -- (D) -- cycle;
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Two triangles are given. The lengths of two of the sides of one shall coincide with the lengths of two of the sides of the other and the height relative to the third side of one shall coincide with that relative to the third side of the other. Are the two triangles necessarily congruent? (see figure)

[[src_kangourou_2024_cadet_finale__QC3]]



<span class="atom-split" id="qc4" data-atom="qc4" data-title="Quesito C4" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minima distanza antenna dall'abitazione piu lontana*

> Tre abitazioni sono ai vertici di un triangolo isoscele i cui lati misurano $80$, $80$ e $120$ metri. Utilizzando un'unica antenna, si vuole rendere possibile la ricezione di internet nelle tre abitazioni. Qual è, in metri, la minima distanza che può avere l'antenna dall'abitazione che le risulterà più lontana?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/16FQ8MPWp2IWl5VhCnTs1Tu04wEUMR6UE/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum antenna distance from the most distant dwelling*

> Three dwellings are at the vertices of an isosceles triangle whose sides measure $80$, $80$ and $120$ meters. Using a single antenna, we want to make it possible to receive internet in the three houses. In metres, what is the minimum distance the antenna can have from the home that will make it the furthest away?

[[src_kangourou_2024_cadet_finale__QC4]]



<span class="atom-split" id="qc5" data-atom="qc5" data-title="Quesito C5" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Perche il risultato di Marco e sempre 1089*

> Marco prova ad eseguire le seguenti operazioni: sceglie un numero di tre cifre tutte diverse fra loro, scrive il numero che ottiene invertendo l'ordine delle cifre e calcola la differenza fra il maggiore e il minore dei due numeri. Se questa differenza ha solo due cifre, premette a questa differenza la cifra $0$, altrimenti la lascia inalterata. Infine, somma al numero così ottenuto il numero che ricava invertendo l'ordine delle sue cifre. Quale risultato ottiene? La nostra domanda lascia intendere che il risultato non dipende dal numero che Marco ha scelto inizialmente: spiega il motivo.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/16FQ8MPWp2IWl5VhCnTs1Tu04wEUMR6UE/view)


<span class="qlang-split" data-lang="en"></span>


Because the result of Marco is always 1089

> Mark tries to perform the following operations: he chooses a number of three digits all different from each other, writes the number he gets by reversing the order of the digits, and calculates the difference between the greater and the lesser of the two numbers. If this difference has only two digits, press $0$ to this difference, otherwise it remains unchanged. Finally, it adds to the number thus obtained the number it gets by reversing the order of its digits. What is the result? Our question suggests that the outcome does not depend on the number initially chosen by Marco.

[[src_kangourou_2024_cadet_finale__QC5]]



<span class="atom-split" id="qc6" data-atom="qc6" data-title="Quesito C6" data-tags="topic_combinatoria,topic_geometria_analitica,method_estremalita,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di rette per coprire i vertici dei quadretti*

> Su un enorme foglio quadrato $2024 \times 2024$ di carta a quadretti si vogliono tracciare delle rette, nessuna parallela a quelle che delimitano i quadretti, in modo che tutti i vertici dei quadretti che appaiono sul foglio vengano coperti da almeno una retta. Qual è il più piccolo numero di rette che è sufficiente tracciare?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/16FQ8MPWp2IWl5VhCnTs1Tu04wEUMR6UE/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of lines to cover the vertices of the squares*

> On a huge square sheet of square paper you want to draw lines, none parallel to the ones that delimit the squares, so that all the vertices of the squares that appear on the sheet are covered by at least one line. What is the smallest number of lines that is sufficient to trace?

[[src_kangourou_2024_cadet_finale__QC6]]
