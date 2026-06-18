---
tipo: quesito
quesito_id: quesito_src_kangourou_2008_student_marzo__Q26
parent: src_kangourou_2008_student_marzo
competition: Kangourou 2008 - Student (gara 28 marzo)
family: kangourou
year: '2008'
level: kangourou
country: Italia
quesito: '26'
summary: Perimetro del triangolo ADE (cerchio inscritto)
answer: E
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2008
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2008 - Student (gara 28 marzo) — Quesito 26

*Perimetro del triangolo ADE (cerchio inscritto)*

![[src_kangourou_2008_student_marzo__prob26.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.9]
  \coordinate (C) at (-1.5, 0);
  \coordinate (B) at (1.5, 0);
  \coordinate (A) at ({-11/6}, {-4*sqrt(14)/3});
  \coordinate (I) at ({(3*(-11/6) + 5*1.5 + 6*(-1.5))/14}, {(3*(-4*sqrt(14)/3))/14});
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (I) circle ({2*sqrt(14)/7});
  \coordinate (D) at ({-1.5 + 1}, 0);
  \coordinate (E) at ({-1.5 + (1/5)*(-11/6+1.5)}, {(1/5)*(-4*sqrt(14)/3)});
  \draw (D) -- (E);
  \node[above left] at (C) {$C$};
  \node[above right] at (B) {$B$};
  \node[below] at (A) {$A$};
  \node[above] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[above] at (0,0) {$3$};
  \node[left] at ({(-1.5 + (-11/6))/2}, {(-4*sqrt(14)/3)/2}) {$5$};
  \node[right] at ({(1.5 + (-11/6))/2}, {(-4*sqrt(14)/3)/2}) {$6$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Nel triangolo ABC è inscritto un cerchio. Si sa che |AC| = 5, |AB| = 6, |BC| = 3 e che il segmento
> ED è tangente al cerchio. Il perimetro del triangolo ADE vale
> A) 7
> B) 4
> C) 9
> D) 6
> E) 8

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.5
