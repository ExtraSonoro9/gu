---
title: Medición del Calor


---
# Escalas de Temperatura

La metrología térmica nos permite cuantificar desde el frío criogénico hasta el calor de un reactor. Para ello, usamos diferentes escalas y unidades según el contexto (científico, civil o técnico).

---

## 1. Las Tres Escalas Principales

### Celsius (°C)
Basada en las propiedades del agua a presión atmosférica normal.
* **0°C:** Punto de congelación del agua.
* **100°C:** Punto de ebullición del agua.

### Fahrenheit (°F)
Utilizada principalmente en EE.UU. Su escala es más "fina" (un grado Celsius es más grande que un grado Fahrenheit).
* **32°F:** Congelación del agua.
* **212°F:** Ebullición del agua.

### Kelvin (K)
Es la **escala absoluta** utilizada en ciencia y criogenia. No utiliza el símbolo de grado (°) porque es una unidad de medida base del Sistema Internacional.
* **0 K (Cero Absoluto):** El punto donde cesa todo movimiento molecular. No existen temperaturas negativas en Kelvin.



---

## 2. Fórmulas de Conversión

Para moverte entre escalas en tus cálculos de taller o laboratorio:

| De / A | Celsius (°C) | Fahrenheit (°F) | Kelvin (K) |
| :--- | :--- | :--- | :--- |
| **Celsius** | - | $F = (C \cdot \frac{9}{5}) + 32$ | $K = C + 273.15$ |
| **Fahrenheit** | $C = (F - 32) \cdot \frac{5}{9}$ | - | $K = (F - 32) \cdot \frac{5}{9} + 273.15$ |
| **Kelvin** | $C = K - 273.15$ | $F = (K - 273.15) \cdot \frac{9}{5} + 32$ | - |

---

## 3. Medición del Calor (Energía)

El calor no se mide con un termómetro, sino que se calcula o se mide con un **calorímetro**. Las unidades son:

* **Caloría (cal):** Cantidad de calor necesaria para elevar 1°C la temperatura de 1 gramo de agua.
* **Joule (J):** La unidad de energía del Sistema Internacional ($1 \text{ cal} \approx 4.18 \text{ J}$).
* **BTU (British Thermal Unit):** Muy común en aire acondicionado y refrigeración.

### El Calor Específico ($Q$)
Para saber cuánto calor absorbe un objeto (como un disipador de CPU de aluminio):
$$Q = m \cdot c \cdot \Delta T$$
Donde:
* $m$: masa.
* $c$: calor específico del material (el agua retiene mucho calor, el cobre muy poco).
* $\Delta T$: cambio de temperatura.

---

## 4. Instrumentos de Medición

1. **Termopar (Thermocouple):** Dos metales distintos unidos que generan un milivoltaje según la temperatura. Ideales para medir temperaturas altas en puntas de soldadores.
2. **RTD (PT100):** Una resistencia (generalmente de platino) que cambia su valor de forma muy precisa con la temperatura.
3. **Termistor (NTC/PTC):** Resistencias económicas sensibles al calor. Las verás en las baterías de laptops y sensores de temperatura de placas madre.
4. **Pirómetro Infrarrojo:** Mide la radiación térmica a distancia. Muy útil para medir componentes en funcionamiento sin tocarlos.



---

## 5. Puntos de Referencia Curiosos

* **$-273.15$°C:** Cero Absoluto ($0$ K).
* **$-40$°C:** Es el único punto donde las escalas **Celsius y Fahrenheit valen lo mismo**.
* **$37$°C:** Temperatura promedio del cuerpo humano.
* **$180$°C a $250$°C:** Temperatura de trabajo para soldadura de estaño en electrónica.

> **Dato de Taller:** Cuando un componente electrónico "quema" al tacto, suele estar por encima de los $60$°C. La mayoría de los semiconductores industriales soportan hasta $125$°C o $150$°C antes de sufrir daños permanentes o entrar en protección térmica.