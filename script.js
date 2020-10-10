document.addEventListener("DOMContentLoaded", res());
    
var pop = [];
pop[4300570] = "2.869"; pop[4301651] = "6.202"; pop[4302352] = "14.255"; pop[4302659] = "5.104"; pop[4304689] = "12.064"; pop[4308102] = 13.208; 
pop[4309555] = "4.917"; pop[4311643] = "1.719"; pop[4311791] = "2.702";pop[4312401] = "64.788"; pop[4314035] = "3.862"; pop[4316501] = "7.889"; 
pop[4318481] = "4.804"; pop[4319356] = "3.842"; pop[4319505] = "25.959"; pop[4319752] = "2.266"; pop[4322251] = "4.939"; pop[4322541] = "5.981";

function res() {
    var total = 0;
    var x = document.getElementById("select").value;
        const url = 'http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=202001&codigoIbge=' + x + '&pagina=1';
        var xhr = new XMLHttpRequest();
    
        xhr.open("GET", "https://cors-anywhere.herokuapp.com/" + url);
        xhr.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
        xhr.setRequestHeader("Accept", "*/*");
        xhr.send(null);
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(JSON.parse(xhr.responseText));
                document.getElementById('cidade').innerHTML = capitalizeFirstLetter(JSON.parse(xhr.responseText)['0']['municipio'].nomeIBGE);
                document.getElementById('mapasrc').src = "cidades/" + JSON.parse(xhr.responseText)['0'].id + ".png";
                document.getElementById('codigoIBGE').innerHTML = JSON.parse(xhr.responseText)['0']['municipio'].codigoIBGE;
                document.getElementById('populacao').innerHTML = pop[JSON.parse(xhr.responseText)['0']['municipio'].codigoIBGE] + " pessoas";
                document.getElementById('uf').innerHTML = capitalizeFirstLetter(JSON.parse(xhr.responseText)['0']['municipio']['uf'].nome);
                document.getElementById('pais').innerHTML = capitalizeFirstLetter(JSON.parse(xhr.responseText)['0']['municipio'].pais);
                document.getElementById('p1').innerHTML = JSON.parse(xhr.responseText)['0'].quantidadeBeneficiados;
                document.getElementById('v1').innerHTML = "R$ " + (JSON.parse(xhr.responseText)['0'].valor).toLocaleString('pt-BR') + ",00";
                total += parseInt(JSON.parse(xhr.responseText)['0'].valor);
            }
    
        }
        var x = document.getElementById("select").value;
        const url2 = 'http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=202002&codigoIbge=' + x + '&pagina=1';
        var xhr2 = new XMLHttpRequest();
    
        xhr2.open("GET", "https://cors-anywhere.herokuapp.com/" + url2);
        xhr2.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
        xhr2.setRequestHeader("Accept", "*/*");
        xhr2.send(null);
    
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4) {
                document.getElementById('p2').innerHTML = JSON.parse(xhr2.responseText)['0'].quantidadeBeneficiados;
                document.getElementById('v2').innerHTML = "R$ " + (JSON.parse(xhr2.responseText)['0'].valor).toLocaleString('pt-BR') + ",00";
                total += parseInt(JSON.parse(xhr2.responseText)['0'].valor);
            }
    
        }
    
        var x = document.getElementById("select").value;
        const url3 = 'http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=202003&codigoIbge=' + x + '&pagina=1';
        var xhr3 = new XMLHttpRequest();
    
        xhr3.open("GET", "https://cors-anywhere.herokuapp.com/" + url3);
        xhr3.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
        xhr3.setRequestHeader("Accept", "*/*");
        xhr3.send(null);
    
        xhr3.onreadystatechange = function () {
            if (xhr3.readyState === 4) {
                document.getElementById('p3').innerHTML = JSON.parse(xhr3.responseText)['0'].quantidadeBeneficiados;
                document.getElementById('v3').innerHTML = "R$ " + (JSON.parse(xhr3.responseText)['0'].valor).toLocaleString('pt-BR') + ",00";
                total += parseInt(JSON.parse(xhr3.responseText)['0'].valor);
            }
    
        }
    
        var x = document.getElementById("select").value;
        const url4 = 'http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=202004&codigoIbge=' + x + '&pagina=1';
        var xhr4 = new XMLHttpRequest();
    
        xhr4.open("GET", "https://cors-anywhere.herokuapp.com/" + url4);
        xhr4.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
        xhr4.setRequestHeader("Accept", "*/*");
        xhr4.send(null);
    
        xhr4.onreadystatechange = function () {
            if (xhr4.readyState === 4) {
                document.getElementById('p4').innerHTML = JSON.parse(xhr4.responseText)['0'].quantidadeBeneficiados;
                document.getElementById('v4').innerHTML = "R$ " + (JSON.parse(xhr4.responseText)['0'].valor).toLocaleString('pt-BR') + ",00";
                total += parseInt(JSON.parse(xhr4.responseText)['0'].valor);
            }
    
        }
    
        var x = document.getElementById("select").value;
        const url5 = 'http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=202005&codigoIbge=' + x + '&pagina=1';
        var xhr5 = new XMLHttpRequest();
    
        xhr5.open("GET", "https://cors-anywhere.herokuapp.com/" + url5);
        xhr5.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
        xhr5.setRequestHeader("Accept", "*/*");
        xhr5.send(null);
    
        xhr5.onreadystatechange = function () {
            if (xhr5.readyState === 4) {
                document.getElementById('p5').innerHTML = JSON.parse(xhr5.responseText)['0'].quantidadeBeneficiados;
                document.getElementById('v5').innerHTML = "R$ " + (JSON.parse(xhr5.responseText)['0'].valor).toLocaleString('pt-BR') + ",00";
                total += parseInt(JSON.parse(xhr5.responseText)['0'].valor);
            }
    
        }

        var x = document.getElementById("select").value;
        const url6 = 'http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=202006&codigoIbge=' + x + '&pagina=1';
        var xhr6 = new XMLHttpRequest();
    
        xhr6.open("GET", "https://cors-anywhere.herokuapp.com/" + url6);
        xhr6.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
        xhr6.setRequestHeader("Accept", "*/*");
        xhr6.send(null);
    
        xhr6.onreadystatechange = function () {
            if (xhr6.readyState === 4) {
                document.getElementById('p6').innerHTML = JSON.parse(xhr6.responseText)['0'].quantidadeBeneficiados;
                document.getElementById('v6').innerHTML = "R$ " + (JSON.parse(xhr6.responseText)['0'].valor).toLocaleString('pt-BR') + ",00";
                total += parseInt(JSON.parse(xhr6.responseText)['0'].valor);
                setTimeout(function() {
                    console.log(total);
                    document.getElementById('total').innerHTML = "R$ " + (total).toLocaleString('pt-BR') + ",00";
                    },500)
                console.log(total);
            }
        
        }
            
        
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
