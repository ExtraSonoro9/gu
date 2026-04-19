---
title: Sobre Linux


---
## Linux: El Núcleo de la Libertad

Linux no es un sistema operativo completo, sino un **Kernel** (núcleo). Es la capa de software que permite que el hardware se comunique con las aplicaciones. Lo que usamos habitualmente es una "Distribución Linux" (o Distro), que combina el kernel con herramientas del proyecto GNU.

---

## 1. Historia y Filosofía

* **1991:** Un estudiante finlandés llamado **Linus Torvalds** publica el código de su kernel como un proyecto personal ("just a hobby, won't be big and professional").
* **GNU/Linux:** El kernel de Linus se unió a las herramientas de software libre de **Richard Stallman** (FSF), creando un sistema operativo completo y gratuito.
* **Código Abierto (Open Source):** Cualquiera puede leer, modificar y distribuir el código. Esto permite que miles de programadores en todo el mundo corrijan errores y mejoren el sistema constantemente.



---

## 2. ¿Qué es una Distribución (Distro)?

Como el código es libre, diferentes grupos crean sus propias versiones optimizadas para distintos fines. Una distro incluye: el Kernel, un gestor de paquetes (para instalar programas) y un entorno de escritorio (interfaz visual).

### A. Debian: La "Madre" de las Distros
Es una de las más antiguas y respetadas. Su prioridad es la **estabilidad** y el software libre.
* **Gestor:** `.deb` (usando `apt`).
* **Dato:** Es la base sobre la cual se construyen cientos de otras distros.

### B. Ubuntu: Linux para seres humanos
Basada en Debian, su objetivo es ser fácil de usar para el usuario común. Es la cara más conocida de Linux en computadoras de escritorio.

### C. Arch Linux: Hazlo tú mismo (DIY)
Diseñada para usuarios avanzados. El usuario instala todo desde cero por consola. Sigue el modelo **Rolling Release** (se actualiza constantemente sin versiones fijas).

### D. Red Hat / Fedora / CentOS
Enfocadas al sector empresarial y servidores. Son conocidas por su seguridad extrema y soporte corporativo.



---

## 3. Estructura de Directorios (Jerarquía)

A diferencia de Windows (`C:\`), Linux organiza todo en una raíz única (`/`):

* `/bin`: Comandos básicos del sistema.
* `/etc`: Archivos de configuración.
* `/home`: Carpetas personales de los usuarios.
* `/root`: Carpeta del superusuario (administrador total).
* `/dev`: Aquí los dispositivos de hardware (discos, teclado) se tratan como archivos.

---

## 4. La Terminal: El Poder del Shell

En Linux, la terminal no es una reliquia, es la herramienta más potente. Algunos comandos esenciales que verás en programación:

```bash
ls       # Listar archivos
cd       # Cambiar de directorio
sudo     # Ejecutar como superusuario (SuperUser DO)
grep     # Buscar texto dentro de archivos (usa lógica de patrones)
chmod    # Cambiar permisos de archivos
```

## Void Linux
El que uso como sistema operativo principal es el más veloz que conozco... En computadoras con menos de 4 gigas de ram casi triplica en velocidad y fluidez a Ubuntu, Debian, Arch y demás.

### Videos recomendados para instalar Ubuntu
<div style="width: 100%; max-width: 800px; margin: 2rem auto; text-align: center;">
  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
      src="https://www.youtube.com/watch?v=wIj7sHK0SkQ"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  </div>
</div>

Si no tienes potencia en tu pc puedes instalar Xubuntu, o si quieres algo mas parecido a Windows, Kubuntu, y si necesitas un server sin interfaz gráfica que funcione a comandos Ubuntu server.

## Instalación de Void Linux

Un poco más complicado que Ubuntu, si se va a usar como server o con Xfce para programar es preferible para evitar errores en videojuegos y de algunos programas como Blender elegir la versión de glibc.


<div style="width: 100%; max-width: 800px; margin: 2rem auto; text-align: center;">
  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
      src="https://www.youtube.com/watch?v=BK1tztkgqnE"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  </div>
</div>



