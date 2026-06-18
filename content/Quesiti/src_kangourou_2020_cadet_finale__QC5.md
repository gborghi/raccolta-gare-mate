---
tipo: quesito
quesito_id: quesito_src_kangourou_2020_cadet_finale__QC5
parent: src_kangourou_2020_cadet_finale
competition: Kangourou 2020 Finale nazionale Cadet
family: kangourou
year: '2020'
level: kangourou
country: Italia
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
---

# Kangourou 2020 Finale nazionale Cadet — Quesito C5

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
**Fonte:** apri PDF p.1
