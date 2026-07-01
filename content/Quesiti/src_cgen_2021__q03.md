---
title: Concours Général des Lycées 2021 — Matematica — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2021__Q03
parent: src_cgen_2021
competition: Concours Général des Lycées 2021 — Matematica
family: concours_generale
year: '2021'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Probability problem on the number D_n of balls eliminated/remaining: study the
  probabilities p_j that ball number j is eliminated in the first selection, the
  largest probability M_n, the most probable result via property P_n
  (P(D_n=n)=M_n), and a chain of inequalities P(D_n=k)<=P(D_n=k+1) for k<=n-2.
  ONLY questions 8-17 are visible in the images (the statement/setup and
  questions 1-7 are not shown).
qa_score: '1'
topics:
  - topic_probabilita
  - topic_combinatoria
methods:
  - method_casework
  - method_ricorsione
  - method_induzione
  - method_conteggio
  - method_simmetria
skills:
  - skill_modellizzazione
  - skill_casework_accurato
  - skill_conteggio_sistematico
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2021
  - livello/Concours-Général
  - topic/probabilita
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Probability problem on the number D_n of balls eliminated/remaining: study the probabilities p_j that ball number j is eliminated in the first selection, the largest probability M_n, the most probable result via property P_n (P(D_n=n)=M_n), and a chain of inequalities P(D_n=k)<=P(D_n=k+1) for k<=n-2. ONLY questions 8-17 are visible in the images (the statement/setup and questions 1-7 are not shown).*

