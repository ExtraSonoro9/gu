---
title: Resistencias y resistores


---
# El Control de la Corriente

Una **Resistencia** es un componente que se opone al paso de la corriente eléctrica. Se mide en **Ohmios ($\Omega$)**. Su funcionamiento se basa en la fricción de los electrones al intentar atravesar un material conductor con alta resistividad.

<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/resistor.jpg" alt="resistor" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Resistor (resistencia que se usa para limitar el flujo de corriente más que para generar calor). </strong> 
  </figcaption>
</figure>

<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/resistencia.jpg" alt="resistencia" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Resistencia usada para generar calor y hervir agua. </strong> 
  </figcaption>
</figure>

---

## 1. Materiales: El Grafito y los Aislantes

La mayoría de las resistencias comerciales (de carbón) utilizan una mezcla de **grafito** (carbono) pulverizado y un material cerámico aislante. 

* **El Grafito:** Es el material conductor. Al ser un conductor pobre en comparación con el cobre, ofrece una resistencia natural.
* **El Aislante:** Al variar la proporción de cerámica o resina aislante mezclada con el grafito, los fabricantes pueden controlar con precisión el valor de la resistencia.
* **Construcción:** Se suele rodear este núcleo de una capa de laca o cerámica aislante para protegerlo del ambiente y evitar cortocircuitos externos.

---

## 2. Propiedades Fundamentales

1. **Valor Óhmico:** La cantidad de oposición a la corriente.
2. **Potencia (W):** La cantidad de calor que puede disipar sin quemarse (comúnmente 1/4W, 1/2W, 1W).
3. **Tolerancia:** El margen de error del valor real respecto al teórico (ej: $\pm 5\%$).
4. **Coeficiente de Temperatura:** Cómo varía su resistencia al calentarse.

---

## 3. Cómo medir una Resistencia

### A. Con el Multímetro (Ohmiómetro)
1. Selecciona la escala de Ohmios ($\Omega$) adecuada.
2. **Importante:** La medición debe hacerse **sin energía** en el circuito. Si mides con corriente, podrías dañar el multímetro o tener una lectura falsa.
3. Lo ideal es desoldar al menos una pata de la resistencia para que el resto del circuito no altere la medición.

### B. Prueba de Continuidad
Si una resistencia está "abierta" (quemada), el multímetro marcará "OL" (Open Loop) o infinito, indicando que el camino del grafito se ha roto.

---

## 4. Código de Colores (Lectura de Bandas)

Las resistencias pequeñas no tienen espacio para números, así que usan bandas de colores. Cada color representa un número del 0 al 9.



### Resistencias de 4 Bandas
1. **1ª Banda:** Primer dígito.
2. **2ª Banda:** Segundo dígito.
3. **3ª Banda (Multiplicador):** Número de ceros que se agregan.
4. **4ª Banda (Tolerancia):** Indica la precisión (Dorado: $\pm 5\%$, Plateado: $\pm 10\%$).

**Ejemplo:** Marrón (1), Negro (0), Rojo (00) = $1000 \Omega$ o $1 k\Omega$.

### Resistencias de 5 Bandas (Alta Precisión)
Se leen igual, pero tienen un dígito extra de precisión antes del multiplicador.
1. **1ª Banda:** Primer dígito.
2. **2ª Banda:** Segundo dígito.
3. **3ª Banda:** Tercer dígito.
4. **4ª Banda (Multiplicador):** Número de ceros.
5. **5ª Banda (Tolerancia):** Generalmente Marrón ($\pm 1\%$).

**Ejemplo:** Rojo (2), Rojo (2), Negro (0), Marrón (0) = $2200 \Omega$ o $2.2 k\Omega$.

---

## 5. Tipos de Resistencias según su uso

* **Fijas:** De carbón o película metálica.
* **Variables (Potenciómetros):** Permiten ajustar el valor girando una perilla (volumen, intensidad de luz).
* **Dependientes (LDR, NTC, PTC):** Cambian su valor según la luz o la temperatura.

> **Dato de Taller:** Si una resistencia de carbón se sobrecalienta, suele cambiar de color o "inflarse". Si sospechas de una, mídela; si el valor se ha desviado más de su tolerancia (ej. un 20% en una de 5%), reemplázala.