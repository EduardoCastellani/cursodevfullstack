

let contador = document.querySelector('#contador')

let count = 0

let interval = setInterval(function(){
    count++
    contador.innerText = count
}, 1000)


let botaoPausar = document.querySelector('#botaoPausar')

botaoPausar.onclick = function(){
    clearInterval(interval)
}