let listaDeNumerosSorteados
let numeroLimete =10;
let numeroSecreto = gerasNumeroAlatorio();
let tentativas =1;

function exibirTextoNATela(tag, texto){
let campo = document.querySelector(tag) 
campo.innerHTML =texto



function exibirMensagemInisial() {
    exibirTextoNATela('h1', 'Jogo do número secreto')
    exibirTextoNATela('p', 'Escolha um número entre 1 e 10')
}
function verificarChute() { 
    let chute = document.querySelector('input').value
}

    if (Chute == numeroSecreto) {
         exibirTextoNATela('h1', 'Acertou!')
        let mansagemTemtativas = 'Vecê descobriu o número secreto com 5 tentativas'
         exibirTextoNATela('p', 'Você descobriu o número secreto!')
        } else {
            if (Chute > numeroSecreto) {
                 exibirTextoNATela('p', 'O número secreto e menor');
    } elce {         
                }            exibirTextoNATela('p', 'O número secreto e maior')
            }

function gerasNumeroAlatorio() {                                                                       
return parseInt(Math.ramdow() * 10 + 1);
}