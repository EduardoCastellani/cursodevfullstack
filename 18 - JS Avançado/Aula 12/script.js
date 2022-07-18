/*

PROMISES

*/

function exibirNaTela(dados) {
    console.log(dados)
}

function exibirErro() {
    console.log('Erro')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => 
carregarFoto()
    .then(exibirNaTela)
    .catch(exibirErro)

function carregarFoto() {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest ()
        
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
            const response = JSON.parse(this.responseText)   

            resolve(response)
            }

            if (this.status === 404) {
                reject()
            }
        }
        
        xhttp.open ('GET', 'https://jsonplaceholder.typicode.com/photos', true)
        xhttp.send()

    })

}




