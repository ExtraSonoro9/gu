---
title: Serie y polinomio de Taylor
---

## 9.10 Series de Taylor

En la sección anterior se vio cómo aproximar el valor de una función en un punto mediante un polinomio de grado $n$. En esta sección veremos cómo explotar la misma idea para expresar funciones mediante series de potencias. Esta técnica resulta útil para estudiar funciones complicadas usando su expresión como serie de potencias.

**Definición 9.13 (Serie de Taylor).** Dada una función $f(x)$ con derivadas de orden $n$ en $a$ $\forall n \in \mathbb{N}$, se define la **serie de Taylor** de $f$ centrada en $a$, como:

$$\sum \frac{f^{(n)}(a)}{n!}(x - a)^n$$

***

**Ejemplo 9.31.** Veamos cuál es la serie de Taylor de la función $f(x) = \ln(x)$ en $a = 1$. Para ello calculamos las primeras derivadas de $f$ en $a = 1$.

$$
\begin{aligned}
f(x) &= \ln x & f(1) &= \ln 1 = 0 \\
f'(x) &= 1/x & f'(1) &= 1/1 = 1 \\
f''(x) &= -1/x^2 & f''(1) &= -1/1^2 = -1 \\
f'''(x) &= 2/x^3 & f'''(1) &= 2/1^3 = 2 \\
f''''(x) &= -3!/x^4 & f''''(1) &= -3! \\
&\vdots & &\vdots \\
f^{(n)}(x) &= (-1)^{n-1}(n-1)!/x^n \quad & f^{(n)}(x) &= (-1)^{n-1}(n-1)!
\end{aligned}
$$
Sustituyendo en la fórmula de la serie de Taylor se tiene

$$\sum \frac{f^{(n)}(1)}{n!}(x - 1)^n = \sum \frac{(-1)^{n-1}(n-1)!}{n!}(x - 1)^n = \sum \frac{(-1)^{n-1}}{n}(x - 1)^n$$

Su suma parcial de orden $n$ es

$$
\begin{aligned}
A\_n(x) &= \sum\_{i=1}^{n} \frac{(-1)^{i-1}}{i}(x - 1)^i \\
&= (x - 1) - \frac{1}{2}(x - 1)^2 + \frac{1}{3}(x - 1)^3 + \dots + \frac{(-1)^{n-1}}{n}(x - 1)^n
\end{aligned}
$$

que resulta ser el polinomio de Taylor de orden $n$ de $f$ en $a = 1$.

Un caso particular bastante habitual es la serie de Taylor en $a = 0$.

**Definición 9.14 (Serie de Maclaurin).** Dada una función $f(x)$ con derivadas de orden $n$ en $0$ $\forall n \in \mathbb{N}$, se define la **serie de Maclaurin** de $f$, como

$$\sum \frac{f^{(n)}(0)}{n!}x^n$$

***

**Ejemplo 9.32.** Veamos cuál es la serie de Maclaurin de la función $f(x) = \frac{1}{1 - x}$. Para ello calculamos las primeras derivadas de $f$ en $0$.

$$
\begin{aligned}
f(x) &= \frac{1}{1-x} & f(0) &= 1 \\
f'(x) &= \frac{1}{(1-x)^2} & f'(0) &= 1 \\
f''(x) &= \frac{2}{(1-x)^3} & f''(0) &= 2 \\
f'''(x) &= \frac{3!}{(1-x)^4} & f'''(0) &= 3! \\
&\vdots & &\vdots \\
f^{(n)}(x) &= \frac{n!}{(1-x)^{n+1}} \quad & f^{(n)}(0) &= n!
\end{aligned}
$$

Sustituyendo en la fórmula de la serie de Maclaurin se tiene

$$\sum \frac{f^{(n)}(0)}{n!}x^n = \sum \frac{n!}{n!}x^n = \sum x^n$$

que es una serie geométrica de razón $x$, y por tanto, converge para $|x| \< 1$, con suma $\sum\_{n=1}^{\infty} x^n = \frac{1}{1 - x}$, es decir, $f(x)$ coincide con la suma de su serie de Maclaurin para $|x| \< 1$.
