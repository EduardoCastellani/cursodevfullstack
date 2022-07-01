

let opcoes

for (let contador = 1900; contador <= 2023; contador++) {
    opcoes += `<option>${contador}<option>`
}

document.querySelector('#ano').innerHTML = opcoes


let lista = ''

let clientes = ['fulano','beltrano','ciclano','sla irmao se vira ai']

for (let contador = 0; contador <= clientes.length - 1; contador++) {
    lista += `<li>${clientes[contador]} - ${contador}<li>`

}

document.querySelector('#listaClientes').innerHTML = lista