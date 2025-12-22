---
title: Transformadas

---
# De la Señal Caótica al Orden: El Filtro de Fourier

En ingeniería, a menudo recibimos una señal que parece "basura" o ruido desordenado. La Transformada de Fourier actúa como un **clasificador automático** que extrae la información útil del caos.

---

## 1. El Escenario: Señal con Ruido de Red Eléctrica

Imagina que estás midiendo una señal muy débil (como las ondas cerebrales en un EEG). La señal que obtienes se ve así:

* **Lo que quieres medir:** Una onda suave (onda Alfa de 10 Hz).
* **El problema:** El cable está cerca de un enchufe y se le "pega" una interferencia de 60 Hz (ruido eléctrico).
* **Resultado:** Una onda "erizada" y desordenada donde no se distingue nada.



---

## 2. El Proceso de "Ordenamiento"

### Paso 1: El Dominio del Tiempo (El Caos)
Mirando el gráfico de Voltaje vs. Tiempo, es imposible saber qué es ruido y qué es señal. Solo ves una línea que sube y baja de forma errática.

### Paso 2: Aplicar la Transformada de Fourier
Al aplicar Fourier, la matemática "escanea" todas las frecuencias posibles. El resultado es un gráfico de **Amplitud vs. Frecuencia**.



### Paso 3: Identificación en el Espectro
En lugar de una línea desordenada, ahora ves dos picos (barras) muy claros:
1.  Un pico en **10 Hz** (¡Tu señal de interés!).
2.  Un pico en **60 Hz** (El ruido eléctrico identificado).

---

## 3. Ejemplo de "Limpieza" Automática

Una vez que Fourier ha "ordenado" el caos en picos de frecuencia, podemos hacer lo siguiente:

1.  **Eliminar el pico de 60 Hz:** Simplemente le decimos al software que ignore o ponga en cero cualquier energía en esa frecuencia.
2.  **Transformada Inversa:** Volvemos del dominio de la frecuencia al tiempo.
3.  **Resultado:** Obtenemos una onda perfectamente limpia y suave de 10 Hz.

---

## 4. Comparación: Antes y Después

| Estado | Apariencia | Utilidad |
| :--- | :--- | :--- |
| **Señal Original** | Caótica, "sucia", con picos irregulares. | Inútil para diagnóstico médico o datos. |
| **Post-Fourier** | Dos barras limpias en un gráfico. | Identificación exacta de los componentes. |
| **Señal Filtrada** | Onda pura y rítmica. | Lista para ser analizada. |



---

## 5. Aplicación Diaria: Cancelación de Ruido (Audífonos)

Tus audífonos con cancelación activa de ruido hacen esto miles de veces por segundo:
1. Escuchan el **ruido desordenado** del ambiente (motor del avión, gente hablando).
2. Usan Fourier para identificar esas frecuencias.
3. Generan una onda exactamente opuesta para "ordenar" (cancelar) ese ruido, dejando solo tu música limpia.