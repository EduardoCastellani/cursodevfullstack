/*

Arrow Functions 
ES6

As funções de seta permitem escreber uma sintaxe de função mais curta

*/

const soma = (param1, param2) => param1 + param2

const resultado = soma (11, 2)

console.log(resultado)

// quando tem 1 parametro pode remover os parenteses
const teste = param1 => param1

console.log(teste('ok'))


const botao = document.querySelector('#botao')

botao.onclick = () => {
    console.log(this)
}