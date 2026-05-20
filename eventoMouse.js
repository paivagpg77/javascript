// 1. Seleção dos elementos principais da Área de Testes
const zona = document.getElementById("zona-teste");
const textoPrincipal = document.getElementById("texto-principal");
const coordenadas = document.getElementById("coordenadas");

// 2. Função auxiliar para dar o efeito de "piscar" nos monitores laterais
function piscarIndicador(idIndicador, classeCor) {
    const indicador = document.getElementById(idIndicador);
    indicador.classList.add(classeCor);
    
    // Remove a cor após 300 milissegundos para criar o efeito de pulso/piscar
    setTimeout(() => {
        indicador.classList.remove(classeCor);
    }, 300);
}

// =======================================================
// APLICAÇÃO DOS 7 EVENTOS DE MOUSE + MOUSELEAVE
// =======================================================

// EVENTO 1: mouseenter (Quando o ponteiro entra na caixa)
zona.addEventListener("mouseenter", () => {
    zona.style.backgroundColor = "#2980b9"; // Muda para Azul metálico
    textoPrincipal.innerText = "Mouse Entrou! 🔵";
    piscarIndicador("ind-mouseenter", "ativa-azul");
});

// EVENTO 2: mousemove (Dispara continuamente ao mover o ponteiro interno)
zona.addEventListener("mousemove", (e) => {
    // e.offsetX e e.offsetY capturam as coordenadas internas do elemento
    coordenadas.innerText = `X: ${e.offsetX}px | Y: ${e.offsetY}px`;
    piscarIndicador("ind-mousemove", "ativa-verde");
});

// EVENTO 3: mousedown (O instante em que o botão físico é APERTADO)
zona.addEventListener("mousedown", () => {
    zona.style.transform = "scale(0.96)"; // Efeito visual de compressão
    textoPrincipal.innerText = "Botão Pressionado! ✊";
    piscarIndicador("ind-mousedown", "ativa-laranja");
});

// EVENTO 4: mouseup (O instante em que o botão físico é SOLTO)
zona.addEventListener("mouseup", () => {
    zona.style.transform = "scale(1)"; // Retorna ao tamanho normal
    textoPrincipal.innerText = "Botão Solto! 👋";
    piscarIndicador("ind-mouseup", "ativa-laranja");
});

// EVENTO 5: click (O ciclo completo: apertar e soltar o botão esquerdo)
zona.addEventListener("click", () => {
    textoPrincipal.innerText = "Clique Simples Detectado! ⚡";
    piscarIndicador("ind-click", "ativa-vermelha");
});
// EVENTO 6: dblclick (Duplo clique rápido com o botão esquerdo)
zona.addEventListener("dblclick", () => {
    zona.style.backgroundColor = "#27ae60"; // Muda temporariamente para Verde
    textoPrincipal.innerText = "Duplo Clique Realizado! 🟢";
    piscarIndicador("ind-dblclick", "ativa-roxa");
});
// EVENTO 7: contextmenu (Clique com o botão direito do mouse)
zona.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // CANCELA o menu nativo cinza do navegador 
    textoPrincipal.innerText = "Menu de Contexto (Botão Direito)! ⚠️";
    piscarIndicador("ind-contextmenu", "ativa-vermelha");
});

// EVENTO EXTRA: mouseleave (Quando o mouse sai do elemento)
zona.addEventListener("mouseleave", () => {
    zona.style.backgroundColor = "#34495e"; // Restaura a cor cinza original
    textoPrincipal.innerText = "Passe o mouse aqui";
    coordenadas.innerText = "Mova o mouse para ler a posição";
    piscarIndicador("ind-mouseleave", "ativa-azul");
});