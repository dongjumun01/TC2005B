// const file_system = require('fs')
// //fs es file system
// //leer archivos aceder archivos ...
// //The ‘fs’ module of Node.js implements the File I/O operation

// file_system.writeFileSync('hola.txt', 'Hola desde node');
// //Manera sincronica
// //para sistemas distribuidos
// //Cuando este occurre va a bloquedar todo hasta que corra ese comando.

// setTimeout(() => {
//     console.log("jojo te hackeé");
// }, 20000); 
// //Este comando corre al final ya que es una function asincronica

// const arreglo = [5000, 50, 230, 120, 13, 29, 329, 493, 921,1210];

// for (let item of arreglo) {
//     setTimeout(() => {
//         console.log(item);
//     }, item);
// }

// //ex) 5000 => se ejecuta cuando pasen 5000 milisegundos

// //setTimeout(function, la cantidad de milisegundos)

// //Manera asincronica

let html_card_header = `
  <div class="card">
    <div class="card-content">
      <p class="title">
  `;
let html_card_footer = `
      </p>
    </div>
  </div>
`;

const http = require('http');

const server = http.createServer( (request, response) => {
    if(request.url == "/" && request.method == "GET") {
      console.log(request.url);
      response.setHeader('Content-Type', 'text.html');
      response.write(html_header + html_content_form + html_footer);             
      response.end();
    } else if (request.method == "POST") {

      const datas = [];

      request.on('data', (data) => { //voy a escuchar las peticiones.
        console.log(data); // Llega "nombre=inputValue" en hexadecimal
        datas.push(data);
      }); 

      request.on('end', () => { //cuando no hay mas datos recibidos
        const datos_completos = Buffer.concat(datas).toString();
        console.log(datos_completos);
        personajes.push(datos_completos.split('=')[1]);
        response.setHeader('Content-Type', 'text.html');
        response.write(html_header);
        response.write('<div class="columns">');
        for(let personaje of personajes) {
          response.write('<div class="column">');
          response.write(html_card_header);
          response.write(personaje);
          response.write(html_card_footer);
          response.write('</div>');
        }
        response.write('</div>');
        response.write(html_footer);
        response.end();
      });
    } else {  
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text.html');
      response.write(html_header + "La página no existe" + html_footer);
      response.end();
    }
});

//createServer(function, )

server.listen(3000);
//arriba de 3000 porque no se ocupan normalmente
//127.0.0.1:3000/
//o 
//localhost:3000/

const personajes = [];

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
  </section>`;

  const html_content_form = `
  <div class="columns">
    <div class="column">
      <form action="/" method="POST">
        <label class="label">Nombre de personaje</label>
        <input class="input is-primary" type="text" placeholder="Chewbacca" id="nombre" name="nombre"/>
        <br><br>
        <input type="submit" id="boton_imagen" class="button is-primary" value="Guardar personaje"/>
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
