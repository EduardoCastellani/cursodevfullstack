/*

Json

JS Object Notation

*/

const objeto = {
    nome: 'fulano',
    idade: 23,
}

const json = JSON.stringify(objeto)

const jsonParceado = JSON.parse(json)


console.log(jsonParceado)