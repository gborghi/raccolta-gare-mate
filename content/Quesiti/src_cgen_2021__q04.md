---
title: Concours Général des Lycées 2021 — Matematica — Quesito 4
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2021__Q04
parent: src_cgen_2021
competition: Concours Général des Lycées 2021 — Matematica
family: concours_generale
year: '2021'
level: Concours Général
country: Francia
modalita: individuale
quesito: '4'
summary: >-
  Que la force soit avec f!: a positive function f on an interval I subset of
  [0,+inf) is called k-strong or k-weak depending on the sign of (y^k f(y) - x^k
  f(x))(f(y)/y^k - f(x)/x^k); examples, equivalent criteria, monotonicity of
  g_k=x^k f and h_k=f/x^k, derivative criteria, products/compositions, and
  applications to inequalities (a,b,c power means and a sin/tan inequality).
qa_score: '1'
topics:
  - topic_algebra
  - topic_disuguaglianze
  - topic_insiemi_funzioni
  - topic_trigonometria
methods:
  - method_disuguaglianze
  - method_casework
  - method_trigonometria
  - method_fattorizzazione
skills:
  - skill_manipolazione_algebrica
  - skill_astrazione
  - skill_riconoscimento_pattern
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2021
  - livello/Concours-Général
  - topic/algebra
  - topic/disuguaglianze
  - topic/insiemi_funzioni
  - topic/trigonometria
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Que la force soit avec f!: a positive function f on an interval I subset of [0,+inf) is called k-strong or k-weak depending on the sign of (y^k f(y) - x^k f(x))(f(y)/y^k - f(x)/x^k); examples, equivalent criteria, monotonicity of g_k=x^k f and h_k=f/x^k, derivative criteria, products/compositions, and applications to inequalities (a,b,c power means and a sin/tan inequality).*

