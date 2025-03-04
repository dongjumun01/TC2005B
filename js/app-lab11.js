const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


// //Middleware
// app.use((request, response, next) => { //con use registramos middleware
//     console.log('Middleware!');
//     next(); //Le permite a la peticion avanzar hacia el siguiente middleware
// });

//si muevo esto al final, no va a ejecutar 
// ya que no tiene next el middleware al final
// app.use('/main', (request, response, next) => { 
//     response.send("Hola desde una ruta");
// });

const rutasUsuarios = require('../routes/user.routes.js');
app.use('/users', rutasUsuarios);

const rutasPersonajes = require('../routes/personajes.routes.js');

app.use('/personajes', rutasPersonajes);

// const rutasProductos = require('../routes/productos.routes.js');
// app.use('/productos', rutasProductos);

// app.use((request, response, next) => {
//     console.log('Otro Middleware!');
//     response.send('Hola mundo!'); //Manda respuesta
// })

app.use((request, response, next) => {
    response.status(404).send('Página no encontrada');
});


app.listen(3000);

