let url = 'https://rickandmortyapi.com/api/character/';

let rickTag = document.createElement('img');
let mortyTag = document.createElement('img');

rickTag.src = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
mortyTag.src = 'https://rickandmortyapi.com/api/character/avatar/2.jpeg';

rickTag.className = 'rickClass';
mortyTag.className = 'mortyClass';

fetch(url)
    .then(response => {
        console.log(response);
        return response.blob();
    })
    .then(blob => {
        console.log(blob);
        document.body.appendChild(rickTag);
    }).then(blob => {
        console.log(blob);
        document.body.appendChild(mortyTag);
    });








/*

function(displayCharacters) {
    document.getElementById('imageId').src = rick;
    document.body.appendChild(rick);
    document.getElementById('imageId').src = morty;
    document.body.appendChild(morty);
};

displayCharacters();
/*

/*
function character() {
    let rick = new Image();
    let morty = new Image();
    rick.src = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
    document.body.appendChild(rick);
    morty.src = 'https://rickandmortyapi.com/api/character/avatar/2.jpeg';
    document.body.appendChild(morty);
    
};
*/