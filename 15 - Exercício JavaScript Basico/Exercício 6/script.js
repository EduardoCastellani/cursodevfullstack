let listaAtores = [
   {
      nome: 'Keanu Reeves',
      personagem: 'Neo',
      filme: 'The Matrix',
   },
   {
      nome: 'David Prowse',
      personagem: 'Darth Vader',
      filme: 'Star Wars Episódio IV-VI',
   },
   {
      nome: 'Bruce Wayne',
      personagem: 'Batman',
      filme: 'Batman - Beggins',
   },
]



let box = ''
for(ator of listaAtores) {

   box += `
<ul>
<h1>${ator.nome}</h1>
<p>Interpreta o personagem ${ator.personagem} no filme ${ator.filme}</p>
</ul>
`


}


document.querySelector('#atores').innerHTML = box


/*<li>
<h1>${listaAtores.nome}</h1>
<h3>Interpreta o personagem ${listaAtores.personagem} no filme ${listaAtores.filme}</h3>
</li>
*/