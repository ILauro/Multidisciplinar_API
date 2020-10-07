document.addEventListener("DOMContentLoaded", function(event) {

var data = new XMLHttpRequest();
data.open("GET","https://covid19-brazil-api.now.sh/api/report/v1/countries");
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
