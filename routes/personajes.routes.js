const express = require('express');
const router = express.Router();

const personajes_controller = require('../controllers/personajes.controller');


router.get('/agregar', personajes_controller.get_agregar);

//puedo hacer estos con la separación ex) pagina en ingles o español
router.get('/add', personajes_controller.get_agregar);

router.post('/agregar', personajes_controller.post_agregar);

router.get('/mostrar', personajes_controller.get_mostrar);

router.get('/', personajes_controller.get_lista);

//objeto tipo router de express
// una forma de exportar
module.exports = router;