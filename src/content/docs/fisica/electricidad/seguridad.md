---
title: Seguridad


---
# Seguridad Eléctrica y Prevención de Riesgos

La electricidad no perdona errores. En el laboratorio o en la reparación de equipos, el cuerpo humano es un conductor potencial y la corriente siempre buscará el camino más corto hacia la tierra. Si ese camino eres tú, las consecuencias pueden ser fatales.

---

## 1. Dispositivos de Protección Obligatorios

Un sistema eléctrico seguro se basa en la redundancia. Cada dispositivo protege un aspecto diferente del sistema.

### El Interruptor Diferencial (Disyuntor)
Es el dispositivo más importante para la **protección de la vida**.
* **Funcionamiento:** Compara la corriente que entra por la Fase con la que regresa por el Neutro. Si detecta una diferencia mínima (típicamente 30mA), asume que la energía se está fugando (posiblemente a través de una persona) y corta el suministro en milisegundos.
* **Mantenimiento:** Debe probarse una vez al mes pulsando el botón de "Test". Si no salta, debe reemplazarse inmediatamente.

### El Interruptor Termomagnético (Térmica)
Su función es proteger la **instalación y los cables**.
* **Protección Térmica:** Actúa ante sobrecargas (muchos aparatos conectados).
* **Protección Magnética:** Actúa ante cortocircuitos (unión directa de fase y neutro).
* **Importancia:** Evita que los cables se sobrecalienten e inicien un incendio dentro de las paredes.

### El Fusible
Es un dispositivo de sacrificio. Contiene un filamento diseñado para fundirse cuando la corriente supera un nivel seguro.
* **Advertencia Crítica:** Jamás debe reemplazarse un fusible por un "puente" de alambre o un clavo. Esto anula la protección y garantiza daños catastróficos ante la próxima falla.

---

## 2. La Puesta a Tierra (PAT) y el Tercer Pin

El cable de tierra (verde y amarillo) es el camino de evacuación de emergencia para la electricidad.

* **El Peligro del Chasis:** Si un artefacto (como una heladera o una fuente de alimentación) tiene una falla interna y un cable toca su carcasa metálica, la electricidad queda "atrapada" en el chasis.
* **Con Tierra:** La corriente fluye inmediatamente al suelo, el disyuntor detecta la fuga y corta la luz.
* **Sin Tierra:** El equipo parece funcionar normal, pero al tocarlo, **tú te conviertes en el cable a tierra**, recibiendo la descarga.
* **Prohibición:** Bajo ninguna circunstancia se debe cortar el tercer pin de un enchufe. Si el tomacorriente es viejo, se debe cambiar el tomacorriente, no mutilar el enchufe.



---

## 3. Curiosidades y Mitos: Aves en Alta Tensión

Es común ver aves paradas en cables de miles de voltios sin electrocutarse.
* **Explicación Física:** Para que la corriente fluya, debe haber una **diferencia de potencial** (voltaje). Como el ave toca solo un cable y no toca el suelo ni otro cable con un voltaje distinto, la corriente no tiene un camino para circular a través de ella.
* **El Riesgo:** Si el ave fuera lo suficientemente grande para tocar dos cables a la vez, o un cable y la torre metálica (que está a tierra), se produciría un arco eléctrico mortal.

---

## 4. Prácticas de Trabajo Seguras

### Precaución con el Multímetro (Tester)
Un error clásico y peligroso es intentar **medir corriente (Amperios) directamente en un tomacorriente**.
* **Por qué falla:** En modo Amperímetro, el tester tiene una resistencia interna casi nula (actúa como un cable). Si lo conectas a la red, generas un **cortocircuito masivo**. El tester explotará en tu mano o, en el mejor de los casos, quemará su fusible interno de alta capacidad.
* **Regla:** El voltaje se mide en paralelo (puntas en el toma), la corriente se mide en serie (cortando el circuito) o con pinza amperimétrica.

### Identificación por Colores
Seguir el código de colores ahorra accidentes al intervenir una instalación:
* **Marrón / Negro / Rojo:** Fase.
* **Azul / Celeste:** Neutro.
* **Verde con Amarillo:** Tierra.

### Herramientas y EPP
* **Pinzas Aisladas:** Deben estar certificadas para 1000V. El mango de goma no es para comodidad, es una barrera dieléctrica.
* **Calzado y Superficies:** Las "zapatillas" o bancos con bases de goma actúan como aislantes adicionales, dificultando que la corriente cierre el circuito a través de tus pies hacia el suelo.
* **Guantes Dieléctricos:** Uso obligatorio al manipular tableros o zonas de alta energía.

---

## 5. Prevención de Incendios y Entorno de Trabajo

* **Extintor Clase C:** En un laboratorio de electrónica o electricidad, es obligatorio tener un extintor de **CO2 o Polvo Químico Seco (Clase C)**. Jamás debe usarse agua para apagar un fuego eléctrico, ya que el agua conduce la electricidad y podrías electrocutarte mientras intentas apagar las llamas.
* **Orden en el Banco:** El desorden de cables y herramientas metálicas sobre el banco de trabajo facilita los cortocircuitos accidentales.
* **Zapatillas y Prolongadores:** No encadenar varias zapatillas eléctricas. El contacto flojo genera calor, el calor derrite el plástico y el resultado es un incendio por "efecto Joule".

---

> **Máxima de Seguridad:** Ante la duda, siempre asume que un cable tiene tensión hasta que tu multímetro (bien configurado) demuestre lo contrario. Trabaja siempre con una mano si es posible (la "regla de la mano en el bolsillo") para evitar que una descarga pase por el corazón.