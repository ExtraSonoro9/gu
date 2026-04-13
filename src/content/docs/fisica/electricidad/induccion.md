---
title: Inducción y Corrientes Parásitas (Foucault)

---
  

La inducción electromagnética no solo genera corriente en cables (bobinas), sino que también induce corrientes circulares dentro de bloques sólidos de metal. Estas corrientes se conocen como **Corrientes Parásitas**.

---

## 1. ¿Qué son las Corrientes Parásitas?

Cuando un conductor sólido (como un bloque de hierro o aluminio) se expone a un campo magnético que varía en el tiempo, se crean pequeños bucles de corriente eléctrica dentro del metal.

* **Origen:** Estas corrientes siguen la Ley de Faraday. El metal "ve" el cambio de magnetismo y reacciona creando electricidad.
* **Efecto Joule:** Como el metal tiene una resistencia eléctrica interna, estas corrientes generan **calor**. En la mayoría de las máquinas eléctricas, esto se considera una "pérdida" de energía.



---

## 2. Aplicaciones Útiles

Aunque se llaman "parásitas", hemos aprendido a usarlas a nuestro favor:

1.  **Cocinas de Inducción:** Generan corrientes de Foucault directamente en la base de la olla. La resistencia de la olla al paso de estas corrientes genera el calor para cocinar.
2.  **Frenos Magnéticos:** Se usan en trenes de alta velocidad y montañas rusas. Un imán potente cerca de un disco de metal en movimiento genera corrientes parásitas que crean un campo magnético opuesto, frenando el disco sin necesidad de contacto físico (sin desgaste).
3.  **Detectores de Metales:** El aparato induce corrientes en el objeto metálico enterrado, y luego detecta el campo magnético que esas mismas corrientes devuelven.

---

## 3. El Problema en Transformadores y Motores

En los transformadores, las corrientes parásitas son un gran enemigo porque calientan el núcleo y desperdician electricidad. 

### ¿Cómo se solucionan? (Laminación)
En lugar de usar un bloque sólido de hierro para el núcleo, se usan **láminas delgadas** aisladas entre sí con barniz.
* **Por qué funciona:** Las láminas interrumpen el camino de las corrientes parásitas, impidiendo que formen bucles grandes. Esto reduce drásticamente el calor generado y aumenta la eficiencia.



---

## 4. Ley de Lenz: La Oposición

Las corrientes parásitas siempre fluyen en una dirección tal que el campo magnético que generan **se opone** al cambio que las produjo. 

* **Experimento clásico:** Si dejas caer un imán potente dentro de un tubo de cobre, el imán caerá muy lentamente. No es porque el cobre sea magnético (no lo es), sino porque el imán induce corrientes parásitas en el tubo que crean un campo magnético que "empuja" al imán hacia arriba.

---

## 5. Resumen para la Bitácora

| Concepto | Descripción |
| :--- | :--- |
| **Causa** | Campos magnéticos variables atravesando un conductor sólido. |
| **Consecuencia Principal** | Generación de calor (Efecto Joule). |
| **Enemigo de...** | Transformadores y motores (causa pérdida de eficiencia). |
| **Aliado de...** | Cocinas de inducción, frenos magnéticos y fundiciones. |
| **Solución Técnica** | Laminar los núcleos y usar materiales con alta resistividad (como la ferrita). |

---

> **Dato de Taller:** Las fuentes de alimentación conmutadas de las PC usan núcleos de **Ferrita** en lugar de hierro laminado. La ferrita es un material cerámico que conduce muy bien el magnetismo pero **muy mal la electricidad**, lo que elimina casi totalmente las corrientes parásitas a altas frecuencias.

# ¿Por qué los Transformadores de Microondas usan Hierro?

A diferencia de las fuentes conmutadas (Switching) de una PC, el transformador de un microondas es un componente **lineal** que trabaja a la frecuencia de la red eléctrica.

---

## 1. La Frecuencia de Trabajo (50 Hz / 60 Hz)

La principal razón es la frecuencia:
* **Baja Frecuencia:** La red eléctrica domiciliaria vibra a 50 o 60 Hz. A estas frecuencias tan bajas, el hierro silíceo es extremadamente eficiente para canalizar el flujo magnético.
* **Alta Frecuencia:** Las fuentes de PC trabajan a más de 20,000 Hz (20 kHz). A esa velocidad, el hierro se calentaría tanto por las corrientes parásitas que se derretiría, por eso ahí se usa **ferrita**.

---

## 2. Densidad de Flujo y Saturación

El hierro puede manejar mucha más "densidad de flujo magnético" que la ferrita antes de saturarse.
* Un núcleo de hierro puede ser más pequeño y compacto para manejar los **1000W a 2000W** que consume un microondas. 
* Si quisiéramos usar ferrita a 50 Hz para esa potencia, el transformador tendría que ser del tamaño de un motor de auto.

---

## 3. Construcción: El Núcleo Laminado

Como mencionamos en la sección de corrientes parásitas, el núcleo no es un bloque sólido de hierro, sino que está hecho de **láminas de acero al silicio** apiladas.



* Estas láminas están aisladas entre sí por una capa de barniz u óxido. 
* Esto obliga a las corrientes parásitas a quedarse encerradas en cada lámina individual, reduciendo el calor total y permitiendo que el transformador sea eficiente.

---

## 4. El "Shunt" Magnético (Dato Curioso)

Si observas un transformador de microondas, verás que entre el primario y el secundario hay unos trozos de hierro extra llamados **shunts**.
* **Función:** El magnetrón (lo que genera las microondas) es una carga muy inestable. Estos shunts actúan como un "limitador de corriente" magnético. 
* Si el magnetrón intenta consumir demasiada corriente, los shunts desvían parte del flujo magnético para evitar que el transformador se queme.

---

## 5. Comparativa Técnica

| Característica | Transformador de Hierro (Microondas) | Transformador de Ferrita (Fuente PC) |
| :--- | :--- | :--- |
| **Frecuencia** | 50 / 60 Hz (Baja) | 20 kHz - 100 kHz (Alta) |
| **Material** | Acero al silicio laminado | Polvo de óxido de hierro y cerámica |
| **Peso** | Muy pesado (4-5 kg) | Muy ligero (gramos) |
| **Ruido** | Zumbido audible (vibración de láminas) | Inaudible (frecuencia ultrasónica) |

---

> **Advertencia de Seguridad:** Los transformadores de microondas son **extremadamente peligrosos**. A diferencia de otros transformadores, entregan unos $2000\text{V}$ con suficiente amperaje ($0.5\text{A}$) para causar una muerte instantánea. Nunca los manipules enchufados, e incluso desenchufados, recuerda que suelen tener un capacitor de alta tensión asociado que puede retener carga mortal.