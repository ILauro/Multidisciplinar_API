document.addEventListener("DOMContentLoaded", function(event) {
    const url = "";
    fetch(url)
    .then(response => response.json())
    .then(info => {
        
    })
    
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

