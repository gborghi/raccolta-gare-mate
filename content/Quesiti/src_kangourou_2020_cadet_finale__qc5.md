---
title: Kangourou 2020 Finale nazionale Cadet — Quesito C5
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2020_cadet_finale__QC5
parent: src_kangourou_2020_cadet_finale
competition: Kangourou 2020 Finale nazionale Cadet
family: kangourou
year: '2020'
level: kangourou
country: Italia
modalita: individuale
quesito: C5
summary: Piu poligoni convessi che contengono p o che non lo contengono
answer: piu p
topics:
  - topic_combinatoria
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2020
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Piu poligoni convessi che contengono p o che non lo contengono*

![[src_kangourou_2020_cadet_finale__probC5.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) circle (2cm);
  \foreach \a in {90, 54, 18, -18, -54, -90, -126, -162, 162, 126} {
    \fill (\a:2cm) circle (2pt);
  }
  \node at (18:2.35cm) {$p$};
\end{tikzpicture}
\end{document}
```

> Su una circonferenza sono marcati 10 punti a due a due distinti fra loro. Si considerino tutti i possibili poligoni convessi (cioè poligoni non intrecciati che abbiano tutti gli angoli interni di misura inferiore a $180°$) i cui vertici siano alcuni dei punti marcati. Sia $p$ uno qualsiasi dei punti marcati. Sono di più i poligoni che contengono $p$ o quelli che non lo contengono, o sono in ugual numero? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** piu p
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1USVAWxQY6y2E_COFv5RMawnN3IdAjH49/view)


<span class="qlang-split" data-lang="en"></span>


*Pious convex polygons containing p or not containing p*

![[src_kangourou_2020_cadet_finale__probC5.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) circle (2cm);
  \foreach \a in {90, 54, 18, -18, -54, -90, -126, -162, 162, 126} {
    \fill (\a:2cm) circle (2pt);
  }
  \node at (18:2.35cm) {$p$};
\end{tikzpicture}
\end{document}
```

> On a circumference, 10 points two to two apart are marked. All possible convex polygons (i.e. non-woven polygons having all the inner angles less than $180°$) whose vertices are some of the marked points shall be considered. Whether $p$ any of the points marked. Are there more polygons containing $p$ or those not containing it, or are they in the same number? (see figure)

**Answer:** piu p
[[src_kangourou_2020_cadet_finale__QC5]]
