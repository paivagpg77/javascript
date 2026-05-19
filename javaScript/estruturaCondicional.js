// ==========================================
// 1. EXEMPLO: IF / ELSE IF / ELSE (Sistema de Notas)
// ==========================================
console.log("--- Testando If / Else ---");
let mediaAluno = 6.5;
if (mediaAluno >= 7) {
    console.log("Situação: Aluno Aprovado! 🎉");
} else if (mediaAluno >= 5 && mediaAluno < 7) {
    console.log("Situação: Aluno em Recuperação. 📚");
} else {
    console.log("Situação: Aluno Reprovado. ❌");
}


// ==========================================
// 2. EXEMPLO: SWITCH (Menu de Opções)
// ==========================================
console.log("--- Testando Switch ---");
let opcaoMenu = 2;
switch (opcaoMenu) {
    case 1:
        console.log("Menu selecionado: Ver Perfil do Usuário.");
        break;
    case 2:
        console.log("Menu selecionado: Abrir Configurações do Sistema.");
        break;
    case 3:
        console.log("Menu selecionado: Sair da Conta.");
        break;
    default:
        console.log("Opção inválida! Tente novamente.");
        break; // Opcional no default, mas bom por costume
}


// ==========================================
// 3. EXEMPLO: IF TERNÁRIO (Verificação Rápida)
// ==========================================
console.log("--- Testando If Ternário ---");
let idadeUsuario = 19;
// If/Else Tradicional ocuparia 5 linhas. Com o Ternário fazemos em 1:
let statusMaioridade = (idadeUsuario >= 18) ? "Maior de idade" : "Menor de idade";

console.log(`O usuário com ${idadeUsuario} anos é considerado: ${statusMaioridade}`);