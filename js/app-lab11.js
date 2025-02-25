const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => { //con use registramos middleware
    console.log('Middleware!');
    next(); //Le permite a la peticion avanzar hacia el siguiente middleware
});

//si muevo esto al final, no va a ejecutar 
// ya que no tiene next el middleware al final
app.use('/main', (request, response, next) => { 
    response.send("Hola desde una ruta");
});

app.use('/personajes/agregar', (request, response, next) => {
    response.send(html_header + html_content_form + html_footer);
});

app.use((request, response, next) => {
    console.log('Otro Middleware!');
    response.send('Hola mundo!'); //Manda respuesta
});



app.listen(3000);

const html_header = `
<!DOCTYPE html>
<html data-theme="dark">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
  </head>
  <body>
  <section class="section"> 
    <div class="container">
      <h1 class="title">
        Hello There!
      </h1>
    </div>
</section>
  `;

const html_content_form = `
    <div class="columns">
    <div class="column">
        <form action="/main" method="POST">
        <label class="label">Brain storming</label>
        <input class="input is-primary" type="text" placeholder="Idea" id="idea" name="idea"/>
        <br><br>
        <input type="submit" id="boton_imagen" class="button is-primary" value="Guardar idea"/>
        </form>
    </div>
    <div class="column">
        <span id="imagen_chewy"></span>
    </div>
    <div class="column">
        <span id="imagen_grogu"></span>
    </div>
    <div class="column">
        <span id="imagen_r2d2"></span>
    </div>
    <div class="column">
        <span id="imagen_3po"></span>
    </div>
    <div class="column">6</div>
    </div> `;
const html_footer = `
    
  <script src="./js/introjs2.js"></script>
  </body>
</html>
`;
