const file_system = require('fs')
//fs es file system
//leer archivos aceder archivos ...

file_system.writeFileSync('hola.txt', 'Hola desde node');
//Manera sincronica
//para sistemas distribuidos
//Cuando este occurre va a bloquedar todo hasta que corra ese comando.