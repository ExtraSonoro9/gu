---
title: Ley de Hooke y Elasticidad de Resortes


---


La ley de Hooke explica cómo los objetos sólidos responden a las fuerzas de tracción y compresión. Es la base para el diseño de amortiguadores, básculas y estructuras de ingeniería.

---

## 1. La Ecuación Fundamental
La fuerza ejercida por un resorte (fuerza recuperadora) se define como:

$$F = -k \cdot \Delta x$$

Donde:
* **$F$:** Fuerza restauradora (en Newtons, $N$). El signo negativo indica que la fuerza siempre se opone al desplazamiento (busca volver al equilibrio).
* **$k$:** Constante elástica del resorte (en $N/m$). Representa la "rigidez": cuanto mayor es $k$, más duro es el resorte.
* **$\Delta x$:** Elongación o desplazamiento desde la posición de equilibrio ($x - x_0$).



---

## 2. El Límite de Elasticidad
Es vital entender que la Ley de Hooke solo es válida en la **zona elástica**. Si graficamos Esfuerzo vs. Deformación, encontramos varios puntos clave:

1.  **Límite de Proporcionalidad:** Hasta aquí, la gráfica es una línea recta (donde aplica $F=kx$).
2.  **Límite Elástico:** El material aún recupera su forma, pero la relación ya no es lineal.
3.  **Zona Plástica:** Si pasamos este punto, el material se deforma permanentemente (no vuelve a su forma original).
4.  **Punto de Ruptura:** El material se fractura.



---

## 3. Combinación de Resortes (Sistemas Complejos)
En ingeniería, rara vez se usa un solo resorte. Podemos combinarlos de dos formas para obtener una "Constante Equivalente" ($k_{eq}$):

### A. Resortes en Serie
Los resortes están conectados uno tras otro. Ambos soportan la misma fuerza, pero sus elongaciones se suman. El sistema se vuelve **más blando**.
$$\frac{1}{k_{eq}} = \frac{1}{k_1} + \frac{1}{k_2} + \dots$$

### B. Resortes en Paralelo
Los resortes están uno al lado del otro sosteniendo la misma carga. Ambos se estiran la misma distancia. El sistema se vuelve **más rígido**.
$$k_{eq} = k_1 + k_2 + \dots$$



---

## 4. Energía Potencial Elástica ($E_{pe}$)
Un resorte comprimido o estirado almacena energía. El trabajo realizado para deformar el resorte se convierte en energía potencial, que se libera cuando el resorte vuelve a su forma original.

La fórmula para calcular esta energía es:
$$E_{pe} = \frac{1}{2} k \cdot (\Delta x)^2$$

Esta relación cuadrática significa que si estiras un resorte el **doble**, la energía acumulada se multiplica por **cuatro**.

---

## 5. El Resorte como Oscilador Armónico
Si soltamos un resorte con una masa ($m$) unida, este oscilará. El periodo de oscilación ($T$), es decir, el tiempo que tarda en dar una vuelta completa, depende de la masa y la rigidez:

$$T = 2\pi \sqrt{\frac{m}{k}}$$

* **Dato importante:** El periodo no depende de cuánto estires el resorte (amplitud), solo de la masa y de la constante $k$.

---

## Aplicaciones en la Vida Real

1.  **Dinamómetros:** Instrumentos de laboratorio para medir fuerzas basados directamente en el estiramiento de un resorte calibrado.
2.  **Suspensión de Vehículos:** Los resortes (muelles) absorben la energía de los baches, mientras que los amortiguadores disipan esa energía para evitar que el coche rebote infinitamente.
3.  **Relojería Mecánica:** El "muelle real" almacena la energía necesaria para mover las manecillas mediante una espiral de metal.