> Probleme (probability; title not visible, concerns a quantity $D_n$ counting balls; ONLY questions 8 onward are visible in the supplied images). It is now time to study the law of $D_n$ itself.
> 
> 8. Determine, for every integer $j$ such that $0\le j\le2n$, the probability $p_j$ that the ball of number $j$ is eliminated during the first selection.
> 
> 9. Show that, if $n\ge3$, then $p_j\ge\frac{1}{2n}$ for every integer $j$ such that $0\le j\le2n$.
> 
> 10. One notes $M_n$ the largest of the probabilities $\mathbb{P}[D_n=j]$ when $0\le j\le2n$. Show that $M_n$ tends to $0$ when $n$ tends to $+\infty$.
> 
> 2.4 Most probable result.
> One recalls that, for two events $A$ and $B$, one notes $A\setminus B$ the event according to which $A$ is realized but not $B$. Moreover, if $\mathbb{P}[B]\ne0$, one notes $\mathbb{P}_B[A]$ the conditional probability of $A$ knowing $B$.
> One wishes here to show, for every integer $n\ge1$, that $\mathbb{P}[D_n=n]=M_n$. To this end, one will show the following property $\mathscr{P}_n$:
>    For every integer $k$ such that $0\le k\le n-1$, one has $\mathbb{P}[D_n=k]\le\mathbb{P}[D_n=k+1]$.
> 
> 11. Show that, if $\mathscr{P}_n$ is true, then $\mathbb{P}[D_n=n]=M_n$. Show $\mathscr{P}_1$.
> 
> 12. Show $\mathscr{P}_1$.
> 
> One now supposes that one has an integer $n\ge2$ such that $\mathscr{P}_{n-1}$ is true and an integer $k$ such that $0\le k\le n-1$.
> 
> 13. For every integer $\ell$ between $0$ and $2n$, distinct from $k$ and $k+1$, one notes $X_\ell$ the event according to which the three balls of numbers $k$, $k+1$ and $\ell$ are chosen in the first selection.
>    a. Why, if $\ell>k+1$, does one have $\mathbb{P}_{X_\ell}[D_n=k]=0$ and $\mathbb{P}_{X_\ell}[D_n=k+1]=\mathbb{P}[D_{n-1}=k]$?
>    b. Give analogous results on $\mathbb{P}_{X_\ell}[D_n=k]$ and $\mathbb{P}_{X_\ell}[D_n=k+1]$ when $\ell<k$.
>    c. One notes now $X$ the event according to which the two balls of numbers $k$ and $k+1$ are chosen at the first selection. Show that $\mathbb{P}_X[D_n=k]\le\mathbb{P}_X[D_n=k+1]$.
> 
> 14. Let $Y$ be the event according to which one of the balls of numbers $k$ and $k+1$ is eliminated at the first selection.
>    a. Show that $\mathbb{P}_{Y\setminus X}[D_n=k]=\mathbb{P}_{Y\setminus X}[D_n=k+1]$.
>    b. Deduce that $\mathbb{P}_Y[D_n=k]\le\mathbb{P}_Y[D_n=k+1]$.
> 
> 15. Let $a,b$ and $c$ be the numbers of the three balls chosen at the first selection, with $a<b<c$.
>    a. Let $G$ be the event according to which $c<k$. Show that $\mathbb{P}_G[D_n=k]\le\mathbb{P}_G[D_n=k+1]$.
>    b. Let $H$ be the event according to which $a<k$ and $k+1<c$. Show that $\mathbb{P}_H[D_n=k]\le\mathbb{P}_H[D_n=k+1]$.
>    c. Let $I$ be the event according to which $k+1<a$. Show that, if $k\le n-2$, then: $\mathbb{P}_I[D_n=k]\le\mathbb{P}_I[D_n=k+1]$.
> 
> 16. Show that, if $k\le n-2$, then $\mathbb{P}[D_n=k]\le\mathbb{P}[D_n=k+1]$.
> 
> 17. Show $\mathscr{P}_n$.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]], [[method_conteggio|Conteggio]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1mpuoT_Bn4czxgorxXLmkmdqsNnb4j2Av/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Problema di probabilità sul numero D_n di palle eliminate/rimanenti: studiare le probabilità p_j che il numero di palla j venga eliminato nella prima selezione, la probabilità più grande M_n, il risultato più probabile attraverso la proprietà P_n (P(D_n=n)=M_n), e una catena di disuguaglianze P(D_n=k)<=P(D_n=k+1) per k<=n-2. SOLO le domande da 8 a 17 sono visibili nelle immagini (la dichiarazione/impostazione e le domande da 1-7 non sono mostrate).*

> Problemi (probabilità; titolo non visibile, riguarda una quantità < MSK0/> di palle di conteggio; solo le domande 8 in poi sono visibili nelle immagini fornite). Ora è il momento di studiare la legge del $D_n$ stesso.
> 
> 8. Determinare, per ogni numero intero $j$ tale che $0\le j\le2n$, la probabilità $p_j$ che la palla di numero $j$ venga eliminata durante la prima selezione.
> 
> 9. Indicare che, se $n\ge3$, allora $p_j\ge\frac{1}{2n}$ per ogni intero $j$ tale che $0\le j\le2n$.
> 
> 10. Una nota $M_n$ la più grande delle probabilità $\mathbb{P}[D_n=j]$ quando $0\le j\le2n$. Mostra che $M_n$ tende a $0$ quando $n$ tende a $+\infty$.
> 
> 2.4 Risultato più probabile. Si ricorda che, per due eventi $A$ e $B$, si nota $A\setminus B$ l'evento secondo il quale $A$ è realizzato ma non $B$. Inoltre, se $\mathbb{P}[B]\ne0$, si nota $\mathbb{P}_B[A]$ la probabilità condizionata di $A$ conoscere $B$. Qui si desidera mostrare, per ogni numero intero $n\ge1$, che $\mathbb{P}[D_n=n]=M_n$. A tal fine, si mostrerà la seguente proprietà $\mathscr{P}_n$: Per ogni numero intero $k$ tale che $0\le k\le n-1$, si ha $\mathbb{P}[D_n=k]\le\mathbb{P}[D_n=k+1]$.
> 
> 11. Mostra che, se $\mathscr{P}_n$ è vero, allora $\mathbb{P}[D_n=n]=M_n$. Indicare < MSK2/>.
> 
> 12. Indicare < MSK0/>.
> 
> Si suppone ora che si abbia un intero $n\ge2$ tale che $\mathscr{P}_{n-1}$ sia vero e un intero $k$ tale che $0\le k\le n-1$.
> 
> 13. Per ogni numero intero $\ell$ tra $0$ e $2n$, distinto da $k$ e $k+1$, si nota $X_\ell$ l'evento in base al quale le tre sfere di numeri $k$, $k+1$ e $\ell$ sono scelte nella prima selezione. a. Perché, se < MSK9/>, ci sono < MSK10/> e < MSK11/>? b. Risultati analoghi per < MSK12/> e < MSK13/> quando < MSK14/>. c. Si nota ora $X$ l'evento in base al quale le due palle di numeri $k$ e $k+1$ vengono scelte alla prima selezione. Mostra che < MSK18/>.
> 
> 14. $Y$ sia l'evento in base al quale una delle sfere di numeri $k$ e $k+1$ viene eliminata alla prima selezione. a. Mostra che $\mathbb{P}_{Y\setminus X}[D_n=k]=\mathbb{P}_{Y\setminus X}[D_n=k+1]$. b. Riduzione di < MSK4/>.
> 
> 15. $a,b$ e $c$ siano i numeri delle tre palle scelte nella prima selezione, con $a<b<c$. a. $G$ sia l'evento secondo il quale $c<k$. Mostra che $\mathbb{P}_G[D_n=k]\le\mathbb{P}_G[D_n=k+1]$. b. L'evento $H$ deve essere quello secondo cui $a<k$ e $k+1<c$. Mostra che $\mathbb{P}_H[D_n=k]\le\mathbb{P}_H[D_n=k+1]$. c. Il < MSK10/> deve essere l'evento secondo il quale < MSK11/>. Indicare che, se $k\le n-2$, allora: $\mathbb{P}_I[D_n=k]\le\mathbb{P}_I[D_n=k+1]$.
> 
> 16. Indicare che, se $k\le n-2$, allora $\mathbb{P}[D_n=k]\le\mathbb{P}[D_n=k+1]$.
> 
> 17. Indicare < MSK0/>.

[[src_cgen_2021__Q03]]
