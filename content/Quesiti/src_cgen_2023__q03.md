---
title: Concours Général des Lycées 2023 — Matematica — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2023__Q03
parent: src_cgen_2023
competition: Concours Général des Lycées 2023 — Matematica
family: concours_generale
year: '2023'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  In an orthonormal frame, study polynomials whose graph passes through all
  vertices of a regular k-gon centered at O: case of equilateral triangles,
  squares centered at O, the lower bound d >= k-1, and the sufficiency of every
  d >= k-1 (via Chebyshev polynomials).
qa_score: '2'
topics:
  - topic_geometria_analitica
  - topic_algebra
  - topic_trigonometria
  - topic_geometria_piana
methods:
  - method_coordinate
  - method_trigonometria
  - method_simmetria
  - method_ricorsione
  - method_induzione
skills:
  - skill_ragionamento_geometrico
  - skill_manipolazione_algebrica
  - skill_astrazione
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2023
  - livello/Concours-Général
  - topic/geometria_analitica
  - topic/algebra
  - topic/trigonometria
  - topic/geometria_piana
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*In an orthonormal frame, study polynomials whose graph passes through all vertices of a regular k-gon centered at O: case of equilateral triangles, squares centered at O, the lower bound d >= k-1, and the sufficiency of every d >= k-1 (via Chebyshev polynomials).*

