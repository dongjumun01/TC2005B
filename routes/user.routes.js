const express = require('express');
const router = express.Router();

const users_controller = require("../controllers/users.controllers");

router.get('/login', users_controller.get_login);
router.post('/login', users_controller.post_login);
router.get('/logout', users_controller.get_logout);

module.exports = router;