const gameBoard = (function () {

    let gameGrid = document.getElementById('gameGrid');
    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'O' ];
    function createBoard() {
        gameGrid.classList.add('#gameGrid')
        for(let i = 0; i < 9; i++){
                let gridCell = document.createElement('button');
                gridCell.className = 'gridCell';
                gridCell.textContent = board[i];
                gridCell.value = i;
                gameGrid.appendChild(gridCell);
                gridCell.addEventListener('click', markCell);
        }
    }
    function markCell() {
        console.log('Cell ' + this.value + ' has been clicked');
    }
    function boardObject() {
        console.log(board);
    }





    return {boardObject, createBoard};
})();
gameBoard.createBoard()
gameBoard.boardObject()

const displayController = (function (playerOneName = "Player One", playerTwoName = "Player Two") {

    const players = [
        { 
            name: playerOneName,
            marker: 'X'
        },
        { 
            name: playerOneName,
            marker: 'O'
        }
    ]
    let activePlayer = players[0];

    const switchPlayerTurn = function() {
        if(activePlayer === players[0]){
            activePlayer = players[1]
            return;
        }
        if(activePlayer === players[1]){
            activePlayer = players[0]
            return;
        }
    }
})();
