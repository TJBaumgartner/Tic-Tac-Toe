const createGameBoard = (function () {

    let gameGrid = document.getElementById('gameGrid');
    let board = ['', '', '', '', '', '', '', '', '' ];
    const cells = Array.from(document.querySelectorAll('.gridCell'));

    const refreshBoard = function() {
        board.forEach(function (mark, idx) {
            cells[idx].textContent = board[idx];
        });
    };


    const winCondition = function() {
        let winner = null
        for(let i = 0; i < 9; i++){ 
                if(board.includes('') != true){
                    winner = 'Tie'
                }
                if(board[0] === board[1] && board[1] === board[2] && board[0] != ''){
                    winner = 'currentPlayer';
                }
                if(board[3] === board[4] && board[4] === board[5] && board[3] != ''){
                    winner = 'currentPlayer';
                }
                if(board[6] === board[7] && board[7] === board[8] && board[6] != ''){
                    winner = 'currentPlayer';
                }
                if(board[0] === board[3] && board[3] === board[6] && board[0] != ''){
                    winner = 'currentPlayer';
                }
                if(board[1] === board[4] && board[4] === board[7] && board[1] != ''){
                    winner = 'currentPlayer';
                }
                if(board[2] === board[5] && board[5] === board[8] && board[2] != ''){
                    winner = 'currentPlayer';
                }
                if(board[0] === board[4] && board[4] === board[8] && board[0] != ''){
                    winner = 'currentPlayer';
                }
                if(board[2] === board[4] && board[4] === board[6] && board[2] != ''){
                    winner = 'currentPlayer';
                }
        }
        return winner;
    }
    return {board, refreshBoard, gameGrid, winCondition, cells};
})();

const displayController = (function (playerOne = "Player One", playerTwo= "Player Two") {

    const gameBoard = createGameBoard;
    const players = [
        { 
            name: playerOne,
            marker: 'X'
        },
        { 
            name: playerTwo,
            marker: 'O'
        }
    ]

    const playTurn = (board, cell) => {
        const idx = board.cells.findIndex(position => position === cell);
        if (createGameBoard.board[idx] === '') {
          createGameBoard.refreshBoard();
          return idx;
        }
        return null;
      };

    let activePlayer = players[0];


    const cell = Array.from(document.querySelectorAll('.gridCell'));
    const winnerDisplay = document.getElementById('displayWinner');

    const startRound = function() {
        cell.forEach((cell) => {
            cell.classList.add('active');
            cell.addEventListener('click', (event) => {
                event.preventDefault();
                const play = playTurn(createGameBoard, event.target);
                if(cell.classList.contains('active') != true){
                    return;
                }
                if(activePlayer == players[0]){
                    console.log(gameBoard.board)
                    cell.classList.remove('active');
                    gameBoard.board[play] = players[0].marker;
                    gameBoard.refreshBoard();
                    if(gameBoard.winCondition() == 'currentPlayer'){
                        winnerDisplay.textContent = activePlayer.name + ' Wins!';
                        resetActive();
                        return;
                    }
                    if(gameBoard.winCondition() == 'Tie'){
                        winnerDisplay.textContent = 'Tie Game!';
                        resetActive();
                        return;
                    }
                    switchPlayerTurn();
                    return;
                }
                if(activePlayer == players[1]){
                    cell.classList.remove('active');
                    gameBoard.board[play] = players[1].marker;
                    gameBoard.refreshBoard();
                    if(gameBoard.winCondition() == 'currentPlayer'){
                        winnerDisplay.textContent = activePlayer.name + ' Wins!';
                        resetActive();
                        return;
                    }
                    if(gameBoard.winCondition() == 'Tie'){
                        winnerDisplay.textContent = 'Tie Game!';
                        resetActive();
                        return;
                    }
                    switchPlayerTurn();
                    return;
                }
            });
        });
    }
    const restartGame = function() {
        gameBoard.board.forEach((element, index) => {
            gameBoard.board[index] = '';
        });
        activePlayer = 'none';
        gameBoard.refreshBoard(); 
        switchPlayerTurn();
        startRound();


    }

    const resetActive = function() {
        cell.forEach((cell) => {
            cell.classList.remove('active');
        });
    }

    const playRound = function () {
        startRound();
    }

    
    const switchPlayerTurn = function() {
        if(activePlayer === 'none'){
            activePlayer = players[0];
            return;
        }
        if(activePlayer === players[0]){
            activePlayer = players[1]
            return;
        }
        if(activePlayer === players[1]){
            activePlayer = players[0]
            return;
        }
    }
    return {playRound, restartGame}
})();
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', displayController.playRound);
const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', displayController.restartGame);