---
title: Sonido y Luz

---
# Sonido vs. Luz: Ondas y Atenuación

Aunque ambos se comportan como ondas, el sonido y la luz pertenecen a familias distintas. El sonido necesita un medio para viajar, mientras que la luz es una perturbación del campo electromagnético.

---

## 1. Naturaleza y Propiedades

| Propiedad | Sonido | Luz |
| :--- | :--- | :--- |
| **Tipo de Onda** | Mecánica Longitudinal | Electromagnética Transversal |
| **Medio de propagación** | Requiere materia (Sólido, líquido, gas) | No requiere (puede viajar en el vacío) |
| **Velocidad en el aire** | $\approx 343$ m/s | $\approx 300,000,000$ m/s |
| **Se percibe como** | Tono (Frecuencia) | Color (Frecuencia) |



[Image of longitudinal sound wave vs transversal light wave]


---

## 2. Comportamiento en el Vacío y Materiales

### En el Vacío
* **Luz:** Viaja a su velocidad máxima ($c$). Es la constante universal.
* **Sonido:** **No existe**. En el vacío no hay partículas que choquen entre sí para transmitir la vibración. (En el espacio, nadie puede oírte gritar).

### En Diferentes Materiales
* **Sonido:** Viaja **más rápido en sólidos** que en gases, porque las moléculas están más juntas y transmiten la energía más rápido.
* **Luz:** Viaja **más lento en materiales densos** (como el vidrio o el agua) que en el vacío debido a la interacción con los electrones del material. Esto causa la **Refracción**.



---

## 3. La Ecuación de Atenuación (Uso de Exponenciales)

Cuando el sonido o la luz atraviesan un material, pierden intensidad. Este fenómeno no es lineal, sino **exponencial**. Se rige por la **Ley de Beer-Lambert** (o ley de atenuación):

$$I(x) = I_0 \cdot e^{-\mu x}$$

### Desglose de la fórmula:
* **$I(x)$**: Intensidad final después de recorrer una distancia $x$.
* **$I_0$**: Intensidad inicial.
* **$e$**: Número de Euler ($\approx 2.718$).
* **$\mu$ (Mu)**: Coeficiente de atenuación (depende del material). Un muro de plomo tiene un $\mu$ mucho más alto que un cristal.
* **$x$**: Distancia recorrida.

> **¿Por qué exponencial?** Porque cada centímetro de material absorbe una *fracción* de la energía que queda. No resta una cantidad fija, sino un porcentaje.



---

## 4. Ejemplos de Uso Real

1.  **Medicina (Rayos X):** Los huesos tienen un coeficiente $\mu$ alto y absorben los fotones, mientras que los tejidos blandos tienen un $\mu$ bajo. La diferencia en la atenuación exponencial es lo que crea la imagen de la radiografía.
2.  **Telecomunicaciones (Fibra Óptica):** La luz viaja kilómetros por cables de vidrio. Los ingenieros usan la ecuación de atenuación para calcular cuántos repetidores necesitan para que la señal no desaparezca.
3.  **Acústica:** El diseño de estudios de grabación usa materiales con coeficientes de absorción específicos para que el sonido muera rápido (atenuación alta) y no haya eco.

---

## 5. Curiosidad Matemática: Decibelios (dB)
Como el sonido varía en rangos exponenciales gigantescos, los humanos inventamos los **Decibelios**, que usan **Logaritmos** (la función inversa de la exponencial) para comprimir esa escala y que sea más fácil de leer (de 0 a 140 dB).