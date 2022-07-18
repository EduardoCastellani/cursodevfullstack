const clientes = [
    {name:'Fulano', lastname:'Da Silva', age: 14 },
    {name:'Ciclano', lastname:'Santos', age: 24 },
    {name:'Beltrano', lastname:'Moreira', age: 50 },
]

const clientesMaiores = clientes.filter (cliente =>  cliente.age >= 18 ? true : false)

console.log(clientesMaiores)