---
title: Japan Mathematical Olympiad 2002 — Yosen (Preliminary) — Quesito 11
tipo: quesito
lang: en
quesito_id: quesito_src_jmo12yq_yosen__Q11
parent: src_jmo12yq_yosen
competition: Japan Mathematical Olympiad 2002 — Yosen (Preliminary)
family: jmo
year: '2002'
level: JMO Yosen
country: Giappone
modalita: individuale
quesito: '11'
summary: 'Color 7 sectors of a disk with 4 colors, rotations equivalent'
qa_score: '5'
topics:
  - topic_combinatoria
methods:
  - method_colorazione
  - method_conteggio
  - method_simmetria
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/giappone
  - comp/jmo
  - anno/2002
  - livello/JMO-Yosen
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Color 7 sectors of a disk with 4 colors, rotations equivalent*

> One face of a disk is divided into $7$ congruent sectors. There are $4$ colored pencils: red, blue, yellow, and green. Using these, we want to color each sector with one color. The same color may be used multiple times, and it is not necessary to use all $4$ colors, but two adjacent sectors must be colored with different colors. How many ways of coloring are there? Here, two colorings of the disk that can be obtained from one another by rotation are regarded as the same coloring.

```tikz
\begin{tikzpicture}
\draw (0,0) circle (2cm);
\foreach \a in {0,...,6} {
  \draw (0,0) -- (\a*360/7:2cm);
}
\end{tikzpicture}
```

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione]], [[method_conteggio|Conteggio]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1WpcMHSRWydHTNqwDM4S4rwTtUxRVnLbW/view)


<span class="qlang-split" data-lang="it"></span>


*Colore 7 settori di un disco con 4 colori, rotazioni equivalenti*

> Una faccia di un disco è suddivisa in settori congruenti $7$. Ci sono le matite $4$ di colore: rosso, blu, giallo e verde. Usando questi, vogliamo colorare ogni settore con un colore. Lo stesso colore può essere utilizzato più volte e non è necessario utilizzare tutti i colori $4$, ma due settori adiacenti devono essere colorati con colori diversi. Quanti tipi di colorazione ci sono? Qui, due colori del disco che possono essere ottenuti l'uno dall'altro mediante rotazione sono considerati come lo stesso colore.

```tikz
\begin{tikzpicture}
\draw (0,0) circle (2cm);
\foreach \a in {0,...,6} {
  \draw (0,0) -- (\a*360/7:2cm);
}
\end{tikzpicture}
```

[[src_jmo12yq_yosen__Q11]]
