const file_system = require('fs');
const http = require("http");
const { resolve } = require("path");

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

const ideas = [];

const server = http.createServer( (request, response) => {
    if ((request.url == "/about-us" 
        || request.url == "/contact") && request.method == "GET") {
        console.log(request.url);
        response.setHeader('Content-Type', 'text.html');
        response.write(html_header + html_footer);
        response.end();
    } else if (request.url == "/main" && request.method == "GET") {
        console.log(request.url);
        response.setHeader('Content-Type', 'text.html');
        response.write(html_header + html_content_form + html_footer);
        response.end();
    } else if (request.url == "/main" && request.method == "POST") {
        const datas = [];
        request.on('data', (data) => {
            console.log(data);
            datas.push(data);
        });

        request.on('end', () => {
            // concat all buffer objects in a given array 
            // into one buffer object.
            const datos_completos = Buffer.concat(datas).toString();
            ideas.push(datos_completos.split('=')[1]);
            response.setHeader('Content-Type', 'text.html');
            response.write(html_header);
            response.write('<div class="columns">');
            for(let idea of ideas) {
                file_system.appendFileSync('ideas.txt', idea + "\n");
                response.write('<div class="column">');
                response.write(html_card_header);
                response.write(idea);
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

server.listen(3000);


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

