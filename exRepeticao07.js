// Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.

let anoNascimento = 1995;
let anoAtual = 2025;


for (let i = anoNascimento; i <= anoAtual; i++) {
    // 95 -> 0 ano || 96 -> 2 anos
    let idade = i - anoNascimento;
    if (idade === 0) {
        console.log(`Nasceu em ${anoNascimento}!`);
    } else {
        console.log(`Em ${i} você tem ${idade}.`);
    }
}
