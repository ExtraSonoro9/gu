---
title: Optimización
---

Cuando se necesitan hacer cosas como la construcción de una habitación rectangular cuantos metros de pared para la mayor área.

\*\*3.- Cuáles son las dimensiones de un campo rectangular de $3600 \text{ m}^2$ de superficie, para poderlo cercar con una valla de longitud mínima.\*\*

Por la fórmula del área del rectángulo se tiene:

$$xy = 3600$$

Por otro lado, la superficie (longitud) que tenemos que vallar es $2x + 2y$.

Así, el problema a resolver es:

$$

\begin{cases}

xy = 3600 \\\\

2x + 2y \text{ mínima}

\end{cases}

$$

Como $xy = 3600 \implies y = \frac{3600}{x}$

Llamando $f = 2x + 2y$ y sustituyendo $y = \frac{3600}{x}$ obtenemos:

$$f(x) = 2x + 2\frac{3600}{x} = \frac{2x^2 + 7200}{x}$$

\*\*Vamos a minimizar $f$:\*\*

$$f'(x) = \frac{4x^2 - 2x^2 - 7200}{x^2} = \frac{2x^2 - 7200}{x^2}$$

$$f'(x) = 0 \iff 2x^2 - 7200 = 0 \iff x = \pm 60$$

$$f''(x) = \frac{14400}{x^3}$$

$f''(-60) \< 0 \implies x = -60$ es un máximo (no nos interesa)

$f''(60) > 0 \implies x = 60$ es un mínimo

Por tanto, las dimensiones del campo son:

$$

\begin{cases}

x = 60 \text{ m} \\\\

y = \frac{3600}{60} = 60 \text{ m}

\end{cases}

$$

\*\*(es decir, se trata de un cuadrado)\*\*
