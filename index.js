
// Player Object
const playerFactory = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return {name, marker, getName, getMarker}
}

// Gameboard Object
const gameBoard = (() => {
    //generate board array
    let boardArray = [];
    for (let i = 0; i < 9; i++) {
        boardArray.push('');
    }

    //display square for each array item
    let gameboardContainer = document.querySelector('.gameboardContainer');

    
    boardArray.forEach((square) => {
        const squareDiv = document.createElement('div');
        squareDiv.className = 'square';
        gameboardContainer.appendChild(squareDiv);
    });

})();