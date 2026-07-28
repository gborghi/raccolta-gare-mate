---
title: Concours Général des Lycées 2025 — Matematica
tipo: gara
competition: Concours Général des Lycées 2025 — Matematica
family: concours_generale
year: '2025'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2025"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_analitica,topic_aritmetica,topic_algebra,method_coordinate,method_fattorizzazione,method_congruenze,method_telescoping,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_astrazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Addition on a parabola: an operation defined geometrically via secants/tangents to y=x^2 meeting the line y=-1; associativity, then a sequence of points and its convergence via heights of rationals.*

> Exercise 1: Addition on a parabola.
> 
> The plane is endowed with an orthonormal coordinate system $(O, \vec{\imath}, \vec{\jmath})$. For every point $M$ of the plane we denote its coordinates by $(x_M\,;\,y_M)$.
> 
> Let $\mathscr{P}$ be the parabola of equation $y = x^2$ and $\Delta$ the line of equation $y = -1$.
> 
> For all points $A$ and $B$ of $\mathscr{P}$ such that $y_A \ne y_B$, we denote by $A \oplus B$ the point of $\mathscr{P}$ whose abscissa is that of the intersection point of the line $(AB)$ with $\Delta$.
> 
> \textbf{Part 1: properties of $\oplus$.}
> 
> 1. Let $A$ and $B$ be two points of $\mathscr{P}$ such that $y_A \ne y_B$. Express $x_{A\oplus B}$ in terms of $x_A$ and $x_B$.
> 
> 2. Let $A$, $B$, $C$ be three points of $\mathscr{P}$. Suppose that
> $$y_A \ne y_B, \quad y_{A\oplus B} \ne y_C, \quad y_B \ne y_C, \quad y_A \ne y_{B\oplus C}.$$
> Show that the points $(A\oplus B)\oplus C$ and $A\oplus(B\oplus C)$ coincide (are confounded).
> 
> For every point $A$ of $\mathscr{P}$ distinct from the point $O$ (of coordinates $(0\,;\,0)$), we denote by $A \oplus A$ the point of $\mathscr{P}$ whose abscissa is that of the intersection point of the tangent to $\mathscr{P}$ at $A$ with $\Delta$.
> 
> 3. Let $A$ be a point of $\mathscr{P}$ distinct from $O$.
>    a. Express $x_{A\oplus A}$ in terms of $x_A$.
>    b. Let $B$ be a point of $\mathscr{P}$ such that
> $$y_{A\oplus A} \ne y_B, \quad y_A \ne y_B, \quad y_A \ne y_{A\oplus B}.$$
> Show that the points $(A\oplus A)\oplus B$ and $A\oplus(A\oplus B)$ coincide.
> 
> \textbf{Part 2: study of a sequence of points.}
> 
> Let $A$ be a point of $\mathscr{P}$. We associate to it a sequence of points $(A_n)$ defined by $A_0 = A$ and the recurrence relation:
> $$\text{for every integer } n \ge 0, \quad A_{n+1} = \begin{cases} A_n \oplus A_n, & \text{if } A_n \ne 0, \\ 0, & \text{otherwise.} \end{cases}$$
> To lighten the notation, we set $x_n = x_{A_n}$.
> 
> 4. Suppose, in this question, that $A$ is the point of coordinates $(3\,;\,9)$.
>    a. Show that, for every $n$ in $\mathbb{N}$, one has $x_n \ne 0$.
>    b. Show that the sequence $(x_n)$ does not converge.
> 
> One recalls that, for every $x$ in $\mathbb{Q}^*$, there exists a unique pair of integers $(a,b)$ such that $b \ge 1$, $\mathrm{PGCD}(a,b) = 1$ and $x = \frac{a}{b}$. One then denotes by $H(x)$ the largest of the integers $|a|$ and $|b|$, that is $H(x) = \max(|a|, |b|)$. For example $H\!\left(\frac{-4}{3}\right) = 4$. One agrees moreover that $H(0) = 1$.
> 
> For every point $P$ of the parabola $\mathscr{P}$ such that $x_P$ belongs to $\mathbb{Q}$, one sets
> $$h(P) = \ln(H(x_P)).$$
> 
> 5. Show that, for every $c$ in $\mathbb{N}^*$, the set $E(c) = \{P \in \mathscr{P},\ x_P \in \mathbb{Q} \text{ and } h(P) \le c\}$ is finite.
> 
> 6. Let $(a,b) \in \mathbb{Z}^* \times \mathbb{N}^*$. Show that, if $\mathrm{PGCD}(a,b) = 1$, then $\mathrm{PGCD}(a^2 - b^2,\, ab) = 1$.
> 
> 7. Show that there exist two reals $m$ and $M$ such that, for every point $P$ of the parabola $\mathscr{P}$ such that $x_P$ belongs to $\mathbb{Q}^*$, one has
> $$m + h(P\oplus P) \le 2h(P) \le h(P\oplus P) + M.$$
> 
> 8. Let $(u_n)$ be a real sequence. One sets
> $$v_0 = 0 \text{ and, for every integer } n \ge 1, \quad v_n = \sum_{k=0}^{n-1} |u_{k+1} - u_k|.$$
> One supposes that the sequence $(v_n)$ is bounded above (majorée) and one wishes to show that the sequence $(u_n)$ converges.
>    a. Show that the sequence $(v_n)$ converges.
>    b. Show that for every natural integer $n$ one has $0 \le u_{n+1} - u_n + |u_{n+1} - u_n| \le 2|u_{n+1} - u_n|$.
>    c. Deduce that the sequence $(u_n + v_n)$ converges.
>    d. Conclude.
> 
> 9. Let $A$ again be the point of coordinates $(3\,;\,9)$ and let $(A_n)$ be the recurrent sequence associated to $A$. For every natural integer $n$, one sets $t_n = \frac{h(A_n)}{2^n}$. Show that the sequence $(t_n)$ converges.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]], [[method_telescoping|Telescoping]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]], [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1RJQcrE2LoxqUG0FX5qFL59QY5bS7h8dG/view)


