---
title: Matrices
---

# Matrices: Estructuras de Datos y Sistemas

Una **matriz** es un conjunto bidimensional de números organizados en filas ($m$) y columnas ($n$). Es la herramienta fundamental para manejar grandes volúmenes de datos simultáneamente.

---

## 1. Propiedades Fundamentales

* **Dimensión:** Una matriz $A$ de $m \times n$ tiene $m$ filas y $n$ columnas.
* **Suma:** Solo posible entre matrices de la misma dimensión.
* **Producto:** Para multiplicar $A \cdot B$, el número de columnas de $A$ debe ser igual al de filas de $B$. **No es conmutativo** ($A \cdot B \neq B \cdot A$).
* **Matriz Transpuesta ($A^T$):** Intercambio de filas por columnas.
* **Determinante ($|A|$):** Escalar que indica si una matriz tiene inversa y cómo escala el área/volumen en transformaciones.

---

## 2. Matrices en Programación y Algoritmos

En computación, las matrices se implementan como **Arrays Bidimensionales**.

### A. IA de Ajedrez
Un tablero de ajedrez es una matriz de $8 \times 8$. 
* **Representación:** Cada casilla es un índice `[fila][columna]`.
* **Matrices de Pesos:** Las IAs de ajedrez (como Stockfish) usan matrices para asignar valores estratégicos. Por ejemplo, una matriz puede indicar que el control de las casillas centrales `[3][3]` a `[4][4]` vale más puntos que las esquinas.

### B. Redes Neuronales (IA)
Las IAs modernas procesan imágenes y texto mediante **multiplicaciones de matrices masivas**. Los "pesos" que la IA aprende son valores dentro de una matriz que transforman los datos de entrada en una predicción.

---

## 3. Electrónica: Leyes de Kirchhoff

Para resolver circuitos complejos con múltiples fuentes y resistencias, se utiliza el **Análisis de Mallas** o Nodos, que deriva en sistemas de ecuaciones lineales.

### El Método de la Matriz de Resistencias:
Al aplicar la **Ley de Corrientes de Kirchhoff**, obtenemos un sistema donde las resistencias son los coeficientes:

$$
\begin{bmatrix}
R_{11} & R_{12} \\
R_{21} & R_{22}
\end{bmatrix}
\cdot
\begin{bmatrix}
I_1 \\
I_2
\end{bmatrix}
=
\begin{bmatrix}
V_1 \\
V_2
\end{bmatrix}
$$

Resolviendo esta matriz (usando métodos como **Gauss-Jordan** o la **Matriz Inversa**), un ingeniero puede hallar todas las corrientes ($I$) desconocidas de un circuito de un solo golpe, por muy complejo que sea.

---

## 4. Otros Usos en la "Vida Real"

* **Gráficos 3D:** Los videojuegos usan matrices de rotación y traslación para mover personajes y cámaras en el espacio tridimensional.
* **Google:** El algoritmo original *PageRank* trataba a toda la web como una matriz gigante de enlaces para decidir qué páginas eran más importantes.