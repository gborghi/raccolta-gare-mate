---
title: Kangourou 2012 Cadet (gara marzo) — Quesito 16
tipo: quesito
quesito_id: quesito_src_kangourou_2012_cadet__Q16
parent: src_kangourou_2012_cadet
competition: Kangourou 2012 Cadet (gara marzo)
family: kangourou
year: '2012'
level: kangourou
country: Italia
modalita: individuale
quesito: '16'
summary: Lato dei triangoli tagliati dal triangolo equilatero
answer: D
topics:
  - topic_geometria_piana
  - topic_algebra
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2012
  - livello/kangourou
  - topic/geometria_piana
  - topic/algebra
  - gara/individuale
---

*Lato dei triangoli tagliati dal triangolo equilatero*

![[src_kangourou_2012_cadet__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=3]
  \pgfmathsetmacro{\s}{0.25}
  \pgfmathsetmacro{\h}{0.866025}
  \coordinate (A1) at (\s, 0);
  \coordinate (A2) at ({0.5*\s}, {\h*\s});
  \coordinate (B1) at ({1-\s}, 0);
  \coordinate (B2) at ({1-0.5*\s}, {\h*\s});
  \coordinate (C1) at ({0.5+0.5*\s}, {\h-\h*\s});
  \coordinate (C2) at ({0.5-0.5*\s}, {\h-\h*\s});
  \draw (0,0) -- (1,0) -- (0.5,\h) -- cycle;
  \draw (A1) -- (A2);
  \draw (B1) -- (B2);
  \draw (C1) -- (C2);
  \fill[gray!50] (A1) -- (B1) -- (B2) -- (C1) -- (C2) -- (A2) -- cycle;
  \draw (A1) -- (B1) -- (B2) -- (C1) -- (C2) -- (A2) -- cycle;
\end{tikzpicture}
\end{document}
```

> Da un triangolo equilatero con lato lungo 6 cm
> sono stati tagliati tre triangoli equilateri uguali
> come mostrato nella figura, dove l’esagono rimasto
> è evidenziato in grigio. La somma dei perimetri dei
> tre triangoli tagliati è uguale al perimetro dell’esagono. Quanti centimetri misura il lato dei triangoli
> tagliati? 
> A) 1
> B) 1,2
> C) 1,25
> D) 1,5 
> E) 2
> Aiuole “prima”
> fragole
> fragole
> piselli
> piselli
> 10
> 130
> 58°
> 100°
> 93°
> x°
> A
> B
> C
> D
> E
> Aiuole “dopo”
> 100°
> 93°
> 58°
> x°
> Testi_12Mat_5-8-Ecolier.qxd  24/06/12  17:27  Pagina 18
> 
> Pag. 
> Pag. 19
> 19
> Kang 2012
> Kang 2012
> Cadet

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1YL4hkGzks5mxynuV0oWkB9Z8qsmierT2/view)
