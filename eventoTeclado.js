// =========================================================================
// 1. SELEÇÃO DE ELEMENTOS DO DOM (MAPEAMENTO)
// =========================================================================
// O objeto global 'document' varre a árvore do DOM procurando as tags pelos seus IDs específicos.
// Cada elemento encontrado é armazenado em uma constante, servindo como uma "ponte" de controle.

// Seleciona a caixa de entrada de texto (<input>) onde o usuário vai digitar
const campo = document.getElementById("campo-texto");

// Seleciona a tag (geralmente um <span>) que vai exibir o número total de caracteres na tela
const totalCaracteres = document.getElementById("total-caracteres");

// Seleciona o bloco de div/p responsável por exibir os textos de alertas ou avisos do sistema
const alerta = document.getElementById("alerta-sistema");

// Seleciona o container visual que exibirá o caractere literal digitado (ex: 'A', 'Enter')
const dadoKey = document.getElementById("dado-key");

// Seleciona o container visual que exibirá o código físico da tecla no teclado (ex: 'KeyA')
const dadoCode = document.getElementById("dado-code");


// =========================================================================
// 2. FUNÇÃO AUXILIAR (ENCAPSULAMENTO DE COMPORTAMENTO REUTILIZÁVEL)
// =========================================================================
// Esta função recebe dois parâmetros (matérias-primas): o ID de um elemento do painel e uma classe CSS de cor.
// Seu objetivo é criar um efeito visual de pulso ("piscar") sem retorno de valor (um Procedimento).
function piscarMonitor(idIndicador, classeCor) {
    
    // Procura dinamicamente no DOM qual a caixinha do monitor lateral deve acender neste milissegundo
    const monitor = document.getElementById(idIndicador);
    
    // ENCADEAMENTO DE PROPRIEDADES: Acessa a lista de classes do elemento (classList) e injeta a classe de cor
    // Isso faz com que o CSS aplique instantaneamente a cor de fundo ativa (laranja ou roxa)
    monitor.classList.add(classeCor);
    
    // FUNÇÃO ASSÍNCRONA (setTimeout): Agenda uma ação para o futuro.
    // Ela recebe uma Arrow Function anônima como primeiro argumento e o tempo de espera como segundo (200ms).
    // Passados 200 milissegundos, o motor do JS executa internamente a Arrow Function, removendo a classe de cor.
    setTimeout(() => monitor.classList.remove(classeCor), 200);
}


// =========================================================================
// 3. APLICAÇÃO DOS EVENTOS DE TECLADO (INTERCEPTAÇÃO DE AÇÕES)
// =========================================================================

// -------------------------------------------------------------------------
// EVENTO 1: keydown (Gatilhador ativado no instante em que a tecla desce)
// -------------------------------------------------------------------------
// O método addEventListener adiciona um "ouvinte". Quando o evento 'keydown' acontece no 'campo',
// ele intercepta a ação e dispara uma Arrow Function. O parâmetro '(e)' carrega o objeto com os dados do evento.
campo.addEventListener("keydown", (e) => {
    
    // CHAMADA DE FUNÇÃO: Invoca a função auxiliar passando os argumentos de texto necessários.
    // Isso acende a luz indicadora do keydown no painel lateral.
    piscarMonitor("ind-keydown", "ativa-laranja");
    
    // OPERADOR TERNÁRIO (Condicional de uma linha): Avalia se a tecla pressionada foi a barra de espaço.
    // Se for verdade (?), atribui a string "Espaço". Se for falso (:), atribui a própria tecla literal digitada.
    // ENCADEAMENTO DE PROPRIEDADE: O resultado do ternário é injetado diretamente na propriedade 'innerText' do HTML.
    dadoKey.innerText = e.key === " " ? "Espaço" : e.key;
    
    // Copia o código de posicionamento físico da tecla (e.code) direto para a propriedade de texto do painel
    dadoCode.innerText = e.code;

    // REGRA DE NEGÓCIO: Estrutura condicional para validar o tipo de caractere inserido
    // Verifica textualmente se o caractere digitado está dentro do intervalo numérico de "0" a "9"
    if (e.key >= "0" && e.key <= "9") {
        
        // INTERCEPTAÇÃO E CANCELAMENTO: Interrompe o comportamento padrão do navegador para este evento.
        // O efeito colateral é que o caractere numérico é bloqueado e não chega a aparecer dentro da caixa de texto.
        e.preventDefault(); 
        
        // Customização dinâmica do alerta: altera o texto e altera propriedades de estilo CSS via JavaScript (.style)
        alerta.innerText = "Aviso: Números não são permitidos aqui! 🛑";
        alerta.style.borderColor = "#e74c3c"; // Altera a borda para vermelho
        alerta.style.color = "#e74c3c";       // Altera o texto para vermelho
        
    } else {
        // Fluxo executado caso o usuário tenha digitado qualquer caractere válido (letras, símbolos, espaço...)
        alerta.innerText = "Status: Digitador ativo...";
        alerta.style.borderColor = "#2ecc71"; // Altera a borda para verde
        alerta.style.color = "#2c3e50";       // Altera o texto para o cinza escuro padrão
    }
});

// -------------------------------------------------------------------------
// EVENTO 2: keyup (Gatilhador ativado no instante em que o usuário solta a tecla)
// -------------------------------------------------------------------------
// Adiciona outro ouvinte ao mesmo campo de texto, mas monitorando a fase de subida/finalização da digitação.
campo.addEventListener("keyup", () => {
    
    // CHAMADA DE FUNÇÃO: Invoca a função auxiliar para fazer o indicador lateral do keyup piscar em roxo
    piscarMonitor("ind-keyup", "ativa-roxa");
    
    // ENCADEAMENTO DE PROPRIEDADES: 
    // 1. Acessa a propriedade 'value' (o texto atual contido dentro do input)
    // 2. Acessa a propriedade '.length' do texto, que retorna o número inteiro correspondente ao tamanho da string
    let comprimentoTexto = campo.value.length;
    
    // Injeta o número calculado diretamente no elemento visual da tela, atualizando o contador em tempo real
    totalCaracteres.innerText = comprimentoTexto;
});