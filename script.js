document.addEventListener("DOMContentLoaded", function(event) {

var data = new XMLHttpRequest();
data.open("GET","http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=202006&codigoIbge=%094312401&pagina=1");
data.send(null);

data.onreadystatechange = function() {
    if(data.readyState === 4){
        console.log(JSON.parse(data.responseText)
        );
    }
}


});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
