const gameBoard = (() =>{
    let rows = 3
    let cols = 3
    let board = []

    
    for (let i = 0; i < rows; i++){
        board[i] = []
        for (let j = 0; j < cols; j++){
            board[i][j] = i * cols + j
        }
    }

   const addSign = (sign, row, col) => {
        board[row][col] = sign
    }

    return {board, addSign}
    

})();

const gameController = ((playerOneName = "Player One", playerTwoName = "Player Two") =>{


    const players = [
        {
            Name: playerOneName,
            Token: "X"
        },
        {
            Name: playerTwoName,
            Token: "O"
        }
    ]
    let activePlayer = players[0]

    let switchPlayerTurn = () =>{
        activePlayer = players[0] === activePlayer ? players[1] : players[0]
    }

    let getActivePlayer = () => activePlayer

    let printNewRound = () => {
        console.log(gameBoard.board)
        console.log(`${getActivePlayer().Name}'s turn`)
    }

    let playRound = (row, column) => {
        console.log(`${getActivePlayer().Name} placed ${getActivePlayer().Token} in ${row} row, ${column} column`)
        gameBoard.addSign(getActivePlayer().Token, row, column)

        switchPlayerTurn()
        printNewRound()
    }

    printNewRound()

    const isX = (sign) => sign === "X"
    let haveWinner = false
    const winCondition = (gameBoard) => {
        for (let k = 0; k < gameBoard.board.length; k++){

            let columnCheck = gameBoard.board.map(x => x[k])
            let diagonal = getMainDiagonal(gameBoard.board)
            let backDiagonal = getAntiDiagonal(gameBoard.board)

            if (gameBoard.board[k].every(isX) || columnCheck.every(isX) || diagonal.every(isX) || backDiagonal.every(isX)){
                haveWinner = true;
            }
        }
        return haveWinner
    }

    return {playRound, getActivePlayer, winCondition}



    
})();

const getMainDiagonal = (board) =>{
    let diagonal = [];
    for (let i = 0; i < board.length; i++) {
        diagonal.push(board[i][i]);
    }
    return diagonal;

}

const getAntiDiagonal = (board) => {
    let antiDiagonal = []
    for (let i = 0; i < board.length; i++){
        antiDiagonal.push(board[i][board.length - 1 - i])
    }
    return antiDiagonal
}




