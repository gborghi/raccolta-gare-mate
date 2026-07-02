---
title: Kangourou Semifinale individuale Cadet 2024 — Quesito 2
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2024_cadet_semifinale__Q02
parent: src_kangourou_2024_cadet_semifinale
competition: Kangourou Semifinale individuale Cadet 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '2'
summary: Area del triangolo ANC nel triangolo equilatero
answer: D
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area del triangolo ANC nel triangolo equilatero*

![[src_kangourou_2024_cadet_semifinale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.6]
  \coordinate (A) at (0,0);
  \coordinate (B) at (12,0);
  \coordinate (C) at (6,10.392);
  \coordinate (M) at (5,8.66);
  \coordinate (N) at (7,8.66);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (M) -- (N);
  \draw[thick] (A) -- (N);
  \fill[gray!40] (A) -- (N) -- (C) -- cycle;
  \draw[thick] (A) -- (N) -- (C) -- cycle;
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[left] at (M) {$M$};
  \node[right] at (N) {$N$};
\end{tikzpicture}
\end{document}
```

> (Punti 3) Il triangolo ABC in figura è equilatero, con il lato lungo 12 
> cm. Il segmento MN è parallelo al lato AB, mentre il segmento AM è 
> lungo 10 cm. Di quanti centimetri quadrati è l’area del triangolo ANC? 
> A) 36        B) 30 √3         C) 10 √3          D) 6√3          E) 10  
> Risposta: D). Sol. L’altezza del triangolo ABC è 12 × √3
> 2  cm e coincide con 
> quella del triangolo ANC rispetto alla base CN, che è lunga 2 cm.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the ANC triangle in the equilateral triangle*

![[src_kangourou_2024_cadet_semifinale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.6]
  \coordinate (A) at (0,0);
  \coordinate (B) at (12,0);
  \coordinate (C) at (6,10.392);
  \coordinate (M) at (5,8.66);
  \coordinate (N) at (7,8.66);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (M) -- (N);
  \draw[thick] (A) -- (N);
  \fill[gray!40] (A) -- (N) -- (C) -- cycle;
  \draw[thick] (A) -- (N) -- (C) -- cycle;
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[left] at (M) {$M$};
  \node[right] at (N) {$N$};
\end{tikzpicture}
\end{document}
```

> (Points 3) The ABC triangle in the figure is equilateral, with the side 12 cm long. The MN segment is parallel to the AB side, while the AM segment is 10 cm long. How many square centimetres is the area of the ANC triangle? (A) 36 (B) 30 (√ 3 C) 10 (√ 3 D) 6 (√ 3 E) 10 Answer: D). I'm not alone. The height of the triangle ABC is 12 × √3 2 cm and coincides with that of the triangle ANC with respect to the base CN, which is 2 cm long.

**Answer:** D
[[src_kangourou_2024_cadet_semifinale__Q02]]
