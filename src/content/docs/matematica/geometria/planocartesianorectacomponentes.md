---
title: Plano Cartesiano


---
# El Plano Cartesiano

El plano cartesiano está formado por dos rectas numéricas perpendiculares, una horizontal y otra vertical, que se cortan en un punto llamado **origen**.

---

## 1. Estructura y Elementos

* **Eje de las Abscisas (Eje X):** La recta horizontal. Los valores positivos están a la derecha y los negativos a la izquierda.
* **Eje de las Ordenadas (Eje Y):** La recta vertical. Los valores positivos están hacia arriba y los negativos hacia abajo.
* **Origen (0, 0):** Es el punto de intersección de ambos ejes.
* **Par Ordenado $(x, y)$:** Un punto específico en el plano. El primer número siempre corresponde al eje X y el segundo al eje Y.



---

## 2. Los Cuatro Cuadrantes
El plano se divide en cuatro regiones numeradas en sentido antihorario:

| Cuadrante | Signo X | Signo Y | Ubicación |
| :--- | :--- | :--- | :--- |
| **I** | $+$ | $+$ | Superior derecha |
| **II** | $-$ | $+$ | Superior izquierda |
| **III** | $-$ | $-$ | Inferior izquierda |
| **IV** | $+$ | $-$ | Inferior derecha |



---

## 3. Propiedades Métricas

### Distancia entre dos puntos
Basado en el Teorema de Pitágoras, la distancia $d$ entre $P_1(x_1, y_1)$ y $P_2(x_2, y_2)$ es:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

### Punto Medio
El punto que divide a un segmento en dos partes iguales:
$$M = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)$$



---

## 4. Transformaciones en el Plano

Las matrices que vimos anteriormente se aplican aquí para mover puntos:
* **Traslación:** Sumar un vector a cada punto $(x, y) + (v_x, v_y)$.
* **Rotación:** Multiplicar por una matriz de rotación basada en $\sin$ y $\cos$.
* **Reflexión:** Cambiar el signo de una de las coordenadas (respecto al eje X o Y).

---

## 5. Aplicación Real: El Sistema GPS
El sistema de posicionamiento global funciona esencialmente como un plano cartesiano esférico (latitud y longitud). Cada lugar en la Tierra es un **par ordenado** único que permite la navegación y el mapeo digital.