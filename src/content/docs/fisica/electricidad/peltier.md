---
title: El Efecto Peltier


---
# Refrigeración de Estado Sólido

Descubierto por Jean Peltier en 1834, este efecto ocurre cuando se hace pasar una corriente eléctrica a través de un circuito formado por dos conductores o semiconductores diferentes. Dependiendo de la dirección de la corriente, una unión se enfría mientras que la otra se calienta.

---

## 1. Funcionamiento y Celdas Peltier

Para que el efecto sea aprovechable en refrigeradores, se utilizan semiconductores de tipo **P** y tipo **N** (generalmente Telurio de Bismuto). 

* **Lado Frío:** Los electrones pasan de un nivel de energía bajo a uno alto, absorbiendo calor del entorno.
* **Lado Caliente:** Los electrones liberan esa energía térmica al pasar a un nivel de energía inferior.



---

## 2. Fórmulas Fundamentales

El rendimiento de una celda Peltier se rige por el equilibrio entre el calor movido, el calor generado por la propia resistencia del cable y la conducción térmica.

### A. Calor total movido ($Q_c$)
La cantidad de calor que la celda puede extraer del lado frío se calcula como:

$$Q_c = \Pi \cdot I - \frac{1}{2} I^2 R - K \Delta T$$

Donde:
* $\Pi$: Coeficiente Peltier (específico del material).
* $I$: Intensidad de la corriente (Amperios).
* $R$: Resistencia eléctrica interna de la celda.
* $K$: Conductividad térmica del módulo.
* $\Delta T$: Diferencia de temperatura entre el lado frío y el caliente ($T_h - T_c$).

### B. El Efecto Joule (El enemigo)
El término $\frac{1}{2} I^2 R$ representa el calor generado por la propia corriente al pasar por la celda. Si subes demasiado el amperaje, la celda genera más calor por resistencia del que puede mover por efecto Peltier, y deja de enfriar.

---

## 3. Uso en Refrigeradores y Mini-Coolers

Seguro has visto esos refrigeradores portátiles para autos o dispensadores de agua fría. Estos usan una **Celda TEC (Thermo-Electric Cooler)**.

**Ventajas:**
* **Silencio absoluto:** No hay compresor.
* **Tamaño:** Son extremadamente delgadas (aprox. 4mm).
* **Precisión:** Invirtiendo la polaridad (+ y -), el refrigerador se convierte en un calentador de comida.

**Desventajas y Retos:**
* **Baja Eficiencia:** Consumen mucha energía para la cantidad de frío que producen en comparación con un motor de heladera.
* **Gestión Térmica:** Si no disipas muy bien el calor del "lado caliente" con un ventilador potente, el calor se filtrará de vuelta al "lado frío" y la celda puede llegar a fundirse.



---

## 4. Diferencia con otros Efectos Termoeléctricos

Es importante no confundirlo con sus "hermanos":
1.  **Efecto Seebeck:** Es lo opuesto. Calientas un lado y obtienes electricidad (usado en los RTG espaciales que vimos antes).
2.  **Efecto Thomson:** Describe el calentamiento o enfriamiento de un conductor con corriente que tiene un gradiente de temperatura.

---

## 5. Formas de Medición y Diagnóstico

### Con Multímetro:
1.  **Prueba de Resistencia:** Una celda común (como la TEC1-12706) suele marcar entre $1.5 \Omega$ y $3 \Omega$. Si marca infinito, está rota por dentro.
2.  **Prueba de Generación:** Si conectas el multímetro en modo milivoltios ($mV$) y pones tu mano sobre un lado de la celda, verás que genera un pequeño voltaje (Efecto Seebeck). Si no reacciona, la celda está agotada.

---

> **Dato de Taller:** Las celdas Peltier son muy frágiles mecánicamente. Al instalarlas, nunca las aprietes demasiado fuerte ni dejes burbujas de aire en la pasta térmica, ya que el estrés térmico puede quebrar los pequeños pilares de semiconductor internos.