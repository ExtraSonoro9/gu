---
title: Motores Eléctricos


---
#  Electromagnetismo y Potencia Mecánica

Un motor eléctrico es una máquina que convierte energía eléctrica en energía mecánica mediante la interacción de campos magnéticos. Su funcionamiento se basa en la **Ley de Lorentz**: cuando una carga eléctrica se mueve a través de un campo magnético, experimenta una fuerza física.

---

## 1. Estructura y Funcionamiento

Todo motor funciona bajo el principio de repulsión y atracción magnética. El objetivo es que los campos magnéticos nunca lleguen a alinearse, manteniendo el movimiento perpetuo.

### Partes Fundamentales:
* **Estator:** La parte fija. Genera un campo magnético constante mediante imanes permanentes o electroimanes (bobinas).
* **Rotor (Armadura):** La parte móvil que gira. Es donde se encuentran las bobinas que reciben la corriente.
* **Conmutador / Colector:** Un anillo dividido que invierte la dirección de la corriente en el rotor justo cuando los polos magnéticos se alinean, permitiendo que el giro continúe.
* **Escobillas (Brushes):** Bloques de grafito que transmiten la electricidad al conmutador mientras este gira.



---

## 2. Tipos de Motores: Brushed vs. Brushless

### Con Escobillas (Brushed DC)
Son los motores clásicos. El cambio de polaridad es mecánico (rozamiento de las escobillas).
* **Pros:** Control de velocidad muy simple (solo varías el voltaje), baratos.
* **Contras:** Las escobillas se desgastan, generan chispas (ruido eléctrico) y calor por fricción.

### Sin Escobillas (Brushless / BLDC)
No hay contacto físico. El cambio de polaridad lo hace un controlador electrónico (ESC).
* **Pros:** Mucho más eficientes, mayor vida útil, alcanzan altísimas RPM ($+50,000$).
* **Contras:** Requieren un controlador complejo y son más caros.



---

## 3. Torque vs. Potencia: Conceptos Clave

Es común confundirlos, pero en ingeniería son cosas muy distintas:

* **Torque (Par Motor):** Es la fuerza de rotación. Imagina una llave de cruz apretando un tornillo; el torque es la fuerza que aplicas. Determina la **capacidad de carga**. Se mide en Newton-metro (Nm) o kg-cm.
* **Potencia:** Es la rapidez con la que se entrega ese torque. Determina la **velocidad** con la que se mueve la carga. Se mide en Watts (W) o Caballos de Fuerza (HP).

> **Analogía:** El torque es la fuerza de un buey tirando de un arado; la potencia es qué tan rápido el buey puede cruzar el campo.

---

## 4. Cálculos de Ingeniería

### A. Cálculo del Torque ($T$) y Brazo de Palanca
El torque depende de la fuerza aplicada y la distancia al eje (radio).
$$T = F \cdot r$$
Si tienes una carga (masa) colgando de un eje:
* $F = \text{masa (kg)} \cdot 9.8 \text{ (gravedad)}$
* $r = \text{distancia del eje al punto de carga en metros.}$

**Ejemplo:** Si tu motor tiene un eje con una polea de $5 \text{ cm}$ ($0.05 \text{ m}$) y quieres levantar $2 \text{ kg}$:
$F = 2 \cdot 9.8 = 19.6 \text{ N}$
$T = 19.6 \cdot 0.05 = 0.98 \text{ Nm}$
*Si tu motor tiene un torque menor a $0.98 \text{ Nm}$, no podrá levantar la carga.*

### B. Potencia en Caballos de Fuerza (HP)
La relación entre potencia, torque y velocidad (RPM) es:
$$\text{HP} = \frac{T (\text{lb-ft}) \cdot \text{RPM}}{5252}$$
En el sistema métrico:
$$P (\text{Watts}) = \frac{T (\text{Nm}) \cdot \text{RPM} \cdot 2\pi}{60}$$

### C. Consumo de Corriente
La corriente ($I$) que consume un motor es proporcional al torque que está ejerciendo.
* **Sin carga:** El motor consume la "Corriente de Vacío" (mínima).
* **Con carga máxima:** El motor llega a la "Corriente de Stall" (bloqueo). Es el punto donde el motor se detiene por exceso de peso; aquí la corriente es máxima y es cuando los bobinados se queman si no hay protección.

---

## 5. Tabla de Rendimiento Típica

| Característica | Al aumentar la Carga | Al aumentar el Voltaje |
| :--- | :--- | :--- |
| **Torque** | Sube (hasta el límite) | Sube |
| **Velocidad (RPM)** | Baja | Sube |
| **Corriente (Amperios)** | Sube drásticamente | Sube proporcionalmente |
| **Eficiencia** | Baja (se genera más calor) | Suele mejorar hasta cierto punto |

