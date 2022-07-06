// SELETOR POR ID -- '#'
document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>'


// SELETOR POR TAG  - ''
document.querySelector('a').innerText = '<b>teste ancora</b>'

// SELETOR DE VÁRIOS ITENS POR TAG

let aconras = document.querySelectorAll('a') // função anonima / callback

let teste = ['a', 'b', 'c']

teste.forEach(function(elemento){
    elemento.innerHTML = 'teste'
})

// SELETOR DE VARIOS INTENS POR CLASSES
let boxes = document.querySelectorAll('.box')


let count = 0
boxes.forEach(function(box, index){
    count++ 
    box.innerHTML = 'box' + (index + 1)
})
