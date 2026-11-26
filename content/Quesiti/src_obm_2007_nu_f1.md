---
title: Olimpíada Brasileira de Matemática 2007 — Nível Universitário — Fase 1
tipo: gara
competition: Olimpíada Brasileira de Matemática 2007 — Nível Universitário — Fase 1
family: obm
year: '2007'
level: OBM Nível Universitário
---
<div class="atom-reader" data-gara="Quesiti/src_obm_2007_nu_f1"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_probabilita,method_ricorsione,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Probability of ever reaching exactly n points in a coin game; closed form*

> A fair coin is tossed repeatedly: each heads adds one point and a tails stops the accumulation. Let $p_n$ be the probability of, at some moment, having exactly $n$ points. Clearly $p_0 = 1$ and $p_1 = \tfrac12$. The only way never to reach $n$ points is to reach $n-1$ points and then get tails, so $1 - p_n = \dfrac{p_{n-1}}{2}$. Determine $p_n$ for every nonnegative integer $n$. (Statement reconstructed from the official solution; the closed form obtained is $p_n = \dfrac{2}{3} + \dfrac{1}{3}\left(-\dfrac12\right)^n$.)

**Topic:** [[topic_probabilita|Probabilità]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** $p_n = 2/3 + (1/3)(-1/2)^n$
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lOJCEY5_AKOF2CG2hkgyD8fhqvhk5Tjs/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Probabilità di raggiungere esattamente n punti, in qualsiasi momento, in un gioco con le monete; forma chiusa*

> Si lancia ripetutamente una moneta equa: ogni testa aggiunge un punto e ogni croce interrompe l'accumulo. Sia $p_n$ la probabilità di avere esattamente $n$ punti in qualche momento. Chiaramente $p_0 = 1$ e $p_1 = \tfrac12$. L'unico modo per non raggiungere mai $n$ punti è raggiungere $n-1$ punti e poi ottenere croce, quindi $1 - p_n = \dfrac{p_{n-1}}{2}$. Determinare $p_n$ per ogni intero non negativo $n$. (Enunciato ricostruito dalla soluzione ufficiale; la forma chiusa ottenuta è $p_n = \dfrac{2}{3} + \dfrac{1}{3}\left(-\dfrac12\right)^n$.)

> [!warning] Estratto/tradotto: da verificare con la fonte.

**Topic:** [[topic_probabilita|Probabilità]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]

[[Quesiti/src_obm_2007_nu_f1#q01|src_obm_2007_nu_f1__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_funzionali,topic_trigonometria,method_trigonometria,skill_manipolazione_algebrica,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Minimal period of f equals 2pi/m, m = gcd of indices with nonzero coefficients*

> Let $f$ be the function $f(x) = \sum_{k=1}^{n}\left(\dfrac{a_k}{2}z^k + \dfrac{a_k}{2}z^{-k}\right)$ with $z = e^{ix}$. Determine the smallest positive period of $f$. (The official solution shows that $\dfrac{2\pi}{m}$ is a period and is indeed the smallest one: writing $z = e^{ix}$ and $w = e^{ip}$, $f(x+p) = \sum_{k=1}^{n}\left(\dfrac{a_k w^k}{2}z^k + \dfrac{a_k w^{-k}}{2}z^{-k}\right)$; two rational functions equal for all complex numbers of modulus $1$ have equal coefficients, so $a_k w^k = a_k$ for $k=1,\ldots,n$; hence whenever $a_k \neq 0$ one needs $\dfrac{kp}{2\pi}\in\mathbb{Z}$, and $p$ must be a multiple of $\dfrac{2\pi}{m}$, where $m = \gcd\{k : a_k \neq 0\}$.) Statement reconstructed from the official solution.

**Topic:** [[topic_funzionali|Equazioni funzionali]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** 2*pi/m
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lOJCEY5_AKOF2CG2hkgyD8fhqvhk5Tjs/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Il periodo minimo di f è uguale a 2π/m, dove m è il mcm degli indici con coefficienti non nulli*

> Sia $f$ la funzione $f(x) = \sum_{k=1}^{n}\left(\dfrac{a_k}{2}z^k + \dfrac{a_k}{2}z^{-k}\right)$ con $z = e^{ix}$. Determinare il più piccolo periodo positivo di $f$. (La soluzione ufficiale mostra che $\dfrac{2\pi}{m}$ è un periodo ed è effettivamente il più piccolo: scrivendo $z = e^{ix}$ e $w = e^{ip}$, $f(x+p) = \sum_{k=1}^{n}\left(\dfrac{a_k w^k}{2}z^k + \dfrac{a_k w^{-k}}{2}z^{-k}\right)$; due funzioni razionali uguali per tutti i numeri complessi di modulo $1$ hanno coefficienti uguali, quindi $a_k w^k = a_k$ per $k=1,\ldots,n$; pertanto, ogni volta che $a_k \neq 0$, occorre $\dfrac{kp}{2\pi}\in\mathbb{Z}$, e $p$ deve essere un multiplo di $\dfrac{2\pi}{m}$, dove $m = \gcd\{k : a_k \neq 0\}$.) Enunciato ricostruito a partire dalla soluzione ufficiale.

> [!warning] Estratto/tradotto: da verificare con la fonte.

**Topic:** [[topic_funzionali|Equazioni funzionali]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]], [[Geometria]]

[[Quesiti/src_obm_2007_nu_f1#q02|src_obm_2007_nu_f1__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_solida,topic_geometria_analitica,method_coordinate,skill_modellizzazione,skill_manipolazione_algebrica,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Volume of a solid built from an elliptic paraboloid and an ellipsoid cap*

> Let $A(a)$ be the area of the ellipse $3x^2 + 2y^2 \le a$. Its semi-axes are $\sqrt{\dfrac{a}{3}}$ and $\sqrt{\dfrac{a}{2}}$, so $A(a) = \dfrac{\pi a}{\sqrt{6}}$. The solid of the problem can be described as the disjoint union of
> $$\{(x,y,z) : 3x^2 + 2y^2 \le z \le 0\}\ \text{ with }\ z \le b,\ b = \dfrac{\sqrt{21}-1}{10},$$
> and
> $$\{(x,y,z) : 3x^2 + 2y^2 \le 1 - 5z^2\}\ \text{ with }\ z \le \dfrac{1}{\sqrt{5}}.$$
> Compute its volume
> $$v = \int_{0}^{b} A(z)\,dz + \int_{b}^{1/\sqrt{5}} A(1 - 5z^2)\,dz = \int_{0}^{b}\dfrac{\pi z}{\sqrt{6}}\,dz + \int_{b}^{1/\sqrt{5}}\dfrac{\pi}{\sqrt{6}}(1 - 5z^2)\,dz.$$
> (Statement reconstructed from the official solution; some details describing the solid are partly illegible in the source. The value obtained is $v = \dfrac{\pi}{\sqrt{6}}\left(\dfrac{31}{300} + \dfrac{2\sqrt{5}}{15} - \dfrac{7\sqrt{21}}{100}\right)$.)

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Coordinate]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** v = (pi/sqrt(6))(31/300 + 2*sqrt(5)/15 - 7*sqrt(21)/100)
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lOJCEY5_AKOF2CG2hkgyD8fhqvhk5Tjs/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Volume di un solido formato da un paraboloide ellittico e da un cappuccio ellissoidale*

> Sia $A(a)$ l'area dell'ellisse $3x^2 + 2y^2 \le a$. I suoi semiassi sono $\sqrt{\dfrac{a}{3}}$ e $\sqrt{\dfrac{a}{2}}$, quindi $A(a) = \dfrac{\pi a}{\sqrt{6}}$. Il solido del problema può essere descritto come l'unione disgiunta di
> $$\{(x,y,z) : 3x^2 + 2y^2 \le z \le 0\}\ \text{ with }\ z \le b,\ b = \dfrac{\sqrt{21}-1}{10},$$
> e
> $$\{(x,y,z) : 3x^2 + 2y^2 \le 1 - 5z^2\}\ \text{ with }\ z \le \dfrac{1}{\sqrt{5}}.$$
> Calcola il suo volume
> $$v = \int_{0}^{b} A(z)\,dz + \int_{b}^{1/\sqrt{5}} A(1 - 5z^2)\,dz = \int_{0}^{b}\dfrac{\pi z}{\sqrt{6}}\,dz + \int_{b}^{1/\sqrt{5}}\dfrac{\pi}{\sqrt{6}}(1 - 5z^2)\,dz.$$
> (Dichiarazione ricostruita dalla soluzione ufficiale; alcuni dettagli che descrivono il solido sono parzialmente illeggibili nella fonte. Il valore ottenuto è $v = \dfrac{\pi}{\sqrt{6}}\left(\dfrac{31}{300} + \dfrac{2\sqrt{5}}{15} - \dfrac{7\sqrt{21}}{100}\right)$.)

> [!warning] Estratto/tradotto: da verificare con la fonte.

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Coordinate]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]

[[Quesiti/src_obm_2007_nu_f1#q03|src_obm_2007_nu_f1__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_congruenze,method_fattorizzazione,skill_manipolazione_algebrica,skill_casework_accurato,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*If 4a^2 is a perfect n-th power then |a| is a perfect n-th power*

> Suppose that $4a^2$ is a perfect $n$-th power. Prove that $|a|$ is also a perfect $n$-th power. (Official solution sketch: write $|a| = 2^{c_1}\cdot 3^{c_2}\cdots p^{c_r}\cdots$ and prove each exponent $c_p$ is a multiple of $n$. If $a = b\cdot p^c$ with $\gcd(b,p)=1$ then $\gcd(b,p)=1$, and from $c^p\,p^{c}\equiv b\cdot p^{c}\pmod{p^{nd}}$ one gets $nd = c_p$, so $|a|$ is a perfect $n$-th power. It remains to treat the case $n$ even and $a > 0$: assume by contradiction $a < 0$ and write $4a^2 = -2^{nd}\hat b$ with $\hat b < 0$; since $a^2$, $-2^{nd}$ are squares modulo $4$, $\hat b$ would also have to be one, and $-\hat b$ being a perfect square gives $1 < \hat b$ with $\hat b \equiv -\hat b \pmod{2^{nd}}$, so $\hat b$ is a square $\equiv$ impossible value modulo $4$ — contradiction.) Statement reconstructed from the official solution; several congruence details are partly illegible in the source.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lOJCEY5_AKOF2CG2hkgyD8fhqvhk5Tjs/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Se 4a^2 è una potenza n-esima perfetta, allora |a| è una potenza n-esima perfetta*

> Supponiamo che $4a^2$ sia una potenza perfetta di grado $n$. Dimostrare che $|a|$ è anch'essa una potenza perfetta di grado $n$. (Abbozzo di soluzione ufficiale: scrivere $|a| = 2^{c_1}\cdot 3^{c_2}\cdots p^{c_r}\cdots$ e dimostrare che ogni esponente $c_p$ è un multiplo di $n$. Se $a = b\cdot p^c$ con $\gcd(b,p)=1$, allora $\gcd(b,p)=1$, e da $c^p\,p^{c}\equiv b\cdot p^{c}\pmod{p^{nd}}$ si ottiene $nd = c_p$, quindi $|a|$ è una potenza perfetta di grado $n$. Resta da trattare il caso in cui $n$ è pari e $a > 0$: si supponga, per assurdo, $a < 0$ e si scriva $4a^2 = -2^{nd}\hat b$ con $\hat b < 0$; poiché $a^2$, $-2^{nd}$ sono quadrati modulo $4$, anche $\hat b$ dovrebbe esserlo, e il fatto che $-\hat b$ sia un quadrato perfetto dà $1 < \hat b$ con $\hat b \equiv -\hat b \pmod{2^{nd}}$, quindi $\hat b$ è un quadrato $\equiv$ valore impossibile modulo $4$ — contraddizione.) Enunciato ricostruito dalla soluzione ufficiale; diversi dettagli di congruenza sono in parte illeggibili nella fonte.

> [!warning] Estratto/tradotto: da verificare con la fonte.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Aritmetica e Teoria dei Numeri]]

[[Quesiti/src_obm_2007_nu_f1#q04|src_obm_2007_nu_f1__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_algebra,topic_insiemi_funzioni,method_simmetria,skill_manipolazione_algebrica,skill_astrazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Eigenvalues of a differential/linear operator on degree-n binary forms are 2k-n*

> Consider the linear operator $M'$ acting on $A(a_0, a_1, \ldots, a_n) \in \mathbb{R}^{n+1}$. Show that its eigenvalues are $n, n-2, n-4, \ldots, -n$, that is, $2k - n$ for $k = 0, 1, \ldots, n$, and exhibit its eigenvectors. (Official solution: interpret the vector $(a_0, a_1, \ldots, a_n) \in \mathbb{R}^{n+1}$ as the polynomial $P = a_0 x^n + a_1 x^{n-1} y + \cdots + a_n y^n$. The operator $M'(a_0, \ldots, a_n)$ corresponds to $x\,\dfrac{\partial P}{\partial x} + y\,\dfrac{\partial P}{\partial y}$. With $u = x + y$, $v = x - y$ this becomes $u\,\dfrac{\partial P}{\partial u} + v\,\dfrac{\partial P}{\partial v}$, and $\left(u\,\dfrac{\partial}{\partial u} - v\,\dfrac{\partial}{\partial v}\right)(u^k v^{n-k}) = (2k - n)\,u^k v^{n-k}$, so $2k - n$ is the eigenvalue with eigenvector $u^k v^{n-k}$.) Statement reconstructed from the official solution.

**Topic:** [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_simmetria|Simmetria]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]]
**Risposta:** eigenvalues 2k-n, k=0,...,n
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lOJCEY5_AKOF2CG2hkgyD8fhqvhk5Tjs/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Gli autovalori di un operatore differenziale/lineare sulle forme binarie di grado n sono 2k-n*

> Si consideri l'operatore lineare $M'$ che agisce su $A(a_0, a_1, \ldots, a_n) \in \mathbb{R}^{n+1}$. Si dimostri che i suoi autovalori sono $n, n-2, n-4, \ldots, -n$, cioè $2k - n$ per $k = 0, 1, \ldots, n$, e si esibiscano i suoi autovettori. (Soluzione ufficiale: si interpreti il vettore $(a_0, a_1, \ldots, a_n) \in \mathbb{R}^{n+1}$ come il polinomio $P = a_0 x^n + a_1 x^{n-1} y + \cdots + a_n y^n$. L'operatore $M'(a_0, \ldots, a_n)$ corrisponde a $x\,\dfrac{\partial P}{\partial x} + y\,\dfrac{\partial P}{\partial y}$. Con $u = x + y$, $v = x - y$, ciò diventa $u\,\dfrac{\partial P}{\partial u} + v\,\dfrac{\partial P}{\partial v}$, e $\left(u\,\dfrac{\partial}{\partial u} - v\,\dfrac{\partial}{\partial v}\right)(u^k v^{n-k}) = (2k - n)\,u^k v^{n-k}$, quindi $2k - n$ è l'autovalore con autovettore $u^k v^{n-k}$.) Enunciato ricostruito a partire dalla soluzione ufficiale.

> [!warning] Estratto/tradotto: da verificare con la fonte.

**Topic:** [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_simmetria|Simmetria]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]]