---

## 6. Otros Conceptos Importantes

* **Kv (en motores Brushless):** Indica cuántas RPM sube el motor por cada Volt aplicado. (Ej: $1000 \text{ Kv}$ a $12\text{V} = 12,000 \text{ RPM}$).
* **Freno Regenerativo:** Algunos motores pueden actuar como generadores cuando se les quita la energía pero siguen girando por inercia, devolviendo carga a la batería.
* **Cojinetes (Rulemanes):** Son críticos. Un rulemán gastado aumenta la fricción, bajando el torque útil y calentando el eje.

> **Dato de Taller:** Como reparador de PC, verás motores de este tipo en los ventiladores (coolers) y discos duros. Los ventiladores de PC suelen ser motores **Brushless DC** de 4 polos, extremadamente eficientes y diseñados para durar años encendidos.
>
# Caso Práctico: Elevación de Carga (Polipasto Eléctrico)

Este ejercicio calcula los requerimientos para levantar una carga pesada mediante un sistema de motor y polea simple, considerando la física del trabajo y la potencia.

---

## 1. Datos del Escenario
* **Masa total ($m$):** 2 bolsas de cemento ($50\text{ kg}$ c/u) = **$100\text{ kg}$**.
* **Altura ($h$):** 3 pisos ($\approx 3\text{ m}$ por piso) = **$9\text{ metros}$**.
* **Tiempo objetivo ($t$):** **$20\text{ segundos}$** (Velocidad: $0.45\text{ m/s}$).
* **Radio de la polea ($r$):** $5\text{ cm}$ = **$0.05\text{ metros}$**.

---

## 2. Cálculo del Torque ($T$)
El torque es la "fuerza de giro" necesaria para vencer la gravedad. Si el motor no entrega este torque, la carga no se moverá.

1.  **Fuerza (Peso en Newtons):**
    $$F = m \cdot g \Rightarrow 100\text{ kg} \cdot 9.8\text{ m/s}^2 = 980\text{ N}$$
2.  **Torque en el eje:**
    $$T = F \cdot r \Rightarrow 980\text{ N} \cdot 0.05\text{ m} = \mathbf{49\text{ Nm}}$$



---

## 3. Cálculo de la Potencia ($P$)
La potencia determina qué tan rápido podemos realizar ese trabajo de elevación.

1.  **Trabajo realizado ($W$):**
    $$W = F \cdot h \Rightarrow 980\text{ N} \cdot 9\text{ m} = 8,820\text{ Julios}$$
2.  **Potencia necesaria (Watts):**
    $$P = \frac{W}{t} \Rightarrow \frac{8,820\text{ J}}{20\text{ s}} = \mathbf{441\text{ Watts}}$$
3.  **Conversión a Caballos de Fuerza:**
    $$441\text{ W} \div 746 \approx \mathbf{0.6\text{ HP}}$$

---

## 4. Consideraciones Reales y Eficiencia
En un taller o construcción, debemos considerar las pérdidas por fricción en la polea y el calor en el motor (Eficiencia $\eta \approx 70\%$).

* **Potencia Real Requerida:** $441\text{ W} \div 0.70 = \mathbf{630\text{ W}}$
* **Consumo Eléctrico ($220\text{V}$):** $I = \frac{P}{V} \Rightarrow \frac{630\text{ W}}{220\text{V}} \approx \mathbf{2.86\text{ Amperios}}$

---

## 5. Resumen de Selección de Componentes

| Especificación | Valor Mínimo | Recomendación Técnica |
| :--- | :--- | :--- |
| **Potencia del Motor** | $0.6\text{ HP}$ | **$1\text{ HP}$ ($746\text{ W}$)** para evitar sobrecalentamiento. |
| **Torque en el eje** | $49\text{ Nm}$ | Requiere **Caja Reductora**. |
| **Protección** | $2.8\text{ A}$ | Térmica de **$10\text{A}$** (por el pico de corriente al arrancar). |



---

## 6. La importancia de la Reducción
Un motor de $1\text{ HP}$ común gira a $1450\text{ RPM}$, lo cual es demasiado rápido para una polea (¡las bolsas subirían a $7\text{ metros por segundo}$!). 

Se utiliza una **caja reductora** que baja las RPM del motor y, a cambio, multiplica el torque. Esto permite que un motor que podrías frenar con la mano sea capaz de levantar $100\text{ kg}$ sin esfuerzo aparente.

> **Dato para la bitácora:** Al elegir el cable, recuerda que debe soportar al menos el doble del peso ($200\text{ kg}$) para cumplir con el factor de seguridad ante tirones o ráfagas de viento.