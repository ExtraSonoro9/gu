---
title: Servidores HTTP


---
# REST y APIs RESTful: La arquitectura de comunicación moderna

En el desarrollo de software actual, la comunicación entre diferentes sistemas (como una aplicación móvil y un servidor, o dos microservicios) se basa casi exclusivamente en el estilo arquitectónico **REST** (Representational State Transfer). Una API que cumple con estos principios se denomina **RESTful**.

---

## 1. ¿Qué es una API REST?

REST no es un protocolo, sino un conjunto de restricciones y estándares que utilizan el protocolo **HTTP** para permitir el intercambio de datos. Se basa en la manipulación de **recursos** (datos representados en texto) a través de identificadores únicos (URIs).

### Los 6 Principios de REST:
1.  **Arquitectura Cliente-Servidor:** El cliente (quien pide) y el servidor (quien provee) son independientes. Puedes cambiar la base de datos sin afectar la App móvil.
2.  **Sin estado (Stateless):** El servidor no guarda sesiones. Cada petición debe llevar toda la información necesaria (ej. el token de usuario) para ser procesada.
3.  **Cacheable:** Las respuestas deben indicar si pueden ser guardadas en caché para ahorrar tráfico.
4.  **Sistema en capas:** El cliente no sabe si habla con el servidor final o con un balanceador de carga (como Nginx).
5.  **Interfaz uniforme:** Es el estándar de oro. Todas las peticiones a un recurso deben verse igual, sin importar quién las haga.
6.  **Código bajo demanda (Opcional):** El servidor puede enviar scripts ejecutables al cliente.



---

## 2. Los Verbos HTTP: El lenguaje de las acciones

En REST, no creamos URLs como `/crear_usuario`. En su lugar, usamos la misma URL (`/usuarios`) y cambiamos el **Verbo HTTP** para indicar la acción:

| Verbo | Acción | Ejemplo de Uso |
| :--- | :--- | :--- |
| **GET** | Leer / Recuperar | `GET /productos` (Lista todos los productos) |
| **POST** | Crear | `POST /productos` (Añade un nuevo producto) |
| **PUT** | Reemplazar | `PUT /productos/45` (Sobrescribe los datos del producto 45) |
| **PATCH** | Actualizar parcial | `PATCH /productos/45` (Cambia solo el precio del producto 45) |
| **DELETE** | Eliminar | `DELETE /productos/45` (Borra el producto 45) |

---

## 3. Servidores y Entornos que mantienen APIs REST

Una API REST se compone de dos partes: el **Servidor Web** (puerta de entrada) y el **Entorno de Aplicación** (lógica de negocio).

### Servidores de Entrada (Web Servers):
* **Nginx / Apache:** Reciben la conexión HTTPS del mundo exterior, gestionan el certificado SSL y pasan la petición al "cerebro" de la API (Reverse Proxy).
* **Caddy:** Muy apreciado en desarrollo de APIs por su configuración simplificada y HTTPS automático.

### Entornos de Aplicación (Backend):
Aquí es donde reside el código que procesa los datos:
* **Node.js (con Express o NestJS):** Extremadamente popular por manejar JSON de forma nativa y su alta concurrencia.
* **Python (con FastAPI o Flask):** FastAPI es el estándar moderno; es increíblemente rápido y genera documentación automática (Swagger) de la API mientras programas.
* **Go (Golang):** Utilizado para APIs de nivel empresarial que requieren el máximo rendimiento y manejo de hilos.
* **PHP (con Laravel):** Sigue siendo un pilar para APIs robustas y rápidas de desarrollar.



---

## 4. El Formato de Datos: JSON

Aunque REST puede usar XML, el estándar de la industria es **JSON** (JavaScript Object Notation) por ser ligero y fácil de leer para humanos y máquinas.

```json
{
  "usuario_id": 1024,
  "nombre": "Sistema_Bitacora",
  "permisos": ["lectura", "escritura"],
  "estado": "conectado"
}