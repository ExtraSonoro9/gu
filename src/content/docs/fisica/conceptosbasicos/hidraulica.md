---
title: Hidráulica


---
# Conceptos Básicos de Hidráulica

La hidráulica se divide principalmente en dos áreas: **Hidrostática** (fluidos en reposo) e **Hidrodinámica** (fluidos en movimiento).

---

## 1. Propiedades Fundamentales del Fluido

* **Densidad ($\rho$):** Relación entre la masa y el volumen. $\rho = m/V$.
* **Viscosidad:** Resistencia de un líquido a fluir. Es clave para la eficiencia de los sistemas hidráulicos.
* **Presión ($P$):** Fuerza ejercida perpendicularmente sobre una superficie. $P = F/A$.

---

## 2. Ecuaciones de Hidrostática

### A. Ecuación Fundamental (Presión Manométrica)
La presión aumenta linealmente con la profundidad en un fluido en reposo.
$$P = \rho \cdot g \cdot h$$
* **$g$:** Gravedad ($9,8 \, m/s^2$).
* **$h$:** Profundidad o altura de la columna de líquido.

### B. Principio de Pascal (Transmisión de Fuerza)
Como vimos anteriormente, es el corazón de la hidráulica industrial. Permite multiplicar fuerzas.
$$\frac{F_1}{A_1} = \frac{F_2}{A_2}$$



---

## 3. Ecuaciones de Hidrodinámica (Fluidos en Movimiento)

### A. Ecuación de Continuidad (Conservación de la Masa)
Si un fluido incompresible fluye por un conducto que cambia de diámetro, la cantidad de líquido que pasa por segundo es constante.
$$A_1 \cdot v_1 = A_2 \cdot v_2$$
* **$A$:** Área de la sección transversal.
* **$v$:** Velocidad del fluido.
* **Consecuencia:** Si el tubo se estrecha ($A$ disminuye), la velocidad del fluido ($v$) aumenta.

### B. El Caudal ($Q$)
Es el volumen de fluido que circula por unidad de tiempo.
$$Q = \frac{V}{t} = A \cdot v$$
* Unidad común: $m^3/s$ o $L/min$.

### C. Ecuación de Bernoulli (Conservación de la Energía)
Es la ecuación más importante de la hidrodinámica. Establece que la suma de la energía de presión, cinética y potencial es constante a lo largo de una línea de flujo.
$$P + \frac{1}{2}\rho v^2 + \rho gh = \text{constante}$$

* **Efecto Venturi:** Una consecuencia de esto es que cuando la velocidad de un fluido aumenta, su presión interna disminuye.



---

## 4. Potencia Hidráulica

Para que un sistema hidráulico mueva una carga, necesita potencia. Esta depende del caudal y la presión:
$$W_h = P \cdot Q$$
Donde $W_h$ es la potencia (en Watts), $P$ la presión y $Q$ el caudal.

---

## 5. Componentes de un Sistema Hidráulico Real

1.  **Bomba Hidráulica:** Convierte energía mecánica en energía hidráulica (genera caudal).
2.  **Actuadores (Cilindros):** Convierten la energía del fluido de nuevo en trabajo mecánico (fuerza lineal).
3.  **Válvulas:** Controlan la dirección, la presión y el caudal del líquido.
4.  **Depósito (Tanque):** Almacena el líquido y ayuda a enfriarlo.



[Image of a basic hydraulic circuit: Pump, Valve, and Cylinder]


---

## Comparativa: Hidráulica vs. Neumática

| Característica | Hidráulica (Aceite) | Neumática (Aire) |
| :--- | :--- | :--- |
| **Fuerza** | Muy alta (toneladas) | Baja / Media |
| **Precisión** | Alta (el aceite no se comprime) | Baja (el aire es elástico) |
| **Velocidad** | Lenta y controlada | Muy rápida |
| **Seguridad** | Riesgo de fugas/incendio | Segura (el aire no arde) |