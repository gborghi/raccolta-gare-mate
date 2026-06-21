---
title: Giochi di Archimede 2004 - Gara Biennio — Quesito 10
tipo: quesito
quesito_id: quesito_src_archimede_2004_biennio__Q10
parent: src_archimede_2004_biennio
competition: Giochi di Archimede 2004 - Gara Biennio
family: archimede
year: '2004'
level: biennio
country: Italia
modalita: individuale
quesito: '10'
summary: 'Costruzione/inscrizione su circonferenza, raggi a,b'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2004
  - livello/biennio
  - topic/geometria_piana
  - gara/individuale
---

*Costruzione/inscrizione su circonferenza, raggi a,b*

![[src_archimede_2004_biennio__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  \def\R{2.5}
  \def\r{2.0}
  \def\yy{-1.7}
  \draw (0,0) circle (\R);
  \draw (0,0) circle (\r);
  \fill (0,0) circle (1.2pt); \node[above] at (0,0.05) {$O$};
  \pgfmathsetmacro\xa{sqrt(\R*\R-\yy*\yy)}
  \pgfmathsetmacro\xc{sqrt(\r*\r-\yy*\yy)}
  \draw (-\xa,\yy) -- (\xa,\yy);
  \fill (-\xa,\yy) circle (1.2pt); \node[below] at (-\xa,\yy) {$B$};
  \fill (\xa,\yy) circle (1.2pt);  \node[below] at (\xa,\yy) {$A$};
  \fill (-\xc,\yy) circle (1.2pt); \node[below] at (-\xc,\yy) {$D$};
  \fill (\xc,\yy) circle (1.2pt);  \node[below] at (\xc,\yy) {$C$};
\end{tikzpicture}
\end{document}
```

> Quanto è lunga la corda $AB$ sapendo che $AB = 2CD$ e che i raggi dei due cerchi concentrici sono 5 metri e 4 metri? (vedi figura)
> 
> (A) $2\sqrt{2}$ m
> (B) $2\sqrt{3}$ m
> (C) $3\sqrt{3}$ m
> (D) $4\sqrt{3}$ m
> (E) dipende dall'inclinazione della corda

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.3
