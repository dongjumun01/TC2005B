const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    //response.send(html_header + html_content_form + html_footer);
    response.render('mostrar_productos');
});

router.post()
module.exports = router;