/*

FETCH

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

const configs = {
    method: 'POST',
    headers: {}
}

botaoCarregar.onclick = () => 
fetch('https://jsonplaceholder.typicode.com/photos', configs)
    .then(transformarEmJson)
    .then(exibirNaTela)
    .catch(exibirErro)



/*
function fetch (url, method) {
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
        
        xhttp.open (method, url, true)
        xhttp.send()

    })

}

*/




