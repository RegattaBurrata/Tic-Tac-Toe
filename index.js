
// Player Object
const playerFactory = (name, marker) => {
    const name = () => name;
    const marker = () => marker;
    return {name, marker}
}

// Gameboard Object
const gameBoard = (() => {
    //generate board array
    let boardArray = [];
    for (let i = 0; i < 9; i++) {
        board.push('');
    }
    //display square for each array item
    let gameboardContainer = document.querySelector('.gameboardContainer');

    const square = document.createElement('div');
    square.className = 'square';
    boardArray.forEach((board) => {

    })

})();