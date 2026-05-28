let menu;
while (menu !== 0 ){

    menu = prompt(
        "Bem vindo ao Hotel! \n Para Reserva um quarto Digite 1 \n Para Cadastrar Hospede digite 2 \n0 - Sair"
    );

    function validarCpf(cpf){

        if (String(cpf).length <= 11) return true;
        else return false;
    }

    function validarIdade(idade){

        if (idade >= 18) return true;
        else return false;
    }

    function pagamento(total){

        let opcaopag = Number(prompt(
            "Digite o Método de pagamento \n1- PIX, DINHEIRO ou DÉBITO \n2- CARTÃO DE CRÉDITO"
        ));      

        if (opcaopag == 1){
            total = total - (total * 0.05);
        }
        else if (opcaopag == 2){
            total = total + (total * 0.10);
        }

        alert("Valor Total do pagamento: R$ " + total);
    }

    function cadastrarQuarto(){

        let diaria  = Number(prompt("Digite o dia de Diarias: "));
        let quarto = Number(prompt("1- QUARTO DE SOLTEIRO \n2- QUARTO DE CASAL"));
        let fds = Number(prompt("É reserva no fim de semana? \n1-Sim \n2-Não"));

        let total = 0;

        if (diaria < 3){
            total = 150 * diaria;
        }
        else if (diaria === 3){
            total = 150 * diaria;
            total = total - (total * 10 / 100);
        }
        else if (diaria > 3 && diaria < 7){
            total = 150 * diaria;
        }
        else if (diaria >= 7){
            total = 850;
        }

        if (fds === 1){
            total += 650;
        }

        if (quarto === 2){
            total += 50;
        }

        alert("Valor total da reserva: R$ " + total);
        pagamento(total);
    }

    function cadastrarHospede(){

        let nome = prompt("Digite o seu nome: ");
        let telefone = prompt("Digite o seu número: ");
        let cpf = prompt("Digite o CPF: ");
        let idade = Number(prompt("Digite a sua IDADE"));

        if (!validarIdade(idade)){
            alert("Cadastro não permitido");
            return;
        }

        if (!validarCpf(cpf)){
            alert("CPF inválido");
            return;
        }

        alert("Cadastro realizado com sucesso!");

        cadastrarQuarto();
    }

    switch(menu){

        case "2":
            cadastrarHospede();
            break;

        case "1":
            cadastrarQuarto();
            break;

        case "0":
            alert("Saindo");
            break;

        default:
            alert("Opção inválida");
    }
}