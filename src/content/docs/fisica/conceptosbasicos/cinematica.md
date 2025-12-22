---
title: Cinemática Lineal y Angular


---


El movimiento puede ocurrir en línea recta o siguiendo una trayectoria circular. Ambos tipos de movimiento comparten la misma lógica matemática, pero usan unidades diferentes.

---

## 1. Cinemática Lineal (Rectilínea)
Se ocupa de los objetos que se desplazan a lo largo de una trayectoria recta.

### Magnitudes Principales:
* **Posición ($x$):** Lugar donde se encuentra el objeto (metros, $m$).
* **Velocidad ($v$):** Cambio de posición respecto al tiempo ($m/s$).
* **Aceleración ($a$):** Cambio de velocidad respecto al tiempo ($m/s^2$).

### Tipos de Movimiento:
1.  **MRU (Movimiento Rectilíneo Uniforme):** Velocidad constante, aceleración cero.
    $$x = x_0 + v \cdot t$$
2.  **MRUA (Movimiento Rectilíneo Uniformemente Acelerado):** Aceleración constante.
    $$v = v_0 + a \cdot t$$
    $$x = x_0 + v_0 \cdot t + \frac{1}{2} a \cdot t^2$$



---

## 2. Cinemática Angular (Circular)
Se ocupa de los objetos que giran alrededor de un eje central. Aquí no medimos metros, sino **ángulos**.

### Magnitudes Principales:
* **Posición Angular ($\theta$):** Ángulo recorrido (se mide en **Radianes**, $rad$).
* **Velocidad Angular ($\omega$):** Rapidez del giro ($rad/s$).
* **Aceleración Angular ($\alpha$):** Cambio en la velocidad de giro ($rad/s^2$).

### Tipos de Movimiento:
1.  **MCU (Movimiento Circular Uniforme):** Velocidad de giro constante.
    $$\theta = \theta_0 + \omega \cdot t$$
2.  **MCUA (Movimiento Circular Uniformemente Acelerado):** El objeto gira cada vez más rápido o más lento.
    $$\omega = \omega_0 + \alpha \cdot t$$
    $$\theta = \theta_0 + \omega_0 \cdot t + \frac{1}{2} \alpha \cdot t^2$$



---

## 3. Relación entre lo Lineal y lo Angular
Existe un "puente" matemático entre ambos mundos: el **Radio ($r$)**. Cualquier punto en un objeto que gira tiene una velocidad lineal (tangencial) que depende de qué tan lejos esté del centro.

| Relación | Fórmula |
| :--- | :--- |
| **Arco (distancia lineal)** | $s = \theta \cdot r$ |
| **Velocidad Tangencial** | $v = \omega \cdot r$ |
| **Aceleración Tangencial** | $a_t = \alpha \cdot r$ |

> **Dato Clave:** En un disco que gira (como un CD), todos los puntos tienen la misma velocidad angular ($\omega$), pero los puntos del borde se mueven a una velocidad lineal ($v$) mucho mayor porque están a más distancia del centro.

---

## 4. Aceleración Centrípeta ($a_c$)
Incluso en el movimiento circular uniforme (donde la rapidez no cambia), existe una aceleración. Esto se debe a que el vector velocidad **cambia de dirección** constantemente para poder girar.

$$a_c = \frac{v^2}{r} = \omega^2 \cdot r$$

Esta aceleración siempre apunta hacia el **centro** del círculo.



---

## Tabla de Equivalencias Final

| Concepto | Lineal | Angular | Relación |
| :--- | :--- | :--- | :--- |
| **Espacio** | $x$ (m) | $\theta$ (rad) | $x = \theta \cdot r$ |
| **Velocidad** | $v$ (m/s) | $\omega$ (rad/s) | $v = \omega \cdot r$ |
| **Aceleración** | $a$ (m/s²) | $\alpha$ (rad/s²) | $a = \alpha \cdot r$ |
| **Tiempo** | $t$ (s) | $t$ (s) | El tiempo es común |