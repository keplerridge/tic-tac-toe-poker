console.log('The house always wins')

const cardId = document.getElementById('cardid');
const cardColor = document.getElementById('cardcolor');

console.log(cardId, cardColor);

function setCard(){
    const card = document.getElementById(cardId.value);
    console.log(card);
    const color = document.getElementById(cardColor.value);
    card.style.color = cardColor.value;
};

function reset(){
    let diamonds = document.getElementById('diamonds');
    let hearts = document.getElementById('hearts');
    let spades = document.getElementById('spades');
    let clubs = document.getElementById('clubs');

    diamonds.style.color = 'grey';
    hearts.style.color = 'grey';
    spades.style.color = 'grey';
    clubs.style.color = 'grey';
};
