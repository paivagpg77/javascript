// ==========================================
// 1. OPERAÇÕES MATEMÁTICAS
// ==========================================
console.log("--- Operações Matemáticas ---");
let precoProduto = 100;
let frete = 15;
let totalComSoma = precoProduto + frete;
let desconto = precoProduto - 20;
let dobroDoPreco = precoProduto * 2;
let metadeDoPreco = precoProduto / 2;
let restoDivisao = 5 % 2; // Sobra 1
let aoCubo = 2 ** 3;      // 2x2x2 = 8

console.log(`Total: R$ ${totalComSoma}`);
console.log(`Resto de 5 dividido por 2: ${restoDivisao}`);
console.log(`2 elevado ao cubo: ${aoCubo}`);


// ==========================================
// 2. OPERADORES DE COMPARAÇÃO
// ==========================================
console.log("--- Operadores de Comparação ---");
let numeroOito = 8;
let textoOito = "8";
console.log(numeroOito > 10);  // false
console.log(numeroOito >= 8);  // true
// Entendendo a diferença crucial entre == e === (Excelente para prova!)
console.log(numeroOito == textoOito);  // true (Porque ambos valem 8 visualmente)
console.log(numeroOito === textoOito); // false (Porque um é Number e o outro é String)
console.log(numeroOito != textoOito); // false (Porque ambos valem 8 visualmente)
console.log(numeroOito !== textoOito); // true (Confirma que eles são estritamente diferentes)


// ==========================================
// 3. OPERADORES LÓGICOS (Tomada de Decisão)
// ==========================================
console.log("--- Operadores Lógicos ---");
let idadeAluno = 17;
let temAutorizacaoPais = true;
let temIngresso = false;

// Teste do E (&&) -> Exige que AMBOS sejam verdadeiros
// Cenário: Para entrar na festa sozinho, precisa ter 18 anos E ter o ingresso.
let podeEntrarSozinho = (idadeAluno >= 18) && temIngresso;
console.log("Pode entrar sozinho? " + podeEntrarSozinho); // false (falhou na idade e no ingresso)

// Teste do OU (||) -> Pelo menos UM precisa ser verdadeiro
// Cenário: Para entrar em uma excursão escolar, precisa ter 18 anos OU autorização dos pais.
let podeIrNaExcursao = (idadeAluno >= 18) || temAutorizacaoPais;
console.log("Pode ir na excursão? " + podeIrNaExcursao); // true (embora seja menor, os pais autorizaram)

// Teste do NÃO (!) -> Inverte o valor booleano
let ligado = true;
console.log("O inverso de ligado: " + !ligado); // false