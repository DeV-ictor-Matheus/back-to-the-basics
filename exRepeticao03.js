// Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.

let num = Number(prompt("Escolha um número de 0 a 10: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
