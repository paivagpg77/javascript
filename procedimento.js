// O que você escreve:
function saudar() {
    console.log("Olá!");
}
// Como o JavaScript executa de verdade:
function saudar() {
    console.log("Olá!");
    return undefined; // Injetado automaticamente
}
// ====== 1. FUNÇÃO SEM RETORNO (Executa uma ação direta) ======
function alterarSucessoNaTela() {
    // Esta função apenas executa comandos visuais, não gera um número/texto para cálculo
    console.log("Ação disparada: Alterando o HTML...");
    alert("Operação realizada com sucesso!");
}

// Invocação simples
alterarSucessoNaTela(); 

// Se você tentar guardar o resultado dela em uma variável, veja o que acontece:
let teste = alterarSucessoNaTela();
console.log(teste); // Vai imprimir: undefined


// ====== 2. FUNÇÃO COM RETORNO (Gera um dado para ser usado depois) ======
function calcularDesconto(valor) {
    return valor * 0.10; // Devolve 10% do valor
}

// Precisamos guardar o retorno em uma variável para não perder o valor calculado
let valorDesconto = calcularDesconto(200); 
console.log(`O desconto calculado foi de: R$ ${valorDesconto}`);