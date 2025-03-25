const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');
const canCreatePersonajes = require('../util/canCreatePersonaje');
const canViewPersonajes = require('../util/canViewPersonajes');

const personajes_controller = require('../controllers/personajes.controller');


router.get('/agregar', isAuth, canCreatePersonajes, personajes_controller.get_agregar);

//puedo hacer estos con la separación ex) pagina en ingles o español
router.get('/add', isAuth, canCreatePersonajes, personajes_controller.get_agregar);

router.post('/agregar', isAuth, canCreatePersonajes, personajes_controller.post_agregar);

router.get('/mostrar', isAuth, personajes_controller.get_mostrar);

router.get('/buscar/:valor', isAuth, canViewPersonajes, personajes_controller.get_buscar)
router.get('/buscar/', isAuth, canViewPersonajes, personajes_controller.get_buscar)

//de general a especifico
router.get('/:id', isAuth, canViewPersonajes, personajes_controller.get_lista);

router.get('/', isAuth, canViewPersonajes, personajes_controller.get_lista);

//objeto tipo router de express
// una forma de exportar
module.exports = router;