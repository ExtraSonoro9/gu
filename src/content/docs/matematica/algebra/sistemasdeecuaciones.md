---
title: Sistemas de ecuaciones
---


Este método es un algoritmo que utiliza operaciones elementales de fila para transformar la matriz aumentada de un sistema en su **forma escalonada reducida por filas**.

---

## 1. Operaciones Elementales de Fila
Son las únicas acciones permitidas para manipular la matriz sin cambiar la solución del sistema:
1. **Intercambiar** dos filas entre sí ($F_i \leftrightarrow F_j$).
2. **Multiplicar** una fila por un número real distinto de cero ($k \cdot F_i$).
3. **Sumar** a una fila un múltiplo de otra ($F_i + k \cdot F_j$).

---

## 2. Objetivo: La Matriz Identidad
Buscamos que la matriz de coeficientes se convierta en la identidad (unos en la diagonal, ceros en el resto):
$$\begin{bmatrix} 1 & 0 & 0 & | & s_1 \\ 0 & 1 & 0 & | & s_2 \\ 0 & 0 & 1 & | & s_3 \end{bmatrix}$$
Aquí, $s_1, s_2, s_3$ son los valores de las incógnitas.

---

## 3. Ejemplo Paso a Paso

Resolver el sistema:
1) $3x + 2y = 7$
2) $x - y = -1$

**Paso 1: Matriz aumentada**
$$\begin{bmatrix} 3 & 2 & | & 7 \\ 1 & -1 & | & -1 \end{bmatrix}$$

**Paso 2: Crear el primer pivote (1 en la posición [1,1])**
Intercambiamos $F_1$ y $F_2$ para tener el 1 arriba fácilmente:
$$\begin{bmatrix} 1 & -1 & | & -1 \\ 3 & 2 & | & 7 \end{bmatrix}$$

**Paso 3: Hacer cero debajo del pivote**
A la Fila 2 le restamos 3 veces la Fila 1 ($F_2 \rightarrow F_2 - 3F_1$):
$$\begin{bmatrix} 1 & -1 & | & -1 \\ 0 & 5 & | & 10 \end{bmatrix}$$

**Paso 4: Crear el segundo pivote (1 en la posición [2,2])**
Dividimos la Fila 2 por 5 ($F_2 \rightarrow F_2 / 5$):
$$\begin{bmatrix} 1 & -1 & | & -1 \\ 0 & 1 & | & 2 \end{bmatrix}$$

**Paso 5: Hacer cero por encima del pivote (Eliminación de Jordan)**
A la Fila 1 le sumamos la Fila 2 ($F_1 \rightarrow F_1 + F_2$):
$$\begin{bmatrix} 1 & 0 & | & 1 \\ 0 & 1 & | & 2 \end{bmatrix}$$

**Resultado Final:**
* $x = 1$
* $y = 2$



## 1. Tipos de Sistemas (Teorema de Rouché-Frobenius)

Basándonos en el número de soluciones, clasificamos los sistemas así:

### A. Sistema Compatible Determinado (SCD)
* **Solución:** Única (un solo punto de intersección).
* **En la matriz:** Obtienes una identidad clara (ej. $x=1, y=2$).
* **Gráficamente:** Las rectas o planos se cruzan en un solo punto.

  <img src="/mat/algebra/compatible.png" alt="sistema compatible determinado" style="display: block; margin-left: auto; margin-right: auto;">

### B. Sistema Compatible Indeterminado (SCI)
* **Solución:** Infinitas soluciones.
* **En la matriz:** Aparece una fila completa de ceros ($0 = 0$). Esto significa que una ecuación es redundante.
* **Gráficamente:** Las rectas o planos son coincidentes (están uno encima del otro).



  <img src="/mat/algebra/indeterminado.png" alt="sistema compatible indeterminado" style="display: block; margin-left: auto; margin-right: auto;">


### C. Sistema Incompatible (SI)
* **Solución:** No tiene solución.
* **En la matriz:** Llegas a una contradicción del tipo $0 = k$ (donde $k \neq 0$).
* **Gráficamente:** Las rectas o planos son paralelos y nunca se tocan.


  <img src="/mat/algebra/incompatible.png" alt="sistema incompatible" style="display: block; margin-left: auto; margin-right: auto;">


---

## 2. Independencia y Dependencia Lineal

Este concepto analiza si las ecuaciones (o vectores) aportan información nueva o si son "copias" de otras.

### Linealmente Independientes (L.I.)
Un conjunto de filas/vectores es L.I. si ninguno puede escribirse como combinación de los demás.
* **Relación con el sistema:** Un **SCD** tiene todas sus filas Linealmente Independientes.
* **Determinante:** Si los vectores son L.I., el determinante de la matriz es **distinto de cero** ($|A| \neq 0$).

### Linealmente Dependientes (L.D.)
Un conjunto es L.D. si al menos una fila es combinación lineal de las otras (ej. una fila es el doble de otra, o la suma de las otras dos).
* **Relación con el sistema:** Los **SCI** y los **SI** contienen filas Linealmente Dependientes.
* **Determinante:** Si hay dependencia lineal, el determinante es **igual a cero** ($|A| = 0$).

[Image illustrating linearly independent vs linearly dependent vectors in 2D and 3D space]

---

## 3. Resumen Técnico

| Tipo de Sistema | Soluciones | Rango de A vs A* | Estado de las filas |
| :--- | :--- | :--- | :--- |
| **SCD** | 1 | Iguales = n° incógnitas | Linealmente Independientes |
| **SCI** | $\infty$ | Iguales < n° incógnitas | Linealmente Dependientes |
| **SI** | 0 | Rango A < Rango A* | Contradicción matemática |

---

## 4. Ejemplo de Identificación Rápida

Si tienes el sistema:
1) $x + y = 2$
2) $2x + 2y = 4$

Notas que la ecuación (2) es exactamente el doble de la (1). 
* Son **Linealmente Dependientes**.
* El determinante será $1(2) - 1(2) = 0$.
* Es un **Sistema Compatible Indeterminado** (infinitas soluciones).