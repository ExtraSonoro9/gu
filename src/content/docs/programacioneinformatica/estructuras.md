---
title: Estructura de un codigo

---
# Anatomía de un Archivo de Código

Un archivo de código fuente no es un caos de letras; tiene una estructura definida que permite la modularidad, la reutilización de herramientas externas y la organización lógica.

---

## 1. Importación de Librerías (Cabeceras)
Es lo primero que aparece. Aquí le decimos al programa qué herramientas externas va a necesitar (funciones matemáticas, entrada/salida de datos, etc.).



### En C++ (Directivas de Preprocesador)
Se usan `#include`. El preprocesador copia el contenido de esa librería en tu archivo antes de compilar.
```
#include <iostream>  // Para entrada/salida estándar
#include <vector>    // Para usar arreglos dinámicos
#include <cmath>     // Para funciones matemáticas
```

### En Python (Módulos)
Se usa `import`. Python busca el módulo y lo pone a disposición del script.
```
import math          # Importa toda la librería
from datetime import date # Importa solo una función específica
```

---

## 2. Declaración de Variables y Ámbito (Scope)
Las variables pueden vivir en diferentes niveles de "visibilidad":

* **Globales:** Se declaran fuera de cualquier función. Todo el programa las ve (úsalas con cuidado, pueden causar errores difíciles de rastrear).
* **Locales:** Se declaran dentro de una función o bucle. Solo existen mientras esa parte del código se ejecuta.



---

## 3. Funciones (Procedimientos)
Son bloques de código con un nombre que realizan una tarea específica. Ayudan a no repetir código.

**Componentes:**
1. **Firma/Definición:** El nombre y qué datos recibe (parámetros).
2. **Cuerpo:** Las instrucciones.
3. **Retorno:** El resultado que devuelve al programa principal.

### Ejemplo en C++
```
int sumar(int a, int b) { // Recibe dos enteros
    return a + b;         // Devuelve un entero
}
```

### Ejemplo en Python
```
def sumar(a, b):
    return a + b
```

---

## 4. El "Constructor" o Punto de Entrada
Es el lugar exacto donde el programa empieza a correr.

* **C++:** Es obligatorio tener una función llamada `int main()`. Si no existe, el programa no compila.
* **Python:** Es un lenguaje de script, corre de arriba a abajo. Sin embargo, se usa una "buena práctica" para definir el punto de inicio.

### Estructura en C++
```
int main() {
    // Aquí empieza la ejecución
    return 0; // Indica que todo salió bien
}
```

### Estructura en Python
```
if __name__ == "__main__":
    # Aquí empieza la ejecución principal
    print("Iniciando programa...")
```

---

## 5. Resumen de Estructura Sugerida

Para mantener tu código limpio, sigue este orden en tus archivos:

1.  **Comentarios iniciales:** Nombre del autor, fecha y qué hace el programa.
2.  **Importaciones:** Todos los `#include` o `import`.
3.  **Constantes y Globales:** Valores que no cambian (ej: `PI = 3.14`).
4.  **Funciones y Clases:** El "taller" donde guardas tus herramientas.
5.  **Bloque Principal (Main):** Donde se orquesta todo el flujo.

---

## Comparativa de Organización

| Elemento | C++ | Python |
| :--- | :--- | :--- |
| **Fin de línea** | Requiere punto y coma `;` | Salto de línea |
| **Bloques** | Corchetes `{ }` | Indentación (4 espacios) |
| **Variables** | Debes decir el tipo (`int`, `float`) | Se asignan directamente |
| **Librerías** | `#include <nombre>` | `import nombre` |

> **Dato para la bitácora:** En proyectos grandes (como un videojuego), no se usa un solo archivo. Se usan archivos de cabecera (`.h` o `.hpp`) para las declaraciones y archivos de implementación (`.cpp`) para el código real.
>
# Extensiones y Tipos de Archivos de Código

La extensión de un archivo le indica al sistema operativo y al compilador qué tipo de información contiene y cómo debe procesarla.

---

## 1. El ecosistema de C++ (.h vs .cpp)

En C++ es una práctica estándar separar la **definición** de la **implementación**. Es como tener un menú (el `.h`) y la cocina donde se preparan los platos (el `.cpp`).

* **.h / .hpp (Header Files):** Son archivos de cabecera. Aquí solo se "declara" lo que existe (nombres de funciones, variables, clases). No contienen la lógica detallada.
* **.cpp (Source Files):** Contienen el código real y la lógica de las funciones declaradas en el `.h`.
* **.o / .obj (Object Files):** Archivos temporales que crea el compilador. Es código máquina que aún no es un programa ejecutable.
* **.exe (Executable):** El resultado final después del proceso de "Enlazado" (Linking).



---

## 2. El ecosistema de Python

Python es más directo, pero tiene archivos especiales para optimizar la velocidad.

* **.py:** El archivo de texto plano donde escribes tu código.
* **.pyc (Compiled Python):** Versiones compiladas a "bytecode". Python las crea automáticamente en una carpeta llamada `__pycache__` para que el programa arranque más rápido la próxima vez.
* **.ipynb (Jupyter Notebook):** Archivos que mezclan código, texto enriquecido y gráficas. Muy usados en ciencia de datos.

---

## 3. Otras extensiones importantes en desarrollo

| Extensión | Lenguaje/Uso | Descripción |
| :--- | :--- | :--- |
| **.js** | JavaScript | Código para páginas web o servidores (Node.js). |
| **.html** | HTML | Estructura de documentos web. |
| **.css** | CSS | Estilo y diseño visual de las webs. |
| **.sh / .bat** | Script | Archivos de comandos para la terminal (Linux/Windows). |
| **.json / .xml** | Datos | Formatos para guardar o enviar información entre programas. |
| **.md** | Markdown | El formato que estamos usando para esta bitácora. |

---

## 4. ¿Por qué separar .h de .cpp? (Modularidad)

Imagina que tienes un proyecto de 100 archivos. 
1. Si cambias algo en un `.cpp`, el compilador solo tiene que re-procesar ese archivo.
2. Si todo estuviera en un solo archivo gigante, cada pequeño cambio obligaría a compilar todo el proyecto desde cero, lo que podría tardar horas en programas grandes.

---

## 5. Bibliotecas Estáticas vs Dinámicas

Cuando terminas un programa, a veces usas librerías que se empaquetan de dos formas:

* **Estáticas (.lib / .a):** El código de la librería se mete dentro de tu `.exe`. El archivo final es más grande pero no necesita nada externo para correr.
* **Dinámicas (.dll / .so):** El código se queda afuera. El `.exe` es pequeño pero necesita que el archivo `.dll` esté en la misma carpeta para funcionar.



---

> **Dato para la bitácora:** En Linux, las librerías dinámicas usan la extensión `.so` (Shared Object), mientras que en Windows usamos `.dll` (Dynamic Link Library). Son básicamente lo mismo con distinto nombre.