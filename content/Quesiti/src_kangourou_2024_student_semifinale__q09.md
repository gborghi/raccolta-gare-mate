---
title: Kangourou 2024 Student semifinale — Quesito 9
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2024_student_semifinale__Q09
parent: src_kangourou_2024_student_semifinale
competition: Kangourou 2024 Student semifinale
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '9'
summary: Massimo numero di telecamere ridondanti su strada 1000m
answer: E
topics:
  - topic_combinatoria
methods:
  - method_estremalita
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Massimo numero di telecamere ridondanti su strada 1000m*

> (Punti 6) Una strada rettilinea lunga 1.000 metri viene controllata mediante n telecamere ognuna 
> delle quali copre esattamente un tratto lungo 10 metri alla sua sinistra e 10 metri alla sua destra, 
> estremi inclusi, ma non copre alcun punto fuori dalla strada. Le telecamere sono più del necessario 
> ma sono disposte in modo tale che, se anche una sola di esse non funzionasse, rimarrebbe scoperto 
> qualche tratto di strada. Qual è il massimo valore possibile per n? 
> A) 49               B) 50             C) 51              D) 74              E) 98 
> Risposta: E). Soluzione. Numeriamo le telecamere in modo progressivo lungo la strada partendo da 1. Se il 
> tratto coperto dalla k-esima intersecasse quello coperto dalla (k+2)-esima, la (k+1)-esima sarebbe inutile: allora 
> i tratti coperti da telecamere con numeri dispari sono disgiunti, dunque non possono essere più di 49. Deve 
> essere n < 99 poiché, in caso contrario, ci sarebbero almeno 50 “tratti dispari”. Può essere n = 98. È sufficiente 
> distribuire le 98 telecamere in modo che siano uniformemente distanziate con la prima e l’ultima a 10 metri 
> dall’estremo di strada corrispondente: la distanza tra la k-esima e la (k+2)-esima telecamera è allora di 2 × 980 
> / 97 metri che, essendo superiore a  20 metri, non può che essere coperta dalla (k+1)-esima telecamera (analogo 
> ragionamento agli estremi). 
>  
> Quesiti a risposta aperta

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/11NWtDaV2_YaiaIexOkVGXBtzkggc5RUg/view)


<span class="qlang-split" data-lang="en"></span>


Maximum number of redundant cameras on the road 1000m

> (Points 6) A 1,000-meter straight road is monitored by n cameras, each covering exactly 10 meters to its left and 10 meters to its right, extremes included, but not covering any point off the road. The cameras are more than necessary, but they are arranged in such a way that even if one of them does not work, some stretches of the road will be discovered. What's the maximum possible value for n? A) 49 B) 50 C) 51 D) 74 E) 98 Answer: E). The solution. Let's count the cameras gradually along the way starting with 1. If the section covered by the k-exima intersects the section covered by the (k+2)-exima, the (k+1)-exima would be useless: then the sections covered by cameras with odd numbers are disjoint, so they cannot be more than 49. It must be n < 99 because otherwise there would be at least 50 odd tracts. It can be n = 98. It is sufficient to distribute the 98 cameras so that they are evenly spaced with the first and last at 10 meters from the end of the corresponding street: the distance between the k-eighth and the (k+2)-eighth camera is then 2 × 980 / 97 meters which, being greater than 20 meters, can only be covered by the (k+1)-eighth camera (analog reasoning to the ends).
>  
> Open-ended questions

**Answer:** E
[[src_kangourou_2024_student_semifinale__Q09]]
