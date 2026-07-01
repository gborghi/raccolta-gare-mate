---
title: Olympiades Nationales de Mathématiques (Première) 2025 — Quesito 11
tipo: quesito
lang: en
quesito_id: quesito_src_oprem_2025__Q11
parent: src_oprem_2025
competition: Olympiades Nationales de Mathématiques (Première) 2025
family: olympiades_premiere
year: '2025'
level: Olympiades Première
country: Francia
modalita: individuale
quesito: '11'
summary: >-
  Python: u_{k+1}=6u_k-u_{k-1}; explain mystere(n) (computes 1+...+(n-1)); write
  equilibre(n) returning True/False
qa_score: '3'
topics:
  - topic_aritmetica
  - topic_algebra
methods:
  - method_ricorsione
  - method_conteggio
skills:
  - skill_lettura_attenta
  - skill_modellizzazione
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/francia
  - comp/olimpiadi-premiere
  - anno/2025
  - livello/Olympiades-Première
  - topic/aritmetica
  - topic/algebra
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Python: u_{k+1}=6u_k-u_{k-1}; explain mystere(n) (computes 1+...+(n-1)); write equilibre(n) returning True/False*

> **Exercise 2 - For candidates of the general stream following the 'spe maths' specialty**
> 
> **4. Testing in Python language whether a number is balanced or not.**
> 
> **(a)** Establish that for every integer $k \ge 2$, $u_{k+1} = 6u_k - u_{k-1}$.
> 
> **(b)** Consider the following function `mystere(n)`, which takes as argument an integer $n$ at least equal to 2:
> ```python
> def mystere(n):
>     s=1
>     i=2
>     while i<n:
>         s=s+i
>         i=i+1
>     return s
> ```
> Explain what the function `mystere(n)` computes.
> 
> **(c)** Write a function `equilibre(n)` taking as argument an integer $n$ at least equal to 2 and returning `True` if $n$ is a balanced number and `False` otherwise (one may use the approach of question 4a or of question 4b, explaining nevertheless which method is reasonably usable on the computer).

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1HsE1DBbBvOrtVhIU9-kZBY7SbmdMBHbu/view)


<span class="qlang-split" data-lang="it"></span>


*Python: u_{k+1}=6u_k-u_{k-1}; spiegare il mistero(n) (computatori 1+...+(n-1)); scrivere l'equilibrio(n) restituendo True/False*

> **Esercizio 2 - Per i candidati del flusso generale che seguono la specialità "spe mathematics"**
> 
> **4. Testare in Python se un numero è equilibrato o meno.**
> 
> **(a) ** Stabilire che per ogni numero intero $k \ge 2$, $u_{k+1} = 6u_k - u_{k-1}$.
> 
> **(b) ** Si consideri la seguente funzione `mystere(n) `, che prende come argomento un numero intero $n$ almeno uguale a 2: ```python def mystere(n): s=1 i=2 mentre i<n: s=s+i i=i+1 restituisce s ``` Spiega cosa calcola la funzione `mystere(n) `.
> 
> **(c) ** Scrivere una funzione `equilibrio(n) ` prendendo come argomento un intero $n$ almeno uguale a 2 e restituendo `True` se $n$ è un numero equilibrato e `False` altrimenti (si può usare l'approccio della domanda 4a o della domanda 4b, spiegando tuttavia quale metodo è ragionevolmente utilizzabile sul computer).

[[src_oprem_2025__Q11]]
