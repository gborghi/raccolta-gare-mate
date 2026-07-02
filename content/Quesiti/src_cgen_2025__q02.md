---
title: Concours Général des Lycées 2025 — Matematica — Quesito 2
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2025__Q02
parent: src_cgen_2025
competition: Concours Général des Lycées 2025 — Matematica
family: concours_generale
year: '2025'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  Positive and bounded sequences: for the recurrence u_{n+2}=u_{n+1}^2 - alpha
  u_n^4 with u_0=u_1=1, determine which real alpha make all terms positive
  (property P) and which make the sequence bounded (property B).
qa_score: '5'
topics:
  - topic_algebra
  - topic_disuguaglianze
  - topic_insiemi_funzioni
methods:
  - method_ricorsione
  - method_disuguaglianze
  - method_induzione
  - method_estremalita
skills:
  - skill_manipolazione_algebrica
  - skill_casework_accurato
  - skill_astrazione
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2025
  - livello/Concours-Général
  - topic/algebra
  - topic/disuguaglianze
  - topic/insiemi_funzioni
  - gara/individuale
---
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
