---
title: La Terminal

---
# CMD (Windows) vs. Shell (Linux)

La terminal es el medio de comunicación directa con el núcleo del sistema operativo. Mientras que el **CMD** utiliza una sintaxis basada en comandos heredados de MS-DOS, las terminales de **Linux** (como Bash o Zsh) se basan en el estándar POSIX, donde el poder reside en la combinación de pequeñas herramientas especializadas.

---

## 1. Gestión de Archivos y Directorios

El movimiento y la organización de archivos son las tareas más básicas y frecuentes.

### Listado de Contenidos
* **CMD (`dir`):** Muestra una lista de archivos y subdirectorios en el directorio actual. Incluye información como la fecha de creación, hora y tamaño del archivo.
* **Linux (`ls`):** Lista los archivos. Es común usar `ls -l` para ver detalles (permisos, dueño, tamaño) o `ls -a` para ver archivos ocultos (aquellos que empiezan con un punto).

### Cambio de Ubicación
* **CMD/Linux (`cd`):** Ambos usan *Change Directory*. 
    * `cd ..` sube un nivel en la jerarquía de carpetas.
    * `cd /` en Linux te lleva a la raíz del sistema, mientras que en Windows se usa `cd \`.

### Creación de Carpetas
* **CMD/Linux (`mkdir`):** *Make Directory*. Crea una nueva carpeta en la ruta especificada.
    * En Linux, `mkdir -p` permite crear una ruta completa de carpetas anidadas de una sola vez.



---

## 2. Manipulación de Datos

### Copiado y Movimiento
* **Copiar (`copy` vs `cp`):** * En CMD, `copy` duplica archivos. Para carpetas completas se debe usar `xcopy` o `robocopy`.
    * En Linux, `cp` copia archivos. Para carpetas se usa `cp -r` (recursivo).
* **Mover/Renombrar (`move` vs `mv`):** * Ambos comandos mueven archivos de un lugar a otro. En ambos sistemas, si el destino tiene un nombre diferente, el archivo se renombra en el proceso.

### Eliminación
* **CMD (`del`):** Borra archivos. Para borrar carpetas vacías se usa `rd`.
* **Linux (`rm`):** Borra archivos. **Cuidado:** `rm -rf` borra carpetas y todo su contenido de forma permanente sin pedir confirmación.

---

## 3. Visualización y Edición de Texto

### Lectura de Archivos
* **CMD (`type`):** Vuelca todo el contenido de un archivo de texto directamente en la pantalla de la terminal.
* **Linux (`cat`):** Similar a `type`, concatena y muestra archivos. Para archivos muy largos se prefieren `less` o `more`, que permiten desplazar el texto línea por línea.

### Filtrado de Información
* **CMD (`find`):** Busca cadenas de texto específicas dentro de un archivo.
* **Linux (`grep`):** Una herramienta extremadamente potente que busca patrones de texto (usando expresiones regulares) dentro de archivos o salidas de otros comandos.



---

## 4. Administración del Sistema

### Diagnóstico de Red
* **CMD (`ipconfig`):** Muestra la configuración de red de Windows (dirección IP, máscara de subred y puerta de enlace).
* **Linux (`ip addr` / `ifconfig`):** Muestra los detalles de las interfaces de red. `ip addr` es el estándar moderno en distribuciones actuales.

### Gestión de Procesos
* **CMD (`tasklist`):** Enumera todos los procesos que se están ejecutando en el sistema con su ID de proceso (PID) y uso de memoria.
* **Linux (`ps` / `top`):** `ps aux` muestra una instantánea de los procesos. `top` u `htop` abren un monitor en tiempo real que muestra el consumo de CPU y RAM de forma dinámica.

---

## 5. Tabla de Referencia Rápida

| Función | Comando CMD | Comando Linux | Descripción del Proceso |
| :--- | :--- | :--- | :--- |
| **Ruta Actual** | `cd` (sin argumentos) | `pwd` | Muestra en qué carpeta estás parado exactamente. |
| **Borrar Pantalla** | `cls` | `clear` | Limpia la consola de comandos anteriores para mayor orden. |
| **Ayuda** | `comando /?` | `man comando` | Accede al manual o lista de parámetros de una herramienta. |
| **Permisos** | N/A (vía GUI) | `chmod` | Cambia quién puede leer, escribir o ejecutar un archivo. |
| **Apagado** | `shutdown /s` | `poweroff` | Ordena el cierre controlado del sistema operativo. |

---

> **Nota técnica:** La terminal de Linux permite el uso de **comodines** como el asterisco (`*`). Por ejemplo, `rm *.jpg` borrará todos los archivos que terminen en esa extensión dentro de una carpeta, una función que en el CMD de Windows es mucho más limitada en scripts complejos.