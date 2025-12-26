/*const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

let pares = numeros % 2;

for (let pares of numeros) {
    console.log(pares);
}
*/

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
console.log('Números pares do Array: ');


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}