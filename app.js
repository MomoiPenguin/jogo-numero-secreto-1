alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e " + numeroMaximo + '.');

//se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break;
    } else {

        if (numeroSecreto > chute) {
            alert("É um número maior que " + chute + ".");
        } else {
            alert("É um número menor que " + chute + ".");
        }

        tentativas++;

    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert("Boa! Você acertou o número secreto " + numeroSecreto + " com " + tentativas + '\ ' + palavraTentativa + '.');