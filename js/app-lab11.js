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

const rutasPersonajes = require('../routes/personajes.routes.js');

app.use('/personajes', rutasPersonajes);


app.use((request, response, next) => {
    console.log('Otro Middleware!');
    response.send('Hola mundo!'); //Manda respuesta
})

app.listen(3000);

