---
title: Archimede Gara di Febbraio 2017 - 2 livello — Quesito 17
tipo: quesito
quesito_id: quesito_src_archimede_2017_febb_2livello__Q17
parent: src_archimede_2017_febb_2livello
competition: Archimede Gara di Febbraio 2017 - 2 livello
family: archimede
year: '2017'
level: 2 livello
country: Italia
modalita: individuale
quesito: '17'
summary: n puo essere solo 0 o 2
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_invarianti
skills:
  - skill_astrazione
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2017
  - livello/2-livello
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

*n puo essere solo 0 o 2*

![[src_archimede_2017_febb_2livello__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A0) at (0,0);
  \coordinate (A1) at (2,0);
  \coordinate (A2) at (4,0);
  \coordinate (A3) at (6,0);
  \coordinate (B0) at (1,1.732);
  \coordinate (B1) at (3,1.732);
  \coordinate (B2) at (5,1.732);
  \coordinate (C0) at (2,3.464);
  \coordinate (C1) at (4,3.464);
  \coordinate (D0) at (3,5.196);
  \draw (A0)--(A3)--(D0)--cycle;
  \draw (A1)--(B0)--(B2)--(A2);
  \draw (A1)--(B1)--(A2);
  \draw (B0)--(C0)--(C1)--(B2);
  \draw (B1)--(C0); \draw (B1)--(C1);
  \node at (1.000,0.577) {0};
  \node at (3.000,0.577) {0};
  \node at (5.000,0.577) {0};
  \node at (2.000,1.155) {0};
  \node at (4.000,1.155) {0};
  \node at (2.000,2.309) {0};
  \node at (4.000,2.309) {0};
  \node at (3.000,2.887) {0};
  \node at (3.000,4.041) {0};
\end{tikzpicture}
\end{document}
```

> ESERCIZIO DIMOSTRATIVO
> Un triangolo equilatero è diviso in 9 triangolini come in figura, e su ogni triangolino è inizialmente
> scritto il numero 0. Marco, per passare il tempo, fa il seguente gioco: ad ogni mossa sceglie 2
> triangolini con un lato in comune e somma o sottrae 1 ad entrambi i numeri scritti su questi
> triangolini (si intende che l’operazione effettuata sui due triangolini è la stessa). Dopo qualche
> tempo si accorge che i numeri scritti sui 9 triangolini sono, in un qualche ordine, n, n+1, . . . , n+8,
> dove n è un intero non negativo. Dimostrare che n può essere soltanto 0 o 2.
> 0
> 0
> 0
> 0
> 0
> 0
> 0
> 0
> 0
> Nota. I casi n = 0 e n = 2 possono effettivamente verificarsi, ma non si chiede di dimostrare
> questa affermazione.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.9](https://drive.google.com/file/d/1oWOL1D3lGNd-0_wUPNgM-0s8UEgwCbda/view)
