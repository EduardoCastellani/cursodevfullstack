/*

Hoisting - comportamento padrão do JS de mover as declarações para o topo de um escopo

*/

function teste() {
    
    function outrafuncao() {
        console.log('ok sou a outra função')
    }
    
    outrafuncao()
}

teste()