[[Quesiti/src_obm_2007_nu_f1#q05|src_obm_2007_nu_f1__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_algebra,topic_trigonometria,method_ricorsione,method_telescoping,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Power-series ODE: order of vanishing of y-1 and value of a limit*

> Let $y(t) = a_0 + a_1 t + a_2 t^2 + \cdots$ satisfy the given ODE, and expand the functions $y$, $e^{t} = 1 + t + \tfrac{t^2}{2} + \cdots$ and $2\sin t + \tan t = c_0 + c_1 t + c_2 t^2 + \cdots$ in power series. Substituting the series into the ODE one obtains the recurrence
> $$a_{n+2} = \dfrac{1}{(n+1)(n+2)}\big(c_n - b_0 a_n - 2b_1 a_{n-1} - \cdots - (n+1)b_0 a_{n+1} - 3a_{n+1}\big),$$
> where the initial data is $a_N \neq 0$ and $a_m = 0$ for $0 < m < N$. Find the smallest such $\widetilde{N}$ and the value of $\displaystyle\lim_{t \to 0}\dfrac{t\,y'}{y - 1}$. (Official solution: using $2\sin t + \tan t = 3t + \dfrac{3t^3}{20} + \cdots$ one finds $\widetilde{N} = 5$, whence $\displaystyle\lim_{t \to 0}\dfrac{t\,y'}{y - 1} = 7$.) Statement reconstructed from the official solution; several intermediate terms are partly illegible in the source.

**Topic:** [[topic_algebra|Algebra]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_telescoping|Telescoping]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** limit = 7 (with N = 5)
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lOJCEY5_AKOF2CG2hkgyD8fhqvhk5Tjs/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*ODE a serie di potenze: ordine di annullamento di y-1 e valore di un limite*

> Sia $y(t) = a_0 + a_1 t + a_2 t^2 + \cdots$ soluzione dell'ODE data, e sviluppa le funzioni $y$, $e^{t} = 1 + t + \tfrac{t^2}{2} + \cdots$ e $2\sin t + \tan t = c_0 + c_1 t + c_2 t^2 + \cdots$ in serie di potenze. Sostituendo le serie nell'ODE, si ottiene la relazione di ricorrenza
> $$a_{n+2} = \dfrac{1}{(n+1)(n+2)}\big(c_n - b_0 a_n - 2b_1 a_{n-1} - \cdots - (n+1)b_0 a_{n+1} - 3a_{n+1}\big),$$
> dove i dati iniziali sono $a_N \neq 0$ e $a_m = 0$ per $0 < m < N$. Trovare il più piccolo tale $\widetilde{N}$ e il valore di $\displaystyle\lim_{t \to 0}\dfrac{t\,y'}{y - 1}$. (Soluzione ufficiale: utilizzando $2\sin t + \tan t = 3t + \dfrac{3t^3}{20} + \cdots$ si ottiene $\widetilde{N} = 5$, da cui $\displaystyle\lim_{t \to 0}\dfrac{t\,y'}{y - 1} = 7$.) Enunciato ricostruito dalla soluzione ufficiale; diversi termini intermedi sono parzialmente illeggibili nella fonte.

> [!warning] Estratto/tradotto: da verificare con la fonte.

**Topic:** [[topic_algebra|Algebra]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_telescoping|Telescoping]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi]], [[Geometria]]

[[Quesiti/src_obm_2007_nu_f1#q06|src_obm_2007_nu_f1__Q06]]
