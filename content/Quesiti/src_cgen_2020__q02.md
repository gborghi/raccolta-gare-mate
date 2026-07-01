---
title: Concours Général des Lycées 2020 — Matematica — Quesito 2
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2020__Q02
parent: src_cgen_2020
competition: Concours Général des Lycées 2020 — Matematica
family: concours_generale
year: '2020'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  An explosive number: the sequence x_{n+1}=(1+1/x_n)^n with x_1=a; the function
  f_n(x)=(1+1/x)^n; an explosivity criterion; proving there is a unique
  explosive number via a contraction argument.
qa_score: '1'
topics:
  - topic_algebra
  - topic_funzionali
  - topic_insiemi_funzioni
methods:
  - method_disuguaglianze
  - method_estremalita
  - method_ricorsione
  - method_backward
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_astrazione
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2020
  - livello/Concours-Général
  - topic/algebra
  - topic/funzionali
  - topic/insiemi_funzioni
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*An explosive number: the sequence x_{n+1}=(1+1/x_n)^n with x_1=a; the function f_n(x)=(1+1/x)^n; an explosivity criterion; proving there is a unique explosive number via a contraction argument.*

> Problem 2: An explosive number (Un nombre explosif).
> 
> If $a$ is a strictly positive real number, we define the sequence $(x_n)$ by $x_1 = a$ and
> $$x_{n+1} = \left(1 + \frac{1}{x_n}\right)^n \quad \text{for every integer } n \geq 1,$$
> which we call the sequence associated to $a$. We say that the number $a$ is explosive if the sequence $(x_n)$ associated to $a$ diverges to $+\infty$. The goal of the problem is to prove that there exists a unique explosive number.
> 
> For every integer $n \geq 1$, we designate by $f_n$ the function defined on $\mathbb{R}_+^*$ by
> $$f_n(x) = \left(1 + \frac{1}{x}\right)^n \quad \text{for every real } x > 0,$$
> so that for every integer $n \geq 1$, we have $x_{n+1} = f_n(x_n)$.
> Throughout the problem, for every real $t$, the exponential of $t$ is denoted $\exp(t)$.
> 
> 2.1 A bounding of $f_n(x)$.
> Let $x$ be a strictly positive real.
> 1. Show that $\dfrac{1}{x+1} \leq \displaystyle\int_x^{x+1} \dfrac{dt}{t} \leq \dfrac{1}{x}$.
> 2. Deduce that $\dfrac{1}{x+1} \leq \ln\!\left(1 + \dfrac{1}{x}\right) \leq \dfrac{1}{x}$.
> 3. Deduce that, for every integer $n \geq 1$, one has
> $$\exp\!\left(\frac{n}{x+1}\right) \leq f_n(x) \leq \exp\!\left(\frac{n}{x}\right).$$
> 
> 2.2 A criterion of explosivity.
> 4. Let $a$ be a strictly positive real and $(x_n)$ the sequence associated to $a$. Can the sequence $(x_n)$ be bounded above? Can it be convergent?
> For every integer $n \geq 1$, we set $y_n = \dfrac{n+1}{\ln(x_{n+1})}$.
> 5. a. Study the variations of the function $g$ defined on $]2,+\infty[$ by
> $$g(x) = \frac{x}{\ln(x+1)} \quad \text{for every real } x \geq 0.$$
>    b. Deduce that, for every integer $n \geq 0$, one has $y_n > e$.
>    c. Show that, for every integer $n \geq 2$, one has $x_n > 1$ and $y_{n-1} \leq \dfrac{n}{\ln(x_n)}$.
> 6. Let $a$ be a strictly positive real and $(x_n)$ the sequence associated to it.
>    a. Show that, for every integer $n \geq 8$, if $x_n < y_{n-1}$ then $x_{n+1} > 1$ and $x_{n+2} \geq e$.
>    b. Deduce that, if $a$ is explosive, then $x_n > 1$ and $x_{n+1} > e$ for every integer $n \geq 8$.
>    c. Show that, if $a$ is explosive, then $x_n > e$ for every integer $n \geq 8$.
>    d. Show that $a$ is explosive if and only if $y_{n-1} \leq x_n \leq \dfrac{e}{\ln(x_n)}$ for every integer $n \geq 8$.
> 7. Let $a$, $\beta$ and $\gamma$ be three strictly positive reals such that $a < \beta < \gamma$. Show that, if $a$ and $\gamma$ are explosive, then $\beta$ also is.
> 
> 2.3 A unique explosive number.
> Let $r$ and $s$ be two functions defined on $\mathbb{R}_+^*$ and such that $s(x) > 0$ for all $x > 0$. We designate by $r \circ s$ the function defined on $\mathbb{R}_+^*$ by $r \circ s(x) = r(s(x))$ for all $x > 0$. We then set $h_1 = f_1$ and
> $$h_n = f_n \circ h_{n-1} \quad \text{for every integer } n \geq 2.$$
> Moreover, we denote by $h_n[\mathbb{R}_+^*]$ the set of reals $h_n(x)$ as $x$ runs over $\mathbb{R}_+^*$.
> 8. a. Make explicit the expression of $h_2(x)$ for every real $x > 0$.
>    b. Show that, for every integer $n \geq 1$, the function $h_n$ is continuous on $\mathbb{R}_+^*$.
> 9. a. Show that, for every integer $n \geq 1$, the function $h_n$ is strictly monotone on $\mathbb{R}_+^*$.
>    b. With the help of the calculator and without further justification, determine approximate values to $10^{-3}$ of the reals $a$ and $b$ such that $h_8[\mathbb{R}_+^*]$ is the corresponding interval. Verify that $a < e$ and $b > e$.
>    c. Show that, for every integer $n \geq 9$, one has $e \in ]c, n] \subset h_{n-1}[\mathbb{R}_+^*]$.
>    d. Deduce that, for every integer $n \geq 9$, one has $]a, n] \subset h_{n-1}[\mathbb{R}_+^*]$.
> For every real $n \geq 9$, we set $J_n = [y_{n-1}, n/\ln(y_n)]$ and we denote by $I_n$ the set of strictly positive reals such that $h_{n-1}(x) \in J_n$.
> 10. a. Show that, for every integer $n \geq 9$, there exist reals $a_n$ and $b_n$ such that $J_n = ]a_n, b_n]$.
>     b. Show that, for every integer $n \geq 9$, one has $J_{n+1} \subset J_n$.
> 11. a. Show that $a$ and $\beta$ are explosive.
>     b. Show that a single $x > 0$ is explosive if and only if $a \leq x \leq b$.
> 12. a. Show that, for every integer $n \geq 9$ and every real $x \in I_n$, one has
> $$|f_n'(x)| \geq \left|f_n\!\left(\frac{n}{\ln(x)}\right)\right|.$$
>     b. Deduce that, for every integer $n \geq 9$ and every real $x \in I_n$, one has
> $$|f_n'(x)| \geq \frac{y_n\,[\ln(y_n)]^2}{n}\exp\!\left(-\frac{1 + \ln(y_n)}{n + \ln(y_n)}\ln(y_n)\right).$$
>     c. Show that $\displaystyle\lim_{n \to +\infty} \frac{y_n \ln(n)}{n} = 1$ and $\displaystyle\lim_{n \to +\infty} \frac{\ln(y_n)}{\ln(n)} = 1$.
>     d. Deduce that there exists a real $N > 9$ such that, for every integer $n \geq N$ and every real $x \in I_n$, one has $|f_n'(x)| \geq 2$.
> 13. In this question, we designate by $N$ such an integer.
>     a. Deduce from question 12.d that, for every integer $n \geq N$ and every real $x \in I_n$, one has
> $$|f_n(x) - f_n(y)| \geq 2|x - y|.$$
>     b. Show that, if $a < \beta$, then there exists a strictly positive real $C$ such that $|a_n - \beta_n| \geq C \times 2^n$ for every integer $n \geq N$.
> 14. a. Show that there exists a unique explosive number.
>     b. With the help of the calculator and indicating the algorithm used, give an approximate value of $a$ to within $10^{-2}$.

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_estremalita|Estremalità]], [[method_ricorsione|Ricorsione]], [[method_backward|Backward]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1gqclWWaTQPwXGISec96nuFGo_EJgQbQL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Un numero esplosivo: la sequenza x_{n+1}=(1+1/x_n)^n con x_1=a; la funzione f_n(x)=(1+1/x)^n; un criterio di esplosività; dimostrando l'esistenza di un numero esplosivo unico tramite un argomento di contrazione.*

> Problema 2: Numero esplosivo (Un nombre explosif).
> 
> Se $a$ è un numero reale rigorosamente positivo, definiamo la sequenza $(x_n)$ da $x_1 = a$ e $$x_{n+1} = \left(1 + \frac{1}{x_n}\right)^n \quad \text{for every integer } n \geq 1,$$ che chiamiamo la sequenza associata a $a$. Diciamo che il numero $a$ è esplosivo se la sequenza $(x_n)$ associata a $a$ diverge da $+\infty$. L'obiettivo del problema è dimostrare che esiste un numero esplosivo unico.
> 
> Per ogni intero $n \geq 1$, designhiamo con $f_n$ la funzione definita su $\mathbb{R}_+^*$ da $$f_n(x) = \left(1 + \frac{1}{x}\right)^n \quad \text{for every real } x > 0,$$ in modo che per ogni intero $n \geq 1$, abbiamo $x_{n+1} = f_n(x_n)$. In tutto il problema, per ogni reale $t$, l'esponenziale di $t$ è indicato $\exp(t)$.
> 
> 2.1 Un delimitamento di $f_n(x)$. Che il $x$ sia un reale rigorosamente positivo. 1. Mostra che $\dfrac{1}{x+1} \leq \displaystyle\int_x^{x+1} \dfrac{dt}{t} \leq \dfrac{1}{x}$. 2. Riduzione di < MSK4/>. 3. Deduci che, per ogni numero intero $n \geq 1$, uno ha $$\exp\!\left(\frac{n}{x+1}\right) \leq f_n(x) \leq \exp\!\left(\frac{n}{x}\right).$$
> 
> 2.2 Criterio di esplosività. 4. Che $a$ sia un reale rigorosamente positivo e $(x_n)$ la sequenza associata a $a$. La sequenza $(x_n)$ può essere dilimitata sopra? Può essere convergente? Per ogni intero $n \geq 1$, impostamo $y_n = \dfrac{n+1}{\ln(x_{n+1})}$. 5. a. Studiare le variazioni della funzione $g$ definita su $]2,+\infty[$ da $$g(x) = \frac{x}{\ln(x+1)} \quad \text{for every real } x \geq 0.$$ b. Deduci che, per ogni numero intero $n \geq 0$, uno ha $y_n > e$. c. Mostrare che per ogni numero intero $n \geq 2$, uno ha $x_n > 1$ e $y_{n-1} \leq \dfrac{n}{\ln(x_n)}$. 6. Che $a$ sia un reale strettamente positivo e $(x_n)$ la sequenza associata a esso. a. Indicare che, per ogni numero intero $n \geq 8$, se $x_n < y_{n-1}$ allora $x_{n+1} > 1$ e $x_{n+2} \geq e$. b. Se $a$ è esplosivo, dedurre che $x_n > 1$ e $x_{n+1} > e$ per ogni numero intero $n \geq 8$. c. Indicare che, se $a$ è esplosivo, allora $x_n > e$ per ogni numero intero $n \geq 8$. d. Indicare che $a$ è esplosivo se e solo se $y_{n-1} \leq x_n \leq \dfrac{e}{\ln(x_n)}$ per ogni numero intero $n \geq 8$. 7. Se $a$, $\beta$ e $\gamma$ sono tre valori rigorosamente positivi tali che $a < \beta < \gamma$. Indicare che, se $a$ e $\gamma$ sono esplosivi, allora anche $\beta$ lo è.
> 
> 2.3 Numero esplosivo unico. Lasciate che $r$ e $s$ siano due funzioni definite su $\mathbb{R}_+^*$ e tali che $s(x) > 0$ per tutte le $x > 0$. Indichiamo con $r \circ s$ la funzione definita su $\mathbb{R}_+^*$ con $r \circ s(x) = r(s(x))$ per tutti $x > 0$. Quindi impostamo $h_1 = f_1$ e $$h_n = f_n \circ h_{n-1} \quad \text{for every integer } n \geq 2.$$ Inoltre, indichiamo con $h_n[\mathbb{R}_+^*]$ l'insieme dei reali $h_n(x)$ come $x$ corre su $\mathbb{R}_+^*$. 8. a. Indicare esplicitamente l'espressione di $h_2(x)$ per ogni $x > 0$ reale. b. Mostra che per ogni numero intero $n \geq 1$, la funzione $h_n$ è continua su $\mathbb{R}_+^*$. 9. a. Mostra che per ogni numero intero $n \geq 1$, la funzione $h_n$ è strettamente monotona su $\mathbb{R}_+^*$. b. Con l'aiuto del calcolatore e senza ulteriore giustificazione, determinare valori approssimativi a $10^{-3}$ dei valori reali $a$ e $b$ in modo tale che $h_8[\mathbb{R}_+^*]$ sia l'intervallo corrispondente. Verificare che < MSK30/> e < MSK31/>. c. Mostrare che per ogni intero $n \geq 9$, uno ha $e \in ]c, n] \subset h_{n-1}[\mathbb{R}_+^*]$. d. Deduci che, per ogni intero $n \geq 9$, uno ha $]a, n] \subset h_{n-1}[\mathbb{R}_+^*]$. Per ogni reale $n \geq 9$, imponiamo $J_n = [y_{n-1}, n/\ln(y_n)]$ e denonizziamo con $I_n$ l'insieme di reali rigorosamente positivi come $h_{n-1}(x) \in J_n$. 10. a. Mostrare che per ogni numero intero $n \geq 9$ esistono valori reali $a_n$ e $b_n$ tali da $J_n = ]a_n, b_n]$. b. Mostrare che per ogni numero intero $n \geq 9$, uno ha $J_{n+1} \subset J_n$. 11. a. Indicare che $a$ e $\beta$ sono esplosivi. b. Indicare che un singolo $x > 0$ è esplosivo se e solo se $a \leq x \leq b$. 12. a. Mostrare che per ogni intero $n \geq 9$ e per ogni reale $x \in I_n$, si ha $$|f_n'(x)| \geq \left|f_n\!\left(\frac{n}{\ln(x)}\right)\right|.$$ b. Deduci che, per ogni intero $n \geq 9$ e per ogni reale $x \in I_n$, si ha $$|f_n'(x)| \geq \frac{y_n\,[\ln(y_n)]^2}{n}\exp\!\left(-\frac{1 + \ln(y_n)}{n + \ln(y_n)}\ln(y_n)\right).$$ c. Indicare che < MSK54/> e < MSK55/>. d. Deduci che esiste un $N > 9$ reale in modo tale che, per ogni intero $n \geq N$ e per ogni reale $x \in I_n$, si abbia $|f_n'(x)| \geq 2$. 13. In questa domanda, indichiamo con $N$ un tale intero. a. Dalla domanda 12.d si deduce che per ogni intero $n \geq N$ e per ogni reale $x \in I_n$ si ha $$|f_n(x) - f_n(y)| \geq 2|x - y|.$$ b. Mostrare che, se $a < \beta$, allora esiste un reale $C$ strettamente positivo tale che $|a_n - \beta_n| \geq C \times 2^n$ per ogni intero $n \geq N$. 14. a. Mostrare che esiste un numero esplosivo unico. b. Con l'aiuto del calcolatore e indicando l'algoritmo utilizzato, indicare un valore approssimativo di $a$ all'interno di $10^{-2}$.

[[src_cgen_2020__Q02]]
