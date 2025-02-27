const express = require('express');
const router = express.Router();

const personajes = [];

// cuando se registra un middleware con app.get(),
// el middleware solo se registra para el metodo HTTP GET
router.get('/agregar', (request, response, next) => {
    //response.send(html_header + html_content_form + html_footer);
    response.render('agregar_personaje');
});
// <%- // va a impirmir variable. si hay mas codigo ahi tambien lo va a ejecutar 
// <%= // es mas seguro. va a impirmir variable

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

const path = require('path');

router.get('/mostrar', (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'views', 'frameworks.html'));
});



//objeto tipo router de express
module.exports = router;

const html_header = ``;

const html_content_form = ``;
const html_footer = ``;

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