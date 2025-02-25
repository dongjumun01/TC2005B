const express = require('express');
const app = express();

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

app.use((request, response, next) => {
    console.log('Otro Middleware!');
    response.send('Hola mundo!'); //Manda respuesta
});



app.listen(3000);