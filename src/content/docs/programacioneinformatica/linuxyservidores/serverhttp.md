---
title: Servidores HTTP

---
#  El Motor de la Web

Un servidor web es un software que procesa las peticiones de los clientes (navegadores como Chrome o Firefox). Su función principal es el almacenamiento, procesamiento y entrega de páginas web.

---

## 1. Los Gigantes del Sector

### Nginx (pronunciado "Engine-X")
Es el estándar moderno para alta eficiencia y rendimiento.
* **Arquitectura:** Orientada a eventos y asíncrona. A diferencia de otros, no crea un proceso nuevo para cada conexión, lo que le permite manejar miles de conexiones simultáneas con muy poca RAM.
* **Uso Principal:** Ideal como **Proxy Inverso** y **Balanceador de Carga**. Se coloca "delante" de otros servidores para gestionar el tráfico.
* **Dato Técnico:** Es extremadamente rápido sirviendo archivos estáticos (imágenes, CSS, JS).

### Apache HTTP Server
El servidor histórico que dominó la web durante décadas.
* **Arquitectura:** Basada en procesos (o hilos). Cada petición suele ser manejada por un hilo individual.
* **Flexibilidad:** Su gran fuerte es el archivo **.htaccess**. Permite configurar reglas por directorio sin necesidad de reiniciar el servidor o tener acceso al archivo de configuración principal.
* **Módulos:** Tiene una enorme cantidad de módulos dinámicos que se pueden cargar (como `mod_rewrite` para URLs amigables).



---

## 2. Otros Servidores Relevantes

* **LiteSpeed:** Muy popular en hostings compartidos. Es un reemplazo directo de Apache pero con un rendimiento similar a Nginx.
* **Caddy:** Escrito en Go. Su característica estrella es que gestiona automáticamente los certificados SSL de Let's Encrypt por defecto; no tienes que configurar nada para tener HTTPS.
* **Microsoft IIS (Internet Information Services):** El servidor propietario de Windows, optimizado para aplicaciones .NET.

---

## 3. Conceptos y Características Clave

### Proxy Inverso (Reverse Proxy)
Es una configuración donde el servidor web recibe la petición del cliente y la "pasa" a otro servidor interno (por ejemplo, un backend en Node.js o Python). 
* **Ventaja:** Protege la identidad del servidor interno y permite añadir seguridad (Firewall/WAF) en un solo punto.

### Virtual Hosts (VHosts)
Permite que un solo servidor (con una sola IP) aloje múltiples sitios web diferentes (ej. `sitioA.com` y `sitioB.com`). El servidor mira la cabecera "Host" de la petición HTTP para saber qué archivos entregar.

### Archivos de Configuración
* **Nginx:** Generalmente en `/etc/nginx/nginx.conf`. Usa una sintaxis de bloques limpia parecida a C.
* **Apache:** `/etc/apache2/apache2.conf` o `/etc/httpd/conf/httpd.conf`. Usa una sintaxis similar a etiquetas XML.

---

## 4. Comparativa de Rendimiento

| Característica | Nginx | Apache |
| :--- | :--- | :--- |
| **Contenido Estático** | Extremadamente rápido. | Rápido, pero consume más RAM. |
| **Contenido Dinámico** | Necesita un procesador externo (PHP-FPM). | Puede procesarlo internamente (mod_php). |
| **Configuración** | Centralizada (más segura). | Descentralizada (.htaccess, más flexible). |
| **Escalabilidad** | Excelente para millones de usuarios. | Limitada por el consumo de memoria por hilo. |

---

## 5. El Proceso de una Petición (Request-Response)

1.  **Handshake:** El cliente inicia una conexión TCP con el puerto 80 (HTTP) o 443 (HTTPS).
2.  **Petición:** El navegador envía un verbo (GET, POST, PUT, DELETE) y una URL.
3.  **Procesamiento:** El servidor busca el archivo en el disco o ejecuta un script.
4.  **Respuesta:** El servidor envía un **Código de Estado** (200 OK, 404 Not Found, 500 Error) y los datos.



---

> **Dato para la bitácora:** Actualmente, Nginx ha superado a Apache en cuota de mercado en los sitios más visitados del mundo debido a su capacidad de actuar como "escudo" (proxy) y su bajísimo consumo de recursos, algo vital en entornos de nube (Cloud) donde cada MB de RAM cuesta dinero.