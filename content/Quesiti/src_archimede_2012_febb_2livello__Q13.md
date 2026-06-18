---
tipo: quesito
quesito_id: quesito_src_archimede_2012_febb_2livello__Q13
parent: src_archimede_2012_febb_2livello
competition: Archimede Gara Febbraio 2012 (8 feb) - 2 livello
family: archimede
year: '2012'
level: 2 livello
country: Italia
quesito: '13'
summary: 'Cerchi tangenti iterati, minimo n con area minore di 1'
answer: '1007'
topics:
  - topic_geometria_piana
methods:
  - method_ricorsione
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2012
  - livello/2-livello
  - topic/geometria_piana
---

# Archimede Gara Febbraio 2012 (8 feb) - 2 livello — Quesito 13

*Cerchi tangenti iterati, minimo n con area minore di 1*

![[src_archimede_2012_febb_2livello__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  \coordinate (O0) at (0,0);
  \coordinate (C0) at (3,0);
  \coordinate (A0) at (-1.5,2.598);
  \coordinate (B0) at (-1.5,-2.598);
  \coordinate (H0) at (-1.5,0);
  \coordinate (D0) at (-3,0);
  \coordinate (O1) at (-2.25,0);
  \draw (O0) circle (3);
  \draw (O1) circle (0.75);
  \draw (A0) -- (B0) -- (C0) -- cycle;
  \draw (D0) -- (C0);
  \draw[fill] (O0) circle (1.5pt) node[above right]{$O_0$};
  \draw[fill] (O1) circle (1.5pt) node[below]{$O_1$};
  \draw[fill] (H0) circle (1.5pt) node[above right]{$H_0$};
  \draw[fill] (A0) circle (1.5pt) node[above]{$A_0$};
  \draw[fill] (B0) circle (1.5pt) node[below]{$B_0$};
  \draw[fill] (C0) circle (1.5pt) node[right]{$C_0$};
  \draw[fill] (D0) circle (1.5pt) node[left]{$D_0$};
  \node at (1.8,2.4) {$\Gamma_0$};
  \node at (-2.1,0.95) {$\Gamma_1$};
\end{tikzpicture}
\end{document}
```

> Sia Γ0 una circonferenza di raggio 22012, e sia A0B0C0 un triangolo equilatero inscritto in Γ0.
> Sia Γ1 la circonferenza di raggio più piccolo tangente ad A0B0 nel suo punto medio H0, e a Γ0. Si
> costruiscono le circonferenze Γ2, . . . , Γn allo stesso modo, in modo che Γn sia una delle circonferenze
> di raggio più piccolo tangente a Γn−1 e ad un lato di un triangolo equilatero inscritto in Γn−1 nel
> suo punto medio. Qual è il più piccolo valore di n per cui l’area del cerchio racchiuso da Γn è minore
> di 1?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1007
**Fonte:** apri PDF p.3
