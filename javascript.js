const gameBoard = (function () {

    let gameGrid = document.getElementById('gameGrid');
    let board = ['1', '1', '1', '4', '5', '6', '7', '8', '9' ];
    const cells = Array.from(document.querySelectorAll('.gridCell'));
    let winner = null;

    const refreshBoard = function() {
        board.forEach(function (mark, idx) {
            cells[idx].textContent = board[idx];
        });
    };


    function boardObject() {
        let boardDisplay = board;
        console.log(boardDisplay)
        return boardDisplay;
    }

    const winCondition = function() {
        for(let i = 0; i < 9; i++){ 
                if(board.includes('') != true){
                    winner = 'Tie'
                }
                if(board[0] === board[1] && board[1] === board[2] && board[i][0] != ''){
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




    return {boardObject, refreshBoard, gameGrid, winCondition};
})();
gameBoard.boardObject()
gameBoard.refreshBoard()
gameBoard.winCondition()
const displayController = (function (playerOne = "Player One", playerTwo= "Player Two") {

    const players = [
        { 
            name: playerOne,
            markerOne: 'X'
        },
        { 
            name: playerTwo,
            markerTwo: 'O'
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
