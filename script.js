document.addEventListener("DOMContentLoaded", function(event) {
    const url = 'http://www.portaltransparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=07%2F2020&codigoIbge=4308102&pagina=1 ';
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://cors-anywhere.herokuapp.com/%22+url);
    xhr.setRequestHeader("chave-api-dados", "3ba770070f17c5875f2755bdfd2cff7a");
    xhr.setRequestHeader("Accept", "/");
    xhr.send(null);
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
           console.log(JSON.parse(xhr.responseText));
    
            }
        }
    
    });

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
