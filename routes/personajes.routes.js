const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');

const personajes_controller = require('../controllers/personajes.controller');


router.get('/agregar', isAuth, personajes_controller.get_agregar);

//puedo hacer estos con la separación ex) pagina en ingles o español
router.get('/add', isAuth, personajes_controller.get_agregar);

router.post('/agregar', isAuth, personajes_controller.post_agregar);

router.get('/mostrar', isAuth, personajes_controller.get_mostrar);

//de general a especifico
router.get('/:id', isAuth, personajes_controller.get_lista);

router.get('/', isAuth, personajes_controller.get_lista);

//objeto tipo router de express
// una forma de exportar
module.exports = router;