document.addEventListener("DOMContentLoaded", function(event) {

 fetch("https://covid19-brazil-api.now.sh/api/report/v1/countries", {
  "method": "GET"
})
.then(response => console.log(response))
.then(body => console.log(body))
.catch(err => console.error(err));


});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
