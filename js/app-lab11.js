const express = require('express');
const app = express();
const path = require('path');



app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasUsuarios = require('../routes/user.routes.js');
app.use('/users', rutasUsuarios);

const rutasPersonajes = require('../routes/personajes.routes.js');
app.use('/personajes', rutasPersonajes);

app.use((request, response, next) => {
    response.status(404).send('Página no encontrada');
});


app.listen(3000);

