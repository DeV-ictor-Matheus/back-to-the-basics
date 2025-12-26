const a = [1, 2, 3, 4, 5];

function imprimeMaiorEMenor(arr) {
    let maior = 0;
    let menor = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
        if (arr[i] < menor) {
            menor = arr[i];
        }
}
    return `O maior número é ${maior} e o menor número é ${menor}.`
}

console.log(imprimeMaiorEMenor(a));
