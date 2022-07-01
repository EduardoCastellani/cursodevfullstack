let clientes = [
    {
        nome: 'Eduardo',
        idade: 24,
        linguagens: ['sql', 'javascrip', 'css', 'html']
    },
    {
    nome: 'fulano',
    idade: 22,
    linguagens: ['c#', 'c++', 'c']
    },
    {
        nome: 'ciclano',
        idade: 32,
        linguagens: ['go', 'closure', 'r']
    }
]

let htmlClientes = ''

for(let cliente of clientes) {

    let listalinguagens = ''

    for(let linguagem of cliente.linguagens) {
        listalinguagens += `<li>${linguagem}</li>`

    }


    htmlClientes += `
    <li>
        <b>Nome:</b> ${cliente.nome} <br>
        <b>Idade:</b>${cliente.idade} <br>
        <b>Linguagens</b><br>
        <ul>
            ${listalinguagens}
        </ul>
    </li>
  `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes
