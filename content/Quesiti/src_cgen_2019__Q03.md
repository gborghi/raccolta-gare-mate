---
title: Concours Général des Lycées 2019 — Matematica — Quesito 3
tipo: quesito
quesito_id: quesito_src_cgen_2019__Q03
parent: src_cgen_2019
competition: Concours Général des Lycées 2019 — Matematica
family: concours_generale
year: '2019'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  More than one chance in two for everyone: non-transitive dice and urns;
  compute and compare winning probabilities, analyze a choosing game, use the
  Fibonacci sequence and prove a non-transitive distribution exists for every n
  by induction.
qa_score: '2'
topics:
  - topic_probabilita
  - topic_combinatoria
  - topic_algebra
methods:
  - method_induzione
  - method_conteggio
  - method_casework
  - method_ricorsione
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2019
  - livello/Concours-Général
  - topic/probabilita
  - topic/combinatoria
  - topic/algebra
  - gara/individuale
  - qa/da-verificare
---

*More than one chance in two for everyone: non-transitive dice and urns; compute and compare winning probabilities, analyze a choosing game, use the Fibonacci sequence and prove a non-transitive distribution exists for every n by induction.*

> $\textbf{3.1 Dice and urns}$
> $\textbf{1.}$ In this question, one supposes that one has three urns $A$, $B$ and $C$ that contain each tokens indistinguishable by touch. The tokens of $A$ bear the numbers $11$, $6$, $10$, $3$ and $1$; those of $B$ bear the numbers $9$, $8$, $7$, $2$ and $5$; those of $C$ bear the numbers $11$, $5$, $4$, $3$ and $4$. One draws independently one token from each of the urns, one denotes respectively by $X_A$, $X_B$ and $X_C$ the numbers of the tokens drawn in $A$, $B$ and $C$.
> $\textbf{a.}$ One supposes here that the three urns contain each five tokens numbered such as above. Calculate the three probabilities $\mathbb{P}(X_A > X_B)$, $\mathbb{P}(X_B > X_C)$ and $\mathbb{P}(X_C > X_A)$.
> $\textbf{b.}$ Claire and Paul play at the following game: one of them begins by choosing a die, then the other chooses one of the two remaining dice that she contests. They each throw their die and the one who obtains the larger number wins. Does Claire have an interest in choosing her die before Paul or in letting him choose first?
> $\textbf{c.}$ Finally, it is decided that it is Paul who chooses first. Which die or dice does he have an interest in choosing?
> $\textbf{d.}$ Claire and Paul then decide to modify the rules. One of them chooses one of the three dice. Then the other takes die $D_2$ first. Which die does Claire have an interest in choosing, and in letting choose first?
> 
> $\textbf{2.}$ In this question, one supposes that one has three balanced six-faced dice $D_1$, $D_2$ and $D_3$, where the faces of $D_1$ bear the numbers $0$, $0$, $4$, $4$, $4$, $4$; those of $D_2$ bear the numbers $3$, $3$, $3$, $3$, $3$, $3$; and those of $D_3$ bear the numbers $6$, $6$, $2$, $2$, $2$, $2$.
> $\textbf{a.}$ One throws independently each of the three dice and one denotes respectively by $X_1$, $X_2$ and $X_3$ the numbers indicated by the upper face of the dice $D_1$, $D_2$ and $D_3$. Calculate the three probabilities $\mathbb{P}(X_1 > X_2)$, $\mathbb{P}(X_2 > X_3)$ and $\mathbb{P}(X_3 > X_1)$.
> $\textbf{b.}$ Claire and Paul play at the following game: one of them begins by choosing a die, then the other chooses one of the two remaining dice. They each throw their die and the one who obtains the larger number wins. Does Claire have an interest in choosing her die before Paul or in letting him choose first?
> $\textbf{c.}$ Finally, it is decided that it is Paul who chooses first. Which die or dice does he have an interest in choosing?
> $\textbf{d.}$ Claire and Paul then decide to modify the rules: one of them chooses one of the three dice, then the other takes die $D_2$. Which die does Claire have an interest in choosing?
> 
> $\textbf{3.2 The Fibonacci sequence and the urns}$
> The Fibonacci sequence $(F_n)_{n \ge 0}$ is defined by $F_0 = 0$, $F_1 = 1$ and, for every integer $n \ge 0$,
> $$F_{n+2} = F_{n+1} + F_n.$$
> $\textbf{1.}$ Show, for every integer $n \ge 3$, that $\sqrt{2}\, F_n < F_{n+1} < 2 F_n$.
> $\textbf{2.}$ Let $k \ge 4$ be an integer. In this question, one supposes that one has three urns $A$, $B$ and $C$ as well as $3 F_k$ tokens indistinguishable by touch, numbered from $1$ to $3 F_k$. One distributes these tokens in the following manner:
> $\bullet$ the $F_{k-2}$ tokens of largest numbers are placed in $A$;
> $\bullet$ the $F_{k-1}$ tokens of largest numbers remaining are placed in $B$;
> $\bullet$ the $F_k$ tokens of largest numbers remaining are placed in $C$;
> $\bullet$ the $F_{k-1}$ tokens of largest numbers remaining are placed in $A$;
> $\bullet$ the $F_{k-2}$ last tokens are placed in $B$.
> One draws independently one token from each of the urns $A$, $B$ and $C$, one denotes respectively by $X_A$, $X_B$ and $X_C$ the numbers of the tokens drawn in $A$, $B$ and $C$.
> $\textbf{a.}$ Show the two inequalities $\mathbb{P}(X_A > X_B) \ge \frac{1}{2}$ and $\mathbb{P}(X_B > X_C) \ge \frac{1}{2}$.
> $\textbf{b.}$ Claire and Paul play at the following game: one of them begins by choosing one of the three urns; then the other player chooses one of the two remaining urns that he contests. They each draw a token from their urn and the one who draws the larger number wins. Does Claire have an interest in choosing her urn before Paul or in letting him choose first?
> 
> $\textbf{3.3 Non-transitive urns}$
> Let $n \ge 3$ be an integer. One has three urns $A$, $B$ and $C$ and $3n$ tokens indistinguishable by touch, numbered from $1$ to $3n$. One distributes the tokens in the three urns so that each urn contains $n$ tokens. One draws then independently one token from each of the three urns, and one denotes respectively by $X_A$, $X_B$ and $X_C$ the numbers of the tokens drawn in $A$, $B$ and $C$. One says that such a distribution is non-transitive when the probabilities $\mathbb{P}(X_A > X_B)$, $\mathbb{P}(X_B > X_C)$ and $\mathbb{P}(X_C > X_A)$ are all strictly greater than $\frac{1}{2}$.
> $\textbf{1.}$ In this question, one considers a non-transitive distribution of the $3n$ tokens numbered from $1$ to $3n$. One forms three new urns $D$, $E$, $F$: urn $D$ contains the content of the urn $A$, as well as the tokens numbered $3n+1$ and $3n+6$; urn $E$ contains the content of the urn $B$, as well as the tokens numbered $3n+4$ and $3n+5$; urn $F$ contains the content of the urn $C$, as well as the tokens numbered $3n+2$ and $3n+3$. Each of the urns $D$, $E$ and $F$ thus contains $n+2$ tokens. One draws then independently one token from each of the urns $D$, $E$ and $F$, and one denotes respectively by $X_D$, $X_E$ and $X_F$ the numbers of the tokens drawn in $D$, $E$ and $F$.
> $\textbf{a.}$ Show that the probabilities $\mathbb{P}(X_D > X_E)$, $\mathbb{P}(X_E > X_F)$ and $\mathbb{P}(X_F > X_D)$ are strictly greater than $\frac{1}{2}$.
> $\textbf{b.}$ Show that each of the probabilities $\mathbb{P}(X_D > X_E)$, $\mathbb{P}(X_E > X_F)$ and $\mathbb{P}(X_F > X_D)$ is strictly greater than $\frac{1}{2}$.
> $\textbf{2.}$ Let $n \ge 3$ be an integer. One denotes by $\mathscr{N}_n$ the following property: it is possible to distribute $3n$ tokens indistinguishable by touch, numbered from $1$ to $3n$, in three urns $A$, $B$ and $C$ so that the two conditions below are simultaneously satisfied:
> $\bullet$ Each of the three urns contains $n$ tokens.
> $\bullet$ If one draws independently one token from each of the urns and denotes respectively by $X_A$, $X_B$ and $X_C$ the numbers of the tokens drawn in $A$, $B$ and $C$, then the probabilities $\mathbb{P}(X_A > X_B)$, $\mathbb{P}(X_B > X_C)$ and $\mathbb{P}(X_C > X_A)$ are strictly greater than $\frac{1}{2}$.
> $\textbf{a.}$ Show that the properties $\mathscr{N}_3$ and $\mathscr{N}_4$ are true.
> $\textbf{b.}$ Show, for every integer $n \ge 3$, that the assertion $\mathscr{N}_n$ is true.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_induzione|Induzione]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
