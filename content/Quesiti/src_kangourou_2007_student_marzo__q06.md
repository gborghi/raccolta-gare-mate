---
title: Kangourou 2007 Student (marzo) — Quesito 6
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2007_student_marzo__Q06
parent: src_kangourou_2007_student_marzo
competition: Kangourou 2007 Student (marzo)
family: kangourou
year: '2007'
level: kangourou
country: Italia
modalita: individuale
quesito: '6'
summary: Rapporto lunghezze dei due percorsi semicirconferenze
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2007
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Rapporto lunghezze dei due percorsi semicirconferenze*

![[src_kangourou_2007_student_marzo__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (3,0);
  \coordinate (E) at (4,0);
  \draw (A) -- (E);
  \draw (B) -- ++(0,0.08) -- ++(0,-0.16);
  \draw (C) -- ++(0,0.08) -- ++(0,-0.16);
  \draw (D) -- ++(0,0.08) -- ++(0,-0.16);
  \draw (A) arc (180:0:2);
  \draw (A) arc (180:360:1.5);
  \draw (D) arc (180:360:0.5);
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below] at (D) {$D$};
  \node[below right] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> Il segmento AE è diviso in 4 parti uguali dai punti ordinati B, C e D. Si disegna al di sopra del segmento AE una
> semicirconferenza di diametro AE mentre al di sotto del
> medesimo segmento si disegnano due semicirconferenze
> di diametro rispettivamente AD e DE (v. figura).
> Considera il percorso da A ad E lungo la semicirconferenza superiore e quello lungo l’unione delle due semicirconferenze inferiori: qual
> è il rapporto tra le lunghezze dei due percorsi, presi nell’ordine?
> A) 1:2
> B) 2:3
> C) 1:1
> D) 3:2
> E)2:1

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/15hXqtFYvCSrB5BpnWS_6lzrBiEDxuU4s/view)


<span class="qlang-split" data-lang="en"></span>


*Ratio of lengths of the two semi-conference routes*

![[src_kangourou_2007_student_marzo__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (3,0);
  \coordinate (E) at (4,0);
  \draw (A) -- (E);
  \draw (B) -- ++(0,0.08) -- ++(0,-0.16);
  \draw (C) -- ++(0,0.08) -- ++(0,-0.16);
  \draw (D) -- ++(0,0.08) -- ++(0,-0.16);
  \draw (A) arc (180:0:2);
  \draw (A) arc (180:360:1.5);
  \draw (D) arc (180:360:0.5);
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below] at (D) {$D$};
  \node[below right] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> The AE segment is divided into 4 equal parts by the points B, C and D. A semicircular of diameter AE shall be drawn above the AE segment while two semicirculars of diameter AD and DE shall be drawn below the same segment respectively (v. (Figure 1). Consider the path from A to E along the upper semicircle and the path along the junction of the two lower semicircles: what is the ratio of the lengths of the two paths, taken in the order? A) 1:2 B) 2:3 C) 1:1 D) 3:2 E)2:1

**Answer:** C
[[src_kangourou_2007_student_marzo__Q06]]
