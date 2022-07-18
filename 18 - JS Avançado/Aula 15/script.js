/*

Destructurin assignment

*/

const obj = {
    nome: 'Fulano',
    idade: 35,
}

const {nome, idade} = obj
console.log()


function transformarEmJson (response) {
    return response.json()
}

function exibirNaTela(dados) {
    console.log(dados)
}

function exibirErro() {
    console.log('Erro')
}


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick= aoClicarNoBotao

async function aoClicarNoBotao () {
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(transformarEmJson)
    .catch(exibirErro)

    const {name, email, phone} = dados
    console.log(name, email, phone)
}







