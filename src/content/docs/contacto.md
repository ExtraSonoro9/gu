---
description: Página de contacto con formulario
title: Contacto
---

# Contáctanos

<form method="POST" id="form">
  <input type="hidden" name="access_key" value="c5b57471-b9f1-43cb-90b6-8b4b8e4fe450">

<label for="nombre">Nombre:</label><br /> <input type="text" id="nombre" name="nombre" required /><br />

<label for="email">Email:</label><br /> <input type="email" id="email" name="email" required /><br />

<label for="message">Mensaje:</label><br />

  <textarea id="message" name="message" required></textarea><br />

<button type="submit">Enviar</button>

  <div id="result" style="margin-top:1em;"></div>
</form>

<script is:inline>
  const form = document.getElementById('form');
  const result = document.getElementById('result');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Por favor espera...";

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
      } else {
        result.innerHTML = json.message;
      }
    })
    .catch(error => {
      console.error(error);
      result.innerHTML = "¡Ocurrió un error!";
    })
    .finally(() => {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
  });
</script>

***

Si encuentras un error o quieres ayudar manda mensaje.

***

¡Escríbenos y te responderemos pronto!............ 
