const notaAluno = 3

if (notaAluno >= 9) {
    console.log('Excelente');
} else if (notaAluno < 9 && notaAluno >= 7) {
    console.log('Muito bom!');
} else if (notaAluno < 7 && notaAluno >= 4) {
    console.log('Pode melhorar');
} else {
    console.log('Precisa melhorar');
}