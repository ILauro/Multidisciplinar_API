document.addEventListener("DOMContentLoaded", function(event) {
    const url = 'http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=202006&codigoIbge=4312401&pagina=1';
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url);
    xhr.setRequestHeader("chave-api-dados", "3ba770070f17c5875f2755bdfd2cff7a");
    xhr.setRequestHeader("Accept", '*/*');
    xhr.send(null);
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
           console.log(JSON.parse(xhr.responseText));
            }
        }
    
    });


    
document.getElementById("bt").addEventListener("click", function() {
    const url = 'http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=202006&codigoIbge=4312401&pagina=1';
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url);
    xhr.setRequestHeader("chave-api-dados", "3ba770070f17c5875f2755bdfd2cff7a");
    xhr.setRequestHeader("Accept", '*/*');
    xhr.send(null);
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
           console.log(JSON.parse(xhr.responseText));
            }
        }
});

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }
