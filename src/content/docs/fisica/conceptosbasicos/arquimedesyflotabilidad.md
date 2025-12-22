---
title: Principio de Arquímedes


---


El principio establece que: *"Todo cuerpo sumergido total o parcialmente en un fluido experimenta un empuje vertical hacia arriba igual al peso del volumen del fluido que desaloja"*.

## La Fuerza de Empuje ($E$)
Cuando sumerges un objeto, el fluido "empuja" hacia arriba. Esta fuerza se calcula mediante la fórmula:

$$E = \rho_f \cdot V_s \cdot g$$

Donde:
* **$\rho_f$**: Densidad del fluido (en $kg/m^3$).
* **$V_s$**: Volumen sumergido del cuerpo (equivalente al volumen del fluido desalojado).
* **$g$**: Aceleración de la gravedad ($\approx 9,8 \, m/s^2$).



---

## Los Tres Escenarios de Flotabilidad
La relación entre el peso del objeto ($P$) y la fuerza de empuje ($E$) determina qué sucederá:

1.  **El objeto se hunde ($P > E$):** Ocurre cuando la densidad del objeto es mayor que la del fluido ($\rho_{cuerpo} > \rho_{fluido}$). La fuerza neta es hacia abajo.
2.  **El objeto está en equilibrio ($P = E$):** El objeto permanece suspendido a cualquier profundidad donde se coloque. Sus densidades son iguales.
3.  **El objeto flota ($P < E$):** El objeto sube hasta la superficie. Al llegar arriba, se queda parcialmente sumergido de modo que el peso del volumen de agua desalojada sea exactamente igual al peso total del objeto.



---

## ¿Cómo flotan los barcos de acero?
El acero es mucho más denso que el agua ($7850 \, kg/m^3$ vs $1000 \, kg/m^3$). Sin embargo, un barco flota porque no es un bloque sólido de acero.

* El barco tiene una forma cóncava que encierra una gran cantidad de **aire**.
* El **volumen total** del barco es inmenso en comparación con su masa.
* Esto hace que la **densidad promedio** del barco (acero + aire) sea menor que la del agua.
* Al ser tan voluminoso, desplaza una cantidad enorme de agua cuyo peso es superior al peso del propio barco.



---

## Aplicación Práctica: Determinación de la Densidad
Arquímedes utilizó este principio para descubrir si la corona del rey Hierón era de oro puro. Al sumergirla, midió el volumen de agua desplazada y pudo calcular la densidad real del objeto:

$$\text{Densidad} = \frac{\text{masa}}{\text{volumen desplazado}}$$

### Ejemplo de Cálculo
Si un objeto de $2 \, m^3$ se sumerge completamente en agua ($\rho = 1000 \, kg/m^3$):
$$E = 1000 \, kg/m^3 \cdot 2 \, m^3 \cdot 9,8 \, m/s^2 = 19600 \, N$$
El agua está ejerciendo una fuerza hacia arriba de $19.600$ Newtons.

---

## Peso Aparente
Cuando estás en una piscina, sientes que "pesas menos". Eso es el **peso aparente**:
$$P_{aparente} = P_{real} - E$$

El principio de Arquímedes no solo se aplica a líquidos (como el agua), sino a todos los fluidos, lo que incluye a los gases. El comportamiento de un globo de helio es exactamente el mismo que el de un objeto flotando en el agua, pero en un "océano" de aire.

Aquí tienes la explicación para tu repositorio:
Fragmento de código

# Arquímedes en el Aire: El Globo de Helio

Un globo de helio asciende porque el aire que lo rodea es un fluido que ejerce una fuerza de empuje hacia arriba.

## 1. La Diferencia de Densidades
La clave está en la comparación entre la densidad del gas dentro del globo y la densidad del aire atmosférico:
* **Densidad del aire ($\rho_{aire}$):** $\approx 1,225 \, kg/m^3$ (a nivel del mar).
* **Densidad del helio ($\rho_{He}$):** $\approx 0,18 \, kg/m^3$.

Como el helio es mucho menos denso que el aire, el peso del globo (helio + plástico) es menor que el peso del volumen de aire que desplaza.



---

## 2. El Balance de Fuerzas
Para que el globo suba, la **Fuerza de Empuje ($E$)** debe ser mayor que el **Peso total ($P$)**:

$$E = \rho_{aire} \cdot V_{globo} \cdot g$$
$$P = (m_{helio} + m_{plastico}) \cdot g$$

Si $E > P$, el globo experimenta una aceleración hacia arriba.

---

## 3. ¿Por qué se detiene o explota?
A medida que el globo sube, ocurren dos fenómenos físicos importantes:

1.  **Disminución de la Presión Externa:** Según la **Ley de Boyle**, al subir hay menos presión atmosférica, por lo que el helio se expande y el volumen del globo aumenta.
2.  **Disminución de la Densidad del Aire:** El aire es menos denso a mayor altura.

### El punto de equilibrio
El globo dejará de subir cuando llegue a una altura donde la densidad del aire sea tan baja que el peso del aire desalojado sea exactamente igual al peso del globo. En ese momento, el globo queda "flotando" en equilibrio.

> **Dato curioso:** Si el material del globo no es lo suficientemente elástico, la expansión del gas debido a la baja presión externa hará que el plástico se estire hasta su límite y el globo **explote** antes de alcanzar su altura de equilibrio.



---

## Comparativa: Agua vs. Aire

| Objeto | Fluido | Por qué flota |
| :--- | :--- | :--- |
| **Barco** | Agua | Desplaza mucha agua debido a su gran volumen de aire interno. |
| **Globo de Helio** | Aire | El helio es intrínsecamente menos denso que el aire circundante. |
| **Globo Aerostático** | Aire | El aire caliente dentro del globo es menos denso que el aire frío exterior. |