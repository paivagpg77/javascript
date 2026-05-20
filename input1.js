const inputNome = document.getElementById("nome-usuario");
const espelhoNome = document.getElementById("nome-cartao");
inputNome.addEventListener("input", () => {
    if (inputNome.value === "") {
        espelhoNome.innerText = "NOME DO TITULAR";
    } else {
        espelhoNome.innerText = inputNome.value;
    }
});
