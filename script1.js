const escola = "EEEP Miguel Gurgel"; // Não muda nunca
let nomeAluno = "Maria Souza";        // Pode mudar
let idade = 16;                       // O JS já sabe que é um Number
// escola = "Outra Escola"; // Se descommentar esta linha, dará erro!
let matriculaAtiva = true;   // Boolean
let telefone = null;         // Null (explicitamente vazio por enquanto)
let notaFinal;               // Undefined (criada, mas sem valor atribuído)
console.log("--- Teste de Tipos ---");
console.log(typeof escola);         // Imprime: string
console.log(typeof idade);          // Imprime: number
console.log(typeof matriculaAtiva); // Imprime: boolean
console.log(typeof notaFinal);      // Imprime: undefined
console.log("--- Manipulação de Textos ---");
let mensagemAntiga = "O aluno " + nomeAluno + " estuda na " + escola + " e tem " + idade + " anos.";
console.log(mensagemAntiga);
let mensagemModerna = `O aluno ${nomeAluno} estuda na ${escola} e tem ${idade} anos.`;
console.log(mensagemModerna);
let exibicaoPlacar = `
   === STATUS DO ALUNO ===
   Nome: ${nomeAluno}
   Daqui a 5 anos ele terá: ${idade + 5} anos.
`;
console.log(exibicaoPlacar);
