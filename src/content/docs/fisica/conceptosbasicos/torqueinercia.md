---
title: Torque e Inercia


---
# Dinámica de Rotación: Torque e Inercia

Para entender el movimiento circular, debemos traducir los conceptos de la física lineal al mundo de los giros.

---

## 1. Torque ($\tau$): El Momento de una Fuerza
El torque (o momento) es la capacidad de una fuerza para hacer girar un objeto alrededor de un eje. No solo importa cuánta fuerza aplicas, sino **dónde** y **con qué ángulo** la aplicas.

### La Fórmula del Torque
$$\tau = F \cdot r \cdot \sin(\theta)$$

Donde:
* **$F$:** Fuerza aplicada.
* **$r$:** Brazo de palanca (distancia desde el eje de giro al punto de aplicación).
* **$\theta$:** Ángulo entre la fuerza y el brazo.

> **Regla de Oro:** El torque es máximo cuando la fuerza es perpendicular ($90°$) al brazo de palanca. Si aplicas la fuerza directamente hacia el eje ($0°$), el torque es cero y nada gira.



---

## 2. Momento de Inercia ($I$)
En el movimiento lineal, la **Masa** es la resistencia al cambio de movimiento. En la rotación, esa resistencia se llama **Momento de Inercia**. 

A diferencia de la masa, el momento de inercia depende de **cómo está distribuida la masa** respecto al eje de giro.

### La Fórmula General
Para una partícula puntual:
$$I = m \cdot r^2$$

Para objetos sólidos, el valor cambia según la forma:
* **Aro delgado:** $I = m \cdot r^2$ (Toda la masa está lejos del centro).
* **Disco sólido:** $I = \frac{1}{2} m \cdot r^2$ (La masa está más repartida hacia el centro).
* **Esfera sólida:** $I = \frac{2}{5} m \cdot r^2$ (Es la más fácil de hacer girar).



---

## 3. La Segunda Ley de Newton para la Rotación
Al igual que $F = m \cdot a$ en línea recta, para los giros tenemos:

$$\tau = I \cdot \alpha$$

Donde $\alpha$ (alfa) es la **aceleración angular**. Esto significa que:
1. Para una misma fuerza, si el objeto tiene mucha inercia (masa lejos del eje), acelerará muy lento.
2. Si quieres frenar algo que gira rápido, necesitas aplicar un torque opuesto.

---

## 4. Conservación del Momento Angular ($L$)
Este es uno de los principios más bellos de la física. El momento angular es el "ímpetu" de rotación:
$$L = I \cdot \omega$$
*(Donde $\omega$ es la velocidad angular).*

En un sistema cerrado, $L$ es constante. Por lo tanto, **si la Inercia ($I$) baja, la velocidad ($\omega$) debe subir.**

### Ejemplo: La Patinadora sobre hielo
* Cuando la patinadora tiene los **brazos extendidos**, su masa está lejos del eje ($I$ grande), por lo que gira lento.
* Al **cerrar los brazos**, su masa se acerca al eje, su momento de inercia disminuye drásticamente y, para compensar, su velocidad de giro aumenta velozmente.



---

## 5. Aplicaciones Prácticas

1.  **Llaves inglesas:** Usamos llaves largas para aumentar el brazo de palanca ($r$), lo que genera un torque inmenso con poca fuerza para aflojar un tornillo.
2.  **Volantes de inercia:** Los motores usan discos pesados para mantener un giro uniforme y que el motor no se detenga entre explosiones de los pistones.
3.  **Equilibrio de la cuerda floja:** Los funambulistas usan una vara larga para aumentar su momento de inercia, lo que hace que cualquier balanceo sea mucho más lento y les dé tiempo a reaccionar.

---

## Tabla Comparativa: Lineal vs. Rotacional

| Concepto Lineal | Símbolo | Concepto Rotacional | Símbolo |
| :--- | :--- | :--- | :--- |
| Desplazamiento | $x$ | Desplazamiento Angular | $\theta$ |
| Velocidad | $v$ | Velocidad Angular | $\omega$ |
| Masa | $m$ | Momento de Inercia | $I$ |
| Fuerza | $F$ | Torque | $\tau$ |
| **Ley de Newton** | $F = m \cdot a$ | **Ley de Newton Rot.** | $\tau = I \cdot \alpha$ |