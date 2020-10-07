document.addEventListener("DOMContentLoaded", function(event) {

var xhr = new XMLHttpRequest();
xhr.open("GET","https://covid19-brazil-api.now.sh/api/report/v1/countries");
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText)
        );
    }
}


});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
