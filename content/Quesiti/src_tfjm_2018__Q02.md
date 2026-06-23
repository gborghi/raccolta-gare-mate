---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018 — Quesito 2
tipo: quesito
quesito_id: quesito_src_tfjm_2018__Q02
parent: src_tfjm_2018
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018
family: tfjm
year: '2018'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '2'
summary: >-
  Comparing f(a,b), the number of Euclidean divisions in the standard Euclidean
  algorithm, with g(a,b), the minimal number using arbitrary earlier remainders,
  and finding lexicographically smallest pairs.
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_algebra
methods:
  - method_congruenze
  - method_ricorsione
  - method_estremalita
  - method_casework
skills:
  - skill_manipolazione_algebrica
  - skill_riconoscimento_pattern
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2018
  - livello/TFJM²
  - topic/aritmetica
  - topic/algebra
  - gara/squadre
  - qa/da-verificare
---

*Comparing f(a,b), the number of Euclidean divisions in the standard Euclidean algorithm, with g(a,b), the minimal number using arbitrary earlier remainders, and finding lexicographically smallest pairs.*

> Faster than Euclid? Morgane wants to compute the greatest common divisor (GCD) of two integers $a$ and $b$ with $a\ge b\ge 1$. She uses the classical Euclidean algorithm, where $r(x,y)$ denotes the remainder of the Euclidean division of $x$ by $y$:
> 
> 1: $i\leftarrow 0$
> 2: $(u_{-1},u_0)\leftarrow(a,b)$
> 3: While $u_i\ge 1$:
> 4: $\quad i\leftarrow i+1$
> 5: $\quad u_i\leftarrow r(u_{i-2},u_{i-1})$
> 6: Return $u_{i-1}$.
> 
> For example, to compute the GCD of $a=34$ and $b=21$, Morgane computes successively $u_1=r(34,21)=13$, $u_2=r(21,13)=8$, $u_3=r(13,8)=5$, $u_4=r(8,5)=3$, $u_5=r(5,3)=2$, $u_6=r(3,2)=1$, $u_7=r(2,1)=0$. She then returns $u_6=1$. The value of $i$ at the end of the algorithm is here $f(34,21)=7$. We denote by $f(a,b)$ this number of Euclidean divisions performed to compute the GCD of $a$ and $b$.
> 
> We define a lexicographic order on pairs: $(a,b)$ comes strictly before $(a',b')$ if and only if $a<a'$, or $a=a'$ and $b<b'$.
> 
> 1. For an integer $k$ fixed in advance, find the smallest pair $(a,b)$ for the lexicographic order such that $f(a,b)=k$.
> 
> To save effort, Morgane has another idea: rather than always using the two most recent results $u_{i-2}$ and $u_{i-1}$, she chooses at each step any two earlier values already computed and forms the remainder of the Euclidean division of the larger by the other. She then stops when she finds a value $d$ and has checked $r(a,d)=0$ and $r(b,d)=0$, and affirms that $d$ is the GCD of $a$ and $b$. For example, to compute the GCD of $a=u_{-1}=34$ and $b=u_0=21$, she may compute $u_1=r(34,21)=13$, $u_2=r(21,13)=8$, $u_3=r(13,8)=5$, $u_4=r(21,5)=1$, $u_5=r(34,1)=0$ and $u_6=r(21,1)=0$, and then affirm that $1$ is the GCD of $34$ and $21$.
> 
> 2. In the general case, i.e. for all possible pairs $a\ge b\ge 1$, is Morgane's affirmation in such examples correct?
> 
> 3. In the general case, is it enough to verify that $r(a,d)=0$ and $r(b,d)=0$ to affirm that $d$ is the GCD of $a$ and $b$?
> 
> We write $g(a,b)$ for the minimal number of Euclidean divisions Morgane must perform (in the manner described above) to compute the GCD of $a$ and $b$, including the divisions of $a$ and $b$ by $d$. The example above shows $g(34,21)\le 6$.
> 
> 4. Compute $g(34,21)$.
> 
> 5. Does there exist an integer $A$ such that one always has $g(a,b)\le f(a,b)+A$? If yes, give the smallest such $A$.
> 
> 6. Give a necessary condition and a sufficient condition on the pair $(a,b)$ for $g(a,b)=f(a,b)$.
> 
> 7. For which integers $A\ge 1$ does there exist a pair $(a,b)$ such that $g(a,b)+A\le f(a,b)$?
> 
> 8. For an integer $k$ fixed, what is the smallest pair $(a,b)$ for the lexicographic order such that $g(a,b)=k$? One may seek to express $a$ as a function of $k$.
> 
> 9. Propose and study other directions of research.

![[src_tfjm_2018__Q02.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
