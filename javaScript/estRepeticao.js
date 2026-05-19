// ==========================================
// 1. EXEMPLO: WHILE (Enquanto)
// ==========================================
console.log("--- Testando o Laço WHILE ---");
let contadorWhile = 1;

while (contadorWhile <= 5) {
    console.log(`[While] Rodada número: ${contadorWhile}`);
    contadorWhile++;
}


// ==========================================
// 2. EXEMPLO: DO WHILE (Faça, enquanto)
// ==========================================
console.log("--- Testando o Laço DO WHILE ---");
let contadorDo = 10;

// Note que a condição abaixo (contadorDo < 5) já nasce FALSA (10 não é menor que 5).
// Mesmo assim, o 'do while' vai rodar o bloco uma vez antes de perceber isso.
do {
    console.log(`[Do While] Este texto aparece uma vez, 
        mesmo com a condição falsa! Valor: ${contadorDo}`);
    contadorDo++;
} while (contadorDo < 5);


// ==========================================
// 3. EXEMPLO: FOR (Para)
// ==========================================
console.log("--- Testando o Laço FOR (Tabuada do 5) ---");

// Inicialização; Condição; Incremento (Tudo na mesma linha)
for (let i = 1; i <= 10; i++) {
    let resultado = 5 * i;
    console.log(`5 x ${i} = ${resultado}`);
}
