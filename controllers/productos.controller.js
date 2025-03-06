exports.get_mostrar_productos = (request, response, next) => {
    response.render('mostrar_productos');
};

exports.post_productos = (req, res, nxt) => {
    console.log(req.body.nombre);
    res.render('mostrar_lista_de_productos', {
      producto: req.body.nombre,
    });
};