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

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i); // sale error. Porque ya desapareció después de {}.

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i); // sigue viva la variable i.
// es 10 porque añade 1 al 9 y no impreme el valor de 10 por la condición
// y luego imprime la i.

//alert, prompt, confirm
alert("srgdgerhhljn");
const nombre = prompt("Como te llamas");
const is_hambre = confirm("Tienes hambre?");

// funciones tradicionales 
function imprime_status(){
    let respuesta = ""
    if(is_hambre) {
        respuesta = " tiene hambre";
    }
    console.log(nombre + respuesta);
}

imprime_status();

//funciones modernas
const mi_funcion = () => {
    console.log("sk.dkfsaj.sadkf desde una función anónima");
}

mi_funcion(); // ejecutar la function que esta guardada en esa dirección
// las funciones son objetos. Por eso las variables pueden hacer referencia
// a las funciones.

// arreglos

const arreglo = ["Elemento"]; // la ubicacion donde esta guardado el arreglo.

const arreglo2 = new Array();

arreglo.push("Otro elemento");

arreglo[10] = "Uno más";

//arreglo asociativos
arreglo["uno"] = 5; // no es un elemento. una propiedad. No aumenta la longitud.

//recorrido tradicional del arreglo

for(let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

console.log("operador in");

//recorridos alternativos del arreglo

for(let posicion in arreglo) { // imprime las posiciones del arreglo
    console.log(posicion);
}

console.log("operador in");

for(let posicion in arreglo) { // imprime los elementos del arreglo
    console.log(arreglo[posicion]);
}

console.log("operador of");

for(let posicion of arreglo) { // imprime los elementos del arreglo
    console.log(posicion);
}

// Objetos

const objeto = {};
objeto.atributo1 = "hola";
objeto.atributo2 = 12;
objeto.atributo3 = [];
objeto.objeto = {};

console.log("Imprime las psociones del objeto")
for (let pos in objeto) {
    console.log(pos);
}
console.log("Imprime los elementos del objeto")
for (let pos in objeto) {
    console.log(objeto[pos]);
}
//no podemos usar of.