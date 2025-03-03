const express = require('express');
const router = express.Router();

const personajes_controller = require('../controllers/personajes.controller');
const personajes = [];

// cuando se registra un middleware con app.get(),
// el middleware solo se registra para el metodo HTTP GET
router.get('/agregar', personajes_controller.get_agregar /*(request, response, next) => {}*/
    //response.send(html_header + html_content_form + html_footer);
    // response.render('agregar_personaje');
);

//puedo hacer estos con la separación ex) pagina en ingles o español
router.get('/add', personajes_controller.get_agregar);

// <%- // va a impirmir variable. si hay mas codigo ahi tambien lo va a ejecutar 
// <%= // es mas seguro. va a impirmir variable
// ex) <%= personaje; %> ya que es una variable es mejor usar =
// pero si uso -, si alguien pone un script como 
// "<script>alert("jojo te hackee"); </script>"
// va a correr este script en la pagina y esto no es seguro.

// cuando se registra un middleware con app.post(),
// el middleware solo se registra para el metodo HTTP POST
router.post('/agregar', (request, response, next) => {
    console.log(request.body);
    personajes.push(request.body.nombre);
    console.log(personajes);
    response.render('lista_personaje', {
      personajes: personajes,
    });
});

const path = require('path'); // para archivos estaticos

router.get('/mostrar', (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'views', 'frameworks.html'));
});

//objeto tipo router de express
// una forma de exportar
module.exports = router;