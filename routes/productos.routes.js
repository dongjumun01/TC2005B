const express = require('express');
const router = express.Router();
const productos_controller = require('../controllers/productos.controller')

router.get('/', productos_controller.get_mostrar_productos);

router.post('/', productos_controller.post_productos);

module.exports = router;