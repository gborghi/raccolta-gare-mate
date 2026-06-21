---
title: Kangourou 2018 Cadet - Gara 15 marzo — Quesito 30
tipo: quesito
quesito_id: quesito_src_kangourou_2018_cadet_marzo__Q30
parent: src_kangourou_2018_cadet_marzo
competition: Kangourou 2018 Cadet - Gara 15 marzo
family: kangourou
year: '2018'
level: kangourou
country: Italia
modalita: individuale
quesito: '30'
summary: Misura dell'angolo nel vertice B del triangolo isoscele
answer: C
topics:
  - topic_geometria_piana
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2018
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Misura dell'angolo nel vertice B del triangolo isoscele*

![[src_kangourou_2018_cadet_marzo__prob30.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (B) at (0,0);
  \coordinate (A) at (-1.236,-3.804);
  \coordinate (C) at (1.236,-3.804);
  \coordinate (K) at (-0.764,-2.352);
  \coordinate (L) at (0.472,-1.452);
  \draw[thick] (A) -- (B) -- (C) -- (A);
  \draw[thick] (K) -- (L);
  \draw (-1.000,-3.078) ++(-0.06,0.10) -- ++(0.12,-0.20);
  \draw (-0.146,-1.902) ++(-0.06,0.10) -- ++(0.12,-0.20);
  \draw (0.236,-0.726) ++(-0.06,0.10) -- ++(0.12,-0.20);
  \draw (-0.382,-1.176) ++(-0.08,0.04) -- ++(0,0.10) ++(-0.08,-0.06) -- ++(0,0.10);
  \draw (0,-3.804) ++(-0.10,0) -- ++(0.20,0) ++(0,-0.08) -- ++(-0.20,0.08);
  \node[above] at (B) {$B$};
  \node[left] at (K) {$K$};
  \node[right] at (L) {$L$};
  \node[below left] at (A) {$A$};
  \node[below right] at (C) {$C$};
\end{tikzpicture}
\end{document}
```

> In figura vedi un triangolo isoscele ABC di vertice B, sui cui 
> lati obliqui sono stati fissati un punto K e un punto L in modo che 
> siano tra loro congruenti i tre segmenti AK, KL e LB e che BK sia 
> congruente ad AC. Quanti gradi misura l’angolo nel vertice B ? 
> A) 30	
> 	
> B) 35	
> 	
> C) 36	
> 	
> D) 40	
> 	
> E) 44
> 
> E
> E
> D D C
> C
> E
> D C
> D
> B
> C
> D
> C
> A
> D
> D
> B
> A
> E
> E
> C
> B
> D
> E
> D
> C
> B
> C
> C

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.5
