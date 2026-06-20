---
tipo: quesito
quesito_id: quesito_src_obm_2019_nu_f2__Q02
parent: src_obm_2019_nu_f2
competition: Olimpíada Brasileira de Matemática 2019 — Nível Universitário — Fase 2
family: obm
year: '2019'
level: OBM Nível Universitário
country: Brasile
modalita: individuale
nivel: u
fase: '2'
quesito: '2'
summary: >-
  Existence of a continuous increasing function squeezed between consecutive
  iterated-exponential growth scales
qa_score: '4'
topics:
  - topic_insiemi_funzioni
  - topic_funzionali
methods:
  - method_estremalita
skills:
  - skill_astrazione
  - skill_stima
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2019
  - livello/OBM-Nível-Universitário
  - nivel/u
  - fase/2
  - topic/insiemi_funzioni
  - topic/funzionali
  - gara/individuale
---

# Olimpíada Brasileira de Matemática 2019 — Nível Universitário — Fase 2 — Quesito 2

*Existence of a continuous increasing function squeezed between consecutive iterated-exponential growth scales*

> Let $\exp^{[0]} : \mathbb{R} \to \mathbb{R}$ be given by $\exp^{[0]}(x) = x$, for all $x \in \mathbb{R}$, and define recursively, for each positive integer $n$, the functions $\exp^{[n]} : \mathbb{R} \to \mathbb{R}$ by
> $$\exp^{[n]}(x) = e^{\exp^{[n-1]}(x)}, \quad \forall x \in \mathbb{R},$$
> where $e$ denotes Euler's number. Let also $\log^{[0]} : \mathbb{R} \to \mathbb{R}$ be given by $\log^{[0]}(x) = x$, for all $x \in \mathbb{R}$, and define recursively, for each positive integer $n$, the functions $\log^{[n]} : (\exp^{[n-1]}(0), +\infty) \to \mathbb{R}$ by
> $$\log^{[n]}(x) = \log(\log^{[n-1]}(x)), \quad \forall x \in (\exp^{[n-1]}(0), +\infty),$$
> where $\log$ is the natural logarithm. In other words, $\exp^{[n]}$ represents the composition of the exponential function $n$ times, and $\log^{[n]}$ represents the composition of the logarithm function $n$ times, whenever such a composition can be performed.
> 
> Prove that there exists a continuous and increasing function $f : (0, +\infty) \to \mathbb{R}$ such that for every $n \in \mathbb{N}$ we have:
> $$\lim_{x \to +\infty} \frac{f(x)}{\exp^{[n]}(\log^{[n]}(x) + 1)} = +\infty$$
> $$\lim_{x \to +\infty} \frac{f(x)}{\exp^{[n+1]}(\log^{[n+1]}(x) - 1)} = 0.$$

**Topic:** [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_funzionali|Equazioni funzionali]]
**Metodo:** [[method_estremalita|Estremalità]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_stima|Stima]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Fonte:** apri PDF
