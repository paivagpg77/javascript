// 1. Mensagem clássica oculta no console (para o programador ver)
console.log("Olá, mundo! O arquivo script.js foi carregado com sucesso.");
// 2. Selecionando os elementos da árvore do DOM
const botao = document.getElementById("botao-interagir");
const paragrafoMensagem = document.getElementById("mensagem-retorno");
// 3. Criando a função que será executada quando o botão for clicado
botao.addEventListener("click", function() {    
    // Dispara a janelinha de alerta tradicional
    alert("Olá, Mundo! Esse é o meu primeiro script.");    
    // Altera o conteúdo do parágrafo dinamicamente via DOM
    paragrafoMensagem.innerText = "🚀 O JavaScript modificou esta página em tempo real!";   
});