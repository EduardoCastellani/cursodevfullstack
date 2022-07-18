/*

GLOBAL 
LOCAL

O ESCOPO determina a visibilidade de uma variável

As Funções nos js criam o seu próprio escopo
    As variavei de uma função não são acessiveis fora dela


*/

function teste() {
    let a = 123
}

teste()

console.log(a)