<span class="qlang-split" data-lang="it"></span>


*Aggregazione su una parabola: un'operazione definita geometricamente tramite sezioni/tangenti a y=x^2 che raggiungono la linea y=-1; associazione, quindi una sequenza di punti e la sua convergenza tramite altezze di razionali.*

> Esercizio 1: Aggiunta su una parabola.
> 
> Il piano è dotato di un sistema di coordinate ortonormali $(O, \vec{\imath}, \vec{\jmath})$. Per ogni punto $M$ del piano indichiamo le sue coordinate con $(x_M\,;\,y_M)$.
> 
> $\mathscr{P}$ sia la parabola dell'equazione $y = x^2$ e $\Delta$ la linea dell'equazione $y = -1$.
> 
> Per tutti i punti $A$ e $B$ di $\mathscr{P}$ in modo tale che $y_A \ne y_B$, indichiamo con $A \oplus B$ il punto di $\mathscr{P}$ la cui abcissa è quella del punto di intersezione della linea $(AB)$ con $\Delta$.
> 
> \textbf{Parte 1: proprietà di $\oplus$.}
> 
> 1. I punti $A$ e $B$ siano due punti di $\mathscr{P}$ in modo tale che $y_A \ne y_B$. Esprimere $x_{A\oplus B}$ in termini di $x_A$ e $x_B$.
> 
> 2. I punti $A$, $B$, $C$ siano tre punti di $\mathscr{P}$. Supponiamo che $$y_A \ne y_B, \quad y_{A\oplus B} \ne y_C, \quad y_B \ne y_C, \quad y_A \ne y_{B\oplus C}.$$ Mostri che i punti $(A\oplus B)\oplus C$ e $A\oplus(B\oplus C)$ coincidono (sono confusi).
> 
> Per ogni punto $A$ di $\mathscr{P}$ distinto dal punto $O$ (di coordinate $(0\,;\,0)$), indichiamo con $A \oplus A$ il punto di $\mathscr{P}$ la cui abcissa è quella del punto di intersezione della tangente a $\mathscr{P}$ a $A$ con $\Delta$.
> 
> 3. Il $A$ deve essere un punto di $\mathscr{P}$ distinto da $O$. a. Esprimere $x_{A\oplus A}$ in termini di $x_A$. b. Il punto $B$ deve essere un punto di $\mathscr{P}$ tale che $$y_{A\oplus A} \ne y_B, \quad y_A \ne y_B, \quad y_A \ne y_{A\oplus B}.$$ dimostri che i punti $(A\oplus A)\oplus B$ e $A\oplus(A\oplus B)$ coincidono.
> 
> \textbf{Parte 2: studio di una sequenza di punti.}
> 
> Il punto $A$ deve essere $\mathscr{P}$. A questo si associa una sequenza di punti $(A_n)$ definiti da $A_0 = A$ e la relazione di ricorrenza: $$\text{for every integer } n \ge 0, \quad A_{n+1} = \begin{cases} A_n \oplus A_n, & \text{if } A_n \ne 0, \\ 0, & \text{otherwise.} \end{cases}$$ Per alleggerire la notazione, si impone $x_n = x_{A_n}$.
> 
> 4. Supponiamo, in questa domanda, che $A$ sia il punto delle coordinate $(3\,;\,9)$. a. Mostra che per ogni $n$ in $\mathbb{N}$, uno ha $x_n \ne 0$. b. Indicare che la sequenza $(x_n)$ non converge.
> 
> Si ricorda che, per ogni $x$ in $\mathbb{Q}^*$, esiste una coppia unica di integri $(a,b)$ come $b \ge 1$, $\mathrm{PGCD}(a,b) = 1$ e $x = \frac{a}{b}$. Uno poi indica con $H(x)$ il più grande degli enti $|a|$ e $|b|$, cioè $H(x) = \max(|a|, |b|)$. Ad esempio $H\!\left(\frac{-4}{3}\right) = 4$. Si è inoltre d'accordo che $H(0) = 1$.
> 
> Per ogni punto $P$ della parabola $\mathscr{P}$ tale che $x_P$ appartenga a $\mathbb{Q}$, un insieme $$h(P) = \ln(H(x_P)).$$
> 
> 5. Mostra che per ogni $c$ in $\mathbb{N}^*$, l'insieme $E(c) = \{P \in \mathscr{P},\ x_P \in \mathbb{Q} \text{ and } h(P) \le c\}$ è finito.
> 
> 6. Let $(a,b) \in \mathbb{Z}^* \times \mathbb{N}^*$. Indicare che, se $\mathrm{PGCD}(a,b) = 1$, allora $\mathrm{PGCD}(a^2 - b^2,\, ab) = 1$.
> 
> 7. Mostrare che esistono due valori reali $m$ e $M$ in modo tale che, per ogni punto $P$ della parabola $\mathscr{P}$ in modo tale che $x_P$ appartenga a $\mathbb{Q}^*$, uno abbia $$m + h(P\oplus P) \le 2h(P) \le h(P\oplus P) + M.$$
> 
> 8. Lasciate che $(u_n)$ sia una sequenza reale. Una serie $$v_0 = 0 \text{ and, for every integer } n \ge 1, \quad v_n = \sum_{k=0}^{n-1} |u_{k+1} - u_k|.$$ Si suppone che la sequenza $(v_n)$ sia delimitata sopra (majorée) e si desidera mostrare che la sequenza $(u_n)$ converge. a. Indicare che la sequenza $(v_n)$ converge. b. Mostrare che per ogni intero naturale $n$ ci sono $0 \le u_{n+1} - u_n + |u_{n+1} - u_n| \le 2|u_{n+1} - u_n|$. c. Riduzione che la sequenza $(u_n + v_n)$ converge. d. Conclusione.
> 
> 9. Let $A$ essere nuovamente il punto delle coordinate $(3\,;\,9)$ e let $(A_n)$ essere la sequenza ricorrente associata a $A$. Per ogni intero naturale $n$, un insieme $t_n = \frac{h(A_n)}{2^n}$. Indicare che la sequenza $(t_n)$ converge.

