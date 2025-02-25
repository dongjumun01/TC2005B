const personajes = [];

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


//Middleware
app.use((request, response, next) => { //con use registramos middleware
    console.log('Middleware!');
    next(); //Le permite a la peticion avanzar hacia el siguiente middleware
});

//si muevo esto al final, no va a ejecutar 
// ya que no tiene next el middleware al final
app.use('/main', (request, response, next) => { 
    response.send("Hola desde una ruta");
});

// cuando se registra un middleware con app.get(),
// el middleware solo se registra para el metodo HTTP GET
app.get('/personajes/agregar', (request, response, next) => {
    response.send(html_header + html_content_form + html_footer);
});

// cuando se registra un middleware con app.post(),
// el middleware solo se registra para el metodo HTTP POST
app.post('/personajes/agregar', (request, response, next) => {
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

app.use((request, response, next) => {
    console.log('Otro Middleware!');
    response.send('Hola mundo!'); //Manda respuesta
});



app.listen(3000);

