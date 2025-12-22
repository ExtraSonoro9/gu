---
title: Ondas

---
# Ondas y Análisis de Fourier en el ECG

Una **onda** es una perturbación que se propaga transportando energía sin transportar materia. En el cuerpo humano, el corazón genera ondas eléctricas que podemos medir y descomponer.

---

## 1. La Ecuación de Onda Paso a Paso

Para describir una onda que viaja, necesitamos una función $y(x, t)$ que dependa de la posición ($x$) y del tiempo ($t$).

### A. La Oscilación (El origen)
Si algo vibra en un solo punto, usamos:
$$y(t) = A \sin(\omega t)$$
* Donde $A$ es la amplitud y $\omega$ la frecuencia angular ($2\pi f$).

### B. La Propagación (El viaje)
Para que la onda se mueva a velocidad $v$, introducimos la posición. La forma estándar de una onda viajera es:
$$y(x, t) = A \sin(kx - \omega t)$$
* **$k$ (Número de onda):** $2\pi / \lambda$, representa la periodicidad en el espacio.

### C. La Ecuación Diferencial
Matemáticamente, para que algo sea una "onda", debe satisfacer esta ecuación de derivadas parciales:
$$\frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 y}{\partial t^2}$$
* Significa que la **aceleración temporal** de la onda es proporcional a su **curvatura espacial**.



---

## 2. Propiedades de las Ondas

* **Interferencia:** Cuando dos ondas se cruzan, sus amplitudes se suman (constructiva) o restan (destructiva).
* **Superposición:** Una onda compleja es simplemente la suma de muchas ondas simples (senos y cosenos).

---

## 3. Relación: Fourier y el Electrocardiograma (ECG)

El ECG es una señal en el **dominio del tiempo** que registra la despolarización del corazón. Aunque parece una sola línea, es una mezcla de muchas frecuencias.

### ¿Cómo se usa la Transformada de Fourier aquí?

1.  **Filtrado de Ruido:** El cuerpo produce señales eléctricas de los músculos (ruido de alta frecuencia) y la respiración (baja frecuencia). Al aplicar Fourier, el médico puede **"borrar"** esas frecuencias y dejar solo la señal limpia del corazón.
2.  **Identificación de Patrones:** Ciertas arritmias no se ven fácilmente en el tiempo, pero en el **dominio de la frecuencia** aparecen como picos anómalos.
3.  **Diferenciación de Señales:**
    * **ECG:** Frecuencias muy bajas ($0.05$ a $150\text{ Hz}$).
    * **Voz Humana:** $80$ a $255\text{ Hz}$.
    * **Radio FM:** $\approx 100\text{ MHz}$ ($10^8\text{ Hz}$).
    * **WiFi:** $2.4\text{ GHz}$ o $5\text{ GHz}$ ($10^9\text{ Hz}$).



---

## 4. Ejemplo: El Espectro del Corazón

Si aplicamos la Transformada de Fourier a un ECG normal:
* Veremos un pico dominante que corresponde a la **frecuencia cardíaca** (ej. 60-100 lpm).
* Veremos armónicos que definen la forma de las ondas P, QRS y T.
* Si hay interferencia de un cable eléctrico cercano, veríamos un pico molesto exactamente en los **50 o 60 Hz**. El equipo de ECG usa Fourier para eliminar ese pico específico sin dañar el resto de la señal.

---

## 5. Resumen de Aplicaciones

| Tecnología | Rango de Frecuencia | Uso de Fourier |
| :--- | :--- | :--- |
| **ECG** | $0.5 - 150\text{ Hz}$ | Limpiar ruido y diagnosticar arritmias. |
| **Radio AM/FM** | $500\text{ kHz} - 108\text{ MHz}$ | Sintonizar una estación específica. |
| **WiFi / Bluetooth** | $2.4 - 5\text{ GHz}$ | Dividir el canal en sub-frecuencias para que muchos dispositivos se conecten. |