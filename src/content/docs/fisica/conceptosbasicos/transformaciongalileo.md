---
title: Transformación de Galileo

---
# Transformación de Galileo

Las transformaciones de Galileo son las ecuaciones que permiten pasar de las coordenadas de un sistema de referencia $S$ a otro sistema $S'$ que se desplaza a velocidad constante respecto al primero.

---

## 1. El Escenario Clásico

Imagina dos sistemas de referencia:
* **Sistema $S$ (Estacionario):** Un observador parado en el andén de una vía de tren.
* **Sistema $S'$ (Móvil):** Un observador dentro de un vagón de tren que se mueve a una velocidad constante $v$ en el eje $x$.



---

## 2. Las Ecuaciones de Transformación

Si ocurre un evento en el espacio (por ejemplo, cae un rayo o se enciende una luz), cada observador le asignará coordenadas $(x, y, z, t)$. Según Galileo:

1.  **$x' = x - vt$** (La posición en el eje de movimiento cambia).
2.  **$y' = y$** (No hay cambio en ejes perpendiculares).
3.  **$z' = z$** (No hay cambio en ejes perpendiculares).
4.  **$t' = t$** (El tiempo es **absoluto**; transcurre igual para todos).

### Adición de Velocidades
Si un objeto se mueve dentro del tren a una velocidad $u'$ respecto al vagón, su velocidad $u$ respecto al andén es simplemente la suma:
$$u = u' + v$$

---

## 3. Invariancia de las Leyes de Newton

Una propiedad fundamental de estas transformaciones es que la **aceleración es la misma** en ambos sistemas. 

Si derivamos la velocidad respecto al tiempo:
$$\frac{du}{dt} = \frac{du'}{dt} + \frac{dv}{dt}$$

Como $v$ es constante, $\frac{dv}{dt} = 0$, por lo tanto:
$$a = a'$$

> **Conclusión:** Las leyes de la física (como $F = m \cdot a$) son las mismas en todos los sistemas de referencia inerciales. A esto se le llama **Principio de Relatividad de Galileo**.

---

## 4. Ejemplo Práctico: Caminar en un Avión

Si un avión vuela a $800 \text{ km/h}$ ($v$) y tú caminas hacia la cabina a $5 \text{ km/h}$ ($u'$):
* Para un pasajero sentado, tu velocidad es $5 \text{ km/h}$.
* Para una persona en tierra, tu velocidad es $800 + 5 = 805 \text{ km/h}$.

Este concepto es intuitivo y funciona perfectamente para nuestra vida diaria, pero falla cuando las velocidades se acercan a la de la luz ($c$).

---

## 5. El Límite de Galileo

A finales del siglo XIX, se descubrió que la luz no cumple con la suma de velocidades de Galileo. No importa qué tan rápido te muevas, la luz siempre viaja a $c$. Esto llevó a la necesidad de las **Transformaciones de Lorentz**, que son la base de la Relatividad de Einstein.

| Característica | Galileo (Clásico) | Lorentz (Relativista) |
| :--- | :--- | :--- |
| **Tiempo** | Absoluto ($t' = t$) | Relativo (Dilatación del tiempo) |
| **Espacio** | Rígido | Contracción de longitud |
| **Velocidad de la luz** | Aditiva ($c + v$) | Constante ($c$) |