function player (name, sign){
    const getName = () => name
    const getSign = () => sign


    return {getName, getSign};
}


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

const gameController = (() =>{
    const isX = (sign) => sign === "X"
    let haveWinner = false
    const winCondition = (gameBoard) => {
        // for (let k = 0; k < gameBoard.length; k++){
        //     gameBoard.board[0].every(isX)
        // }
        for (let k = 0; k < gameBoard.board.length; k++){

            let columnCheck = gameBoard.board.map(x => x[k])
            let diagonal = getMainDiagonal(gameBoard.board)
            let backDiagonal = getAntiDiagonal(gameBoard.board)

            if (gameBoard.board[k].every(isX) == true || columnCheck.every(isX) == true || diagonal.every(isX) == true || backDiagonal.every(isX)){
                haveWinner = true;
            }
        }
        return haveWinner
        
        // for (k = 0; k < gameBoard.length; k++){
        //     var won = gameBoard.board[k].every(isX("X"))
        //     console.log(won)

        // }
        // let first_col =  gameBoard.board.map(x => x[0])
        // return first_col.every(isX)

    }
    
    return {winCondition}
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
gameBoard.addSign("X", 0, 0)

gameBoard.addSign("X", 0, 2)


gameBoard.addSign("X", 1, 0)
gameBoard.addSign("O", 2, 0)
gameBoard.addSign("X", 1, 1)
gameBoard.addSign("0", 2, 2)

console.log(gameBoard.board)
console.log(gameController.winCondition(gameBoard))




