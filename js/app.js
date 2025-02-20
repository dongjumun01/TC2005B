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

const arreglo = [5000, 50, 230, 120, 13, 29, 329, 493, 921,1210];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

//ex) 5000 => se ejecuta cuando pasen 5000 milisegundos

//setTimeout(function, la cantidad de milisegundos)

//Manera asincronica