> Problem 3: Polynomials and regular polygons.
> 
> The plane is equipped with an orthonormal frame $\mathcal{R} = (O; I, J)$. Let $k$ be an integer with $k \ge 3$. The points $M_1, M_2, \dots, M_k$ are the vertices of a regular polygon with center $O$ such that: their abscissas are pairwise distinct; the points appear in trigonometric order (counter-clockwise around $O$); and $M_1 M_2 = M_2 M_3 = \cdots = M_{k-1} M_k = M_k M_1$ (it is a regular polygon; for $k = 4$ it is a square).
> 
> One says that a function $P$ is a polynomial of degree $d$ if there exist reals $a_0, a_1, \dots, a_d$ with $a_d \ne 0$ such that $P(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0$ for every real $x$. One also says that such a polynomial $P$ has no more than $d$ real solutions. The function $P : x \mapsto 0$ is called the zero polynomial. Finally, given a polynomial $P$ (zero or not), one denotes by $\mathscr{C}_P$ the graph (representative curve) of $P$ in the frame $\mathcal{R}$.
> 
> 3.1 Equilateral triangles.
> 
> 1. Let $P$ be a polynomial of degree 1. Does there exist an equilateral triangle whose vertices belong to $\mathscr{C}_P$?
> 
> 2. Consider the points
> $$A\!\left(1; \frac{\sqrt{3}}{3}\right), \quad B\!\left(-1; \frac{\sqrt{3}}{3}\right) \quad \text{and} \quad C\!\left(0; -\frac{2\sqrt{3}}{3}\right).$$
>   a. Show that $A$, $B$, $C$ form an equilateral triangle with center $O$.
>   b. Show that $A$, $B$, $C$ belong to the graph of the polynomial $Q : x \mapsto \frac{\sqrt{3}}{3}\left(3x^2 - 2\right)$.
>   c. Show that $A$, $B$, $C$ belong to the graph of the polynomial $R : x \mapsto \frac{\sqrt{3}}{3}\left(3x^2 - 2\right) + x\left(x^2 - 1\right)$.
>   d. Show that, for every integer $d \ge 2$, there exists a polynomial of degree $d$ whose graph contains the points $A$, $B$, $C$.
> 
> 3.2 Squares with center $O$.
> 
> In what follows, consider a polynomial $P$ and a square $ABCD$ with center $O$ whose four vertices belong to $\mathscr{C}_P$.
> 
> 3. a. Express the coordinates of the points $B$, $C$, $D$ as functions of those of $A$. Show that the abscissas of $A$, $B$, $C$, $D$ are pairwise distinct.
>   b. Show that $P$ is non-zero and that its degree is at least 2.
> 
> 4. Suppose in this question that there exist reals $a$, $b$, $c$ such that $P : x \mapsto x^3 + a x^2 + b x + c$.
>   a. Show that $a = 0$ and $c = 0$.
>   b. Show that the respective abscissas of $A$, $B$, $C$, $D$ are solutions of the equation $P(P(x)) + x = 0$.
>   c. Show that the polynomial $Q : x \mapsto x^9 + 3b x^7 + 3b^2 x^5 + b(b^2 + 1)x^3 + b^2 x + b^2 + 1$ admits at least two distinct strictly positive real roots.
>   d. Show that $b < 0$.
>   e. Suppose there exist reals $\alpha$ and $\beta$ with $\alpha < \beta$ such that $Q(x) = (x - \alpha)^2 (x - \beta)^2$ for every real $x$. Show that then $b = -\sqrt{8}$, and determine the values of $\alpha$ and $\beta$. [Note: the exact form of the factorization and constant are partly illegible; this reading is uncertain.]
> 
> 5. a. Show that there exists a polynomial $P$ of degree 3 and a square $ABCD$ with center $O$ whose vertices belong to $\mathscr{C}_P$.
>   b. For which integers $d$ does there exist a polynomial of degree $d$ whose graph contains the points $A$, $B$, $C$, $D$ as in question 5.a?
> 
> 3.3 Where one proves that $d \ge k - 1$.
> 
> Let $M_1, \dots, M_k$ be the vertices of a regular polygon with center $O$. Suppose in this question that there exists a polynomial $P$, of degree $d$, whose graph contains the vertices $M_1, \dots, M_k$. One wishes to prove that $d \ge k - 1$. For every $i$, let $(x_i; y_i)$ be the coordinates of $M_i$ in the frame $\mathcal{R}$.
> 
> 6. a. Why may one assume that the abscissa $x_1$ is less than or equal to $x_2, x_3, \dots, x_k$ and that the $y_i$ are non-zero?
>   b. Show that the abscissas $x_i$ are pairwise distinct and the ordinates $y_i$ are non-zero.
>   c. Show that there exist a real $R > 0$ and a real $\theta$ in the interval $[0, \pi/4)$ such that $x_1 = -R\cos(\theta)$ and $y_1 = -R\sin(\theta)$.
>   d. Show that $x_1 < x_2 < x_3 < \cdots < x_k$. [Note: the precise ordering chain is partly illegible.]
>   e. Show that $P$ admits a root on each of the $k - 1$ intervals $[x_1, x_2], [x_2, x_3], \dots, [x_{k-1}, x_k]$. [Note: the precise list of intervals is partly illegible; this reading is uncertain.]
>   f. Conclude that $d \ge k - 1$.
> 
> 3.4 Where one proves that every $d \ge k - 1$ works.
> 
> Suppose in this question that the abscissas $x_i$ are pairwise distinct, and one wants to prove that, for every integer $d \ge k - 1$, there exists a polynomial of degree $d$ whose graph contains the points $M_1, M_2, \dots, M_k$.
> 
> 7. Let $a$ and $b$ be two reals. In the frame $\mathcal{R}$, consider the points $A(\cos(a), \sin(a))$, $B(\cos(a+b), \sin(a+b))$ and $C(-\sin(a), \cos(a))$.
>   a. Show that the frame $\mathcal{R}' = (O; \overrightarrow{OA}, \overrightarrow{OC})$ is orthonormal.
>   b. What are the coordinates of the point $B$ in the frame $\mathcal{R}'$?
>   c. Deduce that $\cos(a + b) = \cos(a)\cos(b) - \sin(a)\sin(b)$ and $\sin(a + b) = \sin(a)\cos(b) + \cos(a)\sin(b)$.
> 
> 8. Consider the sequence of polynomials defined by $T_0 : x \mapsto 1$, $T_1 : x \mapsto x$, and $T_{n+2} : x \mapsto 2x\, T_{n+1}(x) - T_n(x)$ for every integer $n \ge 0$.
>   a. Show that $T_n(\cos(\theta)) = \cos(n\theta)$ for every integer $n \ge 0$ and every real $\theta$.
>   b. Let $\theta$ be a real, and let $\ell$ and $j$ be two integers. Show that $T_{\ell-1}\!\left(\cos\!\left(\theta + \frac{2j\pi}{\ell}\right)\right) = \cos(\ell\theta)\cos\!\left(\theta + \frac{2j\pi}{\ell}\right) + \sin(\ell\theta)\sin\!\left(\theta + \frac{2j\pi}{\ell}\right)$. [Note: this identity is partly illegible in the source; the reading is uncertain.]
>   c. Show that, for every integer $d \ge k - 1$, there exists a polynomial of degree $d$ whose graph contains the points $M_1, M_2, \dots, M_k$.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_algebra|Algebra]], [[topic_trigonometria|Trigonometria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]], [[method_simmetria|Simmetria]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1UEmDklBRoLwyCF47wsu7dNuzbiS9gQhj/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*In un quadro ortonormale, studiare polinomi il cui grafico passa attraverso tutti i vertici di un k-gon regolare centrato a O: caso di triangoli equilaterali, quadrati centrati a O, il limite inferiore d >= k-1, e la sufficienza di ogni d >= k-1 (via polinomi di Chebyshev).*

> Problema 3: Polinomi e poligoni regolari.
> 
> L'aereo è dotato di una cornice ortonormale $\mathcal{R} = (O; I, J)$. $k$ sia un numero intero con $k \ge 3$. I punti $M_1, M_2, \dots, M_k$ sono i vertici di un poligono regolare con centro $O$ in modo tale che: le loro abscisse siano a coppia distinte; i punti appaiono in ordine trigonometrico (in senso contrario all'orologio intorno a $O$); e $M_1 M_2 = M_2 M_3 = \cdots = M_{k-1} M_k = M_k M_1$ (è un poligono regolare; per $k = 4$ è un quadrato).
> 
> Si dice che una funzione $P$ è un polinomio di grado $d$ se esistono reali $a_0, a_1, \dots, a_d$ con $a_d \ne 0$ in modo tale che $P(x) = a_d x^d + a_{d-1} x^{d-1} + \cdots + a_2 x^2 + a_1 x + a_0$ per ogni reale $x$. Si dice anche che un tale polinomio $P$ non ha più di $d$ soluzioni reali. La funzione $P : x \mapsto 0$ è chiamata polinomio zero. Infine, dato un polinomio $P$ (zero o meno), si indica con $\mathscr{C}_P$ il grafico (curva rappresentativa) di $P$ nel quadro $\mathcal{R}$.
> 
> 3.1 Triangoli equilaterali.
> 
> 1. Che $P$ sia un polinomio di grado 1. Esiste un triangolo equilaterale le cui vertici appartengono a $\mathscr{C}_P$?
> 
> 2. Considerare i punti $$A\!\left(1; \frac{\sqrt{3}}{3}\right), \quad B\!\left(-1; \frac{\sqrt{3}}{3}\right) \quad \text{and} \quad C\!\left(0; -\frac{2\sqrt{3}}{3}\right).$$ a. Indicare che $A$, $B$, $C$ formano un triangolo equilaterale con centro $O$. b. Indicare che $A$, $B$, $C$ appartengono al grafico del polinomio $Q : x \mapsto \frac{\sqrt{3}}{3}\left(3x^2 - 2\right)$. c. Indicare che $A$, $B$, $C$ appartengono al grafico del polinomio $R : x \mapsto \frac{\sqrt{3}}{3}\left(3x^2 - 2\right) + x\left(x^2 - 1\right)$. d. Mostra che per ogni intero $d \ge 2$ esiste un polinomio di grado $d$ il cui grafico contiene i punti $A$, $B$, $C$.
> 
> 3.2 Quadrati con centro $O$.
> 
> In quanto segue, consideriamo un polinomio $P$ e un quadrato $ABCD$ con centro $O$ le cui quattro vertici appartengono a $\mathscr{C}_P$.
> 
> 3. a. Esprimere le coordinate dei punti $B$, $C$, $D$ come funzioni di quelle di $A$. Mostrare che le abscisse di $A$, $B$, $C$, $D$ sono separate in coppia. b. Indicare che $P$ non è zero e che il suo grado è almeno 2.
> 
> 4. Supponiamo in questa domanda che esistano reali $a$, $b$, $c$ tali che $P : x \mapsto x^3 + a x^2 + b x + c$. a. Indicare che $a = 0$ e $c = 0$. b. Indicare che le rispettive abscisse di $A$, $B$, $C$, $D$ sono soluzioni dell'equazione $P(P(x)) + x = 0$. c. Mostrare che il polinomio $Q : x \mapsto x^9 + 3b x^7 + 3b^2 x^5 + b(b^2 + 1)x^3 + b^2 x + b^2 + 1$ ammette almeno due radici reali rigorosamente positive distinte. d. Mostra che $b < 0$. e. Supponiamo che esistano i valori $\alpha$ e $\beta$ con $\alpha < \beta$ in modo tale che $Q(x) = (x - \alpha)^2 (x - \beta)^2$ per ogni $x$ reale. Indicare quindi $b = -\sqrt{8}$ e determinare i valori di $\alpha$ e $\beta$. [Nota: la forma esatta della fatturazione e della costante sono parzialmente illeggibili; questa lettura è incerta.]
> 
> 5. a. Mostra che esiste un polinomio $P$ di grado 3 e un quadrato $ABCD$ con centro $O$ le cui vertici appartengono a $\mathscr{C}_P$. b. Per quali integri $d$ esiste un polinomio di grado $d$ il cui grafico contiene i punti $A$, $B$, $C$, $D$ come nella domanda 5.a?
> 
> 3.3 Quando si dimostra che $d \ge k - 1$.
> 
> $M_1, \dots, M_k$ siano i vertici di un poligono regolare con centro $O$. Supponiamo in questa domanda che esista un polinomio $P$, di grado $d$, il cui grafico contiene i vertici $M_1, \dots, M_k$. Si desidera dimostrare che $d \ge k - 1$. Per ogni $i$, $(x_i; y_i)$ sono le coordinate di $M_i$ nel quadro $\mathcal{R}$.
> 
> 6. a. Perché si può presumere che l'abcissa $x_1$ sia inferiore o uguale a $x_2, x_3, \dots, x_k$ e che $y_i$ non siano zero? b. Indicare che le abscisse $x_i$ sono in coppia distinte e che le ordinate $y_i$ non sono zero. c. Indicare che nell'intervallo $[0, \pi/4)$ esistono un $R > 0$ reale e un $\theta$ reale in modo tale che $x_1 = -R\cos(\theta)$ e $y_1 = -R\sin(\theta)$. d. Mostra che $x_1 < x_2 < x_3 < \cdots < x_k$. [Nota: la catena di ordinazione precisa è parzialmente illeggibile.] e. Indicare che $P$ ammette una radice su ciascuno degli intervalli $k - 1$ $[x_1, x_2], [x_2, x_3], \dots, [x_{k-1}, x_k]$. [Nota: l'elenco preciso degli intervalli è parzialmente illeggibile; questa lettura è incerta.] f. Concludere che $d \ge k - 1$.
> 
> 3.4 Dove si dimostra che ogni $d \ge k - 1$ funziona.
> 
> Supponiamo in questa domanda che le abscisse $x_i$ siano in coppia distinte, e si voglia dimostrare che, per ogni numero intero $d \ge k - 1$, esiste un polinomio di grado $d$ il cui grafico contiene i punti $M_1, M_2, \dots, M_k$.
> 
> 7. Che $a$ e $b$ siano due valori reali. Nel quadro $\mathcal{R}$, considerate i punti $A(\cos(a), \sin(a))$, $B(\cos(a+b), \sin(a+b))$ e $C(-\sin(a), \cos(a))$. a. Indicare che il telaio $\mathcal{R}' = (O; \overrightarrow{OA}, \overrightarrow{OC})$ è ortonormale. b. Quali sono le coordinate del punto $B$ nel quadro $\mathcal{R}'$? c. Riduzione di $\cos(a + b) = \cos(a)\cos(b) - \sin(a)\sin(b)$ e $\sin(a + b) = \sin(a)\cos(b) + \cos(a)\sin(b)$.
> 
> 8. Considera la sequenza di polinomi definiti da $T_0 : x \mapsto 1$, $T_1 : x \mapsto x$ e $T_{n+2} : x \mapsto 2x\, T_{n+1}(x) - T_n(x)$ per ogni intero $n \ge 0$. a. Indicare che $T_n(\cos(\theta)) = \cos(n\theta)$ per ogni numero intero $n \ge 0$ e ogni reale $\theta$. b. Lasciate che $\theta$ sia reale, e lasciate che $\ell$ e $j$ siano due numeri interi. Mostra che $T_{\ell-1}\!\left(\cos\!\left(\theta + \frac{2j\pi}{\ell}\right)\right) = \cos(\ell\theta)\cos\!\left(\theta + \frac{2j\pi}{\ell}\right) + \sin(\ell\theta)\sin\!\left(\theta + \frac{2j\pi}{\ell}\right)$. [Nota: questa identità è parzialmente illeggibile nella fonte; la lettura è incerta.] c. Mostra che per ogni numero intero $d \ge k - 1$ esiste un polinomio di grado $d$ il cui grafico contiene i punti $M_1, M_2, \dots, M_k$.

[[src_cgen_2023__Q03]]
