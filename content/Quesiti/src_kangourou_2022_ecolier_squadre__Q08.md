---
title: Kangourou Squadre 2022 Ecolier Finale 2 — Quesito 8
tipo: quesito
quesito_id: quesito_src_kangourou_2022_ecolier_squadre__Q08
parent: src_kangourou_2022_ecolier_squadre
competition: Kangourou Squadre 2022 Ecolier Finale 2
family: kangourou
year: '2022'
level: squadre
country: Italia
modalita: squadre
quesito: '8'
summary: Puntini totali quando interni sono 36
answer: '0066'
topics:
  - topic_combinatoria
skills:
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/squadre
  - topic/combinatoria
  - gara/squadre
---

*Puntini totali quando interni sono 36*

![[src_kangourou_2022_ecolier_squadre__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \foreach \x/\y in {
    0/0,
    -0.5/1, 0.5/1,
    -1/2, 0/2, 1/2,
    -1.5/3, -0.5/3, 0.5/3, 1.5/3
  } {
    \fill (\x,\y) circle (4pt);
  }
\end{tikzpicture}
\end{document}
```

> I puntini 
> Nella figura vedi 10 puntini disposti in questo modo: 1 nella prima riga, 2 nella 
> seconda, 3 nella terza e 4 nella quarta. Un solo puntino è all’interno, gli altri 9 sono 
> sul bordo. Aumentando le righe della figura e seguendo lo stesso criterio (ogni riga 
> successiva un puntino in più), quando i puntini all’interno saranno 36, quanti saranno 
> i puntini in totale?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0066
**Fonte:** apri PDF p.2
