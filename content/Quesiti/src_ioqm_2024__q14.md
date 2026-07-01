---
title: Indian Olympiad Qualifier in Mathematics (IOQM) 2024 — Quesito 14
tipo: quesito
lang: en
quesito_id: quesito_src_ioqm_2024__Q14
parent: src_ioqm_2024
competition: Indian Olympiad Qualifier in Mathematics (IOQM) 2024
family: ioqm
year: '2024'
level: IOQM
country: India
modalita: individuale
quesito: '14'
summary: 'Particles at (79,80) after 80 steps of splitting rule'
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_ricorsione
  - method_conteggio
  - method_induzione
skills:
  - skill_riconoscimento_pattern
  - skill_modellizzazione
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/india
  - comp/ioqm
  - anno/2024
  - livello/IOQM
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Particles at (79,80) after 80 steps of splitting rule*

> Initially, there are $3^{80}$ particles at the origin $(0,0)$. At each step the particles are moved to points above the $x$-axis as follows: if there are $n$ particles at any point $(x,y)$, then $\left\lfloor \frac{n}{3} \right\rfloor$ of them are moved to $(x+1,y+1)$, $\left\lfloor \frac{n}{3} \right\rfloor$ are moved to $(x,y+1)$ and the remaining to $(x-1,y+1)$. For example, after the first step, there are $3^{79}$ particles each at $(1,1)$, $(0,1)$ and $(-1,1)$. After the second step, there are $3^{78}$ particles each at $(-2,2)$ and $(2,2)$, $2 \times 3^{78}$ particles each at $(-1,2)$ and $(1,2)$, and $3^{79}$ particles at $(0,2)$. After $80$ steps, the number of particles at $(79,80)$ is:

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_conteggio|Conteggio]], [[method_induzione|Induzione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1UglWs-vQn4kwWv7KuW1-915Uah9CbWb-/view)


<span class="qlang-split" data-lang="it"></span>


< MSK0/>Particelle a (79,80) dopo 80 passaggi di regola di divisione< MSK1/>

> Inizialmente, ci sono particelle $3^{80}$ all'origine $(0,0)$. A ogni passo le particelle vengono spostate nei punti al di sopra dell'asse $x$ come segue: se ci sono particelle $n$ in qualsiasi punto $(x,y)$, allora $\left\lfloor \frac{n}{3} \right\rfloor$ di esse vengono spostate a $(x+1,y+1)$, $\left\lfloor \frac{n}{3} \right\rfloor$ a $(x,y+1)$ e il resto a $(x-1,y+1)$. Per esempio, dopo il primo passo, ci sono $3^{79}$ particelle ciascuna a $(1,1)$, $(0,1)$ e $(-1,1)$. Dopo il secondo passo, ci sono particelle $3^{78}$ a $(-2,2)$ e $(2,2)$, $2 \times 3^{78}$ a $(-1,2)$ e $(1,2)$ e $3^{79}$ a $(0,2)$. Dopo i passi $80$, il numero di particelle a $(79,80)$ è:

[[src_ioqm_2024__Q14]]
