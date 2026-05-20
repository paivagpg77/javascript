// 1. Selecionamos quem recebe a digitação (o input) e quem exibe o resultado (o cartão)
const inputNome = document.getElementById("nome-usuario");
const espelhoNome = document.getElementById("nome-cartao");

// 2. Ouvimos o evento 'input'. Ele roda a cada micro-mudança no campo
inputNome.addEventListener("input", () => {
    // Se o usuário apagar tudo e o campo ficar vazio, exibimos o texto padrão
    if (inputNome.value === "") {
        espelhoNome.innerText = "NOME DO TITULAR";
    } else {
        // Senão, o texto do cartão vira exatamente o valor atual do input
        espelhoNome.innerText = inputNome.value;
    }
});