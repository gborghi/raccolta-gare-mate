---
title: China Mathematical Olympiad 2004
tipo: gara
competition: China Mathematical Olympiad 2004
family: cmo
year: '2004'
level: China Mathematical Olympiad
---
<div class="atom-reader" data-gara="Quesiti/src_cn_cmo_2004"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,method_trigonometria,method_simmetria,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Three convex quadrilaterals with ratio and parallelism conditions; find ratio in terms of lambda*

> Let $EFGH$, $ABCD$ and $E_1F_1G_1H_1$ be three convex quadrilaterals, satisfying: (1) Points $E$, $F$, $G$ and $H$ lie on sides $AB$, $BC$, $CD$ and $DA$, respectively, and $\frac{AE}{EB} \cdot \frac{BF}{FC} \cdot \frac{CG}{GD} \cdot \frac{DH}{HA} = 1$; (2) Points $A$, $B$, $C$ and $D$ lie on sides $H_1E_1$, $E_1F_1$, $F_1G_1$ and $G_1H_1$, respectively, and $E_1F_1 \parallel EF$, $F_1G_1 \parallel FG$, $G_1H_1 \parallel GH$, $H_1E_1 \parallel HE$. Suppose $\frac{E_1A}{AH_1} = \lambda$. Find the expression of $\frac{F_1C}{CG_1}$ in terms of $\lambda$.

![[src_cn_cmo_2004__Q01.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Trigonometria]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Geometria|Geometry]]
**Risposta:** $\frac{F_1C}{CG_1} = \lambda$
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1Bie5BlTQQyjdGifDyOeZ-kZzNFzUwbxT/view)

> [!warning] Estratto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Tre quadrilateri convessi con condizioni di rapporto e parallelismo; determinare il rapporto in funzione di lambda*

> Siano $EFGH$, $ABCD$ e $E_1F_1G_1H_1$ tre quadrilateri convessi, tali che: (1) i punti $E$, $F$, $G$ e $H$ giacciono rispettivamente sui lati $AB$, $BC$, $CD$ e $DA$, e su $\frac{AE}{EB} \cdot \frac{BF}{FC} \cdot \frac{CG}{GD} \cdot \frac{DH}{HA} = 1$; (2) i punti $A$, $B$, $C$ e $D$ giacciono rispettivamente sui lati $H_1E_1$, $E_1F_1$, $F_1G_1$ e $G_1H_1$, e su $E_1F_1 \parallel EF$, $F_1G_1 \parallel FG$, $G_1H_1 \parallel GH$, $H_1E_1 \parallel HE$. Si supponga $\frac{E_1A}{AH_1} = \lambda$. Determinare l'espressione di $\frac{F_1C}{CG_1}$ in funzione di $\lambda$.

![[src_cn_cmo_2004__Q01.png]]

> [!warning] Estratto da verificare con la fonte.


**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Trigonometria]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Geometria]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_algebra,topic_aritmetica,topic_funzionali,method_ricorsione,method_induzione,method_casework,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Sequence with floor-function recurrence; find closed form in terms of n and c*

> Let $c$ be a positive integer, and a number sequence $x_1, x_2, \ldots$ satisfy $x_1 = c$ and
> $$x_n = x_{n-1} + \left\lfloor \frac{2(x_{n-1} - 1)}{n} \right\rfloor + 1, \quad n = 2, 3, \ldots,$$
> where $\lfloor x \rfloor$ denotes the largest integer not greater than $x$. Determine the expression of $x_n$ in terms of $n$ and $c$. (posed by Huang Yumin)

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Risposta:** $x_n = \frac{c-1}{6}(n+1)(n+2)+1 \text{ for } c\equiv1\pmod3; \ x_n=\frac{c-2}{6}(n+1)(n+2)+n+1 \text{ for } c\equiv2\pmod3; \ x_n=\frac{c-3}{6}(n+1)(n+2)+\left\lfloor\frac{(n+2)^2}{4}\right\rfloor+1 \text{ for } c\equiv0\pmod3$
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1Bie5BlTQQyjdGifDyOeZ-kZzNFzUwbxT/view)

> [!warning] Estratto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Successione con ricorrenza della funzione a pavimento; trovare la forma chiusa in termini di n e c*

> Sia $c$ un numero intero positivo, e sia la successione numerica $x_1, x_2, \ldots$ tale che $x_1 = c$ e
> $$x_n = x_{n-1} + \left\lfloor \frac{2(x_{n-1} - 1)}{n} \right\rfloor + 1, \quad n = 2, 3, \ldots,$$
> dove $\lfloor x \rfloor$ denota il più grande intero non superiore a $x$. Determinare l'espressione di $x_n$ in funzione di $n$ e $c$. (proposto da Huang Yumin)

> [!warning] Estratto da verificare con la fonte.


**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_geometria_piana,method_estremalita,method_casework,skill_ragionamento_geometrico,skill_conteggio_sistematico,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Minimum number of points so that the set has a convex heptagon and every convex pentagon contains an interior point*

> Let $M$ be a set consisting of $n$ points in the plane, and satisfying: (1) there exist 7 points in $M$ which constitute the vertices of a convex heptagon; (2) if for any 5 points in $M$ which constitute the vertices of a convex pentagon, there then is a point in $M$ which lies in the interior of the pentagon. Find the minimum value of $n$. (posed by Leng Gangsong)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 11
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1Bie5BlTQQyjdGifDyOeZ-kZzNFzUwbxT/view)

> [!warning] Estratto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Numero minimo di punti affinché l'insieme abbia un eptagono convesso e ogni pentagono convesso contenga un punto interno*

