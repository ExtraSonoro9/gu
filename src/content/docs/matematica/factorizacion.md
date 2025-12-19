---
title: Casos de Factorización
---

## ¿Qué es factorizar?

Una aproximación con álgebra a la primera parte de la situación inicial permite entender lo que ocurre con cualquier resultado que se obtiene cuando se sumen las instrucciones allí dadas. Representemos con las letras $x$ y $y$ las cifras de las decenas y de las unidades de un número cualquiera de dos cifras, respectivamente (¿qué valores pueden tomar las variables $x$ y $y$?), el número correspondiente al expresar $(10x + y)$ por $(y + x)$. Cuando se intercambian las

## Factor común

Comenzamos con el tipo de factorizaciones que resultan de usar la propiedad distributiva. En $ab + ac$ encontramos que $a$ es un factor que aparece en cada uno de los sumandos, y a este factor así común se llama **factor común**.

$ab + ac = a(b + c)$

### Ejemplo:

Factorizar las expresiones algebraicas:

**A.** $3x + 3y$

**B.** $4x + 6y$

**C.** $4x^2 + 6x$

### Solución

**A.**\
Se puede apreciar de manera inmediata que el número $3$ es factor común. Por tanto:

$3x + 3y = 3(x + y)$

**B.**\
Aquí no se aprecia de manera inmediata un factor común; sin embargo, si escribimos el $4$ y el $6$ en la forma $2x + 2x$, observamos que $2$ es factor común de $4$ y $6$. Así, tenemos:

$4x + 6y = 2(2x + 3y)$

**C.**\
Varias son las formas de extraer factor común de este polinomio:

$4x^2 + 6x = 2(2x^2 + 3x)$

$4x^2 + 6x = x(4x + 6)$

$4x^2 + 6x = 2x(2x + 3)$

El ejemplo anterior muestra un polinomio con coeficientes enteros que admite varias factorizaciones. En adelante, por ser útil en las aplicaciones, privilegiaremos la factorización en donde el factor común es aquel que tiene por coeficiente el **mayor factor común** (o máximo común divisor) de los coeficientes de los términos del polinomio y cuya parte literal está formada por las variables comunes a los términos.

Continuando con la idea anterior, factorizaremos los monomios escritos con el menor exponente con que se encuentren. Así, en el ejemplo anterior, factorizamos preferiblemente en la forma

$4x^2 + 6x = 2x(2x + 3)$

### Ejemplo:

Factorizar:

**A.** $8x^3y^2 - 12x^2y^2$

**B.** $-6a^3b + 4a^2b^2 - 6a$

### Solución

**A.**\
El máximo común divisor de $8$ y $12$ es $4$. Las variables comunes a los términos son $x$ y $y$, y el menor exponente de cada variable es $2$ y $2$, respectivamente. El factor común es, por tanto, $4x^2y^2$. Luego colocamos en el paréntesis lo que corresponde de manera que al multiplicar se obtenga el polinomio dado:

$8x^3y^2 - 12x^2y^2 = 4x^2y^2(2x - 3)$

**B.**\
Podemos tomar como factor común $2a$ o $-2a$. Si escogemos $-2a$, no olvidemos la ley de los signos para que al multiplicar se obtenga el polinomio dado:

$-6a^3b + 4a^2b^2 - 6a = -2a(3a^2b - 2ab^2 + 3)$

# 1.6. DIFERENCIA Y SUMA DE POTENCIAS IGUALES

En general, si $n$ es un número entero positivo, se tiene:

### 1.6.1. Diferencia de potencias iguales

Para cualquier $n \in \mathbb{Z}^+$, la diferencia de potencias de igual grado se puede factorizar como:

$$
a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + a^{n-3}b^2 + \dots + ab^{n-2} + b^{n-1})
$$

#### Casos particulares comunes:

* **Si $n=2$ (Diferencia de cuadrados):**
  $$a^2 - b^2 = (a - b)(a + b)$$
* **Si $n=3$ (Diferencia de cubos):**
  $$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$
* **Si $n=4$:**
  $$a^4 - b^4 = (a - b)(a^3 + a^2b + ab^2 + b^3)$$

***

### 1.6.2. Suma de potencias iguales

La suma de potencias de igual grado admite una factorización simple en los reales **solo si $n$ es impar**:

$$
a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + a^{n-3}b^2 - \dots - ab^{n-2} + b^{n-1})
$$

> **Nota:** Observa que en la suma de potencias impares, los signos del segundo factor se van alternando ($+$, $-$, $+$, $-$, ...).

#### Caso particular común:

* **Si $n=3$ (Suma de cubos):**
  $$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$

***

### 1.6.3. Factor Racionalizante (F.R.)

En el cálculo de límites con radicales de índice $n$, estas identidades se utilizan para eliminar la indeterminación. El **Factor Racionalizante** es el segundo factor de las identidades anteriores:

1. Para racionalizar $(\sqrt\[n]{a} - \sqrt\[n]{b})$, el **F.R.** es:
   $$(\sqrt\[n]{a})^{n-1} + (\sqrt\[n]{a})^{n-2}\sqrt\[n]{b} + \dots + (\sqrt\[n]{b})^{n-1}$$
   De modo que: $(\sqrt\[n]{a} - \sqrt\[n]{b}) \cdot F.R. = a - b$
2. Para racionalizar $(\sqrt\[n]{a} + \sqrt\[n]{b})$ (siendo $n$ impar), el **F.R.** es:
   $$(\sqrt\[n]{a})^{n-1} - (\sqrt\[n]{a})^{n-2}\sqrt\[n]{b} + \dots + (\sqrt\[n]{b})^{n-1}$$
   De modo que: $(\sqrt\[n]{a} + \sqrt\[n]{b}) \cdot F.R. = a + b$

   1.7. FACTORIZACIÓN DE TRINOMIOS

Existen diferentes métodos para factorizar trinomios dependiendo de su forma. Los casos más comunes son:

### 1.7.1. Trinomio de la forma $x^2 + bx + c$

Para factorizar este trinomio, se buscan dos números $m$ y $n$ tales que su suma sea $b$ y su producto sea $c$.
$$ x^2 + (m + n)x + mn = (x + m)(x + n) $$

**Ejemplo:**
Para factorizar $x^2 + 5x + 6$:

* Buscamos dos números que sumados den $5$ y multiplicados den $6$.
* Los números son $3$ y $2$.
* Resultado: $(x + 3)(x + 2)$

***

### 1.7.2. Trinomio Cuadrado Perfecto (T.C.P.)

Es el resultado de elevar un binomio al cuadrado. Tiene la forma:
$$ a^2 \pm 2ab + b^2 = (a \pm b)^2 $$

**Regla para identificarlo:**

1. El primer y tercer término deben tener raíces cuadradas exactas ($a$ y $b$).
2. El segundo término debe ser el doble producto de dichas raíces ($2ab$).

***

### 1.7.3. Trinomio de la forma $ax^2 + bx + c$ (Método del Aspa Simple)

Para este caso, donde el coeficiente principal $a$ es distinto de 1, se descompone el primer y tercer término en dos factores cada uno:

$$
\begin{array}{rcccl}
ax^2 & + & bx & + & c \\
\downarrow & & & & \downarrow \\
a\_1 x & & & & c\_1 \rightarrow a\_2 x \cdot c\_1 \\
a\_2 x & & & & c\_2 \rightarrow a\_1 x \cdot c\_2 \\
\hline
& & & & \text{Suma} = bx
\end{array}
$$

**Resultado:** $(a\_1 x + c\_1)(a\_2 x + c\_2)$
