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
    const isX = (sign) => sign == "X"
    const winCondition = (gameBoard) => {
        // return gameBoard.board[0].every(isX)
        let first_col =  gameBoard.board.map(x => x[0])
        return first_col.every(isX)

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
}






gameBoard.addSign("X", 0, 0)
gameBoard.addSign("X", 0, 1)
gameBoard.addSign("X", 0, 2)
gameBoard.addSign("X", 1, 0)
gameBoard.addSign("X", 2, 0)

console.log(gameBoard.board)
console.log(gameController.winCondition(gameBoard))
console.log(getMainDiagonal(gameBoard.board))