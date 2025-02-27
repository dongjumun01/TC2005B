const express = require('express');
const router = express.Router();

router.use('/lacteos', (require, response, next) => {
    response.send(html_lacteos);
});

router.use('/frutas', (require, response, next) => {
    response.send(html_frutas);
});

router.use('/enlatados', (require, response, next) => {
    response.send(html_enlatados);
});

router.use('/granos', (require, response, next) => {
    response.send(html_granos);
});

module.exports = router;

const html_lacteos = `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>lacteos</h1>
        <ol>
            <li>Leche</li>
            <li>Yogurt</li>
            <li>Queso</li>
        </ol>
    </body>
</html>
`;

const html_frutas = `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Frutas</h1>
        <ol>
            <li>Manzana</li>
            <li>Mango</li>
            <li>Kiwi</li>
        </ol>
    </body>
</html>
`;

const html_enlatados = `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Enlatados</h1>
        <ol>
            <li>Tuna en lata</li>
            <li>Elotes en lata</li>
            <li>Pickles en lata</li>
        </ol>
    </body>
</html>
`;

const html_granos = `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Granos</h1>
        <ol>
            <li>arroz blanco</li>
            <li>lentejas</li>
            <li>frijoles negros</li>
        </ol>
    </body>
</html>
`;