---
title: Fricción, Fuerza Normal 


---
# Fricción y Resistencia de Fluidos

La fricción actúa siempre en sentido opuesto al vector velocidad. Se divide en dos mundos: el contacto entre sólidos y el arrastre en fluidos (aire).

---

## 1. Fricción Sólida y Fuerza Normal ($N$)

La fricción entre dos superficies depende de la naturaleza de los materiales y de la fuerza con la que están siendo presionados uno contra otro. Esta presión es la **Fuerza Normal**.

### Relación Fundamental
La fuerza de fricción ($f_r$) es directamente proporcional a la normal ($N$):

$$f_r = \mu \cdot N$$

Donde:
* **$\mu$ (Mu):** Coeficiente de fricción (adimensional). Depende de la rugosidad de los materiales.
* **$N$ (Normal):** La fuerza perpendicular a la superficie. En un plano horizontal, si no hay otras fuerzas verticales, $N = m \cdot g$.



---

## 2. Fricción Estática vs. Cinética

Un objeto no tiene un solo coeficiente de fricción, sino dos:

1.  **Fricción Estática ($\mu_s$):** La fuerza necesaria para **empezar** a mover un objeto. Es siempre mayor que la cinética.
2.  **Fricción Cinética ($\mu_k$):** La fuerza que actúa cuando el objeto ya está en **movimiento**.

$$f_{s,max} = \mu_s \cdot N \quad \text{y} \quad f_k = \mu_k \cdot N$$

> **Dato Clave:** Por eso es más difícil empezar a empujar un mueble que mantenerlo en movimiento una vez que ya arrancó.

---

## 3. Fricción en el Aire (Resistencia Aerodinámica)

Cuando un objeto se mueve a través del aire (o cualquier fluido), la fricción ya no depende de la Normal, sino de la velocidad, la densidad del fluido y la forma del objeto.

### La Ecuación de Arrastre (Drag)
Para velocidades moderadas a altas, la fuerza de resistencia ($F_D$) se calcula como:

$$F_D = \frac{1}{2} \rho \cdot v^2 \cdot C_D \cdot A$$

Donde:
* **$\rho$ (Rho):** Densidad del aire ($\approx 1,225 \, kg/m^3$).
* **$v$:** Velocidad del objeto (notar que está al **cuadrado**, si duplicas la velocidad, la resistencia se cuadriplica).
* **$C_D$:** Coeficiente de arrastre (depende de la aerodinámica: un cubo tiene un $C_D$ alto, una gota de agua uno bajo).
* **$A$:** Área frontal del objeto.



---

## 4. Velocidad Terminal

Cuando un objeto cae (como un paracaidista), la fuerza de gravedad ($P = m \cdot g$) lo acelera hacia abajo, pero la resistencia del aire ($F_D$) aumenta con la velocidad. 

Llega un punto donde la resistencia del aire es igual al peso:
$$F_D = P \implies \frac{1}{2} \rho v^2 C_D A = m \cdot g$$

En ese momento, la aceleración se vuelve **cero** y el objeto cae a una velocidad constante llamada **Velocidad Terminal**.



---

## 5. Resumen de Cálculos

| Situación | Fórmula de Fricción | Dependencia Principal |
| :--- | :--- | :--- |
| **Sólido sobre Sólido** | $f_r = \mu \cdot N$ | Rugosidad y Peso/Presión |
| **Objeto en Fluido (Baja $v$)** | $f = 6\pi \eta r v$ (Ley de Stokes) | Viscosidad y Radio |
| **Objeto en Fluido (Alta $v$)** | $F_D = \frac{1}{2} \rho v^2 C_D A$ | Velocidad e Higiene de forma |

---

## Ejemplo de Plano Inclinado
En un plano inclinado de ángulo $\theta$,