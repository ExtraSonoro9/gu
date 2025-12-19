---
title: Casos de Factorización
---

## 3.4. Trinomios

### 3.4.1. Trinomios de la forma $x^2 + bx + c$

Busquemos características comunes en las siguientes multiplicaciones:

* $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$
* $(x + 6)(x - 4) = x^2 - 4x + 6x - 24 = x^2 + 2x - 24$
* $(x - 3)(x + 7) = x^2 + 7x - 3x - 21 = x^2 + 4x - 21$
* $(x - 9)(x - 2) = x^2 - 2x - 9x + 18 = x^2 - 11x + 18$

Podemos notar que son multiplicaciones entre binomios; en cada uno a la variable $x$ se le suma o resta un número entero, es decir, son de la forma $(x + m)(x + n)$, donde $m$ y $n$ son números enteros.
$$(x + m)(x + n) = x^2 + nx + mx + mn = x^2 + (m + n)x + mn$$

Los resultados son trinomios que tienen la forma $x^2 + bx + c$, donde $b$ y $c$ son números enteros; entre los números $m$, $n$, $b$ y $c$ se cumple:
$$c = m \cdot n \quad y \quad b = m + n$$

De modo que si se va a factorizar un trinomio como $x^2 + 5x + 6$ revertimos el proceso preguntándonos por dos números que multiplicados den $+6$ y que sumados den $+5$; esos números son $+2$ y $+3$. Factorizamos, entonces, como producto de binomios:
$$x^2 + 5x + 6 = (x + 2)(x + 3)$$

De igual forma, para factorizar $x^2 + 2x - 24$ buscamos dos enteros que multiplicados den $-24$ y que sumados den $+2$. Los números son $+6$ y $-4$. Por lo tanto,
$$x^2 + 2x - 24 = (x + 6)(x - 4)$$

# 3.3. Diferencia o suma de potencias con exponentes iguales

### 3.3.1. Binomios de la forma $x^n - y^n$

Consideremos ahora la factorización de binomios como $x^5 - y^5$, $x^4 - y^4$, $x^3 - y^3$, $x^2 - y^2$. Aun cuando en estos binomios no hay factor común, tienen, sin embargo, una estructura parecida: son ***diferencias de potencias con exponentes iguales***. ¿Cómo factorizar esta clase de binomios? Algo que comparten estos binomios es que todos se pueden factorizar de tal manera que $x - y$ es uno de los factores: $x^5 - y^5 = (x - y)(\dots)$; $x^4 - y^4 = (x - y)(\dots)$; etcétera.

$$
\begin{array}{r|l}
x^4 \phantom{-x^4 + x^3y + x^2y^2 + xy^3} - y^4 & x - y \ \cline{2-2}
-x^4 + x^3y \phantom{+ x^2y^2 + xy^3 - y^4} & x^3 + x^2y + xy^2 + y^3 \ \hline
x^3y \phantom{+ x^2y^2 + xy^3 - y^4} & \\
-x^3y + x^2y^2 \phantom{+ xy^3 - y^4} & \ \hline
x^2y^2 \phantom{+ xy^3 - y^4} & \\
-x^2y^2 + xy^3 \phantom{- y^4} & \ \hline
xy^3 - y^4 & \\
-xy^3 + y^4 & \ \hline
0 &
\end{array}
$$

¿Cómo encontrar los factores indicados con $(\dots)$? Una respuesta es: ¡dividiendo!

Los resultados de las divisiones son:

* $(x^5 - y^5) \div (x - y) = x^4 + x^3y + x^2y^2 + xy^3 + y^4$
* $(x^4 - y^4) \div (x - y) = x^3 + x^2y + xy^2 + y^3$

Por tanto, se tiene:

* $(x^5 - y^5) = (x - y)(x^4 + x^3y + x^2y^2 + xy^3 + y^4)$
* $(x^4 - y^4) = (x - y)(x^3 + x^2y + xy^2 + y^3)$

***

### 3.3.2. Binomios de la forma $x^n + y^n$

Pasemos ahora a factorizar binomios como $x^5 + y^5$, una suma de potencias con exponentes iguales.

* 🍃 **Compruebe la siguiente multiplicación:**
  $$(x + y)(x^4 - x^3y + x^2y^2 - xy^3 + y^4) = x^5 + y^5$$

La factorización de $x^5 + y^5$:
$$x^5 + y^5 = (x + y)(x^4 - x^3y + x^2y^2 - xy^3 + y^4)$$

no presenta cambios en cuanto a la disposición de los exponentes sino en los signos con respecto a la factorización de $x^5 - y^5$.

* 🍃 Describa la disposición de los signos en la factorización de $x^5 + y^5$
* 🍃 Factorice: $x^3 + y^3 =$
* 🍃 Compruebe la factorización anterior

Esta manera de factorizar sumas de potencias iguales se cumple cuando $n$ es impar, como en los casos anteriores para $n = 5$ y $n = 3$; ***si $n$ es par, no se cumple esa forma de factorizar***, como puede verificarse para $n = 4$ y $n = 2$.

* 🍃 Compruebe que $(x + y)(x^3 - x^2y + xy^2 - y^3)$ es diferente de $(x^4 + y^4)$ y que $(x + y)(x - y)$ lo es de $(x^2 + y^2)$

> **$x^2 + y^2$ es un polinomio ¡no factorizable!**

***
