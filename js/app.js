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

});

//createServer(function, )

server.listen(3000);
//arriba de 3000 porque no se ocupan normalmente
//127.0.0.1:3000/
//o 
//localhost:3000/