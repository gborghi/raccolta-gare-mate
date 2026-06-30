---
title: Kangourou 2022 Ecolier semifinale individuale — Quesito 10
tipo: quesito
quesito_id: quesito_src_kangourou_2022_ecolier_semifinale__Q10
parent: src_kangourou_2022_ecolier_semifinale
competition: Kangourou 2022 Ecolier semifinale individuale
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: '10'
summary: Superficie dell'insegna esagonale con sei cellette
answer: '324'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Superficie dell'insegna esagonale con sei cellette*

![[src_kangourou_2022_ecolier_semifinale__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \newcommand{\hexagon}[3]{
    \fill[orange!20] (#1+#3,#2) -- (#1+#3*0.5,#2+#3*0.866) -- (#1-#3*0.5,#2+#3*0.866) -- (#1-#3,#2) -- (#1-#3*0.5,#2-#3*0.866) -- (#1+#3*0.5,#2-#3*0.866) -- cycle;
    \draw[thick] (#1+#3,#2) -- (#1+#3*0.5,#2+#3*0.866) -- (#1-#3*0.5,#2+#3*0.866) -- (#1-#3,#2) -- (#1-#3*0.5,#2-#3*0.866) -- (#1+#3*0.5,#2-#3*0.866) -- cycle;
  }
  \hexagon{-0.9526}{-0.825}{0.55}
  \hexagon{0}{-0.825}{0.55}
  \hexagon{0.9526}{-0.825}{0.55}
  \hexagon{-0.4763}{0}{0.55}
  \hexagon{0.4763}{0}{0.55}
  \hexagon{0}{0.825}{0.55}
  \draw[very thick]
    (0,1.73) -- (1.498,0.865) -- (1.498,-0.865) -- (0,-1.73) -- (-1.498,-0.865) -- (-1.498,0.865) -- cycle;
\end{tikzpicture}
\end{document}
```

> (4 punti) La figura mostra l’insegna esposta da un apicoltore fuori dal suo 
> negozio. L’insegna ha la forma di un esagono regolare in cui sono disegnate sei 
> cellette uguali a forma di esagono regolare, ognuna delle quali condivide 4 dei 
> suoi lati o con altre cellette o con i bordi dell’esagono. Se l’area di ogni celletta è 
> di 36 centimetri quadrati, quanti centimetri quadrati misura la superficie 
> dell’insegna?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 324
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/13RxwjTHouyWXD4CNZw1-Jkh-J6V8-5n5/view)
