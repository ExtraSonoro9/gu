---
title: Transformadas
---
## Transformada de Fourier: El Lente de las Frecuencias

La Transformada de Fourier descompone cualquier señal compleja (una onda en el tiempo) en una suma de senos y cosenos de diferentes frecuencias. Es el equivalente matemático a un prisma que descompone la luz blanca en colores.

---

## 1. Definición Matemática

Para una función $f(t)$ en el dominio del tiempo, su transformada $F(\omega)$ en el dominio de la frecuencia es:

$$\mathcal{F}\{f(t)\} = F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

* **$t$**: Tiempo (segundos).
* **$\omega$**: Frecuencia angular (rad/s).
* **$e^{-i\omega t}$**: La base compleja que conecta el tiempo con la frecuencia (Identidad de Euler).



---

## 2. Propiedades Clave

* **Linealidad:** La transformada de una suma es la suma de las transformadas.
* **Desplazamiento en el Tiempo:** Si mueves la señal en el tiempo, en la frecuencia solo cambia la fase, no la magnitud.
* **Dualidad:** Existe una relación simétrica entre el tiempo y la frecuencia.
* **Convolución:** Una de las más importantes; la convolución en el tiempo es una **multiplicación** en la frecuencia. Esto simplifica enormemente los cálculos en ingeniería eléctrica.

---

## 3. Aplicaciones en la Vida Real

### A. Medicina: El Electrocardiograma (ECG)
Un ECG registra la actividad eléctrica del corazón en el tiempo.
* **Uso de Fourier:** Permite filtrar el ruido (como el movimiento de los músculos o interferencia de cables) eliminando las frecuencias que no corresponden al ritmo cardíaco. También ayuda a detectar arritmias al analizar picos de frecuencia específicos que no son visibles a simple vista en la onda temporal.



### B. Telecomunicaciones: WiFi, Radio y 5G
El aire está lleno de ondas. ¿Cómo sabe tu celular cuál es el WiFi y cuál es la Radio?
* **Espectro de Frecuencia:** La Transformada de Fourier permite "sintonizar". El WiFi opera usualmente en $2.4\text{ GHz}$ o $5\text{ GHz}$, mientras que la Radio FM está en los $88-108\text{ MHz}$.
* **Diferenciación:** Al aplicar Fourier, la señal de WiFi aparece como un paquete de energía en una frecuencia muy alta, mientras que la radio es un pico en una frecuencia mucho más baja. El hardware ignora las frecuencias que no le interesan.

### C. Electricidad y Calidad de Energía
En los sistemas de potencia, se usa para detectar **armónicos**. Si una máquina industrial "ensucia" la red eléctrica, Fourier revela qué frecuencias parásitas están deformando la onda de $50/60\text{ Hz}$ estándar.

---

## 4. Ejemplo Conceptual

Imagina que escuchas un acorde de piano (una señal compleja).
1. **Dominio del Tiempo:** Verías una onda caótica subiendo y bajando. No podrías decir qué notas son.
2. **Transformada de Fourier:** Verías tres picos claros en el eje de frecuencia (por ejemplo: Do, Mi, Sol). Fourier te dice qué "ingredientes" forman ese sonido.



---

## 5. La FFT (Fast Fourier Transform)
En programación y electrónica, no se usa la integral infinita, sino la **FFT**. Es un algoritmo optimizado que permite a los microcontroladores (como un Arduino o el chip de tu móvil) calcular estas frecuencias en milisegundos.