---
title: Casos de Factorización
---



Una aproximación con el álgebra a la primera parte de la situación inicial permite entender lo que ocurre con cualquier resultado que se obtiene cuando se siguen las instrucciones allí dadas. Representemos con las letras $x$ y $y$ las cifras de las decenas y de las unidades de un número cualquiera de dos cifras, respectivamente (¿qué valores pueden tomar las variables $x$ y $y$?); el número corresponde a la expresión $10x + y$ (¿por qué?). Cuando se intercambian las cifras, el número al cual se llega es $10y + x$. Supongamos que $x$ es mayor que $y$. Entonces, al restar el número mayor con el menor se obtiene:

$$(10x + y) - (10y + x) = 10x + y - 10y - x = 9x - 9y$$

Utilizando la **propiedad distributiva**, podemos escribir esto último como $9(x - y)$. Hemos llegado a una multiplicación en donde uno de los factores es el número 9 y el otro factor es un entero positivo. Concluimos que el resultado es un múltiplo de 9 y que por tanto, como todos los múltiplos de 9, la suma de las cifras es también un múltiplo de 9. La cifra que falta la podemos obtener entonces restando 9 con la cifra dada.

El proceso anterior muestra cómo se pasó de unas sumas y restas a una multiplicación. Ese es el interés de esta unidad: expresar un polinomio en forma de multiplicación (**factorización** del polinomio).

## 3.2. Factor común

Comenzamos con el tipo de factorizaciones que resultan de usar la propiedad distributiva. En $ab + ac$ encontramos que $a$ es un factor que aparece en cada una de los sumandos; un factor así se llama **factor común**.

$$ab + ac = a(b + c)$$

### EJEMPLOS

**Factorizar las expresiones algebraicas:**

**A.** $3x + 3y$ ; **B.** $4x + 6y$ ; **C.** $4x^2 + 6x$

**Solución:**

**A.** Se puede apreciar de manera inmediata que el número 3 es factor común. Por tanto:
$$3x + 3y = 3(x + y)$$

**B.** Aquí no se aprecia de manera inmediata un factor común; sin embargo, si escribimos el 4 y el 6 en la forma: $2 \cdot 2x + 2 \cdot 3y$ observamos que 2 es factor o divisor común de 4 y 6. Así, tenemos:
$$4x + 6y = 2(2x + 3y)$$

**C.** Varias son las formas de extraer un factor común de este polinomio:

* $4x^2 + 6x = 2(2x^2 + 3x)$
* $4x^2 + 6x = x(4x + 6)$
* $4x^2 + 6x = 2x(2x + 3)$

El ejemplo anterior muestra un polinomio con coeficientes enteros que admite varias factorizaciones. En adelante, por ser útil en las aplicaciones, privilegiaremos la factorización en donde el factor común es aquel que tiene por coeficiente el **mayor factor común** (o máximo común divisor) de los coeficientes de los términos del polinomio y cuya parte literal está formado por las variables comunes a los términos, escritas con el menor exponente con que se encuentren.
En las factorizaciones hechas hasta ahora el factor común ha sido un monomio.
En ocasiones la factorización obliga a tomar como factor común, polinomios con
más de un término, como se ilustra a continuación:

### EJEMPLOS

**Factorizar:**
**A.** $8x^{3}y^{2} - 12x^{2}y$ ; **B.** $-6a^{3}b + 4a^{2}b^{2} - 6a$

**Solución:**

**A.** El máximo común divisor de 8 y 12 es 4. Las variables comunes a los términos son $x, y$; el menor exponente de cada variable es 2 y 1, respectivamente. El factor común es, por tanto, $4x^{2}y$. Luego colocamos en el paréntesis lo que corresponda para que al multiplicar se obtenga el polinomio dado:
$$8x^{3}y^{2} - 12x^{2}y = 4x^{2}y(2xy - 3)$$

**B.** Podemos tomar como factor común $2a$ ó $-2a$. Si escogemos $-2a$ no olvidemos la ley de los signos para que al multiplicar se obtengan los del polinomio dado:
$$-6a^{3}b + 4a^{2}b^{2} - 6a = -2a(3a^{2}b - 2ab^{2} + 3)$$

***

### 3.3.2. Binomios de la forma $x^{n} + y^{n}$

Pasemos ahora a factorizar binomios como $x^{5} + y^{5}$, una suma de potencias con exponentes iguales.

* 🍃 **Compruebe la siguiente multiplicación:**
  $$(x + y)(x^{4} - x^{3}y + x^{2}y^{2} - xy^{3} + y^{4}) = x^{5} + y^{5}$$

