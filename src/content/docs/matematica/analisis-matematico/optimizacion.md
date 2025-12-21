---
title: Optimización
---

# Optimización: Área Máxima y Perímetro Mínimo

La optimización busca encontrar los valores máximos o mínimos de una función sujeta a ciertas restricciones. En geometría, esto se traduce en eficiencia de materiales (costo-beneficio).

---

## 1. El Problema: El Rectángulo más Eficiente

Queremos demostrar qué dimensiones debe tener un terreno rectangular de área fija ($A$) para que su perímetro ($P$) sea el menor posible, minimizando así el costo de cercado.

### Variables:
* $x$: base del terreno.
* $y$: altura del terreno.
* $A$: área constante ($A = x \cdot y$).
* $P$: perímetro a minimizar ($P = 2x + 2y$).

---

## 2. Resolución Matemática

**Paso 1: Despejar una variable de la restricción.**
Como el área $A$ es conocida: $y = \frac{A}{x}$.

**Paso 2: Expresar la función a optimizar en términos de una sola variable.**
Sustituimos $y$ en la fórmula del perímetro:
$$P(x) = 2x + 2\left(\frac{A}{x}\right) = 2x + \frac{2A}{x}$$

**Paso 3: Hallar la derivada e igualar a cero.**
Para encontrar el mínimo, derivamos $P$ respecto a $x$:
$$P'(x) = 2 - \frac{2A}{x^2}$$

Igualamos a cero para hallar el punto crítico:
$$2 = \frac{2A}{x^2} \implies x^2 = A \implies x = \sqrt{A}$$

**Paso 4: Hallar la otra dimensión.**
Si $x = \sqrt{A}$, entonces $y = \frac{A}{\sqrt{A}} = \sqrt{A}$.

> **Conclusión:** Como $x = y$, las dimensiones óptimas corresponden a un **Cuadrado**.



---

## 3. Análisis Costo-Beneficio: ¿Por qué el cuadrado?

Imagina que necesitas un terreno de $100 \, m^2$:

| Forma | Dimensiones | Perímetro (Cerca necesaria) | Eficiencia |
| :--- | :--- | :--- | :--- |
| **Rectángulo muy largo** | $20 \, m \times 5 \, m$ | $50 \, m$ | Baja |
| **Rectángulo estándar** | $12,5 \, m \times 8 \, m$ | $41 \, m$ | Media |
| **Cuadrado (Óptimo)** | $10 \, m \times 10 \, m$ | **$40 \, m$** | **Máxima** |

### Ventajas del Cuadrado:
1.  **Menor Gasto de Material:** Necesitas menos metros lineales de malla o muro para encerrar la misma superficie.
2.  **Menos Pérdida de Energía:** En construcción, una casa cuadrada tiene menos superficie de pared expuesta al exterior en relación con su volumen, lo que reduce la pérdida de calor (fricción térmica).

---

## 4. ¿Existe algo mejor que el cuadrado?

Si no tuviéramos la restricción de usar ángulos rectos (forma rectangular), la figura que encierra la mayor área con el menor perímetro posible es el **Círculo**. 

Esta es la razón por la que:
* Las burbujas de jabón son esféricas (minimizan la tensión superficial).
* Los tanques de gas son cilíndricos/esféricos (optimizan volumen vs. material).



---

## 5. Aplicación Práctica: La "Cerca del Río"
Un problema común es cuando un lado del terreno no necesita cerca (por ejemplo, porque da a un río). En ese caso, la optimización cambia: el área máxima se logra cuando el lado paralelo al río mide el doble que los lados perpendiculares.