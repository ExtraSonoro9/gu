---
title: Instalación


---

Para empezar hay que instalar los programas

# Si estás en Windows

Entra a la siguiente página y descarga Qt Designer Windows x64: https://www.qt.io/development/download-qt-installer-oss

Él descarga automaticamente el compilador.

Habrá que instalar de las paginas oficiales opencv y zbar (ádemas de configurar las variables de entorno PATH).

# Si estás en Ubuntu  

Entra a la siguiente página y descarga Qt Designer para Linux x64: https://www.qt.io/development/download-qt-installer-oss

```Terminal
    sudo apt install build-essential
```

## Si estás en Void Linux (como yo) 

Entra a la siguiente página y descarga Qt Designer para Linux x64 (a menos que estés en una computadora muy vieja de 32 bit): https://www.qt.io/development/download-qt-installer-oss


```Terminal
sudo xbps-install -S base-devel zbar libzbar-devel libzbar-qt opencv libopencv libopencv-devel gcc libgcc-devel libgcc
```