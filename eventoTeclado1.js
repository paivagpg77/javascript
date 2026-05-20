const campo = document.getElementById("campo-texto");
const totalCaracteres = document.getElementById("total-caracteres");
const alerta = document.getElementById("alerta-sistema");
const dadoKey = document.getElementById("dado-key");
const dadoCode = document.getElementById("dado-code");

function piscarMonitor(idIndicador, classeCor) {
    const monitor = document.getElementById(idIndicador);
    monitor.classList.add(classeCor);
    setTimeout(() => monitor.classList.remove(classeCor), 200);
}

campo.addEventListener("keydown", (e) => {
    piscarMonitor("ind-keydown", "ativa-laranja");
    
    dadoKey.innerText = e.key === " " ? "Espaço" : e.key;
    dadoCode.innerText = e.code;

    if (e.key >= "0" && e.key <= "9") {
        e.preventDefault(); 
        alerta.innerText = "Aviso: Números não são permitidos aqui! 🛑";
        alerta.style.borderColor = "#e74c3c";
        alerta.style.color = "#e74c3c";
    } else {
        alerta.innerText = "Status: Digitador ativo...";
        alerta.style.borderColor = "#2ecc71";
        alerta.style.color = "#2c3e50";
    }
});

campo.addEventListener("keyup", () => {
    piscarMonitor("ind-keyup", "ativa-roxa");
    
    let comprimentoTexto = campo.value.length;
    totalCaracteres.innerText = comprimentoTexto;
});