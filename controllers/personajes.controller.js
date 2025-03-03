const personajes = [];

//para metodo get de ruta agregar. solo la logica. Principio SRP
exports.get_agregar = (req, res, nxt) => {
    res.render('agregar_personaje');  
};

exports.post_agregar = (req, res, nxt) => {
  console.log(req.body);
  personajes.push(req.body.nombre);
  console.log(personajes);
  res.render('lista_personaje', {
    personajes: personajes,
  });
};

exports.get_mostrar = (req, res, nxt) => {
    const path = require('path');
    res.sendFile(path.join(__dirname, '..', 'views', 'frameworks.html'));
};