La factorización de $x^{5} + y^{5}$:
$$x^{5} + y^{5} = (x + y)(x^{4} - x^{3}y + x^{2}y^{2} - xy^{3} + y^{4})$$

***

**Factorizar:**

**A.** $x^{2} - 100$
**B.** $9y^{2} - 25z^{2}$
**C.** $a^{2} - \frac{1}{16}$
**D.** $(y + 7)^{2} - (y - 4)^{2}$
**E.** $x^{3} - 1$
**F.** $27a^{3} - 8b^{3}$
**G.** $m^{6} - \frac{1}{64}n^{3}$
**H.** $16a^{4} - b^{4}$

**Solución:**

**A.** Expresando 100 como el cuadrado de 10, tenemos una diferencia de cuadrados; lo factorizamos como la diferencia por la suma de las raíces de los términos:
$$x^{2} - 100 = x^{2} - 10^{2} = (x - 10)(x + 10)$$

**B.** $9y^{2} - 25z^{2} = (3y)^{2} - (5z)^{2} = (3y - 5z)(3y + 5z)$
En algunos polinomios no se encuentra factor común (diferente de la unidad); sin embargo, se puede llegar a él haciendo **agrupación de términos**, como por ejemplo en $ac + bc + ad + bd$. Observamos que no hay factor común en todos los términos pero sí que $c$ es factor común en los dos primeros términos y $d$ es factor común en los dos últimos. Agrupando los dos primeros términos y los dos últimos, y factorizando $c$ y $d$ respectivamente, conseguimos el factor común $(a+b)$ y procedemos como en el caso anterior:

$$
\begin{aligned}
ac + bc + ad + bd &= (ac + bc) + (ad + bd) \\
&= c(a + b) + d(a + b) \\
&= (a + b)(c + d)
\end{aligned}
$$

## 3.3. Diferencia o suma de potencias con exponentes iguales

### 3.3.1. Binomios de la forma $x^n - y^n$

Consideremos ahora la factorización de binomios como $x^5 - y^5$, $x^4 - y^4$, $x^3 - y^3$, $x^2 - y^2$. Aun cuando en estos binomios no hay factor común, tienen, sin embargo, una estructura parecida: son **diferencias de potencias con exponentes iguales**. ¿Cómo factorizar esta clase de binomios? Algo que comparten estos binomios es que todos se pueden factorizar de tal manera que $x - y$ es uno de los factores: $x^5 - y^5 = (x - y)(\dots)$; $x^4 - y^4 = (x - y)(\dots)$; etcétera.

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

### 3.3.2. Binomios de la forma $x^{n} + y^{n}$

Pasemos ahora a factorizar binomios como $x^{5} + y^{5}$, una suma de potencias con exponentes iguales.

* 🍃 Compruebe la siguiente multiplicación:
  $$(x + y)(x^{4} - x^{3}y + x^{2}y^{2} - xy^{3} + y^{4}) = x^{5} + y^{5}$$

La factorización de $x^{5} + y^{5}$:
$$x^{5} + y^{5} = (x + y)(x^{4} - x^{3}y + x^{2}y^{2} - xy^{3} + y^{4})$$
no presenta cambios en cuanto a la disposición de los exponentes sino en los signos con respecto a la factorización de $x^{5} - y^{5}$.

* 🍃 **Describa la disposición de los signos en la factorización de $x^{5} + y^{5}$**
* 🍃 **Factorice:** $x^{3} + y^{3} =$
* 🍃 **Compruebe la factorización anterior**

Esta manera de factorizar sumas de potencias iguales se cumple cuando $n$ es impar, como en los casos anteriores para $n = 5$ y $n = 3$; **si $n$ es par, no se cumple esa forma de factorizar**, como puede verificarse para $n = 4$ y $n = 2$.

* 🍃 Compruebe que $(x + y)(x^{3} - x^{2}y + xy^{2} - y^{3})$ es diferente de $(x^{4} + y^{4})$ y que $(x + y)(x - y)$ lo es de $(x^{2} + y^{2})$

> $x^{2} + y^{2}$ es un polinomio ¡no factorizable!

## 3.4. Trinomios

### 3.4.1. Trinomios de la forma $x^{2} + bx + c$

Busquemos características comunes en las siguientes multiplicaciones:

$$
\begin{aligned}
(x + 2)(x + 3) &= x^{2} + 3x + 2x + 6 = x^{2} + 5x + 6 \\
(x + 6)(x - 4) &= x^{2} - 4x + 6x - 24 = x^{2} + 2x - 24 \\
(x - 3)(x + 7) &= x^{2} + 7x - 3x - 21 = x^{2} + 4x - 21 \\
(x - 9)(x - 2) &= x^{2} - 2x - 9x + 18 = x^{2} - 11x + 18
\end{aligned}
$$

