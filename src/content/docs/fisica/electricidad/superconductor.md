---
title: Superconductores


---
#  El Límite de la Eficiencia

Un superconductor es un material que, al ser enfriado por debajo de una temperatura crítica ($T_c$), adquiere dos propiedades fundamentales: **resistencia eléctrica nula** (la energía fluye eternamente sin calor) y el **Efecto Meissner**.

---

<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/levitacion.jpg" alt="superconductor" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Superconductor levitando sobre imánes </strong> 
  </figcaption>
</figure>


## 1. El Efecto Meissner: ¿Por qué levitan?

La levitación que vemos en los experimentos no es magnetismo común (como dos imanes repeliéndose). Se debe al **Efecto Meissner**.

Cuando un material se vuelve superconductor, expulsa todo el campo magnético de su interior. Si acercamos un imán, el superconductor crea corrientes superficiales que generan un campo magnético exactamente igual y opuesto al del imán. 



### El Anclaje de Flujo (Flux Pinning)
En superconductores de Tipo II (como los cerámicos), el campo magnético no se expulsa totalmente, sino que se "atrapa" en pequeños tubos llamados vórtices. Esto hace que el imán no solo flote, sino que quede **bloqueado** en el aire; puedes poner el superconductor boca abajo y el imán no se caerá.

---

## 2. Tabla Comparativa de Superconductores Importantes

| Material | Tipo | Temp. Crítica ($T_c$) | Refrigerante | Uso común |
| :--- | :--- | :--- | :--- | :--- |
| **Mercurio (Hg)** | Tipo I | $-269$°C ($4.2$ K) | Helio Líquido | Histórico (Primer descubrimiento en 1911). |
| **Niobio-Titanio (NbTi)** | Tipo II | $-263$°C ($9.2$ K) | Helio Líquido | Máquinas de Resonancia Magnética (MRI) y el CERN. |
| **YBCO (Óxido de Itrio, Bario y Cobre)** | Tipo II (Alta Temp) | $-180$°C ($93$ K) | **Nitrógeno Líquido** | Experimentos de levitación y cables de potencia. |
| **Diboruro de Magnesio ($MgB_2$)** | Intermedio | $-234$°C ($39$ K) | Helio / Neón | Aplicaciones industriales más baratas. |
| **LK-99** (En estudio) | - | Ambiente (?) | Ninguno | Sigue en fase de verificación (muy controversial). |

---

## 3. ¿Por qué es difícil usarlos en la vida diaria?

1.  **Temperatura:** La mayoría requiere Helio Líquido, que es caro y escaso. Los de "Alta Temperatura" (como el YBCO) funcionan con Nitrógeno Líquido (más barato que la leche), pero siguen siendo fríos extremos.
2.  **Fragilidad:** Los superconductores que funcionan a mayor temperatura son **cerámicos**, lo que significa que no son maleables como el cobre. Es muy difícil fabricar cables largos con ellos sin que se rompan.
3.  **Campo Crítico:** Si el campo magnético es demasiado fuerte, el material pierde su propiedad y vuelve a ser un conductor normal.

---

## 4. Usos en la Frontera de la Tecnología

* **Trenes Maglev:** Trenes que flotan sobre las vías eliminando la fricción, permitiendo velocidades de más de $600$ km/h.
* **Medicina (MRI):** Los imanes de las resonancias magnéticas son bobinas superconductoras bañadas en helio líquido.
* **Aceleradores de Partículas:** Como el Gran Colisionador de Hadrones (LHC), que usa imanes superconductores para guiar partículas a la velocidad de la luz.
* **Computación Cuántica:** Los procesadores de empresas como Google o IBM usan circuitos superconductores para crear "Qubits".

---

## 5. Diferencia entre Tipo I y Tipo II

| Característica | Superconductores Tipo I | Superconductores Tipo II |
| :--- | :--- | :--- |
| **Materiales** | Metales puros (Plomo, Aluminio). | Aleaciones y Cerámicas. |
| **Transición** | Abrupta y rápida. | Gradual (Estado mixto). |
| **Campo Magnético** | Soportan campos muy bajos. | Soportan campos altísimos (Ideales para imanes). |
| **Levitación** | Efecto Meissner puro. | Anclaje de flujo (estabilidad extrema). |



---

> **Dato para la bitácora:** Si hicieras una bobina cerrada de material superconductor y le inyectaras una corriente, esa corriente seguiría girando por **años** sin perder ni un solo amperio, siempre y cuando mantengas el frío. Es lo más cercano que tenemos al movimiento perpetuo.