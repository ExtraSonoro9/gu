---
title: Casos de Factorización
---

# 3.1. ¿Qué es factorizar?

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
