const num = Number(prompt("Dame un número"));
if(!isNaN(num) && num > 0) {
    document.write("<table border='1'>");
    document.write("<tr><th>Num</th><th>Cuadrado</th><th>Cubo</th></tr>");
    for(let i = 1; i <= num; i++) {
        document.write("<tr><td>"+i+"</td><td>"+i**2+"</td><td>" +i**3+"</td></tr>");
    }
    document.write("</table>");
}

const result = prompt("Cual es la suma de 22 y 33");
if(result == 55) {
    document.write("<p>La respuesta es correcta.</p>")
} else {
    document.write("<p>La respuesta es incorrecta.</p>")
}

function contador(arr) {
    let num_pos = 0;
    let num_z = 0;
    let num_neg = 0;
    for (let i of arr) {
        if (i > 0) {
            num_pos ++;
        } else if (i = 0) {
            num_z ++;
        } else {
            num_neg ++;
        }
    }
    return {
        pos: num_pos, 
        zero: num_z,
        neg: num_neg
    };
}

const arreglo = [2, 3, 0, -1, 0 , -5, 3];
const resultado = contador(arreglo);

document.write("<p>Pos: " + resultado.pos + " Zero: " + resultado.zero + 
    " Neg: " + resultado.neg + "</p>"
);


function promedios(matriz) {
    const result = [];
    for(let arr of matriz) {
        let sum = 0;
        for(let ele of arr) {
            sum += ele;
        }
        result.push(sum/arr.length);
    }
    
    return result;

}

matrix = [
    [1, 2],
    [3, 4],
    [6, 7]
]

const arr_avg = promedios(matrix);
document.write("<p>promedios: " + arr_avg[0]+ " " + arr_avg[1] + " " + 
    arr_avg[2]+ "</p>");


function inverso(number) {
    const isNegative = number < 0; // Verificar si el número es negativo
    const reversed = Math.abs(number) // Convertir el número a positivo si es negativo
      .toString() // Convertir el número a cadena
      .split('') // Dividir la cadena en un array de caracteres
      .reverse() // Revertir el array
      .join(''); // Unir los caracteres en una cadena nuevamente
    
    // Volver a negativo si es necesario
    return isNegative ? -Number(reversed) : Number(reversed); 
}

let n = 1234;
document.write("Resultado de la función inverso: " + inverso(n));


function mergeAlternately(word1, word2) {
    let merged = "";
    let i = 0, j = 0;

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            merged += word1[i];
            i++;
        }
        if (j < word2.length) {
            merged += word2[j];
            j++;
        }
    }

    return merged;
}

let merged_result = mergeAlternately("abc", "def");
const button_result = document.getElementById("button_result");

const imprime_resultado = () => {
    const result_html = document.getElementById("resultado_merged");
    result_html.innerHTML = `<p>El resultado de "abc" y "def": ${merged_result}
    </p>`;
}

button_result.onclick = imprime_resultado;
