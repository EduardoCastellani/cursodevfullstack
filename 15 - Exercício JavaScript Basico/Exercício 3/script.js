 
 function botao() {
   let nome = prompt('Digite seu nome')

   let idade = prompt('Digite sua Idade')

   if (nome === 'eu' || nome === 'Eu', idade >= 18 ) {
     document.write (`<h1>Olá ${nome}, você é maior de Idade!<h1> <h2>Você é personagem do filme The Matrix<h2>`)
   }
   
   else if (idade >= 18) {
      document.write (`<h1>Olá ${nome}, você é maior de Idade!<h1>`)
   } 
   else if (idade <=17) {
      document.write (`<h1>Olá ${nome}, você é menor de Idade!<h1>`)
   
      
   }
   return idade, nome
   
}



 