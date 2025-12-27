// Crie um menu simples que exibe opções como "1 - Ver saldo", "2 - Fazer depósito", "3 - Sair". Use do...while para repetir o menu até o usuário escolher sair.

let opcoes = [1, 2, 3];
let index = 0;
let opcao;

do {
    opcao = opcoes[index];

    console.log('Selecione uma das opções (1 - Ver Saldo, 2 - Fazer depósito, 3 - Sair)');
    if (opcao === 1) {
        console.log('Seu saldo é: X');
    } else if (opcao === 2) {
        console.log('Qual valor deseja depositar? ');
    } else if (opcao === 3) {
        console.log('Sair do app');
    }
    index++;
} while (opcao !== 3);
