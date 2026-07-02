---
title: Giochi di Archimede 2012 - Triennio — Quesito 14
tipo: quesito
lang: it
quesito_id: quesito_src_archimede_2012_triennio__Q14
parent: src_archimede_2012_triennio
competition: Giochi di Archimede 2012 - Triennio
family: archimede
year: '2012'
level: triennio
country: Italia
modalita: individuale
quesito: '14'
summary: Distanza punti medi su sviluppo del cono
answer: A
topics:
  - topic_geometria_solida
  - topic_geometria_solida
methods:
  - method_conteggio
skills:
  - skill_ragionamento_geometrico
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2012
  - livello/triennio
  - topic/geometria_solida
  - topic/geometria_solida
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Distanza punti medi su sviluppo del cono*

![[src_archimede_2012_triennio__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (V) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (T) at (120:4);
  \coordinate (P) at (60:4);
  \coordinate (Q) at (2,0);
  \draw (V) -- (T);
  \draw (V) -- (B);
  \draw (0:4) arc (0:120:4);
  \draw (P) -- (Q);
  \draw[dashed] (V) -- (P);
  \fill (P) circle (1.5pt);
  \fill (Q) circle (1.5pt);
  \node[above right] at (P) {$P$};
  \node[below right] at (Q) {$Q$};
  \node[below left] at (V) {$V$};
  \node at (105:2.2) {$a$};
  \node[right] at (3,1.0) {$d$};
  \draw (V) ++(0:0.7) arc (0:60:0.7);
  \node at (30:1.05) {$60^\circ$};
\end{tikzpicture}
\end{document}
```

> La risposta è (A).
> Calcoliamo prima di tutto l’apotema del cono: a =
> √
> r2 + h2 = 30cm.
> Tagliamo ora il cono lungo l’apotema passante per Q, e otteniamo
> così un settore circolare di centro V , raggio a ed arco di circonferenza
> di lunghezza uguale a 2πr: l’angolo al centro che sottende tale arco
> misura dunque ϑ = 2πr
> a =
> 2πr
> √
> r2+h2 = 2
> 3π radianti.
> V
> o
> a
> d
> P
> Q
> 60
> Il problema si riduce quindi a trovare la lunghezza del segmento che congiunge il punto medio P
> dell’arco di circonferenza al punto medio Q di uno dei due raggi delimitanti il settore circolare.
> Poich´e l’angolo
> d
> PV Q = 60°, segue che PQ è perpendicolare al raggio contenente Q, dunque
> d =
> q
> a2 −
>  a
> 2
> 2 =
> √
> 3
> 2 a = 15
> √
> 3.
> [Problema proposto da Nirvana.]
> 4

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1tRJvf_aFHxwNrjDT3ZPhDiVLjPkv5ymq/view)


<span class="qlang-split" data-lang="en"></span>


*Mean distance points on the development of the cone*

![[src_archimede_2012_triennio__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (V) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (T) at (120:4);
  \coordinate (P) at (60:4);
  \coordinate (Q) at (2,0);
  \draw (V) -- (T);
  \draw (V) -- (B);
  \draw (0:4) arc (0:120:4);
  \draw (P) -- (Q);
  \draw[dashed] (V) -- (P);
  \fill (P) circle (1.5pt);
  \fill (Q) circle (1.5pt);
  \node[above right] at (P) {$P$};
  \node[below right] at (Q) {$Q$};
  \node[below left] at (V) {$V$};
  \node at (105:2.2) {$a$};
  \node[right] at (3,1.0) {$d$};
  \draw (V) ++(0:0.7) arc (0:60:0.7);
  \node at (30:1.05) {$60^\circ$};
\end{tikzpicture}
\end{document}
```

> The answer is A. Let's first calculate the apoteme of the cone: a = √ r2 + h2 = 30cm. Now let's cut the cone along the apoteme passing through Q, and we get a circular sector of center V , radius a and arc of circumference of length equal to 2πr: the angle to the center underneath that arc measures θ = 2πr a = 2πr √ r2+h2 = 2 3π radiants. V or a d P Q 60 The problem is then reduced to finding the length of the segment connecting the median point P of the circumference arc to the median point Q of one of the two radii delimiting the circular sector. Since the angle d PV Q = 60°, it follows that PQ is perpendicular to the radius containing Q, so d = q a2 −  a 2 2 = √ 3 2 a = 15 √ 3. [Problem proposed by Nirvana.] 4

**Answer:** A
[[src_archimede_2012_triennio__Q14]]
