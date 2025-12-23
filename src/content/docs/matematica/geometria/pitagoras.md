---
title: Teorema de Pitágoras y Coseno


---


La geometría del triángulo evoluciona desde el ángulo recto (Pitágoras) hasta cualquier tipo de triángulo (Seno y Coseno).

---
    ![párabola](/mat/geo/hipotenuza.png)


## 1. El punto de partida: Teorema de Pitágoras
Solo funciona en **triángulos rectángulos** (uno de sus ángulos mide 90°).

$$a^2 + b^2 = c^2$$

* **Hipotenusa ($c$):** El lado más largo, frente al ángulo recto.
* **Catetos ($a, b$):** Los lados que forman el ángulo de 90°.



---

## 2. Teorema del Coseno: El "Pitágoras Universal"
Este teorema funciona para **cualquier triángulo**, sea rectángulo o no. Es la generalización de Pitágoras.

![párabola](/mat/geo/tcoseno.png)

**Fórmula:**
$$a^2 = b^2 + c^2 - 2bc \cdot \cos(A)$$

### La Conexión Mágica:
¿Qué pasa si el ángulo $A$ es de **90°**? 
1. Sabemos que $\cos(90°) = 0$.
2. La fórmula se convierte en: $a^2 = b^2 + c^2 - 2bc \cdot (0)$.
3. Resultado: **$a^2 = b^2 + c^2$**. 

> **Conclusión:** Pitágoras es simplemente el Teorema del Coseno cuando el "ajuste" trigonométrico se anula.

[Image comparing a right triangle and an oblique triangle showing how the Law of Cosines extends Pythagoras]

---

## 3. Teorema del Seno: La Relación de Proporcionalidad
Mientras el Coseno se relaciona con Pitágoras por la suma de cuadrados, el Seno establece que los lados son proporcionales a los senos de sus ángulos opuestos.

**Fórmula:**
$$\frac{a}{\sin(A)} = \frac{b}{\sin(B)} = \frac{c}{\sin(C)}$$

**¿Cuándo usar cada uno?**
* **Teorema del Coseno:** Cuando conoces 2 lados y el ángulo entre ellos (LAL), o los 3 lados (LLL).
* **Teorema del Seno:** Cuando conoces parejas opuestas (un lado y su ángulo opuesto).

---

## 4. Identidad Trigonométrica Fundamental
Pitágoras también vive dentro de las funciones trigonométricas. Si tomamos un círculo unitario (radio = 1):
* El cateto adyacente es $\cos(\theta)$.
* El cateto opuesto es $\sin(\theta)$.
* La hipotenusa es $1$.

Aplicando Pitágoras:
$$\sin^2(\theta) + \cos^2(\theta) = 1$$



---

## 5. Aplicación en Física (Vectores)
En tu carpeta de **vectores.md**, esta relación es vital:
1. Usas **Pitágoras** para hallar el módulo (la fuerza total).
2. Usas **Seno y Coseno** para descomponer la fuerza en los ejes $X$ e $Y$.
3. Usas el **Teorema del Coseno** para hallar la resultante entre dos fuerzas que no son perpendiculares.