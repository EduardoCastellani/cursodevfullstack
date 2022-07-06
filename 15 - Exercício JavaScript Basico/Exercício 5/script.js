let lista = ''
let numero = prompt('Digite a tabuada que queira saber')


for (let contador = 1; contador <= 10; contador++) {
   lista += `<li>${numero} x ${contador} = ${numero * contador}<li>`;
}
document.querySelector('#tabuada').innerHTML = lista