> Probleme 3: "Que la force soit avec $f$ !" (May the force be with $f$!). In all of this problem, $k$ designates a non-zero natural integer, $I$ an interval included in $]0,+\infty[$, and $f$ a function defined on $I$ with strictly positive values.
> One says that the function $f$ is "$k$-strong" if, for all reals $x$ and $y$ belonging to $I$,
> $$\left(y^k f(y)-x^k f(x)\right)\left(\frac{f(y)}{y^k}-\frac{f(x)}{x^k}\right)\ge0$$
> One says that $f$ is "$k$-weak" if, for all reals $x$ and $y$ belonging to $I$,
> $$\left(y^k f(y)-x^k f(x)\right)\left(\frac{f(y)}{y^k}-\frac{f(x)}{x^k}\right)\le0$$
> 
> 3.1 Some examples and properties.
> 1. Show that the function $f_1$ defined on the interval $]0,+\infty[$ by $f_1(x)=x^2$ is $1$-strong and $3$-weak.
> 2. Show that the function $f_2$ defined on the interval $]0,1[$ by $f_2(x)=\exp(x)$ is $1$-weak but not $1$-strong.
> 3. Show that the function $f_3$ defined on the interval $]1,+\infty[$ by $f_3(x)=\exp(x)$ is $1$-strong but not $1$-weak.
> 4. Show that the function $f_4$ defined on the interval $]0,+\infty[$ by $f_4(x)=\frac{1}{x}$ is $k$-weak for every integer $k\ge1$.
> 5. Does there exist a function defined on the interval $]0,+\infty[$ that is $k$-strong for every integer $k\ge1$?
> 
> 3.2 Some criteria of strength and weakness.
> 6. Show that $f$ is $k$-strong if and only if
> $$\frac{x^k}{y^k}+\frac{y^k}{x^k}\le\frac{f(x)}{f(y)}+\frac{f(y)}{f(x)}$$
> for all reals $x$ and $y$ belonging to $I$, and that $f$ is $k$-weak if and only if
> $$\frac{x^k}{y^k}+\frac{y^k}{x^k}\ge\frac{f(x)}{f(y)}+\frac{f(y)}{f(x)}$$
> for all reals $x$ and $y$ belonging to $I$.
> 7. Show that $f$ is $k$-strong if and only if
> $$\frac{\max(x^k,y^k)}{\min(x^k,y^k)}\le\frac{\max(f(x),f(y))}{\min(f(x),f(y))}$$
> for all reals $x$ and $y$ belonging to $I$, and that $f$ is $k$-weak if and only if
> $$\frac{\max(x^k,y^k)}{\min(x^k,y^k)}\ge\frac{\max(f(x),f(y))}{\min(f(x),f(y))}$$
> for all reals $x$ and $y$ belonging to $I$.
> 8. One notes $g_k$ and $h_k$ the functions defined on $I$ by:
> $$g_k(x)=x^k f(x)\qquad\text{and}\qquad h_k(x)=\frac{f(x)}{x^k}$$
>    a. Show that, if $g_k$ and $h_k$ are monotone, then $f$ is $k$-strong or $k$-weak.
>    b. Show that, if $f$ is $k$-weak, then $g_k$ and $h_k$ are monotone.
>    c. Let $f$ be the function defined on the interval $I=]0,+\infty[$ by
> $$f(x)=\begin{cases}x&\text{if }0<x<1\\4&\text{if }x=1\\x&\text{if }1<x<2\\4x&\text{if }2\le x\end{cases}$$
>    Show that $f$ is $1$-strong but that the functions $g_1$ and $h_1$ are not monotone.
> 9. One supposes in this question that $f$ is differentiable on $I$ and that its derivative $f'$ is continuous on $I$.
>    a. Show that, if $|f'(x)|\ge k\frac{f(x)}{x}$ for every real $x\in I$, then $f$ is $k$-strong.
>    b. Show that, if $|f'(x)|\le k\frac{f(x)}{x}$ for every real $x\in I$, then $f$ is $k$-weak.
>    c. Show that the converses of questions 9.a. and 9.b. are true.
> 
> 3.3 A multitude of strong and weak functions.
> One says that the function $f$ is "strong" if there exists an integer $k\ge1$ for which $f$ is $k$-strong, and "weak" if there exists an integer $k\ge1$ for which $f$ is $k$-weak.
> 10. Show that, if $f$ is weak, the function $F$ defined on $I$ by $F(x)=\frac{1}{f(x)}$ is strong.
> 11. Show that, if two functions $f$ and $g$ defined on $I$ are weak, the functions $f+g$, $f\times g$ and $\frac{f}{g}$ are weak.
> 12. Show, with the help of counter-examples, that if two functions $f$ and $g$ defined on $I$ are strong, the functions $f+g$, $f\times g$ and $\frac{f}{g}$ are not necessarily strong.
> 13. Let $f$ be a function defined on $I$ with strictly positive values, and $g$ a function defined on $]0,+\infty[$.
>    a. Show that, if $f$ and $g$ are weak, the function $g\circ f$ is weak.
>    b. Show that, if $f$ and $g$ are strong, the function $g\circ f$ is strong.
> 
> 3.4 Application to the demonstration of inequalities.
> 14. Let $a,b$ and $c$ be three strictly positive reals, and $n$ a non-zero natural integer. Show that:
> $$\left(\frac{a+c}{b+c}\right)^n+\left(\frac{b+c}{a+c}\right)^n\le\left(\frac{a}{b}\right)^n+\left(\frac{b}{a}\right)^n$$
> 15. In this question, one may use the fact that the functions $\cos$ and $\sin$ are differentiable on $]0,\frac{\pi}{2}[$ with derivatives respectively $\cos'=-\sin$ and $\sin'=\cos$. The function $\tan$ is defined on $]0,\frac{\pi}{2}[$ by $\tan(x)=\frac{\sin(x)}{\cos(x)}$. Let $a$ and $b$ be two real numbers of the interval $]0,\frac{\pi}{2}[$, show that:
> $$\frac{\sin(a)}{\sin(b)}+\frac{\sin(b)}{\sin(a)}\le\frac{a}{b}+\frac{b}{a}\le\frac{\tan(a)}{\tan(b)}+\frac{\tan(b)}{\tan(a)}$$

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]], [[method_trigonometria|Trigonometria]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1mpuoT_Bn4czxgorxXLmkmdqsNnb4j2Av/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Que la force soit avec f!: una funzione positiva f su un sottoinsieme di intervalli I di [0,+inf) è chiamata k-forte o k-fragile a seconda del segno di (y^k f(y) - x^k f(x)) f(y)/y^k - f(x)/x^k); esempi, criteri equivalenti, monotonia di g_k=x^k f e h_k=f/x^k, criteri derivati, prodotti/composti e applicazioni alle disuguaglianze (a,b,c mezzi di potenza e una disuguaglianza sin/tanc).*

