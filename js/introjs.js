// consola (log, info, warn, error, assert, etc)
console.log("Hola mundo wookie"); //no sale i
console.info("Aquí andamos aprendiendo"); //sale i
console.warn("Esta es una advertencia"); //warning
console.error("aklfasga;sglkas"); //error
// throw an error if the expression passed into the function is false.
console.assert(1 == 1); // == solo compara el valor
console.assert(1 === 1);  
console.assert(1 == "1");  
console.assert(1 === "1"); // === compara el valor y el tipo de dato
console.assert(1 == true);
console.assert(1 === true);    

//tiene aceso en todo el archivo
var wookie = "Chewbacca"; //ya no es la manera de que se recomienda. segura X
//Después de ese bloque desaparece
let otro_wookie = "Tarful"; //forma moderna

console.log(otro_wookie);

//constantes?
//let precio = 99.99;

//precio
//->99.99
//precio = 0.01
//->0.01
//precio
//->0.01

//el cliente tiene aceso completo del código y puede modificar los datos 
//sensitivos como el ejemplo.

//lo correcto sería
const precio = 99.99;

//Alcance de las variables

