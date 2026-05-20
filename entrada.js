let nomeAluno = prompt("Qual é o nome do aluno?");
let nota1 = prompt(`Digite a primeira nota do ${nomeAluno}:`);
let nota2 = prompt(`Digite a segunda nota do ${nomeAluno}:`);
let n1Convertida = Number(nota1);
let n2Convertida = Number(nota2);
let media = (n1Convertida + n2Convertida) / 2;
if (media >= 7) {
    alert(`Parabéns! ${nomeAluno} foi aprovado com média ${media}!`);
} else if (media >=5 && media<7) {
    alert(`Aluno ${nomeAluno} em Recuperação!`);
    let nota1recuperacao = prompt(`Digite a nota da recuperação do aluno ${nomeAluno}:`);
    //CONVERSÃO DA NOTA
    let RecupConvertida1 = Number(nota1recuperacao);
    if (RecupConvertida1 > 7){
        alert(`Aluno ${nomeAluno} aprovado na recuperação`);
    }
    else {
        alert(`Aluno ${nomeAluno} reprovado na recuperação`);
    }
    let desejaContinuar1 = confirm("Deseja realizar o cálculo para outro aluno?:");
    if (desejaContinuar){
        console.log("O usuário escolheu continuar o sistema.");

    } else{
        console.log("O usuário encerrou as consultas.");
    }
} else {
    alert(`Aluno ${nomeAluno} está Reprovado`);
}
let desejaContinuar = confirm("Deseja realizar o cálculo para outro aluno?");
if (desejaContinuar) {
    console.log("O usuário escolheu continuar o sistema.");
} else {
    console.log("O usuário encerrou as consultas.");
}
