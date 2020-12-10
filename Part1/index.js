
const board = document.getElementsByTagName('td');

let playTracker = [];

board.addEventListener =('onclick', play());

function play(clickedId){
    const playersTurn = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    if(clickedElement === null){
        return;
    };

    if(playersTurn.innerText !== 'X'){
        playersTurn.innerText = 'X';
        clickedElement.innerText = 'O';
        playTracker[clickedId] = 'O';
    } else {
        playersTurn.innerText = 'O';
        clickedElement.innerText = 'X';
        playTracker[clickedId] = 'X';
    } console.log(playTracker); console.log(playTracker.length)

    let topLeft = playTracker[0];
    let topCenter = playTracker[1];
    let topRight = playTracker[2];

    let middleLeft = playTracker[3];
    let middleCenter = playTracker[4];
    let middleRight = playTracker[5];

    let bottomLeft = playTracker[6];
    let bottomCenter = playTracker[7];
    let bottomRight = playTracker[8];

    if((topLeft === topCenter && topCenter === topRight && topLeft) || (topLeft === middleLeft && middleLeft === bottomLeft && bottomLeft) || (topLeft === middleCenter && middleCenter === bottomRight && bottomRight)) {
        window.alert(`${clickedElement.innerText}s is the winner!`)
    } else if (topCenter === middleCenter && middleCenter === bottomCenter && bottomCenter) {
        window.alert(`${clickedElement.innerText}s is the winner!`)
    } else if ((topRight === middleRight && middleRight === bottomRight && bottomRight) || (topRight === middleCenter && middleCenter === bottomLeft && bottomLeft)){
        window.alert(`${clickedElement.innerText}s is the winner!`)
    } else if (middleLeft === middleCenter && middleCenter === middleRight && middleRight) {
        window.alert(`${clickedElement.innerText}s is the winner!`)
    } else if (bottomLeft === bottomCenter && bottomCenter === bottomRight && bottomRight){
        window.alert(`${clickedElement.innerText}s is the winner!`)
    } else if (topLeft && topCenter && topRight && middleLeft && middleCenter && middleRight && bottomLeft && bottomCenter && bottomRight) {
        window.alert('CATS GAME AND CATS SUCK');
    }
};

