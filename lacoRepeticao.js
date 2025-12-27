// Contar quantos números pares e ímpares tem entre 0 e 100;

let totalNumerosPares = 0;
let totalNumerosImpares = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(`Os números pares são: ${i}`);
    } else if (i % 2 > 0) {
        console.log(`Os números ímpares são: ${i}`);
    }
}

for (let contador = 0; contador <= 100; contador++) {
    if (contador % 2 == 0) {
        totalNumerosPares++
    } else {
        totalNumerosImpares++
    }
}

console.log(`Total de números pares: ${totalNumerosPares}`);
console.log(`Total de números ímpares: ${totalNumerosImpares}}`);
