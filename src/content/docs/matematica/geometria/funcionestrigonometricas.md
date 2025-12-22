---
title: Funciones Trigonométricas


---


Estas funciones son las herramientas fundamentales para modelar fenómenos periódicos (ondas) y estructuras físicas (cables suspendidos).

---

## 1. Funciones Trigonométricas
Basadas en el **Círculo Unitario** ($x^2 + y^2 = 1$). Relacionan ángulos con coordenadas.

### Definiciones
* **Seno:** $\sin(x)$
* **Coseno:** $\cos(x)$
* **Tangente:** $\tan(x) = \frac{\sin(x)}{\cos(x)}$

### Propiedades Clave
* **Periodicidad:** Se repiten cada $2\pi$ (Seno y Coseno) o $\pi$ (Tangente).
* **Paridad:**
    * $\cos(-x) = \cos(x)$ (Par)
    * $\sin(-x) = -\sin(x)$ (Impar)
* **Identidad Pitagórica:** $\sin^2(x) + \cos^2(x) = 1$



---

## 2. Funciones Hiperbólicas
Basadas en una **Hipérbola Equilátera** ($x^2 - y^2 = 1$). Se definen mediante la función exponencial $e^x$.

### Definiciones
* **Seno Hiperbólico:** $\sinh(x) = \frac{e^x - e^{-x}}{2}$
* **Coseno Hiperbólico:** $\cosh(x) = \frac{e^x + e^{-x}}{2}$
* **Tangente Hiperbólica:** $\tanh(x) = \frac{\sinh(x)}{\cosh(x)}$

### Propiedades Clave
* **Identidad Fundamental:** $\cosh^2(x) - \sinh^2(x) = 1$
* **Paridad:**
    * $\cosh(-x) = \cosh(x)$ (Par)
    * $\sinh(-x) = -\sinh(x)$ (Impar)



---

## 3. Tabla Comparativa de Derivadas e Integrales

| Función | Derivada | Integral |
| :--- | :--- | :--- |
| $\sin(x)$ | $\cos(x)$ | $-\cos(x) + C$ |
| $\cos(x)$ | $-\sin(x)$ | $\sin(x) + C$ |
| $\sinh(x)$ | $\cosh(x)$ | $\cosh(x) + C$ |
| $\cosh(x)$ | $\sinh(x)$ | $\sinh(x) + C$ |

---

## 4. Ejemplos de Aplicación

### Ejemplo 1: Cálculo del Seno Hiperbólico
Si $x = 0$:
$$\sinh(0) = \frac{e^0 - e^0}{2} = \frac{1 - 1}{2} = 0$$

### Ejemplo 2: Identidad Pitagórica
Si tenemos $\sin(x) = 0.6$, ¿cuánto vale $\cos(x)$?
1. $(0.6)^2 + \cos^2(x) = 1$
2. $0.36 + \cos^2(x) = 1 \implies \cos^2(x) = 0.64$
3. $\cos(x) = 0.8$

### Ejemplo 3: La Catenaria (Física)
Un cable pesado que cuelga entre dos postes (como el tendido eléctrico) no forma una parábola, sino un **coseno hiperbólico**:
$$y = a \cdot \cosh\left(\frac{x}{a}\right)$$



---

## 5. Relación con los Números Complejos (Fórmula de Euler)
La conexión última entre ambos mundos viene dada por la unidad imaginaria $i$:
* $\cos(x) = \cosh(ix)$
* $\sin(x) = \frac{\sinh(ix)}{i}$