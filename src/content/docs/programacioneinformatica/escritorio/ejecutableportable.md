---
title: Ejecutable Portable


---

Para crear un AppImage para sistemas basados en Linux como Ubuntu o un .exe para windows con sus librerias se deben seguir los siguientes pasos:

## .AppImage
Considerando que me encuentro en Void Linux y que los comandos pueden variar:

Para crear un .AppImage que pueda ser ejecutado en cualquier pc primero creamos un archivo default.desktop y descargamos un icono que se llame default.png por ejemplo la foto de una manzana y los colocamos en la misma carpeta que el ejecutable generalmente en /build. 

```
[Desktop Entry]
Type=Application
Name=Gestor
Exec=GestorStock
Icon=default
Categories=Utility;
```
Luego en la terminal dentro de directorio donde se encuentra el ejecutable:
```
wget https://github.com/probonopd/linuxdeployqt/releases/download/continuous/linuxdeployqt-continuous-x86_64.AppImage
```
```
./linuxdeployqt ./GestorStock -appimage
```



## Exe








## Extra: Docker
Tambien es posible crear el AppImage en Docker si no se tiene una pc con un sistema operativo con una libreria glibc antigua desde cual compilar para que sea compatible con ordenadores antiguos o no se desea crear maquinas virtuales.
Para ello se debe crear un archivo Dockerfile (sin extensión) en la raiz del proyecto con el siguiente contenido:
Considere que yo estoy en Void Linux y las rutas y algunos comandos pueden variar. 
```
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# Instalación de dependencias pesadas
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    qt6-base-dev \
    libgl1-mesa-dev \
    libmariadb-dev \
    libopencv-dev \
    libzbar-dev \
    wget \
    file \
    libfuse2 \
    libglib2.0-0 \
    patchelf \
    binutils \
    && rm -rf /var/lib/apt/lists/*

# Configurar rutas de Qt6 para que linuxdeployqt no se pierda
ENV PATH="/usr/lib/qt6/bin:${PATH}"
ENV QMAKE="/usr/lib/qt6/bin/qmake"
ENV APPIMAGE_EXTRACT_AND_RUN=1

# Pre-descargar linuxdeployqt para que ya esté listo
RUN wget -O /usr/bin/linuxdeployqt https://github.com/probonopd/linuxdeployqt/releases/download/continuous/linuxdeployqt-continuous-x86_64.AppImage && \
    chmod +x /usr/bin/linuxdeployqt

WORKDIR /app
```
después el siguiente comando que puede demorar un buen rato en terminar:

```
docker build -t gestor-stock-app .
```

Luego debemos ejecutar el siguiente comando para compilar el proyecto: 

```
docker run -it --rm \
    -v $(pwd):/app \
    gestor-env bash -c "
        mkdir -p build && cd build && \
        cmake .. -DCMAKE_BUILD_TYPE=Release && \
        make -j\$(nproc) && \
        echo '>>> Compilación terminada. Binario listo en build/GestorStock <<<'
    "
```

y para crear un .AppImage que pueda ser ejecutado en cualquier pc primero creamos un archivo default.desktop y descargamos un icono que se llame default.png por ejemplo la foto de una manzana. 

```
[Desktop Entry]
Type=Application
Name=Gestor
Exec=GestorStock
Icon=default
Categories=Utility;
```
Luego en la terminal ejecutamos:

```
docker run -it --rm \
    --privileged \
    --device /dev/fuse \
    -v $(pwd):/app \
    gestor-env bash -c "
        # 1. Preparar entorno de trabajo en RAM
        mkdir -p /tmp/work && cp /app/build/GestorStock /tmp/work/
        cp /app/*.desktop /tmp/work/ 2>/dev/null || true
        cd /tmp/work
        
        # 2. Limpieza y empaquetado
        strip ./GestorStock
        linuxdeployqt ./GestorStock -appimage -unsupported-allow-new-glibc -verbose=2
        
        # 3. Mover resultado al host
        rm -f /app/*.AppImage
        cp *.AppImage /app/GestorStock_Final.AppImage && \
        echo '>>> AppImage generada con éxito: GestorStock_Final.AppImage <<<'
    "
```

Entonces se creará el GestorStock_Final.AppImage y podran abrirlo en cualquier ordenardor (excepto Windows).