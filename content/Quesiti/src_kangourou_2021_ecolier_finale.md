---
title: Kangourou 2021 Ecolier - finale
tipo: gara
competition: Kangourou 2021 Ecolier - finale
family: kangourou
year: '2021'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2021_ecolier_finale"></div>



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_funzionali,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minuti per riempire il primo recipiente di amebe*

> Le amebe sono protozoi che si riproducono in tre minuti, cioè ogni 3 minuti ogni
> ameba ne genera un’altra identica. Nessuna ameba muore finché ha spazio per riprodursi. Due
> recipienti di uguale capacità contengono inizialmente il primo un’ameba, il secondo 8 amebe. Il
> secondo recipiente si trova pieno di amebe dopo esattamente 3 ore. Quanti minuti impiega a
> riempirsi il primo recipiente?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 189
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YdpoeeTPLdwKRizgl9GfJGyu_n9RXwTA/view)


<div class="qlang-split" data-lang="en"></div>


*Minutes to fill the first container of amoeba*

> Amoebas are protozoa that reproduce in three minutes, that is, every 3 minutes each
> amoeba generates another identical one. No amoeba dies as long as it has space to reproduce. Two
> containers of equal capacity initially contain, the first one amoeba, the second 8 amoebas. The
> second container is found full of amoebas after exactly 3 hours. How many minutes does it take to
> fill the first container?

**Answer:** 189
[[Quesiti/src_kangourou_2021_ecolier_finale#q03|src_kangourou_2021_ecolier_finale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_casework,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Correggere 25x2=211 con +1/-1 sulle cifre*

> L’uguaglianza 25 × 2 = 211 è falsa, ma la puoi trasformare in un’uguaglianza
> corretta aggiungendo 1 ad alcune sue cifre e togliendo 1 alle altre. Scrivi questa nuova uguaglianza
> corretta, motivando.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 34x3=102
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YdpoeeTPLdwKRizgl9GfJGyu_n9RXwTA/view)


<div class="qlang-split" data-lang="en"></div>


*Correct 25x2=211 with +1/-1 on the digits*

> The equality 25 × 2 = 211 is false, but you can turn it into a correct
> equality by adding 1 to some of its digits and subtracting 1 from the others. Write this new correct
> equality, giving reasons.

**Answer:** 34x3=102
[[Quesiti/src_kangourou_2021_ecolier_finale#q04|src_kangourou_2021_ecolier_finale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_congruenze,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Zeri finali del prodotto dei pari tra 1 e 101*

> Immagina di avere moltiplicato fra loro tutti i numeri interi pari compresi fra 1
> e 101. Con quante cifre 0 termina il prodotto?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 12
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YdpoeeTPLdwKRizgl9GfJGyu_n9RXwTA/view)


<div class="qlang-split" data-lang="en"></div>


*Final zeros of the product of even numbers between 1 and 101*

> Imagine you have multiplied together all the even integers between 1
> and 101. With how many digits 0 does the product end?

**Answer:** 12
[[Quesiti/src_kangourou_2021_ecolier_finale#q05|src_kangourou_2021_ecolier_finale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_logica,method_invarianti,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Rendere uguali 5 numeri aggiungendo 1 a coppie adiacenti*

![[src_kangourou_2021_ecolier_finale__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\R{2}
  \draw (0,0) circle (\R);
  \fill (90:\R) circle (2.5pt) node[above=2pt] {1};
  \fill (18:\R) circle (2.5pt) node[right=2pt] {2};
  \fill (-54:\R) circle (2.5pt) node[right=2pt] {3};
  \fill (-126:\R) circle (2.5pt) node[left=2pt] {4};
  \fill (162:\R) circle (2.5pt) node[left=2pt] {5};
\end{tikzpicture}
\end{document}
```

> Bianca ha 20 conigli: a 9 dà da mangiare carote tutti i giorni, agli altri solo un giorno sì e uno no, non necessariamente a tutti lo stesso giorno. Ieri hanno mangiato carote 16 conigli. Quanti conigli mangeranno carote oggi?
>
> - **(A)** 9
> - **(B)** 13
> - **(C)** 14
> - **(D)** 15
> - **(E)** Le informazioni sono insufficienti.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1YdpoeeTPLdwKRizgl9GfJGyu_n9RXwTA/view)


<div class="qlang-split" data-lang="en"></div>


*Getting 5 numbers equal by adding 1 to adjacent pairs*

![[src_kangourou_2021_ecolier_finale__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\R{2}
  \draw (0,0) circle (\R);
  \fill (90:\R) circle (2.5pt) node[above=2pt] {1};
  \fill (18:\R) circle (2.5pt) node[right=2pt] {2};
  \fill (-54:\R) circle (2.5pt) node[right=2pt] {3};
  \fill (-126:\R) circle (2.5pt) node[left=2pt] {4};
  \fill (162:\R) circle (2.5pt) node[left=2pt] {5};
\end{tikzpicture}
\end{document}
```

> Bianca has 20 rabbits: she feeds nine of them carrots every day, the others only one day yes and one no, not necessarily all on the same day. Yesterday 16 rabbits ate carrots. How many rabbits will eat carrots today?
>
> - **(A)** 9
> - **(B)** 13
> - **(C)** 14
> - **(D)** 15
> - **(E)** The information is insufficient.

[[Quesiti/src_kangourou_2021_ecolier_finale#q06|src_kangourou_2021_ecolier_finale__Q06]]
