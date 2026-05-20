// 1. Selecionamos os elementos que vão sofrer a interação
const botao = document.getElementById("meu-botao");
const caixa = document.getElementById("caixa");
// 2. Ouvindo o evento de CLIQUE (click)
botao.addEventListener("click", () => {
    alert("Você disparou o evento de CLIQUE! ⚡");
});
// 3. Ouvindo o evento do MOUSE ENTRAR (mouseenter)
caixa.addEventListener("mouseenter", () => {
    caixa.style.backgroundColor = "#2ecc71"; // Muda para verde
    caixa.innerText = "Entrou!";
});
// 4. Ouvindo o evento do MOUSE SAIR (mouseleave)
caixa.addEventListener("mouseleave", () => {
    caixa.style.backgroundColor = "lightgray"; // Volta para o cinza padrão
    caixa.innerText = "Passe o mouse aqui";
});