Podemos notar que son multiplicaciones entre binomios; en cada uno a la variable $x$ se le suma o resta un número entero, es decir, son de la forma $(x + m)(x + n)$, donde $m$ y $n$ son números enteros.

$$(x + m)(x + n) = x^{2} + nx + mx + mn = x^{2} + (m + n) x + mn$$

Los resultados son trinomios que tienen la forma $x^{2} + bx + c$, donde $b$ y $c$ son números enteros; entre los números $m, n, b$ y $c$ se cumple:

$$c = m \cdot n \text{ y } b = m + n$$
De modo que si se va a factorizar un trinomio como $x^{2} + 5x + 6$ revertimos el proceso preguntándonos por dos números que multiplicados den $+6$ y que sumados den $+5$; esos números son $+2$ y $+3$. Factorizamos, entonces, como producto de binomios:

$$x^{2} + 5x + 6 = (x + 2)(x + 3)$$

De igual forma, para factorizar $x^{2} + 2x - 24$ buscamos dos enteros que multiplicados den $-24$ y que sumados den $+2$. Los números son $+6$ y $-4$. Por lo tanto,

$$x^{2} + 2x - 24 = (x + 6)(x - 4)$$

***

### 3.4.2. Trinomios de la forma $ax^{2} + bx + c$

Consideremos ahora factorizaciones de trinomios, como $2x^{2} - 5x - 12$.

Difiere de los anteriores en que el coeficiente de $x^{2}$ ya no es 1. Hay varios métodos para factorizar esta clase de trinomios; presentaremos aquí uno de ellos.

El método que vamos a presentar consiste en reescribir apropiadamente el polinomio dado, agrupar términos y, por último, extraer un factor común.

Ilustramos el proceso factorizando el polinomio $2x^{2} - 5x - 12$.

* ✅ Ordenado ya el polinomio (en la forma estándar), multiplicamos el coeficiente de $x^{2}$ y el término independiente: $2(-12) = -24$.
* ✅ Buscamos ahora dos números que multiplicados den $-24$ y sumados den $-5$ (el coeficiente de $x$). Esos números son $-8$ y $+3$.
* ✅ Reescribimos el término en $x$ del polinomio dado, usando los números que acabamos de encontrar: $2x^{2} - 5x - 12 = 2x^{2} - 8x + 3x - 12$.
* ✅ Agrupamos y sacamos factor común en cada grupo:
  $$2x^{2} - 8x + 3x - 12 = (2x^{2} - 8x) + (3x - 12) = 2x(x - 4) + 3(x - 4)$$
* ✅ Factorizamos el polinomio utilizando factor común:
  $$2x(x - 4) + 3(x - 4) = (x - 4)(2x + 3)$$
* ✅ Reunimos lo realizado:
  $$
  \begin{aligned}
  2x^{2} - 5x - 12 &= 2x^{2} - 8x + 3x - 12 \\
  &= (2x^{2} - 8x) + (3x - 12) \\
  &= 2x(x - 4) + 3(x - 4) \\
  &= (x - 4)(2x + 3)
  \end{aligned}
  $$

**Compruebe que al efectuar $(x - 4)(2x + 3)$ se obtiene $2x^{2} - 5x - 12$**

### 3.4.3. Trinomio cuadrado perfecto

Reversamos ahora el proceso correspondiente al producto especial en el cual se eleva un binomio al cuadrado y se obtiene un trinomio (**trinomio cuadrado perfecto**).

Factorizamos estos trinomios por medio de alguna de las formas:

$$
\begin{aligned}
a^2 + 2ab + b^2 &= (a + b)^2 \\
a^2 - 2ab + b^2 &= (a - b)^2
\end{aligned}
$$

### EJEMPLOS

**Factorizar las expresiones dadas:** **A.** $x^2 + 6xy + 9y^2$ ; **B.** $9x^2 - 12xy + 4y^2$

**Solución:**

**A.** Como el trinomio se puede escribir en la forma $x^2 + 2(x)(3y) + (3y)^2$, se trata de un trinomio cuadrado perfecto; por lo tanto, factorizamos en la forma:
$$x^2 + 6xy + 9y^2 = (x + 3y)^2$$

**B.** Ya que $9x^2 - 12xy + 4y^2 = (3x)^2 - 2(3x)(2y) + (2y)^2$, factorizamos:
$$9x^2 - 12xy + 4y^2 = (3x - 2y)^2$$
