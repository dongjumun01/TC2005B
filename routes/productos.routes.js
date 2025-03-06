const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    //response.send(html_header + html_content_form + html_footer);
    response.render('mostrar_productos');
});

router.post('/', (req, res, nxt) => {
    console.log(req.body.nombre);
    res.render('mostrar_lista_de_productos', {
      producto: req.body.nombre,
    });
});

module.exports = router;