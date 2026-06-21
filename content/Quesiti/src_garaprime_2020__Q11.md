---
title: Gara Nazionale Classi Prime 2020 — Quesito 11
tipo: quesito
quesito_id: quesito_src_garaprime_2020__Q11
parent: src_garaprime_2020
competition: Gara Nazionale Classi Prime 2020
family: archimede
year: '2020'
level: ''
country: Italia
modalita: individuale
quesito: '11'
summary: Perimetro del rettangolo tagliato in nove quadrati
answer: A
topics:
  - topic_geometria_piana
  - topic_aritmetica
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2020
  - topic/geometria_piana
  - topic/aritmetica
  - gara/individuale
---

*Perimetro del rettangolo tagliato in nove quadrati*

![[src_garaprime_2020__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.4]
  \draw (0,0) rectangle (12,10);
  \foreach \x in {0,2,4,6,8,10} \draw (\x,8) rectangle (\x+2,10);
  \draw (0,0) rectangle (8,8);
  \draw (8,0) rectangle (12,4);
  \draw (8,4) rectangle (12,8);
\end{tikzpicture}
\end{document}
```

> Un foglio di cartone rettangolare viene ritagliato in modo da ottenere esattamente nove pezzi, tutti quadrati: uno di area 64 cm2, due di area 16 cm2 e sei di
> area 4 cm2. Qual era il perimetro del rettangolo?
> A 44 cm
> B 46 cm
> C 52 cm
> D 62 cm
> E 68 cm
> F non determinabile
> dai soli dati forniti

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.1
