---
tipo: quesito
quesito_id: quesito_src_squadre_2026_semifinale_cd__Q09
parent: src_squadre_2026_semifinale_cd
competition: Gara a Squadre 2026 - Semifinale 2 (nazionale)
family: archimede
year: '2026'
level: squadre
country: Italia
modalita: squadre
quesito: '9'
summary: Ampiezza angolo AED con bisettrici
answer: 0039
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2026
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

# Gara a Squadre 2026 - Semifinale 2 (nazionale) — Quesito 9

*Ampiezza angolo AED con bisettrici*

![[src_squadre_2026_semifinale_cd__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=4]
  \coordinate (A) at (0.4444, 0.3472);
  \coordinate (B) at (0, 0);
  \coordinate (C) at (1, 0);
  \coordinate (D) at (0.6447, 0.2220);
  \coordinate (E) at (0.3706, 0);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (E);
  \draw[dashed] (B) -- (D);
  \draw (B) ++(45:0.12) arc (45:79:0.12);
  \draw (B) ++(79:0.12) arc (79:115:0.12);
  \fill[green!30,opacity=0.5] (A) -- ++(-40:0.12) arc(-40:-110:0.12) -- cycle;
  \draw (A) ++(-40:0.12) arc (-40:-110:0.12);
  \draw[dashed] (E) ++(50:0.10) arc (50:128:0.10);
  \fill[gray!30] (C) -- ++(180:0.10) arc (180:148:0.10) -- cycle;
  \draw (C) ++(180:0.10) arc (180:148:0.10);
  \node[above right] at (A) {A};
  \node[below left] at (B) {B};
  \node[below right] at (C) {C};
  \node[above right] at (D) {D};
  \node[below] at (E) {E};
  \node at (0.06,0.06) {$19^\circ$};
  \node at (0.02,0.13) {$19^\circ$};
  \node[right] at (0.48,0.32) {$70^\circ$};
  \node at (0.47,0.25) {$70^\circ$};
  \node at (0.40,0.07) {$78^\circ$};
  \node at (0.91,0.05) {$32^\circ$};
  \fill (A) circle(0.6pt);
  \fill (B) circle(0.6pt);
  \fill (C) circle(0.6pt);
  \fill (D) circle(0.6pt);
  \fill (E) circle(0.6pt);
\end{tikzpicture}
\end{document}
```

> Questione di punti di vista [⋆]
> Leonardo Franchi
> 19°
> 19°
> 70°
> 70°
> 78°
> 32°
> A
> B
> C
> D
> E
> La sala del pub Tre manici topologici ha la pianta a forma di
> triangolo ABC con angoli ˆA = 110°, ˆB = 38°, ˆC = 32°. Il bancone
> è posto nel punto E su BC tale che \
> AEB = 102°. Detto D il
> punto di AC che è piede della bisettrice da B, la barista sa che
> può sorvegliare l’ingresso dall’angolo \
> AED. Qual è l’ampiezza di
> quest’ultimo (in gradi)?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0039
**Fonte:** apri PDF p.3
