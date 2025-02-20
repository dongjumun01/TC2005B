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