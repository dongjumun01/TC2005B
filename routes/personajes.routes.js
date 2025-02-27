const express = require('express');
const router = express.Router();

const personajes = [];

// cuando se registra un middleware con app.get(),
// el middleware solo se registra para el metodo HTTP GET
router.get('/agregar', (request, response, next) => {
    response.send(html_header + html_content_form + html_footer);
});

// cuando se registra un middleware con app.post(),
// el middleware solo se registra para el metodo HTTP POST
router.post('/agregar', (request, response, next) => {
    console.log(request.body);
    personajes.push(request.body.nombre);
    console.log(personajes);
    let html = html_header;
    for (let personaje of personajes) {
        html += html_card_header;
        html += personaje;
        html += html_card_footer;
    }
    html += html_footer;
    response.send(html);
});

//objeto tipo router de express
module.exports = router;

const html_header = `
<!DOCTYPE html>
<html data-theme="dark">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
  </head>
  <body>
  <section class="section"> 
    <div class="container">
      <h1 class="title">
        Hello There!
      </h1>
    </div>
</section>
  `;

const html_content_form = `
    <div class="columns">
    <div class="column">
        <form action="/personajes/agregar" method="POST">
        <label class="label">Brain storming</label>
        <input class="input is-primary" type="text" placeholder="Idea" id="idea" name="nombre"/>
        <br><br>
        <input type="submit" id="boton_imagen" class="button is-primary" value="Guardar idea"/>
        </form>
    </div>
    <div class="column">
        <span id="imagen_chewy"></span>
    </div>
    <div class="column">
        <span id="imagen_grogu"></span>
    </div>
    <div class="column">
        <span id="imagen_r2d2"></span>
    </div>
    <div class="column">
        <span id="imagen_3po"></span>
    </div>
    <div class="column">6</div>
    </div> `;
const html_footer = `
    
  <script src="./js/introjs2.js"></script>
  </body>
</html>
`;

let html_card_header = `
  <div class="card">
    <div class="card-content">
      <p class="title">
  `;
let html_card_footer = `
      </p>
    </div>
  </div>
`;