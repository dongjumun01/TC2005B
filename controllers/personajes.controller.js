//para metodo get de ruta agregar. solo la logica. Principio SRP
exports.get_agregar = (req, res, nxt) => {
    res.render('agregar_personaje');  
};