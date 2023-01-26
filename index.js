
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

    //generate game counter
    let gameCounter = 0;

    //add labels
    const playerOneLabel = document.querySelector('.player-one');
    const playerTwoLabel = document.querySelector('.player-two');

    playerOneLabel.classList.add('highlight-one');


    //add Event listeners
    Array.from(gameboardContainer.children).forEach((square, index) => {
        square.addEventListener('click', () => {
            //add X or O to display
            square.classList.add(game.activePlayer.marker);
            square.style.pointerEvents = 'none';

            //update game array
            boardArray[index] = game.activePlayer.marker;
            console.log(gameBoard.boardArray);

            //update game counter
            gameCounter = gameCounter + 1;
            if (gameCounter > 8) {
                game.declareDraw();
            }
            
            //check if there is a winner
            game.checkWinner();
            
            //change active player i.e. change turns
            
            if (game.activePlayer == game.playerOne && gameCounter < 9 && game.winnerExists.value === false) {
                game.activePlayer = game.playerTwo
                playerTwoLabel.classList.add('highlight-two');
                playerOneLabel.classList.remove('highlight-one');
            } else if (game.activePlayer ==  game.playerTwo && gameCounter < 9 && game.winnerExists.value === false){
                game.activePlayer = game.playerOne
                playerOneLabel.classList.add('highlight-one');
                playerTwoLabel.classList.remove('highlight-two');
            } else {
                playerOneLabel.classList.remove('highlight-one');
                playerTwoLabel.classList.remove('highlight-two');
                game.endGame();
            }
        })
    })

    return {boardArray, gameCounter}
})();

const game = (() => {

    //declare players
    const playerOne = playerFactory('Player One', 'x');
    const playerTwo = playerFactory('Player Two', 'o');

    const scorebug = document.querySelector('.score')
    let gameboardContainer = document.querySelector('.gameboardContainer');
    const playerOneLabel = document.querySelector('.player-one');
    const playerTwoLabel = document.querySelector('.player-two');
    
    //Turns
    let activePlayer = playerOne;

    //define winning axes
    const winningAxes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    let winnerExists = { value: false};

    //check winner
    function checkWinner() {
        winningAxes.forEach((item) => {
            if (gameBoard.boardArray[item[0]] === this.activePlayer.marker && gameBoard.boardArray[item[1]] === this.activePlayer.marker && gameBoard.boardArray[item[2]] === this.activePlayer.marker) {
                declareWinner(this.activePlayer.name);
                winnerExists = true;
                console.log(winnerExists);
                gameBoard.boardArray = [];
                for (let i = 0; i < 9; i++) {
                    gameBoard.boardArray.push('');
                }
                gameBoard.gameCounter = 0;
            }
        })
    }
    
    function declareWinner(winner) {
        winnerCaps = winner.toUpperCase();
        opacity = '.2';
        gameboardContainer.style.opacity = opacity;
        playerOneLabel.style.opacity = opacity;
        playerTwoLabel.style.opacity = opacity;
        winnerExists.value = true;
        scorebug.textContent = `${winnerCaps} WINS!`
    }

    function declareDraw() {
        console.log('its a draw')
        gameBoard.gameCounter = 0;
    }

    function endGame() {
        
    }

    return {activePlayer, playerOne, playerTwo, checkWinner, declareWinner, declareDraw, winnerExists, endGame}
})();