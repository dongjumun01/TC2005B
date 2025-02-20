const calcularPromedio = (arreglo) => {
    let suma = 0;
    for (let item of arreglo) {
        suma += item;
    }
    return suma / arreglo.length;
};

const arreglo = [1, 2, 3, 4, 5];
console.log(calcularPromedio(arreglo))

const escribirEnArchivo = (str) => {
    const file_s = require('fs');
    file_s.writeFileSync('prueba.txt', str);
}

let str = 'Hola'
escribirEnArchivo(str);

function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.hasOwnProperty(complement)) {
        return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
}

let nums = [3, 2, 4, 1];
target = 6;

console.log(twoSum(nums, target));

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-type', 'text.html');
    response.write(html);
    response.end();
})

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
`;

server.listen(3000);