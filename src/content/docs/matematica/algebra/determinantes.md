---
title: Determinantes
---
# Determinantes y Regla de Cramer

El determinante es un valor escalar único asociado a una matriz cuadrada que resume muchas de sus propiedades geométricas y algebraicas.

---

## 1. El Determinante ($|A|$)

El determinante nos indica si un sistema tiene solución y cómo se transforma el "espacio".

### Cálculo para Matriz $2 \times 2$
Sea $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, el determinante es:
$$|A| = ad - bc$$

### Cálculo para Matriz $3 \times 3$ (Regla de Sarrus)
Se repiten las dos primeras filas (o columnas) y se suman los productos de las diagonales principales, restando los productos de las diagonales secundarias.



---

## 2. Propiedades de los Determinantes

* **Invertibilidad:** Una matriz tiene inversa si y solo si $|A| \neq 0$.
* **Filas/Columnas de Ceros:** Si una fila o columna es toda ceros, $|A| = 0$.
* **Intercambio:** Si intercambias dos filas, el signo del determinante cambia.
* **Multiplicación:** $|A \cdot B| = |A| \cdot |B|$.

---

## 3. Regla de Cramer

Es un método para resolver sistemas de ecuaciones lineales de $n$ ecuaciones con $n$ incógnitas, siempre que el determinante de la matriz de coeficientes sea distinto de cero ($|A| \neq 0$).

### El Método
Para un sistema $AX = B$, el valor de cada incógnita $x_i$ se halla mediante el cociente:

$$x_i = \frac{|A_i|}{|A|}$$

* **$|A|$**: Determinante de la matriz de coeficientes original.
* **$|A_i|$**: Determinante de la matriz resultante de sustituir la columna $i$ por la columna de términos independientes ($B$).



---

## 4. Ejemplo Práctico ($2 \times 2$)

Resolver el sistema:
1) $2x + y = 5$
2) $x - 3y = -1$

**Paso 1: Hallar $|A|$ (Determinante principal)**
$$|A| = \begin{vmatrix} 2 & 1 \\ 1 & -3 \end{vmatrix} = (2)(-3) - (1)(1) = -6 - 1 = -7$$

**Paso 2: Hallar $|A_x|$ (Sustituir columna $x$ por resultados $[5, -1]$)**
$$|A_x| = \begin{vmatrix} 5 & 1 \\ -1 & -3 \end{vmatrix} = (5)(-3) - (1)(-1) = -15 + 1 = -14$$

**Paso 3: Hallar $|A_y|$ (Sustituir columna $y$ por resultados $[5, -1]$)**
$$|A_y| = \begin{vmatrix} 2 & 5 \\ 1 & -1 \end{vmatrix} = (2)(-1) - (5)(1) = -2 - 5 = -7$$

**Paso 4: Calcular variables**
* $x = \frac{|A_x|}{|A|} = \frac{-14}{-7} = 2$
* $y = \frac{|A_y|}{|A|} = \frac{-7}{-7} = 1$

---

## 5. Aplicación en Ingeniería

La Regla de Cramer es muy apreciada en la **programación de controladores** y en **electrónica** para sistemas pequeños (2 o 3 mallas), ya que permite hallar una sola incógnita (por ejemplo, una corriente específica) sin tener que resolver todo el sistema completo.