[[src_cgen_2025__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_algebra,topic_disuguaglianze,topic_insiemi_funzioni,method_ricorsione,method_disuguaglianze,method_induzione,method_estremalita,skill_manipolazione_algebrica,skill_casework_accurato,skill_astrazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Positive and bounded sequences: for the recurrence u_{n+2}=u_{n+1}^2 - alpha u_n^4 with u_0=u_1=1, determine which real alpha make all terms positive (property P) and which make the sequence bounded (property B).*

> Exercise 2: Positive sequence and bounded sequence.
> 
> For every real $\alpha$, one calls \emph{sequence associated to $\alpha$} the sequence $(u_n)$ defined by $u_0 = u_1 = 1$ and
> $$u_{n+2} = u_{n+1}^2 - \alpha\, u_n^4$$
> for every integer $n \ge 0$. One says that $\alpha$ \emph{verifies the property} $\mathscr{P}$ if all the terms of the sequence $(u_n)$ associated to $\alpha$ are strictly positive, and that $\alpha$ \emph{verifies the property} $\mathscr{B}$ if the sequence $(u_n)$ associated to $\alpha$ is bounded.
> 
> \textbf{Part 1: Property $\mathscr{P}$.}
> 
> 1. Which are the reals $\alpha$ that verify the property $\mathscr{P}$ and that belong
>    a. to the interval $[1\,;\,+\infty[$?
>    b. to the interval $]-\infty\,;\,0]$?
> 
> 2. Let $\alpha$ be a real belonging to the interval $]0\,;\,1[$ and $(u_n)$ the sequence associated to it; suppose, in this question, that $\alpha$ verifies the property $\mathscr{P}$.
>    a. Show that $0 < u_{n+1} \le u_n \le 1$ for every integer $n \ge 0$.
>    b. What is the limit of the sequence $(u_n)$?
>    c. For every real $n \ge 0$, one sets $x_n = \frac{u_{n+1}}{u_n^2}$. Express $x_{n+1}$ in terms of $\alpha$ and of $x_n$.
>    d. Show that the sequence $(x_n)$ admits a finite limit, which one denotes $x_\infty$, and express $x_\infty^2(1 - x_\infty)$ in terms of $\alpha$.
>    e. Deduce that $\alpha \le \frac{4}{27}$.
> 
> 3. Which are the reals $\alpha$ that verify the property $\mathscr{P}$?
> 
> \textbf{Part 2: Property $\mathscr{B}$.}
> 
> 4. Which are the reals $\alpha$ that verify the property $\mathscr{B}$ and that belong
>    a. to the interval $]-\infty\,;\,0[$?
>    b. to the interval $[0\,;\,1]$?
> 
> 5. Let $\alpha$ be a real belonging to the interval $]2\,;\,+\infty[$ and $(u_n)$ the sequence associated to it. For every $n \ge 0$, one denotes by $v_n$ the largest of the reals $|u_0|, |u_1|, \ldots, |u_n|$, that is $v_n = \max(|u_0|, |u_1|, \ldots, |u_n|)$.
>    a. Show that, for every integer $n \ge 1$, one has $v_n = |u_{n-1}|$, or $v_n = |u_n|$.
>    b. Does the real $\alpha$ verify the property $\mathscr{B}$?
> 
> 6. Let $\alpha$ be a real belonging to the interval $\left[\frac{9}{7}\,;\,2\right]$ and $(u_n)$ the sequence associated to it.
>    a. For every real $x$, one sets $P(x) = \alpha x^3 - x - 1$ and $Q(x) = 8x^3 - 116 x^2 + 494 x - 441$. Show that
> $$P\!\left(\frac{11 - 2\alpha}{7}\right) = \frac{(2 - \alpha)\,Q(\alpha)}{7^3}.$$
>    b. Study the variations of the function $x \mapsto P(x)$ on the interval $[1\,;\,+\infty[$ and of the function $x \mapsto Q(x)$ on the interval $[1\,;\,2]$.
>    c. What is the sign of $Q(\alpha)$?
>    d. Compare the reals $\frac{11 - 2\alpha}{7}$ and $-u_3$.
>    e. Does the real $\alpha$ verify the property $\mathscr{B}$?
> 
> 7. Let $\alpha$ be a real belonging to the interval $\left]1\,;\,\frac{9}{7}\right[$. For every real $x$, one sets $S_0(x) = x$, $S_1(x) = 1$, then
> $$S_{k+2}(x) = S_{k+1}(x)^2 - \alpha\, S_k(x)^4$$
> for every integer $k \ge 0$. One \emph{admits} for the moment that there exists a real $t(\alpha) > 1$ such that
> $$1 < S_4(x) \le S_3(x)^2 \le t(\alpha)^2 S_4(x)$$
> for every real $x \in [1\,;\,t(\alpha)]$.
>    a. Let $n \ge 0$ be an integer such that $1 \le u_{n+1} \le u_n^2 \le t(\alpha)^2 u_{n+1}$; one sets $x_n = \sqrt{\dfrac{u_n^2}{u_{n+1}}}$. Show that $u_{n+k} = u_{n+1}^{2^{k-1}} S_k(x_n)$ for every integer $k \ge 1$.
>    b. Does the real $\alpha$ verify the property $\mathscr{B}$?
> 
> 8. One now shows that the unique positive real $t(\alpha)$ such that $t(\alpha)^4 = \dfrac{\alpha + 2}{3}$ verifies the hypotheses of question 7.
>    a. Show that $S_4(x) \le S_3(x)^2$ for every real $x$.
>    b. Show that $0 < S_2(x)^2 \le \dfrac{7(\alpha - 1)}{12}$ for every real $x \in [1\,;\,t(\alpha)]$.
>    c. Show that $1 < S_4(x)$ for every real $x \in [1\,;\,t(\alpha)]$.
>    d. Show that $S_3(x)^2 \le \dfrac{2 + x^4}{3} S_4(x) \le x^2 S_4(x)$ when $x = t(\alpha)$.
>    e. Study the variations of the function $x \mapsto \dfrac{S_4(x)}{S_3(x)^2}$ on the interval $[1\,;\,t(\alpha)]$.
>    f. Conclude.
> 
> 9. Which are the reals $\alpha$ that verify the property $\mathscr{B}$?

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_disuguaglianze|Disuguaglianze]], [[method_induzione|Induzione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1RJQcrE2LoxqUG0FX5qFL59QY5bS7h8dG/view)


<span class="qlang-split" data-lang="it"></span>


*Sequenze positive e limitate: per la ricorrenza u_{n+2}=u_{n+1}^2 - alfa u_n^4 con u_0=u_1=1, determinare quale alfa reale rende tutti i termini positivi (proprietà P) e quali rendono la sequenza limitata (proprietà B).*

> Esercizio 2: sequenza positiva e sequenza limitata.
> 
> Per ogni $\alpha$ reale, si chiama \emph{sequenza associata a $\alpha$} la sequenza $(u_n)$ definita da $u_0 = u_1 = 1$ e $$u_{n+2} = u_{n+1}^2 - \alpha\, u_n^4$$ per ogni intero $n \ge 0$. Si dice che $\alpha$ \emph{verifica la proprietà} $\mathscr{P}$ se tutti i termini della sequenza $(u_n)$ associati a $\alpha$ sono strettamente positivi, e che $\alpha$ \emph{verifica la proprietà} $\mathscr{B}$ se la sequenza $(u_n)$ associata a $\alpha$ è limitata.
> 
> \textbf{Parte 1: Proprietà $\mathscr{P}$.}
> 
> 1. Quali sono i reals $\alpha$ che verificano la proprietà $\mathscr{P}$ e che appartengono a. all'intervallo $[1\,;\,+\infty[$? b. all'intervallo $]-\infty\,;\,0]$?
> 
> 2. Che $\alpha$ sia un reale appartenente all'intervallo $]0\,;\,1[$ e $(u_n)$ la sequenza associata a esso; supponiamo, in questa domanda, che $\alpha$ verifichi la proprietà $\mathscr{P}$. a. Indicare che $0 < u_{n+1} \le u_n \le 1$ per ogni numero intero $n \ge 0$. b. Qual è il limite della sequenza $(u_n)$? c. Per ogni $n \ge 0$ reale, un set $x_n = \frac{u_{n+1}}{u_n^2}$. Esprimere $x_{n+1}$ in termini di $\alpha$ e di $x_n$. d. Indicare che la sequenza $(x_n)$ ammette un limite finito, che si denota $x_\infty$, ed esprimere $x_\infty^2(1 - x_\infty)$ in termini di $\alpha$. e. Riduzione di $\alpha \le \frac{4}{27}$.
> 
> 3. Quali sono i reals $\alpha$ che verificano la proprietà $\mathscr{P}$?
> 
> \textbf{Parte 2: Proprietà $\mathscr{B}$.}
> 
> 4. Quali sono i reals $\alpha$ che verificano la proprietà $\mathscr{B}$ e che appartengono a. all'intervallo $]-\infty\,;\,0[$? b. all'intervallo $[0\,;\,1]$?
> 
> 5. $\alpha$ sia un reale appartenente all'intervallo $]2\,;\,+\infty[$ e $(u_n)$ la sequenza associata ad esso. Per ogni $n \ge 0$, uno denota con $v_n$ il più grande dei valori reali $|u_0|, |u_1|, \ldots, |u_n|$, cioè $v_n = \max(|u_0|, |u_1|, \ldots, |u_n|)$. a. Mostrare che per ogni intero $n \ge 1$, uno ha $v_n = |u_{n-1}|$, o $v_n = |u_n|$. b. Il $\alpha$ reale verifica la proprietà $\mathscr{B}$?
> 
> 6. $\alpha$ sia un reale appartenente all'intervallo $\left[\frac{9}{7}\,;\,2\right]$ e $(u_n)$ la sequenza associata ad esso. a. Per ogni $x$ reale, un set $P(x) = \alpha x^3 - x - 1$ e $Q(x) = 8x^3 - 116 x^2 + 494 x - 441$. Mostra che $$P\!\left(\frac{11 - 2\alpha}{7}\right) = \frac{(2 - \alpha)\,Q(\alpha)}{7^3}.$$ b. Studiare le variazioni della funzione $x \mapsto P(x)$ sull'intervallo $[1\,;\,+\infty[$ e della funzione $x \mapsto Q(x)$ sull'intervallo $[1\,;\,2]$. c. Qual è il segno di $Q(\alpha)$? d. Confronta i reali $\frac{11 - 2\alpha}{7}$ e $-u_3$. e. Il vero $\alpha$ verifica la proprietà $\mathscr{B}$?
> 
> 7. $\alpha$ sia un reale appartenente all'intervallo $\left]1\,;\,\frac{9}{7}\right[$. Per ogni $x$ reale, un set $S_0(x) = x$, $S_1(x) = 1$, quindi $$S_{k+2}(x) = S_{k+1}(x)^2 - \alpha\, S_k(x)^4$$ per ogni numero intero $k \ge 0$. Uno \emph{admits} per il momento che esiste un reale $t(\alpha) > 1$ tale che $$1 < S_4(x) \le S_3(x)^2 \le t(\alpha)^2 S_4(x)$$ per ogni reale $x \in [1\,;\,t(\alpha)]$. a. $n \ge 0$ sia un numero intero tale che $1 \le u_{n+1} \le u_n^2 \le t(\alpha)^2 u_{n+1}$; un insieme $x_n = \sqrt{\dfrac{u_n^2}{u_{n+1}}}$. Indicare che $u_{n+k} = u_{n+1}^{2^{k-1}} S_k(x_n)$ per ogni numero intero $k \ge 1$. b. Il vero $\alpha$ verifica la proprietà $\mathscr{B}$?
> 
> 8. Uno mostra ora che l'unico reale positivo $t(\alpha)$ tale che $t(\alpha)^4 = \dfrac{\alpha + 2}{3}$ verifica le ipotesi della domanda 7. a. Indicare che $S_4(x) \le S_3(x)^2$ per ogni reale $x$. b. Indicare che $0 < S_2(x)^2 \le \dfrac{7(\alpha - 1)}{12}$ per ogni reale $x \in [1\,;\,t(\alpha)]$. c. Indicare che $1 < S_4(x)$ per ogni reale $x \in [1\,;\,t(\alpha)]$. d. Indicare che $S_3(x)^2 \le \dfrac{2 + x^4}{3} S_4(x) \le x^2 S_4(x)$ quando $x = t(\alpha)$. e. Studiare le variazioni della funzione $x \mapsto \dfrac{S_4(x)}{S_3(x)^2}$ nell'intervallo $[1\,;\,t(\alpha)]$. f. Conclusione.
> 
> 9. Quali sono i reals $\alpha$ che verificano la proprietà $\mathscr{B}$?

[[src_cgen_2025__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_funzionali,topic_insiemi_funzioni,method_simmetria,method_ricorsione,skill_astrazione,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Functional equation f(x+1)=1/2+sqrt(f(x)-f(x)^2): exhibit a continuous solution, prove every solution is periodic, and produce infinitely many continuous solutions with f(0)=1/2.*

> Exercise 3.
> 
> One says that a function $f$ verifies the property $\mathscr{E}$ if, for every real $x$,
> $$f(x+1) = \frac{1}{2} + \sqrt{f(x) - f(x)^2}.$$
> 
> 1. Propose a continuous function that verifies the property $\mathscr{E}$.
> 
> 2. One recalls that a function $g$ defined on $\mathbb{R}$ is periodic if there exists a real $T > 0$ such that
> $$\text{for every real } x,\quad g(x + T) = g(x).$$
> Let $f$ be a function verifying $\mathscr{E}$. Show that $f$ is periodic.
> 
> 3. Propose an infinity of continuous functions $f$ verifying $\mathscr{E}$ and such that $f(0) = \frac{1}{2}$.

**Topic:** [[topic_funzionali|Equazioni funzionali]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1RJQcrE2LoxqUG0FX5qFL59QY5bS7h8dG/view)


<span class="qlang-split" data-lang="it"></span>


*Equazione funzionale f(x+1)=1/2+sqrt(f(x)-f(x)^2): mostrare una soluzione continua, dimostrare che ogni soluzione è periodica, e produrre infinite soluzioni continue con f(0)=1/2.*

> Esercizio 3.
> 
> Si dice che una funzione $f$ verifica la proprietà $\mathscr{E}$ se, per ogni reale $x$, $$f(x+1) = \frac{1}{2} + \sqrt{f(x) - f(x)^2}.$$
> 
> 1. Propone una funzione continua che verifica la proprietà $\mathscr{E}$.
> 
> 2. Si ricorda che una funzione $g$ definita su $\mathbb{R}$ è periodica se esiste una $T > 0$ reale tale che $$\text{for every real } x,\quad g(x + T) = g(x).$$ $f$ sia una funzione che verifica $\mathscr{E}$. Indicare che $f$ è periodico.
> 
> 3. Proporre un'infinità di funzioni continue $f$ che verificano $\mathscr{E}$ e che $f(0) = \frac{1}{2}$.

[[src_cgen_2025__Q03]]
