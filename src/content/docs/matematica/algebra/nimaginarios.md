---
title: Números Imaginarios
---
# Números Imaginarios y Complejos

Los números complejos ($ \mathbb{C} $) surgen de la necesidad de resolver ecuaciones como $x^2 + 1 = 0$. Se definen mediante la unidad imaginaria $i$.

---

## 1. Definiciones Básicas
* **Unidad Imaginaria:** Se define como $i = \sqrt{-1}$, por lo tanto $i^2 = -1$.
* **Número Complejo:** Tiene la forma $z = a + bi$.
    * **$a$**: Parte Real ($Re$).
    * **$bi$**: Parte Imaginaria ($Im$).

### Potencias de $i$
Las potencias de $i$ son cíclicas cada 4 valores:
* $i^1 = i$
* $i^2 = -1$
* $i^3 = -i$
* $i^4 = 1$



---

## 2. Operaciones en Forma Binómica
Sean $z_1 = a + bi$ y $z_2 = c + di$:

* **Suma/Resta:** Se suman partes reales con reales e imaginarias con imaginarias.
  $(a + bi) + (c + di) = (a+c) + (b+d)i$
* **Multiplicación:** Se aplica propiedad distributiva recordando que $i^2 = -1$.
  $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$
* **Conjugado ($\bar{z}$):** Si $z = a + bi$, entonces $\bar{z} = a - bi$. Es fundamental para la división.

---

## 3. Representación Polar y Exponencial
Un número complejo puede verse como un vector en el plano complejo (Plano de Argand).

* **Módulo ($r$):** La distancia al origen. $r = \sqrt{a^2 + b^2}$ (Pitágoras).
* **Argumento ($\theta$):** El ángulo respecto al eje real. $\theta = \arctan(b/a)$.



---

## 4. La Identidad de Euler
Es considerada la fórmula más bella de las matemáticas porque conecta cinco números fundamentales ($0, 1, e, i, \pi$).

**Forma Exponencial de un complejo:**
$$z = r \cdot e^{i\theta} = r(\cos \theta + i\sin \theta)$$

### El caso especial:
Cuando $r = 1$ y $\theta = \pi$, obtenemos la **Identidad de Euler**:
$$e^{i\pi} + 1 = 0$$

> **Deducción:** $e^{i\pi} = \cos(\pi) + i\sin(\pi) = -1 + i(0) = -1$.

---

## 5. Ejemplos de Uso

### Ejemplo 1: Multiplicación
$(2 + 3i)(1 - 2i)$
1. $2(1) - 4i + 3i - 6i^2$
2. $2 - i - 6(-1)$
3. $2 - i + 6 = 8 - i$

### Ejemplo 2: De Binómica a Polar
Sea $z = 1 + i$:
1. $r = \sqrt{1^2 + 1^2} = \sqrt{2}$
2. $\theta = \arctan(1/1) = 45^\circ$ o $\pi/4$ rad.
3. **Exponencial:** $z = \sqrt{2} e^{i\frac{\pi}{4}}$

---

## 6. Aplicación en la Vida Real
* **Electrónica:** En corriente alterna, se usan **fasores** (complejos en forma exponencial) para representar voltajes e impedancias. Es mucho más fácil multiplicar complejos que resolver ecuaciones diferenciales de senos y cosenos.
* **Fractales:** El conjunto de Mandelbrot se genera iterando funciones en el plano complejo.