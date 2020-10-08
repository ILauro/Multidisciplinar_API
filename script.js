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


    
function res() {
    const url = 'http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=202006&codigoIbge=' + document.getElementById("select").value + '&pagina=1';
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url);
    xhr.setRequestHeader("chave-api-dados", "3ba770070f17c5875f2755bdfd2cff7a");
    xhr.setRequestHeader("Accept", '*/*');
    xhr.send(null);
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            document.getElementById('bt').innerHTML = JSON.parse(xhr.responseText)['0']['municipio'].nomeIBGE;
            }
        }
};



// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function date(int, string) {
    const url = 'http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=2020' + int +'&codigoIbge=' + string + '&pagina=1';
    
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

}

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }
