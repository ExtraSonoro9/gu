---
title: Vectores


---


Un vector es un segmento de recta orientado que representa una magnitud física. Se define por sus componentes, usualmente $(x, y)$ en 2D o $(x, y, z)$ en 3D.

---

## 1. Definiciones y Propiedades

* **Módulo ($|\vec{v}|$):** La longitud del vector. Se calcula con Pitágoras: $|\vec{v}| = \sqrt{x^2 + y^2 + z^2}$.
* **Dirección:** La recta sobre la que yace el vector (el ángulo).
* **Sentido:** Hacia dónde apunta (indicado por la punta de la flecha).
* **Vector Unitario:** Un vector con módulo igual a 1. Se obtiene dividiendo al vector por su propio módulo: $\hat{u} = \frac{\vec{v}}{|\vec{v}|}$.

![vector](/mat/algebra/vector.png)



---

## 2. Multiplicación de Vectores

Existen dos formas de multiplicar vectores con resultados y significados físicos totalmente distintos:

### A. Producto Escalar (Producto Punto: $\vec{u} \cdot \vec{v}$)
El resultado es un **número (escalar)**. Mide cuánto de un vector apunta en la dirección del otro.
* **Fórmula:** $\vec{u} \cdot \vec{v} = u_x v_x + u_y v_y + u_z v_z$
* **Propiedad:** Si $\vec{u} \cdot \vec{v} = 0$, los vectores son **perpendiculares ($90^\circ$)**.

### B. Producto Vectorial (Producto Cruz: $\vec{u} \times \vec{v}$)
El resultado es un **nuevo vector** perpendicular al plano formado por los dos originales.
* **Cálculo:** Se resuelve mediante un determinante con los vectores unitarios $\hat{i}, \hat{j}, \hat{k}$.
* **Dirección:** Se determina con la "Regla de la mano derecha".



---

## 3. Aplicaciones Geométricas: Áreas y Volúmenes

El producto vectorial tiene propiedades mágicas para calcular geometría en el espacio:

### Área de un Paralelogramo
El módulo del producto vectorial entre dos vectores es igual al área del paralelogramo que forman.
* **Fórmula:** $Área = |\vec{u} \times \vec{v}|$

[Image showing a parallelogram formed by two vectors u and v with the area highlighted]

### Volumen de un Paralelepípedo (Producto Triple Escalar)
Para hallar el volumen de un cuerpo 3D formado por tres vectores ($\vec{u}, \vec{v}, \vec{w}$), usamos el producto mixto.
* **Fórmula:** $Volumen = | \vec{u} \cdot (\vec{v} \times \vec{w}) |$
* **Cálculo:** Es el valor absoluto del determinante de la matriz formada por los tres vectores.



---

## 4. Ejemplo Práctico

Calcula el área del paralelogramo formado por $\vec{u} = (3, 0, 0)$ y $\vec{v} = (0, 2, 0)$.

1.  **Producto Cruz:**
    $$\vec{u} \times \vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 3 & 0 & 0 \\ 0 & 2 & 0 \end{vmatrix} = (0)\hat{i} - (0)\hat{j} + (3 \cdot 2 - 0)\hat{k} = (0, 0, 6)$$
2.  **Módulo:**
    $|\vec{u} \times \vec{v}| = \sqrt{0^2 + 0^2 + 6^2} = 6$.
3.  **Resultado:** El área es de **6 unidades cuadradas**.