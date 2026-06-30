---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024 — Quesito 7
tipo: quesito
quesito_id: quesito_src_tfjm_2024__Q07
parent: src_tfjm_2024
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024
family: tfjm
year: '2024'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  Funny cookies: dough deposited along segments, each point P filling a disk of
  radius R(P); characterize which planar shapes (disk, rectangle, triangle,
  annulus) are cookies / r-cookies, the dough quantity needed, and which
  contours bound r-cookies.
qa_score: '3'
topics:
  - topic_geometria_piana
  - topic_geometria_analitica
  - topic_insiemi_funzioni
methods:
  - method_coordinate
  - method_casework
  - method_estremalita
skills:
  - skill_ragionamento_geometrico
  - skill_astrazione
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2024
  - livello/TFJM²
  - topic/geometria_piana
  - topic/geometria_analitica
  - topic/insiemi_funzioni
  - gara/squadre
---

*Funny cookies: dough deposited along segments, each point P filling a disk of radius R(P); characterize which planar shapes (disk, rectangle, triangle, annulus) are cookies / r-cookies, the dough quantity needed, and which contours bound r-cookies.*

> Fabrice has decided to make cookies with mathematical shapes for the snacks of the $\mathrm{TFJM}^2$. He has a piping bag that lets him deposit cookie dough in the plane following a precise model. The dough deposited at a given instant lies along a straight-line segment (a point being accepted as the limit of a segment of length $0$). At each point $P$ of one of these segments, the piping bag lets Fabrice deposit a more or less large quantity $R(P) \ge 0$ of dough.
> 
> When it is laid down, the dough spreads and fills the disk of radius $R(P)$ centered at $P$ for each point $P$ where Fabrice puts dough. Fabrice's dough does not repel itself. For example, if the disk of center $P$ and radius $R(P)$ is contained in the disk of center $P'$ and radius $R(P')$, then the dough spreads into a cookie of shape the disk of center $P'$ and radius $R(P')$ only. The shape of the cookie after baking is thus the union of the disks of center $P$ and radius $R(P)$ where $P$ ranges over the set of points where Fabrice put dough.
> 
> One calls $\textbf{cookie of the plane}$ a region obtained by following this procedure.
> 
> Figure $10$ represents two examples of cookies. The orange cookie is obtained by spreading dough of constant radius equal to $1$ over a segment of length $1$. The blue cookie is obtained from a segment of dough of variable radius and another point of dough.
> 
> Fabrice would like in particular to make the following cookie shapes:
>   a) a disk of radius $R$;
>   b) a full rectangle with sides of lengths $a$ and $b$;
>   c) a full triangle with sides of lengths $a$, $b$ and $c$;
>   d) an annulus of inner radius $R_1$ and outer radius $R_2$ (with $R_2 > R_1$), the two circles forming the boundary of the annulus being included in the cookie.
> 
> $\textbf{1.}$ Is shape a) a cookie? Same question for each of the shapes b), c) and d).
> 
> The $\textbf{quantity of dough}$ used to make a cookie is the sum of the lengths of the segments where Fabrice places dough.
> 
> $\textbf{2.}$ For each of the shapes of the preceding question that are cookies, with what quantities of dough can Fabrice make it?
> 
> The precision of Fabrice's piping bag being limited, the quantity of dough he deposits at $P$ cannot be too small. For a fixed $r \ge 0$, one says Fabrice's tool has precision $r$ when $R(P) \ge r$ for every point $P$ placed by Fabrice. One calls $r$-$\textbf{cookie of the plane}$, more simply $r$-cookie, a cookie that Fabrice can make with a tool of precision $r$. The answers to the following questions will thus depend on $r$.
> 
> In particular, the $0$-cookies are exactly the cookies, and every $r$-cookie is a cookie.
> 
> $\textbf{3.}$ Reprise the preceding questions in the case of $r$-cookies, as a function of $r$.
> 
> $\textbf{4.}$ Suppose in this question that Fabrice makes an $r$-cookie without using any segment of length $0$ and that it is impossible to obtain the same shape using strictly less dough. Is it possible that a different repartition of the dough yields the same $r$-cookie, still without a segment of length $0$?
> 
> Fabrice is now interested in the shape of the boundary of his $r$-cookies. The contour of a cookie is defined as follows. One supposes one has two continuous functions $x : \mathbb{R} \to \mathbb{R}$ and $y : \mathbb{R} \to \mathbb{R}$ that verify the following properties:
>   — they are $1$-periodic, that is $x(t+1) = x(t)$ and $y(t+1) = y(t)$ for all real $t$;
>   — for all values of $t$ and $t'$, one has simultaneously $x(t) = x(t')$ and $y(t) = y(t')$ if and only if the difference $t - t'$ is an integer.
> 
> Fabrice draws in the plane the set $\Gamma$ of points of coordinates $(x(t), y(t))$, called $\textbf{contour}$. The region of the plane that the contour delimits (which one supposes well defined) may or may not be an $r$-cookie.
> 
> $\textbf{5.}$ Does there exist a contour for which $x$ and $y$ are continuous, but for which the delimited region is not an $r$-cookie? If so, is it possible with $x$ and $y$ differentiable? Twice differentiable? Three times differentiable?
> 
> $\textbf{6.}$ Does there exist a contour for which $x$ and $y$ are continuous, which is a cookie, but which is not an $r$-cookie for any $r > 0$? If so, is it possible with $x$ and $y$ differentiable? Twice differentiable? Three times differentiable?
> 
> $\textbf{7.}$ Find other conditions on a shape for it to be an $r$-cookie.
> 
> $\textbf{8.}$ Propose and explore other avenues of research, for example in dimension $3$.

![[src_tfjm_2024__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)
