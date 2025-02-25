const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => { //con use registramos middleware
    console.log('Middleware!');
    next(); //Le permite a la peticion avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro Middleware!');
    response.send('Hola mundo!'); //Manda respuesta
});

app.listen(3000);