---
title: Concours Général des Lycées 2017 — Matematica — Quesito 2
tipo: quesito
quesito_id: quesito_src_cgen_2017__Q02
parent: src_cgen_2017
competition: Concours Général des Lycées 2017 — Matematica
family: concours_generale
year: '2017'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  Probability problem. Franck must pass MCQ exams where each correct answer
  gives +1 point, each wrong answer -1 point, and no answer 0 points. First
  exam: 10 questions, pass needs at least 7 points; decide which questions to
  answer given success probability p. Second exam: 50 questions, pass needs at
  least 26 points; compare strategies and find optimal as function of p.
qa_score: '2'
topics:
  - topic_probabilita
  - topic_combinatoria
methods:
  - method_casework
  - method_conteggio
skills:
  - skill_modellizzazione
  - skill_manipolazione_algebrica
  - skill_casework_accurato
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2017
  - livello/Concours-Général
  - topic/probabilita
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---

*Probability problem. Franck must pass MCQ exams where each correct answer gives +1 point, each wrong answer -1 point, and no answer 0 points. First exam: 10 questions, pass needs at least 7 points; decide which questions to answer given success probability p. Second exam: 50 questions, pass needs at least 26 points; compare strategies and find optimal as function of p.*

> \textbf{2.1 Franck takes a first exam.}
> 
> Franck must pass an exam consisting of a QCM (multiple-choice questionnaire) with questions numbered $1$ to $10$. For each question one must choose among $4$ proposed answers, exactly one of the four answers being correct (one does not prejudge that the proposed answers are all distinct, and the questions are assumed independent).
> 
> Each correct answer brings one point, each wrong answer makes one lose one point, and if one does not answer a question one neither gains nor loses a point.
> 
> Franck passes the first exam if and only if he obtains a final total of at least seven points.
> 
> Franck has answered the first three questions (numbered $1$ to $3$); for the following questions, he has a probability $p$ of finding the correct answer, with $0 < p < 1$.
> 
> \textbf{1.} Prove that Franck has interest in answering question number $9$, if he has interest in answering question number $4$ to which he has not yet answered. [Note: the exact pairing of question numbers in 2.1.1 is partly illegible in the source.]
> \textbf{2.} Does he have interest in answering question number $10$?
> \textbf{3.} Determine, according to the value of $p$, the best strategy for Franck.
> 
> \textbf{2.2 Franck takes a second exam.}
> 
> Franck must now pass a second exam, consisting again of a QCM, formed this time of $50$ questions. The rules of this exam are the same as those of the previous one. Thus Franck must respond to the $50$ questions (that is, he is not obliged to answer every question). Each correct answer brings him a point and each wrong answer makes him lose a point.
> 
> Franck passes this second exam if and only if he obtains a final total of at least $26$ points. For each question, he has a probability $p$ of finding the correct answer, with $0 < p < 1$.
> 
> For any integer $k$ such that $1 \le k \le 25$, we denote by $P_k$ the probability that Franck passes the exam by answering the first $26 + k$ questions. [Note: the exact index range and the '26+k' wording is partly illegible in the source.]
> 
> \textbf{1.} Prove that, for any integer $k$ verifying $1 \le k \le 13$, one has $P_{2k-1} \ge P_{2k}$.
> \textbf{2.} Prove that, for any integer $k$ verifying $0 \le k \le 12$, one has
> $$P_{2k+1} = \sum_{j=k+1}^{2k+1} \binom{2k+1}{j} p^j (1-p)^{2k+1-j}.$$
> \textbf{3.} Show that, for any integer $k$ verifying $0 \le k \le 11$, one has
> $$P_{2k+3} - P_{2k+1} = \binom{2k+1}{k+1} p^{k+1}(1-p)^{k+1} (\,p - (1-p)\,).$$
> One may freely use Pascal's identity: for $0 < m < n$, $\binom{n}{m} = \binom{n-1}{m} + \binom{n-1}{m-1}$. [Note: the precise right-hand side of the formula in 2.2.3 is partly illegible in the source.]
> \textbf{4.} Determine, according to the value of $p$, the best strategy for Franck.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
