// ==========================================
// 1. FUNÇÃO DECLARATIVA (Tradicional)
// Cenário: Uma máquina que cumprimenta o aluno
// ==========================================
console.log("--- 1. Função Declarativa ---");

// Criando a função (ela espera o parâmetro 'nome')
function saudarAluno(nome) {
    return `Olá, ${nome}! Seja bem-vindo à aula de JavaScript.`;
}
let mensagem1 = saudarAluno("Carlos");
let mensagem2 = saudarAluno("Mariana");

console.log(mensagem1);
console.log(mensagem2);


// ==========================================
// 2. FUNÇÃO ANÔNIMA (Guardada em Variável)
// Cenário: Calcular a média de notas da EEEP
// ==========================================
console.log("--- 2. Função Anônima ---");

const calcularMedia = function(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media;
};
let resultadoNotas = calcularMedia(8.5, 7.5);
console.log(`A média do aluno é: ${resultadoNotas}`);


// ==========================================
// 3. ARROW FUNCTION (Moderna com Seta =>)
// Cenário: Uma função curta para calcular o dobro de um número
// ==========================================
console.log("--- 3. Arrow Function ---");

// Se a Arrow Function tiver apenas uma linha de código, 
// ela não precisa de chaves {} e o 'return' é AUTOMÁTICO!
const calcularDobro = (numero) => numero * 2;
console.log(`O dobro de 15 é: ${calcularDobro(15)}`);
// Com chaves, o return AUTOMÁTICO DEIXA DE EXISTIR. É preciso digitar 'return'.
const somarEFormatar = (a, b) => {
    let resultado = a + b;
    return `O resultado da soma é: ${resultado}`; 
};
console.log(somarEFormatar(5, 2));
