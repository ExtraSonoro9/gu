---
title: Corrientes Alterna y Continua


---
# AC vs. DC: Los Dos Caminos de la Electricidad

La diferencia fundamental radica en cómo se desplazan los electrones dentro del conductor.

---

## 1. Definiciones y Características

### Corriente Continua (DC - Direct Current)
Los electrones fluyen en **una sola dirección**, del polo negativo al positivo, de forma constante.
* **Símbolo:** Una línea recta sobre una línea punteada (⎓).
* **Fuentes:** Baterías, celdas solares, dínamos.
* **Uso:** Electrónica (chips), cargadores, vehículos eléctricos.

### Corriente Alterna (AC - Alternating Current)
Los electrones oscilan, cambiando de dirección muchas veces por segundo (frecuencia).
* **Símbolo:** Una onda senoidal (~).
* **Frecuencia:** 50 Hz o 60 Hz (según el país).
* **Fuentes:** Alternadores en centrales eléctricas.
* **Uso:** Electrodomésticos, motores industriales, red eléctrica domiciliaria.



---

## 2. Un Poco de Historia: La Guerra de las Corrientes

A finales del siglo XIX, dos visiones chocaron:
* **Thomas Edison (DC):** Defendía la corriente continua. Era segura pero no se podía transportar a largas distancias porque el voltaje no se podía elevar fácilmente, requiriendo una central eléctrica en cada cuadra.
* **Nikola Tesla y Westinghouse (AC):** Propusieron la corriente alterna. Gracias al invento del **transformador**, se podía elevar el voltaje para transportarlo a cientos de kilómetros y luego bajarlo para el consumo hogareño. 
* **Resultado:** Ganó la AC para el transporte, pero hoy vivimos en un mundo híbrido donde la DC domina nuestros dispositivos digitales.

---

## 3. Conversión: De una a otra

Para pasar de un tipo de corriente a otro, necesitamos componentes específicos:

1. **De AC a DC (Rectificación):**
   * Se usa un **Rectificador** (puente de diodos) que permite que la corriente pase en un solo sentido.
   * Se añade un **Capacitor** para "suavizar" la onda y obtener una línea recta.
   * *Ejemplo:* El transformador de tu laptop.

2. **De DC a AC (Inversión):**
   * Se usa un **Inversor**. Utiliza transistores de alta velocidad (MOSFETs o IGBTs) para "trocear" la corriente continua y recrear una onda artificial.
   * *Ejemplo:* Inversores solares o los que se usan en autos para conectar un enchufe común.

---

## 4. Pérdida por Calor y Alta Tensión ($P = I^2 \cdot R$)

¿Por qué los cables de las torres de alta tensión llevan cientos de miles de voltios? La respuesta es la **Eficiencia Térmica**.

El calor generado en un cable (Efecto Joule) se calcula como:
$$P_{pérdida} = I^2 \cdot R$$

* **El problema:** Para transmitir mucha potencia ($P = V \cdot I$), puedes usar mucho voltaje o mucha corriente.
* **La solución:** Si subes el **Voltaje ($V$)** al extremo, puedes bajar la **Corriente ($I$)** al mínimo para entregar la misma potencia.
* **El resultado:** Como la pérdida depende del cuadrado de la corriente ($I^2$), al reducir la corriente 10 veces, ¡la pérdida por calor se reduce 100 veces!

> **Comparativa:** > * **Baja Tensión:** Transportar energía a 220V a larga distancia requeriría cables del grosor de un tronco para que no se derritan por el calor.
> * **Alta Tensión:** Transportar a 500,000V permite usar cables relativamente finos con pérdidas mínimas de energía.

---

## 5. Formas de Medición

Para medir AC y DC con un multímetro, debes elegir el modo correcto:

* **Medición en DC:** El multímetro mide el valor real constante. Si pones las puntas al revés, marcará un signo negativo (-).
* **Medición en AC (Valor RMS):** Como la corriente alterna sube y baja, el multímetro no mide el pico máximo, sino el **Valor Eficaz (RMS)**. 
    * El RMS es el equivalente en calor que produciría esa corriente si fuera continua. 
    * **Dato:** En un enchufe de 220V AC, el pico real de voltaje llega hasta los $\approx 311\text{V}$, pero el multímetro marca 220V (el promedio útil).



---

> **Nota para la bitácora:** Existe una tecnología moderna llamada **HVDC** (High Voltage Direct Current) que se usa para unir redes eléctricas submarinas muy largas. A voltajes extremadamente altos, la DC tiene incluso menos pérdidas que la AC, pero las estaciones de conversión son increíblemente caras.