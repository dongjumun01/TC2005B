const file_system = require('fs')
//fs es file system
//leer archivos aceder archivos ...
//The ‘fs’ module of Node.js implements the File I/O operation

file_system.writeFileSync('hola.txt', 'Hola desde node');
//Manera sincronica
//para sistemas distribuidos
//Cuando este occurre va a bloquedar todo hasta que corra ese comando.

setTimeout(() => {
    console.log("jojo te hackeé");
}, 20000); 
//Este comando corre al final ya que es una function asincronica

const arreglo = [5000, 50, 230, 120, 13, 29, 329, 493, 921,1210];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

//ex) 5000 => se ejecuta cuando pasen 5000 milisegundos

//setTimeout(function, la cantidad de milisegundos)

//Manera asincronica

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text.html');
    response.write(html);             
    response.end();
});

//createServer(function, )

server.listen(3000);
//arriba de 3000 porque no se ocupan normalmente
//127.0.0.1:3000/
//o 
//localhost:3000/

const html = `
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
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  <div class="columns">
    <div class="column">
      <button id="boton_imagen" class="button is-primary">
        Mostrar imagen
      </button>
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
  </div>
  <script src="./js/introjs2.js"></script>
  </body>
</html>
`
