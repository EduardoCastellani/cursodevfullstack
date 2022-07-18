/*

ASYNC / AWAIT

*/

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
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos', configs)
    .then(transformarEmJson)
    .catch(exibirErro)

    console.log(dados)

}







