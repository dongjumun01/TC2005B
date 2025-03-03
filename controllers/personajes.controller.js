const personajes = [];
const Personaje = require('../models/personaje.model');

//para metodo get de ruta agregar. solo la logica. Principio SRP
exports.get_agregar = (req, res, nxt) => {
    res.render('agregar_personaje');  
};

exports.post_agregar = (req, res, nxt) => {
  console.log(req.body);
  //personajes.push(req.body.nombre);
  const personajes = new Personaje(req.body.nombre)
  //console.log(personajes);
  personajes.save();
  console.fetchAll(personajes);
  res.render('lista_personaje', {
    personajes: Personaje.fetchAll(),
  });
};

exports.get_mostrar = (req, res, nxt) => {
    const path = require('path');
    res.sendFile(path.join(__dirname, '..', 'views', 'frameworks.html'));
};