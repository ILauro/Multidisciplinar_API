document.addEventListener("DOMContentLoaded", function(event) {
    let pokemon = Math.floor(Math.random() * 151);
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
    fetch(url)
    .then(response => response.json())
    .then(personagem => {
        console.log(personagem);
        document.querySelector(".nome").innerHTML  = capitalizeFirstLetter(personagem.name);
        document.querySelector('img').src= personagem.sprites['other']['official-artwork'].front_default;
        document.querySelector('.id').innerHTML = "Id: " + personagem.id;
        document.querySelector('.statsInfo').innerHTML = "HP: " + personagem.stats['0'].base_stat + "<br>Ataque: " + personagem.stats['1'].base_stat + "<br>Defesa: " + personagem.stats['2'].base_stat; 
        if(personagem.types['length'] == "1"){
            document.querySelector(".type").innerHTML  = "Tipo: " + capitalizeFirstLetter(personagem.types['0']['type'].name);
        } else {
            document.querySelector(".type").innerHTML  = "Tipo: " + capitalizeFirstLetter(personagem.types['0']['type'].name) + " e " + capitalizeFirstLetter(personagem.types['1']['type'].name);
        }
        console.log("// Alterações: Fonte, Imagem, Novos campos, verificação de um ou dois tipos, primeira letra maiúscula por função //")
        
        
    })
    
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
