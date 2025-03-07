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
    personaje.save()        
        .then(() => {
            req.session.info = `Personaje ${personaje.nombre} guardado`;
            res.redirect('/personajes');
        })
        .catch((error) => {
            console.log(error);
        });

    //res.setHeader('Set-Cookie', `ultimo_personaje=${personaje.nombre}`);

    //console.log(Personaje.fetchAll());
};

exports.get_lista = (req, res, nxt) => {
    console.log(req.get('Cookie').split(';'));
    const mensaje = req.session.info || '';
    if (req.session.info) {
        req.session.info = '';
    }
    Personaje.fetch(req.params.id)
        .then(([rows,fielData]) => {
            console.log(fielData);
            console.log(rows);
            res.render('lista_personaje', {
                personajes: rows,
                isLoggedIn: req.session.isLoggedIn || false,
                username: req.session.username || '',
                info: mensaje,
            });  
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.get_mostrar = (req, res, nxt) => {
    const path = require('path');
    res.sendFile(path.join(__dirname, '..', 'views', 'frameworks.html'));
};