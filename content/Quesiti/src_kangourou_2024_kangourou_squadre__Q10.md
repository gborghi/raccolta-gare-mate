---
tipo: quesito
quesito_id: quesito_src_kangourou_2024_kangourou_squadre__Q10
parent: src_kangourou_2024_kangourou_squadre
competition: Kangourou Squadre 2024 Kangourou Finale 1
family: kangourou
year: '2024'
level: squadre
country: Italia
quesito: '10'
summary: Area regione ombreggiata tre cerchi concentrici
answer: '1417'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/squadre
  - topic/geometria_piana
---

# Kangourou Squadre 2024 Kangourou Finale 1 — Quesito 10

*Area regione ombreggiata tre cerchi concentrici*

![[src_kangourou_2024_kangourou_squadre__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\ri{1}
  \def\rm{1.667}
  \def\ro{2}
  \fill[white] (-2.4,-2.4) rectangle (2.4,2.4);
  \begin{scope}
    \clip (0,0) -- (\ro,0) arc(0:90:\ro) -- cycle;
    \fill[gray!40] (0,0) circle (\ro);
    \fill[white] (0,0) circle (\rm);
  \end{scope}
  \begin{scope}
    \clip (0,0) -- (-\ro,0) arc(180:270:\ro) -- cycle;
    \fill[gray!40] (0,0) circle (\ro);
    \fill[white] (0,0) circle (\rm);
  \end{scope}
  \begin{scope}
    \clip (0,0) -- (0,\rm) arc(90:180:\rm) -- cycle;
    \fill[gray!40] (0,0) circle (\rm);
    \fill[white] (0,0) circle (\ri);
  \end{scope}
  \begin{scope}
    \clip (0,0) -- (0,-\rm) arc(270:360:\rm) -- cycle;
    \fill[gray!40] (0,0) circle (\rm);
    \fill[white] (0,0) circle (\ri);
  \end{scope}
  \draw (0,0) circle (\ri);
  \draw (0,0) circle (\rm);
  \draw (0,0) circle (\ro);
  \draw (-\ro,0) -- (\ro,0);
  \draw (0,-\ro) -- (0,\ro);
  \node[above left] at ({-\ro*0.707},{\ro*0.707}) {$R$};
  \node[above left] at ({-\rm*0.707},{\rm*0.707}) {$Q$};
  \node[above left] at ({-\ri*0.707},{\ri*0.707}) {$P$};
  \node[below right] at (0.05,-0.05) {$O$};
\end{tikzpicture}
\end{document}
```

> La regione ombreggiata  
> La figura mostra tre cerchi concentrici di centro O sui quali sono tracciati due 
> diametri fra loro perpendicolari; RO, QO e PO sono raggi dei tre cerchi. Il 
> segmento RQ è lungo la metà del segmento QP che, a sua volta, è lungo 2/3 del 
> segmento PO. L’area del cerchio più grande è 1962 m2. Di quanti metri quadrati 
> è l’area della regione ombreggiata?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1417
**Fonte:** apri PDF p.2
