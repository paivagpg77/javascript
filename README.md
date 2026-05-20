# JavaScript
Repositório oficial da disciplina de Programação Web. Conteúdos, exemplos e práticas de JavaScript voltados para o desenvolvimento front-end interativo.

---

# 🚀 Curso de Programação Web — Módulo JavaScript

Bem-vindo ao repositório oficial de conteúdos e práticas de **JavaScript** da disciplina de Programação Web. Este espaço foi projetado para centralizar os materiais de aula, exemplos práticos e desafios desenvolvidos para os alunos da **EEEP Comendador Miguel Gurgel**.

O objetivo deste módulo é transformar páginas estáticas (HTML/CSS) em aplicações web dinâmicas, interativas e inteligentes, utilizando o JavaScript como a camada de comportamento do ecossistema front-end.

---

## 🛠️ Configuração do Ambiente de Desenvolvimento

Para rodar os exemplos deste repositório e desenvolver suas próprias atividades, recomendamos a seguinte estrutura básica:

1.  **Editor de Código:** [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
2.  **Extensão Essencial:** **Live Server** (para simular um servidor local, evitando o protocolo `file:///` e prevenindo bloqueios de segurança do navegador).
3.  **Ambiente de Execução Rápida (Opcional):** Extensão **Code Runner** para testes lógicos diretos no terminal do editor.

### 🧭 Boas Práticas de Organização Comercial
Seguindo o padrão do mercado profissional, sempre separamos as responsabilidades do código em arquivos distintos:
* `index.html` (Estrutura)
* `estilo.css` (Design/Visual)
* `script.js` (Comportamento/Lógica) — *Sempre importado no final da tag `<body>` ou com o atributo `defer` no `<head>`.*

---

## 💻 Meu Primeiro "Olá, Mundo!"

O diretório principal contém o exemplo clássico de introdução para testar a integração das três tecnologias básicas da web:

```javascript
// script.js
console.log("Script carregado com sucesso!");

const botao = document.getElementById("botao-interagir");
const paragrafo = document.getElementById("mensagem-retorno");

botao.addEventListener("click", function() {
    alert("Olá, Mundo! Este é o meu primeiro script.");
    paragrafo.innerText = "🚀 O JavaScript modificou esta página em tempo real!";
});
