/*

AJAX - 2005

Asynchronous JavaScript and XML

*/


const xhttp = new XMLHttpRequest ()

xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200)
    console.log(JSON.parse(this.responseText))
}

xhttp.open ('GET', 'https://jsonplaceholder.typicode.com/photos', true)
xhttp.send()


