// Mostre no console quantos números entre 1 e 100 são divisíveis por 3.

somaNumeros = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        somaNumeros++
    }
}

console.log(`A quantidade de números divisíveis por 3 é: ${somaNumeros}`);
