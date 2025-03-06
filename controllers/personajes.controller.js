const Personaje = require('../models/personaje.model');

//para metodo get de ruta agregar. solo la logica. Principio SRP
exports.get_agregar = (req, res, nxt) => {
    console.log(req.session);
    res.render('agregar_personaje', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
    });  
};

exports.post_agregar = (req, res, nxt) => {
    console.log(req.body);
    const personaje = new Personaje(req.body.nombre);
    personaje.save();

    res.setHeader('Set-Cookie', `ultimo_personaje=${personaje.nombre}`);

    console.log(Personaje.fetchAll());
    res.redirect('/personajes');
};

exports.get_lista = (req, res, nxt) => {
    console.log(req.get('Cookie').split(';'));
    res.render('lista_personaje', {
        personajes: Personaje.fetchAll(),
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
    });  
};

exports.get_mostrar = (req, res, nxt) => {
    const path = require('path');
    res.sendFile(path.join(__dirname, '..', 'views', 'frameworks.html'));
};