> Sia $M$ un insieme costituito da $n$ punti nel piano, e tale che: (1) esistono 7 punti in $M$ che costituiscono i vertici di un eptagono convesso; (2) se per qualsiasi insieme di 5 punti in $M$ che costituiscono i vertici di un pentagono convesso, allora esiste un punto in $M$ che giace nell'interno del pentagono. Determinare il valore minimo di $n$. (proposto da Leng Gangsong)

> [!warning] Estratto da verificare con la fonte.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,topic_disuguaglianze,topic_funzionali,method_induzione,method_estremalita,method_disuguaglianze,method_fattorizzazione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Unique real sequence satisfying boundary and recurrence; prove bound on terms*

> For a given real number $a$ and a positive integer $n$, prove that:
> 
> (1) there exists exactly one sequence of real numbers $x_0, x_1, \ldots, x_n, x_{n+1}$ such that
> $$\begin{cases} x_0 = x_{n+1} = 0, \\ \frac{1}{2}(x_{i+1} + x_{i-1}) = x_i + x_i^3 - a^3, \quad i = 1, 2, \ldots, n; \end{cases}$$
> 
> (2) the sequence $x_0, x_1, \ldots, x_n, x_{n+1}$ in (1) satisfies $|x_i| \le |a|$, $i = 0, 1, \ldots, n+1$.

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_induzione|Induzione]], [[method_estremalita|Estremalità]], [[method_disuguaglianze|Disuguaglianze]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1Bie5BlTQQyjdGifDyOeZ-kZzNFzUwbxT/view)

> [!warning] Estratto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Successione reale unica che soddisfa le condizioni al contorno e la relazione di ricorrenza; dimostrare una maggiorazione per i termini*

> Dato un numero reale $a$ e un numero intero positivo $n$, dimostrare che:
>
> (1) esiste esattamente una successione di numeri reali $x_0, x_1, \ldots, x_n, x_{n+1}$ tale che
> $$\begin{cases} x_0 = x_{n+1} = 0, \\ \frac{1}{2}(x_{i+1} + x_{i-1}) = x_i + x_i^3 - a^3, \quad i = 1, 2, \ldots, n; \end{cases}$$
>
> (2) la successione $x_0, x_1, \ldots, x_n, x_{n+1}$ in (1) soddisfa $|x_i| \le |a|$, $i = 0, 1, \ldots, n+1$.

> [!warning] Estratto da verificare con la fonte.


**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_estremalita|Estremalità]], [[method_disuguaglianze|Disuguaglianze]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_disuguaglianze,topic_aritmetica,method_disuguaglianze,method_telescoping,skill_manipolazione_algebrica,skill_stima,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Prove sum-of-reciprocals-squared inequality given strictly increasing integers with sum of reciprocals at most 1*

> For a given positive integer $n \ge 2$, suppose positive integers $a_i$ ($i = 1, 2, \ldots, n$) satisfy $a_1 < a_2 < \cdots < a_n$ and $\displaystyle\sum_{i=1}^{n} \frac{1}{a_i} \le 1$. Prove that, for any real number $x$, the following inequality holds,
> $$\left(\sum_{i=1}^{n} \frac{1}{a_i^2 + x^2}\right)^2 \le \frac{1}{2} \cdot \frac{1}{a_1(a_1 - 1) + x^2}.$$
> (posed by Li Shenghong)

**Topic:** [[topic_disuguaglianze|Disuguaglianze]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_telescoping|Telescoping]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1Bie5BlTQQyjdGifDyOeZ-kZzNFzUwbxT/view)

> [!warning] Estratto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Dimostrazione della disuguaglianza sulla somma dei quadrati dei reciproci, dati numeri interi strettamente crescenti con somma dei reciproci al più uguale a 1*

> Sia $n \ge 2$ un numero intero positivo dato; si supponga che i numeri interi positivi $a_i$ ($i = 1, 2, \ldots, n$) soddisfino $a_1 < a_2 < \cdots < a_n$ e $\displaystyle\sum_{i=1}^{n} \frac{1}{a_i} \le 1$. Dimostrare che, per ogni numero reale $x$, vale la seguente disuguaglianza:
> $$\left(\sum_{i=1}^{n} \frac{1}{a_i^2 + x^2}\right)^2 \le \frac{1}{2} \cdot \frac{1}{a_1(a_1 - 1) + x^2}.$$
> (proposto da Li Shenghong)

> [!warning] Estratto da verificare con la fonte.

**Topic:** [[topic_disuguaglianze|Disuguaglianze]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_telescoping|Telescoping]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,topic_combinatoria,method_induzione,method_fattorizzazione,skill_modellizzazione,skill_manipolazione_algebrica,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Prove all but finitely many positive integers are sums of 2004 strictly increasing integers with divisibility chain*

> Prove that every positive integer $n$, except a finite number of them, can be represented as a sum of 2004 positive integers: $n = a_1 + a_2 + \cdots + a_{2004}$, where $1 \le a_1 < a_2 < \cdots < a_{2004}$, and $a_i \mid a_{i+1}$, $i = 1, 2, \ldots, 2003$. (posed by Chen Yonggao)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_induzione|Induzione]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1Bie5BlTQQyjdGifDyOeZ-kZzNFzUwbxT/view)

> [!warning] Estratto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Dimostrare che tutti gli interi positivi tranne un numero finito sono somme di 2004 interi strettamente crescenti con catena di divisibilità*

> Dimostrare che ogni intero positivo $n$, ad eccezione di un numero finito di essi, può essere rappresentato come somma di 2004 interi positivi: $n = a_1 + a_2 + \cdots + a_{2004}$, dove $1 \le a_1 < a_2 < \cdots < a_{2004}$, e $a_i \mid a_{i+1}$, $i = 1, 2, \ldots, 2003$. (proposto da Chen Yonggao)

> [!warning] Estratto da verificare con la fonte.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_induzione|Induzione]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
