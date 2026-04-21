---
title: Transformadores


---
#  Modificando el Voltaje

Un transformador es una máquina eléctrica estática que transfiere energía de un circuito a otro, cambiando el voltaje y la corriente, pero manteniendo la misma frecuencia ($50$ o $60$ Hz según el país).

---

## 1. Breve Historia

* **Faraday y Henry (1831):** Michael Faraday descubrió la inducción cuando notó que un cambio en el magnetismo podía generar electricidad en un cable cercano.
* **La Bobina de Ruhmkorff:** Un precursor importante que generaba altos voltajes a partir de baterías de bajo voltaje.
* **Zipernowsky, Bláthy y Déri (1885):** Estos ingenieros húngaros crearon el primer transformador de alta eficiencia con núcleo cerrado, muy similar a los que usamos hoy. Fue la pieza clave para que la Corriente Alterna (AC) de Tesla ganara la "Guerra de las Corrientes" contra la Continua (DC) de Edison.

---

## 2. Estructura y Partes

Un transformador básico consta de tres componentes principales:

1.  **Núcleo Magnético:** Generalmente hecho de láminas de acero al silicio apiladas. Su función es canalizar el flujo magnético. Se usan láminas para evitar las "Corrientes de Foucault" que calientan el metal y desperdician energía.
2.  **Devanado Primario:** Es la bobina de entrada, conectada a la fuente de energía.
3.  **Devanado Secundario:** Es la bobina de salida, donde obtenemos el nuevo voltaje.
4.  **Aislamiento:** El barniz que recubre el alambre de cobre (alambre magneto) para que las vueltas no hagan cortocircuito entre sí.



<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/trafomicro.jpg" alt="transformador de microondas" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Transformador de microondas (de voltaje medio a muy alto) </strong> 
  </figcaption>
</figure>


---

## 3. Relación de Vueltas y Fórmulas

El funcionamiento se rige por la relación entre el número de vueltas de alambre en cada bobina.

### La Fórmula Fundamental
La relación de transformación se define como:

$$\frac{V_p}{V_s} = \frac{N_p}{N_s}$$

Donde:
* $V_p$: Voltaje Primario (Entrada).
* $V_s$: Voltaje Secundario (Salida).
* $N_p$: Número de vueltas en el primario.
* $N_s$: Número de vueltas en el secundario.

### ¿Cómo calcular el voltaje deseado?
Si tienes un voltaje de entrada ($V_p$) y necesitas obtener un voltaje de salida ($V_s$), puedes despejar para saber cuántas vueltas necesitas en el secundario:

$$N_s = N_p \cdot \left(\frac{V_s}{V_p}\right)$$

> **Ejemplo:** Si tu primario tiene $1000$ vueltas y entran $220$V, y quieres obtener $12$V:
> $N_s = 1000 \cdot (12 / 220) \approx 54$ vueltas.

---

## 4. Tipos de Transformadores

* **Elevadores:** Tienen más vueltas en el secundario que en el primario ($N_s > N_p$). Suben el voltaje.
* **Reductores:** Tienen menos vueltas en el secundario ($N_s < N_p$). Bajan el voltaje (como los cargadores de celular).
* **De Aislamiento:** Tienen el mismo número de vueltas ($1:1$). Se usan por seguridad, para separar eléctricamente un equipo de la red eléctrica.
* **Autotransformadores:** Usan una sola bobina con una "toma intermedia". Son más pequeños pero no ofrecen aislamiento galvánico.


<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/trafofuente.jpg" alt="transformador trafo de fuente conmutada" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Transformador de fuentes conmutadas y cargadores </strong> 
  </figcaption>
</figure>

<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/flyback.jpg" alt="flyback" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Transformador Flyback de televisores CRT </strong> 
  </figcaption>
</figure>
---

## 5. Formas de Medición y Fallos

* **Prueba de Continuidad:** Con el multímetro en modo continuidad o resistencia baja ($\Omega$), verificamos que los bobinados no estén cortados.
* **Aislamiento:** Medimos entre el bobinado y el núcleo de hierro. No debería haber continuidad; si la hay, el transformador está "a masa" y es peligroso.
* **Relación de Voltaje:** Conectamos el primario a la red y medimos con el multímetro en AC el voltaje de salida.


<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/trafodealta.jpg" alt="transformador de alta tension" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Transformador de Alta-Media tensión </strong> 
  </figcaption>
</figure>

> **Dato de Seguridad:** Nunca conectes un transformador diseñado para $110$V a una red de $220$V, el núcleo se saturará, el bobinado se calentará rápidamente y se quemará el aislante, provocando un incendio o cortocircuito.