> Problemi 3: "Que la force soit avec $f$ !" (La forza sia con $f$!). In tutto questo problema, $k$ designa un intero naturale non zero, $I$ un intervallo incluso in $]0,+\infty[$, e $f$ una funzione definita su $I$ con valori strettamente positivi. Si dice che la funzione $f$ è "$k$-forte" se, per tutti i valori $x$ e $y$ appartenenti a $I$, $$\left(y^k f(y)-x^k f(x)\right)\left(\frac{f(y)}{y^k}-\frac{f(x)}{x^k}\right)\ge0$$ Si dice che $f$ è "$k$-debole" se, per tutti i valori $x$ e $y$ appartenenti a $I$, $$\left(y^k f(y)-x^k f(x)\right)\left(\frac{f(y)}{y^k}-\frac{f(x)}{x^k}\right)\le0$$
> 
> 3.1 Alcuni esempi e proprietà. 1. Indicare che la funzione $f_1$ definita nell'intervallo $]0,+\infty[$ da $f_1(x)=x^2$ è $1$-forte e $3$-debole. 2. Indicare che la funzione $f_2$ definita nell'intervallo $]0,1[$ da $f_2(x)=\exp(x)$ è $1$ debole ma non $1$ forte. 3. Indicare che la funzione $f_3$ definita nell'intervallo $]1,+\infty[$ da $f_3(x)=\exp(x)$ è $1$-forte ma non $1$-debole. 4. Indicare che la funzione $f_4$ definita nell'intervallo $]0,+\infty[$ da $f_4(x)=\frac{1}{x}$ è $k$ debole per ogni intero $k\ge1$. 5. Esiste una funzione definita nell'intervallo $]0,+\infty[$ che è $k$-forte per ogni numero intero $k\ge1$?
> 
> 3.2 Alcuni criteri di forza e debolezza. 6. Indicare che $f$ è $k$-forte se e solo se $$\frac{x^k}{y^k}+\frac{y^k}{x^k}\le\frac{f(x)}{f(y)}+\frac{f(y)}{f(x)}$$ per tutti i valori $x$ e $y$ appartenenti a $I$, e che $f$ è $k$-debole se e solo se $$\frac{x^k}{y^k}+\frac{y^k}{x^k}\ge\frac{f(x)}{f(y)}+\frac{f(y)}{f(x)}$$ per tutti i valori $x$ e $y$ appartenenti a $I$. 7. Indicare che $f$ è $k$-forte se e solo se $$\frac{\max(x^k,y^k)}{\min(x^k,y^k)}\le\frac{\max(f(x),f(y))}{\min(f(x),f(y))}$$ per tutti i reali $x$ e $y$ appartenenti a $I$, e che $f$ è $k$-debole se e solo se $$\frac{\max(x^k,y^k)}{\min(x^k,y^k)}\ge\frac{\max(f(x),f(y))}{\min(f(x),f(y))}$$ per tutti i reali $x$ e $y$ appartenenti a $I$. 8. Una nota $g_k$ e $h_k$ le funzioni definite su $I$ da: $$g_k(x)=x^k f(x)\qquad\text{and}\qquad h_k(x)=\frac{f(x)}{x^k}$$ a. Indicare che, se < MSK29/> e < MSK30/> sono monotoni, allora < MSK31/> è < MSK32/>-forte o < MSK33/>-debole. b. Indicare che, se $f$ è $k$ debole, $g_k$ e $h_k$ sono monotoni. c. Se $f$ è la funzione definita nell'intervallo $I=]0,+\infty[$ da $$f(x)=\begin{cases}x&\text{if }0<x<1\\4&\text{if }x=1\\x&\text{if }1<x<2\\4x&\text{if }2\le x\end{cases}$$ Mostri che $f$ è $1$-forte ma che le funzioni $g_1$ e $h_1$ non sono monotone. 9. In questa domanda si suppone che $f$ sia differenziabile su $I$ e che la sua derivata $f'$ sia continua su $I$. a. Mostra che, se $|f'(x)|\ge k\frac{f(x)}{x}$ per ogni reale $x\in I$, allora $f$ è $k$-forte. b. Mostrare che, se $|f'(x)|\le k\frac{f(x)}{x}$ per ogni reale $x\in I$, allora $f$ è $k$ debole. c. Mostrare che le conversazioni delle domande 9.a. e 9.b. sono veri.
> 
> 3.3 Una moltitudine di funzioni forti e deboli. Si dice che la funzione $f$ è "forte" se esiste un intero $k\ge1$ per il quale $f$ è $k$-forte, e "debole" se esiste un intero $k\ge1$ per il quale $f$ è $k$-debole. 10. Indicare che, se $f$ è debole, la funzione $F$ definita su $I$ da $F(x)=\frac{1}{f(x)}$ è forte. 11. Indicare che, se due funzioni $f$ e $g$ definite su $I$ sono deboli, le funzioni $f+g$, $f\times g$ e $\frac{f}{g}$ sono deboli. 12. Mostrare, con l'aiuto di esempi contrastanti, che se due funzioni $f$ e $g$ definite su $I$ sono forti, le funzioni $f+g$, $f\times g$ e $\frac{f}{g}$ non sono necessariamente forti. 13. Che $f$ sia una funzione definita su $I$ con valori rigorosamente positivi, e $g$ una funzione definita su $]0,+\infty[$. a. Indicare che, se $f$ e $g$ sono deboli, la funzione $g\circ f$ è debole. b. Indicare che, se $f$ e $g$ sono forti, la funzione $g\circ f$ è forte.
> 
> 3.4 Applicazione alla dimostrazione delle disuguaglianze. 14. Lasciate che $a,b$ e $c$ siano tre reali strettamente positivi e $n$ un intero naturale non zero. Mostra che: $$\left(\frac{a+c}{b+c}\right)^n+\left(\frac{b+c}{a+c}\right)^n\le\left(\frac{a}{b}\right)^n+\left(\frac{b}{a}\right)^n$$ 15. In questa domanda si può usare il fatto che le funzioni $\cos$ e $\sin$ sono differenziabili su $]0,\frac{\pi}{2}[$ con derivati rispettivamente $\cos'=-\sin$ e $\sin'=\cos$. La funzione $\tan$ è definita su $]0,\frac{\pi}{2}[$ da $\tan(x)=\frac{\sin(x)}{\cos(x)}$. Che $a$ e $b$ siano due numeri reali dell'intervallo $]0,\frac{\pi}{2}[$, mostrando che: $$\frac{\sin(a)}{\sin(b)}+\frac{\sin(b)}{\sin(a)}\le\frac{a}{b}+\frac{b}{a}\le\frac{\tan(a)}{\tan(b)}+\frac{\tan(b)}{\tan(a)}$$

[[src_cgen_2021__Q04]]
