---
title: Frameworks


---
# Frameworks de Frontend: El Ecosistema Moderno

El desarrollo web ha pasado de manipular el DOM (Document Object Model) manualmente a usar sistemas reactivos y generadores de sitios estáticos ultrarrápidos.

---

## 1. Los "Tres Grandes" (Tradicionales)

### React (Meta)
No es un framework per se, sino una biblioteca, pero su ecosistema lo convierte en uno. Se basa en el **Virtual DOM** y un flujo de datos unidireccional.
* **Características:** JSX (HTML dentro de JS), Hooks para el estado, y la comunidad más grande del mundo.
* **Ideal para:** Aplicaciones web complejas, Dashboards y apps móviles (con React Native).

### Angular (Google)
Un framework "con opiniones" (Opinionated). Te da todo lo que necesitas desde el inicio (Routing, formularios, peticiones HTTP).
* **Características:** Uso obligatorio de **TypeScript**, inyección de dependencias y una curva de aprendizaje alta.
* **Ideal para:** Aplicaciones empresariales masivas y equipos de desarrollo grandes que necesitan una estructura rígida.

### Vue.js (Comunidad)
El equilibrio perfecto. Toma lo mejor de Angular y React. Es muy progresivo; puedes usarlo para una pequeña parte de tu web o para una app completa.
* **Características:** Sistema de plantillas muy limpio, **Composition API** (similar a React Hooks) y una documentación excelente.
* **Ideal para:** Desarrolladores que buscan simplicidad sin sacrificar potencia.

<figure style="display: block; margin: 2rem auto; max-width: 500px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/informatica/web/frames.jpg" alt="Frameworks más conocidos" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  
  
</figure>

---

## 2. La Nueva Generación (Rendimiento Extremo)

### Astro
Es el rey actual de los sitios orientados al contenido. Su filosofía es **"Zero JavaScript por defecto"**.
* **Características:** Arquitectura de **Islas** (solo carga JS en los componentes que realmente son interactivos). Puedes usar componentes de React, Vue o Svelte dentro del mismo proyecto Astro.
* **Ideal para:** Blogs, portfolios, documentación y cualquier sitio donde el SEO y la velocidad sean críticos.

### SolidJS
Se parece mucho a React en sintaxis, pero funciona de forma radicalmente distinta. **No usa Virtual DOM**.
* **Características:** Compila el código a manipulaciones directas del DOM, lo que lo hace increíblemente rápido (casi tanto como el JS puro).
* **Ideal para:** Aplicaciones donde cada milisegundo de rendimiento cuenta.

---

## 3. Comparativa de Rendimiento

Para entender cuál es más rápido, es vital mirar pruebas de benchmark que miden la velocidad de renderizado, el consumo de memoria y el tamaño del bundle.

* **[JS Framework Benchmark](https://krausest.github.io/js-framework-benchmark/current.html):** Es el estándar de la industria. Compara la velocidad de creación de filas, reemplazo y borrado de elementos en el DOM. (Aquí SolidJS y Svelte suelen humillar a React).
* **[RealWorld App Comparison](https://github.com/gothinkster/realworld):** Compara cómo se comportan estos frameworks construyendo una aplicación real (un clon de Medium), midiendo el tamaño del archivo final que descarga el usuario.

| Framework | Tamaño Bundle (Gzip) | Rendimiento (DOM) | Paradigma |
| :--- | :--- | :--- | :--- |
| **SolidJS** | ~7 KB | ★★★★★ | Reactividad Fina |
| **Astro** | ~0 KB (Base) | ★★★★★ | Islas / Estático |
| **Vue 3** | ~33 KB | ★★★★☆ | Virtual DOM Optimizado |
| **React** | ~42 KB | ★★★☆☆ | Virtual DOM |
| **Angular** | ~60 KB+ | ★★★☆☆ | Dirty Checking / Signals |

---

## 4. ¿Cuál elegir? (Guía de Decisión)

1.  **¿Necesitas SEO máximo y velocidad de carga?** -> **Astro**.
2.  **¿Buscas trabajo rápido en el mercado actual?** -> **React**.
3.  **¿Quieres la mayor velocidad de ejecución posible?** -> **SolidJS**.
4.  **¿Quieres una experiencia de desarrollo fluida y amigable?** -> **Vue.js**.
5.  **¿Estás en un entorno corporativo con estándares estrictos?** -> **Angular**.




