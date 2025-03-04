const Personaje = require('../models/personaje.model');

//para metodo get de ruta agregar. solo la logica. Principio SRP
exports.get_agregar = (req, res, nxt) => {
    res.render('agregar_personaje');  
};

exports.post_agregar = (req, res, nxt) => {
  console.log(req.body);
  //personajes.push(req.body.nombre);
  const personaje = new Personaje(req.body.nombre);
  //console.log(personajes);
  personaje.save();
  console.log(Personaje.fetchAll());
  res.redirect('/personajes');
  // res.render('lista_personaje', {
  //   personajes: Personaje.fetchAll(),
  // });

};

exports.get_lista = (req, res, nxt) => {
    res.render('lista_personaje', {
        personajes: Personaje.fetchAll(),
    });  
};

exports.get_mostrar = (req, res, nxt) => {
    const path = require('path');
    res.sendFile(path.join(__dirname, '..', 'views', 'frameworks.html'));
};