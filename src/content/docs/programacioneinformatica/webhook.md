---
title: Sobre Linux


---
# Webhooks: La Comunicación Basada en Eventos

Un Webhook es un mecanismo que permite a una aplicación enviar información en tiempo real a otra aplicación cuando ocurre un evento específico. Es el equivalente a que te llegue una notificación al celular en lugar de que tú abras la app cada 5 minutos para revisar si tienes mensajes.

---

## 1. Diferencia Crítica: API REST vs. Webhook

* **API REST (Polling):** Tu servidor le pregunta constantemente al otro: "¿Hay datos nuevos? ¿Y ahora? ¿Y ahora?". Esto consume muchos recursos y ancho de banda innecesariamente.
* **Webhook (Push):** Tú le dices al otro servidor: "Aquí tienes mi dirección (URL). Cuando pase algo, avísame". El otro servidor te envía los datos solo cuando ocurre el evento.



---

## 2. ¿Cómo funciona un Webhook?

1.  **Registro:** Tú configuras una **URL de destino** (Endpoint) en el servicio que emite los eventos (ej. GitHub, Stripe, Mercado Pago).
2.  **Evento:** Ocurre una acción en ese servicio (ej. se procesó un pago, se hizo un *push* a un repositorio).
3.  **Petición HTTP:** El servicio emisor realiza una petición **HTTP POST** a tu URL con los detalles del evento en el cuerpo (usualmente en formato JSON).
4.  **Acción:** Tu servidor recibe el JSON y dispara una lógica interna (ej. liberar un producto, enviar un mail de confirmación).

---

## 3. Arquitectura y Servidores

Cualquier servidor capaz de mantener una API REST puede recibir Webhooks, ya que para tu servidor, un Webhook no es más que una petición POST entrante.

* **Endpoints:** Debes exponer una URL pública. Si trabajas localmente (localhost), necesitarás herramientas como **ngrok** o **Cloudflare Tunnel** para que el servicio externo pueda "ver" tu máquina.
* **Procesamiento Asíncrono:** Si el procesamiento del Webhook es pesado (ej. generar un PDF), la buena práctica es responder inmediatamente un `200 OK` al emisor y pasar la tarea a una **cola de mensajes** (como Redis o RabbitMQ) para no bloquear la conexión.

---

## 4. Seguridad en Webhooks

Dado que tu URL es pública, cualquiera podría enviarte datos falsos. Para protegerte, se utilizan:

* **Tokens Secretos:** El emisor añade un token en la cabecera (Header) que solo tú y él conocen.
* **Firmas HMAC:** El emisor firma el cuerpo del mensaje con una clave secreta. Tú recalculas la firma al recibirlo; si no coinciden, el mensaje fue alterado o es falso.
* **Listas Blancas de IP:** Configuras tu firewall (Nginx o Apache) para que solo acepte peticiones de las direcciones IP oficiales del servicio emisor.

---

## 5. Casos de Uso Comunes

* **Pasarelas de Pago:** Cuando un cliente paga en Mercado Pago o Stripe, el Webhook avisa a tu sistema para marcar la orden como "Pagada".
* **CI/CD:** Cuando subes código a GitHub, un Webhook avisa a tu servidor de despliegue para que descargue la nueva versión y la compile.
* **Bots de Chat:** Cuando alguien escribe en un grupo de Telegram o Discord, el servicio envía un Webhook a tu script para que el bot responda.

---

## 6. Ejemplo de un Payload de Webhook (JSON)

Así es como se vería lo que recibe tu servidor:

```json
{
  "evento": "pago_recibido",
  "id_transaccion": "TX12345",
  "monto": 5500.00,
  "moneda": "ARS",
  "cliente": "usuario_ejemplo@mail.com"
}